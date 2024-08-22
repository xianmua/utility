import { Routes, Route } from "react-router-dom";
import Roulette from "./pages/choice/Roulette";
import ChoiceCard from "./pages/choice/Card";
import JsonUtils from '@/pages/json/index'

export default function RoutesPage() {
  const routes = [
    { path: "/json", element: <JsonUtils /> },
    { path: "/choice/roulette", element: <Roulette /> },
    { path: "/choice/card", element: <ChoiceCard /> },
  ];
  return (
    <Routes>
      {routes.map((r, i) => (
        <Route {...r} key={i} />
      ))}
    </Routes>
  );
}
