import {SQLite} from 'expo-sqlite'
const db = SQLite.openDatabase('food.db')
export const init = ()=>{
    const promise = new Promise((res,rej)=>{
      db.transaction((tx)=>{
        tx.executeSql('CREATE TABLE IF NOT EXISTS food (id INTEGER PRIMARY KEY NO NULL, title TEXT NOT NULL,image TEXT NOT NULL, price REAL NOT NULL, quantity REAL NOT NULL )',
        [],
        ()=>{res()},
        (err)=>{rej(err)}
        )
      })
    })
    return promise
}

export const insertToCarrito = (title,image,price,quantity)=>{
    const promise = new Promise((res,rej)=>{
        db.transaction((tx)=>{
            tx.executeSql('INSERT INTO food(title,image,price,quantity) VALUES(?,?,?,?)',[title,image,price,quantity],
             (result) => {res(result)},
             (err)=>{rej(err)}
            )
        })
    })
    return promise
}