import { InjectionToken } from '@angular/core';

export const localStorageToken = new InjectionToken<string>("localStorage");
export const localStorageProvider = { provide: localStorageToken, useValue: window.localStorage };
