import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeDetailsViewComponent } from './poke-details-view.component';

describe('PokeDetailsViewComponent', () => {
  let component: PokeDetailsViewComponent;
  let fixture: ComponentFixture<PokeDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeDetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
