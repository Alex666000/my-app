import React, {useState} from "react";

type AccordionPropsType = {
    title: string
    // collapsed: boolean
}

// Accordion
export function UnControlledAccordion(props: AccordionPropsType) {
    console.log("Accordion rendered")

    const [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.title}/>
            <button onClick={() => {
                setCollapsed(!collapsed)
            }}>TOGGLE
            </button>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
}

// AccordionTitle
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendered")

    return <h3>{props.title}</h3>
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
