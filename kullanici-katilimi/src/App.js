import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import * as Yup from "yup";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Form />
      <h3>Yeni Kullanıcılar:</h3>
      <p>İsim: </p>
      <p>E-mail: </p>
      <p>Şifre: </p>
      <p>Kullanım Koşulları :</p>
    </div>
  );
}

export default App;
