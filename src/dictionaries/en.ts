import { Dictionary } from "@/types/i18n";

export const en: Dictionary = {
  common: {
    availableForHire: "Available for High-Impact Roles / Staff Architect",
    viewProject: "Explore Architecture",
    close: "Close",
    techStack: "Tech Stack",
    keyMetrics: "Key Metrics & ROI",
    underTheHood: "Under the Hood / Trade-offs",
    codeSnippets: "Critical Code Snippets",
    architectureDiagram: "Flow Diagram & Topology",
    interactiveDemo: "Interactive Simulator",
    copyCode: "Copy Code",
    copied: "Copied!",
    liveDemo: "Live Demo",
    githubRepo: "Repository",
  },
  nav: {
    projects: "Enterprise Projects",
    architecture: "Topology & Matrix",
    simulators: "Interactive Lab",
    skills: "Engineering Capabilities",
    contact: "Direct Contact",
    downloadCv: "Download Resume",
  },
  hero: {
    role: "Principal Systems Engineer & Frontend Architect",
    titleFirstPart: "Engineering distributed,",
    titleHighlight: "resilient & scalable systems",
    titleSecondPart: "with high-ROI automation & AI.",
    summary:
      "Specialized in Zero-Trust multi-tenant architectures, ultra-fast data synchronization engines, multimodal computer vision integration, and buttery-smooth 120 FPS interfaces with zero layout shifts.",
    ctaPrimary: "Explore Enterprise Cases",
    ctaSecondary: "Run Live Simulators",
    stats: [
      {
        value: "99.98%",
        label: "Production Availability",
        sub: "SLA across serverless & multi-tenant fleets",
      },
      {
        value: "18.2s",
        label: "High-Throughput ETL",
        sub: "From 5 mins to 18.2s via in-memory SHA-256 diffing",
      },
      {
        value: "100%",
        label: "Zero-Trust Isolation",
        sub: "Strict Row-Level Security partitioned by condo_id",
      },
      {
        value: "135+",
        label: "3D Concurrent Nodes",
        sub: "Multi-floor plans with 15-min atomic lease releases",
      },
    ],
  },
  projects: {
    sectionBadge: "Production Engineering",
    sectionTitle: "Enterprise-Grade Case Studies",
    sectionDesc:
      "Three real-world architectures engineered to solve critical business bottlenecks, concurrency challenges, and strict security requirements.",
    items: [
      {
        id: "mulato-cabaret",
        slug: "el-mulato-cabaret",
        title: "El Mulato Cabaret",
        category: "Real-Time WebSockets, Multimodal AI & CRM Serverless",
        shortDesc:
          "Full-scale 3D reservation platform, computer vision anti-fraud auditing, and culturally calibrated conversational AI sales agent.",
        fullDesc:
          "End-to-end architectural overhaul for one of Latin America's premier salsa cabarets. Integrates an interactive 135-seat multi-floor layout with reactive state synchronization, an autonomous AI sales agent (Mr. Mulato) with Gemini Flash fallback, and an automated payment validation engine powered by multimodal vision with cryptographic verification.",
        heroBadge: "AI & Serverless Concurrency",
        stats: [
          {
            label: "No-Show Reduction",
            value: "94%",
            description: "15-minute optimistic lease auto-release in Firestore.",
          },
          {
            label: "Anti-Fraud Audit Speed",
            value: "< 3.2s",
            description: "Multimodal OCR cross-referencing bank numbers and exact totals.",
          },
          {
            label: "Capacity Handled",
            value: "135 Locations",
            description: "66 tables on Floor 1 + 69 tables on Floor 2 with soft/hard caps.",
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
          "Serverless event-driven architecture: Inbound messaging/receipt webhooks -> V8 orchestrator with Circuit Breaker to Gemini Flash -> Atomic Firestore mutations with 15-min lease locks -> CRM dispatch via GoHighLevel using weighted Round-Robin among human agents (Angie & Vanesa).",
        modules: [
          {
            title: "Financial Audit via Multimodal Computer Vision",
            badge: "OCR & Anti-Fraud",
            description:
              "Automated inspection of bank transfer vouchers (Bancolombia, Nequi, Daviplata) via Gemini Flash. Validates against official accounts, detects duplicated receipts, and triggers instant executive HTML alerts.",
            technicalHighlights: [
              "Automatic fallback from gemini-flash-lite to gemini-flash under quota constraints.",
              "Cryptographic SHA-256 signature verification for Wompi payment gateway.",
              "Structured JSON extraction with rotation and lossy compression resilience.",
            ],
          },
          {
            title: "135-Seat Interactive 3D Architectural Map",
            badge: "Multi-Floor & Concurrency",
            description:
              "Vectorized multi-floor layout spanning 66 tables on Floor 1 and 69 on Floor 2. Decouples physical seating capacity from logical reservation limits (4 seats vs up to 10 in VIP booths).",
            technicalHighlights: [
              "Optimistic 15-minute transactional leases eliminating ghost reservations.",
              "Atomic multi-table grouping for joint dining tabs.",
              "Real-time state broadcast: Available, In-Progress, Booked, and Locked.",
            ],
          },
          {
            title: "Mr. Mulato: Culturally Calibrated Conversational Agent",
            badge: "AI & Round-Robin Handover",
            description:
              "Trained on genuine hospitable salsa-culture etiquette with strict negative prompt blocklists. Dynamically calculates minimum consumption ($200k VIP / $400k Booth), executes 5:00 PM presale cutoffs, and initiates graceful human handover.",
            technicalHighlights: [
              "Weighted Round-Robin load balancer between on-shift human advisors.",
              "Dynamic prompt hydration: show date, booth status, and minimum tabs.",
              "Pre-flight semantic boundary firewall prior to LLM submission.",
            ],
          },
        ],
        tradeOffs: [
          {
            decision: "Apps Script V8 + Firestore over Dedicated Node.js VPS Cluster",
            reasoning:
              "Achieved zero recurring monthly infrastructure costs for spiky weekend night traffic, offloading unlimited scaling to Google/Firebase backbones.",
            alternativeDiscarded: "Dedicated Node.js on DigitalOcean/AWS ECS",
            roiImpact: "Infrastructure hosting costs reduced to $0/mo with 99.98% uptime.",
          },
          {
            decision: "15-minute lease model on client + serverless TTL",
            reasoning:
              "Eliminates continuous WebSocket polling and heavy background cron jobs while guaranteeing eventual consistency.",
            alternativeDiscarded: "Full-table polling worker running every second",
            roiImpact: "Zero double-booking incidents recorded during peak demand releases.",
          },
        ],
        codeSnippets: [
          {
            title: "Anti-Fraud Multimodal OCR Audit with Gemini",
            language: "javascript",
            filename: "auditEngine.gs",
            code: `function auditBankReceipt(fileBlob, expectedAmount) {
  const base64Data = Utilities.base64Encode(fileBlob.getBytes());
  const mimeType = fileBlob.getContentType();

  const prompt = {
    contents: [{
      parts: [
        { text: "Analyze this bank receipt voucher. Extract strict JSON: { bank: string, date: string, amount: number, reference: string, recipientAccount: string }. Verify if amount matches " + expectedAmount },
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
  
  // Whitelist cross-reference against authorized company accounts
  const isAuthorizedAccount = CONFIG_OFFICIAL_ACCOUNTS.includes(result.recipientAccount.trim());
  const isAmountValid = Math.abs(result.amount - expectedAmount) < 1.0;

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
          "PropTech ERP platform with strict RLS partitioning by condominium_id, Title IV construction compliance wizard, and interactive cartography.",
        fullDesc:
          "Enterprise multi-tenant suite for high-density luxury residential management. Built upon Zero-Trust principles, every PostgreSQL query is enforced at the database engine level via Row Level Security to prevent cross-tenant data leaks. Features automated construction permit grading, real-time QR security passes, and an interactive GIS master plan.",
        heroBadge: "Zero-Trust Multi-Tenancy & PropTech",
        stats: [
          {
            label: "Data Isolation",
            value: "100%",
            description: "Enforced RLS across 50+ migrations with mandatory condominium_id.",
          },
          {
            label: "Regulatory Compliance",
            value: "5 Steps",
            description: "Title IV wizard for Type A/B/C classification & security bond calculation.",
          },
          {
            label: "Gate QR Dispatch",
            value: "< 1.5s",
            description: "Instant QR generation with weekend and holiday contractor restrictions.",
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
          "Tenant resolution via subdomain/cookie in src/proxy.ts -> Claims hydration inside Supabase session -> Compile-time SQL authorization using PostgreSQL STABLE functions -> Engine-level isolation preventing cross-tenant leakage.",
        modules: [
          {
            title: "Zero-Trust Multi-Tenant Isolation",
            badge: "PostgreSQL RLS",
            description:
              "Every row belongs to a condominium_id cryptographically validated via JWT. PostgreSQL STABLE functions resolve tenant context in microseconds with indexed execution plans.",
            technicalHighlights: [
              "50+ versioned, fully idempotent SQL migrations.",
              "Zero mathematical possibility of cross-tenant data bleed.",
              "Master Tenant Switcher with tamper-proof audit trails for superadmins.",
            ],
          },
          {
            title: "Title IV Construction Compliance Wizard",
            badge: "Permit Evaluation Engine",
            description:
              "Impact-based permit evaluator: Type A (minor touchups, zero rubble), Type B (medium refurbishment with required warranty deposit), and Type C (structural work requiring civil liability insurance).",
            technicalHighlights: [
              "Enforced calendar lockouts preventing contractor entry on weekends & holidays.",
              "Gatekeeper weight audit and disposal verification for debris.",
              "Digital completion sign-off document with cryptographic timestamp.",
            ],
          },
          {
            title: "Master Plan & Live Cartography Visualizer",
            badge: "Real-Time Occupancy GIS",
            description:
              "Interactive vector map displaying parcels, villas, and amenities. Color-coded live occupancy status (Owner Occupied, Vacant, Leased, or Under Construction).",
            technicalHighlights: [
              "WebGL accelerated panning and inertial zoom.",
              "Instant filtering by HOA fee delinquencies and active permits.",
              "WhatsApp-ready QR gate pass generator for scheduled guests.",
            ],
          },
        ],
        tradeOffs: [
          {
            decision: "Unified Database with Row Level Security (RLS) vs Database-Per-Tenant",
            reasoning:
              "Database-per-tenant introduces massive maintenance friction and high provisioning overhead. RLS provides the identical cryptographic boundary while enabling unified atomic migrations and lower baseline cost.",
            alternativeDiscarded: "Multi-database sharding on AWS RDS",
            roiImpact: "Hosting overhead slashed by 80% with enterprise security compliance intact.",
          },
          {
            decision: "Edge Proxy Routing for condominium_id resolution",
            reasoning:
              "Eliminates multiple roundtrips by resolving tenant context at the edge CDN tier prior to querying core storage.",
            alternativeDiscarded: "Centralized Node.js express middleware router",
            roiImpact: "Sub-45ms TTFB achieved globally.",
          },
        ],
        codeSnippets: [
          {
            title: "PostgreSQL RLS Policy with STABLE Context Resolver",
            language: "sql",
            filename: "0052_strict_tenant_rls.sql",
            code: `-- STABLE function resolving current session condominium_id
CREATE OR REPLACE FUNCTION current_user_condominio_id()
RETURNS UUID AS $$
  SELECT COALESCE(
    (current_setting('request.jwt.claims', true)::jsonb -> 'user_metadata' ->> 'condominio_id')::UUID,
    (SELECT condominio_id FROM usuarios_condominio WHERE user_id = auth.uid() LIMIT 1)
  );
$$ LANGUAGE sql STABLE SECURITY DEFINER;

-- Enforce RLS on Title IV permits table
ALTER TABLE obras_solicitudes ENABLE ROW LEVEL SECURITY;

-- Strict tenant isolation policy
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
          "Double-blind QA auditing platform, real-time SLA monitors, and high-throughput differential ETL with in-memory hashing.",
        fullDesc:
          "Corporate quality assurance (QA) and agent productivity analytics platform for enterprise BPO contact centers. Features a tamper-proof double-blind dispute arbitration system (Res Judicata), shift-aware SLA response tracking (Shift Intelligence), and an ultra-optimized ETL pipeline cutting sync times from 5 minutes to 18.2 seconds.",
        heroBadge: "Concurrent BI & QA Auditing",
        stats: [
          {
            label: "ETL Performance",
            value: "18.2s",
            description: "From 300s to 18.2s for 1,600+ records via in-memory SHA-256 diffing.",
          },
          {
            label: "QA Impartiality",
            value: "100% Blind",
            description: "HTTP 403 & cryptographic block preventing original auditor self-review.",
          },
          {
            label: "False Tardiness Errors",
            value: "0% Error",
            description: "Shift Intelligence ignores messages arriving outside scheduled working hours.",
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
          "Conversation & call CRM ingestion -> In-memory SHA-256 differential ETL pipeline -> E.164 10-digit phone normalization & fuzzy deduplication -> Neon Postgres storage with WebP byte compression -> Weighted Round-Robin dispute assignment to unburdened QA leads.",
        modules: [
          {
            title: "SLA Response Monitor & Shift Intelligence",
            badge: "Productivity Algorithms",
            description:
              "Tracks response latencies between clients and support agents. Detects true shift clock-in to avoid penalizing agents for nocturnal incoming queues.",
            technicalHighlights: [
              "Tiered severity escalations: 10m (Notice), 15m (Warning), and 20m (Critical).",
              "Automated bot-response filtering to prevent artificial metrics inflation.",
              "Daily agent throughput analysis with distribution scatter plots.",
            ],
          },
          {
            title: "Double-Blind QA Audits & Res Judicata",
            badge: "Governance & Impartiality",
            description:
              "100-point weighted evaluation rubrics with hard Auto-Fail triggers (capped at 60%). Upon dispute, the original evaluator is cryptographically barred and reassigned to the least busy auditor.",
            technicalHighlights: [
              "Res Judicata single-appeal doctrine ensuring finalized, legally binding QA scoring.",
              "Direct WebP image compression stored within PostgreSQL BYTEA without S3 costs.",
              "Auditor variance calibration and scoring consistency analytics.",
            ],
          },
          {
            title: "High-Throughput ETL & Hybrid Orchestrator",
            badge: "Extreme Optimization",
            description:
              "Massive data sync of 1,600+ contacts via in-memory SHA-256 row diffing that discards unchanged rows, dropping execution times from 5 minutes down to 18.2 seconds.",
            technicalHighlights: [
              "Daily scheduled execution at 05:00 AM EST via GitHub Actions bypassing Vercel limits.",
              "Semantic tagging of language ('spanish') and credit intent ('crapp') via Gemini Flash.",
              "Standardized 10-digit telephone deduplication solving lost appointment records.",
            ],
          },
        ],
        tradeOffs: [
          {
            decision: "In-Memory SHA-256 Row Diffing vs Massive Direct UPDATE queries",
            reasoning:
              "The critical bottleneck was network roundtrips over serverless database connections. Computing hashes in worker memory allowed updating only the 15-20 rows with true diffs.",
            alternativeDiscarded: "Blind bulk UPSERT of full tables",
            roiImpact: "Data sync time reduced by 94% (from 320s to 18.2s).",
          },
          {
            decision: "WebP Byte Storage in PostgreSQL BYTEA vs AWS S3 Buckets",
            reasoning:
              "For the company's audit image scale, S3 presigned URLs added unnecessary IAM architectural complexity. WebP compressed payloads by 85%, fitting cleanly inside atomic database dumps.",
            alternativeDiscarded: "AWS S3 infrastructure with IAM presigned access",
            roiImpact: "Zero external cloud dependencies and fully atomic one-dump disaster recovery.",
          },
        ],
        codeSnippets: [
          {
            title: "Double-Blind QA Reassignment & Locking (Res Judicata)",
            language: "python",
            filename: "dispute_service.py",
            code: `from flask import abort
from models import Audit, Dispute, User, db
from sqlalchemy import func

def resolve_dispute_double_blind(dispute_id, current_user_id, resolution_data):
    dispute = Dispute.query.get_or_404(dispute_id)
    audit = Audit.query.get_or_404(dispute.audit_id)
    
    # HARD RULE: Original auditor is forbidden from arbitrating their own dispute
    if current_user_id == audit.auditor_id:
        abort(403, description="Double-Blind Violation: The original auditor cannot judge this appeal.")
        
    # RES JUDICATA RULE: Only one appeal permitted per audit
    if dispute.status in ['RESOLVED', 'REJECTED']:
        abort(400, description="Res Judicata: This dispute already holds a binding final resolution.")
        
    # Execute rubric score recalculation
    new_score = calculate_weighted_score(resolution_data['rubric_adjustments'])
    audit.final_score = new_score
    dispute.status = 'RESOLVED'
    dispute.arbitrator_id = current_user_id
    dispute.resolution_notes = resolution_data['notes']
    
    db.session.commit()
    return {"status": "success", "new_score": new_score}

def get_next_available_blind_auditor(exclude_auditor_id):
    # Select least busy QA lead excluding the original auditor
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
    badge: "Architectural Comparison",
    title: "Engineering Decision Matrix",
    subtitle:
      "A breakdown of how concurrency, consistency, and isolation challenges were handled across all three enterprise systems.",
    columns: [
      {
        dimension: "Concurrency Pattern",
        mulato: "Optimistic 15-min atomic leases in Firestore",
        puerto: "PostgreSQL Row Level Security inside ACID transactions",
        tellex: "Differential ETL pipeline with in-memory SHA-256",
      },
      {
        dimension: "Security Model",
        mulato: "Wompi SHA-256 signatures + CONFIG account whitelist",
        puerto: "Zero-Trust RLS enforced via STABLE PostgreSQL functions",
        tellex: "Double-Blind algorithm (HTTP 403) & Res Judicata",
      },
      {
        dimension: "Serverless Orchestration",
        mulato: "Google Apps Script V8 + Gemini Flash Fallback",
        puerto: "Next.js App Router Edge Middleware / Proxy",
        tellex: "GitHub Actions Worker (05:00 AM EST) + Upstash Redis",
      },
      {
        dimension: "Media & Blob Storage",
        mulato: "Google Drive Cloud Storage with receipt hashing",
        puerto: "Supabase Storage with policies linked to condominium_id",
        tellex: "PostgreSQL BYTEA with native WebP compression (Zero S3)",
      },
      {
        dimension: "Business Impact (ROI)",
        mulato: "94% fewer no-shows & $0 recurring server expense",
        puerto: "80% B2B multi-tenant cloud cost reduction",
        tellex: "94% faster synchronization (from 320s to 18.2s)",
      },
    ],
  },
  simulators: {
    badge: "Interactive Lab",
    title: "Live Algorithm Playground",
    subtitle:
      "Interact with the core business formulas and algorithmic logic that drive these production systems.",
    mulatoTitle: "Capacity & Minimum Tab Calculator (El Mulato)",
    puertoTitle: "Title IV Construction Permitting Classifier (Puerto Aventura)",
    tellexTitle: "Double-Blind Appeal & Res Judicata Simulator (Tellex)",
  },
  contact: {
    badge: "Immediate Availability",
    title: "Let's Engineer Systems That Scale",
    subtitle:
      "Facing concurrency bottlenecks, multi-tenant migrations, or in need of staff-level engineering leadership?",
    whatsappLabel: "Direct WhatsApp",
    whatsappText: "Hi Luis, I reviewed your engineering portfolio and would love to discuss a high-impact project.",
    emailLabel: "Corporate Email",
    copiedEmail: "Email copied to clipboard",
    location: "Available for Global Remote (UTC-5 / EST / PST)",
    ctaDownloadCv: "Download Technical Resume (PDF)",
  },
};
