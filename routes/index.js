var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

test();

function test(){

    var session = {
        'values': [],
    };
    session.values.push({ 'name': 0, 'x': 450, 'y': 250 });
    session.values.push({ 'name': 1, 'x': 420, 'y': 260 });
    console.log(session.values[0].x)
    /*
    let array = {};
    array["val"] = "v" + 0;
    array["y"] = 5;
    array["x"] = 4;

    let name = 0;
    let x = 5;
    let y = 3
    let val = []
    val.push(name,x,y);
    console.log(val);
    */

    const fs = require('fs')
    fs.readFile('C:\\Users\\roman\\WebstormProjects\\node_s2e\\public\\json\\myfile.json', 'utf8', (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err)
            return
        }
        console.log('File data:', jsonString)
    })
    const customer = {
        name: "v1",
        x: 0,
        y: 12,
    }
    const jsonString = JSON.stringify(session)
    fs.writeFile('C:\\Users\\roman\\WebstormProjects\\node_s2e\\public\\json\\myfile.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })
}