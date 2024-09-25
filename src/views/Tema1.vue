<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Gestión del Turismo
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/img1.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 La gestión del turismo se enfoca en la administración y optimización de los recursos turísticos que posee una región o país, estos recursos pueden ser de naturaleza diversa, como el patrimonio natural, histórico, folclórico o gastronómico, entre otros. El objetivo principal es atraer, recibir y fidelizar a los turistas, fomentando una experiencia que invite a su retorno.

    p.mb-5 Un ejemplo típico de esta gestión se observa en las iniciativas municipales, orientadas a la conservación y restauración del patrimonio natural y cultural, pues todas las acciones buscan recuperar tradiciones y preservar atractivos únicos con el fin de atraer a visitantes interesados en experiencias auténticas. El turismo, en este sentido, contribuye al desarrollo económico local, generando ingresos que permiten mejorar las condiciones sociales de la comunidad.

    .tit-tercer.row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.pe-0
        img.pe-0(src='@/assets/curso/temas/t1/tit-tercer.svg', alt='') 
      .col-auto.ps-0.texto
        h3.mb-0 ¿Qué es Gestión?
    
    p.mb-4 La gestión es un proceso estructurado orientado a alcanzar los objetivos de un proyecto mediante la adecuada administración de recursos, este proceso cubre cuatro funciones esenciales:

    .row.bgc-1.align-items-center.p-4.py-5.mb-5(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center

          .col-lg-12
            .titulo-sexto.color-primario
              h5 Figura 1. 
              span Proceso de gestión
          .col-lg-10
            figure
              img(src='@/assets/curso/temas/t1/fig1.svg', alt='La imagen presenta cuatro etapas clave en el proceso de gestión: Identificación, Planificación, Ejecución y Control. Cada una está representada con un ícono distintivo dentro de un círculo, con colores que varían del verde al naranja. La Identificación tiene un símbolo relacionado con el análisis o investigación, la Planificación está simbolizada por una lista con tareas, la Ejecución por un engranaje que sugiere la puesta en marcha de actividades, y el Control se representa con una lista de verificación que indica la supervisión o evaluación de resultados.')
    
    .row.justify-content-center.align-items-center
      .col-lg-4.col-md-6.col-10.mb-4.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/img2.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p.mb-4 La gestión contemporánea no solo busca cumplir metas propuestas, sino también optimizar los recursos disponibles, sean estos financieros, tecnológicos o humanos, para lograr resultados efectivos y sostenibles.
        .bg1.p-4
          p.mb-0 Autores como Gerardo Domínguez destacan que la gestión no es simplemente un conjunto de actividades, sino que se define por los logros alcanzados. En este sentido, se trata de transformar una situación actual en una situación deseada, mediante la toma de decisiones basada en el monitoreo constante y el ajuste a imprevistos. Esto garantiza que el proceso de gestión no se limite a la planificación, sino que responda activamente a los cambios del entorno, asegurando el éxito del proyecto.
    

    Separador
    #t_1_1.titulo-segundo.color-primario(data-aos='fade-right')
      h2 1.1  La gestión turística 
    
    .row.justify-content-center.align-items-end.mb-4
      .col-lg-8.pe-lg-0(data-aos="fade-right")
        p.mb-4 Es un proceso colaborativo entre el sector público y privado que busca el desarrollo y competitividad del turismo mediante la planificación, organización, dirección y control de los recursos turísticos. Según Arias (2008), citado por Arauz Beita (2010), esta gestión debe mantener un equilibrio entre los diferentes componentes del espacio turístico, asegurando una interacción armónica entre los atractivos naturales y culturales y la infraestructura necesaria para el turismo.
        .bg2.p-4
          p.mb-0 El espacio turístico está definido por la presencia de atractivos y servicios que facilitan la actividad turística, estos servicios pueden estar dispersos o concentrados y varían desde pequeñas unidades turísticas hasta grandes centros turísticos que ofrecen todas las comodidades necesarias para los visitantes. El correcto funcionamiento de este espacio requiere una superestructura administrativa que coordine y regule las operaciones del sector, asegurando la sostenibilidad y eficiencia en la prestación de servicios turísticos.
      .col-lg-4.d-none.d-lg-block.ps-lg-0(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/img3.png', alt='')

    p La superestructura turística es responsable de la gestión integral de la oferta de servicios, abarcando la planificación, coordinación, organización, control, promoción y mercadeo de los recursos turísticos, tanto de la infraestructura como de los atractivos. Este cuerpo coordinador está conformado por instituciones públicas, el sector privado y organismos mixtos, cuyo propósito es garantizar el desarrollo sostenible del turismo y asegurar que todas las actividades se realicen de manera eficiente y equilibrada, en beneficio del sector y las comunidades involucradas.
    p.mb-4 Los organismos del Estado se pueden clasificar en tres grupos:

    .row.justify-content-center.mb-4
      .col-lg-4.col-md-6.col-10.mb-4.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/img5.png', alt='')
      .col-lg-8(data-aos="fade-left")
        AcordionA.acord1(tipo="a" clase-tarjeta="tarjeta bg4")
          .row.justify-content-center(titulo="Organismos específicos")
            .col-md-10
              p.mb-0 Son instituciones gubernamentales a nivel nacional, provincial, regional o municipal, además de empresas estatales, que gestionan y regulan directamente el sector turístico.
          .row.justify-content-center(titulo="Organismos con vinculación indirecta al sector turismo")
            .col-md-10
              p.mb-0 Son entidades que no se enfocan exclusivamente en el turismo, pero sus actividades influyen en su desarrollo, como ministerios de transporte o cultura.
          .row.justify-content-center(titulo="Organismos sin vinculación directa al sector turismo")
            .col-md-10
              p.mb-0 Son instituciones cuya función no está relacionada con el turismo, pero pueden interactuar ocasionalmente con el sector, como organismos de salud o seguridad.
    
    p El sector privado está compuesto por empresas especializadas en la prestación de servicios turísticos, como alojamiento, gastronomía, entretenimiento, deportes, comercio de productos típicos, transporte y agencias de viaje. Aunque los organismos públicos y privados suelen operar de forma independiente, el desarrollo eficaz del turismo exige una planificación integrada, esto implica la elaboración de un plan nacional de turismo, en el cual los gobiernos locales desempeñen un papel fundamental.


    Separador
    #t_1_2.titulo-segundo.color-primario(data-aos='fade-right')
      h2 1.2  Actores en la gestión del turismo

    p.mb-4 Cualquier intento de definir el turismo debe considerar la participación de los diversos grupos involucrados y afectados por esta actividad, ya que su inclusión es esencial para una comprensión completa del fenómeno turístico. En este sentido, se identifican cuatro perspectivas clave:

    .row.justify-content-center.mb-4(data-aos='fade-down')
      .col-lg-3.col-md-6.mb-3
        img(src='@/assets/curso/temas/t1/tarj1.png', alt='')
        .bg4.tarjeta-t1.text-center.border-b.p-4.pt-5
          .num
            span 1
          h4.mb-0 El turista  
      .col-lg-3.col-md-6.mb-3
        img(src='@/assets/curso/temas/t1/tarj2.png', alt='')
        .bg4.tarjeta-t1.text-center.border-b.p-4.pt-5
          .num
            span 2
          h4.mb-0 Las empresas que proveen bienes y servicios turísticos
      .col-lg-3.col-md-6.mb-3
        img(src='@/assets/curso/temas/t1/tarj3.png', alt='')
        .bg4.tarjeta-t1.text-center.border-b.p-4.pt-5
          .num
            span 3
          h4.mb-0 El gobierno de la comunidad o área receptora
      .col-lg-3.col-md-6.mb-3
        img(src='@/assets/curso/temas/t1/tarj4.png', alt='')
        .bg4.tarjeta-t1.text-center.border-b.p-4.pt-5
          .num
            span 4
          h4.mb-0 La comunidad anfitriona

    p.mb-4 Estos grupos, conocidos colectivamente como los actores del turismo, deben colaborar en el proceso de atraer y acoger a los visitantes. Incluir a estos actores en una definición ampliada del turismo refleja la complejidad y particularidad inherente a esta actividad.

    .cajon.color-primario.bg5.p-4
      p.mb-0 El turismo, concebido desde esta óptica, involucra a todos los actores necesarios para promover un desarrollo turístico sostenible en los destinos. Esto implica satisfacer las necesidades tanto de los turistas actuales como de las comunidades receptoras, al tiempo que se protegen y fomentan las oportunidades futuras. El turismo sostenible debe gestionar los recursos de manera que se equilibren los objetivos económicos, sociales y estéticos, respetando la integridad cultural, los procesos ecológicos esenciales, la biodiversidad y los sistemas de vida.
       

    Separador
    #t_1_3.titulo-segundo.color-primario(data-aos='fade-right')
      h2 1.3  Clases de gestión turística
    
    .row.justify-content-center.align-items-center
      .col-lg-5(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/img6.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p La gestión turística es una actividad compleja que integra diversos aspectos sociales, políticos, antropológicos, económicos y tecnológicos. Todos estos elementos deben actuar de manera coordinada y colaborativa, superando cualquier interés particular. La gestión pública se centra en la implementación de estrategias políticas que aseguren el cumplimiento de normativas orientadas al desarrollo económico y social; sumado a esto, la participación del sector privado abarca la provisión de servicios esenciales para el turismo, como el alojamiento, transporte y otros servicios demandados por los turistas.
    

    Separador
    #t_1_4.titulo-segundo.color-primario(data-aos='fade-right')
      h2 1.4  Gestión turística del sector público 
    
    .tit-tercer.row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.pe-0
        img.pe-0(src='@/assets/curso/temas/t1/tit-tercer.svg', alt='') 
      .col-auto.ps-0.texto
        h3.mb-0 ¿Qué es gestión pública?
   
    .row.mb-4
      .col-lg-8(data-aos="fade-right")
        p.mb-4 La gestión pública se refiere a las actividades desarrolladas por los organismos oficiales para cumplir con los fines del Estado, esta gestión abarca la planificación, ejecución y control de las acciones dentro de las organizaciones, así como la obtención de la información necesaria para la toma de decisiones. Además, implica la organización y operación de los mecanismos necesarios para que dichas decisiones sean implementadas de manera eficiente.
        p El sector público se organiza en cuatro niveles:
        ol.lista-ol--cuadro.text-color.fa-ul
          li
          .lista-ol--cuadro__vineta
            span 1
          | La administración central: que gestiona funciones como la seguridad social.
          li
          .lista-ol--cuadro__vineta
            span 2
          | La administración regional o autonómica: que ha asumido competencias en sanidad y educación.
          li
          .lista-ol--cuadro__vineta
            span 3
          | La administración local: la cual es la responsable de servicios cercanos a los ciudadanos.
          li
          .lista-ol--cuadro__vineta
            span 4
          | El sector público empresarial: que produce bienes y servicios a través de empresas públicas.
      .col-lg-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/img7.png', alt='')
    
    p.text-center En Colombia, el sector público se divide en:
    
    .tarjeta--container.row.mb-4(data-aos="fade-down")
      .col-md.tarjeta.bg3.p-4.p-lg-5
        .row.align-items-end.mb-4
          .col-3.col-lg-2
            img.mb-2(src='@/assets/curso/temas/t1/icono1.svg', alt='')
          .col-9
            h3.mb-0.text-conect Subsector financiero
        p.mb-0 Abarca los entes que cumplen actividades iguales o similares a los demás intermediarios financieros del sistema, tales como: bancos, corporaciones y entidades de financiamiento de la industria, la vivienda la agricultura, etc.
      .col-md.tarjeta.bg4.p-4.p-lg-5
        .row.align-items-end.mb-4
          .col-3.col-lg-2
            img.mb-2(src='@/assets/curso/temas/t1/icono2.svg', alt='')
          .col-9
            h3.mb-0.text-conect Subsector no financiero
        p.mb-0 Se agrupan las entidades que son propiedad del gobierno o están bajo su control y que se dedican a la producción o suministro de bienes y servicios, de acuerdo con las características de su función. Según sus fuentes de financiamiento.

    p La gestión en turismo se basa en tres elementos clave interrelacionados: #[b planeación, ejecución y evaluación.] La planeación es el proceso inicial donde se establecen los objetivos, estrategias y recursos necesarios para el desarrollo turístico sostenible y competitivo. A continuación, la ejecución asegura la implementación de las estrategias planificadas, coordinando acciones en áreas como la infraestructura, la promoción y los servicios turísticos. Finalmente, la evaluación permite medir los resultados alcanzados en función de los objetivos establecidos, asegurando ajustes continuos para mejorar la eficiencia y sostenibilidad del destino turístico. 
    p.mb-5 Estos tres elementos trabajan en conjunto para lograr una gestión efectiva tal como se expone:
    
    .row.justify-content-center.align-items-center(data-aos="fade-down")
      .col-lg-8
        .titulo-sexto.color-primario
          h5 Figura 2. 
          span Elementos claves en la gestión
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/t1/figura2.svg', alt='La imagen presenta un diagrama de tres círculos entrelazados, donde cada uno de ellos está etiquetado con un componente clave de la gestión: planeación, ejecución y evaluación. En la intersección de los tres círculos se encuentra un círculo central que resalta los “Elementos claves en la gestión”, indicando la interdependencia de estos tres procesos en la gestión efectiva.')
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/figura2.png', alt='')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-6.col-10.mb-4.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/img8.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p.mb-4 La gestión pública debe enfocarse en lograr resultados eficaces en la reducción de la pobreza y en el mejoramiento de la calidad de vida, promoviendo un desarrollo integral y sostenible. Según la Constitución y la Ley, estos esfuerzos deben reflejarse en resultados concretos, alineados con los principios administrativos. El Departamento Nacional de Planeación de Colombia identifica tres momentos clave en esta gestión: planeación, ejecución y evaluación, garantizando así el ajuste continuo de políticas públicas para un mejor impacto.
        .bg1.p-4
          p.mb-0 En el ámbito del turismo, la gestión pública involucra a organismos oficiales que crean un marco político, legal e institucional para facilitar la planificación y ejecución del desarrollo turístico. Los gobiernos nacionales, departamentales y municipales son responsables de coordinar a los actores del sector para asegurar la competitividad de los destinos. Como regulador y promotor del turismo, el gobierno garantiza condiciones adecuadas para el comercio y la hospitalidad, diseñando políticas que fortalezcan la industria de manera participativa.
    
    p.text-center Las principales funciones turísticas del Estado, según Lickorish, se pueden resumir en los siguientes puntos:

    .row.bgc-2.align-items-center.p-4.mb-4(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-lg-3.col-md-6.col-10.mb-3.mb-lg-0
            img(src='@/assets/curso/temas/t1/img9.png', alt='')
          .col-lg-8  
            SlyderF(columnas="col-md-6")
              .tarjeta.bg4.p-4.p-lg-5
                p.text-center Formular políticas y definir una estrategia integral para el desarrollo del turismo.
              .tarjeta.bg4.p-4.p-lg-5
                p.text-center Regular e inspeccionar la implementación de dichas políticas.
              .tarjeta.bg4.p-4.p-lg-5
                p.text-center Proveer un foro de consulta para fomentar la cooperación y coordinación entre actores.
              .tarjeta.bg4.p-4.p-lg-5
                p.text-center Participar en el ámbito fiscal y financiar el desarrollo de infraestructura y otras inversiones.
              .tarjeta.bg4.p-4.p-lg-5
                p.text-center Establecer condiciones favorables para la operación del sector privado.
              .tarjeta.bg4.p-4.p-lg-5
                p.text-center Informar, proporcionar estadísticas y llevar a cabo investigaciones.
              .tarjeta.bg4.p-4.p-lg-5
                p.text-center Promocionar el turismo a nivel nacional e internacional.
              .tarjeta.bg4.p-4.p-lg-5
                p.text-center Operar en áreas del mercado donde el sector privado no puede proporcionar servicios esenciales.
    
    p.mb-4 El turismo es una actividad económica integral que involucra a diversas instituciones del estado, estas incluyen áreas como el desarrollo económico, la protección del medio ambiente y recursos naturales, la preservación del patrimonio histórico y cultural, servicios de salud, transporte y telecomunicaciones, infraestructura (carreteras, aeropuertos, puertos, vivienda, etc.), además de la gestión demográfica, relaciones exteriores, seguridad, policía internacional y control de fronteras.
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/img10.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Para el desarrollo turístico eficiente, se requiere información tanto cuantitativa como cualitativa de las instituciones involucradas, además de labores de control, fiscalización y promoción para atraer inversión y ejecutar proyectos; es esencial la existencia de un ente público, idealmente un ministerio, con suficiente poder político para coordinar las actividades turísticas y garantizar que los demás organismos cumplan su rol dentro del marco de desarrollo turístico nacional. Este ente especializado debe encargarse de la elaboración e implementación de políticas, la planificación y la regulación del desarrollo turístico a nivel nacional, regional y local.
    
    p.mb-4 La Administración pública, a menudo, crea organismos específicos para evaluar las oportunidades y potencialidades del país en términos de recursos naturales, culturales, financieros y humanos, impulsando inversiones públicas y privadas en infraestructura y servicios esenciales. Además, este organismo es responsable de diseñar el marco legal que ordene la actividad turística y de fomentar la atracción de turistas a los destinos, asegurando la viabilidad económica de las inversiones realizadas. Todo esto debe ejecutarse dentro de un enfoque de desarrollo sostenible para minimizar y mitigar los impactos negativos del turismo, un área en la que el estado tiene una responsabilidad crucial.

    .titulo-sexto.color-primario
      h5 Figura 3. 
      span Estructura organizacional ministerio de comercio, industria y turismo
    figure.mb-5
      img(src='@/assets/curso/temas/t1/figura3.svg', alt='La imagen presenta un organigrama estructural de una entidad ministerial. En la parte superior, se destacan los Consejos Superiores relacionados con Comercio Exterior, Microempresas, y el Programa y Agenda Empresarial, que están vinculados directamente con el Ministerio. A continuación, se identifican diversas oficinas administrativas, como las de Asesoría Jurídica, Logística, Planeación y Finanzas. Se despliegan tres áreas clave: la Viceministra de Comercio Exterior, la Secretaría General, y la Promoción del Desarrollo Empresarial. Cada una de estas áreas incluye distintas direcciones especializadas en áreas como integración económica, desarrollo empresarial, y gestión de asuntos sectoriales.')
    
    .tit-tercer.row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.pe-0
        img.pe-0(src='@/assets/curso/temas/t1/tit-tercer.svg', alt='') 
      .col-auto.ps-0.texto
        h3.mb-0 La gestión turística del sector público por niveles territoriales 
    
    p.mb-4 La República de Colombia se organiza territorialmente en entidades de segundo nivel, conocidas como departamentos y distritos, y de tercer nivel, denominadas municipios y territorios indígenas. La ley también puede crear regiones y provincias como entidades territoriales adicionales, además, existen áreas metropolitanas, comunas y corregimientos, que actúan como divisiones administrativas para el cumplimiento de las funciones del estado y la prestación de servicios.

    .tarjeta--container.row(data-aos="fade-down")
      .col-md.tarjeta.bg3.p-4.p-lg-5
        .row.align-items-end.mb-4
          .col-3.col-lg-2
            img.mb-2(src='@/assets/curso/temas/t1/icono3.svg', alt='')
          .col-9
            h3.mb-0.text-conect Artículo 287
        p.mb-4 Según el artículo 287 de la Constitución Política de Colombia, las entidades territoriales gozan de autonomía en la gestión de sus intereses, siempre dentro de los límites establecidos por la Constitución y la ley; en este marco, tienen los siguientes derechos:
        ul.lista-ul--color.fa-ul.color-new.mb-0
          li
            i.fas.fa-compass
            | Gobernarse por autoridades propias.
          li
            i.fas.fa-compass
            | Ejercer sus competencias.
          li
            i.fas.fa-compass
            | Administrar sus recursos y establecer tributos.
          li
            i.fas.fa-compass
            | Participar en las rentas nacionales.
      .col-md.tarjeta.bg4.p-4.p-lg-5
        .row.align-items-end.mb-4
          .col-3.col-lg-2
            img.mb-2(src='@/assets/curso/temas/t1/icono4.svg', alt='')
          .col-9
            h3.mb-0.text-conect Artículo 286
        p.mb-4 La Constitución Política en su artículo 286 señala que “las entidades territoriales son los departamentos, los distritos, los municipios y los territorios indígenas”. Actualmente se cuenta con las siguientes entidades territoriales:
        ul.lista-ul--color.fa-ul.color-new2.mb-0
          li
            i.fas.fa-compass
            | (32) Departamentos
          li
            i.fas.fa-compass
            | (5) Distritos
          li
            i.fas.fa-compass
            | (1096) Municipios
          li
            i.fas.fa-compass
            | (817) Territorios indígenas (resguardos indígenas)
    

    Separador
    #t_1_5.titulo-segundo.color-primario(data-aos='fade-right')
      h2 1.5  Gestión turística del sector privado
    
    .row.justify-content-center.align-items-center
      .col-lg-4.col-md-6.col-10.mb-4.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/img11.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p.mb-4 El sector privado, además de generar negocios conforme a su naturaleza, debe colaborar con el sector público y otras instituciones a nivel nacional e internacional para fomentar el desarrollo del turismo. Dado que esta es una industria altamente globalizada, el sector privado debe enfocarse en la mejora continua de productos y servicios, la identificación de nuevos nichos de mercado y la garantía de competitividad internacional.
        .bg1.p-4
          p.mb-0 Además, es esencial que el sector privado promueva la asociatividad entre empresarios, impulse inversiones, genere empleo, y adopte herramientas voluntarias que aseguren la sostenibilidad. Otras prioridades incluyen la capacitación constante del personal, la implementación de certificaciones internacionales de calidad y una participación activa en las negociaciones comerciales externas del gobierno, formando alianzas dinámicas y beneficiosas con el sector público.
    

    Separador
    #t_1_6.titulo-segundo.color-primario(data-aos='fade-right')
      h2 1.6  Gestión turística Compartida (Mixta)
    
    p.mb-4 La gestión turística compartida o mixta implica la colaboración entre el sector público y privado para garantizar el funcionamiento eficiente del sistema turístico. La tarea de “hacer turismo” no puede recaer en un solo sector, ya que tanto el público como el privado juegan roles complementarios y cruciales. El sector público establece el marco normativo, promueve políticas y asegura la infraestructura, mientras que el sector privado aporta inversiones, innovación y la prestación directa de servicios turísticos. Esta sinergia es fundamental para que las actividades turísticas se desarrollen de manera ordenada, competitiva y sostenible.

    .row(data-aos='fade')
      .col-lg-7.pe-lg-0
        .br-l.bg1.p-4.h-100.d-flex.align-items-center
          p.mb-0 Para que un territorio alcance un desarrollo turístico sustentable, es esencial identificar oportunidades de intervención que fomenten un trabajo articulado entre ambos sectores. La clave de esta gestión mixta reside en la capacidad de coordinar esfuerzos en áreas como la promoción de destinos, la infraestructura turística, la formación de recursos humanos y la sostenibilidad ambiental. La colaboración público-privada no solo potencia el crecimiento económico y la generación de empleo, sino que también mejora la calidad de la oferta turística y asegura la protección de los recursos naturales y culturales a largo plazo.
      .col-lg-5.ps-lg-0.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/img12.png', alt='')



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
