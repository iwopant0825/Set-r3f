import { PuffLoader } from "react-spinners";

const override = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#202020"
}

export default function Loading() {
  return (
    <div style={override}>
      <PuffLoader color="#36d7b7" />
    </div>
  );
}