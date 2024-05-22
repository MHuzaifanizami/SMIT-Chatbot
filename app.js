var list = document.getElementById("chat-box");
var loadImage = document.getElementById("animate")

// English data 
var greetEnglish = ['hey', 'hello', 'hey', 'hi', 'hai', 'helo', 'hii',];

var admissionEnglish = ['i need admission', 'you have admission', 'you have any admission?', 'is your admission is open?', 'how i get admission', 'i want admission', 'i want admission in smit', 'i want admission in saylani', 'i want to learn in smit', 'how i get admission', 'how i get admission', 'can i get admission?', 'i need information about smit'];





// urdu data 
var islamicGreeting = ['salam', 'assalamualaikum',];

var urduAdmission = ['admission lena ha ', 'admission chaie', 'admission hain?', 'admission ha', 'admission ha ?', 'admission open ha?', 'admission open ha ?', 'admission hoga?', 'admission karwana ha', 'admission karwana tha', 'muje admission lena tha', 'muje admission chaie', 'muje dakhla chaie', 'dakhla ha ?'];








// send msg via enter btn 
function sendMsg() {
    if (event.keyCode == 13) {
        var value = event.target.value
        console.log(value);
        list.innerHTML += "<li id='user'>" + value + "</li>"


        if (greetEnglish.indexOf(value.toLowerCase()) !== -1) {

            setTimeout(function () {

                list.innerHTML += "<li id='robot'>Hello !</li>"
            }, 2000);

            setTimeout(function () {
                loadImage.style.display = "none";
                list.innerHTML += "<li id='robot'>How may i help you ?</li>"
            }, 3000);
        } else if (islamicGreeting.indexOf(value.toLowerCase()) !== -1) {

            setTimeout(function () {

                list.innerHTML += "<li id='robot'>W Salam</li>"
            }, 2000);

            setTimeout(function () {
                loadImage.style.display = "none";
                list.innerHTML += "<li id='robot'>Me Apki kia Madad kr sakta ho ?</li>"
            }, 3000);
        } else if (admissionEnglish.indexOf(value.toLowerCase()) !== -1) {

            setTimeout(function () {

                list.innerHTML += "<li id='robot'>Okay</li>"
            }, 2000);

            setTimeout(function () {
                loadImage.style.display = "none";
                list.innerHTML += "<li id='robot'>Which Course are you interested in ?</li>"
            }, 3000);

        } else if (urduAdmission.indexOf(value.toLowerCase()) !== -1) {

            setTimeout(function () {

                list.innerHTML += "<li id='robot'>Acha ji</li>"
            }, 2000);

            setTimeout(function () {
            
                list.innerHTML += "<li id='robot'>Ap kis Course me dil chaspi rakhte hain ?</li>"
            }, 3000);

            setTimeout(function () {
                

                list.innerHTML += `<button class ='course-btn' onclick ='courseButton()'> Web Development </button> <br>`
                list.innerHTML += `<button class ='course-btn'> Graphic desighning </button> <br>`
                list.innerHTML += `<button class ='course-btn'> Vedio Animation </button> <br>`
                list.innerHTML += `<button class ='course-btn'> Paython</button> <br>`
                list.innerHTML += `<button class ='course-btn'> Techno Kids </button> <br>`
            }, 3000);

        }else {
            setTimeout(function () {

                list.innerHTML += "<li id='robot'>Sorry , I can't Understand</li>"
            }, 2000);
        }


        event.target.value = ""
    }



    // send msg via icon 
    function senbBtn() {

        var input = document.getElementById("input").value;
        var value = input
        console.log(value);
        if (value) {

            list.innerHTML += "<li id='user'>" + value + "</li>";
            

            if (greetEnglish.indexOf(value.toLowerCase()) !== -1) {

                setTimeout(function () {

                    list.innerHTML += "<li id='robot'>Hello !</li>"
                }, 2000);

                setTimeout(function () {
                    loadImage.style.display = "none";
                    list.innerHTML += "<li id='robot'>How may i help you ?</li>"
                }, 3000);
            } else {
                setTimeout(function () {

                    list.innerHTML += "<li id='robot'>Sorry , I can't Understand</li>"
                }, 2000);
            }


            event.target.value = ""
        }
    }
}


// function courseButton(){

//   var courseBtn = document.getElementsByClassName("course-btn").innerHTML;

// console.log(courseBtn)
// }

function courseButton() {
    var courseBtns = document.getElementsByClassName("course-btn");
    for (var i = 0; i < courseBtns.length; i++) {
      courseBtns[i].addEventListener("click", function() {
        var buttonText = this.textContent; 
        list.innerHTML += "<li id='user'>" + buttonText + "</li>";
      });
    }
  }
  