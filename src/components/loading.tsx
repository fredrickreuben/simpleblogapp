import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Loading = () => {
    return (
        <div className="absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center">
            <span>
                <AiOutlineLoading3Quarters className="animate-spin text-primary text-4xl" />
            </span>
        </div>
    )
}

export default Loading
