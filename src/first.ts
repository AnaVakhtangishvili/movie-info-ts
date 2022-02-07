const inpt = document.getElementById("write-title") as HTMLInputElement;
const movieTitle = document.getElementById("movie-title") as HTMLElement;
const releaseYear = document.getElementById("release-year") as HTMLElement;
const movieActors = document.getElementById("movie-actors") as HTMLElement;
const countryName = document.getElementById("country-name") as HTMLElement;
const flagCurrency = document.getElementById("flag-currency") as HTMLElement;
const date = new Date();
const currentYear = date.getFullYear();

const omdbApiKey = "f6a5b808";
const apiUrl = `http://www.omdbapi.com/?&apikey=${omdbApiKey}&t=`;
const countryApi = `https://restcountries.com/v3.1/name/`;


async function getMovieInfo() {
  try {
    const searchedTitle = inpt.value;
    const omdbApiUrl = `${apiUrl}${searchedTitle}`;
    const response = await fetch(omdbApiUrl);
    const jsonData = await response.json();
    const { Title, Year, Actors, Country } = jsonData;
    movieTitle.innerText = Title;
    releaseYear.innerHTML = (currentYear == Year) ? `This Year` : `${currentYear - Year} years ago`;
    movieActors.innerHTML = actorsNames(Actors);
    countryName.innerHTML = Country;
    const arrOfcountry = Country.split(",");
    getFlagAndCurrency(arrOfcountry);
  } catch (error) {
    movieTitle.innerHTML = "OOPS, Wrong Title";
    releaseYear.innerHTML = "";
    movieActors.innerHTML = "";
    countryName.innerHTML = "";
    console.log(error);
  }
}

function actorsNames(str: string) {
  const fullArr = str.split(',');
  let nameArr: string[] = [];
  for (let i = 0; i < fullArr.length; i++) {
    const arrayFromNames: string[] = fullArr[i].trim().split(' ');
    nameArr.push(String (arrayFromNames.shift()));
  }
  return nameArr.join(', ');
}

async function getFlagAndCurrency(arr: string[]) {
  for (let i = 0; i < arr.length; i++) {
    const apiResponse = await fetch(`${countryApi}${arr[i]}`);
    const givenData = await apiResponse.json();
    let currencyKey: string = String (Object.keys(givenData[0].currencies));
    const countryFlag = document.createElement('img');
    const countryCurrancy = document.createElement('span');

    flagCurrency.append(countryFlag, countryCurrancy);
    countryFlag.src = givenData[0].flags.png;
    countryCurrancy.innerHTML = givenData[0].currencies[currencyKey].name;
    console.log();
  }
}

export { getMovieInfo,getFlagAndCurrency, flagCurrency, omdbApiKey, apiUrl, countryApi };