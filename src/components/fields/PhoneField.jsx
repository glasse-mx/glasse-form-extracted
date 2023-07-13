
export const PhoneField = ({label, id, state, setState}) => {
  
  return (
    <div className="field_row">
      <input id={`input_${id}`} 
      type="tel" 
      name={`input_${id}`} 
      placeholder={label} 
      state={state}
      onChange={setState}
      required
    />
    </div>
  )
}


