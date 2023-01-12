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
            {/*-----------------------------------------------------------------------------*/}
            {/*передаем стрелочную функцию внутрь AccordionTitle = колбек*/}
            <AccordionTitle title={props.title} onClick={() => {
                setCollapsed(!collapsed)
            }}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

// AccordionTitle
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendered")
// колбек вызвали -----------------------------------------
    return <h3 onClick={() => props.onClick()}>{props.title}</h3>
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
