import Link from "next/link"
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';
import Router from "next/router";

export const getStaticProps = async () => {
  const res = await getCookie('access_token');
  const token = await res.json()
  
  return {
    props: { token: token }
  }
}

const handleLogOut = async () => {
  deleteCookie("access_token")
  Router.push('/')
};

export default function Navbar({ token }) {
    return (
      <nav>
        <div className="navbar bg-accent">
          <div className="flex-1">
            <a href="/" className="btn btn-ghost normal-case text-xl">PawoNote</a>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input type="text" placeholder="Search" className="input input-bordered" disabled />
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </label>
              <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <Link href="/" className="justify-between">
                    Beranda
                  </Link>
                </li>
                <li><Link href="/about">Tentang</Link></li>
                <li>
                  <Link href="/tulis">
                    Tulis Resep
                    <span className="badge">Beta</span>
                  </Link>
                </li>
                <li><div className="divider"></div> </li>
                <li><Link href="/login">Masuk</Link></li>
                <li><Link href="/" onClick={(e) => handleLogOut(e)}>Keluar</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
  }