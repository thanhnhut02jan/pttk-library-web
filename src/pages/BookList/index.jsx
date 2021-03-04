import React, { useState, useEffect } from 'react'

import Container from '@material-ui/core/Container'
import GridList from '@material-ui/core/GridList'
import Card from './components/Card';
import { makeStyles } from '@material-ui/core/styles'
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

  let [data, uptData] = useState([]);

  useEffect(() => {
    (async () => {
      const doc = await db.collection('bookInfos').doc('van-hoc').get();
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        uptData(doc.data().vanhoc);
      }
    })();
  }, [])



  console.log(data)

  return (
    <Container className={classes.mt}>
      {data.map((info, i) => <Card key={i} imgsrc={info.imgSrc} title={info.title} author={info.author} />)}
    </Container>

  )
}

