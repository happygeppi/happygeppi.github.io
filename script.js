const projects = [
  {
    title: "Minesweeper",
    description: "Der Klassiker mit cleanem Design.",
    folder: "minesweeper",
  },
  {
    title: "Impulsrakete",
    description: "Steuern Sie die Rakete mit Kraftst&ouml;&szlig;en zum Ziel.",
    folder: "impulsrakete",
  },
  {
    title: "Rakete",
    description: "Fliegen Sie durch das unendliche Universum.",
    folder: "rakete",
  },
  {
    title: "GDC-Homepage",
    description: "Eine etwas andere (sch&ouml;nere) Version der Hompage des Gymnasiums Dresden-Cotta.",
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
    description: "Beobachten Sie, wie sich Photonen verhalten.",
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

function Init() {
  CreateProjectLinks();
}

function CreateProjectLinks() {
  let i = 0;
  for (const project of projects) {
    const A = document.createElement("a");
    document.querySelector("main").append(A);
    A.href = `${project.folder}/index.html`;
    A.style.backgroundImage = `url(${project.folder}/preview.png)`;

    const Text = document.createElement("div");
    Text.classList.add("project-text");
    A.append(Text);

    const Title = document.createElement("h2");
    Title.innerHTML = project.title;
    Text.append(Title);

    const Description = document.createElement("p");
    Description.innerHTML = project.description;
    Text.append(Description);

    i++;
  }
}

Init();
