import "./style.css";
import { getMovieInfo, flagCurrency } from "./first";
import { runtimeAndPopulation } from "./second";
import importedVariable = require("./second");

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