import React from 'react';
import ReactPrint from 'react-to-print'
import {useRef} from 'react';
import { useLoaderData } from 'react-router-dom';

const Topic = () => {
const detailsTopic=useLoaderData()
const {title,image_url,details}=detailsTopic;




    const ref=useRef()


    return (
        <div>
           <div ref={ref}>


           <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image_url} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{details}</p>
    <div className="card-actions">
      {/* <button className="btn btn-primary">Buy Now</button> */}
      <ReactPrint trigger={()=><button>Print</button>} content={()=>ref.current}  />
    </div>
  </div>
</div>
            
             
           </div>

           {/* <ReactPrint trigger={()=><button>Print</button>} content={()=>ref.current}  /> */}
        </div>
       
    );
};

export default Topic;