import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramaComponentComponent } from './diagrama-component.component';

describe('DiagramaComponentComponent', () => {
  let component: DiagramaComponentComponent;
  let fixture: ComponentFixture<DiagramaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagramaComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagramaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
