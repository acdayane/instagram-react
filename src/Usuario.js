import React from "react"

export default function Usuario() {

    const [photo, setPhoto] = React.useState("assets/img/catanacomics.svg")  
    const [user, setUser] = React.useState('Catana')

    function whoAreYou (){
        setUser(prompt ('Olá! Qual é o seu nome?'))   
    }
    
    function yourPhoto () {
        setPhoto(prompt ('Coloque uma URL para sua foto de perfil:'))     
    }

    return (
        <div class="usuario">
            <img src={photo} onClick={yourPhoto} />
            <div class="texto">
                <strong>{user.toLowerCase()}comics</strong>
                <span>
                    {user}
                    <ion-icon name="pencil" onClick = {whoAreYou}></ion-icon>
                </span>
            </div>
        </div>
    )
}