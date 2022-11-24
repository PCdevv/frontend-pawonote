import Image from "next/image"
import axios from "axios";
import Router from "next/router";
import { useState } from "react";
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';

export const getStaticPaths = async () => {
  const res = await fetch('http://127.0.0.1:5000/api/notes');
  const data = await res.json();
  const note = data.data;
  // const notes = note.data;
  const paths = note.map(note => {
    return {
      params: { id: note.id.toString() }
    }
  });
  
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch('http://127.0.0.1:5000/api/notes/' + id);
  const data = await res.json();
  const note = data.data;

  return {
    props: { note }
  }
}

export default function Note({ note }) {
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);
  const [ingredients, setIngredients] = useState(note.ingredients);
  const [steps, setSteps] = useState(note.steps);
  const [img_url, setImg_url] = useState(note.img_url);

  const handleEdit = async (e) => {
    e.preventDefault();
    const token = getCookie('access_token');
    const input = { title, description, ingredients, steps, token, img_url }
    const id = JSON.stringify(note.id)
    const res = await axios.put("http://127.0.0.1:5000/api/notes/" + id, input);
    if (res.status === 200) {
        Router.push('/')
    }
  };

  const handleDelete = async (id) => {
    const idNote = JSON.stringify(id)
    const res = await axios.delete("http://127.0.0.1:5000/api/notes/" + idNote);
    if (res.status === 200) {
        Router.push('/')
    }
};

  return (
    <div className="hero min-h-screen bg-primary">
      <div className="w-5/6 bg-base-100 shadow-xl ml-5 mr-5 shaadow-md p-0">
        {/* <form onSubmit={(e) => handleEdit(e)}> */}
          <div className="card-body">
            <div className="flex-col">
              <div className="items-center text-center card w-full">
                <label className="label">
                  <input type="file" name="img_url" className="file-input file-input-bordered file-input-accent w-full max-w-xs" value={img_url} onChange={(e) => setImg_url(e.target.value)} />
                </label>
              </div>
              <div className="my-3">
                <h3 className="font-bold">Judul</h3>
                <input type="text" className="input input-bordered input-accent w-full mt-2" value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div className="my-3">
                <h3 className="font-bold">Deskripsi</h3>
                <textarea className="textarea textarea-accent w-full mt-2" value={description} onChange={(e) => setDescription(e.target.value)} >
                </textarea>
              </div>  
              <div className="my-3">
                <h3 className="font-bold">Alat dan Bahan</h3>
                <textarea className="textarea textarea-accent w-full mt-2" value={ingredients} onChange={(e) => setIngredients(e.target.value)} >
                </textarea>
              </div>  
              <div className="my-3">
                <h3 className="font-bold">Langkah Pembuatan </h3>
                <textarea className="textarea textarea-accent w-full  mt-2" value={steps} onChange={(e) => setSteps(e.target.value)}>
                </textarea>
              </div>
              <div className="my-3 flex justify-end">
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-yellow-300" onClick={(e) => handleEdit(e)}>Submit</button>
              </div>
              <div className="my-3 flex justify-end">
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-red-300" onClick={() => handleDelete(note.id)}>Delete</button>
              </div>
            </div>
          </div>
        {/* </form> */}
      </div>
    </div>
  )
}