import { Injectable } from '@angular/core/';
import {  AngularFireDatabase } from 'angularfire2/database';
@Injectable()
export class UserService {

    constructor(private db: AngularFireDatabase) {
    }

    getUsers() {
        return this.db.list('/users');
    }

    getSingleUser(id: string) {
        return this.db.list('users/' + id, {preserveSnapshot: true});
    }


    deleteUser(id: number) {
    }
}