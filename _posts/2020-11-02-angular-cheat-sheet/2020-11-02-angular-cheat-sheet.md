---
title: Angular Cheat Sheet
date: 2020-11-02 00:00:00 +05:30
# modified: 2020-10-05 00:00:00 +05:30
tags: [JavaScript]
description: A roadmap to the concepts of Angular.
image: "/assets/img/posts/2020-11-02-angular-cheat-sheet/banner.jpg"
---

![Angular Cheat Sheet](/assets/img/posts/2020-11-02-angular-cheat-sheet/banner.jpg)

### Contents
* [What is Angular?](#what-is-angular)
* [Architecture](#architecture)
  * [Modules](#modules)
  * [Components, Directives & Pipes](#components-directives--pipes)
  * [Services & Dependency Injection](#services--dependency-injection)
  * [Routing](#routing)

<!-- * [Tools](#tools)
  * [Forms](#forms)
  * [Http & Interceptor](#http--interceptor) -->

### What is Angular?
Angular *(commonly referred to as "Angular 2+" or "Angular v2 and above")* is a *TypeScript-based* *open-source* web application framework,
developed and maintained by *Google*.

Traditionally, *VanillaJS* and *jQuery* were used by developers to develop 
dynamic websites. As the websites became more complex with added features and 
functionality, it was hard for the developers to maintain the code.

Angular is designed to enable you to build and manage shared code, and to divide work among appropriate roles.

Angular is a complete rewrite from the same team that built [AngularJS](https://en.wikipedia.org/wiki/AngularJS).

| AngularJS   |   Angular  |
|:----------:|:-------------:|
| Doesn't Support DI | Supports DI |
| Doesn't Support Rest | Supports REST |
| Doesn't provide mobile support | Provides mobile support |
| Uses JavaScript | Uses TypeScript |

### Architecture
![Architecture](/assets/img/posts/2020-11-02-angular-cheat-sheet/architecture.png)

Angular [file system](https://angular.io/guide/file-structure) has a file called **angular.json**, which defines **main.ts** as the entry point of the application, which in turn defines **AppModule** as the *bootstrap module*.

### Modules
In Angular, a module is a mechanism to group components, directives, pipes and services that are related, in such a way that can be combined with other modules to create an application.

Modules are of two types:

* Root Module
* Feature Module

Every application can have only one root module whereas, it can have one or more feature modules.
A root module imports BrowserModule, whereas a feature module imports CommonModule.

Modules in Angular are decorated with **@NgModule** decorator.

### Components, Directives & Pipes

##### Components
Components are the most basic UI building block of an Angular app. An Angular app contains a tree of Angular components. Angular components are a subset of directives, always associated with a template. Unlike other directives, only one component can be instantiated for a given element in a template.

Components in Angular are decorated with **@Component** decorator.

```ts
@Component({
  selector: 'app-bank-account',
  inputs: ['bankName', 'id: account-id'],
  template: `
    Bank Name: {{ bankName }}
    Account Id: {{ id }}
  `
})
export class BankAccountComponent {

  //default method of the class
  constructor(){
  }

  //life cycle hooks
  ngOnChanges(){}
  ngOnInit(){}
  ngDoCheck(){}
  ngAfterContentInit(){} //hook for children
  ngAfterContentChecked(){} //hook for children
  ngViewContentInit(){} //hook for children
  ngViewContentChecked(){} //hook for children
  ngOnDestroy(){}

  /*
  ngDoCheck and ngOnChanges should not be implemented 
  together on the same component.
  */
}
```

##### Directives
There are three kinds of directives in Angular:
* **Components** — directives with a template.
* **Structural directives** — change the DOM layout by adding and removing DOM elements. These directives have a * sign before the directive. For example, *ngIf and *ngFor.
* **Attribute directives** — change the appearance or behavior of an element, component, or another directive. Attribute directives are used to change the look and behavior of the DOM element. It provides the facility to create our own directive. 

Directives in Angular are decorated with **@Directive** decorator.


##### Pipes
A pipe gets data as an input, transforms it and outputs this data in another way.
Pipes in Angular are decorated with **@Pipe** decorator.

### Services & Dependency Injection:
Dependencies in Angular are services which have a functionality. 
Various components and directives in an application can need these 
functionalities of the service. Angular provides a smooth mechanism by which 
these dependencies are injected into components and directives.

<!-- <div class="embed-responsive">
    <iframe src="http://www.youtube.com/embed/tA9tuKbg5Yk" height="315" width="560" allowfullscreen="" frameborder="0">
    </iframe>
</div> -->

There is a risk that a lazy loaded module will try to create a 2nd instance of a service what should be a [singleton](https://angular.io/guide/singleton-services), and the **forRoot()** method is a way to ensure that the app module, shared module and any lazy loaded module all use the same 1 instance (the root instance).

```ts
//old way
@NgModule({
  imports: [
    SharedModule.forRoot()
  ]
})
export class AppModule { }

//or the preferred way beginning with Angular 6.0
@Injectable({providedIn: 'root'})
export class SharedService {}
```

[Providers](https://angular.io/guide/providers) are classes that create and manage service objects 
the first time that Angular needs to resolve a dependency. Providers describe how the Injector should be configured.

Services in Angular are decorated with **@Injectable** decorator.

### Routing
In a single-page app, you change what the user sees by showing or hiding portions of the display that correspond to particular components, rather than going out to the server to get a new page. As users perform application tasks, they need to move between the different views that you have defined.

To handle the navigation from one view to the next, you use the *Angular Router*. The Router enables navigation by interpreting a browser URL as an instruction to change the view.

It is modeled on the familiar browser navigation conventions:
* Enter a URL in the address bar and the browser navigates to a corresponding page.
* Click links on the page and the browser navigates to a new page.
* Click the browser's back and forward buttons and the browser navigates backward and forward through the history of pages you've seen.

```ts
//app-routing.module.ts
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  //loading a normal component
  {
    path: 'home',
    component: HomeComponent,
  },
  //loading a lazy loaded module
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
      .then(m => m.NgxAuthModule),
  },
  //default component if url doesn't match any path.
  { path: '**', redirectTo: '404' },
  { path: '404', component: NotFoundComponent }
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

```








<!-- 




**Protecting Routes using *authguard***

```ts
import { CanActivateChild, Router } from '@angular/router';
@Injectable({providedIn: 'root'})
export class AuthGuardService implements CanActivateChild {
  constructor(private authService: AuthService) {}
  canActivateChild() {
    return this.authService.validateLogin().pipe(map(result => {
      return result ? true : false;
    }));
  }
}
//router module
export const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuardService],
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  }
];
```



### Tools

### data binding

**Data Binding**
* **interpolation**: that makes use of template expressions using double curly braces

```ts 
{% raw %}
<div innerHtml={{"hello world"}}>
{% endraw %}
```

* **Property Binding**: 

```ts
<my-child [myProp]="myProp" />
```

* **Event Binding**: 

```ts
<my-child (onPropChange)="onPropChange($event)" />
```

* **Two-way Binding**:

```ts
<input [(ngModel)]="name" #ctrl="ngModel" required>
<p>Value: {{ name }}</p>
<button (click)="setValue()">Set value</button>
name: string = '';
setValue() {
  this.name = 'Nancy';
}
```


@ViewChild decorator
use here: ngAfterViewInit

as a TemplateRef
```ts
@Component({
  selector: 'my-comp',
  template: `
    <ng-template></ng-template>
  `
})
export class MyCompComponent {
  @ViewChild(TemplateRef, { static: false }) someTemplate: TemplateRef;
}
```

as template reference variable as a string
```ts
@Component({
  selector: 'my-comp',
  template: `
    <div #someElement></div>
  `
})
export class MyCompComponent {
  @ViewChild('someElement', { static: false }) someElement: ElementRef;
}
```

any class with the @Component or @Directive decorator
```ts
@Component({
  selector: 'user-card'
})
export class UserCard {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() age: number;
}
@Component({
  selector: 'myComp',
  template: `
    <user-card [firstName]="'Roger'" [lastName]="'Dupont'" [age]="53">
    </user-card>
  `
})
export class MyCompComponent {
  @ViewChild(UserCard, { static: false }) userCard: UserCard;
}
```

static false means dynamic
see this example
```ts
@Component({
  template: `
    <div *ngIf="showMe" #viewMe>Am I here?</div>
    <button (click)="showMe = !showMe"></button>
  ` 
})
export class ExampleComponent {
  @ViewChild('viewMe', { static: false })
  viewMe?: ElementRef<HTMLElement>; 

  showMe = false;
}
```

Input decorator
parent.component.html
```html
<button (click)=”sendToChild()”>Send Chocolates to Child</button>
<app-child [chocolateCount]=”chocolate”></app-child>
```
parent.component.ts
```ts
export class ParentComponent { 
  chocolate = 0;  
  sendToChild() { 
    this.chocolate++; 
  }
}
```
child.component.html
```html
{% raw %}
<p>Chocolates received from Parent — {{chocolateCount}}</p>
{% endraw %}
```
child.component.ts
```ts
export class ChildComponent {
  @Input() chocolateCount;
}
```

Output decorator
child.component.html
```html
<button (click)=’sayThanks($event)’>Say ‘Thank you’ to Parent</button>
```
child.component.ts
```ts
export class ChildComponent {
@Output() thanks: EventEmitter<string> = new EventEmitter<string>();
sayThanks($event) { 
    this.thanks.emit('Thank you'); 
  }
}
```
parent.component.html
```html
<app-child (thanks)=”getThanks($event)”></app-child>
```
parent.component.ts
```ts
export class ParentComponent {
  thankYouText = '';
  getThanks(event) { 
    this.thankYouText = event; 
  }
}
```

behavior subject
```ts
import { BehaviorSubject } from 'rxjs';
private current_user: BehaviorSubject<any> = new BehaviorSubject(null);
set_current_user(data) {
    this.current_user.next(data);
}
get_current_user() {
    return this.current_user.asObservable();
}
```

### forms
* template driven forms:
* reactive forms:
```ts
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'ngx-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class AppComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      email: '',
      message: ''
    });
  }
  // ...
}
```

### http & interceptor


**The HttpClient Service**

This service is available as an injectable class, with methods to perform HTTP requests.

```ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
constructor(private http: HttpClient) {}
listUsers(query_params): Observable<any> {
  return this.http.get<any>(this.GATEWAY).pipe(map(result => result),catchError(this.handleError));
}
```

**interceptor**

```ts
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(modified);
    }
}
//in app.module
import { HTTP_INTERCEPTORS } from '@angular/common/http';
providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
]
```


### AOT & JIT
* **AOT**: the application compiles during the build time.
* **JIT**: the application compiles inside the browser during runtime

### Observables vs Promises
1. As soon as a promise is made, 
the execution takes place. However, this is not the case with observables 
because they are lazy. This means that nothing happens until a subscription is made. 
2. While promises handle a single event, observable is a stream that allows passing of 
more than one event. A callback is made for each event in an observable. -->
