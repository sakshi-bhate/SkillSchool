import React,{useState} from 'react'
import logo from './images/logo.png'
import Modal from 'react-bootstrap/Modal'
import brain from './images/brain.png'
import creativity from './images/creativity.png'
import handshake from './images/handshake.png'
import megaphone from './images/megaphone.png'
import paint from './images/paint.png'
import people from './images/people.png'
import podium from './images/podium.png'
import self from './images/self-awareness.png'
import leader from './images/team-leader.png'
import theater from './images/theater.png'
import Navigation from './Navigation'
const SkillSchool=()=> {
    const[comm,Showcomm]=useState(false)
    const[lead,Showlead]=useState(false)
    const[cogn,Showcogn]=useState(false)
    const[netw,Shownetw]=useState(false)
    const[crea,Showcrea]=useState(false)
    const[etiq,Showetiq]=useState(false)
    const[publ,Showpubl]=useState(false)
    const[thea,Showthea]=useState(false)
    const[crit,Showcrit]=useState(false)
    const[thou,Showthou]=useState(false)
    return ( 
    <>
    <div className="container-fluid">
            <div className="row bg-1" >
                <Navigation/>
        <div className="container">
            <div className="row skill-school-desc" style={{marginTop:'1%'}}  >
                <div className="col-md-6 skill-school-title">
                    <h1 className="title"><img src={logo} style={{width:326 , height:178}}/></h1>
                    <p className="desc">The mission of the Skill School is to provide holistic non-academic development of students that is achieved through quality experiential learning. At Skill School, we help students break free from the psychological patterns of conventional thinking and equip them with skills that allow them to broaden their horizons. Our set of 10 schools cover everything from basic communication, language training to critical and creative thinking, cognizance and theatrics. With skill we train students to challenge themselves to achieve their goals of becoming better versions of themselves.
                    <br></br>
                    In the world that profits from insecurity, the vision is to move, spur and push young enthusiasts in accomplishing their capability without limitations. It's tied in with enabling them to compose their own encounters of life. The objective is to help learners learn how to win in a no-win situation by rewriting the rules and setting new standards without compromising ethics, morals, and values. It also entails building up the colossally equipped and versatile mind of the youth holistically so that they grow to be the future pioneers and dignitaries.
                  </p>
                </div>

                <div className="col-md-6">

                </div>
            </div>
        </div>
     
        <div className="skill-school-cards" >   
            <div className="container" >
                <div className="row product-row" >

                  <button className="rectngle-button" onClick={()=>{Showcomm(true)}}>
                    <div className="rectangle-new">
                      <div className="round-top-new">
                        <h4 className="number-new">1</h4>
                    </div> 
                    <h3 className="title-new">school of</h3>
                    <p className="para">communication</p>
                    <div className="outer-circle-new">
                        <div className="inner-circle-new" style={{backgroundColor:'#2FCC71'}}>
                            <img className="image-circle-new"src={megaphone}/>
                          </div>
                      </div>
                  </div>
                  </button>

                  <button className="rectngle-button" onClick={()=>{Showlead(true)}}>
                    <div className="rectangle-new">
                    <div className="round-top-new">
                        <h4 className="number-new">2</h4>
                    </div> 
                    <h3 className="title-new">school of</h3>
                    <p className="para" style={{marginLeft:"28%"}} >leadership</p>
                    <div className="outer-circle-new">
                        <div className="inner-circle-new"  style={{backgroundColor:'#E74C3B'}}>
                            <img className="image-circle-new"src={leader} style={{height:64,width:64,marginTop:"7%"}}/>
                        </div>
                    </div>
                </div>
                </button>

                <button className="rectngle-button" onClick={()=>{Showcogn(true)}}>
                    <div className="rectangle-new">
                    <div className="round-top-new">
                        <h4 className="number-new">3</h4>
                    </div> 
                    <h3 className="title-new">school of</h3>
                    <p className="para"  style={{marginLeft:'26%'}}>cognizance</p>
                    <div className="outer-circle-new">
                        <div className="inner-circle-new" style={{backgroundColor:'#3498DA'}}>
                            <img className="image-circle-new"src={self}/>
                        </div>
                    </div>
                </div>
                </button>

                <button className="rectngle-button" onClick={()=>{Shownetw(true)}}>
                    <div className="rectangle-new">
                    <div className="round-top-new">
                        <h4 className="number-new">4</h4>
                    </div> 
                    <h3 className="title-new">school of</h3>
                    <p className="para" style={{marginLeft:'25%'}}>networking</p>
                    <div className="outer-circle-new">
                        <div className="inner-circle-new" style={{backgroundColor:'#F39C12'}} >
                            <img className="image-circle-new"src={people} style={{ height:60,width:60,marginLeft:'2%'}}/>
                          </div>
                      </div>
                  </div>
                  </button>

                  <button className="rectngle-button" onClick={()=>{Showcrea(true)}}>
                    <div className="rectangle-new">
                      
                      <div className="round-top-new">
                        <h4 className="number-new">5</h4>
                      </div> 
                      <h3 className="title-new">school of</h3>
                      <p className="para" style={{marginLeft:'28%'}}>creativity</p>
                      <div className="outer-circle-new">
                          <div className="inner-circle-new" style={{backgroundColor:'#9B59B6'}} style={{backgroundColor:'#9B59B6'}}    >
                              <img className="image-circle-new"src={paint}/>
                          </div>
                      </div>
                  </div>
                  </button>

                  <button className="rectngle-button" onClick={()=>{Showetiq(true)}}>
                    <div className="rectangle-new">
                      <div className="round-top-new">
                        <h4 className="number-new">6</h4>
                      </div> 
                      <h3 className="title-new">school of</h3>
                      <p className="para" style={{marginLeft:'29%'}}>etiquettte</p>
                      <div className="outer-circle-new">
                          <div className="inner-circle-new" style={{backgroundColor:'#95A4A6'}}>
                              <img className="image-circle-new"src={handshake} style={{width:64,height:64,marginTop:'14%'}}/>
                          </div>
                      </div>
                  </div>
                  </button>

                  <button className="rectngle-button" onClick={()=>{Showpubl(true)}}>
                    <div className="rectangle-new">
                      <div className="round-top-new">
                        <h4 className="number-new">7</h4>
                      </div> 
                      <h3 className="title-new">school of</h3>
                      <p className="para" style={{marginLeft:'19%'}} >Public speaking</p>
                      <div className="outer-circle-new">
                          <div className="inner-circle-new"  style={{backgroundColor:'#E67D23'}}>
                            <img className="image-circle-new"src={podium}/>
                          </div>
                      </div>
                  </div>
                  </button>

                  <button className="rectngle-button" onClick={()=>{Showthea(true)}}>
                    <div className="rectangle-new">
                      <div className="round-top-new">
                        <h4 className="number-new">8</h4>
                      </div> 
                      <h3 className="title-new">school of</h3>
                      <p className="para"  style={{marginLeft:'29%'}}>theatrics</p>
                      <div className="outer-circle-new">
                          <div className="inner-circle-new"   style={{backgroundColor:'#1CBC9B'}} >
                              <img className="image-circle-new"src={theater} 
                              style={{marginRight:'9%',marginTop:'9%'}}/>
                          </div>
                      </div>
                  </div>
                  </button>

                  <button className="rectngle-button" onClick={()=>{Showthou(true)}}>
                    <div className="rectangle-new">
                      <div className="round-top-new">
                        <h4 className="number-new">9</h4>
                      </div> 
                      <h3 className="title-new">school of</h3>
                      <p className="para" style={{marginLeft:'31%'}}>thought</p>
                      <div className="outer-circle-new">
                          <div className="inner-circle-new" style={{backgroundColor:'#95A4A6'}} >
                              <img className="image-circle-new"src={creativity}/>
                          </div>
                      </div>
                  </div>
                  </button>

                  <button className="rectngle-button" onClick={()=>{Showcrit(true)}}>
                    <div className="rectangle-new">
                      <div className="round-top-new">
                        <h4 className="number-new">10</h4>
                      </div> 
                      <h3 className="title-new">school of</h3>
                      <p className="para">critical thinking</p>
                      <div className="outer-circle-new">
                          <div className="inner-circle-new" style={{backgroundColor:'#CO3A2B'}} >
                            <img className="image-circle-new"src={brain}/>
                          </div>
                      </div>
                  </div>
                  </button>

                </div>
            </div>
        </div>
        <div style={{borderTopstyle:'solid',borderTopColor:'white' ,borderTopWidth:2, width:'100%' , marginTop:'7%'}}>
          <div style={{backgroundColor:'#090707'}}
          className="d-flex justify-content-around flex-wrap"
          >
            <div className="foot-block">
              <h6 className="foot-head">LOCATION</h6>
              <h5 className="foot-text">
                <a
                  className="social"
                  target="_blank"
                  href="https://goo.gl/maps/UWtVKwWE1gFTpsC1A"
                >
                  313, Silver Sanchora Castle, near KFC, near next TI, 452001,
                  Indore, M.P, India
                </a>
              </h5>
            </div>
            <div className="foot-block">
              <h6 className="foot-head">AROUND THE WEB</h6>
              <div
              style={{justifyContent:"space-between",padding:10}}
                className="d-flex justify-content-evenly"
              >
                <a href="https://www.instagram.com/muniversiti_/">
                  <i className="fab fa-instagram fa-3x social" ></i>
                </a>
                <a href="https://www.linkedin.com/company/muniversiti/mycompany/">
                  <i className="fab fa-linkedin fa-3x social"></i>
                </a>
                <a href="https://www.facebook.com/indoreworldsummit">
                  <i className="fab fa-facebook fa-3x social" ></i>
                </a>
              </div>
            </div>
            <div className="foot-block">
            <h6 className="foot-head">CONTACT US</h6>
            <h5 style={{lineHeight:1.3}} className="foot-text">
                info@muniversiti.org<br></br>
                <a className="social" href="tel:+917987519367">
                (+91)7987519367
                </a>
            </h5>
            </div>
        </div>
        <div className="foot-bottom">
            <h6 className="foot-head small">MUNIVERSITI © 2021</h6>
        </div>
        </div>
            </div>
        </div>

<div className="container-fluid">
        <Modal show={comm} onHide={()=>{Showcomm(false)}} centered size="lg" >
  <div className="modal-content" style={{borderStyle:"solid",borderWidth:4,borderColor:"#2fcc71"}}>
        <Modal.Header 
          className='custom-modal-header'>

        <h3>school of <u style={{color:'#2fcc71'}} >Communication</u></h3>

        <button  type="button" className="new-close-btn"  onClick={()=>{Showcomm(false)}}>X</button>
      </Modal.Header>

      <Modal.Body className="custom-modal-body">

      <p>Communication is by far the most important skill that people are looking for these days. The majority of students do not feel confident making presentations or speeches, and they are unaware of how to address issues raised by others in a considerate manner.  Here comes the role of expressive skills.In words, expressive skills refer to those which enable us to express what we are feeling, thinking, and expressing effectively to those around us. To develop expressive skills, students need to learn how to communicate effectively and get the full attention of the listeners.
      </p>
  </Modal.Body>
  <Modal.Footer className="custom-modal-footer">
    <div class="modal-logo">
        <img class="modal-img-logo" src={megaphone}></img>
  </div>
  </Modal.Footer>
        </div>
  </Modal>
  </div>

          <Modal show={lead} onHide={()=>{Showlead(false)}} centered size="lg" aria-labelledby="contained-modal-title-vcenter" >
        <div className="modal-content"  style={{borderStyle:"solid",borderWidth:4,borderColor:"#e74c3b"}}>

        <Modal.Header 
        className='custom-modal-header'>
          <h3>school of <u  style={{color:'#e74c3b'}}>Leadership</u></h3>
        <button  type="button" className="new-close-btn"  onClick={()=>{Showlead(false)}}>X</button>
        </Modal.Header>

          <Modal.Body className="custom-modal-body">
              <p>Leadership is the art of influencing people to attain group objectives willingly. What a minister does in his State, a captain does on the playground, the manager has to do in his organization. Leaders in all walks of life should have some basic qualities. They should be able to establish contact with their equals, deal with their subordinates and guide them, mediate in conflicts, resolve issues by weighing various alternatives, allocate scarce resources properly and take risks and initiatives. Leadership is a dynamic process, which can be acquired under the right mentor. It is a relational process involving interactions among leaders, members and sometimes outside constituencies. We at Skill School believe Good leaders are not born but made through a set of skills and efficient guidance ,which we provide at Skill School.
            </p>
          </Modal.Body>
          <Modal.Footer className="custom-modal-footer">
          <div className="modal-logo" style={{backgroundColor:'#e74c3b'}} >
            <img className="modal-img-logo" src={leader} style={{height:68,width:68,marginRight:3}}></img>
          </div>
          </Modal.Footer>
        </div>

      </Modal>


      <Modal show={cogn} onHide={()=>{Showcogn(false)}} centered size="lg" >
            <div  className="modal-content"  style={{borderStyle:"solid",borderWidth:4,borderColor:"#3498da"}}>

                <Modal.Header 
                className='custom-modal-header'>
                    <h3>school of <u style={{color:'#3498da'}} >Cognizance</u></h3>
                <button  type="button" className="new-close-btn"  onClick={()=>{Showcogn(false)}}>X</button>
                </Modal.Header>

                <Modal.Body className="custom-modal-body">

                <p>Knowledge of or understanding of something in detail is called cognizance. The concept of cognizance is about understanding anything deeply, whether it is a topic, an idea, or even yourself (self-awareness). Understanding oneself well enough to realize one's potential helps a student gain confidence, which reduces social anxiety and unleashes the fullest potential in oneself. Through the School of Cognizance, we plan to make students self aware and at the same time be empathetic towards others.
                </p>
                </Modal.Body>
                <Modal.Footer className="custom-modal-footer">
                <div className="modal-logo" style={{backgroundColor:'#3498da',paddingRight:'1.5%',paddingTop:'2%'}}>
                    <img className="modal-img-logo" src={self}></img>
                </div>
                </Modal.Footer>
            </div>
                
      </Modal>

            <Modal show={netw} onHide={()=>{Shownetw(false)}} centered size="lg"  >
                <div  className="modal-content"  style={{borderStyle:"solid",borderWidth:4,borderColor:"#f39c12"}}> 

                <Modal.Header 
                    className='custom-modal-header'>
                    <h3>school of <u  style={{color:'#f39c12'}}>networking</u></h3>
                    <button  type="button" className="new-close-btn"  onClick={()=>{Shownetw(false)}}>X</button>
                </Modal.Header>

                <Modal.Body className="custom-modal-body">

                    <p>Networking involves developing long-lasting relationships with people you meet in different places. Interacting with people from different professional fields, nationalities, and cultures allows you to broaden your horizons. The more you interact with people from diverse backgrounds, ages, and viewpoints, the more open-minded you become. The other benefit of networking is that you become a better team player because of your open-mindedness and understanding.
                        <br></br>
                    Apart from broadening an individual’s view of life, there are many benefits of networking. Networking is an opportunity to practice starting conversations, communicating clearly, and learning about people around you. These interactions will increase confidence, and this instills the skill of starting conversation with strangers without anxiety.
                    </p>
              </Modal.Body>
              <Modal.Footer className="custom-modal-footer">
                <div className="modal-logo"  style={{backgroundColor:'#f39c12',paddingTop:'1%'}}>
                  <img className="modal-img-logo" src={people} style={{height:65,width:65}} ></img>
                </div>
              </Modal.Footer>
                </div>

      </Modal>

      <Modal show={crea} onHide={()=>{Showcrea(false)}} centered size="lg" >
        <div className="modal-content"  style={{borderStyle:"solid",borderWidth:4,borderColor:"#9b59b6"}}>

    <Modal.Header 
        className='custom-modal-header'>
      <h3>school of <u style={{color:'#9b59b6'}}>creativity</u></h3>
      <button  type="button" className="new-close-btn"  onClick={()=>{Showcrea(false)}}>X</button>
    </Modal.Header>

    <Modal.Body className="custom-modal-body">

    <p>Creativity is a way of living life that embraces originality and makes unique connections between seemingly disparate ideas. Creativity is about living life as a journey into seeing and communicating the extraordinariness of the simplest, most every day acts. Human beings are essentially born creative–from infancy on we find innovative ways to negotiate life. People who are creative are able to find ways around obstacles because they do not just see them as obstacles, but also as opportunities. The act of creation expands our perceptions, and along with expanded perceptions come new ways of solving problems. The activities and the modules of School of Creativity will help you unleash this part of your brain.
  </p>
  </Modal.Body>
  <Modal.Footer className="custom-modal-footer">
                    <div className="modal-logo" style={{backgroundColor:'#9b59b6'}}>
                    <img className="modal-img-logo" src={paint}></img>
                    </div>
  </Modal.Footer>
        </div>

</Modal>

<Modal show={etiq} onHide={()=>{Showetiq(false)}} centered size="lg"  >
      <div className="modal-content"  style={{borderStyle:"solid",borderWidth:4,borderColor:"#95a4a6"}}>

<Modal.Header 
className='custom-modal-header'>
   <h3>school of <u  style={{color:'#95a4a6'}}>etiquette</u></h3>
<button  type="button" className="new-close-btn"  onClick={()=>{Showetiq(false)}}>X</button>
</Modal.Header>

<Modal.Body className="custom-modal-body">

<p>Etiquette is the intricate network of rules that govern good behavior and our social interactions. It reflects a society’s customs, history, ethical codes, and the rules of the various groups we belong to. Etiquette in children  promotes kindness, consideration, and humility. It  gives the confidence to deal with different situations in life, it gives students life skills. They enhance an individual's image and eliminate discourteous behavior.
</p>
</Modal.Body>
<Modal.Footer className="custom-modal-footer">
<div className="modal-logo" style={{backgroundColor:'#95a4a6',paddingTop:'3%',paddingRight:'2%'}} >
                          <img className="modal-img-logo" src={handshake}  style={{width:70, height:70}}></img>
                        </div>
</Modal.Footer>
      </div>

</Modal>


<Modal show={publ} onHide={()=>{Showpubl(false)}} centered size="lg"  >
<div className="modal-content"  style={{borderStyle:"solid",borderWidth:4,borderColor:"#e67d23"}}>

<Modal.Header 
className='custom-modal-header'>
  <h3>school of <u style={{color:'#e67d23'}}>public speaking</u></h3>
<button  type="button" className="new-close-btn"  onClick={()=>{Showpubl(false)}}>X</button>
</Modal.Header>

<Modal.Body className="custom-modal-body">

<p>Public speaking is one of the most important and most dreaded forms of communication. Glossophobia or speech anxiety, is the most common fear people have across the globe. Throughout primary school, it is easy to be the student who sits in the back of the classNameroom and avoids raising his or her hand to dodge such situations. But in the working world, public speaking is a vital skill to have and to hone. It effects simple, everyday interactions between coworkers, bosses and employees, marketing professionals and clients, etc., and it can have an enormous impact on your career path and your level of success in your industry.
</p>
</Modal.Body>
<Modal.Footer className="custom-modal-footer">
<div className="modal-logo"   style={{backgroundColor:'#e67d23',paddingLeft:"1%"}}>
                      <img className="modal-img-logo" src={podium}></img>
</div>
</Modal.Footer>
</div>

</Modal>


<Modal show={thea} onHide={()=>{Showthea(false)}} centered size="lg" >
      <div className="modal-content"  style={{borderStyle:"solid",borderWidth:4,borderColor:"#1cbc96"}}>

                <Modal.Header 
                className='custom-modal-header'>
                 <h3>school of <u style={{color:'#1cbc9b' }}>theatrics </u></h3>
                <button  type="button" className="new-close-btn"  onClick={()=>{Showthea(false)}}>X</button>
                </Modal.Header>

                <Modal.Body className="custom-modal-body">

                <p>Theater has been an influential factor in many people’s lives allowing their creativity to flourish, and most importantly, enabling the development of their self-expression. This can have a profound impact on academics as well. Theater is important because when students participate, they benefit significantly in terms of exploring the unexplored or finding the hidden ability to express. In addition, by shedding the inhibitions associated with performing in front of an audience, they feel more prepared to face any challenges in their careers or entrepreneurship journeys.Theatre can be influential in all aspects of life. Participating in theater classNamees can stimulate students’ creativity and thought process. The very experience of theater makes people more aware and sensitive towards several issues. Theater classNamees, if effectively designed, have the potential to build confidence in the students and help them  to snap out of their shells, and showcase their creativity freely.
                </p>
                </Modal.Body>
                <Modal.Footer className="custom-modal-footer">
                <div className="modal-logo" style={{paddingRight:'4%',paddingTop:'1.5%',backgroundColor:'#1cbc9b',paddingLeft:'1%'}} >
                                    <img className="modal-img-logo" src={theater} style={{height:70,width:70}}>

                                      </img>
                                    </div>
                </Modal.Footer>
      </div>
                
</Modal>

        
  <Modal show={thou} onHide={()=>{Showthou(false)}} centered size="lg" >
      <div className="modal-content"  style={{borderStyle:"solid",borderWidth:4,borderColor:"#95a4a6"}}>

    <Modal.Header 
    className='custom-modal-header'>
        <h3>school of <u style={{color:'#95a4a6'}}>thought </u></h3>
    <button  type="button" className="new-close-btn"  onClick={()=>{Showthou(false)}}>X</button>
      </Modal.Header>

      <Modal.Body className="custom-modal-body">

                <p>Your actions are simply the reflection of your thoughts. And your thoughts, they are the product of your thinking. Thinking allows us to make sense of, to interpret, to make decisions, to act, to know whether something is right or wrong, the list is endless. 
                        <br></br>
                        Psychology says thinking is the human process of using knowledge and information to make plans, interpret and model the world, and constructively interact with and make predictions about the world in general.
                        <br></br>
                        Thinking is everything that a conscious mind does, from having a perception to incomprehension, from mental arithmetic to remembering a phone number or even to remembering what not to remember. So basically our thinking capability makes us different from others in every way possible. It's our thinking which makes us
</p>
</Modal.Body>
<Modal.Footer className="custom-modal-footer">
<div className="modal-logo"  style={{backgroundColor:'#95a4a6',paddingLeft:"1%"}} >
                      <img className="modal-img-logo" src={creativity}></img>
                    </div>
</Modal.Footer>
      </div>

</Modal>

<Modal show={crit} onHide={()=>{Showcrit(false)}} centered size="lg">
<div className="modal-content"  style={{borderStyle:"solid",borderWidth:4,borderColor:"brown"}}>

<Modal.Header 
className='custom-modal-header'>
  <h3>school of <u style={{color:'brown'}} >critical  thinking</u></h3>
<button  type="button" className="new-close-btn"  onClick={()=>{Showcrit(false)}}>X</button>
</Modal.Header>

<Modal.Body className="custom-modal-body">

<p>Critical thinking helps people better understand themselves, their motivations and goals. When you can deduce information to find the most important parts and apply those to your life, you can change your situation and promote personal growth and overall happiness.The decisions a young mind makes affect one's quality of life. And if the mind wants to ensure that it lives a life in the best possible way with utmost happiness and immense success, then it needs to make a lot of conscious decisions. That can be done with a simple thing known as critical thinking.
</p>
</Modal.Body>
<Modal.Footer className="custom-modal-footer">
<div className="modal-logo" style={{backgroundColor:'brown',paddingLeft:"1%"}}>
                      <img className="modal-img-logo" src={brain}></img>
                    </div>
</Modal.Footer>

</div>
</Modal>
        </> 
    )
}

export default  SkillSchool