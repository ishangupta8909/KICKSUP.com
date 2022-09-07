import '../css/Product.css';
import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faStar, faStarHalfStroke, faLocationDot, faLessThan} from '@fortawesome/free-solid-svg-icons';
import { faStar as HollowStar, faCalendar } from '@fortawesome/free-regular-svg-icons';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' ;

import shoe2 from "../assets/shoe2.png";
import chessBoard1 from "../assets/chessboard1.png";
import chessBoard2 from "../assets/chessboard2.png";
import blueSquare from "../assets/bluesquare.png";
import square7 from "../assets/squareseven.png";
import square8 from "../assets/squareeight.png";
import square9 from "../assets/squarenine.png";
import square10 from "../assets/square10.png";
import funnel from "../assets/funnel.png";
import shoes from "../data/shoeData";
import { useParams, useNavigate } from 'react-router-dom';

export default function Product(){
  const { id } = useParams();
  const navigate = useNavigate();
  const [items,setItems] = useState([]);
  let index= 1; 
//   console.log(id);
    index = shoes.findIndex(single => single.shoe === id);
    console.log(index);

   function handleBack(event){
    event.preventDefault();
    navigate(-1);

  }

  function handleCLick(event){
    setItems(prevValue =>{
        return [...prevValue, shoes[index].shoe ];
    })
}
    return(
<>
 <section id='Product'>
  <div className='product-grid-container'>
    <div className='product-grid-items'>
      <div className='flex'>
      <div onClick={handleBack}>
          <FontAwesomeIcon icon={faLessThan} size="3x" />
      </div>
      <h1>your design space</h1>
     </div>
     <div>
         <div className='shoe-area-container'>
          <div className="big-img">
            <img src={shoe2} width="256px" alt="shoe.jpg" />
          </div>
          <div>
          <div className="sm-img">
            <div className="shoe-padding"><img src={shoe2} width="128px" alt="shoe.jpg" /></div>
            <div className="shoe-padding"><img src={shoe2} width="128px" alt="shoe.jpg" /></div>
            <div className="shoe-padding"><img src={shoe2} width="128px" alt="shoe.jpg" /></div>
          </div>
          </div>
          <div className='shoe-details-flex'>
             <div className='shoe-area-padding'>
                 <h1>{shoes[index].name}</h1>
                 <p>{shoes[index].desc}</p>
             </div>
             <div>
             <div className='shoe-area-padding'>
                 <FontAwesomeIcon className="rating" icon={faStar} size="2x" color='gold' />
                <FontAwesomeIcon className="rating" icon={faStar} size="2x" color='gold' />
                <FontAwesomeIcon className="rating" icon={faStar} size="2x" color='gold' />
                <FontAwesomeIcon className="rating" icon={faStarHalfStroke} size="2x" color='gold' />
                <FontAwesomeIcon className="rating" icon={HollowStar} size="2x" color='gold' />
                 <div>80 Reviews</div> 
                 </div>
             </div>
             <div className='shoe-area-padding'>
                 <p>{shoes[index].price}</p>
                 <span>Get an exclusive 20% off shopping with HDFC bank</span>
             </div>
             <div className='flex-list'>
                 <h1>Front </h1>
                 <img src={chessBoard1} width="16px" alt="chess1.png" />
                 <img src={blueSquare} width="16px" alt="chess1.png" />
                 <img src={chessBoard2} width="16px" alt="chess1.png" />
             </div>
             <div className="flex-list">
                 <h1>Middle</h1>
                 <img src={chessBoard1} width="16px" alt="chess1.png" />
                 <img src={blueSquare} width="16px" alt="chess1.png" />
                 <img src={chessBoard2} width="16px" alt="chess1.png" />
             </div>
             <div className="flex-list">
                 <h1>Back  </h1>
                 <img src={chessBoard1} width="16px" alt="chess1.png" />
                 <img src={blueSquare} width="16px" alt="chess1.png" />
                 <img src={chessBoard2} width="16px" alt="chess1.png" />
             </div>
             <div className="flex-list">
                 <h1>Sole</h1>
                 <img src={chessBoard1} width="16px" alt="chess1.png" />
                 <img src={blueSquare} width="16px" alt="chess1.png" />
                 <img src={chessBoard2} width="16px" alt="chess1.png" />
             </div>
             <div className="flex-list">
                 <h1>Size</h1>
                 <img src={square7} width="16px" alt="chess1.png" />
                 <img src={square8} width="16px" alt="chess1.png" />
                 <img src={square9} width="16px" alt="chess1.png" />
                 <img src={square10} width="16px" alt="chess1.png" />
             </div>
          </div>
         </div>
          <div className="flex" >
            <div>
                <h1>Rating product</h1>
            </div>
            <div>
                <FontAwesomeIcon className="rating" icon={HollowStar} size="3x" color='gold' />
                <FontAwesomeIcon className="rating" icon={HollowStar} size="3x" color='gold' />
                <FontAwesomeIcon className="rating" icon={HollowStar} size="3x" color='gold' />
                <FontAwesomeIcon className="rating" icon={HollowStar} size="3x" color='gold' />
                <FontAwesomeIcon className="rating" icon={HollowStar} size="3x" color='gold' />
            </div>
          </div>
          <div className='shoe-buttons'>
                <button className='share'>share design</button>
                <button className='add' onClick={handleCLick}>add to cart</button>
          </div>




    </div>              
   </div>
                    

   <div className="product-grid-items">
     <div className='cart-heading'>
      <div> 
       <p className='cart-filters'>CART</p>
      </div>
      {/* <FontAwesomeIcon icon={faShoppingBag} size="3x" /> */}
        <img src={funnel} width="16px" alt="funnel" />
     </div>
                
     <div>
      <div className='cart-footer'>
        <div className='container-footer'>
         <div className='need-padding-inline'>
          <FontAwesomeIcon icon={faLocationDot} size="2x" />
          <span>Home</span>
         </div>
         <div>
          <FontAwesomeIcon icon={faCalendar} size="2x" />
          <span>Select Date</span>
         </div>
        </div>
                       
        <div className='area-cart' data-text="What's stopping you, designer?">
         <div className='area-container'>
         <ul>
         {
         items.map(item =>{
         return(
         <>
         <div className='cart-block-items'>
         <img src={shoe2}
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
        <div className='order-button'>
        <button onClick={handleBack} type='submit'>order now</button>
        </div>
        </div>
        </div>
   </div>
  </div>
 </section>
</>
    );
}