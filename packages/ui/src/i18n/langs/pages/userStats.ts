import type { TLanguage } from '@/i18n/interface';
import { Dictionary } from '@avalon/types';

export const userStats: { [key in TLanguage]: Dictionary<string> } = {
  en: {
    userStatsTitle: 'User statistics:',
    lastGamesStatsTitle: 'Last games',
    game: 'Game',
    side: 'Side',
    sideevil: 'Evil team',
    sidegood: 'Good team',
    winResult: 'Win',
    loseResult: 'Lose',
    result: 'Result',
    sidetotal: 'All',
    gamesCount: 'Games count',
    wins: 'Wins',
    role: 'Role',
  },
  ru: {
    userStatsTitle: 'Статистика пользователя:',
    lastGamesStatsTitle: 'Последние игры',
    game: 'Игра',
    result: 'Результат',
    side: 'Сторона',
    sideevil: 'Команда зла',
    sidegood: 'Команда добра',
    sidetotal: 'Всего',
    gamesCount: 'Количество игр',
    wins: 'Победы',
    role: 'Роль',
    winResult: 'Победа',
    loseResult: 'Поражение',
  },
  es: {
    userStatsTitle: 'Estadísticas del usuario:',
    lastGamesStatsTitle: 'Últimos juegos',
    game: 'Juego',
    side: 'Equipo',
    sideevil: 'Equipo del mal',
    sidegood: 'Equipo del bien',
    sidetotal: 'Total',
    gamesCount: 'Partidas jugadas',
    wins: 'Victorias',
    role: 'Rol',
    result: 'Resultado',
    winResult: 'Victoria',
    loseResult: 'Derrota',
  },
  'zh-TW': {
    userStatsTitle: '用戶統計：',
    lastGamesStatsTitle: '最近遊戲',
    game: '遊戲',
    side: '陣營',
    sideevil: '邪惡陣營',
    sidegood: '正義陣營',
    sidetotal: '總計',
    gamesCount: '遊戲場數',
    wins: '勝利次數',
    role: '角色',
    result: '结果',
    winResult: '胜利',
    loseResult: '失败',
  },
  'zh-CN': {
    userStatsTitle: '用户统计：',
    lastGamesStatsTitle: '最近游戏',
    game: '游戏',
    side: '阵营',
    sideevil: '邪恶阵营',
    sidegood: '正义阵营',
    sidetotal: '总计',
    gamesCount: '游戏场数',
    wins: '胜利次数',
    role: '角色',
    winResult: '胜利',
    loseResult: '失败',
  },
};
