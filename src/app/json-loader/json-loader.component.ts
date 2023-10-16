import { Component } from '@angular/core';
import { JsonLoaderService } from '../json-loader.service';
import { Product } from '../product.model';
import { Subject, debounceTime, distinctUntilChanged, first } from 'rxjs';

@Component({
  selector: 'app-json-loader',
  templateUrl: './json-loader.component.html',
  styleUrls: ['./json-loader.component.css']
})
export class JsonLoaderComponent {

  products: Product[] | undefined = [];
  displayedProducts: Product[] | undefined = [];
  currentPage = 1;
  itemsPerPage = 10;
  newSearch: string = '';
  searchResults!: any[];
  totalPages: number = 0;

  firstRun: boolean = false;

  searchQuery = new Subject<string>();

  constructor(private jsonLoaderService: JsonLoaderService) { 

    this.searchQuery.pipe(
      debounceTime(200),
      distinctUntilChanged()
    ).subscribe( searchTerm => {
      this.searchDB(searchTerm);
    })

  }

  onSearch(): void{
    this.searchQuery.next(this.newSearch);
  }

  fetchProducts(): void {
    this.jsonLoaderService.getProducts().subscribe((data) => {

      this.products = data.content;
      this.updateDisplayedProducts();

    })
  }

  searchDB(q: string) {

    if(this.firstRun === false){

      this.fetchProducts();

      this.firstRun = true;

      this.searchResults = this.jsonLoaderService.searchProducts(q, this.products!);

      this.resetPage();

      this.updateDisplayedProducts();
    } else if(this.newSearch === '') {

      this.searchResults = [];

      this.resetPage();

      this.updateDisplayedProducts();

    } else {

      this.searchResults = this.jsonLoaderService.searchProducts(q, this.products!);

      this.resetPage();

      this.updateDisplayedProducts();

    }

  }

  resetPage() {
    if(this.currentPage > (this.searchResults.length / this.itemsPerPage)) {
      this.currentPage = 1;
    }
  }

  setTotalPages(step: string) {

    if(step === 'empty'){
      this.totalPages = this.products!.length / this.itemsPerPage;

      this.totalPages = Math.ceil(this.totalPages);
    } else {
      this.totalPages = this.searchResults.length / this.itemsPerPage;

      this.totalPages = Math.ceil(this.totalPages);
    }

  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updateDisplayedProducts();
  }

  private updateDisplayedProducts() {

    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    if(this.searchResults === undefined){

      this.setTotalPages('empty');

      this.displayedProducts = this.products?.slice(startIndex, endIndex)
    } else {

      this.setTotalPages('');

      this.displayedProducts = this.searchResults.slice(startIndex, endIndex);
    }

  }


}
