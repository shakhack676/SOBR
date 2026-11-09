"use client";

import { useCallback, useState } from "react";
import { Download, Send, AlertCircle, CheckCircle } from "lucide-react";
import { units } from "@/data/units";
import { CopyButton } from "./CopyButton";
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

    sendToDiscord()
      .then(() => {
        setSubmitStatus("ok");
        setSubmitting(false);
      })
      .catch((err) => {
        console.error("Erro ao enviar webhook:", err);
        setSubmitStatus("fail");
        setSubmitting(false);
        setError("Não foi possível enviar a inscrição ao Discord. Tente novamente ou use o botão Copiar ficha para enviar manualmente.");
      });
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
          <CheckCircle size={18} />
          <span>Inscrição enviada ao comando oficial do СОБР.</span>
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
    </form>
  );
}
