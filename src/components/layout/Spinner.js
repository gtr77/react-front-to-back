import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner = () => <Fragment className="navbar bg-primary">
			<img src={spinner} alt="Loading..." style={{ 
				width: '200px',
				margin: 'auto',
				display: 'block'
			}}/>
		</Fragment>

export default Spinner;
