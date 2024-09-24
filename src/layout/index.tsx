import { Header } from "../components/header";
import { Outlet } from "react-router-dom";

export function DeafultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
