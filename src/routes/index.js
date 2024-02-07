import { Navigate, Route, Routes } from "react-router-dom";
import { PROTECTED_ROUTE_CONFIG, PUBLIC_ROUTE_CONFIG } from "./route-confi";
import { AUTHENTICATED, ROUTE_CONSTANTS } from "../constants";
import { Protected, Public } from "../layout";

export const AppRoutes = () => {
  const isAuthenticated = JSON.parse(localStorage.getItem(AUTHENTICATED));

  if (isAuthenticated) {
    return (
      <Routes>
        <Route Component={Protected}>
          {PROTECTED_ROUTE_CONFIG().map((value) => {
            return (
              <Route
                key={value.path}
                path={value.path}
                Component={value.component}
              ></Route>
            );
          })}
          <Route
            path="/"
            element={<Navigate to={ROUTE_CONSTANTS.CANDIDATES} />}
          ></Route>
          <Route
            path="*"
            element={<Navigate to={ROUTE_CONSTANTS.NOT_FOUND} />}
          ></Route>
        </Route>
      </Routes>
    );
  }

  return (
    <Routes>
      <Route Component={Public}>
        {PUBLIC_ROUTE_CONFIG().map((value) => {
          return (
            <Route
              key={value.path}
              path={value.path}
              Component={value.component}
            ></Route>
          );
        })}
        <Route
          path="/"
          element={<Navigate to={ROUTE_CONSTANTS.LOGIN} />}
        ></Route>
        <Route
          path="*"
          element={<Navigate to={ROUTE_CONSTANTS.NOT_FOUND} />}
        ></Route>
      </Route>
    </Routes>
  );
};
