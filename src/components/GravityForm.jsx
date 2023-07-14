import { FieldSelector } from "./FieldSelector"
import { useState } from "react"
import { onGravitySubmit } from "../utils/submitGravity"
import '../styles.css'

export const GravityForm = ({ id, title, description, fields, button, loading, setLoading, submitted, sendSubmission }) => {

  const [formState, setFormState] = useState({})

  // Guardo los valores de los campos en el estado
  const onGravityChanged = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  // Se envia la peticion POST para crear una entrada de formulario
  const onGravitySubmission = (e) => {
    e.preventDefault()
    setLoading(true)
    const resp = onGravitySubmit(formState, 1, loading, setLoading, submitted, sendSubmission)

    console.log(resp)
  }

  return (
    <form className="glasse_contact_form" onSubmit={onGravitySubmission}>

      {
        title &&
        (
          <div className="form__header">
            {title && <h3>{title}</h3>}
            {description && <p>{description}</p>}
          </div>
        )
      }

      <div className="form__body">
        {
          fields?.map(field => <FieldSelector key={field.id} field={field} state={formState} setState={onGravityChanged} />)
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
