const ActionButtons: React.FC = () => {

    return (
    
        <section className="flex flex-col sm:flex-row p-7 gap-8 h-auto w-auto justify-center bg-slate-900 rounded-2xl">
            <div className="flex flex-col gap-3 justify-center items-center">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">10</label>
            <input type="range" min="4" max="12" step="1" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
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

    )
}

export default ActionButtons