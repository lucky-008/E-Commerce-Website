import { IoSearch } from 'react-icons/io5';
import Button from '@mui/material/Button';
const Searchbar=()=>{
    return(
        <div className='header-search d-flex'>
                                    <input type='text'placeholder='Search for products...'/>
                                    <Button><IoSearch /></Button>
                                </div>
    )

}
export default Searchbar;