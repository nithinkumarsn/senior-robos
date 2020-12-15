import React  from 'react';


const SearchBox =({searchChange,seachfield}) =>{
    return(
        <div >
            <input  className='pa2 dib ba b--silver bg-lightest-blue' type='search' placeholder='search by name' onChange={searchChange}/>
        </div>
        
    );
}

export default SearchBox;