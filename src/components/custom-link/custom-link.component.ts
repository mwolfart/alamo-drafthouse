import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-custom-link',
  templateUrl: './custom-link.component.html',
  styleUrls: ['./custom-link.component.sass'],
})
export class CustomLinkComponent {
  @Input() label: string = ''
  @Input() clickCallback: () => void = () => {}
  @Input() urlSrc: string = ''
}
