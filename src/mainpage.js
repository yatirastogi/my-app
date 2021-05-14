

import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Grid, Row, Col} from 'react-bootstrap';
import im from "./Contact us-amico.png";
import wc from "./Social ideas-cuate.png"
import im2 from "./Learning-bro.png";
import AOS from "aos";

import "aos/dist/aos.css";
AOS.init();


class Mainpage extends React.Component {
    constructor(){
        super();

        this.state = {
           about: true,
		   cont:true

        }
    }


    changeColor(){
		this.setState({about: false,cont:true})
		
		console.log(this.state.about)
		 }
		 changeColor1(){
			this.setState({cont: false,about:true})
			
			console.log(this.state.cont)
			 }
 
	 render(){
		 let btn_class = this.state.about ? "linke1" : "linke2";
		 let btn_class1 = this.state.cont ? "linke1" : "linke2";
		 AOS.init();
    return(<div>
		
		<Navbar fixed="top">
  <Navbar.Brand className="navigation"><h1 className="pro">PROTAL</h1></Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Nav.Item id="linke"  className={btn_class}>
     <a id="linke" href="#login" onClick={this.changeColor.bind(this)}>About Us</a>
    </Nav.Item>
	<Nav.Item id="linke"className={btn_class1}>
     <a id="linke" href="#contact"onClick={this.changeColor1.bind(this)}>Contact Us </a>
    </Nav.Item>
  </Navbar.Collapse>
</Navbar>

<div id="welcome" className="welcomehead3">
<section id="welc">
	<Container>
		<Row>
		<Col className="welcomehead" lg={4}><br></br>
		<h1 className="welcomehead">Welcome to PROTAL</h1><h2 className="welcomehead2"> <p style={{textAlign:"left"}}>We aim at building a talent network, connecting people with various talents to the right recruiters and opportunities. Our objective is to help the raw talents gain exposure and experience with the right professional help.</p></h2></Col>
		<Col className="welcomehead1" lg={8}><br></br><br></br><img  data-aos="zoom-in" className="imgwc d-none d-lg-block" src={wc}></img></Col>

		</Row>

	</Container>

    

</section>
</div>




<div id="login" data-aos="zoom-in">
				<div>

				<section id="abt" className="login inner-wrapper">
				<br></br>
				<br></br>
				<br></br>
				<article>
				<Container>
 				 <Row><center><h1 className="heading">ABOUT US</h1></center>
					<Col lg={5}><br></br><br></br><img className="imga d-none d-lg-block" src={im2}></img></Col>
					<Col className="about"lg={7}><div><p>Protal is a startup, with Pre-incubation under VITTBI.
						Protal is a Talent Producing Social Media platform for the easy showcasing of talents. We aim at building a talent network, connecting people with various talents to the right recruiters and opportunities.
						PROTAL is here to make a difference, helping the raw talents gain exposure and experience with the right professional help.
						Services like Mentoring, Hiring, and Collaborating in the common fields of singing, dancing, designing, photography and various other domains are our key motives
						</p></div>					
						</Col>
						</Row>
						</Container>
						</article>
						</section></div></div>



<div  data-aos="zoom-in" id="login">

<section id="contact" className="inner-wrapper login">
<article style={{marginTop:"40px"}}>
<Container>
  <Row>
	<Col lg={4}><br></br><br></br><img className="imga d-none d-lg-block" src={im}></img></Col>
	<Col lg={8}>
	  <form>


					<Container>
					<center><h1 className="heading">CONTACT US</h1></center>
						<Row>
							<Col md={6} lg={6}>First Name*<input type="text" className="textbox"placeholder="First Name" required></input></Col>
							<Col md={6} lg={6}>Last Name*<input type="text" className="textbox" placeholder="Last Name" required></input></Col>
						</Row>
						<Row>
							<Col>Email*<input type="email" className="textbox"placeholder="Email" required></input></Col>
						   
						</Row>
						<Row>
							<Col>Phone Number*<input type="text" className="textbox"placeholder="Phone Number" required></input></Col>
						   
						</Row>
						<Row>
							<Col>Message(if any)<textarea className="textbox"></textarea></Col>
						   
						</Row>
						<Row>
						<Col style={{padding:"0px",width:"5%"}}lg={1} md={1}><input type="checkbox" placeholder="name"></input></Col>
						<Col style={{padding:"0px"}}lg={11} md={11}><p className="textbox1">I agree to receive email communication from Phone</p></Col>
						</Row>
						<Row>
							<Col><button style={{backgroundColor:"tomato",borderRadius:50,borderColor:"black",color:"white",borderWidth:"0.2rem",width:"100%",fontWeight:"bold",fontSize:"large"}} className="btn btn-lg" value="Submit">Submit</button></Col>
						   
						</Row>



					</Container>
				</form>
		
	
				</Col>
				</Row>
				</Container>	
				</article>
				</section></div>




<div>
<footer id="colophon" class="site-footer" role="contentinfo">
  <div class="social-wrapper">
    <ul>
      <li>
        <a href="https://twitter.com/login" target="_blank">
          <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png" alt="Twitter Logo" class="twitter-icon"></img></a>
      </li>
      <li>
        <a href="https://www.instagram.com/" target="_blank">
          <img src="https://www.mchenryvillage.com/images/instagram-icon.png" alt="Instagram Logo" class="instagram-icon"></img></a>
      </li>
   
      <li>
        <a href="https://www.facebook.com/" target="_blank">
          <img src="http://www.iconarchive.com/download/i54037/danleech/simple/facebook.ico" alt="Facebook Logo" class="facebook-icon"></img></a>
      </li>
      <li>
        <a href="https://www.youtube.com/" target="_blank">
          <img src="https://lh3.googleusercontent.com/j_RwVcM9d47aBDW5DS1VkdxUYCkDUCB6wZglv4x-9SmsxO0VaFs7Csh-FmKRCWz9r_Ef=w170" alt="Youtube Logo" class="youtube-icon"></img></a>
      </li>
     
    </ul>
  </div>

  <nav class="footer-nav" role="navigation">
 
  </nav>
</footer>
<br></br>
<br></br>

</div>
<div><center><h1>BACK TO TOP <a style={{color:"black"}} href="#welcome">^</a></h1></center><br></br><br></br></div>

</div>
    )}
	}


export default Mainpage
