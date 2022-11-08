export default function Login() {
    return (
        
        <div className="bg-primary">
            <div className="container flex-col">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Login!</h2>
                        <p>Username</p>
                        <p>Password</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Masuk</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}