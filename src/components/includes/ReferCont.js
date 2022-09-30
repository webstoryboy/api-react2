import React from "react";

function ReferItem({ id, title, desc, use }) {
  return (
    <li>
      <a href="/">
        <span className="num">{id}</span>
        <span className="title">{title}</span>
        <span className="desc">{desc}</span>
        <span className="use">{use}</span>
      </a>
    </li>
  );
}

function ReferCont({ refers }) {
  return (
    <section className="refer__cont">
      <div className="container">
        <div className="refer__inner">
          <h2>CSS</h2>
          <ul className="refer__list">
            {refers.map((refer) => (
              <ReferItem
                key={refer.id}
                id={refer.id}
                title={refer.title}
                desc={refer.desc}
                use={refer.use}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ReferCont;
