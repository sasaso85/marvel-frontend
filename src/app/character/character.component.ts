import {Component, OnInit} from '@angular/core';
import {CharacterModel} from './character';
import {CharacterService} from './character.service';
import {ThumbnailModel} from './thumbnail';

@Component({
    selector: 'app-character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

    characters: CharacterModel[] = [];
    detail: CharacterModel;

    constructor(private characterService: CharacterService) {
    }

    ngOnInit(): void {
        this.characterService.getCharacters()
            .subscribe((res) => {
                this.characters = res;
            });
    }

    viewDetail(id: number) {
        this.characterService.getCharacterById(id)
            .subscribe((res) => {
                this.detail = res;
            });
    }

    getImagePath(thumbnail: ThumbnailModel) {
        return thumbnail ? `${thumbnail.path}.${thumbnail.extension}` : '';

    }

    cleanDetail() {
        this.detail = null;
    }
}
