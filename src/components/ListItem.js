import DeleteIcon from '@mui/icons-material/Delete';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import './ListItem.css';


function ListItem(props) {
  const [value, setValue] = useState(props.item.rating)

  const handleChange = (e, newVal) => {
    setValue(newVal)
    props.editRating({...props.item, rating: newVal})
  }

  return (
    <div className="ListItem">
      <div className="image">
        Image
      </div>

      <div className="info">
        <div className="header">
          <h2 className="title">
            {props.item.title}
          </h2>
          <div className="author">
            <span>Author:</span> {props.item.author}
          </div>
        </div>
        <Rating size="small"
          onChange={handleChange} 
          value={value} />
        <div>
          {props.item.description}
        </div>
      </div>

      <DeleteIcon className="delete" 
        fontSize="small"
        onClick={() => props.deleteItem(props.item)} />

    </div>
  );
}

export default ListItem
