"use client"

import { usePwd } from "../hooks/usePwd"

const CreatePwdBtn = () => {

    const { createPwd } = usePwd()

    return (

        <section className="w-auto sm:w-96 flex justify-center sm:justify-end">
            <button
                type="button"
                className="bg-violet-800 w-max p-4 rounded-2xl text-lg hover:bg-violet-900"
                onClick={createPwd}
            >
                Create Password
            </button>
        </section>

    )

}

export default CreatePwdBtn