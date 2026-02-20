import React from "react";
import  Button from "@mui/material/Button";

export default function CustomButton({text, variant, color, onClick}){
    return <Button variant="contained" >{text} </Button> 
}

