import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Card from './components/Card';
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem'

import db from '../../service/FireStore'

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

  let [category, setCategory] = useState('van-hoc');
  let [data, uptData] = useState([]);

  let fetchData = async () => {
    const snapshot = await db.collection('bookInfos').where('category', '==', category).get();
    if (snapshot.empty) {
      console.log('No such document!');
    } else {
      let t = []
      snapshot.forEach(doc => {
        t.push(doc.data());
        console.log(doc)
      })
      uptData(t);
    }
  }

  useEffect(() => {
    fetchData();
  }, [category]);

  let handleChangeCategory = (e) => {
    setCategory(e.target.value);
  }

  return (
    <Container className={classes.mt}>
      <FormControl >
        <InputLabel id="category">Category</InputLabel>
        <Select
          labelId="category"
          id="category-select"
          value={category}
          onChange={handleChangeCategory}
        >
          <MenuItem value={'van-hoc'}>Văn học</MenuItem>
          <MenuItem value={'ky-nang-song'}>Kỹ năng sống</MenuItem>
        </Select>
      </FormControl>
      {data.map((info, i) => <Card key={i} imgsrc={info.imgSrc} title={info.title} author={info.author} />)}
    </Container>

  )
}

