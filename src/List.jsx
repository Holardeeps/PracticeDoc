import ListItem from "./ListItem"

const List = ({ items }) => {
  return (
    <ul>
      {
        items.map((item) => ( //Here we use the normal brackets instead of the curly braces so we can return the block of code defined inside of it immediately. if we use curly braces we would have to use the retrun keyWord which is more ideal if we have a lenghty block of code to return in this higher order functions
            <ListItem
                key={item.id} //We pass in a key for every item in the list/array.
                item={item}
             />
        ))
      }
    </ul>
  )
}

export default List
