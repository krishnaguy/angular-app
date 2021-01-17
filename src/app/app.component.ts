import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';
import { faSearch, faBars, faSignInAlt} from '@fortawesome/free-solid-svg-icons';

import { MetaService } from './meta/meta.service';
import { ServersComponent } from './servers/servers.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() validateFailed = new EventEmitter<any>();
  @Input() navDropdown = false;
  name = 'Krishna';
  faSearch = faSearch;
  faBars = faBars;
  faSignInAlt = faSignInAlt;
  returnedTokens$: Observable<any>;
  tokens;

  navbarOpen = false;
  formGroupControl = new FormGroup({
    user: new FormControl(''),
    password: new FormControl('')
  });

  constructor( private metaService: MetaService){}
  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }


  onSubmit(event): void {
    console.log(this.formGroupControl.value);
    this.returnedTokens$ = this.metaService.
    getToken(this.formGroupControl.value.user).pipe(tap(tokens => {this.tokens = tokens; console.log(this.tokens);}));

    // .subscribe(res => console.log(res));
  }

  onValidate(event) {
    this.metaService.validateToken(this.tokens[0].token).subscribe(res => {console.log('ok'); console.log(res);},
    error => { console.log("Logging error"); console.log(error.error);
      this.validateFailed.emit('Error');});

  }




  emit(event){
    console.log("in emit");
    this.validateFailed.emit("Emit");
  }

}
