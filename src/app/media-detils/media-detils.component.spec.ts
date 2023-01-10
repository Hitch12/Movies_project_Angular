import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaDetilsComponent } from './media-detils.component';

describe('MediaDetilsComponent', () => {
  let component: MediaDetilsComponent;
  let fixture: ComponentFixture<MediaDetilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaDetilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaDetilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
