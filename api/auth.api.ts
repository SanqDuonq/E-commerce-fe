import { ISignUp } from '../interface/auth.interface';
import APIConfig from './api.config';

class AuthAPI {
    async signUp(data: ISignUp) {
        const res = await APIConfig.post('/api/auth/sign-up',data);
        return res;
    }
}

const authAPI = new AuthAPI();
export default authAPI;