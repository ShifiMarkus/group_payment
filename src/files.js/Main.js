import React from "react";
// import Nav from "./nav";
import '../files.css/Main.css';
import service from "./Services";

export default function Main(){

    const user = service.getUserById(2);

    return(
        <>
        <div>Home Page</div>
        {console.log(user)}
        <div>hello </div>
        </>
    )
}