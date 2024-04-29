import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-portfolio',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TESTComponent{
  
  scrollTo(elementId: string): void {
    document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
  }
}