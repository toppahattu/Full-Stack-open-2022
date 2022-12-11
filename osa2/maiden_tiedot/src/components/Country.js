import Weather from "./Weather";

const Country = ({country}) => {    
    return (
        <>
            <h1>{country.name.common}</h1>
            {country.capital.length > 1
                ? <div>capitals {country.capital.join(', ')}</div>
                : <div>capital {country.capital[0]}</div>
            }
            <div>area {country.area}</div>
            <h3>languages:</h3>
            <ul>
                {Object.keys(country.languages).map(key =>
                    <li key={key}>{country.languages[key]}</li>)}
            </ul>
            <div><img src={country.flags.png} alt={`${country.name}'s flag`}/></div>
            <Weather capital={country.capital[0]}/>
        </>
    );
}

export default Country