import React from "react";

import EggBleu from "../images/eggBleu.png";
import EggDefault from "../images/eggDefault.png";
import EggEgg from "../images/eggEgg.png";
import EggJaune from "../images/eggJaune.png";
import EggLapin from "../images/eggLapin.png";
import EggOrange from "../images/eggOrange.png";
import EggPanier from "../images/eggPanier.png";
import EggPoussin from "../images/eggPoussin.png";
import EggRose from "../images/eggRose.png";
import EggRouge from "../images/eggRouge.png";
import EggSocle from "../images/eggSocle.png";
import EggVert from "../images/eggVert.png";
import EggPoule from "../images/eggPoule.png";

const tabEggs = [23, 66, 80, 38, 76, 54, 58, 64, 16, 4, 71, 1, 32, 53, 79];

const Recettes = ({ recette }) => {
  if (tabEggs.includes(23) || tabEggs.includes(66) || tabEggs.includes(80)) {
    return (
      <div className="egg">
        <img className="eggResultCustom eggimg" src={EggJaune} alt="" />
      </div>
    );
  }
  if (tabEggs.includes(38) || tabEggs.includes(76)) {
    return (
      <div className="egg">
        <img className="eggResult eggimg" src={EggPoule} alt="" />;
      </div>
    );
  }
  if (tabEggs.includes(54) || tabEggs.includes(58) || tabEggs.includes(64)) {
    return (
      <div className="egg">
        <img className="eggResultCustom eggimg" src={EggVert} alt="" />;
      </div>
    );
  }
  if (tabEggs.includes(16)) {
    return (
      <div className="egg">
        <img className="eggResultCustom eggimg" src={EggBleu} alt="" />;
      </div>
    );
  }
  if (tabEggs.includes(4) || tabEggs.includes(71)) {
    return (
      <div className="egg">
        <img className="eggResult eggimg" src={EggSocle} alt="" />;
      </div>
    );
  }
  if (tabEggs.includes(1)) {
    return (
      <div className="egg">
        <img className="eggResultCustom eggimg" src={EggOrange} alt="" />;
      </div>
    );
  }
  if (tabEggs.includes(32)) {
    return (
      <div className="egg">
        <img className="eggResult eggimg" src={EggPoule} alt="" />;
      </div>
    );
  }
  if (tabEggs.includes(53) || tabEggs.includes(79)) {
    return (
      <div className="egg">
        <img className="eggResultCustom eggimg" src={EggEgg} alt="" />;
      </div>
    );
  }
  if (tabEggs.includes(38) || tabEggs.includes(76)) {
    return (
      <div className="egg">
        <img className="eggResult eggimg" src={EggPoussin} alt="" />;
      </div>
    );
  }
  return <div>{recette.map(egg => egg)}</div>;
};

export default Recettes;
