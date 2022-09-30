import React from "react";

function MainInfo({ text }) {
  return <div>{text}</div>;
}

const mainText = [
  { text: "we provide" },
  { text: "visual coding" },
  { text: "solutions" },
  { text: "for you webs" },
];

function MainCont() {
  return (
    <section className="main__cont">
      <div className="main__inner">
        {mainText.map((txt) => (
          <MainInfo text={txt.text} key={txt.text} />
        ))}
      </div>
    </section>
  );
}

export default MainCont;
