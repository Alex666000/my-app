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

    return (
        <div>
            <div onClick={() => {
                //  изменю свой локальный стейт и вызову колбек со значением своим локальным
                //  и это локальное значение придет в родителя
                //  по-прежнему ты меня не контролируешь - я вас уведомляю, что во мне что-то меняется
                setOn(true)
                props.onChange(true)
            }}
                 style={onStyle}>On
            </div>

            <div onClick={() => {
                setOn(false)
                props.onChange(false)
            }}
                 style={offStyle}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
};
