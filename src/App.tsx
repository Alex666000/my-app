import React from "react";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/Accordion/UnControlledAccordion";
import {Rating} from "./components/Rating/Rating";
import {UnControlledRating} from "./components/Rating/UnControlledRating";

const App = (props: any) => {
    console.log("App rendered")

    return (
        <div className={"App"}>
            {/*<OnOff/>*/}

            <UnControlledAccordion title={"Menu"}/>
            <UnControlledAccordion title={"Users"}/>

            {/* <Accordion title={"Menu"} collapsed={true}/>
            <Accordion title={"Users"} collapsed={false}/>
            <div>--------------------</div>

            чтобы горело от 1 до 5 звезд
            */}

            {/*<Rating value={1}/>*/}`
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

            {/*<UnControlledRating/>*/}
            {/*<UnControlledRating/>*/}
            {/*<UnControlledRating/>*/}
            {/*<UnControlledRating/>*/}
            {/*<UnControlledRating/>*/}
        </div>
    );
}

export default App

