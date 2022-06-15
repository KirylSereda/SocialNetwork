import { KeyboardEvent, useEffect, useState } from "react";
import style from "./Select.module.css"

export type ItemType = {
    title: string,
    value: string
}

type SelectProps = {
    value?: string | null;
    onChange: (value: any) => void
    items: ItemType[]
};


export function Select(props: SelectProps) {
    const [active, setActive] = useState(true)
    const [hoveredElementValue, setHovereElementValue] = useState(props.value)
    const togleItems = () => {
        setActive(!active)
    }

    const onItemClick = (value: any) => {
        props.onChange(value)
        togleItems()
    }

    useEffect(() => { setHovereElementValue(props.value) }
        , [props.value])



    const selectedItem = props.items.find(i => i.value == props.value)
    const hoveredItem = props.items.find(i => i.value == hoveredElementValue)
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const predendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (predendentElement) {
                        props.onChange(predendentElement.value)
                        return;
                    }
                }
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
        if (!selectedItem) {

            props.onChange(props.items[0].value)
        }
    }


    return (
        <>
            <div
                tabIndex={0}
                onKeyUp={(e) => onKeyUp(e)}
                className={`${style.select}`}>
                <span className={style.main} onClick={togleItems}>{selectedItem && selectedItem.title}</span>
                {active && <div className={style.items}>
                    {props.items.map(i => <div
                        onMouseEnter={() => setHovereElementValue(i.value)}
                        className={hoveredItem === i && style.item}
                        key={i.value}
                        onClick={() => onItemClick(i.value)}
                    >{i.title}</div>)}
                </div>}
            </div>
        </>
    );

}