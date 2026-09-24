import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getDictionary,
  SUPPORTED_LOCALES,
  CONTACT_INFO,
  type Locale,
} from "@/lib/i18n/dictionaries";

const DOC_TYPES = ["privacy", "terms", "cookies"] as const;

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.flatMap((lang) =>
    DOC_TYPES.map((doc) => ({ lang, doc }))
  );
}

export default function LegalDocumentPage({
  params,
}: {
  params: { lang: string; doc: string };
}) {
  const lang: Locale = SUPPORTED_LOCALES.includes(params.lang as Locale)
    ? (params.lang as Locale)
    : "es";
  const dict = getDictionary(lang);

  if (!DOC_TYPES.includes(params.doc as any)) {
    notFound();
  }

  const docType = params.doc as (typeof DOC_TYPES)[number];

  const getTitle = () => {
    if (docType === "privacy") return dict.legal.privacyTitle;
    if (docType === "terms") return dict.legal.termsTitle;
    return dict.legal.cookiesTitle;
  };

  return (
    <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-10 space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link
          href={`/${lang}`}
          className="inline-flex items-center gap-1.5 font-label-md text-primary hover:underline"
        >
          <span className="material-symbols-outlined text-[18px]">
            arrow_back
          </span>
          <span>{dict.nav.home}</span>
        </Link>

        <div className="flex gap-2">
          {DOC_TYPES.map((d) => (
            <Link
              key={d}
              href={`/${lang}/legal/${d}`}
              className={`px-3 py-1.5 rounded-xl font-label-sm text-label-sm uppercase tracking-wider ${
                d === docType
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container text-on-surface-variant hover:text-primary"
              }`}
            >
              {d}
            </Link>
          ))}
        </div>
      </div>

      <article className="bg-surface-container-lowest rounded-3xl p-6 sm:p-10 shadow-card border border-outline-variant/30 space-y-6">
        <div className="border-b border-outline-variant/30 pb-5 space-y-2">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-brand-terracotta">
            TERRA MAYA ASSET CARE MANAGEMENT S.A. DE C.V.
          </span>
          <h1 className="font-headline-md text-2xl sm:text-3xl font-semibold text-primary">
            {getTitle()}
          </h1>
          <p className="font-body-sm text-on-surface-variant">
            {CONTACT_INFO.addressLine} · WhatsApp: {CONTACT_INFO.phoneDisplay} ·{" "}
            {CONTACT_INFO.email}
          </p>
        </div>

        {docType === "privacy" && (
          <div className="space-y-4 text-sm text-on-surface leading-relaxed">
            <h2 className="font-title-lg text-primary">
              1. Identidad y Domicilio del Responsable (LFPDPPP & GDPR)
            </h2>
            <p>
              <strong>Terra Maya Facility &amp; Property Services</strong> (en
              adelante &ldquo;Terra Maya&rdquo;), con domicilio operativo en{" "}
              <strong>{CONTACT_INFO.addressLine}</strong>, teléfono de atención
              directa <strong>{CONTACT_INFO.phoneDisplay}</strong> y correo{" "}
              <strong>{CONTACT_INFO.email}</strong>, es responsable del
              tratamiento, confidencialidad y resguardo de sus datos personales
              conforme a la Ley Federal de Protección de Datos Personales en
              Posesión de los Particulares (LFPDPPP) de México, el Reglamento
              General de Protección de Datos (GDPR) de la Unión Europea y la
              normativa CCPA de Estados Unidos.
            </p>

            <h2 className="font-title-lg text-primary">
              2. Datos Recabados y Evidencia Visual (360° y Drone AFAC)
            </h2>
            <p>
              Recabamos datos de contacto (nombre, correo electrónico, número de
              WhatsApp/teléfono) y datos técnicos del inmueble (ubicación,
              superficie en m², equipamiento hidráulico y solar). Las capturas
              fotográficas, recorridos virtuales 360° y vuelos de drone
              registrados ante la AFAC (NOM-107-SCT3-2019) se realizan
              exclusivamente en áreas autorizadas por el propietario o la
              administración del condominio (HOA) bajo acuerdo de
              confidencialidad (NDA) y cifrado TLS 1.3.
            </p>

            <h2 className="font-title-lg text-primary">
              3. Derechos ARCO y Revocación del Consentimiento
            </h2>
            <p>
              Usted puede ejercer en cualquier momento sus derechos de Acceso,
              Rectificación, Cancelación u Oposición (ARCO), así como solicitar
              la eliminación de sus datos capturados mediante formularios de
              Google Ads o Meta Lead Ads enviando un mensaje a{" "}
              <strong>{CONTACT_INFO.email}</strong> o vía WhatsApp al{" "}
              <strong>{CONTACT_INFO.phoneDisplay}</strong>.
            </p>
          </div>
        )}

        {docType === "terms" && (
          <div className="space-y-4 text-sm text-on-surface leading-relaxed">
            <h2 className="font-title-lg text-primary">
              1. Alcance de Servicios y Registro REPSE
            </h2>
            <p>
              Terra Maya presta servicios especializados de mantenimiento
              residencial, condominial y hotelero a través de sus 7 divisiones
              técnicas (Terra Agua, Terra Verde, Terra Clean, Terra Textil,
              Terra Shield, Terra Carpintería y Terra Chukum &amp; Obras). Todo
              el personal operativo se encuentra formalmente afiliado al IMSS e
              INFONAVIT y respaldado por Registro REPSE vigente ante la STPS y
              Póliza de Responsabilidad Civil por hasta $5,000,000 USD.
            </p>

            <h2 className="font-title-lg text-primary">
              2. Niveles de Servicio (SLA) y Garantías
            </h2>
            <p>
              Las pólizas mensuales Terra Care cuentan con un tiempo de
              respuesta garantizado (SLA) menor a 2–4 horas para emergencias
              críticas y de 24 a 48 horas para mantenimientos programados en el
              corredor Tulum – Playa del Carmen – Mayakoba – Puerto Morelos.
              Ninguna orden de trabajo se da por concluida sin evidencia
              fotográfica o 360° disponible en el Portal de Clientes.
            </p>

            <h2 className="font-title-lg text-primary">
              3. Facturación y Condiciones Comerciales
            </h2>
            <p>
              Todos los precios publicados en el portal y la calculadora están
              expresados en Pesos Mexicanos (MXN) más IVA y son validados
              mediante el diagnóstico técnico presencial gratuito &ldquo;Terra
              Check&rdquo; de 48 puntos. Emitimos CFDI 4.0 deducible en México e
              invoices internacionales en USD o EUR.
            </p>
          </div>
        )}

        {docType === "cookies" && (
          <div className="space-y-4 text-sm text-on-surface leading-relaxed">
            <h2 className="font-title-lg text-primary">
              1. Uso de Cookies, Google Consent Mode v2 y Meta Pixel
            </h2>
            <p>
              Este sitio web implementa el estándar{" "}
              <strong>Google Consent Mode v2</strong> (`ad_storage`,
              `analytics_storage`, `ad_user_data`, `ad_personalization`) y
              herramientas de medición de <strong>Meta Platforms</strong> para
              garantizar que las etiquetas publicitarias y analíticas respeten
              la elección de privacidad de cada visitante.
            </p>

            <h2 className="font-title-lg text-primary">
              2. Categorías de Cookies Utilizadas
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong>Cookies Técnicas y Esenciales:</strong> Necesarias para
                recordar el idioma seleccionado (`es`, `en`, `fr`, `it`), la
                sesión segura TLS 1.3 del Portal de Clientes y las preferencias
                de privacidad.
              </li>
              <li>
                <strong>Cookies Analíticas (Google Analytics 4):</strong> Nos
                permiten medir de forma agregada el rendimiento de nuestras
                páginas y tiempos de carga (Core Web Vitals).
              </li>
              <li>
                <strong>Cookies Publicitarias (Google Ads &amp; Meta):</strong>{" "}
                Utilizadas únicamente bajo su consentimiento para medir la
                conversión de solicitudes de diagnóstico &ldquo;Terra
                Check&rdquo;.
              </li>
            </ul>
          </div>
        )}
      </article>
    </div>
  );
}
