export const getStaticProps = async () => {
    const res = await fetch('http://127.0.0.1:5000/api/users');
    const user = await res.json();
    const users = user.data;
    
    return {
        props: { users }
    }
}

export default function Admin({ users }) {
    return (
        <div className="hero min-h-screen bg-primary">
            <div className="w-5/6 bg-base-100 shadow-xl ml-5 mr-5 shaadow-md p-0">
                <div className="card-body">
                    <div className="items-center text-center card w-full">
                        
                        <h2 className="font-bold text-5x1 card-title">ADMIN DASHBOARD</h2>
                        <h1>Buatkan akun, daftarkan user!</h1>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" className="input input-bordered input-accent w-full max-w-xs rounded-md" onChange={(e) => setUsername(e.target.value)}/>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" className="input input-bordered input-accent w-full max-w-xs rounded-md" onChange={(e) => setPassword(e.target.value)}/>
                        <div className="card-actions justify-end">
                            <button className="btn btn-accent">Daftar</button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Username</th>
                                <th>Created at</th>
                                <th>Updated at</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <th>{user.id}</th>
                                <td>{user.username}</td>
                                <td>{user.createdAt}</td>
                                <td>{user.updatedAt}</td>
                                <td><button className="btn bg-yellow-300">Edit</button></td>
                                <td><button className="btn bg-red-300">Delete</button></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
