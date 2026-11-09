"use client";

import { useState } from "react";
import { Download, Send } from "lucide-react";
import { units } from "@/data/units";
import { CopyButton } from "./CopyButton";
import { downloadTextFile, slugifyName } from "@/lib/forms";

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

export function RecruitmentForm() {
  const [fields, setFields] = useState<Fields>(initial);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!fields.callsign.trim() || !fields.discord.trim()) {
      setError("Preencha o indicativo e o contato Discord para gerar a ficha.");
      return;
    }
    if (fields.motivation.trim().length < 20) {
      setError("Descreva sua motivação com pelo menos 20 caracteres.");
      return;
    }
    setError("");
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
      "O envio deve ser feito pelo canal oficial de recrutamento.",
    ].join("\n");
    setOutput(block);
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
        <button type="submit" className="btn btn--primary">
          <Send size={16} />
          Gerar ficha
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
        Nenhum dado é enviado a servidores. A ficha é gerada no seu navegador
        para envio manual pelo canal oficial.
      </p>

      {output ? (
        <div className="form-output" aria-live="polite">
          <div className="form-output__head">
            <strong>Ficha gerada</strong>
            <div className="btn-row">
              <CopyButton text={output} label="Copiar ficha" />
              <button
                type="button"
                className="btn btn--olive btn--sm"
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
