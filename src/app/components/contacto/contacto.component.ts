import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  url: string = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.3333506569!2d2.1831743753102844!3d41.410281894575924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a327ef5853f1%3A0x87a2e415d6c7b8c6!2sC%2F%20de%20Sibelius%2C%205%2C%2008026%20Barcelona!5e0!3m2!1ses!2ses!4v1684834836811!5m2!1ses!2ses";
  urlSafe!: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url)
  }

  ngOninit() {
  }

}
