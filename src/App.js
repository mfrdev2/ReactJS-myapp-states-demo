import St from "./state";
import EventHandeler from "./Components/handeler";
import HookState from "./Components/hookState";
import Form from "./Components/form1";
import Form2 from "./Components/form2";

function App() {
  return (
  <div>
    <h1>Helloo</h1>
    <EventHandeler/>
    <HookState/>
    <Form2/>
    {/* <St/> */}
  </div>
  );
}

export default App;
