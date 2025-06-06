import type { TLanguage } from '@/i18n/interface';
import { Dictionary } from '@avalon/types';

export const rules: { [key in TLanguage]: Dictionary<string> } = {
  pt: {
    numberOfPlayers: 'Número de Jogadores',
    missionNumber: 'Missão {number}',
    countPlayers: '{count} Jogadores',
    servantTeam: 'Servos Leais de Arthur:',
    mordredTeam: 'Servos de Mordred:',
    expansions: 'Expansões:',
    note: 'Nota: ',
    title: 'Avalon: The Resistance - Regras oficiais',
    gameObjective: 'Objetivo do Jogo',
    gameDescription:
      'Avalon: The Resistance é um jogo de tabuleiro estratégico onde os jogadores são encarregados de completar uma série de missões enquanto lidam com traidores ocultos conhecidos como Servos de Mordred. O jogo é ambientado no mundo lendário do Rei Arthur e os Cavaleiros da Távola Redonda.',
    gameplayRules: 'Regras de Jogo',
    teamProposalAndVoting: 'Proposta de Equipe e Votação',
    teamProposalDescription:
      'O jogador com o token de Líder propõe uma equipe de jogadores para a missão. O número de jogadores necessários para a equipe depende da missão atual e do número total de jogadores no jogo.',
    votingDescription:
      'Todos os jogadores, incluindo o Líder, então votam na equipe proposta. Uma maioria simples é necessária para que a proposta seja aceita. Se a proposta for rejeitada, o token de Líder passa para o próximo jogador e uma nova proposta começa. Se quatro propostas forem rejeitadas em sequência, o quinto Líder tem o poder de escolher a equipe da missão sem votação.',
    progressionOfPlayTitle: 'Progressão do Jogo',
    leaderTokenMove:
      'Após o resultado da missão ter sido determinado, o token de Líder move-se para o próximo jogador no sentido horário.',
    newRound:
      'Uma nova rodada começa com uma nova proposta de equipe, e o mesmo processo se repete para um total de cinco missões.',
    playersUseSkills:
      'Os jogadores devem usar seus poderes de persuasão, dedução e blefe para influenciar a seleção da equipe, a votação e a discussão para promover a agenda do seu lado.',
    missionPhaseTitle: 'Fase da Missão',
    teamApproved:
      'Uma vez que uma equipe tenha sido aprovada, os membros da equipe escolhem secretamente uma carta de Sucesso { goodLoyaltyIcon } ou Falha { evilLoyaltyIcon } para determinar o resultado da missão.',
    submitCardsToLeader:
      'Todos os jogadores submetem suas cartas escolhidas ao Líder, que as embaralha para ocultar qual jogador submeteu qual carta.',
    cardsRevealed:
      'As cartas são então reveladas. Para uma missão ter sucesso, todas as cartas devem ser cartas de Sucesso { goodLoyaltyIcon }. Se uma ou mais cartas de Falha { evilLoyaltyIcon } forem reveladas, a missão falha. Certas missões podem exigir duas cartas de Falha para falhar, dependendo do número de jogadores no jogo.',
    conclusionOfGameplayTitle: 'Conclusão do Jogo',
    gameplayEndsCondition:
      'O jogo continua por cinco missões, terminando quando os Servos Leais de Arthur completam com sucesso três missões ou os Servos de Mordred fazem com que três missões falhem. No caso de os Servos Leais de Arthur terem sucesso, os Servos de Mordred têm uma última oportunidade de vencer identificando corretamente {merlin}; se o fizerem, os Servos de Mordred vencem.',
    strategicDiscussion:
      'Através de discussão estratégica, observação cuidadosa e táticas inteligentes, cada lado deve fazer o seu melhor para alcançar seus objetivos sem revelar suas verdadeiras lealdades, fazendo com que cada rodada de Avalon: The Resistance se desenrole de maneira única e cheia de suspense.',
    assassinNote:
      'Na versão original, há um papel distinto do <b>Assassino</b>. Sugerimos delegar esta função a qualquer um dos papéis do mal, ou alternativamente, tomar a decisão coletivamente entre os jogadores do mal.',
    objectiveArthur: 'Objetivo para os { goodLoyaltyIcon } Servos Leais de Arthur',
    objectiveMordred: 'Objetivo para os { evilLoyaltyIcon } Servos de Mordred',
    missionObjective:
      'Os Leais { servant } devem completar com sucesso três das cinco missões. Eles devem trabalhar juntos para propor equipes para cada missão e votar nas composições das equipes, sempre tentando manter os traidores fora das equipes para evitar que as missões falhem.',
    minionObjective:
      'Os { minion } visam semear discórdia e desconfiança entre os { servant }. Seu objetivo é fazer com que três missões falhem infiltrando-se nas equipes e sabotando missões. Eles devem se comunicar secretamente e elaborar estratégias para enganar os leais e lançar dúvidas sobre as verdadeiras lealdades de outros jogadores.',
    additionalObjectivesTitle: 'Objetivos Adicionais',
    additionalObjectivesDescription:
      'O jogo se intensifica com papéis especiais, como { merlin }, que conhece as identidades dos Servos de Mordred mas deve manter sua identidade em segredo para evitar o assassinato no final do jogo. Os Servos de Mordred podem vencer identificando corretamente e assassinando { merlin } depois que três missões tiverem sido bem-sucedidas.',
    twoFailsNote:
      'Em missões marcadas com um asterisco (*), duas cartas de Falha { evilLoyaltyIcon } são necessárias para que a missão falhe.',
    missionSizes: 'Tamanho da Equipe da Missão',
    excaliburHint:
      'Recomendamos adicionar {excalibur} a jogos para qualquer número de jogadores, mas apenas na companhia de jogadores experientes.',
    recommendTitle: 'Configuração de Papéis Recomendada',
    generalTipsTitle: 'Dicas Gerais',
    generalTipsText:
      'Para uma experiência de jogo enriquecedora, sugerimos um grupo de <strong>7 a 10 jogadores</strong>, onde as complexidades e a emoção do jogo realmente brilham.',
    newcomersAdvice:
      'Para iniciantes, é aconselhável começar sua jornada em Avalon com os <strong>papéis básicos</strong>. À medida que você se acostuma com o jogo, pode introduzir gradualmente papéis adicionais, aumentando a complexidade e o envolvimento <strong>passo a passo</strong>.',
    recommendationAfterFirstGames: 'Após os primeiros jogos, recomendamos adicionar papéis na seguinte ordem:',
    offlineSetup: 'Configuração do jogo offline:',
    defaultSetup:
      'A configuração padrão inclui personagens como { merlin }, { percival } e { morgana }. No entanto, você tem a flexibilidade de personalizar o jogo selecionando os papéis que melhor se adequam ao seu grupo.',
    closeEyesExtendHand: 'Todos fechem os olhos e estendam a mão em forma de punho à sua frente.',
    except: 'exceto',
    seeAllAgentsOfEvil: 'abra seus olhos e olhe ao redor para que você conheça todos os agentes do Mal.',
    extendYourThumb: 'estenda seu polegar para o ar',
    extendYourThumbSo: 'estenda seu polegar para o ar para que',
    willKnowOfYou: 'saiba de você',
    closeEyes: 'feche os olhos',
    guinevereLookAround: 'abra seus olhos e olhe ao redor para que você conheça ambos os lancelots',
    allPlayersShouldHaveEyedClosed:
      'Todos os jogadores devem estar com os olhos fechados e as mãos em punho à sua frente',
    putYourThumbDown: 'abaixe seu polegar e reforme sua mão em punho',
    merlinOpenEyes: 'abra seus olhos para ver os agentes do mal',
    gameSetupNote:
      'Para fins de configuração do jogo, o termo "{minion}" refere-se a todos os agentes do Mal, a menos que indicado de outra forma',
    ordinaryMinion: 'Comum (sem papéis adicionais)',
    everyoneOpenEyes: 'Todos abram os olhos',
    percivalOpenEyes: 'abra seus olhos e veja',
    loversOpenEyes: 'abram seus olhos e olhem ao redor para conhecerem um ao outro',
  },
  en: {
    numberOfPlayers: 'Number of Players',
    missionNumber: 'Mission {number}',
    countPlayers: '{count} Players',
    servantTeam: 'Loyal Servants of Arthur:',
    mordredTeam: 'Minions of Mordred:',
    expansions: 'Expansions:',
    note: 'Note: ',
    title: 'Avalon: The Resistance - Official rules',
    gameObjective: 'Game Objective',
    gameDescription:
      'Avalon: The Resistance is a strategic board game where players are tasked with completing a series of missions while dealing with hidden traitors known as Minions of Mordred. The game is set in the legendary world of King Arthur and the Knights of the Round Table.',
    gameplayRules: 'Gameplay Rules',
    teamProposalAndVoting: 'Team Proposal and Voting',
    teamProposalDescription:
      'The player with the Leader token proposes a team of players for the mission. The number of players required for the team depends on the current mission and the total number of players in the game.',
    votingDescription:
      'All players, including the Leader, then vote on the proposed team. A simple majority is required for the proposal to be accepted. If the proposal is rejected, the Leader token passes to the next player and a new proposal begins. If four proposals are rejected in a row, the fifth Leader has the power to choose the quest team without a vote.',
    progressionOfPlayTitle: 'Progression of Play',
    leaderTokenMove:
      'After the outcome of the mission has been determined, the Leader token moves to the next player in clockwise order.',
    newRound: 'A new round begins with a new team proposal, and the same process repeats for a total of five missions.',
    playersUseSkills:
      "Players must use their powers of persuasion, deduction, and bluffing to influence team selection, the vote, and discussion to further their side's agenda.",
    missionPhaseTitle: 'Mission Phase',
    teamApproved:
      'Once a team has been approved, members of the team secretly choose a Success { goodLoyaltyIcon } or Fail { evilLoyaltyIcon } card to determine the outcome of the mission.',
    submitCardsToLeader:
      'All players submit their chosen cards to the Leader, who shuffles them to conceal which player submitted which card.',
    cardsRevealed:
      'The cards are then revealed. For a mission to succeed, all the cards must be Success { goodLoyaltyIcon } cards. If one or more Fail { evilLoyaltyIcon } cards are revealed, the mission fails. Certain missions may require two Fail cards to fail, depending on the number of players in the game.',
    conclusionOfGameplayTitle: 'Conclusion of Gameplay',
    gameplayEndsCondition:
      'The gameplay continues through five missions, with the game ending once either the Loyal Servants of Arthur successfully complete three missions or the Minions of Mordred cause three missions to fail. In the case that the Loyal Servants of Arthur succeed, the Minions of Mordred have one final opportunity to win by correctly identifying {merlin}, if they do so the Minions win.',
    strategicDiscussion:
      'Through strategic discussion, careful observation, and clever tactics, each side must do their best to achieve their objectives without revealing their true allegiances, making each round of Avalon: The Resistance play out uniquely and full of suspense.',
    assassinNote:
      'In the original version, there is a distinct role of the <b>Assassin</b>. We suggest delegating this function to any of the evil roles, or alternatively, making the decision collectively among the evil players.',
    objectiveArthur: 'Objective for the { goodLoyaltyIcon } Loyal Servants of Arthur',
    objectiveMordred: 'Objective for the { evilLoyaltyIcon } Minions of Mordred',
    missionObjective:
      'The Loyal { servant } must successfully complete three out of five missions. They must work together to propose teams for each mission and vote on team compositions, always trying to keep traitors off the teams to prevent missions from failing.',
    minionObjective:
      'The { minion } aim to sow discord and mistrust among the { servant }. Their goal is to cause three missions to fail by infiltrating teams and sabotaging missions. They must communicate covertly and strategize to mislead the loyalists and cast doubt on the true allegiances of other players.',
    additionalObjectivesTitle: 'Additional Objectives',
    additionalObjectivesDescription:
      'The game intensifies with special roles, such as { merlin }, who knows the identities of the Minions but must keep his identity secret to avoid assassination at the end of the game. The Minions of Mordred can win by correctly identifying and assassinating { merlin } after three missions have succeeded.',
    twoFailsNote:
      'On missions marked with an asterisk (*), two Fail { evilLoyaltyIcon } cards are required for the mission to fail.',
    missionSizes: 'Mission Team Size',
    excaliburHint:
      'We recommend adding {excalibur} to games for any number of players, but only in the company of experienced players.',
    recommendTitle: 'Recommended Roles Setup',
    generalTipsTitle: 'General tips',
    generalTipsText:
      'For an enriching gaming experience, we suggest a group size of <strong>7 to 10 players</strong> where the intricacies and excitement of the game truly shine.',
    newcomersAdvice:
      "For newcomers, it's advisable to begin your Avalon journey with the <strong>basic roles</strong>. As you become more accustomed to the gameplay, you can incrementally introduce additional roles, enhancing complexity and engagement <strong>step by step</strong>.",
    recommendationAfterFirstGames: 'After the first games, we recommend adding roles in the following order:',
    offlineSetup: 'Game setup in offline:',
    defaultSetup:
      'The default setup includes characters such as { merlin }, { percival }, and { morgana }. However, you have the flexibility to customize the game by selecting the roles that best fit your group.',
    closeEyesExtendHand: 'Everyone close your eyes and extend your hand info a fist in front of you.',
    except: 'except',
    seeAllAgentsOfEvil: 'open your eyes and look around so that you know all agents of Evil.',
    extendYourThumb: 'extend your thumb into the air',
    extendYourThumbSo: 'extend your thumb into the air so',
    willKnowOfYou: 'will known of you',
    closeEyes: 'close your eyes',
    guinevereLookAround: 'open your eyes and look around so that you know both lancelots',
    allPlayersShouldHaveEyedClosed: 'All players have their eyes closed and hands in a fist in front of them',
    putYourThumbDown: 'put your thumb down and re-form your hand into a fist',
    merlinOpenEyes: 'open your eyes to see the agents of evil',
    gameSetupNote:
      'For the purposes of game setup, the term "{minion}" refers to all agents of Evil unless otherwise stated',
    ordinaryMinion: 'Ordinary (without additional roles)',
    everyoneOpenEyes: 'Everyone open your eyes',
    percivalOpenEyes: 'open your eyes and see',
    loversOpenEyes: 'open your eyes and look around to know each other',
  },
  ru: {
    numberOfPlayers: 'Количество игроков',
    missionNumber: 'Миссия {number}',
    countPlayers: '{count} игроков',
    servantTeam: 'Верные слуги Артура:',
    mordredTeam: 'Миньоны Мордреда:',
    expansions: 'Дополнения:',
    note: 'Примечание: ',
    title: 'Авалон: Сопротивление - Официальные правила',
    gameObjective: 'Цель игры',
    gameDescription:
      'Авалон: Сопротивление - это стратегическая настольная игра, в которой игроки должны выполнить серию миссий, сталкиваясь с скрытыми предателями, известными как Миньоны Мордреда. Игра разворачивается в легендарном мире короля Артура и рыцарей Круглого стола.',
    gameplayRules: 'Правила Игры',
    teamProposalAndVoting: 'Предложение Команды и Голосование',
    teamProposalDescription:
      'Игрок с жетоном лидера предлагает команду игроков для выполнения миссии. Количество игроков, необходимых для команды, зависит от текущей миссии и общего числа игроков в игре.',
    votingDescription:
      'Все игроки, включая лидера, голосуют за предложенную команду. Для принятия предложения требуется простое большинство. Если предложение отклонено, жетон лидера переходит к следующему игроку, и начинается новое предложение. Если четыре предложения подряд отклонены, пятый лидер может выбрать команду для миссии без голосования.',
    progressionOfPlayTitle: 'Ход игры',
    leaderTokenMove:
      'После определения результата миссии жетон лидера передается следующему игроку по часовой стрелке.',
    newRound:
      'Начинается новый раунд с новым предложением команды, и тот же процесс повторяется всего для пяти миссий.',
    playersUseSkills:
      'Игроки должны использовать свои навыки убеждения, дедукции и блефа, чтобы повлиять на выбор команды, голосование и обсуждение в пользу своей стороны.',
    missionPhaseTitle: 'Фаза миссии',
    teamApproved:
      'После утверждения команды её участники тайно выбирают карту Успеха { goodLoyaltyIcon } или карту Провала { evilLoyaltyIcon }, чтобы определить результат миссии.',
    submitCardsToLeader:
      'Все игроки передают выбранные карты Лидеру, который тасует их, чтобы скрыть, кто какую карту сдал.',
    cardsRevealed:
      'Затем карты раскрываются. Для успешного выполнения миссии все карты должны быть картами Успеха { goodLoyaltyIcon }. Если раскрыта одна или более карт Провала { evilLoyaltyIcon }, миссия проваливается. В некоторых миссиях может потребоваться две карты Провала для провала, в зависимости от количества игроков.',
    conclusionOfGameplayTitle: 'Завершение игры',
    gameplayEndsCondition:
      'Игра продолжается пять миссий, и заканчивается, как только либо слуги Артура успешно завершают три миссии, либо Приспешники Мордреда проваливают три миссии. В случае, если слуги Артура преуспевают, Приспешники Мордреда имеют последнюю возможность победить, правильно идентифицировав {merlin}, если они это делают, побеждают Приспешники.',
    strategicDiscussion:
      'Посредством стратегических обсуждений, внимательных наблюдений и хитроумных тактик каждая сторона должна делать всё возможное, чтобы достичь своих целей, не раскрывая свою истинную принадлежность, делая каждый раунд игры Avalon: The Resistance уникальным и полным напряжения.',
    assassinNote:
      'В оригинальной версии существует отдельная роль <b>Убийцы</b>. Мы предлагаем отдать эту возможность любому из злых персонажей или принимать решение коллективно всей команды Мордреда.',
    objectiveArthur: 'Цель для {goodLoyaltyIcon} Cлуг Артура',
    objectiveMordred: 'Цель для {evilLoyaltyIcon} Миньонов Мордреда',
    missionObjective:
      'Верные { servant } должны успешно завершить три из пяти миссий. Они должны работать вместе, чтобы предлагать команды для каждой миссии и голосовать за их состав, всегда стараясь исключить предателей из команд, чтобы предотвратить провал миссий.',
    minionObjective:
      '{ minion } стремятся сеять раздор и недоверие среди { servant }. Их цель — провалить три миссии, внедряясь в команды и саботируя их. Они должны тайно общаться и разрабатывать стратегии, чтобы вводить в заблуждение слуг Артура и вызывать сомнения в истинных намерениях других игроков.',
    additionalObjectivesTitle: 'Дополнительные Задачи',
    additionalObjectivesDescription:
      'Игра усложняется с особыми ролями, такими как { merlin }, который знает личности Миньонов, но должен сохранить свою личность в тайне, чтобы избежать убийства в конце игры. Миньоны Мордреда могут победить, правильно идентифицировав и убив { merlin } если силы света успешно закончили три миссии.',
    twoFailsNote: 'Для провала миссии, отмеченной звездочкой (*), требуются две карты Провал { evilLoyaltyIcon }.',
    missionSizes: 'Размер команды на миссии',
    excaliburHint:
      'Мы рекомендуем добавлять {excalibur} в игры для любого количества игроков, но только в компании опытных игроков.',
    recommendTitle: 'Рекомендуемая Настройка Ролей',
    generalTipsTitle: 'Общие советы',
    generalTipsText:
      'Для насыщенного игрового опыта мы предлагаем размер группы от <strong>7 до 10 игроков</strong>, где сложные моменты и волнение от игры проявляются в полной мере.',
    newcomersAdvice:
      'Новичкам рекомендуется начинать свое путешествие в Avalon с <strong>основных ролей</strong>. По мере того, как вы привыкаете к процессу игры, вы можете постепенно вводить дополнительные роли, повышая сложность и вовлеченность <strong>шаг за шагом</strong>.',
    recommendationAfterFirstGames: 'После первых игр мы рекомендуем добавлять роли в следующем порядке:',
    offlineSetup: 'Настройка игры в оффлайне:',
    defaultSetup:
      'Настройка по умолчанию включает персонажей, таких как { merlin }, { percival } и { morgana }. Однако у вас есть возможность настроить игру, выбрав роли, которые наилучшим образом подходят вашей группе.',
    closeEyesExtendHand: 'Все закройте глаза и протяните руку с кулаком перед собой.',
    except: 'кроме',
    seeAllAgentsOfEvil: 'откройте глаза и оглянитесь, чтобы узнать всех агентов Зла.',
    extendYourThumb: 'поднимите большой палец вверх',
    extendYourThumbSo: 'поднимите большой палец вверх чтобы',
    willKnowOfYou: 'узнал о вас',
    closeEyes: 'закройте глаза',
    guinevereLookAround: 'откройте глаза и оглянитесь, чтобы узнать обоих ланселотов.',
    allPlayersShouldHaveEyedClosed: 'Все игроки закрыли глаза и держат кулаки перед собой',
    putYourThumbDown: 'опустите большой палец и снова сожмите руку в кулак',
    merlinOpenEyes: 'откройте глаза, чтобы увидеть агентов зла',
    gameSetupNote: 'Для настройки игры, термин "{minion}" относится ко всем агентам Зла, если не указано иное',
    ordinaryMinion: 'Обычный (без дополнительных ролей)',
    everyoneOpenEyes: 'Все откройте глаза',
    percivalOpenEyes: 'откройте глаза и узнайте кто является',
    loversOpenEyes: 'откройте глаза и оглянитесь, чтобы узнать друг друга',
  },
  'zh-CN': {
    numberOfPlayers: '玩家人数',
    missionNumber: '任务 {number}',
    countPlayers: '{count} 玩家',
    servantTeam: '忠诚的亚瑟随从:',
    mordredTeam: '莫德雷德的爪牙:',
    expansions: '扩展:',
    note: '注意: ',
    title: '阿瓦隆: 抵抗 - 官方规则',
    gameObjective: '游戏目标',
    gameDescription:
      '阿瓦隆: 抵抗 是一款战略桌游，玩家需要在与隐藏的叛徒——莫德雷德的爪牙作斗争的同时完成一系列的任务。游戏设定在亚瑟王和圆桌骑士的传奇世界中。',
    gameplayRules: '游戏规则',
    teamProposalAndVoting: '团队提案和投票',
    teamProposalDescription:
      '拥有领袖标记的玩家提议一个玩家团队来执行任务。团队所需的玩家数量取决于当前任务和游戏中的玩家总数。',
    votingDescription:
      '所有玩家，包括领袖，然后对提议的团队进行投票。提案获得多数票即可被接受。如果提案被拒绝，领导标记传给下一个玩家并开始新提案。如果连续四个提案被拒绝，第五个领导者有权在无需投票的情况下选择任务团队。',
    progressionOfPlayTitle: '游戏进程',
    leaderTokenMove: '在确定任务结果后，领导者标记顺时针移动到下一位玩家。',
    newRound: '新一轮开始时，将提出新的队伍建议，相同的过程总共重复五次任务。',
    playersUseSkills: '玩家必须运用他们的说服力、推理能力和虚张声势来影响团队选择、投票和讨论，以推进他们一方的目标。',
    missionPhaseTitle: '任务阶段',
    teamApproved:
      '当一个团队被批准后，团队成员秘密选择成功 { goodLoyaltyIcon } 或失败 { evilLoyaltyIcon } 卡来确定任务的结果。',
    submitCardsToLeader: '所有玩家将他们选择的卡提交给领导者，领导者会洗牌以隐藏哪个玩家提交了哪个卡。',
    cardsRevealed:
      '然后揭示卡片。任务要成功，所有卡片必须是成功 { goodLoyaltyIcon } 卡。如果揭示出一张或者多张失败 { evilLoyaltyIcon } 卡，任务即失败。某些任务可能需要两张失败卡才能失败，具体取决于游戏中的玩家数量。',
    conclusionOfGameplayTitle: '游戏结束',
    gameplayEndsCondition:
      '游戏通过五个任务继续进行，当亚瑟的忠诚仆人成功完成三个任务或莫德雷德的爪牙让三个任务失败时游戏结束。如果亚瑟的忠诚仆人成功，莫德雷德的爪牙有最后一次机会通过正确识别{merlin}来获胜，如果他们这样做，爪牙获胜。',
    strategicDiscussion:
      '通过战略讨论、仔细观察和聪明的战术，每一方都必须尽力实现他们的目标，而不暴露他们的真实效忠，使每一轮《阿瓦隆：反抗组织》的游戏过程独特而充满悬念。',
    assassinNote:
      '在原版中，有一个单独的角色是<b>刺客</b>。我们建议将此功能委派给任何一个邪恶角色，或者由邪恶玩家共同决定。',
    objectiveArthur: '{goodLoyaltyIcon} 亚瑟忠诚仆人的目标',
    objectiveMordred: '{evilLoyaltyIcon} 莫德雷德爪牙的目标',
    missionObjective:
      '忠诚的{ servant }必须成功完成五个任务中的三个。他们必须共同合作，为每个任务提议小组，并对小组构成进行投票，始终努力将叛徒排除在团队之外，以防止任务失败。',
    minionObjective:
      '{ minion }旨在制造{ servant }之间的不和与不信任。他们的目标是通过潜入团队和破坏任务，使三个任务失败。他们必须秘密沟通并制定战略，误导忠诚者并对其他玩家的真正忠诚度产生怀疑。',
    additionalObjectivesTitle: '附加目标',
    additionalObjectivesDescription:
      '游戏因特殊角色而变得更加激烈，例如{ merlin }，他知道爪牙的身份，但必须保持自己的身份秘密，以避免在游戏结束时被暗杀。莫德雷德的爪牙可以通过正确识别并暗杀{ merlin }在三个任务成功后获得胜利。',
    twoFailsNote: '在标有星号 (*) 的任务中，需要两张失败 { evilLoyaltyIcon } 卡才能导致任务失败。',
    missionSizes: '任务小组人数',
    excaliburHint: '我们建议将{excalibur}加入任意玩家数量的游戏中，但仅限于有经验玩家的陪伴下使用。',
    recommendTitle: '推荐角色设置',
    generalTipsTitle: '一般提示',
    generalTipsText:
      '为了丰富的游戏体验，我们建议 <strong>7 到 10 名玩家</strong> 的小组规模，在这里游戏的复杂性和兴奋性真正展现。',
    newcomersAdvice:
      '对于新手，建议从 <strong>基本角色</strong> 开始您的 Avalon 之旅。随着您越来越习惯于游戏玩法，可以逐渐引入额外角色，逐步提高复杂性和参与度 <strong>一步一步</strong>。',
    recommendationAfterFirstGames: '在第一次游戏之后，我们建议按以下顺序添加角色：',
    offlineSetup: '离线游戏设置：',
    defaultSetup:
      '默认设置包括角色：{ merlin }、{ percival } 和 { morgana }。不过，您可以灵活定制游戏，选择最适合您团队的角色。',
    closeEyesExtendHand: '所有人闭上眼睛，并将手伸出形成拳头放在前面。',
    except: '除了',
    seeAllAgentsOfEvil: '睁开眼睛，环顾四周，以便认识所有的邪恶代理。',
    extendYourThumb: '将你的拇指翘起',
    extendYourThumbSo: '将你的拇指翘起以便',
    willKnowOfYou: '会知道你',
    closeEyes: '闭上眼睛',
    guinevereLookAround: '睁开眼睛，环顾四周，以便认识两个兰斯洛特。',
    allPlayersShouldHaveEyedClosed: '所有玩家都应该闭上眼睛，手握成拳头放在前面',
    putYourThumbDown: '放下拇指，重新将手握成拳头',
    merlinOpenEyes: '睁开眼睛，看到邪恶代理',
    gameSetupNote: '为了游戏设置，{minion}一词指的是所有的邪恶代理，除非另有说明',
    ordinaryMinion: '普通（没有额外角色）',
    everyoneOpenEyes: '所有人睁开眼睛',
    percivalOpenEyes: '睁开眼睛和看',
    loversOpenEyes: '睁开眼睛，环顾四周以认识彼此',
  },
  'zh-TW': {
    numberOfPlayers: '玩家人數',
    missionNumber: '任務 {number}',
    countPlayers: '{count} 玩家',
    servantTeam: '忠誠的亞瑟隨從:',
    mordredTeam: '莫德雷德的爪牙:',
    expansions: '擴展:',
    note: '注意: ',
    title: '阿瓦隆: 抵抗 - 官方規則',
    gameObjective: '遊戲目標',
    gameDescription:
      '阿瓦隆: 抵抗 是一款戰略桌遊，玩家需要在與隱藏的叛徒——莫德雷德的爪牙作鬥爭的同時完成一系列的任務。遊戲設定在亞瑟王和圓桌騎士的傳奇世界中。',
    gameplayRules: '遊戲規則',
    teamProposalAndVoting: '團隊提案和投票',
    teamProposalDescription:
      '擁有領袖標記的玩家提議一個玩家團隊來執行任務。團隊所需的玩家數量取決於當前任務和遊戲中的玩家總數。',
    votingDescription:
      '所有玩家，包括領袖，然後對提議的團隊進行投票。提案獲得多數票即可被接受。如果提案被拒絕，領導標記傳給下一個玩家並開始新提案。如果連續四個提案被拒絕，第五個領導者有權在無需投票的情況下選擇任務團隊。',
    progressionOfPlayTitle: '遊戲進程',
    leaderTokenMove: '在確定任務結果後，領導者標記順時針移動到下一位玩家。',
    newRound: '新一輪開始時，將提出新的團隊建議，相同的過程總共重複五次任務。',
    playersUseSkills: '玩家必須運用他們的說服力、推理能力和虛張聲勢來影響團隊選擇、投票和討論，以推進他們一方的目標。',
    missionPhaseTitle: '任務階段',
    teamApproved:
      '當一個團隊被批准後，團隊成員秘密選擇成功 { goodLoyaltyIcon } 或失敗 { evilLoyaltyIcon } 卡來確定任務的結果。',
    submitCardsToLeader: '所有玩家將他們選擇的卡提交給領導者，領導者會洗牌以隱藏哪位玩家提交了哪張卡。',
    cardsRevealed:
      '然後揭示卡片。任務要成功，所有卡片必須是成功 { goodLoyaltyIcon } 卡。如果揭示出一張或者多張失敗 { evilLoyaltyIcon } 卡，任務即失敗。某些任務可能需要兩張失敗卡才能失敗，具體取決於遊戲中的玩家數量。',
    conclusionOfGameplayTitle: '遊戲結束',
    gameplayEndsCondition:
      '遊戲通過五個任務繼續進行，當亞瑟的忠誠僕人成功完成三個任務或莫德雷德的爪牙讓三個任務失敗時遊戲結束。如果亞瑟的忠誠僕人成功，莫德雷德的爪牙有最後一次機會通過正確識別{merlin}來獲勝，如果他們這樣做，爪牙獲勝。',
    strategicDiscussion:
      '通過戰略討論、仔細觀察和聰明的策略，每一方都必須盡力實現他們的目標，而不暴露他們的真實效忠，讓每一輪《阿瓦隆：反抗勢力》的遊戲過程獨特而充滿懸念。',
    assassinNote:
      '在原版中，有一個單獨的角色是<b>刺客</b>。我們建議將此功能委派給任何一個邪惡角色，或由邪惡玩家共同決定。',
    objectiveArthur: '{goodLoyaltyIcon} 亞瑟忠誠僕人的目標',
    objectiveMordred: '{evilLoyaltyIcon} 莫德雷德爪牙的目標',
    missionObjective:
      '忠誠的{ servant }必須成功完成五個任務中的三個。他們必須共同合作，為每個任務提出小組建議，並對小組組成進行投票，始終努力將叛徒排除在團隊之外，以防止任務失敗。',
    minionObjective:
      '{ minion }旨在製造{ servant }之間的不和與不信任。他們的目標是通過潛入團隊和破壞任務，使三個任務失敗。他們必須秘密溝通並制定戰略，誤導忠誠者並對其他玩家的真正忠誠度產生懷疑。',
    additionalObjectivesTitle: '附加目標',
    additionalObjectivesDescription:
      '遊戲因特殊角色而變得更加激烈，例如{ merlin }，他知道爪牙的身份，但必須保持自己的身份秘密，以避免在遊戲結束時被暗殺。莫德雷德的爪牙可以通過正確識別並暗殺{ merlin }在三個任務成功後獲得勝利。',
    twoFailsNote: '在標有星號 (*) 的任務中，需要兩張失敗 { evilLoyaltyIcon } 卡才能導致任務失敗。',
    missionSizes: '任務小組人數',
    excaliburHint: '我們建議將{excalibur}加入任意玩家數量的遊戲中，但僅限於有經驗玩家的陪伴下使用。',
    recommendTitle: '推薦角色設置',
    generalTipsTitle: '一般提示',
    generalTipsText:
      '為了豐富的遊戲體驗，我們建議 <strong>7 到 10 名玩家</strong> 的小組規模，在這裡遊戲的複雜性和興奮性真正展現。',
    newcomersAdvice:
      '對於新手，建議從 <strong>基本角色</strong> 開始您的 Avalon 之旅。隨著您越來越習慣於遊戲玩法，可以逐漸引入額外角色，逐步提高複雜性和參與度 <strong>一步一步</strong>。',
    recommendationAfterFirstGames: '在第一次遊戲之後，我們建議按以下順序添加角色：',
    offlineSetup: '離線遊戲設置：',
    defaultSetup:
      '默認設置包括角色：{ merlin }、{ percival } 和 { morgana }。不過，您可以靈活定制遊戲，選擇最適合您團隊的角色。',
    closeEyesExtendHand: '所有人閉上眼睛，並將手伸出形成拳頭放在前面。',
    except: '除了',
    seeAllAgentsOfEvil: '睜開眼睛，環顧四周，以便認識所有的邪惡代理。',
    extendYourThumb: '將你的拇指翹起',
    extendYourThumbSo: '將你的拇指翹起以便',
    willKnowOfYou: '會知道你',
    closeEyes: '閉上眼睛',
    guinevereLookAround: '睜開眼睛，環顧四周，以便認識兩個蘭斯洛特。',
    allPlayersShouldHaveEyedClosed: '所有玩家都應該閉上眼睛，手握成拳頭放在前面',
    putYourThumbDown: '放下拇指，重新將手握成拳頭',
    merlinOpenEyes: '睜開眼睛，看到邪惡代理',
    gameSetupNote: '為了遊戲設置，{minion}一詞指的是所有的邪惡代理，除非另有說明',
    ordinaryMinion: '普通（沒有額外角色）',
    everyoneOpenEyes: '所有人睜開眼睛',
    percivalOpenEyes: '睜開眼睛和看',
    loversOpenEyes: '睜開眼睛，環顧四周以認識彼此',
  },
  es: {
    numberOfPlayers: 'Número de Jugadores',
    missionNumber: 'Misión {number}',
    countPlayers: '{count} Jugadores',
    servantTeam: 'Leales Sirvientes de Arturo:',
    mordredTeam: 'Secuaces de Mordred:',
    expansions: 'Expansiones:',
    note: 'Nota: ',
    title: 'Avalon: La Resistencia - Reglas oficiales',
    gameObjective: 'Objetivo del Juego',
    gameDescription:
      'Avalon: La Resistencia es un juego de mesa estratégico donde los jugadores tienen la tarea de completar una serie de misiones mientras lidian con traidores ocultos conocidos como los Secuaces de Mordred. El juego está ambientado en el legendario mundo del Rey Arturo y los Caballeros de la Mesa Redonda.',
    gameplayRules: 'Reglas del Juego',
    teamProposalAndVoting: 'Propuesta de Equipo y Votación',
    teamProposalDescription:
      'El jugador con el token de Líder propone un equipo de jugadores para la misión. El número de jugadores requeridos para el equipo depende de la misión actual y del número total de jugadores en el juego.',
    votingDescription:
      'Todos los jugadores, incluido el Líder, votan por el equipo propuesto. Se requiere una mayoría simple para que la propuesta sea aceptada. Si la propuesta es rechazada, el token de Líder pasa al siguiente jugador y comienza una nueva proposición. Si se rechazan cuatro propuestas seguidas, el quinto Líder tiene el poder de elegir el equipo de la misión sin votación.',
    progressionOfPlayTitle: 'Progresión del Juego',
    leaderTokenMove:
      'Después de determinar el resultado de la misión, el token de Líder se mueve al siguiente jugador en orden de las agujas del reloj.',
    newRound:
      'Una nueva ronda comienza con una nueva propuesta de equipo, y el mismo proceso se repite para un total de cinco misiones.',
    playersUseSkills:
      'Los jugadores deben usar sus poderes de persuasión, deducción y engaño para influir en la selección del equipo, la votación y la discusión para promover la agenda de su lado.',
    missionPhaseTitle: 'Fase de Misión',
    teamApproved:
      'Una vez que se ha aprobado un equipo, los miembros del equipo eligen en secreto una carta de Éxito {goodLoyaltyIcon} o Fracaso {evilLoyaltyIcon} para determinar el resultado de la misión.',
    submitCardsToLeader:
      'Todos los jugadores entregan sus cartas elegidas al Líder, quien las mezcla para ocultar qué jugador entregó qué carta.',
    cardsRevealed:
      'Luego se revelan las cartas. Para que una misión tenga éxito, todas las cartas deben ser de Éxito {goodLoyaltyIcon}. Si se revela una o más cartas de Fracaso {evilLoyaltyIcon}, la misión fracasa. Ciertas misiones pueden requerir dos cartas de Fracaso para fallar, dependiendo del número de jugadores en el juego.',
    conclusionOfGameplayTitle: 'Conclusión del Juego',
    gameplayEndsCondition:
      'El juego continúa a través de cinco misiones, finalizando una vez que los Leales Sirvientes de Arturo completan con éxito tres misiones o los Secuaces de Mordred logran que tres misiones fracasen. En caso de que los Leales Sirvientes de Arturo tengan éxito, los Secuaces de Mordred tienen una última oportunidad de ganar identificando correctamente a {merlin}. Si lo logran, ganan los Secuaces.',
    strategicDiscussion:
      'A través de discusiones estratégicas, observaciones cuidadosas y tácticas inteligentes, cada bando debe hacer lo mejor para lograr sus objetivos sin revelar sus verdaderas lealtades, haciendo que cada ronda de Avalon: La Resistencia sea única y llena de suspense.',
    assassinNote:
      'En la versión original, hay un rol distintivo del <b>Asesino</b>. Recomendamos delegar esta función a cualquiera de los roles malvados, o alternativamente, tomar la decisión colectivamente entre los jugadores malvados.',
    objectiveArthur: 'Objetivo para los Leales Sirvientes de Arturo {goodLoyaltyIcon}',
    objectiveMordred: 'Objetivo para los Secuaces de Mordred {evilLoyaltyIcon}',
    missionObjective:
      'Los Leales {servant} deben completar con éxito tres de las cinco misiones. Deben trabajar juntos para proponer equipos para cada misión y votar sobre las composiciones de los equipos, siempre tratando de mantener a los traidores fuera de los equipos para evitar que las misiones fracasen.',
    minionObjective:
      'Los {minion} buscan sembrar discordia y desconfianza entre los {servant}. Su objetivo es hacer que tres misiones fracasen infiltrándose en los equipos y saboteando las misiones. Deben comunicarse de manera encubierta y planear estrategias para engañar a los lealistas y sembrar dudas sobre las verdaderas lealtades de otros jugadores.',
    additionalObjectivesTitle: 'Objetivos Adicionales',
    additionalObjectivesDescription:
      'El juego se intensifica con roles especiales, como {merlin}, quien conoce las identidades de los Secuaces pero debe mantener su identidad en secreto para evitar el asesinato al final del juego. Los Secuaces de Mordred pueden ganar identificando y asesinando correctamente a {merlin} después de que tres misiones hayan tenido éxito.',
    twoFailsNote:
      'En las misiones marcadas con un asterisco (*), se requieren dos cartas de Fracaso {evilLoyaltyIcon} para que la misión fracase.',
    missionSizes: 'Tamaño del Equipo de Misión',
    excaliburHint:
      'Recomendamos añadir {excalibur} a los juegos para cualquier número de jugadores, pero solo en compañía de jugadores experimentados.',
    recommendTitle: 'Configuración Recomendada de Roles',
    generalTipsTitle: 'Consejos Generales',
    generalTipsText:
      'Para una experiencia de juego enriquecedora, sugerimos un grupo de <strong>7 a 10 jugadores</strong>, donde las complejidades y la emoción del juego realmente brillan.',
    newcomersAdvice:
      'Para los recién llegados, es recomendable comenzar tu viaje en Avalon con los <strong>roles básicos</strong>. A medida que te acostumbres más al juego, puedes introducir gradualmente roles adicionales, aumentando la complejidad y el compromiso <strong>paso a paso</strong>.',
    recommendationAfterFirstGames: 'Después de los primeros juegos, recomendamos añadir roles en el siguiente orden:',
    offlineSetup: 'Configuración del juego sin conexión:',
    defaultSetup:
      'La configuración predeterminada incluye personajes como {merlin}, {percival} y {morgana}. Sin embargo, tienes la flexibilidad de personalizar el juego seleccionando los roles que mejor se adapten a tu grupo.',
    closeEyesExtendHand: 'Todos cierren sus ojos y extiendan su mano en forma de puño frente a ustedes.',
    except: 'excepto',
    seeAllAgentsOfEvil: 'abre tus ojos y mira alrededor para que conozcas a todos los agentes del Mal.',
    extendYourThumb: 'extiende tu pulgar hacia arriba',
    extendYourThumbSo: 'extiende tu pulgar hacia arriba de manera que',
    willKnowOfYou: 'te conocerán',
    closeEyes: 'cierren sus ojos',
    guinevereLookAround: 'abre tus ojos y mira alrededor para que conozcas a ambos lancelots',
    allPlayersShouldHaveEyedClosed:
      'Todos los jugadores tienen los ojos cerrados y las manos en un puño frente a ellos',
    putYourThumbDown: 'baja tu pulgar y vuelve a formar tu mano en un puño',
    merlinOpenEyes: 'abre tus ojos para ver a los agentes del mal',
    gameSetupNote:
      'Para los propósitos de la configuración del juego, el término "{minion}" se refiere a todos los agentes del Mal, a menos que se indique lo contrario',
    ordinaryMinion: 'Ordinario (sin roles adicionales)',
    everyoneOpenEyes: 'Todos abran sus ojos',
    percivalOpenEyes: 'abre tus ojos y ve',
    loversOpenEyes: 'abre tus ojos y mira alrededor para conocerse mutuamente',
  },
};
