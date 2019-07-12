import axios from 'axios';

export default class CarService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }

    getAll() {
        return axios.get('cars');
    }

    submitCar (newCar) {
        return axios.post('cars', newCar)
    }

    getSingleCar(id) {
        return axios.get('cars/' + id);
    }

    editCar(id, editedCar) {
        return axios.put('cars/' + id, editedCar);
    }

}

export const carService= new CarService();