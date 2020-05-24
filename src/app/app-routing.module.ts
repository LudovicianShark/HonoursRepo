import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";


const routes: Routes = [
    { path: "", redirectTo: "/sign_in", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomeModule"},
    { path: "add_mood", loadChildren: "./add_mood/add_mood.module#Add_MoodModule"},
    { path: "mood_list", loadChildren: "./mood_list/mood_list.module#Mood_ListModule"},
    { path: "sign_in", loadChildren: "./sign_in/sign_in.module#Sign_InModule"},
    { path: "statistics", loadChildren: "./statistics/statistics.module#StatisticsModule"},
    { path: "settings", loadChildren: "./settings_page/settings.module#SettingsModule"},
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
