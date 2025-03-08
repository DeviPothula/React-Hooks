import React,{useEffect} from "react";

const CountryCard = React.memo(({ country, handleClick }) => {
  
    useEffect(() => { console.log(`Child component is Rendering: ${country.name.common}`) });

  return (
    <div className="col-md-4 mb-3">
      <div className="card shadow-lg p-3">
        <img
          src={country?.flags?.png}
          alt={country?.name?.common}
          className="card-img-top rounded"
          style={{ height: "50px", objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{country?.name?.common}</h5>
          <p className="card-text">
            🌍 Region: {country?.region} <br />
            👥 Population: {country?.population?.toLocaleString()}
          </p>
          <button className="btn btn-primary" onClick={() => handleClick(country?.name?.common)}>
            Show Tourism
          </button>
        </div>
      </div>
    </div>
  );
});

export default CountryCard;
