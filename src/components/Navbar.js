import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Navbar = () => {
    // static defaultProps = {
    //     title: 'Sudoku Puzzle',
    //     icon: 'fas fa-coins',
    //   };
    
    //   static propTypes = {
    //     title: PropTypes.string.isRequired,
    //     icon: PropTypes.string.isRequired,
    //   };

  const [time, setTime] = useState(0)

  // const startTimer = () => {
  // setInterval(fuction(){setTime(time + 1);}, 1000);
  // }

  return (
    <nav className='navbar bg-info text-white'>
        <div className="navbar-text">{time}</div>
        <button className="button">Start</button>
        <div  className="navbar-brand">Sudoku <i className='fas fa-coins'></i> </div>
    </nav>
  )
}
