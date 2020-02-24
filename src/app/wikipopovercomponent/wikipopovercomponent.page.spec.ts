import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WikipopovercomponentPage } from './wikipopovercomponent.page';

describe('WikipopovercomponentPage', () => {
  let component: WikipopovercomponentPage;
  let fixture: ComponentFixture<WikipopovercomponentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikipopovercomponentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WikipopovercomponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
