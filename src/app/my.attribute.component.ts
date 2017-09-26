import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
 selector: '[myWizardAttributeDirective]'
})
export class MyWizardAttributeDirective {

    constructor(private el: ElementRef) {}

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('green');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}