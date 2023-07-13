
export enum LOADINGACTIONS {
    ALL,
    CREATE,
    UPDATE,
    READ,
    DELETE
}

export enum LOADINGSTATE {
    NONE,
    LOADING
}

export interface ILoading {
    state: LOADINGSTATE
    action: LOADINGACTIONS
}