import image1 from "./aleman.jpeg";
import image2 from "./americano.jpeg";
import image3 from "./australiano.jpg";
import "./testi.css";
const Testi = () => {


  return (
    <>
      <div className="testi container">
        <div className="content">
          <h6>Testimonios</h6>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <div className="box">
              <p>
              Lo que más me sorprendió de Ecuador fue la increíble biodiversidad que ofrece, especialmente en la Amazonía. Además, la comida, las tradiciones y el espíritu de su gente hacen que este país sea un destino que siempre recordaré.
              </p>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <img src={image1} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-sm-4 mid">
            <div className="box">
              <p>
              Ecuador es un país lleno de maravillas. Desde las altas montañas de los Andes hasta la selva amazónica, cada rincón tiene algo especial. La gente es cálida y acogedora, y la naturaleza es simplemente impresionante. ¡No hay lugar como Ecuador!
              </p>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <img src={image2} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <p>
              Ecuador tiene algo para todos: playas paradisíacas, montañas imponentes y una cultura vibrante. Cada día fue una nueva aventura, y la amabilidad de su gente hizo que mi experiencia fuera aún más especial."
              </p>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <img src={image3} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Testi;
