import React from "react";
import PropTypes from "prop-types";

//create your first component
function Light(props) {
	return (
		<>
			<div
				className={`rounded-circle p-5`}
				style={{
					backgroundColor: props.color,
					opacity: props.active ? 1 : 0.4
				}}
				value={props.active}
				onClick={props.func}></div>
		</>
	);
}

Light.propTypes = {
	color: PropTypes.string,
	active: PropTypes.bool,
	func: PropTypes.func
};

export default Light;
