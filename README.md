# Online Food Court


## BOOTSTRAP

> Install bootstrap
```
npm i --save bootstrap
```

> To install bootstraps unofficial/beta version, use `npm i --save bootstrap@next`
> To install bootstraps specific version, use `npm i --save bootstrap@3.3.7`


> Goto getbootstrap.com => examples => Starter template => View Source and copy the body to app.component.html
Add padding to body if needed so that the body text appears properly


## COMPONENT

> We will now create a component for the navigation bar to navigate between pages
```
ng g c navbar
```
Render it as fc-navbar. fc indicates FoodCourt. This is a good practice to avoid any conflicts.


> Home Component for the home page
```
ng g c home
```
Render it as fc-home


> Create a component for login
```
ng g c login
```
Render it as fc-login

> Product Component to display list of all the Products
```
ng g c products
```
Render it as fc-products

> Shopping Cart Component to display list of items added in the shopping cart
```
ng g c shopping-cart
```
Render it as fc-shopping-cart

> Checkout component to navigate from Shopping cart and place the order
```
ng g c check-out
```
Render it as fc-check-out

> Order success component to navigate from checkout page display if the order is successful
```
ng g c order-success
```
Render it as fc-order-success

> My orders component to view all the orders placed
```
ng g c my-orders
```
Render it as fc-my-orders

> Now lets create component for the admin to manage in the "admin" directory. If the name is only products, it will create conflicts in the app module file
```
ng g c admin/admin-products
```
Render it as fc-admin-products

> Admin order component to manage the orders for all the users
```
ng g c admin/admin-orders
```
Render it as fc-admin-orders


## NG BOOTSTRAP

> In the bootstrap dropdown, we have a show class that pops up the dropdown options.
> Should I add bootstrap.js or bootstrap.min.js to my project?
No, the goal of ng-bootstrap is to completely replace JavaScript implementation for components. Nor should you include other dependencies like jQuery or popper.js. It is not necessary and might interfere with ng-bootstrap code.

Visit [ng-bootstrap](https://ng-bootstrap.github.io/#/getting-started)

> Can be used since we are trying to avoid Javascript for DOM modification and using angular as far as possible.
> With bootstrap comes bootstrap.js but we will avoid using it since it has dependent on jQuery.
> Install ng-bootstrap using npm as it says in the official documentation.
```
npm install --save @ng-bootstrap/ng-bootstrap
```
After executing thesecommands, you might want to check by running ng serve.
If ng serve does not work, you might want to execute `npm install` once again to make sure all the packages eg. devkit are installed

> Import NgbModule in the App module
```
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

> When using the ng-bootstrap, you might face some issues with the dropdown.
Select an option from the dropdown, it works fine. Try selecting the option again, the page reloads.
To avoid this, eliminate href="#" from the bootstrap code. Once this is solved, change the cursor to pointer.


## FIREBASE

> Goto your project directory and execute the below command. Create a boiler plate angular app :
```
ng init
```

> Goto [Firebase Console](https://github.com/angular/angular-cli)

> Create a new Firebase Project.
Copy the settings to the environment.ts and environment.prod.ts files.

> Install Firebase anf Firebase client for Angular using Npm
```
npm i --save firebase@4.2.0 angularfire2@4.0.0-rc.1
```

> Add Module dependencies in the App Module

```
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
```

> And also import in the Import the array in the App module as below

```
@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

> Install firebase tools using npm
```
npm install -g firebase-tools
```

> Check firebase version and login to deploy the app. When you enter the command in VS Code, it basically opens the browser for you and redirects you to the login screen. Once logged in, you can close the window and the terminal will show the message if the login was successful.
```
firebase --version
firebase login
```

> Initialize the Firebase app for Hosting. Will ask for what you need to initialize the firebase app.
You need to select the project with which you want to initialize the app.
```
firebase init
```

> NOTE : When you do an init, there will be a few prompts on your screen.
  > Select the app as SPA(Single Page Application)
  > When asked for public folder, mention "dist/OnlineFoodCourt" viz "dist/nameOfApp" where nameOfApp is the name of your application.
  > When asked to return all the urls to index.html, say yes

> Now build the app using the below command. It builds the directory by name of the app and saves the deployables to dist/nameofApp directory
```
ng build --prod
```

> Now you need to deploy the files in the dist/nameOfApp directory. Firebase looks in the firebase.json file and looks the location from which it has to deploy the files. In our case, it is "dist/OnlineFoodCourt" directory.
Once deployed, it will provide you with an URL that points to the firebase server.
```
firebase deploy
```