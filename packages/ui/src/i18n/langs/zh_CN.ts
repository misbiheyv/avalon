import pages from '@/i18n/langs/pages';

export const zh_CN = {
  menu: {
    menu: '选单',
    home: '主页',
    profile: '设定',
    wiki: '维基',
    about: '关于',
    stats: '统计',
  },
  room: {
    errorNotFound: '这是错误的uuid',
    backToLobby: '返回大厅',
    restartGame: '重开游戏',
  },
  mainPage: {
    header: '欢迎来到《阿瓦隆》在线棋盘游戏官网！',
    createRoom: '创建房间',
    watch: '观战',
    join: '加入',
    gamesList: '游戏列表',
    players: '位玩家',
    loading: '加载中...',
    online: '在线: {count}',
  },
  alert: {
    titlediscord: 'Discord',
    contentdiscord:
      '想找人一起探索《阿瓦隆》吗？加入我们的 <b><a href="https://discord.gg/DR9cEDDNdN" target="_blank">Discord</a></b> 社区！',
    titleregistration: '注册与个人统计',
    contentregistration: '网站新增登录/注册功能，该功能将显示您在不同角色中的胜利次数及总体胜率的个人统计数据',
  },
  game: {
    winner: '胜利方',
    evil: '坏人方',
    good: '好人方',
    stage: '阶段',
    voteStage: '投票阶段',
    voting: '投票',
    excalibur: '神剑',
    'team building': '团队建立',
    mission: '任务',
    initialization: '初始化',
    'lady of lake': '湖中验人',
    'check loyalty': '检查忠诚度',
    'witch loyalty': '女巫的忠诚',
    'announce loyalty': '宣布忠诚',
    witch: '巫婆',
    end: '完结',
    lancelots: '兰斯洛特',
    assassinate: '暗杀',
    hidden: '隐藏',
    historyMode: '记录阶段',
    gameIsEnded: '游戏结束',
    rolesAndAddons: '角色与插件',
  },
  endReason: {
    manualy: '游戏已手动完成',
    evilTeamMissions: '坏人方3次任务失败',
    goodTeamMissions: '好人方3次任务成功',
    missMerlin: '坏人方暗杀梅林失败',
    missGuinevere: '坏人方暗杀女皇失败',
    missLovers: '坏人方暗杀恋人失败',
    missCleric: '邪恶团队尝试杀死牧师 + 1 但失败了',
    killCleric: '邪恶团队杀死了牧师 + 1',
    killGuinevere: '坏人方暗杀女皇成功',
    killLovers: '坏人方暗杀恋人成功',
    killMerlin: '坏人方暗杀梅林成功',
  },
  roles: {
    merlin: '梅林',
    merlinPure: '终极梅林',
    guinevere: '女皇',
    percival: '派西维尔',
    tristan: '特里斯坦',
    isolde: '伊索德',
    troublemaker: '麻烦友',
    servant: '仆人',
    goodLancelot: '正义-兰斯洛特',
    evilLancelot: '邪恶-兰斯洛特',
    lancelots: '兰斯洛特',
    mordred: '莫德雷德',
    trickster: '骗子',
    morgana: '莫甘娜',
    oberon: '奥伯伦',
    lunatic: '疯子',
    brute: '野蛮人',
    witch: '巫婆',
    minion: '士兵',
    cleric: '牧师',
    revealer: '被揭示者',
    role: '角色',
  },
  breadCrumbs: {
    merlin: '梅林',
    merlin_pure: '终极梅林',
    guinevere: '女皇',
    percival: '派西维尔',
    lovers: '恋人',
    troublemaker: '麻烦友',
    servant: '仆人',
    lancelots: '兰斯洛特',
    mordred: '莫德雷德',
    trickster: '骗子',
    morgana: '莫甘娜',
    revealer: '被揭示者',
    oberon: '奥伯伦',
    lunatic: '疯子',
    brute: '野蛮人',
    witch: '巫婆',
    minion: '士兵',
    cleric: '牧师',
    wiki: '维基',
    expansions: '插件',
    roles: '角色',
    lady: '湖中仙女',
    lady_sea: '海中仙女',
    excalibur: '神剑',
    rules: '规则',
  },
  addons: {
    ladyOfLake: '湖中仙女',
    ladyOfSea: '海中仙女',
    excalibur: '神剑',
  },
  ladyModule: {
    announceGood: '宣告好人方',
    announceEvil: '宣告坏人方',
    announce: '公告',
  },
  options: {
    roles: '角色',
    coreRoles: '核心',
    extraRoles: '额外',
    experimentalRoles: '实验性',
    addons: '插件',
    features: '功能',
    ladyHint: '湖中仙女可以让你了解其他玩家的忠诚度',
    ladySeaHint: '湖中仙女的类似角色，但如果你检查邪恶力量的玩家，你将看到他的角色。',
    excaliburHint: '神剑让您改变任务参与者之一的决定',
    anonymousVoting: '匿名投票',
    anonymousVotingHint: '透过匿名投票,您不知道谁批准任务、谁拒绝任务',
    hiddenHistory: '隐藏记录',
    hiddenHistoryHint: '透过隐藏记录,游戏中过去的动作被隐藏',
    displayIndex: '显示索引',
    displayIndexHint: '显示牌桌上每位玩家的索引号',
  },
  startPanel: {
    copyLink: '复制连结',
    discord: 'Discord',
    leaveGame: '离开游戏',
    joinGame: '加入游戏',
    lockGame: '锁定游戏',
    unlockGame: '解锁游戏',
    startGame: '开始游戏',
    options: '选项',
  },
  onlineStatus: {
    connecting: '连线中...',
    connected: '上线',
    error: '连线失败',
  },
  errors: {
    wrongPassword: '密码错误',
    emailNotExist: '找不到使用此电子邮件的用户',
    emailAlreadyExist: '此电子邮件已被注册',
  },
  profile: {
    username: '用户名',
    stats: '统计',
    logout: '退出登录',
    language: '语言',
    hideSpoilersHint: '隐藏剧透',
    hideIndexHint: '隐藏历史索引',
    animeMode: '动漫模式',
    update: '更新',
    colorTheme: '色彩主题',
    darkTheme: '深色主题',
    lightTheme: '浅色主题',
    profile: '个人资料',
    settings: '设置',
    updatePassword: '更新密码',
  },
  validators: {
    requiredField: '必填项',
    minCharacters: '最少{count}个字符',
    spacesForbidden: '禁止使用空格',
  },
  modal: {
    username: '用户名',
    usernameHint: '选择您的游戏名称',
    loginTab: '登录',
    registrationTab: '注册',
    loginButton: '登录',
    registrationButton: '注册',
    emailHint: '将用于身份验证',
    password: '密码',
    email: '电子邮件',
    updateButton: '更新',
    newPassword: '新密码',
    newEmail: '新电子邮件',
  },
  inGame: {
    sendTeam: '发送组队',
    approve: '同意',
    reject: '拒绝',
    success: '成功',
    fail: '失败',
    checkLoyalty: '检查忠诚度',
    giveExcalibur: '给予神剑',
    skipExcalibur: '跳过神剑',
    useExcalibur: '使用神剑',
    useWitchAbility: '隐藏任务',
    skipWitchAbility: '跳过',
  },
  assassinate: {
    lovers: '恋人',
    assassinate: '暗杀',
    shot: '{killerName} 暗杀 {killedName}',
    shotResultHit: '{killedName} 是 {roleName}',
    shotResultMiss: '{killedName} 不是 {roleName}',
  },
  rolesInfo: {
    roles: '角色',
    inGameRoles: '游戏中的角色',
    visibleRoles: '你可见的角色',
    merlinInfo: '知道谁是坏人方,必须保持隐藏',
    merlinPureInfo: '知道谁是坏人方及角色,必须保持隐藏',
    percivalInfo: '看到两位角色(梅林/莫甘娜),但不知道谁是真正的梅林',
    servantInfo: '亚瑟王的忠实仆人',
    troublemakerInfo: '不得不对他的忠诚度撒谎',
    guinevereInfo: '看到两位角色(兰斯洛特),但不知道谁是真正的兰斯洛特',
    goodLancelotInfo: '好人方的兰斯洛特,可以从角色转为坏人方',
    evilLancelotInfo: '坏人方的兰斯洛特,可以从角色转为好人方',
    mordredInfo: '梅林不知道你是坏人方',
    morganaInfo: '扮演梅林,混淆派西维尔',
    oberonInfo: '其他坏人方不知道你是坏人方',
    minionInfo: '莫德雷德的爪牙',
    isoldeInfo: '恋人,知道谁是特里斯坦,必须保持隐藏',
    tristanInfo: '恋人,知道谁是伊索德,必须保持隐藏',
    evilInfo: '角色未知的坏人方玩家',
    goodInfo: '角色未知的好人方玩家',
    tricksterInfo: '对他的忠诚撒谎',
    lunaticInfo: '每个任务都必须失败',
    bruteInfo: '可能只会失败前三个任务',
    witchInfo: '可以隐藏一次任务的结果，但这会给一个随机玩家忠诚检测',
    revealerInfo: '在第二次任务失败后揭露自己',
    clericInfo: '知道第一次任务领导者的忠诚情况。必须保持隐藏',
    unknownInfo: '未知角色',
    mysteryWizardInfo: '两个玩家之一是好人方的(梅林)还是坏人的(莫甘娜)',
    unknownLancelotInfo: '兰斯洛特,谁的忠诚无人知晓',
  },
  hostMenu: {
    host: '房主',
    hostPanel: '房主面板',
    endRestartGameHint: '开始投票,决定游戏结束或重新开始',
    endGame: '游戏结束',
    restartGame: '重新开始游戏',
    shuffle: '随机换位',
    shuffleHint: '随机调整大厅中玩家的位置',
  },
  history: {
    history: '记录',
    live: '现况',
    vote: '投票',
    checkLoyalty: '检查',
    mission: '任务',
    assassinate: '暗杀',
    switchResult: '神剑',
    switchLancelots: '兰斯洛特',
    hidden: '隐藏',
  },
  mission: {
    players: '玩家',
    fails: '失败',
    indexMission: '{index} 任务',
    failsCount: '失败 {count}',
    hidden: '由巫婆隐藏',
    team: '团队：',
  },
  chat: {
    message: '讯息',
  },
  infoMessage: {
    loginToMessage: '登入发送讯息',
    disableSpoilers: '停用「隐藏剧透」选项才能查看内容',
    waitForAction: '游戏更新了!我们正在等待您的行动',
    loginToJoin: '登入加入游戏',
    linkCopied: '连结已复制到剪贴簿',
    loginToCreate: '登入创建游戏',
    close: '关闭',
  },
  votes: {
    yes: '是',
    no: '否',
    endGame: '投票结束游戏',
    endAndRestartGame: '投票结束游戏并开始新的游戏',
  },
  notFound: {
    error: '哎呀!抱歉,找不到页面',
    switch: '切换路线',
  },
  previewLink: {
    'Minions of Mordred(*)': '莫德雷德的爪牙(*)',
    Minions: '士兵',
  },
  spoiler: {
    spoiler: '劇透',
    spoilerHint: '該內容隱藏在劇透下方,因為它包含其他玩家不知道的訊息',
  },
  vote: {
    forcedVote: '强制投票',
    voteIndex: '{index} 票',
    teamSelected: '由选择的团队',
    team: '团队',
    excaliburOwner: '(神剑)',
    approve: '批准：',
    reject: '拒绝：',
  },
  checkLoyalty: {
    checkInfo: '<b>{ladyOwner}</b> 检查了 <b>{ladyTarget}</b> 的忠诚',
    declareInfo: '并宣布他的忠诚为',
  },
  lancelotsHistory: {
    becameEvil: '变得邪恶',
    becameGood: '变得善良',
    lancelotSaveLoyalty: '保持忠诚',
    lancelotsLoyal: '保持忠诚',
    lancelotsSwap: '更改了忠诚',
    cards: '卡牌：',
  },
  switch: {
    skip: '决定不使用 神剑',
    switchInfo: '<b>{switcher}</b> 使用 神剑 将 <b>{target}</b> 的行动更改为',
  },
  chartStats: {
    countPlayer: '{playerCount} 名玩家',
    evilWinrate: '黑暗阵营胜率',
    goodWinrate: '光明阵营胜率',
    winrateByTeamSize: '根据队伍规模的胜率',
    halfWinrate: '50% 胜率',
  },
  ...pages['zh-CN'],
};
