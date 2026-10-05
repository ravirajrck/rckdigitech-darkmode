import { Component, OnInit, inject } from '@angular/core'; // 👈 inject add kiya
import { CommonModule } from '@angular/common';
import { RouterLinkActive, RouterModule, Router, NavigationEnd } from '@angular/router'; // 👈 Router & NavigationEnd add kiye
import { ViewportScroller } from '@angular/common'; // 👈 ViewportScroller add kiya
import { filter } from 'rxjs/operators';
import { SharedContactComponent } from '../../components/shared-contact/shared-contact.component'; // 👈 filter operator add kiya

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLinkActive, SharedContactComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent implements OnInit {
  services: any[] = [];

  private viewportScroller = inject(ViewportScroller);
  private router = inject(Router);

  ngOnInit(): void {
  
    this.scrollToTop();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.scrollToTop();
    });

    // Services Data Initialization
    this.services = [
      {
        title: 'Website Development',
        route: 'website-development',
        svgIcon:
          'M10 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6m-4 6l2 2m0 0l2-2m-2 2v-6m-8 4h4',
      },
      {
        title: 'UI/UX Design',
        route: 'ui-ux-design',
        svgIcon:
          'M12 2a10 10 0 1 0 7.54 16.63.8.8 0 0 0-.17-.92l-2.82-2.82a.8.8 0 0 1-.22-.57v-1.32a3 3 0 0 0-3-3H12a2 2 0 0 1-2-2v-.55a2 2 0 0 1 .59-1.42l3-3a1 1 0 0 0-.7-1.7H12Z',
      },
      {
        title: 'Android Development',
        route: 'application-development',
        svgIcon:
          'M5 2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm7 18h.01',
      },
      {
        title: 'Graphics Design',
        route: 'graphics-design',
        svgIcon:
          'm12 19-7-7 3-3 7 7-3 3Zm-5-5-2 5 5-2m6.5-9.5L16 3l-3.5 3.5 4 4L20 7.5l-2.5-2.5Z',
      },
      {
        title: 'Game Development',
        route: 'game-development',
        svgIcon:
          'M6 12h4m-2-2v4m10-5h.01M18 13h.01M6.5 18C4 18 2 16 2 13.5V11a5 5 0 0 1 10 0v1h.01v-1a5 5 0 0 1 10 0v2.5c0 2.5-2 4.5-4.5 4.5h-11Z',
      },
      {
        title: 'Digital Marketing',
        route: 'digital-marketing',
        svgIcon: 'm3 17 6-6 4 4 8-8m-4-4h4v4',
      },
    ];
  }

  // Helper function to scroll to top smoothly
  private scrollToTop(): void {
    // ViewportScroller browser window ko top-left corner (0,0) par le jayega
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}