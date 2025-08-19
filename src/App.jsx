import { useEffect, useState } from 'react'; //Importing  the useEffect and useState hooks from react

// Importing our components from the directories that they were created in
import Button from "./Button"
import List from './List';

// This is the App function that we are exporting out from this component into the INDEX.HTML through MAIN.JSX
function App() {
  // We create states that would change during and after render based on different events
  const [items, setItems] = useState([]);
  const [request, setRequest] = useState('users')

  const API_URL = 'http://jsonplaceholder.typicode.com/'; //We define any api with API_URL  

  useEffect(() => { //The useEfect to load the API_URL on first render and also on event change or generation

    const fetchData = async () => { //We run an asynchronous function to fetch the data from the API 

      try { //Putting the API fetching in a TRY CATCH BLOCK to control error

        const response = await fetch(`${API_URL}${request}`);
        
        if(!response.ok) { //controlling the data we get from the API checking if it didnt return an object
          console.error("Returns an Error: ", response.status)
          return; //Here return; breaks out of the function if the condition is false
        }

        const data = await response.json(); //Here we convert our response we get from our API to js object
        setItems(data); //And set the data to our items state to control the data we display
        // console.log(data);

      } catch (err) {
        console.log(err);
      } //finally is best used for turning off a loading spinner by changing a value from false to true or otherwise

    }

    fetchData(); //Then we call the asynchronous function
  }, [request]) //Dependency array that would contorl the useEffect to not update first render. it would only update when the contorl is updated/changed after render.

  return (
    <main>
      <div>


      <Button
        title='users'
        request={request}
        setRequest={setRequest}
       />
      <Button
        title='posts'
        request={request}
        setRequest={setRequest}
       />
      <Button
        title='comments'
        request={request}
        setRequest={setRequest}
       />
      </div>

       <List
        items={items}
        />
    </main>
  )
}

export default App
