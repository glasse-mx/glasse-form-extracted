import { EmailField } from "./fields/EmailField"
import { NameField } from "./fields/NameField"
import { PhoneField } from "./fields/PhoneField"
import { TextAreaField } from "./fields/TextAreaField"

export const FieldSelector = ({field}) => {

  switch (field.type) {
    case "name":
      return <NameField 
          field={field}
          id={field.id}
          inputs={field.inputs}
        />

    case "phone":
      return <PhoneField 
        id={field.id}
        label={field.label}
      />

    case "email":
      return <EmailField 
        id={field.id}
        label={field.label}
      />
    
    case "textarea":
      return <TextAreaField 
        label={field.label}
        id={field.id} 
      />
  
    default:
      return <p>Campo no soportado</p>
  }

}
