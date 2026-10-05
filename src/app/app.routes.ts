import { Routes } from '@angular/router';

export const routes: Routes = [
  // Default Redirect to Home
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Main Pages with Lazy Loading
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./pages/portfolio/portfolio.component').then(
        (m) => m.PortfolioComponent,
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (m) => m.ContactComponent,
      ),
  },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./pages/privacy-policy/privacy-policy.component').then(
        (m) => m.PrivacyPolicyComponent,
      ),
  },
  {
    path: 'terms-and-conditions',
    loadComponent: () =>
      import('./pages/terms-and-conditions/terms-and-conditions.component').then(
        (m) => m.TermsAndConditionsComponent,
      ),
  },

  // Services Main & Sub-pages (Nested Routes)
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services.component').then(
        (m) => m.ServicesComponent,
      ),
    children: [
      { path: '', redirectTo: 'website-development', pathMatch: 'full' },
      {
        path: 'application-development',
        loadComponent: () =>
          import('./pages/services/application-development/application-development.component').then(
            (m) => m.ApplicationDevelopmentComponent,
          ),
      },
      {
        path: 'digital-marketing',
        loadComponent: () =>
          import('./pages/services/digital-marketing/digital-marketing.component').then(
            (m) => m.DigitalMarketingComponent,
          ),
      },
      {
        path: 'game-development',
        loadComponent: () =>
          import('./pages/services/game-development/game-development.component').then(
            (m) => m.GameDevelopmentComponent,
          ),
      },
      {
        path: 'graphics-design',
        loadComponent: () =>
          import('./pages/services/graphics-design/graphics-design.component').then(
            (m) => m.GraphicsDesignComponent,
          ),
      },
      {
        path: 'ui-ux-design',
        loadComponent: () =>
          import('./pages/services/ui-ux-design/ui-ux-design.component').then(
            (m) => m.UiUxDesignComponent,
          ),
      },
      {
        path: 'website-development',
        loadComponent: () =>
          import('./pages/services/website-development/website-development.component').then(
            (m) => m.WebsiteDevelopmentComponent,
          ),
      },
    ],
  },

  // Wildcard Route (अगर कोई गलत URL डाले तो होम पेज पर भेज देगा)
  { path: '**', redirectTo: 'home' },
];
