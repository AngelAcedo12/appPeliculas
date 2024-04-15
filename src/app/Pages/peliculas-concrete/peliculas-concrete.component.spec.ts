import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasConcreteComponent } from './peliculas-concrete.component';

describe('PeliculasConcreteComponent', () => {
  let component: PeliculasConcreteComponent;
  let fixture: ComponentFixture<PeliculasConcreteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeliculasConcreteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeliculasConcreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
