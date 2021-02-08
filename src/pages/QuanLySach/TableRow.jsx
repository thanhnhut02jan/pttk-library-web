const TableRow = (props) => {
  let { id, name, author, amount } = props;
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{author}</td>
      <td>{amount}</td>
    </tr>
  )
}

export default TableRow;