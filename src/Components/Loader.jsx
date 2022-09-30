import { Triangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader">
      <Triangle
        height="200"
        width="200"
        color="black"
        ariaLabel="triangle-loading"
      />
    </div>
  );
};
export default Loader;
