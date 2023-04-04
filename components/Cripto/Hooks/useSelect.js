import { HeadingPomodoroTitle } from '@/public/styles'
import { useState } from 'react'
import styled from 'styled-components'


const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
`

const useSelect = (label, options) => {

    const [state, setState] = useState('')
    
    const SelectMonedas = () => (
        <>
            <HeadingPomodoroTitle
                slogan
                Size = {2}
            >
                {label}
            </HeadingPomodoroTitle>
            <Select
                value={state}
                onChange={ e => setState( e.target.value )}
            >
                <option value="">Select</option>
                {options.map( option => (
                    <option 
                        key={option}
                        value={option}
                    >{option}</option>
                ))}
            </Select>
        </>
    )

    return [ state, SelectMonedas ]
}

export default useSelect
