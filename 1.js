
        function seffaf() {
            let a = document.getElementById("opacity").value;
            localStorage.setItem("acar", a);
        }
        function radius() {
            let b = document.getElementById("rad").value;
            localStorage.setItem("acar1", b+"%");
        }

        function yeri(n){
            switch(n){
                case "left":
                    let c = "start";
                    localStorage.setItem("acar3", c);
                break;
                case "right":
                    let d ="2"; 
                    localStorage.setItem("acar3", d);
                break;
            }
        }
        document.getElementById("nav").style.order= localStorage.getItem("acar3");
    

        document.getElementById("img1").style.opacity = localStorage.getItem("acar");
        document.getElementById("img2").style.opacity = localStorage.getItem("acar");
        document.getElementById("img3").style.opacity = localStorage.getItem("acar");
        document.getElementById("img4").style.opacity = localStorage.getItem("acar");
        document.getElementById("img5").style.opacity = localStorage.getItem("acar");
        document.getElementById("img6").style.opacity = localStorage.getItem("acar");
        document.getElementById("img7").style.opacity = localStorage.getItem("acar");
        document.getElementById("img8").style.opacity = localStorage.getItem("acar");

        document.getElementById("img1").style.borderRadius = localStorage.getItem("acar1");
        document.getElementById("img2").style.borderRadius = localStorage.getItem("acar1");
        document.getElementById("img3").style.borderRadius = localStorage.getItem("acar1");
        document.getElementById("img4").style.borderRadius = localStorage.getItem("acar1");
        document.getElementById("img5").style.borderRadius = localStorage.getItem("acar1");
        document.getElementById("img6").style.borderRadius = localStorage.getItem("acar1");
        document.getElementById("img7").style.borderRadius = localStorage.getItem("acar1");
        document.getElementById("img8").style.borderRadius = localStorage.getItem("acar1");

        document.getElementById("nav").style.order= localStorage.getItem("acar3");
        

