# Terra Maya Web (`terra-maya-web`)

Plataforma web bilingüe (Español / Inglés) de Facility Management & Property Services para la Riviera Maya (Tulum, Playa del Carmen y Puerto Morelos), construida con **Next.js (App Router)**, **Tailwind CSS** y **Framer Motion**.

## Paleta de Marca (Tailwind Config)
- **Primary Deep Green:** `#1A3C34` (`bg-brand-green`, `text-brand-green`)
- **Sand Beige:** `#EAE3D2` (`bg-brand-sand`, `text-brand-sand`)
- **Terracotta Accent:** `#C86D51` (`bg-brand-terracotta`, `text-brand-terracotta`)

## Arquitectura de Rutas (`/es` y `/en`)
- `middleware.ts`: Redirección automática e internacionalización (`/es` y `/en`).
- `app/[lang]/page.tsx`: Página de inicio con Hero y animación oficial, 4 bloques de valor, selector interactivo de audiencia, grid de los 7 servicios, insignias de cumplimiento (REPSE, IMSS, COFEPRIS NOM-256, NOM-245, AFAC NOM-107, Seguro RC) y formulario / modal de captura **Terra Check (21 puntos)**.
- `app/[lang]/services/page.tsx` y `app/[lang]/services/[slug]/page.tsx`: Catálogo técnico y páginas individuales para las 7 sub-marcas (*Terra Agua, Terra Verde, Terra Clean, Terra Textil, Terra Shield, Terra Build Carpintería, Terra Build Albañilería*) + tarifario de referencia.
- `app/[lang]/solutions/page.tsx` y `app/[lang]/solutions/[segment]/page.tsx`: Soluciones por segmento (*Propietarios ausentes/Hosts, Condominios/HOA, Hoteles Boutique, Desarrolladoras*) + tabla comparativa B2B (Caso AMARI Uptown Tulum: Plantilla propia vs. Terra Maya Integral).
- `app/[lang]/pricing/page.tsx`: Tablas comparativas de pólizas **Terra Care** (*Esencial $3,490, Más Vendido $6,490, Patrimonio $11,900*) + **Calculadora Interactiva** por m², presencia/tamaño de alberca, descuento comunidad (-15%) y plazo de contrato.
- `app/[lang]/portal/page.tsx`: Portal de Cliente y **App Terra Maya** con selector de rol en vivo (*Propietario Villa 12, Administración HOA, Gerente Hotel*), tablero Kanban (*Programado, En Proceso, Terminado*), aprobación de cotizaciones en 1 clic y visor interactivo **360° / Drone AFAC / Antes y Después**.

## Ejecución Local
```bash
npm.cmd run dev
```
Abrir `http://localhost:3000/es` o `http://localhost:3000/en`.
