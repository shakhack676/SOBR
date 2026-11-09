"use client";

import { useCallback, useEffect, useState } from "react";
import { Download, Send, AlertCircle, CheckCircle, X } from "lucide-react";
import { units } from "@/data/units";
import { site } from "@/data/site";
import { CopyButton } from "./CopyButton";
import { DiscordIcon } from "./DiscordIcon";
import { downloadTextFile, slugifyName } from "@/lib/forms";

const DISCORD_WEBHOOK_URL =
  "https://discord.com/api/webhooks/1569139288359309342/IX3UgykR-d_8zG4B2Gc7l5OpybvIORVuLlWiLc0ej60u7IrY-0rm0tSEu6r63UI-4WcL";

type Fields = {
  callsign: string;
  age: string;
  discord: string;
  hours: string;
  experience: string;
  unit: string;
  motivation: string;
};

const initial: Fields = {
  callsign: "",
  age: "",
  discord: "",
  hours: "5 a 10 horas",
  experience: "Sem experiência",
  unit: units[0].role,
  motivation: "",
};

function truncate(value: string, max = 900): string {
  return value.length > max ? value.slice(0, max - 1).trim() + "…" : value;
}

export function RecruitmentForm() {
  const [fields, setFields] = useState<Fields>(initial);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "ok" | "fail">(
    "idle",
  );
  const [showDiscordModal, setShowDiscordModal] = useState(false);

  useEffect(() => {
    if (!showDiscordModal) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !submitting) {
        setShowDiscordModal(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showDiscordModal, submitting]);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  const sendToDiscord = useCallback(async () => {
    const embed = {
      title: "Nova ficha de alistamento — СОБР",
      color: 0xb91c1c,
      timestamp: new Date().toISOString(),
      footer: {
        text: "Clã de Operações Táticas СОБР · Arma Reforger",
      },
      fields: [
        { name: "Indicativo", value: fields.callsign.trim() || "—", inline: true },
        { name: "Idade", value: fields.age.trim() || "Não informada", inline: true },
        { name: "Discord", value: fields.discord.trim() || "—", inline: true },
        {
          name: "Disponibilidade semanal",
          value: fields.hours,
          inline: true,
        },
        {
          name: "Experiência em MilSim",
          value: fields.experience,
          inline: true,
        },
        {
          name: "Unidade de preferência",
          value: fields.unit,
          inline: true,
        },
        {
          name: "Motivação",
          value: truncate(fields.motivation.trim()),
          inline: false,
        },
      ],
    };

    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "СОБР — Recrutamento",
        avatar_url: "https://sobr.vercel.app/images/logo-sobr.png",
        embeds: [embed],
      }),
    });

    if (!response.ok) {
      throw new Error(`Discord retornou ${response.status}`);
    }
  }, [fields]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!fields.callsign.trim() || !fields.discord.trim()) {
      setError("Preencha o indicativo e o contato Discord para enviar a inscrição.");
      return;
    }
    if (fields.motivation.trim().length < 20) {
      setError("Descreva sua motivação com pelo menos 20 caracteres.");
      return;
    }

    setError("");
    // Abre a mensagem de aviso perguntando se está no Discord antes de concluir o envio
    setShowDiscordModal(true);
  }

  async function executeSubmit() {
    setError("");
    setSubmitStatus("idle");
    setSubmitting(true);

    const block = [
      "FICHA DE ALISTAMENTO — СОБР",
      "Clã de operações táticas · Arma Reforger",
      "Documento gerado localmente pelo candidato.",
      "",
      `Indicativo: ${fields.callsign.trim()}`,
      `Idade: ${fields.age.trim() || "Não informada"}`,
      `Discord: ${fields.discord.trim()}`,
      `Disponibilidade semanal: ${fields.hours}`,
      `Experiência em MilSim: ${fields.experience}`,
      `Unidade de preferência: ${fields.unit}`,
      "",
      "Motivação:",
      fields.motivation.trim(),
      "",
      "— Fim da ficha —",
      "A inscrição foi enviada ao comando via webhook oficial.",
    ].join("\n");
    setOutput(block);

    try {
      await sendToDiscord();
      setSubmitStatus("ok");
      setShowDiscordModal(false);
    } catch (err) {
      console.error("Erro ao enviar webhook:", err);
      setSubmitStatus("fail");
      setError(
        "Não foi possível enviar a inscrição ao Discord. Tente novamente ou use o botão Copiar ficha para enviar manualmente.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="form-panel" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="callsign">
            Indicativo <span>*</span>
          </label>
          <input
            id="callsign"
            name="callsign"
            value={fields.callsign}
            onChange={(event) => update("callsign", event.target.value)}
            placeholder="Ex.: Operador-07"
            autoComplete="nickname"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="age">Idade</label>
          <input
            id="age"
            name="age"
            inputMode="numeric"
            value={fields.age}
            onChange={(event) => update("age", event.target.value)}
            placeholder="Opcional"
          />
        </div>
        <div className="field">
          <label htmlFor="discord">
            Discord <span>*</span>
          </label>
          <input
            id="discord"
            name="discord"
            value={fields.discord}
            onChange={(event) => update("discord", event.target.value)}
            placeholder="usuario ou usuario#0000"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="hours">Disponibilidade semanal</label>
          <select
            id="hours"
            name="hours"
            value={fields.hours}
            onChange={(event) => update("hours", event.target.value)}
          >
            <option>Até 5 horas</option>
            <option>5 a 10 horas</option>
            <option>10 a 20 horas</option>
            <option>Mais de 20 horas</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="experience">Experiência em MilSim</label>
          <select
            id="experience"
            name="experience"
            value={fields.experience}
            onChange={(event) => update("experience", event.target.value)}
          >
            <option>Sem experiência</option>
            <option>Menos de 6 meses</option>
            <option>6 meses a 2 anos</option>
            <option>Mais de 2 anos</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="unit">Unidade de preferência</label>
          <select
            id="unit"
            name="unit"
            value={fields.unit}
            onChange={(event) => update("unit", event.target.value)}
          >
            {units.map((unit) => (
              <option key={unit.slug} value={unit.role}>
                {unit.role} — {unit.name}
              </option>
            ))}
            <option>Sem preferência</option>
          </select>
        </div>
        <div className="field field--full">
          <label htmlFor="motivation">
            Motivação <span>*</span>
          </label>
          <textarea
            id="motivation"
            name="motivation"
            value={fields.motivation}
            onChange={(event) => update("motivation", event.target.value)}
            placeholder="Por que você quer integrar o СОБР? Descreva sua motivação, disponibilidade e o que espera do grupo."
            required
          />
        </div>
      </div>

      <div className="recruit-discord-notice">
        <div className="recruit-discord-notice__head">
          <span className="recruit-discord-notice__icon" aria-hidden="true">
            <DiscordIcon size={24} />
          </span>
          <div>
            <strong>Aviso importante: você já está no Discord oficial?</strong>
            <p>
              Para que sua ficha seja avaliada e seu indicativo homologado pelo
              comando, é obrigatório estar presente no servidor oficial do СОБР.
            </p>
          </div>
        </div>
        <div className="recruit-discord-notice__action">
          <a
            href={site.discordInvite}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--discord btn--sm"
          >
            <DiscordIcon size={16} />
            Entrar no Discord do servidor
          </a>
        </div>
      </div>

      <div className="form-actions">
        <button
          type="submit"
          className="btn btn--primary"
          disabled={submitting}
        >
          {submitting ? (
            <>
              <Send size={16} /> Enviando…
            </>
          ) : (
            <>
              <Send size={16} />
              Enviar
            </>
          )}
        </button>
        <button
          type="button"
          className="btn btn--ghost"
          onClick={() => {
            setFields(initial);
            setOutput("");
            setError("");
            setSubmitStatus("idle");
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

      {submitStatus === "ok" ? (
        <div className="form-success" role="status">
          <CheckCircle size={20} />
          <div>
            <strong>Inscrição enviada ao comando oficial do СОБР!</strong>
            <p className="form-success__sub">
              Lembre-se: todo o processo seletivo e comunicados de treino acontecem no nosso Discord. Caso ainda não tenha entrado, acesse pelo botão abaixo:
            </p>
            <div className="form-success__action">
              <a
                href={site.discordInvite}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--discord btn--sm"
              >
                <DiscordIcon size={15} />
                Entrar no Discord do servidor
              </a>
            </div>
          </div>
        </div>
      ) : submitStatus === "fail" ? (
        <div className="form-fail" role="alert">
          <AlertCircle size={18} />
          <span>Falha ao enviar ao Discord. Veja o erro acima.</span>
        </div>
      ) : null}

      <p className="form-hint">
        A inscrição é enviada ao canal oficial de recrutamento via webhook.
        Você também pode copiar a ficha abaixo para envio manual.
      </p>

      {output ? (
        <div className="form-output" aria-live="polite">
          <div className="form-output__head">
            <strong>Ficha gerada</strong>
            <div className="btn-row">
              <CopyButton text={output} label="Copiar ficha" />
              <button
                type="button"
                className="btn btn--accent btn--sm"
                onClick={() =>
                  downloadTextFile(
                    `ficha-${slugifyName(fields.callsign)}.txt`,
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

      {showDiscordModal && (
        <div
          className="recruit-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="discord-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget && !submitting) {
              setShowDiscordModal(false);
            }
          }}
        >
          <div className="recruit-modal">
            <div className="recruit-modal__header">
              <span className="recruit-modal__badge">Verificação de alistamento</span>
              <button
                type="button"
                className="recruit-modal__close"
                onClick={() => setShowDiscordModal(false)}
                disabled={submitting}
                aria-label="Fechar aviso"
              >
                <X size={18} />
              </button>
            </div>

            <div className="recruit-modal__body">
              <span className="recruit-modal__icon" aria-hidden="true">
                <DiscordIcon size={34} />
              </span>
              <h3 id="discord-modal-title" className="recruit-modal__title">
                Você já está no Discord oficial?
              </h3>
              <p className="recruit-modal__text">
                Para que o comando possa avaliar sua ficha, realizar a entrevista
                e homologar seu indicativo, <strong>é obrigatório estar presente no servidor oficial do СОБР</strong>.
              </p>
              <p className="recruit-modal__subtext">
                Você já faz parte do nosso servidor? Se ainda não entrou, use o botão abaixo para ingressar antes de enviar.
              </p>
            </div>

            <div className="recruit-modal__actions">
              <a
                href={site.discordInvite}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--discord recruit-modal__btn-discord"
              >
                <DiscordIcon size={18} />
                Entrar no Discord do servidor
              </a>

              <button
                type="button"
                className="btn btn--primary"
                disabled={submitting}
                onClick={executeSubmit}
              >
                {submitting ? (
                  <>
                    <Send size={16} /> Enviando ficha…
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Sim, já estou no Discord · Enviar ficha
                  </>
                )}
              </button>

              <button
                type="button"
                className="btn btn--ghost"
                disabled={submitting}
                onClick={() => setShowDiscordModal(false)}
              >
                Voltar e revisar ficha
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
