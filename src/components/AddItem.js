import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Button } from "@mui/material";
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToStore } from "../actions";
import './AddItem.css';


const Input = styled('input')({
  display: 'none',
});

const emptyItem = {
  id: null,
  title: null,
  author: null,
  description: null,
  rating: null
}

function AddItem() {

  const [form, setForm] = useState(emptyItem)
  const [visible, setVisible] = useState(false)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    dispatch(addToStore(form))
    e.preventDefault();
  }

  const handleChange = (e) => {
    const val = e.target.value
    switch (e.target.id) {
      case 'author':
        setForm({ ...form, author: val })
        break
      case 'title':
        setForm({ ...form, title: val })
        break
      case 'description':
        setForm({ ...form, description: val })
        break
      default:
        if (isNaN(val)) break;
        setForm({ ...form, rating: +val })
        break
    }
  }

  if (visible) {
    return (
      <div className="AddItem">
        <CloseIcon className="close"
          sx={{ fontSize: 25 }}
          onClick={() => setVisible(false)} />

        <form>
          <div className="inline">

            <TextField className="input"
              size="small"
              id="title"
              label="Title"
              onChange={handleChange} />

            <TextField className="input"
              size="small"
              id="author"
              label="Author"
              onChange={handleChange} />

            <div>
              <div><small>Your rate</small></div>
              <Rating
                id="rating"
                onChange={handleChange} />
            </div>
          </div>

          <TextField className="input"
            id="description"
            label="Description"
            multiline
            rows={3}
            onChange={handleChange} />

          <div className="thumbnail">
            <label htmlFor="thumbnail">
              <Input accept="image/*" id="thumbnail" multiple type="file" />
              <Button variant="outlined" component="span" startIcon={<PhotoCamera />}>
                Upload thumbnail
              </Button>
            </label>
          </div>
        </form>

        <div className="submit">
          <Button
            onClick={handleSubmit}
            variant="contained">
            Add
          </Button>
        </div>
      </div>
    )
  } else {
    return (
      <div className="AddItem">
        <Button
          variant="contained"
          onClick={() => setVisible(true)}
          startIcon={<AddIcon />}>
          Add new book
        </Button>
      </div>
    )
  }
}

export default AddItem
