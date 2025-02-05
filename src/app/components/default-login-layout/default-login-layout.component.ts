import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-default-login-layout',
  imports: [],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.scss'
})
export class DefaultLoginLayoutComponent {
  @Input() title: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secondaryBtnText: string = "";

  @Input() disablePrimaryBtn: boolean = true;
  @Output("submit") onSubmit = new EventEmitter(); // esse output é pra logar

  @Output("navigate")onNavigate = new EventEmitter(); // esse é o de cadastro



  submit(){
    this.onSubmit.emit();
    
  }

  navigate(){
    this.onNavigate.emit();
    
  }




}
