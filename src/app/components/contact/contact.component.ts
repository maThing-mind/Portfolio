import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PortfolioState } from '../../store/portfolio.reducer';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  portfolio$: Observable<PortfolioState>;
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private store: Store<{ portfolio: PortfolioState }>) {
    this.portfolio$ = this.store.select('portfolio');
  }

  ngOnInit() {}

  onSubmit() {
    // Handle form submission
    console.log('Form submitted:', this.contactForm);
    // You can add actual form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    this.contactForm = { name: '', email: '', message: '' };
  }
}

