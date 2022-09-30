import React from "react";

function AboutInfo(props) {
  return (
    <div className="about">
      <div className="about__txt">
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
      <div className="about__img">
        <img src={props.img} alt={props.title} />
      </div>
    </div>
  );
}

const aboutText = [
  {
    title: "유튜브 API",
    desc: "유튜브에서 제공하는 API를 가져와서 작업했습니다.",
    img: "https://images.unsplash.com/photo-1663326223816-7d8d969eddfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80",
  },
  {
    title: "TMDB API",
    desc: "TMDB에서 제공하는 API를 가져와서 작업했습니다.",
    img: "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  },
  {
    title: "Unsplash API",
    desc: "Unsplash에서 제공하는 API를 가져와서 작업했습니다.",
    img: "https://images.unsplash.com/photo-1663431905837-09cf339461ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2807&q=80",
  },
];

function AboutCont() {
  return (
    <section className="about__cont">
      <div className="container">
        <div className="about__inner">
          {aboutText.map((txt) => (
            <AboutInfo
              key={txt.title}
              title={txt.title}
              desc={txt.desc}
              img={txt.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutCont;
