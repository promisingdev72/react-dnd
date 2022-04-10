import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// import "./App.css";
import Home from "./pages/home/Home";

const App = () => {
  return (
    // <div className="App">
    <DndProvider backend={HTML5Backend}>
      <Home />
    </DndProvider>
    // </div>
  );
};
export default App;
