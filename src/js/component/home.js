import React from "react";
import { TrafficBox } from "./traffic.js";

const value = false;
//create your first component
export function Home() {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-4 mx-auto">
						<TrafficBox value={value} />
					</div>
				</div>
			</div>
		</>
	);
}
