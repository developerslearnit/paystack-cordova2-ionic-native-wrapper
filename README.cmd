# Paystack-cordova-2 Ionic-Native Wrapper


Paystack-cordova-2 ionic-native plugin is a library of [PaystackCordova2 plugins](https://github.com/mrfoh/paystackcordovav2) by [Patrick Foh Jr](https://github.com/mrfoh)  that make it easy to add native functionality to any Ionic app.

Installation
------------

1. Clone this repository into a folder name paystack-cordova-2 by running this command:

   git clone https://github.com/developerslearnit/paystack-cordova2-ionic-native-wrapper.git paystack-cordova-2

2. Copy the folder to your app's node_modules under the `@ionic-native` directory


# Usage

#### Ionic/Angular apps
To use a plugin, import and add the plugin provider to your `@NgModule`, and then inject it where you wish to use it. 
Make sure to import the injectable class from the `/ngx` directory as shown in the following examples:

```typescript
// app.module.ts
 import { PaystackCordova2 } from '@ionic-native/paystack-cordova-2/ngx';

...

@NgModule({
  ...

  providers: [
    ...
    PaystackCordova2
    ...
  ]
  ...
})
export class AppModule { }
```


```typescript
 import { PaystackCordova2 } from '@ionic-native/paystack-cordova-2/ngx';
import { Platform } from 'ionic-angular';

@Component({ ... })
export class MyComponent {

  constructor(private paystackCordova: PaystackCordova2, private platform: Platform) {

    this.platform.ready().then(() => {

	//Charge Card
	
	 var options = {
      card_number: "5060666666666666666",
      expiry_month: 7,
      expiry_year: 2019,
      cvc: 123,
      email: "john.doe@acme.com",
      amount: 50000
    };

    this.paystackCordova
      .chargeCard(options)
      .then(res => {
        console.log("res", res);
       
      })
      .catch(err => {
        console.log("err", err);
        
      });
    
    });
	
	

  }

}
```