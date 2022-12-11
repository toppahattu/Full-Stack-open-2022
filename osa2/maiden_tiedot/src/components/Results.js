import Country from './Country';
import ShowButton from './ShowButton';

const Results = ({countries}) => {
    if (countries.length === 0) {
        return (<></>);
    }
    
    if (countries.length === 1) {
        let country = countries[0];
        return (
            <Country country={country}/>
        );
    }

    if (countries.length < 11) {
        return (
            countries.map((country, i) =>
                <div key={country.name.common}>{country.name.common}<ShowButton country={country}/></div>)
        );
    }

    return (
        <p>
            Too many matches, specify another filter
        </p>
    );
}

export default Results;