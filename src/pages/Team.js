import '../css/Team.css';
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import medium from "../assets/medium.png";
import nba from "../assets/nba.png";
import be from "../assets/be.png"
import zidane from "../assets/zidane.jpg";
import tonikroos from "../assets/tonikroos.jpg";
import ikercasillas from "../assets/ikercasillas.jpg";
import james from "../assets/james.jpg";
import christiano from "../assets/christiano.jpg";


export default function Team(){

    return(
        <>
            <section id='Team'>
                <div className='team-text'>
                    <div>
                    <h1>Without bonding and coordination, every project is a failure. Look at who makes KICKSUP great. ;)
                    </h1>
                    </div>
                </div>
                <div className='team-container'>
                    <div className='team-grid-container'>
                        <div className="team-card">
                         <div className='card-img'>
                            <img src={zidane} alt="zidane.jpg" />
                         </div>
                         <div className='card-title'>
                           <span>Zidane</span>
                         </div>
                         <div className='card-job'>
                           <span>Leadership & management</span>
                         </div>
                         <div className='card-social'>
                           <div>
                            <img src={linkedin} width="16px" alt="in" />
                            </div>
                            <div>
                            <img src={medium} width="16px" alt="M" />
                            </div>
                            <div>
                            <img src={facebook} width="16px" alt="f" />
                           </div>
                         </div>
                        </div>
                        <div className="team-card">
                        <div className='card-img'>
                            <img src={tonikroos} alt="tonikroos.jpg" />
                        </div>
                        <div className='card-title'>
                           <span>Toni Kroos</span>
                        </div>
                        <div className='card-job'>
                           <span>Product developer</span>
                        </div>
                        <div className='card-social'>
                           <div>
                            <img src={linkedin} width="16px" alt="in" />
                            </div>
                            <div>
                            <img src={medium} width="16px" alt="M" />
                            </div>
                        </div>
                        </div>
                        <div className="team-card">
                        <div className='card-img'>
                            <img src={ikercasillas} alt="ikercasillas.jpg" />
                        </div>
                        <div className='card-title'>
                           <span>Iker Casillias</span>
                        </div>
                        <div className='card-job'>
                           <span>Marketing strategy</span>
                        </div>
                        <div className='card-social'>
                           <div>
                            <img src={medium} width="16px" alt="M" />
                            </div>
                        </div>
                        </div>
                        <div className="team-card">
                        <div className='card-img'>
                            <img src={james} alt="james.jpg" />
                        </div>
                        <div className='card-title'>
                           <span>James</span>
                        </div>
                        <div className='card-job'>
                           <span>Product designer</span>
                        </div>
                        <div className='card-social'>
                           <div>
                            <img src={medium} width="16px" alt="M" /></div>
                            <div>
                            <img src={nba} width="16px" alt="0" />
                            </div>
                            <div>
                            <img src={be} width="16px" alt="be" />
                           </div>
                        </div>
                        </div>
                        <div className="team-card">
                        <div className='card-img'>
                            <img src={christiano} alt="christiano.jpg" />
                        </div>
                        <div className='card-title'>
                           <span>Cristiano</span>
                        </div>
                        <div className='card-job'>
                           <span>Financial operations</span>
                        </div>
                        <div className='card-social'>
                           <div>
                            <img src={linkedin} width="16px" alt="in" />
                            </div>
                            <div>
                            <img src={facebook} width="16px" alt="fb" />
                           </div>
                        </div>
                        </div>
                    </div>
                    <div className='team-text extra-big'>
                        <h1>And You! ;)</h1>
                    </div>
                </div>
            </section>
        </>
    );
}