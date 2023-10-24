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

public class MainActivity extends AppCompatActivity {

    private final Executor executor = Executors.newSingleThreadExecutor();
    private final Handler handler = new Handler(Looper.getMainLooper());

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

            MultiOutputResponse response = stub.postModelOutputs(
                    PostModelOutputsRequest.newBuilder()
                            .setModelId("1d5fd481e0cf4826aa72ec3ff049e044")  // Model ID for General Model
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
            }
        }
    }

}
