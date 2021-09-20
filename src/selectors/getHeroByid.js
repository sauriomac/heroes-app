import { heroes } from "../data/Heroes";

const getHeroByid = (id) => {
    return heroes.find( hero => hero.id === id);
}

export default getHeroByid
