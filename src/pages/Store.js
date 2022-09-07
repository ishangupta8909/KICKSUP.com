import '../css/Store.css';
import { useNavigate } from 'react-router-dom';
import React,{ useState }   from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMagnifyingGlass, faStar, faStarHalfStroke, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faStar as HollowStar, faCalendar } from '@fortawesome/free-regular-svg-icons'
import shoe1 from "../assets/shoe1.png";
import shoe2 from "../assets/shoe2.png";
import funnel from "../assets/funnel.png";
import cart from "../assets/cart.png";

export default function Store(){

  const[shoeProps,setProps]= useState({
    cost:"",
    template:"",
    type:""
  });
  // const [items,setItems] = useState([]);
  const [isVisible,setIsVisible] =useState(true);
  const [isCostly,setCostly] =useState(true);
  // let imgUrlCart =shoe1 ;
  const navigate= useNavigate();

  function handleCostly(event){
    // console.log(event.target.value);
    if(event.target.value === 4000){
       setCostly(false);
    }
    if(!(event.terget.value === 4000)){
       setCostly(true); 
      }
    event.preventDefault();
  }

  function handleRadio(event){

    if(event.target.value === "loafers"){
    setIsVisible(false);
    }
    if(event.target.value === "sneakers"){
      setIsVisible(true);
    }
    event.preventDefault();
  }

  function handleApplyButton(event){
    
    const data = new FormData(document.querySelector("form"));
    let output ="";
    for (const entry of data){
      setProps(...prevValue =>{
        return{ ...prevValue , [entry[0]] : entry[1] };
      })
      // console.log(entry);
      output = `${output}${entry[0]}=${entry[1]}\r`;
    };
    // console.log(output);
    console.log(shoeProps);
    event.preventDefault();
  }

  function handleCLick(event){
    event.preventDefault();
    console.log(event.target.alt);
    const shoeName = event.target.alt;
    
    if(shoeName === "shoe1"){
      navigate("./shoe1");
    }
    else if(shoeName === "shoe2"){
      navigate("./shoe2");
    }
    else if(shoeName === "shoe3"){
      navigate("./shoe3");
  }
  }
    return(
<>
    <section id="Store" >
       <div className='grid-container'>
        <div className='grid-items'>
        <form>
            
              <div className='store-heading'>
              <p className='filters'>FILTERS</p>
              <img src={funnel} width="16px" alt="funnel" />
              </div>
              <div className="space-flex">
              <div className='cost-container'>
              <p className='filters'>COST</p>
              <div className='cost-filters'>
              <ul>
              <li>
                  <input onChange={handleCostly} type="radio" id="cost" name="cost" value="4000" />
                    <label for="cost">Rs. 1500-4000</label>
              </li>
              <li>
                  <input onChange={handleCostly} type="radio" id="cost" name="cost" value="7000" />
                    <label for="cost">Rs. 4001-7000</label>
              </li>
              <li>
                  <input onChange={handleCostly} type="radio" id="cost" name="cost" value="10000" />
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
                  <input onChange={handleRadio} type="radio" id="type" name="type" value="loafers" />
                    <label for="type">Loafers</label>
              </li>
              <li>
                  <input onChange={handleRadio} type="radio" id="type" name="type" value="sneakers"  />
                    <label for="type">Sneakers</label>
              </li>
                </ul>
              </div>
            </div>
            <div className='filter-button'>
            <button onClick={handleApplyButton} type='submit'>apply</button>
            </div>
            </div>
            </form>  
        </div>
        <div className='grid-items'>
         <div className='filter-heading'>
           <div><p className='filters'>SHOES</p></div>
           <div><FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
           <span className='give-borders'>sort by</span>
           </div>
         </div>
         <div className='shoe-container' style={{"visibility": isVisible ? "visible" : "hidden"}}>
        <div className='shoe-items' >
            <div className='img-container need-padding'  onClick={handleCLick} name="shoe1">
            <img src={shoe1} width="100%" alt="shoe1" />
            </div>
            <div>
            <span className='shoe title'>KSL 01</span>

            <div className='shoe-details'>
            <div>Rs 2000/-</div>
            <div>
            <FontAwesomeIcon icon={faStar} size="1x" color='gold' />
            <FontAwesomeIcon icon={faStar} size="1x" color='gold' />
            <FontAwesomeIcon icon={faStar} size="1x" color='gold' />
            <FontAwesomeIcon icon={faStarHalfStroke} size="1x" color='gold' /> 
            <FontAwesomeIcon icon={HollowStar} size="1x" color='gold' />
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
            <FontAwesomeIcon icon={faStar} size="1x" color='gold'/>
            <FontAwesomeIcon icon={faStar} size="1x" color='gold'/>
            <FontAwesomeIcon icon={faStarHalfStroke} size="1x" color='gold' /> 
            <FontAwesomeIcon icon={HollowStar} size="1x" color='gold'/>
            <FontAwesomeIcon icon={HollowStar} size="1x" color='gold'/>
            </div>
            
            </div>
            
         </div>
         <div className='shoe-items' style={{"opacity": isCostly ? 1 : 0}}>
            <div className='img-container need-padding'  onClick={handleCLick} name="shoe3">
            <img src={shoe1} width="100%" alt="shoe3"/>
            </div>
            <div>
            <span className='shoe title'>Royal S 01
            </span>
            <div className='shoe-details'>
            <div>Rs 6000/-</div>
            <div>
            <FontAwesomeIcon icon={faStar} size="1x" color='gold'/>
            <FontAwesomeIcon icon={faStar} size="1x" color='gold'/>
            <FontAwesomeIcon icon={faStar} size="1x" color='gold'/>
            <FontAwesomeIcon icon={faStar} size="1x"  color='gold'/>
            <FontAwesomeIcon icon={faStarHalfStroke} size="1x"  color='gold'/> 
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
            <FontAwesomeIcon icon={faStar} size="1x" color='gold' />
            <FontAwesomeIcon icon={faStar} size="1x" color='gold' />
            <FontAwesomeIcon icon={faStar} size="1x" color='gold' />
            <FontAwesomeIcon icon={faStarHalfStroke} size="1x" color='gold' /> 
            <FontAwesomeIcon icon={HollowStar} size="1x" color='gold' />
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
            <FontAwesomeIcon icon={faStar} size="1x" color='gold' />
            <FontAwesomeIcon icon={faStar} size="1x" color='gold' />
            <FontAwesomeIcon icon={faStarHalfStroke} size="1x" color='gold' /> 
            <FontAwesomeIcon icon={HollowStar} size="1x" color='gold' />
            <FontAwesomeIcon icon={HollowStar} size="1x" color='gold' />
            </div>
            
            </div>
            
         </div>
         <div className='shoe-items' style={{"opacity": isCostly ?  1 : 0}}>
            <div className='img-container need-padding'  onClick={handleCLick} name="shoe3" >
            <img src={shoe1} width="100%" alt="shoe3" />
            </div>
            <div>
            <span className='shoe title'>Royal S 01
            </span>
            <div className='shoe-details'>
            <div>Rs 6000</div>
            <div>
            <FontAwesomeIcon icon={faStar} size="1x" color='gold' />
            <FontAwesomeIcon icon={faStar} size="1x" color='gold' />
            <FontAwesomeIcon icon={faStar} size="1x" color='gold' />
            <FontAwesomeIcon icon={faStar} size="1x" color='gold' />
            <FontAwesomeIcon icon={faStarHalfStroke} size="1x" color='gold' /> 
            </div>
            
            </div>
            </div>
         </div>


        </div>

        </div>  
        <div className='grid-items'>

         <div className='filter-heading'>
             <div> <p className='filters'>CART</p></div>
              <img src={cart} width="16px" alt="cart" />
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
            {/* {
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
            } */}
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