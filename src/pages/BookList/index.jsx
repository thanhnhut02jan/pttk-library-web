import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Card from './components/Card';
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem'

import db from '../../service/FireStore'

import Pagination from './components/Pagination'

const useStyle = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  mt: {
    marginTop: theme.spacing(4)
  }
}))

export default function BookList() {
  const classes = useStyle();

  let [category, setCategory] = useState('all');
  let [data, uptData] = useState([]);

  const cardsPerPage = 10;
  let [currentPage, setCurrentPage] = useState(0);
  let [totalPages, setTotalPages] = useState(0);

  const BookInfosCollection = db.collection('bookInfos')

  let fetchData = async () => {
    var snapshot = category != 'all' ? BookInfosCollection.where('category', '==', category) : BookInfosCollection;
    snapshot = await snapshot.orderBy('title').get();

    setCurrentPage(0);
    setTotalPages(Math.floor(snapshot.docs.length / cardsPerPage));

    if (snapshot.empty) {
      console.log('No such document!');
      uptData([]);
    } else {
      let t = [];
      snapshot.forEach(doc => {
        t.push(doc.data());
      })
      uptData(t);
    }
  }

  useEffect(() => {
    fetchData();
  }, [category]);

  useEffect(() => {

  }, [currentPage, totalPages])

  let handleChangeCategory = (e) => {
    setCategory(e.target.value);
  }

  return (
    <Container className={classes.mt}>
      <FormControl>
        <InputLabel id="category">Category</InputLabel>
        <Select
          labelId="category"
          id="category-select"
          value={category}
          onChange={handleChangeCategory}
        >
          <MenuItem value='all'>-- All --</MenuItem>
          <MenuItem value={'van-hoc'}>Văn học</MenuItem>
          <MenuItem value={'kinh-te-chinh-tri-phap-ly'}>Kinh tế và Chính trị</MenuItem>
          <MenuItem value={'tam-ly-ky-nang-song'}>Tâm lý và Kĩ năng sống</MenuItem>
          <MenuItem value='giao-khoa-tham-khao'>Sách giáo khoa</MenuItem>

          {/*  */}
        </Select>
      </FormControl>
      {data.length > 0 && <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        cardsPerPage={cardsPerPage}
      />}
      <React.Fragment>
        {data.slice(currentPage * cardsPerPage, currentPage * cardsPerPage + cardsPerPage).map((info, i) =>
          <Card
            key={i}
            imgsrc={info.imgSrc}
            title={info.title}
            author={info.author}
            category={info.category}
          />)}
      </React.Fragment>
      {data.length > 0 && <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        cardsPerPage={cardsPerPage}
      />}
    </Container>

  )
}

