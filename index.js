var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from "@ionic-native/core";
var PaystackCordova2Original = /** @class */ (function (_super) {
    __extends(PaystackCordova2Original, _super);
    function PaystackCordova2Original() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaystackCordova2Original.prototype.chargeCard = function (arg1) { return cordova(this, "chargeCard", {}, arguments); };
    PaystackCordova2Original.prototype.chargeCardWithAccessCode = function (arg1) { return cordova(this, "chargeCardWithAccessCode", {}, arguments); };
    PaystackCordova2Original.pluginName = "PaystackCordovaV2";
    PaystackCordova2Original.plugin = "com.mrfoh.paystackcordova.v2";
    PaystackCordova2Original.pluginRef = "plugins.paystackCordova";
    PaystackCordova2Original.repo = "https://github.com/mrfoh/paystackcordovav2.git";
    PaystackCordova2Original.install = "";
    PaystackCordova2Original.installVariables = [];
    PaystackCordova2Original.platforms = ["Android"];
    return PaystackCordova2Original;
}(IonicNativePlugin));
var PaystackCordova2 = new PaystackCordova2Original();
export { PaystackCordova2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3BheXN0YWNrLWNvcmRvdmEtMi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFPTixNQUFNLG9CQUFvQixDQUFDOztJQWtDVSxvQ0FBaUI7Ozs7SUFPckQscUNBQVUsYUFBQyxJQUFTO0lBVXBCLG1EQUF3QixhQUFDLElBQVM7Ozs7Ozs7OzJCQTNEcEM7RUEwQ3NDLGlCQUFpQjtTQUExQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICBQbHVnaW4sXHJcbiAgQ29yZG92YSxcclxuICBDb3Jkb3ZhUHJvcGVydHksXHJcbiAgQ29yZG92YUluc3RhbmNlLFxyXG4gIEluc3RhbmNlUHJvcGVydHksXHJcbiAgSW9uaWNOYXRpdmVQbHVnaW5cclxufSBmcm9tIFwiQGlvbmljLW5hdGl2ZS9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFBheXN0YWNrIENvcmRvdmEyXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBzZXJ2ZXMgYXMgYW4gaW9uaWMgbmF0aXZlIHdyYXBwZXIgZm9yIFBheXN0YWNrQ29yZG92YTJcclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgUGF5c3RhY2tDb3Jkb3ZhMiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvcGF5c3RhY2stY29yZG92YS0yJztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBwYXlzdGFja0NvcmRvdmEyOiBQYXlzdGFja0NvcmRvdmEyKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMucGF5c3RhY2tDb3Jkb3ZhMi5mdW5jdGlvbk5hbWUoJ0hlbGxvJywgMTIzKVxyXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiBcIlBheXN0YWNrQ29yZG92YVYyXCIsXHJcbiAgcGx1Z2luOiBcImNvbS5tcmZvaC5wYXlzdGFja2NvcmRvdmEudjJcIixcclxuICBwbHVnaW5SZWY6IFwicGx1Z2lucy5wYXlzdGFja0NvcmRvdmFcIixcclxuICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9tcmZvaC9wYXlzdGFja2NvcmRvdmF2Mi5naXRcIixcclxuICBpbnN0YWxsOiBcIlwiLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcclxuICBpbnN0YWxsVmFyaWFibGVzOiBbXSwgLy8gT1BUSU9OQUwgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcclxuICBwbGF0Zm9ybXM6IFtcIkFuZHJvaWRcIl0gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBheXN0YWNrQ29yZG92YTIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiBjcmVhdGVzIGEgb25lLXRpbWUgY2hhcmdlIG9uIGEgY2FyZFxyXG4gICAqIEBwYXJhbSBhcmcxIHtvYmplY3R9IENoYXJnZSBjYXJkIG9wdGlvbnNcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBjYXJkIGhhcyBiZWVuIGNoYXJnZWRcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgY2hhcmdlQ2FyZChhcmcxOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gY2hhcmdlcyBhIGNhcmQgdXNpbmcgYSBQYXlzdGFjayBhY2Nlc3NfdG9rZW4gYW5kIGEgY3VzdG9tZXIncyBjYXJkJ3MgZGV0YWlsczsgY2FyZCBudW1iZXIsIGV4cGlyeSBtb250aCwgeWVhciBhbmQgY3ZjIG51bWJlci5cclxuICAgKiBAcGFyYW0gYXJnMSB7b2JqZWN0fSBDaGFyZ2UgY2FyZCBvcHRpb25zXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gY2FyZCBoYXMgYmVlbiBjaGFyZ2VkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGNoYXJnZUNhcmRXaXRoQWNjZXNzQ29kZShhcmcxOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcclxuICB9XHJcbn1cclxuIl19