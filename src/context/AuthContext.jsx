import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Loader } from "../components/common/Loader";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("There is no Auth provider");
  return context;
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [initialized, setInitialized] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  // Función para registrar un nuevo usuario
  const register = async (formData) => {
    const { email, password, firstName, lastName } = formData;

    try {
      // Registro del usuario en Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Actualizar el perfil del usuario con el nombre y apellido
      await updateProfile(userCredential.user, {
        displayName: `${firstName} ${lastName}`,
      });

      // Guardar los datos adicionales del usuario en Firestore
      const uid = userCredential.user.uid;
      await addDoc(collection(db, "users"), {
        uid,
        firstName,
        lastName,
      });

      // Guardar la información del usuario en el almacenamiento local
      localStorage.setItem("user", JSON.stringify(userCredential.user));

      // Actualizar el estado local con la información del usuario
      setUser(userCredential.user);
      handleSuccess("¡Registro exitoso!");

      navigate("/homePresentation");
    } catch (error) {
      // Manejo de errores, si es necesario
      console.log("Error al registrar: " + error.message);
      handleError("Error al registrar. Intente nuevamente.");
      setSuccess("");
    }
  };

  // Función para iniciar sesión
  const login = async (formData) => {
    const { email, password } = formData;
    try {
      await signInWithEmailAndPassword(auth, email, password);

      // Obtener la información actualizada del usuario y guardarla en el almacenamiento local
      const currentUser = auth.currentUser;
      if (currentUser) {
        localStorage.setItem("user", JSON.stringify(currentUser));
        setUser(currentUser);
        handleSuccess("¡Inicio de sesión exitoso!");
      }

      navigate("/homePresentation");
    } catch (error) {
      console.log("Error al iniciar sesión: " + error.message);
      handleError("Credenciales incorrectas. Intente nuevamente.");
    }
  };

  // Función para cerrar sesión
  const logout = async () => {
    // Eliminar la información del usuario del almacenamiento local
    localStorage.removeItem("user");

    await auth.signOut();
    setUser(null);
    navigate("/login");
  };

  // Función para manejar errores
  const handleError = (message) => {
    setError(message);
    setTimeout(() => setError(""), 1500); // Limpia el mensaje después de 1.5 segundos
  };

  // Función para manejar éxitos
  const handleSuccess = (message) => {
    setSuccess(message);
    setTimeout(() => setSuccess(""), 1000); // Limpia el mensaje después de 1 segundo
  };

  useEffect(() => {
    // Intentar obtener la información del usuario desde el almacenamiento local
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    // Establecer initialized en true, independientemente de si encontramos la información del usuario o no.
    setInitialized(true);

    const unsubscribe = auth.onAuthStateChanged((user) => {
      // Si no hay información del usuario en el almacenamiento local, establecemos el usuario en el estado
      if (!storedUser) {
        setUser(user);
      }
      setLoading(false);
    });

    // Desuscribirse al desmontar el componente para evitar fugas de memoria
    return () => unsubscribe();
  }, []);

  if (!initialized) {
    // Mostrar un componente de carga o una página de carga mientras se inicializa la sesión
    return <Loader />;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        success,
        login,
        logout,
        register,
        handleError,
        handleSuccess,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
