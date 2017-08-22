import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
 
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
 
// Observable class extensions
import 'rxjs/add/observable/of';
 
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
 
import { WizardSearchService } from './wizard.search.service.component';
import { Wizard } from '../wizard.component/wizard';

@Component({
    selector: 'wizard-search',
    templateUrl: './wizard.search.component.html',
    styleUrls: ['./wizard.search.component.css', '../wizard.component/wizard.component.css'],
    providers: [WizardSearchService]
})

export class WizardSearchComponent implements OnInit {
    wizards: Observable<Wizard[]>;
    private searchTerms = new Subject<string>(); //Subject is the producer of an observable event stream.

    constructor(private wizSearchService: WizardSearchService, private router: Router){}

    // Push a search term into the observable stream.
    // Each search() call would search for the term from searchTerms, by calling searchTerms.next()
    search(term: string): void{
        this.searchTerms.next(term); //searchTerms produces an Observable of strings
    }

    ngOnInit(): void{
        this.wizards = this.searchTerms
                        .debounceTime(300)  // wait 300ms after each keystroke before considering the term
                        .distinctUntilChanged() // ignore if next search term is same as previous
                        .switchMap(term=> term  // switch to new observable each time the term changes
                            ?this.wizSearchService.search(term) // return the http search observable
                            :Observable.of<Wizard[]>([])) // or the observable of empty heroes if there was no search term
                        .catch(error => {console.log(error);
                        return Observable.of<Wizard[]>([])});
    }

    gotoDetail(wizard: Wizard): void {
        let link = ['/wizard', wizard.id];
        this.router.navigate(link);
      }
}