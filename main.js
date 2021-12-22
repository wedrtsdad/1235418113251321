function to_do(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/uhWlH1H8S/model.json',dance);
}

function dance(){
    classifier.classify(animal);
}

function animal(error , results){

    if(error){
        console.error(error);
    }
    
    if(results){

        document.getElementById("can_hear").innerHTML=  results[0].label;
        document.getElementById("%").innerHTML= (results[0].confidence * 100).toFixed(2);

        img  = document.getElementById("animal");
        
        if(results[0].label == "cow"){
            img.src="cow.png";
        }

            else if(results[0].label == "goat"){
               img.src="goat.png";
            }

            else if(results[0].label == "housefly"){
                img.src="housefly.png";
            }

            else if(results[0].label == "dog"){
                img.src="dog.png";
            }

            else if(results[0].label == "cat"){
                img.src="cat.png";
            }

            else{
                
            }
    }

   
}