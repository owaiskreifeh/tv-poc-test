import React, { Suspense } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import { insureStartWith } from '../Lib/strings';
// Views
const SystemAPIsView = React.lazy(() => import("../Views/SystemAPIs"))
const CSSView = React.lazy(() => import("../Views/CSS"))
const AnimationView = React.lazy(() => import("../Views/Animation"))
const HTML5PlayerView = React.lazy(() => import("../Views/HTML5Player"))
const NetworkingView = React.lazy(() => import("../Views/Networking"))
const PlayerView = React.lazy(() => import("../Views/Player"))

const routes = [
  { path: "css", Component: CSSView },
  { path: "system-apis", Component: SystemAPIsView },
  { path: "animation", Component: AnimationView },
  { path: "network", Component: NetworkingView },
  { path: "html5-player", Component: HTML5PlayerView },
  { path: "player/:type", Component: PlayerView },
];

export const MainSwitcher = () => {
  return (
    <main>
      <Switch>
        {routes.map(({ path, Component }) => (
          <Route
            key={`suspense-route_${path}`}
            path={insureStartWith(path, "/")}
            render={props => (
              <Suspense
                fallback={<div>{path} Lodaing ... </div>}>
                <Component {...props} />
              </Suspense>
            )}
          />


        ))}
      </Switch>
    </main>
  )
}