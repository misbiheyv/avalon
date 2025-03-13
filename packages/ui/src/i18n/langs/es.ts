import pages from '@/i18n/langs/pages';

export const es = {
  menu: {
    menu: 'Menú',
    home: 'Inicio',
    profile: 'Perfil',
    wiki: 'Wiki',
    about: 'Acerca de',
    stats: 'Estadísticas',
  },
  room: {
    errorNotFound: 'Este UUID es incorrecto',
    backToLobby: 'Volver al lobby',
    restartGame: 'Reiniciar juego',
  },
  mainPage: {
    header: '¡Bienvenido al sitio web del juego de mesa online "Avalon"!',
    createRoom: 'Crear sala',
    watch: 'Ver',
    join: 'Unirse',
    gamesList: 'Lista de juegos',
    players: 'Jugadores',
    loading: 'Cargando...',
    online: 'En línea: {count}',
  },
  alert: {
    titlediscord: 'Discord',
    contentdiscord:
      '¿Buscas compañeros jugadores para adentrarte en "Avalon"? ¡Únete a nuestra comunidad de <b><a href="https://discord.gg/DR9cEDDNdN" target="_blank">Discord</a></b>!',
  },
  game: {
    winner: 'Ganador',
    evil: 'malvado',
    good: 'bueno',
    stage: 'etapa',
    voteStage: 'Etapa de votación',
    voting: 'votación',
    excalibur: 'excalibur',
    'team building': 'formación de equipo',
    mission: 'misión',
    initialization: 'inicialización',
    'lady of lake': 'dama del lago',
    'check loyalty': 'verificar lealtad',
    'witch loyalty': 'lealtad de la bruja',
    'announce loyalty': 'anunciar lealtad',
    end: 'fin',
    lancelots: 'lancelotes',
    witch: 'bruja',
    assassinate: 'asesinar',
    hidden: 'oculto',
    historyMode: 'Modo historia',
    gameIsEnded: 'El juego ha terminado',
    rolesAndAddons: 'Roles y expansiones',
  },
  endReason: {
    manualy: 'El juego se terminó manualmente',
    evilTeamMissions: 'El equipo malvado falló 3 misiones',
    goodTeamMissions: 'El equipo bueno completó 3 misiones con éxito',
    missMerlin: 'El equipo malvado intentó matar a Merlín pero falló',
    missGuinevere: 'El equipo malvado intentó matar a Ginebra pero falló',
    missLovers: 'El equipo malvado intentó matar a los Amantes pero falló',
    missCleric: 'El equipo maligno intentó matar al Clérigo + 1 pero falló',
    killCleric: 'El equipo maligno mató al Clérigo + 1',
    killGuinevere: 'El equipo malvado mató a Ginebra',
    killLovers: 'El equipo malvado mató a los Amantes',
    killMerlin: 'El equipo malvado mató a Merlín',
  },
  roles: {
    merlin: 'Merlín',
    merlinPure: 'Merlín Puro',
    guinevere: 'Ginebra',
    percival: 'Percival',
    tristan: 'Tristán',
    isolde: 'Isolda',
    troublemaker: 'Problematizador',
    servant: 'Servidor',
    goodLancelot: 'Lancelot Bueno',
    evilLancelot: 'Lancelot Malvado',
    lancelots: 'Lancelotes',
    mordred: 'Mordred',
    trickster: 'Tramposo',
    morgana: 'Morgana',
    oberon: 'Oberón',
    lunatic: 'Lunático',
    brute: 'Bruto',
    minion: 'Secuaz',
    witch: 'Bruja',
    cleric: 'Clérigo',
    revealer: 'Revelada',
    role: 'Rol',
  },
  breadCrumbs: {
    merlin: 'Merlín',
    merlin_pure: 'Merlín Puro',
    guinevere: 'Ginebra',
    percival: 'Percival',
    lovers: 'Amantes',
    troublemaker: 'Problematizador',
    servant: 'Servidor',
    lancelots: 'Lancelotes',
    mordred: 'Mordred',
    trickster: 'Tramposo',
    revealer: 'Revelada',
    morgana: 'Morgana',
    oberon: 'Oberón',
    lunatic: 'Lunático',
    brute: 'Bruto',
    witch: 'Bruja',
    minion: 'Secuaz',
    cleric: 'Clérigo',
    wiki: 'Wiki',
    expansions: 'Expansiones',
    roles: 'Roles',
    lady: 'Dama',
    lady_sea: 'Dama del Mar',
    excalibur: 'Excalibur',
    rules: 'Reglas',
  },
  addons: {
    ladyOfLake: 'Dama del Lago',
    ladyOfSea: 'Dama del Mar',
    excalibur: 'Excalibur',
  },
  ladyModule: {
    announceGood: 'Anunciar Bueno',
    announceEvil: 'Anunciar Malvado',
    announce: 'Anunciar',
  },
  options: {
    roles: 'Roles',
    coreRoles: 'Básicos',
    extraRoles: 'Adicionales',
    experimentalRoles: 'Experimentales',
    addons: 'Expansiones',
    features: 'Características',
    ladyHint: 'La dama te permite conocer la lealtad de otro jugador',
    ladySeaHint: 'Un análogo de la Dama del Lago, pero si revisas al jugador de las fuerzas del mal, verás su rol.',
    excaliburHint: 'Excalibur te permite cambiar la decisión de uno de los participantes de la misión',
    anonymousVoting: 'Votación anónima',
    anonymousVotingHint: 'Con la votación anónima, no sabes quién aprueba la misión y quién la rechaza',
    hiddenHistory: 'Historia oculta',
    hiddenHistoryHint: 'Con la historia oculta, las acciones pasadas en el juego están escondidas',
    displayIndex: 'Mostrar índice',
    displayIndexHint: 'Muestra el número de índice de cada jugador en la mesa',
  },
  startPanel: {
    copyLink: 'Copiar enlace',
    discord: 'Discord',
    leaveGame: 'Salir del juego',
    joinGame: 'Unirse al juego',
    lockGame: 'Bloquear juego',
    unlockGame: 'Desbloquear juego',
    startGame: 'Iniciar juego',
    options: 'Opciones',
  },
  onlineStatus: {
    connecting: 'Conectando...',
    connected: 'Conectado',
    error: 'Error',
  },
  errors: {
    wrongPassword: 'Contraseña incorrecta',
    emailNotExist: 'Usuario con este email no encontrado',
    loginNotExist: 'Usuario con este login no encontrado',
    emailAlreadyExist: 'Un usuario con este email ya está registrado',
    loginAlreadyExist: 'Un usuario con este login ya está registrado',
    avatarNotExist: 'El avatar no existe',
    avatarNotAvailable: 'Este avatar no está disponible para ti',
  },
  profile: {
    username: 'Nombre de usuario',
    stats: 'Estadísticas',
    logout: 'Cerrar sesión',
    language: 'Idioma',
    hideSpoilersHint: 'Ocultar spoilers',
    hideIndexHint: 'Ocultar índices en el historial',
    animeMode: 'Modo anime',
    update: 'Actualizar',
    colorTheme: 'Tema de color',
    darkTheme: 'Tema oscuro',
    lightTheme: 'Tema claro',
    profile: 'Perfil',
    settings: 'Configuración',
    updatePassword: 'Actualizar contraseña',
  },
  validators: {
    requiredField: 'Campo obligatorio',
    minCharacters: 'Mínimo {count} caracteres',
    spacesForbidden: 'No se permiten espacios',
  },
  modal: {
    username: 'Nombre de usuario',
    usernameHint: 'Elige tu nombre para el juego',
    loginTab: 'Iniciar sesión',
    registrationTab: 'Registro',
    loginButton: 'Ingresar',
    registrationButton: 'Registrarse',
    loginHint: 'Se usará para autorización',
    login: 'Usuario',
    password: 'Contraseña',
    email: 'Correo electrónico',
    updateButton: 'Actualizar',
    newPassword: 'Nueva contraseña',
    newEmail: 'Nuevo correo electrónico',
  },
  inGame: {
    sendTeam: 'Enviar equipo',
    approve: 'Aprobar',
    reject: 'Rechazar',
    success: 'Éxito',
    fail: 'Fallar',
    checkLoyalty: 'Verificar lealtad',
    giveExcalibur: 'Dar Excalibur',
    skipExcalibur: 'Omitir Excalibur',
    useExcalibur: 'Usar Excalibur',
    useWitchAbility: 'Ocultar misión',
    skipWitchAbility: 'Omitir',
  },
  assassinate: {
    lovers: 'Amantes',
    assassinate: 'Asesinato',
    shot: '{killerName} asesina a {killedName}',
    shotResultHit: '{killedName} es {roleName}',
    shotResultMiss: '{killedName} no es {roleName}',
  },
  rolesInfo: {
    roles: 'Roles',
    inGameRoles: 'Roles en el juego',
    visibleRoles: 'Roles visibles para ti',
    merlinInfo: 'Conoce a los malvados, debe permanecer oculto',
    merlinPureInfo: 'Conoce a los malvados y sus roles, debe permanecer oculto',
    percivalInfo: 'Conoce a dos magos (Merlín y Morgana), pero no sabe quién es quién',
    servantInfo: 'Sirviente leal de Arturo',
    troublemakerInfo: 'Obligado a mentir sobre su lealtad',
    guinevereInfo: 'Conoce a dos Lancelots pero no conoce su lealtad',
    goodLancelotInfo: 'Lancelot bueno, puede cambiar su rol a malvado en el juego',
    evilLancelotInfo: 'Lancelot malvado, puede cambiar su rol a bueno en el juego',
    mordredInfo: 'Desconocido para Merlín',
    morganaInfo: 'Aparece como Merlín para Percival',
    oberonInfo: 'Desconocido para los Malvados',
    minionInfo: 'Esbirro de Mordred',
    isoldeInfo: 'Amante. Conoce a Tristán, debe permanecer oculta',
    tristanInfo: 'Amante. Conoce a Isolda, debe permanecer oculto',
    evilInfo: 'Jugador malvado con un rol desconocido',
    goodInfo: 'Jugador bueno con un rol desconocido',
    tricksterInfo: 'Mintiendo sobre su lealtad',
    lunaticInfo: 'Debe fallar en todas las misiones',
    bruteInfo: 'Solo puede fallar en las tres primeras misiones',
    witchInfo:
      'Puede ocultar el resultado de una misión, pero esto dará una verificación de lealtad a un jugador aleatorio',
    revealerInfo: 'Revelarse después de la segunda misión fallida',
    clericInfo: 'Conoce la lealtad del líder de la primera misión. Debe permanecer oculto',
    unknownInfo: 'Rol desconocido',
    mysteryWizardInfo: 'Uno de los dos magos es bueno (Merlín) o malo (Morgana)',
    unknownLancelotInfo: 'Lancelot, cuya lealtad es desconocida',
  },
  hostMenu: {
    host: 'Anfitrión',
    hostPanel: 'Panel del anfitrión',
    endRestartGameHint: 'Los botones iniciarán la votación para finalizar o reiniciar el juego',
    endGame: 'Finalizar juego',
    restartGame: 'Reiniciar juego',
    shuffle: 'Mezclar',
    shuffleHint: 'Mezclar las posiciones de los jugadores en el vestíbulo',
  },
  history: {
    history: 'Historia',
    live: 'En vivo',
    vote: 'Voto',
    checkLoyalty: 'Verificación',
    mission: 'Misión',
    assassinate: 'Asesinato',
    switchResult: 'Excalibur',
    switchLancelots: 'Lancelotes',
    hidden: 'Oculto',
  },
  mission: {
    players: 'Jugadores',
    fails: 'Fallos',
    indexMission: '{index} misión',
    failsCount: 'fallos {count}',
    hidden: 'oculto por la Bruja',
    team: 'Equipo:',
  },
  chat: {
    message: 'mensaje',
  },
  infoMessage: {
    loginToMessage: 'Inicia sesión para enviar un mensaje',
    disableSpoilers: 'Desactiva la opción "ocultar spoiler" para ver el contenido',
    waitForAction: '¡El juego se ha actualizado! Estamos esperando tu acción',
    loginToJoin: 'Inicia sesión para unirte al juego',
    linkCopied: 'El enlace ha sido copiado al portapapeles',
    loginToCreate: 'Inicia sesión para crear un juego',
    close: 'Cerrar',
  },
  votes: {
    yes: 'Sí',
    no: 'No',
    endGame: 'Votación para finalizar el juego',
    endAndRestartGame: 'Votación para finalizar el juego e iniciar uno nuevo',
  },
  notFound: {
    error: '¡Ups! Lo sentimos, página no encontrada.',
    switch: 'Cambiar la ruta',
  },
  previewLink: {
    'Minions of Mordred(*)': 'Esbirros de Mordred(*)',
    Minions: 'Esbirros',
  },
  spoiler: {
    spoiler: 'Spoiler',
    spoilerHint:
      'El contenido está oculto bajo el spoiler, ya que contiene información desconocida para otros jugadores',
  },
  vote: {
    forcedVote: 'Voto forzado',
    voteIndex: '{index} voto',
    teamSelected: 'equipo seleccionado por',
    team: 'Equipo',
    excaliburOwner: '(Excalibur)',
    approve: 'Aprobar:',
    reject: 'Rechazar:',
  },
  checkLoyalty: {
    checkInfo: '<b>{ladyOwner}</b> verificó la lealtad de <b>{ladyTarget}</b>',
    declareInfo: 'Y declaró su lealtad como',
  },
  lancelotsHistory: {
    becameEvil: 'se volvió malvado',
    becameGood: 'se volvió bueno',
    lancelotSaveLoyalty: 'permanece leal',
    lancelotsLoyal: 'permanecieron leales',
    lancelotsSwap: 'han cambiado de lealtad',
    cards: 'Cartas:',
  },
  switch: {
    skip: 'decidió no usar excalibur',
    switchInfo: '<b>{switcher}</b> usó excalibur para cambiar la acción de <b>{target}</b> a',
  },
  chartStats: {
    countPlayer: '{playerCount} jugadores',
    evilWinrate: 'Tasa de victoria del Lado del Mal',
    goodWinrate: 'Tasa de victoria del Lado del Bien',
    winrateByTeamSize: 'Tasa de victorias por tamaño del equipo',
    halfWinrate: '50% tasa de victoria',
  },
  avatars: {
    modalHeader: 'Seleccionar avatar',
    servantHint: 'Avatar predeterminado',
    lady_of_lakeHint: 'Otorgado a los usuarios registrados en 2025',
    merlinHint: 'Otorgado por ayudar al proyecto con comentarios / ayudar a encontrar errores',
    'anime/merlinHint': 'Otorgado por hacer cualquier contribución al código del proyecto en GitHub',
  },
  ...pages.es,
};
