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

import android.content.Context;
import android.net.Uri;
import com.google.firebase.ml.common.modeldownload.FirebaseModelDownloadConditions;
import com.google.firebase.ml.common.modeldownload.FirebaseRemoteModel;
import com.google.firebase.ml.common.modeldownload.FirebaseModelManager;

import com.google.firebase.ml.vision.common.FirebaseVisionImage;

import java.io.IOException;



public class FirebaseML extends ReactContextBaseJavaModule {

    public FirebaseML(ReactApplicationContext reactContext) {
      super(reactContext);

        
      FirebaseModelDownloadConditions conditions = new FirebaseModelDownloadConditions.Builder()
        .requireWifi()
        .build();

      FirebaseRemoteModel remoteModel = new FirebaseRemoteModel.Builder("fitness_appliances_2019515153632")
        .enableModelUpdates(true)
        .setInitialDownloadConditions(conditions)
        .setUpdatesDownloadConditions(conditions)
        .build();
      
      FirebaseModelManager.getInstance().registerRemoteModel(remoteModel);
    }

    @Override
    public String getName() {
        return "FirebaseML";
    }

    @ReactMethod
    public void show(
      String filePath,
      Callback errorCallback,
      Callback successCallback) {

        Toast.makeText(getReactApplicationContext(), filePath, Toast.LENGTH_LONG).show();
        FirebaseVisionImage image;
        try {
            image = FirebaseVisionImage.fromFilePath(getCurrentActivity(), Uri.parse(filePath));
            successCallback.invoke(filePath);
        } catch (IOException e) {
          errorCallback.invoke(e.getMessage());
        }
    }

}