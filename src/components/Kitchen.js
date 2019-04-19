import React, { Component } from "react";
import PlanDeTravail from '../images/PlanDeTravail.png';
import o1 from '../images/oeufs/1.png';
import o2 from '../images/oeufs/2.png';
import o3 from '../images/oeufs/3.png';
import o4 from '../images/oeufs/4.png';
import o5 from '../images/oeufs/5.png';
import o6 from '../images/oeufs/6.png';
import o7 from '../images/oeufs/7.png';
import Recettes from "./Recettes";
import Modal from "react-awesome-modal";

class Kitchen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recetteUser: "",
      eggs: [],
      tabTest: [],
      eggFlat: '',
      counter: '',
      tab: [],
      visible: false
    };
  }

  componentWillMount() {
    fetch("http://easteregg.wildcodeschool.fr/api/eggs/")
      .then(response => response.json())
      .then(data => {
        const eggs = data;
        this.setState({
          eggs
        });
      });
  }

  addEgeID = EgeID => {
    this.setState({
      recetteUser: this.state.recetteUser + EgeID
    });
  };

  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }

  oeufAuPlat() {
    for (let i = 0; i < this.state.counter; i++) {
      return (<img src={this.randomOeufAuPlat()} className="ResponsiveImg" alt="" />)
    };
  }

  randomOeufAuPlat() {
    const imgs = [o1, o2, o3, o4, o5, o6, o7];
    return (imgs[Math.floor(Math.random() * imgs.length)])
  }

  render() {
    const { eggs } = this.state;

    const handleClick = ($loki) => {
      this.state.tabTest.push($loki)
      this.setState({
        counter: this.state.counter + 1,
        newtab: this.state.tab.push(<img src={this.randomOeufAuPlat()} className="ResponsiveImgEggFlat" alt="" />)
      })
    }

    return (
      <div className="App">
        <div className="PlanDeTravail">
          <div className="ResponsiveImg">
            <img src={PlanDeTravail} className="ResponsiveImgEggFlat" alt="" />
            {this.state.tab.map(i=>i)}
          </div>
          <button
            type="button"
            className="Button"
            onClick={() => this.openModal()}
          >
            {" "}Cook !{" "}
          </button>
        </div>

        <div className="Placard">
          {eggs.filter((item) =>
            item.$loki === 1 ||
            item.$loki === 4 ||
            item.$loki === 16 ||
            item.$loki === 23 ||
            item.$loki === 32 ||
            item.$loki === 38 ||
            item.$loki === 53 ||
            item.$loki === 54 ||
            item.$loki === 58 ||
            item.$loki === 66 ||
            item.$loki === 76 ||
            item.$loki === 79 ||
            item.$loki === 80).map((egg, index) =>
              <button className="EtagerePlacard" onClick={() => handleClick(egg.$loki)} >
                <img className="Oeuf" key={index} src={egg.image} alt="" />
              </button>
            )
          }
        </div>

        <section>
          <div className="modadal">
            <Modal
              visible={this.state.visible}
              width="600"
              height="500"
              effect="fadeInLeft"
              style={{ backgroundColor: "transparent" }}
              onClickAway={() => this.closeModal()}
            >
              <div className="modal">
                <p><Recettes /></p>
                <button className="closeBtn" onClick={() => this.closeModal()}>
                  Close
              </button>
              </div>
            </Modal>
          </div>
        </section>
      </div>
    );
  }
}

export default Kitchen;
