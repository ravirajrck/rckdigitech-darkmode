import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsDesignComponent } from './graphics-design.component';

describe('GraphicsDesignComponent', () => {
  let component: GraphicsDesignComponent;
  let fixture: ComponentFixture<GraphicsDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicsDesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicsDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
