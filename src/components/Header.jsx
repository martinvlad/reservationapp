import {React, useState} from 'react'
import './Header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBed, faPlane, faTaxi, faCar, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons';
import {DateRange} from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; 
import {format} from 'date-fns';
export default function Header() {
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
  return (
    <div className='header'>
        <div className="headerContainer">

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
        <h1 className="headerTitle">A lifetime of discounts? It's genius!</h1>
        <p className="headerDesc">Get rewarded for your travels - unlock instant savings of 10% or more with a free Lamabooking account</p>
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
            <span className='headerSearchText'>{`${options.adult} adult ${options.children} children ${options.roomNumber} room`}</span>
            </div>
            <div className="headerSearchItem">
                <button className="headerBtn">Search</button>
            </div>
        </div>
        </div>
    </div>
  )
}
