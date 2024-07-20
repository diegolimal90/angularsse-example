import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SseMessagesComponent } from './sse-messages.component';

describe('SseMessagesComponent', () => {
  let component: SseMessagesComponent;
  let fixture: ComponentFixture<SseMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SseMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SseMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
