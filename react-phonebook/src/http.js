import axios from 'axios';
export default axios.create({
    baseURL:"http://react-phonebook-api.test/api",
    headers:{
        "Content-type":"application/json"
    }
})