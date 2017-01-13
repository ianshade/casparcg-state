import { StateObject as StateNS } from "./lib/StateObject";
import CasparCG = StateNS.CasparCG;
import { Command as CommandNS } from "casparcg-connection";
import IAMCPCommandVO = CommandNS.IAMCPCommandVO;
import { Config as ConfigNS } from "casparcg-connection";
import CasparCGConfig207 = ConfigNS.v207.CasparCGConfigVO;
import CasparCGConfig210 = ConfigNS.v21x.CasparCGConfigVO;
/** */
export declare class CasparCGState {
    private minTimeSincePlay;
    private _currentStateStorage;
    private _getCurrentTimeFunction;
    private _getMediaDuration;
    /** */
    constructor(config?: {
        currentTime?: () => number;
        getMediaDurationCallback?: (clip: string, callback: (duration: number) => void) => void;
        externalStorage?: (action: string, data: Object | null) => CasparCG;
    });
    /** */
    initStateFromConfig(config: CasparCGConfig207 | CasparCGConfig210): void;
    /** */
    setState(state: CasparCG): void;
    /** */
    getState(options?: {
        full: boolean;
    }): CasparCG;
    /** */
    applyCommands(commands: Array<IAMCPCommandVO>): void;
    /** */
    applyState(channelNo: number, layerNo: number, stateData: {
        [key: string]: any;
    }): void;
    /** */
    private ensureLayer(channel, layerNo);
    /** */
    getDiff(newState: CasparCG): Array<IAMCPCommandVO>;
    private compareAttrs(obj0, obj1, attrs, strict?);
    /** */
    diffStates(oldState: CasparCG, newState: CasparCG): Array<IAMCPCommandVO>;
    /** */
    valueOf(): CasparCG;
    /** */
    toString(): string;
}
