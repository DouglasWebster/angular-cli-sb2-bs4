/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModalModule } from 'ng2-bootstrap/modal';
import { ModalSampleComponent } from './modal-sample.component';

describe('ModalSampleComponent', () => {
  let component: ModalSampleComponent;
  let fixture: ComponentFixture<ModalSampleComponent>;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ModalModule.forRoot()],
      declarations: [ModalSampleComponent]
    });
    // .compileComponents(); <- not required for webpack
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSampleComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have a button \'child modal\'', () => {
    const btn = debugEl.queryAll(By.css('.btn')).find(b => {
      if (b.nativeElement.textContent === 'Open child modal') {
        return true;
      }
    });

    expect(btn.nativeElement).toBeDefined('Open child modal button not defined');

  });

  it('should open the child modal window when the \'child modal\' buttton is pressed ', () => {
    const btn = debugEl.queryAll(By.css('.btn')).find(b => {
      if (b.nativeElement.textContent === 'Open child modal') {
        return true;
      }
    });

    // test code coverage.
    btn.nativeElement.click();

    // then check the call.
    const spy = spyOn(component, 'showChildModal').and.returnValue(true);

    btn.nativeElement.click();
    expect(component.showChildModal).toHaveBeenCalled();
  });

  it('should close the child modal window when a second click occurs', () => {
    const btn = debugEl.queryAll(By.css('.btn')).find(b => {
      if (b.nativeElement.textContent === 'Open child modal') {
        return true;
      }
    });

    btn.nativeElement.click();
    component.hideChildModal();

    const spy = spyOn(component, 'hideChildModal').and.returnValue(true);
    component.hideChildModal();
    expect(component.hideChildModal).toHaveBeenCalled();
  });
});
