/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useMemo } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  CheckCircle, 
  Menu, 
  X, 
  Award, 
  Brain, 
  Target, 
  Clock, 
  User, 
  ShieldCheck,
  History,
  Workflow,
  Cpu,
  Layers,
  MessageSquare,
  AlertTriangle,
  Lightbulb,
  FileText,
  HelpCircle,
  CircleHelp,
  PlayCircle,
  Zap,
  Search,
  Send,
  CheckCircle2,
  Mail,
  Users,
  Sun,
  Moon,
  CalendarDays,
  Calendar,
  Timer,
  Hourglass,
  Code2,
  CheckCircle,
  Trophy,
  Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';

// --- Contenido del Curso ---
const TIMELINE_DATA = [
  { year: '1950', title: 'Alan Turing y el Test de Turing', description: 'Turing plantea la pregunta "¿Pueden las máquinas pensar?" y propone una prueba de inteligencia.' },
  { year: '1956', title: 'Conferencia de Dartmouth', description: 'Se acuña formalmente el término "Inteligencia Artificial" y nace como campo de investigación.' },
  { year: '1966', title: 'ELIZA: El primer chatbot', description: 'Creado en el MIT, simulaba a un psicoterapeuta y demostró el potencial del procesamiento de lenguaje.' },
  { year: '1997', title: 'Deep Blue vs Kasparov', description: 'El superordenador de IBM vence al campeón mundial de ajedrez, un hito en la potencia de procesamiento.' },
  { year: '2011', title: 'Watson y Siri', description: 'Watson gana Jeopardy! y Apple lanza Siri, llevando la IA a los dispositivos móviles de consumo masivo.' },
  { year: '2016', title: 'AlphaGo vence en el Go', description: 'Google DeepMind demuestra que el aprendizaje profundo puede superar la intuición humana en juegos complejos.' },
  { year: '2022', title: 'Revolución Generativa', description: 'Lanzamiento de ChatGPT. La IA se democratiza, permitiendo crear texto, imagen y código de forma asombrosa.' },
];

function TimelineComponent() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="my-6 relative">
      <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 hidden md:block" />
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 gap-8 md:gap-4 p-4">
        {TIMELINE_DATA.map((item, idx) => (
          <div key={idx} className="flex flex-row md:flex-col items-center gap-4 md:gap-2 flex-1 group">
            <button
              onClick={() => setActiveIdx(idx)}
              className={`w-12 h-12 rounded-full border-4 flex items-center justify-center font-bold text-sm transition-all shrink-0 ${
                activeIdx === idx 
                  ? 'bg-brand-500 border-brand-200 text-white scale-125 shadow-lg shadow-brand-200' 
                  : 'bg-white border-slate-100 text-slate-400 hover:border-brand-200 hover:text-brand-400'
              }`}
            >
              {item.year.replace('19', "'")}
            </button>
            <div className="md:hidden flex flex-col">
               <span className={`text-sm font-bold ${activeIdx === idx ? 'text-brand-600' : 'text-slate-500'}`}>{item.year}</span>
               {activeIdx === idx && <p className="text-xs text-slate-600 mt-1">{item.description}</p>}
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:block mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-white p-6 rounded-3xl border border-brand-100 shadow-xl shadow-brand-50/50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <History size={120} />
            </div>
            <span className="text-brand-600 font-black text-4xl opacity-20 absolute -bottom-4 -left-2 tracking-tighter">
              {TIMELINE_DATA[activeIdx].year}
            </span>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-brand-900 mb-2">{TIMELINE_DATA[activeIdx].title}</h3>
              <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
                {TIMELINE_DATA[activeIdx].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function ConceptMapComponent() {
  const points = [
    { 
      title: 'Inicio de la plataforma', 
      icon: <PlayCircle className="w-6 h-6" />, 
      color: 'bg-blue-500', 
      delay: 0.1 
    },
    { 
      title: 'Navegación en los contenidos', 
      icon: <Menu className="w-6 h-6" />, 
      color: 'bg-brand-500', 
      delay: 0.2 
    },
    { 
      title: 'Uso de otras áreas (perfil, ayuda, etc.)', 
      icon: <HelpCircle className="w-6 h-6" />, 
      color: 'bg-purple-500', 
      delay: 0.3 
    },
    { 
      title: 'Expediente y contacto con el tutor', 
      icon: <User className="w-6 h-6" />, 
      color: 'bg-orange-500', 
      delay: 0.4 
    },
  ];

  return (
    <div className="py-4 md:py-8 flex flex-col items-center">
      {/* Central Node */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative z-10 bg-white border-2 border-brand-100 p-6 rounded-full shadow-xl mb-12 text-center max-w-[200px] ring-4 ring-brand-50/50"
      >
        <div className="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-2 shadow-md shadow-brand-200">
          <BookOpen className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-sm font-black text-brand-900 leading-tight uppercase">Funcionamiento</h3>
      </motion.div>

      {/* Concept Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl relative">
        {/* Connection lines (visually suggested) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-brand-100 to-transparent -translate-y-full hidden md:block" />

        {points.map((pt, idx) => (
          <motion.div
            key={idx}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: pt.delay }}
            whileHover={{ y: -3 }}
            className="bg-white border border-slate-100 p-4 rounded-2xl shadow-lg flex flex-col items-center text-center gap-3 group hover:border-brand-400 hover:shadow-brand-50 transition-all relative z-10"
          >
            <div className={`w-12 h-12 rounded-xl ${pt.color} flex items-center justify-center text-white shadow-lg shadow-slate-100 group-hover:scale-110 transition-transform duration-300 shrink-0`}>
              {pt.icon}
            </div>
            <p className="text-sm font-bold text-slate-800 leading-snug">
              {pt.title}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function FuncionamientoTabsComponent() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { 
      id: 'inicio', 
      title: 'Inicio', 
      icon: <PlayCircle className="w-5 h-5" />, 
      color: 'bg-blue-500',
      content: `
## Cómo empezar en la plataforma
Una vez accedas a nuestra plataforma en el sitio web del campus , estarás en la página de INICIO, donde podrás ver, además del acceso a los contenidos, un resumen de tu evolución en el curso, así como la bienvenida y la presentación. Podrás acceder a los contenidos del curso pulsando en sus respectivos apartados.
      `
    },
    { 
      id: 'navegacion', 
      title: 'Navegación', 
      icon: <Menu className="w-5 h-5" />, 
      color: 'bg-brand-500',
      content: `
## Cómo moverte por los contenidos
La plataforma está diseñada para que el aprendizaje sea fluido y estructurado:

1. Panel Lateral: A la izquierda (o en el menú desplegable en móviles) tienes el índice completo del curso organizado por módulos.
2. Botonera Inferior: Al final de cada página encontrarás botones de "Anterior" y "Siguiente" para avanzar paso a paso.
3. Barra de Progreso: En la parte superior izquierda siempre verás cuánto te falta para terminar el curso.
      `
    },
    { 
      id: 'otras-areas', 
      title: 'Otras Áreas', 
      icon: <HelpCircle className="w-5 h-5" />, 
      color: 'bg-purple-500',
      content: `
## Herramientas adicionales
Además de los contenidos didácticos, dispones de áreas de soporte y personalización:

- Perfil: Desde tu icono de usuario puedes modificar tus datos personales y fotografía.
- Área de Ayuda: Un centro de soporte para resolver incidencias técnicas con la plataforma. El icono de acceso (?) se encuentra en el menú superior, justo al lado de tu perfil de estudiante.
- Comunicaciones: Buzón de mensajes privados para comunicarte con la administración del centro.
      `
    },
    { 
      id: 'expediente', 
      title: 'Expediente y Tutor', 
      icon: <User className="w-5 h-5" />, 
      color: 'bg-orange-500',
      content: `
## Control de tu formación
Es fundamental que hagas un seguimiento de tu propio progreso y resuelvas tus dudas:

- Expediente académico: Desde el icono de calificaciones (forma de medalla) situado en la barra superior al lado del icono de Comunicaciones, podrás ver el estado de tus fichas de proyecto, tus notas y el diploma al acabar el curso.
- Contacto con el tutor: Dispones de un botón directo de "TUTOR" para enviar consultas pedagógicas que serán resueltas en menos de 24-48 horas laborables.
- Foros: A través del botón de "FOROS" (color azul cyan) podrás participar en los hilos de debate para compartir experiencias con otros alumnos.
      `
    },
  ];

  return (
    <div className="py-4">
      {/* Tab Switcher */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 bg-slate-50 p-2 rounded-2xl border border-slate-100">
        {tabs.map((tab, idx) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(idx)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
              activeTab === idx 
                ? `${tab.color} text-white shadow-lg` 
                : 'text-slate-500 hover:bg-white hover:shadow-sm'
            }`}
          >
            {tab.icon}
            <span className="hidden sm:inline">{tab.title}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-xl shadow-slate-50 relative overflow-hidden"
        >
          <div className="relative z-10">
            {/* The formatLine/parseMarkdown logic is redundant here if we use standard markdown, 
                let's just use a simple internal renderer for speed since this is inside a component */}
            <div className="markdown-content">
              {tabs[activeTab].content.split('\n').map((line, i) => {
                if (line.startsWith('## ')) return <h2 key={i} className="text-xl font-black text-slate-800 mb-6 flex items-center gap-3"><span className={`w-1.5 h-6 rounded-full ${tabs[activeTab].color}`} />{line.replace('## ', '')}</h2>;
                if (line.startsWith('- ')) return <div key={i} className="flex gap-3 mb-3"><div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" /><p className="text-slate-600">{line.replace('- ', '')}</p></div>;
                if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ')) return <div key={i} className="flex gap-3 mb-3 font-medium text-slate-700 bg-slate-50 p-3 rounded-xl border-l-4 border-slate-200"><span className="text-brand-500">{line.split('.')[0]}.</span><p>{line.split('.').slice(1).join('.')}</p></div>;
                if (line.trim() === '') return <div key={i} className="h-2" />;
                return <p key={i} className="text-[16px] text-slate-600 leading-relaxed mb-4">{line}</p>;
              })}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const COURSE_MODULES = [
  {
    id: 'intro',
    title: 'Información del Curso',
    icon: <BookOpen className="w-5 h-5" />,
    sections: [
      {
        id: 'presentacion',
        title: 'Presentación y Bienvenida',
        content: `
# Presentación

**Curso:** IFCT0073 Millora la teva productivitat amb Intel·ligència Artificial

**Acción Formativa:** 652877

**Modalidad:** Online

**Carga lectiva:** 10 horas

**GRUPO:** 003

Este curso busca capacitar a las personas participantes a saber identificar y aplicar con éxito herramientas de IA, generando contenido en múltiples formatos que mejoren de manera tangible su productividad en el entorno laboral y permitan explorar nuevas áreas en el sector.

En línea con el actual marco normativo que regula el Sistema de Formación Profesional, establecido por la Ley Orgánica 3/2022, este curso se organiza bajo una estructura modular y flexible que permite una formación acreditable a lo largo de la vida.

El curso aborda desde los fundamentos éticos y legales de la IA hasta el dominio práctico de plataformas de generación de texto, imagen, audio y vídeo. Mediante un método eminentemente práctico y demostrativo, se busca que el estudiante no solo acumule conocimientos, sino que desarrolle la capacidad crítica para seleccionar la herramienta más adecuada en cada contexto profesional.

### TUTOR DEL CURSO:
**Juan López.** Licenciado en informática. CEO de WAIAN, empresa especializada en diseño e implantación de proyectos en Inteligencia Artificial. Técnico Profesional en Formación E-learning.
        `
      },
      {
        id: 'destinatarios',
        title: 'Destinatarios y Requisitos',
        content: `
# Destinatarios

Este es tu curso si eres una persona interesada en mejorar tu productividad en el entorno laboral mediante el uso de herramientas de Inteligencia Artificial, así como en explorar nuevas oportunidades en el sector.

## Requisitos:

Para el adecuado aprovechamiento del curso es fundamental contar con competencias digitales básicas.

Obtendrás un mejor aprovechamiento del curso si desarrollas una actitud de adaptabilidad tecnológica que te permita mantener la actualización constante de tus competencias digitales.
        `
      },
      {
        id: 'objetivos',
        title: 'Objetivos del Módulo',
        content: `
# Objetivos

Al finalizar este curso serás capaz de **identificar el concepto de Inteligencia Artificial** y sus utilidades principales en situaciones cotidianas y laborales.

Podrás **distinguir entre IA débil e IA fuerte** mediante ejemplos sencillos del día a día y del entorno profesional.

Además, serás capaz de **explicar de forma básica cómo funciona un sistema de IA** a partir de datos, algoritmos, aprendizaje y resultados.

Finalmente, conseguirás **reconocer las principales ramas de la Inteligencia Artificial** —Machine Learning, Deep Learning, PLN e hibridación— en aplicaciones prácticas relacionadas con la productividad laboral.
        `
      },
       {
        id: 'metodologia',
        title: 'Metodología y Seguimiento',
        content: `
## Metodología del Curso
El curso aborda desde los fundamentos éticos y legales hasta el dominio práctico de plataformas de generación de texto, imagen, audio y vídeo.

- **Método Práctico**: Eminentemente demostrativo, buscando que el estudiante no solo acumule conocimientos, sino que desarrolle capacidad crítica.
- **Funcionamiento**: Autogestionado con soporte tutorial.
- **Tutoría y Seguimiento**: Los alumnos disponen de un foro de consultas y sesiones periódicas de resolución de dudas via streaming.
- **Sistema de Evaluación**: Basado en la realización de dos fichas de proyecto prácticas y un examen final tipo test.

## Contenidos y temporalización
**Fecha de inicio:** 1 de junio | **Fecha de fin:** 16 de junio
        `,
        weeks: [
          {
            title: 'Semana 1',
            date: 'del 1 al 4 de junio',
            unit: 'UNIDAD 1. Introducción a la Inteligencia Artificial',
            content: 'Introducción a la Inteligencia Artificial: evolución y utilidades.'
          },
          {
            title: 'Semana 2',
            date: '5 - 8 de junio',
            unit: 'UNIDAD 2. Profundización en la Introducción a la IA',
            content: 'Introducción a la Inteligencia Artificial: evolución y utilidades.'
          },
          {
            title: 'Semana 3',
            date: '9 - 11 de junio',
            unit: 'UNIDAD 3. Ramas de la Inteligencia Artificial',
            content: 'Identificación de las ramas de la IA: Machine Learning, Deep Learning, Procesamiento de Lenguaje Natural (NLP) e hibridación.'
          },
          {
            title: 'Semana 4',
            date: '12 - 15 junio',
            unit: 'UNIDAD 4. Profundización en las ramas de la IA',
            content: 'Identificación de las ramas de la IA: Machine Learning, Deep Learning, Procesamiento de Lenguaje Natural (NLP) e hibridación.'
          }
        ]
      },
      {
        id: 'requisitos-tecnicos',
        title: 'Requisitos técnicos',
        content: `
# Requisitos técnicos

Dado que este es un curso en modalidad online, para su seguimiento es necesario que cuentes con los siguientes elementos de hardware y software:

### Hardware
- **Conexión a internet**: banda ancha con cable o inalámbrica (3G, 4G/LTE).
- **Ordenador (PC o Mac) o tablet** con capacidad suficiente para ejecutar herramientas de Inteligencia Artificial basadas en navegador.
- **Micrófono** para las sesiones de aula virtual (se recomienda auriculares con micrófono).

### Software
- **Navegador web actualizado** (Chrome, Edge, Firefox o Safari).
- **Acceso a herramientas de Inteligencia Artificial generativa** basadas en web (como ChatGPT, Gemini u otras similares).
- **Cuenta de usuario** en las plataformas de IA que se utilizarán durante el curso.
        `
      },
      {
        id: 'funcionamiento-curso',
        title: 'Funcionamiento del Curso',
        content: `
# Funcionamiento del curso

[FUNCIONAMIENTO_TABS]
        `
      }
    ]
  },
  {
    id: 'fundamentals',
    title: 'Módulo 1: Fundamentos de la IA',
    icon: <Brain className="w-5 h-5" />,
    sections: [
      {
        id: 'que-es-la-ia',
        title: '¿Qué es la IA?',
        content: `
# Fundamentos de la Intel·ligència Artificial
En términos sencillos, la **IA** es la capacidad de un ordenador o una máquina para realizar tareas que, hasta hace poco, solo podían hacer las personas: comprender lenguaje, identificar imágenes, tomar decisiones o aprender de experiencias previas.

## Definición Formal
Organismos como la **Comisión Europea** la definen como sistemas de software (y a veces hardware) diseñados para percibir su entorno, procesar datos, razonar sobre la información y actuar para conseguir unos objetivos.

> **Diagrama: Componentes básicos**
> 1. **Datos de entrada**: Textos, imágenes, números, audio.
> 2. **Algoritmos y modelos**: Reglas programadas, modelos de aprendizaje.
> 3. **Proceso de aprendizaje**: El algoritmo detecta patrones y ajusta parámetros.
> 4. **Decisiones o resultados**: Recomendaciones, clasificaciones, textos generados.
        `
      },
      {
        id: 'historia',
        title: 'Historia y Evolución',
        content: `
# Historia y Evolución de la IA

La idea de crear "seres artificiales inteligentes" es muy antigua, pero como disciplina científica comienza en el siglo XX. Explora los hitos fundamentales en esta línea temporal interactiva:

[TIMELINE]

## Resumen de la evolución
Desde las bases teóricas de Alan Turing hasta la explosión de la IA generativa que vivimos hoy, la tecnología ha pasado por "inviernos" (falta de fondos y progreso) y "primaveras" de innovación acelerada gracias al aumento de la potencia de cómputo y la disponibilidad masiva de datos.
        `
      },
      {
        id: 'prueba-1',
        title: 'Prueba 1',
        content: `
# Prueba de Conocimiento 1
Demuestra lo aprendido sobre la definición e historia de la IA.

[QUIZ_M1]
        `
      },
      {
        id: 'tipos-ia',
        title: 'Tipos de Inteligencia Artificial',
        content: `
## IA Débil (Narrow) vs IA Fuerte (General)

### IA Estrecha o Débil (Narrow AI)
Diseñada para hacer bien una tarea o un conjunto concreto de tareas (traducir textos, reconocer voces, recomendar productos). Es la que existe y utilizamos hoy.
*Ejemplos: Chatbots, filtros de spam, recomendaciones de Netflix.*

### IA General o Fuerte (AGI)
Sería una IA capaz de aprender y aplicar conocimiento en cualquier dominio, con flexibilidad comparable a la de una persona. De momento es un concepto teórico.
*Ejemplos: Aparece en libros y películas de ciencia ficción.*

## ¿Cómo funciona el Machine Learning?
La capacidad de una máquina para aprender a partir de datos sin que una persona le especifique todas las reglas paso a paso.
1. **Recolección de datos**.
2. **Limpieza y preparación**.
3. **Entrenamiento** del modelo.
4. **Evaluación**.
5. **Uso en producción**.
        `
      },
      {
        id: 'ml-branches',
        title: 'Machine Learning',
        content: `
## Tipos básicos de aprendizaje en ML

### 1. Supervisado
Requiere datos etiquetados. El sistema aprende a clasificar datos basados en ejemplos previos (ej: fotos de perros etiquetadas por raza).

### 2. No Supervisado
Trabaja con datos no etiquetados. Busca patrones ocultos por sí mismo (Clustering). Muy útil para estudios de mercado.

### 3. Por Refuerzo
El agente prueba acciones en un entorno y recibe recompensas o "penalizaciones" para optimizar su comportamiento.
        `
      },
      {
        id: 'dl-nlp',
        title: 'Deep Learning y NLP',
        content: `
## Deep Learning (Aprendizaje Profundo)
Subconjunto del ML basado en **redes neuronalas profundas**, inspiradas en el funcionamiento del cerebro humano. Permite resolver problemas complejos como reconocer imágenes o voz con precisión altísima.

## Procesamiento del Lenguaje Natural (PLN/NLP)
Branca de la IA que permite que los ordenadores entiendan, analicen y generen lenguaje humano, tanto escrito como hablado. Es la base de los traductores automáticos y los chatbots.

## Hibridación: El Futuro
Consiste en combinar diferentes enfoques: modelos neuronales (buenos para aprender de datos) + reglas lógicas (buenos para razonar y explicar decisiones).
        `
      },
      {
        id: 'prueba-2',
        title: 'Prueba 2',
        content: `
# Prueba de Conocimiento 2
Demuestra lo aprendido sobre Tipos de IA, Machine Learning, Deep Learning y NLP.

[QUIZ_M1_P2]
        `
      },
      {
        id: 'riscos-mitos',
        title: 'Riesgos, Límites y Mitos',
        content: `
## Riesgos y Límites
- **Dependencia excesiva**: Confiar demasiado en la IA puede llevar a resultados sin pensamiento crítico.
- **Errores y sesgos**: Si los datos de entrenamiento están sesgados, el resultado también lo será.
- **Privacidad y seguridad**: Respetar siempre la normativa de protección de datos.

## Mitos vs Realidad
- **Mito**: "La IA me dejará sin trabajo ahora mismo".
- **Realidad**: La IA es una herramienta que potencia al trabajador; la clave es la adaptación.
- **Mito**: "La IA siempre tiene razón".
- **Realidad**: La IA puede "alucinar" o equivocarse; requiere supervisión humana constante.
        `
      },
      {
        id: 'prueba-3',
        title: 'Prueba 3',
        content: `
# Prueba de Conocimiento 3
Demuestra lo aprendido sobre Riesgos, Límites y Mitos de la IA.

[QUIZ_M1_P3]
        `
      }
    ]
  },
  {
    id: 'practice',
    title: 'Actividades y Proyecto',
    icon: <FileText className="w-5 h-5" />,
    sections: [
      {
        id: 'fichas-proyecto',
        title: 'Fichas de Proyecto Final',
        content: `
## Tarea 1: Catálogo Personal de IA
Elaborar una lista de al menos 5 situaciones diarias donde aparezca la IA (móvil, banca, ocio). Describe para qué sirve y a qué rama pertenece (ML, DL, NLP).

## Tarea 2: Informe resumido con IA
Elegir un documento profesional largo y utilizar una herramienta de IA para generar un resumen. Comparar los resultados con una lectura propia y analizar la fiabilidad del resumen.

## Criterios de Evaluación
- Identificación correcta de aplicaciones reales.
- Capacidad de síntesis.
- Reflexión crítica sobre el uso de la herramienta.
        `
      }
    ]
  }
];

const QUIZ_QUESTIONS = [
  {
    question: "¿En qué año se acuñó formalmente el término 'Inteligencia Artificial'?",
    options: ["1936", "1950", "1956", "1966"],
    correct: 2
  },
  {
    question: "¿Cuál es la característica principal de la IA Estrecha (Narrow IA)?",
    options: [
      "Puede hacer cualquier tarea humana", 
      "Está diseñada para una tarea específica", 
      "Tiene sentimientos propios", 
      "Funciona sin datos"
    ],
    correct: 1
  },
  {
    question: "¿Qué rama de la IA se encarga de que las máquinas entiendan el lenguaje humano?",
    options: ["Machine Learning", "Deep Learning", "NLP / PLN", "Big Data"],
    correct: 2
  },
  {
    question: "¿Qué es el 'entrenamiento' en el contexto del Machine Learning?",
    options: [
      "Instalar el software en el ordenador", 
      "Proporcionar datos para que el modelo aprenda patrones", 
      "Limpiar el hardware de la máquina", 
      "Escribir todas las reglas paso a paso"
    ],
    correct: 1
  }
];

// --- Componentes ---

function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="w-full bg-slate-200 h-2 sticky top-0 z-50">
      <motion.div 
        className="bg-brand-600 h-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}

const M1_QUIZ_QUESTIONS = [
  {
    question: "¿Qué es en términos sencillos la Inteligencia Artificial?",
    options: [
      "Un robot con sentimientos humanos",
      "La capacidad de una máquina para realizar tareas que requieren inteligencia humana",
      "Un programa que solo sirve para cálculos matemáticos",
      "Una base de datos muy grande"
    ],
    correct: 1
  },
  {
    question: "¿En qué año se acuñó formalmente el término 'Inteligencia Artificial'?",
    options: ["1950", "1956", "1966", "1997"],
    correct: 1
  },
  {
    question: "¿Quién propuso la famosa prueba para determinar si una máquina puede pensar?",
    options: ["John McCarthy", "Isaac Asimov", "Alan Turing", "Bill Gates"],
    correct: 2
  },
  {
    question: "Según la Comisión Europea, ¿cuál es uno de los objetivos de la IA?",
    options: [
      "Percibir su entorno y actuar para conseguir objetivos",
      "Sustituir a todos los humanos",
      "Gastar mucha energía eléctrica",
      "Almacenar fotos sin fin"
    ],
    correct: 0
  }
];

function M1Quiz({ onComplete }: { onComplete: (passed: boolean) => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleNext = () => {
    const isCorrect = selectedOption === M1_QUIZ_QUESTIONS[currentStep].correct;
    const newScore = isCorrect ? score + 1 : score;
    
    if (currentStep + 1 < M1_QUIZ_QUESTIONS.length) {
      setScore(newScore);
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
    } else {
      setScore(newScore);
      setShowResult(true);
    }
  };

  if (showResult) {
    const passed = score >= 2; // 50% of 4
    return (
      <div className="text-center p-8 bg-white dark:bg-slate-900 rounded-2xl transition-colors duration-300">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${passed ? 'bg-green-100 dark:bg-green-900/30 text-green-600' : 'bg-red-100 dark:bg-red-900/30 text-red-600'}`}>
          {passed ? <CheckCircle2 size={32} /> : <AlertTriangle size={32} />}
        </div>
        <h3 className="text-xl font-bold mb-2 dark:text-slate-100">{passed ? '¡Superado!' : 'No superado'}</h3>
        <p className="text-slate-500 dark:text-slate-400 mb-6">Has acertado {score} de {M1_QUIZ_QUESTIONS.length} preguntas.</p>
        {!passed ? (
          <button 
            onClick={() => { setCurrentStep(0); setScore(0); setShowResult(false); setSelectedOption(null); }}
            className="px-6 py-2 bg-brand-500 text-white rounded-lg font-bold hover:bg-brand-600 transition-colors"
          >
            Reintentar
          </button>
        ) : (
          <div className="space-y-4">
            <p className="text-green-600 dark:text-green-400 font-bold mb-4">¡Has superado la prueba!</p>
            <button 
              onClick={() => onComplete(true)}
              className="px-8 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-100 dark:shadow-none flex items-center gap-2 mx-auto"
            >
              Finalizar Prueba
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="text-center mb-4">
        <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Pregunta {currentStep + 1} de {M1_QUIZ_QUESTIONS.length}</p>
        <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100">{M1_QUIZ_QUESTIONS[currentStep].question}</h4>
      </div>
      <div className="space-y-3">
        {M1_QUIZ_QUESTIONS[currentStep].options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedOption(idx)}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between ${
              selectedOption === idx ? 'border-brand-500 bg-brand-50 dark:bg-brand-900/20' : 'border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <span className="text-sm font-medium dark:text-slate-200">{opt}</span>
            <div className={`w-4 h-4 rounded-full border-2 ${selectedOption === idx ? 'border-brand-500 bg-brand-500' : 'border-slate-200 dark:border-slate-700'}`} />
          </button>
        ))}
      </div>
      <button
        disabled={selectedOption === null}
        onClick={handleNext}
        className="w-full bg-brand-500 text-white py-3 rounded-xl font-bold disabled:opacity-50 transition-all"
      >
        {currentStep + 1 === M1_QUIZ_QUESTIONS.length ? 'Finalizar' : 'Siguiente'}
      </button>
    </div>
  );
}

const M1_P2_QUIZ_QUESTIONS = [
  {
    question: "¿Qué caracteriza a la IA Estrecha o Débil?",
    options: [
      "Puede realizar cualquier tarea humana",
      "Está diseñada para una tarea o conjunto de tareas concretas",
      "Tiene conciencia propia",
      "No necesita datos para funcionar"
    ],
    correct: 1
  },
  {
    question: "En el Machine Learning, ¿qué tipo de aprendizaje utiliza datos etiquetados?",
    options: ["Supervisado", "No supervisado", "Por refuerzo", "Híbrido"],
    correct: 0
  },
  {
    question: "¿En qué se inspiran las redes neuronales profundas del Deep Learning?",
    options: ["En circuitos eléctricos simples", "En el funcionamiento del cerebro humano", "En fórmulas de Excel", "En redes de pesca"],
    correct: 1
  },
  {
    question: "¿Qué permiten las tecnologías de NLP (Procesamiento del Lenguaje Natural)?",
    options: [
      "Que las máquinas entiendan y generen lenguaje humano",
      "Que las máquinas corran más rápido",
      "Mejorar la resolución de las fotos",
      "Hackear redes sociales"
    ],
    correct: 0
  }
];

function M1Quiz2({ onComplete }: { onComplete: (passed: boolean) => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleNext = () => {
    const isCorrect = selectedOption === M1_P2_QUIZ_QUESTIONS[currentStep].correct;
    const newScore = isCorrect ? score + 1 : score;
    
    if (currentStep + 1 < M1_P2_QUIZ_QUESTIONS.length) {
      setScore(newScore);
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
    } else {
      setScore(newScore);
      setShowResult(true);
    }
  };

  if (showResult) {
    const passed = score >= 2; // 50% of 4
    return (
      <div className="text-center p-8 bg-white dark:bg-slate-900 rounded-2xl transition-colors duration-300">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${passed ? 'bg-green-100 dark:bg-green-900/30 text-green-600' : 'bg-red-100 dark:bg-red-900/30 text-red-600'}`}>
          {passed ? <CheckCircle2 size={32} /> : <AlertTriangle size={32} />}
        </div>
        <h3 className="text-xl font-bold mb-2 dark:text-slate-100">{passed ? '¡Superado!' : 'No superado'}</h3>
        <p className="text-slate-500 dark:text-slate-400 mb-6">Has acertado {score} de {M1_P2_QUIZ_QUESTIONS.length} preguntas.</p>
        {!passed ? (
          <button 
            onClick={() => { setCurrentStep(0); setScore(0); setShowResult(false); setSelectedOption(null); }}
            className="px-6 py-2 bg-brand-500 text-white rounded-lg font-bold hover:bg-brand-600 transition-colors"
          >
            Reintentar
          </button>
        ) : (
          <div className="space-y-4">
            <p className="text-green-600 dark:text-green-400 font-bold mb-4">¡Has superado la prueba!</p>
            <button 
              onClick={() => onComplete(true)}
              className="px-8 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-100 dark:shadow-none flex items-center gap-2 mx-auto"
            >
              Finalizar Prueba
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="text-center mb-4">
        <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Pregunta {currentStep + 1} de {M1_P2_QUIZ_QUESTIONS.length}</p>
        <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100">{M1_P2_QUIZ_QUESTIONS[currentStep].question}</h4>
      </div>
      <div className="space-y-3">
        {M1_P2_QUIZ_QUESTIONS[currentStep].options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedOption(idx)}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between ${
              selectedOption === idx ? 'border-brand-500 bg-brand-50 dark:bg-brand-900/20' : 'border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <span className="text-sm font-medium dark:text-slate-200">{opt}</span>
            <div className={`w-4 h-4 rounded-full border-2 ${selectedOption === idx ? 'border-brand-500 bg-brand-500' : 'border-slate-200 dark:border-slate-700'}`} />
          </button>
        ))}
      </div>
      <button
        disabled={selectedOption === null}
        onClick={handleNext}
        className="w-full bg-brand-500 text-white py-3 rounded-xl font-bold disabled:opacity-50 transition-all"
      >
        {currentStep + 1 === M1_P2_QUIZ_QUESTIONS.length ? 'Finalizar' : 'Siguiente'}
      </button>
    </div>
  );
}

const M1_P3_QUIZ_QUESTIONS = [
  {
    question: "¿Qué es un 'sesgo algorítmico' en la IA?",
    options: [
      "Un error aleatorio en el código",
      "La replicación de prejuicios humanos presentes en los datos de entrenamiento",
      "Una mejora en la velocidad de procesamiento",
      "Un tipo de virus informático"
    ],
    correct: 1
  },
  {
    question: "¿Qué significa que un modelo de lenguaje tenga 'alucinaciones'?",
    options: [
      "Que puede ver imágenes que no existen",
      "Que genera información falsa con apariencia de veracidad",
      "Que el servidor se ha sobrecalentado",
      "Que el usuario está cansado"
    ],
    correct: 1
  },
  {
    question: "¿Por qué se dice que la IA carece de 'sentido común'?",
    options: [
      "Porque no tiene cerebro físico",
      "Porque solo entiende patrones estadísticos y no el contexto profundo de la realidad",
      "Porque los desarrolladores olvidaron programarlo",
      "Porque es demasiado inteligente para nosotros"
    ],
    correct: 1
  },
  {
    question: "¿Cuál es la realidad frente al mito de que 'la IA siempre tiene razón'?",
    options: [
      "Es cierto, nunca se equivoca si tiene suficientes datos",
      "Puede fallar o alucinar, por lo que requiere supervisión humana constante",
      "Solo tiene razón en matemáticas, no en literatura",
      "La IA solo tiene razón los días laborables"
    ],
    correct: 1
  }
];

function M1Quiz3({ onComplete }: { onComplete: (passed: boolean) => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleNext = () => {
    const isCorrect = selectedOption === M1_P3_QUIZ_QUESTIONS[currentStep].correct;
    const newScore = isCorrect ? score + 1 : score;
    
    if (currentStep + 1 < M1_P3_QUIZ_QUESTIONS.length) {
      setScore(newScore);
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
    } else {
      setScore(newScore);
      setShowResult(true);
    }
  };

  if (showResult) {
    const passed = score >= 2; // 50% of 4
    return (
      <div className="text-center p-8 bg-white dark:bg-slate-900 rounded-2xl transition-colors duration-300">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${passed ? 'bg-green-100 dark:bg-green-900/30 text-green-600' : 'bg-red-100 dark:bg-red-900/30 text-red-600'}`}>
          {passed ? <CheckCircle2 size={32} /> : <AlertTriangle size={32} />}
        </div>
        <h3 className="text-xl font-bold mb-2 dark:text-slate-100">{passed ? '¡Superado!' : 'No superado'}</h3>
        <p className="text-slate-500 dark:text-slate-400 mb-6">Has acertado {score} de {M1_P3_QUIZ_QUESTIONS.length} preguntas.</p>
        {!passed ? (
          <button 
            onClick={() => { setCurrentStep(0); setScore(0); setShowResult(false); setSelectedOption(null); }}
            className="px-6 py-2 bg-brand-500 text-white rounded-lg font-bold hover:bg-brand-600 transition-colors"
          >
            Reintentar
          </button>
        ) : (
          <div className="space-y-4">
            <p className="text-green-600 dark:text-green-400 font-bold mb-4">¡Has completado las pruebas de este módulo!</p>
            <button 
              onClick={() => onComplete(true)}
              className="px-8 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-100 dark:shadow-none flex items-center gap-2 mx-auto"
            >
              Finalizar Prueba
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="text-center mb-4">
        <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Pregunta {currentStep + 1} de {M1_P3_QUIZ_QUESTIONS.length}</p>
        <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100">{M1_P3_QUIZ_QUESTIONS[currentStep].question}</h4>
      </div>
      <div className="space-y-3">
        {M1_P3_QUIZ_QUESTIONS[currentStep].options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedOption(idx)}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between ${
              selectedOption === idx ? 'border-brand-500 bg-brand-50 dark:bg-brand-900/20' : 'border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <span className="text-sm font-medium dark:text-slate-200">{opt}</span>
            <div className={`w-4 h-4 rounded-full border-2 ${selectedOption === idx ? 'border-brand-500 bg-brand-500' : 'border-slate-200 dark:border-slate-700'}`} />
          </button>
        ))}
      </div>
      <button
        disabled={selectedOption === null}
        onClick={handleNext}
        className="w-full bg-brand-500 text-white py-3 rounded-xl font-bold disabled:opacity-50 transition-all"
      >
        {currentStep + 1 === M1_P3_QUIZ_QUESTIONS.length ? 'Finalizar' : 'Siguiente'}
      </button>
    </div>
  );
}

function SectionContent({ section, onM1Complete, onM1P2Complete, onM1P3Complete }: { section: any, onM1Complete?: (passed: boolean) => void, onM1P2Complete?: (passed: boolean) => void, onM1P3Complete?: (passed: boolean) => void }) {
  const parseMarkdown = (text: string) => {
    // Helper to format inline bold text and remove markers
    const formatLine = (line: string) => {
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="text-brand-600">{part.slice(2, -2)}</strong>;
        }
        return part;
      });
    };

    return text.split('\n').map((line, i) => {
      if (line.startsWith('# ')) {
        return (
          <h1 key={i} className="text-4xl font-black bg-gradient-to-r from-brand-600 to-brand-800 bg-clip-text text-transparent mb-8">
            {formatLine(line.replace('# ', ''))}
          </h1>
        );
      }
      if (line.startsWith('## ')) {
        return (
          <h2 key={i} className="text-2xl font-bold text-brand-600 border-l-4 border-brand-500 pl-4 my-8">
            {formatLine(line.replace('## ', ''))}
          </h2>
        );
      }
      if (line.startsWith('### ')) {
        return (
          <h3 key={i} className="text-xl font-bold text-slate-800 my-6 bg-brand-50 rounded-lg px-4 py-2 inline-block">
            {formatLine(line.replace('### ', ''))}
          </h3>
        );
      }
      if (line.startsWith('- ')) {
        return (
          <div key={i} className="flex items-start gap-3 mb-4 group">
            <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-400 shrink-0 group-hover:scale-125 transition-transform" />
            <div className="text-[16px] text-slate-700 leading-relaxed">
              {formatLine(line.replace('- ', ''))}
            </div>
          </div>
        );
      }
      if (line.startsWith('> ')) {
        return (
          <blockquote key={i} className="border-l-4 border-brand-400 bg-brand-50/50 px-6 py-5 italic my-8 rounded-r-2xl text-brand-900 text-[16px] shadow-sm">
            {formatLine(line.replace('> ', ''))}
          </blockquote>
        );
      }
      if (line.startsWith('![')) {
        const alt = line.match(/\[(.*?)\]/)?.[1];
        const src = line.match(/\((.*?)\)/)?.[1];
        return (
          <div key={i} className="my-8">
            <img 
              src={src} 
              alt={alt} 
              className="w-full rounded-2xl shadow-xl border border-slate-100 object-contain h-auto max-h-[85vh] mx-auto" 
              referrerPolicy="no-referrer" 
            />
          </div>
        );
      }
      if (line.includes('[TIMELINE]')) {
        return <TimelineComponent key={i} />;
      }
      if (line.includes('[CONCEPT_MAP]')) {
        return <ConceptMapComponent key={i} />;
      }
      if (line.includes('[FUNCIONAMIENTO_TABS]')) {
        return <FuncionamientoTabsComponent key={i} />;
      }
      if (line.includes('[QUIZ_M1]') || line.includes('[QUIZ_M1_P2]') || line.includes('[QUIZ_M1_P3]')) {
        return (
          <div key={i} className="my-10 p-1 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden transition-colors duration-300">
            <div className="p-8">
              {line.includes('[QUIZ_M1]') && <M1Quiz onComplete={(passed) => onM1Complete?.(passed)} />}
              {line.includes('[QUIZ_M1_P2]') && <M1Quiz2 onComplete={(passed) => onM1P2Complete?.(passed)} />}
              {line.includes('[QUIZ_M1_P3]') && <M1Quiz3 onComplete={(passed) => onM1P3Complete?.(passed)} />}
            </div>
          </div>
        );
      }
      if (line.trim() === '') return <div key={i} className="h-4" />;
      return (
        <p key={i} className="text-[17px] text-slate-700 leading-relaxed mb-6">
          {formatLine(line)}
        </p>
      );
    });
  };

  return (
    <motion.div 
      key={section.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full mx-auto py-8 px-4 md:px-0 markdown-content"
    >
      {parseMarkdown(section.content)}
      
      {section.weeks && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {section.weeks.map((week: any, idx: number) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3 text-brand-600">
                <span className="font-bold text-sm uppercase tracking-wider">{week.title}</span>
                <Clock size={14} className="opacity-50" />
              </div>
              <p className="text-[11px] font-bold text-slate-400 mb-2">{week.date}</p>
              <h4 className="text-xs font-black text-brand-800 mb-3 leading-snug">
                {week.unit}
              </h4>
              <div className="w-8 h-1 bg-brand-500 rounded-full mb-3" />
              <p className="text-sm text-slate-600 leading-relaxed">
                {week.content}
              </p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function QuizResult({ score, total, onRestart, onFinalize }: { score: number, total: number, onRestart: () => void, onFinalize: (score: number) => void }) {
  const passed = score >= total / 2;

  useEffect(() => {
    if (passed) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#10b981', '#3b82f6', '#ef4444', '#8b5cf6']
      });
    }
  }, [passed]);

  return (
    <div className="text-center p-12 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="w-20 h-20 bg-brand-50 dark:bg-brand-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
        {passed ? <Award className="w-10 h-10 text-brand-600 dark:text-brand-400" /> : <ShieldCheck className="w-10 h-10 text-amber-500" />}
      </div>
      <h2 className="text-3xl font-bold mb-2 text-brand-900 dark:text-brand-400">{passed ? '¡Prueba Superada!' : '¡Examen Finalizado!'}</h2>
      <p className="text-slate-500 dark:text-slate-400 text-lg mb-8">Has obtenido una puntuación de {score} sobre {total}</p>
      
      {!passed ? (
        <div className="space-y-4">
          <p className="text-amber-600 dark:text-amber-400 text-sm font-bold mb-4">Debes obtener al menos {total / 2} puntos para aprobar.</p>
          <button 
            onClick={onRestart}
            className="px-10 py-3.5 bg-brand-500 text-white rounded-xl font-bold hover:bg-brand-600 shadow-lg shadow-brand-100 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Repetir Prueba
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <p className="text-green-600 dark:text-green-400 font-bold text-lg">Has superado el 50% de las respuestas correctas.</p>
          <button 
            onClick={() => onFinalize(score)}
            className="px-12 py-4 bg-green-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-green-700 shadow-xl shadow-green-100 dark:shadow-none transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center gap-3 mx-auto"
          >
            Finalizar Prueba
            <ChevronRight size={20} strokeWidth={3} />
          </button>
        </div>
      )}
    </div>
  );
}

function FinalQuiz({ onComplete }: { onComplete: (score: number) => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleNext = () => {
    const isCorrect = selectedOption === QUIZ_QUESTIONS[currentStep].correct;
    const newScore = isCorrect ? score + 1 : score;
    
    if (currentStep + 1 < QUIZ_QUESTIONS.length) {
      setScore(newScore);
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
    } else {
      setScore(newScore);
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <QuizResult 
        score={score} 
        total={QUIZ_QUESTIONS.length} 
        onRestart={() => { setCurrentStep(0); setScore(0); setShowResult(false); setSelectedOption(null); }} 
        onFinalize={(finalScore) => onComplete(finalScore)}
      />
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4 md:p-8">
      <div className="mb-10 text-center">
        <span className="px-3 py-1 bg-brand-50 text-brand-600 text-xs font-bold uppercase tracking-widest rounded-full">Examen Final</span>
        <h2 className="text-2xl font-bold mt-4 text-brand-900">{QUIZ_QUESTIONS[currentStep].question}</h2>
        <div className="flex justify-center gap-1 mt-6">
          {QUIZ_QUESTIONS.map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === currentStep ? 'w-8 bg-brand-500' : 'w-4 bg-slate-100'}`} />
          ))}
        </div>
      </div>
      <div className="space-y-4">
        {QUIZ_QUESTIONS[currentStep].options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedOption(idx)}
            className={`w-full text-left p-5 rounded-xl border-2 transition-all flex items-center justify-between group ${
              selectedOption === idx 
                ? 'border-brand-500 bg-brand-50/30 text-brand-900 shadow-sm' 
                : 'border-slate-100 hover:border-brand-200 hover:bg-slate-50'
            }`}
          >
            <span className="font-medium text-[15px]">{opt}</span>
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${selectedOption === idx ? 'border-brand-500 bg-brand-500' : 'border-slate-200 group-hover:border-brand-300'}`}>
              {selectedOption === idx && <CheckCircle className="w-3 h-3 text-white" />}
            </div>
          </button>
        ))}
      </div>
      <button
        disabled={selectedOption === null}
        onClick={handleNext}
        className="mt-10 w-full bg-brand-500 text-white py-4 rounded-xl font-bold hover:bg-brand-600 shadow-lg shadow-brand-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:-translate-y-0.5 active:translate-y-0"
      >
        {currentStep + 1 === QUIZ_QUESTIONS.length ? 'Finalizar y Ver Resultados' : 'Siguiente Pregunta'}
      </button>
    </div>
  );
}

// --- App Principal ---

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const [activeSegment, setActiveSegment] = useState({ moduleIdx: 0, sectionIdx: 0 });
  const [viewedSections, setViewedSections] = useState<Set<string>>(new Set(['presentacion']));

  const [showQuiz, setShowQuiz] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [showConfirmClose, setShowConfirmClose] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [commsOpen, setCommsOpen] = useState(false);
  const [activeCommsId, setActiveCommsId] = useState(1);
  const [gradesOpen, setGradesOpen] = useState(false);
  const [tutorOpen, setTutorOpen] = useState(false);
  const [forumsOpen, setForumsOpen] = useState(false);
  const [timerOpen, setTimerOpen] = useState(false);
  const [agendaOpen, setAgendaOpen] = useState(false);
  const [exercisesOpen, setExercisesOpen] = useState(false);
  const [satisfactionOpen, setSatisfactionOpen] = useState(false);
  const [m1TestPassed, setM1TestPassed] = useState(false);
  const [m1P2Passed, setM1P2Passed] = useState(false);
  const [m1P3Passed, setM1P3Passed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) return saved === 'true';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);
  const [examResult, setExamResult] = useState<{ score: number, passed: boolean } | null>(null);
  const [helpView, setHelpView] = useState<'home' | 'form' | 'faq'>('home');

  // Load progress on mount
  useEffect(() => {
    const savedM1 = localStorage.getItem('m1TestPassed');
    if (savedM1 === 'true') setM1TestPassed(true);
    const savedM1P2 = localStorage.getItem('m1P2Passed');
    if (savedM1P2 === 'true') setM1P2Passed(true);
    const savedM1P3 = localStorage.getItem('m1P3Passed');
    if (savedM1P3 === 'true') setM1P3Passed(true);
  }, []);

  // Sync state to SectionContent and handling quiz completions
  const handleM1Complete = (passed: boolean) => {
    setM1TestPassed(passed);
    if (passed) {
      localStorage.setItem('m1TestPassed', 'true');
      handleNavigate('next');
    }
  };

  const handleM1P2Complete = (passed: boolean) => {
    setM1P2Passed(passed);
    if (passed) {
      localStorage.setItem('m1P2Passed', 'true');
      handleNavigate('next');
    }
  };

  const handleM1P3Complete = (passed: boolean) => {
    setM1P3Passed(passed);
    if (passed) {
      localStorage.setItem('m1P3Passed', 'true');
      handleNavigate('next');
    }
  };

  const [student, setStudent] = useState({
    name: 'Estudiante',
    email: 'estudiante@ejemplo.com',
    photo: null as string | null
  });
  const [tempStudent, setTempStudent] = useState({ ...student });

  const commsMessages = [
    {
      id: 1,
      sender: 'Administración',
      initials: 'AD',
      date: 'Hoy',
      time: '10:45',
      subject: 'Confirmación de examen final',
      preview: 'Hola Estudiante, te confirmamos que tu solicitud de revisión ha sido...',
      content: (
        <>
          <p className="mb-4">Hola <span className="font-bold text-slate-800">{student.name}</span>,</p>
          <p className="mb-4">
            Te confirmamos que hemos recibido tu solicitud de revisión para el examen final del curso. Nuestro equipo académico revisará tus respuestas y se pondrá en contacto contigo en un plazo máximo de 48 horas laborales.
          </p>
          <p className="mb-4">
            Mientras tanto, puedes seguir accediendo a los materiales de consulta si lo necesitas.
          </p>
          <p>Atentamente,<br /><span className="font-bold text-slate-800">Departamento de Administración</span></p>
        </>
      )
    },
    {
      id: 2,
      sender: 'Soporte Técnico',
      initials: 'ST',
      date: 'Ayer',
      time: '16:20',
      subject: 'Incidencia resuelta #1245',
      preview: 'Tu problema con el reproductor de vídeo ha sido resuelto satisfactoriamente...',
      content: (
        <>
          <p className="mb-4">Estimado/a <span className="font-bold text-slate-800">{student.name}</span>,</p>
          <p className="mb-4">
            Le informamos que la incidencia reportada referente a los cortes en la reproducción de los vídeos del Módulo 2 ha sido resuelta. Hemos optimizado la entrega de contenido para su zona geográfica.
          </p>
          <p className="mb-4">
            Por favor, verifique si el problema persiste. Si es así, no dude en responder a este mensaje.
          </p>
          <p>Saludos cordiales,<br /><span className="font-bold text-slate-800">Equipo de Soporte Técnico</span></p>
        </>
      )
    }
  ];

  const activeMessage = commsMessages.find(m => m.id === activeCommsId) || commsMessages[0];
  const [helpForm, setHelpForm] = useState({
    issue: '',
    description: '',
    priority: 'low'
  });

  const faqs = [
    { q: '¿Cómo descargo mi certificado?', a: 'Una vez completado el 100% del curso y superado el examen final, el botón de descarga aparecerá automáticamente en tu perfil.' },
    { q: '¿Tengo acceso de por vida?', a: 'Sí, una vez matriculado puedes acceder a los contenidos en cualquier momento sin límites temporales.' },
    { q: '¿Puedo cambiar mi correo?', a: 'Desde el área de perfil puedes actualizar tus datos de contacto en cualquier momento.' },
    { q: '¿Cómo contacto con mi tutor?', a: 'Usa el buzón de comunicaciones internas para enviar un mensaje directo a tu profesor asignado.' }
  ];

  const openProfile = () => {
    setTempStudent({ ...student });
    setProfileOpen(true);
  };

  const handleCloseProfile = () => {
    const hasChanges = JSON.stringify(student) !== JSON.stringify(tempStudent);
    if (hasChanges) {
      setShowConfirmClose(true);
    } else {
      setProfileOpen(false);
    }
  };

  const saveProfile = () => {
    setStudent({ ...tempStudent });
    setProfileOpen(false);
  };


  const flatSections = useMemo(() => 
    COURSE_MODULES.flatMap(m => m.sections), 
  []);

  const currentSection = COURSE_MODULES[activeSegment.moduleIdx].sections[activeSegment.sectionIdx];
  
  const progress = useMemo(() => 
    (viewedSections.size / flatSections.length) * 100, 
  [viewedSections, flatSections]);

  const handleNavigate = (direction: 'next' | 'prev') => {
    let newModule = activeSegment.moduleIdx;
    let newSection = activeSegment.sectionIdx;

    if (direction === 'next') {
      if (newSection + 1 < COURSE_MODULES[newModule].sections.length) {
        newSection++;
      } else if (newModule + 1 < COURSE_MODULES.length) {
        newModule++;
        newSection = 0;
      } else {
        setShowQuiz(true);
        return;
      }
    } else {
      if (newSection > 0) {
        newSection--;
      } else if (newModule > 0) {
        newModule--;
        newSection = COURSE_MODULES[newModule].sections.length - 1;
      }
      setShowQuiz(false);
    }

    setShowQuiz(false);
    setActiveSegment({ moduleIdx: newModule, sectionIdx: newSection });
    const sectionId = COURSE_MODULES[newModule].sections[newSection].id;
    setViewedSections(prev => new Set(prev).add(sectionId));
    window.scrollTo(0, 0);
  };

  const selectSection = (mIdx: number, sIdx: number) => {
    setActiveSegment({ moduleIdx: mIdx, sectionIdx: sIdx });
    const sectionId = COURSE_MODULES[mIdx].sections[sIdx].id;
    setViewedSections(prev => new Set(prev).add(sectionId));
    setShowQuiz(false);
    if (window.innerWidth < 1024) setSidebarOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-950 font-sans selection:bg-brand-100 transition-colors duration-300">
      {/* Confirmation Dialog */}
      <AnimatePresence>
        {showConfirmClose && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowConfirmClose(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-white dark:bg-slate-900 w-full max-w-sm rounded-[2rem] shadow-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <AlertTriangle size={32} />
              </div>
              <h4 className="text-xl font-black text-slate-800 mb-2">¿Descartar cambios?</h4>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                Tienes modificaciones sin guardar en tu perfil. Si cierras ahora, perderás estos cambios.
              </p>
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => {
                    setShowConfirmClose(false);
                    setProfileOpen(false);
                  }}
                  className="w-full py-4 bg-slate-100 text-slate-600 font-bold rounded-2xl hover:bg-slate-200 transition-all"
                >
                  Sí, descartar
                </button>
                <button 
                  onClick={() => setShowConfirmClose(false)}
                  className="w-full py-4 bg-brand-500 text-white font-bold rounded-2xl shadow-lg shadow-brand-200 hover:bg-brand-600 transition-all"
                >
                  Seguir editando
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {helpOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setHelpOpen(false);
                setHelpView('home');
              }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col transition-colors duration-300"
            >
              {/* Header */}
              <div className="p-6 lg:p-8 bg-brand-500 text-white relative overflow-hidden shrink-0">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-white/20 rounded-xl">
                        <CircleHelp size={24} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-black uppercase tracking-tight">Centro de Ayuda</h3>
                    </div>
                    <p className="text-brand-100 text-sm font-medium">Estamos aquí para resolver tus dudas lo más rápido posible.</p>
                  </div>
                  <button 
                    onClick={() => {
                      setHelpOpen(false);
                      setHelpView('home');
                    }}
                    className="p-3 hover:bg-white/20 rounded-full text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Internal Search */}
                <div className="mt-8 relative max-w-xl">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-300" size={18} />
                  <input 
                    type="text" 
                    placeholder="¿En qué podemos ayudarte hoy?"
                    className="w-full bg-white/15 border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-brand-200 outline-none focus:bg-white focus:text-slate-800 focus:placeholder:text-slate-400 transition-all font-medium shadow-inner"
                  />
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 overflow-y-auto bg-slate-50">
                <div className="p-6 lg:p-10">
                  {helpView === 'home' && (
                    <motion.div 
                      key="home"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-10"
                    >
                      {/* Quick Action Tiles */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col items-center text-center">
                          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <BookOpen size={24} />
                          </div>
                          <h4 className="font-bold text-slate-800 text-sm mb-1">Guías de inicio</h4>
                          <p className="text-xs text-slate-500 leading-relaxed">Aprende a navegar por la plataforma paso a paso.</p>
                        </div>
                        <button 
                          onClick={() => setHelpView('faq')}
                          className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col items-center text-center"
                        >
                          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <FileText size={24} />
                          </div>
                          <h4 className="font-bold text-slate-800 text-sm mb-1">Preguntas Frecuentes</h4>
                          <p className="text-xs text-slate-500 leading-relaxed">Respuestas rápidas a las dudas comunes.</p>
                        </button>
                        <button 
                          onClick={() => setHelpView('form')}
                          className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col items-center text-center"
                        >
                          <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <MessageSquare size={24} />
                          </div>
                          <h4 className="font-bold text-slate-800 text-sm mb-1">Abrir Ticket</h4>
                          <p className="text-xs text-slate-500 leading-relaxed">Contacta directamente con nuestro equipo.</p>
                        </button>
                      </div>

                      {/* Common Solutions Section */}
                      <div>
                        <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                          <Zap size={12} className="text-amber-500" />
                          Soluciones más buscadas
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="flex gap-4 p-4 rounded-2xl hover:bg-white hover:rounded-2xl transition-all cursor-pointer">
                            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                              <Cpu size={18} />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-slate-700">El reproductor de vídeo falla</p>
                              <p className="text-xs text-slate-500 mt-1">Suele solucionarse desactivando las extensiones del navegador.</p>
                            </div>
                          </div>
                          <div className="flex gap-4 p-4 rounded-2xl hover:bg-white hover:rounded-2xl transition-all cursor-pointer">
                            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                              <CheckCircle2 size={18} />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-slate-700">¿Cómo descargar materiales?</p>
                              <p className="text-xs text-slate-500 mt-1">Busca el icono de descarga debajo de cada lección teórica.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Footer Info */}
                      <div className="bg-slate-200/50 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          <p className="text-xs font-bold text-slate-600">Soporte técnico online (9:00 - 18:00)</p>
                        </div>
                        <p className="text-xs text-slate-500">Tiempo medio de respuesta: <span className="font-bold text-slate-700">2 horas</span></p>
                      </div>
                    </motion.div>
                  )}

                  {helpView === 'faq' && (
                    <motion.div 
                      key="faq"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <button 
                        onClick={() => setHelpView('home')}
                        className="flex items-center gap-2 text-brand-500 font-bold text-sm mb-6 hover:gap-3 transition-all"
                      >
                        <ChevronLeft size={18} /> Volver
                      </button>
                      <h4 className="text-xl font-black text-slate-800">Preguntas Frecuentes</h4>
                      <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                          <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100">
                            <h5 className="font-bold text-slate-800 mb-2">{faq.q}</h5>
                            <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {helpView === 'form' && (
                    <motion.div 
                      key="form"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <button 
                        onClick={() => setHelpView('home')}
                        className="flex items-center gap-2 text-brand-500 font-bold text-sm mb-6 hover:gap-3 transition-all"
                      >
                        <ChevronLeft size={18} /> Volver
                      </button>
                      
                      <div className="max-w-2xl mx-auto">
                        <div className="mb-8">
                          <h4 className="text-xl font-black text-slate-800 mb-2">Enviar Incidencia</h4>
                          <p className="text-sm text-slate-500">Describe tu problema detalladamente para que podamos ayudarte mejor.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div className="space-y-2">
                            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Tipo de problema</label>
                            <select 
                              value={helpForm.issue}
                              onChange={(e) => setHelpForm(prev => ({ ...prev, issue: e.target.value }))}
                              className="w-full bg-white border border-slate-100 rounded-xl px-4 py-3 text-sm font-medium focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all appearance-none"
                            >
                              <option value="">Selecciona una categoría</option>
                              <option value="access">Problemas de acceso</option>
                              <option value="content">Error en contenidos</option>
                              <option value="platform">Error técnico de plataforma</option>
                              <option value="other">Otros</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Prioridad</label>
                            <div className="flex gap-2">
                              {['low', 'medium', 'high'].map((p) => (
                                <button
                                  key={p}
                                  onClick={() => setHelpForm(prev => ({ ...prev, priority: p }))}
                                  className={`flex-1 py-3 text-[10px] font-black uppercase tracking-wider rounded-xl border transition-all ${
                                    helpForm.priority === p 
                                    ? 'bg-brand-500 border-brand-500 text-white shadow-lg' 
                                    : 'bg-white border-slate-100 text-slate-400 hover:bg-slate-50'
                                  }`}
                                >
                                  {p === 'low' ? 'Baja' : p === 'medium' ? 'Media' : 'Urgente'}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2 mb-8">
                          <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Descripción detallada</label>
                          <textarea 
                            rows={5}
                            placeholder="Ej: He intentado acceder a la lección 2 del Módulo 1 y el vídeo se queda en negro..."
                            value={helpForm.description}
                            onChange={(e) => setHelpForm(prev => ({ ...prev, description: e.target.value }))}
                            className="w-full bg-white border border-slate-100 rounded-2xl px-5 py-4 text-sm font-medium focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all resize-none shadow-sm"
                          />
                        </div>

                        <button 
                          onClick={() => {
                            setHelpOpen(false);
                            setHelpView('home');
                            setHelpForm({ issue: '', description: '', priority: 'low' });
                          }}
                          className="w-full bg-slate-900 text-white font-bold py-5 rounded-[1.5rem] shadow-xl hover:bg-black transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                        >
                          <Send size={18} />
                          Enviar ticket de soporte
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Grades Modal */}
      <AnimatePresence>
        {gradesOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setGradesOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative bg-white w-full max-w-2xl max-h-[90vh] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="p-6 lg:p-8 bg-brand-500 text-white relative overflow-hidden shrink-0">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-white/20 rounded-xl">
                        <Award size={24} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-black uppercase tracking-tight">Calificaciones</h3>
                    </div>
                    <p className="text-brand-100 text-sm font-medium">Expediente académico y seguimiento de objetivos.</p>
                  </div>
                  <button 
                    onClick={() => setGradesOpen(false)}
                    className="p-3 hover:bg-white/20 rounded-full text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* Grades Content */}
              <div className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-950 p-6 lg:p-10 transition-colors duration-300">
                <div className="space-y-8">
                  {/* Final Exam Result */}
                  <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden transition-colors duration-300">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                      <Target size={80} />
                    </div>
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Resultado Examen Final</h4>
                    <div className="flex items-center gap-6">
                      <div className={`w-20 h-20 rounded-3xl flex items-center justify-center border-2 transition-all ${
                        examResult 
                        ? (examResult.passed ? 'bg-green-50 text-green-600 border-green-100' : 'bg-amber-50 text-amber-600 border-amber-100') 
                        : 'bg-brand-50 text-brand-600 border-brand-100'
                      }`}>
                        <span className="text-3xl font-black">{examResult ? examResult.score : '--'}</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800">
                          {examResult 
                            ? (examResult.passed ? 'Apto - Examen Superado' : 'No Apto - Necesitas 2/4') 
                            : 'Pendiente de realización'
                          }
                        </p>
                        <p className="text-xs text-slate-500 mt-1">
                          {examResult 
                            ? (examResult.passed 
                                ? 'Has demostrado tus conocimientos en IA. ¡Felicidades!' 
                                : 'Repasa los contenidos y vuelve a intentarlo.') 
                            : 'Debes completar todos los módulos para habilitar el examen final.'
                          }
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Project Cards (Fichas de Proyecto) */}
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6 ml-1">Fichas de Proyecto</h4>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="bg-white p-6 rounded-2xl border border-slate-100 flex items-center justify-between group hover:shadow-md transition-all">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${progress === 100 ? 'bg-green-50 text-green-500' : 'bg-blue-50 text-blue-500'}`}>
                            <Workflow size={20} />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-800">Ficha 1: Catálogo Personal de IA</p>
                            <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mt-0.5">Identificación de aplicaciones reales</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 text-[10px] font-black uppercase rounded-full border transition-all ${
                            progress === 100 
                            ? 'bg-green-50 text-green-600 border-green-100' 
                            : 'bg-amber-50 text-amber-600 border-amber-100'
                          }`}>
                            {progress === 100 ? 'Entregado' : 'Pendiente'}
                          </span>
                        </div>
                      </div>

                      <div className="bg-white p-6 rounded-2xl border border-slate-100 flex items-center justify-between group hover:shadow-md transition-all">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${progress === 100 ? 'bg-green-50 text-green-500' : 'bg-purple-50 text-purple-500'}`}>
                            <Layers size={20} />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-800">Ficha 2: Informe resumido con IA</p>
                            <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mt-0.5">Uso de herramientas generativas</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 text-[10px] font-black uppercase rounded-full border transition-all ${
                            progress === 100 
                            ? 'bg-green-50 text-green-600 border-green-100' 
                            : 'bg-amber-50 text-amber-600 border-amber-100'
                          }`}>
                            {progress === 100 ? 'Entregado' : 'Pendiente'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Course Status Banner */}
                  <div className="bg-slate-900 rounded-[2rem] p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-colors ${
                      progress === 100 && examResult?.passed ? 'bg-green-500/20' : 'bg-brand-500/20'
                    }`} />
                    <div className="relative z-10 text-center md:text-left">
                      <h4 className="text-lg font-black uppercase tracking-tight mb-1">
                        {progress === 100 && examResult?.passed ? '¡Curso Finalizado!' : 'Estado del Diploma'}
                      </h4>
                      <p className="text-slate-400 text-sm">
                        {progress === 100 && examResult?.passed 
                          ? 'Has cumplido todos los objetivos. Ya puedes descargar tu diploma.' 
                          : 'Alcanza el 100% de progreso y aprueba el examen.'
                        }
                      </p>
                    </div>
                    <div className={`relative z-10 px-8 py-3 rounded-2xl border transition-all text-xs font-black uppercase tracking-widest ${
                      progress === 100 && examResult?.passed 
                      ? 'bg-green-500 text-white border-green-400 shadow-lg shadow-green-900/40' 
                      : 'bg-white/10 backdrop-blur-md border-white/20 text-white/50'
                    }`}>
                      {progress === 100 && examResult?.passed ? 'Disponible' : 'Certificado bloqueado'}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Tutor Contact Modal */}
      <AnimatePresence>
        {tutorOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setTutorOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative bg-white dark:bg-slate-900 w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="p-8 bg-brand-500 text-white relative overflow-hidden shrink-0">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/30">
                      <MessageSquare size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-tight leading-none mb-1">Tu Tutor IA</h3>
                      <p className="text-brand-100 text-[10px] font-bold uppercase tracking-widest">Soporte Académico Personalizado</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setTutorOpen(false)}
                    className="p-3 hover:bg-white/20 rounded-full text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <div className="bg-brand-50 rounded-2xl p-6 border border-brand-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Clock size={40} className="text-brand-600" />
                  </div>
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="p-2 bg-brand-200 rounded-lg text-brand-700">
                      <AlertTriangle size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-brand-900 mb-1">Atención Pedagógica</p>
                      <p className="text-xs text-brand-700 font-medium leading-relaxed">
                        Tu consulta será resuelta por nuestro equipo de expertos en un máximo de <span className="font-bold underline">24-48 horas laborables</span>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Asunto de la consulta</label>
                    <input 
                      type="text" 
                      placeholder="Ej: Duda sobre el módulo 3..."
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-sm font-medium focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Mensaje pedagógico</label>
                    <textarea 
                      rows={4}
                      placeholder="Describe tu consulta detalladamente aquí..."
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-sm font-medium focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    setTutorOpen(false);
                    alert("Consulta enviada con éxito. Recibirás respuesta en tu correo y buzón de comunicaciones.");
                  }}
                  className="w-full bg-brand-500 text-white font-black py-5 rounded-2xl shadow-xl shadow-brand-100 hover:bg-brand-600 transition-all active:scale-[0.98] uppercase tracking-widest text-sm flex items-center justify-center gap-3"
                >
                  <Send size={18} />
                  Enviar Consulta al Tutor
                </button>

                <p className="text-center text-[10px] text-slate-400 font-medium leading-relaxed px-6">
                  Recuerda que también puedes consultar el <strong>Área de Ayuda</strong> para dudas técnicas o los <strong>Foros</strong> para debates con otros alumnos.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      {/* Forums Modal */}
      <AnimatePresence>
        {forumsOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setForumsOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
            >
              {/* Header */}
              <div className="p-8 bg-cyan-500 text-white relative overflow-hidden shrink-0">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/30">
                      <Users size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-tight leading-none mb-1">Foros de Debate</h3>
                      <p className="text-cyan-100 text-[10px] font-bold uppercase tracking-widest">Comunidad de Aprendizaje</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setForumsOpen(false)}
                    className="p-3 hover:bg-white/20 rounded-full text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-8 bg-slate-50/50 dark:bg-slate-950/30">
                <div className="space-y-4">
                  {[
                    { title: "Bienvenida y Presentaciones", posts: 124, last: "Hace 2 horas", color: "bg-blue-50 text-blue-600" },
                    { title: "Dudas sobre el Módulo 1: Fundamentos", posts: 89, last: "Hace 5 horas", color: "bg-amber-50 text-amber-600" },
                    { title: "Casos Prácticos y Modelos Realistas", posts: 56, last: "Hace 1 día", color: "bg-emerald-50 text-emerald-600" },
                    { title: "Sugerencias para la Plataforma", posts: 34, last: "Hace 3 días", color: "bg-purple-50 text-purple-600" }
                  ].map((forum, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="group bg-white p-5 rounded-2xl border border-slate-100 hover:border-cyan-200 hover:shadow-md transition-all cursor-pointer"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex gap-4">
                          <div className={`w-12 h-12 ${forum.color} rounded-xl flex items-center justify-center shrink-0`}>
                            <MessageSquare size={20} />
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-800 group-hover:text-cyan-600 transition-colors mb-1">{forum.title}</h4>
                            <div className="flex items-center gap-3">
                              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                                <Users size={12} /> {forum.posts} mensajes
                              </span>
                              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                                <Clock size={12} /> {forum.last}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="p-2 text-slate-300 group-hover:text-cyan-500 transition-colors">
                          <ChevronRight size={20} />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-cyan-50 border border-cyan-100 rounded-[2rem] text-center">
                  <p className="text-xs text-cyan-800 font-bold leading-relaxed">
                    ¿No encuentras lo que buscas? <br />
                    <span className="text-[10px] text-cyan-600 uppercase tracking-widest mt-2 block">Crea un nuevo hilo de debate y comparte con tus compañeros.</span>
                  </p>
                  <button className="mt-4 bg-white text-cyan-600 px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm hover:shadow-md transition-all border border-cyan-100">
                    Nuevo Debate
                  </button>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 bg-white border-t border-slate-100 text-center">
                <button 
                  onClick={() => setForumsOpen(false)}
                  className="text-slate-400 hover:text-slate-600 font-bold text-[10px] uppercase tracking-[0.2em] transition-colors"
                >
                  Cerrar Ventana de Comunidad
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Communications Modal */}
      <AnimatePresence>
        {commsOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCommsOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col transition-colors duration-300"
            >
              {/* Header */}
              <div className="p-6 lg:p-8 bg-blue-600 text-white relative overflow-hidden shrink-0">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-white/20 rounded-xl">
                        <Mail size={24} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-black uppercase tracking-tight">Comunicaciones</h3>
                    </div>
                    <p className="text-blue-100 text-sm font-medium">Buzón de mensajes privados con administración.</p>
                  </div>
                  <button 
                    onClick={() => setCommsOpen(false)}
                    className="p-3 hover:bg-white/20 rounded-full text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* Inbox Layout */}
              <div className="flex-1 flex overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
                {/* Conversations List */}
                <div className="w-full md:w-80 border-r border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-y-auto hidden md:block transition-colors duration-300">
                  <div className="p-4 border-b border-slate-50 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/30">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tus Mensajes</h4>
                  </div>
                  <div className="divide-y divide-slate-50 dark:divide-slate-800">
                    {commsMessages.map((msg) => (
                      <div 
                        key={msg.id}
                        onClick={() => setActiveCommsId(msg.id)}
                        className={`p-4 cursor-pointer transition-colors border-l-4 ${
                          activeCommsId === msg.id 
                            ? 'bg-blue-50/50 dark:bg-blue-900/20 border-blue-500' 
                            : 'hover:bg-slate-50 dark:hover:bg-slate-800 border-transparent'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-100">{msg.sender}</span>
                          <span className="text-[10px] text-slate-400 font-medium">{msg.date}</span>
                        </div>
                        <p className={`text-xs truncate mb-1 ${activeCommsId === msg.id ? 'font-bold text-blue-600' : 'font-medium text-slate-700'}`}>
                          {msg.subject}
                        </p>
                        <p className="text-[11px] text-slate-500 line-clamp-2">{msg.preview}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Message Content */}
                <div className="flex-1 flex flex-col min-w-0 bg-white md:bg-transparent">
                  {/* Message Header */}
                  <div className="p-6 border-b border-slate-100 bg-white">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold uppercase">
                        {activeMessage.initials}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-800">{activeMessage.sender}</h4>
                        <p className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">
                          Recibido {activeMessage.date.toLowerCase()} a las {activeMessage.time}
                        </p>
                      </div>
                    </div>
                    <h2 className="text-lg font-black text-slate-800">{activeMessage.subject}</h2>
                  </div>

                  {/* Message Body */}
                  <div className="flex-1 p-6 overflow-y-auto space-y-6">
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 max-w-2xl leading-relaxed text-sm text-slate-600">
                      {activeMessage.content}
                    </div>
                  </div>

                  {/* Reply Area */}
                  <div className="p-6 bg-white border-t border-slate-100">
                    <div className="relative">
                      <textarea 
                        rows={2}
                        placeholder="Escribe tu respuesta aquí..."
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm font-medium focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all resize-none pr-16"
                      />
                      <button className="absolute right-4 bottom-4 p-2.5 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95">
                        <Send size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Profile Modal */}
      <AnimatePresence>
        {profileOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseProfile}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative bg-white dark:bg-slate-900 w-full max-md rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-8 border-b border-slate-100 bg-brand-50/50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-black text-brand-900 uppercase tracking-tight">Editar Perfil</h3>
                  <button 
                    onClick={handleCloseProfile}
                    className="p-2 hover:bg-white rounded-full text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="flex flex-col items-center gap-4">
                  <div className="relative group">
                    <div className="w-24 h-24 rounded-3xl bg-brand-500 flex items-center justify-center text-white overflow-hidden shadow-2xl shadow-brand-100 border-4 border-white">
                      {tempStudent.photo ? (
                        <img src={tempStudent.photo} alt="Profile" className="w-full h-full object-cover" />
                      ) : (
                        <User size={40} strokeWidth={2} />
                      )}
                    </div>
                    <label className="absolute -bottom-2 -right-2 bg-white p-2 rounded-xl shadow-lg border border-slate-100 cursor-pointer hover:bg-slate-50 transition-all text-brand-600">
                      <Cpu size={16} />
                      <input 
                        type="file" 
                        className="hidden" 
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onload = (event) => {
                              setTempStudent(prev => ({ ...prev, photo: event.target?.result as string }));
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                    </label>
                  </div>
                  <p className="text-[10px] font-bold text-brand-500 uppercase tracking-[0.2em] mt-2">Fotografía del alumno</p>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Nombre Completo</label>
                  <input 
                    type="text" 
                    value={tempStudent.name}
                    onChange={(e) => setTempStudent(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-medium focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Correo Electrónico</label>
                  <input 
                    type="email" 
                    value={tempStudent.email}
                    onChange={(e) => setTempStudent(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-medium focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all"
                  />
                </div>
                
                <button 
                  onClick={saveProfile}
                  className="w-full bg-brand-500 text-white font-bold py-4 rounded-2xl shadow-xl shadow-brand-100 hover:bg-brand-600 transition-all active:scale-[0.98] mt-4"
                >
                  Guardar Cambios
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Agenda / Calendar Modal */}
      <AnimatePresence>
        {agendaOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setAgendaOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="p-8 bg-blue-600 text-white relative overflow-hidden shrink-0 transition-colors duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/30">
                      <Calendar size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-tight leading-none mb-1">Agenda del Curso</h3>
                      <p className="text-blue-100 text-[10px] font-bold uppercase tracking-widest">Planificación Temporal • Junio 2026</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setAgendaOpen(false)}
                    className="p-3 hover:bg-white/20 rounded-full text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="flex-1 overflow-y-auto p-10 bg-white dark:bg-slate-900 transition-colors duration-300">
                <div className="max-w-md mx-auto">
                  <div className="flex items-center justify-between mb-8">
                    <h4 className="text-xl font-black text-slate-800 dark:text-slate-100 uppercase tracking-tight">Junio 2026</h4>
                    <div className="flex gap-2">
                       <span className="flex items-center gap-1.5 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                         <div className="w-2.5 h-2.5 rounded-full bg-blue-500" /> Curso
                       </span>
                       <span className="flex items-center gap-1.5 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                         <div className="w-2.5 h-2.5 rounded-full bg-rose-500" /> Examen
                       </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-7 gap-2 mb-2">
                    {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(d => (
                      <div key={d} className="text-center text-[10px] font-black text-slate-400 uppercase tracking-widest pb-4">{d}</div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-2">
                    {/* Days padding for June 2026 (Starts on Monday) */}
                    <div className="h-12" /> 
                    
                    {[...Array(30)].map((_, i) => {
                      const day = i + 1;
                      const isModule1 = day >= 1 && day <= 4;
                      const isModule2 = day >= 5 && day <= 8;
                      const isModule3 = day >= 9 && day <= 12;
                      const isModule4 = day >= 13 && day <= 15;
                      const isExam = day === 16;
                      const isActive = isModule1 || isModule2 || isModule3 || isModule4 || isExam;

                      return (
                        <div 
                          key={day}
                          className={`h-12 relative flex items-center justify-center rounded-xl border transition-all ${
                            isExam 
                              ? 'bg-rose-500 border-rose-600 text-white shadow-lg shadow-rose-200 dark:shadow-none z-10 scale-105 font-black ring-4 ring-rose-500/20' 
                              : isActive 
                                ? 'bg-blue-500 border-blue-600 text-white shadow-md' 
                                : 'bg-slate-50 dark:bg-slate-950 border-slate-100 dark:border-slate-800 text-slate-400'
                          }`}
                        >
                          <span className="text-sm font-black">{day}</span>
                          {isExam && <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping" />}
                        </div>
                      );
                    })}
                  </div>

                  {/* Legend / Timeline */}
                  <div className="mt-10 space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-3 p-3 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20">
                        <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center shrink-0">
                          <span className="text-white text-[10px] font-black">M1</span>
                        </div>
                        <div>
                          <p className="text-[8px] font-black text-blue-400 uppercase tracking-widest leading-none mb-0.5">Módulo 1</p>
                          <p className="text-[11px] font-bold text-slate-700 dark:text-slate-200">01-04 Jun</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20">
                        <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center shrink-0">
                          <span className="text-white text-[10px] font-black">M2</span>
                        </div>
                        <div>
                          <p className="text-[8px] font-black text-blue-400 uppercase tracking-widest leading-none mb-0.5">Módulo 2</p>
                          <p className="text-[11px] font-bold text-slate-700 dark:text-slate-200">05-08 Jun</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20">
                        <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center shrink-0">
                          <span className="text-white text-[10px] font-black">M3</span>
                        </div>
                        <div>
                          <p className="text-[8px] font-black text-blue-400 uppercase tracking-widest leading-none mb-0.5">Módulo 3</p>
                          <p className="text-[11px] font-bold text-slate-700 dark:text-slate-200">09-12 Jun</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20">
                        <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center shrink-0">
                          <span className="text-white text-[10px] font-black">M4</span>
                        </div>
                        <div>
                          <p className="text-[8px] font-black text-blue-400 uppercase tracking-widest leading-none mb-0.5">Módulo 4</p>
                          <p className="text-[11px] font-bold text-slate-700 dark:text-slate-200">13-15 Jun</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-rose-50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-900/20">
                      <div className="w-10 h-10 rounded-xl bg-rose-500 flex items-center justify-center shrink-0">
                        <Target className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-rose-500 uppercase tracking-widest leading-none mb-1">Cierre del Curso</p>
                        <p className="text-sm font-black text-rose-600 dark:text-rose-400 italic">EVALUACIÓN FINAL: 16 DE JUNIO</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-8 bg-slate-50 dark:bg-slate-950/30 border-t border-slate-100 dark:border-slate-800 text-center transition-colors duration-300">
                <button 
                  onClick={() => setAgendaOpen(false)}
                  className="w-full bg-blue-600 text-white font-black py-4 rounded-2xl shadow-xl shadow-blue-100 dark:shadow-none hover:bg-blue-700 transition-all active:scale-[0.98] uppercase tracking-widest text-[11px]"
                >
                  Entendido
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Target Completion Modal */}
      <AnimatePresence>
        {timerOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setTimerOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative bg-white dark:bg-slate-900 w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="p-8 bg-amber-500 text-white relative overflow-hidden shrink-0 transition-colors duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/30">
                      <Hourglass size={28} className="text-white animate-spin-slow" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-tight leading-none mb-1">Finalización</h3>
                      <p className="text-amber-100 text-[10px] font-bold uppercase tracking-widest">Estado del Cronograma</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setTimerOpen(false)}
                    className="p-3 hover:bg-white/20 rounded-full text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-10 text-center space-y-8 bg-white dark:bg-slate-900 transition-colors duration-300">
                <div className="relative inline-block">
                  <div className="w-40 h-40 rounded-full border-8 border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center relative shadow-inner">
                    <span className="text-4xl font-black text-amber-600 dark:text-amber-400">48</span>
                    <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-1">Días</span>
                    
                    {/* Progress Ring Overlay (SVG) */}
                    <svg className="absolute inset-x-0 inset-y-0 w-full h-full -rotate-90">
                      <circle 
                        cx="80" cy="80" r="76" 
                        fill="transparent" 
                        stroke="currentColor" 
                        strokeWidth="8" 
                        strokeDasharray="477.52" 
                        strokeDashoffset="310"
                        className="text-amber-500 transition-all duration-1000" 
                      />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-white dark:bg-slate-800 rounded-2xl shadow-xl flex items-center justify-center text-amber-500 border border-slate-100 dark:border-slate-700">
                    <Timer size={20} />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <h4 className="text-xl font-black text-slate-800 dark:text-slate-100 uppercase tracking-tight">Tiempo Estimado Restante</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
                      Según tu ritmo actual de aprendizaje, se estima que completarás el curso el día:
                    </p>
                  </div>
                  <div className="relative inline-block px-10 py-3">
                    <div className="absolute inset-0 bg-amber-50 dark:bg-amber-900/10 rounded-2xl -rotate-1" />
                    <strong className="relative z-10 block text-amber-600 dark:text-amber-400 text-xl font-black tracking-tight uppercase">
                      16 de Junio, 2026
                    </strong>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-slate-950/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Dedicación Media</p>
                    <p className="text-lg font-black text-slate-800 dark:text-slate-100 italic">45 min/día</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-950/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Módulos Restantes</p>
                    <p className="text-lg font-black text-slate-800 dark:text-slate-100 italic">3 / 5</p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-8 bg-slate-50 dark:bg-slate-950/30 border-t border-slate-100 dark:border-slate-800 text-center transition-colors duration-300">
                <button 
                  onClick={() => setTimerOpen(false)}
                  className="w-full bg-amber-500 text-white font-black py-4 rounded-2xl shadow-xl shadow-amber-100 dark:shadow-none hover:bg-amber-600 transition-all active:scale-[0.98] uppercase tracking-widest text-[11px]"
                >
                  Continuar Aprendiendo
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      {/* Satisfaction Questionnaire Modal */}
      <AnimatePresence>
        {satisfactionOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSatisfactionOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="p-8 bg-rose-500 text-white relative overflow-hidden shrink-0">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/30">
                      <Heart size={28} className="text-white fill-white/20" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-tight leading-none mb-1">Tu Opinión</h3>
                      <p className="text-rose-100 text-[10px] font-bold uppercase tracking-widest">Cuestionario de Satisfacción</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSatisfactionOpen(false)}
                    className="p-3 hover:bg-white/20 rounded-full text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* Form Content */}
              <div className="flex-1 overflow-y-auto p-10 bg-white dark:bg-slate-900 transition-colors duration-300">
                <div className="space-y-8">
                  <div>
                    <p className="text-sm font-bold text-slate-800 dark:text-slate-100 uppercase tracking-tight mb-4">1. ¿Cómo calificarías la calidad del contenido?</p>
                    <div className="flex justify-between gap-2">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <button key={num} className="flex-1 h-12 rounded-xl border-2 border-slate-100 dark:border-slate-800 hover:border-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/10 transition-all font-black text-slate-400 hover:text-rose-600">
                          {num}
                        </button>
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">
                      <span>Muy Pobre</span>
                      <span>Excelente</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-800 dark:text-slate-100 uppercase tracking-tight mb-4">2. ¿Qué mejorarías de la plataforma?</p>
                    <textarea 
                      className="w-full p-4 rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-sm focus:border-rose-500 outline-none transition-all min-h-[120px]"
                      placeholder="Cuéntanos tu experiencia..."
                    />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-800 dark:text-slate-100 uppercase tracking-tight mb-4">3. ¿Recomendarías este curso?</p>
                    <div className="flex gap-4">
                      <button className="flex-1 py-3 rounded-xl border-2 border-slate-100 dark:border-slate-800 hover:border-green-500 hover:bg-green-50 font-bold dark:text-slate-300">Sí, totalmente</button>
                      <button className="flex-1 py-3 rounded-xl border-2 border-slate-100 dark:border-slate-800 hover:border-red-500 hover:bg-red-50 font-bold dark:text-slate-300">No lo creo</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-8 bg-slate-50 dark:bg-slate-950/30 border-t border-slate-100 dark:border-slate-800">
                <button 
                  onClick={() => {
                    confetti({
                      particleCount: 100,
                      spread: 70,
                      origin: { y: 0.6 },
                      colors: ['#f43f5e', '#fb7185']
                    });
                    setSatisfactionOpen(false);
                  }}
                  className="w-full bg-rose-500 text-white font-black py-4 rounded-2xl shadow-xl shadow-rose-100 dark:shadow-none hover:bg-rose-600 transition-all active:scale-[0.98] uppercase tracking-widest text-[11px]"
                >
                  Enviar Comentarios
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Exercises Modal */}
      <AnimatePresence>
        {exercisesOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExercisesOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative bg-white dark:bg-slate-900 w-full max-w-4xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="p-8 bg-indigo-600 text-white relative overflow-hidden shrink-0">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/30">
                      <Code2 size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-tight leading-none mb-1">Centro de Ejercicios</h3>
                      <p className="text-indigo-100 text-[10px] font-bold uppercase tracking-widest">Práctica y Entrenamiento IA</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setExercisesOpen(false)}
                    className="p-3 hover:bg-white/20 rounded-full text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* Exercises List */}
              <div className="flex-1 overflow-y-auto p-10 bg-slate-50 dark:bg-slate-950/50 space-y-6">
                {[
                  { id: 1, title: "Optimización de Prompts", desc: "Redacta un prompt para resumir un texto legal de 2000 palabras manteniendo los puntos clave.", level: "Fácil" },
                  { id: 2, title: "Generación de Código", desc: "Usa Copilot/Cursor para crear un script de Python que conecte con la API de OpenAI.", level: "Intermedio" },
                  { id: 3, title: "Análisis de Datos con IA", desc: "Sube un CSV de ventas y pídele a Claude que identifique las 3 tendencias principales.", level: "Difícil" },
                  { id: 4, title: "Creación de Personas", desc: "Diseña una Persona de Cliente Ideal (ICP) usando el framework RTF (Role, Task, Format).", level: "Fácil" },
                  { id: 5, title: "Automatización con Zapier", desc: "Configura un flujo que guarde los adjuntos de Gmail directamente en OneDrive usando IA.", level: "Intermedio" },
                  { id: 6, title: "Deepfakes Éticos", desc: "Genera un video de presentación personal con HeyGen asegurando el consentimiento digital.", level: "Intermedio" },
                  { id: 7, title: "Depuración de Código", desc: "Encuentra un bug de seguridad en un archivo .js proporcionado usando ChatGPT.", level: "Difícil" },
                  { id: 8, title: "Redacción de Contenidos", desc: "Crea 5 copies para Instagram sobre un nuevo iPhone, usando un tono sarcástico y moderno.", level: "Fácil" },
                  { id: 9, title: "Fine-Tuning de Visión", desc: "Identifica 10 objetos en una imagen compleja usando GPT-4 Vision y extrae sus coordenadas.", level: "Difícil" },
                  { id: 10, title: "Gestión de Email", desc: "Automatiza la clasificación de etiquetas 'Urgente' y 'Seguimiento' usando filtros de IA.", level: "Fácil" }
                ].map((ex) => (
                  <div key={ex.id} className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0 text-indigo-600 dark:text-indigo-400 font-black">
                          {ex.id}
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h4 className="font-black text-slate-800 dark:text-slate-100 uppercase tracking-tight">{ex.title}</h4>
                            <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest ${
                              ex.level === 'Fácil' ? 'bg-emerald-100 text-emerald-700' :
                              ex.level === 'Intermedio' ? 'bg-amber-100 text-amber-700' :
                              'bg-rose-100 text-rose-700'
                            }`}>
                              {ex.level}
                            </span>
                          </div>
                          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{ex.desc}</p>
                        </div>
                      </div>
                      <button className="whitespace-nowrap px-6 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl text-xs font-black uppercase tracking-widest transition-all">
                        Practicar ahora
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-8 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-brand-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">Nuevos ejercicios cada lunes</span>
                </div>
                <button 
                  onClick={() => setExercisesOpen(false)}
                  className="px-10 py-4 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:scale-105 active:scale-95 transition-all"
                >
                  Cerrar Panel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence initial={false}>
        {sidebarOpen && (
          <motion.aside 
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="w-[280px] bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex-shrink-0 flex flex-col z-40 transition-colors duration-300"
          >
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 relative group bg-gradient-to-br from-brand-50 to-brand-100/50 dark:from-brand-900/10 dark:to-brand-900/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-brand-400 to-brand-600 rounded flex items-center justify-center shrink-0 shadow-lg shadow-brand-200">
                  <span className="text-white font-bold text-xs">IA</span>
                </div>
                <h1 className="font-bold text-sm tracking-tight text-brand-900 leading-tight">MASTER EN IA PRODUCTIVIDAD</h1>
              </div>
              <div className="w-full bg-slate-200/50 h-1.5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="bg-gradient-to-r from-brand-400 to-brand-600 h-full rounded-full"
                />
              </div>
              <p className="text-[10px] text-slate-500 mt-2 font-bold uppercase tracking-widest flex justify-between">
                <span>Progreso</span>
                <span className="text-brand-600">{Math.round(progress)}%</span>
              </p>
            </div>
            
            <nav className="flex-1 overflow-y-auto pt-4 pb-6 space-y-1">
              <div className="px-6 mb-6">
                <button 
                  onClick={() => { setExercisesOpen(true); setSidebarOpen(false); }}
                  className="w-full flex items-center justify-between p-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl shadow-lg shadow-indigo-200 dark:shadow-none transition-all group active:scale-95"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-xl group-hover:rotate-12 transition-transform">
                      <Code2 size={20} />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-black uppercase tracking-tight">Ejercicios</p>
                      <p className="text-[9px] font-bold text-indigo-100 opacity-80 uppercase tracking-widest">10 Prácticas</p>
                    </div>
                  </div>
                  <ChevronRight size={16} />
                </button>
              </div>

              {COURSE_MODULES.map((module, mIdx) => (
                <div key={module.id} className="px-3 mb-4">
                  <div className="flex items-center gap-2 px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-1">
                    {module.title}
                  </div>
                  {module.sections.map((section, sIdx) => {
                    const isActive = activeSegment.moduleIdx === mIdx && activeSegment.sectionIdx === sIdx && !showQuiz;
                    const isViewed = viewedSections.has(section.id);
                    
                    // Progression lock logic
                    let isLocked = false;
                    if (mIdx === 1) { // Module 1
                      const m1Sections = COURSE_MODULES[1].sections;
                      const prueba1Index = m1Sections.findIndex(s => s.id === 'prueba-1');
                      const prueba2Index = m1Sections.findIndex(s => s.id === 'prueba-2');
                      const prueba3Index = m1Sections.findIndex(s => s.id === 'prueba-3');
                      
                      if (sIdx > prueba1Index && !m1TestPassed) {
                        isLocked = true;
                      } else if (sIdx > prueba2Index && !m1P2Passed) {
                        isLocked = true;
                      } else if (sIdx > prueba3Index && !m1P3Passed) {
                        isLocked = true;
                      }
                    } else if (mIdx > 1) { // Following modules
                       if (!m1TestPassed || !m1P2Passed || !m1P3Passed) isLocked = true;
                    }

                    return (
                      <button
                        key={section.id}
                        disabled={isLocked}
                        onClick={() => !isLocked && selectSection(mIdx, sIdx)}
                        className={`w-full text-left px-3 py-2.5 rounded-lg text-[13px] flex items-center gap-3 transition-all duration-200 group relative ${
                          isActive
                            ? 'bg-brand-50 text-brand-500 border-l-4 border-brand-500 rounded-l-none'
                            : isLocked 
                              ? 'opacity-40 cursor-not-allowed'
                              : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                          isViewed ? 'border-brand-500 bg-brand-500' : 'border-slate-200 bg-white group-hover:border-slate-300'
                        }`}>
                          {isViewed ? <CheckCircle className="w-2.5 h-2.5 text-white" /> : isLocked ? <ShieldCheck className="w-2.5 h-2.5 text-slate-400" /> : null}
                        </div>
                        <span className={isActive ? "font-bold" : "font-medium"}>{section.title}</span>
                        {isLocked && (
                          <div className="absolute right-2 opacity-50">
                            <Clock size={12} />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              ))}
              
              <div className="px-6 pt-4 border-t border-slate-50">
                <button
                  onClick={() => setShowQuiz(true)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm flex items-center gap-3 font-bold transition-all shadow-sm ${
                    showQuiz 
                      ? 'bg-orange-500 text-white shadow-orange-200 ring-4 ring-orange-50' 
                      : 'bg-orange-50 text-orange-700 hover:bg-orange-100'
                  }`}
                >
                  <HelpCircle className="w-4 h-4" />
                  EXAMEN FINAL
                </button>
              </div>

              <div className="px-6 pt-2">
                <button
                  onClick={() => setSatisfactionOpen(true)}
                  className="w-full text-left px-4 py-3 rounded-lg text-[13px] flex items-center gap-3 font-bold transition-all text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/10"
                >
                  <Heart className="w-4 h-4" />
                  Cuestionario de satisfacción
                </button>
              </div>
            </nav>

            <div className="p-4 bg-slate-50 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 shrink-0 border border-brand-200 shadow-inner">
                  <User size={16} strokeWidth={2.5} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-800 truncate">Juan López</p>
                  <p className="text-[10px] text-slate-500 font-medium tracking-wide">Tutor del curso</p>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
        {/* Header Toolbar */}
        <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between px-8 shrink-0 z-30 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-colors duration-300">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-1.5 hover:bg-brand-50 rounded-md border border-slate-100 transition-colors text-brand-600"
            >
              <Menu size={20} />
            </button>
            <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight flex items-center gap-3">
              {showQuiz ? "Evaluación Final" : `Módulo ${activeSegment.moduleIdx + 1}: ${currentSection.title}`}
              {!showQuiz && (
                <span className="hidden sm:inline-block px-2 py-0.5 bg-gradient-to-r from-brand-50 to-brand-100/50 text-brand-600 text-[10px] font-bold rounded border border-brand-100 uppercase tracking-widest ml-2">
                  Módulo de Formación
                </span>
              )}
            </h2>
          </div>
          
          <div className="flex items-center gap-6">
             <div className="hidden lg:flex items-center gap-2 text-slate-400">
               <Clock size={14} />
               <span className="text-[11px] font-bold uppercase tracking-wider">Duración: 10 h</span>
             </div>
             <div className="w-[1px] h-4 bg-slate-200 hidden lg:block" />
             
             {/* Help Center Button */}
             <button 
               onClick={() => setHelpOpen(true)}
               className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl text-slate-400 hover:text-brand-500 hover:bg-brand-50 hover:border-brand-100 transition-all group relative"
               title="Área de Ayuda"
             >
               <CircleHelp size={20} strokeWidth={2} />
               <span className="absolute -top-1 -right-1 w-2 h-2 bg-brand-500 rounded-full border-2 border-white animate-pulse" />
             </button>

             <div className="w-[1px] h-4 bg-slate-200 hidden sm:block" />

             {/* Communications Button */}
             <button 
               onClick={() => setCommsOpen(true)}
               className="p-2.5 bg-blue-50 border border-blue-100 rounded-xl text-blue-400 hover:text-blue-500 hover:bg-blue-100/50 hover:border-blue-200 transition-all group relative"
               title="Comunicaciones"
             >
               <Mail size={20} strokeWidth={2} />
               <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full border-2 border-white animate-pulse" />
             </button>

             <div className="w-[1px] h-4 bg-slate-200 hidden sm:block" />

             {/* Grades Button */}
             <button 
               onClick={() => setGradesOpen(true)}
               className="p-2.5 bg-brand-50 border border-brand-100 rounded-xl text-brand-400 hover:text-brand-500 hover:bg-brand-100/50 hover:border-brand-200 transition-all group relative"
               title="Calificaciones"
             >
               <Award size={20} strokeWidth={2} />
             </button>

             <div className="w-[1px] h-4 bg-slate-200 hidden sm:block" />

             {/* Tutor Button */}
             <button 
               onClick={() => setTutorOpen(true)}
               className="p-2.5 bg-brand-500 border border-brand-600 rounded-xl text-white hover:bg-brand-600 transition-all group relative"
               title="Contactar con Tutor"
             >
               <div className="flex items-center gap-2 px-1">
                 <MessageSquare size={18} strokeWidth={2.5} />
                 <span className="text-[11px] font-black uppercase tracking-wider hidden md:block">Tutor</span>
               </div>
             </button>

             <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-700 hidden sm:block" />

             {/* Agenda Button */}
             <button 
               onClick={() => setAgendaOpen(true)}
               className="p-2.5 bg-indigo-500 border border-indigo-600 rounded-xl text-white hover:bg-indigo-600 transition-all group relative shadow-lg shadow-indigo-200 dark:shadow-none"
               title="Agenda del Curso"
             >
               <div className="flex items-center gap-2 px-1">
                 <Calendar size={18} strokeWidth={2.5} />
                 <span className="text-[11px] font-black uppercase tracking-wider hidden md:block">Agenda</span>
               </div>
             </button>

             <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-700 hidden sm:block" />

             {/* Finalización prevista Button */}
             <button 
               onClick={() => setTimerOpen(true)}
               className="p-2.5 bg-amber-500 border border-amber-600 rounded-xl text-white hover:bg-amber-600 transition-all group relative shadow-lg shadow-amber-200 dark:shadow-none"
               title="Finalización prevista"
             >
               <div className="flex items-center gap-2 px-1">
                 <CalendarDays size={18} strokeWidth={2.5} />
                 <span className="text-[11px] font-black uppercase tracking-wider hidden md:block">Finalización</span>
               </div>
             </button>

             <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-700 hidden sm:block" />

             {/* Foros Button */}
             <button 
               onClick={() => setForumsOpen(true)}
               className="p-2.5 bg-cyan-500 border border-cyan-600 rounded-xl text-white hover:bg-cyan-600 transition-all group relative"
               title="Foros de Debate"
             >
               <div className="flex items-center gap-2 px-1">
                 <Users size={18} strokeWidth={2.5} />
                 <span className="text-[11px] font-black uppercase tracking-wider hidden md:block">Foros</span>
               </div>
             </button>

             <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-700 hidden sm:block" />

             {/* Theme Toggle Button */}
             <button 
               onClick={() => setIsDarkMode(!isDarkMode)}
               className="p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all group relative"
               title={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
             >
               <div className="flex items-center justify-center">
                 {isDarkMode ? <Sun size={18} strokeWidth={2.5} /> : <Moon size={18} strokeWidth={2.5} />}
               </div>
             </button>

             <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-700 hidden sm:block" />

             {/* User Profile Button */}
             <button 
               onClick={openProfile}
               className="flex items-center gap-2 p-1 pl-3 pr-2 lg:pr-3 bg-slate-50 border border-slate-100 rounded-full hover:bg-brand-50 hover:border-brand-100 transition-all group"
             >
               <span className="text-[11px] font-bold text-slate-600 group-hover:text-brand-600 hidden md:block">
                 {student.name}
               </span>
               <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center text-white overflow-hidden shadow-sm border border-brand-400">
                 {student.photo ? (
                   <img src={student.photo} alt="Profile" className="w-full h-full object-cover" />
                 ) : (
                   <User size={16} strokeWidth={3} />
                 )}
               </div>
             </button>

             <div className="w-[1px] h-4 bg-slate-200 hidden sm:block" />
             
             <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold text-slate-400 uppercase hidden sm:block">Estado</span>
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-50 text-green-700 text-[10px] font-bold rounded-full border border-green-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Sincronizado
                </div>
             </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto bg-brand-50/20">
          <div className="w-full h-full flex flex-col">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-1 bg-white shadow-2xl border-x border-brand-100 overflow-hidden flex flex-col"
            >
              <AnimatePresence mode="wait">
                {showQuiz ? (
                  <motion.div
                    key="quiz"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-6 md:p-10 flex-1 overflow-y-auto"
                  >
                    <FinalQuiz onComplete={(score) => {
                      setExamResult({ score, passed: score >= 2 });
                      if (score >= 2) {
                        setShowQuiz(false);
                      }
                    }} />
                  </motion.div>
                ) : (
                  <div key={currentSection.id} className="flex-1 flex flex-col overflow-hidden">
                    <div className="p-6 md:p-10 flex-1 overflow-y-auto">
                      <SectionContent 
                        section={currentSection} 
                        onM1Complete={handleM1Complete}
                        onM1P2Complete={handleM1P2Complete}
                        onM1P3Complete={handleM1P3Complete}
                      />
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Footer Navigation */}
        <footer className="h-20 bg-white border-t border-slate-200 px-8 flex items-center justify-between z-30 shrink-0">
          <button
            onClick={() => handleNavigate('prev')}
            disabled={activeSegment.moduleIdx === 0 && activeSegment.sectionIdx === 0 && !showQuiz}
            className="flex items-center gap-2.5 px-6 py-2.5 rounded-lg border border-slate-300 text-slate-600 font-bold text-sm hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none transition-all active:scale-95"
          >
            <ChevronLeft size={18} strokeWidth={2.5} />
            Anterior
          </button>

          <div className="hidden md:flex items-center gap-6">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] pt-0.5">
              PROGRESO EN EL CURSO
            </span>
            <div className="flex gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className={`h-2 rounded-full transition-all duration-300 ${i < Math.floor(progress / 20) + 1 ? 'w-6 bg-brand-500' : 'w-2 bg-slate-200'}`} />
              ))}
            </div>
          </div>

          <button
            onClick={() => handleNavigate('next')}
            disabled={(() => {
              if (showQuiz) return false;
              const mIdx = activeSegment.moduleIdx;
              const sIdx = activeSegment.sectionIdx;
              if (mIdx === 1) {
                const m1Sections = COURSE_MODULES[1].sections;
                const prueba1Index = m1Sections.findIndex(s => s.id === 'prueba-1');
                const prueba2Index = m1Sections.findIndex(s => s.id === 'prueba-2');
                const prueba3Index = m1Sections.findIndex(s => s.id === 'prueba-3');
                if (sIdx === prueba1Index && !m1TestPassed) return true;
                if (sIdx === prueba2Index && !m1P2Passed) return true;
                if (sIdx === prueba3Index && !m1P3Passed) return true;
              }
              return false;
            })()}
            className="flex items-center gap-2.5 px-8 py-2.5 rounded-lg bg-brand-500 text-white font-bold text-sm hover:bg-brand-600 shadow-lg shadow-brand-100 transition-all active:scale-95 group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {showQuiz ? "Revisar Teoría" : "Siguiente"}
            {!showQuiz && <ChevronRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />}
          </button>
        </footer>
      </main>
    </div>
  );
}
