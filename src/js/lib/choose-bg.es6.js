class SetHero {

  constructor(lg, sm) {
    this.xsSet = false;
    this.lgSet = false;
    this.lgImg = lg;
    this.smImg = sm;
  }
  switchBG(){

    const xsNav = document.querySelector('#nav-xs');
    const xsNavVisible = xsNav.currentStyle ? xsNav.currentStyle.display :
    getComputedStyle(xsNav, null).display;

    const smNav = document.querySelector('#nav-sm');
    const smNavVisible = smNav.currentStyle ? smNav.currentStyle.display :
    getComputedStyle(smNav, null).display;

    const lgNav = document.querySelector('#nav-lg');
    const lgNavVisible = lgNav.currentStyle ? lgNav.currentStyle.display :
    getComputedStyle(lgNav, null).display;

    if(this.smImg
      && (xsNavVisible === 'block')
      && this.xsSet === false) {

        const mobileBG = document.querySelector('#mobile-bg');

        mobileBG.src = smImg;
        this.xsSet = true;
    }
    if(lgImg
      && lgNavVisible
      || smNavVisible
      && this.lgSet === false) {
        const body = document.querySelector('body');
        body.style.backgroundImage = `url("${this.lgImg}")`;
        this.lgSet = true;
    }

  }
}

const body = document.querySelector('body');
const lgImg = body.dataset.heroLg;
const smImg = body.dataset.heroSm;
const setHero = new SetHero(lgImg, smImg);
setHero.switchBG();
window.onresize = ()=> {
  setHero.switchBG();
};

