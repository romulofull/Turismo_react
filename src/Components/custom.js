import "./custom.css";
import Img1 from "./sierra.jpg";
import Img2 from "./costa.jpeg";
import Img3 from "./selva.jpeg";
const Custom = () => {
  return (


    <>
      <div className="container custom">
        <div className="row">
          <div className="col-sm-4">
            <div className="box">
              <img src={Img1} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={Img2} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={Img3} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Custom;
