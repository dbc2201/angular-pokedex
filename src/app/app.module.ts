import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './components/header/header.component';
import { SearchPokemonComponent } from './components/search-pokemon/search-pokemon.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
	declarations: [AppComponent, HeaderComponent, SearchPokemonComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		MatFormFieldModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
