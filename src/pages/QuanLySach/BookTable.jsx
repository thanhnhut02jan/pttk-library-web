import React from 'react';
import { Table } from 'react-bootstrap';

import { useState } from 'react';

import TableRow from './TableRow';
import EditBookInfoForm from './EditBookInfoForm';
import BooksData from './Data';

const BookTable = (props) => {
  let data = {
    book: BooksData
  }

  const [currentItemShow, setCurrentItemShow] = useState({});
  const [isShowForm, setShowForm] = useState(false);

  const showForm = (id) => {
    setCurrentItemShow(data.book[id - 1]);
    setShowForm(true);
  }

  return (
    <Table hover striped>
      <thead >
        <tr>
          <th>#</th>
          <th>Tên sách</th>
          <th>Tác giả</th>
          <th>Số lượng</th>
        </tr>
      </thead>
      <tbody>
        {data.book.map((item) => (<TableRow showForm={showForm} {...item} key={item.id}></TableRow>))}
      </tbody>
      <EditBookInfoForm show={isShowForm} setShowForm={setShowForm} {...currentItemShow}></EditBookInfoForm>
    </Table>

  );
}

export default BookTable;