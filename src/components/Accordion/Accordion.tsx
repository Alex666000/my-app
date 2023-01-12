import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onClick: (accordionCollapsed: boolean) => void
}

// Accordion
export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendered")

    return (
        <div>
            <AccordionTitle title={props.title} onClick={props.onClick} collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: (accordionCollapsed: boolean) => void
    collapsed: boolean

}

// AccordionTitle
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendered")

    return <h3 onClick={() => {
        props.onClick(!props.collapsed)
    }}>{props.title}</h3>
}

// AccordionBody
function AccordionBody() {
    console.log("AccordionBody rendered")

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
