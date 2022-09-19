export default function Sugestoes() {

    const listaSugestoes = [
        { image: 'assets/img/bad.vibes.memes.svg', name: 'bad.vibes.memes', why: 'Segue você' },
        { image: 'assets/img/chibirdart.svg', name: 'chibirdart', why: 'Segue você' },
        { image: 'assets/img/razoesparaacreditar.svg', name: 'razoesparaacreditar', why: 'Novo no Instagram' },
        { image: 'assets/img/adorable_animals.svg', name: 'adorable_animals', why: 'Segue você' },
        { image: 'assets/img/smallcutecats.svg', name: 'smallcutecats', why: 'Segue você' }
    ]


    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {listaSugestoes.map((s) => (

                <div class="sugestao">
                    <div class="usuario">
                        <img src={s.image} />
                        <div class="texto">
                            <div class="nome">{s.name}</div>
                            <div class="razao">{s.why}</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>

            ))}            

        </div>
    )
}