import { Component } from '@angular/core';
import { SharedContactComponent } from '../../components/shared-contact/shared-contact.component';

@Component({
  selector: 'app-about',
  imports: [SharedContactComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
