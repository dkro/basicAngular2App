import {Component} from "@angular/core/src/metadata/directives";
import {EventEmitter, OnInit} from "@angular/core";

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.html'
})
export class Dropdown implements OnInit {
  // TODO make the following variables Inputs
  private data:Array<{id:number, text:string}> = [];
  private selectedById:number = -1;
  private disabled:boolean = false;


  // TODO create an Output dropdownChange EventEmitter


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




    // TODO .emit(id) as event
  }

  private setTopText() {
    let selection = this.data.find((item) => item.id === this.selectedById);
    if (!!selection) {
      this.topText = selection.text;
    }
  }
}