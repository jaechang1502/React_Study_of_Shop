import { Outlet, useNavigate } from "react-router-dom";

const event = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h2>이벤트 페이지임</h2>
      <div className="d-flex">
        <button
          onClick={() => {
            navigate("/event/one");
          }}
        >
          one
        </button>
        <button
          onclick={() => {
            navigate("/event/two");
          }}
        >
          two
        </button>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default event;
