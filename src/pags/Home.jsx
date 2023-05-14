import { Navigate, useNavigate } from "react-router-dom"
import "../css/bases.css"
import "../css/contacto.css"
import "../css/destacados.css"
import "../css/diferenciales.css"
import "../css/footer.css"
import "../css/head.css"
import "../css/institucional.css"
import "../css/llamada.css"
import "../css/login.css"
import "../css/planes.css"
import "../css/reset.css"
import "../css/sobre-nosotros.css"

export const Home = () => {
    const navigate = useNavigate()
    const mover= ()=> {
        navigate("/Login")
    }
  return (
    <div>
     
        <header class="head container">

            <img class="head__logo" src="img/logo-apeperia.svg" alt="Logo de Apeperia"/>
            <nav class="head__navegacion">
                <ul>
                    <li class="head__enlace"><a onClick={mover}>Login</a></li>   
                    <li class="head__enlace"><a href="#">Sobre</a></li>
                    <li class="head__enlace"><a href="#">Planes</a></li>
                    <li class="head__enlace"><a href="#">Blog</a></li>
                    <li class="head__enlace"><a href="#">Destacados</a></li>
                    <li class="head__enlace"><a href="#">Institucional</a></li>
                    <li class="head__enlace"><a href="#">Contacto</a></li>
                 
                </ul>
            </nav>
        </header>
        <main>
            <section class="llamada container">
                <h1 class="llamada__titulo">Aplicaciones en la medida</h1>
                <p class="llamada__texto">Apeperia es una empresa emergente con una manera inovadora de comprar y crear aplicaciones móviles y web.</p>
                <a class="llamada__boton boton" href="#">Conozca los planes</a>
            </section>
            <section class="destacados container">
                <h2 class="destacados__titulo">Destacados</h2>
                <a href="#">
                    <figure class="destacados__panel">
                        <img src="../assets/img/empezando-a-crear-logo.png" alt="Panel de la publicación sobre la creación del logotipo" class="destacados__panel-imagen"/>
                        <figC class="destacados__panel-texto">Conozca las primeras etapas de la creación de un logotipo</figC>
                    </figure>
                </a>
                <a href="#">
                    <figure class="destacados__panel">
                        <img src="../assets/img/sugestiones-fotografias.png" alt="Painel de la publicación sobre consejos de fotografía" class="destacados__panel-imagen"/>
                        <figC class="destacados__panel-texto">¿Trabajas con fotografía? Conozca esos consejos</figC>
                    </figure>
                </a>
                <a href="" class="destacados__boton boton">Recibir destacados por correo</a>
            </section>
            <section class="diferenciales container">
                <ul class="diferenciales__lista">
                    <li class="diferenciales__item diferenciales__item-reloj">
                        <h2 class="item__titulo">Tiempo</h2>
                        <p class="item__texto">¡Tiempo es importante! Trabajamos en ritmo acelerado, para atender los plazos rigurosamente.</p>
                    </li>
                    <li class="diferenciales__item diferenciales__item-dinero">
                        <h2 class="item__titulo">Enfoque</h2>
                        <p class="item__texto">Focamos en el pequeño y médio empreendedor, ofrecemos servicios de calidad con precios accesibles.</p>
                    </li>
                    <li class="diferenciales__item diferenciales__item-quimica">
                        <h2 class="item__titulo">Especialistas</h2>
                        <p class="item__texto">Equipo especializada, con experiéncia de mercado. Testamos todos los productos antes del lanzamiento.</p>
                    </li>
                </ul>
            </section>
            <section class="sobre_nosotros container">
                <div class="sobre_nosotros__contenido">
                    <h2 class="sobre_nosotros__titulo">Sobre nosotros</h2>
                    <p class="sobre_nosotros__texto">
                        ¡Creamos aplicaciones personalizados para todas las personas!
                    </p>
                    <p class="sobre_nosotros__texto">
                        La manutención de una aplicación no puede ser un custo extra para el cliente. 
                        En Apeperia firmas nuestro servicio la manutención ya se incluye en el servicio. 
                        De esa manera no te preocupes con la atualización, es por cuenta de nosotros.
                    </p>
                    <p class="sobre_nosotros__texto sobre-nosotros__texto--destacado sobre-nosotros__texto--division">
                        ¡Tenemos un equipo especializado y exclusivo para proyectos increíbles!
                    </p>
                    <ul class="sobre_nosotros__plataformas">
                        <li><img src="../assets/img/android.png" alt="Ícono del Android"/></li>
                        <li><img src="../assets/img/blackberry.png" alt="Ícono del Blackberry"/></li>
                        <li><img src="../assets/img/apple.png" alt="Ícono de la Apple"/></li>
                        <li><img src="../assets/img/windowsphone.png" alt="Ícono del Windows"/></li>
                    </ul>
                    <p class="sobre_nosotros__texto">Desarrollamos aplicaciones para todas plataformas</p>
                </div>
                <img src="img/sobre-apeperia.png" alt="Sobre Nosotros" class="sobre_nosotros__imagen"/>
            </section>
            <section class="planes container">
                <h2 class="planes__titulo">Planes</h2>
                <ul class="planes__tarjetas">
                    <li class="tarjetas tarjetas--start">
                        <h3 class="tarjetas__titulo">Start</h3>
                        <articule class="tarjetas__contenido">
                            <p class="tarjetas__precio"><em>$ 500</em></p>
                            <p class="tarjetas__texto">5 manutenciones mensuales</p>
                            <p class="tarjetas__texto">App SEO</p>
                            <p class="tarjetas__texto">1 sistema operacional</p>
                            <a href="#" class="tarjetas__boton tarjetas__boton--start boton">Asignar plan</a>
                        </articule>
                    </li>
                    <li class="tarjetas tarjetas--ultra">
                        <h3 class="tarjetas__titulo">Ultra</h3>
                        <articule class="tarjetas__contenido">
                            <p class="tarjetas__precio"><em>$ 1500</em></p>
                            <p class="tarjetas__texto">20 manutenciones mensuales</p>
                            <p class="tarjetas__texto">App SEO</p>
                            <p class="tarjetas__texto">4 sistemas operacionales</p>
                            <a href="#" class="tarjetas__boton tarjetas__boton--ultra boton">Asignar plan</a>
                        </articule>
                    </li>
                    <li class="tarjetas tarjetas--mega">
                        <h3 class="tarjetas__titulo">Mega</h3>
                        <articule class="tarjetas__contenido">
                            <p class="tarjetas__precio"><em>$ 1500</em></p>
                            <p class="tarjetas__texto">10 manutenciones mensuales</p>
                            <p class="tarjetas__texto">App SEO</p>
                            <p class="tarjetas__texto">2 sistemas operacionales</p>
                            <a href="#" class="tarjetas__boton tarjetas__boton--mega boton">Asignar plan</a>
                        </articule>
                    </li>
                </ul>
            </section>
            <section class="contacto container">
                <h2 class="contacto__titulo">Contacto</h2>
                <p>Entre en contacto con nosotros</p>
                <a href="#" class="contacto__boton boton">Entre en contacto</a>
            </section>
            <section class="institucional container">
                <h2 class="institucional__titulo">Institucional</h2>
                <div class="institucional__contenido">
                    <div class="institucional__informaciones">
                        <p class="institucional__descripcion">Un poco más sobre Apeperia</p>
                        <address class="institucional__direccion">
                            Calle Vergueiro, 3185
                            Villa Mariana, São Paulo
                            <article class="institucional__contacto">
                                <p>
                                    <a href="tel:+551155712751" class="institucional__contacto-telefono">+55 11 55712751</a> o
                                    <a href="mailto:contato@apeperia.com" class="institucional__contacto-email">contato@apeperia.com</a>
                                </p>
                            </article>
                        </address>
                    </div>
                    <video src="img/formacion-java.mp4" class="institucional__video" controls></video>
                </div>
            </section>
            <footer class="footer container">
                <img src="../assets/img/logo-apeperia.svg" alt="Logo de Apeperia" class="footer__logo"/>
                <ul class="footer__social">
                    <li><a href="#" class="footer__midia"><img src="img/facebook.png" alt="Ícono de Facebook"/></a></li>
                    <li><a href="#" class="footer__midia"><img src="img/instagram.png" alt="Ícono de Instagram"/></a></li>
                    <li><a href="#" class="footer__midia"><img src="img/twitter.png" alt="Ícono de Twitter"/></a></li>
                </ul>
                <nav>
                    <ul class="footer__navegacion">
                        <li class="footer__enlace"><a href="#">Sobre</a></li>
                        <li class="footer__enlace"><a href="#">Planes</a></li>
                        <li class="footer__enlace"><a href="#">Blog</a></li>
                        <li class="footer__enlace"><a href="#">Destacados</a></li>
                        <li class="footer__enlace"><a href="#">Institucional</a></li>
                        <li class="footer__enlace"><a href="#">Contacto</a></li>
                    </ul>
                </nav>
            </footer>
        </main>
    
    </div>
  )
}
