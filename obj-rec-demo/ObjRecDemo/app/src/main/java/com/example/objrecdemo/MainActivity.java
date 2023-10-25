package com.example.objrecdemo;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.util.Base64;
import android.view.View;
import android.widget.TextView;

import androidx.activity.result.ActivityResult;
import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.contract.ActivityResultContracts;
import androidx.appcompat.app.AppCompatActivity;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.*;
import com.google.protobuf.ByteString;
import java.util.List;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;
import java.security.Security;
import org.conscrypt.Conscrypt;



public class MainActivity extends AppCompatActivity {

    private final Executor executor = Executors.newSingleThreadExecutor();
    private final Handler handler = new Handler(Looper.getMainLooper());

    static {
        Security.insertProviderAt(Conscrypt.newProvider(), 1);
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void launchImageCapture(View view) {
        Intent intent = new Intent(this, CaptureImageActivity.class);
        someActivityResultLauncher.launch(intent);
    }

    ActivityResultLauncher<Intent> someActivityResultLauncher =
            registerForActivityResult(
                    new ActivityResultContracts.StartActivityForResult(),
                    result -> {
                        if (result.getResultCode() == Activity.RESULT_OK) {
                            Intent data = result.getData();
                            String imageString = data.getStringExtra("imageString");
                            processImage(imageString);
                        }
                    }
            );

    private void processImage(String imageBase64) {
        executor.execute(() -> {
            V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
                    .withCallCredentials(new ClarifaiCallCredentials("cc7efd10868f4d2882da065a31558673"));

            String PAT = "cc7efd10868f4d2882da065a31558673";
            String USER_ID = "clarifai";
            String APP_ID = "main";
            String MODEL_ID = "food-item-recognition";
            String MODEL_VERSION_ID = "1d5fd481e0cf4826aa72ec3ff049e044";

            MultiOutputResponse response = stub.postModelOutputs(
                    PostModelOutputsRequest.newBuilder()
                            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
                            .setModelId(MODEL_ID)
                            .setVersionId(MODEL_VERSION_ID)
                            .addInputs(
                                    Input.newBuilder().setData(
                                            Data.newBuilder().setImage(
                                                    Image.newBuilder().setBase64(
                                                            ByteString.copyFrom(Base64.decode(imageBase64, Base64.DEFAULT))
                                                    )
                                            )
                                    )
                            )
                            .build()
            );

            System.out.println("image processing complete");

            handler.post(() -> handleResponse(response));
        });
    }

    private void handleResponse(MultiOutputResponse response) {
        // Find the TextView in the layout
        TextView textView = findViewById(R.id.textView);

        if (response != null) {
            List<Output> outputs = response.getOutputsList();
            for (Output output : outputs) {
                List<Concept> concepts = output.getData().getConceptsList();
                StringBuilder conceptStr = new StringBuilder();
                for (Concept concept : concepts) {
                    // Access the concept name and value
                    String name = concept.getName();
                    float value = concept.getValue();
                    // Append each concept to the StringBuilder
                    conceptStr.append(name).append(": ").append(value).append("\n");
                }
                // Update the TextView with the concept values
                textView.setText(conceptStr.toString());

                System.out.println(conceptStr.toString());
            }
            System.out.println("no outputs in response");
            System.out.println("response: " + response.toString());
        } else {
            textView.setText("no response");

            System.out.println("no response");
        }
    }

}
