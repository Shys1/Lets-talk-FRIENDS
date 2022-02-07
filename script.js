$("button").click(function() {
    let response = $("input").val();
    if (response === "rachel"){
        $(".final").text("You are Rachel! Rachel is the best friend of Monica and Phoebe. She is quirky, fashionable, and irresponsible.");
          }
    else if (response === "ross"){
        $(".final").text("You are Ross! Ross is the best friend of Chandler and Joey. He is nerdy, arrogant, and indominable");
          }
    else if (response === "monica"){
        $(".final").text("You are Monica! Monica is the best friend of Rachel and Phoebe. She is energetic, a clean freak, and compulsive");
          }
    else if (response === "chandler"){
        $(".final").text("You are Chandler! Chandler is the best friend of Joey and Ross. He is funny, immature, and passionate");
          }
    else if (response === "phoebe"){
        $(".final").text("You are Phoebe! Phoebe is the friend of Monica and Rachel. She is an Odd Guitar Player and she is earthly and childish");
          }
    else{
        $(".final").text("You are Joey! He is best friends with Ross and Chandler and he is always hungry, caring, and protective.");
    }
});