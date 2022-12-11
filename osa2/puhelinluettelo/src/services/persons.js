import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
}

const create = (newPerson) => {
    const request = axios.post(baseUrl, newPerson);
    return request.then(response => response.data);
}

const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`);
    return request.then(response => response);
}

const update = (id, newPerson) => {
    const request = axios.put(`${baseUrl}/${id}`, newPerson);
    return request.then(response => response.data);
}

const createId = (persons, id) => {
    if (persons.some(p => p.id === id)) {
        return createId(persons, id+1);
    }
    return id;
}

const personService = {getAll, create, remove, update, createId};
export default personService;