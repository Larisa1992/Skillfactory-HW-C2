const progressCat = document.querySelector('.cats')
const progressDog = document.querySelector('.dogs')
const progressParrot = document.querySelector('.parrots')

console.log('%O', progressCat)

// специальный объект, в котором можно инициализировать заголовки:
const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
})

// const evtSource = new EventSource("BackendFileName.py");

const url = new URL('https://sf-pyw.mosyag.in/sse/vote/stats')
const ES = new EventSource(url, header)

ES.onerror = error => {
    ES.readyState ? progressCat.textContent = "Some error" : null;
}

// обработка ответа от бэкенда с помощью обработчика onmessage
// вся информация с бэкенда обычно приходит в поле data.
ES.onmessage = message => {
    console.log(message.data)
    obj = JSON.parse(message.data); // преобразуем ответ с бэкенда в формат JSON, чтобы вычислять результат голосования в прцентах
    
    let animals =  obj.cats + obj.dogs + obj.parrots;
    // округление до целого числа в меньшую сторону
    let percentcat = Math.floor((obj.cats/animals)*100);
    let percentdog = Math.floor((obj.dogs/animals)*100);
    let percentparrots = 100 - (percentcat + percentdog); // чтобы в сумме было 100%
    // Math.floor((obj.parrots/animals)*100);

    progressCat.style.cssText = `width: ${percentcat}%;`
    progressDog.style.cssText = `width: ${percentdog}%;`
    progressParrot.style.cssText = `width: ${percentparrots}%;`
    
    progressCat.textContent = `${percentcat}%`
    progressDog.textContent = `${percentdog}%`
    progressParrot.textContent = `${percentparrots}%`

}
