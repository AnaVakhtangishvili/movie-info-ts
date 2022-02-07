import { omdbApiKey, apiUrl, countryApi } from "./first";

const inputs = document.querySelectorAll<HTMLInputElement>("input.inpt");
const showRuntime = document.getElementById("show-runtime") as HTMLElement;
const showPopulation = document.getElementById("show-population") as HTMLElement;
export let runtimesArr: string[] = [];
export let populationArr: string[] = [];
let countriesArr: string[] = [];

async function runtimeAndPopulation() {
  try {
    for (let i = 0; i < inputs.length; i++) {
      const searchedTitle = inputs[i].value;
      const omdbApiUrl = `${apiUrl}${searchedTitle}`;
      const response = await fetch(omdbApiUrl);
      const jsonData = await response.json();
      const { Runtime, Country } = jsonData;
      // runtime
      inputs[i].value.length == 0
        ? runtimesArr.push("0")
        : runtimesArr.push(Runtime);
      // country
      inputs[i].value.length == 0
        ? countriesArr.push("")
        : countriesArr.push(Country);
    }
    // runtime result
    const runtimeSum = runtimesArr.reduce((acc, curr) => {
      acc += parseInt(curr);
      return acc;
    }, 0);
    !runtimeSum
      ? (showRuntime.innerHTML = "OOPS, Wrong Title")
      : (showRuntime.innerHTML = `${runtimeSum} minutes`);
    // countries result
    const uniqueCountries = [...new Set(String (countriesArr).split(","))];
    const filterUnique = uniqueCountries.filter((elem) => elem.length != 0);

    getPopulation(filterUnique);

  } catch (error) {
    console.log(error);
  }
}

async function getPopulation(arr: string[]) {
  for (let i = 0; i < arr.length; i++) {
    const api_Response = await fetch(`${countryApi}${arr[i]}`);
    const given_Data = await api_Response.json();
    const populations = given_Data[0].population;
    populationArr.push(populations);
  }
  const sumPopulation = populationArr.reduce((acc, curr) => {
    acc += curr;
    return acc;
  });
  showPopulation.innerHTML = sumPopulation;
}

export { runtimeAndPopulation };