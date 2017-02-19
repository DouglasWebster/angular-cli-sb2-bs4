/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TabsModule } from 'ng2-bootstrap/tabs';
import { TabsSampleComponent } from './tabs-sample.component';

describe('TabsSampleComponent', () => {
  let component: TabsSampleComponent;
  let fixture: ComponentFixture<TabsSampleComponent>;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TabsModule.forRoot()],
      declarations: [ TabsSampleComponent ]
    });
   // .compileComponents(); <- not required for webpack
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsSampleComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
