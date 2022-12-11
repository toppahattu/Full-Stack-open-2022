const Results = ({persons, query, handleDelete}) => {
    return (
        persons.filter(person => person.name.toLowerCase().includes(query.toLowerCase()))
               .sort((a,b) => a.name.localeCompare(b.name, 'en', {sensitivity: 'base'}))
               .map(person => 
                <div key={person.id}>{person.name} {person.number}<button onClick={() => handleDelete(person.id)}>delete</button></div>)
    );
}

export default Results;