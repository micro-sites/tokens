import { Link } from "react-router-dom";
import './Common.css'
import { useExperience, useUser, useBusiness, useBusinessNavigation } from "@vatom/experience-sdk";
//import {  useNavigateToHomeEffect } from "@vatom/experience-sdk";
//
const AboutPage = () => {
	const allUseExperience = useExperience();
	const allUseUser = useUser();
	const allUseBusiness = useBusiness();
	const allUseBusinessNavigation = useBusinessNavigation();
	//const allUseNavigateToHomeEffect = useNavigateToHomeEffect();

  console.log('allUseExperience :', allUseExperience);
  console.log('allUseUser :', allUseUser);
  console.log('allUseBusiness :', allUseBusiness);
  console.log('allUseBusinessNavigation :', allUseBusinessNavigation);
  //console.log('allUseNavigateToHomeEffect :', allUseNavigateToHomeEffect);

  return (
		<div>
			<h1>Welcome to the About page</h1>
			<Link to="/home"> Return to the Home page </Link>
		</div>
  )
}
//
export default AboutPage;
