import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {
  const [curtido, setCurtido] = useState(false)
  const [numeroDeCurtidas, setNumeroDeCurtidas] = useState(0)
  const [comentando, setComentando] = useState(false)
  const [numeroDeComentarios, setNumeroDeComentarios] = useState(false)
  const [comentarios, setComentarios] = useState ([])

  const onClickCurtida = () => {
    if(curtido) {
      setNumeroDeCurtidas(numeroDeCurtidas -1)
    } else {
      setNumeroDeCurtidas(numeroDeCurtidas +1)
    }
      setCurtido(!curtido)
  };

  const onClickComentario = () => {
    setComentando(!comentando)
  };

    const enviarComentario = (comentario) => {
    const Comentarios = [...comentarios, comentario]

    setComentando(false)
    setComentarios(Comentarios)
    setNumeroDeComentarios(numeroDeComentarios +1)
  }

  const IconeCurtida = curtido?iconeCoracaoPreto:iconeCoracaoBranco

  const caixaDeComentario = comentando?(<SecaoComentario enviarComentario={enviarComentario}/>
  ):(
    comentarios.map((comentario => {
      return <p>{comentario}</p>
    }))
  )


  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={IconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroDeCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroDeComentarios}
        />
      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  )
}

export default Post