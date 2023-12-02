import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";

// you can explore more - and check as how to use materiul ui

// implement the class below
class Carousel extends Component {

    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    handleClick = (operation) => {

        operation == "left" ? this.state.count != 0 ? this.setState({count: this.state.count-1}) : this.setState({count: images.length-1}) : this.state.count != images.length-1?
        this.setState({count: this.state.count+1}) : this.setState({count: 0})


        // if(operation == "left"){
        //     this.setState({count: this.state.count-1})

        //     if(this.state.count !== 0){
        //         this.setState({count: this.state.count-1})
        //     }else{
        //         this.setState({count: images.length-1})
        //     }

        // }else{

        //     if(this.state.count != images.length-1){
        //         this.setState({count: this.state.count+1})
        //     }else{
        //         this.setState({count: 0})
        //     }
        //     this.setState({count: this.state.count+1})
        // }
    }

  render(){
    return(
        <div id="carousel">
            <div id="inner-carousel" style={{backgroundImage: `url(${images[this.state.count].img})`}}>
                <div id="left-button" onClick={() => this.handleClick("left")}>
                    <ArrowBackIosIcon style={{color: "white", fontSize: "30px"}} />
                </div>
                <div id="center-text">
                    <h1>{images[this.state.count].title}</h1>
                    <p>{images[this.state.count].subtitle}</p>
                </div>
                <div id="right-button" onClick={()=> this.handleClick("right")}>
                    <ArrowForwardIosIcon style={{color: "white", fontSize: "30px"}}/>
                </div>
            </div>
        </div>
    )
  }
}

export default Carousel;