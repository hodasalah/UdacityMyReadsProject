import React , { useState } from 'react';
import {FaStar} from 'react-icons/fa'

function Rating(props){
    const [rating , setRating] = useState(0);
    const [hover , setHover] = useState(0)
    return (
        <div>
            {[...Array(5)].map((star,i)=>{
                const Rval = i+1
                return (
                    <label key={Rval}>
                        <input type="radio" 
                        name="rating" 
                        value={Rval}
                        onClick={()=>setRating(Rval)}
                        />
                        <FaStar className="star" 
                            color={Rval<=(hover || rating) ? '#ffc107':'#e4e5e9'}
                            onMouseEnter={()=>setHover(Rval)}
                            onMouseLeave={()=>setHover(null)}
                        />
                    </label>
                )
            })}
            
        </div>
    )
}

export default Rating
