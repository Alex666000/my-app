import React, {useState} from "react";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/Accordion/UnControlledAccordion";
import {Rating} from "./components/Rating/Rating";
import {UnControlledRating} from "./components/Rating/UnControlledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";

const App = (props: any) => {
    console.log("App rendered")

    const [ratingValue, setRatingValue] = useState(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState(false)
    const [switchOn, setSwitchOn] = useState(false)


    return (
        <div className={"App"}>

            {/*колбек в контролируемой компоненте*/}
            <OnOff on={switchOn} onChange={setSwitchOn}/>

            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}

            {/*<UnControlledAccordion title={"Menu"}/>*/}
            {/*<UnControlledAccordion title={"Users"}/>*/}

            {/*<Accordion title={"Menu"}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onClick={setAccordionCollapsed}/>*/}
            {/*<div>--------------------</div>*/}


            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}


            {/*<UnControlledRating />*/}
            {/*<UnControlledRating/>*/}
            {/*<UnControlledRating/>*/}
            {/*<UnControlledRating/>*/}
            {/*<UnControlledRating/>*/}
        </div>
    );
}

export default App

