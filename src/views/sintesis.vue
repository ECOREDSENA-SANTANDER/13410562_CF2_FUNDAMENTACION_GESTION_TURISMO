<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 El turismo sostenible y competitivo requiere de una adecuada organización de sus elementos clave para garantizar un desarrollo equilibrado y beneficioso tanto para las comunidades locales como para los visitantes. El sistema turístico se compone de diversos actores y estructuras que, en conjunto, permiten la oferta de servicios turísticos de calidad. Estas estructuras deben estar alineadas con las normativas y políticas vigentes, así como con los principios de sostenibilidad, para lograr un equilibrio entre el desarrollo económico, social y ambiental en los destinos turísticos, por tal razón exponemos la siguiente síntesis con la cual te puedes apoyar.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
