import React from 'react'
import {plans,features} from '../Data'
import ReactCardPlan from './ReactCardPlan';
import { Link } from 'react-router-dom'
import "../App.css"

function ReactPricingCard() {
    console.log(plans);
    console.log(features);
    return (
        <div  className="pricing py-5">
         
        <div className="container">
            <h2>Already Register</h2>
        <Link to="/login"><button class="btn btn-block btn-primary text-uppercase btn-size-10px" >Login</button></Link><br/>
            <div className="row">
           
                {
                    plans.map((plan,index) => {
                        return <ReactCardPlan key ={index} plan = {plan} features={features} />
                    })
                }
              
            </div>
        </div>
        </div>
    )
}

export default ReactPricingCard
