import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Form from "./components/Form";
import { useEffect, useState } from "react";

function App() {
  const [tumData, setTumData] = useState([
    { isim: "Elif", email: "a@a", sifre: 987654, tos: true },
  ]);

  function formGonder(data) {
    console.log("Tüm data", tumData);
    axios
      .post("https://reqres.in/api/users", data)
      .then(function (response) {
        console.log("form gönderildi", response.data);
        //   console.log(response);
        setTumData([...tumData, response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
    //setTumData([...tumData, data]);
    //console.log(tumData);
  }
  /*useEffect(() => {
    axios
      .post("https://reqres.in/api/users", tumData)
      .then((res) => {
        setAxiosData(res.data); // Data was created successfully and logs to console
        setTumData([...tumData, ...res.data]);
      })
      .catch((err) => {
        console.log(err); // There was an error creating the data and logs to console
      });
  }, [tumData]);*/
  return (
    <div className="App">
      <Form submitProp={formGonder} />
      <h3>Yeni Kullanıcılar:</h3>
      <div data-cy="user-info">
        {tumData.map((user) => (
          <div className="user-info" key={user.id}>
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
    </div>
  );
}

export default App;
