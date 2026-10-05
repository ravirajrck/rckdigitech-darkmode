import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SITE_CONFIG } from '../../config/site-config';

@Component({
  selector: 'app-shared-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './shared-contact.component.html',
  styleUrl: './shared-contact.component.css'
})
export class SharedContactComponent {
 sideData: any = SITE_CONFIG;

  formData = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  onSubmit() {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';
    this.successMessage = '';

    // Web3Forms ke liye data prepare karein
    const payload = {
      access_key: this.sideData.formAPI,
      name: this.formData.name,
      email: this.formData.email,
      message: this.formData.message
    };

    // Fetch API ke zariye Web3Forms par data bhejein
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(async (response) => {
      const json = await response.json();
      if (response.status === 200) {
        this.successMessage = 'Thank you! Your message has been sent successfully.';
        
        // 👇 Form clear kar dein
        this.formData = {
          name: '',
          email: '',
          message: ''
        };
      } else {
        this.errorMessage = json.message || 'Something went wrong! Please try again.';
      }
    })
    .catch((error) => {
      console.error(error);
      this.errorMessage = 'Network error! Please check your connection.';
    })
    .finally(() => {
      this.isSubmitting = false;
    });
  }
}