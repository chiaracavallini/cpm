import { Component } from '@angular/core'
import { MenuConfig } from '../../models/menu-config'
import { Router } from '@angular/router'

@Component({
  selector: 'cpm-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuButtons: MenuConfig[] = [
    {
      path: 'home',
      label: 'Home'
    },
    {
      path: 'events',
      label: 'Eventi'
    },
    {
      path: 'schools',
      label: 'Scuole'
    },
    {
      path: 'sda',
      label: 'Scuola di Astronomia'
    },
    {
      path: 'planetarium',
      label: 'Planetario'
    },
    {
      path: 'sundials',
      label: 'Orologi Solari'
    },
    {
      path: 'taste',
      label: 'Progetto TASTE'
    },
    {
      path: 'contacts',
      label: 'Contatti'
    }
  ]

  selectedButton: string = ''

  constructor(private readonly router: Router) {}

  onNavigate(path: string): void {
    this.router.navigate([path])
    this.selectedButton = path
  }

  checkSelectedButton(path: string): boolean {
    return this.selectedButton === path
  }

  navigateToHome(): void {
    this.router.navigate(['home'])
  }
}
