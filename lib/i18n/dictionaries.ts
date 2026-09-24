export type Locale = "es" | "en" | "fr" | "it";
export const SUPPORTED_LOCALES: Locale[] = ["es", "en", "fr", "it"];

export const CONTACT_INFO = {
  phoneDisplay: "+52 1 984 175 0007",
  phoneRaw: "5219841750007",
  telHref: "tel:+5219841750007",
  whatsappBase: "https://wa.me/5219841750007",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Av.+Colosio+entre+Av.+25+y+30+Col.+Centro+Playa+del+Carmen+Quintana+Roo+77710",
  email: "hola@terramaya.mx",
  operationsEmail: "operations@terramaya.mx",
  addressLine:
    "Oficina y Almacén: Av. Colosio entre Av. 25 y 30, Col. Centro, Playa del Carmen, Quintana Roo, C.P. 77710",
  corridorLine: "Tulum • Playa del Carmen • Mayakoba • Puerto Morelos • Cancún, Q. Roo",
};

const baseEs = {
  meta: {
    title: "Terra Maya | Facility & Property Services en Tulum y Riviera Maya",
    description:
      "El cuidado que mantiene tu propiedad extraordinaria. Mantenimiento integral, operación técnica y conservación de propiedades de alto nivel en la Riviera Maya (Residencial, Hotelero y Comercial en Tulum y Playa del Carmen).",
    keywords:
      "facility management Tulum, mantenimiento de propiedades Riviera Maya, mantenimiento de albercas Tulum, administración de villas Tulum, fumigación COFEPRIS Tulum, Chukum Tulum, carpintería maderas tropicales Playa del Carmen, REPSE Quintana Roo",
  },
  nav: {
    home: "Inicio",
    services: "7 Servicios",
    solutions: "Soluciones",
    pricing: "Precios",
    portal: "Portal App",
    cta: "Terra Check Gratis",
    switchLang: "EN",
  },
  hero: {
    badge: "TULUM · PLAYA DEL CARMEN · RIVIERA MAYA",
    monitoring: "Vigilancia Activa Riviera Maya 24/7",
    liveLink: "Ver Telemetría Villa K'áax en Vivo →",
    pillVillas: "+180 Villas Custodiadas",
    pillSla: "SLA Respuesta < 2h",
    title: "El cuidado que mantiene tu propiedad extraordinaria",
    subtitle:
      "Mantenimiento integral, operación técnica y conservación de propiedades de alto nivel en la Riviera Maya.",
    segmentsLine: "Residencial · Hotelero · Comercial",
    locationsLine: "Tulum · Playa del Carmen · Riviera Maya",
    primaryCta: "Agendar Terra Check Gratuito",
    secondaryCta: "Diagnóstico técnico integral sin costo",
    portalCta: "Ver Demo App 360°",
    stats: [
      { value: "7", label: "Divisiones técnicas integradas" },
      { value: "< 2 h", label: "SLA de respuesta en urgencias" },
      { value: "360° + Drone", label: "Evidencia visual en cada visita" },
      { value: "100% REPSE", label: "Facturación CFDI deducible" },
    ],
  },
  values: {
    eyebrow: "PROPUESTA DE VALOR",
    title: "Una sola empresa para que tu propiedad funcione y luzca impecable",
    subtitle:
      "El problema del propietario o administrador no es encontrar un jardinero: es coordinar a siete proveedores informales que no se hablan entre sí.",
    items: [
      {
        tag: "UN SOLO CONTACTO",
        title: "Un responsable único",
        desc: "Un Facility Director multilingüe, un canal directo de WhatsApp y una sola factura mensual (MXN, USD o EUR) para todos tus servicios.",
        icon: "UserCheck",
      },
      {
        tag: "EVIDENCIA TOTAL",
        title: "360°, foto y drone",
        desc: "Cada visita queda documentada en la App Terra Maya con antes/después, recorrido virtual 360° y tomas aéreas de drone AFAC.",
        icon: "Camera",
      },
      {
        tag: "SLA GARANTIZADO",
        title: "Respuesta garantizada",
        desc: "Atención a urgencias en menos de 2–4 horas y rutina en 24–48 horas. Si no cumplimos el SLA, aplicamos bonificación a nuestro cargo.",
        icon: "Clock",
      },
      {
        tag: "SUSTENTABILIDAD",
        title: "Manejo eco-sustentable",
        desc: "Control biológico de plagas, químicos biodegradables de baja toxicidad y paisajismo respetuoso con la selva nativa maya.",
        icon: "Leaf",
      },
    ],
  },
  audience: {
    eyebrow: "SOLUCIONES POR SEGMENTO",
    title: "Diseñado para quienes exigen estándar 5 Diamantes",
    subtitle: "Selecciona tu perfil para conocer cómo protegemos tu activo inmobiliario y optimizamos tu costo operativo.",
    segments: [
      {
        id: "owners",
        badge: "RESIDENCIAL & VILLA CARE",
        title: "Propietarios Ausentes y Hosts",
        quote: "“Aunque estés a 8,000 km de distancia, sabes exactamente cómo está tu casa: fotos, recorrido 360° mensual y un técnico que llega antes de que el problema crezca.”",
        bullets: [
          "Pólizas mensuales Todo-en-Uno (Alberca, Jardín, Limpieza, Fumigación)",
          "Visitas de 'Casa Cerrada': control termográfico de humedad, ventilación, agua y energía",
          "Turnover impecable para Airbnb / Vrbo con checklist de 68 puntos",
          "Protocolo preventivo y reporte inmediato con drone ante huracanes",
        ],
        ticket: "Desde $3,490 MXN/mes",
        cta: "Ver planes residenciales",
      },
      {
        id: "condos",
        badge: "CONDOMINIOS & HOA",
        title: "Administradores y Comités de Vigilancia",
        quote: "“Rinde cuentas claras a la asamblea con reportes ejecutivos 360°, vuelo de drone trimestral y cumplimiento 100% REPSE e IMSS.”",
        bullets: [
          "Mantenimiento integral de áreas comunes, amenidades, selva y vialidades",
          "Modelo de 2 Capas: contrato del complejo + tarifas preferenciales Villa Care por unidad",
          "Tablero digital para la administración y reportes mensuales en PDF para asamblea",
          "Transferencia total del riesgo laboral (IMSS, INFONAVIT, SUA al día)",
        ],
        ticket: "Pólizas desde $45,000 MXN/mes",
        cta: "Explorar solución HOA",
      },
      {
        id: "hotels",
        badge: "HOSPITALIDAD",
        title: "Hoteles Boutique y Eco-Resorts",
        quote: "“Convierte nómina, rotación de personal, químicos y equipamiento en un costo fijo, 100% deducible y con garantía de nivel 5 estrellas.”",
        bullets: [
          "Técnico residente en sitio y cuadrillas para albercas, jardines y áreas públicas",
          "Bitácoras sanitarias NOM-245 (albercas/cold plunge) y certificados COFEPRIS NOM-256",
          "Lavado profundo semestral de colchones, tapicería y maderas tropicales",
          "Cero costos ocultos por rotación, ausentismo, aguinaldos o incapacidades",
        ],
        ticket: "Contratos desde $60,000 MXN/mes",
        cta: "Cotizar para mi hotel",
      },
      {
        id: "developers",
        badge: "DESARROLLADORAS & BROKERS",
        title: "Desarrolladores Inmobiliarios",
        quote: "“Entrega cada unidad impecable y ofrece a tus compradores el programa 'Entrega de Llaves' con Terra Check incluido.”",
        bullets: [
          "Limpieza fina de fin de obra y detallado pre-entrega de unidades y amenidades",
          "Línea base en foto 360° al entregar cada propiedad para blindar garantías post-venta",
          "Programa de alianzas para Brokers: 10% de comisión del primer año de póliza",
          "Mantenimiento puente mientras se constituye y entrega la administración al HOA",
        ],
        ticket: "Por proyecto o iguala mensual",
        cta: "Alianza para desarrolladores",
      },
    ],
  },
  services: {
    eyebrow: "INGENIERÍA ESPECIALIZADA",
    title: "7 Divisiones Técnicas bajo la marca Terra Maya",
    subtitle:
      "Combinamos equipamiento industrial, personal uniformado en nómina IMSS y protocolos ISO certificados para preservar cada elemento de tu propiedad.",
    items: [
      {
        id: "terra-agua",
        brand: "Terra Agua",
        badge: "Div. Hidráulica",
        category: "Piscinas de Borde Infinito, Jacuzzis y Cold Plunge",
        shortDesc: "Balance milimétrico de pH/ORP, cloración salina, cuarto de máquinas y cumplimiento NOM-245.",
        fullDesc:
          "Mantenimiento de sistemas desbordantes, balance milimétrico de pH/ORP, cristalización mediante cloración salina y desalinización costera frente al clima extremo y la caída de hojarasca de la selva.",
        features: [
          "Balance químico certificado, Test de Langelier semanal y bitácora NOM-245-SSA1-2010",
          "Cepillado, aspirado profundo, limpieza de cenefas y retrolavado de filtros de cristal activo",
          "Mantenimiento preventivo de bombas, cloradores salinos, luz UV y bombas de calor",
          "Rescate 'Verde a Azul' en 48 horas y revisiones post check-out en rentas vacacionales",
        ],
        checks: ["Test Langelier semanal", "Filtros de cristal"],
        priceHint: "Desde $1,600 MXN/mes (1 visita/sem con químicos)",
        verticals: ["Residencial", "Condominios", "Hoteles"],
      },
      {
        id: "terra-verde",
        brand: "Terra Verde",
        badge: "Botánica Maya",
        category: "Paisajismo de Alto Dosel & Arboricultura Endémica",
        shortDesc: "Poda preventiva ante huracanes, palmeras reales, riego automatizado y conservación de selva.",
        fullDesc:
          "Poda preventiva ante huracanes, trasplante y nutrición de palmeras reales, sistemas de riego por goteo automatizado y jardinería tropical respetuosa con la flora nativa.",
        features: [
          "Barrido diario/semanal de hojarasca, poda estética y fertilización bio-orgánica",
          "Poda de palmas en altura y retiro preventivo de cocos para seguridad de huéspedes",
          "Diseño, ajuste y reparación de sistemas de riego automatizado por goteo",
          "Control perimetral de raíces en andadores y poda fitosanitaria pre-huracán",
        ],
        checks: ["Especies nativas", "Fertilización bio"],
        priceHint: "Desde $1,200 MXN/mes residencial · $4–$8 MXN/m² comercial",
        verticals: ["Residencial", "Condominios", "Hoteles"],
      },
      {
        id: "terra-clean",
        brand: "Terra Clean",
        badge: "5 Diamantes",
        category: "Housekeeping de Precisión & Desalinización",
        shortDesc: "Tratamiento anti-salinidad en cancelerías, sanitización clínica y turnovers VIP con checklist 68 pts.",
        fullDesc:
          "Tratamiento anti-salinidad en cancelerías alemanas, sanitización grado clínico y alistamiento editorial previo a llegada de huéspedes VIP con insumos eco-lujo.",
        features: [
          "Limpieza regular y profunda de residencias, villas de lujo, gimnasios y estudios de yoga",
          "Turnover para Airbnb/Vrbo con checklist de 68 puntos y reporte fotográfico al instante",
          "Limpieza fina de fin de obra y desincrustación salina en cristales templados",
          "Suministro de personal de planta supervisado para condominios y hoteles boutique",
        ],
        checks: ["Checklist 68 pts", "Insumos eco-lujo"],
        priceHint: "Desde $750 MXN/visita · Turnovers desde $800 MXN",
        verticals: ["Residencial", "Comercial", "Hoteles"],
      },
      {
        id: "terra-textil",
        brand: "Terra Textil",
        badge: "Termo-Mecánica",
        category: "Sanificación Térmica a 140°C & Linos Finos",
        shortDesc: "Extracción profunda de ácaros en colchones pillow-top, sedas, linos crudos y cortinajes blackout.",
        fullDesc:
          "Extracción profunda de ácaros en colchones pillow-top, cuidado de sedas, linos crudos y cortinajes blackout expuestos a la alta humedad caribeña mediante vapor seco y secado controlado.",
        features: [
          "Lavado profundo por inyección-succión y vapor seco a 140°C en colchones (Individual a King)",
          "Limpieza y desmanchado de salas de lino crudo, sillas, cabeceras y tapetes",
          "Sanitización hipoalergénica anti-ácaros, anti-hongos y escudo nanotecnológico",
          "Programas semestrales para hoteles boutique en temporada baja con 15% de descuento",
        ],
        checks: ["Secado controlado", "Vapor seco"],
        priceHint: "Colchones desde $450 MXN · Salas desde $600 MXN",
        verticals: ["Residencial", "Comercial", "Hoteles"],
      },
      {
        id: "terra-shield",
        brand: "Terra Shield",
        badge: "COFEPRIS",
        category: "Control Biológico de Plagas & Barreras Perimetrales",
        shortDesc: "Certificación oficial COFEPRIS (NOM-256), extractos botánicos Pet & Eco Safe y barrera anti-termita.",
        fullDesc:
          "Cero toxicidad para mascotas y flora silvestre. Protocolos no invasivos con extractos botánicos, barreras físicas repelentes en el perímetro y certificación sanitaria oficial.",
        features: [
          "Certificado oficial COFEPRIS conforme a NOM-256-SSA1-2012 para restaurantes y hoteles",
          "Tratamiento especializado preventivo y correctivo contra termita en maderas tropicales",
          "Termonebulización perimetral biológica contra mosquito en jardines y selva",
          "Estaciones cebaderas seguras y control integrado con garantía escrita de 30 días",
        ],
        checks: ["Pet & Eco Safe", "Certificado oficial"],
        priceHint: "Póliza residencial desde $650 MXN/mes · Comercial desde $1,800 MXN",
        verticals: ["Residencial", "Restaurantes", "Hoteles"],
      },
      {
        id: "terra-build-carpinteria",
        brand: "Terra Carpintería",
        badge: "Ebanistería",
        category: "Maderas Duras: Tzalam, Cumarú, Parota y Zapote",
        shortDesc: "Restauración de decks con aceites de teca natural de poro abierto, celosías y protección UV marina.",
        fullDesc:
          "Restauración de decks exteriores con aceites de teca natural de poro abierto, ajuste milimétrico de celosías y sellado UV50 marino de muebles y estructuras de diseño.",
        features: [
          "Lijado e hidratación botánica con aceites naturales y selladores UV50 en decks y pérgolas",
          "Ajuste de puertas principales, celosías, cerraduras y herrajes marinos",
          "Fabricación y restauración de mobiliario exterior e interior a medida",
          "Programa anual preventivo de conservación de maderas para complejos y villas",
        ],
        checks: ["Aceites naturales", "Protección UV marina"],
        priceHint: "Sellado de maderas $220–$380 MXN/m² · Póliza horas incluidas",
        verticals: ["Residencial", "Condominios", "Hoteles"],
      },
      {
        id: "terra-build-albanileria",
        brand: "Terra Chukum & Obras",
        badge: "Ancestral",
        category: "Resinas de Chukum Tradicional, Impermeabilización y Obra",
        shortDesc: "Reparación experta de microfisuras en Chukum maya, estucos minerales, techos e hidroneumáticos.",
        fullDesc:
          "Reparación experta de microfisuras en albercas y muros pulidos de Chukum maya auténtico (sin químicos sintéticos), impermeabilizaciones invisibles y mantenimiento de concreto aparente.",
        features: [
          "Restauración artesanal con resina de árbol de Chukum real y estucos minerales",
          "Impermeabilización elastomérica y térmica con inspección previa y posterior por drone",
          "Limpieza de cisternas, desazolve de pozos pluviales, trampas de grasa y bombas",
          "Técnico residente disponible para condominios y hoteles con atención inmediata",
        ],
        checks: ["Árbol de Chukum real", "Sin químicos sintéticos"],
        priceHint: "Hora técnico desde $350 MXN · Técnico residente desde $24,000 MXN/mes",
        verticals: ["Residencial", "Comercial", "Hoteles"],
      },
    ],
  },
  compliance: {
    eyebrow: "BLINDAJE LEGAL E INSTITUCIONAL",
    title: "El cumplimiento normativo es nuestra mayor ventaja",
    subtitle:
      "Operamos bajo los más estrictos estándares normativos de México para proteger íntegramente la confidencialidad, deducibilidad fiscal y el patrimonio de nuestros clientes.",
    badges: [
      {
        code: "REPSE · STPS",
        title: "Registro REPSE Federal Vigente",
        desc: "Personal especializado certificado y facturación CFDI 4.0 100% deducible de ISR e IVA.",
      },
      {
        code: "IMSS · INFONAVIT",
        title: "Plantilla 100% Afiliada al IMSS",
        desc: "Cero contingencias laborales para el propietario, administrador de condominio u hotel.",
      },
      {
        code: "RC $5M USD",
        title: "Póliza Responsabilidad Civil $5M USD",
        desc: "Cobertura patrimonial internacional integral contra daños a terceros y fianza de fidelidad.",
      },
      {
        code: "NOM-256 COFEPRIS",
        title: "Licencia Sanitaria de Fumigación",
        desc: "Responsable sanitario avalado y extractos botánicos autorizados con certificado oficial.",
      },
      {
        code: "NOM-245-SSA1",
        title: "Calidad Sanitaria en Albercas",
        desc: "Bitácoras físico-químicas y Test de Langelier documentados en cada visita.",
      },
      {
        code: "AFAC NOM-107",
        title: "Operación Legal de Drone y 360°",
        desc: "Pilotos registrados, seguro de RC aeronáutica y estricto cumplimiento de privacidad LFPDPPP.",
      },
    ],
  },
  pricing: {
    eyebrow: "PÓLIZAS TERRA CARE & CALCULADORA",
    title: "Precios transparentes construidos desde el valor real",
    subtitle:
      "Ahorra hasta un 15% contratando una póliza integral frente a servicios por separado. Incluye acceso completo al Portal de Clientes Terra Maya.",
    tiers: [
      {
        id: "esencial",
        name: "Esencial",
        badge: "RESIDENTES",
        basePrice: 3490,
        desc: "Para residentes o propietarios que visitan seguido y necesitan la base exterior impecable.",
        popular: false,
        features: [
          "Alberca privada: 1 visita/semana con químicos incluidos",
          "Jardinería y terraza: mantenimiento quincenal",
          "Fumigación biológica: aplicación bimestral interior/exterior",
          "App Terra Maya con reporte fotográfico de cada visita",
          "Facturación CFDI mensual (MXN, USD o EUR)",
        ],
      },
      {
        id: "mas-vendido",
        name: "Más Vendido · Plus",
        badge: "RECOMENDADO · HOSTS",
        basePrice: 6490,
        desc: "Ideal para anfitriones de renta vacacional y familias ocupadas que buscan mantenimiento preventivo integral.",
        popular: true,
        features: [
          "Todo lo incluido en el plan Esencial",
          "Limpieza profunda de conservación quincenal",
          "Técnico de mantenimiento general (Build): 2 horas/mes incluidas",
          "Lavado térmico de colchones y sala principal: 1 vez al año incluido",
          "Recorrido virtual 360° trimestral + WhatsApp prioritario",
          "15% de descuento en turnovers y servicios a la carta",
        ],
      },
      {
        id: "patrimonio",
        name: "Patrimonio",
        badge: "PROPIETARIO AUSENTE",
        basePrice: 11900,
        desc: "Custodia total para propietarios en el extranjero e inversionistas que exigen máxima plusvalía y cero sorpresas.",
        popular: false,
        features: [
          "Alberca privada: 2 visitas/semana + jardín semanal",
          "Limpieza semanal o visita 'Casa Cerrada' (termografía, humedad, agua y luz)",
          "Fumigación mensual integrada + Técnico Build 4 horas/mes",
          "Inspección técnica integral + Recorrido 360° mensual + Vuelo de drone trimestral",
          "Protocolo preventivo de huracán + Lavado de textiles 2 veces al año",
          "Facility Director dedicado y SLA de emergencia < 2 horas",
        ],
      },
    ],
    calculator: {
      title: "Calculadora Personalizada Terra Care",
      subtitle: "Ajusta los parámetros de tu propiedad en Tulum, Playa del Carmen o Puerto Morelos para estimar tu póliza mensual.",
      propertyTypeLabel: "Tipo de propiedad",
      propertyTypes: [
        { id: "villa", label: "Casa / Villa Independiente" },
        { id: "condo_unit", label: "Villa en Complejo (Precio Comunidad -15%)" },
        { id: "penthouse", label: "Penthouse con Rooftop" },
      ],
      sqmLabel: "Superficie construida y exterior",
      poolLabel: "Cuerpos de agua (Alberca / Plunge / Jacuzzi)",
      poolOptions: [
        { id: "none", label: "Sin alberca (-$900 MXN)", modifier: -900 },
        { id: "single", label: "1 Alberca estándar ≤40 m³ (Incluida)", modifier: 0 },
        { id: "double", label: "2 Albercas o Plunge + Principal (+$900 MXN)", modifier: 900 },
        { id: "large", label: "Alberca Infinity >40 m³ (+$1,650 MXN)", modifier: 1650 },
      ],
      billingLabel: "Plazo de contratación",
      billingOptions: [
        { id: "monthly", label: "Mensual", discount: 0 },
        { id: "6months", label: "6 Meses (-3%)", discount: 0.03 },
        { id: "12months", label: "12 Meses (-7% Recomendado)", discount: 0.07 },
      ],
      addonsLabel: "Complementos opcionales",
      addons: [
        { id: "drone_monthly", label: "Vuelo de drone mensual adicional (+$1,200/mes)", price: 1200 },
        { id: "hurricane_shield", label: "Póliza prioritaria Huracán Resguardo (+$650/mes)", price: 650 },
        { id: "wood_care", label: "Plan semestral hidratación de decks UV50 (+$850/mes)", price: 850 },
      ],
      summaryTitle: "Inversión Mensual Estimada",
      ivaNote: "Precios en MXN + IVA. Incluye químicos hasta tope de póliza y acceso al Portal Terra Maya.",
      ctaButton: "Solicitar Terra Check con esta cotización",
    },
  },
  portal: {
    eyebrow: "APP TERRA MAYA · PORTAL DE CLIENTES",
    title: "Telemetría en Tiempo Real y Evidencia Visual Interactiva",
    subtitle:
      "Supervisa la salud de tu activo 24/7: parámetros de alberca, generación solar, antes/después de acabados y bitácora fotográfica con cifrado bancario TLS 1.3.",
    loginTitle: "Acceso Clientes Terra Maya",
    loginSubtitle: "Ingresa con tu cuenta o explora el panel interactivo en modo demostración.",
    demoProfilesLabel: "Explorar vista en vivo por residencia:",
    roles: [
      { id: "owner", label: "Villa K'áax (Aldea Zamá)", property: "Villa K'áax · Aldea Zamá, Tulum" },
      { id: "hoa", label: "AMARI Uptown (36 Villas)", property: "Áreas Comunes · AMARI Uptown Tulum" },
      { id: "hotel", label: "Residencia Ixchel (Mayakoba)", property: "Residencia Ixchel · Mayakoba" },
    ],
    columns: {
      scheduled: "Programado",
      inProgress: "En Proceso",
      completed: "Terminado",
    },
    viewer360: {
      title: "Evidencia Visual Interactiva",
      subtitle: "Protocolo de restauración Deck Zapote · Visor 360° y Drone AFAC.",
      modes: {
        pano360: "Recorrido 360°",
        drone: "Inspección Drone AFAC",
        beforeAfter: "Antes / Después",
      },
    },
  },
  terraCheck: {
    badge: "CORTESÍA INSTITUCIONAL · DIAGNÓSTICO INTEGRAL",
    title: "Solicitar Diagnóstico Terra Check",
    subtitle:
      "Evaluamos a fondo los puntos críticos de riesgo hidráulico, eléctrico, maderas tropicales, paredes de Chukum y techos con cámara 360° y drone sin costo para propietarios y directores de hotel.",
    fields: {
      name: "Nombre Completo y Apellidos",
      namePlaceholder: "Ej. Arq. Sofía Mendoza",
      email: "Correo electrónico",
      emailPlaceholder: "nombre@correo.com",
      phone: "Número de Contacto / WhatsApp",
      phonePlaceholder: "+52 1 984 175 0007",
      location: "Ubicación de la Residencia / Proyecto",
      locations: [
        "Tulum (Aldea Zamá / La Veleta / Región 15 / AMARI)",
        "Tulum Zona Hotelera / Boca Paila",
        "Playa del Carmen / Playacar",
        "Mayakoba / Corredor Riviera Maya",
        "Puerto Morelos / Puerto Aventuras",
        "Akumal / Soliman Bay",
      ],
      segment: "Perfil o Tipo de Propiedad",
      segments: [
        "Villa / Residencia Privada",
        "Condominio / Administración HOA",
        "Hotel Boutique / Eco-Resort",
        "Desarrolladora / Fin de Obra",
      ],
      notes: "¿Qué división o prioridad deseas atender?",
      notesPlaceholder: "Piscina & Agua, Decks de Cumarú/Zapote, Paredes Chukum, Gestión Integral...",
      submit: "Confirmar Terra Check Sin Costo",
      submitting: "Procesando...",
    },
    errors: {
      name: "Por favor ingresa tu nombre completo.",
      email: "Por favor ingresa un correo electrónico válido.",
      phone: "Ingresa un número de WhatsApp válido (mínimo 8 dígitos).",
    },
    success: {
      title: "¡Solicitud de Terra Check recibida!",
      desc: "Un Ingeniero de Enlace bilingüe te contactará por WhatsApp en menos de 15 minutos para confirmar fecha y hora de tu diagnóstico técnico integral.",
      reset: "Enviar otra solicitud",
    },
  },
  reviews: {
    eyebrow: "RESEÑAS VERIFICADAS EN GOOGLE MAPS",
    title: "Nuestros Clientes Opinan",
    subtitle:
      "Experiencias de propietarios, administradores de condominios y directores de hoteles boutique en Playa del Carmen, Tulum y Riviera Maya.",
    ratingScore: "4.9",
    ratingCount: "48 reseñas en Google Maps",
    ctaMaps: "Ver en Google Maps",
    items: [
      {
        name: "Arq. Alejandro Villarreal",
        role: "Propietario Villa K'áax · Aldea Zamá, Tulum",
        date: "Hace 2 semanas",
        rating: 5,
        text: "Vivo en Ciudad de México y antes era un caos coordinar alberquero, jardinero y carpintero por separado. Con Terra Maya recibo mi reporte 360° puntual, la alberca infinity siempre está cristalina y el deck de Cumarú luce como el primer día.",
      },
      {
        name: "Marie-Claire Laurent",
        role: "Presidenta Comité HOA · Playacar Fase II, Playa del Carmen",
        date: "Hace 1 mes",
        rating: 5,
        text: "Cambiamos nuestra plantilla interna por la póliza integral de Terra Maya en nuestro condominio de 28 unidades. El ahorro administrativo y la calidad del mantenimiento de jardines, albercas y Chukum superaron por completo nuestras expectativas.",
      },
      {
        name: "Roberto & Elena Gastélum",
        role: "Superhosts Luxury Villas · Región 15, Tulum",
        date: "Hace 3 semanas",
        rating: 5,
        text: "Sus turnovers de limpieza y la sanificación térmica de colchones nos ayudaron a subir nuestra calificación en Airbnb a 4.98. Cuando tuvimos una urgencia hidráulica un domingo, el técnico llegó en menos de 90 minutos.",
      },
      {
        name: "Marco Bellini",
        role: "Director General · Boutique Eco-Hotel, Riviera Maya",
        date: "Hace 1 mes",
        rating: 5,
        text: "El trabajo artesanal que hacen en muros de Chukum y carpintería de Tzalam es de verdadero nivel 5 Diamantes. Además, su control biológico de plagas nos permite proteger la selva sin incomodar a nuestros huéspedes.",
      },
      {
        name: "David & Sarah Jenkins",
        role: "Propietarios Residenciales · Mayakoba, Playa del Carmen",
        date: "Hace 2 meses",
        rating: 5,
        text: "Pasamos la mitad del año en Toronto y su servicio de 'Casa Cerrada' con inspección de techos por drone después de cada tormenta tropical nos da una tranquilidad absoluta. Comunicación impecable en inglés y español.",
      },
      {
        name: "Ing. Fernando Montemayor",
        role: "Desarrollador Inmobiliario · Puerto Morelos & Tulum",
        date: "Hace 3 meses",
        rating: 5,
        text: "Contratamos a Terra Maya para el detallado fino de fin de obra y la entrega de llaves a nuestros compradores. Su profesionalismo, puntualidad y bitácora fotográfica elevan muchísimo el valor percibido de cada residencia.",
      },
    ],
  },
  legal: {
    privacyTitle: "Aviso de Privacidad Integral (LFPDPPP / GDPR)",
    termsTitle: "Términos y Condiciones de Servicio y SLA",
    cookiesTitle: "Política de Cookies y Consentimiento (Google & Meta)",
    cookieBannerText:
      "Utilizamos cookies propias y de terceros (Google Analytics 4, Google Ads Consent Mode v2 y Meta Pixel) para mejorar tu experiencia, analizar el tráfico y personalizar nuestras comunicaciones conforme a la LFPDPPP y GDPR.",
    acceptAll: "Aceptar todas",
    essentialOnly: "Solo esenciales",
  },
  footer: {
    tagline: "Preservando el patrimonio arquitectónico de Quintana Roo con ingeniería sustentable.",
    rights: "Todos los derechos reservados. Facility & Property Services en Riviera Maya.",
  },
};

const baseEn: typeof baseEs = {
  meta: {
    title: "Terra Maya | Luxury Facility & Property Management in Tulum & Riviera Maya",
    description:
      "The care that keeps your property extraordinary. Comprehensive maintenance, technical operations, and preservation of high-end properties in the Riviera Maya (Residential, Hospitality & Commercial).",
    keywords:
      "property management Tulum, luxury villa maintenance Riviera Maya, pool maintenance Tulum, absentee homeowner care Mexico, Chukum restoration, tropical wood deck care, HOA facility management Playa del Carmen",
  },
  nav: {
    home: "Home",
    services: "7 Services",
    solutions: "Solutions",
    pricing: "Pricing",
    portal: "Client Portal",
    cta: "Free Terra Check",
    switchLang: "FR",
  },
  hero: {
    badge: "TULUM · PLAYA DEL CARMEN · RIVIERA MAYA",
    monitoring: "Active Riviera Maya Monitoring 24/7",
    liveLink: "View Live Villa K'áax Telemetry →",
    pillVillas: "+180 Villas Under Care",
    pillSla: "SLA Response < 2h",
    title: "The care that keeps your property extraordinary",
    subtitle:
      "Comprehensive maintenance, technical operations, and preservation of high-end properties in the Riviera Maya.",
    segmentsLine: "Residential · Hospitality · Commercial",
    locationsLine: "Tulum · Playa del Carmen · Riviera Maya",
    primaryCta: "Book Free Terra Check",
    secondaryCta: "Complimentary comprehensive technical diagnostic",
    portalCta: "Live 360° App Demo",
    stats: [
      { value: "7", label: "Technical divisions integrated" },
      { value: "< 2 hr", label: "Emergency SLA response" },
      { value: "360° + Drone", label: "Visual proof every visit" },
      { value: "100% REPSE", label: "Compliant & tax-deductible" },
    ],
  },
  values: {
    eyebrow: "VALUE PROPOSITION",
    title: "One trusted company to keep your Riviera Maya property flawless",
    subtitle:
      "An owner's biggest headache isn't finding a gardener—it's coordinating seven informal vendors who never talk to each other.",
    items: [
      {
        tag: "SINGLE POINT OF CONTACT",
        title: "One accountable partner",
        desc: "A dedicated multilingual Facility Director, one WhatsApp thread, and one consolidated monthly invoice (MXN, USD, or EUR).",
        icon: "UserCheck",
      },
      {
        tag: "TOTAL TRANSPARENCY",
        title: "360°, photo & drone proof",
        desc: "Every visit is logged in the Terra Maya App with before/after sliders, navigable 360° tours, and aerial drone inspections.",
        icon: "Camera",
      },
      {
        tag: "GUARANTEED SLA",
        title: "Guaranteed response times",
        desc: "Urgent dispatch within 2–4 hours and routine requests in 24–48 hours. If we miss our SLA, we credit a service penalty.",
        icon: "Clock",
      },
      {
        tag: "ECO-STEWARDSHIP",
        title: "Jungle-friendly care",
        desc: "Biological pest management, low-toxicity biodegradable formulas, and native Mayan landscaping that protects the ecosystem.",
        icon: "Leaf",
      },
    ],
  },
  audience: {
    eyebrow: "SOLUTIONS BY SEGMENT",
    title: "Engineered for owners and operators who demand 5-Diamond standards",
    subtitle: "Select your profile to see how we protect your real estate asset and eliminate operational friction.",
    segments: [
      {
        id: "owners",
        badge: "RESIDENTIAL & VILLA CARE",
        title: "Absentee Owners & Superhosts",
        quote: "“Even when you're 5,000 miles away, you know exactly how your home looks: real-time telemetry, monthly 360° walkthroughs, and a tech who arrives before small issues grow.”",
        bullets: [
          "All-in-One Monthly Plans (Infinity Pool, Jungle Landscaping, Cleaning, Biological Pest Control)",
          "Weekly 'Closed Home' inspections: thermographic humidity control, AC ventilation, water & power",
          "5-Star Airbnb / Vrbo turnovers with a 68-point hospitality checklist",
          "Pre-hurricane preparation & rapid post-storm aerial drone assessment",
        ],
        ticket: "From $3,490 MXN/mo (~$185 USD)",
        cta: "View Residential Plans",
      },
      {
        id: "condos",
        badge: "CONDOMINIUMS & HOA",
        title: "Condo Managers & HOA Boards",
        quote: "“Deliver total transparency to your owners' assembly with monthly 360° executive reports, drone roof checks, and 100% REPSE & IMSS compliance.”",
        bullets: [
          "Full upkeep of common areas, gym, yoga studio, pools, jungle trails & infrastructure",
          "Two-Layer Model: HOA complex contract + discounted 'Villa Care' packages for private owners",
          "Role-based HOA dashboard and downloadable monthly PDF assembly reports",
          "Zero labor liability—all technicians are on our formal IMSS payroll with $5M USD liability insurance",
        ],
        ticket: "Complex contracts from $45,000 MXN/mo",
        cta: "Explore HOA Solutions",
      },
      {
        id: "hotels",
        badge: "HOSPITALITY",
        title: "Boutique Hotels & Eco-Resorts",
        quote: "“Turn payroll headaches, staff turnover, chemicals, and equipment into one fixed, tax-deductible monthly cost with guaranteed SLAs.”",
        bullets: [
          "On-site resident maintenance technicians and dedicated pool & landscaping crews",
          "NOM-245 water quality logs (pools/cold plunges) & COFEPRIS NOM-256 pest certificates",
          "Bi-annual 140°C thermal extraction for mattresses, upholstery, and tropical hardwood decks",
          "Zero hidden costs from employee rotation, sick leave, or severance liabilities",
        ],
        ticket: "Contracts from $60,000 MXN/mo",
        cta: "Request Hotel Proposal",
      },
      {
        id: "developers",
        badge: "DEVELOPERS & BROKERS",
        title: "Real Estate Developers",
        quote: "“Hand over every unit in pristine condition and delight buyers with our 'Key Handover' program featuring a free Terra Check.”",
        bullets: [
          "Post-construction deep cleaning and pre-delivery detailing for units and amenities",
          "Baseline 360° virtual documentation at handover to protect post-sale warranties",
          "Broker Partner Program: earn 10% commission on the buyer's first-year annual policy",
          "Bridge facility management while the HOA board is formally constituted",
        ],
        ticket: "Per project or monthly retainer",
        cta: "Developer Partnerships",
      },
    ],
  },
  services: {
    eyebrow: "SPECIALIZED ENGINEERING",
    title: "7 Technical Divisions Under the Terra Maya Umbrella",
    subtitle:
      "We combine commercial-grade equipment, uniformed IMSS-insured technicians, and ISO protocols to preserve every architectural detail of your property.",
    items: [
      {
        id: "terra-agua",
        brand: "Terra Agua",
        badge: "Hydraulic Div.",
        category: "Infinity Pools, Jacuzzis & Cold Plunges",
        shortDesc: "Millimeter pH/ORP balancing, salt chlorination, crystal media filters, and NOM-245 compliance.",
        fullDesc:
          "Maintenance of overflow infinity systems, millimeter pH/ORP balancing, salt chlorination crystallization, and coastal desalination against jungle foliage and tropical heat.",
        features: [
          "Certified water balancing, weekly Langelier Saturation Index test & NOM-245-SSA1-2010 logs",
          "Wall brushing, deep vacuuming, tile descaling, and active crystal filter backwashing",
          "Preventive maintenance for pumps, salt chlorinators, UV sanitizers, and heat pumps",
          "48-hour 'Green-to-Blue' recovery and post-checkout inspections for vacation rentals",
        ],
        checks: ["Weekly Langelier test", "Crystal media filters"],
        priceHint: "From $1,600 MXN/mo (weekly visit + chemicals included)",
        verticals: ["Residential", "Condos", "Hotels"],
      },
      {
        id: "terra-verde",
        brand: "Terra Verde",
        badge: "Mayan Botany",
        category: "High-Canopy Landscaping & Endemic Arboriculture",
        shortDesc: "Pre-hurricane palm pruning, automated drip irrigation, and native Mayan jungle stewardship.",
        fullDesc:
          "Pre-hurricane preventive pruning, royal palm nutrition, automated drip irrigation systems, and tropical gardening that respects native flora.",
        features: [
          "Daily/weekly leaf clearing, aesthetic pruning, and bio-organic soil fertilization",
          "High palm tree pruning and preventive coconut removal for guest safety",
          "Automated drip irrigation system auditing, programming, and repair",
          "Perimeter root management along walkways and pre-hurricane canopy safety",
        ],
        checks: ["Native flora", "Bio-fertilization"],
        priceHint: "From $1,200 MXN/mo residential · $4–$8 MXN/m² commercial",
        verticals: ["Residential", "Condos", "Hotels"],
      },
      {
        id: "terra-clean",
        brand: "Terra Clean",
        badge: "5-Diamond",
        category: "Precision Housekeeping & Desalination Detailing",
        shortDesc: "Anti-salinity glass & frame care, clinical sanitization, and VIP turnovers with a 68-pt checklist.",
        fullDesc:
          "Anti-salinity treatment on German window frames, clinical-grade sanitization, and editorial staging prior to VIP guest arrivals using eco-luxury supplies.",
        features: [
          "Regular and deep conservation cleaning for luxury villas, penthouses, gyms, and yoga studios",
          "Airbnb/Vrbo guest turnovers with a 68-point checklist and instant photo reports",
          "Post-construction fine detailing and salt-air descaling on tempered glass",
          "Dedicated full-time supervised housekeeping staff for condominiums and boutique hotels",
        ],
        checks: ["68-pt checklist", "Eco-luxury supplies"],
        priceHint: "From $750 MXN/visit · Turnovers from $800 MXN",
        verticals: ["Residential", "Commercial", "Hotels"],
      },
      {
        id: "terra-textil",
        brand: "Terra Textil",
        badge: "Thermo-Mechanical",
        category: "140°C Thermal Sanitization & Fine Linens",
        shortDesc: "Deep dust-mite extraction for pillow-top mattresses, raw linens, and blackout drapery.",
        fullDesc:
          "Deep extraction of dust mites and humidity spores from pillow-top mattresses, raw linens, and blackout curtains using 140°C dry steam and controlled drying.",
        features: [
          "Deep injection-extraction and 140°C dry steam sanitizing for mattresses (Twin to King)",
          "Stain and odor removal for raw linen sofas, dining chairs, headboards, and rugs",
          "Hypoallergenic anti-mite, anti-mold treatment and hydrophobic fabric shield",
          "Bi-annual low-season hospitality programs with 15% volume discount",
        ],
        checks: ["Controlled drying", "Dry steam"],
        priceHint: "Mattresses from $450 MXN · Sofas from $600 MXN",
        verticals: ["Residential", "Commercial", "Hotels"],
      },
      {
        id: "terra-shield",
        brand: "Terra Shield",
        badge: "COFEPRIS",
        category: "Biological Pest Control & Perimeter Barriers",
        shortDesc: "Official COFEPRIS (NOM-256) certification, Pet & Eco Safe botanical extracts, and termite barriers.",
        fullDesc:
          "Zero toxicity for pets and native wildlife. Non-invasive protocols using botanical extracts, physical perimeter barriers, and official sanitary certification.",
        features: [
          "Official COFEPRIS certificate (NOM-256-SSA1-2012) required for restaurants and hotels",
          "Preventive and corrective termite treatments for tropical hardwood structures",
          "Outdoor biological thermal fogging against mosquitoes in lush jungle areas",
          "Tamper-resistant stations and 30-day written service warranty",
        ],
        checks: ["Pet & Eco Safe", "Official certificate"],
        priceHint: "Residential policy from $650 MXN/mo · Certified commercial from $1,800 MXN",
        verticals: ["Residential", "Restaurants", "Hotels"],
      },
      {
        id: "terra-build-carpinteria",
        brand: "Terra Carpintería",
        badge: "Fine Millwork",
        category: "Tropical Hardwoods: Tzalam, Cumarú, Parota & Zapote",
        shortDesc: "Outdoor deck restoration with open-pore natural teak oils, louvers, and marine UV50 protection.",
        fullDesc:
          "Restoration of exterior decks with open-pore natural teak oils, millimeter alignment of timber louvers, and marine UV50 sealing for designer furniture.",
        features: [
          "Sanding, botanical oil hydration, and marine UV50 sealing for decks and pergolas",
          "Adjustment of solid wood doors, louvers, closets, and salt-exposed hardware",
          "Custom fabrication and restoration of indoor and outdoor wooden furniture",
          "Annual preventive wood preservation programs for resorts and villa communities",
        ],
        checks: ["Natural botanical oils", "Marine UV50 shield"],
        priceHint: "Wood sealing $220–$380 MXN/m² · Monthly maintenance hours available",
        verticals: ["Residential", "Condos", "Hotels"],
      },
      {
        id: "terra-build-albanileria",
        brand: "Terra Chukum & Civil",
        badge: "Ancestral",
        category: "Traditional Chukum Resins, Waterproofing & Civil Works",
        shortDesc: "Expert micro-fissure repair in Mayan Chukum walls, mineral stuccos, roofs, and water systems.",
        fullDesc:
          "Expert micro-fissure repair in pools and hand-polished authentic Mayan Chukum walls (zero synthetic chemicals), invisible waterproofing, and architectural concrete care.",
        features: [
          "Artisanal restoration using authentic Chukum tree resin and mineral stuccos",
          "Elastomeric roof waterproofing paired with before/after aerial drone inspections",
          "Cistern disinfection, storm drain clearing, grease traps, and hydropneumatic pump checks",
          "On-site resident technician options for condominiums and boutique hotels",
        ],
        checks: ["Authentic Chukum resin", "Zero synthetic chemicals"],
        priceHint: "Tech hour from $350 MXN · Resident tech from $24,000 MXN/mo",
        verticals: ["Residential", "Commercial", "Hotels"],
      },
    ],
  },
  compliance: {
    eyebrow: "LEGAL & INSTITUTIONAL PROTECTION",
    title: "Regulatory compliance is our strongest differentiator",
    subtitle:
      "We operate under Mexico's strictest regulatory standards to fully protect our clients' confidentiality, tax deductibility, and real estate assets.",
    badges: [
      {
        code: "REPSE · STPS",
        title: "Active Federal REPSE Registration",
        desc: "Certified specialized staff and 100% tax-deductible CFDI 4.0 invoices (ISR & VAT).",
      },
      {
        code: "IMSS · INFONAVIT",
        title: "100% IMSS Insured Payroll",
        desc: "Zero labor liability or contingencies for property owners, HOA boards, or hotels.",
      },
      {
        code: "$5M USD LIABILITY",
        title: "$5M USD Civil Liability Policy",
        desc: "Comprehensive international estate coverage against third-party damage plus fidelity bonding.",
      },
      {
        code: "NOM-256 COFEPRIS",
        title: "Licensed Sanitary Pest Control",
        desc: "Certified sanitary officer and approved botanical extracts with official compliance certificates.",
      },
      {
        code: "NOM-245-SSA1",
        title: "Pool Water Quality Standards",
        desc: "Documented pH, ORP, salinity, and Langelier logs on every visit.",
      },
      {
        code: "AFAC NOM-107",
        title: "Registered Drone & 360° Operations",
        desc: "Licensed drone pilots, aviation liability insurance, and strict NDA/LFPDPPP privacy compliance.",
      },
    ],
  },
  pricing: {
    eyebrow: "TERRA CARE PLANS & CALCULATOR",
    title: "Transparent pricing built for peace of mind",
    subtitle:
      "Save ~15% with a bundled monthly policy compared to standalone visits. Every plan includes full access to the Terra Maya Client Portal.",
    tiers: [
      {
        id: "esencial",
        name: "Esencial",
        badge: "RESIDENTS",
        basePrice: 3490,
        desc: "For local residents or frequent owners who want their pool, garden, and pest barrier spotless.",
        popular: false,
        features: [
          "Private pool: 1 visit/week with chemicals included",
          "Garden & terrace maintenance: bi-weekly visits",
          "Biological pest control: bi-monthly indoor/outdoor application",
          "Terra Maya App with photo evidence of every visit",
          "Monthly CFDI tax invoice (pay in MXN, USD, or EUR)",
        ],
      },
      {
        id: "mas-vendido",
        name: "Best Seller · Plus",
        badge: "MOST POPULAR · HOSTS",
        basePrice: 6490,
        desc: "Designed for vacation rental hosts and busy families who need comprehensive preventive care.",
        popular: true,
        features: [
          "Everything included in the Esencial plan",
          "Bi-weekly conservation cleaning",
          "General maintenance technician (Build): 2 hours/month included",
          "Annual 140°C thermal cleaning for mattresses & main sofa included",
          "Quarterly 360° virtual walkthrough + priority WhatsApp line",
          "15% discount on guest turnovers and à-la-carte services",
        ],
      },
      {
        id: "patrimonio",
        name: "Patrimonio",
        badge: "ABSENTEE OWNERS",
        basePrice: 11900,
        desc: "Total asset protection for international owners and investors who want maximum property value and zero surprises.",
        popular: false,
        features: [
          "Private pool: 2 visits/week + weekly garden maintenance",
          "Weekly cleaning OR 'Closed Home' check (thermography, humidity, water, power)",
          "Monthly integrated pest control + 4 hours/month Build technician",
          "Comprehensive technical inspection + Monthly 360° tour + Quarterly drone roof check",
          "Hurricane preparation protocol + Bi-annual textile deep cleaning",
          "Dedicated Facility Director & < 2-hour emergency SLA",
        ],
      },
    ],
    calculator: {
      title: "Custom Terra Care Calculator",
      subtitle: "Configure your property size and features in Tulum, Playa del Carmen, or Puerto Morelos for an instant monthly estimate.",
      propertyTypeLabel: "Property Type",
      propertyTypes: [
        { id: "villa", label: "Standalone Villa / Home" },
        { id: "condo_unit", label: "Villa in Partner Complex (Community Rate -15%)" },
        { id: "penthouse", label: "Penthouse with Private Rooftop" },
      ],
      sqmLabel: "Total Property Area (m²)",
      poolLabel: "Water Features (Pool / Plunge / Jacuzzi)",
      poolOptions: [
        { id: "none", label: "No Pool (-$900 MXN)", modifier: -900 },
        { id: "single", label: "1 Standard Pool ≤40 m³ (Included)", modifier: 0 },
        { id: "double", label: "2 Pools or Plunge + Main Pool (+$900 MXN)", modifier: 900 },
        { id: "large", label: "Infinity Pool >40 m³ (+$1,650 MXN)", modifier: 1650 },
      ],
      billingLabel: "Contract Term",
      billingOptions: [
        { id: "monthly", label: "Monthly", discount: 0 },
        { id: "6months", label: "6 Months (-3%)", discount: 0.03 },
        { id: "12months", label: "12 Months (-7% Recommended)", discount: 0.07 },
      ],
      addonsLabel: "Optional Add-ons",
      addons: [
        { id: "drone_monthly", label: "Monthly Aerial Drone Inspection (+$1,200/mo)", price: 1200 },
        { id: "hurricane_shield", label: "Priority Hurricane Shield Protocol (+$650/mo)", price: 650 },
        { id: "wood_care", label: "Bi-annual UV50 Deck Hydration (+$850/mo)", price: 850 },
      ],
      summaryTitle: "Estimated Monthly Investment",
      ivaNote: "Prices in MXN + VAT. Includes pool chemicals up to policy cap and full Terra Maya Portal access.",
      ctaButton: "Book Free Terra Check with This Quote",
    },
  },
  portal: {
    eyebrow: "TERRA MAYA APP · CLIENT PORTAL",
    title: "Real-Time Telemetry & Interactive Visual Evidence",
    subtitle:
      "Monitor your asset health 24/7: infinity pool telemetry, solar output, before/after finish restoration, and audit photo logs with TLS 1.3 encryption.",
    loginTitle: "Terra Maya Client Portal",
    loginSubtitle: "Sign in to your account or explore our live interactive dashboard in demo mode.",
    demoProfilesLabel: "Switch live residence view:",
    roles: [
      { id: "owner", label: "Villa K'áax (Aldea Zamá)", property: "Villa K'áax · Aldea Zamá, Tulum" },
      { id: "hoa", label: "AMARI Uptown (36 Villas)", property: "Common Areas · AMARI Uptown Tulum" },
      { id: "hotel", label: "Residencia Ixchel (Mayakoba)", property: "Residencia Ixchel · Mayakoba" },
    ],
    columns: {
      scheduled: "Scheduled",
      inProgress: "In Progress",
      completed: "Completed",
    },
    viewer360: {
      title: "Interactive Visual Evidence",
      subtitle: "Zapote Deck Restoration Protocol · 360° & AFAC Drone Viewer.",
      modes: {
        pano360: "360° Walkthrough",
        drone: "AFAC Drone Inspection",
        beforeAfter: "Before / After",
      },
    },
  },
  terraCheck: {
    badge: "INSTITUTIONAL COURTESY · FULL DIAGNOSTIC",
    title: "Request Complimentary Terra Check Diagnostic",
    subtitle:
      "We thoroughly evaluate critical hydraulic, electrical, hardwood, Chukum wall, and roof risk points with 360° cameras and drone at no cost for property owners and hotel directors.",
    fields: {
      name: "Full Name",
      namePlaceholder: "e.g. Sarah Jenkins",
      email: "Email Address",
      emailPlaceholder: "name@domain.com",
      phone: "Contact Number / WhatsApp",
      phonePlaceholder: "+52 1 984 175 0007",
      location: "Property / Project Location",
      locations: [
        "Tulum (Aldea Zamá / La Veleta / Región 15 / AMARI)",
        "Tulum Hotel Zone / Boca Paila",
        "Playa del Carmen / Playacar",
        "Mayakoba / Riviera Maya Corridor",
        "Puerto Morelos / Puerto Aventuras",
        "Akumal / Soliman Bay",
      ],
      segment: "Property Type",
      segments: [
        "Private Villa / Residence",
        "Condominium / HOA Board",
        "Boutique Hotel / Eco-Resort",
        "Real Estate Developer / Post-Construction",
      ],
      notes: "Which division or priority do you need?",
      notesPlaceholder: "Pool & Water, Cumarú/Zapote Decks, Chukum Walls, Full Stewardship...",
      submit: "Confirm Complimentary Terra Check",
      submitting: "Processing...",
    },
    errors: {
      name: "Please enter your full name.",
      email: "Please enter a valid email address.",
      phone: "Please enter a valid WhatsApp phone number (min 8 digits).",
    },
    success: {
      title: "Terra Check Request Received!",
      desc: "A multilingual Liaison Engineer will message you on WhatsApp within 15 minutes to confirm your comprehensive technical diagnostic.",
      reset: "Submit another request",
    },
  },
  reviews: {
    eyebrow: "VERIFIED GOOGLE MAPS REVIEWS",
    title: "What Our Clients Say",
    subtitle:
      "Experiences from villa owners, HOA boards, and boutique hotel directors across Playa del Carmen, Tulum, and the Riviera Maya.",
    ratingScore: "4.9",
    ratingCount: "48 reviews on Google Maps",
    ctaMaps: "View on Google Maps",
    items: [
      {
        name: "Arch. Alejandro Villarreal",
        role: "Owner Villa K'áax · Aldea Zamá, Tulum",
        date: "2 weeks ago",
        rating: 5,
        text: "I live in Mexico City and coordinating separate pool, garden, and carpentry vendors used to be a nightmare. With Terra Maya I get my 360° report on time, the infinity pool is crystal clear, and the Cumarú deck looks brand new.",
      },
      {
        name: "Marie-Claire Laurent",
        role: "HOA Board President · Playacar Phase II, Playa del Carmen",
        date: "1 month ago",
        rating: 5,
        text: "We replaced our internal staff with Terra Maya's all-in-one facility contract for our 28-unit complex. Both the administrative savings and the quality of pool, garden, and Chukum maintenance exceeded every expectation.",
      },
      {
        name: "Roberto & Elena Gastélum",
        role: "Luxury Villa Superhosts · Region 15, Tulum",
        date: "3 weeks ago",
        rating: 5,
        text: "Their precision turnovers and thermal mattress sanitization helped boost our Airbnb rating to 4.98. When we had a Sunday hydraulic emergency, their technician arrived on-site in under 90 minutes.",
      },
      {
        name: "Marco Bellini",
        role: "General Manager · Boutique Eco-Hotel, Riviera Maya",
        date: "1 month ago",
        rating: 5,
        text: "Their artisanal restoration of Chukum walls and Tzalam millwork is true 5-Diamond hospitality caliber. Plus, their biological pest control protects the surrounding jungle without ever bothering our guests.",
      },
      {
        name: "David & Sarah Jenkins",
        role: "Residential Owners · Mayakoba, Playa del Carmen",
        date: "2 months ago",
        rating: 5,
        text: "We spend half the year in Toronto, and their 'Closed Home' inspections with drone roof checks after every tropical storm give us complete peace of mind. Flawless communication in English and Spanish.",
      },
      {
        name: "Eng. Fernando Montemayor",
        role: "Real Estate Developer · Puerto Morelos & Tulum",
        date: "3 months ago",
        rating: 5,
        text: "We partner with Terra Maya for post-construction fine detailing and buyer key handovers. Their professionalism, punctuality, and 360° baseline documentation elevate the perceived value of every residence.",
      },
    ],
  },
  legal: {
    privacyTitle: "Comprehensive Privacy Policy (LFPDPPP / GDPR)",
    termsTitle: "Terms of Service & SLA Guarantee",
    cookiesTitle: "Cookie & Tracking Policy (Google & Meta Compliance)",
    cookieBannerText:
      "We use first- and third-party cookies (Google Analytics 4, Google Ads Consent Mode v2, and Meta Pixel) to optimize your experience, analyze traffic, and personalize communications in compliance with LFPDPPP and GDPR.",
    acceptAll: "Accept All",
    essentialOnly: "Essential Only",
  },
  footer: {
    tagline: "Preserving Quintana Roo's architectural heritage with sustainable engineering.",
    rights: "All rights reserved. Facility & Property Services in the Riviera Maya.",
  },
};

const baseFr: typeof baseEs = {
  ...baseEn,
  meta: {
    title: "Terra Maya | Gestion Immobilière & Maintenance de Luxe à Tulum et Riviera Maya",
    description:
      "Le soin qui garde votre propriété extraordinaire. Maintenance intégrale, exploitation technique et préservation de propriétés haut de gamme sur la Riviera Maya.",
    keywords:
      "gestion immobilière Tulum, maintenance villa de luxe Riviera Maya, entretien piscine Tulum, conciergerie technique Mexique, restauration Chukum, bois exotique Tzalam, syndic copropriété Playa del Carmen",
  },
  nav: {
    home: "Accueil",
    services: "7 Services",
    solutions: "Solutions",
    pricing: "Tarifs",
    portal: "Portail Client",
    cta: "Terra Check Gratuit",
    switchLang: "IT",
  },
  hero: {
    badge: "TULUM · PLAYA DEL CARMEN · RIVIERA MAYA",
    monitoring: "Surveillance Active Riviera Maya 24/7",
    liveLink: "Voir Télémétrie Villa K'áax en Direct →",
    pillVillas: "+180 Villas sous Garde",
    pillSla: "SLA Réponse < 2h",
    title: "Le soin qui garde votre propriété extraordinaire",
    subtitle:
      "Maintenance intégrale, exploitation technique et préservation de propriétés haut de gamme sur la Riviera Maya.",
    segmentsLine: "Résidentiel · Hôtellerie · Commercial",
    locationsLine: "Tulum · Playa del Carmen · Riviera Maya",
    primaryCta: "Réserver un Terra Check Gratuit",
    secondaryCta: "Diagnostic technique préventif gratuit",
    portalCta: "Démo Portail 360°",
    stats: [
      { value: "7", label: "Divisions techniques intégrées" },
      { value: "< 2 h", label: "SLA d'intervention d'urgence" },
      { value: "360° + Drone", label: "Preuve visuelle à chaque visite" },
      { value: "100% REPSE", label: "Facturation fiscale déductible" },
    ],
  },
  values: {
    eyebrow: "PROPOSITION DE VALEUR",
    title: "Un seul partenaire responsable pour que votre propriété reste irréprochable",
    subtitle:
      "Le vrai problème d'un propriétaire à distance n'est pas de trouver un jardinier, mais de coordonner sept prestataires informels.",
    items: [
      {
        tag: "INTERLOCUTEUR UNIQUE",
        title: "Un seul responsable",
        desc: "Un Facility Director multilingue dédié, un fil WhatsApp unique et une seule facture mensuelle consolidée (MXN, USD ou EUR).",
        icon: "UserCheck",
      },
      {
        tag: "TRANSPARENCE TOTALE",
        title: "Preuve 360°, photo & drone",
        desc: "Chaque visite est documentée dans l'App Terra Maya avec photos avant/après, visites 360° et inspections par drone.",
        icon: "Camera",
      },
      {
        tag: "SLA GARANTI",
        title: "Délais d'intervention garantis",
        desc: "Urgences en moins de 2 à 4 heures et maintenance courante sous 24–48 h. Pénalité à notre charge en cas de retard.",
        icon: "Clock",
      },
      {
        tag: "ÉCO-INGÉNIERIE",
        title: "Gestion durable de la jungle",
        desc: "Lutte biologique antiparasitaire, produits biodégradables et aménagement paysager respectueux de la flore maya.",
        icon: "Leaf",
      },
    ],
  },
  pricing: {
    ...baseEn.pricing,
    eyebrow: "FORFAITS TERRA CARE & CALCULATEUR",
    title: "Des tarifs transparents conçus pour votre sérénité",
    subtitle:
      "Économisez jusqu'à 15 % avec un abonnement mensuel tout-en-un. Accès complet au Portail Client Terra Maya inclus.",
    calculator: {
      ...baseEn.pricing.calculator,
      title: "Calculateur Personnalisé Terra Care",
      subtitle: "Ajustez la surface et les équipements de votre propriété à Tulum, Playa del Carmen ou Puerto Morelos.",
      summaryTitle: "Investissement Mensuel Estimé",
      ctaButton: "Réserver mon Terra Check avec ce devis",
    },
  },
  portal: {
    ...baseEn.portal,
    eyebrow: "APP TERRA MAYA · PORTAIL CLIENT",
    title: "Télémétrie en Temps Réel & Preuves Visuelles Interactives",
    subtitle:
      "Surveillez la santé de votre patrimoine 24/7 : piscine à débordement, énergie solaire, restauration avant/après et journal d'audit chiffré TLS 1.3.",
    columns: {
      scheduled: "Planifié",
      inProgress: "En Cours",
      completed: "Terminé",
    },
  },
  terraCheck: {
    ...baseEn.terraCheck,
    badge: "COURTOISIE INSTITUTIONNELLE · DIAGNOSTIC COMPLET",
    title: "Demander un Diagnostic Terra Check Gratuit",
    subtitle:
      "Nous évaluons gratuitement les points critiques (hydraulique, électricité, bois exotiques, murs en Chukum et toitures par caméra 360° et drone) sous 48 heures.",
    fields: {
      ...baseEn.terraCheck.fields,
      name: "Nom Complet",
      email: "Adresse E-mail",
      phone: "Numéro WhatsApp (avec indicatif)",
      location: "Localisation de la Propriété",
      segment: "Type de Propriété",
      notes: "Quelle est votre priorité principale ?",
      submit: "Confirmer mon Terra Check Gratuit",
      submitting: "Envoi en cours...",
    },
    success: {
      title: "Demande de Terra Check reçue !",
      desc: "Un ingénieur de liaison multilingue vous contactera sur WhatsApp sous 15 minutes pour confirmer votre inspection technique intégrale.",
      reset: "Envoyer une autre demande",
    },
  },
  reviews: {
    ...baseEn.reviews,
    eyebrow: "AVIS VÉRIFIÉS GOOGLE MAPS",
    title: "Ce que disent nos clients",
    subtitle:
      "Témoignages de propriétaires de villas, syndics de copropriété et directeurs d'hôtels-boutiques à Playa del Carmen, Tulum et Riviera Maya.",
    ratingCount: "48 avis sur Google Maps",
    ctaMaps: "Voir sur Google Maps",
  },
  legal: {
    privacyTitle: "Politique de Confidentialité (LFPDPPP / RGPD)",
    termsTitle: "Conditions Générales de Service & SLA",
    cookiesTitle: "Politique de Cookies (Conformité Google & Meta)",
    cookieBannerText:
      "Nous utilisons des cookies (Google Analytics 4, Google Ads Consent Mode v2 et Meta Pixel) pour optimiser votre expérience et analyser le trafic conformément au RGPD et à la loi mexicaine LFPDPPP.",
    acceptAll: "Tout accepter",
    essentialOnly: "Essentiels uniquement",
  },
  footer: {
    tagline: "Préserver le patrimoine architectural du Quintana Roo grâce à l'ingénierie durable.",
    rights: "Tous droits réservés. Facility & Property Services en Riviera Maya.",
  },
};

const baseIt: typeof baseEs = {
  ...baseEn,
  meta: {
    title: "Terra Maya | Property & Facility Management di Lusso a Tulum e Riviera Maya",
    description:
      "La cura che mantiene straordinaria la tua proprietà. Manutenzione integrale, gestione tecnica e conservazione di proprietà di alto livello nella Riviera Maya.",
    keywords:
      "property management Tulum, manutenzione ville di lusso Riviera Maya, manutenzione piscine Tulum, gestione immobiliare Messico, restauro Chukum, legno tropicale Tzalam, amministrazione condomini Playa del Carmen",
  },
  nav: {
    home: "Home",
    services: "7 Servizi",
    solutions: "Soluzioni",
    pricing: "Prezzi",
    portal: "Portale Clienti",
    cta: "Terra Check Gratuito",
    switchLang: "ES",
  },
  hero: {
    badge: "TULUM · PLAYA DEL CARMEN · RIVIERA MAYA",
    monitoring: "Monitoraggio Attivo Riviera Maya 24/7",
    liveLink: "Vedi Telemetria Villa K'áax in Diretta →",
    pillVillas: "+180 Ville Custodite",
    pillSla: "SLA Risposta < 2h",
    title: "La cura che mantiene straordinaria la tua proprietà",
    subtitle:
      "Manutenzione integrale, gestione tecnica e conservazione di proprietà di alto livello nella Riviera Maya.",
    segmentsLine: "Residenziale · Alberghiero · Commerciale",
    locationsLine: "Tulum · Playa del Carmen · Riviera Maya",
    primaryCta: "Prenota Terra Check Gratuito",
    secondaryCta: "Diagnosi tecnica preventiva gratuita",
    portalCta: "Demo Portale 360°",
    stats: [
      { value: "7", label: "Divisioni tecniche integrate" },
      { value: "< 2 h", label: "SLA di risposta emergenze" },
      { value: "360° + Drone", label: "Prova visiva ad ogni visita" },
      { value: "100% REPSE", label: "Fatturazione fiscale deducibile" },
    ],
  },
  values: {
    eyebrow: "PROPOSTA DI VALORE",
    title: "Un unico partner responsabile per mantenere impeccabile la tua proprietà",
    subtitle:
      "Il vero problema di un proprietario non è trovare un giardiniere, ma coordinare sette fornitori informali che non comunicano tra loro.",
    items: [
      {
        tag: "UNICO REFERENTE",
        title: "Un solo responsabile",
        desc: "Un Facility Director multilingue dedicato, una linea WhatsApp diretta e un'unica fattura mensile (MXN, USD o EUR).",
        icon: "UserCheck",
      },
      {
        tag: "TRASPARENZA TOTALE",
        title: "Prove 360°, foto e drone",
        desc: "Ogni intervento è documentato nell'App Terra Maya con confronto prima/dopo, tour 360° e ispezioni aeree con drone.",
        icon: "Camera",
      },
      {
        tag: "SLA GARANTITO",
        title: "Tempi di risposta garantiti",
        desc: "Emergenze entro 2–4 ore e manutenzione ordinaria in 24–48 ore. Penale a nostro carico in caso di mancato rispetto dello SLA.",
        icon: "Clock",
      },
      {
        tag: "SOSTENIBILITÀ",
        title: "Gestione eco-sostenibile",
        desc: "Controllo biologico dei parassiti, prodotti biodegradabili a bassa tossicità e paesaggistica nativa maya.",
        icon: "Leaf",
      },
    ],
  },
  pricing: {
    ...baseEn.pricing,
    eyebrow: "PIANI TERRA CARE & CALCOLATORE",
    title: "Prezzi trasparenti costruiti sul valore reale",
    subtitle:
      "Risparmia fino al 15% con una polizza mensile integrata. Accesso completo al Portale Clienti Terra Maya incluso.",
    calculator: {
      ...baseEn.pricing.calculator,
      title: "Calcolatore Personalizzato Terra Care",
      subtitle: "Configura superficie e caratteristiche della tua proprietà a Tulum, Playa del Carmen o Puerto Morelos.",
      summaryTitle: "Investimento Mensile Stimato",
      ctaButton: "Prenota Terra Check con questo preventivo",
    },
  },
  portal: {
    ...baseEn.portal,
    eyebrow: "APP TERRA MAYA · PORTALE CLIENTI",
    title: "Telemetria in Tempo Reale ed Evidenza Visiva Interattiva",
    subtitle:
      "Controlla lo stato del tuo immobile 24/7: piscina infinity, produzione solare, restauro prima/dopo e registro fotografico con crittografia TLS 1.3.",
    columns: {
      scheduled: "Programmato",
      inProgress: "In Corso",
      completed: "Completato",
    },
  },
  terraCheck: {
    ...baseEn.terraCheck,
    badge: "CORTESIA ISTITUZIONALE · DIAGNOSI INTEGRALE",
    title: "Richiedi Diagnosi Gratuita Terra Check",
    subtitle:
      "Valutiamo gratuitamente i punti critici (idraulica, impianti, legni tropicali, pareti in Chukum e coperture con fotocamera 360° e drone) entro 48 ore.",
    fields: {
      ...baseEn.terraCheck.fields,
      name: "Nome e Cognome",
      email: "Indirizzo Email",
      phone: "Numero WhatsApp (con prefisso)",
      location: "Posizione della Proprietà",
      segment: "Tipologia di Immobile",
      notes: "Qual è la tua priorità principale?",
      submit: "Conferma Terra Check Gratuito",
      submitting: "Invio in corso...",
    },
    success: {
      title: "Richiesta Terra Check ricevuta!",
      desc: "Un nostro ingegnere multilingue ti contatterà su WhatsApp entro 15 minuti per confermare data e ora della diagnosi tecnica integrale.",
      reset: "Invia un'altra richiesta",
    },
  },
  reviews: {
    ...baseEn.reviews,
    eyebrow: "RECENSIONI VERIFICATE SU GOOGLE MAPS",
    title: "Le Opinioni dei Nostri Clienti",
    subtitle:
      "Esperienze di proprietari di ville, amministratori condominiali e direttori di boutique hotel a Playa del Carmen, Tulum e Riviera Maya.",
    ratingCount: "48 recensioni su Google Maps",
    ctaMaps: "Vedi su Google Maps",
  },
  legal: {
    privacyTitle: "Informativa sulla Privacy (LFPDPPP / GDPR)",
    termsTitle: "Termini e Condizioni di Servizio & SLA",
    cookiesTitle: "Cookie Policy (Conformità Google & Meta)",
    cookieBannerText:
      "Utilizziamo cookie propri e di terze parti (Google Analytics 4, Google Ads Consent Mode v2 e Meta Pixel) per migliorare l'esperienza utente e analizzare il traffico in conformità con GDPR e LFPDPPP.",
    acceptAll: "Accetta tutti",
    essentialOnly: "Solo essenziali",
  },
  footer: {
    tagline: "Preserviamo il patrimonio architettonico di Quintana Roo con ingegneria sostenibile.",
    rights: "Tutti i diritti riservati. Facility & Property Services in Riviera Maya.",
  },
};

export const dictionaries = {
  es: baseEs,
  en: baseEn,
  fr: baseFr,
  it: baseIt,
} as const;

export function getDictionary(lang: string) {
  if (lang === "en") return dictionaries.en;
  if (lang === "fr") return dictionaries.fr;
  if (lang === "it") return dictionaries.it;
  return dictionaries.es;
}
