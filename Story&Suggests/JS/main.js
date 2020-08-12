var elem = document.getElementsByClassName("content");
for (var i = 0; i < elem.length; i++) {


    console.log(elem[i].innerHTML.length);
    if (elem[i].innerHTML.length > 700) {
        // elem[i].innerHTML  = "length";
    }
    // elem[i].onclick = function(){
    //     if(this.innerHTML === "see less"){
    //         this.previousSibling.style.display = "none";
    //         this.innerHTML = "... see more";
    //     }
    //     else{
    //         this.previousSibling.style.display = "inline";
    //         this.innerHTML = "see less";
    //     }
    // }
}

var blurBackground = function () {
    document.querySelector(".sidebar").style.boxShadow = '0px 0px 20px 5000px #00000094';
    document.querySelector(".container").style.pointerEvents = 'none';
    document.querySelector(".mobile-header").style.pointerEvents = 'none';
    document.querySelector(".mobile-nav-bar").style.pointerEvents = 'none';
}
var removeBlurBackground = function () {
    document.querySelector(".sidebar").style.boxShadow = 'none';
    document.querySelector(".container").style.pointerEvents = 'auto';
    document.querySelector(".mobile-header").style.pointerEvents = 'auto';
    document.querySelector(".mobile-nav-bar").style.pointerEvents = 'auto';
}


// sidebar open
/*document.querySelector(".mobile-header .me-icon").addEventListener("click", function () {
    var sidebar = document.querySelector(".sidebar")
    sidebar.style.left = 0;
    sidebar.style.top = 0;

    // blur background
    blurBackground();
})*/

// sidebar close
document.querySelector(".container-wrap").addEventListener("click", function () {
    var sidebar = document.querySelector(".sidebar")
    sidebar.style.left = "";
    sidebar.style.top = "";

    // unblur background
    removeBlurBackground();
})


document.querySelector(".sidebar .down").addEventListener("click", function () {
    this.classList.toggle("rotate-arrow")
})

document.querySelector(".expand-add-acc").addEventListener("click", function () {
    document.querySelector(".all-uls").classList.toggle("show-add-acc")
})

var sidebar = document.querySelector(".sidebar");

document.querySelector("body").addEventListener("touchstart", startTouch, false);
document.querySelector("body").addEventListener("touchmove", moveTouch, false);
document.querySelector(".sidebar").addEventListener("touchmove", moveTouch2, false);

// Swipe Up / Down / Left / Right
var initialX = null;
var initialY = null;

function startTouch(e) {
    initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;
};

function moveTouch(e) {
    if (initialX === null) {
        return;
    }

    if (initialY === null) {
        return;
    }

    var currentX = e.touches[0].clientX;
    var currentY = e.touches[0].clientY;

    var diffX = initialX - currentX;
    var diffY = initialY - currentY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
        // sliding horizontally
        if (diffX > 0) {
            // swiped left
            sidebar.style.left = "";
            sidebar.style.top = "";
            //un blur background
            removeBlurBackground();
        }
    } else {
        // sliding vertically
        if (diffY > 0) {
            // swiped up
        } else {
            // swiped down
        }
    }

    initialX = null;
    initialY = null;

};

function moveTouch2(e) {
    if (initialX === null) {
        return;
    }

    if (initialY === null) {
        return;
    }

    var currentX = e.touches[0].clientX;
    var currentY = e.touches[0].clientY;

    var diffX = initialX - currentX;
    var diffY = initialY - currentY;


    if (Math.abs(diffX) > Math.abs(diffY)) {
        // sliding horizontally
        if (diffX > 0) {
            // swiped left
            sidebar.style.left = "";
            sidebar.style.top = "";

            //un blur background
            removeBlurBackground();
        } else {
            
            // blur background

            blurBackground();
        }
    } else {

        // sliding vertically
        if (diffY > 0) {
            // swiped up
            // alert('asdas')
            sidebar.scroll({
                top: 500,
                // left: 100,
                behavior: 'smooth'
            })
            console.log("swiped up");
        } else {
            // swiped down
            sidebar.scroll({
                top: -100,
                // left: 100,
                behavior: 'smooth'
            })
        }

    }
    initialX = null;
    initialY = null;

    e.preventDefault();
}

var scroll = 1;
var scrolldown = 1;
window.onscroll = function (e) {
      console.log(scroll+'and'+window.pageYOffset +'or'+scrolldown);
    if (this.oldScroll > this.scrollY) {
        scroll++;
        scrolldown = 1;
        if(scroll>20 || window.pageYOffset<60){
        //   scrolling down
        document.querySelector('.mobile-header').style.top = '0';
        document.querySelector('.mobile-nav-bar').style.bottom = '0';
        scroll = 1;
           
        }
       
    } else {
        //   scrolling up
        scrolldown++;
        scroll = 1;
         if(scrolldown>20 && window.pageYOffset>60){
        document.querySelector('.mobile-header').style.top = '-52px';
        document.querySelector('.mobile-nav-bar').style.bottom = '-55px';
         scrolldown = 1;
          
         }
    }
    this.oldScroll = this.scrollY;
}