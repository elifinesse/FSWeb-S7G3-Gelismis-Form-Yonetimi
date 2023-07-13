import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Form from "./components/Form";
import { useEffect, useState } from "react";

function App() {
  const [allData, setAllData] = useState([]);
  const [axiosData, setAxiosData] = useState([]);
  function formGonder(data) {
    setAllData(data);
  }
  useEffect(() => {
    axios
      .post("https://reqres.in/api/users", allData)
      .then((res) => {
        setAxiosData(res.data); // Data was created successfully and logs to console
      })
      .catch((err) => {
        console.log(err); // There was an error creating the data and logs to console
      });
  }, [allData]);
  return (
    <div className="App">
      <Form submitProp={formGonder} />
      {axiosData.map((user) => (
        <div className="user-info" key={user.id}>
          <h3>Yeni Kullanıcılar:</h3>
          <p>İsim: {user.isim} </p>
          <p>E-mail: {user.email}</p>
          <p>Şifre: {user.sifre} </p>
          <p>
            Kullanım Koşulları:
            {user.tos === true ? " Kabul edilmiş." : ""}{" "}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
