/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SidebarService } from './sidebar.service';

describe('SidebarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SidebarService]
    });
  });

  it('should ...', inject([SidebarService], (service: SidebarService) => {
    expect(service).toBeTruthy();
  }));
});
