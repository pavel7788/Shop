import { InjectionToken } from '@angular/core';

// переменные именуем с нижнего регистра
export const ConstantsServiceToken = new InjectionToken<string>('ConstantsService');
export const ConstantsServiceValue: Record<string, string> = {
    App: "Shop",
    Ver: "1.0",
    API_URL: "https://github.com/pavel7788/shop.git"
};

export const constantsProvider = { provide: ConstantsServiceToken, useValue: ConstantsServiceValue };
