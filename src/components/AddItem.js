import { useState } from "react"
import { useDispatch } from "react-redux"
import { addToStore } from "../actions"

const emptyItem = {
  id: null,
  title: null,
  author: null,
  description: null,
  rating: null
}

function AddItem() {

  const [form, setForm] = useState(emptyItem)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    dispatch(addToStore(form))
    e.preventDefault();
  }

  const handleChange = (e) => {
    const val = e.target.value
    switch (e.target.id) {
      case 'author':
        setForm({...form, author: val})
        break
      case 'title':
        setForm({...form, title: val})
        break
      case 'description':
        setForm({...form, description: val})
        break
      case 'rating':
        setForm({...form, rating: val})
        break
      default:
    }
  }

  return (
    <div className="AddItem">
      <form onSubmit={handleSubmit}>
        <label htmlFor="author">Author</label>
        <input id="author" onChange={handleChange}></input>

        <label htmlFor="title">Title</label>
        <input id="title" onChange={handleChange}></input>

        <label htmlFor="description">Description</label>
        <input id="description" onChange={handleChange}></input>

        <label htmlFor="rating">Rating</label>
        <input id="rating" onChange={handleChange}></input>

        <input type="submit" value="Save" />
      </form>
    </div>
  )
}

export default AddItem
