import GraphVists from "./GraphVists";

const Visitors = (prop) => {
  return (
    <div className={prop.whichData}>
      <h3>{prop.whichData}</h3>
      <p className="info1">{prop.info1}</p>
      <GraphVists />
    </div>
  );
};

export default Visitors;
