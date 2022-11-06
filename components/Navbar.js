export default function Navbar() {
    return (
      <nav>
        <div className="navbar bg-accent">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">PawonNote</a>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input type="text" placeholder="Search" className="input input-bordered" />
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </label>
              <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">
                    Beranda
                  </a>
                </li>
                <li><a>Tentang</a></li>
                <li><a>
                  Tulis Resep
                  <span className="badge">Beta</span>
                  </a>
                </li>
                <li><div className="divider"></div> </li>
                <li><a>Masuk</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
  }