import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { SITE_CONFIG } from '../../config/site-config';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuHidden = true;
  sideData: any = SITE_CONFIG;

  @ViewChild('galaxyCanvas') galaxyCanvas!: ElementRef<HTMLCanvasElement>;

  constructor(public router: Router) {}

  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
  }

  // Check helper to see if path is active
  isActive(path: string): boolean {
    return this.router.url.includes(path);
  }

  ngAfterViewInit() {
    this.initGalaxyAnimation();
  }

  initGalaxyAnimation() {
    // ... aapka purana galaxy canvas code as it is rahega ...
    const canvas = this.galaxyCanvas?.nativeElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width: any = '';
    let height: any = '';
    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const starsCount = 50;
    const stars: any[] = [];
    for (let i = 0; i < starsCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random(),
        speed: Math.random() * 0.02 + 0.005
      });
    }

    let waveAngle = 0;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      stars.forEach(star => {
        star.alpha += star.speed;
        if (star.alpha > 1 || star.alpha < 0.2) star.speed = -star.speed;
        ctx.fillStyle = `rgba(255, 215, 88, ${star.alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      waveAngle += 0.03;
      ctx.beginPath();
      ctx.moveTo(0, height);
      for (let x = 0; x < width; x += 10) {
        let y = Math.sin(x * 0.015 + waveAngle) * 6 + Math.cos(x * 0.008 + waveAngle * 0.5) * 4 + height * 0.75;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      let gradient1 = ctx.createLinearGradient(0, 0, width, height);
      gradient1.addColorStop(0, 'rgba(255, 215, 88, 0.04)');
      gradient1.addColorStop(1, 'rgba(139, 92, 246, 0.06)');
      ctx.fillStyle = gradient1;
      ctx.fill();

      requestAnimationFrame(animate);
    };
    animate();
  }
}