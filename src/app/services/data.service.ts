import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/Observable/throw';
import { AppError } from './../common/app-error';
import { ServerNotFound } from './../common/server-not-found';
import { NotFoundError } from './../common/not-found-error';
import { BadInput } from './../common/bad-Input-error';

export class DataService {
  constructor(private url: string, private http: Http) {}

  getAll() {
    return this.http
      .get(this.url)
      .map((response) => response.json())
      .catch(this.handleError);
  }

  create(resource) {
    console.log(resource);
    return this.http
      .post(this.url, JSON.stringify(resource))
      .catch(this.handleError);
  }
  update(id) {
    return this.http
      .patch(
        this.url + '/' + id,
        JSON.stringify({
          isRead: true,
        })
      )
      .catch(this.handleError);
  }
  delete(id) {
    console.log(id);
    return this.http.delete(this.url + '/' + id).catch(this.handleError);
  }
  private handleError(error: Response) {
    console.log(error.status);
    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }
    if (error.status === 400) {
      return Observable.throw(new BadInput());
    }
    if (error.status === 0) {
      return Observable.throw(new ServerNotFound());
    }
    return Observable.throw(new AppError(error));
  }
}
