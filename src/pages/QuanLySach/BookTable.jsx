import React from 'react';
import { Table } from 'reactstrap';

const Example = (props) => {
    return (
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tên sách</th>
                    <th>Tác giả</th>
                    <th>Số lượng</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Tôi tự học</td>
                    <td>Nguyễn Duy Cần</td>
                    <td>2</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Óc sáng suốt</td>
                    <td>Nguyễn Duy Cần</td>
                    <td>1</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Trí tuệ giả tạo</td>
                    <td>Nicholas Carr</td>
                    <td>5</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default Example;