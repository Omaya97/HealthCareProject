import axios from 'axios';

export const localServer = 'http://192.168.1.14:8000'


export default axios.create({ baseURL: localServer });

//export default axios.create({ baseURL: 'http://10.0.2.2:8000'});