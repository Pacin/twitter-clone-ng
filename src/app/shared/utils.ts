import {environment as env} from 'src/environments/environment';

export const extractProfileImg = (user: any):string => {
    try {
      const imgUrl = user.profileImg.formats.thumbnail.url;

      return `${env.baseURL}${imgUrl}`;
    } catch {
      return env.placeholderProfileImg;
    }
  }

  export const isMobile = ():boolean  => {
    const windowWidth = window.innerWidth;

    return windowWidth <= 768;
  }
  
  export const isTablet = ():boolean  => {
    const windowWidth = window.innerWidth;

    return windowWidth <= 991;
  }