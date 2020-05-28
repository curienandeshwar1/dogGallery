import React from 'react';


function ImageGrid(props){
    return(
        <div className = "gallery" style ={{border:"1px solid rgb(9, 7, 7)"}} >
            <div className="row" >
                    { 
                        props.imagesingrid.map((src,index)=>{
                            return(
                                <div key={index}>
                                    <img src={src} style={{ margin:12, width:200 , height:200 ,padding:5 ,cursor: "pointer"}} onClick={() => props.loadSelectedImage(src)}/>
                                </div>
                            );
                        })
                    }
                
            </div>
        </div>
    );
}

export default ImageGrid;