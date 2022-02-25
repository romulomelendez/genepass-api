import React from 'react'

export const Input = () => {

    return (

        <>

            <section>

            <div>The password width is: { rangeHeight }</div>
            <div>

                <input type = "range" id = "input-range" value = { rangeHeight } min = "4" max = "12" step = "1" onChange = { getRangeWidth } />

            </div>

            </section>

            <section className = "checkboxes-section">

            <div>

                <input type = "checkbox" className = "numbers" />
                <label>Numbers</label>

            </div>

            <div>

                <input type = "checkbox" className = "upper-letters" />
                <label>Upper Letters</label>

            </div>

            <div>

                <input type = "checkbox" className = "lower-letters" />
                <label>Lower Letters</label>

            </div>

            </section>

        </>

    )

}