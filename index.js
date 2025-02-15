let no = document.querySelector('.answer:nth-child(2)');
let yes = document.querySelector('.answer:nth-child(1)');

let question = document.querySelector('.question');

const actions = [
    () => {
        question.textContent = "пішли гуляти";
    },
    () => {
        question.textContent = "летс волк";
    },
    () => {
        question.textContent = "а за цветок?";
        let elem = document.createElement("img");
        elem.src = "blue-rose.png";
        elem.classList.add("rose");
        document.querySelector("body").appendChild(elem);
    },
    () => {
        question.textContent = "а за три?";
        let elem1 = document.createElement("img");
        let elem2 = document.createElement("img");
        elem1.src = "blue-rose.png";
        elem2.src = "blue-rose.png";
        elem1.classList.add("rose");
        elem2.classList.add("rose");
        elem1.style.translate = "4rem";
        elem2.style.translate = "8rem";
        document.querySelector("body").appendChild(elem1);
        document.querySelector("body").appendChild(elem2);
    },
    () => {
        question.textContent = "а за букет?";
        for (const elemElement of document.querySelectorAll(".rose")) {
            elemElement.remove();
        }

        let elem = document.createElement("img");
        elem.src = "blue-roses-bunch.png";
        elem.classList.add("roses");
        document.querySelector("body").appendChild(elem);
    },
    () => {
        question.textContent = "nu nazdanma";
    },
    () => {
        question.textContent = "анекдот";
    },
    () => {
        question.textContent = "однажды";
    },
    () => {
        question.textContent = "очень";
    },
    () => {
        question.textContent = "симпатичный";
    },
    () => {
        question.textContent = "парень";
    },
    () => {
        question.textContent = "увидел";
    },
    () => {
        question.textContent = "не менее";
    },
    () => {
        question.textContent = "красивую";
    },
    () => {
        question.textContent = "девушку";
    },
    () => {
        question.textContent = "он захотел";
    },
    () => {
        question.textContent = "погулять";
    },
    () => {
        question.textContent = "с ней";
    }
    ,
    () => {
        question.textContent = "а она";
    },
    () => {
        question.textContent = "отказалась";
    },
    () => {
        question.textContent = "дважды*";
    },
    () => {
        question.textContent = "ну потом";
    },
    () => {
        question.textContent = "крч";
    },
    () => {
        question.textContent = "ее превратили";
    },
    () => {
        question.textContent = "в жабу";
    },
    () => {
        question.textContent = "конец";
    },
    () => {
        question.textContent = "идем?";
    },
    () => {
        question.textContent = "стих";
    },
    () => {
        question.textContent = "пиво";
    },
    () => {
        question.textContent = "водка";
    },
    () => {
        question.textContent = "сковородка";
    },
    () => {
        question.textContent = "без";
    },
    () => {
        question.textContent = "сомнений";
    },
    () => {
        question.textContent = "ты";
    },
    () => {
        question.textContent = "красотка";
    },
    () => {
        question.textContent = "знаешь";
    },
    () => {
        question.textContent = "чем";
    },
    () => {
        question.textContent = "ты";
    },
    () => {
        question.textContent = "отличаешься";
    },
    () => {
        question.textContent = "от";
    },
    () => {
        question.textContent = "крови?";
    },
    () => {
        question.textContent = "она";
    },
    () => {
        question.textContent = "проходит";
    },
    () => {
        question.textContent = "через";
    },
    () => {
        question.textContent = "сердце";
    },
    () => {
        question.textContent = "а ты";
    },
    () => {
        question.textContent = "в нем";
    },
    () => {
        question.textContent = "остаешься";
    },
    () => {
        question.textContent = "а так?";
        yes.textContent = "Нет";
        no.textContent = "Да";
    },
    () => {
        yesAction();
    }
];

let yesAction = () => {
    yes.remove()
    no.remove()
    question.textContent = "все, идем";
    let elem = document.createElement("div");
    elem.style.width = "20rem";
    elem.style.height = "10rem";
    elem.style.lineHeight = "10rem";
    elem.style.textAlign = "center";
    elem.style.position = "absolute";
    elem.style.backgroundColor = "burlywood";
    elem.textContent = "В субботу в три часа";
    document.querySelector("body").appendChild(elem);
}

let actionIdx = 0;

no.addEventListener('touchstart', (e) => {
    randomPlace();
    actions[actionIdx]();
    if (actionIdx < actions.length ) {
        actionIdx++;
    }
})

yes.addEventListener('touchstart', (e) => {
    yesAction();
})

function randomPlace(){
    if (!no) {
        console.error("Button not found");
        return;
    }

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const buttonWidth = no.offsetWidth;
    const buttonHeight = no.offsetHeight;

    const randomX = Math.random() * (viewportWidth - buttonWidth);
    const randomY = Math.random() * (viewportHeight - buttonHeight);

    no.style.position = "absolute";
    no.style.left = `${randomX}px`;
    no.style.top = `${randomY}px`;
}