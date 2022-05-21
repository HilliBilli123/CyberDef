// const clicks = document.querySelectorAll(".header__link")

// clicks.forEach(element =>{
//     element.addEventListener("click", (e) =>{
//         // clicks.forEach(element =>{element.classList.remove("active")})
//         e.preventDefault()
//         const classFind = e.target.dataset.down
//         // console.log(classFind)
//         const block = document.querySelector(`#${classFind}`)
//         if(classFind === block.id){
//             e.target.classList.add("active")
//             block.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
//         }
//     })
// })

let zSpacing = -1000,
    lastPos = zSpacing / 5,
    $frames = document.getElementsByClassName('frame'),
    frames = Array.from($frames),
    zVals = []

window.onscroll = function () {
    let top = document.documentElement.scrollTop,
        delta = lastPos - top

    lastPos = top

    frames.forEach(function (n, i) {
        zVals.push((i * zSpacing) + zSpacing)
        zVals[i] += delta * -4
        let frame = frames[i],
            transform = `translateZ(${zVals[i]}px)`
            opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
        frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
    })
}

window.screenTo = () => {0, 1}

