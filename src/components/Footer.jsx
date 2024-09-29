export default function Footer(props) {
  const { showModal, handleToggleModal, data } = props;
  return (
    <>
      <footer>
        <div className="bgGradient"></div>
        <div>
          <h2>{data.title}</h2>
          <h1>Qayanuddin's APOD Project</h1>
          <p className="vistme">
            vist <a href="https://qayamuddin.com/">qayamuddin.com</a>
          </p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-circle-info"></i>
        </button>
      </footer>
    </>
  );
}
