/**
 * The forEach method of Array, rewritten.
 */
function customForEach(list, callback) {
  for (let i = 0; i < list.length; i++) {
    const item = list[i];

    callback(item);
  }
}

/*
iconsArray.forEach(function(element) {
  const div = document.createElement("div");
  div.classList.add("box");

  div.innerHTML = `
    <i class="${element.family} ${element.prefix}${element.name}" style="color: ${element.color}"></i>
    <span>${element.name}</span>
  `;

  iconsCreationContainer.append(div);
});

customForEach(iconsArray, function(element) {
  const div = document.createElement("div");
  div.classList.add("box");

  div.innerHTML = `
    <i class="${element.family} ${element.prefix}${element.name}" style="color: ${element.color}"></i>
    <span>${element.name}</span>
  `;

  iconsCreationContainer.append(div);
});
*/
