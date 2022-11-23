declare class subclipper {
    constructor(config: subclipper.Config);
    public dispose(): void;
}

declare namespace subclipper {
    const version: string;

    export interface Config {
        selector: string;
        logLevel?: string;
        restVersion: string;
        minimumMarkerGap?: number;
        submitSubclipCallback: SubmitCallbackFunction,
        singleBitrateMp4Profile?: JSON,
        multiBitrateMp4Profile?: JSON,
        keymap?: JSON,
        assetsPanelLoaderCallback?: AssetsPanelLoaderCallbackFunction,
        height?: number;
        subclippingMode?: string;
        filterAssetsTypes?: boolean;
    }

    export interface Thenable<T> {
        then<R>(onfulfilled?: (value: T) => R | Thenable<R>, onrejected?: (reason: any) => R | Thenable<R>): Thenable<R>;
        then<R>(onfulfilled?: (value: T) => R | Thenable<R>, onrejected?: (reason: any) => void): Thenable<R | void>;
    }

    export interface SubmitCallbackFunction {
        (output: JSON): Thenable<any>;
    }

    export interface AssetsPanelLoaderCallbackFunction {
        (search: string, skip: number, take: number, type: string): Thenable<AssetsLoaderOutput>;
    }

    interface AssetsLoaderOutput {
        total?: number;
        assets: Array<Asset>;
    }

    interface Asset {
        id: string;
        name: string;
        type: string;
        source: VideoSource;
        thumbnails?: Array<string>;
    }

    interface VideoSource {
        src: string;
        type: string;
        protectionInfo?: Array<ProtectionInfo>;
    }

    interface ProtectionInfo {
        type: string;
        authenticationToken?: string;
    }

    interface OutputCallback {
        name: string;
        inputsIds: Array<OutputInput>;
        output: Output;
    }

    interface OutputInput {
        id: string;
        type: string; // Can be "asset" or "filter"
    }

    interface Output {
        type: string; // Can be "job" or "filter"
        job: JobOutput;
        filter: FilterOutput; 
    }

    interface JobOutput {
        Version: string;
        Codecs: Array<any>;
        Outputs: Array<any>;
        Sources: Array<JobOutputSource>;
    }

    interface JobOutputSource {
        AssetId: string;
        StartTime: string;
        Duration: string;
    }

    interface FilterOutput {
        PresentationTimeRange: PresentationTimeRange;
        Tracks: Array<FilterTrackSelect>;
    }

    interface PresentationTimeRange {
        StartTimestamp: string;
        EndTimestamp: string;
        Timescale: string;
    }

    interface FilterTrackSelect {
        PropertyConditions: Array<PropertyCondition>;
    }

    interface PropertyCondition {
        Property: string;
        Value: string;
        Operator: string;
    }

}

declare module "Subclipper/subclipper" {
    export = subclipper;
}
