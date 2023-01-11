import React from "react";
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

const App = (props: any) => {
    console.log("App rendered")

    return (
        <div>
            <OnOff/>


            {/* <Accordion title={"Menu"} collapsed={true}/>
            <Accordion title={"Users"} collapsed={false}/>
            <div>--------------------</div>

            чтобы горело от 1 до 5 звезд
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
        </div>
    );
}

export default App

