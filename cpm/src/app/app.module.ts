import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SharedModule } from './shared/shared.module'
import { HomeComponent } from './pages/home/home.component'
import { EventsComponent } from './pages/events/events.component'
import { SchoolsComponent } from './pages/schools/schools.component'
import { SdaComponent } from './pages/sda/sda.component'
import { EventItemComponent } from './pages/events/event-item/event-item.component'
import { EventDetailComponent } from './pages/events/event-detail/event-detail.component'
import { ContactsComponent } from './pages/contacts/contacts.component'
import { PlanetariumComponent } from './pages/planetarium/planetarium.component'
import { TasteComponent } from './pages/taste/taste.component'
import { SundialsComponent } from './pages/sundials/sundials.component'
import { ModalModule } from 'ngx-bootstrap/modal'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventsComponent,
    SchoolsComponent,
    SdaComponent,
    EventItemComponent,
    EventDetailComponent,
    ContactsComponent,
    PlanetariumComponent,
    TasteComponent,
    SundialsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
