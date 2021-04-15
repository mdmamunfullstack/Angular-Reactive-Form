# Demo-Start: These are the starter files for the Angular Reactive Forms demo form.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Advantage of Template-driven Form
* Easy to use
* Similar to AngularJS
* Two-way data binding -> Minimal component code
* Automatically tracks form and input element state

## Advantage of Reactive Form
* More flexible ->more complex scenarios
* Immutable data model
* Easier to perform an action on a value change
* Reactive transformations ->DebounceTimeor DistinctUntilChanged
* Easily add input elements dynamically
* Easier unit testing

## Common form foundation classes
 Both reactive and template-driven forms are built on the following base classes.
* **FormControl** tracks the value and validation status of an individual form control.
* **FormGroup** tracks the same values and status for a collection of form controls.
* **FormArray** tracks the same values and status for an array of form controls.
* **ControlValueAccessor** creates a bridge between Angular FormControl instances and native DOM elements.