async function getPlayerCount() {
  try {
    const response = await fetch("https://api.mcstatus.io/v2/status/bedrock/play.arisia.fr:19132");
    const data = await response.json();
    const nbJoueurs = data.players.online;
    document.getElementById("nb-joueurs").textContent = nbJoueurs;
  } catch (error) {
    console.error("Erreur en récupérant les joueurs :", error);
    document.getElementById("nb-joueurs").textContent = "Erreur";
  }
}