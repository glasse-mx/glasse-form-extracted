
export const TextAreaField = ({id, label, state, setState }) => {
  return (
    <textarea 
      name={`input_${id}`}
      id={`input_${id}`} 
      cols="30" 
      rows="10" 
      placeholder={label}
      state={state}
      onChange={setState}
    ></textarea>
  )
}
