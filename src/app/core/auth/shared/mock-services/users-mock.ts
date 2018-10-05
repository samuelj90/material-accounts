import { User } from '../interfaces/user';

export const usersMock: User[] = JSON.parse(localStorage.getItem('pms-projects')) || [{
    id: 1,
    name: 'Administrator',
    username: 'admin',
    password: 'admin@123',
    token: 'Bearer fake-jwt-token',
}];
