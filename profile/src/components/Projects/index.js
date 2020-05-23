import React from 'react';
import { Link } from "react-router-dom";
import './style.css';

function Project() {
    return(
    <div className="container">
		<div className="card">
			<div className="bgg bg1">
				<h1>
					Project Two
				</h1>
			</div>
			<div className="content content1">
				<div className="profile profile1">
					<img src="./img/Screenshot_20200305-142002(1).png" alt="" />
					<br />
					<h2 style={{color: 'white'}}>Project Two</h2>
					<br />
					<Link to="https://ttprivatenew.s3.amazonaws.com/pulse/zoddoo/attachments/13111589/TinyTake13-04-2020-07-46-29.mp4" target="_blank">FOODZI</Link>
				</div>
			</div>
		</div>

		<div className="card">
			<div className="bgg bg2">
				<h1>
					Weather
				</h1>
			</div>
			<div className="content content2">
				<div className="profile profile2">
					<img src="./img/Screenshot_20200305-142114(1).png" alt="" />
					<br />
					<h2 style={{color: 'black'}}>Weather</h2>
					<br />
					<Link to="https://moddoo.github.io/weather_info/" target="_blank">Weather</Link>
				</div>
			</div>
		</div>

		<div className="card">
			<div className="bgg bg3">
				<h1>
					Project One
				</h1>
			</div>
			<div className="content content3">
				<div className="profile profile3">
					<img src="./img/joyney.png" alt="" />
					<br />
					<h2>Project One</h2>
					<br />
					<Link to="https://moddoo.github.io/JoyNey/" target="_blank">JoyNey</Link>
				</div>
			</div>
		</div>

		<div className="card">
			<div className="bgg bg4">
			    <h1>
                    Quiz
				</h1>
			</div>
			<div className="content content4">
				<div className="profile profile4">
					<img src="./img/Screenshot_20200305-142152(1).png" alt="" />
					<br />
					<h2 style={{color: 'white'}}>Quiz</h2>
					<br />
					<Link to="https://moddoo.github.io/_quizRepo_github.io/" target="_blank">Quiz App</Link>
				</div>
			</div>
		</div>

		<div className="card">
			<div className="bgg bg5">
				<h1>
					Calendar
				</h1>
			</div>
			<div className="content content5">
				<div className="profile profile5">
					<img src="./img/Screenshot_20200305-142259(1).png" alt="" />
					<br />
					<h2 style={{color: "white"}}>Calendar</h2>
					<br />
					<Link to="https://moddoo.github.io/Calendar_schedule/" target="_blank">Calendar</Link>
				</div>
			</div>
		</div>
	</div>
    )
}
export default Project