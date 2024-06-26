import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export const getStaticProps = async () => {
  const res = await fetch('http://127.0.0.1:5000/api/notes');
  const note = await res.json();
  const notes = note.data;
  
  return {
    props: { notes }
  }
}

export default function Home({ notes }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>PawonNote</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://pawonote.vercel.app/">PawoNote!</a>
        </h1>

        <p className={styles.description}>
          <code className="mr-2 bg-secondary">Traditional Recipe</code>
          Foods & Beverages Sharing Platform!{' '}
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {notes.map((note, index) => (
            <Link href={`/note/${note.id}`}>
              <div className="card w-96 bg-ijo1 shadow-xl" key={note.id}>
                <figure><Image src="/img/dummy.jpg" width={96} height={96} alt="Shoes" /></figure>
                <div className="card-body text-white">
                  <h2 className="card-title textarea-ghost">
                    {note.title}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>{note.description}</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Ditulis oleh {note.writer.username}</div> 
                    {/* <div className="badge badge-outline">Products</div> */}
                  </div>
                </div>
              </div>
            </Link>
          ))}
          <div className="card w-96 bg-ijo2 shadow-xl">
            <figure><Image src="/img/dummy.jpg" width={96} height={96} alt="Shoes" /></figure>
            <div className="card-body text-white">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div> 
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-ijo3 shadow-xl">
            <figure><Image src="/img/dummy.jpg" width={96} height={96} alt="Shoes" /></figure>
            <div className="card-body text-white">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div> 
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-cok1 shadow-xl">
            <figure><Image src="/img/dummy.jpg" width={96} height={96} alt="Shoes" /></figure>
            <div className="card-body text-white">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div> 
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-cok2 shadow-xl">
            <figure><Image src="/img/dummy.jpg" width={96} height={96} alt="Shoes" /></figure>
            <div className="card-body text-white">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div> 
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-cok3 shadow-xl">
            <figure><Image src="/img/dummy.jpg" width={96} height={96} alt="Shoes" /></figure>
            <div className="card-body text-white">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div> 
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
