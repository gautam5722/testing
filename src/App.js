import logo from "./logo.svg";
import "./App.css";
// import navbarr from "./component/navbarr";
import Navbarr from "./component/Navbarr";
import CustomFilter from "./component/CustomFilter";
import StudentListTabel from "./component/StudentListTabel";

function App() {
  return (
    <div className="App">
      <Navbarr />
      <CustomFilter />

      <StudentListTabel />
    </div>
  );
}

export default App;
