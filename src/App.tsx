export default function App() {

  return (
    <div className="dialog-container">
      <div className="dialog">
        <div className="dialog__header">
          <div className="dialog__header-title-container">
            <div className="dialog__header-title">
              Ссъешь ещё этих мягких французских булок, да выпей чаю
            </div>
            <div className="dialog__header-subtitle">
              Съешь ещё этих мягких французских булок, да выпей чаю
            </div>
          </div>
          <button className="dialog__header-button">Кнопка закрытия</button>
        </div>
        <div className="dialog__content">
          <div className="dialog__content-block dialog__content-block_left">
            Left
          </div>
          <div className="dialog__content-block dialog__content-block_right">
            <div className="content">
              <span>Top</span>
              <span>Center</span>
              <span>Bottom</span>
            </div>
          </div>
        </div>
        <div className="dialog__footer">
          Ссъешь ещё этих мягких французских булок, да выпей чаю
          <br />
          ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
          <br />
          Ссъешь ещё этих мягких французских булок, да выпей чаю
        </div>
      </div>
    </div>
  );
}
