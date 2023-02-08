const superagent = require("superagent")
const fs = require("fs");

/*fs.readFile(`${__dirname}/dog.txt`, "utf-8", (err, data) => {

    superagent
        .get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
        .end((err,res) => {
            if (err) return console.log(err);
            console.log(res.body.message);
            fs.writeFile(`${__dirname}/doglinks.txt`, res.body.message, 'utf-8', err => {
                if (err) return console.log(err)
                console.log('Dog Image Saved to File Successfully');
            });
    });

})*/

/*fs.readFile(`${__dirname}/dog.txt`, "utf-8", (err, data) => {

    superagent
        .get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
        .then(res => {
            console.log(res.body.message)
            fs.writeFile(`${__dirname}/doglinks.txt`, res.body.message, 'utf-8', err => {
                if (err) return console.log(err)
                console.log('Dog Image Saved to File Successfully');
            })

        })
        .catch(err => console.log(err.message))
})*/

const readFilePro = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf-8',  (err, data)=> {
            if (err) reject("File not found")
            resolve(data)
        })
    })
}

const writeFilePro = (file,  data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, 'utf-8',  err => {
            if (err) reject("File not found")
            resolve('Dog Image Saved to File Successfully')
        })
    })
}

/*readFilePro(`${__dirname}/dog.txt`)
    .then(data => {
        superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
            .then(res => writeFilePro(`${__dirname}/doglinks.txt`, res.body.message))
            .then(res => console.log(res))
            .catch(err => console.log(err.message))
            .finally(()=> console.log("I am done"))
    })*/

/*const getDogPics = async () => {
    try{
        const data = await readFilePro(`${__dirname}/dog.txt`)
        const res = await superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
        const text = await writeFilePro(`${__dirname}/doglinks.txt`, res.body.message)
        console.log(text)
        return text
    }
    catch (e){
       throw new Error(e.message)
    }

}
(async () => {
    try {
        const data = await getDogPics()
        console.log(data)
    }
    catch (e){
        console.log(e)
    }
})()*/

const getDogPics = async () => {
    try{
        const data = await readFilePro(`${__dirname}/dog.txt`)
        const res1 = await superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
        const res2 = await superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
        const res3 = await superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
        const all = await Promise.all([res1, res2, res3])
        const images = all.map(el => el.body.message)
        console.log(images)

       const text = await writeFilePro(`${__dirname}/doglinks.txt`, images.join('\n'))
        console.log(text)
        //return text
    }
    catch (e){
        throw new Error(e.message)
    }
}
getDogPics()

