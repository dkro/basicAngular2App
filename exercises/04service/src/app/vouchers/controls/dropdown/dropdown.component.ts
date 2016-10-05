import {Component, Output, Input} from "@angular/core/src/metadata/directives";
import {EventEmitter, OnInit} from "@angular/core";

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.html'
})
export class Dropdown implements OnInit {
  @Input() data:Array<{id:number, text:string}> = [];
  @Input() selectedById:number = -1;
  @Input() disabled:boolean = false;
  @Output() dropdownChange:EventEmitter<any> = new EventEmitter();

  private isOpen:boolean = false;
  private topText:string = '-- Select --';

  ngOnInit() {
    if (this.selectedById && this.data) {
      this.setTopText();
    }
  }

  private handleToggle() {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  }

  private handleSelect(id:number) {
    this.selectedById = id;
    this.setTopText();
    this.isOpen = false;
    this.dropdownChange.emit(id);
  }

  private setTopText() {
    let selection = this.data.find((item) => item.id === this.selectedById);
    if (!!selection) {
      this.topText = selection.text;
    }
  }
}