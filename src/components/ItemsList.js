import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromStore, updateStore } from '../actions';
import ListItem from './ListItem';
import Search from './Search';

const sortDirectionsEnum = ['desc', 'asc'] 

function compare(a, b, param, direction) {
  if (a[param] < b[param]) {
    return direction === 'desc' ? -1 : 1;
  }
  if (a[param] > b[param]) {
    return direction === 'desc' ? 1 : -1;
  }
  return 0;
}

function ItemsList() {
  const dataSource = useSelector(selector => selector.dataSource)
  const dispatch = useDispatch()
  const columnTitles = ['title', 'author', 'description', 'rating']
  const [sortBy, setSortBy] = useState('id')
  const [sortDirection, setSortDirection] = useState(sortDirectionsEnum[0])

  const editItemRating = (item) => {
    console.log('edit', item)
    dispatch(updateStore(item))
  }
  
  const deleteItem = (item) => {
    console.log('delete', item)
    dispatch(removeFromStore(item))
  }

  const items = [...dataSource]
    .sort((a, b) => compare(a, b, sortBy, sortDirection))
    .map(item => (
      <ListItem deleteItem={deleteItem} editRating={editItemRating} item={item} key={item.id} />
    ))

  const columns = columnTitles.map(title => (
    <button key={title} onClick={() => setSortBy(title)}>{ title }</button>
  ))

  return (
    <div className="ItemsList">
      <Search />
      <button onClick={() => setSortDirection(sortDirectionsEnum[0])}>Descending order</button>
      <button onClick={() => setSortDirection(sortDirectionsEnum[1])}>Ascending order</button>
      <div>
        { columns }
      </div>
      { items }
    </div>
  );
}

export default ItemsList
