const _bem = (namespace, block, blockSuffix, element, modifier) => {
    let cls = `${namespace}-${block}`;
    if (blockSuffix)
        cls += `-${blockSuffix}`;
    if (element)
        cls += `__${element}`;
    if (modifier)
        cls += `--${modifier}`;
    return cls;
};
export class UseNamespace {
    constructor(block) {
        this.defaultNamespace = 'r';
        this.block = block;
    }
    ns() {
        return _bem(this.defaultNamespace, this.block, '', '', '');
    }
    b(blockSuffix = '') {
        return _bem(this.defaultNamespace, this.block, blockSuffix, '', '');
    }
    m(modifier = '') {
        return _bem(this.defaultNamespace, this.block, '', '', modifier);
    }
}
