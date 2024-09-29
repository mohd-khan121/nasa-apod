export default function Main(props) {
  const { data } = props;
  return (
    <>
      <div className="imgContainer">
        <img src={data.hdurl} alt="test-img" className="bgImage" />
      </div>
    </>
  );
}
