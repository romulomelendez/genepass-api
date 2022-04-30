import { Checkbox } from '../Checkbox'

import { Section } from './style'

export const CheckboxesContainer = () => (

    <Section className="checkboxes-Section">

        <Checkbox className="numbers" checkboxName="Numbers" />
        <Checkbox className="upper-letters" checkboxName="Upper Letters" />
        <Checkbox className="lower-letters" checkboxName="Lower Letters" />

    </Section>

)