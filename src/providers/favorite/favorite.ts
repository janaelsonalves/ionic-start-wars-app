import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '../../../node_modules/@ionic/storage';

/*
  Generated class for the FavoriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoriteProvider {

  STORAGE_KEY = 'favoriteFilms';

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello FavoriteProvider Provider');
  }

  getAllFavoriteFilms() {
    return this.storage.get(this.STORAGE_KEY);
  }

  isFavorite(filmId: any) {
    return this.getAllFavoriteFilms().then(result => {
      return result && result.indexOf(filmId) !== -1;
    })
  }

  doFavoriteFilm(filmId: any) {
    return this.getAllFavoriteFilms().then(result => {
      if (result) {
        result.push(filmId);
        return this.storage.set(this.STORAGE_KEY, result);
      } else {
        return this.storage.set(this.STORAGE_KEY, [filmId])
      }
    })
  }

  doUnfavoriteFilm(filmId: any) {
    return this.getAllFavoriteFilms().then(result => {
      if (result) {
        var index = result.indexOf(filmId);
        result.splice(index, 1);
        return this.storage.set(this.STORAGE_KEY, result);
      }
    })
  }
}
