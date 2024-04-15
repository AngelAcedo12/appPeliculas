import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayaoutMainComponent } from './layaout-main.component';

describe('LayaoutMainComponent', () => {
  let component: LayaoutMainComponent;
  let fixture: ComponentFixture<LayaoutMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayaoutMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayaoutMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
