import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom" ;

import {Container, Row, Col} from 'react-bootstrap'
import SectionHeader from '../SectionHeader/SectionHeader'
import meetup from '../../assets/img/meetup.png';

import "./JoinGuide.css"

function JoinGuide() {
    const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container className='join-guide'>
        <SectionHeader header="Joining Process"  scrollPosition={scrollPosition} />
        <Row className='process-row'>
            <h1>Step - 1</h1>
            <p className='para-process'>
                To kickstart your journey with us, start by joining our WhatsApp groups.
            </p>
            <div className='more-padding'>
            <Row className='process-card' >
                <Col lg={9}>
                    <h2 className='side-head-process'>Announcement Group</h2>
                    <p className='para'>
                        This is where you'll receive all the latest updates, announcements, and important information about our club's activities. It's mandatory for all members to join this group to stay informed and connected.
                    </p>
                </Col>
                
                <Col lg={3} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <NavLink to="https://chat.whatsapp.com/JLQEk3mpP652tcpuD7r6sB" target='_blank' className='contribute-btn'>
                        Join Group &nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>
                    </NavLink>
                </Col>
            </Row>

            <Row style={{marginTop: "30px"}} className='process-card' >
                <Col lg={9}>
                    <h2 className='side-head-process'>Certification Support Group</h2>
                    <p className='para'>
                    Planning to pursue AWS certifications within the next 90 days? This group is dedicated to providing support, resources, and guidance to help you ace your certification journey.
                    </p>
                </Col>
                
                <Col lg={3} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <NavLink to="https://chat.whatsapp.com/Jk2FRnT1M9j2QHdWa9HhJX" target='_blank' className='contribute-btn'>
                        View Group &nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>
                    </NavLink>
                </Col>
            </Row>

            <Row style={{marginTop: "30px"}} className='process-card' >
                <Col lg={9}>
                    <h2 className='side-head-process'>Project Support Group</h2>
                    <p className='para'>
                    Whether you're currently working on a cloud project or gearing up to start one, this group is here to offer assistance, collaboration opportunities, and valuable insights to make your project a success.
                    </p>
                </Col>
                
                <Col lg={3} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <NavLink to="https://chat.whatsapp.com/Cfpykio9KWW7RXNSsO1saT" target='_blank' className='contribute-btn'>
                        View Group &nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>
                    </NavLink>
                </Col>
            </Row>

            <p className='para note'>
                <span className='gradient-text'>Note:</span><br /><br />
                <span className='gradient-text'>#</span> This Club is <b>Open to All</b>. You can add your Friends and Contacts situated in any City (in India) to this Whatsapp group.<br /><br />
                <span className='gradient-text'>#</span> <b>Full-Online-Support</b>: even if you can't attend some of the MeetUps in Offline, you can attend Live Online.<br /><br />
                <span className='gradient-text'>#</span> Both <b>AWS</b> and <b>Panimalar Engineering College</b> <i>Terms of Conduct</i> apply.<br /><br />
                <span className='gradient-text'>#</span> <b>Participants can chat</b> Option is enabled for Constructive purposes.
            </p>

            

            </div>


            <h1 style={{marginTop: "60px"}}>Step - 2</h1>
            <p className='para-process'>
            Join AWS Cloud Club Panimalar - Chennai on Meetup.com
            </p>
            <div className='more-padding'>
            <Row style={{justifyContent: "center", marginTop: "30px"}} className='process-card' >
                <Col lg={9}>
                    <h2 className='side-head-process'>Become an Official Member</h2>
                    <p className='para'>
                        Create an account on <b>Meetup.com</b> if you haven't already, then click on the <b>'Join Meetup.com'</b> Button and Click <b>'Join the Group'</b>. Being a member on Meetup.com is mandatory as it's where all our events will be scheduled, and official notifications will be sent.
                    </p>
                </Col>
                
                <Col lg={3} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <NavLink to="https://www.meetup.com/aws-cloud-club-at-panimalar-engineering-college/" target='_blank' className='contribute-btn'>
                        Join Meetup.com &nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>
                    </NavLink>
                </Col>
            </Row>

            <div className='center'>
                <img src={meetup} alt="Meetup.com" width={"90%"} style={{marginTop: "40px"}} />
                <p className='para note center'><span className='gradient-text'>Note:</span>&nbsp;&nbsp;While it's showing a <b>social registration error</b>, just re-select the location to <b>CHENNAI-IN</b> from <b>CHENNAI-IN</b> again. This should resolve the issue.</p>
            </div>
            </div>

            <h1 style={{marginTop: "60px"}}>Step - 3</h1>
                <p className='para-process'>
                Be regular to all MeetUps and Follow us on Social Media
                </p>
            
            <div className='more-padding'>
            
            <Row style={{justifyContent: "center", marginTop: "30px"}} className='process-card' >
                <Col lg={9}>
                    <h2 className='side-head-process'>Stay in Touch!</h2>
                    <p className='para'>
                    Be regular to all MeetUps and Follow us on social media to stay in the loop with exciting events and opportunities! Join our vibrant community and be part of something extraordinary. Together, let's make memorable experiences and create lasting connections.
                    </p>
                </Col>
                
                <Col lg={3} style={{display: "flex", flexDirection:"column", alignItems: "center", justifyContent: "center"}}>
                    <NavLink to="https://www.linkedin.com/company/aws-cloud-club-panimalar-chennai/" target='_blank' className='contribute-btn'>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                        </svg>&nbsp;
                        LinkedIn 
                    </NavLink>
                    <NavLink to="https://github.com/AWSCCPanimalarChennai" target='_blank' className='contribute-btn' style={{marginTop: "20px"}}>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>&nbsp;
                        &nbsp;Github &nbsp;
                    </NavLink>
                </Col>
            </Row>
            </div>
        </Row>
    </Container>
  )
}

export default JoinGuide
