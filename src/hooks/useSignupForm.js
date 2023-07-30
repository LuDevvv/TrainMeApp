import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const useSignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
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

