import React, {useState} from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
    
    const [inputValue, setInputValue] = useState()

    const handleInputChange = ( e, value) => {
        setInputValue( e.target.value, value );
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        const new_category = inputValue
        
        if ( new_category ) {
            setCategories( category => [new_category, ...category] );
            setInputValue('')
            e.target.reset()
        }
    }

    return (
        <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Search" 
        onChange={ handleInputChange }
        />
        </form>

    )
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
