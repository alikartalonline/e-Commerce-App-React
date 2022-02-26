import { useState, createContext, useEffect, useContext} from "react";

const AuthContext = createContext();

const AuthProvider = ( {children} ) => {

    // const [user, setUser] = useState(null);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("dataKey")) || null)
    // console.log("user", user)

    // const [loggedIn, setLoggedIn] = useState(false);
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem("LogKey") ||false);


    const login = (data) => {
        setLoggedIn(true);
        setUser(data);
        // console.log("datacan =", data)
        localStorage.setItem("dataKey", JSON.stringify(data))
        localStorage.setItem("LogKey", true)
    };

    // console.log("parse= ",JSON.parse(localStorage.getItem("dataKey")))
    // {email: 'ali@hotmail.com', password: '123456', passwordConfirm: '123456'}


    const logout = async (callback) => {
        setLoggedIn(false);
        setUser(null);

        localStorage.removeItem("dataKey")
        localStorage.removeItem("LogKey")
        
        callback()
    };


    const values = {
        loggedIn,
        user,
        setUser,
        login,
        logout,
    };

    return <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
};

const useAuth = () => useContext(AuthContext);

export {
    AuthProvider,
    useAuth
};  