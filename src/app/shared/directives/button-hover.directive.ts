import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
    selector: '[appButtonHover]'
})
export class ButtonHoverDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter(): void {
    this.changeColor('blue');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.changeColor(null);
  }

  private changeColor(color: string | null): void {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }
}
