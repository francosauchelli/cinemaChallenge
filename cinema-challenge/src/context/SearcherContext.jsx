import React, { useState, createContext } from "react";


const SearcherContext = createContext();

const SearcherProvider = ( { children } ) => {

    const [ query, setQuery ] = useState( '' );

    const searchHandleChange = (e) => {

        // takes the input's value
        const { value } = e.target;
        setQuery( value );
    }

    const dataContext = {
        searchHandleChange,
        query,
    }


    return (
        <SearcherContext.Provider value={ dataContext } >
            { children }
        </SearcherContext.Provider>
    )
}

export { SearcherProvider };
export default SearcherContext;