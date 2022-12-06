
import { useGlobalConfig } from './use-global-config'
const _bem = (namespace: string, block: string, blockSuffix: string, element: string, modifier: string) => {
    let cls = `${namespace}-${block}`
    if (blockSuffix) cls += `-${blockSuffix}`
    if (element) cls += `__${element}`
    if (modifier) cls += `--${modifier}`
    return cls
}

export class UseNamespace {
    private defaultNamespace = 'r'
    private statePrefix = 'is-'
    public block: string
    constructor(block: string) {
        this.block = block
    }
    ns() {
        return _bem(this.defaultNamespace, this.block, '', '', '')
    }

    b(blockSuffix = '') {
        return _bem(this.defaultNamespace, this.block, blockSuffix, '', '')
    }

    m(modifier = '') {
        return _bem(this.defaultNamespace, this.block, '', '', modifier)
    }

    is(name: string, ...args: [boolean | undefined] | []) {
        const state = args.length >= 1 ? args[0]! : true
        return name && state ? `${this.statePrefix}${name}` : ''
    }
}