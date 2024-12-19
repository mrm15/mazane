import React from 'react';

const ShowItemType = ({setItemType, itemType,}) => {

  const types = [//
    {id: 1, text: "گرم", typeSet: "gram"},//
    {id: 2, text: "گرم |  سکه", typeSet: "both"},//
    {id: 3, text: "سکه", typeSet: "sekke"},//
//
  ]//

  return (<div className={"flex w-full gap-1 my-1"}>
    {types.map(row => <button
      key={row.id}
      onClick={() => setItemType(row.typeSet)}
      className={` 
       py-2 rounded w-1/3 border border-amber-50 
        
        ${row.typeSet === itemType ? " bg-white text-black " : " bg-333 text-white "}
      `}

    >{row.text}</button>)}
  </div>);
};

export default ShowItemType;
