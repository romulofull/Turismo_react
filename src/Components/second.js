import SecondHeader from "./ecuador.jpeg";
import "./second.css";
const Second = () => {
  return (
 
    <>
      <div className="second_header">
        <div className="img">
            <img src={SecondHeader} className="img-fluid" alt="" />
          <div className="Overlay"></div>
        <div className= "texto">
        <div className="Content">
          <h6>Desde las cumbres andinas hasta las Islas Galápagos, Ecuador te ofrece todo lo que buscas. Ven y haz de este viaje una experiencia única. Disfruta de su diversidad natural, sumérgete en sus paisajes vibrantes y conecta con su rica cultura. Ecuador es el destino que lo tiene todo: playas paradisíacas, selvas exuberantes, ciudades coloniales y montañas imponentes. </h6></div>
        </div>
      </div>
      </div>
    </>
  );
};
export default Second;