import { FieldSelector} from "./FieldSelector"
import { useState, useEffect } from "react"
import { onGravitySubmit } from "../utils/submitGravity"


export const GravityForm = ({id, title, description, fields,button}) => {

  const [formState, setFormState] = useState({})

  const onGravityChanged = ({target}) => {
    const {name, value} = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const onGravitySubmission = (e) => {
    e.preventDefault()
    onGravitySubmit(formState, 1)
  }


  

  return (
    <form onSubmit={onGravitySubmission}>
     
     <div className="form__header">
      { title && <h3>{title}</h3>}
      { description && <p>{description}</p>}
     </div>

     <div className="form__body">
      {
        fields?.map( field => <FieldSelector key={field.id} field={field} state={formState} setState={onGravityChanged} /> )
      }
     </div>
     
     <div className="form__footer">
        <input 
          type="submit" 
          value={button?.text ? button.text : "Envia tu Mensaje"} 

        />
     </div>
    </form>
  )
}
