import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import the Clarity Core ClarityIcons service. you will use this to add icon shapes to the library as you need them.
// import icon shapes from the library
import {
  ClarityIcons,
  homeIcon,
  successStandardIcon,
  infoStandardIcon,
  imageIcon,
} from '@clr/core/icon';

const [, imageIconShape] = imageIcon;

// use the addIcons() method to add the shapes
// alternately, you can destructure an icon shape and assign any name you want to it (as demonstrated with the image icon)
// This gives teams a great deal of freedom in storing and retrieving icons in their application.
ClarityIcons.addIcons(homeIcon, successStandardIcon, infoStandardIcon, [
  'image',
  imageIconShape,
]);

// Import the register file for the icon web component. This file adds the cds-icon component to the browser.
import '@clr/core/icon/register';

// The Angular application needs the CUSTOM_ELEMENTS_SCHEMA defined on the application module.
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ClarityModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
