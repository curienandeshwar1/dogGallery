import React from 'react';

function BreedSelect(props){
return(
    <form className="dropdown">
        <label> Select Breed : 
            <select value={props.breedvalue} onChange={props.changedvalue}>
                <option value="chow">Chow</option>
                <option value="pomeranian">Pomeranian</option>
                <option value="papillon">Papillon</option>
            </select>
        </label>
    </form>
);
}

export default BreedSelect;