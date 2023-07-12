import { useState } from "react"

export const EmailField = ({id,label,isRequired}) => {
  
  const [ emailValue, setEmailValue ] = useState('')

  const onEmailChange = (e) => {
    e.preventDefault()
    setEmailValue(e.target.value)
  }

  return (
    <input 
      id={`input_${id}`} 
      type="email" 
      name="email" 
      placeholder={label} 
      value={emailValue}
      onChange={onEmailChange}
      // { ...isRequired && 'required'}
      required
    />
  )
}
