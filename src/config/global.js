export default {
  global: {
    componenteFormativo: 'Competitividad y gestión turística',
    descripcionCurso:
      'La competitividad turística se refiere a la capacidad de un destino para atraer y satisfacer a los turistas en comparación con otros destinos, ofreciendo una experiencia de calidad, atractiva y diferenciada. Por su parte, la gestión turística abarca la planificación, organización y administración de los recursos turísticos para maximizar su aprovechamiento, garantizar su sostenibilidad a largo plazo y mejorar la experiencia del turista',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
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
        titulo: 'Gestión del Turismo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'La gestión turística',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Actores en la gestión del turismo',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Clases de gestión turística',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Gestión turística del sector público',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Gestión turística del sector privado',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Gestión turística Compartida (Mixta)',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Competitividad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Competitividad en el turismo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Modelos de competitividad turística',
            hash: 't_2_2',
          },
        ],
      },

      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sostenibilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'La sostenibilidad y la competitividad',
            hash: 't_3_1',
          },
        ],
      },

      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gobernanza y gobernabilidad',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Prestadores de servicios turísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Proveedores turísticos ',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Clasificación de los proveedores de servicios turísticos ',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Tipos de Servicios Turísticos',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Agencias de Viajes',
            hash: 't_5_4',
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
        download: 'downloads/prueba.pdf',
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
      tema: '1. Gestión del Turismo',
      referencia:
        'Cultura, M. d. (junio 2013). Herramientas para la Gestión Cultural Pública. República de Colombia. Segunda edición. Bogotá D.C.',
      tipo: 'PDF',
      link:
        'https://www.nunchia-casanare.gov.co/MiMunicipio/Documentos%20Patrimonio/Herramientas%20para%20la%20gesti%C3%B3n%20cultural%20p%C3%BAblica.pdf',
    },
    {
      tema: '1. Gestión del Turismo',
      referencia:
        'Inostroza, G. (2008). Aportes para un modelo de gestión sostenible del turismo comunitario en la región andina. Gestión turística, (10), 77-90.',
      tipo: 'PDF',
      link: 'http://146.83.217.169/index.php/gestur/article/view/3485',
    },
    {
      tema: '2.1. Competitividad en el turismo.',
      referencia:
        'Chávez, O. R. (2008). Turismo: factor de desarrollo y competitividad en México. Centro.',
      tipo: 'PDF',
      link:
        'https://www.academia.edu/download/46102707/TURISMO_factor_desarrollo_competitividad_Docto46_1.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Coopetencia',
      significado:
        'Estrategia que combina cooperación y competencia entre empresas, donde los actores colaboran para enfrentar desafíos comunes mientras siguen compitiendo en otros aspectos.',
    },
    {
      termino: 'Competencia directa',
      significado:
        'Empresas que operan en el mismo sector, ofreciendo productos o servicios similares para satisfacer las necesidades de un grupo específico de clientes.',
    },
    {
      termino: 'Competencia indirecta',
      significado:
        'Empresas que ofrecen alternativas o soluciones diferentes para satisfacer las mismas necesidades del cliente, sin ser directamente comparables.',
    },
    {
      termino: 'Clientes',
      significado:
        'Receptores de los productos o servicios de una empresa, quienes determinan el éxito comercial mediante su satisfacción y demanda.',
    },
    {
      termino: 'Proveedores',
      significado:
        'Actores que suministran los insumos, equipos y asistencia técnica necesarios para el funcionamiento y producción de bienes y servicios de una empresa.',
    },
    {
      termino: 'Complementadores',
      significado:
        'Empresas o actores que agregan valor a los productos o servicios de una empresa, mejorando la oferta final al cliente.',
    },
    {
      termino: 'Competidores',
      significado:
        'Empresas que ofrecen productos o servicios similares, disminuyendo el valor percibido de la oferta de la empresa al compararla con otras opciones en el mercado.',
    },
    {
      termino: 'Alianza estratégica',
      significado:
        'Colaboración entre dos o más empresas con el objetivo de beneficiarse mutuamente, compartiendo recursos y capacidades para enfrentar desafíos o aprovechar oportunidades.',
    },
  ],
  referencias: [
    {
      referencia:
        'Conde Pérez, E. M., Covarrubias Ramírez, R., & Amaya Molinar, C. M. (2008). La competitividad turística: imperativo para Manzanillo, Colima. Teoría y Praxis, (5), 17–32.',
    },
    {
      referencia:
        'Aguiar López, J. G. (2012). Organización Comunitaria Para Un Turismo Emergente: “Sistematización de Experiencias”, Gestión turística. Valdivia: Universidad Austral de Chile, Instituto de Turismo. n. 17 (en.-jun. 2012), pages 37-54 Gestión turística.',
    },
    {
      referencia:
        'Pérez de las Heras, M., Pérez de las Heras, M., & e-libro, Corp. (2004). Manual del turismo sostenible como conseguir un turismo social, económico y ambientalmente responsable. Madrid: Mundi-Prensa.',
    },
    {
      referencia:
        'Carrera Burneo, P., & López, S. (2013). “Observatorio de Turismo” : Un Espacio de Análisis y Comunicación Como Contribución Para El Desarrollo Del Turismo En El Ecuador, Gestión turística. Valdivia: Universidad Austral de Chile, Instituto de Turismo. n. 19 (en.-jun. 2013), pages 9-24 Gestión turística',
    },
  ],

  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>fullstack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
