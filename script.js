document.addEventListener("DOMContentLoaded", function() {
    const serverStatusElement = document.getElementById("server-status");
    const playerCountElement = document.getElementById("player-count");


    function fetchServerStatus() {

        fetch("https://api.example.com/server-status")
            .then(response => response.json())
            .then(data => {
                serverStatusElement.textContent = data.status ? "Ouvert" : "Fermé";
                serverStatusElement.style.color = data.status ? "green" : "red";
                playerCountElement.textContent = data.players;
            })
            .catch(error => {
                console.error("Erreur lors de la récupération de l'état du serveur:", error);
                serverStatusElement.textContent = "Indisponible";
                serverStatusElement.style.color = "red";
                playerCountElement.textContent = "Indisponible";
            });
    }

   
    fetchServerStatus();


    setInterval(fetchServerStatus, 30000);
});
