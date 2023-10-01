let welcomeText = document.querySelector('.helloText')

let hour = new Date().getHours()
if(hour >= 0 && hour < 12){
    welcomeText.innerHTML = 'Good Morning'
} else {
    welcomeText.innerHTML = 'Good Afternoon'
}