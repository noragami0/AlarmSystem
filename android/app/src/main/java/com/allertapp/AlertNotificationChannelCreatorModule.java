package com.allertapp;


import android.app.NotificationChannel;

import android.app.NotificationManager;
import android.content.ContentResolver;
import android.content.Intent;
import android.media.AudioAttributes;
import android.net.Uri;
import android.os.Build;
import android.provider.Settings;

import androidx.core.app.NotificationCompat;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class AlertNotificationChannelCreatorModule extends ReactContextBaseJavaModule {
    AlertNotificationChannelCreatorModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "AlertNotificationChannelCreatorModule";
    }

    @ReactMethod
    public void createChannelStart(String sound) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            NotificationChannel notificationChannel = new NotificationChannel("alert_start", "Alert App Start Alarm", NotificationManager.IMPORTANCE_HIGH);
            notificationChannel.setShowBadge(true);
            notificationChannel.setDescription("");
            AudioAttributes att = new AudioAttributes.Builder()
                    .setUsage(AudioAttributes.USAGE_NOTIFICATION)
                    .setContentType(AudioAttributes.CONTENT_TYPE_SPEECH)
                    .build();
            notificationChannel.setSound(Uri.parse(ContentResolver.SCHEME_ANDROID_RESOURCE + "://" + getCurrentActivity().getPackageName() + "/raw/" + sound), att);
            notificationChannel.enableVibration(true);
            notificationChannel.setVibrationPattern(new long[]{400, 400});
            notificationChannel.setLockscreenVisibility(NotificationCompat.VISIBILITY_PUBLIC);
            NotificationManager manager = getCurrentActivity().getSystemService(NotificationManager.class);
            if (manager.getNotificationChannel("alert_start") != null) {
                Intent intent = new Intent(Settings.ACTION_CHANNEL_NOTIFICATION_SETTINGS);
                intent.putExtra(Settings.EXTRA_APP_PACKAGE, getCurrentActivity().getPackageName());
                intent.putExtra(Settings.EXTRA_CHANNEL_ID, "alert_start");
                getCurrentActivity().startActivity(intent);
                return;
            }
            manager.createNotificationChannel(notificationChannel);
        }
    }

    @ReactMethod
    public void createChannelEnd(String sound) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            NotificationChannel notificationChannel = new NotificationChannel("alert_end", "Alert App End Alarm", NotificationManager.IMPORTANCE_HIGH);
            notificationChannel.setShowBadge(true);
            notificationChannel.setDescription("");
            AudioAttributes att = new AudioAttributes.Builder()
                    .setUsage(AudioAttributes.USAGE_NOTIFICATION)
                    .setContentType(AudioAttributes.CONTENT_TYPE_SPEECH)
                    .build();
            notificationChannel.setSound(Uri.parse(ContentResolver.SCHEME_ANDROID_RESOURCE + "://" + getCurrentActivity().getPackageName() + "/raw/" + sound), att);
            notificationChannel.enableVibration(true);
            notificationChannel.setVibrationPattern(new long[]{400, 400});
            notificationChannel.setLockscreenVisibility(NotificationCompat.VISIBILITY_PUBLIC);
            NotificationManager manager = getCurrentActivity().getSystemService(NotificationManager.class);
            if (manager.getNotificationChannel("alert_end") != null) {
                Intent intent = new Intent(Settings.ACTION_CHANNEL_NOTIFICATION_SETTINGS);
                intent.putExtra(Settings.EXTRA_APP_PACKAGE, getCurrentActivity().getPackageName());
                intent.putExtra(Settings.EXTRA_CHANNEL_ID, "alert_end");
                getCurrentActivity().startActivity(intent);
                return;
            }
            manager.createNotificationChannel(notificationChannel);
        }
    }
}
