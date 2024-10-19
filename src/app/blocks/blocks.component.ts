import { Component, OnInit, Renderer2 } from '@angular/core';
import { ColorsService } from '../colors.service';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-blocks',
  standalone: true,
  imports: [CommonModule],
  providers: [ColorsService],
  templateUrl: './blocks.component.html',
  styleUrl: './blocks.component.css'
})
export class BlocksComponent implements OnInit{
  
  jsonData?: any[];
  originalStyles: any;

  isFetched: boolean = false;

  // styled elements
  
  constructor(private colorsService: ColorsService, private renderer: Renderer2) {}
  
  ngOnInit(): void {
    this.colorsService.getJsonData().subscribe((data) => {
      this.jsonData = data.places;
      this.isFetched = true;
      console.log(data);
    });
    
    this.originalStyles = {
      backgroundColor: window.getComputedStyle(document.body).backgroundColor,
      
    };
  }
  
  // dodanie grupy dla stylowania
  applyStyles(example: any): void {
    this.renderer.setStyle(document.body, 'background-color', example.tlo);
    
    const headers = document.querySelectorAll('.headers');
    headers.forEach(el => {
      this.renderer.setStyle(el, 'color', example.naglowki);
    });
    
    const texts = document.querySelectorAll('.texts');
    texts.forEach(el => {
      this.renderer.setStyle(el, 'color', example.tekst);
    });
    
    const resetBtn = document.querySelector('.btn-reset');
    this.renderer.setStyle(resetBtn, 'background-color', example.akcenty);

  }

  resetStyles(): void {
    this.renderer.setStyle(document.body, 'background-color', this.originalStyles.backgroundColor);

    const headers = document.querySelectorAll('.headers');
    headers.forEach(el => {
      this.renderer.removeStyle(el, 'color');
    });
    
    const texts = document.querySelectorAll('.texts');
    texts.forEach(el => {
      this.renderer.removeStyle(el, 'color');
    });
    
    const resetBtn = document.querySelector('.btn-reset');
    this.renderer.removeStyle(resetBtn, 'background-color');
  }

  transformKey(key: any): string {
    return String(key); 
  }


 
}
