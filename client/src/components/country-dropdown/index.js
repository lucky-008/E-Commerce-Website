
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import React, { useContext, useEffect, useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import { IoSearch } from 'react-icons/io5';
import { IoClose } from "react-icons/io5";
import Slide from '@mui/material/Slide';
import { MyContext } from '../../App';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
  const [isOpenModal, setisOpenModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({country:'',index:-1})
  const[countryList , setCountryList] = useState([]);
  const context = useContext(MyContext);
  const onCountrySelect = (country) => {
    setSelectedCountry(prevState => ({
      ...prevState,
      country: country,

    }));
    setisOpenModal(false)

  }
  useEffect(()=>{
    setCountryList(context.countryList);
  },[])


  const filterList =(e)=>{
    const keyword = e.target.value.toLowerCase();
    if(keyword!==""){
const list = countryList.filter((item)=>{
      return item.country.toLowerCase().includes(keyword);
     });
      setCountryList(list);
    
    }else{
      setCountryList(context.countryList);
      
    }
    
  }
    return (
    <>
      <Button className='country-dropdown' onClick={() => {setCountryList(context.countryList);setisOpenModal(true)}}>
        <div className='info d-flex flex-column'>
          <span className='label'>your location</span>
          <span className='name'>{selectedCountry.country}</span>
      
        </div>
        <span className='ml-auto'><FaAngleDown /></span>

      </Button>

      <Dialog open={isOpenModal} onClose={() => setisOpenModal(false)} className='locationModel' TransitionComponent={Transition}>
        <h4><b>Choose your delivery location</b></h4>
        <p>Enter your address and we will specify the offer for your area.</p>
        <Button className='close_' onClick={() => setisOpenModal(false)}><IoClose /></Button>
        <div className='header-search w-100'>
          <input type='text' placeholder='Search your country... ' onChange={filterList} />
          <Button><IoSearch /></Button>
        </div>

        <ul className='countryList mt-3'>
          {
            countryList.map((obj, index) => {
              return <li key={index}><Button className={`${obj.country===selectedCountry.country?'active':'inactive'}`} onClick={() => onCountrySelect(obj.country)}>{obj.country}</Button></li>

            })
          }

        </ul>


      </Dialog>
    </>
  )
}

export default CountryDropdown