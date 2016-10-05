import {Directive} from "@angular/core";
import {Input} from "@angular/core/src/metadata/directives";

@Directive({
  selector: '[color-switcher]',
  host: {
    // TODO add '(mouseover|mouseout)':'...($event)'
  }
})
export class ColorDirective {
  @Input() color:string = '#FF00AC';

  private onCellHover(event) {
    event.target.style['color'] = this.color;
  }

  private onCellBlur(event) {
    event.target.style['color'] = '#000';
  }
}