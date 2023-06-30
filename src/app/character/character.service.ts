import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CharacterModel} from './character';

@Injectable({
    providedIn: 'root'
})
export class CharacterService {

    constructor(private http: HttpClient) {
    }

    getCharacters() {
        return this.http.get<CharacterModel[]>('http://localhost:8080/api/v1/marvel/characters');
    }

    getCharacterById(id: number) {
        return this.http.get<CharacterModel>(   `http://localhost:8080/api/v1/marvel/characters/${id}`);
    }
}
