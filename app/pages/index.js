
import {
  Container,
  Image,
  Description,
  Heading2,
  Paragraph,
  CardContent,
  CardBorder,
  CardText,
  IconContent,
  IconSocial
} from './styles'

import perfil from '../public/perfil.png';

export default function Home() {
  return (
    <Container>
      <Image src='./perfil.png' alt='Perfil' />

      <Description>
        <Heading2 text='Diego Pereira'/>
        <Paragraph text='Professor/Programador' />
      </Description>

      <CardContent>
        <CardBorder/>
        <CardText text='Curso de HTML/CSS/JS' />
      </CardContent>

      <CardContent>
        <CardBorder/>
        <CardText text='Curso de HTML/CSS/JS' />
      </CardContent>

      <CardContent>
        <CardBorder/>
        <CardText text='Curso de HTML/CSS/JS' />
      </CardContent>

      <CardContent>
        <CardBorder/>
        <CardText text='Curso de HTML/CSS/JS' />
      </CardContent>

      <CardContent>
        <CardBorder/>
        <CardText text='Curso de HTML/CSS/JS' />
      </CardContent>

      <IconContent>
        <IconSocial src='./facebook.png' />
        <IconSocial src='./instagram.png' />
        <IconSocial src='./twitter.png' />
        <IconSocial src='./linkedin.png' />
        <IconSocial src='./youtube.png'/>
      </IconContent>
      
    </Container>
  )
}
