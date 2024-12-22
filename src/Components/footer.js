import "./footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
          <div className="col-sm-4">
              <h6>Importantes Links</h6>
              <i className="fas fa-arrow-right">
                <a className= "textoa" href="#">Inicio</a>
              </i>
              <i className="fas fa-arrow-right">
                <a className= "textoa" href="#">Donde ir</a>
              </i>
              <i className="fas fa-arrow-right">
                <a className= "textoa" href="#">Qué hacer</a>
              </i>
              <i className="fas fa-arrow-right">
                <a className= "textoa"  href="#">Qué comer</a>
              </i>
              <i className="fas fa-arrow-right">
                <a className= "textoa" href="#">Contactanos</a>
              </i>
            </div>
          </div>
        </div>
        <div className="custom_content">
          <h6>Full Developer 2024</h6>
        </div>
      </footer>
    </>
  );
};

export default Footer;
