import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'pb-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss']
})
export class BarGraphComponent implements OnInit {

  isFormValid = false;
  areCredentialsInvalid = false;

  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

}
