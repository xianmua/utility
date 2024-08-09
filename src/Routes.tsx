import { Routes, Route } from "react-router-dom";
import Roulette from "./pages/choice/Roulette";

export default function RoutesPage() {
  const routes = [{ path: "/choice/roulette", element: <Roulette /> }];
  return (
    <Routes>
      {routes.map((r, i) => (
        <Route {...r} key={i} />
      ))}
    </Routes>
  );
}
