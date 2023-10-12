import React from "react";
import { Link } from "react-router-dom";
import { useBusiness } from "@vatom/experience-sdk";
import './Common.css'
//
const HomePage = () => {
	const { tokens } = useBusiness();

	React.useEffect(() => {
		if (!tokens) return;
		console.log('NFTs at Home page: ', tokens);
	}, [tokens]);	

  return (
		<div>
			<h1>Welcome to the Home page</h1>
			<Link to="/about"> Click here to go to the About page </Link>
		</div>
  )
}
//
export default HomePage;
