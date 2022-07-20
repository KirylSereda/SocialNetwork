import { useState } from "react";
import "./App.css";
import React from "react";
import Rating from "./components/Rating/Rating";
import UncontrolleRating from "./components/Rating/UncontrolledRating";
import { Accordion } from "./components/Accordion/Accordion";
import { UncontrolledOnOff } from "./components/onOff/UncontrolledOnOff";
import { Clock } from "./components/Clock/Clock";
export type UserType = {
  id: number,
  name: string
}

function App() {

  let [ratingValue, setRatingValue] = useState<number>(0)
  let [accordionCollapsed, setaccordionCollapsed] = useState<boolean>(false)
  let [switchOn, setSwitchOn] = useState(false)


  const onClick = () => {
    alert('Hi')
  }
  const users: UserType[] = [
    { id: 1, name: 'Kiryll' },
    { id: 2, name: 'Andrya' },
    { id: 3, name: 'Katya' }
  ]

  return (
    <div className="App">

      <Rating value={ratingValue} onClick={setRatingValue} />
      <UncontrolleRating />

      <Accordion titleValue={'Menu'}
        collapsed={accordionCollapsed}
        items={users}
        color={'Red'}
        onChange={() => setaccordionCollapsed(!accordionCollapsed)}
        onClick={onClick}
      />
      <UncontrolledOnOff onChange={setSwitchOn} />{switchOn.toString()}

    </div>
  );
}

type PageTitlePropsType = {
  titleValue: string;
};

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.titleValue}</h1>;
}

export default App;
