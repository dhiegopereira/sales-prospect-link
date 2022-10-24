
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

import Link from 'next/link';

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
        <CardText text='Curso de React' />
      </CardContent>

      <CardContent>
        <CardBorder/>
        <CardText text='Curso de Angular' />
      </CardContent>

      <CardContent>
        <CardBorder/>
        <CardText text='Curso de C# .Net Core' />
      </CardContent>

      <CardContent>
        <CardBorder/>
        <CardText text='Curso de Java' />
      </CardContent>

      <IconContent>
        <Link href='#'>
          <IconSocial src='./facebook.png' />
        </Link>
        <Link href='#'>
          <IconSocial src='./instagram.png' />
        </Link>
        <Link href='#'>
          <IconSocial src='./twitter.png' />
        </Link>
        <Link href='#'>
          <IconSocial src='./linkedin.png' />
        </Link>
        <Link href='#'>
          <IconSocial src='./youtube.png'/>
        </Link>
      </IconContent>
      
    </Container>
  )
}
