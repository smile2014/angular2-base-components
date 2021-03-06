import { uuid } from '../utils/uuid';
import { Cloneable, Reversible } from './base-model';

export class User implements Cloneable, Reversible {
  id: string;
  username: string;
  password: string;
  firstname: string;
  surname: string;
  role: string;
  constructor(object: any) {
    this.id = object.id               || uuid();
    this.username = object.username   || '';
    this.password = object.password   || '';
    this.firstname = object.firstname || '';
    this.surname = object.surname     || '';
    this.role = object.role           || '';
  }
  name(): string {
    return this.surname + (this.firstname ? ', ' + this.firstname : '');
  }
  clone(): User {
    return new User(this);
  }
  reverse(object: any): void {
    this.id = object.id               || uuid();
    this.username = object.username   || '';
    this.password = object.password   || '';
    this.firstname = object.firstname || '';
    this.surname = object.surname     || '';
    this.role = object.role           || '';
  }
}

export class Role implements Cloneable, Reversible {
  id: string;
  name: string;
  auth: string[];
  constructor(object: any) {
    this.id = object.id       || uuid();
    this.name = object.name   || '';
    this.auth = object.auth   || [];
  }
  clone(): Role {
    return new Role(this);
  }
  reverse(object: any): void {
    this.id = object.id       || uuid();
    this.name = object.name   || '';
    this.auth = object.auth   || [];
  }
}

export class Auth implements Cloneable, Reversible {
  id: string;
  name: string;
  type: string;
  constructor(object: any) {
    this.id = object.id       || uuid();
    this.name = object.name   || '';
    this.type = object.type   || '';
  }
  clone(): Auth {
    return new Auth(this);
  }
  reverse(object: any): void {
    this.id = object.id       || uuid();
    this.name = object.name   || '';
    this.type = object.type   || '';
  }
}

export class Session implements Cloneable, Reversible {
  id: string;
  sessionKey: string;
  user: User;
  time: number;

  constructor(object: any) {
    this.id = object.id                 || object.sessionKey;
    this.sessionKey = object.sessionKey || '';
    this.user = object.user ? new User(object.user) : null;
    this.time = object.time             || new Date().getTime();
  }
  clone(): Session {
    return new Session(this);
  }
  reverse(object: any): void {
    this.id = object.id                 || object.sessionKey;
    this.sessionKey = object.sessionKey || '';
    this.user = object.user ? new User(object.user) : null;
    this.time = object.time             || new Date().getTime();
  }
}
