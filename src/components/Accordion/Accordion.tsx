import React from 'react';

type AccordionPropsType = {
    title: string
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendered')

    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendered')

    return <h3>{props.title}</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendered')

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
