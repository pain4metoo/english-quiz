import styles from "./MainInstruction.module.scss";
import { Navigate } from "react-router-dom";

const MainInstruction = (props: any) => {
  if (!props.isAuthName && !props.isAuthLevel) {
    return <Navigate to="/" />;
  }

  return (
    <section className={styles.instruction}>
      <div className={styles.instruction_inner}>
        <div className={styles.instruction_block}>
          <p className={styles.instruction_question}>
            Могу ли я изменить имя пользователя или уровень английского(уровень
            сложности)?
          </p>
          <p className={styles.instruction_answer}>
            Да, вы можете сделать это в настройках приложения.
          </p>
        </div>

        <div className={styles.instruction_block}>
          <p className={styles.instruction_question}>
            Сохраняется ли прогресс игры?
          </p>
          <p className={styles.instruction_answer}>
            Да, прогресс сохраняется. Ваши результаты будут отображаться в
            разделе "очки". За исключением, если вы удалите файлы cookie или
            данные сайта, которые хранятся на стороне пользователя. В такой
            ситуации прогресс обнуляется и игра начинается заново.
          </p>
        </div>

        <div className={styles.instruction_block}>
          <p className={styles.instruction_question}>
            В чём польза приложения EN.CL?
          </p>
          <p className={styles.instruction_answer}>
            Проект направлена на подтягивание знаний по английскому в
            направлении аудирование (слов). Вы сможете улучшить своё понимание
            английских слов на слух.
          </p>
        </div>

        <div className={styles.instruction_block}>
          <p className={styles.instruction_question}>
            Сказывается ли уровень английского языка на уровне сложности игры?
          </p>
          <p className={styles.instruction_answer}>
            Да, безусловно. Например при выборе уровня "продвинутый", у вас
            появится ограничение по времени на каждый ответ.
          </p>
        </div>

        <div className={styles.instruction_block}>
          <p className={styles.instruction_question}>
            Если я зайду с другого устройства, то мой прогресс сохранится?
          </p>
          <p className={styles.instruction_answer}>
            Нет, так как даннные хранятся на стороне клиента, то ваш прогресс
            будет хранится только в том браузере, где вы начали игру.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainInstruction;
