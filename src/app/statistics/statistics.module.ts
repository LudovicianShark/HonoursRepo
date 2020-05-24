import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { StatisticsRoutingModule } from "./statistics.routing.module";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { StatisticsComponent } from "./statistics.component";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular";




@NgModule({
    imports: [
        NativeScriptFormsModule,
        NativeScriptCommonModule,
        StatisticsRoutingModule,
        NativeScriptUIListViewModule,
        NativeScriptUIListViewModule,
        NativeScriptUIChartModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptUIDataFormModule,
        NativeScriptUIGaugeModule

    ],
    declarations: [
        StatisticsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class StatisticsModule { }
