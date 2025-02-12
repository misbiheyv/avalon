import pages from '@/i18n/langs/pages';

export const zh_TW = {
  menu: {
    menu: '選單',
    home: '主頁',
    profile: '設定',
    wiki: '維基',
    about: '關於',
  },
  room: {
    errorNotFound: '這是錯誤的uuid',
    backToLobby: '返回大廳',
    restartGame: '重開遊戲',
  },
  mainPage: {
    header: '歡迎來到《阿瓦隆》線上棋盤遊戲網站！',
    createRoom: '創建房間',
    watch: '觀戰',
    join: '加入',
    gamesList: '遊戲列表',
    players: '位玩家',
    loading: '加載中...',
    online: '線上: {count}',
  },
  alert: {
    titlediscord: 'Discord',
    titletranslate: '翻譯',
    contentdiscord:
      '想找人一起探索《阿瓦隆》嗎？加入我們的 <b><a href="https://discord.gg/DR9cEDDNdN" target="_blank">Discord</a></b> 社區！',
    contenttranslate:
      '如果您能幫助我們將網站翻譯成您的語言，我們將非常高興。請通過 <b><a href="https://discord.gg/DR9cEDDNdN" target="_blank">Discord</a></b> 聯繫我們！',
  },
  game: {
    winner: '勝利方',
    evil: '壞人方',
    good: '好人方',
    stage: '階段',
    voteStage: '投票階段',
    voting: '投票',
    excalibur: '神劍',
    'team building': '團隊建立',
    mission: '任務',
    initialization: '初始化',
    'lady of lake': '湖中驗人',
    witch: '巫婆',
    end: '完結',
    lancelots: '蘭斯洛特',
    assassinate: '暗殺',
    hidden: '隱藏',
    historyMode: '記錄階段',
    gameIsEnded: '遊戲結束',
    rolesAndAddons: '角色與插件',
  },
  endReason: {
    manualy: '遊戲已手動完成',
    evilTeamMissions: '壞人方3次任務失敗',
    goodTeamMissions: '好人方3次任務成功',
    missMerlin: '壞人方暗殺梅林失敗',
    missGuinevere: '壞人方暗殺女皇失敗',
    missLovers: '壞人方暗殺戀人失敗',
    missCleric: '邪惡團隊嘗試殺死牧師 + 1 但失敗了',
    killCleric: '邪惡團隊殺死了牧師 + 1',
    killGuinevere: '壞人方暗殺女皇成功',
    killLovers: '壞人方暗殺戀人成功',
    killMerlin: '壞人方暗殺梅林成功',
  },
  roles: {
    merlin: '梅林',
    merlinPure: '終極梅林',
    guinevere: '女皇',
    percival: '派西維爾',
    tristan: '特里斯坦',
    isolde: '伊索德',
    troublemaker: '麻煩友',
    servant: '僕人',
    goodLancelot: '正義-蘭斯洛特',
    evilLancelot: '邪惡-蘭斯洛特',
    lancelots: '蘭斯洛特',
    mordred: '莫德雷德',
    trickster: '騙子',
    morgana: '莫甘娜',
    oberon: '奧伯倫',
    lunatic: '瘋子',
    brute: '野蠻人',
    witch: '巫婆',
    minion: '士兵',
    cleric: '牧師',
    revealer: '被揭示者',
    role: '角色',
  },
  breadCrumbs: {
    merlin: '梅林',
    merlin_pure: '終極梅林',
    guinevere: '女皇',
    percival: '派西維爾',
    lovers: '戀人',
    troublemaker: '麻煩友',
    servant: '僕人',
    lancelots: '蘭斯洛特',
    mordred: '莫德雷德',
    trickster: '騙子',
    morgana: '莫甘娜',
    oberon: '奧伯倫',
    lunatic: '瘋子',
    brute: '野蠻人',
    witch: '巫婆',
    minion: '士兵',
    cleric: '牧師',
    wiki: '維基',
    expansions: '插件',
    roles: '角色',
    lady: '湖中仙女',
    lady_sea: '海中仙女',
    excalibur: '神劍',
    rules: '規則',
  },
  addons: {
    ladyOfLake: '湖中仙女',
    ladyOfSea: '海中仙女',
    excalibur: '神劍',
  },
  ladyModule: {
    announceGood: '宣告好人方',
    announceEvil: '宣告壞人方',
    announce: '公告',
  },
  options: {
    roles: '角色',
    coreRoles: '核心',
    extraRoles: '額外',
    experimentalRoles: '實驗性',
    addons: '插件',
    features: '功能',
    ladyHint: '湖中仙女可以讓你了解其他玩家的忠誠度',
    ladySeaHint: '湖中仙女的類似角色，但如果你檢查邪惡力量的玩家，你將看到他的角色。',
    excaliburHint: '神劍讓您改變任務參與者之一的決定',
    anonymousVoting: '匿名投票',
    anonymousVotingHint: '透過匿名投票,您不知道誰批准任務、誰拒絕任務',
    hiddenHistory: '隱藏記錄',
    hiddenHistoryHint: '透過隱藏記錄,遊戲中過去的動作被隱藏',
    displayIndex: '顯示索引',
    displayIndexHint: '顯示牌桌上每位玩家的索引號',
  },
  startPanel: {
    copyLink: '複製連結',
    discord: 'Discord',
    leaveGame: '離開遊戲',
    joinGame: '加入遊戲',
    lockGame: '鎖定遊戲',
    unlockGame: '解鎖遊戲',
    startGame: '開始遊戲',
    options: '選項',
  },
  onlineStatus: {
    connecting: '連線中...',
    connected: '上線',
    error: '連線失敗',
  },
  settings: {
    username: '用戶名稱',
    usernameRequired: '請輸你使用者名稱',
    language: '語言',
    usernameHint: '選擇你的用戶名稱',
    hideSpoilersHint: '隱藏劇透',
    hideIndexHint: '隱藏記錄中的索引',
    animeMode: '動漫模式',
    submit: '提交',
    update: '更新',
    colorTheme: '選擇主題',
    darkTheme: '黑暗主題',
    lightTheme: '光亮主題',
  },
  inGame: {
    sendTeam: '發送組隊',
    approve: '同意',
    reject: '拒絕',
    success: '成功',
    fail: '失敗',
    checkLoyalty: '檢查忠誠度',
    giveExcalibur: '給予神劍',
    skipExcalibur: '跳過神劍',
    useExcalibur: '使用神劍',
    useWitchAbility: '隱藏任務',
    skipWitchAbility: '跳過',
  },
  assassinate: {
    lovers: '戀人',
    assassinate: '暗殺',
    shot: '{killerName} 暗殺 {killedName}',
    shotResultHit: '{killedName} 是 {roleName}',
    shotResultMiss: '{killedName} 不是 {roleName}',
  },
  rolesInfo: {
    roles: '角色',
    inGameRoles: '遊戲中的角色',
    visibleRoles: '你可見的角色',
    merlinInfo: '知道誰是壞人方,必須保持隱藏',
    merlinPureInfo: '知道誰是壞人方及角色,必須保持隱藏',
    percivalInfo: '看到兩位角色(梅林/莫甘娜),但不知道誰是真正的梅林',
    servantInfo: '亞瑟王的忠實僕人',
    troublemakerInfo: '不得不對他的忠誠度撒謊',
    guinevereInfo: '看到兩位角色(蘭斯洛特),但不知道誰是真正的蘭斯洛特',
    goodLancelotInfo: '好人方的蘭斯洛特,可以從角色轉為壞人方',
    evilLancelotInfo: '壞人方的蘭斯洛特,可以從角色轉為好人方',
    mordredInfo: '梅林不知道你是壞人方',
    morganaInfo: '扮演梅林,混淆派西維爾',
    oberonInfo: '其他壞人方不知道你是壞人方',
    minionInfo: '莫德雷德的爪牙',
    isoldeInfo: '戀人,知道誰是特里斯坦,必須保持隱藏',
    tristanInfo: '戀人,知道誰是伊索德,必須保持隱藏',
    evilInfo: '角色未知的壞人方玩家',
    goodInfo: '角色未知的好人方玩家',
    tricksterInfo: '對他的忠誠撒謊',
    lunaticInfo: '每個任務都必須失敗',
    bruteInfo: '可能只會失敗前三個任務',
    witchInfo: '可以隱藏一個任務的結果',
    revealerInfo: '在第二次任務失敗後揭露自己',
    clericInfo: '知道第一次任務領導者的效忠情況。必須保持隱藏',
    unknownInfo: '未知角色',
    mysteryWizardInfo: '兩個玩家之一是好人方的(梅林)還是壞人的(莫甘娜)',
    unknownLancelotInfo: '蘭斯洛特,誰的忠誠無人知曉',
  },
  hostMenu: {
    host: '房主',
    hostPanel: '房主面板',
    endRestartGameHint: '開始投票,決定遊戲結束或重新開始',
    endGame: '遊戲結束',
    restartGame: '重新開始遊戲',
    shuffle: '隨機換位',
    shuffleHint: '隨機調整大廳中玩家的位置',
  },
  history: {
    history: '記錄',
    live: '現況',
    vote: '投票',
    checkLoyalty: '湖驗',
    mission: '任務',
    assassinate: '暗殺',
    switchResult: '神劍',
    switchLancelots: '蘭斯洛特',
    hidden: '隱藏',
  },
  mission: {
    players: '玩家',
    fails: '失敗',
    indexMission: '{index} 任務',
    failsCount: '失敗 {count}',
    hidden: '由巫婆隱藏',
    team: '團隊：',
  },
  chat: {
    message: '訊息',
  },
  infoMessage: {
    loginToMessage: '登入發送訊息',
    disableSpoilers: '停用「隱藏劇透」選項才能查看內容',
    waitForAction: '遊戲更新了!我們正在等待您的行動',
    loginToJoin: '登入加入遊戲',
    linkCopied: '連結已複製到剪貼簿',
    loginToCreate: '登入創建遊戲',
    close: '關閉',
  },
  votes: {
    yes: '是',
    no: '否',
    endGame: '投票結束遊戲',
    endAndRestartGame: '投票結束遊戲並開始新的遊戲',
  },
  notFound: {
    error: '哎呀!抱歉,找不到頁面',
    switch: '切換路線',
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
    forcedVote: '強制投票',
    voteIndex: '{index} 投票',
    teamSelected: '團隊選擇者',
    team: '團隊',
    excaliburOwner: '(神劍)',
    approve: '同意:',
    reject: '拒絕:',
  },
  checkLoyalty: {
    checkInfo: '<b>{ladyOwner}</b> 檢查了 <b>{ladyTarget}</b> 的忠誠',
    declareInfo: '並宣稱他的忠誠為',
  },
  lancelotsHistory: {
    becameEvil: '變成了邪惡',
    becameGood: '變成了善良',
    lancelotSaveLoyalty: '保持忠誠',
    lancelotsLoyal: '保持忠誠',
    lancelotsSwap: '改變了忠誠',
    cards: '卡牌：',
  },
  switch: {
    skip: '決定不使用 神劍',
    switchInfo: '<b>{switcher}</b> 使用 神劍 將 <b>{target}</b> 的動作更改為',
  },
  ...pages['zh-TW'],
};
