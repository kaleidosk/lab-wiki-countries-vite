import { useParams } from "react-router-dom"
import {useState,useEffect} from "react"
import axios from "axios"
import {Link} from "react-router-dom"

function CountryDetailsPage() {
    const {alpha3Code} = useParams();
    const [foundCountry,setFoundCountry] = useState(null)
    
    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
          .then(response => {
            setFoundCountry(response.data);
          })
      }, [alpha3Code]);

  return(
        <div className="container">
         {foundCountry ? (
            <div>
          <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>{foundCountry.name.common}</h1>
          <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
                alt={foundCountry.name.common}
                style={{ marginLeft: "10px" }}
              />
          <p>Capital: {foundCountry.capital}</p>
          <p>Area: {foundCountry.area}</p>
          <p>Borders: </p>
            {foundCountry.borders.map ((alpha3Code)=> (
                <div key={alpha3Code}>
                <Link to ={"/" + alpha3Code}>{alpha3Code}
                </Link>
                </div>
              ))
            }</div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default CountryDetailsPage;
