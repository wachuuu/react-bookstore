import { useDispatch, useSelector } from 'react-redux';


function BookList() {
  const dispatch = useDispatch()
  const state = useSelector(selector => {
    console.log('selector', selector.dataSource)
    return selector.dataSource
  })

  return (
    <div className="BookList">
      BookList works!
    </div>
  );
}

export default BookList
