
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
} from '../styles/styles'

import { useState } from 'react';

export default function Home() {
  const [infos, setInfos] = useState([
    {
      title: 'Provadores',
      link: 'https://api.whatsapp.com/send?phone=5588993321272&text=Estou%20interessado%20em%20*Informações%20sobre%20Provadores*'
    },
    {
      title: 'Divulgações nos stories',
      link: 'https://api.whatsapp.com/send?phone=5588993321272&text=Estou%20interessado(a)%20em%20*Divulgações%20nos%20stories*'
    },
    {
      title: 'Divulgações no feed',
      link: 'https://api.whatsapp.com/send?phone=5588993321272&text=Estou%20interessado(a)%20em%20*Divulgações%20no%20Feed*'
    },
    {
      title: 'Recebidos e parcerias',
      link: 'https://api.whatsapp.com/send?phone=5588993321272&text=Estou%20interessado(a)%20em%20*Recebidos%20e%20Parcerias*'
    }
  ]);
  const [icons, setIcons] = useState([
    {
      src: './instagram.png',
      alt: 'Instagram',
      href: 'https://www.instagram.com/leiidyane1/',
      size: 32
    },
    {
      src: './whatsapp.png',
      alt: 'Whatsapp',
      href: 'https://api.whatsapp.com/send?phone=5588993321272&text=Estou%20entrando%20em%20contato%20pois%20gostei%20muito%20do%20seu%20perfil.%20Podemos%20conversa?',
      size: 30
    }
  ])



  return (
    <Container>
      <Image src='./perfil.jpg' alt='Perfil' />

      <Description>
        <Heading2 text='Leidiane Carneiro'/>
      </Description>

      {
        infos.map(info => (
          <CardContent key={info.title} href={info.link} target='_blank'>
            <CardBorder/>
            <CardText text={info.title} />
          </CardContent>
        ))
      }

      <IconContent>
        {
          icons.map(icon => (
            <a key={icon.href} href={icon.href} target='_blank'>
              <IconSocial src={icon.src} alt={icon.alt} width={icon.size} />
            </a>       
          ))
        }
        
      </IconContent>
      
    </Container>
  )
}
