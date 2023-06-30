import {CharacterModel} from './character';

describe('Character', () => {
    it('should create an instance', () => {
        expect(new CharacterModel(1, 'name', 'description', null)).toBeTruthy();
    });
});
