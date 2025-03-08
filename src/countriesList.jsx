import React, { useEffect, useState, useCallback, useMemo } from "react";
import CountryCard from "./country-card";

const CountriesList = () => {
  const [countries, setCountries] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    console.log("Parent component is rendering");
  });

  //useEffect to perform SideEffects like api calls'
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data.slice(0, 3));
      }) // Get first 3 countries
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // ✅ useMemo() to perform Expensive calculation (Total Population)

  // Only recalculate when `countries` state changes
  //If there change in any other state in this component
  //this component will rerender but if there is change in countries state only we will calculate population.

  const totalPopulation = useMemo(() => {
    console.log("Calculating total population..."); // 👀 This should log only when `countries` change
    return countries?.reduce((sum, country) => sum + country?.population, 0);
  }, [countries]);

  //calculation TotalPopulation without useMemo()
  //it will call on every re-render

  // const totalPopulation = () => {
  //   console.log("Calculating total population...");
  //   return countries?.reduce((sum, country) => sum + country?.population, 0);
  // };

  // ✅ Memoized function using useCallback
  const handleClick = useCallback((countryName) => {
    alert(`List of tourist places in ${countryName}`);
  }, []);

  //handleClick function without useCallback
  // const handleClick = (countryName) => {
  //   alert(`List of tourist places in ${countryName}`);
  // };

  return (
    <div
      className={`container mt-4 ${
        isDarkMode ? "bg-dark text-white" : "bg-light"
      }`}
    >
      <h2 className="text-center mb-4">🌍 Top 10 Countries</h2>
      <button
        className="btn btn-secondary mb-3"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      {/* with normal function call */}
      {/* <h5 className="mb-3">Total Population: {totalPopulation()}</h5> */}
      {/* with useMemo() */}
       <h5 className="mb-3">Total Population: {totalPopulation}</h5>
      <div className="row">
        {countries.map((country, index) => (
          <CountryCard
            key={index}
            country={country}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
