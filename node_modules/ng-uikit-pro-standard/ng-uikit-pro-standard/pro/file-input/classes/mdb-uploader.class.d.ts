import { EventEmitter } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
export interface UploaderOptions {
    concurrency: number;
    allowedContentTypes?: string[];
    maxUploads?: number;
}
export interface BlobFile extends Blob {
    name: string;
}
export declare enum UploadStatus {
    Queue = 0,
    Uploading = 1,
    Done = 2,
    Cancelled = 3
}
export interface UploadProgress {
    status: UploadStatus;
    data?: {
        percentage: number;
        speed: number;
        speedHuman: string;
        startTime: number | null;
        endTime: number | null;
        eta: number | null;
        etaHuman: string | null;
    };
}
export interface UploadFile {
    id: string;
    fileIndex: number;
    lastModifiedDate: number;
    name: string;
    size: number;
    type: string;
    form: FormData;
    progress: UploadProgress;
    response?: any;
    responseStatus?: number;
    sub?: Subscription | any;
    nativeFile?: File;
    responseHeaders?: {
        [key: string]: string;
    };
}
export interface UploadOutput {
    type: 'addedToQueue' | 'allAddedToQueue' | 'uploading' | 'done' | 'start' | 'cancelled' | 'dragOver' | 'dragOut' | 'drop' | 'removed' | 'removedAll' | 'rejected';
    file?: UploadFile;
    nativeFile?: File;
}
export interface UploadInput {
    type: 'uploadAll' | 'uploadFile' | 'cancel' | 'cancelAll' | 'remove' | 'removeAll';
    url?: string;
    method?: string;
    id?: string;
    fieldName?: string;
    fileIndex?: number;
    file?: UploadFile;
    data?: {
        [key: string]: string | Blob;
    };
    headers?: {
        [key: string]: string;
    };
    withCredentials?: boolean;
}
export declare function humanizeBytes(bytes: number): string;
export declare class MDBUploaderService {
    queue: UploadFile[];
    serviceEvents: EventEmitter<UploadOutput>;
    uploadScheduler: Subject<{
        file: UploadFile;
        event: UploadInput;
    }>;
    subs: {
        id: string;
        sub: Subscription;
    }[];
    contentTypes: string[];
    maxUploads: number;
    constructor(concurrency?: number, contentTypes?: string[], maxUploads?: number);
    handleFiles(incomingFiles: FileList): void;
    initInputEvents(input: EventEmitter<UploadInput>): Subscription;
    startUpload(upload: {
        file: UploadFile;
        event: UploadInput;
    }): Observable<UploadOutput>;
    uploadFile(file: UploadFile, event: UploadInput): Observable<UploadOutput>;
    secondsToHuman(sec: number): string;
    generateId(): string;
    setContentTypes(contentTypes: string[]): void;
    allContentTypesAllowed(): boolean;
    isContentTypeAllowed(mimetype: string): boolean;
    makeUploadFile(file: File, index: number): UploadFile;
    private parseResponseHeaders;
}
