import React from "react";
import Layout from "@theme/Layout";
import Footer from "../components/FOOTER/Footer";
import "../components/FOOTER/footer.css";
import Formulario from "../components/FORMULARIO/Formulario";



const contact = () => {
  return (
    <Layout>
      <h3 className="title">Formulario</h3>
      <hr/>
      <div className="formulario"> 
        <Formulario /> 
        </div> 
      <Footer />
    </Layout>
  );
};

export default contact;
