import Rows from "./Rows"

const Table = ({ items }) => {
  return (
    // First placing the table in a div to control it as a container
    <div className='table'> 
        <table> 
            {/* We open the table semantic tag followed by the body since we dont need a table heading */}
            <tbody>
                {/* Then we map in through the items which is the data we got from the API_URL. to return a single item with its specific key */}
                {
                    items.map((item) => (
                        // The item is then passed into another component that would return the table row 
                        <Rows
                            key={item.id}
                            item={item}
                         />
                    ))
                }
            </tbody>
        </table>      
    </div>
  )
}

export default Table
