import React, { Component } from 'react'

import './Gallery.css'
import im1 from './img/cake-1.jpeg';
import im2 from './img/cake-2.jpeg'
import im3 from './img/cake-3.jpeg'
import im4 from './img/cupcake-1.jpeg'
import im5 from './img/cupcake-2.jpeg'
import im6 from './img/cupcake-3.jpeg'
import im7 from './img/doughnut-1.jpeg'
import im8 from './img/doughnut-2.jpeg'

export default class Gallery extends Component {

 constructor(){
     super()
     this.state={
         images:[
             {   
                 img:im1,
                 title:"electric",
                 id:1
             },
        
             {
                img:im2,
                title:"solar",
                id:2
            },
            {
                img:im3,
                title:"alarms",
                id:3
            },
            {
                img:im4,
                title:"electric",
                id:4
            },
            {
                img:im5,
                title:"electric",
                id:5
            },

           {
                 img:im6,
                 title:"electric",
                 id:6
             },
             {
                img:im7,
                title:"electric",
                id:7
            },
            {
                img:im8,
                title:"electric",
                id:8
            }


        ],
        isOpen:false,
        counter:0
     }
 }


openSlider=(e)=>{
    let value = e.target;
 this.setState({
    images:this.state.images,
     isOpen:!this.state.isOpen
 })
console.log(value);

}

closeBtn = (e)=>{
    this.setState({
        images:this.state.images,
        isOpen:!this.state.isOpen
    })
}





    render() {

  const mapBox = this.state.images.map((image)=>{
     return(
        <div key={image.id} className={this.state.isOpen ?"single-box":"single-box"}
        onClick={this.openSlider}
        >
            <img src={image.img} alt=""/>
            <div className="text">
     <p>{image.title}</p>
            </div>
        </div>
     )
  })



        return (
            <section>

     <div className="boxes">
         <div className="box-center">
          {mapBox}
         </div>
     </div>

     {/* pop containner appear */}
     <div className={this.state.isOpen ?"openContainer main-container": ' main-container '}>

        {
            this.state.images.map(item=>{
                return(
                    <div className="box-container" style={{background:(`url(${item.img})`)}}>
                    <div className="btns">
                                <div className="leftBtn"><i className="fas fa-chevron-left"></i></div>
                                <div className="rightBtn"><i className="fas fa-chevron-right"></i></div>
                    </div>
                    <div className="close-btn" onClick={this.closeBtn}><i className="fas fa-times"></i></div>
                    </div>
                )
            })
        }

     
     </div>

     </section>
        )
    }
}
