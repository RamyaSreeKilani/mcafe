import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatlogPage } from './catlog.page';

describe('CatlogPage', () => {
  let component: CatlogPage;
  let fixture: ComponentFixture<CatlogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatlogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
