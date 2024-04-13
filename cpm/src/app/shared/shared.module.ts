import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component'

@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent
  ],
  imports: [CommonModule],
  exports: [MenuComponent, FooterComponent]
})
export class SharedModule {}
