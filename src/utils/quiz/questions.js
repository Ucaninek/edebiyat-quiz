import { Question } from "./quizEngine.js";


//const hamburgers = ['https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/165384.jpg', 'https://burgerlad.com/wp-content/uploads/2020/09/McDonalds-Triple-Cheeseburger-3.jpeg', 'https://cdn.entertainmentdaily.com/2020/04/02120049/80_Big-Mac-scaled.jpg', 'https://www.hungryjacks.com.au/Upload/HJ/Media/Menu/product/Main/1000_Whopper.png']
//const q = new Question('hamburger cheeseburger bigmac whopper', hamburgers);

var questionArray = [];
questionArray.push(new Question('Agılda oglak togsa arıkda otı öner', c(['agil', 'oglak', 'dogmak', 'dere', 'ot', 'bitmek'])));
questionArray.push(new Question('Ay tolun bolsa eliğin imlemes', c(['ay', 'dolunay', 'el', 'göstermek'])));
questionArray.push(new Question('Beş erñek tuz ermes', c(['beş', 'parmak', 'düz', 'birbiri', 'eş', 'değil'])));
questionArray.push(new Question('Boldaçı buzagu öküz ara belgülüğ', c(['öküz', 'buzağı', 'kendi', 'bellietmek'])));
questionArray.push(new Question('Ermegüğe bulıt yük bolur', c(['tembel', 'bulut', 'yük'])));
questionArray.push(new Question('Etli tırñaklı eyirmes', c(['et', 'tırnak', 'ayrılmak', 'değil'])));
questionArray.push(new Question('Eyğülüğni sub ayakında kemiş başında tile', c(['iyilik', 'su', 'at', 'pınar', 'bulmak'])));
questionArray.push(new Question('Karga kazga ötgünse butı sınur', c(['karga', 'kaz', 'özenmek', 'bacak', 'kırmak'])));
questionArray.push(new Question('Kişi alası içtin, yılkı alası taştın', c(['kendi', 'iyilik', 'iç', 'at', 'iyilik', 'dış'])));
questionArray.push(new Question('Kobı er kuyugka kirşe yel alır', c(['şans', 'değil', 'kendi', 'kuyu', 'girmek', 'rüzgar'])));
questionArray.push(new Question('Közden yırasa köñülden yeme yırar.', c(['göz', 'uzak', 'gönül', 'uzak'])));
questionArray.push(new Question('Kurtga büyik bilmes yerim tar ter', c(['yaşlı-kadın', 'oyun', 'bilmek', 'değil', 'dar-alan', 'söylemek'])));
questionArray.push(new Question('Kutsuz kuyugka kirşe kum yağar', c(['şans', 'değil', 'kendi', 'kuyu', 'girmek', 'kum', 'yağmak'])));
questionArray.push(new Question('Küñe baksa köz kamar', c(['güneş', 'bakmak', 'göz', 'kamaşmak'])));
questionArray.push(new Question('Kuz keliği yazın yayın bilgürer belgülüğ', c(['sonbahar', 'gelmek', 'yaz', 'belli'])));
questionArray.push(new Question('Nece yitik biçek erse Öz sapın yonumas', c(['bıçak', 'keskin', 'kendi', 'sap', 'yontmak', 'değil'])));
questionArray.push(new Question('Ot tese ağız köymes', c(['ateş', 'söylemek', 'ağız', 'yanmak', 'değil'])));
questionArray.push(new Question('Otug oyguç birle öçürmes', c(['ateş', 'ateş', 'söndürmek', 'değil'])));
questionArray.push(new Question('Öküş sebinç bolsa katıg oksunur', c(['çok', 'sevinmek', 'çok', 'pişman'])));
questionArray.push(new Question('Tokum yüzüp kuyrukta biçek sıma', c(['deri', 'yüzmek', 'kuyruk', 'bıçak', 'kırmak', 'değil'])));
questionArray.push(new Question('Tünle yorub kunduz sebnür, kiçikde eplenip ulgayu sebnür', c(['gece', 'yola-çıkmak', 'gündüz', 'sevinmek', 'küçük-çocuk', 'evlenmek', 'yaşlı-kadın', 'sevinmek'])));
questionArray.push(new Question('Yağını aşaklasa başka çıkar', c(['düşman', 'küçümsemek', 'yenilmek'])));
questionArray.push(new Question('Yalñuk oglı munsuz bolmas', c(['kendi', 'oğul', 'dert'])));
questionArray.push(new Question('Yalñuk oglı yokayur eyğü atı kalır', c(['kendi', 'oğul', 'yok-olmak', 'ölmek', 'iyi', 'adı-kalmak'])));
questionArray.push(new Question('Yazıdaki süblin eyergeli, ebdeki takagu uçgınma', c(['düzlük', 'sülün', 'bakmak', 'ev', 'tavuk', 'kaçmak'])));
questionArray.push(new Question('Yazın katıglansa kışın sebnür.', c(['yaz', 'yemek', 'kış', 'sevinmek'])));
questionArray.push(new Question('Yılan kendü eğrisin bilmes, tebi boynın eğri ter', c(['yılan', 'kendi', 'eğri', 'bilmek', 'değil', 'deve', 'boyun', 'eğri', 'söylemek'])));
questionArray.push(new Question('Yogurkanda artuk ayak kösülse üşiyür', c(['ayak', 'yorgan', 'üşümek'])));
questionArray.push(new Question('Yurt kiçük bolsa angut bedük ur', c(['delik', 'küçük', 'tıpa', 'yama', 'büyük', 'vurmak'])));
questionArray.push(new Question('Yüzge körme erdem tile', c(['kendi', 'yüz', 'güzel', 'değil', 'fazilet', 'bakmak'])));

export const qArr = () => {
    return questionArray;
}

function c(a) {
    return a.map(x => { return `./assets/${x}.png` });
}