import React from "react";
import { Link } from "react-router-dom";
import { useBusiness, useExperience } from "@vatom/experience-sdk";
import './Common.css'
//
const HomePage = () => {
	const { tokens, isLoadingTokens } = useBusiness();
	const { navigateToExternalBrowser } = useExperience();

	React.useEffect(() => {
		if ( isLoadingTokens ){
			console.log('...attempting to load NFTs at Home page');
		}else{
			console.log('NFTs at Home page: ', tokens);
		}
	}, [tokens, isLoadingTokens]);	

  return (
		<div>
			<h1>Welcome to the Home page</h1>
			<p>version 0-0-002</p>
			<br/>
			<Link to="/about"> Click here to go to the About page </Link>
			<br/><br/><br/>
			<button
				onClick={() => {
					navigateToExternalBrowser('https://3uewhf0ge9.share.vatominc.com/emit/eyJvYmplY3REZWZpbml0aW9uSWQiOiJSWUhFTzgxN21sIiwiY2FtcGFpZ25JZCI6InFYdExVeDYxTkkiLCJkaXN0cmlidXRpb25JZCI6Ilp5NXhTSXQ5M0oifQ%3D%3D?from=Vatom%2520Dev%2520Playground&msg=&login=0')
				}}
			>
				Click here to receive a token from this business
			</button>
			<br/><br/><br/>
			<button
				onClick={() => {
					navigateToExternalBrowser('https://github.com/micro-sites/tokens/releases/tag/v-0-0-002')
				}}
			>
				Click here to see source code
			</button>
		</div>
  )
}
//
export default HomePage;
