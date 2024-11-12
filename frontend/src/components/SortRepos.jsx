import React from 'react'

const SortRepos = ({onSort, sortType}) => {
    return (
        <div className='mb-2 flex justify-center lg:justify-end'>
            <button
                type='button'
                className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass1`}
                onClick={() => onSort("recent")}

            >
                
                Most Forks
            </button>
            <button
                type='button'
                className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass1`}
                onClick={() => onSort("stars")}

            >
                Most Forks
            </button><button
                type='button'
                className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass1`}
                onClick={() => onSort("forks")}

            >
                Most Forks
            </button>
        </div>
    );
}

export default SortRepos
