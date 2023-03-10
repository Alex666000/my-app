import React, {useState} from "react";

type PropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

export const OnOff = (props: PropsType) => {
    console.log("on " + props.on)

    // let [on, setOn] = useState(false)
    // const on = false

    // styles
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: props.on ? "green" : "white",
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "3px",
        backgroundColor: props.on ? "white" : "red",
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid",
        marginLeft: "5px",
        display: "inline-block",
        backgroundColor: props.on ? "green" : "red",
    }

    return (
        <div>
            <div onClick={() => {
                // setOn(true)  -- true придет в параметры родителя
                props.onChange(true)
            }}
                 style={onStyle}>On
            </div>

            <div onClick={() => {
                // setOn(false)   -- false придет в параметры родителя
                props.onChange(false)
            }}
                 style={offStyle}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
};
