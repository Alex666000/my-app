import React from "react";


type RatingPropsType = {
    value: number
    onClick: (value: number) => void
}

export function Rating(props: RatingPropsType) {
    console.log("Rating rendered")

    return (
        <div>
            {/*по условию рендеринг - если*/}
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    value: number
    onClick: (value: number) => void

}

function Star(props: StarPropsType) {
    console.log("Star rendered")
    // от дедушки к родителю к детю в самы низ прокинули колбек
    return <span onClick={() => {
        props.onClick(props.value)
    }}>
        {props.selected ? <b>star</b> : "star"}
    </span>
}

