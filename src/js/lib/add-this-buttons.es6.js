/****
 * Addthis sharing buttons
 ****/
class AddThis {
  constructor() {}
  addClickEvent(element, eventType) {
    const selector = document.querySelector(element);
    selector.addEventListener('click', () => {
      const pathName = window.location.href;
      const left = window.innerWidth / 2 - 700 / 2;
      const top = window.innerHeight / 2 - 325 / 2;
      try {
        window.open(
          `//api.addthis.com/oexchange/0.8/forward/${eventType}/offer?pubid=ra-547e0fb955b81113&url=${pathName}`, `${eventType} popup`, `scrollbars=no, height=325, width=700, top=${top} left=${left}`
        );
      } catch (e) {
        window.open(
          `//api.addthis.com/oexchange/0.8/forward/${eventType}/offer?pubid=ra-547e0fb955b81113&url=${pathName}`, `${eventType}popup`
        );
      }
    });
  }
  addClickPrintEvent (element) {
    const selector = document.querySelector(element);
    selector.addEventListener('click', () => {
      var location = encodeURI(window.location);
      window.open(`${location}?print=1`, '_self');
    });
  }
}
const addThis = new AddThis();
addThis.addClickEvent('#facebook-share-button', 'facebook');
addThis.addClickEvent('#twitter-share-button', 'twitter');
addThis.addClickEvent('#email-share-button', 'email');
addThis.addClickPrintEvent('#print-share-button');
