let array;
fetch('episodes.json')
.then(response => response.json())
.then(data => {
    array = data;
    array.forEach( e => {
        document.getElementById('ep').innerHTML += `<option value = '${e.id}'>${e.id}</option>`;
    });
    if (localStorage['ep']) { // if job is set
        document.getElementById('ep').value = localStorage['ep']; // set the value
    }
    document.title = array[Number(document.getElementById('ep').value)-1].title;
    document.getElementById('main').innerHTML += 
    `<iframe id="embedvideo" src="https://${array[Number(document.getElementById('ep').value)-1].url}" sandbox = "allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation" allowvr="yes"  allowfullscreen="true" marginwidth="0" marginheight="0" scrolling="no" frameborder="0"></iframe>`
});

$( "#ep" ).change(function() {
    document.title = array[Number(document.getElementById('ep').value)-1].title;
    document.getElementById('main').innerHTML = ``;
    document.getElementById('main').innerHTML +=
    `<iframe id="embedvideo" src="https://${array[Number(document.getElementById('ep').value)-1].url}" sandbox = "allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation" allowvr="yes" allowfullscreen="true" marginwidth="0" marginheight="0" scrolling="no" frameborder="0"></iframe>`
});

document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('ep');
    if (localStorage['ep']) { // if job is set
        input.value = localStorage['ep']; // set the value
    }
    input.onchange = function () {
         localStorage['ep'] = this.value; // change localStorage on change
     }
 });



setInterval(function(){ 
    console.clear();
}, 1000);
