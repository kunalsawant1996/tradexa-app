import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersListService } from './users-list/users-list.service';
import { SearchFilterPipe } from './users-list/search-filter.pipe';
import { SharedService } from './shared/shared.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    UsersListComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ UsersListService, SearchFilterPipe, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
