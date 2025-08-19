
const Button = ({ title, request, setRequest }) => {
  return (
    <button 
        className={request == title ? 'selected' : null}
        type="button" 
        onClick={() => setRequest(title)}
    >
      {title}
    </button>
  )
}

export default Button
