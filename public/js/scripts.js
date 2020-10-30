let flair = document.querySelector('#flair_text')
let flairArray = ["Dynamic", "Kind", "Ambitious", "Determined", "Responsible", "Fun", "Smart", "Sharp", "Able", "Astute", "Energetic", "Engaging", "Passionate", 
"Enthusiastic", "Tireless", "Insightful", "Decisive"]
let randomFlair =  flairArray[Math.floor(Math.random() * flairArray.length)]
let flairTimer = setInterval(flairTransition, 5000)

//Header scripts
let navLink = document.querySelectorAll('.header_nav_links')
let rb2kblock = document.querySelector('.rb2k')
let rb2kLines = document.querySelectorAll('#rb2k_lines')
let problock = document.querySelector('.project')
let prolines = document.querySelectorAll('#project_lines')
let logodiv = document.querySelector('.logo_div')
let logolines = document.querySelectorAll('#logo_lines')
let burger = document.querySelector('.burger')
let mnav = document.querySelector('.mobile_nav')

navLink.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.classList.add('hovered_nav_item')
    })
    item.addEventListener('mouseleave', () => {
        item.classList.remove('hovered_nav_item')
        rb2kLines.forEach((line) => {
            line.classList.remove('hovered_lines')
        })
    })
})
rb2kblock.addEventListener("mouseover", () => {
    rb2kLines.forEach((line) => {
        line.classList.add('hovered_lines')
    })
})
rb2kblock.addEventListener("mouseleave", () => {
    rb2kLines.forEach((line) => {
        line.classList.remove('hovered_lines')
    })
})
problock.addEventListener("mouseover", () => {
    prolines.forEach((pline) => {
        pline.classList.add('hovered_lines')
    })
})
problock.addEventListener("mouseleave", () => {
    prolines.forEach((pline) => {
        pline.classList.remove('hovered_lines')
    })
})
logodiv.addEventListener("mouseover", () => {
    logolines.forEach((lline) => {
        lline.classList.add('hovered_lines')
    })
})
logodiv.addEventListener("mouseleave", () => {
    logolines.forEach((lline) => {
        lline.classList.remove('hovered_lines')
    })
})

burger.addEventListener("click", () => {
    mnav.classList.toggle('nav_active')
})

document.getElementById("flair_text").textContent = flairInit()

function flairInit(){
    flair.classList.add('flair_unfade');
    randomFlair = flairArray[Math.floor(Math.random() * flairArray.length)]
    return randomFlair
}

function flairTransition(){
    flair.classList.remove('flair_fade')
    flair.classList.remove('flair_unfade')
    flair.classList.add('flair_fade')
    var fadeintimer = setTimeout(() => {
        flair.classList.add('flair_unfade');
        randomFlair = flairArray[Math.floor(Math.random() * flairArray.length)]
        if(flair.innerHTML == randomFlair){
            randomFlair = flairArray[Math.floor(Math.random() * flairArray.length)]
        }
        flair.innerHTML = randomFlair
    }, 1000)
}

flair.addEventListener('click', () => {
    flairTransition()
    clearInterval(flairTimer)
    flairTimer = setInterval(flairTransition, 5000)
})

//About panel scripts
//Contact panel animations.
let contactH = document.querySelector(".contact_header");
let headerText = contactH.textContent;
let splitH = headerText.split("")
contactH.textContent = ""; //Since I pulled the text out of the header and split it up, I will erase whats there and repopulate it.
let aboutH = document.querySelector(".about_header");
let aheaderText = aboutH.textContent;
let splitAH = aheaderText.split("")
aboutH.textContent = ""; //Since I pulled the text out of the header and split it up, I will erase whats there and repopulate it.
let aText = document.querySelector(".about_text_div")
let cText = document.querySelector(".contact_p_container")


for(let i = 0; i < splitH.length; i++){
    contactH.innerHTML += '<span class="type_span">' + splitH[i] + '</span>';
}
for(let i = 0; i < splitAH.length; i++){
    aboutH.innerHTML += '<span class="type_span">' + splitAH[i] + '</span>';
}


let panel = document.querySelector(".about_panel");
document.addEventListener("scroll", () => {
    let charIndexC = 0;
    let charIndexA = 0
    let contact_text_timer = setInterval(keystroke, 150);
    function keystroke(){
        let cspan = contactH.querySelectorAll("span")[charIndexC];
        let aspan = aboutH.querySelectorAll("span")[charIndexA];
        
        
        if(charIndexC === splitH.length){
            stopAnimation();
            let lines = document.querySelectorAll(".contact_break");
            cText.classList.add("slide_in")
            lines.forEach((line) => {
                line.classList.add("line_grow")
            })
            return;
        }
        else if (charIndexA === splitAH.length){
            cspan.classList.add("appear");
            charIndexC++;
            aText.classList.add("drop_down")
        }
        else{
            aspan.classList.add("appear");
            cspan.classList.add("appear");
            charIndexC++;
            charIndexA++;
        }
        
    }
    
    function stopAnimation(){
        clearInterval(contact_text_timer);
        contact_text_timer = null;
    }
})
//Parallax script
let parallaxDiv = document.querySelector(".about_panel");
window.addEventListener("scroll", () => {
    let parallaxOffset = window.pageYOffset;
    parallaxDiv.style.backgroundPositionY = parallaxOffset * -0.3 + "px";
})

/*let wnButton = document.querySelector(".whats_new_button");

wnButton.addEventListener('mouseover', () => {
    wnButton.classList.add('inverted_button')
})
wnButton.addEventListener('mouseleave', () => {
    wnButton.classList.remove('inverted_button')
})*/

//News panel scripts
/*let news_but = document.querySelector(".news_button");

news_but.addEventListener("mouseover", () => {
    news_but.classList.add("inverted_button")
})
news_but.addEventListener("mouseleave", () => {
    news_but.classList.remove("inverted_button")
})*/

/*//Social div
let nodes = document.querySelectorAll(".social_nodes")
let socialGrid = document.querySelectorAll(".social_grid_element")
let socialHeader = document.querySelector(".social_header_div")
let button = document.querySelector(".whats_new_button")
let buttonClicked = false;
let div = document.querySelector("#panel2_div")

button.addEventListener("click", () => {
    if(buttonClicked == true){
        var fadeinTimer = setTimeout(() =>{
            button.classList.remove("button_clicked")
        }, 1000)
        socialGrid.forEach(item => {
            item.classList.remove("flair_unfade");
            socialHeader.classList.remove("flair_unfade");
        })
        buttonClicked = false;
    }
    else{
        let fadeTimer = 500;
        button.classList.add("button_clicked");
        socialGrid.forEach(item => {
            var fadein = setTimeout(() => {
                item.classList.add("flair_unfade");
                socialHeader.classList.add("flair_unfade");
            }, fadeTimer)
            fadeTimer += 250;
        })
        buttonClicked = true;
    }
})*/

//Project panel scripts.
let titleLines = document.querySelectorAll(".project_lines")
let proPanel = document.querySelector(".project_panel")
proPanel.addEventListener("mouseover", () => {
    titleLines.forEach((pline) => {
        pline.classList.add("line_grow")
    })
})

let clicked1 = false;
let clicked2 = false;
let clicked3 = false;
let clicked4 = false;
let clicked5 = false;
let clicked6 = false;

let p1Div = document.querySelector(".p4_grid_element1")
let hidden1 = document.querySelector(".hidden_overlay_1")
let items1 = document.querySelector(".hidden_items1")

let p2Div = document.querySelector(".p4_grid_element2")
let hidden2 = document.querySelector(".hidden_overlay_2")
let items2 = document.querySelector(".hidden_items2")

let p3Div = document.querySelector(".p4_grid_element3")
let hidden3 = document.querySelector(".hidden_overlay_3")
let items3 = document.querySelector(".hidden_items3")

let p4Div = document.querySelector(".p4_grid_element4")
let hidden4 = document.querySelector(".hidden_overlay_4")
let items4 = document.querySelector(".hidden_items4")

let p5Div = document.querySelector(".p4_grid_element5")
let hidden5 = document.querySelector(".hidden_overlay_5")
let items5 = document.querySelector(".hidden_items5")


let p6Div = document.querySelector(".p4_grid_element6")
let hidden6 = document.querySelector(".hidden_overlay_6")
let items6 = document.querySelector(".hidden_items6")


p1Div.addEventListener("click", () => {
    if(clicked1){
        hidden1.classList.remove("overlay_reveal")
        items1.classList.remove("items_reveal")
        clicked1 = false
    }
    else{
        hidden1.classList.add("overlay_reveal")
        items1.classList.add("items_reveal")
        clicked1 = true;
    }
})
p2Div.addEventListener("click", () => {
    if(clicked2){
        hidden2.classList.remove("overlay_reveal")
        items2.classList.remove("items_reveal")
        clicked2 = false
    }
    else{
        hidden2.classList.add("overlay_reveal")
        items2.classList.add("items_reveal")
        clicked2 = true;
    }
})
p3Div.addEventListener("click", () => {
    if(clicked3){
        hidden3.classList.remove("overlay_reveal")
        items3.classList.remove("items_reveal")
        clicked3 = false
    }
    else{
        hidden3.classList.add("overlay_reveal")
        items3.classList.add("items_reveal")
        clicked3 = true;
    }
})
/*p4Div.addEventListener("click", () => {
    if(clicked4){
        hidden4.classList.remove("overlay_reveal")
        items4.classList.remove("items_reveal")
        clicked4 = false
    }
    else{
        hidden4.classList.add("overlay_reveal")
        items4.classList.add("items_reveal")
        clicked4 = true;
    }
})
p5Div.addEventListener("click", () => {
    if(clicked5){
        hidden5.classList.remove("overlay_reveal")
        items5.classList.remove("items_reveal")
        clicked5 = false
    }
    else{
        hidden5.classList.add("overlay_reveal")
        items5.classList.add("items_reveal")
        clicked5 = true;
    }
})*/
p6Div.addEventListener("click", () => {
    if(clicked6){
        hidden6.classList.remove("overlay_reveal")
        items6.classList.remove("items_reveal")
        clicked6 = false
    }
    else{
        hidden6.classList.add("overlay_reveal")
        items6.classList.add("items_reveal")
        clicked6 = true;
    }
})


//rb2k Services scripts.
/*let service_but = document.querySelector(".services_button");
service_but.addEventListener("mouseover", () => {
    service_but.classList.add("inverted_button")
})
service_but.addEventListener("mouseleave", () => {
    service_but.classList.remove("inverted_button")
})*/