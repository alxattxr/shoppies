import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { SearchResults } from "../models/SearchResults.model";
import { MovieInformation } from "../models/MovieInformation.model";

@Injectable({
    providedIn: 'root'
})
export class SearchMovieStoreService {
    readonly _searchedString = new BehaviorSubject<string>('');
    readonly searchedString$ = this._searchedString.asObservable();
    readonly _isLoading = new BehaviorSubject<boolean>(false);
    readonly isLoading$ = this._isLoading.asObservable();
    readonly _results = new BehaviorSubject<SearchResults>({
        Response: false,
        Search: [],
        totalResults: "0"
    });
    readonly results$ = this._results.asObservable();

    get searchedString(): string {
        return this._searchedString.getValue();
    }

    set searchedString(str: string) {
        this._searchedString.next(str);
    }

    get results(): SearchResults {
        return this._results.getValue();
    }

    set results(results: SearchResults) {
        this._results.next(results);
    }

    getSearchResults(): MovieInformation[] {
        return this._results.getValue().Search;
    }

    getSearchResponse(): boolean {
        return this._results.getValue().Response;
    }

}