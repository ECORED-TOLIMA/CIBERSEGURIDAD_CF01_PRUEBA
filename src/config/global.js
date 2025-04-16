export default {
  global: {
    Name:
      'Fundamentos del ciberespacio, la ciberseguridad y los delitos informáticos',
    Description:
      'Ese componente formativo establece las bases para comprender el ciberespacio, la ciberseguridad y los delitos informáticos. Se explorarán los conceptos esenciales de la seguridad digital, los riesgos asociados a la navegación en línea y las amenazas cibernéticas más comunes. Además, se analizarán las normativas vigentes y las estrategias de prevención para fortalecer la protección de la información y los sistemas informáticos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Ciberespacio fundamentos y alcance',
        desarrolloContenidos: true,
        subMenu: [
          // {
          //   numero: '1.1',
          //   titulo: 'Concepto del ciberespacio',
          //   hash: 't_1_1',
          // },
          {
            numero: '1.1',
            titulo: 'Historia y evolución del ciberespacio',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Características del ciberespacio',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Tipos de ciberespacio',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Ciberseguridad principios, normativas e importancia',
        desarrolloContenidos: true,
        subMenu: [
          // {
          //   numero: '2.1',
          //   titulo: 'Concepto e importancia de la ciberseguridad',
          //   hash: 't_2_1',
          // },
          {
            numero: '2.1',
            titulo: 'Historia y evolución de la ciberseguridad',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Características de la ciberseguridad',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Normas y regulaciones internacionales',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Retos actuales en ciberseguridad',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Delitos informáticos y su impacto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Actores del cibercrimen',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos de delitos informáticos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Delitos informáticos en Colombia y regulación vigente',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Contexto mundial y tendencias actuales',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Desafíos globales en la lucha contra el cibercrimen',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Mecanismos de reporte y prevención',
            hash: 't_3_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '3.1. Actores del cibercrimen',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). Tipos de hackers [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Puk3JZ5R_Ic',
    },
    {
      tema: '3.6. Mecanismos de reporte y prevención',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). Seguridad de la información [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=OC8x73OfV6s&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
    {
      tema: '3.6. Mecanismos de reporte y prevención',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Herramientas y estrategias de protección: antivirus gratuitos [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=jqL1RwFft-0',
    },
  ],
  glosario: [
    {
      termino: 'Ciberespacio',
      significado: 'entorno digital global de interconexión.',
    },
    {
      termino: 'Ciberseguridad',
      significado: 'protección de sistemas y datos contra amenazas digitales.',
    },
    {
      termino: 'Contraseña fuerte',
      significado:
        'una contraseña que es difícil de adivinar o descifrar. Normalmente, incluye una combinación de letras mayúsculas y minúsculas, números y caracteres especiales, y tiene una longitud considerable.',
    },
    {
      termino: '<em>Firewall</em>',
      significado:
        'herramienta de seguridad que monitorea y controla el tráfico de red, permitiendo o bloqueando el acceso a un sistema o red según reglas de seguridad predefinidas.',
    },
    {
      termino: 'Fraude electrónico',
      significado:
        'uso de la tecnología y de Internet para realizar actividades fraudulentas, como el robo de identidad, el acceso no autorizado a cuentas bancarias o el uso indebido de tarjetas de crédito para obtener beneficios económicos.',
    },
    {
      termino: '<em>Hacking</em> ético',
      significado:
        'práctica de evaluar la seguridad de sistemas informáticos de manera legal y con permiso, buscando vulnerabilidades para corregirlas antes de que los ciberdelincuentes puedan explotarlas.',
    },
    {
      termino: '<em>Malware</em>',
      significado:
        'abreviatura de “<em>software</em> malicioso”, es cualquier <em>software</em> diseñado para dañar, interrumpir o acceder a sistemas informáticos sin el consentimiento del propietario. Incluye virus, troyanos, gusanos, etc.',
    },
    {
      termino: '<em>Phishing</em>',
      significado: 'técnica de engaño para obtener información confidencial.',
    },
    {
      termino: '<em>Ransomware</em>',
      significado:
        'programa maligno que bloquea archivos hasta recibir un pago.',
    },
  ],
  referencias: [
    {
      referencia:
        'Dempsey, J. X., & Carlin, J. P. (2024). Cybersecurity law fundamentals.',
      link: '',
    },
    {
      referencia:
        'Departamento Administrativo de la Función Pública. (2009). Ley 1273 de 2009 - Por medio de la cual se modifica el Código Penal, se crea un nuevo bien jurídico tutelado, denominado "de la protección de la información y de los datos".',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=34492',
    },
    {
      referencia:
        'Europol. (2024). Internet Organised Crime Threat Assessment (IOCTA) 2024.',
      link:
        'https://www.europol.europa.eu/cms/sites/default/files/documents/Internet%20Organised%20Crime%20Threat%20Assessment%20IOCTA%202024.pdf ',
    },
    {
      referencia:
        'Ferrer, E. A. (2023). Estudios de cibercrimen. Ediciones Olejnik.',
      link: '',
    },
    {
      referencia:
        'Lux, L. M., & Calderón, G. O. (2020). The crime of cyber fraud: Definition and delimitation. Revista Chilena de Derecho y Tecnología, 9(1), 151-184.',
      link: '',
    },
    {
      referencia:
        'Madariaga, A. S. (2024). Código penal y código de procedimiento penal: Comentado jurisprudencialmente. Grupo Editorial Ibañez.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC). (2016, junio 29). Los delincuentes cibernéticos no toman vacaciones: consejos para que se proteja en la red. Ministerio de Tecnologías de la Información y las Comunicaciones.',
      link:
        'https://www.mintic.gov.co/portal/inicio/Sala-de-prensa/Noticias/15607:Los-delincuentes-ciberneticos-no-toman-vacaciones-consejos-para-que-se-proteja-en-la-red',
    },
    {
      referencia:
        'National Institute of Standards and Technology (NIST). (2024). The NIST Cybersecurity Framework (CSF) 2.0.',
      link: 'https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf',
    },
    {
      referencia:
        'Paredes, A. R. Z., Quevedo, I. M. S., & Chalacán, L. J. M. (2020). Seguridad informática en las PyMES de la ciudad de Quevedo. Journal of Business and Entrepreneurial Studies: JBES, 4(2), 232-241.',
      link: '',
    },
    {
      referencia:
        'Paya-Santos, C., & Luque-Juárez, J. M. (2021). El sistema de inteligencia criminal ante las nuevas amenazas y oportunidades del ciberespacio. Revista Científica General José María Córdova, 19(36), 1121-1136.',
      link: 'https://doi.org/10.21830/19006586.855',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Javier Eduardo Díaz Machuca',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>Fullstack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
