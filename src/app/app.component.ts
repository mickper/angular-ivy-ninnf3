import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  NgZone,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public counter: number;
  private isAttached = true;

  constructor(private cd: ChangeDetectorRef, private zone: NgZone) {}

  ngOnInit() {
    this.counter = 0;

    setInterval(() => {
      this.counter++;

      // if (this.counter % 5 === 0) {
      //   // Appuyer sur le bouton rouge.
      //   this.cd.markForCheck(); // Je préfère
      //   // this.cd.detectChanges(); // Maintenant, moi et les enfants
      // }
    }, 1000);
  }

  public isViewRerendered() {
    console.log('La vue est ré-inteprétée');
  }

  public detachOrReattach() {
    if (this.isAttached) {
      this.cd.detach();
    } else {
      this.cd.reattach();
    }

    this.isAttached = !this.isAttached;
  }
}
