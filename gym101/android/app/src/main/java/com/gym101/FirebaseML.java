package com.gym101;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import java.lang.System;
import java.util.Map;
import java.util.HashMap;
import android.widget.Toast;

public class FirebaseML extends ReactContextBaseJavaModule {

    public FirebaseML(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "FirebaseML";
    }

    @ReactMethod
    public void show(
      String message,
      Callback errorCallback,
      Callback successCallback) {
        Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_LONG).show();
        successCallback.invoke(message);
    }

}