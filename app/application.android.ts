import { mySettings } from '~/my-config';

declare const android: any;

@JavaProxy("com.tns.MyCustomApplication")
class Application extends android.app.Application {
    public onCreate(): void {
        super.onCreate();

        console.log('======== oncreate application value', mySettings.envKey);
    }

    public attachBaseContext(baseContext: any) {
        super.attachBaseContext(baseContext);

        // This code enables MultiDex support for the application (if needed)
        android.support.multidex.MultiDex.install(this);
    }
}