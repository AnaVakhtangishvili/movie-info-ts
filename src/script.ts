import "./style.css";
import { getMovieInfo, flagCurrency } from "./currency";
import { runtimeAndPopulation } from "./population";
import importedVariable = require("./population");

const movieSearchBnt = document.getElementById("movie-search-btn") as HTMLButtonElement;
const sumSearchBtn = document.getElementById("population-search-btn") as HTMLButtonElement;

movieSearchBnt.addEventListener("click", (event) => {
  event.preventDefault();
  getMovieInfo();
  flagCurrency.innerHTML = "";
});

sumSearchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  runtimeAndPopulation();
  importedVariable.runtimesArr = [];
  importedVariable.populationArr = [];
});