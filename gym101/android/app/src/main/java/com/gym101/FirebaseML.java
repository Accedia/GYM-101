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
import com.google.firebase.ml.common.FirebaseMLException;

import com.google.firebase.ml.vision.common.FirebaseVisionImage;
import com.google.firebase.ml.vision.label.FirebaseVisionImageLabeler;
import com.google.firebase.ml.vision.label.FirebaseVisionOnDeviceAutoMLImageLabelerOptions;
import com.google.firebase.ml.vision.FirebaseVision;
import java.io.IOException;

import com.google.firebase.ml.vision.label.FirebaseVisionImageLabel;
import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;
import java.util.List;
import android.support.annotation.NonNull;


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

        // Toast.makeText(getReactApplicationContext(), filePath, Toast.LENGTH_LONG).show();
        FirebaseVisionImage image;
        try {
            image = FirebaseVisionImage.fromFilePath(getCurrentActivity(), Uri.parse(filePath));

            FirebaseVisionOnDeviceAutoMLImageLabelerOptions labelerOptions =
              new FirebaseVisionOnDeviceAutoMLImageLabelerOptions.Builder()
                .setRemoteModelName("fitness_appliances_2019515153632")
                .setConfidenceThreshold(0.5f)
                .build();
            FirebaseVisionImageLabeler labeler = FirebaseVision.getInstance().getOnDeviceAutoMLImageLabeler(labelerOptions);



            labeler.processImage(image)
            .addOnSuccessListener(new OnSuccessListener<List<FirebaseVisionImageLabel>>() {
              @Override
              public void onSuccess(List<FirebaseVisionImageLabel> labels) {
              Toast.makeText(getReactApplicationContext(), "2", Toast.LENGTH_LONG).show();

                successCallback.invoke(labels);
              }
            })
            .addOnFailureListener(new OnFailureListener() {
              @Override
              public void onFailure(@NonNull Exception e) {
                errorCallback.invoke("OnFailureListener " + e.getMessage());

                Toast.makeText(getReactApplicationContext(), "3", Toast.LENGTH_LONG).show();
                
              }
            });
        } catch (IOException e) {
          errorCallback.invoke(e.getMessage());
        } catch (FirebaseMLException e) {
          errorCallback.invoke(e.getMessage());
        }
    }

}