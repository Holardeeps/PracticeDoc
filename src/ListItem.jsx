
const ListItem = ({ item }) => {
  return (
    <li>
      {/* We convert the list item we want to display to javascript object string from JSON object */}
      {JSON.stringify(item)} 
    </li>
  )
}

export default ListItem
