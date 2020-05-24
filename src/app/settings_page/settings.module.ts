import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { SettingsRoutingModule } from "./settings.routing.module";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { SettingsComponent } from "./settings.component";

@NgModule({
    imports: [
        NativeScriptFormsModule,
        NativeScriptCommonModule,
        SettingsRoutingModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        SettingsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SettingsModule { }
