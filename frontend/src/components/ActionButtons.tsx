"use client"

import Checkbox from "./Checkbox"

import { usePwd } from '../hooks/usePwd'

const ActionButtons: React.FC = () => {

    const { pwdLength, handlePwdLength } = usePwd()

    return (
    
        <section className="flex flex-col sm:flex-row p-7 gap-8 h-auto w-auto justify-center bg-slate-900 rounded-2xl">
            <div className="flex flex-col gap-3 justify-center items-center">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    { pwdLength }
                </label>
                <input type="range" min="4" max="12" step="1" onChange={e => handlePwdLength(e.target.value)} value={pwdLength} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
            </div>
            <div className="flex flex-col gap-2 justify-center ml-9">
                <div className="flex gap-3 items-center">
                    <Checkbox functionName="Symbols" />
                </div>
                <div className="flex gap-3 items-center">
                    <Checkbox functionName="Numbers" />
                </div>
                <div className="flex gap-3 items-center">
                    <Checkbox functionName="Capital Letters" />
                </div>
                <div className="flex gap-3 items-center">
                    <Checkbox functionName="Small Letters" />
                </div>
            </div>
        </section>

    )
}

export default ActionButtons