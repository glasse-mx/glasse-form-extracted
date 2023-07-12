import { useState } from "react"

export const NameField = ({inputs}) => {

  // const [nameValue, setNameValue] = useState({})

  // const onNameChange = (e) => {
  //   e.preventDefault()
  //   setNameValue(e.target.value)
  // }
  return (
    <div className="name__row">
      {
        inputs 
          ? inputs.map( 
            input => <input key={`input_name_${input.id}`} type="text" />
            )
          : <p>"No hay campos"</p>
      }
    </div>
  )
}
