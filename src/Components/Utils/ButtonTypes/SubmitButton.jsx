import React from "react";
import { MuiButton } from "Components/MUI";

const SubmitButton = ({onClick}) => {
    return (
        <MuiButton 
            label="ACCEPT"
            props={{
                color: "black",
                bgColor: "#3f51b5",
                boxShadow: "2px 2px 23px rgba(0, 0, 0, 0.2) inset",
                hColor: "white",
                hbgColor: "#6495ED"
            }}
            onClick={onClick} />
    )
}

export default SubmitButton;