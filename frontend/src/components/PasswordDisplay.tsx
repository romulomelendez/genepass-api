"use client"

import { usePwd } from "@/hooks/usePwd"

const PasswordDisplay: React.FC = () => {

    const { password } = usePwd()

    return (
        <section>
            <input
              type="text"
              className="p-2 h-15 sm:h-28 w-64 sm:w-full text-violet-700 text-2xl sm:text-5xl rounded-2xl outline-none text-center bg-slate-900"
              value={password}
              readOnly
            />
        </section>
    )
}

export default PasswordDisplay