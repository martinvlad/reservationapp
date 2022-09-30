import {React, useState} from 'react'
import './Header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBed, faPlane, faTaxi, faCar, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons';
import {DateRange} from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; 
import {format} from 'date-fns';
export default function Header({type }) {
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const [show, setShow] = useState(false);
      const [optionsShow, setOptionsShow] = useState(false);
      const [options, setOptions] = useState({
        adult : 1,
        children: 0,
        roomNumber: 1
      });

      function onButtonChange (name, operation){
        
        setOptions((prevState) =>{
          return {
            ...prevState, [name]: operation == 'increase' ? options[name] + 1 : options[name] - 1
          }
        })
      }
  return (
    <div className='header'>
        <div className={type == 'list' ? 'headerContainer listMode' : 'headerContainer'}>

        <div className="headerList">
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
            </div>
        </div>
        { type !== 'list' && <><h1 className="headerTitle">A lifetime of discounts? It's genius!</h1>
        <p className="headerDesc">Get rewarded for your travels - unlock instant savings of 10% or more with a free MartinVladimirov account</p>
        <button className='headerBtn'>Sign In / Register</button>
        <div className="headerSearch">
            <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className='headerIcon' />
            <input type="text" placeholder='Where are you going..' className='headerSearchInput' />
            </div>
            <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
           <span onClick={()=> setShow(!show)} className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
         {show &&  <DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  className='date'
/>}
            </div>
            <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className='headerIcon' />
            <span onClick={() => setOptionsShow(!optionsShow)} className='headerSearchText'>{`${options.adult} adult ${options.children} children ${options.roomNumber} room`}</span>
           {optionsShow && <div className="options">
            <div className="optionItem">
              <span className="optionText">Adult</span>
              <div className="optionCounter">
              <button disabled={options.adult <= 1 ? true: false} className="optionCounterButton" onClick={() => onButtonChange('adult', 'decrease')}> -</button>
              <span className="optionCounterText"> {options.adult}</span>
              <button className="optionCounterButton" onClick={() => onButtonChange('adult', 'increase')}> + </button>
              </div>
            </div>
            <div className="optionItem">
              <span className="optionText">Children</span>
              <div className="optionCounter">
              <button disabled={options.children <= 0 ? true: false} className="optionCounterButton" onClick={() => onButtonChange('children', 'decrease')}> -</button>
              <span className="optionCounterText">{options.children}</span>
              <button className="optionCounterButton" onClick={() => onButtonChange('children', 'increase')}> + </button>
              </div>
            </div>
            <div className="optionItem">
              <span className="optionText">Room</span>
              <div className="optionCounter">
              <button disabled={options.roomNumber <= 1 ? true: false} className="optionCounterButton" onClick={() => onButtonChange('roomNumber', 'decrease')}> -</button>
              <span className="optionCounterText">{options.roomNumber}</span>
              <button className="optionCounterButton" onClick={() => onButtonChange('roomNumber', 'increase')}> + </button>
              </div>
            </div>
           </div>}
           
            </div>
            <div className="headerSearchItem">
                <button className="headerBtn">Search</button>
            </div>
        </div></>}
        </div>
    </div>
  )
}
