import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { NaissancePage } from '../naissance/naissance';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab1Root = NaissancePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
