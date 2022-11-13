import Image from "next/image"

export default function Note() {
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
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <div className="divider"></div>
            </div>
            <div className="my-3">
              <h3 className="font-bold">Deskripsi</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat porro, accusamus aperiam omnis distinctio libero autem iure nulla adipisci praesentium,</p>
              <div className="divider"></div>
            </div>  
            <div className="my-3">
              <h3 className="font-bold">Alat dan Bahan</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat porro, accusamus aperiam omnis distinctio libero autem iure nulla adipisci praesentium,</p>
              <div className="divider"></div>
            </div>  
            <div className="my-3">
              <h3 className="font-bold">Langkah Pembuatan </h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat porro, accusamus aperiam omnis distinctio libero autem iure nulla adipisci praesentium, rerum consectetur deleniti aliquid exercitationem inventore reprehenderit quod culpa iusto!</p>
              <div className="divider"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}