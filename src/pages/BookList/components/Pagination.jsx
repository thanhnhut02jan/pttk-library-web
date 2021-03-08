import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon'
import transitions from '@material-ui/core/styles/transitions';

const useStyles = makeStyles((theme) => ({
  root: {
    float: 'right',
    fontFamily: 'Roboto',
    fontSize: '20px',
    padding: '16px 0',
    userSelect: 'none',
    color: '#222',

  },
  arrow_icon: {
    padding: '8px 12px',
    borderRadius: '4px',
    transition: '0.1s',
    '&:hover': {
      color: '#fff',
      cursor: 'pointer',
      backgroundColor: '#757de8'
    }
  },
}));

export default function Pagination(props) {
  const classes = useStyles();
  let { currentPage, totalPages, setCurrentPage } = props;
  return (
    <div className={classes.root}>
      <i className={'fas fa-chevron-left ' + classes.arrow_icon}
        onClick={() => { if ((currentPage - 1) >= 0) setCurrentPage(currentPage - 1); }}
      />
      <span style={{ padding: '0 8px' }}>   {currentPage + 1} / {totalPages + 1}   </span>
      <i className={'fas fa-chevron-right ' + classes.arrow_icon}
        onClick={() => { if ((currentPage + 1) <= totalPages) setCurrentPage(currentPage + 1); }}
      />
    </div>
  )
}
