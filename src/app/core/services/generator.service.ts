import { Injectable } from '@angular/core';
import { genId } from './gen-id.generator';

const symbols = 'abcdefghigklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService { 
  
  private _iterator = genId(); 

  generate(n: number): string {   
    let generatedString = "";
    for (let i = 0; i < n; i++) {
        generatedString += symbols[Math.round(Math.random() * n)];
    }
    return generatedString;
  }

  getNewID(): number {
    return this._iterator.next().value ?? 0;
  }
}
