import React from 'react';

const BrandIconCard = ({brandIcon}) => {
    const {iconLink,iconName,id} = brandIcon;
    return (

        <div className="w-[70%] mx-auto overflow-hidden bg-white hover:bg-amber-300 rounded shadow-md text-slate-500 shadow-slate-200" >
       <div className="w-[80%] mx-auto" onClick={id}>
       <div>
       <img className='w-[20%]' src={iconLink} alt="" />
       </div>
       <p>{iconName}</p>
    </div>
       
      </div>







        
    );
};

export default BrandIconCard;