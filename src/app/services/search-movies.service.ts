import { Observable } from "rxjs";
import {HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class SearchService {

    constructor(private http: HttpClient){ }

    //TODO: Chnage type any for return model
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public getMoviesInformations(searchTerm: string): Observable<any> {
        const url: string = "";

        return this.http.post()
    }
}