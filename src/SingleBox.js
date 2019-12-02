import React, { Component } from 'react'

import './Gallery.css'



export default class SingleBox extends Component {

    render(props) {
        const {im1,im2,im3,im4,im5,im6,im7,im8,title} = this.props.image;
        const {closeBtn,openSlider}=this.props;
        return (
            <div className="box-center">
             {/* single box */}
             <div className={this.state.isOpen ?"single-box":"single-box"}
            
             >
                 <img src={im1} alt=""/>
                 <div className="text">
                     <p>electrical</p>
                 </div>
             </div>
             <div className="single-box">
                 <img src={im2} alt=""/>
                 <div className="text">
                     <p>electrical</p>
                 </div>
             </div>
             <div className="single-box">
                 <img src={im3} alt=""/>
                 <div className="text">
                     <p>electrical</p>
                 </div>
             </div>
             <div className="single-box">
                 <img src={im4} alt=""/>
                 <div className="text">
                     <p>electrical</p>
                 </div>
             </div>
             <div className="single-box">
                 <img src={im5} alt=""/>
                 <div className="text">
                     <p>electrical</p>
                 </div>
             </div>
             <div className="single-box">
                 <img src={im6} alt=""/>
                 <div className="text">
                     <p>electrical</p>
                 </div>
                
             </div>
             <div className="single-box">
                 <img src={im7} alt=""/>
                 <div className="text">
                     <p>electrical</p>
                 </div>

             </div>
             <div className="single-box">
                 <img src={im8} alt=""/>
                 <div className="text">
                     <p>electrical</p>
                 </div>
             </div>
         </div>
        )
    }
}
