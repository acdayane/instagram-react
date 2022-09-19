import React from "react"

function PropsUser (props) {

    function whoAreYou (){
        props.setUser(prompt ('Olá! Qual é o seu nome?'))   
    }
    
    function yourPhoto () {
        props.setPhoto(prompt ('Coloque uma URL para sua foto de perfil:'))     
    }

    return (
        <div class="usuario">
            <img src={props.image} onClick={yourPhoto} />
            <div class="texto">
                <strong>{props.nameInstagram}</strong>
                <span>
                    {props.name}
                    <ion-icon name="pencil" onClick = {whoAreYou}></ion-icon>
                </span>
            </div>
        </div>
    )
    
}

export default function Usuario() {

    const [photo, setPhoto] = React.useState("assets/img/catanacomics.svg")  
    const [user, setUser] = React.useState('Catana')

    return (
        
            <PropsUser
                name={user}
                nameInstagram='catanacomics'
                image={photo}
                setPhoto = {setPhoto}
                setUser= {setUser}
            />
        
    )
   
}