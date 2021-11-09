var skills = {
    ht: 90,
    cs: 80,
    js: 60,
    jq: 70,
    nd: 50,
  };
  
  $.each(skills, function(key, value) {
    var skillbar = $("." + key);
  
    skillbar.animate(
      {
        width: value + "%"
      },
      3000,
      function() {
        $(".speech-bubble").fadeIn();
      }
    );
  }); 