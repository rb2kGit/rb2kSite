/*Landing scripts.*/
let flair = document.querySelector('#flair_text')
let flairArray = ["Dynamic", "Kind", "Ambitious", "Determined", "Responsible", "Fun", "Smart", "Sharp", "Able", "Astute", "Energetic", "Engaging", "Passionate", 
"Enthusiastic", "Tireless", "Insightful", "Decisive", "Driven"]
let randomFlair = flairArray[Math.floor(Math.random() * flairArray.length)];
let flairTimer = setInterval(flairTransition, 5000)
flair.addEventListener('mouseover', () => {
    flair.classList.add('hovered_nav_item')
})
flair.addEventListener('mouseleave', () => {
    flair.classList.remove('hovered_nav_item')
})
//About section declarations.
let aboutDiv = [document.querySelector(".about_info_div"), document.querySelector(".contact_block")];
let contactH = document.querySelector(".contact_header");
let aboutH = document.querySelector(".about_header");
//Project section declarations.
let titleLine = document.querySelectorAll(".project_lines")

function flairInit(){
    flair.classList.add('flair_unfade');
    randomFlair = flairArray[Math.floor(Math.random() * flairArray.length)]
    flair.innerHTML = randomFlair;
    return randomFlair;
}
function flairTransition(){
    if(flair != null){
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
}

if(flair != null){
    flairInit();
    
    
    flair.addEventListener('click', () => {
        flairTransition()
        clearInterval(flairTimer)
        flairTimer = setInterval(flairTransition, 5000)
    })

    
    let aText = document.querySelector(".about_text_div")
    let cText = document.querySelector(".contact_p_container")


    let panel = document.querySelector(".about_panel");
    document.addEventListener("scroll", () => {
    })
    //Parallax script
    let parallaxDiv = document.querySelector(".about_panel");
    window.addEventListener("scroll", () => {
        let parallaxOffset = window.pageYOffset;
        parallaxDiv.style.backgroundPositionY = parallaxOffset * -0.35 + "px";
    })

    //Project panel scripts.
    let proPanel = document.querySelector(".project_panel")

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
}
//Header scripts.
let navLink = document.querySelectorAll('.header_nav_links')
let rb2kblock = document.querySelector('.rb2k')
let rb2kLines = document.querySelectorAll('#rb2k_lines')
let contactBlock = document.querySelector('.contact')
let contactLines = document.querySelectorAll('#contact_lines')
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
contactBlock.addEventListener("mouseover", () => {
    contactLines.forEach((cline) => {
        cline.classList.add('hovered_lines')
    })
})
contactBlock.addEventListener("mouseleave", () => {
    contactLines.forEach((cline) => {
        cline.classList.remove('hovered_lines')
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




//Service page scripts.
let serv_vLines = document.querySelectorAll('.vertical');
let serv_hLines = document.querySelectorAll('.horizontal');

function animateLines(vLines, hLines){
    document.addEventListener("scroll", () =>{
        vLines.forEach((item) => {
            item.classList.add('inner_line_grow')
            
        })
        hLines.forEach((item) => {
            item.classList.add('inner_line_grow')
            
        })
    })
}

if(serv_vLines || serv_hlines != undefined){
    animateLines(serv_vLines, serv_hLines);
}

/*Observer API*/
//Observer API
let observerObject = {
    root: null,
    rootMargin: "-25% 0px",
    threshold: 0.10
};

let animatedHeaders = [contactH, aboutH]
let aboutObserver = new IntersectionObserver(intersection, observerObject)
let lineObserver = new IntersectionObserver(lineIntersect, observerObject)
//let headerObserver = new IntersectionObserver(intersected, observerObject)
//let lineObserver = new IntersectionObserver(intersected, observerObject)

aboutDiv.forEach(item => {
    aboutObserver.observe(item)
})
titleLine.forEach(item => {
    lineObserver.observe(item)
})
function intersection(elements){
    elements.forEach(item => {
        if(item.isIntersecting){
            //Header animations.
            let header = item.target.querySelector('h2');
            let headerText = header.textContent;
            let splitH = headerText.split("")
            let line = item.target.querySelector('.contact_break');
            let text = item.target.querySelectorAll('.anim');
            let charIndex = 0;
    
            header.textContent = ""; //Since I pulled the text out of the header and split it up, I will erase whats there and repopulate it.
            header.classList.add('appear')
            
            for(let i = 0; i < splitH.length; i++){
                header.innerHTML += '<span class="type_span">' + splitH[i] + '</span>'; //Generate an array of spans to replace the header.
            }        
            
            let contact_text_timer = setInterval(keystrokeAnim, 150);
            function keystrokeAnim(){
                let span = header.querySelectorAll("span")[charIndex];
                //let aspan = aboutH.querySelectorAll("span")[charIndexA];        
                
                if(charIndex === splitH.length){
                    stopAnimation();
                    line.classList.add('line_grow')
                    text.forEach(item => {
                        item.classList.add('drop_down')
                    })
                    return;
                }
                else{
                    span.classList.add('appear')
                    charIndex++;
                }
                
            }
            function stopAnimation(){
                clearInterval(contact_text_timer);
                contact_text_timer = null;
                aboutObserver.unobserve(item.target)
            }
        }

    })
}
function lineIntersect(elements){
    elements.forEach(item => {
        if(item.isIntersecting){
            let lines = item.target;
            lines.classList.add('line_grow')
            lineObserver.unobserve(item.target)

        }
    })
}