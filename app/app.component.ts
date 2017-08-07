// Import Component decorator from Angular
import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';

// Call the Component: function that takes an object and have 2 fields.
@Component({
    selector: 'my-app',
    template: '<h1>Hello Angular!</h1><courses></courses>',
    directives: [CoursesComponent]
})

// Export it
export class AppComponent { }