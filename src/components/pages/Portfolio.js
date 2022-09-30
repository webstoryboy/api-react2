import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import PortCont from "../includes/PortCont";
import axios from "axios";

// function Portfolio() {
//   return (
//     <>
//       <Header />
//       <Contents>
//         <Title title={["Portfolio", "Api"]} />
//         <PortCont />
//         <Contact />
//       </Contents>
//       <Footer />
//     </>
//   );
// }

class Portfolio extends React.Component {
  state = {
    isLoading: true,
    ports: []
  }

  mainAnimation = () => {

  }

  getPorts = async () => {
    const {data:{data:{ports}}} = await axios.get("https://webstoryboy.github.io/dothome1/portfolio.json");
    this.setState({ports : ports});
  }

  componentDidMount(){
    console.log("시작");
    this.getPorts();
  }

  render(){
    const { ports } = this.state;
    // console.log(ports)

    return (
      <>
        <Header />
        <Contents>
          <Title title={["Portfolio", "Api"]} />
          <PortCont ports={ports} />
          <Contact />
        </Contents>
        <Footer />
      </>
    )
  }

}


export default Portfolio;
