let clickNumber = 0;
let compare = [];
let firstClick;
let secendClick;
let firstID;
let secID;

const clickOnCart = (e) => {

const clear = () => {
  firstClick = '';
  secendClick = '';
  clickNumber = 0;
  compare = [];
}


  clickNumber += 0.5;
  if (clickNumber < 1) {
    firstClick = e.target.children[0].attributes['data-id'].value;
    firstID = e.target.children[0];
    firstID.classList.remove('noVisible')
    compare.push(firstClick);

  }
  else {
    secendClick = e.target.children[0].attributes['data-id'].value;
    secID = e.target.children[0];
    secID.classList.remove('noVisible')
    compare.push(secendClick);

    if (compare[0] === compare[1]) {

    } else {
      clear()
      setTimeout(() => {
        firstID.classList.add('noVisible');
        secID.classList.add('noVisible');
      }, 100)
    }
    clear();
  }
}

export { clickOnCart }