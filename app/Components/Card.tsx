import React from 'react'

interface CardProps {
    title :string;
    description:string;
}

const Card:React.FC<CardProps> = ({title , description}) => {
  return (
    <div>
      <div className="border border-black w-[22rem] h-[13rem] p-4 flex flex-col gap-2 overflow-clip shadow-lg">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>

  )
}

export default Card