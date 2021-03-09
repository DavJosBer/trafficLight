import React, { useState, useEffect } from "react";
import Light from "./light.js";
import PropTypes from "prop-types";

const light = {
	backgroundColor: "#f00",
	backgroundColor2: "#ff0",
	backgroundColor3: "#0f0"
};
const active = {
	active: false,
	active2: false,
	active3: false
};
//create your first component
export function TrafficBox(props) {
	const [colorI, setColor] = useState(props.value);
	useEffect(() => {
		setColor(false);
	}, []);
	const handleClick = e => {
		if (e.target.style.backgroundColor === "rgb(255, 0, 0)") {
			setColor(true);
			active.active = true;
			active.active2 = false;
			active.active3 = false;
		} else if (e.target.style.backgroundColor === "rgb(255, 255, 0)") {
			setColor(false);
			active.active = false;
			active.active2 = true;
			active.active3 = false;
		} else if (e.target.style.backgroundColor === "rgb(0, 255, 0)") {
			setColor(true);
			active.active = false;
			active.active2 = false;
			active.active3 = true;
		}
	};
	return (
		<div className="card mx-auto my-3 py-4 bg-dark">
			<div className="mx-auto">
				<Light
					color={light.backgroundColor}
					active={active.active === true}
					func={handleClick}
				/>
			</div>
			<div className="mx-auto my-2">
				<Light
					color={light.backgroundColor2}
					active={active.active2 === true}
					func={handleClick}
				/>
			</div>
			<div className="mx-auto">
				<Light
					color={light.backgroundColor3}
					active={active.active3 === true}
					func={handleClick}
				/>
			</div>
		</div>
	);
}
TrafficBox.propTypes = {
	value: PropTypes.bool
};
