function chooseSuperhero(e){
  var charPlaying="userclick1";

  if(click==="batmanImg")
  {
      $("charPlaying").animate({
        top: "-=200px"}, "normal");
  }
  else if(click==="supermanImg")
  {
      $("charPlaying").animate({
          top:  "-=200px"}, "normal");
      }
  else if(click=="princessImg")
  {
      $("charPlaying").animate({
          top: "-=200px"}, "normal");
      }
  else if(click=="pinkImg")
  {
      $("charPlaying").animate({
          top: "-=200px"}, "normal");
      }
      $("image").click(function(){
        $(this).data('clicked', true);
        if($('#element').data('clicked')) {
          alert('yes');
      }
    });

  var el = document.getElementById("supermanImg")
  el.addEventListener("click")}

    var enemyPlaying1="userclick2";
    var enemyPlaying2="userclick3";
    var enemyPlaying3="userclick4";
    var enemyPlaying4="userclick5";

document.onkeyup=function(click){
    var userclick=event.click;
    
    }
    
    

    // Visibility Buttons
      // ==================

      // Make Visible
      $(".vis-button").on("click", function() {
        $(".captain-planet").animate({
          opacity: "1"
        });
      });

      // Make Invisible
      $(".invis-button").on("click", function() {
        $(".captain-planet").animate({
          opacity: "0.05"
        });
      });

      // Move Buttons
      // ============

      // Move Character Playing upward 
      $(".up-button").on("click", function() {
        $("charPlaying").animate({
          top: "-=200px"
        }, "normal");
      });

      // Move Character Playing Downward
      $(".down-button").on("click", function() {
        $(".captain-planet").animate({
          top: "+=200px"
        }, "normal");
      });

      // Move Character Playing Leftward
      $(".left-button").on("click", function() {
        $(".captain-planet").animate({
          left: "-=200px"
        }, "normal");
      });

      // Move Character Playing to the Right
      $(".right-button").on("click", function() {
        $(".captain-planet").animate({
          left: "+=200px"
        }, "normal");
      });

      // Bring Character Playing Back to His First Position
      $(".back-button").on("click", function() {
        $(".captain-planet").animate({
          top: "50px",
          left: "80px"
        }, "fast");
      });

      // Move Events for Keyboard Presses
      // ============================

      // Keyboard Up
      $(document).keyup(function(e) {
        switch (e.which) {
        case 38:
          $(".captain-planet").animate({
            top: "-=200px"
          }, "normal");
        }
      });

      // Keyboard Down
      $(document).keyup(function(e) {
        switch (e.which) {
        case 40:
          $(".captain-planet").animate({
            top: "+=200px"
          }, "normal");
        }
      });

      // Keyboard Left
      $(document).keyup(function(e) {
        switch (e.which) {
        case 37:
          $(".captain-planet").animate({
            left: "-=200px"
          }, "normal");
        }
      });

      // Keyboard Right
      $(document).keyup(function(e) {
        switch (e.which) {
        case 39:
          $(".captain-planet").animate({
            left: "+=200px"
          }, "normal");
        }
      });
  