import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateDataSource } from '../actions';

function Search() {
  const allItems = useSelector(selector => selector.allItems)
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    const fitSearch = (item) => {
      const phrase = `${item.author} ${item.title} ${item.description}`.toLowerCase()
      return phrase.includes(search.toLowerCase())
    }

    if (search) {
      const filtered = [...allItems].filter(fitSearch)
      dispatch(updateDataSource(filtered))
    } else {
      dispatch(updateDataSource([...allItems]))
    }
  }, [search, allItems, dispatch])

  return (
    <div className='Search'>
      <input type="search" onChange={e => setSearch(e.target.value)}></input>
    </div>
  )
}

export default Search
