import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { SAMPLE_CONFIG, SampleConfig } from '../config/config';

@Component({
  selector: 'lib-sample',
  template: `
    <div
      #elm
      style="width: 300px; height: 100px; display: flex; justify-content: center; align-items: center"
    >
      <div></div>
    </div>
  `
})
export class SampleComponent implements OnInit {
  private element: HTMLDivElement;

  @ViewChild('elm', { static: true })
  set elm(elementRef: ElementRef<HTMLDivElement>) {
    this.element = elementRef.nativeElement;
  }

  constructor(@Inject(SAMPLE_CONFIG) private config: SampleConfig) {}

  ngOnInit(): void {
    if (this.config?.value) {
      (this.element.firstChild as HTMLDivElement).innerText = this.config.value;
    }
    if (this.config?.color) {
      this.element.style.backgroundColor = this.config.color;
    }
  }
}
