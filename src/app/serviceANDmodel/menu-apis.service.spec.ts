import { TestBed } from '@angular/core/testing';

import { MenuAPIsService } from './menu-apis.service';

describe('MenuAPIsService', () => {
  let service: MenuAPIsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuAPIsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
