import { EmailField } from "./fields/EmailField"
import { NameField } from "./fields/NameField"
import { PhoneField } from "./fields/PhoneField"
import { TextAreaField } from "./fields/TextAreaField"

export const FieldSelector = ({field}) => {

  switch (field.type) {
    case "name":
      return <NameField />

    case "phone":
      return <PhoneField />

    case "email":
      return <EmailField />
    
    case "textarea":
      return <TextAreaField />
  
    default:
      return <p>Campo no soportado</p>
  }

}
