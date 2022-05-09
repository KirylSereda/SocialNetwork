import { useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion/accordion/Accordion";
import { OnOff } from "./components/Accordion/onOff/onOff";
import { UncontrolledOnOff } from "./components/Accordion/onOff/UncontrolledOnOff";
import Rating from "./components/Accordion/Rating/Rating";
import UncontrolleRating from "./components/Accordion/Rating/UncontrolledRating";


function App() {

  let [ratingValue, setRatingValue] = useState<number>(0)
  let [accordionCollapsed, setaccordionCollapsed] = useState<boolean>(false)
  let [switchOn, setSwitchOn] = useState(false)
  return (
    <div className="App">

      <Rating value={ratingValue} onClick={setRatingValue} />
      <UncontrolleRating />

      <Accordion titleValue={'Menu'}
        collapsed={accordionCollapsed}
        onChange={() => setaccordionCollapsed(!accordionCollapsed)} />


      {/* <OnOff on={switchOn} onChange={setSwitchOn} /> */}
      <UncontrolledOnOff onChange={setSwitchOn} />{switchOn.toString()}
      {/* <UncontrolledAccordion titleValue={"Menu"} />  */}


      {/* <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} /> */}
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
