import { FieldSelector} from "./FieldSelector"
import { SubmitField } from "./fields"

export const GravityForm = ({title, description, fields,button}) => {
  return (
    <form>
     
     <div className="form__header">
      { title && <h3>{title}</h3>}
      { description && <p>{description}</p>}
     </div>

     <div className="form__body">
      {
        fields?.map( field => <FieldSelector key={field.id} field={field} /> )
      }
     </div>
     
     <div className="form__footer">
        <SubmitField 
          
        />
     </div>


    </form>
  )
}
