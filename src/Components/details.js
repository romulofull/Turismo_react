import './details.css';
import Img1 from "./sierralogo.jpeg";
import Img2 from "./costalogo.jpeg";
import Img3 from "./amazoniaecuador.jpeg";
const Details = () => {
    return (
   
        <>
           
            <div className="details">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="box">
                            <img src={Img1}></img>
                            <h6>Sierra</h6>
                            <p>Ubicada en el corazón del país, la Sierra está dominada por imponentes montañas y volcanes, como el Cotopaxi y el Chimborazo, ideales para los amantes del senderismo y la aventura. Su clima fresco y paisajes andinos son perfectos para explorar pueblos coloniales como Quito y Cuenca. </p>
                            <a href="">Explora la Sierra Andina</a>
                         </div>
                         
                    </div>

                    <div className="col-sm-4">
                        <div className="box">
                        <img src={Img2}></img>
                            <h6>Costa</h6>
                            <p>La región costera de Ecuador es un paraíso tropical, donde encontrarás playas de arena blanca y aguas cristalinas. Desde las costas del Pacífico, como Salinas y Montañita, hasta las Islas Galápagos, esta región es ideal para disfrutar del sol, el surf y la vida marina. </p>
                            <a href="">Vive la Aventura Costera</a>
                         </div>
                         
                    </div>


                    <div className="col-sm-4">
                        <div className="box">
                        <img src={Img3}></img>
                            <h6>Amazonía</h6>
                            <p>El Oriente de Ecuador es un vasto territorio de selva tropical que alberga una increíble biodiversidad. La región amazónica es perfecta para los ecoturistas que buscan explorar la jungla, realizar caminatas por la naturaleza y conocer comunidades indígenas. </p>
                            <a href="">Explora la Selva Tropical</a>
                         </div>
                         
                    </div>

                 </div>
            </div>

        </>
     )
}
export default Details;