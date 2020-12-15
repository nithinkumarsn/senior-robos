import React from 'react';


const Card = ({name,email,id})=>{
    return(
        <div className='card tc bg-light-blue dib br3 pa1 ma2 grow bw2 shadow-5'>
            <img alt='robots'  height='100' width='100' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;