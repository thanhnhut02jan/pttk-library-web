const TableRow = (props) => {
  let { id, name, author, amount, showForm } = props;
  return (
    <tr onClick={() => showForm(id)}>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{author}</td>
      <td>{amount}</td>
    </tr>
  )
}

export default TableRow;