<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Ciberespacio fundamentos y alcance
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center.align-items-center
          .col-lg-9.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0.mb-3
            p El ciberespacio es un entorno digital compuesto por redes interconectadas a través de Internet y otros sistemas de comunicación. Este espacio permite la interacción social, el comercio, la educación y la administración pública, transformando la forma en que las personas trabajan, aprenden y se relacionan. Sin embargo, su crecimiento también ha generado desafíos en seguridad digital y privacidad.
            p Más allá de la conectividad entre dispositivos, el ciberespacio se sustenta en una infraestructura tecnológica compleja que incluye servidores, centros de datos, computación en la nube y redes descentralizadas. Este ecosistema ha impulsado el desarrollo de la economía digital, dando lugar a nuevas formas de negocio como el comercio electrónico, las criptomonedas y la inteligencia artificial aplicada.
            .tarjeta.tarjeta--gris.p-4
              .row.justify-content-center.align-items-center
                .col-auto.d-none.d-lg-block
                  figure
                    img(src='@/assets/curso/temas/tema1/img02.svg', alt='Imagen decorativa')
                .col-10.mb-3
                  p.mb-0 Las amenazas en el ciberespacio han evolucionado junto con la tecnología. Actualmente, los ataques cibernéticos incluyen <em>ransomware</em>, inteligencia artificial maliciosa, ingeniería social y espionaje digital. Estos riesgos afectan no solo a individuos y empresas, sino también a gobiernos, planteando desafíos en ciberseguridad y gobernanza digital.

          .col-lg-3.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema1/img01.png', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-0(data-aos="flip-up")
      .col-12
        .row.justify-content-center.align-items-center
          .col-lg-9.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-3
            p Debido a su naturaleza global, la regulación del ciberespacio es un reto en constante evolución. Organismos como la ONU, la Unión Europea y la OEA han establecido marcos legales y políticas de cooperación internacional para abordar delitos cibernéticos y proteger los derechos digitales. Sin embargo, el avance tecnológico supera muchas veces las regulaciones existentes, lo que exige un enfoque dinámico en la legislación.
            .row
              .col-auto.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/tema1/img04.png', alt='Imagen decorativa')
              .col-10.mb-3
                p.mb-0 Comprender el ciberespacio es esencial para navegar de manera segura en un mundo digitalizado y para enfrentar los desafíos que surgen en este entorno en constante transformación.

          .col-lg-3.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema1/img03.png', alt='Imagen decorativa')
    
    //- separador
    //- #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
    //-   h2 1.1 Concepto del ciberespacio

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Historia y evolución del ciberespacio

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center.align-items-center
          .col-lg-8.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-3
            p El ciberespacio es el resultado de décadas de avances en informática y telecomunicaciones. Su origen se remonta a la creación de las primeras computadoras electrónicas en la década de 1940, pero fue con el desarrollo de redes interconectadas cuando comenzó a tomar forma.
            p En 1969, la Agencia de Proyectos de Investigación Avanzados de Defensa de EE. UU. (DARPA) creó ARPANET, la primera red de computadoras, sentando las bases de lo que hoy conocemos como Internet. En la década de 1980, con la popularización de las computadoras personales, el acceso a las redes se amplió y permitió la comunicación digital a mayor escala.
            .row
              .col-auto.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/tema1/img06.png', alt='Imagen decorativa')
              .col-10.mb-3
                p.mb-0 El gran punto de inflexión llegó en 1991 con la invención de la World Wide Web (WWW) por Tim Berners-Lee, que facilitó la navegación de información en línea y aceleró la expansión del ciberespacio. A partir de mediados de los años 90, el auge de los foros, chats y redes sociales transformó este entorno en un espacio de interacción global.

          .col-lg-4.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema1/img05.png', alt='Imagen decorativa')

    .bloque-texto-g.bloque-texto-g--inverso.color1.p-3.p-sm-4.p-md-5.mb-0(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img07.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Durante las décadas de 2000 y 2010, el crecimiento del ciberespacio fue impulsado por la proliferación de los teléfonos inteligentes, el comercio electrónico y plataformas como Facebook, Twitter y YouTube. Sin embargo, esta expansión también trajo desafíos como la seguridad en línea, la privacidad y la regulación de los derechos digitales.
        br
        br
        p.mb-0 Hoy en día, el ciberespacio sigue evolucionando con tecnologías emergentes como la inteligencia artificial, el Internet de las Cosas (IoT) y la realidad virtual, consolidándose como un entorno indispensable para la sociedad, aunque también plantea retos significativos en materia de ciberseguridad y protección de datos.

      
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Características del ciberespacio

    p.mb-5 El ciberespacio es un entorno digital dinámico que ha transformado la manera en que las personas interactúan, trabajan y acceden a la información. Su naturaleza única lo diferencia de otros espacios de comunicación y transacción, ya que no está limitado por fronteras físicas ni restricciones temporales. A continuación, se presentan sus principales características:

    .row.justify-content-center.align-items-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/img08.png", alt="alt").img400.m-auto
      .col-lg-9
        SlyderF.custom(columnas="col-lg-6 col-xl-4")
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src="@/assets/curso/temas/tema1/img09.svg", alt="alt").img100.m-auto
            h4.titulo-1 Globalidad
            p.mb-0 El ciberespacio trasciende fronteras geográficas y permite la interacción entre personas, organizaciones y sistemas en todo el mundo, facilitando la conectividad global.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src="@/assets/curso/temas/tema1/img10.svg", alt="alt").img100.m-auto
            h4.titulo-1 Interactividad
            p.mb-0 No se limita a la recepción de información; los usuarios pueden generar, modificar y compartir contenido en tiempo real, fomentando la participación activa.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src="@/assets/curso/temas/tema1/img11.svg", alt="alt").img100.m-auto
            h4.titulo-1 Desmaterialización
            p.mb-0 La información y las actividades en línea no dependen de un espacio físico, lo que permite la digitalización de documentos, servicios y transacciones.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src="@/assets/curso/temas/tema1/img12.svg", alt="alt").img100.m-auto
            h4.titulo-1 Accesibilidad
            p.mb-0 Disponible las 24 horas del día desde diversos dispositivos conectados a la red, lo que facilita la inmediatez en el acceso a datos y servicios.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src="@/assets/curso/temas/tema1/img13.svg", alt="alt").img100.m-auto
            h4.titulo-1 Anonimato relativo
            p.mb-0 Aunque existen mecanismos de identificación, los usuarios pueden interactuar sin revelar completamente su identidad, lo que puede ser tanto una ventaja como un riesgo.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src="@/assets/curso/temas/tema1/img14.svg", alt="alt").img100.m-auto
            h4.titulo-1 Virtualidad
            p.mb-0 Aunque sus efectos pueden ser tangibles en la vida real, su existencia es completamente digital y no depende de estructuras físicas.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src="@/assets/curso/temas/tema1/img15.svg", alt="alt").img100.m-auto
            h4.titulo-1 Conectividad constante
            p.mb-0 La interconexión entre sistemas, dispositivos y personas es permanente, lo que permite el flujo ininterrumpido de información y servicios.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Tipos de ciberespacio

    p.mb-5 El ciberespacio no es un entorno uniforme, sino un ecosistema digital con múltiples áreas especializadas según su uso y accesibilidad. Se puede clasificar en función de sus propósitos, los actores involucrados y las regulaciones que lo rigen. A continuación, se presentan los principales tipos de ciberespacio:

    .row.justify-content-center.align-items-center.mb-0(data-aos="flip-up")
      .col-lg-10
        .row.justify-content-center
          .col-lg-8.col-12.mb-md-0
            LineaTiempoD.color-acento-botones.especial
              .row(numero="1" titulo="Ciberespacio público")
                .col-12.mb-4.mb-md-0
                  p Comprende las áreas de Internet de libre acceso para todos los usuarios, como sitios web informativos, redes sociales abiertas y foros públicos. Es un espacio de intercambio global donde la información circula sin restricciones significativas.
              
              .row(numero="2" titulo="Ciberespacio privado")
                .col-12.mb-4.mb-md-0
                  p Incluye redes digitales con acceso restringido, como sistemas internos de empresas, correos electrónicos corporativos y plataformas bancarias. La seguridad y la privacidad son esenciales en este entorno.

              .row(numero="3" titulo="Ciberespacio comercial")
                .col-12.mb-4.mb-md-0
                  p Se centra en las actividades económicas y el comercio digital, abarcando tiendas en línea, plataformas de pago electrónico y servicios de suscripción. Su expansión ha transformado la forma en que se realizan transacciones a nivel global.

              .row(numero="4" titulo="Ciberespacio gubernamental")
                .col-12.mb-4.mb-md-0
                  p Utilizado por entidades estatales para gestionar bases de datos oficiales, ofrecer servicios públicos y facilitar la comunicación con la ciudadanía. Su objetivo es optimizar la administración electrónica y garantizar la transparencia.

              .row(numero="5" titulo="Ciberespacio militar o estratégico")
                .col-12.mb-4.mb-md-0
                  p Comprende la infraestructura digital utilizada para la defensa, la inteligencia y la seguridad nacional. Incluye sistemas de vigilancia, redes de comunicación militar y plataformas de ciberdefensa.

              .row(numero="6" titulo="Ciberespacio educativo")
                .col-12.mb-4.mb-md-0
                  p Espacio destinado a la educación y la capacitación a través de plataformas de aprendizaje en línea, repositorios académicos y entornos virtuales. Su relevancia ha aumentado con la digitalización de la enseñanza.

              .row(numero="7" titulo="Ciberespacio criminal")
                .col-12.mb-4.mb-md-0
                  p Incluye redes clandestinas y foros utilizados para actividades ilícitas, como el tráfico de datos, la ciberdelincuencia y los ataques informáticos. El "dark web" es un ejemplo representativo de este tipo de ciberespacio.

          .col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema1/img16.png', alt='Imagen decorativa')
        


  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicador: true,
  }),
}
</script>

<style lang="sass"></style>
