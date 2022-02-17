const handleClick = () => {
  const input = document.getElementById("input-box");
  const isOk = !input.value.toLowerCase().includes("a");

  const div = document.createElement("div");
  div.innerText = isOk ? "Ok" : "Error";
  div.classList.add(isOk ? "ok" : "error");

  document.body.insertBefore(div, input);
};
