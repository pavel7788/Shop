import { Injectable } from '@angular/core';
import { ConfigModel } from '../models/config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  private _config: ConfigModel = {
    id: '',
    login: '',
    email: '',
    phone: ''
  };

  setConfig(_config: Partial<ConfigModel>): void {
    this._config = { ...this._config, ..._config };
  }

  getConfig(): ConfigModel {
    return this._config;
  }

  // setConfigProperty(key: keyof ..., value: any): void {

  // }
    
}
