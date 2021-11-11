export declare class GameController {
    constructor();
    gameScripts: {
        script: string;
    }[];
    root(): Promise<{
        gameScripts: {
            script: string;
        }[];
        titlePage: string;
    }>;
}
