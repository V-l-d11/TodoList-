import React from 'react'
import './Modal.css'

export default class Modal extends React.Component{
    state={
        isOpen: false
    }
    render(){
        return(
           <React.Fragment>
               <button className='btn' onClick={()=> this.setState({isOpen:true})}>Open support</button>

               {this.state.isOpen && ( <div className='modal'>
                   <div className='modal-body'>
                       <h1>Modal title</h1>
                       <p>The program can: record your tasks and erase them when executed, there is also a section with planning for the days of the week</p>
                       <button className='btn'  onClick={()=> this.setState({isOpen:false})} >Close modal</button>
                   </div>
               </div>)}
           </React.Fragment> 
        )
    }
}