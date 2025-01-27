import { useState, useEffect } from "react";
import * as Yup from "yup";

const yupSchema = Yup.object().shape({
  isim: Yup.string()
    .required("Lütfen adınızı yazın.")
    .min(2, "Geçerli bir isim girin."),
  email: Yup.string()
    .email("Geçerli bir e-mail adresi girin.")
    .required("Lütfen e-mail adresinizi yazın."),
  sifre: Yup.string()
    .required("Bir şifre belirleyin.")
    .min(6, "Şifreniz en az 6 karakterden oluşmalıdır."),
  tos: Yup.boolean().oneOf([true], "Lütfen Kullanım Şartları'nı kabul edin."),
  // required isn't required for checkboxes.
});

function Form(props) {
  const { submitProp } = props;
  const [formData, setFormData] = useState({
    isim: "",
    email: "",
    sifre: "",
    tos: true,
  });
  const [errors, setErrors] = useState({
    isim: "",
    email: "",
    sifre: "",
    tos: "",
  });
  const [isFormValid, setFormValid] = useState(false);
  const [users, setUsers] = useState([]);
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    let formValue = type === "checkbox" ? checked : value;
    /*type === "checkbox"
      ? setFormData({ ...formData, [name]: checked })
      : setFormData({ ...formData, [name]: value });*/
    const newFormData = {
      ...formData,
      [name]: formValue,
    };
    Yup.reach(yupSchema, name)
      .validate(formValue)
      .then((valid) => {
        console.log(valid);
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        console.log(err);
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });
    setFormData(newFormData);
  }
  function handleSubmit(e) {
    e.preventDefault();
    //setUsers([...users, formData]);
    submitProp(formData);
    setFormData({ isim: "", email: "", sifre: "", tos: false });
  }

  useEffect(() => {
    yupSchema.isValid(formData).then((valid) => {
      setFormValid(valid);
    });
  }, [formData]);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        İsim:{" "}
        <input
          type="text"
          name="isim"
          onChange={handleChange}
          value={formData.isim}
        />
      </label>
      {errors.isim && <p>{errors.isim}</p>}
      <label>
        E-mail:{" "}
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
      </label>
      {errors.email && <p>{errors.email}</p>}
      <label>
        Şifre:{" "}
        <input
          type="password"
          name="sifre"
          onChange={handleChange}
          value={formData.sifre}
        />
      </label>
      {errors.sifre && <p>{errors.sifre}</p>}
      <label>
        <input
          type="checkbox"
          name="tos"
          onChange={handleChange}
          checked={formData.tos}
        />{" "}
        Kullanım şartlarını kabul ediyorum.
      </label>
      {errors.tos && <p>{errors.tos}</p>}
      <button name="submit-button" type="submit" disabled={!isFormValid}>
        Gönder
      </button>
    </form>
  );
}
export default Form;
