import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import whohasmore1C from './assets/whohasmore1-c.jpg'
import whohasmore2C from './assets/whohasmore2-c.jpg'
import whohasmore3C from './assets/whohasmore3-c.jpg'
import shirty1C from './assets/shirty1-c.jpg'
import shirty2C from './assets/shirty2-c.jpg'
import shirty3C from './assets/shirty3-c.jpg'
import temple1C from './assets/temple1-c.jpg'
import temple2C from './assets/temple2-c.jpg'
import temple3C from './assets/temple3-c.jpg'
import flagger from './assets/flagger2-c.jpg'
import rosanti from './assets/Rosanti-c.jpg'
import NewPage from './assets/NewPage'
import ReactLogo from './assets/ReactLogo'
import SassLogo from './assets/SassLogo'
import HtmlLogo from './assets/HtmlLogo'
import JavascriptLogo from './assets/JavascriptLogo'
import Firebase from './assets/Firebase'
import CssLogo from './assets/CssLogo'

function Projects() {

  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.04 })
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.1 })
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.1 })
  const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.2 })
  const { ref: ref5, inView: inView5 } = useInView({ threshold: 0.1 })
  const { ref: ref6, inView: inView6 } = useInView({ threshold: 0.2 })

  const animation = useAnimation()
  const animation2 = useAnimation()
  const animation3 = useAnimation()
  const animation4 = useAnimation()
  const animation5 = useAnimation()

  let homeHash = document.querySelector('#home-nav')
  let projectsHash = document.querySelector('#projects-nav')
  let aboutHash = document.querySelector('#about-nav')
  let contactHash = document.querySelector('#contact-nav');

  useEffect(() => {
    if (inView1) {
      animation.start({
        opacity: 1,
        scale: 1,
        transition: {
          ease: [0, 0.71, 0.2, 1.01],
          duration: 0.8,
        }
      })
    }
    if (!inView1) {
      animation.start({
        opacity: 0,
        scale: 0,
        transition: {
          delay: 0.3,
        }
      })
    }
    if (inView2) {
      animation2.start({
        opacity: 1,
        scale: 1,
        transition: {
          ease: [0, 0.71, 0.2, 1.01],
          duration: 0.8,
        }
      })
    }
    if (!inView2) {
      animation2.start({
        opacity: 0,
        scale: 0,
        transition: {
          delay: 0.3,
        }
      })
    }
    if (inView3) {
      animation3.start({
        opacity: 1,
        scale: 1,
        transition: {
          ease: [0, 0.71, 0.2, 1.01],
          duration: 0.8,
        }
      })
    }
    if (!inView3) {
      animation3.start({
        opacity: 0,
        scale: 0,
        transition: {
          delay: 0.3,
        }
      })
    }
    if (inView4) {
      animation4.start({
        opacity: 1,
        scale: 1,
        transition: {
          ease: [0, 0.71, 0.2, 1.01],
          duration: 0.8,
        }
      })
    }
    if (!inView4) {
      animation4.start({
        opacity: 0,
        scale: 0,
        transition: {
          delay: 0.3,
        }
      })
    }
    if (inView6) {
      projectsHash?.classList?.add('violet');
      homeHash?.classList?.remove('violet');
      aboutHash?.classList?.remove('violet');
      contactHash?.classList?.remove('violet');
    }
    if (inView5) {
      animation5.start({
        opacity: 1,
        scale: 1,
        transition: {
          ease: [0, 0.71, 0.2, 1.01],
          duration: 0.8,
        }
      })
    }
    if (!inView5) {
      animation5.start({
        opacity: 0,
        scale: 0,
        transition: {
          delay: 0.3,
        }
      })
    }


  }, [inView1, inView2, inView3, inView4, inView5, inView6])

  return (
    <section className='projects__main__container' id='projects' ref={ref6}>
      <div className="projects__main">
        <h2 className="projects__main__title">Proyectos.</h2>
        <div className="project-container" ref={ref1}>
          <article className='project mg-top' >
            <motion.div
              className="text"
              animate={animation}>
              <h3>TEMPLE</h3>
              <div className='tech-icons'><ReactLogo /> <JavascriptLogo /> <CssLogo /> <HtmlLogo /></div>
              <p>
                <strong>[Experiencia Freelance] ~ </strong>Primera experiencia freelance. El trabajo fue readaptar su homepage y optimizarla lo máximo posible.
                <br />
                <br />
                Para este trabajo se utilizó React logrando una <strong>SPA</strong>. Las animaciones fueron llevadas a cabo con <strong>Framer Motion</strong> y el estilado con <strong>CSS</strong>.
                Se consumió la API de Google para hacer uso de su mapa. El formulario de contacto fue validado con React Validator.
              </p>
              <a href="https://temple-ashen.vercel.app/" target={"_blank"}>temple-ashen.vercel.app <NewPage /></a>
            </motion.div>
            <motion.div
              className="imgs"
              animate={animation}>
              <a href="https://temple-ashen.vercel.app/" target={"_blank"}>
                <img src={temple1C} alt="who has more" />
              </a>
              <a href="https://temple-ashen.vercel.app/" target={"_blank"}>
                <img src={temple2C} alt="who has more" />
              </a>
              <a href="https://temple-ashen.vercel.app/" target={"_blank"}>
                <img src={temple3C} alt="who has more" />
              </a>
            </motion.div>
          </article>

          <article className='project' ref={ref2}>
            <motion.div
              className="text"
              animate={animation2}>
              <h3>WHO HAS MORE?</h3>
              <div className='tech-icons'><ReactLogo /> <JavascriptLogo /> <SassLogo /> <HtmlLogo /></div>
              <p>
                Es un juego que consiste en elegir entre dos países o islas, según lo que toque aleatoriamente, cuál de las dos opciones tiene más población.
                Se pueden elegir diversas regiones o todo el mundo en sí.
                <br />
                Éste proyecto fue basado en la idea del famoso <strong>"Higher or Lower"</strong>.
                <br />
                <br />
                Para ésta página se utilizó <strong>React (Vite)</strong>, haciendo uso de <strong>React Router</strong>, <strong>API Context</strong> y <strong>Hooks</strong>.
                Para el estilado utilicé <strong>SASS</strong>. También consumí la API de "Rest Countries" para traer la información y banderas de los distintos países.
              </p>
              <a href="https://whohasmore.vercel.app/" target={"_blank"}>whohasmore.vercel.app <NewPage /></a>
            </motion.div>
            <motion.div
              className="imgs"
              animate={animation2}>
              <a href="https://whohasmore.vercel.app/" target={"_blank"}>
                <img src={whohasmore1C} alt="who has more" />
              </a>
              <a href="https://whohasmore.vercel.app/" target={"_blank"}>
                <img src={whohasmore2C} alt="who has more" />
              </a>
              <a href="https://whohasmore.vercel.app/" target={"_blank"}>
                <img src={whohasmore3C} alt="who has more" />
              </a>
            </motion.div>
          </article>

          <article className='project' ref={ref3}>
            <motion.div
              className="text"
              animate={animation3}
            >
              <h3>SHIRTY</h3>
              <div className='tech-icons'><ReactLogo /> <JavascriptLogo /> <CssLogo /> <HtmlLogo /> <Firebase /></div>
              <p>
                <strong>[Experiencia Académica] ~ </strong> Este e-commerce fue mi proyecto final para Codeacademy, terminando en el <strong>TOP 10</strong> general de los estudiantes. Es una tienda
                que presenta un catálogo de diversos productos así como también un carrito y su correspondiente checkout.
                <br />
                <br />
                Para este proyecto utilicé <strong>React (CRA)</strong> haciendo uso de <strong>React Router</strong>, <strong>API context</strong> y <strong>Hooks</strong>.
                Para validar el checkout usé React Validator y para almacenar la información del mismo empleé <strong>Firebase</strong>.
              </p>
              <a href="https://shirty.vercel.app/" target={"_blank"}>shirty.vercel.app <NewPage /></a>
            </motion.div>
            <motion.div
              className="imgs"
              animate={animation3}
            >
              <a href="https://shirty.vercel.app/" target={"_blank"}>
                <img src={shirty1C} alt="who has more" />
              </a>
              <a href="https://shirty.vercel.app/" target={"_blank"}>
                <img src={shirty2C} alt="who has more" />
              </a>
              <a href="https://shirty.vercel.app/" target={"_blank"}>
                <img src={shirty3C} alt="who has more" />
              </a>
            </motion.div>
          </article>
          <div className="projects-small">
            <article className="project-small mg-left" ref={ref4}>
              <motion.div
                className="img"
                animate={animation4}
              >
                <a href="https://flagger-ten.vercel.app/" target={"_blank"}>
                  <img src={flagger} alt="flagger" />
                </a>
              </motion.div>
              <motion.div
                className="text"
                animate={animation4}
              >
                <h3>FLAGGER</h3>
                <div className='tech-icons'><ReactLogo /> <JavascriptLogo /> <CssLogo /> <HtmlLogo /></div>
                <p>
                  Idea obtenida de <strong>"Frontend Mentor".</strong> Consiste en presentar banderas de diferentes países mostrando, al oprimir, la información de cada uno en particular.
                  <br />
                  <br />
                  Para este proyecto se utilizó <strong>React</strong> haciendo uso de <strong>React Router</strong> y <strong>Hooks</strong>.
                  Para el estilado usé <strong>CSS</strong>. Por otro lado, la API que se consumió para extraer la información fue la de "Rest Countries".
                </p>
                <a href="https://flagger-ten.vercel.app/" target={"_blank"}>flagger-ten.vercel.app <NewPage /></a>
              </motion.div>
            </article>
            <article className="project-small" ref={ref5}>
              <motion.div
                className="img"
                animate={animation5}
              >
                <a href="https://santtiq.github.io/CoderHouse-JS/Integrador/HTML/index.html" target={"_blank"}>
                  <img src={rosanti} alt="rosanti" />
                </a>
              </motion.div>
              <motion.div
                className="text"
                animate={animation5}
              >
                <h3>ROSANTI</h3>
                <div className='tech-icons'><JavascriptLogo /> <CssLogo /> <HtmlLogo /></div>
                <p>
                  Primer proyecto realizado en el curso de JavaScript de <strong>CoderHouse</strong>.
                  La idea era simular un e-commerce logrando interacciones entre los productos y el carrito en sí.
                  <br />
                  <br />
                  Para este proyecto se utilizó <strong>JavaScript</strong> y para el estilado usé <strong>CSS</strong>.
                  Por otro lado, en este proyecto en particular se hicieron diferentes animaciones con <strong>jQuery</strong>.
                </p>
                <a href="https://santtiq.github.io/CoderHouse-JS/Integrador/HTML/index.html" target={"_blank"}>rosanti - GitHub Pages <NewPage /></a>
              </motion.div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects