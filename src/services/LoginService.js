import { Subject } from 'rxjs';

const loginSubject = new Subject();

export const LoginService = {
    updateUser: user => loginSubject.next(user),
    getUser: () => loginSubject.asObservable(),
};