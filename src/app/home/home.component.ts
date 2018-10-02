import {Component} from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {

	languages = ["English", "Spanish", "French"];
	model = new Employee('Darla', 'Smith', true, 'w2', 'Spanish');


	firstNameToUpperCase(value: string) {
		// write your function here
	}
}
