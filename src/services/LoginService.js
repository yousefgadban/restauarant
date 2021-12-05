

export default class LoginService {
    static instance = LoginService.instance || new LoginService();

    user = null;

    getUser() {
        return this.user;
    }

    setUser(usr) {
        this.user = usr;
    }

}