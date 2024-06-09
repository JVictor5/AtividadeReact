import Accordion from "./cont/Accordion";
import FormQuiz from "./cont/FormQuiz";
import FormTicket from "./cont/FormTicket";
import Messenger from "./cont/Messenger";
import "./atv05.js";

export default function Ativ5() {
  return (
    <>
      <div className="componrnt">
        <FormQuiz />
      </div>
      <div className="componrnt">
        <FormTicket />
      </div>
      <div className="componrnt">
        <Accordion />
      </div>
      <div className="componrnt">
        <Messenger />
      </div>
    </>
  );
}
