import React from 'react'
import { IoMdClose } from "react-icons/io";

import ContentWrapper from './ContentWrapper'

const SearchBar = ({ setShowSearch }) => {
    return (
        <div className='bg-white'>
            <ContentWrapper>
                <input type="text" placeholder='Search For Products' />
                <IoMdClose className='cursor-pointer' onClick={() => setShowSearch(false)} />
            </ContentWrapper>
        </div>
    )
}

export default SearchBar
