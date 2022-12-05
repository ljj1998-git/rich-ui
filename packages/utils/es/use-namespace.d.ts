export declare class UseNamespace {
    private defaultNamespace;
    block: string;
    constructor(block: string);
    ns(): string;
    b(blockSuffix?: string): string;
    m(modifier?: string): string;
}
