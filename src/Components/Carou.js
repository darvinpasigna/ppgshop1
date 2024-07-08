import IMG1 from '../Images/Carousel1.jpg';
import IMG2 from '../Images/Carousel2.jpg';
import IMG3 from '../Images/Carousel3.jpg';


function Carou() {
    return(
        <>
        <div id="PPGcarou" className="container-fuid carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={IMG1} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block" id='c1'>
                        <h2>QuestMaster</h2>
                        <p>Unleash Your Adventure: Dive into Endless Worlds!</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={IMG2} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block" id='c1'>
                        <h2>ImagiNation</h2>
                        <p>Level Up Your Imagination: Play Beyond Limits!</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={IMG3} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block" id='c1'> 
                        <h2>BattleSaga</h2>
                        <p>Epic Battles, Unforgettable Journeys: Your Game Awaits!</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#PPGcarou" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden={true}></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#PPGcarou" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden={true}></span>
              <span className="visually-hidden">Next</span>
            </button>
        </div>

        </>
    )
}
export default Carou;