import { Settings } from '../settings';

describe('Settings class', () => {
    let settings;

    beforeEach(() => {
        settings = new Settings();
    });

    it('should initialize with default settings', () => {
        const defaultSettings = settings.settings;
        expect(defaultSettings.size).toBe(3);
        expect(defaultSettings.get('theme')).toBe('dark');
        expect(defaultSettings.get('music')).toBe('trance');
        expect(defaultSettings.get('difficulty')).toBe('easy');
    });

    it('should set and get user settings', () => {
        settings.setUserSetting('music', 'rock');
        settings.setUserSetting('difficulty', 'hard');

        const userSettings = settings.settings;
        expect(userSettings.size).toBe(3); 
        expect(userSettings.get('music')).toBe('rock'); 
        expect(userSettings.get('difficulty')).toBe('hard'); 
    });

    it('should merge user settings with default settings', () => {
        settings.setUserSetting('music', 'pop');
        settings.setUserSetting('difficulty', 'nightmare');

        const mergedSettings = settings.settings;
        expect(mergedSettings.size).toBe(3); 
        expect(mergedSettings.get('theme')).toBe('dark'); 
        expect(mergedSettings.get('music')).toBe('pop'); 
        expect(mergedSettings.get('difficulty')).toBe('nightmare'); 
    });
});