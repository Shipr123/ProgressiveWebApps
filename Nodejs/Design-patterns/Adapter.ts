interface Iphone {
    useLightining();
}
interface Android {
    useMicroUSB();
}



class Iphone7 implements Iphone{

    useLightining(){
     console.log('Using lighting port')
    }

}

class GooglePixel implements Android {

    useMicroUSB(){
        console.log('Using micro USB..')
    }
}

class IphoneToAndroid implements Android{
 iphoneDevice : Iphone

 constructor(iphone: Iphone){
     this.iphoneDevice=iphone
 }

 public useMicroUSB(){
     console.log('This is micro USB')
     this.iphoneDevice.useLightining()
 }


}

let device = new Iphone7()
let chargeAdapter = new IphoneToAndroid(device)
chargeAdapter.useMicroUSB()
