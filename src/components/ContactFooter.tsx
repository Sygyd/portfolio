"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { MessageSquare, Mail, Copy, Check, Github, Linkedin, Download, Terminal, MapPin } from "lucide-react";

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
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <MessageSquare className="w-6 h-6" />
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
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Mail className="w-6 h-6" />
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
