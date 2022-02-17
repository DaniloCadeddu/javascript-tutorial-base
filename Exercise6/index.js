const obj = [
  {
    id: 1,
    name: "Gino",
  },
  {
    id: 2,
    name: "Pino",
  },
  {
    id: 3,
    name: "Mario",
  },
  {
    id: 4,
    name: "Rosario",
  },
];

const changeDisplayedName = () => {
  const dropdown = document.getElementById("drop-down");
  const nameDiv = document.getElementById("name");

  const { id, name } = obj.find(({ id }) => dropdown.value === id.toString());
  nameDiv.innerText = `${id} ${name}`;
};

const main = () => {
  const dropdown = document.getElementById("drop-down");

  obj.map(({ name, id }) => {
    const option = document.createElement("option");

    option.innerText = name;
    option.value = id;

    dropdown.options.add(option);
  });
  changeDisplayedName();
};

main();
