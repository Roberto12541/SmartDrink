import { useState, createContext } from "react";

export const LoginContext = createContext({
    datos: [],
    login: false,
});

export const LoginProvider = ({ children }) => {
    const [datos, setDatos] = useState();
    const [login, setLogin] = useState(false);

    const Login = (datos) => {
        console.log("Connected");
        setDatos(datos);
        setLogin(!login);
    };
    
    const Logout = () => {
        console.log("Disconnected");
        setDatos([]);
        setLogin(!login);
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