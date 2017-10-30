//What is Angular?
// Angular is a JavaScript Framework which allows you to create reactive 
// Single-Page-Applications (SPAs)
// Single-Page-Appliction - only 1 html file and a bunch of JavaScript code we get from 
// the server which is rendered in the browser
// Angular changes the DOM during runtime

//Angular 1 vs Angular 2 vs Angular 4
// Angular 1 = Angular JS: very popular JS framework, released a couple of years ago
// Angular 2 = Angular: A complete re-write dof Angular 1 and the future of Angular
// Angular 4 = simply an update to Angular 2, not a complete rewrite, like JS to 2.

//Linkage between HTML and component
// add a custom id property to html tag [()]=""
// insert that data by using double curlys {{}}
// in module file we unlock features we can use in other files

//Loading and Starting
// when the page loads, it looks immediately at "main.ts"
// this file provides a link to AppModule by adding that module link, from the import statement,
// as a parameter in the platformBrowserDynamic().bootstrapModule() function
// then, in App.Module, the App.Component is referenced in the "bootstrap:" property of the class
// in App.Component, the "app-root" tag is identified, which is the custom tag in the index.html page.

//Components
// App.component will be the master component which is where we will add other component references
// You can have multiple components on a sigle page, which makes it performent
// a component is simply a class which angular uses as a blueprint, in order to create an object.
// in order to tell angular that a particular class is a component, we use a decorator
// a decorator enhances elements in a code, @Component
// in order to tell JS what a decorator is/does, we have to import it from angular/core.
// then we add an object to the @Component decorator, in order to configure it.
// you need a selector, or the HTML element tag which allows you to use it in other components'
// HTML files
// Selector name: make sure it is unique, the convention is 'app-[component name]'
// Then it needs a template property, so you can add templateUrl and then the filename of the 
// template html file.

//Using Components
// the AppComponent is launched at document load, by the use of the bootstrap property, in AppModule
// it is a hub of all components in the app.
// the components that you want to use have to be registered in that app.module file
// this is done by adding references to them in the declarations: property.
// and by including an import statement to the component.ts file.
// webpack adds the file extensions automatically, so we don't have to add those here.

//Using CLI to generate components
// go to your root directory and type ng generate component [component name]
// the CLI will create a new subfolder in the app folder and it will put starter files in there
// then it'll even update your app.module with new declarations and import statement.

//Nesting components
// you can add tags to other components html and then put the selector tag of that other component
// within your app.component html file for rendering
// so using selectors in any other component template and then adding the selector of the component
// which contains those nested selector tags, into the master html file for rendering

//In-line templates
// define the HTML template within the class
// one or two lines can be placed in single-quotes, but more than three lines should be surrounded
// by backticks.

//Styling components
// you can add bootstrap classes within the component html file
// or you can add css to the component css file
// you can also add multiple stylesheet files in the component styleUrls property by adding them
// to the array separated by commas.
//Inline styles
// just like changeing templateurl to template and then adding the template tags to the
// component, you can add styles to the component class directly by changing stypeUrls to styles
// make sure it is still an array, and then you add css code surrounded by backticks
// this overwrites any style in bootstrap, just like in the separate css stylesheet

//Component Selector options
// you can select elements by enclosing the selector in square brackets
// or you can identify it as a class, just like in css, with a period prefix
// normally though, you should just use the regular selector for a custom tag

//Data Binding
// Databinding = Communication between TS code(business logic) and template(html)]
// We want to output data from the TS code to the template
// o String Interpolation({{ data }})
// o Property Binding ( [property]="data" )
// Or we want to React to (User) Events
// o Event Binding ( (event)="expression") - click event to execute code.
// Or we want to combine the two
// o Two-Way-Binding ( [(ngModel)]="data") - react to events and output something at the same time

//String Interpolation
// within the component class object, add property names or functions which return strings
// then in the component html, add a reference to that property between double curlys
// it can also be something which can be easily converted into a string (like a number)

//Property Binding
// Constructor is a method activated at the moment that the component is created by Angular
// Interact with any HTML element property by putting square brackets around it and then
// writing equals some function, in quotes.

//Don't mix String Interpolation and Property Binding
// the syntax of these DOM expressions is generated by Angular
// So, in the background, this stuff gets thrown into vanilla functions which break
// if you don't use the right syntax.

//Event Binding
// Parens symbolizes that we are using eventbinding
// surround action words without the 'on': so 'onclick' becomes 'click'
// then call a method there, with the donkeyballs at the end
// pass '$event' as an argument in the function call between quotes
// it's a reserved variable name which give you access to event data
// then, in the method argument parens, add "event: any"

//Two-way binding
// adding an element which has parens inside square brackets with ngModel
// allows the User to manipulate the value of some variable which is placed
// in the quotes
// Forms Module is required for two-way binding, it is imported in the app.module
// CLI puts that reference in there automatically

//Directives
// instructions in the DOM
// components are a kind of directives with a template
// there're also directives without templates
// place a selector to a method within the html tag
// typically uses the attribute style
<p appTurnGreen>Receives a green background!</p>

@Directive({
	selector: '[appTurnGreen]'
})
export class TurnGreenDirective {
	...
}
// we can create our own directives, but there're built-in ones

//Built-in Directives
//Structural Directive: prefixed with an asterisk (star), change the structure of the DOM around them
//***only 1 structural directive per html tag element***//
//*ngIf within the quotes, add anything which returns true or false (also works with undefined/value)
// then that element will either be displayed or not depending on the boolean
// also add a marker to an ng-template element with hashtag and then the name of the marker
// then between that element tag you can add other html elements
// next add a semicolon after the ngIf property then 'else' and the marker name
//Attribute Directive: only change the html element they were placed on
// ngStyle: change style of element
// enclose in square brackets to target a property of the directive
// accepts a JS object, just like CSS calls an element and then adds object
// ngClass: dynamically adds or removes CSS classes
[ngStyle]="{backgroundColor: getColor()}"
	[ngClass]="{online: serverStatus === 'online'}"

//Error Messages
// Click on Sources in the browser and then find the approx place in the code
// which is causing problems
// then set a break-point and then the browser will transpile to TS and set the 
// breakpoint at that spot, in the TS, instead.
// or go to webpack, '.' folder, and then find the TS files, in there

//Element Binding
// if you want an element to be accessible outside of a component
// then you have to add the "@Input()" decorator as a prefix
// and then import it from angular core

//Element Output binding
// if you want to output data from a method, then prefix it with the @Output() decorator
// this will allow the output of a method to be accessible in other components, the app-root, for instance
// make sure you import it from angular/core, too.

//EventEmitter
// if you want to control some behavior based on events, then add (click)="onSelect('descriptiveVariable')"
// as an example, in the tag of the element in which you want the listener
// then in the TS, in the class, type 
export class YourClass {
descriptiveVariable = new EventEmitter<string>()

	onSelect(parameter: string) {
		this.descriptiveVariable.emit(parameter);
	}
}
// don't forget to import EventEmitter, from angular/core.
// then in the html of the component which contains the custom selector tag of that child component
// (where @Output() is located), within the tag add
(descriptiveVariable)="onNavigate($event)"
// you can also add a string in single quotes in there to select specific data
// $event gives us access to data produced in the child element

//View encapsulation
// angular adds a unique property to each element based on the component in which it is located
// this ensures that only the elements in that component recieves the styles in the component Css
// you can change the encapsulation behavior by adding an element to the component
// encapsulation: ViewEncapsulation.None, which will export your Css data globally

//Local References
// add a reference to any HTML element tag using the '#' as a prefix
// then you can pass that reference as an argument within a function call, but only
// within that same html file template
// however, the local reference, as an argument, only passes the entire element tag, not
// any data that you entered into it, in the case of an input element, for instance
// if the element has a 'value' property, however, like in the case of an input element
// then you can instead pass #referencename.value, to get that data

//Accessing Template with @ViewChild()
// add the local reference of a template element, with value attribute, as an argument (in single-quotes)
// to @ViewChild and then import that function from angular core
// then add a value after the parens to pass that element into with a type: ElementRef
// then add ElementRef to the import statement, as well, from Angular core
// then you can gain access to the value by pointing to this.variablename.nativeElement.value

//Projecting content into components with <ng-content></ng-content>
// adding the ng-content opening an closing tags within the component template
// allows you to create a portal to another component, which contains the custom selector tag
// of that component in which you added the ng-content tag, and it'll cut/paste whatever code
// is inbetween the custom selector tag, and into the ng-content tag.

//Component Lifecycle (see ngOnInit() created automatically by CLI)
// if a new component is created in angular, i.e. finding a selector and then instatiating, 
// the component based on the component template, within the DOM
// Angular goes through phases in this process
// and we can hook into these phases and execute some code by implementing some methods
// that Angular will call, if they're present
//First phase
// ngOnChanges - Called after a bound input property changes
// o can be executed multiple times
// o executed right at the start when a new component is created
// o or it is always called after that, whenever one of the bound input properties changes
//   bound input properties = properties decorated with @Input()
// ngOnInit - Called once the component is initialized
// o nothing happens on the DOM, but the object for it was created in the background
// o runs after the constructor
//Second phase
// ngDoCheck - Called during every change detection run
// o runs a lot, multiple times because it is executed whenever change detection runs
//   change detection = the system which Angular uses to determine whether something changed
//                      on the template of a component, so it runs even if you do something that
//                      doesn't ACTUALLY change the template in any discernable way, it's just a check
//                      to see if whatever you did or whatever happened did or did not change stuff
// ngAfterContentInit - Called after content (ng-content) has been projected into view
// o so not the view of the component itself, but the view of the parent component which will get added
//   into the ng-content tag.
// ngAfterContentChecked - Called every time the projected content has been checked
// o so whenever change detection checks the content which is being projected into ng-content tags
// ngAfterViewInit - Called after the component's view (and child views) has been initialized
// o so after our view has been rendered
// ngAfterViewChecked - Called every time the view (and child views) have been checked
// o a secondary check to make sure all changes which needed to be done were displayed or no changes were detected
// ngOnDestroy - Called once the component is about to be destroyed
// o so if you call ngif on some component and then set it to false, it will be removed (destroyed)
//*********Note! in development mode, Angular goes through one extra change detection cycle**********//
//Accessing DOM data timeline
// You can only access DOM data after ngAfterViewInit, so if you're getting data from an input
// field, then it won't be saved to the nativeElement.textContent property until after that hook

//Accessing DOM elements from ng-content portals
// if you're importing HTML elements using ng-content, then you can't use the @ViewChild decorator
// instead you have to use @ContentChild; however, you can't access that data until after ngAfterContentInit()

//Navigation with Event Binding and ngIf
// first add a (click) event to the child html button element which will control the navigation 
// (click)="onSelect('child')"
// then, in the TS of the child component, add an output decorated function with EventEmitter
// @Output() featureSelected = new EventEmitter<string>()
	// onSelect(feature: string) {
	// 	this.featureSelected.emit(feature);
	// }
// make sure Output and EventEmitter is imported from angular/core
// then in the custom, html selector tag of the child component, within the parent component template,
// add a function call (featureSelected)="onNavigate($event)
// next, in the TS of the parent component, add a method in the class
// loadedFeature = 'child';
	// onNavigate(feature: string) {
	// 	this.loadedFeature = feature;
// next, in the custom, html selector tag of a different child component, within the parent component,
// add an ngIf statement which will tell Angular to display the child component or not based on the boolean
// value of that built-in variable.
// *ngIf="loadedFeature === 'child'

//Passing Data with Property Binding
// say you have an array of data on the parent component TS class and that array is modeled in a 
// component.model file along with the the html which displays the data is in a child component
// so first add an ngFor loop in the custom selector tag of the child component,
// along with a bound property, in the parent component template:
// *ngFor="let recipeEl of recipes"
// 		[recipe]="recipeEl"
// which replicates the child component within the parent component, for each item in the array
// the array is called 'recipes', in this example:
// recipes: Recipe[] = [
// 	...,
// 	...
// ];
// next, in the child component TS class, add an @Input decorated reference to the ngFor loop function
// and to the keyword in square brackets:
// @Input() recipe: Recipe;
// (Recipe is the type we modeled in the parent component.model)

//Passing Data with Event and Property Binding
// first add a listener in a clickable tag element, in the child component template html:
// (click)="onSelected($event)"
// then, in the child TS class, add the event emitter logic
// @Output variable = new EventEmitter<void>();
// onSelected(parameter: string) {
// 	this.variable.emit(parameter);
// }
// next, to pass it again, in the parent component html template,
// in the custom selector tag for the child component
// target the method in parens and then call another function
// (variable)="anotherFunction(data)
// then in the parent TS class, add that new function and another output emitter
// @Output() anotherUniqueVariable = new EventEmitter<type>();
// anotherFunction(type: type) {
// 	this.anotherUniqueVariable.emit(recipe);
// }

//Using boolean or undefine/value variable to display html or not
// add *ngIf="someVariable"; else dummyText to the tag of some html element
// then add ng-template tags with whatever other text inbetween them (even empty <p> tags)
// then if the value of someVariable is either true or some other value (other than undefined)
// the tag which contains the ngIf argument will be displayed, if not, then the elements in between
// the <ng-template> open/close tags will be displayed.

//Passing Data with Local references
// first, in the input field of the html template, add a local reference
// #localReference
// then on the button which controls the action, in the same template, add a click event function call
// (click) = "someFunction()"
// next, in the TS class, add @ViewChild decorator, pass the local reference as an argument, in singlequotes
// @ViewChild('localReference')dataInputRef: ElementRef;
// using the type: ElementRef, which, along with ViewChild, must be imported from angular/core
// and add the event emitter
// dataAdded = new EventEmitter<objectModel>() (objectModel can be the object template from a component.model)
// and also add the function call 
// onAddItem() {
// const dataName = this.dataInputRef.nativeElement.value;
// const newData = new Data(object data);
// finally add the emit method call
// this.dataAdded.emit(newData);}
// add the @Output() decorator in front of the EventEmitter, in order to use the data in other components

//Creating custom directives
// add a new file called file.directive.ts
// add an export class
// add @Directive and import that from angular/core
// then add a selector attribute
// selector: '[selectorText]'
// next in order to provide some visual clue that the directive is working, we need to gain access
// to the element in which the directive sits
// we can inject the element that the directive sits on, into the directive class
// inject by adding the constructor and add to the arguments a list of arguments we want to get whenever
// an instance of the class is created
// constructor(private elementRef: ElementRef)
// adding 'private' automatically makes the variable a property of the class and assigns the value to it
// make sure you add it as a dependancy in app.module and import it there, too
//
//Using the renderer
// create a custom directive and in the constructor arguments like so
// constructor(private elRef: ElementRef, private renderer: Renderer2) { }
// then, after implementing OnInit, add the following to that function
// ngOnInit() {
// this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')}
// don't forget stuff to import stuff from angular/core
// setStyle - first argument gain access to underlying element, second is which style to set, third is the
// value of the style property, fourth is a flag (important, !important: to overwrite styles)

//Renderer info
// better approach to accessing the DOM because Angular is not limited to running in the browser
// it also works with service workers, and these are environments where you may not have access to the DOM
// so it's best practice to use the renderer and get in the habit of doing so.

//Hostlistener
// used to trigger an event, if a certain condition is met
// the triggering event is specified as an argument in the donkeyballs, in single quotes
// you can only add events that the host DOM element supports
// in the second argument, you can also add a custom method, in which you pass some data to be processed
// @HostListener('mouseenter') mouseover(eventData: Event) {
// 	this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
// }

//Host Binding
// a decorator used to bind to a certain property, without using the renderer
// after donkeyballs, you have to add the property, in Camelcase which you want to bind to,
// whose value will be important
// in the donkeyballs argument, you specify the hosting element property (e.g. style)
// then, in the HostListener, you can simply set the style with this.style = 'style property'
// @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
// @HostListener('mouseenter') mouseover(eventData: Event) {
//   		// this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
//       this.backgroundColor = 'blue';







