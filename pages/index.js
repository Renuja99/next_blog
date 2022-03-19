import Head from 'next/head'
import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import {IntersectionObserver } from '../components/intersection-observer'
import {BlogCard} from '../components/BlogCard'

export default function Home() {

    const [menuOpen, setMenuOpen] = useState(false)
    const sectionRef = useRef(null)


    const easing = [0.6, -0.05, 0.01, 0.99]

    //Animation for fading in 
    const fadeInUp = {
        initial : {  y: 60, opacity: 0 },
        animate : { y: 0, opacity:1, transition: {duration: 0.8, ease: easing}}
    }

    const stagger = {

        animate : {
            transition: {
                staggerChildren: 0.1
            }
        }
    }

  
        
    //checking to see when the viewport is visible to the other user
  return (
    <div >
      <Head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lalezar&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Lalezar&display=swap" rel="stylesheet"/>
        
      <title>CRE8</title>

      </Head>
      <body className={ menuOpen ? "menu-open" : "" } style={{ fontFamily:'"Comfortaa", cursive'}}>
        <div className={menuOpen? "menu-toggle open": "menu-toggle"} onClick={()=>{setMenuOpen(!menuOpen)}}>
            <div className="icon"></div>
        </div>
        <div className={menuOpen ? "main-menu opened" : "main-menu"}>
            
            <div className="contant-info">
                <div><a href="mailto:hello@cre8.com">hello@cre8.com</a></div>
                <div>+10 38093888</div>
            </div>
            <div className="menu-links">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="work.html">Work</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
            <div className="social-media">
                <div className="social-link-holder"><a href="#">Dribbble</a></div>
                <div className="social-link-holder"><a href="#">Instagram</a></div>
                <div className="social-link-holder"><a href="#">Twitter</a></div>
                <div className="social-link-holder"><a href="#">Facebook</a></div>
            </div>
        </div>
        <nav className="container-fluid cnav">
            <div className="row">
                <div className="col">
                    <div className="logo-holder">
                        <a href="index.html"><img className="logo" src="images/logo.svg" alt="CRE8"/></a>
                    </div>
                </div>
                <div className="col text-right">
                    <div className="social-media">
                        <div className="social-link-holder"><a href="#">Dribbble</a></div>
                        <div className="social-link-holder"><a href="#">Instagram</a></div>
                        <div className="social-link-holder"><a href="#">Twitter</a></div>
                        <div className="social-link-holder"><a href="#">Facebook</a></div>
                    </div>
                </div>
            </div>
        </nav>
        <header className="container-fluid header" >
            <div className="row">
                <div className="col">
                    <motion.div className="lg-text" initial="initial" animate='animate'>
                        <motion.span variants={fadeInUp} >PRODUCT TIPS</motion.span><br/>
                        <motion.span variants={fadeInUp}>DESIGN & BUSINESS</motion.span><br/>
                        <motion.span className="other-color" variants={fadeInUp}>cre8 blog</motion.span>
                    </motion.div>
                    <div className="normal-text">
                        <p>You can call it an extra arm that support you with insightful ideas,<br/>about business, design, productivity, design or even personal<br/> development for business people.</p>
                    </div>
                </div>
            </div>
        </header>
          <div className="container-fluid blog-section" ref={sectionRef} >
              <motion.div className="row cardCustom" animate='animate' initial='initial'>
                  <div className="col cardCustom">
                      

                      <div className="post-box">
                      <IntersectionObserver >
                                <BlogCard/>
                        </IntersectionObserver>
                      </div>

                      <div className="post-box">
                      <IntersectionObserver >
                                <BlogCard/>
                        </IntersectionObserver>
                      </div>

                      <div className="post-box">
                      <IntersectionObserver >
                                <BlogCard/>
                        </IntersectionObserver>
                      </div>

                      <div className="post-box">
                      <IntersectionObserver >
                                <BlogCard/>
                        </IntersectionObserver>
                      </div>
                      
                      <motion.div className="post-box " variants={fadeInUp}>
                          <div className="text-holder">
                              <a href="post.html" className="title">how to choose the best team</a>
                              <div className="text">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</div>
                          </div>
                          <div className="img-holder">
                              <img src="images/post2.png" alt=""/>
                          </div>
                      </motion.div>
                      <motion.div className="post-box " variants={fadeInUp}>
                          <div className="text-holder">
                              <a href="post.html" className="title">is responsive still effective?</a>
                              <div className="text">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</div>
                          </div>
                          <div className="img-holder">
                              <img src="images/post3.png" alt=""/>
                          </div>
                      </motion.div>
                      <motion.div className="post-box " variants={fadeInUp}>
                          <div className="text-holder">
                              <a href="post.html" className="title">is responsive still effective?</a>
                              <div className="text">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</div>
                          </div>
                          <div className="img-holder">
                              <img src="images/post4.png" alt=""/>
                          </div>
                      </motion.div>
                  </div>
              </motion.div>
          </div>
<div className="container-fluid other-content">
    <div className="row">
        <div className="col">
            <div className="lg-text">have a project<br/>for us?</div>
            <div className="normal-text">
                <p>Contact us and we’ll send you the brief form to fill.<br/>
                        Then we’ll contact you within 24 hours.</p>
            </div>
            <div className="btn-holder">
                <a href="#" className="cr-btn ex-padding">let’s cre8</a>
            </div>
        </div>
    </div>
</div>
<footer className="container-fluid footer">
    <div className="row">
        <div className="col">
            <div className="lg-text">
                <span>100% satisfication.</span><br/>
                <span>let’s create</span>
            </div>
            <div className="normal-text">
                <p>We’ll take your business to the next level, with our proven<br/>strategies, latest technologies and friendly creatives that<br/>will work to produce the best outcome possible.</p>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col">
            <div className="contact-info-holder">
                <div className="title">Call us</div>
                <div className="contact-info">+10 38093888</div>
            </div>
        </div>
        <div className="col">
            <div className="contact-info-holder">
                <div className="title">E-mail</div>
                <div className="contact-info"><a href="mailto:hello@cre8.com">hello@cre8.com</a></div>
                <div className="social-media">
                    <div className="social-link-holder"><a href="#">Dribbble</a></div>
                    <div className="social-link-holder"><a href="#">Instagram</a></div>
                    <div className="social-link-holder"><a href="#">Twitter</a></div>
                    <div className="social-link-holder"><a href="#">Facebook</a></div>
                </div>
            </div>
        </div>
    </div>
</footer>
</body>

     
    </div>
  )
}
