import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";


@Directive({
    selector:'[hoverApp]',
})

export class HoverDirective{

    

    constructor(private elementref:ElementRef,private renderer:Renderer2){}

    ngOnInit(){
        this.renderer.setStyle(this.elementref.nativeElement,'color','black')
    };

    @HostListener('mouseenter') mouseenter(){
        this.renderer.setStyle(this.elementref.nativeElement,'color','green')
        this.renderer.setStyle(this.elementref.nativeElement,'border-bottom', '3px solid green')
        this.renderer.setStyle(this.elementref.nativeElement,'transition','0.2s')

    }

    @HostListener('mouseleave') mouseleave(){
        this.renderer.setStyle(this.elementref.nativeElement,'color','black')
        this.renderer.setStyle(this.elementref.nativeElement,'border-bottom', 'none')


    }


   
}
    
