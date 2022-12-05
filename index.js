const infoUser = require("./information");
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Salut ${infoUser.informationUser.userName} de ${infoUser.informationUser.cityUser} !`,
    e : "oO",
    T : "U "
}));