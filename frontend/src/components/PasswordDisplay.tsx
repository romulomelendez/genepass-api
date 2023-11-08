"use client"

import { usePwd } from "@/hooks/usePwd"

import { BsFillClipboardFill } from "react-icons/bs"

const PasswordDisplay: React.FC = () => {

    const { password } = usePwd()

    return (
        <section className="flex justify-between p-1 h-15 sm:h-28 w-64 sm:w-fit max-w-xl rounded-2xl bg-slate-900">
            <input
              type="text"
              className="bg-slate-900 h-full w-52 sm:w-full p-4 text-violet-700 text-2xl sm:text-5xl outline-none text-center"
            //   value={password}
            />
            <button type="button" className="bg-slate-900 flex justify-center items-center p-1 mr-1 h-full w-12">
                <BsFillClipboardFill size="22" />
            </button>
        </section>
    )
}

export default PasswordDisplay