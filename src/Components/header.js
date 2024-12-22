import './header.css'
import Headerimg from './ecuador.webp'
const Header = () => {
    return (
       
        <>
            
            <div className="header">
                <div className="img">
                    <div>
                        <img src={Headerimg}     alt="" />
                    </div>
                    <div className="Overlay"></div>
                </div>     
                <div className="Content">
                    <h6>Descubre Ecuador</h6>
                    <p>Un país lleno de magia, cultura y naturaleza. Desde las misteriosas Islas Galápagos, hogar de especies únicas, hasta las majestuosas montañas de los Andes, Ecuador ofrece paisajes que te dejarán sin aliento. Vive la calidez de su gente, la diversidad de su gastronomía y la historia que se respira en cada rincón. Camina por las calles coloniales de Quito, Patrimonio Cultural de la Humanidad, o sumérgete en la selva amazónica para una experiencia de aventura única. Ecuador es un destino para todos los gustos: playas paradisíacas, montañas imponentes, y una biodiversidad que te sorprenderá. Ven y vive la magia de Ecuador, donde cada viaje es una aventura inolvidable!</p>
                </div>
             </div>

        </>
    )
}
export default Header