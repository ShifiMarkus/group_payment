import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
// import react from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { CardGroup } from 'react-bootstrap';
import card from '../../images/card.png';
import './CashList.css';

const CashList = () => {
    const [cashesList, setCashesList] = useState([]);
    const [openCashCard, setOpenCashCard] = useState(true);
    const [date,setDate] = useState();
    const remianing_sum = 50;

    useEffect(() => {
        const fetchData = async () => {
            var res = await fetch(`https://localhost:44320/api/Cashes/${1}`)
            if (res.ok) {
                let data = await res.json()
                setCashesList(data)
            }
        }
        fetchData()
    }, [])

    const createCash = async () => {
        var res = await fetch(`https://localhost:44320/api/Cashes?groupCode=1`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(1)
        })
        if (res.ok) {
            alert("cash created succesfuly")
        }
    }

    const handleCloseCardClick = () => {
        setOpenCashCard(true)
    }

    const handleOpenCardClick = async(cashCode) => {
        setOpenCashCard(false)
        var res=await fetch(`https://localhost:44320/api/Cashes/getCasheDetailes/${19}`)
     
        if(res.ok) {
            console.log(res)
        }
        else{
            console.log('error')
        }
    }

    return (
        <>
            <Grid item xs={12} onClick={() => { console.log("CLICK ME") }}>
                <Button size="small" onClick={() => createCash()}>יצירת סבב תשלומים חדש</Button>
            </Grid>
            {cashesList?.map((item, index) => {
                return (
                    <Grid style={{ marginLeft: '35rem', borderRadius: '2px', borderColor: 'green' }} item xs={12} onClick={() => { console.log("CLICK ME") }} key={index}>
                        <Card sx={{ minWidth: 275 }}>
                            {/* <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {item.groupGoal}
                                </Typography>
                            </CardContent> */}
                            <CardActions>
                                <Button size="small" onClick={()=>handleOpenCardClick(item.cashCode)}>Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            })}

            <Card hidden={!openCashCard} style={{ marginLeft: '-10rem', marginTop: '-30rem', maxWidth: '30vw',minHeight:'65vh', maxHeight: '65vh' }} >
                <CardGroup>
                    <CardContent>צאט עם חברי הקבוצה</CardContent>
                    <CardActions>
                        <Button>ייצוא נתונים לאקסל</Button>
                    </CardActions>
                    <CardContent>הצגת פעולות אחרונות</CardContent>
                </CardGroup>
                <CardActions>
                    <Button>Cash Settings</Button>
                </CardActions>
            </Card>
            <Card hidden={openCashCard} style={{ marginLeft: '-10rem', overflowY: 'scroll', marginTop: '-30rem', maxWidth: '30vw', maxHeight: '65vh' }} >
                <CardGroup style={{ display: 'inline-block' }}>
                    <CardContent>cash name</CardContent>
                    <CardContent>יתרת הקבוצה: {remianing_sum}</CardContent>
                    <CardContent>שילמו</CardContent>
                    <CardContent>סכום מבוקש:</CardContent>
                    <CardContent>תאריך יעד {date}</CardContent>
                    <CardContent>הזמנת חברים</CardContent>
                    <CardContent>תשלום לקבוצה<img className='cardImg' src={card}/></CardContent>
                    <CardContent>משיכת יתרה</CardContent>
                </CardGroup>
                <CardActions>
                    <Button onClick={handleCloseCardClick}>Close</Button>
                </CardActions>
            </Card>
        </>
    )
}
export default CashList;
