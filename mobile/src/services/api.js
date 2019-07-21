import axios from 'axios'

const api = axios.create({
    // Emulador do Android - Usar este IP
    // baseURL: 'http://10.0.2.2:3333'
    // Smartphone - Usar o IP da maquina
    baseURL: 'http://192.168.0.12:3333'
})

export default api