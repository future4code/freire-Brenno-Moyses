    enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
    }

    type movie = {
        name: string,
        release: number,
        genre: GENERO,
        score?: number
    } 
    
    function getMovie (
        name: string,
        release: number,
        genre: GENERO,
        score?: number
        ) : movie{
            return {name:name,release:release,genre:genre,score:score}
        }

        console.log(getMovie("Filme",2000,GENERO.ACAO,30))

        
