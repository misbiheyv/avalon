import pages from '@/i18n/langs/pages';

export const en = {
  menu: {
    menu: 'Menu',
    home: 'Home',
    profile: 'Profile',
    wiki: 'Wiki',
    about: 'About',
    stats: 'Statistics',
  },
  room: {
    errorNotFound: 'This is wrong uuid',
    backToLobby: 'Back to lobby',
    restartGame: 'Restart game',
  },
  mainPage: {
    header: 'Welcome to the "Avalon" online board game website!',
    createRoom: 'Create room',
    watch: 'Watch',
    join: 'Join',
    gamesList: 'Games list',
    players: 'Players',
    loading: 'Loading...',
    online: 'Online: {count}',
  },
  alert: {
    titlediscord: 'Discord',
    contentdiscord:
      'Looking for fellow players to delve into \'Avalon\'? Join our <b><a href="https://discord.gg/DR9cEDDNdN" target="_blank">Discord</a></b> community!',
  },
  game: {
    winner: 'Winner',
    evil: 'evil',
    good: 'good',
    stage: 'stage',
    voteStage: 'Vote stage',
    voting: 'voting',
    excalibur: 'excalibur',
    'team building': 'team building',
    mission: 'mission',
    initialization: 'initialization',
    'lady of lake': 'lady of lake',
    'check loyalty': 'check loyalty',
    'witch loyalty': 'witch loyalty',
    'announce loyalty': 'announce loyalty',
    'give card': 'give card',
    'lead to victory': 'lead to victory',
    'restore honor': 'restore honor',
    'king returns': 'king returns',
    'play card': 'play card',
    ambush: 'ambush',
    end: 'end',
    lancelots: 'lancelots',
    witch: 'witch',
    assassinate: 'assassinate',
    hidden: 'hidden',
    historyMode: 'History mode',
    gameIsEnded: 'Game is ended',
    rolesAndAddons: 'Roles and addons',
  },
  endReason: {
    manualy: 'The game is finished manually',
    evilTeamMissions: 'The evil team failed 3 missions',
    goodTeamMissions: 'The good team successes 3 missions',
    missMerlin: 'The evil team tried to kill Merlin but missed',
    missGuinevere: 'The evil team tried to kill Guinevere but missed',
    missLovers: 'The evil team tried to kill Lovers but missed',
    missCleric: 'The evil team tried to kill Cleric + 1 but missed',
    killCleric: 'The evil team to killed Cleric + 1',
    killGuinevere: 'The evil team killed Guinevere',
    killLovers: 'The evil team killed Lovers',
    killMerlin: 'The evil team killed Merlin',
    rejectedVote: 'The evil team sabotaged the voting',
  },
  roles: {
    merlin: 'Merlin',
    merlinPure: 'Merlin Pure',
    guinevere: 'Guinevere',
    percival: 'Percival',
    tristan: 'Tristan',
    isolde: 'Isolde',
    troublemaker: 'Troublemaker',
    servant: 'Servant',
    goodLancelot: 'Good Lancelot',
    evilLancelot: 'Evil Lancelot',
    lancelots: 'Lancelots',
    mordred: 'Mordred',
    trickster: 'Trickster',
    morgana: 'Morgana',
    oberon: 'Oberon',
    lunatic: 'Lunatic',
    brute: 'Brute',
    minion: 'Minion',
    witch: 'Witch',
    cleric: 'Cleric',
    revealer: 'Revealer',
    role: 'Role',
  },
  breadCrumbs: {
    merlin: 'Merlin',
    merlin_pure: 'Merlin Pure',
    guinevere: 'Guinevere',
    percival: 'Percival',
    lovers: 'Lovers',
    troublemaker: 'Troublemaker',
    servant: 'Servant',
    lancelots: 'Lancelots',
    mordred: 'Mordred',
    trickster: 'Trickster',
    revealer: 'Revealer',
    morgana: 'Morgana',
    oberon: 'Oberon',
    lunatic: 'Lunatic',
    brute: 'Brute',
    witch: 'Witch',
    minion: 'Minion',
    cleric: 'Cleric',
    wiki: 'Wiki',
    expansions: 'Expansions',
    roles: 'Roles',
    lady: 'Lady',
    lady_sea: 'Lady Sea',
    plot_cards: 'Plot Cards',
    excalibur: 'Excalibur',
    rules: 'Rules',
  },
  addons: {
    ladyOfLake: 'Lady of the lake',
    ladyOfSea: 'Lady of the sea',
    excalibur: 'Excalibur',
    plotCards: 'Plot Cards',
  },
  ladyModule: {
    announceGood: 'Announce Good',
    announceEvil: 'Announce Evil',
    announce: 'Announce',
  },
  options: {
    roles: 'Roles',
    coreRoles: 'Core',
    extraRoles: 'Additional',
    experimentalRoles: 'Experimental',
    addons: 'Addons',
    features: 'Features',
    ladyHint: 'The lady allows you to find out the loyalty of another player',
    plotCardsHint: 'Adds plot cards to the game',
    ladySeaHint:
      'An analogue of the Lady of the lake, but if you check the player of the forces of evil, you will see his role.',
    excaliburHint: 'Excalibur allows you to change the decision of one of the participants of the mission',
    anonymousVoting: 'Anonymous voting',
    anonymousVotingHint: "With anonymous voting, you don't know who approves the mission and who rejects it",
    hiddenHistory: 'Hidden history',
    hiddenHistoryHint: 'With a hidden history, past actions in the game are hidden',
    displayIndex: 'Display index',
    displayIndexHint: 'Displays the index number of each player at the table',
  },
  startPanel: {
    copyLink: 'Copy link',
    discord: 'Discord',
    leaveGame: 'Leave Game',
    joinGame: 'Join Game',
    lockGame: 'Lock Game',
    unlockGame: 'Unlock game',
    startGame: 'Start Game',
    options: 'Options',
  },
  onlineStatus: {
    connecting: 'Connecting...',
    connected: 'Connected',
    error: 'Error',
  },
  errors: {
    wrongPassword: 'Wrong password',
    emailNotExist: 'User with this email not found',
    loginNotExist: 'User with this login not found',
    emailAlreadyExist: 'A user with this email is already registered',
    loginAlreadyExist: 'A user with this login is already registered',
    avatarNotExist: 'Avatar not exist',
    avatarNotAvailable: 'This avatar is not available for you',
  },
  avatars: {
    modalHeader: 'Select avatar',
    servantHint: 'Default Avatar',
    lady_of_lakeHint: 'Awarded to users registered in 2025',
    mysteryHint: 'Awarded to users who find the secret on the site',
    merlin_pureHint: 'Awarded for helping the project with feedback / help in finding bugs',
    'anime/merlin_pureHint': 'Awarded for making any contribution to the project code on github',
    'anime/witchHint': 'Awarded for achieving top-1 rating on any role',
  },
  profile: {
    username: 'Username',
    stats: 'Statistics',
    logout: 'Logout',
    language: 'Language',
    hideSpoilersHint: 'Hide spoilers',
    hideIndexHint: 'Hide Indexes In History',
    animeMode: 'Anime mode',
    change: 'Change',
    colorTheme: 'Color theme',
    darkTheme: 'Dark theme',
    lightTheme: 'Light theme',
    changePassword: 'Change password',
    profile: 'Profile',
    settings: 'Settings',
  },
  validators: {
    requiredField: 'Required field',
    minCharacters: 'Min {count} characters',
    spacesForbidden: 'Spaces are not allowed',
    loginSymbols: 'Allowed: a-z, 0-9, _ . -',
  },
  modal: {
    username: 'Username',
    usernameHint: 'Select your username for game',
    loginTab: 'Login',
    registrationTab: 'Registration',
    login: 'Login',
    loginButton: 'Sign in',
    registrationButton: 'Sign up',
    changeButton: 'Change',
    changeemail: 'Change email',
    changepassword: 'Change password',
    changelogin: 'Change login',
    newPassword: 'New password',
    loginHint: 'Will be used for authorization',
    password: 'Password',
    email: 'Email',
    newEmail: 'New email',
  },
  inGame: {
    sendTeam: 'Send Team',
    approve: 'Approve',
    reject: 'Reject',
    success: 'Success',
    fail: 'Fail',
    checkLoyalty: 'Check Loyalty',
    giveExcalibur: 'Give excalibur',
    skipExcalibur: 'Skip excalibur',
    useExcalibur: 'Use excalibur',
    useWitchAbility: 'Hide mission',
    skipWitchAbility: 'Skip',
    giveCard: 'Give card',
    takeLead: 'Take lead',
    skip: 'Skip',
    useCard: 'Use {cardName}',
    skipCard: 'Skip {cardName}',
    selectPlayer: 'Select a player',
    selectSinglePlayer: 'Please select only one player',
    cannotSelectSelf: 'You cannot select yourself',
    takeCard: 'Take card',
    selectCard: 'Select a card',
    noAvailableCards: 'No available cards',
    revealLoyalty: 'Reveal Loyalty',
  },
  assassinate: {
    lovers: 'Lovers',
    assassinate: 'Assassinate',
    shot: '{killerName} assassinate {killedName}',
    shotResultHit: '{killedName} is {roleName}',
    shotResultMiss: '{killedName} is not {roleName}',
  },
  giveCard: {
    toPlayer: '<b>{leaderName}</b> gave the card «{cardName}» to <b>{cardOwner}</b>',
    toSelf: '<b>{leaderName}</b> received the card «{cardName}» himself',
  },
  restoreHonor: {
    transfer: '<b>{newOwnerName}</b> took the card «{cardName}» from <b>{prevOwnerName}</b>',
  },
  ambush: {
    history: '<b>{ownerName}</b> used Ambush card on <b>{targetName}</b> and saw their action: {result}',
    resultHidden: 'hidden',
  },
  leadToVictory: {
    history: '<b>{cardOwner}</b> used the card «{cardName}» and took the lead from <b>{prevLeaderName}</b>',
  },
  kingReturns: {
    history: '<b>{cardOwner}</b> used the card «{cardName}» to cancel the last vote and change leadership',
  },
  playCard: {
    history: '<b>{cardOwner}</b> played the card «{cardName}»',
  },
  preVote: {
    title: 'Preliminary voting',
  },
  rolesInfo: {
    roles: 'Roles',
    inGameRoles: 'Roles in game',
    visibleRoles: 'Roles visible to you',
    merlinInfo: 'Knows evil, must remain hidden',
    merlinPureInfo: 'Knows evil and their roles, must remain hidden',
    percivalInfo: 'Knows two wizards (Merlin and Morgana), but does not know which of them is which',
    servantInfo: 'Loyal Servant of Arthur',
    troublemakerInfo: 'Obliged to lie about his loyalty',
    guinevereInfo: 'Knows two Lancelots but does not know their loyalty',
    goodLancelotInfo: 'Good lancelot, can switch role to evil in game',
    evilLancelotInfo: 'Evil lancelot, can switch role to good in game',
    mordredInfo: 'Unknown to Merlin',
    morganaInfo: 'Appears as Merlin for Percival',
    oberonInfo: 'Unknown to Evil',
    minionInfo: 'Minion of Mordred',
    isoldeInfo: 'Lover. Knows Tristan, must remain hidden',
    tristanInfo: 'Lover. Knows Isolde, must remain hidden',
    evilInfo: 'Evil player with an unknown role',
    goodInfo: 'Good player with an unknown role',
    tricksterInfo: 'Lying about his loyalty',
    lunaticInfo: 'Must fail on every mission',
    bruteInfo: 'May fail only first three missions',
    witchInfo: 'Can hide the result of one mission, but this will give a loyalty check to a random player',
    revealerInfo: 'Reveal herself after second failed mission',
    clericInfo: 'Knows loyalty of the leader of the first mission. Must remain hidden',
    unknownInfo: 'Unknown role',
    mysteryWizardInfo: 'One of the two wizards is good (Merlin) or evil (Morgana)',
    unknownLancelotInfo: 'Lancelot, whose loyalty is not known',
  },
  cardsInfo: {
    cards: 'Cards',
    usedCards: 'Used cards',
    remainingCards: 'Remaining cards',
    leadToVictory: 'Lead To Victory',
    leadToVictoryHint: 'Become leader before team selection',
    ambush: 'Ambush',
    ambushHint: 'Reveal one mission card outcome',
    kingReturns: 'The King Returns',
    kingReturnsHint: 'Cancel last approval and change leadership',
    restoreHonor: 'Restore Your Honor',
    restoreHonorHint: 'Take a plot card from any player',
    charge: 'Charge',
    chargeHint: 'Force player to vote publicly',
    showNature: 'Show Your True Nature',
    showNatureHint: 'Reveal your loyalty to another player',
    areYouTheOne: 'Are You the One',
    areYouTheOneHint: 'Check loyalty of adjacent player',
    weFoundYou: 'We Found You',
    weFoundYouHint: 'Force one player to play their mission card face up',
    showStrength: 'Show Your Strength',
    showStrengthHint: 'Leader reveals their loyalty to a player',
  },
  hostMenu: {
    host: 'Host',
    hostPanel: 'Host panel',
    endRestartGameHint: 'The buttons will start voting for the end or restart of the game',
    endGame: 'End game',
    restartGame: 'Restart game',
    shuffle: 'Shuffle',
    shuffleHint: 'Shuffle players positions in lobby',
  },
  history: {
    history: 'History',
    live: 'Live',
    vote: 'Vote',
    checkLoyalty: 'Check',
    mission: 'Mission',
    assassinate: 'Assassinate',
    switchResult: 'Excalibur',
    switchLancelots: 'Lancelots',
    giveCard: 'Card',
    preVote: 'PreVote',
    leadToVictory: 'Lead',
    restoreHonor: 'Honor',
    ambush: 'Ambush',
    kingReturns: 'King',
    playCard: 'Play',
    charge: 'Charge',
    showNature: 'Nature',
    areYouTheOne: 'Check',
    weFoundYou: 'Found',
    showStrength: 'Strength',
    hidden: 'Hidden',
  },
  mission: {
    players: 'Players',
    fails: 'Fails',
    indexMission: '{index} mission',
    failsCount: 'fails {count}',
    hidden: 'hidden by Witch',
    team: 'Team:',
  },
  chat: {
    message: 'message',
  },
  infoMessage: {
    loginToMessage: 'Log in to send a message',
    disableSpoilers: 'Disable the "hide spoiler" option to see the content',
    waitForAction: 'The game updated! We are waiting for your action',
    loginToJoin: 'Log in to join game',
    linkCopied: 'Link has been copied to the clipboard',
    loginToCreate: 'Log in to create a game',
    close: 'Close',
    secretAvatar: 'Secret Avatar Revealed',
    loginChanged: 'Login changed',
    emailChanged: 'Email changed',
    passwordChanged: 'Password changed',
  },
  votes: {
    yes: 'Yes',
    no: 'No',
    endGame: 'Voting to end the game',
    endAndRestartGame: 'Voting to end the game and start a new one',
  },
  notFound: {
    error: 'Oops! Sorry, page not found.',
    switch: 'Switch the route',
  },
  previewLink: {
    'Minions of Mordred(*)': 'Minions of Mordred(*)',
    Minions: 'Minions',
  },
  spoiler: {
    spoiler: 'Spoiler',
    spoilerHint: 'The content is hidden under the spoiler, as it contains information unknown to other players',
  },
  vote: {
    forcedVote: 'Forced vote',
    voteIndex: '{index} vote',
    teamSelected: 'team selected by',
    team: 'Team',
    excaliburOwner: '(Excalibur)',
    approve: 'Approve:',
    reject: 'Reject:',
  },
  checkLoyalty: {
    checkInfo: '<b>{ladyOwner}</b> checked <b>{ladyTarget}</b> loyalty',
  },
  revealLoyalty: {
    revealInfo: '<b>{revealer}</b> revealed their loyalty to <b>{target}</b>',
  },
  announceLoyalty: {
    announceInfo: '<b>{announcer}</b> announced <b>{target}</b> loyalty',
    declareInfo: 'And declared their loyalty as',
    actualInfo: 'actually',
  },
  lancelotsHistory: {
    becameEvil: 'became evil',
    becameGood: 'became good',
    lancelotSaveLoyalty: 'remain loyal',
    lancelotsLoyal: 'remained loyalty',
    lancelotsSwap: 'have changed loyalty',
    cards: 'Cards:',
  },
  switch: {
    skip: 'decided not to use excalibur',
    switchInfo: '<b>{switcher}</b> use excalibur to switch <b>{target}</b> action to',
  },
  chartStats: {
    countPlayer: '{playerCount} players',
    evilWinrate: 'Evil winrate',
    goodWinrate: 'Good winrate',
    winrateByTeamSize: 'Winrates by team size',
    halfWinrate: '50% winrate',
  },
  ...pages.en,
};
