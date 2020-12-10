import React from 'react';
import CardHomeChild from '../CardHomeChild/CardHomeChild';
const FakeData=[{name: 'Fusion BackPack'},{name: 'Push it Messenger Bag'},{name: 'Lifelong Fitness Iv'},{name: 'Hero Hoodie'},{name: 'Argus-All Weather Tank'},{name: 'Fusion BackPack'},{name: 'Fusion BackPack'},{name: 'Push it Messenger Bag'},{name: 'Lifelong Fitness Iv'}]
const CardHome = () => {
    return (
        <>
        <div className="row container-fluid">
           {
               FakeData.map(data=><CardHomeChild data={data}></CardHomeChild>
               )
       
                 }
                 </div> 
        </>
    );
};

export default CardHome;