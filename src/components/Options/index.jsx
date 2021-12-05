
import { Div } from './styles'

export const Options = () => {

    return (

        <Div>

            <section>

                <input type = "text" />
                <div>
                    <input type = "range" min = "4" max = "12" step = "1" />
                </div>

            </section>

            <section>

                <input type = "checkbox" />
                <input type = "checkbox" />
                <input type = "checkbox" />
                
            </section>

        </Div>

    )
    
}
