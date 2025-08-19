
const Button = ({ title, request, setRequest }) => {
  return (
    <button 
    // This is a tenary operation where we determine the className of this html semantic tag
        className={request == title ? 'selected' : null}
        type="button" //We make this a button tyrp instead of a submit so it doesnt act as a default submit button sending data to a form
        onClick={() => setRequest(title)} //Then the Onclick annonymous function changes the request state through the setter Function on each click in the button component
    >
      {/* The title passed as a prop into the component as the text for the button*/}
      {title}
    </button>
  )
}

export default Button
