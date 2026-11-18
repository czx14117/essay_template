import type { EssayTemplate } from './types';

export const SMALL_ESSAY_TEMPLATES: EssayTemplate[] = [
  {
    id: 's1-private-letter',
    code: 'S1',
    group: 'small_letter',
    part: 'partA',
    groupLabel: 'Part A · Private Letter / Email',
    name: '私人信件通用模板',
    englishName: 'Suggestions / Plans / Invitations',
    priority: '小作文最高频',
    summary: '适用于写给认识的人（朋友/同学/已知姓名）的建议信、计划信、邀请信、答复信、推荐信、感谢信、道歉信。',
    applicability:
      '英语二最常考私人邮件（如2024写给Jack、2023写给David、2022写给留学生）。第一段无需自我介绍，直接“背景提要+来信意图”；第二段通用36句挑2–3句。',
    fixedWordCount: 74,
    blankWordRange: '24–32',
    estimatedTotalRange: '98–106',
    openingPlaceholderNote:
      '默认采用通用高兴/积极背景句；若题干信息太少无法改写背景，可切换为“省略背景直接写意图”或“消极/道歉遗憾开头”。',
    headerBlock: 'Dear 【收信人姓名】,',
    footerBlock: 'Yours sincerely,\n【署名（通常Li Ming）】',
    defaultOpening:
      'I am very pleased to hear that 【背景事件】.',
    p1Rest:
      'I am writing this letter in order to 【来信意图短语】.',
    p2:
      '【过渡句】. In the first place, 【分点1（如we/you are badly in need of ...，which can help ...）】. Moreover, 【分点2（如it is advisable to ... / ... provides a unique opportunity to ...）】.',
    p2OptionalReason3:
      'In the end, 【分点3（如I wonder if you can ... so that ... / the experience will be memorable）】.',
    p2OptionalLabel: '加入第3点阐述（凑字数或三点提示）',
    p3:
      '【情感句（如I would like to know what you think about it / express my gratitude）】. 【期待回信句（如Your prompt reply will be highly appreciated）】.',
    p1Label: 'Paragraph 1 · 背景提要 + 来信意图（私人信件无需自我介绍）',
    p2Label: 'Paragraph 2 · 通用核心段（过渡句 + 36句高频句挑2–3句）',
    p3Label: 'Paragraph 3 · 表示情感 + 期待回信',
    altOpenings: [
      {
        id: 's1-opt1',
        label: '通用积极：I am very pleased to hear that...',
        sentence: 'I am very pleased to hear that 【背景事件】.',
      },
      {
        id: 's1-opt2',
        label: '展信佳：I hope this email finds you well...',
        sentence: 'I hope this email finds you well and 【背景事件】.',
      },
      {
        id: 's1-opt3',
        label: '邀请/喜讯：It is my honor to invite/inform...',
        sentence: 'It is my honor to inform you that 【背景事件】.',
      },
      {
        id: 's1-opt4',
        label: '消极/道歉：I wanted to express my apology/regret...',
        sentence:
          'I wanted to express my 【心情(apology/regret)】 through this letter regarding 【背景事件】.',
      },
    ],
    keywords: [
      {
        key: '收信人姓名',
        labelCn: '称呼对象（只知姓/名/朋友）',
        grammarNote: 'Jack / David / Mr. Lee / Friends',
        examples: 'Jack / David / Paul / Friends',
        sampleValue: 'Jack',
      },
      {
        key: '背景事件',
        labelCn: '第一句：背景提要（改写自题干）',
        grammarNote: '完整从句（如无法改写可略去首句）',
        examples: 'we undertake a survey on the preservation of historical buildings in an ancient town',
        sampleValue:
          'we will undertake a survey on the preservation of historical buildings in an ancient town',
      },
      {
        key: '来信意图短语',
        labelCn: '第二句：来信意图',
        grammarNote: '动词原形短语（接 in order to 后）',
        examples: 'explain my recent plan for our survey / make several suggestions about your report',
        sampleValue: 'explain my recent plan for our survey',
      },
      {
        key: '过渡句',
        labelCn: '第二段开头过渡',
        grammarNote: '完整简单句',
        examples: 'The details can be listed as follows / There stand at least two factors accounting for my suggestion',
        sampleValue: 'The details can be listed as follows',
      },
      {
        key: '分点1（如we/you are badly in need of ...，which can help ...）',
        labelCn: '要点1（套36句高频句）',
        grammarNote: '完整句子（不含句号）',
        examples: 'we are badly in need of doing some research to gather detailed information, which can help us acquire official data',
        sampleValue:
          'we are badly in need of doing some research to gather detailed information, which can help us acquire official data and policies',
      },
      {
        key: '分点2（如it is advisable to ... / ... provides a unique opportunity to ...）',
        labelCn: '要点2（套36句高频句）',
        grammarNote: '完整句子（不含句号）',
        examples: 'interviewing the residents will allow us to understand the needs and challenges of preserving ancient buildings',
        sampleValue:
          'interviewing local residents will give us a unique opportunity to obtain valuable insights',
      },
      {
        key: '分点3（如I wonder if you can ... so that ... / the experience will be memorable）',
        labelCn: '备选要点3（可选）',
        grammarNote: '完整句子（不含句号）',
        examples: 'I wonder if you can share your ideas with me so that we can improve the plan together',
        sampleValue:
          'I wonder if you can share your ideas with me so that we can refine our plan together',
      },
      {
        key: '情感句（如I would like to know what you think about it / express my gratitude）',
        labelCn: '第三段第1句：表达情感/询问看法',
        grammarNote: '完整句子（不含句号）',
        examples: 'I would like to know what you think about it / Kindly send my sincere regards to your family',
        sampleValue: 'I would like to know what you think about it',
      },
      {
        key: '期待回信句（如Your prompt reply will be highly appreciated）',
        labelCn: '第三段第2句：期待回复',
        grammarNote: '完整句子（不含句号）',
        examples: 'Your prompt reply will be highly appreciated / I am looking forward to hearing from you soon',
        sampleValue: 'Your prompt reply will be highly appreciated',
      },
      {
        key: '署名（通常Li Ming）',
        labelCn: '落款姓名',
        grammarNote: '按题干指定（默认 Li Ming）',
        examples: 'Li Ming / Zhang Wei',
        sampleValue: 'Li Ming',
      },
    ],
    examExample: {
      title: '2024年英语二（古镇老房子保护调查计划 · 给Jack的邮件） / 2023英二（给David的建议信）',
      sourceNote: '2024英二第一、二段出自 PDF p.7, p.8, p.17；2023英二出自 PDF p.9, p.17–18；第三段与落款按 PDF p.23–24 通用句组合。',
      p1: 'Dear Jack,\nI am highly pleased to learn that we undertake a survey on the preservation of historical buildings in an ancient town. I am writing this letter in order to explain my recent plan for our survey.',
      p2: 'Located in Anhui, Hong village is one of the most popular scenic spots in China. In the first place, we are badly in need of doing some research to gather detailed information, which can help us acquire official data and policies. After that, I am confident that interviewing the residents will not only have the opportunity to understand the needs and challenges of preserving ancient buildings, but also to obtain valuable insights.',
      p3: 'I would like to know what you think about it. Your prompt reply will be highly appreciated.\n\nYours sincerely,\nLi Ming',
    },
  },
  {
    id: 's2-official-letter',
    code: 'S2',
    group: 'small_letter',
    part: 'partA',
    groupLabel: 'Part A · Official / Formal Letter',
    name: '公务信函通用模板',
    englishName: 'Complaint / Application / Inquiry / Advice',
    priority: '高频应用',
    summary: '适用于不认识的个人或机构（经理、教授、编辑、图书馆、某公司/组委会）的投诉信、建议信、求职信、辞职信、咨询信、邀请信。',
    applicability:
      '与私人信件的核心区别在于称呼（用职位或 Sir or Madam）且第一段第一句必须“自我介绍（不可省略）”。',
    fixedWordCount: 72,
    blankWordRange: '24–34',
    estimatedTotalRange: '96–106',
    openingPlaceholderNote:
      '题干未给身份时，默认使用“我是某大学某系学生”；若题干已给身份（如志愿者/项目成员），切换为备选自我介绍。',
    headerBlock: 'Dear 【职位或Sir or Madam】,',
    footerBlock: 'Yours sincerely,\n【署名（通常Li Ming）】',
    defaultOpening:
      'I am a student from the department of 【专业或院系】 in a university.',
    p1Rest:
      'I am writing this letter in order to 【来信意图短语】.',
    p2:
      '【过渡句】. In the first place, 【分点1（套用36句：如badly in need of... / In the past few years, I have done very well...）】. In the second place, 【分点2（如due to..., it is inconvenient/possible for us to...）】.',
    p2OptionalReason3:
      'In the third place, 【分点3（如I wonder if you can... so that we can...）】.',
    p2OptionalLabel: '加入第3点阐述（如三点建议/投诉理由）',
    p3:
      '【情感句（如I will be grateful if my proposals/complaints are considered... / express my gratitude for your kind consideration）】. 【期待回信句（如I am looking forward to your reply at your earliest convenience）】.',
    p1Label: 'Paragraph 1 · 自我介绍（不可省）+ 来信意图',
    p2Label: 'Paragraph 2 · 通用核心段（过渡句 + 36句高频句挑2–3句）',
    p3Label: 'Paragraph 3 · 致谢/致歉 + 期待回复',
    altOpenings: [
      {
        id: 's2-opt1',
        label: '默认学生身份（题干未给身份时用）',
        sentence:
          'I am a student from the department of 【专业或院系】 in a university.',
      },
      {
        id: 's2-opt2',
        label: '工作/项目身份（题干给出特定角色时用）',
        sentence:
          'I am a member working for 【所属项目或机构】 in our university.',
      },
      {
        id: 's2-opt3',
        label: '求职/自荐身份（申请职位时用）',
        sentence:
          'As a senior student majoring in 【专业或院系】, I am eager to seek a challenging opportunity.',
      },
    ],
    keywords: [
      {
        key: '职位或Sir or Madam',
        labelCn: '公务称呼',
        grammarNote: 'Manager / President / Editor / Professor / Sir or Madam',
        examples: 'Sir or Madam / Professor / Manager / Editor',
        sampleValue: 'Sir or Madam',
      },
      {
        key: '专业或院系',
        labelCn: '自我介绍专业/院系',
        grammarNote: '名词（如 Art / Computer Science）',
        examples: 'Art / Literature / Engineering',
        sampleValue: 'Economics',
      },
      {
        key: '来信意图短语',
        labelCn: '来信意图（按信件类型替换）',
        grammarNote: '动词原形短语（接 in order to 后）',
        examples: 'suggest some improvements on your library service / apply for a position as an assistant / complain about...',
        sampleValue: 'suggest some improvements on the library service',
      },
      {
        key: '过渡句',
        labelCn: '第二段开头过渡',
        grammarNote: '完整简单句',
        examples: 'The detailed suggestions can be listed as follows / The reasons for my complaint are as follows',
        sampleValue: 'My suggestions are as follows',
      },
      {
        key: '分点1（套用36句：如badly in need of... / In the past few years, I have done very well...）',
        labelCn: '要点1（套用36句）',
        grammarNote: '完整句子（不含句号）',
        examples: 'we are badly in need of updating the database, which can help us acquire the latest knowledge',
        sampleValue:
          'we are badly in need of updating the database, which can help us acquire the latest knowledge',
      },
      {
        key: '分点2（如due to..., it is inconvenient/possible for us to...）',
        labelCn: '要点2（套用36句）',
        grammarNote: '完整句子（不含句号）',
        examples: "due to the noisy environment, it's impossible for us to study effectively",
        sampleValue:
          "due to the noisy environment, it's impossible for us to study effectively",
      },
      {
        key: '分点3（如I wonder if you can... so that we can...）',
        labelCn: '要点3（请求改进/延长等）',
        grammarNote: '完整句子（不含句号）',
        examples: 'I wonder if the library can extend the opening hours so that we can have more hours to study',
        sampleValue:
          'I wonder if the library can extend the opening hours so that we can have more hours to study',
      },
      {
        key: '情感句（如I will be grateful if my proposals/complaints are considered... / express my gratitude for your kind consideration）',
        labelCn: '第三段第1句：感谢/诉求',
        grammarNote: '完整句子（不含句号）',
        examples: 'I will be grateful if my proposals are considered and positive changes take place in these regards',
        sampleValue:
          'I will be grateful if my proposals are considered and positive changes take place in these regards',
      },
      {
        key: '期待回信句（如I am looking forward to your reply at your earliest convenience）',
        labelCn: '第三段第2句：期待回复',
        grammarNote: '完整句子（不含句号）',
        examples: 'I am looking forward to your reply at your earliest convenience',
        sampleValue:
          'I am looking forward to your reply at your earliest convenience',
      },
      {
        key: '署名（通常Li Ming）',
        labelCn: '落款姓名',
        grammarNote: '默认 Li Ming',
        examples: 'Li Ming',
        sampleValue: 'Li Ming',
      },
    ],
    examExample: {
      title: '2007年英语一（写给大学图书馆的建议/投诉信） & 2022英一（邀请英国大学教授参赛）',
      sourceNote: '2007图书馆建议信第二段直接出自 PDF p.15–16 原例；第一、三段按 PDF p.10, p.23 规则组合。',
      p1: 'Dear Sir or Madam,\nI am a student from the department of Art in a university. I am writing this letter in order to suggest some improvements on the library service.',
      p2: "In the first place, we are badly in need of updating the database, which can help us acquire the latest knowledge. In the second place, due to the noisy environment, it's impossible for us to study effectively. In the third place, I wonder if the library can extend the opening hours so that we can have more hours to study. (PDF p.15–16 原文)",
      p3: 'I will be grateful if my proposals are considered and positive changes take place in these regards. I am looking forward to your reply at your earliest convenience.\n\nYours sincerely,\nLi Ming',
    },
  },
  {
    id: 's3-notice',
    code: 'S3',
    group: 'small_notice',
    part: 'partA',
    groupLabel: 'Part A · Notice / Announcement',
    name: '通知 / 告示模板（Notice）',
    englishName: 'Campus Event / Recruitment Notice',
    priority: '高频必背',
    summary: '适用于公开宣布比赛、活动、讲座或招募志愿者/助研的 Notice（通知=告示，英文均写 Notice）。',
    applicability:
      '与邀请信本质相同，仅格式和第一、三段套话不同，第二段完全共享 36 句万能库（时间地点+主题/职责+人员/要求+奖励）。',
    fixedWordCount: 74,
    blankWordRange: '24–32',
    estimatedTotalRange: '98–106',
    openingPlaceholderNote:
      '默认用于举办校园活动/比赛；若是社团丰富课外生活或招募宣传，可切换下方第2/3个开头句。',
    headerBlock: 'Notice',
    footerBlock: '【发布机构或署名】\n【日期（如December 23, 2023）】',
    defaultOpening:
      "It's a pleasure to inform everyone that 【活动或项目名称】 will be held in our university.",
    p1Rest:
      '【通知目的句（如This notice is intended to introduce some details / The relevant matters are hereby notified as follows）】.',
    p2:
      'To begin with, 【要点1（时间地点或岗位职责：如The event is scheduled in ... at ... / The selected candidates will assist in ...）】. Secondly, 【要点2（参赛对象或招募要求：如All students from all grades are eligible to ... / The candidates should be enthusiastic about ...）】. Last but not least, 【要点3（奖励或收获：如the top three students will receive awards / allow you to gain valuable experience in ...）】.',
    p2OptionalReason3:
      'Please arrange your time in advance and attend the activity on time.',
    p2OptionalLabel: '段尾加万能秩序句（字数不够时用）',
    p3:
      'Welcome to join us. If you are interested in 【核心主题】 and are willing to have a quite different experience, please do not hesitate to email us at 【联系邮箱（如123456@qq.com）】.',
    p1Label: 'Paragraph 1 · 通知概况 + 通知目的',
    p2Label: 'Paragraph 2 · 具体内容（时间地点/职责 + 人员/要求 + 奖励/收获）',
    p3Label: 'Paragraph 3 · 发出邀请 + 报名方式',
    altOpenings: [
      {
        id: 's3-opt1',
        label: '默认：It is a pleasure to inform everyone...',
        sentence:
          "It's a pleasure to inform everyone that 【活动或项目名称】 will be held in our university.",
      },
      {
        id: 's3-opt2',
        label: '备选1：大学主办（Our university is about to host...）',
        sentence:
          'Our university is about to host 【活动或项目名称】 for students.',
      },
      {
        id: 's3-opt3',
        label: '备选2：吸引眼球（Attention all students...）',
        sentence:
          'Attention all students interested in 【活动或项目名称】 on campus!',
      },
      {
        id: 's3-opt4',
        label: '备选3：丰富课外生活（To enrich students’ extracurricular life...）',
        sentence:
          "To enrich students' extracurricular life and improve communication among members, our university will host 【活动或项目名称】.",
      },
    ],
    keywords: [
      {
        key: '活动或项目名称',
        labelCn: '活动/比赛/招募项目名',
        grammarNote: '名词短语（带冠词）',
        examples: 'an upcoming singing contest / a research project on campus sports',
        sampleValue: 'an upcoming singing contest',
      },
      {
        key: '通知目的句（如This notice is intended to introduce some details / The relevant matters are hereby notified as follows）',
        labelCn: '通知目的句',
        grammarNote: '完整句子（不含句号）',
        examples: 'This notice is intended to introduce some details of this contest / The relevant matters are hereby notified as follows',
        sampleValue: 'This notice is intended to introduce some details of this contest',
      },
      {
        key: '要点1（时间地点或岗位职责：如The event is scheduled in ... at ... / The selected candidates will assist in ...）',
        labelCn: '要点1（时间地点/职责）',
        grammarNote: '完整句子（不含句号）',
        examples: 'the contest is scheduled in our assembly hall on Friday from 8:00 a.m. to 10:00 a.m.',
        sampleValue:
          'the contest is scheduled in our assembly hall on Friday from 8:00 a.m. to 10:00 a.m.',
      },
      {
        key: '要点2（参赛对象或招募要求：如All students from all grades are eligible to ... / The candidates should be enthusiastic about ...）',
        labelCn: '要点2（人员资格/要求）',
        grammarNote: '完整句子（不含句号）',
        examples: 'all students from all grades are eligible to enter the competition, including national and international students',
        sampleValue:
          'all students from all grades are eligible to enter the singing competition, including national and international students',
      },
      {
        key: '要点3（奖励或收获：如the top three students will receive awards / allow you to gain valuable experience in ...）',
        labelCn: '要点3（奖励/收获）',
        grammarNote: '完整句子（不含句号）',
        examples: 'in terms of encouragement and rewards, the top three students will all receive awards and trophies',
        sampleValue:
          'in terms of encouragement and rewards, the top three students will all receive awards and trophies, and all shortlisted participants will receive bonus points',
      },
      {
        key: '核心主题',
        labelCn: '活动主题领域',
        grammarNote: '名词/动名词',
        examples: 'this activity / singing / campus sports',
        sampleValue: 'singing',
      },
      {
        key: '联系邮箱（如123456@qq.com）',
        labelCn: '报名邮箱',
        grammarNote: '邮箱地址',
        examples: '123456@qq.com',
        sampleValue: '123456@qq.com',
      },
      {
        key: '发布机构或署名',
        labelCn: '右下角署名',
        grammarNote: '如题干要求不写自己名字则写机构名',
        examples: 'The Students Union / Li Ming',
        sampleValue: "The Students' Union",
      },
      {
        key: '日期（如December 23, 2023）',
        labelCn: '发布日期',
        grammarNote: '月 日, 年',
        examples: 'December 23, 2023',
        sampleValue: 'December 23, 2023',
      },
    ],
    examExample: {
      title: '2020年英语一（歌唱比赛通知） & 2023年英语一（Smith教授体育项目招募 Notice）',
      sourceNote: '2020英一、2023英一第二段均出自 PDF p.25–26 原文；第一、三段与格式出自 PDF p.24–27。',
      p1: "Notice\n\nIt's a pleasure to inform everyone that an upcoming singing contest will be held in our university. This notice is intended to introduce some details of this contest.",
      p2: '2020英一（时间地点+受邀人员+活动奖励）：The contest is scheduled in our assembly hall on Friday from 8:00 a.m. to 10:00 a.m. All students from all grades are eligible to enter the singing competition, including national and international students. In terms of encouragement and rewards, the top three students will all receive awards and trophies, and all shortlisted participants will receive bonus points.\n\n2023英一（职责+要求+好处）：To begin with, about the duties, the selected candidates will assist in Prof. Smith\'s conducting surveys, collecting and analyzing data of students’ sports activities on campus. Secondly, about the requirements, the candidates should be enthusiastic about sports and have sound organization, communication and planning skills. Last but not least, this project will allow you to contribute to the development of campus sports while gaining valuable experience in research.',
      p3: "Welcome to join us. If you are interested in this activity and are willing to have a quite different experience these days, please do not hesitate to email us at 123456@qq.com.\n\nThe Students' Union\nDecember 23, 2023",
    },
  },
  {
    id: 's4-minutes',
    code: 'S4',
    group: 'small_minutes',
    part: 'partA',
    groupLabel: 'Part A · Minutes of Meeting',
    name: '会议纪要模板（Minutes of Meeting）',
    englishName: 'Meeting Minutes / Memo',
    priority: '23大纲新增',
    summary: '23年考研大纲新增题型（本质与备忘录相同），重在完整格式表头与“导入→目的→发言→赞同→决定”六步结构。',
    applicability:
      '适用于会议纪要（Minutes of Meeting / Summary of Meeting）或事件简要说明。周期性会议可勾选第6句“下次会议安排”，一次性会议不写。',
    fixedWordCount: 84,
    blankWordRange: '24–32',
    estimatedTotalRange: '108–116',
    openingPlaceholderNote:
      '纪要格式表头不可漏写；正文按“第1句导入→第2句目的→第3句发言→第4句赞同→第5句决定”固定顺序展开。',
    headerBlock:
      'Minutes of Meeting\nDate: 【会议日期】\nTime: 【起止时间】\nLocation: 【会议地点】\nObjective: 【会议主题短语】\nAttendees: 【参会人员】\nMeeting content:',
    footerBlock: 'Recorded by: 【记录人署名】\n【会议日期】',
    defaultOpening:
      'The meeting commenced with a warm welcome from 【主持人】, followed by an introduction to the purpose of gathering.',
    p1Rest:
      'The meeting aims to 【会议目的（如make a plan for... / discuss the problem of... and find solutions）】. Many 【参会群体】 participated in the discussion.',
    p2:
      '【发言人（如The chairman / Experts / The speaker）】 expressed the opinion that 【核心观点（可借用大作文二三段观点句）】. The majority of those attendees were in favour of the 【决定对象（statement/plan/decision）】.',
    p2OptionalReason3:
      'The date and location of the next meeting will be announced via email to all participants.',
    p2OptionalLabel: '加入第6句：下次会议安排（仅周期性例会使用）',
    p3:
      'As a concrete measure, the meeting decided that 【具体决定内容】. The meeting concluded with a vote of thanks extended to all participants for their active involvement and commitment.',
    p1Label: 'Part 1 · 纪要导入 + 会议目的（第1–2句）',
    p2Label: 'Part 2 · 发言观点 + 参会人赞同（第3–4句）',
    p3Label: 'Part 3 · 最终决定 + 致谢结束（第5句[+第6句]）',
    altOpenings: [
      {
        id: 's4-opt1',
        label: '默认：热烈欢迎+介绍目的',
        sentence:
          'The meeting commenced with a warm welcome from 【主持人】, followed by an introduction to the purpose of gathering.',
      },
      {
        id: 's4-opt2',
        label: '备选1：致欢迎辞并概述意义',
        sentence:
          'The 【主持人】 delivers welcoming remarks, and provides a brief overview of the significance of 【会议主题短语】.',
      },
    ],
    keywords: [
      {
        key: '会议日期',
        labelCn: '表头与落款日期',
        grammarNote: '月 日, 年',
        examples: 'December 23, 2023',
        sampleValue: 'December 23, 2023',
      },
      {
        key: '起止时间',
        labelCn: '会议时间',
        grammarNote: 'From ... to ...',
        examples: 'From 10:00 a.m. to 11:30 a.m.',
        sampleValue: 'From 10:00 a.m. to 11:30 a.m.',
      },
      {
        key: '会议地点',
        labelCn: '会议室/地点',
        grammarNote: '短语',
        examples: 'A111, conference room',
        sampleValue: 'A111, conference room',
      },
      {
        key: '会议主题短语',
        labelCn: 'Objective 主题',
        grammarNote: '短语或单词',
        examples: 'Improving staff welfare / Planning the campus culture festival',
        sampleValue: 'Improving staff welfare',
      },
      {
        key: '参会人员',
        labelCn: 'Attendees 参会人',
        grammarNote: '来自题干',
        examples: 'All freshmen / All department managers',
        sampleValue: 'All department representatives',
      },
      {
        key: '主持人',
        labelCn: '会议主持人',
        grammarNote: '名词（如不确定写 the speaker）',
        examples: 'the chairman / university representative / the speaker',
        sampleValue: 'the chairman',
      },
      {
        key: '会议目的（如make a plan for... / discuss the problem of... and find solutions）',
        labelCn: '第2句：会议具体目的',
        grammarNote: '动词原形短语（接 aims to 后）',
        examples: 'make a brief review of the activity held last week / discuss the problem of staff welfare and find some suitable solutions',
        sampleValue:
          'discuss the problem of staff welfare and find some suitable solutions',
      },
      {
        key: '参会群体',
        labelCn: '参与讨论群体',
        grammarNote: '复数名词',
        examples: 'students / colleagues / professors',
        sampleValue: 'colleagues',
      },
      {
        key: '发言人（如The chairman / Experts / The speaker）',
        labelCn: '第3句：核心发言人',
        grammarNote: '主语名词',
        examples: 'The chairman / Experts / The majority of workers',
        sampleValue: 'The chairman',
      },
      {
        key: '核心观点（可借用大作文二三段观点句）',
        labelCn: '第3句：发言核心内容',
        grammarNote: '完整陈述句（接 that 后）',
        examples: 'enough attention must be turned to staff welfare by our company',
        sampleValue:
          'enough attention must be turned to staff welfare by our company',
      },
      {
        key: '决定对象（statement/plan/decision）',
        labelCn: '第4句：赞同对象',
        grammarNote: '单数名词',
        examples: 'plan / statement / decision',
        sampleValue: 'plan',
      },
      {
        key: '具体决定内容',
        labelCn: '第5句：会议最终决定',
        grammarNote: '完整从句（接 that 后）',
        examples: 'the company will allocate more funds to improve working conditions',
        sampleValue:
          'the company will allocate more funds to improve the working environment',
      },
      {
        key: '记录人署名',
        labelCn: 'Recorded by 署名',
        grammarNote: '默认 Li Ming',
        examples: 'Li Ming',
        sampleValue: 'Li Ming',
      },
    ],
    examExample: {
      title: '会议纪要官方示例说明（原PDF第28–30页）',
      sourceNote:
        '原PDF第30页明确说明：“由于纪要并没有历年真题或样题供参考，因此无法给出例句。” 以下示例严格依据 PDF p.28–29 提供的董事长发言例句与标准句式拼装；实际真题需按考场材料补充。',
      p1: 'Minutes of Meeting\nDate: December 23, 2023\nTime: From 10:00 a.m. to 11:30 a.m.\nLocation: A111, conference room\nObjective: Staff welfare improvement\nAttendees: All department representatives\nMeeting content:\nThe meeting commenced with a warm welcome from the chairman, followed by an introduction to the purpose of gathering. The meeting aims to discuss the problem of staff welfare and find some suitable solutions. Many colleagues participated in the discussion.',
      p2: 'The chairman expressed the opinion that enough attention must be turned to staff welfare by our company. (PDF p.29 原例) The majority of those attendees were in favour of the statement.',
      p3: 'As a concrete measure, the meeting decided that the company would allocate more funds to improve staff welfare. The meeting concluded with a vote of thanks extended to all participants for their active involvement and commitment.\n\nRecorded by: Li Ming\nDecember 23, 2023',
    },
  },
];

export const SMALL_ESSAY_36_SENTENCES = [
  {
    category: '1. 交代时间、地点、事件（1–3句，挑1句背）',
    sentences: [
      '1. The meeting is to be held in 【某地】 at 8:00 a.m., on Sunday, December 24th.',
      '2. The English corner is scheduled in 【某地】 on Friday from 7:00 p.m. to 8:00 p.m.',
      '3. The meeting/event/activity will be conducted at 【某地】 and the duration is for 3 hours with a short break in between.',
    ],
  },
  {
    category: '2. 交代活动/会议主题（4–7句，挑1句背）',
    sentences: [
      '4. The subject of the conference is to discuss 【某事】.',
      '5. The focus of the conference is to engage in a discussion about 【某事】.',
      '6. The theme of the conference revolves around discussing 【某事】.',
      '7. The purpose of the conference is to facilitate a discussion regarding 【某事】.',
    ],
  },
  {
    category: '3. 交代参与/受邀人物（8–11句，挑2句背）',
    sentences: [
      '8. The event is predicted to attract a considerable number of students and faculties.',
      '9. All students from all grades are eligible to enter the competition, including national and international students.',
      '10. We will invite some renowned scholars, famous entrepreneurs, and friends from the media.',
      '11. This event is expected to welcome numerous notable guests, including well-known experts and scholars in the industry, who have profound attainments and remarkable achievements in their respective fields.',
    ],
  },
  {
    category: '4. 交代流程、奖品与收获（12–17句，常用于邀请/通知）',
    sentences: [
      "12. Interesting activities such as singing contests and debate competitions will be held to inspire students' enthusiasm for 【某方面】.",
      '13. The profound experience will be memorable and the prize/souvenir will be very valuable.',
      '14. In terms of encouragement and rewards, the top three students will all receive awards and trophies, and all shortlisted participants will receive bonus points.',
      '15. During the event, you will have the opportunity to meet like-minded individuals, engage in interesting activities, and enjoy a great time together.',
      '16. This is going to be a wonderful occasion filled with fun, learning, and interaction.',
      '17. This event/activity will allow you to contribute to the development of our university while gaining valuable experience in 【某领域】.',
    ],
  },
  {
    category: '5. 交代推荐对象（18–22句，推荐信/自荐信首选）',
    sentences: [
      '18. Located in 【某地】, 【某景点】 is one of the greatest/most popular scenic spots in the world.',
      '19. Written by/Directed by 【作者/导演】, 【作品】 is one of the greatest/most popular books/movies in the world.',
      '20. Shen Kuo, an ancient Chinese scientist, was an outstanding scientist during the Northern Song Dynasty, who achieved remarkable accomplishments in many fields.',
      '21. Planned by the Student Union, the activity is one of the most popular activities in our university.',
      '22. In the past few years, I have done very well and received plenty of honors, such as scholarship, English competition certificate and so on.（自荐/把I换you用于表扬推荐）',
    ],
  },
  {
    category: '6. 万能百搭功能句（23–33句，建议/投诉/求助/答复/比较全能）',
    sentences: [
      '23. We are badly in need of 【某物】, which can help us 【做某事】.',
      "24. Due to 【某原因】, it's convenient/inconvenient/possible/impossible for us to 【做某事】.",
      '25. I wonder if you can 【做某事】 so that I can 【达成结果】.',
      '26. We could have more opportunities to 【做某事】 if you improve 【某方面】.',
      '27. It is advisable to 【做某事】, which can really help you 【结果】.',
      '28. 【某事物】 provides a unique opportunity to let you explore yourself with creativity.',
      '29. Everyone agrees that your 【优点/努力】 are key to the satisfactory outcome.',
      '30. 【某事物】 allows you to engage with different cultures and social customs.（可换 encyclopedic knowledge of nature/science/history）',
      '31. I am confident that the students will not only have the opportunity to learn from you, but also to draw inspiration from your example.',
      "32. If there had been no your timely help or response, I'm afraid the consequences would have been truly serious.",
      '33. While I understand that 【A】 has advantages in 【某方面】, I believe 【B】 will provide you with a more profound and thought-provoking experience.',
    ],
  },
  {
    category: '7. 招募要求与邀请名家（34–36句）',
    sentences: [
      '34. The selected candidates will assist in conducting surveys, collecting and analyzing data of 【某事】. Moreover, the candidates should be enthusiastic about 【某事】 and have sound organization and communication skills.',
      '35. The candidates should be enthusiastic about 【某事】 and have sound organization/communication/teaching/planning skills.',
      '36. All of us desire to improve the ability of 【某能力】 under your professional guidance.',
    ],
  },
];

export const SMALL_ESSAY_WORKFLOW = [
  {
    step: '01. 辨体裁与收信人（1 分钟）',
    detail:
      '判断是书信（Private vs Official）、通知告示（Notice）还是纪要（Minutes of Meeting）。私人信件直接写背景+意图；公务信函必须加自我介绍；Notice 和 Minutes 严格写齐标题、日期、署名/表头格式。',
  },
  {
    step: '02. 定一三段套话（2 分钟）',
    detail:
      '第一段从对应模板选定开头句与来信意图/通知目的；第三段根据情感类型挑1句感谢/道歉/邀请句 + 1句期待回信/报名方式。',
  },
  {
    step: '03. 组合第二段核心句（2 分钟）',
    detail:
      '针对英文/中文分点提示，从 36 句高频万能句库中挑选最贴合的 2–3 句（如 badly in need of、it is advisable to、scheduled in、eligible to），注意“我/你”人称随语境互换。',
  },
  {
    step: '04. 10 分钟默写与格式检查（5 分钟）',
    detail:
      '控制在约 100 词（8 句左右）。检查：① 题目是否要求 Use "Li Ming" instead / Do not use your own name（Notice 不写个人姓名可写学生会）；② 称呼后逗号/冒号规范；③ 时态（活动计划用一般将来/一般现在，过往成就用现在完成时）。',
  },
];
