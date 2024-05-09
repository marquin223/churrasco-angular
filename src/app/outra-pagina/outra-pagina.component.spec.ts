import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutraPaginaComponent } from './outra-pagina.component';

describe('OutraPaginaComponent', () => {
  let component: OutraPaginaComponent;
  let fixture: ComponentFixture<OutraPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutraPaginaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutraPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
