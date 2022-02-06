import "./style.css";
import { getMovieInfo, flagCurrency } from "./first";
import { runtimeAndPopulation } from "./second";
import runtimesArr = require("./second");
import populationArr = require("./second");

const movieSearchBnt = document.getElementById("movie-search-btn") as HTMLInputElement;
const sumSearchBtn = document.getElementById("population-search-btn") as HTMLInputElement ;

movieSearchBnt.addEventListener("click", (event) => {
  event.preventDefault();
  getMovieInfo();
  flagCurrency.innerHTML = "";
});

sumSearchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  runtimeAndPopulation();
  runtimesArr.runtimesArr = [];
  populationArr.populationArr = [];
});