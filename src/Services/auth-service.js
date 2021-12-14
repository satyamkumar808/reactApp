import axios from "axios";

const API_URL = "http://localhost:50973/api/Accounts/";


class AuthService {
    login(userName, Password) {
        return axios.post(API_URL + "authenticate", {userName, Password})
        .then((response) => {
            if(response.data.token ){
                localStorage.setItem("user", JSON.stringify(response.data))
            }
            return response.data;
        });
    }

    logout(){
        
        localStorage.removeItem("user");

    }
    register(userName, Email, Password){
        return axios.post(API_URL + "Register", {
            userName,
            Email,
            Password
        })
    }
}

export default new AuthService();