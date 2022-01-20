document.getElementById('button1').addEventListener('click',getData);
document.getElementById('button2').addEventListener('click',getJson);
document.getElementById('button3').addEventListener('click',getApiData);

function getData(){
    fetch('data.txt')
    .then(function(respond){
         return respond.text();
    })
    .then(function(data){
        console.log(data);
        document.getElementById('output').innerHTML=data;
    })
    .catch(function(err){
        console.log(err);
    })
}
function getJson(){
    fetch('posts.json')
    .then(function(respond){
        return respond.json();
    })
    .then(function(data){
        console.log(data);
        let output='';
        data.forEach(function(post){
            output+=`<li>${post.id}</li>
            <li>${post.name}</li>
            <li>${post.age}</li>
            `
        })
        document.getElementById('output').innerHTML=output;
    })
    .catch(function(err){
        console.log(err);
    });
}

function getApiData(){
    fetch("https://api.github.com/users")
    .then(function(respond){
        return respond.json();
    })
    .then(function(data){
        console.log(data);
        let output='';
    data.forEach(function(user){
        output+=`<li>${user.login}</li>`;
    });
    document.getElementById('output').innerHTML=output;
    })
    .catch(function(err){
        console.log(err);
    });
}