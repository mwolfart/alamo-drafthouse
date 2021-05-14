import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.sass']
})

export class ActionButtonComponent {
    @Input() label: string = ""
    @Input() checked: boolean = false
    @Input() id: string = ""
    @Output() clickCallback: EventEmitter<string> = new EventEmitter<string>()

    toggle() {
      this.clickCallback.emit(this.id)
    }
}
