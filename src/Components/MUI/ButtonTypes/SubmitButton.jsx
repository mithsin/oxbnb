import React from "react";
import { MuiButton } from "Components/MUI";

const SubmitButton = ({disabled, onClick}) => {
    return (
        <MuiButton 
            label="SUBMIT"
            props={{
                color: "black",
                bgColor: "#3f51b5",
                boxShadow: "2px 2px 23px rgba(0, 0, 0, 0.2) inset",
                hColor: "white",
                hbgColor: "#6495ED"
            }}
            { ...disabled && {disabled: disabled}}
            onClick={onClick} />
    )
}

export default SubmitButton;