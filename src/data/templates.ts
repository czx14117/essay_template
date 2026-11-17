export type CategoryGroup = 'chart' | 'drawing' | 'text';

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
  defaultOpening: string;
  p1Rest: string;
  p2: string;
  p2OptionalReason3?: string;
  p3: string;
  altOpenings: AlternativeOpening[];
  keywords: KeywordSpec[];
  examExample: ExamExample;
}

export const CATEGORY_GROUPS: { id: CategoryGroup; label: string; shortLabel: string }[] = [
  { id: 'chart', label: 'A. 图表作文（英语二核心）', shortLabel: 'Chart & Graph' },
  { id: 'drawing', label: 'B. 图画作文简版', shortLabel: 'Drawing' },
  { id: 'text', label: 'C. 文字作文简版', shortLabel: 'Text Excerpt' },
];

export const ESSAY_TEMPLATES: EssayTemplate[] = [
  {
    id: 'a1-dynamic-single',
    code: 'A1',
    group: 'chart',
    groupLabel: 'Chart · Dynamic Single Trend',
    name: '动态·单方向模板',
    englishName: 'Line / Bar Single Trend',
    priority: '高频核心',
    summary: '线图或柱图单指标/多指标朝同一方向整体上升或下降。',
    applicability: '适用于有年份跨度、数据呈单一持续上升或下降趋势的折线图、柱状图。',
    fixedWordCount: 132,
    blankWordRange: '22–28',
    estimatedTotalRange: '154–160',
    openingPlaceholderNote: '默认句型采用 Which 从句；可在下方切换为“时间作主语”或“状语式”。',
    defaultOpening:
      'The chart above illustrates the changes in 【主题词】 from 【年份1】 to 【年份2】, during which it 【变化词】.',
    p1Rest:
      'To be specific, 【主体】 【变化词1】 from 【数据1】 in 【年份1】 to 【数据2】 in 【年份2】. It is apparent from the statistics that 【主题词】 has been 【发展短语】 in recent years.',
    p2:
      'A variety of reasons can be cited to account for this phenomenon. First and foremost, there is no doubt that 【主题词】 plays a crucial role in 【原因1】. Furthermore, the majority of 【主体人群】 believe that it will create more opportunities for them to 【原因2】, which may put them in a beneficial position in the future.',
    p2OptionalReason3:
      'In the end, if we ignored the importance of 【主题词】, 【警醒对象】 would 【负面后果】.',
    p3:
      'All in all, we should bear in mind that 【主题词】 is of great importance to 【核心方面】. For one thing, it is imperative for the authorities to 【措施1】 to promote its healthy development. For another, 【主体2】 ought to spare no pains to 【措施2】. In this way, hopefully, we may embrace a brighter and more promising future.',
    altOpenings: [
      {
        id: 'a1-opt1',
        label: '默认：Which 从句',
        sentence:
          'The chart above illustrates the changes in 【主题词】 from 【年份1】 to 【年份2】, during which it 【变化词】.',
      },
      {
        id: 'a1-opt2',
        label: '备选1：时间段作主语（适合水平/率/数量）',
        sentence:
          'The period from 【年份1】 to 【年份2】 saw a steady rise in 【主题词】, as illustrated in the chart.',
      },
      {
        id: 'a1-opt3',
        label: '备选2：状语式',
        sentence:
          'According to the data given in the chart, the level of 【主题词】 climbed steadily from 【年份1】 to 【年份2】.',
      },
    ],
    keywords: [
      {
        key: '主题词',
        labelCn: '主题词（单数/不可数）',
        grammarNote: '名词短语，作主语时谓语用单数',
        examples: "Chinese residents' health literacy level / rural parcels",
        sampleValue: "Chinese residents' health literacy level",
      },
      {
        key: '年份1',
        labelCn: '起始年份',
        grammarNote: '四位年份数字',
        examples: '2012',
        sampleValue: '2012',
      },
      {
        key: '年份2',
        labelCn: '结束年份',
        grammarNote: '四位年份数字',
        examples: '2021',
        sampleValue: '2021',
      },
      {
        key: '变化词',
        labelCn: '总体变化（动词+副词）',
        grammarNote: '一般过去时',
        examples: 'rose steadily / declined gradually',
        sampleValue: 'rose steadily',
      },
      {
        key: '主体',
        labelCn: '细节句主语',
        grammarNote: '具体指标名词短语',
        examples: 'the health literacy level / the number of parcels',
        sampleValue: 'the health literacy level',
      },
      {
        key: '变化词1',
        labelCn: '细节变化（动词+副词）',
        grammarNote: '一般过去时，避免与前句完全重复',
        examples: 'climbed remarkably / increased gradually',
        sampleValue: 'climbed remarkably',
      },
      {
        key: '数据1',
        labelCn: '起始数据（带单位）',
        grammarNote: '百分比或具体单位',
        examples: '8.8%',
        sampleValue: '8.8%',
      },
      {
        key: '数据2',
        labelCn: '结束数据（带单位）',
        grammarNote: '百分比或具体单位',
        examples: '25.4%',
        sampleValue: '25.4%',
      },
      {
        key: '发展短语',
        labelCn: '近年变化状态',
        grammarNote: '现在分词（接 has been 后）',
        examples: 'improving rapidly / developing rapidly',
        sampleValue: 'improving rapidly',
      },
      {
        key: '原因1',
        labelCn: '原因1（核心影响方面）',
        grammarNote: '名词短语（选自六大方面）',
        examples: 'physical and mental health / quality of life',
        sampleValue: 'improving people’s physical and mental health',
      },
      {
        key: '主体人群',
        labelCn: '受众群体',
        grammarNote: '复数名词',
        examples: 'residents / citizens / undergraduates',
        sampleValue: 'residents',
      },
      {
        key: '原因2',
        labelCn: '原因2（具体好处）',
        grammarNote: '动词原形短语（接 to 后）',
        examples: 'choose a healthy lifestyle / develop themselves',
        sampleValue: 'choose a healthy lifestyle',
      },
      {
        key: '核心方面',
        labelCn: '总结重要性落脚点',
        grammarNote: '名词短语',
        examples: 'both our daily lives and social progress',
        sampleValue: 'both our daily lives and social progress',
      },
      {
        key: '措施1',
        labelCn: '政府措施',
        grammarNote: '动词原形短语',
        examples: 'launch public initiatives / allocate more funds',
        sampleValue: 'launch public health initiatives',
      },
      {
        key: '主体2',
        labelCn: '另一责任主体',
        grammarNote: '复数名词',
        examples: 'individuals / new media platforms',
        sampleValue: 'new media platforms',
      },
      {
        key: '措施2',
        labelCn: '个人/媒体措施',
        grammarNote: '动词原形短语',
        examples: 'raise public awareness of healthy living',
        sampleValue: 'raise public awareness of healthy living',
      },
    ],
    examExample: {
      title: '2023年英语二 · 2012—2021年我国居民健康素养水平（线状图）',
      sourceNote: '第一段直接出自 PDF p.29 原例；二三段结合 PDF p.47、p.52、p.61 该题例句组合（原资料未单列完整二三段，部分衔接词按模板补充）。',
      p1: "The line chart above illustrates the changes in Chinese residents' health literacy level from 2012 to 2021, during which it rose steadily. To be specific, the health literacy level increased gradually from 8.8% in 2012 to 11.58% in 2016. In the next five years, it climbed remarkably, from 11.58% to 25.40%. It is apparent from the statistics that the health literacy level has been improving rapidly in recent years.",
      p2: 'A variety of reasons can be cited to account for this phenomenon. First and foremost, there is no doubt that health literacy plays a crucial role in improving physical and mental health. In addition, if we ignored the importance of physical health, we would never become a better version of ourselves. (PDF p.52 原句)',
      p3: 'All in all, the discussion leads us to the realization that a healthy lifestyle is not an option, but a necessity. (PDF p.61 提示) For one thing, it is imperative for the authorities to launch public health initiatives. For another, individuals ought to spare no pains to adopt a healthy lifestyle.',
    },
  },
  {
    id: 'a2-dynamic-multi',
    code: 'A2',
    group: 'chart',
    groupLabel: 'Chart · Divergent Trends',
    name: '动态·多方向模板',
    englishName: 'Line / Bar Divergent Trends',
    priority: '高频核心',
    summary: '线图或分组柱状图多个指标变化方向不一致（有的升、有的降、有分化）。',
    applicability: '适用于对比两个及以上年份、且不同选项呈现一升一降或增速明显分化的动态图表。',
    fixedWordCount: 133,
    blankWordRange: '24–30',
    estimatedTotalRange: '157–163',
    openingPlaceholderNote: '默认采用 Among which 从句；若只有两项一升一降，可切换为“状语式+对比”。',
    defaultOpening:
      'The chart above illustrates the changes in 【主题词】 from 【年份1】 to 【年份2】, among which the rise in 【重点单项】 was the most striking.',
    p1Rest:
      'To be specific, the percentage of 【单项1】 【变化词1】 from 【数据1】 to 【数据2】. However, that of 【单项2】 【变化词2】 from 【数据3】 to 【数据4】. It is apparent from the statistics that 【社会现象】 is becoming common among 【主体人群】 nowadays.',
    p2:
      'A variety of reasons can be cited to account for this phenomenon. First and foremost, there is no doubt that 【重点单项】 plays a crucial role in 【原因1】. Furthermore, the majority of 【主体人群】 hold the view that it will provide them with a broader platform to 【原因2】, which may put them in a beneficial position in the future.',
    p2OptionalReason3:
      'In the end, if we ignored the importance of 【核心概念】, 【警醒对象】 would 【负面后果】.',
    p3:
      'All in all, we should bear in mind that 【核心概念】 is of great importance to 【核心方面】. For one thing, it is imperative for the authorities to 【措施1】 to support 【重点方向】. For another, 【主体2】 ought to spare no pains to 【措施2】. Only through the joint efforts of all people can we effectively 【展望】.',
    altOpenings: [
      {
        id: 'a2-opt1',
        label: '默认：Among which 从句',
        sentence:
          'The chart above illustrates the changes in 【主题词】 from 【年份1】 to 【年份2】, among which the rise in 【重点单项】 was the most striking.',
      },
      {
        id: 'a2-opt2',
        label: '备选1：Divergent + with 结构',
        sentence:
          '【主题词】 experienced divergent trends from 【年份1】 to 【年份2】, with 【重点单项】 rising most sharply.',
      },
      {
        id: 'a2-opt3',
        label: '备选2：状语式 + 对比（两项一升一降）',
        sentence:
          'As reflected in the chart, 【主题词】 moved in opposite directions from 【年份1】 to 【年份2】, 【单项1】 falling while 【单项2】 rising.',
      },
    ],
    keywords: [
      {
        key: '主题词',
        labelCn: '总体图表主题',
        grammarNote: '复数或集合名词短语',
        examples: "graduates' choices（毕业生的选择）",
        sampleValue: "graduates' choices",
      },
      {
        key: '年份1',
        labelCn: '起始年份',
        grammarNote: '四位年份',
        examples: '2013',
        sampleValue: '2013',
      },
      {
        key: '年份2',
        labelCn: '结束年份',
        grammarNote: '四位年份',
        examples: '2018',
        sampleValue: '2018',
      },
      {
        key: '重点单项',
        labelCn: '最突出的单项',
        grammarNote: '名词短语或动名词',
        examples: 'the proportion pursuing further study / pursuing further education',
        sampleValue: 'the proportion pursuing further study',
      },
      {
        key: '单项1',
        labelCn: '变化项1（如下降项）',
        grammarNote: '接在 the percentage of 后',
        examples: 'graduates who choose to enter the workforce',
        sampleValue: 'graduates who choose to enter the workforce',
      },
      {
        key: '变化词1',
        labelCn: '变化1（动词+副词）',
        grammarNote: '一般过去时',
        examples: 'decreased remarkably',
        sampleValue: 'decreased remarkably',
      },
      {
        key: '数据1',
        labelCn: '单项1起始值',
        grammarNote: '带单位',
        examples: '68.1%',
        sampleValue: '68.1%',
      },
      {
        key: '数据2',
        labelCn: '单项1结束值',
        grammarNote: '带单位',
        examples: '60.7%',
        sampleValue: '60.7%',
      },
      {
        key: '单项2',
        labelCn: '变化项2（如上升项）',
        grammarNote: '接在 that of 后',
        examples: 'graduates who pursue further study',
        sampleValue: 'graduates who pursue further study',
      },
      {
        key: '变化词2',
        labelCn: '变化2（动词+副词）',
        grammarNote: '一般过去时',
        examples: 'climbed significantly',
        sampleValue: 'climbed significantly',
      },
      {
        key: '数据3',
        labelCn: '单项2起始值',
        grammarNote: '带单位',
        examples: '26.3%',
        sampleValue: '26.3%',
      },
      {
        key: '数据4',
        labelCn: '单项2结束值',
        grammarNote: '带单位',
        examples: '34.0%',
        sampleValue: '34.0%',
      },
      {
        key: '社会现象',
        labelCn: '核心社会行为',
        grammarNote: '动名词短语（谓语用 is）',
        examples: 'pursuing further education',
        sampleValue: 'pursuing further education',
      },
      {
        key: '主体人群',
        labelCn: '相关群体',
        grammarNote: '复数名词',
        examples: 'undergraduates',
        sampleValue: 'undergraduates',
      },
      {
        key: '原因1',
        labelCn: '原因1（方面）',
        grammarNote: '名词短语',
        examples: 'personal growth and academic competence',
        sampleValue: 'personal growth and academic competence',
      },
      {
        key: '原因2',
        labelCn: '原因2（好处）',
        grammarNote: '动词原形短语',
        examples: 'develop themselves and expand their horizons',
        sampleValue: 'develop themselves and expand their horizons',
      },
      {
        key: '核心概念',
        labelCn: '总结概念',
        grammarNote: '单数名词/动名词',
        examples: 'lifelong learning',
        sampleValue: 'lifelong learning',
      },
      {
        key: '核心方面',
        labelCn: '重要性落脚点',
        grammarNote: '名词短语',
        examples: 'personal development',
        sampleValue: 'personal development',
      },
      {
        key: '措施1',
        labelCn: '政府/高校措施',
        grammarNote: '动词原形短语',
        examples: 'allocate more funds',
        sampleValue: 'allocate more funds',
      },
      {
        key: '重点方向',
        labelCn: '扶持方向',
        grammarNote: '名词短语',
        examples: 'higher education',
        sampleValue: 'higher education',
      },
      {
        key: '主体2',
        labelCn: '另一责任方',
        grammarNote: '复数名词',
        examples: 'students',
        sampleValue: 'students',
      },
      {
        key: '措施2',
        labelCn: '个人措施',
        grammarNote: '动词原形短语',
        examples: 'make rational career plans',
        sampleValue: 'make rational career plans',
      },
      {
        key: '展望',
        labelCn: '展望目标',
        grammarNote: '动词原形短语',
        examples: 'achieve all-round development',
        sampleValue: 'achieve all-round development',
      },
    ],
    examExample: {
      title: '2019年英语二 · 某高校2013年和2018年本科毕业生去向统计（柱状图）',
      sourceNote: '第一段出自 PDF p.13, p.19, p.28；第二段出自 PDF p.39, p.54；第三段原资料未单列，按通用母版补充。',
      p1: "The bar chart above illustrates the changes in graduates' choices from 2013 to 2018, among which the rise in the proportion pursuing further study was the most striking. To be specific, the percentage of graduates who choose to enter the workforce decreased remarkably from 68.1% to 60.7%. However, the percentage of graduates who pursue further study climbed significantly from 26.3% to 34.0%. Meanwhile, the percentage of graduates who start a business rose slightly, from 1.3% to 2.6%. It is apparent from the statistics that pursuing further education is becoming common among undergraduates.",
      p2: 'The majority of people hold that pursuing a higher degree will provide them with a broader platform to develop themselves, which may put them in a beneficial position in the future. Furthermore, compared with employment, pursuing further education can expand their horizons, thereby promoting all-round development. (PDF p.39 & p.54 原句)',
      p3: 'All in all, we should bear in mind that lifelong learning is of great importance to personal development. For one thing, it is imperative for the authorities to allocate more funds to support higher education. For another, students ought to spare no pains to make rational career plans. Only through the joint efforts of all people can we effectively achieve all-round development.',
    },
  },
  {
    id: 'a3-static-3d',
    code: 'A3',
    group: 'chart',
    groupLabel: 'Chart · Static 3D (Distribution / Dominance / Disparity)',
    name: '静态图模板（分布/主导/差距）',
    englishName: 'Pie / Bar Static Distribution',
    priority: '最高频',
    summary: '无年份变化的饼图/柱图占比分布，完整覆盖“分布型、主导型、差距型”。',
    applicability: '英语二近三年最高频题型。第一项断崖领先用“主导型”开头；强调首尾差距用“差距型”开头。',
    fixedWordCount: 124,
    blankWordRange: '24–30',
    estimatedTotalRange: '148–154',
    openingPlaceholderNote: '默认采用 Distribution 分布型；下方提供 Dominance 主导型与 Disparity 差距型一键切换。',
    defaultOpening:
      'The chart above presents the distribution of 【主题词】, with 【最高项】 accounting for the largest share.',
    p1Rest:
      'To be specific, the percentages of 【单项1】, 【单项2】, 【单项3】 and 【单项4】 account for 【数据1】, 【数据2】, 【数据3】 and 【数据4】 respectively. Notably, 【最高项】 tops the list, at 【数据1】. Despite its apparent simplicity, the chart highlights the core information that 【主体人群】 attach importance to 【核心价值】.',
    p2:
      'Several factors contribute to this phenomenon. First and foremost, definitely no one can deny the fact that 【核心行为】 plays a crucial role in 【原因1】. Furthermore, not only does 【核心行为】 improve 【方面2】, but it also enables 【主体人群】 to 【原因2】.',
    p2OptionalReason3:
      'In the end, if 【主体人群】 failed to value 【核心行为】, they would never become a better version of themselves.',
    p3:
      'All in all, we should bear in mind that 【核心行为】 is indispensable to 【核心方面】. For one thing, it is imperative for the authorities to 【措施1】 to provide a better environment for 【核心价值】. For another, 【主体2】 should 【措施2】. In this way, hopefully, we may embrace a brighter and more promising future.',
    altOpenings: [
      {
        id: 'a3-opt1',
        label: '分布型（Distribution · 默认通用）',
        sentence:
          'The chart above presents the distribution of 【主题词】, with 【最高项】 accounting for the largest share.',
      },
      {
        id: 'a3-opt2',
        label: '主导型（Dominance · 第一项断崖式领先时用）',
        sentence:
          'The chart above highlights the dominance of 【最高项】 in 【主题词】, with it overshadowing all other components.',
      },
      {
        id: 'a3-opt3',
        label: '差距型（Disparity · 首尾占比悬殊时用）',
        sentence:
          'The chart above reveals a striking disparity in 【主题词】, with the proportions ranging from 【数据4】 to 【数据1】.',
      },
    ],
    keywords: [
      {
        key: '主题词',
        labelCn: '静态图总体主题',
        grammarNote: '名词短语',
        examples: "students' gains from a university's labor practice course",
        sampleValue: "students' gains from a university's labor practice course",
      },
      {
        key: '最高项',
        labelCn: '占比第一的选项',
        grammarNote: '动名词或名词短语',
        examples: 'acquiring relevant knowledge / satisfying curiosity',
        sampleValue: 'acquiring relevant knowledge',
      },
      {
        key: '单项1',
        labelCn: '选项1（最高）',
        grammarNote: '动名词平行结构',
        examples: 'acquiring relevant knowledge',
        sampleValue: 'acquiring relevant knowledge',
      },
      {
        key: '单项2',
        labelCn: '选项2（次高）',
        grammarNote: '动名词平行结构',
        examples: 'improving practical skills',
        sampleValue: 'improving practical skills',
      },
      {
        key: '单项3',
        labelCn: '选项3',
        grammarNote: '动名词平行结构',
        examples: 'feeling comfortable',
        sampleValue: 'feeling comfortable',
      },
      {
        key: '单项4',
        labelCn: '选项4（最低）',
        grammarNote: '动名词平行结构',
        examples: 'enhancing cooperation capacity',
        sampleValue: 'enhancing cooperation capacity',
      },
      {
        key: '数据1',
        labelCn: '最高占比',
        grammarNote: '百分比',
        examples: '91.3%',
        sampleValue: '91.3%',
      },
      {
        key: '数据2',
        labelCn: '次高占比',
        grammarNote: '百分比',
        examples: '84.8%',
        sampleValue: '84.8%',
      },
      {
        key: '数据3',
        labelCn: '第三项占比',
        grammarNote: '百分比',
        examples: '54.4%',
        sampleValue: '54.4%',
      },
      {
        key: '数据4',
        labelCn: '最低占比',
        grammarNote: '百分比',
        examples: '32.6%',
        sampleValue: '32.6%',
      },
      {
        key: '主体人群',
        labelCn: '相关人群',
        grammarNote: '复数名词',
        examples: 'universities and students / parents',
        sampleValue: 'universities and students',
      },
      {
        key: '核心价值',
        labelCn: '被重视的事物',
        grammarNote: '名词短语',
        examples: 'practical courses / outdoor activities',
        sampleValue: 'practical courses',
      },
      {
        key: '核心行为',
        labelCn: '核心主题行为（单数）',
        grammarNote: '动名词短语，谓语用单数',
        examples: 'participating in labor practice classes',
        sampleValue: 'participating in labor practice classes',
      },
      {
        key: '原因1',
        labelCn: '原因1（核心方面）',
        grammarNote: '名词短语',
        examples: 'personal growth',
        sampleValue: 'personal growth',
      },
      {
        key: '方面2',
        labelCn: '原因2（改善方面）',
        grammarNote: '名词短语',
        examples: 'practical skills and physical health',
        sampleValue: 'practical skills and physical health',
      },
      {
        key: '原因2',
        labelCn: '原因2（进一步好处）',
        grammarNote: '动词原形短语',
        examples: 'promote all-round development',
        sampleValue: 'promote all-round development',
      },
      {
        key: '核心方面',
        labelCn: '总结重要性落脚点',
        grammarNote: '名词短语',
        examples: 'personal development',
        sampleValue: 'personal development',
      },
      {
        key: '措施1',
        labelCn: '当局/校方措施',
        grammarNote: '动词原形短语',
        examples: 'improve teaching facilities',
        sampleValue: 'improve teaching facilities',
      },
      {
        key: '主体2',
        labelCn: '另一责任主体',
        grammarNote: '复数名词',
        examples: 'universities and students',
        sampleValue: 'universities and students',
      },
      {
        key: '措施2',
        labelCn: '具体行动',
        grammarNote: '动词原形短语',
        examples: 'create more opportunities for hands-on learning',
        sampleValue: 'create more opportunities for hands-on learning',
      },
    ],
    examExample: {
      title: '2024年英语二 · 某高校劳动实践课学生主要收获调查（横向柱状图）',
      sourceNote: '第一段出自 PDF p.15, p.22（PDF p.32 注1提示如觉得后半句与首句重复，考场可删去 Notably 排名句）；二三段出自 PDF p.43, p.51, p.60。',
      p1: "The bar chart above presents the distribution of students' gains from a university's labor practice course, with acquiring relevant knowledge accounting for the largest share. To be specific, the percentages of students who acquired relevant knowledge, improved practical skills, felt comfortable and enhanced cooperation capacity account for 91.3%, 84.8%, 54.4% and 32.6% respectively. Notably, acquiring relevant knowledge tops the list, at 91.3%, followed by improving practical skills at 84.8%.",
      p2: "Definitely no one can deny the fact that participating in labor practice classes plays a crucial role in personal growth. Furthermore, not only does participating in labor practice classes improve undergraduates' physical and mental health, but it also promotes social progress. (PDF p.43 & p.51 原句)",
      p3: 'All in all, it is not difficult to draw the conclusion that enough attention must be paid to the practical courses by ourselves and our universities. (PDF p.60 原句) For one thing, it is imperative for the authorities to improve public facilities. For another, students ought to spare no pains to cultivate practical skills.',
    },
  },
  {
    id: 'a4-dual-charts',
    code: 'A4',
    group: 'chart',
    groupLabel: 'Chart · Dual Charts',
    name: '双图表模板（静静 / 动静）',
    englishName: 'Pie + Bar Dual Charts',
    priority: '重点新趋势',
    summary: '左右两幅图组合（如饼图看接受度/态度 + 柱状图看原因/首要关注点）。',
    applicability: '适用于双静态图（静静结合）或一动一静组合（动静结合，仅将左图细节改为动态变化即可）。',
    fixedWordCount: 136,
    blankWordRange: '25–30',
    estimatedTotalRange: '161–166',
    openingPlaceholderNote: '默认采用 While 并列结构；也可切换为 As for 另起一句或总分结构。',
    defaultOpening:
      'The chart on the left illustrates 【左图主题】, while the chart on the right presents 【右图主题】.',
    p1Rest:
      'To be specific, in the left chart, the proportions of respondents who 【左图项1】, 【左图项2】 and 【左图项3】 account for 【数据1】, 【数据2】 and 【数据3】 respectively. Notably, 【右图最高项】 tops the list of 【右图主题】, at 【最高数据】. It is apparent from the statistics that 【核心事物】 has drawn growing attention from the public, with 【右图最高项】 as their top concern.',
    p2:
      'A combination of factors has contributed to the tendency reflected in these charts. First and foremost, definitely no one can deny the fact that 【核心事物】 plays a crucial role in 【原因1】. Furthermore, an increasing number of people are becoming aware that 【右图最高项】 is strongly dependent on 【原因2】.',
    p2OptionalReason3:
      'In the end, if we ignored the importance of 【核心概念】, our society would be confronted with an unpromising and less compassionate future.',
    p3:
      'All in all, the discussion leads us to the realization that 【核心概念】 is not a luxury, but a must for 【社会背景】. For one thing, it is imperative for the authorities to 【措施1】 to ensure 【关键保障】. For another, 【主体2】 ought to spare no pains to 【措施2】. Only through the joint efforts of 【各方主体】 can we effectively promote the healthy development of 【核心事物】.',
    altOpenings: [
      {
        id: 'a4-opt1',
        label: '默认：While 并列',
        sentence:
          'The chart on the left illustrates 【左图主题】, while the chart on the right presents 【右图主题】.',
      },
      {
        id: 'a4-opt2',
        label: '备选1：As for 另起一句',
        sentence:
          'The pie chart above presents 【左图主题】. As for the chart on the right, it shows 【右图主题】.',
      },
      {
        id: 'a4-opt3',
        label: '备选2：总分结构',
        sentence:
          'The two charts present 【总主题】: the pie chart shows 【左图内容】, while the bar chart on the right lists 【右图内容】.',
      },
    ],
    keywords: [
      {
        key: '左图主题',
        labelCn: '左图主题',
        grammarNote: '名词短语',
        examples: "consumers' attitudes towards elderly-care robots",
        sampleValue: "consumers' attitudes towards elderly-care robots",
      },
      {
        key: '右图主题',
        labelCn: '右图主题',
        grammarNote: '名词短语',
        examples: 'their major concerns about such robots',
        sampleValue: 'their major concerns about such robots',
      },
      {
        key: '左图项1',
        labelCn: '左图选项1',
        grammarNote: '动词原形短语（接 who 后）',
        examples: 'fully accept',
        sampleValue: 'fully accept',
      },
      {
        key: '左图项2',
        labelCn: '左图选项2',
        grammarNote: '动词原形短语',
        examples: 'partially accept',
        sampleValue: 'partially accept',
      },
      {
        key: '左图项3',
        labelCn: '左图选项3（含宾语）',
        grammarNote: '动词短语',
        examples: 'reject these robots',
        sampleValue: 'reject these robots',
      },
      {
        key: '数据1',
        labelCn: '左图数据1',
        grammarNote: '百分比',
        examples: '39.3%',
        sampleValue: '39.3%',
      },
      {
        key: '数据2',
        labelCn: '左图数据2',
        grammarNote: '百分比',
        examples: '32.8%',
        sampleValue: '32.8%',
      },
      {
        key: '数据3',
        labelCn: '左图数据3',
        grammarNote: '百分比',
        examples: '27.9%',
        sampleValue: '27.9%',
      },
      {
        key: '右图最高项',
        labelCn: '右图首要关注点',
        grammarNote: '单数名词',
        examples: 'safety',
        sampleValue: 'safety',
      },
      {
        key: '最高数据',
        labelCn: '右图最高数据',
        grammarNote: '百分比',
        examples: '46.3%',
        sampleValue: '46.3%',
      },
      {
        key: '核心事物',
        labelCn: '核心主题词',
        grammarNote: '名词短语',
        examples: 'elderly-care robots',
        sampleValue: 'elderly-care robots',
      },
      {
        key: '原因1',
        labelCn: '原因1（核心好处）',
        grammarNote: '动名词短语',
        examples: 'improving the quality of life for the elderly',
        sampleValue: 'improving the quality of life for the elderly',
      },
      {
        key: '原因2',
        labelCn: '原因2（决定因素）',
        grammarNote: '名词短语',
        examples: 'technological advancement and strict regulation',
        sampleValue: 'technological advancement and strict regulation',
      },
      {
        key: '核心概念',
        labelCn: '总结概念',
        grammarNote: '单数名词短语',
        examples: 'elderly care',
        sampleValue: 'elderly care',
      },
      {
        key: '社会背景',
        labelCn: '社会大背景',
        grammarNote: '名词短语',
        examples: 'an aging society',
        sampleValue: 'an aging society',
      },
      {
        key: '措施1',
        labelCn: '政府措施',
        grammarNote: '动词原形短语',
        examples: 'formulate strict regulations',
        sampleValue: 'formulate strict regulations',
      },
      {
        key: '关键保障',
        labelCn: '保障对象',
        grammarNote: '名词短语',
        examples: 'the safety of elderly-care robots',
        sampleValue: 'the safety of elderly-care robots',
      },
      {
        key: '主体2',
        labelCn: '另一责任方',
        grammarNote: '复数名词',
        examples: 'enterprises',
        sampleValue: 'enterprises',
      },
      {
        key: '措施2',
        labelCn: '企业措施',
        grammarNote: '动词原形短语',
        examples: 'improve product quality',
        sampleValue: 'improve product quality',
      },
      {
        key: '各方主体',
        labelCn: '共同努力主体',
        grammarNote: '并列名词',
        examples: 'the government, enterprises and the public',
        sampleValue: 'the government, enterprises and the public',
      },
    ],
    examExample: {
      title: '2026年英语一 · 养老机器人消费者接受度（饼图）与首要关注点（柱图）',
      sourceNote: '完整三段均直接取自 PDF p.30, p.44, p.51, p.61, p.65, p.68 真题例句。',
      p1: "The chart on the left shows consumers' attitudes towards elderly-care robots, while the chart on the right lists their major concerns about such robots. To be specific, the proportions of respondents who fully accept, partially accept and reject these robots account for 39.3%, 32.8% and 27.9% respectively. Notably, safety tops the list of consumers' major concerns, at 46.3%, followed by price at 24.9%. It is apparent from the statistics that elderly-care robots have drawn growing attention from the public, with safety as their top concern.",
      p2: 'Definitely no one can deny the fact that elderly-care robots play a crucial role in improving the quality of life for the elderly. Furthermore, an increasing number of people are becoming aware that the safety of elderly-care robots is strongly dependent on technological advancement and strict regulation.',
      p3: 'The discussion leads us to the realization that elderly care is not a luxury, but a must for an aging society. For one thing, it is imperative for the authorities to formulate strict regulations to ensure the safety of elderly-care robots. For another, enterprises ought to spare no pains to improve product quality. Only through the joint efforts of the government, enterprises and the public can we effectively promote the healthy development of elderly-care robots.',
    },
  },
  {
    id: 'a5-table-fallback',
    code: 'A5',
    group: 'chart',
    groupLabel: 'Chart · Table & Fallback',
    name: '表格 / 通用兜底模板',
    englishName: 'Table & Universal Chart Fallback',
    priority: '兜底必备',
    summary: '适用于数据繁多的表格题（动态表/无趋势复杂表）以及考场时间紧或看不懂图表时的万能兜底。',
    applicability: '动态表格选首尾两项对比；无趋势复杂表格（如2012员工满意度）只挑最具代表性的两项描述。',
    fixedWordCount: 131,
    blankWordRange: '24–30',
    estimatedTotalRange: '155–161',
    openingPlaceholderNote: '默认用于带年份的动态表格；若无年份，可切换备选1（清晰呈现整体情况）或备选3（万能变化句）。',
    defaultOpening:
      'The table above provides information about 【主题词】 from 【年份1】 to 【年份2】.',
    p1Rest:
      'To be specific, 【主体1】 【变化词1】 from 【数据1】 in 【年份1】 to 【数据2】 in 【年份2】. Meanwhile, 【主体2】 【变化词2】 from 【数据3】 to 【数据4】 during the same period. It is apparent from the statistics that this phenomenon reflects a broader social trend.',
    p2:
      'A variety of reasons can be cited to account for this phenomenon. First and foremost, there is no doubt that 【现象主体】 is inextricably linked to 【原因1】. Furthermore, the majority of 【主体人群】 believe that 【核心事物】 will provide them with 【原因2】, which is indispensable in their daily lives.',
    p2OptionalReason3:
      'In the end, this tendency demonstrates that people place a high value on 【价值追求】.',
    p3:
      'All in all, it is evident that the trend reflected in the chart deserves our careful consideration. For one thing, it is imperative for the authorities to 【措施1】 to promote 【发展方向】. For another, 【主体2】 ought to spare no pains to 【措施2】. In this way, hopefully, we may embrace a brighter and more promising future.',
    altOpenings: [
      {
        id: 'a5-opt1',
        label: '无趋势/复杂表格万能句',
        sentence:
          'The chart above presents 【主题词】, offering a clear picture of the overall situation.',
      },
      {
        id: 'a5-opt2',
        label: '动态变化万能句',
        sentence:
          'The chart above shows the variation in 【主题词】 from 【年份1】 to 【年份2】.',
      },
      {
        id: 'a5-opt3',
        label: '时间紧/记不住年份兜底句',
        sentence:
          'Some remarkable changes in 【主题词】 have taken place in the past few years.',
      },
    ],
    keywords: [
      {
        key: '主题词',
        labelCn: '表格核心主题',
        grammarNote: '名词短语',
        examples: 'the average ownership of major durable consumer goods per 100 households in China',
        sampleValue: 'the average ownership of major durable consumer goods per 100 households',
      },
      {
        key: '年份1',
        labelCn: '起始年份',
        grammarNote: '四位年份',
        examples: '2014',
        sampleValue: '2014',
      },
      {
        key: '年份2',
        labelCn: '结束年份',
        grammarNote: '四位年份',
        examples: '2023',
        sampleValue: '2023',
      },
      {
        key: '主体1',
        labelCn: '关键行/列指标1',
        grammarNote: '名词短语',
        examples: 'the ownership of air conditioners',
        sampleValue: 'the ownership of air conditioners',
      },
      {
        key: '变化词1',
        labelCn: '变化1',
        grammarNote: '一般过去时',
        examples: 'increased dramatically',
        sampleValue: 'increased dramatically',
      },
      {
        key: '数据1',
        labelCn: '指标1起始值',
        grammarNote: '带单位',
        examples: '75.2 units',
        sampleValue: '75.2 units',
      },
      {
        key: '数据2',
        labelCn: '指标1结束值',
        grammarNote: '带单位',
        examples: '145.9 units',
        sampleValue: '145.9 units',
      },
      {
        key: '主体2',
        labelCn: '关键行/列指标2',
        grammarNote: '名词短语',
        examples: 'the number of refrigerators',
        sampleValue: 'the number of refrigerators',
      },
      {
        key: '变化词2',
        labelCn: '变化2',
        grammarNote: '一般过去时',
        examples: 'increased modestly',
        sampleValue: 'increased modestly',
      },
      {
        key: '数据3',
        labelCn: '指标2起始值',
        grammarNote: '带单位',
        examples: '85.5 units',
        sampleValue: '85.5 units',
      },
      {
        key: '数据4',
        labelCn: '指标2结束值',
        grammarNote: '带单位',
        examples: '103.4 units',
        sampleValue: '103.4 units',
      },
      {
        key: '现象主体',
        labelCn: '现象概括主语',
        grammarNote: '单数名词短语',
        examples: 'the dramatic rise in the ownership of household appliances',
        sampleValue: 'the dramatic rise in the ownership of household appliances',
      },
      {
        key: '原因1',
        labelCn: '深层原因',
        grammarNote: '名词短语',
        examples: 'rapid economic growth and rising disposable incomes',
        sampleValue: 'rapid economic growth and rising disposable incomes',
      },
      {
        key: '主体人群',
        labelCn: '使用人群',
        grammarNote: '复数名词',
        examples: 'residents',
        sampleValue: 'residents',
      },
      {
        key: '核心事物',
        labelCn: '表格核心物品/事物',
        grammarNote: '名词短语',
        examples: 'household appliances',
        sampleValue: 'household appliances',
      },
      {
        key: '原因2',
        labelCn: '带来的好处',
        grammarNote: '名词短语',
        examples: 'great convenience',
        sampleValue: 'great convenience',
      },
      {
        key: '措施1',
        labelCn: '政府政策措施',
        grammarNote: '动词原形短语',
        examples: 'formulate industry-friendly policies',
        sampleValue: 'formulate industry-friendly policies',
      },
      {
        key: '发展方向',
        labelCn: '推动发展的对象',
        grammarNote: '名词短语',
        examples: 'the development of the home appliance industry',
        sampleValue: 'the development of the home appliance industry',
      },
      {
        key: '主体2',
        labelCn: '企业/责任方',
        grammarNote: '复数名词',
        examples: 'enterprises',
        sampleValue: 'enterprises',
      },
      {
        key: '措施2',
        labelCn: '企业措施',
        grammarNote: '动词原形短语',
        examples: 'enhance product quality and reduce commodity prices',
        sampleValue: 'enhance product quality and reduce commodity prices',
      },
    ],
    examExample: {
      title: '2025年英语一 · 全国居民每百户主要耐用消费品拥有量（表格）/ 2012英二例外表格',
      sourceNote: '2025英一完整覆盖（PDF p.19, p.21, p.39, p.43, p.65）；2012英二无趋势表格细节句见 PDF p.24。',
      p1: 'The table above provides information about the average ownership of major durable consumer goods per 100 households in China from 2014 to 2023. To be specific, the ownership of air conditioners per 100 households increased dramatically from 75.2 units in 2014 to 145.9 units in 2023. Meanwhile, the number of refrigerators increased modestly from 85.5 units to 103.4 units during the same period. (2012英二无趋势表例外写法：Half of the employees under 40 and half of those over 50 were uncertain about their satisfaction, while 64% of those aged 41–50 were dissatisfied.)',
      p2: 'There is no doubt that the dramatic rise in the ownership of household appliances is inextricably linked to the rapid economic growth and rising disposable incomes. Furthermore, the majority of residents believe that household appliances will provide them with great convenience, which is indispensable in their daily lives.',
      p3: 'For one thing, it is imperative for the authorities to formulate industry-friendly policies to promote the development of the home appliance industry. For another, enterprises ought to spare no pains to enhance product quality and reduce commodity prices. In this way, hopefully, we may embrace a brighter and more promising future.',
    },
  },
  {
    id: 'b1-single-drawing',
    code: 'B1',
    group: 'drawing',
    groupLabel: 'Drawing · Single Cartoon',
    name: '单图画作文简版',
    englishName: 'Drawing Description + Meaning',
    priority: '防反押题',
    summary: '用“环境+基本动作+主体+主要动作+细节”公式描述单幅图画，并揭示“某事很重要”的主题。',
    applicability: '单幅非对话型漫画为主；若遇对话型或两幅图，参考上方切换句或说明补充对话转述。',
    fixedWordCount: 132,
    blankWordRange: '22–28',
    estimatedTotalRange: '154–160',
    openingPlaceholderNote: '默认采用 As is symbolically depicted 倒装公式；可在下方切换三种图画开头句。',
    defaultOpening:
      'As is symbolically depicted in the cartoon above, 【环境】 【基本动作】 【主体】, 【形容词1】 as well as 【形容词2】, 【主要动作】, with 【细节】.',
    p1Rest:
      'The primary intention of the drawing is to remind 【受众】 that 【主题词】 is so indispensable that the subject deserves the highest level of attention and consideration.',
    p2:
      'A variety of reasons can be cited to account for this phenomenon. First and foremost, definitely no one can deny the fact that 【主题词】 plays a crucial role in 【原因1】. Furthermore, not only does 【主题词】 improve 【方面2】, but it also enables 【受众】 to 【原因2】.',
    p2OptionalReason3:
      'In the end, if we ignored the importance of 【主题词】, our society would be confronted with an unpromising and fruitless future.',
    p3:
      'All in all, we should bear in mind that 【主题词】 is of great importance to both our daily lives and personal development. For one thing, it is imperative for the authorities to 【措施1】 to promote 【主题词】. For another, 【受众】 ought to spare no pains to 【措施2】. In this way, hopefully, we may embrace a brighter and more promising future.',
    altOpenings: [
      {
        id: 'b1-opt1',
        label: '默认：As is symbolically depicted 倒装',
        sentence:
          'As is symbolically depicted in the cartoon above, 【环境】 【基本动作】 【主体】, 【形容词1】 as well as 【形容词2】, 【主要动作】, with 【细节】.',
      },
      {
        id: 'b1-opt2',
        label: '备选1：The cartoon above presents',
        sentence:
          'The cartoon above presents us with a thought-provoking scene: 【环境】 【基本动作】 【主体】, 【主要动作】, with 【细节】.',
      },
      {
        id: 'b1-opt3',
        label: '备选2：Depicted in the picture above is',
        sentence:
          'Depicted in the picture above is a scene that strikes us as both familiar and thought-provoking: 【主体】 is 【主要动作】 【环境】, with 【细节】.',
      },
    ],
    keywords: [
      {
        key: '环境',
        labelCn: '地点环境（万能/具体）',
        grammarNote: '介词短语',
        examples: 'in front of us / on the playground / in the middle of the picture',
        sampleValue: 'on the playground',
      },
      {
        key: '基本动作',
        labelCn: '存在姿势动词（单数）',
        grammarNote: '一般现在时三单',
        examples: 'stands / sits / stays / runs',
        sampleValue: 'runs',
      },
      {
        key: '主体',
        labelCn: '图画核心人物或物',
        grammarNote: '单数名词短语',
        examples: 'a young man / an oil lamp',
        sampleValue: 'a young man',
      },
      {
        key: '形容词1',
        labelCn: '正面/负面形容词1',
        grammarNote: '修饰主体',
        examples: 'active / confident / lovely / negative',
        sampleValue: 'active',
      },
      {
        key: '形容词2',
        labelCn: '正面/负面形容词2',
        grammarNote: '与形容词1配套',
        examples: 'vigorous / optimistic / cute / passive',
        sampleValue: 'vigorous',
      },
      {
        key: '主要动作',
        labelCn: '突出动作（doing）',
        grammarNote: '现在分词短语',
        examples: 'rushing to the finishing line / lighting up the darkness',
        sampleValue: 'rushing to the finishing line',
      },
      {
        key: '细节',
        labelCn: '表情或神态细节',
        grammarNote: '名词短语（接 with 后）',
        examples: 'a sweet smile on his face / determination in his eyes',
        sampleValue: 'a confident smile on his face',
      },
      {
        key: '受众',
        labelCn: '提醒对象',
        grammarNote: '复数人群',
        examples: 'teenagers and youngsters / the whole society',
        sampleValue: 'teenagers and youngsters',
      },
      {
        key: '主题词',
        labelCn: '抽象寓意主题',
        grammarNote: '单数/不可数名词',
        examples: 'perseverance / traditional culture / environmental protection',
        sampleValue: 'the spirit of perseverance',
      },
      {
        key: '原因1',
        labelCn: '原因1（核心方面）',
        grammarNote: '名词短语',
        examples: 'personal growth and self-realization',
        sampleValue: 'personal growth and self-realization',
      },
      {
        key: '方面2',
        labelCn: '改善方面',
        grammarNote: '名词短语',
        examples: 'our psychological resilience',
        sampleValue: 'our psychological resilience',
      },
      {
        key: '原因2',
        labelCn: '进一步好处',
        grammarNote: '动词原形短语',
        examples: 'overcome difficulties and embrace challenges',
        sampleValue: 'overcome difficulties and embrace challenges',
      },
      {
        key: '措施1',
        labelCn: '社会/学校措施',
        grammarNote: '动词原形短语',
        examples: 'create a supportive atmosphere',
        sampleValue: 'create a supportive atmosphere',
      },
      {
        key: '措施2',
        labelCn: '个人行动',
        grammarNote: '动词原形短语',
        examples: 'stay persistent in daily studies',
        sampleValue: 'stay persistent in daily studies',
      },
    ],
    examExample: {
      title: '2004英一（终点又是新起点）& 2023英一（龙舟/传统文化）',
      sourceNote: '2004图画描述句出自 PDF p.74；2023主题阐述与二三段例句出自 PDF p.51, p.61, p.81（具体措施句按通用母版补充）。',
      p1: 'As is symbolically depicted in the picture above, on the playground runs a young man, active as well as vigorous, rushing to the finishing line, with a sweet smile on his face. (2023主题阐述：The purpose of the drawing is to remind teenagers and youngsters that traditional culture is so indispensable that the subject deserves the highest level of attention and consideration.)',
      p2: 'Not only does attending dragon boat races improve our physical and mental health, but it also enables us to inherit and develop traditional culture. (PDF p.51 原句)',
      p3: 'The discussion leads us to the realization that cultural inheritance is not an option, but a necessity. (PDF p.61 原句) For one thing, it is imperative for the authorities to launch public initiatives to protect traditional culture. For another, teenagers ought to spare no pains to inherit it.',
    },
  },
  {
    id: 'b2-drawing-chart',
    code: 'B2',
    group: 'drawing',
    groupLabel: 'Drawing + Chart Hybrid',
    name: '图画+图表混合简版',
    englishName: 'Left Cartoon + Right Chart',
    priority: '防反押题',
    summary: '受限于首段篇幅，左图用1句描述场景，右表用1句概括数据，随后点出共同主题。',
    applicability: '适用于一图画加一图表的组合新题型（如2024考研英语一）。',
    fixedWordCount: 128,
    blankWordRange: '26–32',
    estimatedTotalRange: '154–160',
    openingPlaceholderNote: '默认采用左图右表顺序描述；可切换为 As is vividly depicted 叠加句式。',
    defaultOpening:
      'The drawing on the left side provides us with a lively scene: 【左图场景】.',
    p1Rest:
      'Referring to the statistics provided in the right chart, 【右表主体】 【变化词】 from 【数据1】 in 【年份1】 to 【数据2】 in 【年份2】. The drawing and the chart aim to remind us that great accomplishments have been made in 【主题词】 by 【实施方】.',
    p2:
      'There are plenty of causes accounting for the phenomenon in various aspects. For instance, my hometown, a beautiful city, is committed to 【主题词】. Thanks to these efforts, 【积极结果】. Furthermore, a rising number of individuals are coming to the realization that 【受益方面】 is strongly dependent on 【主题词】.',
    p2OptionalReason3:
      'In the end, if the government ignored the importance of 【主题词】, our cities would be confronted with an unpromising and fruitless future.',
    p3:
      'All in all, it is not difficult to draw the conclusion that enough attention has been paid to 【主题词】 by the departments concerned. For one thing, it is imperative for the authorities to 【措施1】. For another, 【主体2】 ought to spare no pains to 【措施2】. In this way, hopefully, we may embrace a brighter and more promising future.',
    altOpenings: [
      {
        id: 'b2-opt1',
        label: '默认：The drawing on the left side',
        sentence: 'The drawing on the left side provides us with a lively scene: 【左图场景】.',
      },
      {
        id: 'b2-opt2',
        label: '备选1：The cartoon above depicts... while...',
        sentence:
          'The cartoon above depicts 【左图场景】, while the chart below illustrates 【右表主体】 from 【年份1】 to 【年份2】.',
      },
      {
        id: 'b2-opt3',
        label: '备选2：As is vividly depicted... and clearly shown...',
        sentence:
          'As is vividly depicted in the cartoon and clearly shown in the chart above, 【左图场景】, and 【右表主体】 【变化词】 from 【数据1】 to 【数据2】.',
      },
    ],
    keywords: [
      {
        key: '左图场景',
        labelCn: '左图一句话描述',
        grammarNote: '完整简单句',
        examples: 'several urban residents are exercising in a park and a youngster says that the new park is fantastic',
        sampleValue: 'several urban residents are exercising in a park',
      },
      {
        key: '右表主体',
        labelCn: '右表核心指标',
        grammarNote: '名词短语',
        examples: 'the number of parks in a certain city',
        sampleValue: 'the number of parks in a certain city',
      },
      {
        key: '变化词',
        labelCn: '变化动词+副词',
        grammarNote: '一般过去时',
        examples: 'increased remarkably',
        sampleValue: 'increased remarkably',
      },
      {
        key: '数据1',
        labelCn: '起始数据',
        grammarNote: '数字',
        examples: '406',
        sampleValue: '406',
      },
      {
        key: '年份1',
        labelCn: '起始年份',
        grammarNote: '四位年份',
        examples: '2020',
        sampleValue: '2020',
      },
      {
        key: '数据2',
        labelCn: '结束数据',
        grammarNote: '数字',
        examples: '670',
        sampleValue: '670',
      },
      {
        key: '年份2',
        labelCn: '结束年份',
        grammarNote: '四位年份',
        examples: '2022',
        sampleValue: '2022',
      },
      {
        key: '主题词',
        labelCn: '共同核心主题',
        grammarNote: '名词短语',
        examples: 'infrastructure construction / the construction of public facilities',
        sampleValue: 'infrastructure construction',
      },
      {
        key: '实施方',
        labelCn: '建设/推动方',
        grammarNote: '名词短语',
        examples: 'the government',
        sampleValue: 'the government',
      },
      {
        key: '积极结果',
        labelCn: '带来的正面变化',
        grammarNote: '完整简单句',
        examples: 'citizen satisfaction has improved',
        sampleValue: 'citizen satisfaction has improved',
      },
      {
        key: '受益方面',
        labelCn: '依赖该建设的事物',
        grammarNote: '名词短语',
        examples: 'a healthy lifestyle',
        sampleValue: 'a healthy lifestyle',
      },
      {
        key: '措施1',
        labelCn: '政府后续措施',
        grammarNote: '动词原形短语',
        examples: 'increase investment continuously',
        sampleValue: 'increase investment continuously',
      },
      {
        key: '主体2',
        labelCn: '另一宣传/参与方',
        grammarNote: '复数名词',
        examples: 'new media platforms',
        sampleValue: 'new media platforms',
      },
      {
        key: '措施2',
        labelCn: '媒体/公众措施',
        grammarNote: '动词原形短语',
        examples: 'appeal to people to live a healthy life',
        sampleValue: 'appeal to people to live a healthy life',
      },
    ],
    examExample: {
      title: '2024年英语一 · 公园健身图画 + 某市近三年公园数量柱状图',
      sourceNote: '完整三段均出自 PDF p.57, p.68, p.84 原文（为适配英语二约150词，第二段节选前两点原因）。',
      p1: 'The drawing on the left side provides us with a lively scene: several urban residents are exercising in a park and a youngster says that the new park is fantastic. Referring to the statistics provided in the right chart, the number of parks in a certain city increased remarkably from 406 in 2020 to 670 in 2022. The drawing and the chart aim to remind us that great accomplishments have been made in the construction of public facilities by the government.',
      p2: 'There are plenty of causes accounting for the phenomenon in various aspects. For instance, my hometown, a beautiful city, is committed to infrastructure construction. Thanks to these efforts, citizen satisfaction has improved. Furthermore, a rising number of individuals are coming to the realization that a healthy lifestyle is strongly dependent on infrastructure development.',
      p3: 'It is not difficult to draw the conclusion that enough attention has been paid to the infrastructure by the departments concerned. For one thing, it is imperative for the authorities to increase investment continuously. For another, new media platforms, ranging from short video apps to social media, should appeal to people to live a healthy life. In this way, hopefully, we may embrace a brighter and more promising future.',
    },
  },
  {
    id: 'c1-text-excerpt',
    code: 'C1',
    group: 'text',
    groupLabel: 'Text Excerpt · Argument',
    name: '文字作文简版',
    englishName: 'Paraphrase + Stance',
    priority: '大纲备选',
    summary: '采用“引出主题 + 改写作者观点 + 表明个人态度”保底结构，完美对接通用二三段。',
    applicability: '适用于给出一段英文阅读材料并要求表明是否同意作者观点的文字作文（大纲样题形式）。',
    fixedWordCount: 112,
    blankWordRange: '28–38',
    estimatedTotalRange: '140–150',
    openingPlaceholderNote: '采用 PDF“不会改写保底公式”；可切换为科技发展引入或积极态度引入句式。',
    defaultOpening:
      "It cannot be denied that 【主题词】 plays a key role in people's work and life.",
    p1Rest:
      "The author believes that 【作者核心观点改写】. 【个人态度句】",
    p2:
      'A variety of reasons can be cited to account for my perspective. First and foremost, there is no doubt that 【主题词】 lays the foundation of 【原因1】. Furthermore, not only does 【主题词】 enhance 【方面2】, but it also enables us to 【原因2】.',
    p2OptionalReason3:
      'In the end, if we ignored the importance of 【主题词】, we would never become a better version of ourselves.',
    p3:
      'All in all, we should bear in mind that 【主题词】 is of great importance to 【核心方面】. For one thing, it is imperative for 【主体1】 to 【措施1】. For another, we ought to spare no pains to 【措施2】. In this way, hopefully, we may embrace a brighter and more promising future.',
    altOpenings: [
      {
        id: 'c1-opt1',
        label: '默认：It cannot be denied that（通用保底）',
        sentence:
          "It cannot be denied that 【主题词】 plays a key role in people's work and life.",
      },
      {
        id: 'c1-opt2',
        label: '备选1：社会与技术进步引入',
        sentence:
          'With the rapid advancement of society and technology, 【主题词】 has become a common phenomenon in our daily lives.',
      },
      {
        id: 'c1-opt3',
        label: '备选2：积极生活态度类主题',
        sentence:
          'It is widely accepted that 【主题词】, a strong and positive life attitude, is the key element for individuals to achieve success.',
      },
    ],
    keywords: [
      {
        key: '主题词',
        labelCn: '材料核心主题',
        grammarNote: '抽象名词或现象短语',
        examples: 'integrity and benevolence / network addiction among children',
        sampleValue: 'integrity and benevolence',
      },
      {
        key: '作者核心观点改写',
        labelCn: '同义改写作者观点',
        grammarNote: '完整陈述句（接 that 后）',
        examples: 'we are perceived as less biased and willing to tell the truth when we show uncertainty in a transparent way',
        sampleValue:
          'we are perceived as less biased and willing to tell the truth when we show uncertainty in a transparent way',
      },
      {
        key: '个人态度句',
        labelCn: '表明态度（三选一）',
        grammarNote: '完整句（PDF p.87）',
        examples: "I fully agree with the author's viewpoint. / I strongly disagree with the author's opinion.",
        sampleValue: "I fully agree with the author's viewpoint.",
      },
      {
        key: '原因1',
        labelCn: '原因1（核心方面）',
        grammarNote: '名词短语',
        examples: 'effective communication and mutual trust',
        sampleValue: 'effective communication and mutual trust',
      },
      {
        key: '方面2',
        labelCn: '改善方面',
        grammarNote: '名词短语',
        examples: 'interpersonal ties',
        sampleValue: 'interpersonal ties',
      },
      {
        key: '原因2',
        labelCn: '原因2（好处）',
        grammarNote: '动词原形短语',
        examples: 'build consensus and win respect',
        sampleValue: 'build consensus and win respect',
      },
      {
        key: '核心方面',
        labelCn: '总结重要性落脚点',
        grammarNote: '名词短语',
        examples: 'both our daily lives and social harmony',
        sampleValue: 'both our daily lives and social harmony',
      },
      {
        key: '主体1',
        labelCn: '责任方1',
        grammarNote: '名词短语',
        examples: 'schools and enterprises',
        sampleValue: 'schools and enterprises',
      },
      {
        key: '措施1',
        labelCn: '措施1',
        grammarNote: '动词原形短语',
        examples: 'create an honest and supportive atmosphere',
        sampleValue: 'create an honest and supportive atmosphere',
      },
      {
        key: '措施2',
        labelCn: '个人措施',
        grammarNote: '动词原形短语',
        examples: 'stay honest and open-minded in daily life',
        sampleValue: 'stay honest and open-minded in daily life',
      },
    ],
    examExample: {
      title: '大纲文字作文样题1（诚实与展示不确定性）& 样题2（儿童失去漫游权利与屏幕）',
      sourceNote: '第一段出自 PDF p.87–88 原例；PDF明确说明“第二、三段和图画图表作文相同”，未单列二三段范例，需按通用母版结合主题补充。',
      p1: "样题1：It cannot be denied that integrity and benevolence play a key role in people's work and life. The author believes that we are perceived as less biased and willing to tell the truth when we show uncertainty in a transparent way. I fully agree with the author's viewpoint.\n\n样题2：With the rapid advancement of society and technology, network addiction among children has become a common phenomenon in our daily lives. The author believes that we cannot blame the screens because children have lost the right to make sense of the world. I fully agree with the author's viewpoint.",
      p2: '需补充（PDF未单列文字样题二段，按“通用第二段母版”围绕样题1“诚信的重要性”或样题2“科技的利与弊/争议话题版”展开即可）。',
      p3: '需补充（PDF未单列文字样题三段，按“通用第三段母版”重申主题并提出个人与社会措施即可）。',
    },
  },
];

export const UNIVERSAL_MODULES = {
  p2Master: {
    title: '通用第二段母版（英语二推荐 2 点原因，约 50 词）',
    subtitle: '过渡句 + 原因 1（从句/群众路线） + 原因 2（倒装/举例） [+ 备选原因 3 虚拟语气]',
    standardText: `A variety of reasons can be cited to account for this phenomenon. First and foremost, definitely no one can deny the fact that 【主题词】 plays a crucial role in 【原因1（核心方面）】. Furthermore, not only does 【主题词】 improve 【方面2】, but it also enables 【人群】 to 【原因2（具体好处）】.`,
    reason3Text: `In the end, if we ignored the importance of 【主题词】, 【个人/社会/国家】 would 【负面后果（如be confronted with an unpromising and fruitless future / never become a better version of ourselves）】.`,
    controversialText: `In fact, this issue remains controversial. On the one hand, some people hold the view that 【正面影响（套用原因句）】. On the other hand, the rest insist that 【负面影响（如may undermine the physical and mental health of young people）】. Nevertheless, when we are confronted with 【主题词】, we should be sensible enough to discard the dross and select the essence.`,
    alternatives: [
      { label: '过渡句替换', text: 'Several factors contribute to this phenomenon. / A combination of factors has contributed to the tendency reflected in this chart.' },
      { label: '方案一（身边举例）', text: 'For instance, my roommate, Kevin, is passionate about 【主题词】, which helps him 【好处】.' },
      { label: '方案二（群众路线）', text: 'The majority of people believe that 【主题词】 will provide them with a broader platform to 【好处】, which may put them in a beneficial position in the future.' },
      { label: '方案六（对比论证）', text: 'Compared with 【次要对比项】, 【主题词】 can 【小方面】, thereby promoting 【大方面】.' },
      { label: '方案七（比喻句）', text: '【主题词】 is the bridge between goals and accomplishments. / 【主题词】 is the engine that propels personal growth and social progress.' },
    ],
  },
  p3Master: {
    title: '通用第三段母版（总结全文 + 具体措施 + 畅想未来）',
    subtitle: '英语二优先采用“总结 + 两角度措施 + 展望”；时间紧时图表作文可切换为“趋势预测简化版”',
    standardText: `All in all, we should bear in mind that 【主题词】 is of great importance to 【核心方面】. For one thing, it is imperative for the authorities to 【措施1】 to 【目标1】. For another, 【主体2】 ought to spare no pains to 【措施2】. In this way, hopefully, we may embrace a brighter and more promising future.`,
    trendFallbackText: `In a word, as society keeps moving forward, 【主题词】 is likely to gain even greater significance in the days to come.`,
    alternatives: [
      { label: '总结替换1（非选择而是必要）', text: 'The discussion leads us to the realization that 【主题词】 is not an option, but a necessity.' },
      { label: '总结替换2（不可或缺）', text: 'We are faced with the undeniable fact that 【主题词】 has become an integral part of our lives.' },
      { label: '总结替换3（否定倒装）', text: 'By no means should we underestimate the profound impact of 【主题词】 on 【某方面】.' },
      { label: '总结替换4（万能免改）', text: 'It is evident that the trend/distribution reflected in the chart deserves our careful consideration.' },
      { label: '展望替换（共同努力倒装）', text: 'Only through the joint efforts of 【各方主体】 can we effectively 【预期目标】.' },
    ],
  },
  sixAspects: [
    {
      aspect: '1. 社会方面（高频首选）',
      phrases: [
        'social progress / development / stability（社会进步/发展/稳定）',
        'rapid economic growth（快速经济增长）',
        'disposable income（可支配收入）',
        'public services / infrastructure development（公共服务/基础设施建设）',
        'elderly care services（养老服务）',
        "bring convenience to people's daily lives（给日常生活带来便利）",
        'social harmony（社会和谐）',
      ],
    },
    {
      aspect: '2. 个人方面（高频首选）',
      phrases: [
        'personal growth / all-round development（个人成长/全面发展）',
        'physical and mental health（身体和心理健康）',
        'quality of life（生活质量）',
        'hands-on ability / practical skills（动手能力）',
        'observational skills（观察力）',
        'broaden our horizons（开拓眼界）',
        'parent-child interaction / family bonding（亲子互动/家庭纽带）',
      ],
    },
    {
      aspect: '3. 自然方面',
      phrases: [
        'sustainable development（可持续发展）',
        'environmental awareness（环保意识）',
        'harmony between humanity and nature（人与自然和谐共生）',
        'connection with nature（与自然的联结）',
        'outdoor recreation（户外休闲）',
      ],
    },
    {
      aspect: '4. 文化方面',
      phrases: [
        'inherit and develop traditional culture（继承和发扬传统文化）',
        'cultural exchange / cultural confidence（文化交流/文化自信）',
        'diversity and inclusion（多元化与包容性）',
      ],
    },
    {
      aspect: '5. 交流方面',
      phrases: [
        'effective communication（有效沟通）',
        'information security / privacy protection（信息安全/隐私保护）',
        'strengthen interpersonal ties（加强人际联系）',
      ],
    },
    {
      aspect: '6. 科技方面',
      phrases: [
        'technological innovation（科技创新）',
        'digital transformation（数字化转型）',
        'intelligent / smart devices（智能设备）',
      ],
    },
  ],
  examWorkflow: [
    {
      step: '01. 审题（1–2 分钟）',
      detail: '确认题目形式（图表 / 图画 / 文字），用汉语提炼“五个字”核心主旨（图表看“发生某现象”，图画看“某事很重要”，文字看“作者观点+态度”），圈出题目和图例中必须翻译的实体词。',
    },
    {
      step: '02. 选模板（1 分钟）',
      detail: '单图表有年份：全升/降选 A1，一升一降选 A2；无年份饼柱图选 A3（断崖领先用主导型开头，悬殊对比用差距型开头）；两图并列选 A4；表格或没把握选 A5 兜底；图画/混排/文字选 B1/B2/C1。',
    },
    {
      step: '03. 填关键词（2 分钟）',
      detail: '在题目旁快速写出各【】槽位对应的英语词组：第一段写主题词与数据；第二段从“人与自我/他人/社会/自然”四维选“六大方面”最熟练的词组填入；第三段从政府、学校/家庭、媒体、个人中任选2个措施填入。',
    },
    {
      step: '04. 默写与检查（20 分钟）',
      detail: '约150词控制（140–170词 / 答题卡15–18行）。写完用1分钟检查：①动态图过去年份用一般过去时，静态图与二三段用一般现在时；②percentages/proportions 接复数 account；③not only 倒装助动词 does/do 单复数一致；④生活词汇拼写与卷面整洁。',
    },
  ],
};
