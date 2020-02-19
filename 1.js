
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

        for(let i = 0; i<=7; i++){
        document.getElementsByClassName("img1")[i].style.opacity = localStorage.getItem("acar");
        document.getElementsByClassName("img1")[i].style.borderRadius = localStorage.getItem("acar1");
    }
        document.getElementById("nav").style.order= localStorage.getItem("acar3");

   