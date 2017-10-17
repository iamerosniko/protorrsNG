export class AppSettings {
    public static CURRENT_URL = "http://localhost:61294/ESDALVERER/"
    //public static CURRENT_URL= "ESDALVERER/"
    //public static CURRENT_URL= "https://protoreservation.azurewebsites.net/ESDALVERER/"
    
    public static GETAPIURL(controller:string):string{
        return this.CURRENT_URL+controller;
    }
    
    public static handleError(error: any): Promise<any> {
        //console.error('An error occurred', error); // for demo purposes only
        //return Promise.reject(error.message || error);
        return new Promise<any>((resolve)=>resolve(null))
    }


}
