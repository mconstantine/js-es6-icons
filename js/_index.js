const icons = [
  {
    name: "cat",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "crow",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "dog",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "dove",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "dragon",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "horse",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "hippo",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "fish",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "carrot",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "apple-alt",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "lemon",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "pepper-hot",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "user-astronaut",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
  {
    name: "user-graduate",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
  {
    name: "user-ninja",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
  {
    name: "user-secret",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
];

const iconsContainer = document.getElementById("icons-container");

function insertIcons(iconsArray, iconsCreationContainer) {
  iconsCreationContainer.innerHTML = "";

  //ciclo che passa tutte le icone
  iconsArray.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("box");

    div.innerHTML = `
      <i class="${element.family} ${element.prefix}${element.name}" style="color: ${element.color}"></i>
      <span>${element.name}</span>
    `;

    iconsCreationContainer.append(div);
  });

  //stessa logica del forEach ma con il ciclo for
  // for (let i = 0; i < iconsArray.length; i++) {
  //   const element = iconsArray[i];

  //   const div = document.createElement("div");
  //   div.classList.add("box");

  //   div.innerHTML = `
  //     <i class="${element.family} ${element.prefix}${element.name}" style="color: ${element.color}"></i>
  //     <span>${element.name}</span>
  //   `;

  //   iconsCreationContainer.append(div);
  // }
}

//stampo tutte le icone
insertIcons(icons, iconsContainer);

const iconsTypeSelector = document.getElementById("iconsTypeSelctor");

iconsTypeSelector.addEventListener("change", function () {
  const iconsTypeSelected = this.value;

  //console.log(iconsTypeSelected);

  if (iconsTypeSelected != "all") {
    const filteredIcons = icons.filter((iconArgument) => {
      if (iconArgument.type == iconsTypeSelected) {
        return true;
      }
    });

    //filteredIcons

    //stampo solo l'array di icone che ho filtrato
    insertIcons(filteredIcons, iconsContainer);
  } else {
    // stampo tutte le icone
    insertIcons(icons, iconsContainer);
  }
});
