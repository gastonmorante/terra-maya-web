"use client";

import React, { useState, useRef } from "react";
import { useTerraCheck } from "./TerraCheckModal";
import AppIcon from "./AppIcon";
import type { Locale } from "@/lib/i18n/dictionaries";

export default function PortalClient({
  lang,
  dict,
}: {
  lang: Locale;
  dict: any;
}) {
  const { openTerraCheck } = useTerraCheck();
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  const properties = [
    {
      id: "kaax",
      name: "Villa K'áax",
      location: "Aldea Zamá, Tulum",
      health: "99.4%",
      director: "Arq. Rodrigo Pech",
    },
    {
      id: "amari",
      name: "Villa 12 · AMARI Uptown",
      location: "Región 11, Tulum",
      health: "99.8%",
      director: "Ing. Julio Chacón",
    },
    {
      id: "mayakoba",
      name: "Residencia Ixchel",
      location: "Mayakoba, Playa del Carmen",
      health: "99.1%",
      director: "Arq. Rodrigo Pech",
    },
  ];

  const [propIndex, setPropIndex] = useState(0);
  const activeProperty = properties[propIndex];

  // Interactive Before/After Slider State
  const [sliderPct, setSliderPct] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  // Media Viewer Mode: "beforeAfter" | "pano360" | "drone"
  const [mediaMode, setMediaMode] = useState<"beforeAfter" | "pano360" | "drone">(
    "beforeAfter"
  );
  const [panoYaw, setPanoYaw] = useState(40);
  const [ticketDispatched, setTicketDispatched] = useState(false);
  const [calendarSynced, setCalendarSynced] = useState(false);
  const [quoteApproved, setQuoteApproved] = useState(false);

  const updateSliderFromClientX = (clientX: number) => {
    const container = sliderContainerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    let offsetX = clientX - rect.left;
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;
    setSliderPct((offsetX / rect.width) * 100);
  };

  const auditPhotos = [
    {
      time: "10:15 AM",
      title: lang === "es" ? "Deck Zapote Maya" : "Mayan Zapote Deck",
      subtitle:
        lang === "es"
          ? "Nivelación y sellado 100%"
          : "100% leveled & UV sealed",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVV61ksSnOfiArtBi6bOgvy3XllODifkCPHeb7FpoCKHCjaatPd3feAbIMKe0vDTKIUJUZjQ8GCU8n8Ob7DNZbYwckRt00gX_hGnPRx2cAKjg715E8iyABxNNJyQWOAD6AebgoFC6A3anriA_jqA44CnpVNNDw10X1htDXQHI9-I0kAaqgg1TCHJ0OwPyzC6jYyhNlVMv9-dLeCImukoYbaFKpaJnCt66HHuA5oOgu-j5vTlCwWUzrbg",
    },
    {
      time: "09:30 AM",
      title: lang === "es" ? "Dron Azotea & Paneles" : "Roof & Solar Drone",
      subtitle:
        lang === "es"
          ? "Limpieza descalcificante"
          : "Descaling panel wash",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMHtmE_dmrYOls4DAdHuoKMOLS_85RXe_VigQFu_DA1UrMFFwSOGspN0UpkS1QHJkURBdF8OvDbGtHgSsdsYp1z_QnF3sBfUAH_i2lE-hAOLYbX7S9JJrDYoWK077fsn1BPMQ7I8d6IWGbH1W_w5wEiN3FoquPERltBcNVd7P1papmATiqPp4_f1AwQ1FQiv1VKUi-Ux_GKmMN3Up-YlKOr-6QXZBkdKJM0WUcaQtJ62jJ-dXN64FKWg",
    },
    {
      time: "08:45 AM",
      title:
        lang === "es" ? "Filtro de Cristal Activo" : "Active Crystal Filter",
      subtitle:
        lang === "es"
          ? "Retrolavado completado"
          : "Backwash cycle completed",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbJPBXQ1fiIMvKoAZAtjR_mHZrU9x7snocyITCy_18N957dxxRnnGlMMok0I3_Qnua8s_HKX4e4pbRvh6bfZoAC4byfaEKRy237zcKa-agKH974JqX8JJUFK3nX2LugeepiJlPzkMCS0jaPmjP1PgejKCjNAN_SmMH_Bqm6gIt2OjtwnVHWJcA5k_xhxu1mmSvGgdZshulPyXQj7dgeVzov5It6kl65nrtFnGQP4WTd-yZl-L6SKZXlA",
    },
  ];

  const scheduledEvents =
    lang === "es"
      ? [
          {
            month: "OCT",
            day: "28",
            title: "Fumigación Biológica",
            desc: "Extractos botánicos no tóxicos · NOM-256",
            time: "09:00 AM",
          },
          {
            month: "NOV",
            day: "02",
            title: "Limpieza Profunda & Chukum",
            desc: "Pulido mineral y alberca",
            time: "11:30 AM",
          },
          {
            month: "NOV",
            day: "06",
            title: "Poda Selvática & Paisajismo",
            desc: "Control perimetral de raíces",
            time: "08:00 AM",
          },
        ]
      : [
          {
            month: "OCT",
            day: "28",
            title: "Biological Pest Control",
            desc: "Non-toxic botanical extracts · NOM-256",
            time: "09:00 AM",
          },
          {
            month: "NOV",
            day: "02",
            title: "Deep Clean & Chukum Care",
            desc: "Mineral wall polish & infinity pool",
            time: "11:30 AM",
          },
          {
            month: "NOV",
            day: "06",
            title: "Jungle Canopy & Landscaping",
            desc: "Perimeter root management",
            time: "08:00 AM",
          },
        ];

  return (
    <div className="max-w-5xl mx-auto flex flex-col w-full pb-12 overflow-x-hidden">
      {/* 1. ACTIVE RESIDENCE HEADER CARD + PERIMETER CAMERAS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 px-4 pt-4">
        {/* Active Residence Card */}
        <div className="lg:col-span-6 bg-surface-container-lowest rounded-xl p-4 shadow-card flex flex-col justify-between gap-3 border border-outline-variant/20">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-surface-tint">
                {lang === "es" ? "Residencia Activa" : "Active Residence"}
              </span>
            </div>
            <div className="bg-surface-container-low px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <AppIcon name="verified" className="w-3.5 h-3.5 text-primary" />
              <span className="text-[11px] text-primary font-semibold">
                {activeProperty.health}{" "}
                {lang === "es" ? "Salud del Activo" : "Asset Health"}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-col min-w-0">
              <h1 className="font-serif text-xl sm:text-2xl font-bold text-primary truncate leading-tight">
                {activeProperty.name}
              </h1>
              <p className="text-xs text-on-surface-variant flex items-center gap-1 mt-0.5">
                <AppIcon name="pin_drop" className="w-3.5 h-3.5 text-surface-tint" />
                <span className="truncate">{activeProperty.location}</span>
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                setPropIndex((prev) => (prev + 1) % properties.length)
              }
              className="bg-surface-container hover:bg-surface-container-high px-2.5 py-1.5 rounded-lg flex items-center gap-1 text-on-surface-variant active:scale-95 transition-transform shrink-0"
            >
              <span className="text-xs font-semibold">
                {lang === "es" ? "Cambiar" : "Switch"}
              </span>
              <AppIcon name="expand_more" className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-surface-container-low/70 rounded-lg p-2.5 flex items-center justify-between gap-2 mt-1">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                <AppIcon name="engineering" className="w-4 h-4" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs text-primary truncate font-semibold">
                  {activeProperty.director}
                </span>
                <span className="text-on-surface-variant text-[11px] leading-none mt-0.5 truncate">
                  {lang === "es"
                    ? "Facility Director Asignado"
                    : "Assigned Facility Director"}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <a
                className="w-8 h-8 rounded-full bg-surface-container-lowest text-primary flex items-center justify-center shadow-sm active:bg-surface-container"
                href="tel:+5219841750007"
                aria-label="Call Facility Director"
              >
                <AppIcon name="call" className="w-4 h-4" />
              </a>
              <a
                className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-sm active:bg-primary-container"
                href="https://wa.me/5219841750007"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Facility Director"
              >
                <AppIcon name="chat" className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Perimeter Cameras Live Card */}
        <div className="lg:col-span-6 relative w-full h-48 lg:h-auto min-h-[185px] rounded-xl overflow-hidden shadow-md">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCpQwarfirIP48zUzJNioYy9mqD67_B49uxibPQ2BAJ6-r9LZBCtiNWCIL-CXY7JVUXrhScnakak3rtif0D3CRJGP2W9REDyqNY_Kq_dIudvwPkPK4C-fFdZi8Bdxq5neiFdtg87blhG-iS-1rafC5nS3rjV2UtO20OQzHF4ZDVf4XbJRbWEOUQ42z8-D79cALb2yzBfCaz3P8Q5tjeCnLUpb5BlY5iUHmB-pKqpRp8PGvcvd-vAxbcRg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/25 to-transparent flex flex-col justify-end p-4">
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0">
                <span className="text-[10px] font-bold text-primary-fixed uppercase tracking-wider block">
                  {lang === "es"
                    ? "Cámaras Perimetrales & Drone"
                    : "Perimeter Cameras & Drone"}
                </span>
                <p className="font-serif text-base sm:text-lg font-bold text-on-primary truncate">
                  {lang === "es"
                    ? "Patrullaje Bioclimático OK"
                    : "Bioclimatic Patrol OK"}
                </p>
              </div>
              <span className="bg-primary/65 backdrop-blur-md px-2.5 py-1 rounded-full text-on-primary text-[11px] font-semibold flex items-center gap-1.5 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed animate-ping"></span>
                {lang === "es" ? "En Vivo" : "Live"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. REAL-TIME TELEMETRY */}
      <div className="px-4 pt-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <h2 className="font-serif text-base sm:text-lg font-bold text-primary flex items-center gap-1.5">
            <AppIcon name="sensors" className="w-5 h-5 text-surface-tint" />
            <span>
              {lang === "es"
                ? "Telemetría en Tiempo Real"
                : "Real-Time Telemetry"}
            </span>
          </h2>
          <span className="text-[11px] font-semibold text-surface-tint flex items-center gap-1">
            <AppIcon name="sync" className="w-3.5 h-3.5" />
            <span>{lang === "es" ? "Act. hace 4m" : "Updated 4m ago"}</span>
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Infinity Pool Telemetry */}
          <div className="bg-surface-container-lowest p-4 rounded-xl shadow-card border border-outline-variant/20 flex flex-col justify-between col-span-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                  <AppIcon name="pool" className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary">
                    {lang === "es" ? "Alberca Infinity" : "Infinity Pool"}
                  </p>
                  <p className="text-xs text-on-surface-variant">
                    {lang === "es"
                      ? "Agua salina cristalina · NOM-245"
                      : "Crystal salt water · NOM-245"}
                  </p>
                </div>
              </div>
              <span className="bg-surface-container-low px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-primary">
                {lang === "es" ? "Balance Óptimo" : "Optimal Balance"}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-3 pt-2 bg-surface-container-low/40 rounded-lg p-2.5">
              <div className="flex flex-col">
                <span className="text-on-surface-variant text-[11px]">
                  pH Alberca
                </span>
                <span className="font-serif text-lg sm:text-xl font-bold text-primary leading-tight">
                  7.4
                </span>
                <span className="text-surface-tint flex items-center gap-0.5 text-[10px] font-semibold">
                  <AppIcon name="check" className="w-3 h-3" />
                  <span>7.2-7.6</span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-on-surface-variant text-[11px]">
                  {lang === "es" ? "Salinidad" : "Salinity"}
                </span>
                <span className="font-serif text-lg sm:text-xl font-bold text-primary leading-tight">
                  3,180
                </span>
                <span className="text-on-surface-variant text-[10px]">
                  ppm estables
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-on-surface-variant text-[11px]">
                  {lang === "es" ? "Temp. Agua" : "Water Temp"}
                </span>
                <span className="font-serif text-lg sm:text-xl font-bold text-primary leading-tight">
                  28.5°
                </span>
                <span className="text-surface-tint text-[10px] font-semibold">
                  {lang === "es" ? "Climatizada" : "Heated"}
                </span>
              </div>
            </div>
          </div>

          {/* Solar Power */}
          <div className="bg-surface-container-lowest p-4 rounded-xl shadow-card border border-outline-variant/20 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1">
              <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <AppIcon name="solar_power" className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-primary bg-primary-fixed/40 px-1.5 py-0.5 rounded">
                94% Cap.
              </span>
            </div>
            <div>
              <span className="text-xs text-on-surface-variant">
                {lang === "es" ? "Generación Solar" : "Solar Output"}
              </span>
              <p className="font-serif text-xl sm:text-2xl font-bold text-primary mt-0.5">
                34.8{" "}
                <span className="text-xs font-normal text-on-surface-variant">
                  kWh
                </span>
              </p>
            </div>
            <div className="w-full bg-surface-container rounded-full h-1.5 mt-2 overflow-hidden">
              <div
                className="bg-primary h-full rounded-full"
                style={{ width: "82%" }}
              ></div>
            </div>
          </div>

          {/* Active Crew */}
          <div className="bg-surface-container-lowest p-4 rounded-xl shadow-card border border-outline-variant/20 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1">
              <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <AppIcon name="group" className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-primary bg-surface-container-high px-1.5 py-0.5 rounded">
                {lang === "es" ? "Activos" : "On-Site"}
              </span>
            </div>
            <div>
              <span className="text-xs text-on-surface-variant">
                {lang === "es" ? "Cuadrilla en Sitio" : "Crew On-Site"}
              </span>
              <p className="font-serif text-xl sm:text-2xl font-bold text-primary mt-0.5">
                3{" "}
                <span className="text-xs font-normal text-on-surface-variant">
                  Esp.
                </span>
              </p>
            </div>
            <p className="text-surface-tint truncate text-[11px] mt-2">
              {lang === "es"
                ? "Jardín & Mantenimiento"
                : "Landscaping & Maintenance"}
            </p>
          </div>
        </div>
      </div>

      {/* 3. INTERACTIVE VISUAL EVIDENCE (BEFORE/AFTER SLIDER + 360° + DRONE) */}
      <div className="px-4 pt-6">
        <div className="bg-surface-container-lowest rounded-xl p-4 sm:p-5 shadow-card border border-outline-variant/20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-primary">
                {lang === "es"
                  ? "Evidencia Visual Interactiva"
                  : "Interactive Visual Evidence"}
              </h3>
              <p className="text-xs text-on-surface-variant">
                {lang === "es"
                  ? "Protocolo de restauración Deck Zapote · Visor 360° & Drone"
                  : "Zapote Deck Restoration Protocol · 360° & Drone Viewer"}
              </p>
            </div>

            <div className="flex items-center gap-1.5 bg-surface-container-low p-1 rounded-xl self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setMediaMode("beforeAfter")}
                className={`px-2.5 py-1.5 rounded-lg text-[11px] font-semibold transition ${
                  mediaMode === "beforeAfter"
                    ? "bg-primary text-on-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {lang === "es" ? "Antes / Después" : "Before / After"}
              </button>
              <button
                type="button"
                onClick={() => setMediaMode("pano360")}
                className={`px-2.5 py-1.5 rounded-lg text-[11px] font-semibold transition ${
                  mediaMode === "pano360"
                    ? "bg-primary text-on-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                360° Tour
              </button>
              <button
                type="button"
                onClick={() => setMediaMode("drone")}
                className={`px-2.5 py-1.5 rounded-lg text-[11px] font-semibold transition ${
                  mediaMode === "drone"
                    ? "bg-primary text-on-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                Drone AFAC
              </button>
            </div>
          </div>

          {mediaMode === "beforeAfter" && (
            <>
              <div
                ref={sliderContainerRef}
                onMouseDown={(e) => {
                  setIsDragging(true);
                  updateSliderFromClientX(e.clientX);
                }}
                onMouseMove={(e) => {
                  if (isDragging) updateSliderFromClientX(e.clientX);
                }}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onTouchStart={(e) => {
                  setIsDragging(true);
                  updateSliderFromClientX(e.touches[0].clientX);
                }}
                onTouchMove={(e) => {
                  if (isDragging) updateSliderFromClientX(e.touches[0].clientX);
                }}
                onTouchEnd={() => setIsDragging(false)}
                className="relative w-full h-56 sm:h-72 rounded-lg overflow-hidden select-none cursor-ew-resize"
              >
                {/* AFTER IMAGE */}
                <div className="absolute inset-0">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBxs2H6GK1aMGt8k8G_Mq7mx22eqE611MzO5ZWh0EgwHL4B-uPc2ZuIZds-rArA3APj_l-1VQ_WrVjBzCOUenir1uCcBvRFxgQlzhqtk4Tni9zbj4TmLI01HZ_eYu2mqBeMy7dm3eTfSfVvYFC9hGs5LDoNn7aXbAiAMDFDcwdp_D3eRpXWVNqak1PMQHIKLLauuZ-Id-VSah9xoA-7nAI_MbWFtfeY49THGIUJoFrBWyUPiBRZl_oLuA')",
                    }}
                  />
                  <span className="absolute top-2.5 right-2.5 bg-primary/85 backdrop-blur-sm text-on-primary text-[10px] font-bold px-2.5 py-1 rounded">
                    {lang === "es" ? "DESPUÉS (Hoy)" : "AFTER (Today)"}
                  </span>
                </div>

                {/* BEFORE IMAGE */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPct}%` }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center w-[900px] max-w-none h-full"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCEGVa5xls6AnPCxshTPP3520E91wRYaybdTPYHr1NjBYiKM-70898GiFr2En2-UlqIaNoBLpOarnzqWeTX1QnJE1_G1kRTBX7THLkacyrajDKlLeRYqgShNzR3AbPUXtu3MsWw4HGtj5jbAkOluqq3nVCzzp71zk8ZZk-9QwlP-bSarVdJ8w_QVt9FwohoUE1mqYQPK6GjlBF-iYDUdtf0IREPQ1iuBoSRtQv_ttQ78TskkKQ6cH7Sgg')",
                    }}
                  />
                  <span className="absolute top-2.5 left-2.5 bg-inverse-surface/85 backdrop-blur-sm text-inverse-on-surface text-[10px] font-bold px-2.5 py-1 rounded">
                    {lang === "es" ? "ANTES" : "BEFORE"}
                  </span>
                </div>

                {/* SLIDER HANDLE */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-surface-container-lowest shadow-md flex items-center justify-center pointer-events-none"
                  style={{ left: `${sliderPct}%` }}
                >
                  <div className="w-8 h-8 rounded-full bg-surface-container-lowest text-primary flex items-center justify-center shadow-lg">
                    <AppIcon name="drag_indicator" className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <p className="text-on-surface-variant mt-2.5 text-center text-xs">
                {lang === "es"
                  ? "Tratamiento de hidratación botánica con aceites nativos UV50 aplicado hace 3 horas."
                  : "Botanical hydration treatment with native UV50 oils applied 3 hours ago."}
              </p>
            </>
          )}

          {mediaMode === "pano360" && (
            <div className="space-y-3">
              <div
                className="relative w-full h-56 sm:h-72 rounded-lg overflow-hidden flex flex-col justify-between p-4 text-white"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCpQwarfirIP48zUzJNioYy9mqD67_B49uxibPQ2BAJ6-r9LZBCtiNWCIL-CXY7JVUXrhScnakak3rtif0D3CRJGP2W9REDyqNY_Kq_dIudvwPkPK4C-fFdZi8Bdxq5neiFdtg87blhG-iS-1rafC5nS3rjV2UtO20OQzHF4ZDVf4XbJRbWEOUQ42z8-D79cALb2yzBfCaz3P8Q5tjeCnLUpb5BlY5iUHmB-pKqpRp8PGvcvd-vAxbcRg')",
                  backgroundSize: "140%",
                  backgroundPosition: `${panoYaw}% center`,
                }}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-[11px]">
                  <span className="bg-primary/80 backdrop-blur-md px-3 py-1 rounded-full font-semibold">
                    360° NAVIGABLE TOUR · YAW {panoYaw}°
                  </span>
                  <span className="bg-brand-terracotta px-2.5 py-1 rounded-full font-semibold">
                    {activeProperty.name}
                  </span>
                </div>
                <div className="bg-primary/80 backdrop-blur-md p-2.5 rounded-xl flex items-center gap-3">
                  <AppIcon name="360" className="w-4 h-4" />
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={panoYaw}
                    onChange={(e) => setPanoYaw(Number(e.target.value))}
                    className="w-full accent-brand-terracotta cursor-pointer"
                  />
                </div>
              </div>
            </div>
          )}

          {mediaMode === "drone" && (
            <div className="relative w-full h-56 sm:h-72 rounded-lg overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAMHtmE_dmrYOls4DAdHuoKMOLS_85RXe_VigQFu_DA1UrMFFwSOGspN0UpkS1QHJkURBdF8OvDbGtHgSsdsYp1z_QnF3sBfUAH_i2lE-hAOLYbX7S9JJrDYoWK077fsn1BPMQ7I8d6IWGbH1W_w5wEiN3FoquPERltBcNVd7P1papmATiqPp4_f1AwQ1FQiv1VKUi-Ux_GKmMN3Up-YlKOr-6QXZBkdKJM0WUcaQtJ62jJ-dXN64FKWg')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-transparent to-primary/40 p-4 flex flex-col justify-between text-white">
                <div className="flex flex-wrap items-center justify-between gap-2 text-[11px]">
                  <span className="bg-primary/80 backdrop-blur-md px-3 py-1 rounded-full font-semibold">
                    AFAC NOM-107 · 4K DRONE
                  </span>
                  <span className="bg-emerald-700 px-2.5 py-1 rounded-full font-semibold">
                    12 Paneles 100% Limpios
                  </span>
                </div>
                <div className="bg-primary/85 backdrop-blur-md p-3 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-xs">
                    {lang === "es"
                      ? "Hallazgo preventivo: Microfisura en chaflán norte"
                      : "Preventive finding: Minor roof flashing micro-fissure"}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuoteApproved(true)}
                    className="px-3 py-1.5 rounded-lg bg-brand-terracotta text-white font-semibold text-xs shrink-0"
                  >
                    {quoteApproved
                      ? lang === "es"
                        ? "✓ Aprobado en 1-Click"
                        : "✓ 1-Click Approved"
                      : lang === "es"
                      ? "Aprobar Reparación 1-Click"
                      : "1-Click Approve Repair"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 4. AUDIT PHOTO LOG */}
      <div className="px-4 pt-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-serif text-base sm:text-lg font-bold text-primary flex items-center gap-1.5">
            <AppIcon name="photo_camera" className="w-5 h-5 text-surface-tint" />
            <span>
              {lang === "es"
                ? "Registro Fotográfico de Auditoría"
                : "Audit Photo Log"}
            </span>
          </h3>
          <button
            type="button"
            onClick={() => setMediaMode("pano360")}
            className="text-xs font-semibold text-primary underline"
          >
            {lang === "es" ? "Ver Álbum (42)" : "View Album (42)"}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {auditPhotos.map((photo, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-card border border-outline-variant/20"
            >
              <div className="h-32 relative">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${photo.img}')` }}
                />
                <span className="absolute bottom-2 left-2 bg-primary/80 backdrop-blur-sm text-on-primary font-semibold px-2 py-0.5 rounded text-[10px]">
                  {photo.time}
                </span>
              </div>
              <div className="p-3 flex flex-col gap-0.5">
                <span className="text-xs text-primary font-semibold">
                  {photo.title}
                </span>
                <span className="text-on-surface-variant text-[11px]">
                  {photo.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. 1-CLICK TICKET CTA */}
      <div className="px-4 pt-6">
        <button
          type="button"
          onClick={() => {
            setTicketDispatched(true);
            openTerraCheck({
              notes: `Ticket 1-Click prioritario desde Portal (${activeProperty.name})`,
            });
          }}
          className="w-full bg-tertiary hover:bg-tertiary-container text-on-tertiary rounded-xl p-4 flex items-center justify-between gap-3 shadow-lg active:scale-[0.99] transition-all"
        >
          <div className="flex items-center gap-3 text-left min-w-0">
            <div className="w-10 h-10 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center shrink-0">
              <AppIcon name="bolt" className="w-5 h-5" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-serif text-base sm:text-lg font-bold text-on-tertiary leading-snug truncate">
                {ticketDispatched
                  ? lang === "es"
                    ? "Ticket Prioritario Activo"
                    : "Priority Ticket Active"
                  : lang === "es"
                  ? "Emitir Ticket 1-Click"
                  : "Issue 1-Click Priority Ticket"}
              </span>
              <span className="text-[11px] text-tertiary-fixed font-medium">
                {lang === "es"
                  ? "SLA de Respuesta Inmediata ≤ 2 Horas"
                  : "Immediate SLA Response ≤ 2 Hours"}
              </span>
            </div>
          </div>
          <AppIcon name="chevron_right" className="w-5 h-5 text-on-tertiary" />
        </button>
      </div>

      {/* 6. SCHEDULED PREVENTIVE MAINTENANCE */}
      <div className="px-4 pt-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <h3 className="font-serif text-base sm:text-lg font-bold text-primary flex items-center gap-1.5">
            <AppIcon
              name="calendar_month"
              className="w-5 h-5 text-surface-tint"
            />
            <span>
              {lang === "es"
                ? "Mantenimiento Preventivo Programado"
                : "Scheduled Preventive Maintenance"}
            </span>
          </h3>
          <button
            type="button"
            onClick={() => setCalendarSynced(true)}
            className="text-xs font-semibold text-primary flex items-center gap-1 bg-surface-container hover:bg-surface-container-high px-2.5 py-1.5 rounded-md transition shrink-0"
          >
            <AppIcon name="event_repeat" className="w-3.5 h-3.5" />
            <span>
              {calendarSynced
                ? lang === "es"
                  ? "✓ Sincronizado"
                  : "✓ Synced"
                : lang === "es"
                ? "Sincronizar"
                : "Sync Calendar"}
            </span>
          </button>
        </div>

        <div className="space-y-2.5">
          {scheduledEvents.map((ev, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest p-4 rounded-xl shadow-card border border-outline-variant/20 flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-11 h-11 rounded-lg bg-surface-container-low flex flex-col items-center justify-center text-primary shrink-0">
                  <span className="text-[10px] uppercase leading-none font-bold">
                    {ev.month}
                  </span>
                  <span className="font-serif text-base leading-none font-bold mt-0.5">
                    {ev.day}
                  </span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-bold text-primary truncate">
                    {ev.title}
                  </span>
                  <span className="text-xs text-on-surface-variant truncate">
                    {ev.desc}
                  </span>
                </div>
              </div>
              <span className="text-[11px] font-semibold bg-surface-container px-2.5 py-1 rounded text-primary shrink-0">
                {ev.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 7. BANK-GRADE SECURITY & NOTARY VALIDITY CARD */}
      <div className="px-4 pt-6 pb-4">
        <div className="bg-surface-container rounded-xl p-4 flex flex-col gap-2 border border-outline-variant/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AppIcon name="shield" className="w-5 h-5 text-primary" />
              <span className="text-xs uppercase tracking-wider text-primary font-bold">
                {lang === "es"
                  ? "Cifrado Bancario TLS 1.3"
                  : "TLS 1.3 Bank-Grade Encryption"}
              </span>
            </div>
            <AppIcon name="lock" className="w-4 h-4 text-surface-tint" />
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            {lang === "es"
              ? "Reporte auditado con validez oficial ante Notaría y Aseguradoras. Personal técnico avalado con Cédula Profesional Federal de la Dirección General de Profesiones."
              : "Audited report with official validity before Notaries and Insurers. Technical staff certified with Federal Professional Licenses."}
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-1 text-[11px] font-semibold text-on-surface-variant">
            <span className="flex items-center gap-1">
              <AppIcon
                name="check_circle"
                className="w-3.5 h-3.5 text-surface-tint"
              />
              <span>{lang === "es" ? "Auditoría Activa" : "Active Audit"}</span>
            </span>
            <span className="flex items-center gap-1">
              <AppIcon
                name="verified_user"
                className="w-3.5 h-3.5 text-surface-tint"
              />
              <span>{lang === "es" ? "Póliza Vigente" : "Policy Active"}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
