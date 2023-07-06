import { useState, createContext, useContext } from "react";
import { CarritoContext } from "./CartContext";

export const LoginContext = createContext({
    datos: [],
    login: false,
});

export const LoginProvider = ({ children }) => {
    const [datos, setDatos] = useState();
    const [login, setLogin] = useState(false);
    const { vaciarCarrito } = useContext(CarritoContext);

    const Login = (datos) => {
        console.log("Connected");
        setDatos(datos);
        setLogin(!login);
    };
    
    const Logout = () => {
        console.log("Disconnected");
        setDatos([]);
        setLogin(!login);
        vaciarCarrito();
    }

    return (
        <LoginContext.Provider
            value={{
                datos,
                login,
                Login,
                Logout,
            }}
        >
            {children}
        </LoginContext.Provider>
    );
};