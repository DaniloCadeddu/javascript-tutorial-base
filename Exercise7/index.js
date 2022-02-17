const main = () => {
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

main();
