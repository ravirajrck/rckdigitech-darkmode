import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ui-ux-design',
  imports: [],
  templateUrl: './ui-ux-design.component.html',
  styleUrl: './ui-ux-design.component.css'
})
export class UiUxDesignComponent {
 @ViewChild('flipCard') flipCard!: ElementRef;
  
  isFlipped: boolean = false;
  private isIntersectingView: boolean = false;
  private observer!: IntersectionObserver;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    const options = {
      root: null,
      threshold: 0.4
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        this.ngZone.run(() => {
          this.isIntersectingView = entry.isIntersecting;
          this.isFlipped = this.isIntersectingView;
        });
      });
    }, options);

    if (this.flipCard) {
      this.observer.observe(this.flipCard.nativeElement);
    }
  }

  onMouseEnter(): void {
    this.isFlipped = !this.isIntersectingView;
  }

  onMouseLeave(): void {
    this.isFlipped = this.isIntersectingView;
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}