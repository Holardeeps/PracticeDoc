
const Cell = ({ dataCell}) => {
  return (
    <td>
        {/* we just render the dataCell since its value has been passed down from its parent component as a stringified object */}
      {dataCell}
    </td>
  )
}

export default Cell
