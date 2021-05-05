prediction_1="";
prediction_2="";
Webcam.set(
width=350,   
height=300,
image_format="png",
png_quality="90", 
)
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="captured_image" src=" '+data_uri+'"/>';
}    
)}
console.log("ml5 version:",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/sg4vqzo20/model.json",ModelLoaded);
function ModelLoaded(){
    console.log("ModelLoaded");
}
function speak(){
var synth=window.SpeechSynthesis;
speak_data_1="The first prediction is" +prediction_1;  
speak_data_2="The second prediction is" +prediction_2;  
var UtterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
synth.speak(UtterThis);
}
function check(){
    img=document.getElementById("captured_image");
classifier.classify(captured_image,GotResult);   
}
function GotResult(error,results){
    if (error){
     console.log("error");   
    }   
    else{
   document.getElementById("emotion_name1").innerHTML=results[0].label;
   document.getElementById("emotion_name2").innerHTML=results[1].label;
   prediction_1=results[0].label;    
   prediction_2=results[1].label;
   
    }
    if(results[0].label == "Fist"){
    document.getElementById("update_emoji").innerHTML="&#9994";    
    }
    if(results[0].label == "Amazing"){
       document.getElementById("update_emoji").innerHTML="&#128076";    
       }
       if(results[0].label == "Open Hand"){
           document.getElementById("update_emoji").innerHTML="&#9995";    
           }
           if(results[0].label == "Thumbs Up"){
               document.getElementById("update_emoji").innerHTML="&#128077";    
               }
               if(results[0].label == "Thumbs Down"){
                   document.getElementById("update_emoji").innerHTML="&#128078";    
                   }
                   if(results[1].label == "Fist"){
                    document.getElementById("update_emoji2").innerHTML="&#9994";    
                    }
                    if(results[1].label == "Amazing"){
                       document.getElementById("update_emoji2").innerHTML="&#128076";    
                       }
                       if(results[1].label == "Open Hand"){
                           document.getElementById("update_emoji2").innerHTML="&#9995";    
                           }
                           if(results[1].label == "Thumbs Up"){
                               document.getElementById("update_emoji2").innerHTML="&#128077";    
                               }
                               if(results[1].label == "Thumbs Down"){
                                   document.getElementById("update_emoji2").innerHTML="&#128078";    
                                   }
                
                          
   }