import { Link } from "react-router-dom";
import './Common.css'
import { useExperience, useBusiness, useUser } from "@vatom/experience-sdk";
//
const AboutPage = () => {
	const allUseExperience = useExperience();
	const allUseBusiness = useBusiness();
	const allUseUser = useUser();

  console.log('allUseExperience :', allUseExperience);
  console.log('allUseBusiness :', allUseBusiness);
  console.log('allUseUser :', allUseUser);

  return (
		<div>
			<h1>Welcome to the About page</h1>
			<Link to="/home"> Return to the Home page </Link>
		</div>
  )
}
//
export default AboutPage;
