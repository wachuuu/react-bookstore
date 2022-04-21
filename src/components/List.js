import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromStore, updateStore } from '../actions';
import './List.css';
import ListItem from './ListItem';
import Search from './Search';

const sortDirectionsEnum = ['asc', 'desc']
function compare(a, b, param, direction) {
  if (a[param] < b[param]) {
    return direction === 'asc' ? -1 : 1;
  }
  if (a[param] > b[param]) {
    return direction === 'asc' ? 1 : -1;
  }
  return 0;
}

function List() {
  const dataSource = useSelector(selector => selector.dataSource)
  const dispatch = useDispatch()
  const sortOptions = ['title', 'author', 'description', 'rating']
  const [sortBy, setSortBy] = useState(sortOptions[0])
  const [sortDirection, setSortDirection] = useState(sortDirectionsEnum[0])

  const editItemRating = (item) => {
    dispatch(updateStore(item))
  }

  const deleteItem = (item) => {
    dispatch(removeFromStore(item))
  }

  const items = [...dataSource]
    .sort((a, b) => compare(a, b, sortBy, sortDirection))
    .map(item => (
      <ListItem deleteItem={deleteItem} editRating={editItemRating} item={item} key={item.id} />
    ))

  const sort =
    sortOptions.map(item => (
      <Button variant={sortBy === item ? 'contained' : 'outlined'} key={item} onClick={() => setSortBy(item)}>{item}</Button>
    ))

  return (
    <div className="List">
      <div className="options">
        <div className="search-container">
          <p>Search your favourite book</p>
          <Search />
        </div>
        <div className="order-container">
          <p>Order by:</p>
          <div className="buttons">
            <ButtonGroup>
              {sort}
            </ButtonGroup>
            <KeyboardArrowUpIcon 
              className={sortDirection === sortDirectionsEnum[0] ? 'arrow-btn active' : 'arrow-btn'}
              color="primary"
              fontSize="large"
              onClick={() => setSortDirection(sortDirectionsEnum[0])} />
            <KeyboardArrowDownIcon 
              className={sortDirection === sortDirectionsEnum[1] ? 'arrow-btn active' : 'arrow-btn'}
              color="primary"
              fontSize="large"
              onClick={() => setSortDirection(sortDirectionsEnum[1])} />
          </div>
        </div>
      </div>
      {items}
    </div>
  );
}

export default List
