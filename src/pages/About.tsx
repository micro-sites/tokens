import { Link } from "react-router-dom";
import './Common.css'
//
const AboutPage = () => {
  return (
		<div>
			<h1>Welcome to the About page</h1>
			<p>version 0-0-002</p>
			<br/>
			<Link to="/home"> Return to the Home page </Link>
		</div>
  )
}
//
export default AboutPage;
