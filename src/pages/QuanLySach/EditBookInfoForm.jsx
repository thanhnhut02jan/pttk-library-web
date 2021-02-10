import { Form, Modal, Button } from 'react-bootstrap'

const EditBookInfoForm = (props) => {
  const {
    id,
    name,
    author,
    amount,
    showFormState,
    setShowForm } = props;

  // const handleChange = (e) => {
  //   e.target.value
  // }

  return (
    <Modal show={showFormState} onHide={() => setShowForm(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Chỉnh sửa thông tin sách</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group controlId="editBookInfoForm.id">
            <Form.Label>Id</Form.Label>
            <Form.Control type="text" value={id} />
          </Form.Group>
          <Form.Group controlId="editBookInfoForm.name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={name} />
          </Form.Group>
          <Form.Group controlId="editBookInfoForm.author">
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" value={author} />
          </Form.Group>
          <Form.Group controlId="editBookInfoForm.amount">
            <Form.Label>Author</Form.Label>
            <Form.Control type="number" value={amount} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowForm(false)}>Close</Button>
        <Button variant="primary" onClick={() => setShowForm(false)}>Save changes</Button>
      </Modal.Footer>
    </Modal>


  )
}

export default EditBookInfoForm;