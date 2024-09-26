<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Competitividad
    
    .tit-tercer.row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.pe-0
        img.pe-0(src='@/assets/curso/temas/t1/tit-tercer.svg', alt='') 
      .col-auto.ps-0.texto
        h3.mb-0 ¿Qué es competitividad?
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t2/img1.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0  Es un concepto fundamental para entender cómo, desde la acción empresarial, se busca obtener mejores resultados y lograr ventajas que permitan superar a la competencia. Para ello, las empresas implementan diversas estrategias, como la creación de campañas publicitarias, la mejora en la calidad o presentación de sus productos, la oferta de precios más competitivos en comparación con productos similares, la prestación de un servicio superior y la generación de seguridad y confianza en sus clientes, entre otras tácticas clave.
    
    p.mb-4 La competitividad se refiere a la capacidad de una empresa, industria, región o país para alcanzar sus objetivos de manera sostenible y superior al promedio. Michel Porter popularizó el término de “ventaja competitiva” en los años 80, aunque ya en 1965 Igor Ansoff había mencionado este concepto en su obra Estrategia Corporativa. La ventaja competitiva se basa en ofrecer a los clientes un valor diferencial, como precios más bajos o productos con valor agregado, que los consumidores prefieren sobre la competencia. Porter también introduce el modelo del “diamante competitivo”, que sostiene que la competitividad de una nación depende de la suma de la competitividad de sus empresas.

    .row.justify-content-center.align-items-center(data-aos="fade-down")
      .col-lg-10
        .cajon.color-primario.bg5.p-4
          p.mb-0 Este modelo considera cuatro factores clave: condiciones de los factores productivos, condiciones de la demanda, industrias complementarias y estructuras empresariales, además de dos factores externos: acontecimientos imprevistos y políticas gubernamentales. La competitividad implica una mejora constante e innovación para generar ventajas sostenibles en el mercado.
    

    Separador
    #t_2_1.titulo-segundo.color-primario(data-aos='fade-right')
      h2 2.1  Competitividad en el turismo 

    .row.mb-5(data-aos='fade')
      .col-lg-7.pe-lg-0
        .br-l.bg1.p-4.h-100.d-flex.align-items-center
          p.mb-0 La competitividad en el turismo se basa en ofrecer productos y servicios de alta calidad bajo criterios de sostenibilidad y eficiencia empresarial, con el fin de generar ingresos superiores al promedio y promover el bienestar de la población. Miguel Ángel Acerenza añade que esta competitividad depende de la capacidad de los actores involucrados en la actividad turística (públicos, privados o mixtos) para gestionar eficazmente los destinos turísticos y alcanzar objetivos superiores de manera sostenible, según lo acordado en un plan estratégico que busque beneficios compartidos para todos los participantes.
      .col-lg-5.ps-lg-0.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/img2.png', alt='') 
    
    .tit-tercer.row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.pe-0
        img.pe-0(src='@/assets/curso/temas/t1/tit-tercer.svg', alt='') 
      .col-auto.ps-0.texto
        h3.mb-0 La competitividad en los destinos turísticos 
    
    p Se desarrolla a nivel local y depende tanto de empresas competitivas como de destinos sostenibles. Su objetivo es generar turistas satisfechos y mejorar el bienestar de la población, mediante la colaboración entre el sector público y privado. Según Hassan, la competitividad de un destino se refiere a su capacidad para crear productos con valor añadido, manteniendo sus recursos y su posición en el mercado. Crouch y Ritchie introducen la ventaja comparativa (recursos naturales y creados, como el paisaje y el patrimonio cultural) y la ventaja competitiva, que es la capacidad de gestionar eficazmente esos recursos para asegurar su sostenibilidad a largo plazo. Tener ventajas comparativas no garantiza la competitividad; es necesario gestionarlas adecuadamente para convertirlas en ventajas competitivas.


    Separador
    #t_2_2.titulo-segundo.color-primario(data-aos='fade-right')
      h2 2.2  Modelos de competitividad turística
    
    p.mb-4 Existen por lo menos tres modelos de competitividad turística:
    
    .row.justify-content-center.mb-4
      .col-lg-4.col-md-6.col-10.mb-4.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/img3.png', alt='')
      .col-lg-8(data-aos="fade-left")
        AcordionA.acord1(tipo="a" clase-tarjeta="tarjeta bg4")
          .row.justify-content-center(titulo="1- Modelo de competitividad del diamante de Porter")
            .col-md-10
              p.mb-0 Este modelo proporciona una metodología para diagnosticar y establecer estrategias desde la perspectiva empresarial. Porter destaca que, en la economía global actual, la competitividad ya no depende únicamente de factores históricos favorables, sino que cada país puede definir su prosperidad mediante la organización de sus políticas, leyes e instituciones enfocadas en la productividad. La competitividad económica, según Porter, se sustenta en cuatro atributos principales y dos factores secundarios: hechos fortuitos (azar) y la intervención del gobierno.
          .row.justify-content-center(titulo="2- Modelo de competitividad de destinos turísticos de larga distancia de Crouch y Ritchie")
            .col-md-10
              p.mb-0 Estos autores fueron pioneros en desarrollar un modelo para evaluar la competitividad de destinos turísticos de larga distancia, estableciendo que la competitividad de un destino está directamente vinculada con el bienestar de sus residentes, los principales beneficiarios. Competitividad y sostenibilidad son interdependientes. Este modelo, de carácter explicativo, se basa en dos factores fundamentales: los recursos y atractivos principales, y los recursos y factores de apoyo, complementados por la gestión del destino, las condiciones del entorno, y las políticas de planeación y desarrollo.
          .row.justify-content-center(titulo="3- Modelo integrado de competitividad de Dwyer y Kim (2003)")
            .col-md-10
              p.mb-0 Dwyer y Kim proponen un modelo integrado basado en el enfoque de Crouch y Ritchie, añadiendo elementos como los recursos heredados, los recursos creados y los factores complementarios. Según ellos, la gestión del destino y las condiciones de la demanda crean un entorno local que influye, de manera positiva o negativa, en la competitividad del destino.
    
    .tit-tercer.row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.pe-0
        img.pe-0(src='@/assets/curso/temas/t1/tit-tercer.svg', alt='') 
      .col-auto.ps-0.texto
        h3.mb-0 Ventajas competitivas de un destino turístico
    
    p.mb-4 Las ventajas competitivas de un destino turístico pueden clasificarse en dos tipos: estructurales y funcionales:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-4.col-md-9.mb-3.mb-md-0
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.px-0
            figure
              img(src="@/assets/curso/temas/t2/tarj1-1.png", alt="")
            .text.p-lg-4.p-3
              .row.text-center.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xl-4
                h4.mt-4.mb-3 a. Las ventajas estructurales
                p Se refieren a la proximidad geográfica del destino a los mercados emisores, considerando la relación tiempo-costo para llegar. Estas ventajas otorgan poder competitivo a los destinos cercanos a sus principales mercados.
      .col-lg-4.col-md-9.mb-3.mb-md-0
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.px-0(@mouseover="mostrarIndicador2 = false")
            .indicador--hover(v-if="mostrarIndicador2")
            figure
              img(src="@/assets/curso/temas/t2/tarj1-2.png", alt="")
            .text.p-lg-4.p-3
              .row.text-center.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xl-4
                h4.mt-4.mb-3 b. Las ventajas funcionales
                p Dependen de la capacidad del destino para gestionar eficazmente la promoción y comercialización de sus productos y servicios. No obstante, para que estas ventajas sean verdaderamente competitivas, deben alinearse con los atributos más valorados por los turistas, ser significativas y sostenibles frente a cambios en el entorno del mercado.
      

    .tit-tercer.row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.pe-0
        img.pe-0(src='@/assets/curso/temas/t1/tit-tercer.svg', alt='') 
      .col-auto.ps-0.texto
        h3.mb-0 Los factores que inciden en la competitividad de un destino turístico

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-4.col-md-9.mb-3.mb-md-0
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.px-0
            figure
              img(src="@/assets/curso/temas/t2/tarj2-1.png", alt="")
            .text.p-lg-4.p-3
              .row.text-center.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xl-4
                h4.mt-4.mb-3 a. Factores tangibles
                p Destacan la atractividad del destino, influenciada por la percepción de los turistas sobre los atractivos y la distancia del destino, así como la adecuación de los productos, servicios y precios a los diferentes segmentos de mercado.
      .col-lg-4.col-md-9.mb-3.mb-md-0
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.px-0(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            figure
              img(src="@/assets/curso/temas/t2/tarj2-2.png", alt="")
            .text.p-lg-4.p-3
              .row.text-center.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xl-4
                h4.mt-4.mb-3 b. Factores intangibles
                p Incluyen la calidad integral del destino, que abarca tanto la infraestructura como los servicios y la sostenibilidad ambiental. Además, la innovación en el desarrollo de atracciones y la actitud competitiva del destino son claves para mantener su relevancia en el mercado, lo que requiere una gestión eficiente y coordinada, basada en un plan integral de marketing.


    .tit-tercer.row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.pe-0
        img.pe-0(src='@/assets/curso/temas/t1/tit-tercer.svg', alt='') 
      .col-auto.ps-0.texto
        h3.mb-0 Competidores de producto
    
    p.mb-4 La competencia está formada por el conjunto de empresas que ofrecen productos con características similares o sustitutos en el mercado, es importante reconocer que algunos competidores pueden emplear métodos éticamente cuestionables, aprovechando vacíos normativos. La competencia en la distribución de productos varía en aspectos como exclusividad, originalidad, calidad y precio, factores que influyen en la decisión del cliente al elegir un producto.
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t2/img4.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Para superar a la competencia, es fundamental conocer a los competidores y entender a qué se dedican, por ello es recomendable identificar su área geográfica de influencia y la ventaja competitiva que les ha permitido ganar mercado. Con esta información, la empresa puede desarrollar estrategias efectivas para mejorar su posicionamiento y crecimiento en el mercado.
    
    .tit-tercer.row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.pe-0
        img.pe-0(src='@/assets/curso/temas/t1/tit-tercer.svg', alt='') 
      .col-auto.ps-0.texto
        h3.mb-0 Clasificación de la competencia
    
    p.mb-4 Existen diferentes tipos de competidores en el mercado:
   
    .row.bgc-2.align-items-center.p-4.mb-5(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-lg-3.col-md-6.col-10.mb-3.mb-lg-0
            img(src='@/assets/curso/temas/t2/img5.png', alt='')
          .col-lg-8  
            SlyderF(columnas="col-md-6")
              .tarjeta.bg4.p-4.p-lg-5
                p.text-center.mb-0 #[b Competencia directa:] Las empresas que operan dentro del mismo sector y apuntan a satisfacer las necesidades de un grupo específico de clientes desarrollan estrategias competitivas enfocadas en este mercado objetivo.
              .tarjeta.bg4.p-4.p-lg-5
                p.text-center.mb-0 #[b Competencia indirecta:] Involucra a todas las empresas presentes en el mercado que buscan satisfacer las necesidades de los clientes mediante enfoques alternativos o distintos a los empleados comúnmente en ese sector.
              .tarjeta.bg4.p-4.p-lg-5
                p.text-center.mb-0 #[b Competidores potenciales:] Son nuevos actores que ingresan al mercado con estrategias agresivas para captar clientes y posicionarse.
              .tarjeta.bg4.p-4.p-lg-5
                p.text-center.mb-0 #[b Productos sustitutos:] Son productos que pueden reemplazar a otros por sus características similares, compitiendo en calidad y precio. 
    
    .tit-tercer.row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.pe-0
        img.pe-0(src='@/assets/curso/temas/t1/tit-tercer.svg', alt='') 
      .col-auto.ps-0.texto
        h3.mb-0 Principios de la competencia

    .row.mb-5
      .col-lg-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/img6.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p.mb-3 Para obtener una ventaja sobre las empresas competidoras, es fundamental anticipar y desarrollar estrategias sólidas, y luego analizar sus resultados en el mercado. Las empresas recuperarán o ganarán ventajas competitivas mediante un equilibrio basado en su comportamiento frente a los competidores.
        p.mb-2 Los nuevos competidores que ingresan al mercado y logran posicionarse lo hacen porque cuentan con ventajas competitivas claras. Por otro lado, aquellos que no ofrecen un factor diferenciador frente a las demás opciones tienden a desaparecer. Las empresas con productos similares suelen implementar estrategias agresivas para mantenerse competitivas.
        .bg1.p-4
          p.mb-0 Los principios de la competencia aclaran que esta no se reduce al precio, sino que se basa en aprovechar las ventajas competitivas para fortalecer las debilidades, lo que permite defenderse eficazmente de las tácticas de los rivales.      
    
    .tit-tercer.row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.pe-0
        img.pe-0(src='@/assets/curso/temas/t1/tit-tercer.svg', alt='') 
      .col-auto.ps-0.texto
        h3.mb-0 Conocimiento de la competencia
    
    p.mb-3 Conocer a los competidores permite crear estrategias defensivas y atacar al mercado objetivo. 
    p.mb-4 Preguntas clave incluyen: 

    .row.bgc-2.align-items-center.p-4.mb-3(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-evenly
          
          .col-lg-3.col-md-6.mb-3
            img(src='@/assets/curso/temas/t2/preg1.png', alt='')
            .pregunta
              h2.mb-0.p-2 ¿Qué mercado dominan?
          .col-lg-3.col-md-6.mb-3
            img(src='@/assets/curso/temas/t2/preg2.png', alt='')
            .pregunta
              h2.mb-0.p-2.px-lg-5 ¿Cómo evolucionan?
          .col-lg-3.col-md-6.mb-3
            img(src='@/assets/curso/temas/t2/preg3.png', alt='')
            .pregunta
              h2.mb-0.p-2 ¿Qué ventajas competitivas tienen?
    
    p.mb-5 Analizar las acciones de los competidores y detectar amenazas emergentes es crucial. Entre las ventajas competitivas pueden estar el acceso a materiales de mejor calidad o una red de distribución superior, mientras que las desventajas pueden incluir la falta de tecnología o la ausencia de acuerdos favorables con proveedores.
    
    .tit-tercer.row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.pe-0
        img.pe-0(src='@/assets/curso/temas/t1/tit-tercer.svg', alt='') 
      .col-auto.ps-0.texto
        h3.mb-0 Coopetencia
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t2/img8.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0  Concepto desarrollado por Barry Nalebuff y Adam Brandenburger en 1996, es un enfoque estratégico que fusiona la competencia y la cooperación entre empresas. En lugar de enfrentarse únicamente como rivales, las empresas colaboran en áreas donde pueden generar beneficios mutuos, mientras siguen compitiendo en otros aspectos. Este modelo es especialmente relevante en grandes negocios, donde las empresas pueden complementarse al compartir recursos, conocimientos y capacidades. Al hacerlo, las organizaciones no solo fortalecen su posición individual en el mercado, sino que también crean sinergias que les otorgan ventajas competitivas frente a otros actores del mercado que no participan en este tipo de colaboración.
    
    p.mb-4 La coopetencia permite un enfoque más dinámico y flexible, donde el aprendizaje conjunto y el intercambio de know-how enriquecen la capacidad de innovación y adaptación de las empresas involucradas, potenciando su crecimiento en un entorno cada vez más competitivo.
    
    .row.bgc-1.align-items-center.p-4.py-4(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center
          .col-lg-12  
            .titulo-sexto.color-primario
              h5 Figura 4. 
              span Red de valores coopetencia
          .col-lg-8
            img(src='@/assets/curso/temas/t2/img9.png', alt='La imagen presenta un esquema que describe la relación entre una empresa y cuatro actores clave: clientes, competidores, complementadores y proveedores. Los clientes son los receptores del producto o servicio de la empresa. Los competidores reducen el valor de los productos o servicios de igual prestación en el mercado. Los complementadores aportan valor agregado a los productos y servicios, mejorando la oferta. Finalmente, los proveedores suministran insumos, equipos y asistencia técnica necesarios para el funcionamiento de la empresa. Este esquema refleja la interdependencia entre estos actores en la cadena de valor empresarial. ') 

      

    
    


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    mostrarIndicador2: true,
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
