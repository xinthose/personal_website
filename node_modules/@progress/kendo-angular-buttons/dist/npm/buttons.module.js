"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var button_module_1 = require("./button/button.module");
var buttongroup_module_1 = require("./buttongroup/buttongroup.module");
var splitbutton_module_1 = require("./splitbutton/splitbutton.module");
var dropdownbutton_module_1 = require("./dropdownbutton/dropdownbutton.module");
/**
 * Represents the [NgModule]({{ site.data.urls.angular['ngmodules'] }})
 * definition for the Buttons components.
 *
 * @example
 *
 * ```ts-no-run
 * // Import the Buttons module
 * import { ButtonsModule } from '@progress/kendo-angular-buttons';
 *
 * // The browser platform with a compiler
 * import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 *
 * import { NgModule } from '@angular/core';
 *
 * // Import the app component
 * import { AppComponent } from './app.component';
 *
 * // Define the app module
 * _@NgModule({
 *     declarations: [AppComponent], // declare app component
 *     imports:      [BrowserModule, ButtonsModule], // import Buttons module
 *     bootstrap:    [AppComponent]
 * })
 * export class AppModule {}
 *
 * // Compile and launch the module
 * platformBrowserDynamic().bootstrapModule(AppModule);
 *
 * ```
 */
var ButtonsModule = /** @class */ (function () {
    function ButtonsModule() {
    }
    ButtonsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    exports: [buttongroup_module_1.ButtonGroupModule, button_module_1.ButtonModule, splitbutton_module_1.SplitButtonModule, dropdownbutton_module_1.DropDownButtonModule]
                },] },
    ];
    return ButtonsModule;
}());
exports.ButtonsModule = ButtonsModule;
