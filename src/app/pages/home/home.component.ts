import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import Swiper from 'swiper';
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules';

@Component({
  selector: 'app-home',
  imports: [RouterModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  marqueeItems: any[] = [
    {
      id: 1,
      imageSrc: 'assets/Images/animaslider/afzalgfxlogo.webp',
      title: 'Afzal Gfx Logo',
      altText: 'Afzal Gfx Logo',
    },
    {
      id: 2,
      imageSrc: 'assets/Images/animaslider/amvthumbnail.webp',
      title: 'AMV Thumbnail',
      altText: 'amv thumbnail',
    },
    {
      id: 3,
      imageSrc: 'assets/Images/animaslider/cocthumbnail.webp',
      title: 'COC Thumbnail',
      altText: 'coc thumbnail',
    },
    {
      id: 4,
      imageSrc: 'assets/Images/animaslider/narutosasukethumb1.webp',
      title: 'Naruto And Sasuke Thumbnail 1',
      altText: 'Naruto And Sasuke Thumbnail1',
    },
    {
      id: 5,
      imageSrc: 'assets/Images/animaslider/narutosasukethumb2.webp',
      title: 'Naruto And Sasuke Thumbnail 2',
      altText: 'Naruto And Sasuke Thumbnail2',
    },
    {
      id: 6,
      imageSrc: 'assets/Images/animaslider/narutothumbnail.webp',
      title: 'Naruto Thumbnail',
      altText: 'naruto thumbnail',
    },
    {
      id: 7,
      imageSrc: 'assets/Images/animaslider/newslyanimelogo.webp',
      title: 'Newsly Anime Logo',
      altText: 'newsly anime logo',
    },
    {
      id: 8,
      imageSrc: 'assets/Images/animaslider/nioxgfxtournament.webp',
      title: 'Niox GFX Tournament',
      altText: 'Niox gfx tournament',
    },
    {
      id: 9,
      imageSrc: 'assets/Images/animaslider/nioxunitresults.webp',
      title: 'Niox Unit Results',
      altText: 'Niox unit results',
    },
    {
      id: 10,
      imageSrc: 'assets/Images/animaslider/onichantwitterheader.webp',
      title: 'Onichan Twitter Header',
      altText: 'onichan twitter header',
    },
    {
      id: 11,
      imageSrc: 'assets/Images/animaslider/pokesealogo.webp',
      title: 'Pokesea Logo',
      altText: 'pokesea logo',
    },
    {
      id: 12,
      imageSrc: 'assets/Images/animaslider/poksearevamp.webp',
      title: 'Poksea Revamp',
      altText: 'Poksea Revamp',
    },
    {
      id: 13,
      imageSrc: 'assets/Images/animaslider/rikkaposter.webp',
      title: 'Rikka Poster',
      altText: 'rikka poster',
    },
    {
      id: 14,
      imageSrc: 'assets/Images/animaslider/skies.webp',
      title: 'Skies Artwork',
      altText: 'skies',
    },
    {
      id: 15,
      imageSrc: 'assets/Images/animaslider/tanjiroposter.webp',
      title: 'Tanjiro Poster',
      altText: 'tanjiro poster',
    },
    {
      id: 16,
      imageSrc: 'assets/Images/animaslider/temp.webp',
      title: 'Temp Design',
      altText: 'temp',
    },
    {
      id: 17,
      imageSrc: 'assets/Images/animaslider/unitposter.webp',
      title: 'Unit Poster',
      altText: 'unit poster',
    },
    {
      id: 18,
      imageSrc: 'assets/Images/animaslider/weebifyposter.webp',
      title: 'Weebify Poster',
      altText: 'weebify poster',
    },
  ];

  ngOnInit(): void {
    // यहाँ से clientsLogoSwiper हटा दिया गया है क्योंकि DOM ngAfterViewInit में बनता है
  }

  ngAfterViewInit(): void {
    Swiper.use([Autoplay, Pagination, EffectFade, Navigation]);

    // 1. Banner / Hero Slider
    new Swiper('.hero-swiper', {
      modules: [Autoplay, EffectFade],
      loop: true,
      effect: 'fade',
      fadeEffect: { crossFade: true },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      speed: 1500,
    });

    // 2. Portfolio Designs Slider
    new Swiper('.portfolio-swiper', {
      modules: [Autoplay, Pagination, Navigation],
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 1000,
      pagination: {
        el: '.portfolio-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.portfolio-next',
        prevEl: '.portfolio-prev',
      },
    });

    // 3. Testimonials Slider
    new Swiper('.testimonials-swiper', {
      modules: [Autoplay, Pagination],
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      speed: 1000,
      pagination: {
        el: '.testimonials-pagination',
        clickable: true,
      },
      slidesPerView: 1,
      spaceBetween: 30,
    });

    // 4. Clients / Ecosystem Logo Slider
    const logoSwiper = new Swiper('.clients-logo-swiper', {
      modules: [Autoplay],
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      speed: 4000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
        pauseOnMouseEnter: true, // 👈 माउस ले जाने पर यह अपने आप रुक जाएगा
      },
      breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 25 },
        1024: { slidesPerView: 4, spaceBetween: 30 },
      },
    });

    // 👈 माउस हटाने (mouseleave) पर वापस ऑटोप्ले चालू करने के लिए यह कोड जोड़ें:
    const swiperEl = document.querySelector('.clients-logo-swiper');
    if (swiperEl) {
      swiperEl.addEventListener('mouseenter', () => {
        if (logoSwiper.autoplay) logoSwiper.autoplay.stop();
      });
      swiperEl.addEventListener('mouseleave', () => {
        if (logoSwiper.autoplay) logoSwiper.autoplay.start();
      });
    }

    // 1. Banner / Hero Slider & Text Rotator
    new Swiper('.hero-swiper', {
      modules: [Autoplay, EffectFade],
      loop: true,
      effect: 'fade',
      fadeEffect: { crossFade: true },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      speed: 1500,
    });

    // 1. Banner / Hero Slider & Text Rotator
    new Swiper('.hero-swiper', {
      modules: [Autoplay, EffectFade],
      loop: true,
      effect: 'fade',
      fadeEffect: { crossFade: true },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      speed: 1500,
    });

    // 👈 नया टेक्स्ट रोटेटर स्वाइपर (जो हवा में उड़ते हुए टेक्स्ट बदलेगा)
    new Swiper('.hero-text-swiper', {
      modules: [Autoplay, EffectFade],
      loop: true,
      effect: 'fade',
      fadeEffect: { crossFade: true },
      autoplay: {
        delay: 3000, // बैकग्राउंड के साथ पूरी तरह मैच करेगा
        disableOnInteraction: false,
      },
      speed: 1000,
    });
  }
}
