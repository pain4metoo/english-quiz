const TYPE_THEME = "TYPE_THEME";

interface Type {
  game: Array<string>;
  gameAnswer: Array<string>;
  levels: Array<string>;
  category: Array<string>;
}

interface Instruction {
  typeTheme: string;
  answersFAQ: Type;
}

const initialState: Instruction = {
  typeTheme: "game",
  answersFAQ: {
    game: [
      "Могу ли я изменить имя пользователя или уровень английского(уровень сложности)?",
      "Сохраняется ли прогресс игры?",
      "В чём польза приложения EN.CL?",
      "Сказывается ли уровень английского языка на уровне сложности игры?",
      "Если я зайду с другого устройства, то мой прогресс сохранится?",
    ],
    gameAnswer: [
      "Да, вы можете сделать это в настройках приложения.",
      "Да, прогресс сохраняется. Ваши результаты будут отображаться в разделе 'очки'. За исключением, если вы удалите файлы cookie или данные сайта, которые хранятся на стороне пользователя. В такой ситуации прогресс обнуляется и игра начинается заново.",
      "Проект направлена на подтягивание знаний по английскому в направлении аудирование (слов). Вы сможете улучшить своё понимание английских слов на слух.",
      "Да, безусловно. Например при выборе уровня 'продвинутый', у вас появится ограничение по времени на каждый ответ.",
      "Нет, так как даннные хранятся на стороне клиента, то ваш прогресс будет хранится только в том браузере, где вы начали игру.",
    ],
    levels: [],
    category: [],
  },
};

const instructionReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TYPE_THEME:
      if (action.typeTheme === "game") {
        return {
          ...state,
          quest: state.answersFAQ.game,
          ans: state.answersFAQ.gameAnswer,
        };
      }
      return {
        ...state,
        typeTheme: action.typeTheme,
      };
    default:
      return state;
  }
};

export const changeThemeActionCreator = (theme: string) => ({
  type: TYPE_THEME,
  typeTheme: theme,
});

export default instructionReducer;
