"use client";

import { useState } from "react";
import { Download, Send } from "lucide-react";
import { CopyButton } from "./CopyButton";
import { downloadTextFile, slugifyName } from "@/lib/forms";

type Fields = {
  name: string;
  contact: string;
  subject: string;
  message: string;
};

const initial: Fields = {
  name: "",
  contact: "",
  subject: "Recrutamento",
  message: "",
};

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(initial);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!fields.name.trim() || !fields.contact.trim() || !fields.message.trim()) {
      setError("Preencha nome, contato e mensagem para gerar o texto.");
      return;
    }
    setError("");
    const block = [
      "MENSAGEM DE CONTATO — СОБР",
      "Clã de operações táticas · Arma Reforger",
      "",
      `Nome / indicativo: ${fields.name.trim()}`,
      `Contato: ${fields.contact.trim()}`,
      `Assunto: ${fields.subject}`,
      "",
      "Mensagem:",
      fields.message.trim(),
      "",
      "— Fim da mensagem —",
    ].join("\n");
    setOutput(block);
  }

  return (
    <form className="form-panel" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="contact-name">
            Nome ou indicativo <span>*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            value={fields.name}
            onChange={(event) => update("name", event.target.value)}
            placeholder="Como devemos chamar você"
            autoComplete="name"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="contact-channel">
            Discord ou e-mail <span>*</span>
          </label>
          <input
            id="contact-channel"
            name="contact"
            value={fields.contact}
            onChange={(event) => update("contact", event.target.value)}
            placeholder="Canal para retorno"
            required
          />
        </div>
        <div className="field field--full">
          <label htmlFor="contact-subject">Assunto</label>
          <select
            id="contact-subject"
            name="subject"
            value={fields.subject}
            onChange={(event) => update("subject", event.target.value)}
          >
            <option>Recrutamento</option>
            <option>Parceria institucional</option>
            <option>Servidor / evento</option>
            <option>Suporte</option>
            <option>Outro</option>
          </select>
        </div>
        <div className="field field--full">
          <label htmlFor="contact-message">
            Mensagem <span>*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            value={fields.message}
            onChange={(event) => update("message", event.target.value)}
            placeholder="Descreva sua mensagem com clareza. Para parcerias, informe propósito, estrutura e regras."
            required
          />
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn--primary">
          <Send size={16} />
          Gerar mensagem
        </button>
        <button
          type="button"
          className="btn btn--ghost"
          onClick={() => {
            setFields(initial);
            setOutput("");
            setError("");
          }}
        >
          Limpar
        </button>
      </div>

      {error ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}

      <p className="form-hint">
        Este formulário não envia dados. O texto é gerado localmente para envio
        manual pelo Discord ou e-mail oficial.
      </p>

      {output ? (
        <div className="form-output" aria-live="polite">
          <div className="form-output__head">
            <strong>Mensagem gerada</strong>
            <div className="btn-row">
              <CopyButton text={output} label="Copiar" />
              <button
                type="button"
                className="btn btn--accent btn--sm"
                onClick={() =>
                  downloadTextFile(
                    `contato-${slugifyName(fields.name)}.txt`,
                    output,
                  )
                }
              >
                <Download size={15} />
                Baixar .txt
              </button>
            </div>
          </div>
          <pre>{output}</pre>
        </div>
      ) : null}
    </form>
  );
}
