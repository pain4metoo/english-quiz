const TYPE_THEME = "TYPE_THEME";
const SHOW_ANSWER_NUM = "SHOW_ANSWER_NUM";

interface Type {
  game: Array<string>;
  gameAnswer: Array<string>;
  levels: Array<string>;
  levelsAnswer: Array<string>;
  category: Array<string>;
  categoryAnswer: Array<string>;
}

interface Instruction {
  typeTheme: string;
  answersFAQ: Type;
  number: number | null;
}

const initialState: Instruction = {
  typeTheme: "game",
  answersFAQ: {
    game: [
      "В чём польза приложения EN.CL?",
      "Сохраняется ли прогресс игры?",
      "Если я зайду с другого устройства, то мой прогресс сохранится?",
      "Могу ли я изменить имя пользователя или уровень английского(уровень сложности)?",
    ],
    gameAnswer: [
      "Проект направлена на подтягивание знаний по английскому в сторону аудирования (слов). Вы сможете улучшить своё понимание английских слов на слух и потренировать написание слов на английском. Так же вы сможете проверить свои знания по английскому в категории тесты.",
      "Да, прогресс сохраняется. Ваши результаты будут отображаться в разделе 'очки'. За исключением, если вы удалите файлы cookie или данные сайта, которые хранятся на стороне пользователя. В такой ситуации прогресс обнуляется и игра начинается заново.",
      "Нет, так как даннные хранятся на стороне клиента, то ваш прогресс будет хранится только в том браузере, где вы начали игру.",
      "Да, вы можете сделать это в настройках приложения.",
    ],
    levels: [
      "Какие в игре есть уровни сложности?",
      "Сказывается ли выбор уровня английского языка на сложность игры?",
    ],
    levelsAnswer: [
      "В игре есть три уровня сложности(начальный, средний, продвинутый).",
      "Да, ваш уровень владения английским языком будет влиять на уровень сложности игры.",
    ],
    category: ["Какие в игре есть категории?"],
    categoryAnswer: [
      "В игре есть 4 категории(существительные, прилагательные, глаголы, наречия).",
    ],
  },
  number: null,
};

const instructionReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TYPE_THEME:
      if (action.typeTheme === "game") {
        return {
          ...state,
          quest: state.answersFAQ.game,
          ans: state.answersFAQ.gameAnswer,
          typeTheme: action.typeTheme,
          number: null,
        };
      } else if (action.typeTheme === "levels") {
        return {
          ...state,
          quest: state.answersFAQ.levels,
          ans: state.answersFAQ.levelsAnswer,
          typeTheme: action.typeTheme,
          number: null,
        };
      } else if (action.typeTheme === "category") {
        return {
          ...state,
          quest: state.answersFAQ.category,
          ans: state.answersFAQ.categoryAnswer,
          typeTheme: action.typeTheme,
          number: null,
        };
      }

      return {
        ...state,
        typeTheme: action.typeTheme,
      };
    case SHOW_ANSWER_NUM:
      return {
        ...state,
        number: action.number,
      };
    default:
      return state;
  }
};

export const changeThemeActionCreator = (theme: string) => ({
  type: TYPE_THEME,
  typeTheme: theme,
});

export const showAnswerActionCreator = (number: number) => ({
  type: SHOW_ANSWER_NUM,
  number: number,
});

export default instructionReducer;
