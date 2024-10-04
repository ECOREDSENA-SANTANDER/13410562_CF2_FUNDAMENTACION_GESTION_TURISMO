<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Gobernanza y gobernabilidad

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t4/img1.jpg')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 La globalización ha transformado el papel del Estado, que ha pasado de ser el único regulador del desarrollo social y organizativo de la acción pública a interactuar con actores públicos y privados en un modelo conocido como gobernanza. Este término, diferenciado de la gobernabilidad que evalúa la acción de gobernar, es definido por el Banco Mundial como los procesos e instituciones mediante los cuales se ejerce el poder para desarrollar los recursos de un país. Según el PNUD, (Programa de las Naciones Unidas para el Desarrollo), la gobernanza abarca la administración de los asuntos de un país en todos los niveles, incluyendo los mecanismos e instituciones que permiten a los ciudadanos articular intereses, ejercer derechos y resolver diferencias. Las características clave de la gobernanza incluyen participación, legalidad, transparencia, responsabilidad, consenso, equidad, eficacia y sensibilidad.

    p.mb-4 El PNUD identifica cuatro dimensiones clave para evaluar la gobernanza, de las cuales las tres primeras sustentan la estructura formal y organizativa de la toma de decisiones en el Estado moderno:

    .row.bgc-2.align-items-center.p-4.mb-4(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center

          .col-lg-3.col-md-6.mb-4
            .bg6.p-4.tarjeta-t4.tarjeta.text-center.h-100
              .num.mb-4
                span A
              h4 Gobernanza económica  
              p Un sistema económico de mercado competitivo y no discriminatorio que promueve el crecimiento económico.
          .col-lg-3.col-md-6.mb-4
            .bg6.p-4.tarjeta-t4.tarjeta.text-center.h-100
              .num.mb-4
                span B
              h4 Gobernanza política
              p Instituciones políticas participativas, democráticas, legítimas, plurales y accesibles a todos los ciudadanos.
          .col-lg-3.col-md-6.mb-4
            .bg6.p-4.tarjeta-t4.tarjeta.text-center.h-100
              .num.mb-4
                span C 
              h4 Gobernanza administrativa
              p Una administración pública que se caracteriza por su eficiencia, transparencia, independencia y responsabilidad.
          .col-lg-3.col-md-6.mb-4
            .bg6.p-4.tarjeta-t4.tarjeta.text-center.h-100
              .num.mb-4
                span D
              h4 Gobernanza sistémica
              p Instituciones sociales que protegen los valores culturales y religiosos, garantizan la libertad y seguridad, y promueven la igualdad de oportunidades para que las personas desarrollen sus capacidades.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .titulo-sexto.color-primario
          h5 Figura 6. 
          span Gobernanza en el sector turismo
        figure  
          img(src='@/assets/curso/temas/t4/fig6.svg', alt="La imagen presenta un esquema que describe el “espacio que ocupa la gobernanza”, dividido en dos dimensiones clave: la capacidad directiva y la eficacia directiva. La dimensión de la capacidad directiva se refiere a la disponibilidad de facultades y recursos necesarios para la coordinación, colaboración y cooperación, abarcando tanto el ámbito nacional como subnacional. Incluye mecanismos normativos y de cooperación, junto con la rendición de cuentas. La dimensión de la eficacia directiva se centra en el ejercicio eficiente de esas facultades y recursos en la esfera pública y en la esfera público-privada, mediante mecanismos de colaboración intergubernamental y sectorial, así como alianzas público-privadas que aseguran la rendición de cuentas y la participación ciudadana.")

    .tit-tercer.row.align-items-center.mb-4(data-aos="fade-right")
      .col-auto.pe-0
        img.pe-0(src='@/assets/curso/temas/t1/tit-tercer.svg', alt='') 
      .col-auto.ps-0.texto
        h3.mb-0 Relación gobernanza y gestión

    p.mb-4 En los destinos turísticos coexisten diversos actores con percepciones e intereses distintos sobre la actividad turística, lo que genera relaciones de poder que influyen en la apropiación y disposición del espacio material y simbólico. Estos actores, a través de sus interacciones, se convierten en sujetos activos que construyen y organizan el territorio. La participación y cooperación de los agentes en el destino ha llevado al desarrollo del concepto de gobernanza, que implica la creación de redes de cooperación horizontal entre los actores del turismo, facilitando una mejor toma de decisiones y una planificación integral que considera las diversas dimensiones del fenómeno turístico.    

    .row(data-aos='fade')
      .col-lg-7.pe-lg-0
        .br-l.bg1.p-4.h-100.d-flex.align-items-center
          p.mb-0 El fortalecimiento de la competitividad en un destino turístico requiere adoptar un enfoque competitivo en su gestión, lo que implica que el organismo local responsable de la actividad turística oriente sus esfuerzos hacia la competencia. Esto incluye mejorar su capacidad de gestión en #[em marketing] para lograr un mejor posicionamiento en los mercados. Además, el organismo local debe coordinar acciones con otras entidades responsables de servicios públicos para garantizar una mejora continua en los productos y servicios ofrecidos, consolidando así su estructura organizacional en función de los objetivos turísticos del destino.
      .col-lg-5.ps-lg-0.d-none.d-lg-block
        img(src='@/assets/curso/temas/t4/img2.png', alt='')


</template>

<script>
export default {
  name: 'Tema4',
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
