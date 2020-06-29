const buttonCats = document.getElementsByClassName('btn-cat')[0]
buttonCats.addEventListener('click', async _ => {
    const response = await fetch('https://sf-pyw.mosyag.in/sse/vote/cats', {
        method: 'post'
    })
});

const buttonDogs = document.getElementsByClassName('btn-dog')[0]
buttonDogs.addEventListener('click', async _ => {
    const response = await fetch('https://sf-pyw.mosyag.in/sse/vote/dogs', {
        method: 'post'
    });
});

const buttonParrots = document.getElementsByClassName('btn-parrot')[0]
buttonParrots.addEventListener('click', async _ => {
    const response = await fetch('https://sf-pyw.mosyag.in/sse/vote/parrots', {
        method: 'post'
    });
});
