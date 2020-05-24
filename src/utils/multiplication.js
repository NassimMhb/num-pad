function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const creerQuestion = () => {
    let tabJson = [];

    let premierChiffre = entierAleatoire(1, 10);
    let deuxiemeChiffre = entierAleatoire(1, 10);
    let resultat = premierChiffre * deuxiemeChiffre

    tabJson = [
        {
            premierChiffre : premierChiffre,
            deuxiemeChiffre : deuxiemeChiffre,
            resultat : resultat
        }
    ];

    return tabJson;
};