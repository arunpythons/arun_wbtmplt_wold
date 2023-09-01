// js for tab switching starts
function openMails(evt, mailtab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("inbox-message-holder");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tb-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(mailtab).style.display = "block";
    evt.currentTarget.className += " active";
    check_mailtab = mailtab;
    return check_mailtab;
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
// js for tab switching ends