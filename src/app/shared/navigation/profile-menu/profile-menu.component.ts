import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/auth/shared/data-services/authentication.service';

@Component({
  selector: 'pms-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class ProfileMenuComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
    window.location.reload();
  }
}
