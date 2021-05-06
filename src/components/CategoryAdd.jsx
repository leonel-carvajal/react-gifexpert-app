import React, { useState } from "react";
import PropTypes from "prop-types";

const CategoryAdd = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};
	const hanldeSubmit = (e) => {
		e.preventDefault();
		if (inputValue.trim().length > 2) {
			setCategories((cat) => [...cat, inputValue]);
			setInputValue("");
		}
	};
	return (
		<>
			<form onSubmit={hanldeSubmit}>
				<input
					type='text'
					className='input__text'
					value={inputValue}
					onChange={handleInputChange}
				/>
			</form>
		</>
	);
};
CategoryAdd.propTypes = {
	setCategories: PropTypes.func.isRequired,
};

export default CategoryAdd;
