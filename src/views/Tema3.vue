<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Delitos informáticos y su impacto
    
    p.mb-5(data-aos="fade-left") Los delitos informáticos, también conocidos como cibercrímenes, tienen sus orígenes en los primeros desarrollos de la informática y las redes digitales. Su naturaleza y alcance han evolucionado significativamente con el tiempo. A continuación, se detalla la evolución de los delitos informáticos y su impacto:

    .tarjeta.tarjeta--BG01.p-md-5.p-4.mb-5(data-aos="flip-up")
      SlyderA(tipo="b")
        .tarjeta.tarjeta--gris.p-4
          .row.justify-content-center.p-4
            .col-lg-7.order-lg-1.order-2
              h4 Década de 1950-1970 - Los inicios de los delitos informáticos
              p El origen de los delitos informáticos está ligado al desarrollo temprano de la computación y las primeras redes de comunicación. En los años 50 y 60, las computadoras eran utilizadas principalmente en universidades, gobiernos y empresas. Durante esta época, no existía una infraestructura global como Internet, por lo que los delitos informáticos eran limitados. Sin embargo, el concepto de manipulación de sistemas informáticos comenzó a discutirse, sentando las bases para futuras amenazas.
            
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img01.png', alt='Imagen decorativa')

        .tarjeta.tarjeta--gris.p-4
          .row.justify-content-center.p-4
            .col-lg-7.order-lg-1.order-2
              h4 Década de 1980 - El auge del <em>malware</em> y el fraude informático
              p Con la llegada de las computadoras personales y la expansión de las redes, surgieron los primeros delitos informáticos claramente definidos. Durante este período, el uso de <em>malware</em> (<em>software</em> malicioso) comenzó a ganar notoriedad, con los primeros virus diseñados para replicarse y dañar computadoras. Un ejemplo temprano fue el virus "Brain" en 1986, considerado uno de los primeros en afectar computadoras a gran escala. Además, se registraron casos de fraude informático y robo de datos, aprovechando las redes para cometer estafas financieras.
            
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img02.png', alt='Imagen decorativa')

        .tarjeta.tarjeta--gris.p-4
          .row.justify-content-center.p-4
            .col-lg-7.order-lg-1.order-2
              h4 Década de 1990 - La expansión de Internet y los ciberataques
              p Con la proliferación de Internet, los delitos informáticos se diversificaron y se convirtieron en una preocupación global. La piratería informática (<em>hacking</em>) comenzó a afectar a gobiernos y empresas, con ataques dirigidos al robo de información confidencial. También surgieron los delitos cibernéticos financieros, como el <em>phishing</em> y el fraude en línea. En 1994, se reportó uno de los primeros casos importantes de fraude con tarjetas de crédito en línea, marcando un punto de inflexión en la cibercriminalidad.
            
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img03.png', alt='Imagen decorativa')

        .tarjeta.tarjeta--gris.p-4
          .row.justify-content-center.p-4
            .col-lg-7.order-lg-1.order-2
              h4 Década de 2000 - Cibercrimen organizado y <em>ransomware</em>
              p A medida que Internet se consolidó como una plataforma global de comunicación y comercio, los delitos informáticos se volvieron más organizados. Durante esta década, las organizaciones criminales comenzaron a utilizar la red para llevar a cabo actividades ilegales a gran escala, incluyendo el robo de datos personales y ataques DDoS (Denegación de Servicio Distribuido). Uno de los delitos informáticos más notorios de la época fue el <em>ransomware</em>, un tipo de ataque en el que los delincuentes cifran los archivos de la víctima y exigen un rescate para liberarlos. Ejemplos como el virus "Klez" a principios de los 2000 ilustran este creciente problema.
            
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img04.png', alt='Imagen decorativa')

        .tarjeta.tarjeta--gris.p-4
          .row.justify-content-center.p-4
            .col-lg-7.order-lg-1.order-2
              h4 Década de 2010 - Amenazas avanzadas y filtraciones masivas
              p El auge del Internet de las Cosas (IoT), la computación en la nube y las redes sociales amplió el alcance de los delitos informáticos. Los ataques de <em>ransomware</em> se volvieron más sofisticados y las filtraciones de datos afectaron a millones de usuarios. Empresas de alto perfil, como Yahoo! y Equifax, sufrieron violaciones de seguridad masivas. Además, los ataques cibernéticos patrocinados por estados y las Amenazas Persistentes Avanzadas (APT) se convirtieron en una preocupación creciente, con hackers infiltrándose en sistemas gubernamentales y empresariales para el espionaje político, económico y militar.
            
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img05.png', alt='Imagen decorativa')

        .tarjeta.tarjeta--gris.p-4
          .row.justify-content-center.p-4
            .col-lg-7.order-lg-1.order-2
              h4 Década de 2020 - Ciberataques sofisticados y nuevas tecnologías
              p La actualidad ha sido testigo de un aumento en la sofisticación de los delitos informáticos. Entre los ataques más comunes se encuentran el <em>phishing</em> dirigido, el fraude financiero mediante criptomonedas y los ciberataques a infraestructuras críticas, como hospitales y redes eléctricas. La pandemia de COVID-19 impulsó el teletrabajo y, con él, un incremento en los ciberataques, como el <em>ransomware</em>. Además, los cibercriminales están empleando inteligencia artificial y machine learning para hacer sus ataques más complejos y evasivos. Asimismo, los ataques a la cadena de suministro han aumentado, comprometiendo a proveedores de <em>software</em> para infiltrarse en las redes de sus clientes.
            
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img06.png', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-0(data-aos="flip-up")
      .col-lg-10.col-12
        .tarjeta.tarjeta--gris.p-4
          .row.justify-content-center.align-items-center
            .col-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema3/img07.svg', alt='Imagen decorativa')
            .col-10.mb-3
              p.mb-0 Los delitos informáticos han evolucionado desde simples actos de <em>hacking</em> hasta operaciones criminales altamente organizadas que afectan a individuos, empresas y gobiernos en todo el mundo. Con el avance de la tecnología, las amenazas continúan diversificándose, lo que hace imprescindible la adopción de estrategias de ciberseguridad robustas y la colaboración internacional para mitigar estos riesgos. La innovación en seguridad digital, junto con la concienciación de los usuarios, seguirá siendo clave para enfrentar los desafíos del cibercrimen en el futuro.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Actores del cibercrimen

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center
          .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0.mb-3
            p En el panorama actual de la ciberseguridad, comprender quiénes son los responsables de las amenazas digitales es tan importante como conocer las técnicas que emplean. Los actores del cibercrimen son individuos o grupos que utilizan la tecnología con fines maliciosos, ya sea para obtener beneficios económicos, causar daño, robar información o interrumpir servicios. Estos actores no son homogéneos, ya que varían en sus motivaciones, nivel de sofisticación, recursos y objetivos.
            .cajon.cajon.color2.p-3
              .row.justify-content-center
                .col-auto.d-none.d-lg-block.order-lg-1.order-1.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema3/img09.svg', alt='Imagen decorativa')
                .col-lg-10.col-12.order-lg-2.order-2.mb-lg-0
                  p Desde piratas informáticos solitarios que buscan notoriedad hasta organizaciones criminales bien estructuradas e incluso actores patrocinados por “Estados”, el cibercrimen ha evolucionado hacia un ecosistema complejo y dinámico. Identificar y clasificar a estos actores permite a los profesionales de la seguridad anticipar amenazas, diseñar estrategias de defensa efectivas y fortalecer la resiliencia de los sistemas digitales.

          .col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema3/img08.jpg', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-left") A continuación, se describen algunos de los principales actores del cibercrimen:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img10.jpg", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Black Hat Hackers
            h5.t2.mb-2 Black Hat Hackers
            p.mb-0 Expertos en informática que explotan vulnerabildades con fines ilícitos, como el robo de datos o la distribución de <em>malware</em>.

      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img11.jpg", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Ciberterroristas
            h5.t2.mb-2 Ciberterroristas
            p.mb-0 Utilizan ataques informáticos para causar daño a entidades gubernamentales o infraestructuras críticas.

      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img12.jpg", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Crimenes organizados
            h5.t2.mb-2 Crimenes organizados
            p.mb-0 Redes delicitivas que operan en la web oscura para cometer fraudes, extorsiones y otros delitos financieros.

      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img13.jpg", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Insiders
            h5.t2.mb-2 Insiders
            p.mb-0 Empleados o exempleados que abusan de su acceso a sistemas internos para sabotaje, robo de información o espionaje corporativo.

      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img14.jpg", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Hacktivistas
            h5.t2.mb-2 Hacktivistas
            p.mb-0 Individuos o grupos que emplean ataques cibernéticos con motivaciones políticas o ideológicas, como filtración de documentos confidenciales.

      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img15.jpg", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Actores patrocinados por Estados
            h5.t2.mb-2 Actores patrocinados por Estados
            p.mb-0 Grupos respaldados por gobiernos que realizan ciberespionaje, sabotaje o ataques dirigidos contra otras naciones.

    .row.justify-content-center.mb-0(data-aos="fade-left")
      .col-lg-10.col-12
        p La comprensión de los actores del cibercrimen es fundamental para diseñar estrategias de defensa efectivas y mitigar los riesgos asociados a las amenazas digitales. Cada uno de estos actores opera con motivaciones y metodologías distintas, lo que obliga a las organizaciones y gobiernos a mantenerse en constante actualización para enfrentar nuevos desafíos en seguridad informática. La cooperación internacional, la educación en ciberseguridad y el desarrollo de tecnologías avanzadas son esenciales para contrarrestar el impacto de estas actividades maliciosas y proteger la integridad de la información en un entorno digital cada vez más complejo.

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Tipos de delitos informáticos
    
    p.mb-4(data-aos="fade-left") Los delitos informáticos abarcan una amplia gama de actividades ilícitas que afectan a individuos, empresas y gobiernos. Algunos de los más comunes incluyen:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema3/img16.png", alt="alt").img400.m-auto
      .col-lg-9
        SlyderF.custom(columnas="col-lg-6 col-xl-4")
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src="@/assets/curso/temas/tema3/img17.svg", alt="alt").img100.m-auto
            h4.titulo-1 Cibercrimen financiero
            p.mb-0 Fraudes como el robo de tarjetas de crédito, <em>phishing</em>, suplantación de identidad y estafas en línea, con el objetivo de obtener beneficios económicos de manera fraudulenta.

          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src="@/assets/curso/temas/tema3/img18.svg", alt="alt").img100.m-auto
            h4.titulo-1 <em>Malware</em>
            p.mb-0 Desarrollo y propagación de <em>software</em> malicioso (<em>ransomware</em>, troyanos, virus) para robar información, dañar sistemas o extorsionar a las víctimas mediante el secuestro de datos.

          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src="@/assets/curso/temas/tema3/img19.svg", alt="alt").img100.m-auto
            h4.titulo-1 Ataques a infraestructuras críticas
            p.mb-0 Ciberataques dirigidos a sistemas esenciales, como redes de energía, transporte, salud y servicios financieros, con el fin de interrumpir su funcionamiento o comprometer su seguridad.

          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src="@/assets/curso/temas/tema3/img20.svg", alt="alt").img100.m-auto
            h4.titulo-1 Ciberespionaje
            p.mb-0 Robo de información confidencial por parte de actores estatales o grupos organizados, con el propósito de obtener ventajas políticas, económicas o militares a través de la infiltración en sistemas estratégicos.

          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src="@/assets/curso/temas/tema3/img21.svg", alt="alt").img100.m-auto
            h4.titulo-1 Delitos contra la privacidad
            p.mb-0 Uso indebido de datos personales para extorsión, suplantación de identidad o comercialización ilegal en la web oscura, lo que compromete la seguridad y derechos de las víctimas.

          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src="@/assets/curso/temas/tema3/img22.svg", alt="alt").img100.m-auto
            h4.titulo-1 Ataques DDoS (Denegación de Servicio Distribuida)
            p.mb-0 Saturación intencional de un sistema con tráfico falso para afectar su disponibilidad, generando interrupciones en plataformas y servicios en línea.

          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src="@/assets/curso/temas/tema3/img23.svg", alt="alt").img100.m-auto
            h4.titulo-1 Delitos sexuales en línea
            p.mb-0 Actividades ilícitas como la explotación infantil, distribución de material de abuso sexual, el ciberacoso y el grooming, que afectan la integridad y seguridad de las personas en entornos digitales.

    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-12
        .row.justify-content-center
          .col-lg-8.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.px-0
            .cajon.cajon.color3.h-100.p-4.d-lg-flex.align-items-center
              p Los delitos informáticos continúan evolucionando a medida que la tecnología avanza, lo que representa un desafío constante para las autoridades y los profesionales de la ciberseguridad. La sofisticación de los ataques, junto con la expansión del acceso a Internet y el crecimiento del cibercrimen organizado, hace imprescindible la implementación de estrategias de prevención, detección y respuesta efectivas. La cooperación internacional, el desarrollo de marcos normativos actualizados y la concienciación de los usuarios son clave para mitigar los riesgos y fortalecer la seguridad en el entorno digital.
          .col-lg-4.col-md-6.col-12.order-lg-1.order-1.mb-lg-0.px-0
            figure
              img(src='@/assets/curso/temas/tema3/img24.jpg', alt='Imagen decorativa')    

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Delitos informáticos en Colombia y regulación vigente

    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-12
        .row.justify-content-center
          .col-lg-9.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0.mb-3
            p En Colombia, los delitos informáticos están regulados por la Ley 1273 de 2009, que modificó el Código Penal para incluir sanciones específicas relacionadas con el acceso no autorizado, la alteración de datos y el uso indebido de tecnologías de la información y las comunicaciones. Esta normativa protege la integridad de los sistemas informáticos, la confidencialidad de la información y la privacidad de los usuarios.
            p Los principales delitos contemplados en la ley incluyen:
          .col-lg-3.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema3/img25.png', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img26.svg' alt='AvatarTop')
          p <b>Acceso abusivo a sistemas informáticos:</b> ingreso no autorizado a redes, bases de datos o plataformas digitales.

        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img27.svg' alt='AvatarTop')
          p <b>Interceptación de datos informáticos:</b> captura ilegal de información transmitida en redes privadas o públicas.

        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img28.svg' alt='AvatarTop')
          p <b>Uso de <em>software</em> malicioso:</b> creación, propagación o utilización de programas diseñados para causar daño o vulnerar la seguridad digital.

        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img29.svg' alt='AvatarTop')
          p <b>Violación de datos personales:</b> recopilación, modificación o divulgación no autorizada de información privada con fines ilícitos.

        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img30.svg' alt='AvatarTop')
          p <b>Interferencia en sistemas o datos:</b> alteración, eliminación o daño de información almacenada en medios electrónicos.

        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img31.svg' alt='AvatarTop')
          p <b>Fraude informático:</b> manipulación de sistemas informáticos para obtener beneficios económicos de manera ilícita.

    .row(data-aos="flip-down")
      .col-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema2/img06.png', alt='Imagen decorativa')
      .col-lg-10.col-12
        p.mb-0 La Ley 1273 de 2009 establece penas de prisión y multas, cuya severidad varía según la naturaleza y el impacto del delito cometido. Además, refuerza la responsabilidad de las instituciones y empresas en la protección de datos y la seguridad de la información, promoviendo el desarrollo de estrategias de prevención y respuesta ante amenazas cibernéticas.

    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Contexto mundial y tendencias actuales

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center
          .col-lg-9.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0.mb-3
            p Los delitos informáticos son una preocupación global que afecta a individuos, empresas, gobiernos y otras organizaciones en todo el mundo. A medida que la tecnología ha avanzado y el Internet se ha convertido en un pilar fundamental de la vida diaria, las amenazas cibernéticas han evolucionado y se han sofisticado. Los delitos informáticos son un fenómeno creciente y no se limitan a un solo país o región, sino que afectan a nivel global, atravesando fronteras y presentando desafíos tanto para las leyes nacionales como para la cooperación internacional. Los delitos informáticos tienen su origen en las primeras computadoras conectadas en redes. Durante las primeras décadas de la informática, los delitos informáticos eran limitados, principalmente por el acceso no autorizado a sistemas. Sin embargo, a medida que el Internet y las redes globales crecieron, los ciberdelincuentes encontraron nuevas formas de atacar sistemas y robar información valiosa, lo que impulsó el desarrollo de legislación específica y organismos especializados en la lucha contra estos delitos.
            .tarjeta.tarjeta--gris.p-4
              .row.justify-content-center
                .col-auto.d-none.d-lg-block
                  figure
                    img(src='@/assets/curso/temas/tema3/img32.svg', alt='Imagen decorativa')
                .col-10
                  p.mb-0 En las últimas dos décadas, los delitos informáticos han crecido de manera exponencial, impulsados por la expansión del uso de tecnologías como los smartphones, las computadoras portátiles, el Internet de las Cosas (IoT) y el comercio electrónico. Además, la pandemia de COVID-19 aceleró la digitalización de las actividades cotidianas, lo que resultó en un aumento significativo de los ciberataques, especialmente los de <em>ransomware</em> y el fraude en línea. Los cibercriminales ahora operan en organizaciones criminales estructuradas, con objetivos financieros, políticos y, en algunos casos, militares.

          .col-lg-3.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema3/img33.jpg', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center
          .col-lg-8.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-3
            p Dentro de las tendencias actuales, uno de los ataques más graves es el <em>ransomware</em>, donde los ciberdelincuentes secuestran los sistemas de las víctimas, cifran sus datos y exigen un pago, generalmente en criptomonedas, para restaurar el acceso. Además, la expansión del teletrabajo durante la pandemia ha abierto nuevas oportunidades para los ciberdelincuentes, con un aumento de los ataques de <em>phishing</em> dirigidos a empleados que utilizan plataformas de colaboración remota.
            .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
              .col-12
                .tarjeta.tarjeta--azul.p-4
                  p El cibercrimen patrocinado por el Estado también ha aumentado, con ataques a infraestructuras críticas y elecciones. Un ejemplo claro es el ciberataque a las elecciones presidenciales de EE. UU. en 2016, donde se acusó a actores rusos de interferir en el proceso electoral. Asimismo, el robo de datos y la privacidad sigue siendo una amenaza persistente, como lo evidenció el ataque a Facebook en 2021, que expuso los datos personales de más de 530 millones de usuarios.
            .row
              .col-auto.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/tema2/img06.png', alt='Imagen decorativa')
              .col-lg-10.col-12
                p.mb-0 La creciente popularidad de las criptomonedas también ha facilitado actividades ilegales, como el lavado de dinero y el uso de mercados oscuros en la web. Además, el cibercrimen se ha extendido al ámbito de la desinformación, donde los cibercriminales manipulan la opinión pública mediante fake news y bots en redes sociales, afectando elecciones, movilizaciones y creando caos social.

          .col-lg-4.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema3/img34.png', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-0(data-aos="flip-up")
      .col-12
        .row.justify-content-center.align-items-center
          .col-lg-9.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0.mb-3
            .cajon.cajon.color2.p-4
              .row.justify-content-center
                .col-3.d-none.d-lg-block.order-lg-1.order-2.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema3/img35.svg', alt='Imagen decorativa')
                .col-lg-9.col-12.mb-3.order-lg-2.order-2.mb-lg-0
                  p A pesar de los esfuerzos por mejorar la cooperación internacional, la lucha contra los delitos informáticos enfrenta desafíos debido a la falta de un marco legal homogéneo a nivel global y las diferencias en las capacidades tecnológicas entre países. Los ciberdelincuentes, a menudo, explotan estas diferencias y la falta de regulación uniforme, lo que complica aún más la respuesta efectiva frente a estas amenazas.

    separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Desafíos globales en la lucha contra el cibercrimen
    
    .col-12.mb-5(data-aos="flip-down")
      figure
        img(src='@/assets/curso/temas/tema3/img40.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-left") La lucha contra el cibercrimen enfrenta una serie de retos complejos debido a la naturaleza transnacional de los delitos, las variaciones en las legislaciones de diferentes países y la rápida evolución de las tecnologías utilizadas por los ciberdelincuentes. Estos desafíos requieren una cooperación más efectiva entre países, una actualización constante de las normativas y el uso de tecnologías avanzadas tanto por las autoridades como por los delincuentes. A continuación, se describen algunos de los principales obstáculos que dificultan la lucha global contra el cibercrimen:

    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-md-8.col-lg.m-2
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/temas/tema3/img36.png', style="width: 100%" ,alt='').m-auto
          .col-12.bg-c1
            .p-4
              p #[b Falta de cooperación internacional:] aunque existen acuerdos como la Convención de Budapest (un tratado internacional para combatir la cibercriminalidad), las diferencias en las leyes nacionales y la falta de cooperación efectiva entre países dificultan la persecución de ciberdelincuentes, especialmente cuando estos operan en territorios con legislaciones débiles o inexistentes en cuanto a delitos informáticos.

      .col-md-8.col-lg.m-2
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/temas/tema3/img37.png', style="width: 100%" ,alt='').m-auto
          .col-12.bg-c1
            .p-4
              p #[b Desafíos legales y regulatorios:] las leyes de ciberseguridad y privacidad aún están en proceso de estandarizarse globalmente. Muchos países no cuentan con legislación específica que aborde todos los aspectos de los delitos informáticos, lo que permite que los ciberdelincuentes exploten brechas legales y operen sin temor a sanciones adecuadas.

    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-md-8.col-lg.m-2
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/temas/tema3/img38.png', style="width: 100%" ,alt='').m-auto
          .col-12.bg-c1
            .p-4
              p #[b Evolución rápida de las amenazas:] los ciberdelincuentes son cada vez más sofisticados y utilizan tecnologías avanzadas, como inteligencia artificial y machine learning, para mejorar sus ataques, lo que representa un reto para los gobiernos y las empresas, que deben adaptarse constantemente a nuevas amenazas. Además, la automatización y el uso de herramientas como <em>ransomware</em>-as-a-<em>service</em> han permitido a actores menos especializados lanzar ataques cibernéticos de gran escala.

      .col-md-8.col-lg.m-2
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/temas/tema3/img39.png', style="width: 100%" ,alt='').m-auto
          .col-12.bg-c1
            .p-4
              p #[b Falta de recursos en países en desarrollo:] muchos países no cuentan con los recursos humanos y tecnológicos necesarios para enfrentar el cibercrimen de manera efectiva. Esto genera una disparidad en la capacidad de los diferentes países para proteger sus infraestructuras críticas, regular las actividades en línea y perseguir a los responsables de delitos informáticos.

    .row.justify-content-center.mb-0(data-aos="fade-left")
      .col-lg-10.col-12
        p La lucha contra el cibercrimen requiere de un enfoque integral que implique la colaboración internacional, la actualización constante de las normativas y el desarrollo de tecnologías avanzadas para contrarrestar las tácticas cada vez más sofisticadas de los ciberdelincuentes. Solo mediante la cooperación y el fortalecimiento de las capacidades nacionales e internacionales se podrá enfrentar esta amenaza global de manera efectiva.              

    separador
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.6 Mecanismos de reporte y prevención

    p.mb-5(data-aos="fade-left") En Colombia, la lucha contra los delitos informáticos no solo depende de la acción de las autoridades, sino también de la colaboración de la ciudadanía y las empresas. Es fundamental que los individuos y las organizaciones conozcan los mecanismos disponibles para reportar cualquier incidente de ciberseguridad, así como las medidas preventivas que se deben tomar para evitar ser víctimas de delitos informáticos. A continuación, se describen los principales mecanismos de reporte:

    TabsB.color-acento-botones.mb-5(data-aos="flip-up")
      .py-4.py-md-5(titulo="Fiscalía General de la Nación" :icono="require('@/assets/curso/temas/tema3/img41.svg')")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-2.order-2
            p La Fiscalía cuenta con un grupo especializado en delitos informáticos llamado la Unidad de Delitos Informáticos, encargada de investigar y procesar los delitos relacionados con el uso indebido de tecnología. Las personas pueden presentar denuncias sobre accesos no autorizados, fraudes electrónicos, y otros delitos informáticos tanto de forma virtual como presencial.
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img47.jpg', alt='Imagen decorativa')

      .py-4.py-md-5(titulo="En línea" :icono="require('@/assets/curso/temas/tema3/img42.svg')")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-2.order-2
            p A través de la página web de la Fiscalía General de la Nación, los ciudadanos pueden realizar denuncias de manera virtual. Esta opción facilita el proceso y permite la presentación de pruebas de forma directa y eficiente.
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img48.jpg', alt='Imagen decorativa')

      .py-4.py-md-5(titulo="De forma presencial" :icono="require('@/assets/curso/temas/tema3/img43.svg')")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-2.order-2
            p Los ciudadanos también pueden acudir a las oficinas de la Fiscalía o a las estaciones de policía para presentar una denuncia formal en persona. Esto es útil cuando se requiere el acompañamiento directo de las autoridades.
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img49.jpg', alt='Imagen decorativa')

      .py-4.py-md-5(titulo="Policía Nacional de Colombia" :icono="require('@/assets/curso/temas/tema3/img44.svg')")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-2.order-2
            p La Dirección de Investigación Criminal (DIJIN) de la Policía Nacional también cuenta con un área especializada en delitos informáticos. Las denuncias se pueden realizar en cualquier estación de policía, permitiendo que las autoridades inicien investigaciones de manera inmediata.
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img50.jpg', alt='Imagen decorativa')

      .py-4.py-md-5(titulo="Sistemas de atención en línea" :icono="require('@/assets/curso/temas/tema3/img45.svg')")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-2.order-2
            p Existen plataformas como el Centro Cibernético Policial (CCP), en las cuales se pueden reportar incidentes de seguridad cibernética, fraudes, y otros delitos digitales. Este sistema proporciona un medio rápido y eficaz para que los ciudadanos reporten problemas de seguridad en línea.
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img51.jpg', alt='Imagen decorativa')

      .py-4.py-md-5(titulo="Proveedores de servicios digitales" :icono="require('@/assets/curso/temas/tema3/img46.svg')")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-2.order-2
            p Si el incidente está relacionado con plataformas o servicios en línea (como redes sociales, plataformas bancarias, comercio electrónico, etc.), es posible contactar directamente con los administradores o el soporte técnico de esos servicios para que se tomen medidas de seguridad y protección. Muchas de estas plataformas cuentan con protocolos de seguridad que permiten actuar rápidamente ante situaciones de riesgo.
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img52.jpg', alt='Imagen decorativa')

    p.mb-4(data-aos="fade-left") También es importante destacar las medidas de prevención que se pueden utilizar:

    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3(data-aos="flip-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img53.svg' alt='AvatarTop' style="width: 99px; bottom: 125px").m-auto
          .tarjeta.color-hover.w-100
            .p-4
              P.text-center <b>Mantener el <em>software</em> actualizado:</b> es fundamental tener siempre las últimas actualizaciones de los sistemas operativos y aplicaciones, ya que estas correcciones suelen contener parches de seguridad importantes.

      .col-lg-4.mb-lg-0.mb-3(data-aos="flip-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img54.svg' alt='AvatarTop' style="width: 99px; bottom: 125px").m-auto
          .tarjeta.color-hover.w-100
            .p-4
              P.text-center <b>Utilizar contraseñas robustas y autenticación multifactor (MFA):</b> las contraseñas fuertes, combinadas con métodos adicionales de verificación, como la autenticación en dos pasos, pueden prevenir accesos no autorizados.

      .col-lg-4.mb-lg-0.mb-3(data-aos="flip-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img55.svg' alt='AvatarTop' style="width: 99px; bottom: 125px").m-auto
          .tarjeta.color-hover.w-100
            .p-4
              P.text-center <b>Realizar copias de seguridad regulares:</b> tener copias de seguridad actualizadas permite restaurar datos en caso de un ataque como el <em>ransomware</em> o cualquier otro incidente que comprometa la información.

      .col-lg-4.mb-lg-0.mb-3(data-aos="flip-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img56.svg' alt='AvatarTop' style="width: 99px; bottom: 125px").m-auto
          .tarjeta.color-hover.w-100
            .p-4
              P.text-center <b>Estar al tanto de las últimas amenazas informáticas:</b> la educación continua sobre las amenazas más recientes, como el <em>phishing</em> y el <em>malware</em>, es esencial para evitar caer en engaños cibernéticos.

      .col-lg-4.mb-lg-0.mb-3(data-aos="flip-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img57.svg' alt='AvatarTop' style="width: 99px; bottom: 125px").m-auto
          .tarjeta.color-hover.w-100
            .p-4
              P.text-center <b>Concienciación y formación en ciberseguridad:</b> las organizaciones y personas deben recibir formación en buenas prácticas de ciberseguridad, como el reconocimiento de correos electrónicos sospechosos o sitios web fraudulentos.

      .col-lg-4.mb-lg-0.mb-3(data-aos="flip-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img58.svg' alt='AvatarTop' style="width: 99px; bottom: 125px").m-auto
          .tarjeta.color-hover.w-100
            .p-4
              P.text-center <b>Uso de <em>software</em> antivirus y <em>firewall</em>:</b> implementar medidas de protección adicionales como antivirus y <em>firewalls</em> ayuda a bloquear ataques potenciales y proteger los sistemas ante accesos no autorizados.

    .row.justify-content-center.align-items-center.mb-0(data-aos="flip-up")
      .col-12
        .row.justify-content-center.align-items-center
          .col-lg-10.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0.mb-3
            .cajon.cajon.color2.p-4
              .row.justify-content-center
                .col-auto.d-none.d-lg-block.order-lg-1.order-2.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema3/img59.svg', alt='Imagen decorativa')
                .col-lg-10.col-12.mb-3.order-lg-2.order-2.mb-lg-0
                  p El reporte oportuno de los delitos informáticos es esencial para combatir el cibercrimen de manera efectiva. La colaboración entre la ciudadanía, las autoridades y los proveedores de servicios digitales es fundamental para crear un entorno más seguro y protegido frente a las amenazas cibernéticas. Adicionalmente, aplicar medidas de prevención contribuye significativamente a reducir el riesgo de ser víctima de estos delitos.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
