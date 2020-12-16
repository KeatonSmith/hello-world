import { Routes } from "@angular/router";

import { HomeComponent } from "@src/app/features/home/home.component";
import { AboutMeComponent } from "./features/about-me/about-me.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "about",
    component: AboutMeComponent,
  },
];
