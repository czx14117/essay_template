import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { UNIVERSAL_MODULES } from '../data/templates';

interface CopyButtonProps {
  text: string;
  label?: string;
}

function CopyButton({ text, label = 'Copy' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Fallback copy method if clipboard API is restricted
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
          <span className="text-emerald-700">Copied</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
}

function renderFormattedTemplateText(text: string) {
  const parts = text.split(/(【[^】]+】)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('【') && part.endsWith('】')) {
      return (
        <span
          key={idx}
          className="inline-block bg-sky-50 text-sky-800 border-b border-sky-300 px-1 mx-0.5 font-mono text-[0.88em] leading-snug"
        >
          {part}
        </span>
      );
    }
    return <span key={idx}>{part}</span>;
  });
}

export function UniversalBodyView() {
  const { p2Master, p3Master } = UNIVERSAL_MODULES;

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <div className="space-y-2">
        <p className="text-xs font-medium text-slate-500">
          Universal Paragraphs · Second &amp; Third Paragraph Masters · PDF Sections 3.2 &amp; 3.3
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 text-balance">
          通用第二段与第三段母版
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
          图表、图画与文字作文的第二、三段完全通用。只需针对不同题型套用第一段，再直接拼接以下母版，即可在考场稳定输出约 150 词。
        </p>
      </div>

      {/* Universal Paragraph 2 */}
      <section className="bg-white border border-slate-200 rounded-xl divide-y divide-slate-200">
        <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-slate-900">{p2Master.title}</h2>
            <p className="text-xs text-slate-500">{p2Master.subtitle}</p>
          </div>
          <CopyButton
            text={`${p2Master.standardText}\n\n[备选原因3]\n${p2Master.reason3Text}`}
            label="Copy P2 Master"
          />
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs font-medium text-slate-500">标准通用版（2 点原因，英语二首选）</span>
            <CopyButton text={p2Master.standardText} label="Copy Standard P2" />
          </div>
          <p className="font-serif text-[17px] leading-[1.85] text-slate-800">
            {renderFormattedTemplateText(p2Master.standardText)}
          </p>
        </div>

        <div className="p-6 space-y-3 bg-slate-50/50">
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs font-medium text-slate-500">
              备选原因 3：虚拟语气警醒法（放段尾，字数不够时加入）
            </span>
            <CopyButton text={p2Master.reason3Text} label="Copy Reason 3" />
          </div>
          <p className="font-serif text-[16px] leading-[1.8] text-slate-800">
            {renderFormattedTemplateText(p2Master.reason3Text)}
          </p>
        </div>

        <div className="p-6 space-y-3">
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs font-medium text-slate-500">
              争议话题正反论证版（利弊并存题目如手机阅读/兼职替换使用）
            </span>
            <CopyButton text={p2Master.controversialText} label="Copy Controversial P2" />
          </div>
          <p className="font-serif text-[16px] leading-[1.8] text-slate-800">
            {renderFormattedTemplateText(p2Master.controversialText)}
          </p>
        </div>

        <div className="p-6 space-y-3">
          <h3 className="text-xs font-semibold text-slate-700">第二段其他可选替换方案（出自 PDF 七大方案）</h3>
          <div className="divide-y divide-slate-100">
            {p2Master.alternatives.map((alt) => (
              <div key={alt.label} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="text-xs font-medium text-slate-500">{alt.label}</div>
                  <div className="text-sm text-slate-800 font-serif">{renderFormattedTemplateText(alt.text)}</div>
                </div>
                <CopyButton text={alt.text} label="Copy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universal Paragraph 3 */}
      <section className="bg-white border border-slate-200 rounded-xl divide-y divide-slate-200">
        <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-slate-900">{p3Master.title}</h2>
            <p className="text-xs text-slate-500">{p3Master.subtitle}</p>
          </div>
          <CopyButton text={p3Master.standardText} label="Copy P3 Master" />
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs font-medium text-slate-500">标准高分版（总结全文 + 两角度措施 + 畅想未来）</span>
            <CopyButton text={p3Master.standardText} label="Copy Standard P3" />
          </div>
          <p className="font-serif text-[17px] leading-[1.85] text-slate-800">
            {renderFormattedTemplateText(p3Master.standardText)}
          </p>
        </div>

        <div className="p-6 space-y-3 bg-slate-50/50">
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs font-medium text-slate-500">
              图表作文应急简化版（总结 + 趋势预测，仅时间紧张时使用）
            </span>
            <CopyButton text={p3Master.trendFallbackText} label="Copy Fallback P3" />
          </div>
          <p className="font-serif text-[16px] leading-[1.8] text-slate-800">
            {renderFormattedTemplateText(p3Master.trendFallbackText)}
          </p>
        </div>

        <div className="p-6 space-y-3">
          <h3 className="text-xs font-semibold text-slate-700">第三段高频替换句（出自 PDF 第八、十一句）</h3>
          <div className="divide-y divide-slate-100">
            {p3Master.alternatives.map((alt) => (
              <div key={alt.label} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="text-xs font-medium text-slate-500">{alt.label}</div>
                  <div className="text-sm text-slate-800 font-serif">{renderFormattedTemplateText(alt.text)}</div>
                </div>
                <CopyButton text={alt.text} label="Copy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function KeywordBankView() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-2">
        <p className="text-xs font-medium text-slate-500">
          Six-Aspect Vocabulary Bank · PDF Pages 45–49
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 text-balance">
          六大方面万能语料库
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
          PDF 强调“不要写你想写的，要写你会写的”。考试时围绕“社会、个人”两大高频方面即可命中绝大多数真题，点击任意词组卡片即可复制。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {UNIVERSAL_MODULES.sixAspects.map((group) => (
          <section key={group.aspect} className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
            <h2 className="text-base font-semibold text-slate-900">{group.aspect}</h2>
            <ul className="divide-y divide-slate-100">
              {group.phrases.map((phrase) => {
                const engOnly = phrase.split('（')[0].trim();
                return (
                  <li key={phrase} className="py-2.5 flex items-center justify-between gap-3">
                    <span className="text-sm text-slate-700 leading-snug">{phrase}</span>
                    <CopyButton text={engOnly} label="Copy" />
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

export function ExamWorkflowView() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-2">
        <p className="text-xs font-medium text-slate-500">
          25-Minute Exam Strategy · 5 Min Planning + 20 Min Writing · 150 Words Target
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 text-balance">
          考场套用流程：审题 → 选模板 → 填关键词 → 检查
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
          严格按照讲义时间分配，大作文控制在 25 分钟以内完成（含 5 分钟构建框架与 20 分钟默写），把充足时间留给阅读理解。
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl divide-y divide-slate-200">
        {UNIVERSAL_MODULES.examWorkflow.map((item) => (
          <div key={item.step} className="p-6 space-y-2">
            <h2 className="text-base font-semibold text-slate-900 tabular-nums">{item.step}</h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
