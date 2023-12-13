import React from "react";
import Layout from "@theme/Layout";
import Footer from "../components/FOOTER/Footer";
import "../components/FOOTER/footer.css";
import Skills from "../components/SKILLS/Skills";
import "../components/SKILLS/skills.css";
import ServicesCard from "../components/CARD-SERVICES/ServicesCard";
import '../components/CARD-SERVICES/servicesCard.css'
import ilustracion from './images/ilustracion.webp'
import ilustracion1 from './images/ilustracion1.webp'
import diseñoWeb from './images/diseñoWeb.jpg'
import instalacion from './images/instalacion.jpg'
import montador from './images/montador.jpg'

const services = () => {
  return (
    <Layout>
      <Skills />
      <hr/>
      <div className="row">
        <div className="col-lg-6 ">
        <ServicesCard
        image={ilustracion }
        title=" Design Web Pages  "
        description="✅ El diseño web es una actividad que consiste en la planificación, diseño, implementación y mantenimiento de sitios web."
      />
        </div>
        <div className="col-lg-6 ">
        <ServicesCard
        image={ilustracion1 }
        title="Team Work"
        description="✅ El trabajo en equipo es un proceso en el que diferentes personas aportan sus habilidades, conocimientos y tiempo para alcanzar metas de forma conjunta."
      />
        </div>
       
      </div>
      <div className="row">
        <div className="col-lg-6 ">
        <ServicesCard
        image={montador }
        title="Montador Aeronáutico"
        description="✅ El montador de estructuras aeronáuticas es un mecánico especialista que realiza la mecanización de las piezas y monta subconjuntos y conjuntos aeronáuticos. Trabaja los aluminios especiales y materiales compuestos."
      />
        </div>
        <div className="col-lg-6 ">
        <ServicesCard
        image={instalacion }
        title=" Electricista"
        description="✅ Instalaciones eléctricas y equipamientos tanto en los edificios nuevos como en edificios antiguos"
      />
        </div>
       
      </div>


      <Footer />
    </Layout>
  );
};

export default services;
