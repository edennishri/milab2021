package com.example.mynotifyingapplication;

import android.app.IntentService;
import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.os.IBinder;
import android.widget.Toast;

import androidx.annotation.Nullable;
import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationManagerCompat;

public class MyService extends IntentService {




    public MyService(){
        super("Eden");
    }


    @Override
    protected void onHandleIntent(Intent intent) {
        //Toast.makeText(this, "service started",Toast.LENGTH_LONG).show();

        //pick a random quote
        String chuckQuote = ChuckQuotes.getRandomQuote();

        // building a notification that shows it
        NotificationCompat.Builder builder = new NotificationCompat.Builder(
                this, "My Notification");
        builder.setContentTitle("Chuck Joke");
        builder.setContentText(chuckQuote);
        builder.setSmallIcon(R.drawable.ic_launcher_background);
        builder.setAutoCancel(true);

        //adding the notification
        NotificationManagerCompat notificationManagerCompat = NotificationManagerCompat.from(this);
        notificationManagerCompat.notify(1, builder.build());

    }


}