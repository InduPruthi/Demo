import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cs-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
 buttonshow : Boolean=true;
  Loginshow:Boolean= false;
  SignUpshow:Boolean=false;
  title = 'cs';

  btnshow()
  {
    this.buttonshow=false;
    this.SignUpshow=false;
     this.Loginshow=false;
  }
 btnLoginshow()
  {
    this.Loginshow=true;
    this.buttonshow=false;
    this.SignUpshow=false;
  }

  btnSignUpshow()
  {
    this.Loginshow=false;
    this.buttonshow=false;
    this.SignUpshow=true;
  }
  constructor() { }

  ngOnInit() {
  }

}
