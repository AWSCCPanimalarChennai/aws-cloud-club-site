import "./Footer.css" ;

import React from "react" ;

import { NavLink } from "react-router-dom" ;

import AWSCloudClubLogo from "../../assets/img/logo.png" ;

import { Container, Row, Col } from "react-bootstrap";
import GradientBoxIcon from "../GradientBoxIcon/GradientBoxIcon";
import SocialLinks from "../SocialLinks/SocailLinks";

import Lighthouse from "../../assets/img/lighthouse.png";
import nammaChennai from "../../assets/img/nammaChennai.png";

function Footer() {
    return (
        <Container className="footer">
            <Row>
            <Col lg={4}>
                <Row>
                    <Col md={12}>
                        <h5 className="side-head" style={{ marginTop: "35px" }}>Contact Us</h5>
                        <NavLink to="tel:+919384678960" target="_blank" className="useful-links" style={{ fontFamily: "sans-serif" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-dots" viewBox="0 0 16 16">
                            <defs>
                                <linearGradient x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#F1F3F3" />
                                <stop offset="100%" stopColor="#7C5AED" />
                                </linearGradient>
                            </defs>
                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"   fill="url(#gradient)"/>
                            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"  fill="url(#gradient)"/>
                        </svg>&nbsp;
                            +91 93846 78960
                        </NavLink>
                        <br />
                        <NavLink to="mailto:awscc_panimalar_chennai@outlook.com" target="_blank" className="useful-links">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                <defs>
                                    <linearGradient x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#F1F3F3" />
                                    <stop offset="100%" stopColor="#7C5AED" />
                                    </linearGradient>
                                </defs>
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" fill="url(#gradient)"/>
                            </svg>&nbsp;
                            awscc_panimalar_chennai@outlook.com
                        </NavLink>
                    </Col>
                </Row>
                <SocialLinks />
                
                <div style={{position: "absolute", left: 30, bottom: 0}} className="chennai-identity">
                    <img src={nammaChennai} alt="Namma Chennai" width={200} />
                    
                    <img src={Lighthouse} alt="Light house" width={200} />
                </div>
            </Col>

                <Col lg={4}>
                    <Row className="useful-links-one">
                        <Col>
                            
                             <h5 className="side-head" style={{marginTop: "15px"}}>Community</h5>
                            <NavLink to= "/join" target="_blank" className="useful-links">
                            <GradientBoxIcon />&nbsp;
                            Join Group</NavLink><br />
                            
                            <NavLink to= "https://chat.whatsapp.com/Cfpykio9KWW7RXNSsO1saT" target="_blank" className="useful-links">
                            <GradientBoxIcon />&nbsp;
                                Certification Support
                            </NavLink> <br />
                            
                            <NavLink to= "https://chat.whatsapp.com/Jk2FRnT1M9j2QHdWa9HhJX" target="_blank" className="useful-links">
                            <GradientBoxIcon />&nbsp;
                                Project Support
                            </NavLink> <br />
                        </Col>

                        <Col>
                            
                        <h5 className="side-head" style={{marginTop: "15px"}}>Contribute</h5>
                            <NavLink to= "mailto:awscc_panimalar_chennai@outlook.com?subject=Intrest%20to%20Present%20a%20topic%20-%20Reg" target="_blank" className="useful-links">
                            <GradientBoxIcon />&nbsp;
                            Present Topic
                            </NavLink> <br />
                            
                            <NavLink to= "mailto:awscc_panimalar_chennai@outlook.com?subject=Intrest%20to%20Host%20an%20Event%20-%20Reg" target="_blank" className="useful-links">
                            <GradientBoxIcon />&nbsp;
                            Host Events
                            </NavLink> <br />
                            
                            <NavLink to= "mailto:awscc_panimalar_chennai@outlook.com?subject=Intrest%20to%20Sponsor%20an%20Event%20-%20Reg" target="_blank" className="useful-links">
                            <GradientBoxIcon />&nbsp;
                            Sponsor
                            </NavLink>
                        </Col>
                    </Row>
                <Row style={{marginTop: 30}}>
                    
                        <Col>
                            
                            <h5 className="side-head" style={{marginTop: "15px"}}>Learn</h5>
                            <NavLink to= "https://explore.skillbuilder.aws/learn" target="_blank" className="useful-links">
                            <GradientBoxIcon />&nbsp;
                                Skill Builder
                            </NavLink><br />
                            
                            <NavLink to= "https://s12d.com/learner-library" target="_blank" className="useful-links">
                            <GradientBoxIcon />&nbsp;
                                Learner Library
                            </NavLink> <br />
                            
                            <NavLink to= "https://s12d.com/infra-camp" target="_blank" className="useful-links">
                            <GradientBoxIcon />&nbsp;
                                Infrastructure
                            </NavLink> <br />
                        </Col>

                        <Col style={{marginTop: 40}}>
                            <NavLink to= "https://s12d.com/amplify-camp" target="_blank" className="useful-links">
                            <GradientBoxIcon />&nbsp;
                                AWS Amplify
                            </NavLink> <br />
                            
                            <NavLink to= "https://s12d.com/gen-ai-for-beginners" target="_blank" className="useful-links">
                            <GradientBoxIcon />&nbsp;
                                Gen - AI
                            </NavLink> <br />
                            
                        </Col>
                </Row>
                </Col>

                <Col lg={4} className="footer-right">
                    <div className="center">
                    <img className="footer-logo" src={AWSCloudClubLogo} alt="AWSCloudClubLogo" />
                    </div>
                    <p className="disclaimer">
                        <i>
                            <sub> This website is managed by <b>AWS Cloud Club Panimalar - Chennai</b> and is independent of any affiliation with Amazon Web Services, Inc.
                            Opinions expressed within the content are solely those of the respective contributors, and do not necessarily reflect the official positions or views of Amazon Web Services, Inc.
                            </sub>
                            </i>
                        <br />
                        <small style={{textAlign: "center"}}>Designed &amp; Developed by <NavLink className="footer-link gradient-text" target="_blank" to='https://www.linkedin.com/in/jeswinjosephj/'>Jeswin Joseph J</NavLink> and <NavLink className="footer-link gradient-text" target="_blank"  to="https://www.linkedin.com/in/hrishab59/">Rishab H</NavLink><br />  For source Code visit Github</small>
                    
                    </p>
                    
                </Col>
            </Row>
        </Container>
    ) ;
}


export default Footer ;