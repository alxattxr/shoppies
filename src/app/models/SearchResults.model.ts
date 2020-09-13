import { MovieInformation } from './MovieInformation.model';

export interface SearchResults {
  Response: boolean;
  Search: MovieInformation[];
  totalResults: string;
  Error?: Error;
}
