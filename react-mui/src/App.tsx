import "./App.css";
import MuiButtons from "./components/MuiButtons";
import { MuiRadioButtons } from "./components/MuiRadioButtons";
import { MuiSelect } from "./components/MuiSelect";
import { MuiTextField } from "./components/MuiTextField";
import { MuiTypography } from "./components/MuiTypography";

function App() {
  return (
    <div className="App">
      {/* <MuiTypography /> */}
      {/* <MuiButtons /> */}
      {/* <MuiTextField /> */}
      <MuiSelect />
      <MuiRadioButtons />
    </div>
  );
}

export default App;
