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
  PlayCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Contenido del Curso ---
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

![Mujer trabajando](/input_file_10.png)
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
![Funcionamiento del curso](/input_file_11.png)
        `
      }
    ]
  },
  {
    id: 'fundamentals',
    title: 'Módulo 1: Fundamentos',
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
## Breve historia de la IA
La idea de crear "seres artificiales inteligentes" es muy antigua, pero como disciplina científica comienza en el siglo XX:

- **1936**: Alan Turing publica "On Computable Numbers" (el inicio de la computación).
- **1950**: Test de Turing y el origen del concepto de máquina inteligente.
- **1956**: Conferencia de Dartmouth: Se acuña formalmente el término "Artificial Intelligence".
- **1958-60**: Creación del Perceptrón (primera red neuronal).
- **1964-66**: ELIZA (el primer chatbot).
- **Hoy**: La era de la IA Generativa (ChatGPT, Midjourney, etc.).
        `
      }
    ]
  },
  {
    id: 'working',
    title: 'Módulo 2: Funcionamiento',
    icon: <Workflow className="w-5 h-5" />,
    sections: [
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
      }
    ]
  },
  {
    id: 'branches',
    title: 'Módulo 3: Ramas de la IA',
    icon: <Cpu className="w-5 h-5" />,
    sections: [
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
Subconjunto del ML basado en **redes neuronales profundas**, inspiradas en el funcionamiento del cerebro humano. Permite resolver problemas complejos como reconocer imágenes o voz con precisión altísima.

## Procesamiento del Lenguaje Natural (PLN/NLP)
Branca de la IA que permite que los ordenadores entiendan, analicen y generen lenguaje humano, tanto escrito como hablado. Es la base de los traductores automáticos y los chatbots.

## Hibridación: El Futuro
Consiste en combinar diferentes enfoques: modelos neuronales (buenos para aprender de datos) + reglas lógicas (buenos para razonar y explicar decisiones).
        `
      }
    ]
  },
  {
    id: 'ethics',
    title: 'Módulo 4: Ética y Riesgos',
    icon: <ShieldCheck className="w-5 h-5" />,
    sections: [
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

function SectionContent({ section }: { section: any }) {
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

function QuizResult({ score, total, onRestart }: { score: number, total: number, onRestart: () => void }) {
  return (
    <div className="text-center p-12 bg-white rounded-2xl shadow-sm border border-slate-200">
      <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-6">
        <Award className="w-10 h-10 text-brand-600" />
      </div>
      <h2 className="text-3xl font-bold mb-2 text-brand-900">¡Curso Completado!</h2>
      <p className="text-slate-500 text-lg mb-8">Has obtenido una puntuación de {score} sobre {total}</p>
      <button 
        onClick={onRestart}
        className="px-10 py-3.5 bg-brand-500 text-white rounded-xl font-bold hover:bg-brand-600 shadow-lg shadow-brand-100 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
      >
        Repetir Examen
      </button>
    </div>
  );
}

function FinalQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedOption === QUIZ_QUESTIONS[currentStep].correct) {
      setScore(score + 1);
    }
    
    if (currentStep + 1 < QUIZ_QUESTIONS.length) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return <QuizResult score={score} total={QUIZ_QUESTIONS.length} onRestart={() => { setCurrentStep(0); setScore(0); setShowResult(false); setSelectedOption(null); }} />;
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
    <div className="flex h-screen overflow-hidden bg-surface-bg font-sans selection:bg-brand-100">
      {/* Sidebar */}
      <AnimatePresence initial={false}>
        {sidebarOpen && (
          <motion.aside 
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="w-[280px] bg-white border-r border-slate-200 flex-shrink-0 flex flex-col z-40"
          >
            <div className="p-6 border-b border-slate-100 relative group bg-gradient-to-br from-brand-50 to-brand-100/50">
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
              {COURSE_MODULES.map((module, mIdx) => (
                <div key={module.id} className="px-3 mb-4">
                  <div className="flex items-center gap-2 px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-1">
                    {module.title}
                  </div>
                  {module.sections.map((section, sIdx) => {
                    const isActive = activeSegment.moduleIdx === mIdx && activeSegment.sectionIdx === sIdx && !showQuiz;
                    const isViewed = viewedSections.has(section.id);
                    return (
                      <button
                        key={section.id}
                        onClick={() => selectSection(mIdx, sIdx)}
                        className={`w-full text-left px-3 py-2.5 rounded-lg text-[13px] flex items-center gap-3 transition-all duration-200 group relative ${
                          isActive
                            ? 'bg-brand-50 text-brand-500 border-l-4 border-brand-500 rounded-l-none'
                            : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                          isViewed ? 'border-brand-500 bg-brand-500' : 'border-slate-200 bg-white group-hover:border-slate-300'
                        }`}>
                          {isViewed && <CheckCircle className="w-2.5 h-2.5 text-white" />}
                        </div>
                        <span className={isActive ? "font-bold" : "font-medium"}>{section.title}</span>
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
      <main className="flex-1 flex flex-col h-full bg-surface-bg relative overflow-hidden">
        {/* Header Toolbar */}
        <header className="h-16 bg-white border-b border-slate-100 flex items-center justify-between px-8 shrink-0 z-30 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
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
                    className="p-8 md:p-12 flex-1 overflow-y-auto"
                  >
                    <FinalQuiz />
                  </motion.div>
                ) : (
                  <div key={currentSection.id} className="flex-1 flex flex-col overflow-hidden">
                    <div className="p-8 md:p-12 flex-1 overflow-y-auto">
                      <SectionContent section={currentSection} />
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
            className="flex items-center gap-2.5 px-8 py-2.5 rounded-lg bg-brand-500 text-white font-bold text-sm hover:bg-brand-600 shadow-lg shadow-brand-100 transition-all active:scale-95 group"
          >
            {showQuiz ? "Revisar Teoría" : "Siguiente"}
            {!showQuiz && <ChevronRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />}
          </button>
        </footer>
      </main>
    </div>
  );
}
