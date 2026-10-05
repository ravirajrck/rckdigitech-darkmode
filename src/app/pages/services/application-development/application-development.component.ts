import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-application-development',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './application-development.component.html',
  styleUrls: ['./application-development.component.css']
})
export class ApplicationDevelopmentComponent {
  activeCatalogTab: string = 'business';

  catalogCategories = [
    { id: 'business', name: 'Business Apps' },
    { id: 'lifestyle', name: 'Lifestyle & Social' },
    { id: 'utility', name: 'Utility Tools' },
    { id: 'ondemand', name: 'On-Demand & Services' },
    { id: 'education', name: 'Education & Retail' }
  ];

  appCatalogs: { [key: string]: string[] } = {
    business: [
      'CRM Apps', 'Attendance Systems', 'Inventory Management', 
      'Billing & Invoicing', 'POS Systems', 'Vendor Management', 
      'Client Portals', 'Project Tracking', 'Order Management', 'Job Portals'
    ],
    lifestyle: [
      'Fitness Trackers', 'Yoga & Meditation', 'Dating Apps', 
      'Recipe & Cooking', 'Event Planners', 'Pet Care Apps', 
      'Travel Diaries', 'Language Learning', 'Habit Trackers', 'Parenting Apps'
    ],
    utility: [
      'QR/Barcode Scanners', 'File Converters', 'To-Do List Apps', 
      'Voice Recorders', 'Note Taking', 'Flashlight Apps', 
      'VPN Clients', 'Photo Editors', 'Battery Saver', 'Expense Managers'
    ],
    ondemand: [
      'Food Delivery', 'Cab Booking', 'Grocery Ordering', 
      'Laundry Pickup', 'Online Tutors', 'Doctor on Call', 
      'Marketplace Platforms', 'Home Services Apps', 'Streaming Services', 'Property Listings'
    ],
    education: [
      'E-Learning Platforms', 'School Management', 'Quiz & Test Apps', 
      'Online Courses', 'Language Tutors', 'Virtual Classrooms', 
      'Parent-Teacher Portals', 'Student Portfolios', 'Video Lectures', 'Exam Prep Apps',
      'Shopping Apps', 'Product Catalogs', 'Order Tracking', 'Subscription Boxes',
      'Fashion Stores', 'Digital Wallets', 'Coupons & Deals', 'Loyalty Programs',
      'Wholesale Portals', 'Multi-Vendor Apps'
    ]
  };

  getActiveCatalogItems(): string[] {
    return this.appCatalogs[this.activeCatalogTab] || [];
  }
}