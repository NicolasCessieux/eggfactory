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
    console.log("1");
    return <img src={EggJaune} alt="" />;
  }
  if (tabEggs.includes(38) || tabEggs.includes(76)) {
    console.log("2");
    return <img src={EggPoule} alt="" />;
  }
  if (tabEggs.includes(54) || tabEggs.includes(58) || tabEggs.includes(64)) {
    console.log("3");
    return <img src={EggVert} alt="" />;
  }
  if (tabEggs.includes(16)) {
    return <img src={EggBleu} alt="" />;
  }
  if (tabEggs.includes(4) || tabEggs.includes(71)) {
    return <img src={EggSocle} alt="" />;
  }
  if (tabEggs.includes(1)) {
    return <img src={EggOrange} alt="" />;
  }
  if (tabEggs.includes(32)) {
    return <img src={EggPoule} alt="" />;
  }
  if (tabEggs.includes(53) || tabEggs.includes(79)) {
    return <img src={EggEgg} alt="" />;
  }
  if (tabEggs.includes(38) || tabEggs.includes(76)) {
    return <img src={EggPoule} alt="" />;
  }
  return <div>{recette.map(egg => egg)}</div>;
}

export default Recettes;
