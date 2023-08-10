const projects = [
  {
    title: "Minesweeper",
    description: "Spielen Sie eine simple Version von Minesweeper.",
    folder: "minesweeper",
  },
  {
    title: "Impulsrakete",
    description: "Steuern Sie die Rakete zum Ziel.",
    folder: "impulsrakete",
  },
  {
    title: "Fourier Zeichnen",
    description: "Zeichnen mit Fourier Reihen.",
    folder: "fourier",
  },
  {
    title: "Bezier Kurven",
    description: "Ein Werkzeug zum Erstellen von Kurven.",
    folder: "bezier",
  },
  {
    title: "Rakete",
    description: "Fliegen Sie durch das unendliche Universum.",
    folder: "rakete",
  },
  {
    title: "GDC-Homepage",
    description:
      "Eine verbesserte Version der Homepage des Gymnasiums Dresden-Cotta.",
    folder: "gdc",
  },
  {
    title: "Vier Gewinnt",
    description: "Spielen Sie Vier Gewinnt.",
    folder: "viergewinnt",
  },
  {
    title: "Deal or no Deal",
    description: "Wie die TV-Gameshow.",
    folder: "dealornodeal",
  },
  {
    title: "SpaceSAX",
    description: "Mein erstes Projekt.",
    folder: "spacesax",
  },
  {
    title: "Lichtsimulator",
    description: "Beobachten Sie Lichtbrechung und Reflexion.",
    folder: "licht",
  },
  {
    title: "Flappy Bird",
    description: "Eine minimalistische Version des Klassikers.",
    folder: "flappybird",
  },
  {
    title: "Sudoku-L&ouml;ser",
    description: "Lassen Sie Ihre Sudokus l&ouml;sen.",
    folder: "sudoku",
  },
  {
    title: "Turingmaschine",
    description: "Programmieren Sie Ihre eigene Turingmaschine.",
    folder: "turingmaschine",
  },
  {
    title: "Pong",
    description: "In einer Freistunde am Schullaptop erstellt.",
    folder: "pong",
  },
];

let block, w, h;

function Init() {
  CreateProjectLinks();
  setTimeout(() => {
    CreateHeading();
    Update();
  }, 100);
}

function Update() {
  block.update();

  requestAnimationFrame(Update);
}

function CreateHeading() {
  const rect = document.querySelector("header").getBoundingClientRect();
  w = rect.width;
  h = rect.height;

  w = innerWidth;
  h = innerHeight;

  block = new Block();
}

function CreateProjectLinks() {
  for (const project of projects) {
    const Section = document.createElement("section");
    document.querySelector("main").append(Section);

    const A = document.createElement("a");
    A.href = project.folder;
    A.target = "_blank";
    A.style.backgroundImage = `url(${project.folder}/preview.png)`;
    Section.append(A);

    const TextWrapper = document.createElement("div");
    TextWrapper.classList.add("text");
    Section.append(TextWrapper);

    const Title = document.createElement("h2");
    Title.innerHTML = project.title;
    TextWrapper.append(Title);

    const Description = document.createElement("p");
    Description.innerHTML = project.description;
    TextWrapper.append(Description);
  }
}

const random = (a, b) => Math.floor(Math.random() * (b - a + 1) + a);

class Block {
  constructor() {
    this.initHTML();
    this.initVel();
  }

  initHTML() {
    this.html = document.querySelector("header h1");

    const rect = this.html.getBoundingClientRect();
    this.w = rect.width;
    this.h = rect.height;

    this.x = (w - this.w) / 2;
    this.y = (h - this.h) / 2;

    this.updatePosition();
    this.updateColor();
  }

  initVel() {
    this.angle = Math.PI / 4 + (random(0, 3) * Math.PI) / 2;

    const plusminus = Math.PI / 6;
    this.angle += Math.random() * plusminus - plusminus / 2;

    this.speed = 5;

    this.vx = Math.round(Math.cos(this.angle) * this.speed);
    this.vy = Math.round(Math.sin(this.angle) * this.speed);
  }

  updateColor() {
    if (this.hue == undefined) this.hue = random(0, 360);
    this.hue += random(60, 300);
    this.sat = random(80, 95);

    this.light = 50;
    this.html.style.backgroundColor = `hsl(${this.hue}, ${this.sat}%, ${this.light}%)`;
  }

  updatePosition() {
    this.html.style.left = `${this.x}px`;
    this.html.style.top = `${this.y}px`;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  corner() {
    return;
  }

  hitEdge() {
    this.updateColor();
    this.makeParticles();
  }

  makeParticles() {
    return;
  }

  edges() {
    let hitX = false;
    let hitY = false;

    if (this.x < 0) {
      this.x = 0;
      hitX = true;
    }
    if (this.x + this.w > w) {
      this.x = w - this.w;
      hitX = true;
    }
    if (this.y < 0) {
      this.y = 0;
      hitY = true;
    }
    if (this.y + this.h > h) {
      this.y = h - this.h;
      hitY = true;
    }

    if (hitX) this.vx *= -1;
    if (hitY) this.vy *= -1;
    if (hitX || hitY) this.hitEdge();
    if (hitX && hitY) this.corner();
  }

  update() {
    this.move();
    this.edges();
    this.updatePosition();
  }
}

Init();
