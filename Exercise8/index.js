const geoLocation = () => {
  document.getElementById("button").style.display = "none";
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const myPosition = document.createElement("div");
      myPosition.innerText = `Mi trovo a ${lat}, ${lon}`;
      document.body.appendChild(myPosition);

      const googleMapsAnchor = document.createElement("a");
      googleMapsAnchor.innerText = "Link to gmaps";
      googleMapsAnchor.href = `https://www.google.it/maps/@${lat},${lon}`;
      document.body.appendChild(googleMapsAnchor);
    },
    () => (window.location.href = "https://youtube.com")
  );
};

const main = () => {
  const button = document.createElement("button");
  button.setAttribute("id", "button");
  button.innerText = "Localizza";
  document.body.appendChild(button);
  button.addEventListener("click", () => geoLocation());
};

main();
