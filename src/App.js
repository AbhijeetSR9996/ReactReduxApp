import './App.css';
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { incNumber,decNumber } from './actions/index';

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Increment/Decrement Counter</h1>
      <h3>using React Redux</h3>
      <div className='quantity'>
        <a className='quantity_minus' title="Decrement" onClick={() => dispatch(decNumber())}><span>-</span></a>
        <input name='quantity' type="text" className="quantity_input" value={myState}/>
        <a className='quantity_plus' title='Increment' onClick={() => dispatch(incNumber())}><span>+</span></a>
      </div>
    </div>
  );
}

export default App;
