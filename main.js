// ### 1. Récupère le h1 dans une variable 
// ### 2. Créer un programme qui met le texte du h1 en bleu
// ### 3. Met ce programme dans une function
// ### 4. Appelle cette function pour qu'elle soit executé 
// ### 5. Met un écouteur d'événement sur le h1, qui au clique lance la function

let h1 = document.querySelector('h1');

h1.addEventListener('click', () => {
    h1.setAttribute('style' , 'color:blue')
})
