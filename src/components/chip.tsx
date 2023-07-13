import ITag from '@blog/domain/models/tag'
import React from 'react'

interface IProp {
    tag: ITag
    onRemove: (slug: string) => void
}

const Chip = ({ tag, onRemove }: IProp) => {
    return (
        <>
            <div className="[word-wrap: break-word] py-1 px-6 flex items-center justify-between rounded-full bg-[#eceff1] text-sm normal-case leading-loose text-dark shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none">
                {tag.tag}
                <span className="float-right w-4 cursor-pointer pl-[8px] text-[16px] text-primary transition-all duration-200 ease-in-out hover:opacity-70" onClick={e => onRemove(tag.slug)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-3 w-3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </span>
            </div>
        </>
    )
}

export default Chip
