import s from './onOff.module.css'
type OnOffProps = {
    turn: boolean
}

export const OnOff = (props: OnOffProps) => {
    return (<div className={s.contener}>
        <div className={s.onandOff}>
            On
        </div>
        <div className={s.onandOff}>
            Off
        </div>
        <div
            className={props.turn ? s.circleOn : s.circle}> </div>
    </div>)
}