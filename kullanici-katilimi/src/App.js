import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import * as Yup from "yup";
import Form from "./components/Form";

function App() {
  /*axios
  .post("https://reqres.in/api/users", sentData)
  .then(res => {
    console.log(res.data); // Data was created successfully and logs to console
  })
  .catch(err => {
    console.log(err); // There was an error creating the data and logs to console
  });*/
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
