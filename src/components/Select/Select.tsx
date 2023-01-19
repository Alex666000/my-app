import React, {useState, KeyboardEvent} from "react";
import s from "./Select.module.css"

type ItemType = {
    title: string
    value?: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false)

    // стейт для подсветки элемента - на который НАВЕЛАСЬ мышка - со старта value которое пришло из вне
    const [hovered, setHovered] = useState(props.value)

    const selectedItem = props.items.find(item => item.value === props.value)
    const hoveredItem = props.items.find(item => item.value === props.value)

    const toggleItems = () => setActive(!active)

    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {

    }

    return (
        <>
            {/*<select>*/}
            {/*    <option value={""}>Minsk</option>*/}
            {/*    <option value={""}>Moscow</option>*/}
            {/*    <option value={""}>Kiev</option>*/}
            {/*</select>*/}

            {/* класс select всегда, а класс active если активен элемент*/}
            {/*.select.active*/}
            {/*если активный то добавь класс s.active иначе...* (active ? s.active : '') }*/

            <div className={s.select + ' ' } onKeyUp={ onKeyUp } tabIndex={0}>
                <div>
                    <span className={s.main} onClick={toggleItems}>
                                           {/*условный рендеринг*/}
                        {selectedItem && selectedItem.title} </span>
                    {/*делаем div невидимой или видимой*/}

                    {active &&
                        <div className={s.items}>
                            {props.items.map(i =>
                                <div className={s.item + "" + (hovered === i ? s.selected : "")}
                                     key={i.value}
                                     onClick={onItemClick}
                                    // когда мышка навелась на элемент
                                     onMouseEnter={ () => {setHovered(i.value)} }
                                >{i.title}
                                </div>)}
                        </div>
                    }
                </div>
            </div>
        </>
    );
}