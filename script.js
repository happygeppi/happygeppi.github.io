const projects = [
  {
    title: "KI-Karina",
    folder: "karina",
  },
  {
    title: "Impulsrakete",
    folder: "impulsrakete",
  },
  {
    title: "Fourier Zeichnen",
    folder: "fourier",
  },
  {
    title: "Bezier Kurven",
    folder: "bezier",
  },
  {
    title: "Rakete",
    folder: "rakete",
  },
  {
    title: "Deal or no Deal",
    folder: "dealornodeal",
  },
  {
    title: "Super Tic Tac Toe",
    folder: "tictactoe",
  },
  {
    title: "Turing-Maschine",
    folder: "turingmaschine",
  },
  {
    title: "Sudoku-L&ouml;ser",
    folder: "sudoku",
  },
  {
    title: "Minesweeper",
    folder: "minesweeper",
  },
  {
    title: "GDC-Homepage",
    folder: "gdc",
  },
  {
    title: "Stundenplan-Generator",
    folder: "stundenplangenerator",
  },
  {
    title: "Vier Gewinnt",
    folder: "viergewinnt",
  },
  {
    title: "Licht-Simulator",
    folder: "licht",
  },
  {
    title: "Textbild",
    folder: "textbild",
  },
  {
    title: "Flappy Bird",
    folder: "flappybird",
  },
  {
    title: "Pong",
    folder: "pong",
  },
];

function Init() {
  CreateHeader();
  CreateMain();
}

function CreateHeader() {
  const Container = document.getElementById("header-container");
  const rect = Container.getBoundingClientRect();

  const lineHeight = 48;
  const fontSize = lineHeight * 0.9;
  const fontWidth = fontSize * 0.6;

  const numRows = Math.floor(rect.height / lineHeight) - 1;
  const rowLength = 1.5 * Math.ceil(rect.width / fontWidth);
  const nameInMiddle = false;

  for (let row = 0; row < numRows; row++) {
    const Row = document.createElement("div");
    Row.classList.add("row");
    RowContent(Row, rowLength, nameInMiddle);
    Row.style.fontSize = `${fontSize}px`;
    Row.style.lineHeight = `${lineHeight}px`;
    Container.append(Row);
  }

  const happygeppi1 = document
    .querySelectorAll(".name")[0]
    .getBoundingClientRect();
  const happygeppi2 = document
    .querySelectorAll(".name")[1]
    .getBoundingClientRect();
  const dist = happygeppi2.x - happygeppi1.x;

  for (let i = 0; i < numRows; i++) {
    const Row = document.querySelectorAll(".row")[i];
    Row.style.alignSelf = i % 2 == 0 ? "self-start" : "self-end";
    Row.style.setProperty("--x", `${(2 * (i % 2) - 1) * dist}px`);
  }
}

function RowContent(Row, rowLength, middle) {
  const names = ["happygeppi.github.io", "happygeppi", "github"];

  const name = names.random();
  let text = "";

  for (let i = 0; i < rowLength; i++)
    text += String.fromCharCode(97 + random(0, 26));

  let spot;
  if (middle) spot = Math.round((text.length - name.length) / 2);
  else spot = random(0, text.length - name.length);

  const Ran1 = document.createElement("span");
  const Name = document.createElement("span");
  Name.classList.add("name");
  const Ran2 = document.createElement("span");

  const Ran1Clone = Ran1.cloneNode();
  const NameClone = Name.cloneNode();
  NameClone.classList.add("name");
  const Ran2Clone = Ran2.cloneNode();

  Ran1.innerHTML = text.slice(0, spot);
  Name.innerHTML = name;
  Ran2.innerHTML = text.slice(spot + name.length, text.length);

  Ran1Clone.innerHTML = Ran1.innerHTML;
  NameClone.innerHTML = Name.innerHTML;
  Ran2Clone.innerHTML = Ran2.innerHTML;

  Row.append(Ran1);
  Row.append(Name);
  Row.append(Ran2);

  Row.append(Ran1Clone);
  Row.append(NameClone);
  Row.append(Ran2Clone);

  return text;
}

function CreateMain() {
  HandleTopAnimation();
  CreateProjectLinks();
}

function HandleTopAnimation() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const container = entry.target;
        if (entry.isIntersecting) container.classList.add("animation");
        else if (entry.target.classList.contains("animation"))
          observer.unobserve(entry.target);
      });
    },
    {
      root: null,
      rootMargin: "0px 0px 50px 0px",
    }
  );
  observer.observe(document.getElementById("main-top"));
}

function CreateProjectLinks() {
  let rightleft = true;

  for (const p of projects) {
    const Section = document.createElement("section");
    document.querySelector("main").append(Section);
    const direction = rightleft ? "right" : "left";
    Section.classList.add(direction);

    const A = document.createElement("a");
    Section.append(A);
    A.href = p.folder;
    // A.href = `https://happygeppi.github.io/${p.folder}`;
    A.target = "blank";
    
    const Image = document.createElement("img");
    A.append(Image);
    Image.src = `${p.folder}/preview.png`;
    // Image.src = `https://happygeppi.github.io/${p.folder}/preview.png`;

    const Overlay = document.createElement("div");
    A.append(Overlay);
    Overlay.classList.add("overlay");

    const Title = document.createElement("h2");
    if (rightleft) Section.append(Title);
    else Section.insertBefore(Title, A);
    Title.innerHTML = p.title;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const container = entry.target;
          console.log("animaion");
          if (entry.isIntersecting) container.classList.add("animation");
          else if (entry.target.classList.contains("animation"))
            observer.unobserve(entry.target);
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -100px 0px",
      }
    );
    observer.observe(Section);

    rightleft = !rightleft;
  }
}

const random = (a, b) => Math.floor(Math.random() * (b - a) + a);

Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

Init();
