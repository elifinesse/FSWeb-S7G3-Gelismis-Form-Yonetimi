import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import * as Yup from "yup";

function App() {
  return (
    <div className="App">
      <form>
        <label>
          İsim: <input type="text" />
        </label>
        <label>
          E-mail: <input type="email" />
        </label>
        <label>
          Şifre: <input type="password" />
        </label>
        <label>
          <input type="checkbox" /> Kullanım şartlarını kabul ediyorum.
        </label>
      </form>
    </div>
  );
}

export default App;
