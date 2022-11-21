import Image from "next/image"

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
  return (
    <div className="hero min-h-screen bg-primary">
      <div className="card w-5/6 bg-base-100 shadow-xl ml-5 mr-5 shaadow-md p-0">
        <div className="card-body">
          <div className="flex-col">
            <div className="items-center text-center card w-full">
              <label className="label">
                <figure><Image src="/img/dummy.jpg" width={96} height={96} alt="Shoes" /></figure>
              </label>
            </div>
            <div className="my-3">
              <h3 className="font-bold">Judul</h3>
              <p>{ note.title }</p>
              <div className="divider"></div>
            </div>
            <div className="my-3">
              <h3 className="font-bold">Deskripsi</h3>
              <p>{ note.description }</p>
              <div className="divider"></div>
            </div>  
            <div className="my-3">
              <h3 className="font-bold">Alat dan Bahan</h3>
              <p>{ note.ingredients }</p>
              <div className="divider"></div>
            </div>  
            <div className="my-3">
              <h3 className="font-bold">Langkah Pembuatan </h3>
              <p>{ note.steps }</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}