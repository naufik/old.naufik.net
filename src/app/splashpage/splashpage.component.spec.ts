import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashPageComponent } from './splashpage.component';
import { compileDirectiveFromMetadata } from '@angular/compiler';

describe('SplashPageComponent', () => {
  let component: SplashPageComponent;
  let fixture: ComponentFixture<SplashPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplashPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display my name', () => {
    expect(component.myName).toContain('Naufal Fikri');
    const compiled: Element = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.main-header > h1').innerHTML).toContain('Naufal Fikri');
  });

  it('should display the navigation bar', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.coolnav')).toBeTruthy();
  });


});
