import React from 'react';

function FeaturedImage(props){
    return(
        
            <div className = "jumbotron" style={{textAlign:"center"}}>
                <img src= {props.image} style={{maxWidth:600 , maxHeight:600 }} />
            </div>
       
    );

}

export default FeaturedImage;