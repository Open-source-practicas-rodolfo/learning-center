import { Component, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButton } from '@angular/material/button';

@Component({
  imports: [
    TranslatePipe,
    MatToolbarRow,
    MatToolbar,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatButton,
  ],
  selector: 'app-layout',
  styleUrl: './layout.css',
  templateUrl: './layout.html',
})
export class Layout {
  protected options = signal([
    { link: '/home', label: 'option.home' },
    { link: '/about', label: 'option.about' },
  ]);
}
