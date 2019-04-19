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

const EggRandom = () => {
  const arr = [EggBleu,
    EggDefault,
    EggEgg,
    EggJaune,
    EggLapin,
    EggOrange,
    EggPanier,
    EggPoussin,
    EggRose,
    EggRouge,
    EggSocle,
    EggVert,
    EggPoule]

  const toDoArrRandom = [];
  for (let i = 0; i < 1; i += 1) {
    toDoArrRandom.push(arr[Math.floor(Math.random() * arr.length)]);
  }
  return (
    <div className="egg">
      <img className="eggResult eggimg" src={toDoArrRandom} alt="" />
    </div>
  );
}

export default EggRandom