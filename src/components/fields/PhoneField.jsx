import { useState } from "react"

export const PhoneField = ({label,id}) => {
  
  const [phoneValue, setPhoneValue] = useState('')

  const onPhoneChange = (e) => {
    e.preventDefault()
    setPhoneValue(e.target.value)
  }
  
  return (
    <input id={`input_${id}`} 
      type="tel" 
      name="Telefono" 
      placeholder={label} 
      value={phoneValue} 
      onChange={onPhoneChange} 
      required
    />
  )
}


