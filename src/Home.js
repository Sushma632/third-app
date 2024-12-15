import React from 'react'
import{useNavigate} from 'react-router-dom';
function Home(){
    let navigate=useNavigate()
    console.log("Home");
    const handleButton=()=>{
        navigate("/Layout")
    }
    return(
        <div>
            <button onClick={handleButton}>click</button>
        </div>
    )
}
export default Home
