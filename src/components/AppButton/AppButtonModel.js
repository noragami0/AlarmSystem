import {MockData} from '../../utils/mockData';

export const ButtonMode = {
    RAISED: 'RAISED',
    STROKED: 'STROKED',
};

export class AppButtonModel {
    mode;

    text;

    optional;

    constructor(mode, text, optional) {
        this.mode = mode;
        this.text = text;
        this.optional = {...optional};
    }

    static create(mode, text, optional) {
        return new AppButtonModel(mode, text, {
            onClick: optional?.onClick || undefined,
        });
    }

    static createRaised(text, optional) {
        return this.create(ButtonMode.RAISED, text, optional);
    }

    static createStroked(text, optional) {
        return this.create(ButtonMode.STROKED, text, optional);
    }

    static mock() {
        return this.createRaised(MockData.TITLE);
    }
}
