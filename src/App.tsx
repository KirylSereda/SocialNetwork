import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import { OnOff } from "./components/Accordion/onOff/onOff";
import Rating from "./components/Accordion/Rating/Rating";

function App() {
  return (
    <div>
      <PageTitle titleValue={"This is APP component"} />
      Article 1
      <Rating value={3} />
      <Accordion titleValue={"Menu"} collapsed={true} />
      <Accordion titleValue={"Users"} collapsed={false} />
      Article 2
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
      <OnOff turn={true} />
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
