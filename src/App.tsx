import "./App.css";
import Accordion from "./components/Accordion/accordion/Accordion";
import UncontrolledAccordion from "./components/Accordion/accordion/UncontrolledAccordion";
import { OnOff } from "./components/Accordion/onOff/onOff";
import Rating from "./components/Accordion/Rating/Rating";
import UncontrolleRating from "./components/Accordion/Rating/UncontrolleRating";

function App() {
  return (
    <div className="App">
      <OnOff />

      <UncontrolledAccordion titleValue={"Menu"} />
      <Accordion titleValue={'Menu'} collapsed={true} />
      <UncontrolleRating />
      <Rating value={3} />
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
