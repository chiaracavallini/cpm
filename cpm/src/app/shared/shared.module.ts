import { CommonModule } from '@angular/common'
import { ModuleWithProviders, NgModule } from '@angular/core'
import { MenuComponent } from './components/menu/menu.component'
import { FooterComponent } from './components/footer/footer.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { ModalModule } from 'ngx-bootstrap/modal'
import { ModalService } from './services/modal.service'
import { SdaService } from './services/sda.service'
import { EventsService } from './services/events.service'
import { ModalConfig } from './models/modal.config'

@NgModule({
  declarations: [MenuComponent, FooterComponent],
  imports: [CommonModule, HttpClientModule, BrowserAnimationsModule, ModalModule.forRoot()],
  providers: [ModalService, SdaService, EventsService],
  exports: [MenuComponent, FooterComponent]
})
export class SharedModule {
  static forRoot(config?: ModalConfig): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [{ provide: ModalConfig, useValue: config }]
    }
  }
}
