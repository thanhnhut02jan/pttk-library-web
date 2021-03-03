import React from 'react'

import Container from '@material-ui/core/Container'
import GridList from '@material-ui/core/GridList'
import Card from './components/Card';
import { makeStyles } from '@material-ui/core/styles'

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

  let BookInfos = data.vanhoc;
  const classes = useStyle();

  return (
    <Container className={classes.mt}>
      {BookInfos.map((info, i) => <Card key={i} imgsrc={info.imgsrc} title={info.title} author={info.author} />)}
    </Container>

  )
}

let data = {
  "vanhoc": [
    {
      "imgsrc": "https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/image_195509_1_33312.jpg",
      "title": "Vui Vẻ Không Quạu Nha",
      "supplier": "NXB Phụ Nữ Việt Nam",
      "author": "Ở Đây Zui Nè",
      "quantity": 2
    },
    {
      "imgsrc": "https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/i/biamem.jpg",
      "title": "Con Chim Xanh Biếc Bay Về",
      "supplier": "NXB Trẻ",
      "author": "Nguyễn Nhật Ánh",
      "quantity": 1
    },
    {
      "imgsrc": "https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/i/bia1_tobinhyen_2.jpg",
      "title": "Tô Bình Yên Vẽ Hạnh Phúc",
      "supplier": "NXB Phụ Nữ Việt Nam",
      "author": "Kulzsc",
      "quantity": 0
    },
    {
      "imgsrc": "https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/image_198719.jpg",
      "title": "Từ Điển Tiếng “Em”",
      "supplier": "NXB Phụ Nữ Việt Nam",
      "author": "Khotudien",
      "quantity": 0
    },
    {
      "imgsrc": "https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/u/n/untitled-9_19.jpg",
      "title": "Cà Phê Cùng Tony (Tái Bản 2017)",
      "supplier": "NXB Trẻ",
      "author": "Tony Buổi Sáng",
      "quantity": 0
    },
    {
      "imgsrc": "https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/t/g/tgdq-novel-kem-lot-ly.jpg",
      "title": "Thanh Gươm Diệt Quỷ: Đóa Hoa Hạnh Phúc",
      "supplier": "NXB Kim Đồng",
      "author": "Koyoharu Gotouge, Aya Yajima",
      "quantity": 0
    },
    {
      "imgsrc": "https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/image_195509_1_36793.jpg",
      "title": "Nhà Giả Kim (Tái Bản 2020)",
      "supplier": "NXB Hội Nhà Văn",
      "author": "Paulo Coelho",
      "quantity": 0
    },
    {
      "imgsrc": "https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/x/x/xxxxxxxxxxxxx.jpg",
      "title": "Và Rồi, Tháng 9 Không Có Cậu Đã Tới",
      "supplier": "NXB Thế Giới",
      "author": "Natsuki Amasawa",
      "quantity": 0
    },
    {
      "imgsrc": "https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/1/118087351_252537175725948_1753576288010280772_n.jpg",
      "title": "Thiên Quan Tứ Phúc - Tập 1",
      "supplier": "NXB Hà Nội",
      "author": "Mặc Hương Đồng Khứu",
      "quantity": 1
    },
    {
      "imgsrc": "https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/h/chuy_n-t_nh-thanh-xu_n-bi-h_i-10_1.jpg",
      "title": "Chuyện Tình Thanh Xuân Bi Hài Của Tôi Quả Nhiên Là Sai Lầm - Tập 10.5",
      "supplier": "NXB Hà Nội",
      "author": "Wataru WATARI",
      "quantity": 2
    },
    {
      "imgsrc": "https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/image_195509_1_32288.jpg",
      "title": "Những Gì Đã Qua Đừng Nghĩ Lại Quá Nhiều (Tái Bản 2020)",
      "supplier": "NXB Văn Học",
      "author": "Minh Mẫn, Du Phong",
      "quantity": 3
    },
    {
      "imgsrc": "https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/a/sao15---bia1.jpg",
      "title": "Sword Art Online 15",
      "supplier": "NXB Hà Nội",
      "author": "Reki Kawahara",
      "quantity": 2
    }
  ]
}