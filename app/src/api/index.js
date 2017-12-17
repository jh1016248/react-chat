import axios from 'axios';

let Http = function (){};
let host = 'http://localhost:3000';

Http.prototype = {
    login(userName, password, callback) {
        axios.post(host + '/api/user/login', {userName: userName, password: password})
            .then(res => {
                callback && callback(res)
            })
    },
    register(userName, password, callback) {
        console.log("register")
        axios.post(host + '/api/user/register', {userName: userName, password: password})
            .then(res => {
                callback && callback(res)
            })
    }
}


let http = new Http();
export default http;