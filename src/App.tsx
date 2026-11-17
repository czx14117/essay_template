import { useMemo, useState } from 'react';
import {
  BookOpen,
  Check,
  ClipboardCheck,
  Copy,
  FileText,
  RotateCcw,
  Search,
  X,
} from 'lucide-react';
import {
  CATEGORY_GROUPS,
  ESSAY_TEMPLATES,
  EssayTemplate,
  UNIVERSAL_MODULES,
} from './data/templates';
import {
  ExamWorkflowView,
  KeywordBankView,
  UniversalBodyView,
} from './components/UniversalView';

type TopSection = 'templates' | 'universal' | 'keywords' | 'workflow';
type WorkspaceTab = 'template' | 'example';

function countWords(text: string): number {
  const cleaned = text.replace(/【[^】]+】/g, ' placeholder ').trim();
  if (!cleaned) return 0;
  return cleaned.split(/\s+/).filter(Boolean).length;
}

function resolveText(text: string, values: Record<string, string>): string {
  return text.replace(/【([^】]+)】/g, (fullMatch, key: string) => {
    const val = values[key]?.trim();
    return val ? val : fullMatch;
  });
}

async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
}

function renderInteractiveProse(
  text: string,
  values: Record<string, string>,
  onFocusKeyword?: (key: string) => void
) {
  const parts = text.split(/(【[^】]+】)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('【') && part.endsWith('】')) {
      const key = part.slice(1, -1);
      const filled = values[key]?.trim();
      if (filled) {
        return (
          <button
            key={idx}
            type="button"
            onClick={() => onFocusKeyword?.(key)}
            title={`点击定位关键词：${key}`}
            className="inline bg-emerald-50 text-emerald-900 border-b border-emerald-400 px-1 mx-0.5 font-sans text-[0.92em] font-medium hover:bg-emerald-100 transition-colors cursor-pointer"
          >
            {filled}
          </button>
        );
      }
      return (
        <button
          key={idx}
          type="button"
          onClick={() => onFocusKeyword?.(key)}
          title={`点击填写：${key}`}
          className="inline bg-sky-50 text-sky-800 border-b border-sky-300 px-1 mx-0.5 font-mono text-[0.86em] hover:bg-sky-100 transition-colors cursor-pointer"
        >
          {part}
        </button>
      );
    }
    return <span key={idx}>{part}</span>;
  });
}

export default function App() {
  const [activeSection, setActiveSection] = useState<TopSection>('templates');
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(ESSAY_TEMPLATES[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [workspaceTab, setWorkspaceTab] = useState<WorkspaceTab>('template');
  const [selectedOpeningByTemplate, setSelectedOpeningByTemplate] = useState<
    Record<string, string>
  >({});
  const [includeReason3, setIncludeReason3] = useState<boolean>(false);
  const [keywordValuesByTemplate, setKeywordValuesByTemplate] = useState<
    Record<string, Record<string, string>>
  >({});
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [highlightedKey, setHighlightedKey] = useState<string | null>(null);

  const filteredTemplates = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return ESSAY_TEMPLATES;
    return ESSAY_TEMPLATES.filter(
      (t) =>
        t.code.toLowerCase().includes(q) ||
        t.name.toLowerCase().includes(q) ||
        t.englishName.toLowerCase().includes(q) ||
        t.summary.toLowerCase().includes(q) ||
        t.examExample.title.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const activeTemplate: EssayTemplate = useMemo(() => {
    return (
      ESSAY_TEMPLATES.find((t) => t.id === selectedTemplateId) ?? ESSAY_TEMPLATES[0]
    );
  }, [selectedTemplateId]);

  const currentValues = keywordValuesByTemplate[activeTemplate.id] ?? {};

  const activeOpeningSentence = useMemo(() => {
    const chosenId = selectedOpeningByTemplate[activeTemplate.id];
    const found = activeTemplate.altOpenings.find((o) => o.id === chosenId);
    return found ? found.sentence : activeTemplate.defaultOpening;
  }, [activeTemplate, selectedOpeningByTemplate]);

  const rawP1 = `${activeOpeningSentence} ${activeTemplate.p1Rest}`;
  const rawP2 =
    includeReason3 && activeTemplate.p2OptionalReason3
      ? `${activeTemplate.p2} ${activeTemplate.p2OptionalReason3}`
      : activeTemplate.p2;
  const rawP3 = activeTemplate.p3;

  const resolvedP1 = resolveText(rawP1, currentValues);
  const resolvedP2 = resolveText(rawP2, currentValues);
  const resolvedP3 = resolveText(rawP3, currentValues);
  const resolvedFullEssay = `${resolvedP1}\n\n${resolvedP2}\n\n${resolvedP3}`;

  const totalWordCount = useMemo(() => {
    if (workspaceTab === 'example') {
      const ex = activeTemplate.examExample;
      return countWords(`${ex.p1} ${ex.p2} ${ex.p3}`);
    }
    return countWords(`${resolvedP1} ${resolvedP2} ${resolvedP3}`);
  }, [workspaceTab, activeTemplate, resolvedP1, resolvedP2, resolvedP3]);

  const filledSlotCount = useMemo(() => {
    return activeTemplate.keywords.filter(
      (kw) => Boolean(currentValues[kw.key]?.trim())
    ).length;
  }, [activeTemplate, currentValues]);

  const triggerCopy = async (key: string, text: string) => {
    await copyToClipboard(text);
    setCopiedKey(key);
    window.setTimeout(() => {
      setCopiedKey((prev) => (prev === key ? null : prev));
    }, 1800);
  };

  const handleSelectTemplate = (id: string) => {
    setSelectedTemplateId(id);
    setActiveSection('templates');
    setHighlightedKey(null);
  };

  const handleUpdateKeyword = (key: string, value: string) => {
    setKeywordValuesByTemplate((prev) => ({
      ...prev,
      [activeTemplate.id]: {
        ...(prev[activeTemplate.id] ?? {}),
        [key]: value,
      },
    }));
  };

  const handleFillSample = () => {
    const filled: Record<string, string> = {};
    for (const kw of activeTemplate.keywords) {
      filled[kw.key] = kw.sampleValue;
    }
    setKeywordValuesByTemplate((prev) => ({
      ...prev,
      [activeTemplate.id]: filled,
    }));
  };

  const handleResetBlanks = () => {
    setKeywordValuesByTemplate((prev) => ({
      ...prev,
      [activeTemplate.id]: {},
    }));
    setHighlightedKey(null);
  };

  const handleFocusKeyword = (key: string) => {
    setHighlightedKey(key);
    const inputEl = document.getElementById(`kw-input-${key}`);
    if (inputEl) {
      inputEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      inputEl.focus();
    }
  };

  const handleHeaderPrimaryAction = () => {
    if (activeSection === 'templates') {
      const text =
        workspaceTab === 'example'
          ? `${activeTemplate.examExample.p1}\n\n${activeTemplate.examExample.p2}\n\n${activeTemplate.examExample.p3}`
          : resolvedFullEssay;
      void triggerCopy('header-primary', text);
      return;
    }
    if (activeSection === 'universal') {
      const masterText = `${UNIVERSAL_MODULES.p2Master.standardText}\n\n${UNIVERSAL_MODULES.p3Master.standardText}`;
      void triggerCopy('header-primary', masterText);
      return;
    }
    if (activeSection === 'keywords') {
      const allPhrases = UNIVERSAL_MODULES.sixAspects
        .map((g) => `${g.aspect}\n${g.phrases.join('\n')}`)
        .join('\n\n');
      void triggerCopy('header-primary', allPhrases);
      return;
    }
    const workflowText = UNIVERSAL_MODULES.examWorkflow
      .map((w) => `${w.step}\n${w.detail}`)
      .join('\n\n');
    void triggerCopy('header-primary', workflowText);
  };

  const headerActionLabel =
    activeSection === 'templates'
      ? workspaceTab === 'example'
        ? 'Copy Exam Sample'
        : 'Copy Full Essay'
      : activeSection === 'universal'
      ? 'Copy P2 & P3 Masters'
      : activeSection === 'keywords'
      ? 'Copy Keyword Bank'
      : 'Copy Exam Checklist';

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900">
      {/* Top Bar: 3-Zone Contract */}
      <header className="sticky top-0 z-30 bg-white border-b border-slate-200">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single-element Brand Wordmark */}
          <button
            type="button"
            onClick={() => setActiveSection('templates')}
            className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            Kaoyan Writing Studio
          </button>

          {/* Zone 2: Clean single-line navigation links */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-6 text-sm font-medium"
          >
            {(
              [
                { id: 'templates', label: 'Templates' },
                { id: 'universal', label: 'Universal Body' },
                { id: 'keywords', label: 'Keyword Bank' },
                { id: 'workflow', label: 'Exam Workflow' },
              ] as const
            ).map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveSection(item.id)}
                  className={`py-1 border-b-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 ${
                    isActive
                      ? 'border-sky-700 text-slate-900 font-semibold'
                      : 'border-transparent text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={handleHeaderPrimaryAction}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              {copiedKey === 'header-primary' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{headerActionLabel}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Section Tabs (only on < md viewports) */}
        <div className="md:hidden border-t border-slate-100 px-4 py-2 flex items-center gap-4 overflow-x-auto text-xs font-medium">
          {(
            [
              { id: 'templates', label: 'Templates' },
              { id: 'universal', label: 'Universal Body' },
              { id: 'keywords', label: 'Keyword Bank' },
              { id: 'workflow', label: 'Exam Workflow' },
            ] as const
          ).map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveSection(item.id)}
              className={`py-1 whitespace-nowrap shrink-0 ${
                activeSection === item.id
                  ? 'text-sky-700 font-semibold'
                  : 'text-slate-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 w-full max-w-[1360px] mx-auto px-4 sm:px-6 py-8">
        {activeSection === 'universal' && <UniversalBodyView />}
        {activeSection === 'keywords' && <KeywordBankView />}
        {activeSection === 'workflow' && <ExamWorkflowView />}

        {activeSection === 'templates' && (
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left Category Sidebar */}
            <aside className="w-full lg:w-[290px] shrink-0 lg:sticky lg:top-24 space-y-5">
              {/* Search Box */}
              <div className="relative">
                <Search
                  className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  aria-hidden="true"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="筛选题型、图类或真题（如 2024）"
                  aria-label="Filter essay template categories"
                  className="w-full pl-9 pr-8 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                )}
              </div>

              {/* Category List */}
              {filteredTemplates.length === 0 ? (
                <div className="bg-white border border-slate-200 rounded-xl p-5 text-center space-y-3">
                  <p className="text-sm text-slate-600">未找到匹配的模板分类。</p>
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="px-3 py-1.5 text-xs font-medium text-sky-700 bg-sky-50 rounded-lg hover:bg-sky-100 transition-colors cursor-pointer"
                  >
                    重置筛选
                  </button>
                </div>
              ) : (
                <div className="bg-white border border-slate-200 rounded-xl divide-y divide-slate-200">
                  {CATEGORY_GROUPS.map((group) => {
                    const items = filteredTemplates.filter((t) => t.group === group.id);
                    if (items.length === 0) return null;

                    return (
                      <div key={group.id} className="p-3 space-y-1.5">
                        <div className="px-2.5 pt-1 pb-1 text-xs font-semibold text-slate-500">
                          {group.label}
                        </div>
                        <div className="space-y-1">
                          {items.map((tpl) => {
                            const isSelected = tpl.id === activeTemplate.id;
                            return (
                              <button
                                key={tpl.id}
                                type="button"
                                onClick={() => handleSelectTemplate(tpl.id)}
                                className={`w-full text-left px-3 py-2.5 rounded-lg transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 ${
                                  isSelected
                                    ? 'bg-sky-50 text-sky-950'
                                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                                }`}
                              >
                                <div className="flex items-center justify-between gap-2">
                                  <span className="flex items-center gap-2 min-w-0">
                                    <span
                                      className={`font-mono text-xs font-medium tabular-nums shrink-0 ${
                                        isSelected ? 'text-sky-700' : 'text-slate-400'
                                      }`}
                                    >
                                      {tpl.code}
                                    </span>
                                    <span className="text-sm font-semibold truncate">
                                      {tpl.name}
                                    </span>
                                  </span>
                                </div>
                                <p className="mt-0.5 pl-6 text-xs text-slate-500 truncate">
                                  {tpl.englishName}
                                </p>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Quick Info Strip */}
              <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2 text-xs text-slate-600">
                <div className="font-semibold text-slate-800">英语二大作文结构准则</div>
                <p className="leading-relaxed">
                  第一段分题型套用，第二、三段全题型通用。全文控制在{' '}
                  <span className="font-mono tabular-nums text-slate-900">~150</span> 词（固定{' '}
                  <span className="font-mono tabular-nums text-slate-900">120–140</span> 词 + 填空{' '}
                  <span className="font-mono tabular-nums text-slate-900">20–30</span> 词）。
                </p>
              </div>
            </aside>

            {/* Right Main Stage */}
            <main className="flex-1 min-w-0 space-y-6">
              {/* Template Title & Controls Header */}
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
                    <span>{activeTemplate.groupLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{activeTemplate.priority}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">
                      固定词 {activeTemplate.fixedWordCount}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">
                      预计总词数 {activeTemplate.estimatedTotalRange} 词
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 text-balance">
                    {activeTemplate.code}. {activeTemplate.name}
                  </h1>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
                    {activeTemplate.applicability}
                  </p>
                </div>

                {/* Workspace Toolbar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  {/* Segmented View Mode Control */}
                  <div
                    role="tablist"
                    aria-label="Template display mode"
                    className="inline-flex items-center gap-1 p-1 bg-slate-200/70 rounded-lg"
                  >
                    <button
                      type="button"
                      role="tab"
                      aria-selected={workspaceTab === 'template'}
                      onClick={() => setWorkspaceTab('template')}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        workspaceTab === 'template'
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <FileText className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>可填空模板</span>
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={workspaceTab === 'example'}
                      onClick={() => setWorkspaceTab('example')}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        workspaceTab === 'example'
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>对应真题示例</span>
                    </button>
                  </div>

                  {/* Action Controls for Template Mode */}
                  {workspaceTab === 'template' && (
                    <div className="flex flex-wrap items-center gap-2">
                      {activeTemplate.p2OptionalReason3 && (
                        <button
                          type="button"
                          onClick={() => setIncludeReason3((prev) => !prev)}
                          className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                            includeReason3
                              ? 'bg-sky-50 border-sky-300 text-sky-900'
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <ClipboardCheck className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>{includeReason3 ? '已含原因3（虚拟语气）' : '加入原因3（备选）'}</span>
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={handleFillSample}
                        className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-sky-800 bg-sky-50 border border-sky-200 rounded-lg hover:bg-sky-100 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        <span>一键填入真题词</span>
                      </button>
                      <button
                        type="button"
                        onClick={handleResetBlanks}
                        className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>清空填空</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* TEMPLATE & FILL-IN VIEW */}
              {workspaceTab === 'template' ? (
                <>
                  {/* Main Readable & Copyable Three-Paragraph Sheet */}
                  <section className="bg-white border border-slate-200 rounded-xl divide-y divide-slate-200">
                    {/* Sheet Status & Master Copy Bar */}
                    <div className="px-6 py-4 flex flex-wrap items-center justify-between gap-4 bg-slate-50/60 rounded-t-xl">
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 tabular-nums">
                        <span className="font-mono font-medium text-slate-900">
                          当前词数：{totalWordCount} words
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>
                          已填关键词：{filledSlotCount} / {activeTemplate.keywords.length}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>点击文中蓝色【】槽位可快速定位填写</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => triggerCopy('sheet-full', resolvedFullEssay)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-sky-700 rounded-lg hover:bg-sky-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        {copiedKey === 'sheet-full' ? (
                          <>
                            <Check className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>已复制全文</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>复制完整三段模板</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Paragraph 1 */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between gap-4">
                        <div className="text-xs font-semibold text-slate-500">
                          Paragraph 1 · 题型专属引入（总体描述 + 细节描述 + 现象/寓意）
                        </div>
                        <button
                          type="button"
                          onClick={() => triggerCopy('p1', resolvedP1)}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-md hover:bg-slate-50 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                        >
                          {copiedKey === 'p1' ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-700" aria-hidden="true" />
                              <span className="text-emerald-700">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" aria-hidden="true" />
                              <span>Copy P1</span>
                            </>
                          )}
                        </button>
                      </div>
                      <p className="font-serif text-[17px] leading-[1.85] text-slate-800">
                        {renderInteractiveProse(rawP1, currentValues, handleFocusKeyword)}
                      </p>
                    </div>

                    {/* Paragraph 2 */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between gap-4">
                        <div className="text-xs font-semibold text-slate-500">
                          Paragraph 2 · 通用母版（过渡句 + 原因1 + 原因2
                          {includeReason3 ? ' + 原因3' : ''}）
                        </div>
                        <button
                          type="button"
                          onClick={() => triggerCopy('p2', resolvedP2)}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-md hover:bg-slate-50 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                        >
                          {copiedKey === 'p2' ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-700" aria-hidden="true" />
                              <span className="text-emerald-700">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" aria-hidden="true" />
                              <span>Copy P2</span>
                            </>
                          )}
                        </button>
                      </div>
                      <p className="font-serif text-[17px] leading-[1.85] text-slate-800">
                        {renderInteractiveProse(rawP2, currentValues, handleFocusKeyword)}
                      </p>
                    </div>

                    {/* Paragraph 3 */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between gap-4">
                        <div className="text-xs font-semibold text-slate-500">
                          Paragraph 3 · 通用母版（总结全文 + 具体措施1&amp;2 + 畅想未来）
                        </div>
                        <button
                          type="button"
                          onClick={() => triggerCopy('p3', resolvedP3)}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-md hover:bg-slate-50 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                        >
                          {copiedKey === 'p3' ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-700" aria-hidden="true" />
                              <span className="text-emerald-700">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" aria-hidden="true" />
                              <span>Copy P3</span>
                            </>
                          )}
                        </button>
                      </div>
                      <p className="font-serif text-[17px] leading-[1.85] text-slate-800">
                        {renderInteractiveProse(rawP3, currentValues, handleFocusKeyword)}
                      </p>
                    </div>
                  </section>

                  {/* Alternative Paragraph 1 Opening Sentences */}
                  <section className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
                    <div className="space-y-1">
                      <h2 className="text-base font-semibold text-slate-900">
                        第一段可替换开头句（点击直接切换上方第一段首句）
                      </h2>
                      <p className="text-xs text-slate-500">
                        {activeTemplate.openingPlaceholderNote}
                      </p>
                    </div>
                    <div className="space-y-2.5">
                      {activeTemplate.altOpenings.map((opt) => {
                        const isSelected = opt.sentence === activeOpeningSentence;
                        return (
                          <div
                            key={opt.id}
                            className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-lg border transition-colors ${
                              isSelected
                                ? 'bg-sky-50/70 border-sky-300'
                                : 'bg-white border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            <button
                              type="button"
                              onClick={() =>
                                setSelectedOpeningByTemplate((prev) => ({
                                  ...prev,
                                  [activeTemplate.id]: opt.id,
                                }))
                              }
                              className="text-left flex-1 space-y-1 cursor-pointer"
                            >
                              <div className="text-xs font-semibold text-slate-600">
                                {opt.label}
                                {isSelected && ' · 当前已选用'}
                              </div>
                              <div className="font-serif text-sm text-slate-900 leading-relaxed">
                                {opt.sentence}
                              </div>
                            </button>
                            <button
                              type="button"
                              onClick={() =>
                                triggerCopy(opt.id, resolveText(opt.sentence, currentValues))
                              }
                              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-md hover:bg-slate-50 whitespace-nowrap shrink-0 cursor-pointer self-start sm:self-center"
                            >
                              {copiedKey === opt.id ? (
                                <>
                                  <Check className="w-3 h-3 text-emerald-700" aria-hidden="true" />
                                  <span className="text-emerald-700">Copied</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3" aria-hidden="true" />
                                  <span>Copy</span>
                                </>
                              )}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </section>

                  {/* Live Keyword Fill-in & Reference Table */}
                  <section className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="space-y-1">
                        <h2 className="text-base font-semibold text-slate-900">
                          填空关键词工作表（中英对照 + 实时代入）
                        </h2>
                        <p className="text-xs text-slate-500">
                          在下方输入关键词，上方三段模板会自动同步更新并计算词数；也可点击右侧“填入示例”快速测试。
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {activeTemplate.keywords.map((kw) => {
                        const val = currentValues[kw.key] ?? '';
                        const isHighlighted = highlightedKey === kw.key;
                        return (
                          <div
                            key={kw.key}
                            className={`p-3.5 rounded-lg border transition-colors space-y-2 ${
                              isHighlighted
                                ? 'border-sky-500 bg-sky-50/40'
                                : 'border-slate-200 bg-slate-50/40'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <label
                                htmlFor={`kw-input-${kw.key}`}
                                className="flex items-center gap-2 text-xs font-semibold text-slate-800"
                              >
                                <span className="font-mono text-sky-800">【{kw.key}】</span>
                                <span>{kw.labelCn}</span>
                              </label>
                              <button
                                type="button"
                                onClick={() => handleUpdateKeyword(kw.key, kw.sampleValue)}
                                className="text-xs font-medium text-sky-700 hover:text-sky-900 whitespace-nowrap shrink-0 cursor-pointer"
                              >
                                填入示例
                              </button>
                            </div>
                            <input
                              id={`kw-input-${kw.key}`}
                              type="text"
                              value={val}
                              onChange={(e) => handleUpdateKeyword(kw.key, e.target.value)}
                              placeholder={kw.sampleValue}
                              className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-md text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                            />
                            <div className="text-xs text-slate-500 leading-snug">
                              <span>{kw.grammarNote}</span>
                              <span aria-hidden="true"> · </span>
                              <span className="font-mono text-[11px] text-slate-600">
                                {kw.examples}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                </>
              ) : (
                /* PAST EXAM EXAMPLE VIEW */
                <section className="bg-white border border-slate-200 rounded-xl divide-y divide-slate-200">
                  <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/60 rounded-t-xl">
                    <div className="space-y-1">
                      <h2 className="text-base sm:text-lg font-semibold text-slate-900">
                        {activeTemplate.examExample.title}
                      </h2>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {activeTemplate.examExample.sourceNote}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        triggerCopy(
                          'exam-full',
                          `${activeTemplate.examExample.p1}\n\n${activeTemplate.examExample.p2}\n\n${activeTemplate.examExample.p3}`
                        )
                      }
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-sky-700 rounded-lg hover:bg-sky-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer self-start sm:self-center"
                    >
                      {copiedKey === 'exam-full' ? (
                        <>
                          <Check className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>已复制真题范例</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>复制整篇真题示例</span>
                        </>
                      )}
                    </button>
                  </div>

                  {[
                    { key: 'ex-p1', label: '第一段（PDF 真题示例）', text: activeTemplate.examExample.p1 },
                    { key: 'ex-p2', label: '第二段（PDF 对应原因句 / 母版组合）', text: activeTemplate.examExample.p2 },
                    { key: 'ex-p3', label: '第三段（PDF 对应总结措施 / 母版组合）', text: activeTemplate.examExample.p3 },
                  ].map((para) => (
                    <div key={para.key} className="p-6 space-y-3">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs font-semibold text-slate-500">{para.label}</span>
                        <button
                          type="button"
                          onClick={() => triggerCopy(para.key, para.text)}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-600 border border-slate-200 rounded-md hover:bg-slate-50 whitespace-nowrap shrink-0 cursor-pointer"
                        >
                          {copiedKey === para.key ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-700" aria-hidden="true" />
                              <span className="text-emerald-700">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" aria-hidden="true" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                      <p className="font-serif text-[17px] leading-[1.85] text-slate-800 whitespace-pre-line">
                        {para.text}
                      </p>
                    </div>
                  ))}
                </section>
              )}
            </main>
          </div>
        )}
      </div>

      {/* Quiet Footer */}
      <footer className="border-t border-slate-200 bg-white mt-12">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>考研英语二大作文可填空模板库 · 严格依据《27考研英语大作文模板》整理</span>
          <span className="tabular-nums">共 8 类模板 · 目标字数约 150 词</span>
        </div>
      </footer>
    </div>
  );
}
