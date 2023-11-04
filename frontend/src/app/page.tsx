const Home: React.FC = () => {

  return (
    <div className="bg-slate-900 text-white w-screen h-screen flex justify-center items-center">
      <div className="bg-slate-950 w-3/4 min-h-screen flex flex-col justify-center items-center gap-10 rounded-md">
    
        {/* App Title/Subtitle */}
        <section className="text-center flex flex-col gap-1">
          <h1 className="text-5xl">GENEPASS</h1>
          <h5 className="text-lg text-violet-800 underline hover:text-violet-600 cursor-pointer">A password Generator</h5>
        </section>

        {/* Password Display */}
        <section className="w-9/12">
          <input type="text" className="p-2 w-full h-15 text-violet-700 text-2xl rounded-2xl outline-none text-center bg-slate-900" />
        </section>

        {/* Action buttons */}
        <section className="relative grid grid-cols-2 p-7 h-48 w-9/12 bg-slate-900 rounded-2xl">
          <div className="flex flex-col gap-3 justify-center items-center">
            <h4>10</h4>
            <input type="range" step="1" min="4" max="12" className="w-44" />
          </div>
          <div className="flex flex-col gap-2 justify-center ml-9">
            <div className="flex gap-3 items-center">
              <input type="checkbox" className="h-4 w-4 cursor-pointer" />
              <h4 className="text-lg">Symbols</h4>
            </div>
            <div className="flex gap-3 items-center">
              <input type="checkbox" className="h-4 w-4 cursor-pointer" />
              <h4 className="text-lg">Numbers</h4>
            </div>
            <div className="flex gap-3 items-center">
              <input type="checkbox" className="h-4 w-4 cursor-pointer" />
              <h4 className="text-lg">Capital Letters</h4>
            </div>
            <div className="flex gap-3 items-center">
              <input type="checkbox" className="h-4 w-4 cursor-pointer" />
              <h4 className="text-lg">Small Letters</h4>
            </div>
          </div>
        </section>

        {/*  Create Password Button */}
        <section className="w-9/12 flex justify-end">
          <button type="button" className="bg-violet-800 w-max p-5 rounded-2xl text-lg hover:bg-violet-900">
            Create Password
          </button>
        </section>
      </div>
</div>
  )
}

export default Home