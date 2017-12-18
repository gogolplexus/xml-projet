import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({ selector: '[coordlng]' })

export class LngDirective {

    constructor(public el: ElementRef, public renderer: Renderer) {}

    @Input() coordlng: number;

    ngOnInit(){
        //console.log(this.coordlng)
    }
}