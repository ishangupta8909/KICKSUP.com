import '../css/Store.css';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFilter, faMagnifyingGlass, faStar, faStarHalfStroke, faShoppingBag, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import shoe1 from "../assets/shoe1.png";
import shoe2 from "../assets/shoe2.png";
import { faStar as HollowStar, faCalendar } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react';

// const data = [
//   {
//   id:"shoe1",
//   imgUrl:"shoe1",
//   title: "KSL 01",
//   price:"Rs. 2000",
//   stars: [3,1]
// },
// {
//   id:"shoe2",
//   imgUrl:"shoe2",
//   title: "KSW 01",
//   price:"Rs. 2500",
//   stars:[2,1]
// },
// {
//   id:"shoe1",
//   imgUrl:"shoe1",
//   title: "KSL 01",
//   price:"Rs. 2000",
//   stars:[4,1]
// }
// ];

export default function Store(){

  const [items,setItems] = useState([]);
  let imgUrlCart =shoe1 ;
  function handleCLick(event){
    console.log(event.target.alt);
    const shoeName = event.target.alt;
    
    if(shoeName === "shoe1"){
      setItems(prevValues => {
        return [...prevValues , shoeName];
        
      });
      console.log(items);
    }
    else if(shoeName === "shoe2"){
      setItems(prevValues => {
        return [...prevValues , shoeName];

      });
      console.log(items);
    }else if(shoeName === "shoe3"){
      setItems(prevValues => {
        return [...prevValues , shoeName];
      });
      console.log(items);
    }
   console.log(shoeName);
  }

    return(
<>
    <section id="Store" >
       <div className='grid-container'>
        <div className='grid-items'>
          
            
              <div className='store-heading'>
              <p className='filters'>FILTERS</p>
              <FontAwesomeIcon icon={faFilter} size="3x" />
              </div>
              <div className="space-flex">
              <div className='cost-container'>
              <p className='filters'>COST</p>
              <div className='cost-filters'>
              <ul>
              <li>
                  <input type="radio" id="cost" name="cost" value="4000" />
                    <label for="cost">Rs. 1500-4000</label>
              </li>
              <li>
                  <input type="radio" id="cost" name="cost" value="7000" />
                    <label for="cost">Rs. 4001-7000</label>
              </li>
              <li>
                  <input type="radio" id="cost" name="cost" value="10000" defaultChecked />
                    <label for="cost">Rs. 7000+</label>
              </li>
                </ul>
              </div>
              </div>
                
                

              <div className='cost-container'>
              <p className='filters'>Design templates</p>
              <div className='cost-filters'>
              <ul>
              <li>
                  <input type="radio" id="template" name="template" value="2" />
                    <label for="cost">2</label>
              </li>
              <li>
                  <input type="radio" id="template" name="template" value="3" />
                    <label for="template">3</label>
              </li>
              <li>
                  <input type="radio" id="template" name="template" value="4" defaultChecked />
                    <label for="template">3+</label>
              </li>
                </ul>
              </div>
              </div>
              <div className='type-container'>
              <p className='filters'>TYPE</p>
              <div className='type-filters'>
              <ul>
              <li>
                  <input type="radio" id="type" name="type" value="loafers" />
                    <label for="type">Loafers</label>
              </li>
              <li>
                  <input type="radio" id="type" name="type" value="sneakers" />
                    <label for="type">Sneakers</label>
              </li>
                </ul>
              </div>
            </div>
            <div className='filter-button'>
            <button type='submit'>apply</button>
            </div>
            </div>
            
        </div>
        <div className='grid-items'>
         <div className='filter-heading'>
           <div><p className='filters'>SHOES</p></div>
           <div><FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
           <span className='give-borders'>sort by</span>
           </div>
         </div>
         <div className='shoe-container'>
        
        <div className='shoe-items'>
            <div className='img-container need-padding'  onClick={handleCLick} name="shoe1">
            <img src={shoe1} width="100%" alt="shoe1" />
            </div>
            <div>
            <span className='shoe title'>KSL 01</span>

            <div className='shoe-details'>
            <div>Rs 2000/-</div>
            <div>
            <FontAwesomeIcon icon={faStar} size=".5x" color='yellow' />
            <FontAwesomeIcon icon={faStar} size=".5x" color='yellow' />
            <FontAwesomeIcon icon={faStar} size=".5x" color='yellow' />
            <FontAwesomeIcon icon={faStarHalfStroke} size=".5x" color='yellow' /> 
            <FontAwesomeIcon icon={HollowStar} size=".5x" color='yellow' />
            </div>
            
            </div>
            </div>
         </div>
         <div className='shoe-items'>
            <div className='img-container' onClick={handleCLick} name="shoe2">
            <img src={shoe2} width="100%" alt="shoe2" /></div>
            <span className='shoe title'>KSW 01</span>
            <div className='shoe-details'>
            <div>Rs 2500/-</div>
            <div>
            <FontAwesomeIcon icon={faStar} size=".5x" color='yellow'/>
            <FontAwesomeIcon icon={faStar} size=".5x" color='yellow'/>
            <FontAwesomeIcon icon={faStarHalfStroke} size=".5x" color='yellow' /> 
            <FontAwesomeIcon icon={HollowStar} size=".5x" color='yellow'/>
            <FontAwesomeIcon icon={HollowStar} size=".5x" color='yellow'/>
            </div>
            
            </div>
            
         </div>
         <div className='shoe-items'>
            <div className='img-container need-padding'  onClick={handleCLick} name="shoe3">
            <img src={shoe1} width="100%" alt="shoe3"/>
            </div>
            <div>
            <span className='shoe title'>Royal S 01
            </span>
            <div className='shoe-details'>
            <div>Rs 6000/-</div>
            <div>
            <FontAwesomeIcon icon={faStar} size=".5x" color='yellow'/>
            <FontAwesomeIcon icon={faStar} size=".5x" color='yellow'/>
            <FontAwesomeIcon icon={faStar} size=".5x" color='yellow'/>
            <FontAwesomeIcon icon={faStar} size=".5x"  color='yellow'/>
            <FontAwesomeIcon icon={faStarHalfStroke} size=".5x"  color='yellow'/> 
            </div>
            
            </div>
            </div>
         </div>
         <div className='shoe-items'>
            <div className='img-container need-padding'  onClick={handleCLick} name="shoe1" >
            <img src={shoe1} width="100%" alt="shoe1" />
            </div>
            <div>
            <span className='shoe title'>KSL 01</span>

            <div className='shoe-details'>
            <div>Rs 2000</div>
            <div>
            <FontAwesomeIcon icon={faStar} size=".5x" color='yellow' />
            <FontAwesomeIcon icon={faStar} size=".5x" color='yellow' />
            <FontAwesomeIcon icon={faStar} size=".5x" color='yellow' />
            <FontAwesomeIcon icon={faStarHalfStroke} size=".5x" color='yellow' /> 
            <FontAwesomeIcon icon={HollowStar} size=".5x" color='yellow' />
            </div>
            
            </div>
            </div>
         </div>
         <div className='shoe-items'>
            <div className='img-container' onClick={handleCLick} name="shoe2">
            <img src={shoe2} width="100%" alt="shoe2" /></div>
            <span className='shoe title'>KSW 01</span>
            <div className='shoe-details'>
            <div>Rs 2500</div>
            <div>
            <FontAwesomeIcon icon={faStar} size=".5x" color='yellow' />
            <FontAwesomeIcon icon={faStar} size=".5x" color='yellow' />
            <FontAwesomeIcon icon={faStarHalfStroke} size=".5x" color='yellow' /> 
            <FontAwesomeIcon icon={HollowStar} size=".5x" color='yellow' />
            <FontAwesomeIcon icon={HollowStar} size=".5x" color='yellow' />
            </div>
            
            </div>
            
         </div>
         <div className='shoe-items'>
            <div className='img-container need-padding'  onClick={handleCLick} name="shoe3" >
            <img src={shoe1} width="100%" alt="shoe3" />
            </div>
            <div>
            <span className='shoe title'>Royal S 01
            </span>
            <div className='shoe-details'>
            <div>Rs 6000</div>
            <div>
            <FontAwesomeIcon icon={faStar} size=".5x" color='yellow' />
            <FontAwesomeIcon icon={faStar} size=".5x" color='yellow' />
            <FontAwesomeIcon icon={faStar} size=".5x" color='yellow' />
            <FontAwesomeIcon icon={faStar} size=".5x" color='yellow' />
            <FontAwesomeIcon icon={faStarHalfStroke} size=".5x" color='yellow' /> 
            </div>
            
            </div>
            </div>
         </div>


        </div>

        </div>  
        <div className='grid-items'>
         <div className='filter-heading'>
             <div> <p className='filters'>CART</p></div>
              <FontAwesomeIcon icon={faShoppingBag} size="3x" />
         </div>

         <div>
        <div className='cart-footer'>
        <div className='footer-container'>
            <div className='need-padding-inline'>
                <FontAwesomeIcon icon={faLocationDot} size="2x" />
                <span>Home</span>
            </div>
            <div>
                <FontAwesomeIcon icon={faCalendar} size="2x" />
                <span>Select Date</span>
            </div>
        </div>
       
        <div className='cart-area' data-text="What's stopping you, designer?">
        <div className='area-container'>
          <ul>
            {
              items.map(item =>{
                if(item === "shoe1" || item === "shoe3"){ 
                  imgUrlCart=shoe1; 
                  }else if(item === "shoe2"){ 
                  imgUrlCart=shoe2; 
                  }
                return(
                  <>
                  <div className='cart-area-items'>
                  <img src={imgUrlCart} 
                    alt="shoe-img" width="128px"
                  />
                  <li>{item}</li>
                  </div>
                  </>
                );
              })
            }
          </ul>
          </div>
        </div>
        <div className='cart-button'>
        <button type='submit'>order now</button>
        </div>
        </div>
        </div>
         
        </div>
        
      </div>
    </section>
</>
    );
}