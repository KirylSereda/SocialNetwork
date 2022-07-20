

import React from "react";
type OnOffProps = {
    on: boolean
    onChange: (switchOn: boolean) => void
}

export const OnOff = (props: OnOffProps) => {

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: props.on ? 'white' : 'red'
    }
    const IndicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'
    }

    return (<div>
        <div style={onStyle} onClick={() => props.onChange(true)}>On</div>
        <div style={offStyle} onClick={() => props.onChange(false)}>Off</div>
        <div style={IndicatorStyle} > </div>
    </div>)
}