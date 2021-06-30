// import skalka from '../assets/img/skalka.jpg'

export const giftService = {
    query
}

var gifts = [{
    id: 'i101',
    name: 'מערוך מתכוונן צבעוני',
    nickname: 'skalka',
    src: "https://www.sohocenter.co.il/products/merukh-mskhvnn-tsbeuni?_pos=2&_sid=9ec833313&_ss=r"
},
{
    id: 'i102',
    name: 'כפכפי הוויאנס עם הדפס פרחוני SLIM FLORAL',
    nickname: 'havaianas',
    src: "https://havaianas.co.il/product/slim-floral/"
},
{
    id: 'i103',
    name: 'פילינג מונוי לגוף למראה שיזוף בריא וזוהר',
    nickname: 'scrub',
    src: "https://www.yvesrocher.co.il/bath-and-shower/product-type/pealing/77808"
},
{
    id: 'i104',
    name: 'ספריי מונוי למראה שיער גלי',
    nickname: 'spray',
    src: "https://www.yvesrocher.co.il/hair-care/product-type/complete-treatment/78254"
}]

function query() {
    // return Promise.resolve(gifts)
    return gifts
}