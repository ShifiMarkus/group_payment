import { Grid } from "@mui/material";
import React from "react";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
import './Main.css';
import service from "../../files.js/Services";
// import UploadFile from "../../files.js/uploadFiles";
import { Carousel } from "react-bootstrap";
export default function Main(){

    const allUsers = () => {
        // const users = service.getUserById(2)
        // {
        //     console.log(users)
        // }
    }

    const payment = {'CashCode':19,'UserCode':2,'SumToPay':70,'SumPaid':20,'PaymentWay':"credit card",'Confirmation':true}
    const pay = async () =>{
      debugger
      var res = await fetch(`https://localhost:44320/api/Payments`,{
      method: "POST",
      headers:{
      "Content-Type": "application/json",
     },
     body: JSON.stringify(payment)
     })
    }

    return(
        <>
        <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={require('C:/Users/user1/OneDrive/שולחן העבודה/תכנות/פרויקט גמר/group_payment/src/images/cyber-security-protect-safe-concept-closeup-finger-about-press-button-with-security-shield-symbol_127544-1198.webp')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={require('C:/Users/user1/OneDrive/שולחן העבודה/תכנות/פרויקט גמר/group_payment/src/images/mobile-cashback-concept-with-smartphone_23-2148462831.webp')}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('C:/Users/user1/OneDrive/שולחן העבודה/תכנות/פרויקט גמר/group_payment/src/images/PayInGroup_bg2.webp')}
          alt='asdfg'       
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    
        <button onClick={()=>service.sendEmailSignUp()}>send email</button>
        <button onClick={()=>pay()}>pay</button>
        {/* <button onClick={()=>UploadFile()}>upload file</button> */}
        <Grid>
        <MDBContainer className="mt-5" style={{maxWidth: '1000px'}}>
      <MDBAccordion alwaysOpen initialActive={1}>
        <MDBAccordionItem collapseId={1} headerTitle="Question #1">
          <strong>This is the first item's accordion body.</strong> It is shown
          by default, until the collapse plugin adds the appropriate classes
          that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You
          can modify any of this with custom CSS or overriding our default
          variables. It's also worth noting that just about any HTML can go
          within the <code>.accordion-body</code>, though the transition does
          limit overflow.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="האם השימוש ב-Pay In Group עולה כסף?   " dir='rtl'>
          <strong>השימוש בשירות הינו חינם לחלוטין, </strong> ללא עמלות, ללקוחות כל הבנקים!
           עם זאת, אם מעבירים כסף לחשבון בנק שמחויב בעמלות שורה - גם ההעברה הזו תחויב בעמלה הנהוגה בחשבון. ב-PayBox יש שתי אפשרויות לחסוך את העמלה הזאת: 1. העברת הכסף לכרטיס אשראי 2. צבירת הכסף ביתרה האישית באפליקציה לשימוש עתידי
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle="איך מעבירים כסף למשתמש אחר?" dir='rtl'>
        לוחצים על 'העברה' במסך הבית בבר הניווט התחתון, בוחרים למי רוצים לשלם מתוך רשימת אנשי הקשר, מזינים סכום, בוחרים את צורת התשלום הרצויה, לוחצים על 'שליחת תשלום' - וזהו! הכסף הועבר. מקבל הכסף יצטרך לאשר את התשלום תוך 72 שעות כדי שהכסף יעבור אליו.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={4} headerTitle="איך פותחים קבוצה ב-Pay In Group?" dir='rtl'>
        <strong> כדי ליצור קבוצה חדשה, פשוט לוחצים על 'יצירת קבוצה' בבר הניווט העליון במסך הבית. </strong>
               ממלאים כמה פרטים לגבי הקבוצה, מזמינים חברים מרשימת אנשי הקשר או משתפים את הקישור - ויוצאים לדרך. חשוב לזכור שברגע שיצרת קבוצה, הפכת למנהלים שלה. בהצלחה! 
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={5} headerTitle="כמה חשבונות ניתן ליצור ב-Pay In Group?" dir='rtl'>
            חשבון ה-Pay In Group הוא חשבון אישי ופרטי שמזוהה עם תעודת הזהות שמקושרת למספר הטלפון שלך. אי אפשר לפתוח יותר מחשבון אחד עם אותה תעודת זהות.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={6} headerTitle="איך מבקשים ממישהו להעביר לי כסף?" dir="rtl">
        לוחצים על 'בקשה' במסך הבית, בוחרים את מי שרוצים מתוך רשימת אנשי הקשר (לחלופין אפשר להקליד כל מספר טלפון באמצעות מקש + שבפינה השמאלית למעלה),
         מזינים סכום, לוחצים על 'בקשה' - וזהו! בקשת ההעברה נשלחה. מי שממנו ביקשתם להעביר יקבל הודעת אימייל שתודיע לו על הבקשה.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={7} headerTitle="ייצוא נתונים ל-Excel" dir="rtl">
        מאפשר לכם לייצא דוחות אקסל ישירות לכתובת האימייל איתה נרשמתם לאפליקציה.
        <br/>
        <strong>ייצוא העברות:</strong>
        מייצא דו"ח אודות פירוט התשלומים בקבוצה. ייצוא הדו"ח אפשרי רק לאחר ששולם כסף בקבוצה.
        <br/>
        <strong>ייצוא חברי קבוצה:</strong>
        מייצא דו״ח אודות חברי הקבוצה (שם חבר, מספר טלפון, סטטוס).
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={8} headerTitle="התחל סבב תשלומים חדש" dir="rtl">
        מאפשר להגדיר סכום תשלום מבוקש חדש עבור כל חברי הקבוצה. ההגדרה המחודשת לא תשפיע על יתרת הקבוצה או על תשלומים שכבר בוצעו בקבוצה.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={9} headerTitle="הזמן חברים" dir="rtl">
        מאפשר להזמין אנשים לקבוצה שטרם הצטרפו לקבוצה. תישלח להם הודעה עם קישור להצטרפות לקבוצה
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={10} headerTitle="שליחת תזכורות" dir="rtl">
        מאפשר לכם לשלוח תזכורות לחברי הקבוצה שעוד לא שילמו את הסכום הנדרש. התזכורת נשלחת באותו רגע.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={11} headerTitle="תזכורות חוזרות" dir="rtl">
        מאפשר לכם להגדיר שליחת תזכורות במועד קבוע (תזכורת חודשית או תזכורת שבועית). התזכורת תישלח בשעה 8:00 בבוקר במועד שנבחר.
        </MDBAccordionItem>
      </MDBAccordion>
    </MDBContainer>
        </Grid>
        <button onClick={()=>allUsers()}>see all users</button>
        </>
    )
}