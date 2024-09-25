<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Sostenibilidad
    
    p.mb-4 Cuando el concepto de sostenibilidad se relaciona con la acción del ser humano sobre su entorno, se refiere al equilibrio necesario entre ambos, de modo que los factores y recursos disponibles permitan un funcionamiento armónico. Esto debe lograrse sin comprometer la capacidad del entorno para sostener la existencia y el desarrollo integral de las futuras generaciones.

    .tit-tercer.row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.pe-0
        img.pe-0(src='@/assets/curso/temas/t1/tit-tercer.svg', alt='') 
      .col-auto.ps-0.texto
        h3.mb-0 Desarrollo Sostenible
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/img1.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0  El desarrollo sostenible es un proceso de cambio progresivo que mejora la calidad de vida humana, colocando al ser humano como el eje central. Este proceso combina el crecimiento económico con equidad social y una transformación de los métodos de producción y consumo, todo ello basado en el equilibrio ecológico y el soporte vital de la región. Implica respetar la diversidad étnica y cultural y promover la participación ciudadana, asegurando que el bienestar de las generaciones futuras no se comprometa.
    
    .row.mb-5(data-aos='fade')
      .col-lg-7.pe-lg-0
        .br-l.bg1.p-4.h-100.d-flex.align-items-center
          p.mb-0 En el contexto del turismo, la sostenibilidad implica gestionar los recursos de manera que se satisfagan las necesidades económicas, sociales y culturales actuales sin comprometer el futuro. Según la Organización Mundial del Turismo, el turismo sostenible busca proteger los recursos turísticos, respetar la diversidad biológica y los sistemas ecológicos, y promover la viabilidad económica a largo plazo. Este enfoque se basa en tres pilares: sostenibilidad económica, que asegura el desarrollo rentable y duradero; sostenibilidad ambiental, que protege el entorno natural; y sostenibilidad sociocultural, que fomenta el respeto por la cultura local y facilita un intercambio enriquecedor entre turistas y comunidades.
      .col-lg-5.ps-lg-0.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/img2.png', alt='') 
    
    .titulo-sexto.color-primario
      h5 Figura 5. 
      span Turismo sustentable

    .row.justify-content-center.align-items-center.bgc-3.mb-5
      .col-lg-8
        img.mb-3(src='@/assets/curso/temas/t3/figura5.svg', alt='La imagen presenta un modelo circular titulado “Turismo Sustentable”, dividido en tres dimensiones clave: económica, ambiental y sociocultural. Cada una de estas dimensiones contiene varios elementos que contribuyen al turismo sostenible. En la dimensión económica, se destacan factores como la viabilidad económica, calidad del empleo y prosperidad local. La dimensión ambiental incluye la gestión del territorio, del agua, energía, residuos, conservación de la biodiversidad y la medición de huella de carbono. Por su parte, la dimensión sociocultural abarca aspectos como la protección del patrimonio, oferta cultural y bienestar de la comunidad local.')
        figcaption Fuente: Rueda del turismo sostenible - Consejo Global del turismo Sostenible, apoyado por la Organización Mundial del Turismo
    
    Separador
    #t_3_1.titulo-segundo.color-primario(data-aos='fade-right')
      h2 3.1  La sostenibilidad y la competitividad

    .row.mb-4
      .col-lg-8
        p.mb-4 Un destino es competitivo cuando es sostenible, es decir, cuando integra los tres pilares del turismo sostenible: económico, ambiental y sociocultural, generando beneficios en cada uno de estos ámbitos. Sin sostenibilidad, no puede haber competitividad. Por ello, es fundamental que el destino incorpore en su gestión los principios y normas establecidas en las diversas cartas y códigos internacionales.
        .bg1.p-4
          p.mb-0 Fortalecer la competitividad de un destino turístico implica preservar la calidad ambiental, proteger los recursos naturales utilizados para el turismo y mantener espacios como las playas en óptimas condiciones. Además, es necesario implementar medidas para evitar su deterioro, mejorar el entorno y la imagen urbana, elevar constantemente la calidad de los servicios y fortalecer la capacidad competitiva de las empresas turísticas.
      .col-lg-4 
        img(src='@/assets/curso/temas/t3/img3.png', alt='')
    
    .row.bgc-2.align-items-center.p-4.mb-4(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-lg-3.col-md-6.col-10.mb-3.mb-lg-0
            img(src='@/assets/curso/temas/t3/img4.png', alt='')
          .col-lg-8  
            SlyderF(columnas="col-md-6")
              .tarjeta.bg4.p-4.p-lg-5
                p.text-center #[b a) Sostenibilidad ecológica:] es decir, que el desarrollo del turismo no cause cambios irreversibles en los ecosistemas de los diferentes destinos.
              .tarjeta.bg4.p-4.p-lg-5
                p.text-center #[b b) Sostenibilidad social:] refiriéndose a la capacidad de una comunidad para absorber el turismo.
              .tarjeta.bg4.p-4.p-lg-5
                p.text-center #[b c) Sostenibilidad cultural:] una comunidad ha de ser capaz de retener o adoptar sus propias características culturales distintivas ante la cultura del turista.
              .tarjeta.bg4.p-4.p-lg-5
                p.text-center #[b d) Sostenibilidad económica:] que asegure el nivel de ganancia económica que requiere el sector, para que sea viable.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-primario.bg5.p-4
          p.mb-0 La sostenibilidad en el turismo implica equilibrar los aspectos ambientales, económicos y sociales, promoviendo el desarrollo económico sin dañar los valores sociales ni el entorno natural, y evitando prácticas como la depredación de especies, el mal manejo de residuos y la explotación sexual. La gestión turística sostenible es una herramienta dinámica que coordina y regula actividades para mantener ese equilibrio, actuando con un enfoque sistémico basado en experiencias pasadas y resultados globales. Requiere una toma de decisiones formal y eficaz, que garantice la ejecución, coordinación, evaluación y control de las acciones, adaptándose continuamente a los intereses locales y las dimensiones del desarrollo sostenible.

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
