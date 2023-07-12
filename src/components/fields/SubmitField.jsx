
export const SubmitField = ({id,text}) => {
  return (
    <button id={ id ? id : 'enviarMensaje'} type="submit">
        { text ? text : 'Enviar Mensaje'}
    </button>
  )
}
