// uy ishi 


const sonlar = "Talim bu — katta mas'uliyat. Agar fidokorona ishlanmasa, natijaga qaratilgan tog'ri strategiya bilan ishlanmasa, oldinga qo'yilgan marralarga yetishish qiyin. Prezidentimiz oldida aytgan taklifimning paydo bo'lishiga Belarus YaMMning deyarli 10 foizi IT soha vakillari zimmasiga to'g'ri kelayotgani sabab bo'lgan. Bizda 36 million aholi bor, uning ustiga 60 foizi yoshlarni tashkil qiladi, kuchli matematika maktablarimiz bor, biz ham bu ko'rsatkichlarga erishishimiz mumkinligiga ishonaman.Hozirgi kunda IT sohasidagi birlamchi bilimlarni egallabgina IT yo'nalishida ish topish oson emas. Bozor o'zgaryapti. Kundan kunga talablar oshmoqda. Biz oldimizga jahon talablariga mos keladigan, katta kompaniyalarning yuqori lavozimlarida ishlay oladigan mutaxassislarni yetishtirib chiqarishni maqsad qilib qo'yganmiz. Startap sifatida boshlangan PDP Academy loyihasi bugungi kunga kelib korporativ boshqaruvga o'tmoqda, o'ziga xos IT ekosistemasi shakllantirilmoqda, 2030 yilga qadar strategiya ishlab chiqildi va hozirgi olib borayotgan faoliyatimiz kelajakda amalga oshirmoqchi bo'lgan katta rejalarimiz debochasi deb qaralsa ham to'g'ri bo'ladi."
let str = sonlar.split("")
let ob = [];

for (let i = 0; i < str.length; i++) {
    let element = str[i];
    if (element == 'a') {
        console.log('unli a');
        ob.push(element);
        // console.log(ob);
    } else if (element == 'e'){
         console.log('unli e');
         ob.push(element);
    } else if (element == 'i'){
         console.log('unli i');
         ob.push(element);
    } else if (element == 'o'){
        console.log('unli o');
        ob.push(element);
   }else if (element == 'u'){
    console.log('unli u');
    ob.push(element);
  }else if (element == "o'"){
    console.log("unli o'");
    ob.push(element);
 } 
}
console.log("umumiy unlilar soni " + ob.length);
