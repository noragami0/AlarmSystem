import {IconsR} from '../../utils/res/icons';

export class NavPanelButtonsModel {
    icons;

    optional;

    constructor(icons, optional) {
        this.icons = icons;
        this.optional = {...optional};
    }

    static create(icons, optional) {
        return new NavPanelButtonsModel(icons, {
            onClick: optional?.onClick || undefined,
            selectedIcon: optional?.selectedIcon || undefined,
        });
    }

    static mock() {
        return this.create([{icon: IconsR.PIN_ICON, tag: 'LOCATION'},
            {icon: IconsR.LIST_ICON, tag: 'LIST'},
            {icon: IconsR.HOME_ICON, tag: 'HOME'},
            {icon: IconsR.SETTING_ICON, tag: 'SETTING'},
            {icon: IconsR.INFO_ICON, tag: 'INFO'}], {selectedIcon: 'HOME'});
    }
}