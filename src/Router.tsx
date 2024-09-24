import { Routes, Route } from "react-router-dom";
import { Blog } from "./pages/Blog";
import { Post } from "./pages/Issue";
import { DeafultLayout } from "./layout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DeafultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/post" element={<Post />} />
      </Route>
    </Routes>
  );
}
