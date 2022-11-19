import axios from "axios";
import Router from "next/router";
import React, { useState } from "react";
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';

export default function Tulis() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");
    // const [cookies, setCookies] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = getCookie('access_token');
        const input = { title, description, ingredients, steps, token };
        const note = await axios.post("http://127.0.0.1:5000/api/notes", input);
        console.log(note);
        // if (user.status === 200) {
        //     Router.push('/')
        // }
    };

    return (
      <div className="hero min-h-screen bg-primary">
        <div className="w-5/6 bg-base-100 shadow-xl ml-5 mr-5 shaadow-md p-0">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="card-body">
              <div className="flex-col">
                <div className="items-center text-center card w-full">
                  <label className="label">
                    <input type="file" className="file-input file-input-bordered file-input-accent w-full max-w-xs" />
                  </label>
                </div>
                <div className="my-3">
                  <h3 className="font-bold">Judul</h3>
                  <input type="text" className="input input-bordered input-accent w-full mt-2" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="my-3">
                  <h3 className="font-bold">Deskripsi</h3>
                  <textarea className="textarea textarea-accent w-full mt-2" onChange={(e) => setDescription(e.target.value)} >
                  </textarea>
                </div>  
                <div className="my-3">
                  <h3 className="font-bold">Alat dan Bahan</h3>
                  <textarea className="textarea textarea-accent w-full mt-2" onChange={(e) => setIngredients(e.target.value)} >
                  </textarea>
                </div>  
                <div className="my-3">
                  <h3 className="font-bold">Langkah Pembuatan </h3>
                  <textarea className="textarea textarea-accent w-full  mt-2" onChange={(e) => setSteps(e.target.value)}>
                  </textarea>
                </div>
                <div className="my-3 flex justify-end">
                  <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-accent">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }