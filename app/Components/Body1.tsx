import React from 'react'
import Card from './Card'

const Body1 = () => {
    return (
        <>
        <div className='flex justify-center pt-4 pb-4'>
            <div className='flex flex-row gap-4'>
                <Card
                    title="Choose the model that works for you"
                    description="Pick the model that works for your project and team, including GPT-4o and Claude Sonet."
                />
                <Card
                    title="Choose the model that works for you"
                    description="Pick the model that works for your project and team, including GPT-4o and Claude Sonet."
                />
                <Card
                    title="Choose the model that works for you"
                    description="Pick the model that works for your project and team, including GPT-4o and Claude Sonet."
                />
            </div>
        </div>  
        </>
    )
}

export default Body1