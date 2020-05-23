import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
        <section className="section">
            <div className="one">
                <h1 className="nohover">Ahmed Eldemerdash</h1>    
            <div className="link">
                <ul>
                    <li><Link to="./index.html">About</Link></li>
                    <li><Link to="./portfolio.html">Portfolio</Link></li>
                    <li><Link to="./contact.html">Contact</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                </ul>
            </div>   
            </div>
        </section>

        <hr />

        <section className="two">
            <h3>About Me</h3>
            <div id="main">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLK7L00F2BTwtCWyRLbzJHfRoRNYDTdj8e1R7QVbsZhClZ91bq&s" alt="" />
                
            <p> <span>T</span>his is my page ..I love soccer .. I was living in newjersey but i escaped from the freezing weather there and moved here 4 months ago then i found my car maybe flooded here :)
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla recusandae cupiditate delectus illum, tempora et, dolorem eos rerum autem dolor deleniti necessitatibus voluptas veniam saepe, eveniet quam quo dignissimos.
                I love soccer .. I was living in newjersey but i escaped from the freezing weather there and moved here 4 months ago then i found my car maybe flooded here :)
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla recusandae cupiditate delectus illum, tempora et, dolorem eos rerum autem dolor deleniti necessitatibus voluptas veniam saepe, eveniet quam quo dignissimos.
                I love soccer .. I was living in newjersey but i escaped from the freezing weather there and moved here 4 months ago then i found my car maybe flooded here :)
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla recusandae cupiditate delectus illum, tempora et, dolorem eos rerum autem dolor deleniti necessitatibus voluptas veniam saepe, eveniet quam quo dignissimos.
            </p>
            
            </div>
            
        </section>

            
            <footer>
                copyright
            </footer>
    </div>  

  )
}

export default Nav