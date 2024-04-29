import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {


  @ViewChild('scrollContainer') scrollContainer!: ElementRef;



  items = [
    {
      firstName: 'Here Are The Coolest New Cars For 2020',
      description: 'Though there is an assortment of brand-new and fully redesigned passenger cars hitting the road for 2020 model year, their numbers are',
      price: '200',
      type: 'BMW',
      imageUrl: '/assets/gallery/car firari.webp',
      category: 'CHEAP-CAR'
    },

    {
      firstName: 'Here Are The Coolest New Cars For 2020',
      description: 'Though there is an assortment of brand-new and fully redesigned passenger cars hitting the road for 2020 model year, their numbers are',
      price: '200',
      type: 'Mercides',
      imageUrl: '/assets/gallery/car.png',
      category: 'CHEAP-CAR'
    },

    {
      firstName: 'Here Are The Coolest New Cars For 2020',
      description: 'Though there is an assortment of brand-new and fully redesigned passenger cars hitting the road for 2020 model year, their numbers are',
      price: '200',
      type: 'Ferrari',
      imageUrl: '/assets/gallery/about us.webp',
      category: 'Sport-Car'
    },

    {
      firstName: 'Here Are The Coolest New Cars For 2020',
      description: 'Though there is an assortment of brand-new and fully redesigned passenger cars hitting the road for 2020 model year, their numbers are',
      price: '200',
      type: 'BOGATI',
      imageUrl: '/assets/gallery/car firari.webp',
      category: 'Sport-Car'
    },

  ];

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -400, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 400, behavior: 'smooth' });
  }

  filteredItems = this.items; // Initialize filteredItems with all items

  selectedCategory: string = 'CHEAP-CAR'; // Set the default selected category
  selectedOption: string = ''; // Variable to store the selected option
  showDropdown: boolean = false; // Variable to control the visibility of the dropdown

  categoryOptions: { [key: string]: string[] } = {
    'CHEAP-CAR': ['BMW', 'Mercides', 'Fitness'],
    'Sport-Car': ['Ferrari', 'BOGATI'],
    'Electiric-Car': ['Design 1', 'Design 2'],
    'Expensive Car': ['E-commerce 1', 'E-commerce 2']
  };

  ngOnInit() {
    // Filter items based on the default selected category on component initialization
    this.filteredItems = this.items.filter(item => item.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category; // Set the selected category
    this.selectedOption = ''; // Reset the selected option
    this.showDropdown = false; // Close the dropdown
    this.filteredItems = this.items.filter(item => item.category === category); // Filter items based on the selected category
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown; // Toggle the dropdown visibility
  }

  selectOption(option: string) {
    this.selectedOption = option; // Set the selected option
    this.showDropdown = false; // Close the dropdown after selection
    this.filteredItems = this.items.filter(item => item.category === this.selectedCategory && item.type?.includes(option)); // Filter items based on the selected category and option
  }



  scrollTo(elementId: string): void {
    document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
  }



  showMenu = true;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}