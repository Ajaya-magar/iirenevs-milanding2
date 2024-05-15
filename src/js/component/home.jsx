import React from "react";
import { Digit } from "../digit";
import 'bootstrap/dist/css/bootstrap.min.css';


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="time">
				<main className="hg-dark d-flex">
	
		
				
				
	<Digit number={"Counter"}/>
	<Digit number={Math.floor(props.timer / 1000)%10}/>
	<Digit number={Math.floor(props.timer / 100)%10}/>
	<Digit number={Math.floor(props.timer / 10)%10}/>

	<Digit number={Math.floor(props.timer % 100)}/>
	

 </main>
		</div>
	
		
	);
};

export default Home;
