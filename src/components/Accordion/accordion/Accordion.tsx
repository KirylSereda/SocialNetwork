import { UserType } from "../../../App";

export type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
  onChange: () => void
  /**
   * Elements that are showed when accordion is opened (not collapsed)
   */
  items: UserType[]
  /**
   * Callback that is colled when any item clicked
   * @param value is value of clicked item
   */
  onClick: (value: any) => void
  /**
   *  optionak color of header text
   */
  color: string

};

export function Accordion(props: AccordionPropsType) {
  return <>
    <AccordionTitle title={props.titleValue} onChange={props.onChange} color={props.color} />
    {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick} />}
  </>
}

type AccordionTitlePropsType = {
  title: string;
  onChange: () => void
  color: string
};

type AccordionBodyPropsType = {
  items: UserType[]
  onClick: (value: any) => void
};

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3 style={{ color: props.color ? props.color : 'black' }}
    onClick={props.onChange}>{props.title}</h3>;
}

function AccordionBody(props: AccordionBodyPropsType) {
  return (
    <ul>
      {props.items.map((u) => {
        return <li key={u.id} onClick={() => { props.onClick(u.name) }}>{u.name}</li>
      })}
    </ul>
  );
}

