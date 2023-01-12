import React, {useState} from "react";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/Accordion/UnControlledAccordion";
import {Rating} from "./components/Rating/Rating";
import {UnControlledRating} from "./components/Rating/UnControlledRating";

const App = (props: any) => {
    console.log("App rendered")

    const [ratingValue, setRatingValue] = useState(0)

    return (
        <div className={"App"}>
            {/*<OnOff/>*/}

            {/*<UnControlledAccordion title={"Menu"}/>*/}
            {/*<UnControlledAccordion title={"Users"}/>*/}

            {/* <Accordion title={"Menu"} collapsed={true}/>
            <Accordion title={"Users"} collapsed={false}/>
            <div>--------------------</div>

            чтобы горело от 1 до 5 звезд
            */}

            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}


            <UnControlledRating onClick={se}/>
            <UnControlledRating/>
            <UnControlledRating/>
            <UnControlledRating/>
            <UnControlledRating/>
        </div>
    );
}

export default App

