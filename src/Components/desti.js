import image1 from "./quito.webp";
import image2 from "./ibarra.jpeg";
import image3 from "./cuencajpeg.jpeg";
import image4 from "./puyo.jpeg";
import image5 from "./guayaquil.jpeg";
import image6 from "./ambato.png";
import "./desti.css";
const Desti = () => {
  return (
    <>
      <div className="container desti">
        <div className="content">
          <h6>Destinos</h6>
          <p></p>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <div className="box">
              <img src={image1} className="img-fluid" alt="" />
              <div className="Content">
                <h5>$700</h5>
                <h4>Quito</h4>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={image2} className="img-fluid" alt="" />
              <div className="Content">
                <h5>$500</h5>
                <h4>Ibarra</h4>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={image3} className="img-fluid" alt="" />
              <div className="Content">
                <h5>$700</h5>
                <h4>Cuenca</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <div className="box">
              <img src={image4} className="img-fluid" alt="" />
              <div className="Content">
                <h5>$500</h5>
                <h4>Puyo</h4>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={image5} className="img-fluid" alt="" />
              <div className="Content">
                <h5>$700</h5>
                <h4>Guayaquil</h4>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={image6} className="img-fluid" alt="" />
              <div className="Content">
                <h5>$400</h5>
                <h4>Ambato</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Desti;
