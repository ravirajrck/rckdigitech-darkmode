import { Component, HostListener, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import Lenis from 'lenis';
import { CommonModule } from '@angular/common';
import { ChatbotComponent } from './components/chatbot/chatbot.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent, CommonModule, ChatbotComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  title = 'rck-digitech-app';

  showScrollTop = false;

  // Window scroll event detect karne ke liye
  @HostListener('window:scroll')
  onWindowScroll() {
    // Jab user 300px se zyada niche scroll karega tab button dikhega
    if (window.scrollY > 300) {
      this.showScrollTop = true;
    } else {
      this.showScrollTop = false;
    }
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    // 👈 पूरी वेबसाइट के लिए ग्लोबल Lenis स्मूथ स्क्रॉल
    const lenis = new Lenis({
      duration: 1.2, // स्क्रॉल की स्मूथनेस और ड्यूरेशन
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // मक्खन जैसा नेचुरल फील
      smoothWheel: true,
      touchMultiplier: 2, // मोबाइल और टचपैड के लिए स्मूथनेस
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const cursor = document.getElementById('custom-cursor');
    const follower = document.getElementById('cursor-follower');

    if (cursor && follower) {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;

      // Smooth following effect
      setTimeout(() => {
        follower.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }, 50);
    }
  }

  @HostListener('document:click', ['$event'])
  onClick(e: MouseEvent) {
    // Create multiple star sparkles on click
    for (let i = 0; i < 6; i++) {
      this.createSparkle(e.clientX, e.clientY);
    }
  }

  createSparkle(x: number, y: number) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle-particle');

    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;

    // Random spread direction
    const destinationX = (Math.random() - 0.5) * 100;
    const destinationY = (Math.random() - 0.5) * 100;

    sparkle.style.setProperty('--tx', `${destinationX}px`);
    sparkle.style.setProperty('--ty', `${destinationY}px`);

    document.body.appendChild(sparkle);

    // Remove element after animation ends
    setTimeout(() => {
      sparkle.remove();
    }, 800);
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
