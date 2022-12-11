import { useState } from "react";
import Country from './Country';

const ShowButton = ({country}) => {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    }
    
    return (
        <>
            <button onClick={handleClick}>show</button>
            {show && <Country country={country} />}
        </>

    );
}

export default ShowButton;