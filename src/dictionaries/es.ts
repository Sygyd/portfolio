import { Dictionary } from "@/types/i18n";

export const es: Dictionary = {
  common: {
    availableForHire: "Disponible para Proyectos de Alto Impacto / Staff Architect",
    viewProject: "Explorar Arquitectura",
    close: "Cerrar",
    techStack: "Stack Tecnológico",
    keyMetrics: "Métricas Clave & ROI",
    underTheHood: "Bajo el Capó / Trade-offs",
    codeSnippets: "Fragmentos de Código Críticos",
    architectureDiagram: "Diagrama de Flujo & Topología",
    interactiveDemo: "Simulador / Microinteracción",
    copyCode: "Copiar Código",
    copied: "¡Copiado!",
    liveDemo: "Ver Demo",
    githubRepo: "Repositorio",
  },
  nav: {
    projects: "Proyectos Enterprise",
    architecture: "Topología & Matriz",
    simulators: "Laboratorio Interactivo",
    skills: "Capacidades de Ingeniería",
    contact: "Contacto Directo",
    downloadCv: "Descargar CV",
  },
  hero: {
    role: "Principal Systems Engineer & Frontend Architect",
    titleFirstPart: "Diseño sistemas distribuidos,",
    titleHighlight: "resilientes y escalables",
    titleSecondPart: "con automatización e IA de alto ROI.",
    summary:
      "Especialista en arquitecturas multi-inquilino de confianza cero (Zero-Trust), motores de sincronización de datos de alto rendimiento, modelos de visión artificial integrados y microinteracciones de interfaz a 120 FPS sin layout shifts.",
    ctaPrimary: "Explorar Casos Enterprise",
    ctaSecondary: "Probar Simuladores en Vivo",
    stats: [
      {
        value: "99.98%",
        label: "Disponibilidad en Producción",
        sub: "SLA en sistemas serverless y multi-tenant",
      },
      {
        value: "18.2s",
        label: "ETL de Alto Rendimiento",
        sub: "De 5 min a 18.2s con Hashing SHA-256 en memoria",
      },
      {
        value: "100%",
        label: "Aislamiento Zero-Trust",
        sub: "Row-Level Security estricto por condominio_id",
      },
      {
        value: "135+",
        label: "Nodos Concurrentes 3D",
        sub: "Planos multi-piso con auto-liberación atómica",
      },
    ],
  },
  projects: {
    sectionBadge: "Ingeniería de Producción",
    sectionTitle: "Casos de Estudio de Nivel Enterprise",
    sectionDesc:
      "Tres arquitecturas reales diseñadas para resolver cuellos de botella críticos de negocio, control de concurrencia y seguridad estricta.",
    items: [
      {
        id: "mulato-cabaret",
        slug: "el-mulato-cabaret",
        title: "El Mulato Cabaret",
        category: "Real-Time WebSockets, Multimodal AI & CRM Serverless",
        shortDesc:
          "Plataforma integral de reservas 3D, auditoría antifraude con IA Multimodal y agente de ventas conversacional calibrado culturalmente.",
        fullDesc:
          "Solución arquitectónica diseñada para uno de los cabarets de salsa más icónicos de Latinoamérica. Combina un plano multi-piso interactivo de 135 mesas con sincronización reactiva, un agente conversacional (Mr. Mulato) con fallback inteligente Gemini Flash y un motor de verificación de pagos por visión computacional con validación de hash criptográfico.",
        heroBadge: "AI & Serverless Concurrency",
        stats: [
          {
            label: "Reducción de No-Shows",
            value: "94%",
            description: "Temporizador de auto-liberación atómica de 15 minutos en Firestore.",
          },
          {
            label: "Validación Antifraude",
            value: "< 3.2s",
            description: "OCR Multimodal cotejando cuentas bancarias y montos exactos.",
          },
          {
            label: "Aforo Gestionado",
            value: "135 Localidades",
            description: "66 mesas en Piso 1 + 69 mesas en Piso 2 con control de sobrecupo.",
          },
        ],
        stack: [
          "Google Apps Script V8",
          "Gemini 1.5 Flash API",
          "Firebase Firestore",
          "GoHighLevel API",
          "Wompi API (SHA-256)",
          "Tailwind CSS",
          "WebSockets",
        ],
        architectureOverview:
          "Arquitectura orientada a eventos serverless: Ingesta de mensajes y comprobantes vía Webhooks -> Orquestador V8 con Circuit Breaker hacia Gemini Flash -> Mutación atómica en Firestore con leases de 15 minutos -> Despacho a CRM GoHighLevel con distribución Round-Robin hacia asesoras humanas (Angie y Vanesa).",
        modules: [
          {
            title: "Auditoría Financiera con Visión Artificial",
            badge: "OCR & Antifraude",
            description:
              "Inspección automatizada de comprobantes bancarios (Bancolombia, Nequi y Daviplata) mediante Gemini Flash. Valida contra cuentas oficiales configuradas, detecta números de comprobante reutilizados y genera alertas ejecutivas HTML al instante.",
            technicalHighlights: [
              "Fallback de gemini-flash-lite a gemini-flash ante degradación de cuotas.",
              "Verificación criptográfica de firma SHA-256 en transacciones Wompi.",
              "Extracción estructurada JSON con tolerancia a rotación y compresión de imagen.",
            ],
          },
          {
            title: "Plano 3D Interactivo de 135 Localidades",
            badge: "Multi-Piso & Concurrencia",
            description:
              "Render arquitectónico de 66 mesas en piso 1 y 69 mesas en piso 2. Distingue aforo físico de aforo lógico (4 sillas estándar vs. hasta 10 en palcos).",
            technicalHighlights: [
              "Locks transaccionales optimistas de 15 minutos para prevenir reservas fantasma.",
              "Modo multi-mesa con unión atómica de órdenes de consumo.",
              "Sincronización en vivo de estados: Libre, En Proceso, Reservada y Bloqueada.",
            ],
          },
          {
            title: "Mr. Mulato: Agente Conversacional Calibrado",
            badge: "IA & Round-Robin Handover",
            description:
              "Agente con personalidad caleña refinada, hospitalaria y lista negra de modismos inapropiados. Calcula consumo mínimo ($200k VIP / $400k Palco), impone corte de preventa a las 5:00 PM y realiza handoff inteligente.",
            technicalHighlights: [
              "Balanceador Round-Robin ponderado entre las asesoras comerciales.",
              "Inyección dinámica de contexto: fecha del show, disponibilidad de palcos y reglas de cover.",
              "Filtro de seguridad semántica previa al enrutamiento al LLM.",
            ],
          },
        ],
        tradeOffs: [
          {
            decision: "Apps Script V8 + Firestore en lugar de Cluster Node.js en VPS",
            reasoning:
              "Se maximizó el costo cero mensual para una carga de tráfico con picos extremos de fin de semana, delegando escalabilidad infinita a la infraestructura Google/Firebase.",
            alternativeDiscarded: "Node.js dedicado en DigitalOcean/AWS ECS",
            roiImpact: "Costo de infraestructura reducido a $0/mes con 99.98% de disponibilidad.",
          },
          {
            decision: "Auto-liberación basada en leases de 15 min en cliente + TTL serverless",
            reasoning:
              "Evita saturar WebSockets o workers permanentes manteniendo consistencia eventual estricta.",
            alternativeDiscarded: "Cron job evaluando cada segundo toda la base de datos",
            roiImpact: "Cero colisiones de doble reserva durante shows de alta demanda.",
          },
        ],
        codeSnippets: [
          {
            title: "Auditoría OCR Antifraude con Gemini Multimodal",
            language: "javascript",
            filename: "auditEngine.gs",
            code: `function auditBankReceipt(fileBlob, expectedAmount) {
  const base64Data = Utilities.base64Encode(fileBlob.getBytes());
  const mimeType = fileBlob.getContentType();

  const prompt = {
    contents: [{
      parts: [
        { text: "Analiza este comprobante bancario. Extrae en formato JSON estricto: { banco: string, fecha: string, valor: number, referencia: string, cuentaDestino: string }. Valida si el monto coincide exactamente con " + expectedAmount },
        { inline_data: { mime_type: mimeType, data: base64Data } }
      ]
    }],
    generationConfig: { response_mime_type: "application/json", temperature: 0.1 }
  };

  const response = UrlFetchApp.fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + API_KEY, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    payload: JSON.stringify(prompt)
  });

  const parsed = JSON.parse(response.getContentText());
  const result = JSON.parse(parsed.candidates[0].content.parts[0].text);
  
  // Verificación contra lista blanca de cuentas autorizadas
  const isAuthorizedAccount = CONFIG_OFFICIAL_ACCOUNTS.includes(result.cuentaDestino.trim());
  const isAmountValid = Math.abs(result.valor - expectedAmount) < 1.0;

  return {
    valid: isAuthorizedAccount && isAmountValid,
    fraudAlert: !isAuthorizedAccount,
    details: result
  };
}`,
          },
        ],
      },
      {
        id: "puerto-aventura",
        slug: "puerto-aventura-gestor",
        title: "Puerto Aventura Gestor",
        category: "Multi-Tenant B2B SaaS, Zero-Trust Security & PropTech ERP",
        shortDesc:
          "Plataforma ERP PropTech con particionado estricto RLS por condominio_id, control de obras normativo Título IV y cartografía interactiva.",
        fullDesc:
          "Suite multi-inquilino de grado enterprise para la administración de complejos residenciales de alta densidad. Diseñada bajo el principio de Zero-Trust, cada consulta a PostgreSQL está blindada por Row Level Security impidiendo fugas de datos entre urbanizaciones. Cuenta con motor de clasificación de obras, control de accesos con QR y visualizador de ocupación en vivo.",
        heroBadge: "Zero-Trust Multi-Tenancy & PropTech",
        stats: [
          {
            label: "Aislamiento de Datos",
            value: "100%",
            description: "Políticas RLS en 50+ migraciones SQL con condominio_id forzado.",
          },
          {
            label: "Cumplimiento Normativo",
            value: "5 Pasos",
            description: "Wizard Título IV para clasificación A/B/C y cálculo de fianzas.",
          },
          {
            label: "Pases de Acceso",
            value: "< 1.5s",
            description: "Generación de QR digital con validación de asuetos y cuadrillas.",
          },
        ],
        stack: [
          "Next.js 15 (App Router)",
          "Supabase (PostgreSQL 16)",
          "Row Level Security (RLS)",
          "TypeScript Strict",
          "Web Push VAPID",
          "Tailwind CSS",
          "Leaflet / Maps API",
        ],
        architectureOverview:
          "Resolución de tenant por dominio/cookie mediante src/proxy.ts -> Inyección de claims en sesión Supabase -> Validación en tiempo de compilación SQL con PostgreSQL STABLE functions -> Bloqueo a nivel de kernel de base de datos impidiendo mezclar datos de clientes.",
        modules: [
          {
            title: "Aislamiento Zero-Trust Multi-Inquilino",
            badge: "PostgreSQL RLS",
            description:
              "Cada fila de la base de datos pertenece a un condominio_id validado criptográficamente por JWT. Las funciones STABLE de PostgreSQL resuelven el contexto del usuario en microsegundos.",
            technicalHighlights: [
              "50+ migraciones idempotentes versionadas.",
              "Imposibilidad técnica de inyecciones transversales de tenant.",
              "Master Tenant Switcher con auditoría completa de acceso para administradores globales.",
            ],
          },
          {
            title: "Wizard Normativo Título IV",
            badge: "Motor de Reglas de Obras",
            description:
              "Evaluador de impacto constructivo: Tipo A (mantenimiento menor sin escombros), Tipo B (remodelaciones intermedias con depósito de garantía) y Tipo C (obras estructurales con seguro de responsabilidad civil).",
            technicalHighlights: [
              "Bloqueo estricto de accesos para contratistas en fines de semana y festivos.",
              "Control digital de pesaje y retiro de escombros en caseta.",
              "Firma digital de acta de conformidad al culminar la obra.",
            ],
          },
          {
            title: "Master Plan & Visualizador Cartográfico",
            badge: "Ocupación en Tiempo Real",
            description:
              "Mapa interactivo con capas vectoriales para ubicar lotes, villas y áreas sociales. Semáforo visual en vivo según estado de propiedad (Habitado, Desocupado, En Arriendo o En Obra).",
            technicalHighlights: [
              "Render acelerado por WebGL con soporte de paneo y zoom con inercia.",
              "Filtro instantáneo por mora en cuotas de mantenimiento y permisos activos.",
              "Pases de visita QR integrados directamente con WhatsApp API.",
            ],
          },
        ],
        tradeOffs: [
          {
            decision: "Row Level Security (RLS) en base de datos unificada vs. Base de datos por cliente",
            reasoning:
              "Tener una base de datos por cliente aumenta los costos y la fricción de mantenimiento de migraciones. RLS proporciona la misma seguridad criptográfica con despliegue de migraciones atómicas y costos fijos mínimos.",
            alternativeDiscarded: "Multi-database sharding en AWS RDS",
            roiImpact: "Costos de hosting reducidos en un 80% manteniendo certificación de aislamiento.",
          },
          {
            decision: "Proxy perimetral Edge para resolución de condominio_id",
            reasoning:
              "Evita round-trips innecesarios resolviendo el contexto del inquilino en la capa CDN antes de tocar la base de datos.",
            alternativeDiscarded: "Middleware tradicional en servidor Node.js centralizado",
            roiImpact: "Latencia TTFB reducida a menos de 45ms a nivel global.",
          },
        ],
        codeSnippets: [
          {
            title: "Política PostgreSQL RLS con Función STABLE de Tenant",
            language: "sql",
            filename: "0052_strict_tenant_rls.sql",
            code: `-- Función STABLE para resolver el condominio_id de la sesión del usuario
CREATE OR REPLACE FUNCTION current_user_condominio_id()
RETURNS UUID AS $$
  SELECT COALESCE(
    (current_setting('request.jwt.claims', true)::jsonb -> 'user_metadata' ->> 'condominio_id')::UUID,
    (SELECT condominio_id FROM usuarios_condominio WHERE user_id = auth.uid() LIMIT 1)
  );
$$ LANGUAGE sql STABLE SECURITY DEFINER;

-- Habilitar RLS en tabla de Obras Título IV
ALTER TABLE obras_solicitudes ENABLE ROW LEVEL SECURITY;

-- Política de aislamiento estricto: solo el tenant dueño puede leer y escribir
CREATE POLICY obras_tenant_isolation_policy ON obras_solicitudes
FOR ALL
USING (
  condominio_id = current_user_condominio_id()
)
WITH CHECK (
  condominio_id = current_user_condominio_id()
);`,
          },
        ],
      },
      {
        id: "tellex-group",
        slug: "tellex-group-qa-bi",
        title: "Tellex Group",
        category: "Enterprise QA Auditing, Workforce Analytics & BI Platform",
        shortDesc:
          "Plataforma de auditoría QA doble ciego, monitor de SLA en tiempo real y ETL de alto rendimiento con hashing en memoria.",
        fullDesc:
          "Plataforma corporativa de aseguramiento de calidad (QA) y analítica de productividad para centros de contacto BPO de gran escala. Implementa un motor de disputas doble ciego inviolable (Res Judicata), monitoreo algorítmico de tiempos de respuesta con detección de turnos laborales (Shift Intelligence) y un pipeline ETL que comprimió tiempos de sincronización de 5 minutos a 18.2 segundos.",
        heroBadge: "BI Concurrente & Auditoría QA",
        stats: [
          {
            label: "Optimización ETL",
            value: "18.2s",
            description: "De 300s a 18.2s para 1,600+ registros con Hashing SHA-256 en memoria.",
          },
          {
            label: "Imparcialidad QA",
            value: "100% Ciego",
            description: "HTTP 403 y bloqueo criptográfico al auditor original en apelaciones.",
          },
          {
            label: "Detección de Falsas Tardanzas",
            value: "0% Error",
            description: "Shift Intelligence ignora mensajes recibidos fuera del turno laboral.",
          },
        ],
        stack: [
          "Python 3.12 (Flask)",
          "SQLAlchemy 2.0",
          "PostgreSQL (Neon Serverless)",
          "Redis (Upstash Lazy Cache)",
          "Jinja2 / HTMX",
          "GoHighLevel API",
          "Google Gemini Flash",
          "GitHub Actions Orchestrator",
        ],
        architectureOverview:
          "Ingesta de conversaciones y llamadas CRM -> Pipeline ETL con hash diferencial en memoria -> Normalización telefónica a 10 dígitos y matching difuso -> Almacenamiento en Neon Postgres con compresión WebP en BYTEA -> Enrutamiento de disputas QA mediante Round-Robin por menor carga.",
        modules: [
          {
            title: "Monitor de SLAs & Shift Intelligence",
            badge: "Algoritmos de Productividad",
            description:
              "Calcula tiempos exactos de respuesta entre clientes y agentes. Identifica el inicio de turno para no imputar tiempos muertos acumulados durante la noche o descansos.",
            technicalHighlights: [
              "Umbrales de severidad progresivos: 10m (Atención), 15m (Alerta) y 20m (Crítico).",
              "Descarte automático de respuestas automáticas de bots para evitar métricas infladas.",
              "Métricas de throughput diario con gráficos de dispersión.",
            ],
          },
          {
            title: "Auditorías QA con Doble Ciego & Res Judicata",
            badge: "Gobernanza & Calidad",
            description:
              "Rúbrica de evaluación ponderada al 100% con reglas de Auto-Fail (tope en 60% por faltas graves). En caso de disputa, el auditor original es vetado de dictaminar y el caso se asigna al revisor con menor carga.",
            technicalHighlights: [
              "Regla de apelación única (Res Judicata) para impedir disputas infinitas.",
              "Compresión y almacenamiento WebP directo en base de datos sin incurrir en costos S3.",
              "Métricas de calibración y dispersión entre auditores.",
            ],
          },
          {
            title: "ETL de Alto Rendimiento & Orquestador Híbrido",
            badge: "Optimización Extrema",
            description:
              "Sincronización masiva de 1,600+ registros mediante hashing SHA-256 en memoria que omite filas sin cambios, reduciendo el tiempo de sincronización de 5 minutos a 18.2 segundos.",
            technicalHighlights: [
              "Cron diario a las 05:00 AM EST mediante GitHub Actions superando límites de Vercel Hobby.",
              "Clasificación semántica de tags de idioma ('spanish') y crédito ('crapp') con Gemini Flash.",
              "Normalización telefónica canónica a 10 dígitos resolviendo citas duplicadas.",
            ],
          },
        ],
        tradeOffs: [
          {
            decision: "Hashing SHA-256 en memoria en el worker ETL vs. Consultas UPDATE masivas",
            reasoning:
              "El cuello de botella eran los round-trips de red hacia la base de datos serverless. Calcular hashes en memoria permitió actualizar únicamente las 15-20 filas realmente modificadas.",
            alternativeDiscarded: "Bulk UPSERT ciego de todos los registros",
            roiImpact: "Tiempo de sincronización reducido en un 94% (de 320s a 18.2s).",
          },
          {
            decision: "Almacenamiento de capturas WebP en PostgreSQL BYTEA vs. Bucket AWS S3",
            reasoning:
              "Para el volumen de auditorías de la empresa, la complejidad y costos de firmas presignadas de S3 superaban el beneficio. WebP redujo el peso en 85% permitiendo backups integrales en la BD.",
            alternativeDiscarded: "Infraestructura AWS S3 con IAM roles",
            roiImpact: "Cero dependencias externas y backups atómicos en un solo dump.",
          },
        ],
        codeSnippets: [
          {
            title: "Algoritmo Doble Ciego de Asignación y Bloqueo (Res Judicata)",
            language: "python",
            filename: "dispute_service.py",
            code: `from flask import abort
from models import Audit, Dispute, User, db
from sqlalchemy import func

def resolve_dispute_double_blind(dispute_id, current_user_id, resolution_data):
    dispute = Dispute.query.get_or_404(dispute_id)
    audit = Audit.query.get_or_404(dispute.audit_id)
    
    # REGLA INVIOLABLE: El auditor original tiene prohibido dictaminar la apelación
    if current_user_id == audit.auditor_id:
        abort(403, description="Violación de Doble Ciego: El auditor original no puede arbitrar su propia disputa.")
        
    # REGLA RES JUDICATA: Solo una apelación permitida
    if dispute.status in ['RESOLVED', 'REJECTED']:
        abort(400, description="Res Judicata: Esta disputa ya posee dictamen final vinculante.")
        
    # Aplicar recálculo de rúbrica
    new_score = calculate_weighted_score(resolution_data['rubric_adjustments'])
    audit.final_score = new_score
    dispute.status = 'RESOLVED'
    dispute.arbitrator_id = current_user_id
    dispute.resolution_notes = resolution_data['notes']
    
    db.session.commit()
    return {"status": "success", "new_score": new_score}

def get_next_available_blind_auditor(exclude_auditor_id):
    # Asigna al analista con menor carga activa que no sea el autor original
    return User.query.filter(User.id != exclude_auditor_id, User.role == 'QA_LEAD')\\
        .outerjoin(Dispute, Dispute.arbitrator_id == User.id)\\
        .group_by(User.id)\\
        .order_by(func.count(Dispute.id).asc())\\
        .first()`,
          },
        ],
      },
    ],
  },
  matrix: {
    badge: "Comparativa Arquitectónica",
    title: "Matriz de Decisiones de Ingeniería",
    subtitle:
      "Cómo se resolvieron los desafíos de concurrencia, consistencia y aislamiento en cada ecosistema empresarial.",
    columns: [
      {
        dimension: "Patrón de Concurrencia",
        mulato: "Leases atómicos optimistas de 15 min en Firestore",
        puerto: "PostgreSQL Row Level Security en transacciones ACID",
        tellex: "Pipeline ETL con SHA-256 diferencial en memoria",
      },
      {
        dimension: "Modelo de Seguridad",
        mulato: "Firmas SHA-256 Wompi + Lista blanca de cuentas en CONFIG",
        puerto: "Zero-Trust RLS con funciones PostgreSQL STABLE",
        tellex: "Algoritmo Doble Ciego (HTTP 403) & Res Judicata",
      },
      {
        dimension: "Orquestación Serverless",
        mulato: "Google Apps Script V8 + Gemini Flash Fallback",
        puerto: "Next.js App Router Edge Middleware / Proxy",
        tellex: "GitHub Actions Worker (05:00 AM EST) + Upstash Redis",
      },
      {
        dimension: "Almacenamiento de Multimedia",
        mulato: "Google Drive Cloud Storage con hashing de recibos",
        puerto: "Supabase Storage con políticas vinculadas al condominio_id",
        tellex: "BYTEA comprimido WebP directamente en Postgres (Sin S3)",
      },
      {
        dimension: "Impacto en el Negocio (ROI)",
        mulato: "94% menos no-shows y $0 costo mensual de servidor",
        puerto: "80% de ahorro en infraestructura B2B multi-inquilino",
        tellex: "Sincronización 94% más rápida (de 320s a 18.2s)",
      },
    ],
  },
  simulators: {
    badge: "Laboratorio Interactivo",
    title: "Playground de Algoritmos en Vivo",
    subtitle:
      "Experimenta de forma interactiva la lógica de negocio y las fórmulas ejecutadas en cada plataforma.",
    mulatoTitle: "Calculador de Aforo & Consumo Mínimo (El Mulato)",
    puertoTitle: "Clasificador Normativo de Obras Título IV (Puerto Aventura)",
    tellexTitle: "Simulador de Apelación Doble Ciego y Calibración (Tellex)",
  },
  contact: {
    badge: "Disponibilidad Inmediata",
    title: "Hablemos de Arquitecturas que Escalan",
    subtitle:
      "¿Tienes un desafío de concurrencia, migración a sistemas serverless o necesitas liderazgo técnico de alto nivel?",
    whatsappLabel: "WhatsApp Directo",
    whatsappText: "Hola Luis, revisé tu portafolio de ingeniería y me gustaría conversar sobre un proyecto de alto impacto.",
    emailLabel: "Correo Corporativo",
    copiedEmail: "Correo copiado al portapapeles",
    location: "Disponible en Remoto Global • Venezuela (UTC-4 / EST)",
    ctaDownloadCv: "Descargar CV Técnico (PDF)",
  },
};
