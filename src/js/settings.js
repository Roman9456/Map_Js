export class Settings {
    constructor() {
        this.defaultSettings = new Map([
            ['theme', 'dark'],
            ['music', 'trance'],
            ['difficulty', 'easy']
        ]);
        this.userSettings = new Map();
    }

    setUserSetting(name, value) {
        this.userSettings.set(name, value);
    }

    get settings() {
        const mergedSettings = new Map([...this.defaultSettings, ...this.userSettings]);
        return mergedSettings;
    }
}