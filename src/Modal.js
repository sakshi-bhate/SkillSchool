import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import megaphone from './images/megaphone.png'


const ModalTry=()=> {
    const[leader,Showleader]=useState(false)
    return (
        <>
            <Modal show={leader} onHide={()=>{Showleader(false)}} centered  style={{borderStyle:"solid",borderWidth:5,borderColor:'brown'}} >

                <Modal.Header 
                className='custom-modal-header'>

                  <h3>school of <u style={{color:'#2fcc71'}} >Communication</u></h3>
         
                <button  type="button" className="new-close-btn"  onClick={()=>{Showleader(false)}}>X</button>
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
                
            </Modal>
            </>
    )
}
export default ModalTry

<div className="container-fluid container-bg-1">
            <nav className="navbar navbar-expand-lg navbar-skill ">
                <div className="container-fluid" >
                <img className="navbar-brand skill-school-logo" src={logo}/>   
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ul-navbar-items ml-auto">
                      <li className="nav-item" style={{marginInlineEnd:29}} >
                        <a className="nav-link active" aria-current="page" href="#">About</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Contact us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
        </div>