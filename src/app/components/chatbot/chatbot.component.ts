import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {
isOpen = false;
  userMessage = '';
  messages: { sender: string, text: string }[] = [];

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    if (!this.userMessage.trim()) return;
    
    // Add User Message
    this.messages.push({ sender: 'user', text: this.userMessage });
    const query = this.userMessage;
    this.userMessage = '';

    // Simulate Bot Response (Aap yahan Gemini API integrate kar sakte hain baad mein)
    setTimeout(() => {
      let reply = "Thanks for your message! Our team will get back to you soon. You can also contact us directly via WhatsApp or Email.";
      if (query.toLowerCase().includes('services')) {
        reply = "We offer Website Development, UI/UX Design, Android Apps, Game Dev, and Digital Marketing!";
      } else if (query.toLowerCase().includes('price') || query.toLowerCase().includes('cost')) {
        reply = "Pricing depends on your project requirements. Feel free to reach out via the Contact page!";
      }
      this.messages.push({ sender: 'bot', text: reply });
    }, 1000);
  }
}