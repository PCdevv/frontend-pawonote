import axios from "axios";
import Router from "next/router";
import { useState } from "react";

export const getStaticPaths = async () => {
  const res = await fetch('http://127.0.0.1:5000/api/users');
  const data = await res.json();
  const user = data.data;
  // const users = user.data;
  const paths = user.map(user => {
    return {
      params: { id: user.id.toString() }
    }
  });
  
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch('http://127.0.0.1:5000/api/users/' + id);
  const data = await res.json();
  const user = data.data;

  return {
    props: { user }
  }
}

export default function User({ user }) {
  const [username, setUsername] = useState(user.username);
  
  const handleEdit = async (e) => {
    e.preventDefault();
    const input = { username };
    const id = JSON.stringify(user.id)
    const res = await axios.put("http://127.0.0.1:5000/api/users/" + id, input);
    if (res.status === 200) {
        Router.push('/admin')
    }
  };

  return (
    <div className="hero min-h-screen bg-primary">
      <div className="hero-content flex-col">
        <form onSubmit={(e) => handleEdit(e)}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="items-center text-center card w-full">
                <h2 className="font-bold text-5x1 card-title">Edit Username</h2>
              </div>
              <label htmlFor="username">Username</label>
              <input 
              type="text" 
              name="username" 
              id="username" 
              className="input input-bordered input-accent w-full max-w-xs rounded-md" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}/>
              <div className="card-actions justify-end">
                <button className="btn btn-accent">Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}