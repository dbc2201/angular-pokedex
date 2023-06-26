import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListManagerComponent } from './pokemon-list-manager.component';

describe('PokemonListManagerComponent', () => {
  let component: PokemonListManagerComponent;
  let fixture: ComponentFixture<PokemonListManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonListManagerComponent]
    });
    fixture = TestBed.createComponent(PokemonListManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
