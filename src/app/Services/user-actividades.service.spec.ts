import { TestBed } from '@angular/core/testing';

import { UserActividadesService } from './user-actividades.service';

describe('UserActividadesService', () => {
  let service: UserActividadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserActividadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
