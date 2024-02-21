const Application = require('../models/application');


// exports.store = (req, res) => {
//     console.log('Body:', req.body); // Dodaj konsolę, aby sprawdzić, co jest przekazywane w ciele żądania
//     Application.create({
//         'nazwa_produktu': req.body.Danie,
//         'kalorie': req.body.Kalorie
//     }).then(() => {
//         res.json({ status: 'success' }); // Zwracamy status "success" po pomyślnym utworzeniu rekordu
//     }).catch(error => {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     });
// }


// dziala ale w oddzielnym oknie
exports.store = (req,res) => {


    Application.create({
        'nazwa_produktu': req.body.Danie,
        'kalorie': req.body.Kalorie
    }).then(function (){
        res.json({
            'Danie' : req.body.Danie,
            'Kalorie' : req.body.Kalorie
        })
        console.log(req.body)
    });
}



// exports.calculate = (req,res) => {
//     res.json({
//         'Sniadanie' : req.body.Sniadanie,
//         'Sniadanie_ilosc' : req.body.Sniadanie_ilosc,
//         'Obiad' : req.body.Obiad,
//         'Obiad_ilosc' : req.body.Obiad_ilosc,
//         'Kolacja' : req.body.Kolacja,
//         'Kolacja_ilosc' : req.body.Kolacja_ilosc
//     })
//     console.log(req.body)
// }

// exports.calculate = (req, res) => {
//     const Sniadanie = req.body.Sniadanie;
//     const Sniadanie_ilosc = req.body.Sniadanie_ilosc;
//     const Obiad = req.body.Obiad;
//     const Obiad_ilosc = req.body.Obiad_ilosc;
//     const Kolacja = req.body.Kolacja;
//     const Kolacja_ilosc = req.body.Kolacja_ilosc;
//     const meals = [Sniadanie,Obiad,Kolacja];
//     const calories = [Sniadanie_ilosc,Obiad_ilosc,Kolacja_ilosc];
//     let result = 0;
//
//     meals.forEach(meal => {
//         const application = Application.where({ nazwa_produktu: meal }).fetch()
//             .then(application => {
//                 if (application) {
//                     result += application.get('kalorie') * calories[meal];
//                 }
//             })
//             .catch(error => console.error(error));
//     });
//
//     res.json(result);
//     console.log(result);
// }
//dziala !!!
exports.calculate = async (req, res) => {
    try {
        const Sniadanie = req.body.Sniadanie;
        const Sniadanie_ilosc = req.body.Sniadanie_ilosc;
        const Obiad = req.body.Obiad;
        const Obiad_ilosc = req.body.Obiad_ilosc;
        const Kolacja = req.body.Kolacja;
        const Kolacja_ilosc = req.body.Kolacja_ilosc;

        const meals = [Sniadanie, Obiad, Kolacja];
        const calories = [Sniadanie_ilosc, Obiad_ilosc, Kolacja_ilosc];
        let result = 0;

        for (let i = 0; i < meals.length; i++) {
            const meal = meals[i];
            const application = await Application.where({ nazwa_produktu: meal }).fetch();
            if (application) {
                result += application.get('kalorie') * calories[i]/100;
            }
        }

        res.json(result);
        console.log(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }






    // } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ error: 'Internal Server Error' });
    // }
}






