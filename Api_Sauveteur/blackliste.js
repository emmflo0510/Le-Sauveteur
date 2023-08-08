// import de la BDD
const blacklist = [];

// Fonction pour ajouter un utilisateur à la liste noire
function addToBlacklist(username) {
  if (!blacklist.includes(username)) {
    blacklist.push(username);
    console.log(`L'utilisateur ${username} a été ajouté à la liste noire.`);
  } else {
    console.log(`L'utilisateur ${username} est déjà dans la liste noire.`);
  }
}

// Fonction pour vérifier si un utilisateur est dans la liste noire
function isUserBlacklisted(username) {
    if (blacklist.includes(username)){
        
        console.log('l\'utilisateur ${username} est blacklisté');
    }else{
        console.log ('l\'utilisateur ${username} n\'est pas blacklisté');
    };
//   lien avec le front avec un input
}

// Test de la fonctionnalité
const abusiveUser = "utilisateurAbusif";

addToBlacklist(abusiveUser);

if (isUserBlacklisted(abusiveUser)) {
  console.log(`L'utilisateur ${abusiveUser} est dans la liste noire.`);
} else {
  console.log(`L'utilisateur ${abusiveUser} n'est pas dans la liste noire.`);
}