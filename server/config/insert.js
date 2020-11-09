const db = require('./db');
const tmp = require('./tmp.json');

const Insert = () =>{
    
    tmp.forEach(element => {
        const SQL = `INSERT INTO 수입바나나 VALUES('${element[0]}', ${element[1]})`;
        db.query(SQL, ()=>{
            console.log('good');
        })
        console.log(SQL);
    });
    
}

Insert();