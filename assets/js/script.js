$(function() {
  if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){

        var body = document.body,
            cursor = document.createElement("div"),
            follower = document.createElement("div");

        cursor.id = "cursor";
        follower.id = "follower";

        body.appendChild(cursor);
        body.appendChild(follower);

        body.addEventListener("mousemove", function(e) {
              cursor.style.left = e.clientX + "px";
              cursor.style.top = e.clientY + "px";
              follower.style.left = e.clientX + "px";
              follower.style.top = e.clientY + "px";
        }, false);

        $("a").on("mouseenter", function() {
            $('#cursor').addClass("active");
            $('#follower').addClass("active");
        });

        $("a").on("mouseleave", function() {
            $('#cursor').removeClass("active");
            $('#follower').removeClass("active");
        });

  }
})
