import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from'@angular/forms';



import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { CounterExampleComponent } from './counter-example/counter-example.component';
import { TwoFieldsComponent } from './two-fields/two-fields.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    CounterExampleComponent,
    TwoFieldsComponent,
    ClassBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
