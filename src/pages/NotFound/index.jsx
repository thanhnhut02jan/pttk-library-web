import React from 'react'
// import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';

const style = {
  textAlign: 'center',
  color: '#333',
  paddingTop: '64px'
}

export default function NotFound() {
  return (
    <div>
      <Typography style={style} variant='h3'>404<br />Page not found</Typography>
    </div>
  )
}
