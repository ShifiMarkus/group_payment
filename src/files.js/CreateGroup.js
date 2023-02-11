import React from "react";
import Nav from "./nav";
// import Form from 'react-bootstrap/Form';
import '../files.css/CreateGroup.css'
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
// import { Button } from "react-bootstrap";
import Button from '@mui/material/Button';
import { IconButton } from "@mui/material";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export  default function CreateGroup(){

    let islogin = true;
    const navigate = useNavigate();
    const [value, setValue] = React.useState('public');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    function login(){
        navigate('/login',{ state: { id: 1, mode: "login" } });
    }

    if(islogin)
    { return(
        <>
        {/* <Nav></Nav> */}
        <Form className="form">
        <Form.Group>
            <Form.Label>Group Name: </Form.Label>
            <Form.Control placeholder="E.g. Gift For Birth Day"/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Leader Name: </Form.Label>
            <Form.Control placeholder="E.g. Israel Israeli"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"/>
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>
        <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Type Of Group</FormLabel>
      <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group" name="controlled-radio-buttons-group" value={value} onChange={handleChange}>
        <FormControlLabel value="public" control={<Radio />} label="public" />
        <FormControlLabel value="private" control={<Radio />} label="private" />
      </RadioGroup>
    </FormControl>
        </Form>
        <Button variant="contained" component="label">Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
        <IconButton color="primary" aria-label="upload picture" component="label">
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
        </IconButton>
        <br/>
        <Button onClick={()=>login()} >let's create!!</Button>
        </>
    )}
    else {
        return( 
        <>
        {/* <Nav></Nav> */}
        <div>You have to login first</div>
        <button onClick={()=>login()}> login</button>
        </>)
    };


}