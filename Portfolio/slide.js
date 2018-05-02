function skill(evt, skillName) {
    // Declare all variables
    var i, skillcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    skillcontent = document.getElementsByClassName("skillcontent");
    for (i = 0; i < skillcontent.length; i++) {
        skillcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    skill_Links = document.getElementsByClassName("skill_Links");
    for (i = 0; i < skill_Links.length; i++) {
        skill_Links[i].className = skill_Links[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(skillName).style.display = "block";
    evt.currentTarget.className += " active";
}
