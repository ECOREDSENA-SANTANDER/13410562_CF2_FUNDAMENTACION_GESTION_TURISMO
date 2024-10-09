<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario" />
  
  </template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Técnicas y metodologías educativas',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Validar el conocimiento adquirido sobre la competitividad y la gestión turística.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            'La gestión del turismo se enfoca en la administración y optimización de los recursos turísticos que posee una región o país, estos recursos pueden ser de naturaleza diversa, como el patrimonio natural, histórico, folclórico o gastronómico, entre otros.',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene claros los conceptos de competitividad y sobre la gestión turística.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'El turismo, no contribuye al desarrollo económico local, generando ingresos que permiten mejorar las condiciones sociales de la comunidad.',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene claros los conceptos de competitividad y sobre la gestión turística.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'Según Arias (2008), citado por Arauz Beita (2010), esta gestión no debe mantener un equilibrio entre los diferentes componentes del espacio turístico, ni asegurar una interacción armónica entre los atractivos naturales y culturales y la infraestructura necesaria para el turismo.',
          imagen: require('@/assets/actividad/3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene claros los conceptos de competitividad y sobre la gestión turística.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'El espacio turístico está definido por la presencia de roles, que facilitan la actividad turística.',
          imagen: require('@/assets/actividad/4.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene claros los conceptos de competitividad y sobre la gestión turística.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'La gestión pública se refiere a las actividades desarrolladas por los organismos oficiales para cumplir con los fines del Estado.',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene claros los conceptos de competitividad y sobre la gestión turística.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'La planeación es el proceso inicial donde se establecen los objetivos, estrategias y recursos necesarios para el desarrollo turístico sostenible y competitivo.',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene claros los conceptos de competitividad y sobre la gestión turística.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
