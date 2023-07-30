import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useLoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState(null);

  const { register } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);

      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      setError("Hubo un error al registrar el usuario.");
    }
  };

  return {
    formData,
    showPopup,
    error,
    handleChange,
    handleSubmit,
  };
};
