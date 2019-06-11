import { IonicNativePlugin } from "@ionic-native/core";
/**
 * @name Paystack Cordova2
 * @description
 * This plugin serves as an ionic native wrapper for PaystackCordova2
 *
 * @usage
 * ```typescript
 * import { PaystackCordova2 } from '@ionic-native/paystack-cordova-2';
 *
 *
 * constructor(private paystackCordova2: PaystackCordova2) { }
 *
 * ...
 *
 *
 * this.paystackCordova2.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class PaystackCordova2 extends IonicNativePlugin {
    /**
     * This function creates a one-time charge on a card
     * @param arg1 {object} Charge card options
     * @return {Promise<any>} Returns a promise that resolves when card has been charged
     */
    chargeCard(arg1: any): Promise<any>;
    /**
     * This function charges a card using a Paystack access_token and a customer's card's details; card number, expiry month, year and cvc number.
     * @param arg1 {object} Charge card options
     * @return {Promise<any>} Returns a promise that resolves when card has been charged
     */
    chargeCardWithAccessCode(arg1: any): Promise<any>;
}
