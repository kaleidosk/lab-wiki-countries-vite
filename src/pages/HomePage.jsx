import {useState, useEffect} from "react"
import { Link} from "react-router-dom"
import axios from "axios"
import CountryDetailsPage from "./CountryDetailsPage";

function HomePage() {
    // useState to create a state variable to store the countries data retrieved from the API
    const [countries, setCountries] = useState([]);
    // useEffect to set an effect that will make a GET request to the API for the countries data
    useEffect(() => {
    axios.get( "https://ih-countries-api.herokuapp.com/countries/")
    .then ((response)=>{
              setCountries(response.data)
              console.log('response.data',response.data)
            })
        }, [])

    return(
        <div className="container" style={{ maxHeight: "90vh", overflow: "scroll" }}>
        <h1 style={{ fontSize: "24px" }}>WikiCountries: Your Guide to the World</h1>
         <ul className="list-group">
        {countries.map(country => (
          <li key={country._id} className="list-group-item list-group-item-action">  {country.name.common}
          <Link to={`/${country.alpha3Code}`}>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={country.name.common}
                style={{ marginLeft: "10px" }}
              />
            </Link>
          </li>
        ))}
      </ul>
      </div>
    )
}

export default HomePage;
