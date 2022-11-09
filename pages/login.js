export default function Login() {
    return (
        
        <div className="hero min-h-screen bg-primary">
            <div className="hero-content flex-col">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="items-center text-center card w-full">
                            <label className="label">
                                <span className="label-text font-bold text-5x1">Login!</span>
                            </label>
                        </div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" className="input input-bordered input-primary w-full max-w-xs rounded-md"/>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" className="input input-bordered input-primary w-full max-w-xs rounded-md"/>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Masuk</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}