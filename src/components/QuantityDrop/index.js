
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { Button } from '@mui/material';
import { useState } from "react";
const QuantityDrop =()=>{

    const [inputVal,setinputVal] = useState(1);

    const minus=()=>{
        if(inputVal!==1 && inputVal>0){
            setinputVal(inputVal-1);
    }

}
    const plus=()=>{
        if(inputVal)
            setinputVal(inputVal+1);
    }

    return(

        <div className="quantityDrop d-flex align-items center">
                  <Button onClick={minus}><FiMinus/></Button>
                  <input type="text" value={inputVal}/>
                  <Button onClick={plus}><FaPlus/></Button>
                </div>
    )

}
export default QuantityDrop;