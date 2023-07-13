import { geGravityRaw } from "../utils/getGravityRaw"
import { GravityForm } from "./GravityForm"


export const GravityRawForm = () => {
  const gravityForm = geGravityRaw(1)
  const {title, description, fields, button } = gravityForm

  return (
    <>
      {
        gravityForm 
          ? <GravityForm 
              id={1}
              title={title}
              description={description} 
              fields={fields}
              button={button}       
            /> 
          : 'No se encontro el Formulario'
      }
    </>
  )
}
