var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;

for (var i = 0; i < navMenuAnchorTags.length; i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();

        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);
        interval = setInterval(scrollVertically, 20 , targetSection);
    });
}


function scrollVertically(targetSection){
var targetSectionCoordinates = targetSection.getBoundingClientRect();
if (targetSectionCoordinates.top <=0){
    clearInterval(interval);
    return;
}
window.scrollBy(0, 50);
};



var progressBars = document.getElementById('.skill-progress > div');
var skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll',checkScroll);


function checkScroll(){



}


