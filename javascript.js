$(document).ready(function(){
$('.owl-carousel').owlCarousel(
  {
  item:3,
  nav:true,
  responsiveClass:true,
  // stagePadding: 50,
  autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    loop:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:1,
          nav:false
      },
      1000:{
          items:2,
          nav:true,
          loop:false
      }
  }
  }
  );
      });

      $(document).ready(function(){
         $('.carousel').carousel({
             interval:2000
         });
         $('#prev').click(function(){
             $("#mycar").carousel(2);
         })
         $('#next').click(function(){
             $("#mycar").carousel(0);
         })
      })
 
     $(document).ready(function(){
        $('.counter').counterUp({
    delay: 19,
    time: 1000
});

           $("#owl").waypoint(function(direction)
            {
               $("#owl").addClass("animate__animated animate__fadeInLeftBig  xxx")
            },{
              offset:"70%"
            }
            )

           $(".owlhead").waypoint(function(direction)
            {
               $(".owlhead").addClass("animate__animated animate__bounceInRight animate__slow head")
            },{
              offset:"70%"
            }
            )

           $("#gymheading").waypoint(function(direction)
            {
               $("#gymheading").addClass("animate__animated animate__bounceInRight animate__slow")
            },{
              offset:"70%"
            }
            )
           $("#join").waypoint(function(direction)
            {
               $("#join").addClass("animate__animated animate__shakeX bg-danger text-light animate__infinite animate__slow")
            },{
              offset:"70%"
            }
            )

           $(".photo").waypoint(function(direction)
            {
               $(".photo").addClass("animate__animated  animate__rollIn img-ani")
               $(".photo").removeClass("photo");
            },{
              offset:"70%"
            }
            )

           $(".f1").waypoint(function(direction)
            {
              
               $(".f1").addClass("animate__animated animate__flip op1")
              $(".f1").removeClass('op0');
            },{
              offset:"80%"
            }
            )
           $(".f2").waypoint(function(direction)
            {
               $(".f2").addClass("animate__animated  animate__flip op1")
              $(".f2").removeClass('op0');
            },{
              offset:"80%"
            }
            )
           $(".f3").waypoint(function(direction)
            {
               $(".f3").addClass("animate__animated animate__flip op1")
              $(".f3").removeClass('op0');
            },{
              offset:"80%"
            }
            )
           $(".f4").waypoint(function(direction)
            {
              if(direction==="down"){
               $(".f4").addClass("animate__animated  animate__flip op1")
              $(".f4").removeClass('op0');
            }},{
              offset:"60%"
            })

           $(".img_bounce").waypoint(function(direction)
            {
               $(".img_bounce").addClass("animate__animated  animate__lightSpeedInRight op1")
               $(".img_bounce").addClass("animate__animated  animate__flip op1")
              $(".img_bounce").removeClass('op0');
            },{
              offset:"60%"
            }
            )

            let ex1=new Typed("#ex1",{
              strings:["Web Developer","Free Lancer","Java Developer"],
              typeSpeed:100,
              backSpeed:100,
              loop:true,
              // showCursor:false,
              shuffle:true
          })
          
            let ex2=new Typed("#ex2",{
              strings:["Enter your comment....","you can write here..."],
              typeSpeed:100,
              backSpeed:100,
              loop:true,
              //showCursor:false,
              shuffle:true,
              arrt:"placeholder"
          })
     });
