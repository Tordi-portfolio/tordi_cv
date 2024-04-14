
// This is the header javascript
let display = 0;
let navigatorlist = document.getElementById('displaynavigator')
let openmenu = document.getElementById('headeropenmenu')
let closemenu = document.getElementById('headerclosemenu')

function navigatoropen() {
    if (display == 0){
        navigatorlist.innerHTML = `
            <li><i class="fa fa-home" aria-hidden="true"></i><a href="/"> Home</a></li>
            <li><i class="fa fa-question-circle" aria-hidden="true"></i><a href="index"> Blog</a></li>
            <li><i class="fa fa-server" aria-hidden="true"></i><a href="bio"> Bio</a></li>
        `
        openmenu.innerHTML = ''
        closemenu.innerHTML = `
            <style>
                #headerclosemenu i{
                    font-size: 40px;
                    display: inline-block;
                }
            </style>
            <i class="fa fa-times" aria-hidden="true"></i>
        `
        closemenu.style.display = 'block'
        display = 0
    }
}
function navigatorclose() {
    if (display == 0){
        navigatorlist.innerHTML = ''
        openmenu.innerHTML = `
            <i class="fa fa-bars" aria-hidden="true"></i>
        `
        closemenu.innerHTML = ''
        display = 0
    }
}
