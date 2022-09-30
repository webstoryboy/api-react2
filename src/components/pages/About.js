import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import AboutCont from "../includes/AboutCont";

function About() {
  return (
    <>
      <Header />
      <Contents>
        <Title title={["About", "Api"]} />
        <AboutCont />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
}

export default About;
