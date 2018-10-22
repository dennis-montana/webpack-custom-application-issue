import { InjectionToken } from '@angular/core';

export const myToken: InjectionToken<any> = new InjectionToken('App configuration');

export const mySettings = {
    envKey: 'Abcd-bcdA',
};
