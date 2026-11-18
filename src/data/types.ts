export type EssayPart = 'partA' | 'partB';

export type CategoryGroup =
  | 'chart'
  | 'drawing'
  | 'text'
  | 'small_letter'
  | 'small_notice'
  | 'small_minutes';

export interface KeywordSpec {
  key: string;
  labelCn: string;
  grammarNote: string;
  examples: string;
  sampleValue: string;
}

export interface AlternativeOpening {
  id: string;
  label: string;
  sentence: string;
}

export interface ExamExample {
  title: string;
  sourceNote: string;
  p1: string;
  p2: string;
  p3: string;
}

export interface EssayTemplate {
  id: string;
  code: string;
  part: EssayPart;
  group: CategoryGroup;
  groupLabel: string;
  name: string;
  englishName: string;
  priority: string;
  summary: string;
  applicability: string;
  fixedWordCount: number;
  blankWordRange: string;
  estimatedTotalRange: string;
  openingPlaceholderNote: string;
  headerBlock?: string;
  footerBlock?: string;
  defaultOpening: string;
  p1Rest: string;
  p2: string;
  p2OptionalReason3?: string;
  p2OptionalLabel?: string;
  p3: string;
  p1Label?: string;
  p2Label?: string;
  p3Label?: string;
  altOpenings: AlternativeOpening[];
  keywords: KeywordSpec[];
  examExample: ExamExample;
}
