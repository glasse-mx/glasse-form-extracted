
export const TextAreaField = ({id, label }) => {
  return (
    <textarea 
      name="Mensaje" 
      id={`input_${id}`} 
      cols="30" 
      rows="10" 
      placeholder={label}
    ></textarea>
  )
}
