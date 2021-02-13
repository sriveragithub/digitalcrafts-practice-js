// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp


const childSaved = document.getElementById('section');

const collapse = function() {
    let parent = document.getElementById('accordion');
    let child = document.getElementById('section');
    if (child != null) {
        parent.removeChild(child);
    } else if (child == null) {
        parent.appendChild(childSaved);
    }
}

document.getElementById('section-header').addEventListener('click', collapse);
