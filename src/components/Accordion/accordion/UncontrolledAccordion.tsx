import { useState } from "react";

type AccordionPropsType = {
  titleValue: string;
};

function UncontrolledAccordion(props: AccordionPropsType) {
  let [collapsed, setCollapsed] = useState(false)

  return <>
    <AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)} />
    {!collapsed && <AccordionBody />}
  </>
}

type AccordionTitlePropsType = {
  title: string;
  onClick: () => void
};

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3 onClick={props.onClick}>{props.title}</h3>;
}



function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}

export default UncontrolledAccordion;
