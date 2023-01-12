import React, {useState} from "react";

type RatingPropsType = {
    // value: number
}

export function UnControlledRating(props: RatingPropsType) {
    console.log("Rating rendered")

    const [value, setValue] = useState(0)

    return (
        <div>
            {/*по условию рендеринг - если*/}

            {/*передали колбек внутрь Star*/}
            <Star selected={value > 0} setValue={setValue} value={1}/>
            <Star selected={value > 1} setValue={setValue} value={2}/>
            <Star selected={value > 2} setValue={setValue} value={3}/>
            <Star selected={value > 3} setValue={setValue} value={4}/>
            <Star selected={value > 4} setValue={setValue} value={5}/>

        </div>
    )
}

type StarPropsType = {
    selected: boolean
    value: number
    setValue: (value: number) => void
}

function Star(props: StarPropsType) {
    console.log("Star rendered")

    return (
        // вернем разное содержимое внутри span
        <span onClick={() => {
            props.setValue(props.value)
        }}>{props.selected ? <b>star</b> : "star"}</span>
    )
}

