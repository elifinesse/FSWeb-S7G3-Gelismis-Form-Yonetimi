import { useState, useEffect } from "react";
import * as Yup from "yup";

const yupScheme = Yup.object().shape({
  isim: Yup.string().required("Lütfen adınızı yazın."),
  email: Yup.string()
    .email("Geçerli bir e-mail adresi girin.")
    .required("Lütfen e-mail adresinizi yazın."),
  password: Yup.string()
    .required("Bir şifre belirleyin.")
    .min(6, "Şifreniz en az 6 karakterden oluşmalıdır."),
  terms: Yup.boolean().oneOf([true], "Lütfen Kullanım Şartları'nı kabul edin."),
  // required isn't required for checkboxes.
});

function Form() {
  const [formData, setFormData] = useState({
    isim: "",
    email: "",
    sifre: "",
    tos: "false",
  });
  const [errors, setErrors] = useState({
    isim: "",
    email: "",
    sifre: "",
    tos: "",
  });
  const [isFormValid, setFormValid] = useState(false);
  useEffect(() => {
    yupScheme.isValid(formData).then((valid) => {
      setFormValid(valid);
    });
  }, [formData]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    Yup.reach(yupScheme, name)
      .validate(value)
      .then((valid) => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });
    type === "text"
      ? setFormData({ ...formData, [name]: value })
      : setFormData({ ...formData, [name]: checked });
  }
  console.log(formData);
  return (
    <form>
      <label>
        İsim: <input type="text" name="isim" onChange={handleChange} />
      </label>
      <label>
        E-mail: <input type="email" name="email" onChange={handleChange} />
      </label>
      <label>
        Şifre: <input type="password" name="sifre" onChange={handleChange} />
      </label>
      <label>
        <input type="checkbox" name="tos" onChange={handleChange} /> Kullanım
        şartlarını kabul ediyorum.
      </label>
      <p>{errors.name}</p>
      <button type="submit" disabled={!isFormValid}>
        Gönder
      </button>
    </form>
  );
}
export default Form;
