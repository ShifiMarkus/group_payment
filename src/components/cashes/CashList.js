import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { CardGroup } from "react-bootstrap";
import card from "../../images/card.png";
import "./CashList.css";
import ModeEditTwoToneIcon from "@mui/icons-material/ModeEditTwoTone";
import SaveTwoToneIcon from "@mui/icons-material/SaveTwoTone";
import { downloadExcel } from "react-export-table-to-excel";
import MUIDataTable from "mui-datatables";
import GroupMembers from "../groups/GroupMembers/GroupMembers";
import { useSelector } from "react-redux";

const CashList = () => {
  const [cashesList, setCashesList] = useState([]);
  const [paymentsData, setPaymentsData] = useState([]);
  const [openCashCard, setOpenCashCard] = useState(true);
  const [cashesData, setCashesData] = useState(null);
  const [editCash, setEditCash] = useState(false);
  const [recentActions, setRecentActions] = useState(false);
  const [objToEdit, setObjToEdit] = useState({
    paidMembers: "",
    Deadline: "",
  });
  const currentGroupId = useSelector((state) => state.group?.currentGroupId);

  const options = {
    selectableRows: "none",
    filterType: "dropdown",
  };
  const header = [
    {
      name: "",
      label: "",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tabelMeta) => {
          debugger;
          return <>{tabelMeta.rowIndex}</>;
        },
      },
    },
    {
      name: "name",
      label: "שם פרטי",
      options: {
        filter: true,
        sort: true,
      },
    },
    "sumPaid",
    "sumToPay",
  ];

  const excelHeaders = ["name", "paid", "haveToPay"];
  async function handleDownloadExcel() {
    debugger;
    var res = await fetch(
      `https://localhost:44320/api/Cashes/getDataToDownload/${currentGroupId}/${1}`
    );
    if (res.ok) {
      var data = await res.text();
      console.log(data);
      downloadExcel({
        fileName: "myFile.xlsx",
        sheet: "Sheet1",
        tablePayload: {
          excelHeaders,
          body: data,
        },
      });
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      var res = await fetch(`https://localhost:44320/api/Cashes/${currentGroupId}`);
      if (res.ok) {
        let data = await res.json();
        setCashesList(data);
      }
    };
    fetchData();
  }, []);

  const showRecentActions = async () => {
    var res = await fetch(
      `https://localhost:44320/api/Payments/getRecentActions/${currentGroupId}`
    );
    if (res.ok) {
      var data = await res.json();
      setPaymentsData(data);
      setRecentActions(true);
    } else {
      console.log("error get recenr actions");
    }
  };

  const createCash = async () => {
    var res = await fetch(`https://localhost:44320/api/Cashes?groupCode=${currentGroupId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(1),
    });
    if (res.ok) {
    }
  };

  const handleCloseCardClick = () => {
    setOpenCashCard(true);
  };
  const onChange = (selected, key) => {
    setObjToEdit((prev) => ({ ...prev, [key]: selected }));
  };

  const handleChange = async () => {
    var res = await fetch(`https://localhost:44320/api/Cashes/${1}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objToEdit),
    });
    if (res.ok) {
    }
  };
  const handleOpenCardClick = async (cashCode) => {
    setOpenCashCard(false);
    var res = await fetch(
      `https://localhost:44320/api/Cashes/getCasheDetailes/${19}`
    );

    if (res.ok) {
      var data = await res.json();
      setCashesData(data);
      console.log(data);
    } else {
      console.log("error");
    }
  };
  const styles = {
    box: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    },
    progress: {
      justifyContent: "center",
      margin: "20px",
    },
  };

  return (
    <>
      <Grid item xs={12} position={"absolute"}>
        <ul className="ul">
          <li className="li">
            <Button onClick={handleDownloadExcel}>ייצוא נתונים לאקסל</Button>
          </li>
          <li className="li">
            {!recentActions ? (
              <Button onClick={() => showRecentActions()}>
                הצגת פעולות אחרונות
              </Button>
            ) : (
              <Button onClick={() => setRecentActions(false)}>
                הסתרת פעולות אחרונות
              </Button>
            )}
          </li>
          <li className="li">
            <Button>עריכת הגדרות הקבוצה</Button>
          </li>
          <li className="li">
            <Button onClick={() => createCash()}>יצירת סבב תשלומים חדש</Button>
          </li>
        </ul>
      </Grid>
      <div className="left-cash-panel">
        <GroupMembers />
      </div>
      <Card
      className="cashes-card"
        style={{ overflowY: "scroll" }}
      >
        {cashesList.length > 0?(
        cashesList?.map((item, index) => {
          return (
            <Grid
              style={{
                marginLeft: "35rem",
                borderRadius: "2px",
                borderColor: "green",
              }}
              item
              xs={12}
              key={index}
            >
              {/* <Card sx={{ minWidth: 275 }}>
                <CardActions > */}
                  <Button className="card-button"
                    size="small"
                    onClick={() => handleOpenCardClick(item.cashCode)}
                  >
                    Learn More
                  </Button>
                {/* </CardActions>
              </Card> */}
            </Grid>
          );
        })):(<Box className={styles.box}>
          {" "}
          <Typography variant="h3">Loading Your's Cashes</Typography>
          <br />
          <CircularProgress className={styles.progress}/>
        </Box>)}
      </Card>

      {recentActions && (
        <MUIDataTable
          title={"פעולות אחרונות"}
          data={paymentsData}
          columns={header}
          options={options}
        />
      )}

      <Card
        dir="rtl"
        hidden={openCashCard}
        style={{
          overflowY: "scroll",
          marginTop: "-62.5vh",
          marginLeft: "3rem",
          maxWidth: "30vw",
          minHeight: "55vh",
          maxHeight: "55vh",
        }}
      >
        <CardGroup style={{ display: "inline-block" }}>
          <IconButton onClick={() => setEditCash(true)}>
            <ModeEditTwoToneIcon />
          </IconButton>
          {editCash && (
            <IconButton onClick={handleChange}>
              <SaveTwoToneIcon />
            </IconButton>
          )}
          <button onClick={handleDownloadExcel}>download excel</button>
          <CardContent>
            {cashesData ? cashesData.GroupGoal : "asder"}
          </CardContent>
          <CardContent>
            יתרת הקבוצה: {cashesData ? cashesData.sumPaid : "ghgg"}
          </CardContent>
          <CardContent>
            שילמו:{" "}
            {!editCash ? (
              cashesData ? (
                cashesData.paidMembers
              ) : null
            ) : (
              <TextField
                type={"number"}
                value={
                  objToEdit.paidMembers !== ""
                    ? objToEdit.paidMembers
                    : cashesData.paidMembers
                }
                onChange={(e) => {
                  onChange(e.target.value, "paidMembers");
                }}
              ></TextField>
            )}
          </CardContent>
          <CardContent>
            סכום מבוקש: {cashesData ? cashesData.GroupSum : "gggg"}
          </CardContent>
          <CardContent>
            תאריך יעד {cashesData ? cashesData.Deadline : "jjjj"}
          </CardContent>
          <CardContent>הזמנת חברים</CardContent>
          <CardContent>
            תשלום לקבוצה
            <img alt="card image" className="cardImg" src={card} />
          </CardContent>
          <CardContent>משיכת יתרה</CardContent>
        </CardGroup>
        <CardActions>
          <Button onClick={handleCloseCardClick}>Close</Button>
        </CardActions>
      </Card>
    </>
  );
};
export default CashList;
