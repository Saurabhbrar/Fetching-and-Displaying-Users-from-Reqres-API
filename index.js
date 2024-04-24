
let data = document.getElementById('data')
let button = document.getElementById('click')

button.addEventListener('click', function () {
    fetch('https://reqres.in/api/users')
        .then(res => res.json())
        .then(data => {
            /* console.log(data.data[0].first_name)
            console.log(data.data[0].email)
            console.log(data.data[0].avatar) */
            data.data.forEach(element => {
                let data = document.getElementById('data')
                let name = document.createElement('h1')
                name.innerText = "Name:" + element.first_name
                data.append(name)

                let email = document.createElement('p')
                email.innerText = element.email
                data.append(email)

                let avatar = document.createElement('img')
                avatar.src = element.avatar
                data.append(avatar)
            });


        })
    button.disabled = true
    let mybutton = document.getElementById('mybuttons')
    let reloadbtn = document.createElement('button')
    reloadbtn.innerText = 'Reload';
    reloadbtn.id = 'refresh'
    mybutton.append(reloadbtn)

    const refreshBtn = document.getElementById("refresh");
    function handleClick() {
        window.location.reload();
    }
    refreshBtn.addEventListener("click", handleClick);

})