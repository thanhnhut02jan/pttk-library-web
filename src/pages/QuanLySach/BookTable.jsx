import React from 'react';
import { Table } from 'react-bootstrap';

import TableRow from './TableRow'

const BookTable = (props) => {
  let data = {
    book: [
      {
        id: 1,
        name: 'Tôi tự học',
        author: 'Nguyễn Duy Cần',
        amount: 5
      },
      {
        id: 2,
        name: 'Óc sáng suốt',
        author: 'Nguyễn Duy Cần',
        amount: 4
      },
      {
        id: 1,
        name: 'Tôi tự học',
        author: 'Nguyễn Duy Cần',
        amount: 5
      },
      {
        id: 2,
        name: 'Óc sáng suốt',
        author: 'Nguyễn Duy Cần',
        amount: 4
      },
      {
        id: 1,
        name: 'Tôi tự học',
        author: 'Nguyễn Duy Cần',
        amount: 5
      },
      {
        id: 2,
        name: 'Óc sáng suốt',
        author: 'Nguyễn Duy Cần',
        amount: 4
      },
      {
        id: 1,
        name: 'Tôi tự học',
        author: 'Nguyễn Duy Cần',
        amount: 5
      },
      {
        id: 2,
        name: 'Óc sáng suốt',
        author: 'Nguyễn Duy Cần',
        amount: 4
      },
      {
        id: 1,
        name: 'Tôi tự học',
        author: 'Nguyễn Duy Cần',
        amount: 5
      },
      {
        id: 2,
        name: 'Óc sáng suốt',
        author: 'Nguyễn Duy Cần',
        amount: 4
      },
      {
        id: 1,
        name: 'Tôi tự học',
        author: 'Nguyễn Duy Cần',
        amount: 5
      },
      {
        id: 2,
        name: 'Óc sáng suốt',
        author: 'Nguyễn Duy Cần',
        amount: 4
      },
      {
        id: 1,
        name: 'Tôi tự học',
        author: 'Nguyễn Duy Cần',
        amount: 5
      },
      {
        id: 2,
        name: 'Óc sáng suốt',
        author: 'Nguyễn Duy Cần',
        amount: 4
      }
    ]
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
        {data.book.map((item, i) => (<TableRow {...item} key={i} id={i + 1}></TableRow>))}
      </tbody>
    </Table>
  );
}

export default BookTable;