// dziala dodawanie
// const bookshelf = require('../config/bookshelf');
// const {application} = require("express");
//
// const Application = bookshelf.Model.extend({
//     tableName: 'aplikacja'
// });
//
// module.exports.create= (application) =>{
//     return new Application({
//         nazwa_produktu: application.nazwa_produktu,
//         kalorie: application.kalorie
//     }).save();
// }

// dziala przeliczanie
// const bookshelf = require('../config/bookshelf');
//
// const Application = bookshelf.Model.extend({
//     tableName: 'aplikacja'
// });
//
// module.exports.create = (applicationData) => {
//     return new Application({
//         nazwa_produktu: applicationData.nazwa_produktu,
//         kalorie: applicationData.kalorie
//     }).save();
// }
//
// module.exports = Application;

// oba dzialaja
const bookshelf = require('../config/bookshelf');

const Application = bookshelf.Model.extend({
    tableName: 'aplikacja'
});

Application.create = (applicationData) => {
    return new Application({
        nazwa_produktu: applicationData.nazwa_produktu,
        kalorie: applicationData.kalorie
    }).save();
}

module.exports = Application;
