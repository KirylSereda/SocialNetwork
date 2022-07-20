
import React from "react";
import { Clock } from "./Clock";

export default {
    tittle: 'Clock',
    component: Clock,
}



export const BaseAnalogExampleee = () => {
    return <Clock mode={'analog'} />
}

export const BaseDigitalExample = () => {
    return <Clock mode={'digital'} />
}