import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({ selector: '[coordlat]' })

export class LatDirective {

    constructor(public el: ElementRef, public renderer: Renderer) {}

    @Input() coordlat: number;

    ngOnInit(){
        //console.log(this.coordlat)
    }
}