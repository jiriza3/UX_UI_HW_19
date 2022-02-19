function scrollToAnchor(aid){
  const destination = $("a[name='"+ aid +"']");
    $('html,body').animate({
      scrollTop: destination.offset().top
    },10,"linear");
}

// Call the function to go to my work from "Learn more about me button"
$(document).on('click', '.btn-about', function(){
  scrollToAnchor('TheWork');
})

// Transition from My work to My Skills
$(document).on('click', '.btnallProjects', function(){
  scrollToAnchor('TheSkills');
})

//Give the Nav Bar funtionality

$(document).on('click', '.navWork', function(){
  scrollToAnchor('TheWork');
})

$(document).on('click', '.navSkills', function(){
  scrollToAnchor('TheSkills');
})