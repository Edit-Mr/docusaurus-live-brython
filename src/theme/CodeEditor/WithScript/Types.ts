
export interface Version {
    code: string;
    createdAt: Date;
    version: number;
}

export interface StoredScript {
    code: string;
    createdAt: Date;
    updatedAt: Date;
    versions: Version[];
}

export interface Script extends StoredScript {
    /**
     * this is normally a uuid
     */
    id: string;
    /**
     * this is the codeId used to
     * - identify dom elements for this block
     * - setup the brython communicator with this id
     * - when using the default storage, this is the key used to 
     *   store the code to local storage
     */
    codeId: string;
    pristineCode: string;
    showRaw: boolean;
    isExecuting?: boolean;
    preCode: string;
    lang: 'py' | string;
    logs: LogMessage[];
    isGraphicsmodalOpen: boolean;
    hasGraphicsOutput: boolean;
    hasTurtleOutput: boolean;
    hasCanvasOutput: boolean;
    hasEdits: boolean;
    /**
     * Storage props
    */
   isLoaded: boolean;
   status: Status;
   versionsLoaded: boolean;
}

export interface LogMessage {
    type: 'done' | 'stdout' | 'stderr' | 'start';
    output: string;
    timeStamp: number;
}

export type StorageSlot = {
    get: () => string | null;
    set: (value: string) => void;
    del: () => void;
    listen: (onChange: (event: StorageEvent) => void) => () => void;
};

export enum Status {
    IDLE = 'IDLE',
    SYNCING = 'SYNCING',
    ERROR = 'ERROR',
    SUCCESS = 'SUCCESS'
}

export interface InitState {
    id: string | undefined;
    lang: 'py' | string;
    title: string;
    raw: string;
    readonly: boolean;
    versioned: boolean;
}

export interface Store<T = Script> {
    getState: () => T;
    setState: (fn: (state: Script) => Script) => void;
    subscribe: (listener: () => void) => () => void;
    saveNow: () => Promise<Status>;
    setCode: (code: string) => void;
    setExecuting: (executing: boolean) => void;
    execScript: () => void,
    stopScript: () => void;
    closeGraphicsModal: () => void;
    addLogMessage: (log: LogMessage) => void;
    clearLogMessages: () => void;
    load: () => Promise<Status>;
    loadVersions: () => Promise<void>;
}
