import React from "react";
import { Link } from "react-router-dom";
import { insureStartWith } from "../Lib/strings";

const routes = [
    { to: "system-apis", title: "System APIs" },
    { to: "css", title: "CSS Support" },
    { to: "animation", title: "Animations" },
    { to: "network", title: "Networking" },
    { to: "html5-player", title: "HTML5 Player" },
    {
        to: "player", title: "Players", children: [
            "shaka", "dashjs", "hlsjs",
        ]
    },
]

export const Navigation = () => {
    return (
        <nav>
            <ul>
                {
                    routes.map((route, _) => {
                        const routeLink = insureStartWith(route.to, '/');
                        return <li key={`route_${route.title}`}>
                            {
                                route.children
                                    ? <>
                                        {route.title}
                                        <ul>
                                            {
                                                route.children.map((subroute, _) => {
                                                    const fullLink = `${routeLink}${insureStartWith(subroute, "/")}`
                                                    return <li key={`route_${route.title}_${subroute}`}>
                                                        <Link to={fullLink}>{route.title}/{subroute}</Link>
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    </>
                                    : <Link to={routeLink}>{route.title}</Link>
                            }
                        </li>
                    })
                }
            </ul>
        </nav>
    )
}

