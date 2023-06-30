import {RegisterModel} from './register';

describe('Register', () => {
    it('should create an instance', () => {
        expect(new RegisterModel(1, '/api')).toBeTruthy();
    });
});
