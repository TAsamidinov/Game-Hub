import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f8c69d5de330489ebec0581841e48007'
    }
})