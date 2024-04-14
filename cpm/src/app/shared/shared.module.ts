import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MenuComponent } from './components/menu/menu.component'
import { FooterComponent } from './components/footer/footer.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [MenuComponent, FooterComponent],
  imports: [CommonModule, HttpClientModule, BrowserAnimationsModule],
  exports: [MenuComponent, FooterComponent]
})
export class SharedModule {}
