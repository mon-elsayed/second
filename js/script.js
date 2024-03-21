
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 1500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);




















const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");


const showPopupBtn = document.querySelector(".info");
const showProfile = document.querySelector("#ProfileLink");
const EditIcon = document.querySelector("#EditIcon");

const formPopup = document.querySelector(".form-popup");
const ProfilePopup = document.querySelector(".profile-popup");
const EditPopup = document.querySelector(".edit-popup");

const hideProfile = ProfilePopup.querySelector(".close-btn");
const hideEdit = EditPopup.querySelector(".close-btn");


const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");
const UserInfo = document.getElementById('UserData');
const logOutElement = document.getElementById('LogOut');
const Login = document.getElementById('Login');




// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () =>  hamburgerBtn.click());

// Show user info popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
    // formPopup.style.display ='block';
});
//Hide user info popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());




//////////////////////
showProfile.addEventListener("click", () => {
    document.body.classList.toggle("show-profile");
    showPopupBtn.click();

    // formPopup.style.display ='none'
    
});
//hide user profile
hideProfile.addEventListener("click", () => showProfile.click());
//hide edit 
hideEdit.addEventListener("click", () => EditIcon.click());

//Hide userinfo
logOutElement.addEventListener('click', function() {
    UserInfo.style.display = 'none';
    formPopup.style.display ='none';
    Login.style .display='block';

});
//show edit icon
EditIcon.addEventListener("click", () => {
    document.body.classList.toggle("show-edit");
    // showProfile.click();

});
window.addEventListener('load', () => {

    const apiUrl = 'http://example.com/api/data';

    
    fetch(apiUrl)
        .then(response => {
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            return response.json();
        })
        .then(data => {
           
            document.getElementById('name').textContent = data.name;
            document.getElementById('email').textContent = data.email;
            document.getElementById('gender').textContent = data.gender;
            document.getElementById('age').textContent = data.age;
            document.getElementById('userType').textContent = data.user;
            document.getElementById('phoneNumber').textContent = data.phoneNum;

        
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});


//hide user profile
// hideProfile.addEventListener('click', function(){
//     ProfilePopup.style.display='none';

    
// });


















