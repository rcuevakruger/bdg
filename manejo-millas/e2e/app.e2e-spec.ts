/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AngularTestPage } from './app.po';
import { ExpectedConditions, browser, element, by } from 'protractor';
import {} from 'jasmine';


describe('Starting tests for manejo-millas', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be manejo-millas', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('manejo-millas');
    })
  });

  it('network-name should be manejo-millas@0.2.6-deploy.5',() => {
    element(by.css('.network-name')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('manejo-millas@0.2.6-deploy.5.bna');
    });
  });

  it('navbar-brand should be manejo-millas',() => {
    element(by.css('.navbar-brand')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('manejo-millas');
    });
  });

  
    it('Billetera component should be loadable',() => {
      page.navigateTo('/Billetera');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Billetera');
      });
    });

    it('Billetera table should have 4 columns',() => {
      page.navigateTo('/Billetera');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('Propietario component should be loadable',() => {
      page.navigateTo('/Propietario');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Propietario');
      });
    });

    it('Propietario table should have 5 columns',() => {
      page.navigateTo('/Propietario');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });
  
    it('Cliente component should be loadable',() => {
      page.navigateTo('/Cliente');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Cliente');
      });
    });

    it('Cliente table should have 6 columns',() => {
      page.navigateTo('/Cliente');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(6); // Addition of 1 for 'Action' column
      });
    });
  
    it('Comercio component should be loadable',() => {
      page.navigateTo('/Comercio');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Comercio');
      });
    });

    it('Comercio table should have 6 columns',() => {
      page.navigateTo('/Comercio');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(6); // Addition of 1 for 'Action' column
      });
    });
  
    it('Emisor component should be loadable',() => {
      page.navigateTo('/Emisor');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Emisor');
      });
    });

    it('Emisor table should have 6 columns',() => {
      page.navigateTo('/Emisor');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(6); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('AcreditarMillas component should be loadable',() => {
      page.navigateTo('/AcreditarMillas');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('AcreditarMillas');
      });
    });
  
    it('CambiarMillas component should be loadable',() => {
      page.navigateTo('/CambiarMillas');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('CambiarMillas');
      });
    });
  
    it('CobrarMillas component should be loadable',() => {
      page.navigateTo('/CobrarMillas');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('CobrarMillas');
      });
    });
  

});