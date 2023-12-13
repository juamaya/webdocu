import React from "react";
import Layout from "@theme/Layout";
import Footer from "../components/FOOTER/Footer";
import "../components/FOOTER/footer.css";
import Card from "../components/CARD/Card";
import yo from "./images/YO.jpg";
import "../components/CARD/card.css";

const about = () => {
  return (
    <Layout>
    <div className="container-card">
     
      <Card
        image={yo}
        title="Juan Marin"
        description="Curriculum"
        link="https://juamaya.github.io/curricujuan.github.io/"
        btnLink='Ver Curriculum'
      />
    </div>
    <Footer />
  </Layout>
  )
}

export default about