import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.104:3333'
});

export default api;

// iOS com Emulador: localhost
// iOS com dispositivo fisico: IP da máquina
// Android com Emulador:
//  * localhost - criar redirecionamento de portas com adb reverse tcp:3333 tcp:3333 (porta da api)
//  * 10.0.2.2 (Android Studio)
//  * 10.0.3.2 (Genymotion)
// Android com dispositivo fisico: IP da máquina
