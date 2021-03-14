import { Add, Help } from "@material-ui/icons";
import "./App.css";
import Pinterest from "./components/Pinterest";

function App() {
  return (
    <div className="App">
      <Pinterest />
      <div className="options">
        <div className="option">
          <Add />
        </div>

        <div className="option">
          <Help />
        </div>
      </div>
    </div>
  );
}

export default App;
