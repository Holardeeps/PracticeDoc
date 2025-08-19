import Cell from "./Cell";

const Rows = ({ item }) => {
    // We convert the whole item which is a javaScript object into an array like object returning key, value pairs in the array. Object.entries(object).
    // console.log(item)
    const cellData = Object.entries(item);

  return (
    <tr>
      {
        cellData.map(([key,value]) => { //Here we map through the object array and get both the key and value.
            const dataCell = JSON.stringify(value) //Some values may be returned as an objected nested in the main object. So we tsringify the whole value to control such instaces to prevent errors. since we cant map through object with keys
            return(
                //Then we return a cell component that is passed the value that has been stringified
                <Cell
                    key={key}
                    dataCell={dataCell}
                 />
            )
        })
      }
    </tr>
  )
}

export default Rows
