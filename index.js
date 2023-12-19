let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let plus1 = document.querySelector('.plus1')
let minus1 = document.querySelector('.minus1')
let plus2 = document.querySelector('.plus2')
let minus2 = document.querySelector('.minus2')
let disktext = document.querySelector('.disktext')
let temptext = document.querySelector('.temptext')
let speed = 60
let range = 750
let temp = 20
let tempa = document.querySelector('.tempa')

plus.onclick = () => {
    if (speed > 20) {
        speed -= 5
        range += 20
        document.querySelector('.speed').innerHTML = range
        document.querySelector('.range').innerHTML = speed
    }
}

minus.onclick = () => {
    if (speed < 140) {
        speed += 5
        range -= 20
        document.querySelector('.speed').innerHTML = range
        document.querySelector('.range').innerHTML = speed
    }
}
plus1.onclick = () => {
    if (temp <= -20) {
        return
    }
    temp -= 1
    if (temp < 15) {
        temptext.innerText = 'Печка'
    }
    tempa.innerHTML = temp
}
minus1.onclick = () => {
    if (temp >= 50) {
        return
    }
    temp += 1
    if (temp >= 15) {
        temptext.innerText = 'Кондиционер'
    }
    tempa.innerHTML = temp
}

let overlay_img = document.querySelector('.overlay_img')
let over_img = document.querySelector('.over_img')
let disk = 19

minus2.onclick = () => {
    if (disk < 21) {
        disk += 2;
        disktext.innerText = disk;
        if (disk == 21) {
           over_img.src = './img/balon2-removebg-preview.png';
            overlay_img.src = './img/balon2-removebg-preview.png';
        }
    }
}
plus2.onclick = () => {
    if (disk > 19) {
        disk -= 2;
        disktext.innerHTML = disk;
        if (disk == 19) {
            overlay_img.src = './img/balon1-removebg-preview.png';
            over_img.src = './img/balon1-removebg-preview.png';
        }
    }
}
console.log(disk);

let pechka1 = document.querySelectorAll('.pechka1')

for (let item of pechka1) {
    let img = item.querySelector('img')
    item.onclick = () => {
        if (img.src == './img/image 7.png') { 
            range -= 20
        } else {
            img.src = './img/image 7.png'
        }
    }
}

for (let item of pechka1) {
    let img = item.querySelector('img')
    item.dblclick = () => {
        if (img.src === './img/image 7.png') { 
            img.src = './img/image 5 (1).png';
        }
    }
}



