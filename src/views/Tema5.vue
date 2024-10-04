<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Prestadores de servicios turísticos
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t5/img1.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0  Los prestadores de servicios turísticos son las entidades, empresas o individuos que ofrecen productos y servicios a los turistas con el fin de satisfacer sus necesidades durante su experiencia de viaje. Estos servicios incluyen, entre otros, alojamiento, transporte, alimentación, actividades recreativas, guías turísticos y agencias de viajes. Su función es fundamental para garantizar la calidad de la experiencia turística y el desarrollo competitivo y sostenible del destino, ya que influyen directamente en la satisfacción del visitante y en la reputación del lugar.
    
    .row.bgc-1.align-items-center.p-4.py-4(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center
          .col-lg-10 
            .titulo-sexto.color-primario
              h5 Figura 7. 
              span Esquema de prestadores turísticos
            img(src='@/assets/curso/temas/t5/img2.svg', alt= 'La imagen representa un esquema conceptual que aborda los factores determinantes de los servicios turísticos. Se destacan tres elementos principales: los proveedores, los servicios y los competidores de producto. Los proveedores son clasificados según el desarrollo y principios del modelo de desarrollo. Los servicios se categorizan por tipos como alojamiento, transporte, restaurantes y atracciones complementarias. En cuanto a los competidores, se agrupan por clasificación y principios, abordando la competencia directa e indirecta. También se incluye el análisis del comportamiento de la oferta, sus componentes, recursos naturales, sectores operativos y la estrategia competitiva basada en ventajas y posicionamiento estratégico.')
    


    Separador
    #t_5_1.titulo-segundo.color-primario(data-aos='fade-right')
      h2 5.1  Proveedores turísticos 
    
    .row.justify-content-center.mb-5
      .col-lg-4.col-md-6.col-10.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t5/img3.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p.mb-4 Los proveedores de servicios turísticos abarcan desde grandes grupos empresariales e instituciones estatales hasta particulares, ofreciendo una amplia gama de servicios para satisfacer las necesidades de turistas locales, nacionales e internacionales. Estos proveedores no solo se enfocan en la calidad de los servicios ofrecidos, sino que también implementan estrategias de #[em marketing] y sostenibilidad para mantenerse competitivos en los mercados, identificando oportunidades en diversos segmentos productivos y adaptándose a las demandas cambiantes del turismo.
        .bg1.p-4
          p.mb-0 Además, los proveedores de servicios turísticos y los países comparten la responsabilidad de promover el desarrollo equilibrado del sector, asegurando que sus servicios fomenten la inclusión social, económica y cultural. Para lograrlo, es crucial que los proveedores garanticen una adecuada respuesta a las expectativas de los turistas, ofreciendo servicios con una buena relación costo-beneficio. El éxito en este sector depende de una planificación efectiva que satisfaga tanto las necesidades de los turistas como las de la comunidad receptora, enfrentando desafíos como la diversificación de la oferta, la mejora de infraestructuras y la búsqueda de una demanda cualificada.
    
    .tit-tercer.row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.pe-0
        img.pe-0(src='@/assets/curso/temas/t1/tit-tercer.svg', alt='') 
      .col-auto.ps-0.texto
        h3.mb-0 Desarrollo de proveedores turísticos
    
    .row.mb-5(data-aos='fade')
      .col-lg-7.pe-lg-0
        .br-l.bg7.p-4.h-100.d-flex.align-items-center
          p.mb-0 Es una práctica esencial para mejorar la competitividad de las organizaciones y garantizar la satisfacción de los clientes, a través de programas específicos, se busca fortalecer la relación entre empresas líderes y sus proveedores, promoviendo beneficios mutuos y contribuyendo al desarrollo de las comunidades locales. Este proceso, basado en la cooperación empresarial, incluye la mejora continua en la calidad de bienes y servicios, la planificación del crecimiento, la optimización de costos y la reinversión; además, introduce economías de escala y calificación de recursos humanos, todo ello con una visión de largo plazo y dentro del marco de la responsabilidad social empresarial.
      .col-lg-5.ps-lg-0.d-none.d-lg-block
        img(src='@/assets/curso/temas/t5/img4.png', alt='')

    .tit-tercer.row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.pe-0
        img.pe-0(src='@/assets/curso/temas/t1/tit-tercer.svg', alt='') 
      .col-auto.ps-0.texto
        h3.mb-0 Principios básicos del modelo de desarrollo de proveedores
    
    .row.bgc-5.align-items-center.p-4.py-5.mb-5(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center
          
          .tarjeta.tarjeta--slider.col-12
            SlyderA.p-4.p-lg-5.pb-lg-4(tipo='b')
              .row.justify-content-evenly
                .col-md-6.mb-4.mb-md-0
                  h4 Involucramiento
                  p El desarrollo de proveedores, especialmente pequeñas y medianas empresas, requiere que las grandes empresas se comprometan activamente, creando las condiciones necesarias para su crecimiento.
                .col-md-5.col-lg-4
                  img(src='@/assets/curso/temas/t5/slyder1.png', alt='')
              .row.justify-content-evenly
                .col-md-6.mb-4.mb-md-0
                  h4 Ganar dinero
                  p Este modelo se justifica porque ambas partes obtienen beneficios. El desarrollo de proveedores no debe basarse en solidaridad o filantropía, sino en la optimización de la ecuación económica del negocio.
                .col-md-5.col-lg-4
                  img(src='@/assets/curso/temas/t5/slyder2.png', alt='')
              .row.justify-content-evenly
                .col-md-6.mb-4.mb-md-0
                  h4 Modificar los términos de intercambio
                  p Los términos de negociación deben evolucionar hacia nuevos paradigmas de relación, fomentando una cultura corporativa colaborativa entre ambas partes.
                .col-md-5.col-lg-4
                  img(src='@/assets/curso/temas/t5/slyder3.png', alt='')
              .row.justify-content-evenly
                .col-md-6.mb-4.mb-md-0
                  h4 Impacto local
                  p El modelo está directamente vinculado al desarrollo local, mejorando las condiciones de las comunidades que albergan a las empresas proveedoras.
                .col-md-5.col-lg-4
                  img(src='@/assets/curso/temas/t5/slyder4.png', alt='')
              .row.justify-content-evenly
                .col-md-6.mb-4.mb-md-0
                  h4 Impacto en la cadena de valor
                  p La competitividad del negocio mejora al flexibilizar la cadena productiva, adaptándola a las exigencias del mercado, y promoviendo la reinversión a lo largo de la cadena de valor.
                .col-md-5.col-lg-4
                  img(src='@/assets/curso/temas/t5/slyder5.png', alt='')
              .row.justify-content-evenly
                .col-md-6.mb-4.mb-md-0
                  h4 Más recursos y mejor distribuidos
                  p El aumento de negocios con proveedores locales incrementa la retención de recursos económicos en la región, mejorando la distribución de ingresos y beneficiando a un mayor número de personas.
                .col-md-5.col-lg-4
                  img(src='@/assets/curso/temas/t5/slyder6.png', alt='')
              .row.justify-content-evenly
                .col-md-6.mb-4.mb-md-0
                  h4 Inversiones y generación de empleo
                  p El aumento de la producción impulsa inversiones en infraestructura y equipamiento, lo que a su vez genera nuevos empleos en la comunidad.
                .col-md-5.col-lg-4
                  img(src='@/assets/curso/temas/t5/slyder7.png', alt='')
    

    Separador
    #t_5_2.titulo-segundo.color-primario(data-aos='fade-right')
      h2 5.2  Clasificación de los proveedores de servicios turísticos 

    p.mb-4 Los proveedores de servicios turísticos se clasifican en cuatro grandes grupos:

    .row.justify-content-center.align-items-center
      .col-lg-8
        .titulo-sexto.color-primario
          h5 Figura 8. 
          span Clasificación de los proveedores de servicios turísticos
        img(src='@/assets/curso/temas/t5/figura8.svg', alt='La imagen presenta una clasificación de los proveedores de servicios turísticos, divididos en cuatro grupos principales. El Grupo Empresarial incluye distribuidores, intermediarios y proveedores finales, como agencias de viajes y operadores turísticos. El Grupo Institucional corresponde a las administraciones públicas, tanto locales, regionales, nacionales como internacionales, que regulan y promueven el turismo. El Grupo Asociativo abarca asociaciones empresariales en el ámbito regional, nacional e internacional. Finalmente, el Grupo de Apoyo engloba compañías de seguros, publicaciones de viajes y empresas de animación turística, las cuales brindan servicios complementarios a la industria turística.')


    Separador
    #t_5_3.titulo-segundo.color-primario(data-aos='fade-right')
      h2 5.3  Tipos de Servicios Turísticos

    p.mb-4 El sector turístico se distingue por ofrecer una amplia gama de servicios, entre los que destacan:

    .tit-tercer.row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.pe-0
        img.pe-0(src='@/assets/curso/temas/t1/tit-tercer.svg', alt='') 
      .col-auto.ps-0.texto
        h3.mb-0 Alojamiento Turístico
    
    p.mb-4 Los servicios de alojamiento permiten a los viajeros hospedarse temporalmente en diversos establecimientos como hoteles, posadas, moteles, entre otros. Estos servicios pueden incluir o excluir otros complementarios, según la oferta y la categoría del alojamiento.

    h4.text-center Tipos de alojamiento:

    TabsC.color-acento-contenido.mb-5
      .bg8.py-4.py-md-5(titulo="Hotel Residencia")
        .row.justify-content-center
          .col-md-5.col-lg-4.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t5/tab1.png', alt='')
          .col-md-7
            h4 Hotel Residencia
            p Establecimiento que ofrece alojamiento permanente en apartamentos o cabañas, brindando servicios básicos y complementarios. Las tarifas se aplican de manera diaria y son especiales para estancias prolongadas (mínimo de 15 días), según el tipo de alojamiento y el número de ocupantes (MINEP, 2005).
      .bg8.py-4.py-md-5(titulo="Hostal")
        .row.justify-content-center
          .col-md-5.col-lg-4.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t5/tab2.png', alt='')
          .col-md-7
            h4 Hostal
            p Ubicados generalmente cerca de rutas de tránsito, estos establecimientos ofrecen habitaciones con baño y estacionamiento.
      .bg8.py-4.py-md-5(titulo="Camping")
        .row.justify-content-center
          .col-md-5.col-lg-4.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t5/tab3.png', alt='')
          .col-md-7
            h4 Camping
            p Espacio al aire libre acondicionado para acampar, ideal para disfrutar de actividades recreativas o educativas.
      .bg8.py-4.py-md-5(titulo="Pensión")
        .row.justify-content-center
          .col-md-5.col-lg-4.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t5/tab4.png', alt='')
          .col-md-7
            h4 Pensión
            p Ofrece alojamiento en habitaciones con baño privado o compartido, con posibilidad de incluir comidas en régimen completo o parcial (MINEP, 2005). 
      .bg8.py-4.py-md-5(titulo="Balneario o clínica de recuperación")
        .row.justify-content-center
          .col-md-5.col-lg-4.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t5/tab5.png', alt='')
          .col-md-7
            h4 Balneario o clínica de recuperación
            p Proveen programas de relajación y rehabilitación, como antiestrés o desintoxicación, orientados especialmente a personas mayores o con necesidades de salud específicas (Abalnearios, 2009).

    .tit-tercer.row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.pe-0
        img.pe-0(src='@/assets/curso/temas/t1/tit-tercer.svg', alt='') 
      .col-auto.ps-0.texto
        h3.mb-0 Servicios Complementarios
    
    p.mb-4 Estos servicios de apoyo son esenciales para satisfacer diversas necesidades de los turistas y atraer a más visitantes. Incluyen productos como información turística, transporte, cambio de divisas, guías turísticos, oferta cultural y deportiva, alquiler de vehículos, zonas de ocio nocturno y tours temáticos.
    
    .row.mb-5(data-aos='fade')
      .col-lg-7.pe-lg-0
        .br-l.bg1.p-4.h-100.align-items-center
          h4 Servicios de Restaurantes
          p.mb-0 La gastronomía se ha convertido en un elemento clave del turismo. Hoteles y cruceros han integrado servicios de restaurante como parte de su oferta, satisfaciendo a los clientes que buscan experiencias culinarias durante su estadía.
      .col-lg-5.ps-lg-0.d-none.d-lg-block
        img(src='@/assets/curso/temas/t5/img5.png', alt='')
    
    .tit-tercer.row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.pe-0
        img.pe-0(src='@/assets/curso/temas/t1/tit-tercer.svg', alt='') 
      .col-auto.ps-0.texto
        h3.mb-0 Transporte
    
    p.mb-4 El transporte es una parte esencial del servicio turístico, abarcando modalidades aéreas, terrestres y acuáticas:

    .row.bgc-2.align-items-center.p-4(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center

          .col-lg-3.col-md-6.mb-4
            .bg6.p-4.tarjeta-t4.tarjeta.text-center.h-100
              img.mb-2(src='@/assets/curso/temas/t5/tar-boton1.svg', alt='') 
              h4 Aéreo 
              p Incluye vuelos regulares (con horarios establecidos) y no regulares (como vuelo chárter y privados). También se distinguen vuelos nacionales, internacionales e intercontinentales.
          .col-lg-3.col-md-6.mb-4
            .bg6.p-4.tarjeta-t4.tarjeta.text-center.h-100
              img.mb-2(src='@/assets/curso/temas/t5/tar-boton2.svg', alt='') 
              h4 Terrestre
              p Compuesto por transporte regular (autobuses con horarios fijos) y no regular (alquiler de vehículos y transporte de ocio).
          .col-lg-3.col-md-6.mb-4
            .bg6.p-4.tarjeta-t4.tarjeta.text-center.h-100
              img.mb-2(src='@/assets/curso/temas/t5/tar-boton3.svg', alt='') 
              h4 Acuático
              p Los cruceros, transbordadores y embarcaciones recreativas ofrecen transporte por mar, mientras que el transporte lacustre y fluvial se utiliza para recorridos en lagos y ríos.
          .col-lg-3.col-md-6.mb-4
            .bg6.p-4.tarjeta-t4.tarjeta.text-center.h-100
              img.mb-2(src='@/assets/curso/temas/t5/tar-boton4.svg', alt='') 
              h4 Ferroviario
              p Los trenes turísticos son populares por sus recorridos históricos y recreativos.


    Separador
    #t_5_4.titulo-segundo.color-primario(data-aos='fade-right')
      h2 5.4  Agencias de Viajes
    
    p.mb-4 Las agencias de viajes son intermediarias entre los turistas y los proveedores de servicios. Además de asesorar a los clientes, diseñan y comercializan productos turísticos, ofreciendo funciones de asesoramiento, mediación y producción de paquetes turísticos integrados.

    .tit-tercer.row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.pe-0
        img.pe-0(src='@/assets/curso/temas/t1/tit-tercer.svg', alt='') 
      .col-auto.ps-0.texto
        h3.mb-0 Servicios de Información Turística
    
    .row.justify-content-center.mb-5
      .col-lg-4.col-md-6.col-10.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t5/img6.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p.mb-4 Estos servicios están orientados a satisfacer las necesidades informativas de los visitantes, proporcionando datos actualizados y relevantes sobre actividades y destinos turísticos en todos los niveles (local, regional, nacional e internacional).
        .bg1.p-4
          p.mb-0 Las agencias de viajes son empresas que actúan como intermediarias entre los viajeros y los proveedores de servicios turísticos. Su función principal es asesorar e informar a los clientes sobre destinos y servicios, así como diseñar y comercializar productos turísticos. Además, estas agencias sirven como fuentes clave de información sobre tendencias y corrientes turísticas (Cabarcos Novás, 2006).
    
    p.mb-4.text-center Las agencias de viajes desarrollan principalmente tres funciones que se describen en la siguiente figura.
    
    .row.bgc-4.align-items-center.p-4.py-4.mb-5(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-end
          
          .col-lg-6
            .titulo-sexto.color-primario
              h5 Figura 9. 
              span Funciones de las agencias 
            figure
              img(src='@/assets/curso/temas/t5/fig9.svg', alt='La imagen presenta un esquema que describe las funciones principales de las agencias de viajes, agrupadas en tres categorías: asesorar, intermediar y producir. Asesorar implica informar y orientar a los clientes sobre los servicios turísticos disponibles. Intermediar se refiere a actuar como enlace entre los proveedores y los clientes, facilitando la contratación de servicios. Producir implica crear o gestionar productos turísticos directamente, ofreciendo experiencias completas a los viajeros. Estas tres funciones son fundamentales para el correcto funcionamiento de las agencias en el sector turístico.')
          .col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/t5/img-fig9.png', alt='')

    .row.justify-content-center
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t5/img7.png', alt='')
      .col-lg-8(data-aos="fade-left")
        AcordionA.acord1(tipo="a" clase-tarjeta="tarjeta bg4")
          .row.justify-content-center(titulo="Función asesora")
            .col-md-10
              p.mb-0 Se encarga de informar a los clientes sobre las características de los diferentes destinos y servicios turísticos disponibles. La incorporación de tecnologías de la información y comunicación (TIC) en las agencias de viajes mejora los tiempos de respuesta y facilita el acceso a sistemas globales de información turística.
          .row.justify-content-center(titulo="Función mediadora")
            .col-md-10
              p.mb-0 Su objetivo es negociar, gestionar e intermediar en la reserva y compra de los servicios turísticos solicitados por los clientes, actuando como un enlace entre ellos y los proveedores.
          .row.justify-content-center(titulo="Función productora")
            .col-md-10
              p.mb-0 Diseña, comercializa y distribuye servicios y productos turísticos, generalmente combinando diversos servicios complementarios y ofertándolos a un precio único. Esta función es típica de las agencias de viajes mayoristas y los tours operadores.

</template>

<script>
export default {
  name: 'Tema5',
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
