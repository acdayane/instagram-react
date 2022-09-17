import React from "react"

function Post(props) {

    const [savePost, setSavePost] = React.useState("bookmark-outline")

    function salvarPost() {
        (savePost === 'bookmark-outline') ? setSavePost("bookmark") : setSavePost("bookmark-outline")
    }

    const [like, setLike] = React.useState("heart-outline")
    const [contador, setContador] = React.useState(99);
    const [colorHeart, setColorHeart] = React.useState ("")

    function darLike() {
        if (like === 'heart-outline') {
            setLike("heart")
            setContador(contador + 1) 
            setColorHeart("heart-icon")       
        }
        else {
            setLike("heart-outline")
            setContador(contador - 1)
            setColorHeart("") 
        }
    }

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.userPic}/>
                    {props.userName}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.picture} onClick={darLike} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon class={colorHeart} name={like} onClick={darLike}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={savePost} onClick={salvarPost}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.joinPic} />
                    <div class="texto">
                        Curtido por <strong>{props.joinName}</strong> e <strong>outras {contador} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default function Posts() {
    return (
        <div class="posts">

            <Post
                userPic='assets/img/meowed.svg'
                userName='meowed'
                picture='assets/img/gato-telefone.svg'
                joinPic='assets/img/respondeai.svg'
                joinName='respondeai'
            />

            <Post
                userPic='assets/img/barked.svg'
                userName='barked'
                picture='assets/img/dog.svg'
                joinPic='assets/img/adorable_animals.svg'
                joinName='adorable_animals'
            />

        </div>
    )
}