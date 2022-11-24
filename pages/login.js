import axios from "axios";
import Router from "next/router";
import React, { useContext, useState } from "react";
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const credentials = { username, password };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await axios.post("http://127.0.0.1:5000/api/auth/login", credentials);
        const jwt = user.data.token
        const maxAge = 3 * 24 * 60 * 60;
        if (user.status === 200) {
            // console.log(jwt);
            setCookie("access_token", jwt);
            Router.push('/')
        }
    };

    // const handleGetUser = async () => {
    //     const user = await axios.get("/api/user");
    //     console.log(user);
    // };

    const handleLogOut = async () => {
        deleteCookie("access_token")
        Router.push('/')
    };
    
    return (
        <div className="hero min-h-screen bg-primary">
            <div className="hero-content flex-col">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="items-center text-center card w-full">
                                <h2 className="font-bold text-5x1 card-title">Login!</h2>
                            </div>
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" className="input input-bordered input-accent w-full max-w-xs rounded-md" onChange={(e) => setUsername(e.target.value)}/>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" className="input input-bordered input-accent w-full max-w-xs rounded-md" onChange={(e) => setPassword(e.target.value)}/>
                            <div className="card-actions justify-end">
                                <button className="btn btn-accent">Masuk</button>
                            </div>
                        </div>
                    </div>
                </form>
                {/* <button className="btn btn-accent" onClick={(e) => handleLogOut(e)}>Keluar</button> */}
            </div>
        </div>
    )
}

// export const getServerSide = async ({ req }) => {
//     const user = await axios.post("http://127.0.0.1:5000/api/auth/login", credentials, {
//         withCredentials: true,
//         headers: {
//             Cookie: req.cookie
//         }
//     });
//     const data = await user.data
//     // console.log(data);
//     return {
//         props: { data }
//     }
// }