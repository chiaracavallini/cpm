import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {EventsComponent} from "./pages/events/events.component";
import {SchoolsComponent} from "./pages/schools/schools.component";
import {SdaComponent} from "./pages/sda/sda.component";
import {ContactsComponent} from "./pages/contacts/contacts.component";
import {TasteComponent} from "./pages/taste/taste.component";
import {PlanetariumComponent} from "./pages/planetarium/planetarium.component";
import {SundialsComponent} from "./pages/sundials/sundials.component";

const routes: Routes = [
  {
    path: 'home',
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  },
  {
    path: 'events',
    children: [
      {
        path: '',
        component: EventsComponent
      }
    ]
  },
  {
    path: 'schools',
    children: [
      {
        path: '',
        component: SchoolsComponent
      }
    ]
  },
  {
    path: 'sda',
    children: [
      {
        path: '',
        component: SdaComponent
      }
    ]
  },
  {
    path: 'contacts',
    children: [
      {
        path: '',
        component: ContactsComponent
      }
    ]
  },
  {
    path: 'taste',
    children: [
      {
        path: '',
        component: TasteComponent
      }
    ]
  },
  {
    path: 'planetarium',
    children: [
      {
        path: '',
        component: PlanetariumComponent
      }
    ]
  },
  {
    path: 'sundials',
    children: [
      {
        path: '',
        component: SundialsComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
