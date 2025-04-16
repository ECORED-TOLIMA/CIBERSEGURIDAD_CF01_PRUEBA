<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El ciberespacio es un entorno digital en constante evolución que ha transformado la interacción global, dando origen a la ciberseguridad como una disciplina clave para proteger la información y los sistemas tecnológicos. A lo largo de su historia, la ciberseguridad ha desarrollado normativas y principios esenciales para mitigar riesgos y enfrentar desafíos como los delitos informáticos, los cuales afectan a individuos, empresas y gobiernos a nivel mundial. Estos delitos, cometidos por diversos actores del cibercrimen, incluyen fraudes electrónicos, robo de datos y ataques a infraestructuras críticas, lo que ha impulsado la creación de regulaciones y estrategias de prevención. En Colombia y en el mundo, la lucha contra el cibercrimen enfrenta desafíos como la falta de cooperación internacional y la rápida evolución de las amenazas digitales. Para contrarrestar estos riesgos, existen mecanismos de reporte y medidas de prevención que buscan fortalecer la seguridad digital y la protección de la información .
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis del componente formativo, se describe el ciberespacio, el cual es un entorno digital que ha impulsado la necesidad de ciberseguridad para proteger la información y prevenir delitos informáticos como fraudes y ciberataques. A nivel global y en Colombia, las normativas buscan regular estas amenazas, aunque persisten desafíos como la rápida evolución del cibercrimen. Para enfrentarlo, se han desarrollado mecanismos de reporte y prevención que refuerzan la seguridad digital.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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
