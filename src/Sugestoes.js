function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.image} />
                <div class="texto">
                    <div class="nome">{props.name}</div>
                    <div class="razao">{props.why}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}

export default function Sugestoes() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            <Sugestao
                image='assets/img/bad.vibes.memes.svg'
                name='bad.vibes.memes'
                why='Segue você'
            />

            <Sugestao
                image='assets/img/chibirdart.svg'
                name='chibirdart'
                why='Segue você'
            />

            <Sugestao
                image='assets/img/razoesparaacreditar.svg'
                name='razoesparaacreditar'
                why='Novo no Instagram'
            />

            <Sugestao
                image='assets/img/adorable_animals.svg'
                name='adorable_animals'
                why='Segue você'
            />

            <Sugestao
                image='assets/img/smallcutecats.svg'
                name='smallcutecats'
                why='Segue você'
            />
            
        </div>
    )
}