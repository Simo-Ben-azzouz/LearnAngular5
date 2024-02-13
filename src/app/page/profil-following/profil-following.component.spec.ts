import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilFollowingComponent } from './profil-following.component';

describe('ProfilFollowingComponent', () => {
  let component: ProfilFollowingComponent;
  let fixture: ComponentFixture<ProfilFollowingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilFollowingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfilFollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
