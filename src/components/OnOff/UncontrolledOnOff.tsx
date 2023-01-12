import React, {useState} from "react";

type PropsType = {
    // on: boolean
    onChange: (on: boolean) => void
}

export const UncontrolledOnOff = (props: PropsType) => {
    console.log("OnOff rendered")

    let [on, setOn] = useState(false)
    // const on = false

    // styles:
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: on ? "green" : "white",
    }
    
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "3px",
        backgroundColor: on ? "white" : "red",
    }

    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid",
        marginLeft: "5px",
        display: "inline-block",
        backgroundColor: on ? "green" : "red",
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }

    const ofClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div onClick={onClicked}
                 style={onStyle}>On
            </div>

            <div onClick={ofClicked}
                 style={offStyle}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
};
