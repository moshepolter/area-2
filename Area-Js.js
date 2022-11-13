function cal(run){ 

    const input1 = document.getElementById("lenrec").value;
    const inpu2 = document.getElementById("widrec").value;
    const height = document.getElementById("hrec").value;



    if (run === "trapezoid") {
      if (height <= 0 || input1 <= 0 || inpu2 <= 0) {
        alert("you must input base1, bse2 and height to get results (numbers cant be negative)")
      }
      else {
        alert(input1 + inpu2 / 2 * height + " sq.ft");
      }
    }
    if (run === "rectangle") {
      if (input1 <= 0 || inpu2 <= 0) {

      alert("you must enter Length and Width to get results (numbers cant be negative)")
    }
      else{
      alert(input1 * inpu2 + " sq.ft")
    }
    }
    if(run === "triangle"){
      if(input1 <= 0 || height <= 0){
        alert("base1 and hieght must be filled in to get results")
      }
      else{
      alert(input1 * height / 2 + " sq.ft")
    }
    }
    if (run == "square") {
      if (input1 <= 0) {
        alert("side mustbe filled in to get results")
      }
      else{
      alert(input1 * input1 + " sq.ft")
      }
    }
    if (run == "circle") {
      if (inpu2 <= 0) {
        alert("radius must be filled in to get results")
      }
      else{
      alert(3.14 * (inpu2 * inpu2) + " sq.ft")
    }
    }
    if (run == "parallelogram") {
      if (input1 <= 0 || height <= 0) {
        alert("you must fill in base1 and hieght to get results")
      } else {
        alert(input1 * height || inpu2 * height+" sq. ft");
      }
    }
};
