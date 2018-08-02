import { Action } from '@ngrx/store';

export enum SettingsActionTypes {
    CHANGE_THEME = '[Settings] Change Theme',
    CHANGE_AUTO_NIGHT_AUTO_MODE = '[Settings] Change Auto Night Mode',
    CHANGE_ANIMATIONS_PAGE = '[Settings] Change Animations Page',
    CHANGE_ANIMATIONS_PAGE_DISABLED = '[Settings] Change Animations Page Disabled',
    CHANGE_ANIMATIONS_ELEMENTS = '[Settings] Change Animations Elements'
}

export class ActionSettingsChangeTheme implements Action {
    readonly type = SettingsActionTypes.CHANGE_THEME;
  
    constructor(readonly payload: { theme: string }) {}
}

export class ActionSettingsChangeAutoNightMode implements Action {
    readonly type = SettingsActionTypes.CHANGE_AUTO_NIGHT_AUTO_MODE;
  
    constructor(readonly payload: { autoNightMode: boolean }) {}
}

export class ActionSettingsChangeAnimationsPage implements Action {
    readonly type = SettingsActionTypes.CHANGE_ANIMATIONS_PAGE;
  
    constructor(readonly payload: { pageAnimations: boolean }) {}
  }
  
  export class ActionSettingsChangeAnimationsPageDisabled implements Action {
    readonly type = SettingsActionTypes.CHANGE_ANIMATIONS_PAGE_DISABLED;
  
    constructor(readonly payload: { pageAnimationsDisabled: boolean }) {}
  }
  
  export class ActionSettingsChangeAnimationsElements implements Action {
    readonly type = SettingsActionTypes.CHANGE_ANIMATIONS_ELEMENTS;
  
    constructor(readonly payload: { elementsAnimations: boolean }) {}
  }

export type SettingsActions =
    | ActionSettingsChangeTheme
    | ActionSettingsChangeAnimationsPage
    | ActionSettingsChangeAnimationsPageDisabled
    | ActionSettingsChangeAnimationsElements
    | ActionSettingsChangeAutoNightMode;