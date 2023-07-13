import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import * as Yup from "yup";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState();
  function formGonder(data) {
    setFormData(data);
    axios
      .post("https://reqres.in/api/users", data)
      .then((res) => {
        console.log(res.data); // Data was created successfully and logs to console
      })
      .catch((err) => {
        console.log(err); // There was an error creating the data and logs to console
      });
  }
  return (
    <div className="App">
      <Form submitProp={formGonder} />
      <h3>Yeni Kullanıcılar:</h3>
      <p>İsim: </p>
      <p>E-mail: </p>
      <p>Şifre: </p>
      <p>Kullanım Koşulları :</p>
    </div>
  );
}

export default App;
