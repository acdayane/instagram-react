function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.image} />
            </div>
            <div class="usuario">
                {props.text}
            </div>
        </div>
    )
}

export default function Stories() {
    return (
        <div class="stories">

            <Story image="assets/img/9gag.svg" text='9gag'/>
            <Story image="assets/img/meowed.svg" text='meowed'/>
            <Story image="assets/img/barked.svg" text='barked'/>
            <Story image="assets/img/nathanwpylestrangeplanet.svg" text='nathanwpylestrangeplanet'/>
            <Story image="assets/img/wawawicomics.svg" text='wawawicomics'/>
            <Story image="assets/img/respondeai.svg"  text='respondeai'/>
            <Story image="assets/img/filomoderna.svg" text='filomoderna'/>
            <Story image="assets/img/memeriagourmet.svg" text='memeriagourmet'/>            

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
            
        </div>
    )
}