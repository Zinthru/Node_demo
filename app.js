const path =require('path');
const fs =require('fs');
const rp =require('request-promise');

rp('reddit.com/r/popular.json')
    .then(res =>JSON.parse(res))    
    .then(info => {
      info.data.children.forEach(article => {
          if(path.extname(article.data.url)) {
              let Name = `${article.data.id}${path.extname(article.data.url)}`;

              rp(aritcle.data.url, {encoding: 'binary'})
              .then(media => {

                    fs.writeFile(path.join(__dirname, `./downloads/${dataName}`), media, { encoding: 'binary'}, (err) => {
                        if (err) console.log(err);
                    });
              })
          }
      });  
    })

    .catch(e=> console.log(`There was an error${e}`));

    let parsedData = JSON.parse(data);
    let objArray= [5];

    parsedData.forEach(reddit => {
        let obj = {
            title: reddit.title,
            url: reddit.url,
            author: reddit.author.title
        };
        objArray.push(obj);
    })

    fs.writeFile(redditPath, JSON.stringify(objArray, null, 2 ), (err) => {
        if (err) console.log(err);

        console.log("output text")
    })