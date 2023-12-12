import React from "react";
import Layout from "@theme/Layout";

import Footer from "../components/FOOTER/Footer";
import "../components/FOOTER/footer.css";
import Card from "../components/CARD/Card";
import "../components/CARD/card.css";

import webrouter from "./images/web-router.png";
import RickMorty from "./images/Rick-Morty.png";
import webslider from "./images/web-slider.png";

 
const jobs = () => {
  return (
    <Layout>
      <hr />

      <div className="row ">
        <div className="col-4">
          <Card
            image={webrouter}
            title="web-router"
            description="Descripción de la tarjeta."
            link="https://juamaya.github.io/web-router"
          />
        </div>
        <div className="col-4">
          <Card
            image={webslider}
            title="web-slider"
            description="Descripción de la tarjeta."
            link="https://juamaya.github.io/web-slider"
          />
        </div>

        <div className="col-4">
          <Card
            image={RickMorty}
            title="Rick and Morty"
            description="Descripción de la tarjeta."
            link="https://juamaya.github.io/morty"
          />
        </div>
      </div>
      <hr />
      <Footer />
    </Layout>
  );
};

export default jobs;
