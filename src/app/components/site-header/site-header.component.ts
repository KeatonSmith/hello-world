import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'ng-ns-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {

  dark: boolean;
  constructor(private cookieService:CookieService) {
    const cookieExists = this.cookieService.check('darkThemeSet');
    if(cookieExists){
      this.dark = this.cookieService.get('darkThemeSet') == 'true';
    }else {
      this.dark = true;
    }
   }

  ngOnInit(): void {
    this.setDarkMode();
  }
  darkModeToggle() {
    this.dark = !this.dark;
    this.setDarkMode();
    this.cookieService.set('darkThemeSet', this.dark.toString());
  }
  setDarkMode() {
    var body = document.getElementById('body');
    if (this.dark) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }
}
