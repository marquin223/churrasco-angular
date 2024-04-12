import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutrocomponenteComponent } from './outrocomponente.component';

describe('OutrocomponenteComponent', () => {
  let component: OutrocomponenteComponent;
  let fixture: ComponentFixture<OutrocomponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutrocomponenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutrocomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
