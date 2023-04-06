import { useDispatch, useSelector } from 'react-redux';
import './style/App.css';
import { decrement, increment } from './redux/store/slices';

function App(): JSX.Element {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <section className='counter'>
        <span>{count}</span>
        <button className='btn-counter' onClick={()=> dispatch(increment())}>Increment</button>
        <button className='btn-counter' onClick={()=> dispatch(decrement())}>Decrement</button>
      </section>
    </div>
  );
}

export default App;
