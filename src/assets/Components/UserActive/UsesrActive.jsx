import React, { useState, useEffect } from "react";
import { Users } from "../../Helpers/Users";

const Login = () => {
const [credentials, setCredentials] = useState({ username: "", password: "" });
const [message, setMessage] = useState("Usuario anonimo");

useEffect(() => {
    const user = Users.find((user) => user.username === credentials.username);
    if (user) {
        setMessage(user.password === credentials.password ? `Bienvenido ${user.username}` : "Bienvenido usuario anonimo");
    } else {
        setMessage("Bienvenido usuario anonimo");
    }
}, [credentials]);

const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
};

return (
    <div>
        <h1>{message}</h1>
        <input
            type="text"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
        />
        <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
        />
    </div>
    );
};

export default Login;
