import pages from '@/i18n/langs/pages';

export const pt = {
  menu: {
    menu: 'Menu',
    home: 'Início',
    profile: 'Perfil',
    wiki: 'Wiki',
    about: 'Sobre',
    stats: 'Estatísticas',
  },
  room: {
    errorNotFound: 'Este UUID está incorreto',
    backToLobby: 'Voltar ao lobby',
    restartGame: 'Reiniciar jogo',
  },
  mainPage: {
    header: 'Bem-vindo ao site do jogo de tabuleiro online "Avalon"!',
    createRoom: 'Criar sala',
    watch: 'Assistir',
    join: 'Entrar',
    gamesList: 'Lista de jogos',
    players: 'Jogadores',
    loading: 'Carregando...',
    online: 'Online: {count}',
  },
  alert: {
    titlediscord: 'Discord',
    contentdiscord:
      'Procurando outros jogadores para jogar \'Avalon\'? Junte-se à nossa comunidade <b><a href="https://discord.gg/DR9cEDDNdN" target="_blank">Discord</a></b>!',
  },
  game: {
    winner: 'Vencedor',
    evil: 'mal',
    good: 'bem',
    stage: 'estágio',
    voteStage: 'Estágio de votação',
    voting: 'votação',
    excalibur: 'excalibur',
    'team building': 'formação de equipe',
    mission: 'missão',
    initialization: 'inicialização',
    'lady of lake': 'dama do lago',
    'check loyalty': 'verificar lealdade',
    'witch loyalty': 'lealdade da bruxa',
    'announce loyalty': 'anunciar lealdade',
    'give card': 'dar carta',
    'lead to victory': 'liderar para a vitória',
    'restore honor': 'restaurar honra',
    'king returns': 'o rei retorna',
    ambush: 'emboscada',
    end: 'fim',
    lancelots: 'lancelots',
    witch: 'bruxa',
    assassinate: 'assassinar',
    hidden: 'oculto',
    historyMode: 'Modo história',
    gameIsEnded: 'O jogo terminou',
    rolesAndAddons: 'Papéis e complementos',
  },
  endReason: {
    manualy: 'O jogo foi finalizado manualmente',
    evilTeamMissions: 'O time do mal falhou em 3 missões',
    goodTeamMissions: 'O time do bem teve sucesso em 3 missões',
    missMerlin: 'O time do mal tentou matar Merlin, mas errou',
    missGuinevere: 'O time do mal tentou matar Guinevere, mas errou',
    missLovers: 'O time do mal tentou matar os Amantes, mas errou',
    missCleric: 'O time do mal tentou matar o Clérigo + 1, mas errou',
    killCleric: 'O time do mal matou o Clérigo + 1',
    killGuinevere: 'O time do mal matou Guinevere',
    killLovers: 'O time do mal matou os Amantes',
    killMerlin: 'O time do mal matou Merlin',
    rejectedVote: 'O time do mal sabotou a votação',
  },
  roles: {
    merlin: 'Merlin',
    merlinPure: 'Merlin Puro',
    guinevere: 'Guinevere',
    percival: 'Percival',
    tristan: 'Tristan',
    isolde: 'Isolde',
    troublemaker: 'Encrenqueiro',
    servant: 'Servo',
    goodLancelot: 'Lancelot Bom',
    evilLancelot: 'Lancelot Mau',
    lancelots: 'Lancelots',
    mordred: 'Mordred',
    trickster: 'Trapaceiro',
    morgana: 'Morgana',
    oberon: 'Oberon',
    lunatic: 'Lunático',
    brute: 'Bruto',
    minion: 'Lacaio',
    witch: 'Bruxa',
    cleric: 'Clérigo',
    revealer: 'Revelador',
    role: 'Papel',
  },
  breadCrumbs: {
    merlin: 'Merlin',
    merlin_pure: 'Merlin Puro',
    guinevere: 'Guinevere',
    percival: 'Percival',
    lovers: 'Amantes',
    troublemaker: 'Encrenqueiro',
    servant: 'Servo',
    lancelots: 'Lancelots',
    mordred: 'Mordred',
    trickster: 'Trapaceiro',
    revealer: 'Revelador',
    morgana: 'Morgana',
    oberon: 'Oberon',
    lunatic: 'Lunático',
    brute: 'Bruto',
    witch: 'Bruxa',
    minion: 'Lacaio',
    cleric: 'Clérigo',
    wiki: 'Wiki',
    expansions: 'Expansões',
    roles: 'Papéis',
    lady: 'Dama',
    lady_sea: 'Dama do Mar',
    plot_cards: 'Cartas de Enredo',
    excalibur: 'Excalibur',
    rules: 'Regras',
  },
  addons: {
    ladyOfLake: 'Dama do Lago',
    ladyOfSea: 'Dama do Mar',
    excalibur: 'Excalibur',
    plotCards: 'Cartas de Enredo',
  },
  ladyModule: {
    announceGood: 'Anunciar Bem',
    announceEvil: 'Anunciar Mal',
    announce: 'Anunciar',
  },
  options: {
    roles: 'Papéis',
    coreRoles: 'Principais',
    extraRoles: 'Adicionais',
    experimentalRoles: 'Experimentais',
    addons: 'Complementos',
    features: 'Recursos',
    ladyHint: 'A dama permite descobrir a lealdade de outro jogador',
    plotCardsHint: 'Adiciona cartas de enredo ao jogo',
    ladySeaHint: 'Uma versão da Dama do Lago, mas se você verificar um jogador das forças do mal, verá seu papel.',
    excaliburHint: 'Excalibur permite mudar a decisão de um dos participantes da missão',
    anonymousVoting: 'Votação anônima',
    anonymousVotingHint: 'Com votação anônima, você não sabe quem aprova a missão e quem a rejeita',
    hiddenHistory: 'Histórico oculto',
    hiddenHistoryHint: 'Com um histórico oculto, ações passadas no jogo ficam escondidas',
    displayIndex: 'Mostrar índice',
    displayIndexHint: 'Mostra o número de índice de cada jogador na mesa',
  },
  startPanel: {
    copyLink: 'Copiar link',
    discord: 'Discord',
    leaveGame: 'Sair do Jogo',
    joinGame: 'Entrar no Jogo',
    lockGame: 'Bloquear Jogo',
    unlockGame: 'Desbloquear jogo',
    startGame: 'Iniciar Jogo',
    options: 'Opções',
  },
  onlineStatus: {
    connecting: 'Conectando...',
    connected: 'Conectado',
    error: 'Erro',
  },
  errors: {
    wrongPassword: 'Senha incorreta',
    emailNotExist: 'Usuário com este e-mail não encontrado',
    loginNotExist: 'Usuário com este login não encontrado',
    emailAlreadyExist: 'Um usuário com este e-mail já está registrado',
    loginAlreadyExist: 'Um usuário com este login já está registrado',
    avatarNotExist: 'Avatar não existe',
    avatarNotAvailable: 'Este avatar não está disponível para você',
  },
  avatars: {
    modalHeader: 'Selecionar avatar',
    servantHint: 'Avatar Padrão',
    lady_of_lakeHint: 'Concedido a usuários registrados em 2025',
    mysteryHint: 'Concedido a usuários que encontram o segredo no site',
    merlin_pureHint: 'Concedido por ajudar o projeto com feedback / ajuda na busca de bugs',
    'anime/merlin_pureHint': 'Concedido por fazer qualquer contribuição para o código do projeto no github',
    'anime/witchHint': 'Concedido por alcançar o top-1 de classificação em qualquer papel',
  },
  profile: {
    username: 'Nome de usuário',
    stats: 'Estatísticas',
    logout: 'Sair',
    language: 'Idioma',
    hideSpoilersHint: 'Ocultar spoilers',
    hideIndexHint: 'Ocultar Índices no Histórico',
    animeMode: 'Modo anime',
    change: 'Alterar',
    colorTheme: 'Tema de cor',
    darkTheme: 'Tema escuro',
    lightTheme: 'Tema claro',
    changePassword: 'Alterar senha',
    profile: 'Perfil',
    settings: 'Configurações',
  },
  validators: {
    requiredField: 'Campo obrigatório',
    minCharacters: 'Mínimo {count} caracteres',
    spacesForbidden: 'Espaços não são permitidos',
    loginSymbols: 'Permitido: a-z, 0-9, _ . -',
  },
  modal: {
    username: 'Nome de usuário',
    usernameHint: 'Selecione seu nome de usuário para o jogo',
    loginTab: 'Login',
    registrationTab: 'Registro',
    login: 'Login',
    loginButton: 'Entrar',
    registrationButton: 'Registrar',
    changeButton: 'Alterar',
    changeemail: 'Alterar e-mail',
    changepassword: 'Alterar senha',
    changelogin: 'Alterar login',
    newPassword: 'Nova senha',
    loginHint: 'Será usado para autorização',
    password: 'Senha',
    email: 'E-mail',
    newEmail: 'Novo e-mail',
  },
  inGame: {
    sendTeam: 'Enviar Equipe',
    approve: 'Aprovar',
    reject: 'Rejeitar',
    success: 'Sucesso',
    fail: 'Falha',
    checkLoyalty: 'Verificar Lealdade',
    giveExcalibur: 'Dar excalibur',
    skipExcalibur: 'Pular excalibur',
    useExcalibur: 'Usar excalibur',
    useWitchAbility: 'Ocultar missão',
    skipWitchAbility: 'Pular',
    giveCard: 'Dar carta',
    takeLead: 'Assumir liderança',
    skip: 'Pular',
    useCard: 'Usar {cardName}',
    skipCard: 'Pular {cardName}',
    selectPlayer: 'Selecione um jogador',
    selectSinglePlayer: 'Por favor, selecione apenas um jogador',
    cannotSelectSelf: 'Você não pode selecionar a si mesmo',
    takeCard: 'Pegar carta',
    selectCard: 'Selecione uma carta',
    noAvailableCards: 'Sem cartas disponíveis',
    revealLoyalty: 'Revelar Lealdade',
  },
  assassinate: {
    lovers: 'Amantes',
    assassinate: 'Assassinar',
    shot: '{killerName} assassina {killedName}',
    shotResultHit: '{killedName} é {roleName}',
    shotResultMiss: '{killedName} não é {roleName}',
  },
  giveCard: {
    toPlayer: '<b>{leaderName}</b> deu a carta «{cardName}» para <b>{cardOwner}</b>',
    toSelf: '<b>{leaderName}</b> recebeu a carta «{cardName}» para si mesmo',
  },
  restoreHonor: {
    transfer: '<b>{newOwnerName}</b> pegou a carta «{cardName}» de <b>{prevOwnerName}</b>',
  },
  ambush: {
    history: '<b>{ownerName}</b> usou a carta Emboscada em <b>{targetName}</b> e viu sua ação: {result}',
    resultHidden: 'oculto',
  },
  leadToVictory: {
    history: '<b>{cardOwner}</b> usou a carta «{cardName}» e assumiu a liderança de <b>{prevLeaderName}</b>',
  },
  kingReturns: {
    history: '<b>{cardOwner}</b> usou a carta «{cardName}» para cancelar a última votação e mudar a liderança',
  },
  weFoundYou: {
    history:
      '<b>{cardOwner}</b> usou a carta «{cardName}» em <b>{selectedPlayer}</b>, forçando-o a jogar sua carta de missão abertamente',
  },
  playCard: {
    history: '<b>{cardOwner}</b> jogou a carta «{cardName}»',
  },
  preVote: {
    title: 'Votação preliminar',
  },
  rolesInfo: {
    roles: 'Papéis',
    inGameRoles: 'Papéis no jogo',
    visibleRoles: 'Papéis visíveis para você',
    merlinInfo: 'Conhece o mal, deve permanecer oculto',
    merlinPureInfo: 'Conhece o mal e seus papéis, deve permanecer oculto',
    percivalInfo: 'Conhece dois magos (Merlin e Morgana), mas não sabe qual é qual',
    servantInfo: 'Servo Leal de Arthur',
    troublemakerInfo: 'Obrigado a mentir sobre sua lealdade',
    guinevereInfo: 'Conhece dois Lancelots mas não conhece sua lealdade',
    goodLancelotInfo: 'Lancelot bom, pode mudar para o mal durante o jogo',
    evilLancelotInfo: 'Lancelot mau, pode mudar para o bem durante o jogo',
    mordredInfo: 'Desconhecido para Merlin',
    morganaInfo: 'Aparece como Merlin para Percival',
    oberonInfo: 'Desconhecido para o Mal',
    minionInfo: 'Lacaio de Mordred',
    isoldeInfo: 'Amante. Conhece Tristan, deve permanecer oculto',
    tristanInfo: 'Amante. Conhece Isolde, deve permanecer oculto',
    evilInfo: 'Jogador do mal com papel desconhecido',
    goodInfo: 'Jogador do bem com papel desconhecido',
    tricksterInfo: 'Mentindo sobre sua lealdade',
    lunaticInfo: 'Deve falhar em todas as missões',
    bruteInfo: 'Pode falhar apenas nas três primeiras missões',
    witchInfo:
      'Pode ocultar o resultado de uma missão, mas isso dará uma verificação de lealdade a um jogador aleatório',
    revealerInfo: 'Revela-se após a segunda missão falha',
    clericInfo: 'Conhece a lealdade do líder da primeira missão. Deve permanecer oculto',
    unknownInfo: 'Papel desconhecido',
    mysteryWizardInfo: 'Um dos dois magos é bom (Merlin) ou mau (Morgana)',
    unknownLancelotInfo: 'Lancelot, cuja lealdade não é conhecida',
  },
  cardsInfo: {
    cards: 'Cartas',
    usedCards: 'Cartas usadas',
    remainingCards: 'Cartas restantes',
    leadToVictory: 'Liderar Para a Vitória',
    leadToVictoryHint: 'Torne-se líder antes da seleção da equipe',
    ambush: 'Emboscada',
    ambushHint: 'Revelar o resultado de uma carta de missão',
    kingReturns: 'O Rei Retorna',
    kingReturnsHint: 'Cancelar a última aprovação e mudar a liderança',
    restoreHonor: 'Restaurar Sua Honra',
    restoreHonorHint: 'Pegar uma carta de enredo de qualquer jogador',
    charge: 'Acusação',
    chargeHint: 'Forçar um jogador a votar publicamente',
    showNature: 'Mostrar Sua Verdadeira Natureza',
    showNatureHint: 'Revelar sua lealdade para outro jogador',
    areYouTheOne: 'Você É O Escolhido',
    areYouTheOneHint: 'Verificar a lealdade do jogador adjacente',
    weFoundYou: 'Nós Te Encontramos',
    weFoundYouHint: 'Forçar um jogador a jogar sua carta de missão virada para cima',
    showStrength: 'Mostrar Sua Força',
    showStrengthHint: 'O líder revela sua lealdade para um jogador',
  },
  hostMenu: {
    host: 'Anfitrião',
    hostPanel: 'Painel do anfitrião',
    endRestartGameHint: 'Os botões iniciarão a votação para o fim ou reinício do jogo',
    endGame: 'Encerrar jogo',
    restartGame: 'Reiniciar jogo',
    shuffle: 'Embaralhar',
    shuffleHint: 'Embaralhar posições dos jogadores no lobby',
  },
  history: {
    history: 'Histórico',
    live: 'Ao vivo',
    vote: 'Voto',
    checkLoyalty: 'Verificar',
    mission: 'Missão',
    assassinate: 'Assassinar',
    switchResult: 'Excalibur',
    switchLancelots: 'Lancelots',
    giveCard: 'Carta',
    preVote: 'Pré-Voto',
    leadToVictory: 'Liderar',
    restoreHonor: 'Honra',
    ambush: 'Emboscada',
    kingReturns: 'Rei',
    charge: 'Acusação',
    showNature: 'Natureza',
    areYouTheOne: 'Verificar',
    weFoundYou: 'Encontrado',
    showStrength: 'Força',
    hidden: 'Oculto',
  },
  mission: {
    players: 'Jogadores',
    fails: 'Falhas',
    indexMission: 'missão {index}',
    failsCount: 'falhas {count}',
    hidden: 'oculto pela Bruxa',
    team: 'Equipe:',
  },
  chat: {
    message: 'mensagem',
  },
  infoMessage: {
    loginToMessage: 'Faça login para enviar uma mensagem',
    disableSpoilers: 'Desative a opção "ocultar spoiler" para ver o conteúdo',
    waitForAction: 'O jogo foi atualizado! Estamos esperando sua ação',
    loginToJoin: 'Faça login para entrar no jogo',
    linkCopied: 'Link foi copiado para a área de transferência',
    loginToCreate: 'Faça login para criar um jogo',
    close: 'Fechar',
    secretAvatar: 'Avatar Secreto Revelado',
    loginChanged: 'Login alterado',
    emailChanged: 'E-mail alterado',
    passwordChanged: 'Senha alterada',
  },
  votes: {
    yes: 'Sim',
    no: 'Não',
    endGame: 'Votação para encerrar o jogo',
    endAndRestartGame: 'Votação para encerrar o jogo e iniciar um novo',
  },
  notFound: {
    error: 'Ops! Desculpe, página não encontrada.',
    switch: 'Mudar a rota',
  },
  previewLink: {
    'Minions of Mordred(*)': 'Lacaios de Mordred(*)',
    Minions: 'Lacaios',
  },
  spoiler: {
    spoiler: 'Spoiler',
    spoilerHint: 'O conteúdo está oculto sob o spoiler, pois contém informações desconhecidas para outros jogadores',
  },
  vote: {
    forcedVote: 'Voto forçado',
    voteIndex: 'voto {index}',
    teamSelected: 'equipe selecionada por',
    team: 'Equipe',
    excaliburOwner: '(Excalibur)',
    approve: 'Aprovar:',
    reject: 'Rejeitar:',
  },
  checkLoyalty: {
    checkInfo: '<b>{ladyOwner}</b> verificou a lealdade de <b>{ladyTarget}</b>',
  },
  revealLoyalty: {
    revealInfo: '<b>{revealer}</b> revelou sua lealdade para <b>{target}</b>',
  },
  announceLoyalty: {
    announceInfo: '<b>{announcer}</b> anunciou a lealdade de <b>{target}</b>',
    declareInfo: 'E declarou sua lealdade como',
    actualInfo: 'na verdade',
  },
  lancelotsHistory: {
    becameEvil: 'tornou-se mau',
    becameGood: 'tornou-se bom',
    lancelotSaveLoyalty: 'permaneceu leal',
    lancelotsLoyal: 'permaneceu leal',
    lancelotsSwap: 'mudou de lealdade',
    cards: 'Cartas:',
  },
  switch: {
    skip: 'decidiu não usar excalibur',
    switchInfo: '<b>{switcher}</b> usou excalibur para mudar a ação de <b>{target}</b> para',
  },
  chartStats: {
    countPlayer: '{playerCount} jogadores',
    evilWinrate: 'Taxa de vitória do mal',
    goodWinrate: 'Taxa de vitória do bem',
    winrateByTeamSize: 'Taxas de vitória por tamanho de equipe',
    halfWinrate: 'Taxa de vitória de 50%',
  },
  ...pages.pt,
};
