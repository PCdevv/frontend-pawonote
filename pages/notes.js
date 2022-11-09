export default function Notes() {
    return (
      <div className="hero min-h-screen bg-primary">
        <div className="card w-5/6 bg-base-100 shadow-xl ml-5 mr-5 shaadow-md">
          <div className="card-body">
            <div className="flex-col">
              <div className="my-3">
                <h3 className="font-bold">Judul</h3>
                <input type="text" className="input input-bordered input-error w-full mt-2"/>
              </div>
              <div className="my-3">
                <h3 className="font-bold">Deskripsi</h3>
                <textarea className="textarea textarea-error w-full mt-2">
                </textarea>
              </div>  
              <div className="my-3">
                <h3 className="font-bold">Alat dan Bahan</h3>
                <textarea className="textarea textarea-error w-full mt-2">
                </textarea>
              </div>  
              <div className="my-3">
                <h3 className="font-bold">Langkah Pembuatan </h3>
                <textarea className="textarea textarea-error w-full  mt-2">
                </textarea>
              </div>
              <div className="my-3 flex justify-end">
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }