import { heroes } from '../data/Heroes';


const getHeroByPublisher = (publisher) => {

    const validPublisher = ["DC Comics", "Marvel Comics"];
        if( !validPublisher.includes( publisher )){
            throw new Error(`publisher "${ publisher }" no es correcto`) ;
        
        }
    return heroes.filter( hero => hero.publisher === publisher);

}

export default getHeroByPublisher
