import {ThumbnailModel} from './thumbnail';

export class CharacterModel {
    id: number;
    name: string;
    description: string;
    thumbnail: ThumbnailModel;

    constructor(id: number, name: string, description: string, thumbnail: ThumbnailModel) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.thumbnail = thumbnail;
    }
}
