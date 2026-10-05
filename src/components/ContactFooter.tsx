"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Copy, Check, Github, Linkedin, Download, Terminal, MapPin } from "lucide-react";

// Official WhatsApp Vector Icon (Brand Compliant)
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

// Official Gmail Vector Icon (Brand Compliant)
function GmailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.545l8.073-6.052C21.691 2.28 24 3.434 24 5.457z"
        fill="#EA4335"
      />
      <path
        d="M18.545 11.73v9.273h3.819a1.636 1.636 0 0 0 1.636-1.637V5.457L18.545 11.73z"
        fill="#FBBC04"
      />
      <path
        d="M0 5.457v13.909c0 .904.732 1.636 1.636 1.636h3.819V11.73L0 5.457z"
        fill="#34A853"
      />
      <path
        d="M18.545 11.73 12 16.64l-6.545-4.91V21h13.09V11.73z"
        fill="#4285F4"
      />
    </svg>
  );
}

export function ContactFooter() {
  const { dict, language } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const email = "luisjosemartinezc@gmail.com";
  const whatsappUrl = `https://wa.me/584121889182?text=${encodeURIComponent(dict.contact.whatsappText)}`;
  const githubUrl = "https://github.com/Sygyd";
  const linkedinUrl = "https://www.linkedin.com/in/luisjosemartinezcontreras/";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <footer id="contact" className="py-24 border-t border-border/80 bg-surface/40 tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary font-semibold">
            <Terminal className="w-3.5 h-3.5" />
            <span>{dict.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text">
            {dict.contact.title}
          </h2>
          <p className="text-base sm:text-lg text-text-muted">
            {dict.contact.subtitle}
          </p>
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-text-dim">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            <span>{dict.contact.location}</span>
          </div>
        </div>

        {/* Contact Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* WhatsApp Direct */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-surface border border-border hover:border-primary/50 hover:shadow-[0_0_20px_rgba(var(--theme-glow),0.2)] transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#25D366]">
                <WhatsAppIcon className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-primary group-hover:underline">
                Abrir Chat →
              </span>
            </div>
            <div>
              <div className="text-xs font-mono text-text-dim">Mensajería Instantánea</div>
              <div className="text-lg font-bold text-text mt-0.5">
                {dict.contact.whatsappLabel}
              </div>
              <div className="text-xs text-text-muted mt-1">
                Respuesta en menos de 2 horas en días hábiles.
              </div>
            </div>
          </a>

          {/* Email 1-Click Copy */}
          <div
            onClick={handleCopyEmail}
            className="p-6 rounded-2xl bg-surface border border-border hover:border-primary/50 hover:shadow-[0_0_20px_rgba(var(--theme-glow),0.2)] transition-all flex flex-col justify-between space-y-4 cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <GmailIcon className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-primary flex items-center gap-1">
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-primary" />
                    <span>{dict.common.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>1-Clic Copiar</span>
                  </>
                )}
              </span>
            </div>
            <div>
              <div className="text-xs font-mono text-text-dim">Contacto Corporativo</div>
              <div className="text-lg font-bold text-text mt-0.5 break-all">
                {email}
              </div>
              <div className="text-xs text-text-muted mt-1">
                {copiedEmail ? dict.contact.copiedEmail : "Haz clic para copiar la dirección"}
              </div>
            </div>
          </div>

          {/* CV Technical Download */}
          <a
            href={`/cv-luis-martinez-${language}.pdf`}
            download
            className="p-6 rounded-2xl bg-surface border border-border hover:border-primary/50 hover:shadow-[0_0_20px_rgba(var(--theme-glow),0.2)] transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <Download className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-accent group-hover:underline">
                PDF Spec →
              </span>
            </div>
            <div>
              <div className="text-xs font-mono text-text-dim">Resumen Curricular</div>
              <div className="text-lg font-bold text-text mt-0.5">
                {dict.contact.ctaDownloadCv}
              </div>
              <div className="text-xs text-text-muted mt-1">
                Adaptado automáticamente a idioma: {language.toUpperCase()}
              </div>
            </div>
          </a>
        </div>

        {/* Social Links & Copyright */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-dim">
          <div className="flex items-center gap-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-text transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-text transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div>
            © {new Date().getFullYear()} Luis Martinez • Principal Systems Engineer & Frontend Architect.
          </div>
        </div>
      </div>
    </footer>
  );
}
