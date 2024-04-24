import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  logMessage(name: string, status: string) {
    //console.log('A new user with name ' + name + ' with status ' + status + ' is added to users list');
    console.log(`A new user with name ${name} with status ${status} is added to users list`);
  }
}
