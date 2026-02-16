import Deploy from "../components/Deploy.jsx";
import Team from "../components/Team.jsx";

export const SECTION_REGISTRY = {
    home: {
        component: Deploy,
        baseWidth: 1400,
    },
    blog: {
        component: Team,
        baseWidth: 1200,
    },
};
