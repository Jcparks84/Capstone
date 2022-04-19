import axios from "axios";
import React, { useState, useEffect } from 'react';
import "./Rating.css";

const Rating = (props) => {

    const one = document.getElementById('first')
    const two = document.getElementById('second')
    const three = document.getElementById('third')
    const four = document.getElementById('fourth')
    const five = document.getElementById('fifth')

    const handleSelect = (selection) => {
        switch(selection){
            case 'first':{
                one.classList.add('checked')
                two.classList.remove('checked')
                three.classList.remove('checked')
                four.classList.remove('checked')
                five.classList.remove('checked')
                return
            }
            case 'second':{
                one.classList.add('checked')
                two.classList.add('checked')
                three.classList.remove('checked')
                four.classList.remove('checked')
                five.classList.remove('checked')
                return
            }
            case 'third':{
                one.classList.add('checked')
                two.classList.add('checked')
                three.classList.add('checked')
                four.classList.remove('checked')
                five.classList.remove('checked')
                return
            }
            case 'fourth':{
                one.classList.add('checked')
                two.classList.add('checked')
                three.classList.add('checked')
                four.classList.add('checked')
                five.classList.remove('checked')
                return
            }
            case 'fifth':{
                one.classList.add('checked')
                two.classList.add('checked')
                three.classList.add('checked')
                four.classList.add('checked')
                five.classList.add('checked')
                return
            }
        }
    }

    // const arr = [one, two, three, four, five]

    // arr.forEach(item => item.addEventListener('mouseover', (e)=>{
    //     console.log(e.target)
    // }))

    return(
        <div className="row">
            <div className="col text-center">
                <button className="btn btn-primary">Rate</button>
            </div>
            <div className="col text-center">
                <form className="rate-form" action="" method="POST">
                    <button class="fa fa-star fa-3x checked" id="first"></button>
                    <button class="fa fa-star fa-3x checked" id="second"></button>
                    <button class="fa fa-star fa-3x checked" id="third"></button>
                    <button class="fa fa-star fa-3x checked" id="fourth"></button>
                    <button class="fa fa-star fa-3x checked" id="fifth"></button> 
                </form>
            </div>
        </div>
)}

export default Rating;

{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> */}


