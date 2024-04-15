import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPelisComponent } from './top-pelis.component';

describe('TopPelisComponent', () => {
  let component: TopPelisComponent;
  let fixture: ComponentFixture<TopPelisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopPelisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopPelisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
