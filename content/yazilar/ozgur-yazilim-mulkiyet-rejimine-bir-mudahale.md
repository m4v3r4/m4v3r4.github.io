---

title: "Özgür Yazılım: Mülkiyet Rejimine Bir Müdahale"
date: 2026-07-02T11:45:00+03:00
draft: false
slug: "ozgur-yazilim-mulkiyet-rejimine-bir-mudahale"

description: "Özgür yazılımın yazılım üzerindeki dışlayıcı mülkiyet ilişkisine nasıl müdahale ettiğini; copyleft, müşterek üretim, açık kaynak ve kapitalist içerilme üzerinden  tartışmak."

kategoriler:

- "notlar"

---


Serinin önceki yazısında özgür yazılım hareketinin hacker kültürünün paylaşım pratiklerinden nasıl doğduğunu ve gündelik bir çalışma biçiminin zamanla savunulan bir özgürlük anlayışına nasıl dönüştüğünü ele almıştık. Burada o tarihi yeniden anlatmak yerine daha dar fakat daha temel bir soruya geçebiliriz: **Özgür yazılım, mülkiyet ilişkisine tam olarak nereden müdahale eder?**

Bu soru önemlidir; çünkü özgür yazılımın politik anlamı programların ücretsiz dağıtılmasında veya kaynak kodunun yalnızca görülebilir olmasında yatmaz. GNU geleneğinin merkezinde kullanıcının program karşısındaki konumu vardır. Özgür yazılım tanımında kullanıcının programı istediği amaçla çalıştırabilmesi, nasıl çalıştığını inceleyebilmesi, değiştirebilmesi ve değiştirilmiş ya da değiştirilmemiş kopyalarını başkalarıyla paylaşabilmesi temel özgürlükler olarak kabul edilir. GNU'nun kendi ifadesiyle mesele ücret değil, kullanıcının program üzerindeki denetimidir.[^1]

Bu açıdan özgür yazılım, teknoloji tartışmasının içine doğrudan bir mülkiyet ve denetim sorusu sokar. Program üzerinde kim söz sahibidir? Onu yalnızca geliştiren ve hukuki haklarını elinde tutan aktör mü, yoksa kullanan ve yeniden üreten topluluk da mı?

## Kopyalanabilen şey nasıl meta olur?

Yazılımın mülkiyet ilişkisini anlamak için dijital bilginin özgünlüğüne bakmak gerekir. Bir otomobilin ikinci bir kullanıcıya ulaşması için başka bir otomobil üretilmesi gerekir. Bir ton çelik aynı anda iki farklı yerde kullanılamaz. Dijital bir programın kopyalanması ise ilk kopyayı ortadan kaldırmaz. Bir kez üretilmiş yazılımın yeni bir kopyasını oluşturmanın marjinal maliyeti son derece düşüktür.

Buradan yazılımın maliyetsiz olduğu sonucu çıkmaz. Yazılım üretimi emek gerektirir; geliştiricilerin eğitimi, bilgisayarlar, ağ altyapısı, elektrik, sunucular, araştırma kurumları ve donanım maddi kaynaklara dayanır. Düşük olan şey bütün bu toplumsal üretim maliyeti değil, **bir kez üretilmiş dijital bilginin yeniden çoğaltılmasının maliyetidir**.

Bu özellik kapitalist metalaştırma açısından özgün bir çelişki doğurur. Kolayca çoğaltılabilen bir bilgi üzerinde dışlayıcı denetim kendiliğinden ortaya çıkmaz; hukuki ve teknik olarak kurulması gerekir. Kaynak kodunun kapatılması, lisans koşulları, aktivasyon mekanizmaları, kopyalama sınırlamaları ve dijital hak yönetimi gibi araçlar yalnızca teknik tercihler değildir. Aynı zamanda erişimi sınırlandırarak kolayca çoğaltılabilir bir ürün üzerinde dışlama hakkı oluştururlar.

Kapalı yazılım düzeninde kullanıcı bu nedenle çoğu zaman kullandığı program üzerinde tam bir tasarruf hakkına sahip değildir. Bilgisayar ona ait olabilir ve program için ücret ödemiş olabilir; buna rağmen programın işleyişini incelemesi, kendi ihtiyacına göre değiştirmesi veya değiştirdiği sürümü başkalarıyla paylaşması engellenebilir. GNU'nun “özel mülk yazılım” eleştirisinin merkezi de budur: program kullanıcının denetiminde değilse, programın geliştiricisi kullanıcı üzerinde teknik bir iktidar kurabilir.[^1]

Özgür yazılımın ilk müdahalesi burada gerçekleşir. Kullanıcıyı yalnızca tüketici konumunda bırakmaz; programın kullanım, inceleme, değiştirme ve yeniden dağıtım süreçlerine katılmasını mümkün kılar. Böylece teknik nesne üzerindeki belirli yetkiler tek bir hak sahibinde toplanmak yerine kullanıcılar arasında dağıtılır.

## Copyleft: mülkiyet hukukuna içeriden müdahale

Bu müdahalenin en özgün hukuki biçimlerinden biri copyleft'tir. Önceki yazıda copyleft'in hangi tarihsel koşullarda ortaya çıktığını tartıştığımız için burada tarihçesinden çok hukuki mantığı önemlidir.

Telif hakkının klasik kullanımı hak sahibine eserin çoğaltılması, değiştirilmesi ve yeniden dağıtılması üzerinde dışlayıcı yetkiler verir. Copyleft ise telif hakkını ortadan kaldırmaz; aynı hukuki aracı farklı bir yönde kullanır. GNU'nun Türkçe açıklamasında copyleft, bir programı özgür hale getirmenin ve değiştirilmiş ya da geliştirilmiş sürümlerin de özgür kalmasını sağlamanın yöntemi olarak tanımlanır.[^2]

Copyleft lisanslı bir programı kullanan kişi programı inceleyebilir, değiştirebilir ve yeniden dağıtabilir. Fakat dağıttığı değiştirilmiş sürümde sonraki kullanıcıların aynı temel özgürlüklerini ortadan kaldıracak yeni kısıtlamalar koyamaz. Özgürlük böylece yalnızca ilk kullanıcıya verilmiş bir izin olmaktan çıkar ve kodun sonraki dolaşımında da korunmaya çalışılan bir hukuki koşula dönüşür.

Bu nedenle copyleft özel mülkiyet hukukunun dışında kurulmuş bir alan değildir. Telif hakkı, hak sahipliği ve lisans ilişkisi varlığını sürdürür. Fakat telif hakkının dışlama kapasitesi, müşterekleşmiş kodun yeniden kapatılmasını engellemek için kullanılır.

**Copyleft mülkiyeti ortadan kaldırmaz; mülkiyet hukukuna içeriden müdahale ederek dışlama hakkını müşterek alanı koruyacak biçimde ters yönde işletir.**

Bu ayrım önemlidir. Özgür yazılımı doğrudan özel mülkiyetin ortadan kaldırılması olarak okumak, onun gerçek müdahalesini olduğundan daha büyük gösterir. Fakat onu yalnızca farklı bir lisans tercihine indirgemek de yapılan müdahaleyi küçümser. Copyleft, en azından yazılım alanında, hukuki mülkiyet biçiminin başka bir kullanımının mümkün olduğunu gösterir.

## Müşterek üretim: şirket zorunlu mu?

Özgür yazılımın  önemli bir başka yönü ise üretimin örgütlenmesine ilişkin ortaya koyduğu deneyimdir. Özgür ve açık kaynak projelerinde farklı coğrafyalarda yaşayan çok sayıda insan ortak kod tabanları, hata takip sistemleri, e-posta listeleri, belgeler ve sürüm kontrol araçları üzerinden karmaşık teknik ürünler geliştirebilir.

Johan Söderberg'in *Hacking Capitalism* çalışmasının merkezindeki tezlerden biri de budur. Söderberg, özgür ve açık kaynak hareketinin emeğin belirli ölçülerde kendi kendini örgütleyerek büyük şirketlerle rekabet edebilecek karmaşık teknolojiler üretebildiğini ve böylece “aşağıdan teknoloji geliştirme” pratiği yarattığını savunur.[^3]

Burada romantik bir tablo çizmemek gerekir. Özgür yazılım projeleri de hiyerarşilere, teknik otoritelere, proje sahiplerine, bakımcılara, şirket çalışanlarına ve eşitsiz karar süreçlerine sahip olabilir. Bir projenin kodunun açık veya özgür olması, üretim sürecinin otomatik olarak demokratik olduğu anlamına gelmez.

Fakat yine de özgür yazılım deneyimi tarihsel olarak önemli bir şeyi gösterir: **karmaşık teknik üretimin büyük bir özel şirketin kapalı iç hiyerarşisi altında gerçekleşmesi teknik bir zorunluluk değildir.**

Kapitalist firma biçimi böylece teknik üretimin doğal ve kaçınılmaz örgütlenmesi olmaktan çıkar. Başka türlü işbirliği, bilgi paylaşımı ve üretim biçimlerinin mümkün olduğu pratik olarak görülür.

Bu, özgür yazılımı sosyalist üretimin küçük bir modeli haline getirmez. Fakat özel firma mülkiyetinin teknik ilerlemenin zorunlu koşulu olduğu yönündeki varsayımı zayıflatır.

## Sermaye müşterek olanı neden yok etmedi?

Tam burada özgür yazılımın tarihsel gelişiminin en önemli çelişkilerinden biri ortaya çıkar. Eğer özgür yazılım dışlayıcı mülkiyet ilişkisine gerçek bir müdahale oluşturuyor ve kapitalist şirket dışında üretim olanaklarını görünür hale getiriyorsa, sermaye neden bu pratiği basitçe bastırmadı?

Çünkü kapitalizm müşterek üretim biçimleriyle sanıldığından daha esnek bir ilişki kurabilir.

Sermayenin her durumda kodun kendisine özel mülk olarak sahip olması gerekmez. Ortaklaşa geliştirilmiş bir kod, özel mülkiyet altında çalışan hizmetlerin, platformların ve üretim süreçlerinin girdisi haline gelebilir. Bir şirket ürününün önemli bölümlerini toplum tarafından geliştirilmiş işletim sistemleri, kütüphaneler, programlama dilleri veya veritabanları üzerine kurabilir; buna rağmen müşterileriyle kurduğu ilişkiyi kapalı servisler, özel veri ve özel altyapı üzerinden örgütleyebilir.

Bunun sonucunda önemli bir paradoks ortaya çıkar:

**üretimin bazı unsurları müşterekleşirken sermaye birikimi özelleşmeye devam edebilir.**

Örneğin bir hizmetin Linux üzerinde çalışması, hizmetin üzerinde çalıştığı veri merkezinin toplumsal mülkiyette olduğu anlamına gelmez. PostgreSQL kullanılması, hizmetin topladığı verinin müşterek olduğu anlamına gelmez. Kubernetes'in açık kaynak olması, bulut altyapısındaki sermaye yoğunlaşmasını kendiliğinden ortadan kaldırmaz. Bir şirketin binlerce açık kaynak deposuna katkıda bulunması da çalışanlarının şirketin yatırım ve üretim stratejisi üzerinde kolektif söz sahibi olduğu anlamına gelmez.

Bu nedenle **müşterek kod ile müşterek üretim sistemi aynı şey değildir.**

Nick Dyer-Witheford'ın Türkçede *Siber Marx: Yüksek Teknoloji Çağında Sınıf Mücadelesi* adıyla yayımlanan *Cyber-Marx* çalışmasının önemli taraflarından biri, bilgi ve iletişim teknolojilerindeki dönüşümü sınıf çatışmasının aşılması olarak değil, sermaye ile emek arasındaki ilişkinin yeni alanlara genişlemesi olarak ele almasıdır.[^4] Kitabın Türkçe baskısı 2004'te Aykırı Yayınları tarafından yayımlandı.

Bu çerçeveden bakıldığında özgür yazılım kapitalizmin dışında duran saf bir müşterek alan değildir. Bir taraftan bilgi üzerindeki özel tekeli sınırlandırır ve kolektif üretim pratiklerini genişletir; diğer taraftan ürettiği müşterek bilgi kapitalist işletmelerin üretim altyapısına dahil olabilir.

Bu nedenle “özgür yazılım kapitalizm tarafından ele geçirildi” demek de fazla basit kalır. Böyle bir ifade, hareketin yarattığı gerçek özgürlük alanlarını ve kod üzerindeki dışlayıcı denetime yaptığı müdahaleyi görmezden gelir. Daha doğru olan, **özgür yazılım ile kapitalist üretim ilişkileri arasında çelişkili bir eklemlenme bulunduğunu** söylemektir.

Sermaye özgür yazılımı bütünüyle ortadan kaldırmaz; kimi zaman onu kullanır, finanse eder ve kendi üretim süreçlerinin içine alır. Fakat bu içerilme özgür yazılımın bütün politik içeriğini de ortadan kaldırmaz. Çelişki tam olarak burada devam eder.

## Açık kaynak: aynı pratiğin başka bir siyasal dili

Özgür yazılım ile açık kaynak arasındaki ayrım bu noktada daha somut hale gelir. GNU'nun Türkçe metinlerinde de açıkça belirtildiği gibi, “özgür yazılım” ve “açık kaynak” pratikte büyük ölçüde aynı yazılım kümesini kapsasa da farklı değerlerden hareket eder. GNU hareketi özgürlük ve adalet sorununu öne çıkarırken açık kaynak yaklaşımı teknik ve pratik avantajlara daha fazla vurgu yapar.[^5]

Bu ayrım 1998'de “open source” teriminin ortaya çıkışıyla belirginleşti. GNU'nun kendi tarihsel ve politik yorumuna göre açık kaynak söylemi, özgür yazılımın etik özgürlük vurgusunu paylaşmayan aktörler tarafından geliştirildi ve aynı teknik pratikleri farklı bir gerekçeyle savundu.[^5]

Bu yüzden tartışmayı “özgür yazılım iyidir, açık kaynak kötüdür” gibi bir karşıtlığa indirgemek gereksizdir. Daha önemli olan, aynı üretim biçiminin iki farklı siyasal gerekçeyle savunulabilmesidir.

Özgür yazılım açısından soru, kullanıcının program karşısındaki özgürlüğüdür.

Açık kaynak yaklaşımı açısından aynı geliştirme biçiminin hata tespiti, yenilik, güvenilirlik ve verimlilik gibi teknik avantajları öne çıkabilir.

İkinci dil kapitalist işletmeler açısından daha kolay benimsenebilir; çünkü müşterek geliştirme pratiğinin kendisinden faydalanmak için kullanıcı özgürlüğünü politik bir amaç olarak kabul etmek gerekmez. Ortak kod, şirket açısından daha verimli bir üretim girdisi olarak da değerlendirilebilir.

Kapitalist içerilmenin önemli biçimlerinden biri tam olarak budur. Sermaye müşterek üretim pratiğini tamamen yok etmek yerine onun verimli unsurlarını kendi üretim süreçlerine eklemleyebilir.

## Kod özgür, ilişki kapalı olabilir

Fakat kapitalist içerilme yalnızca şirketlerin açık kaynak projelerine katkıda bulunmasıyla sınırlı değildir. İnternet tabanlı hizmetlerin yaygınlaşmasıyla birlikte kullanıcı ile yazılım arasındaki ilişkinin kendisi de değişmiştir.

Kullanıcı artık her zaman kendi bilgisayarında çalışan bir program kopyasını doğrudan kullanmaz. Hesaplama başka bir aktörün sunucusunda yapılabilir ve kullanıcı yalnızca sonuçla etkileşebilir. Richard Stallman bu ilişkiyi **Yazılım Yerine Hizmet — Service as a Software Substitute, SaaSS** kavramıyla ele alır. GNU'nun Türkçe çevirisinde sorun, kullanıcının kendi gerçekleştirebileceği bir bilişim faaliyetini başka birinin kontrolündeki sunucuya devretmesi ve böylece kendi bilişimi üzerindeki denetimini kaybetmesi olarak açıklanır.[^6]

Bu önemli bir genişlemedir. Özgür yazılımın problemi yalnızca kaynak kodunun gizli olup olmaması değildir. Kod özgür olsa bile kullanıcı fiilen programın kontrol ettiği kopyayı çalıştıramıyor ve yalnızca başka bir aktörün yönettiği hizmete erişebiliyorsa kullanıcı egemenliği yeniden sınırlanabilir.

Ancak SaaSS eleştirisinin sınırını doğru koymak gerekir. GNU burada genel olarak ağ hizmetlerine veya sunuculara karşı çıkmaz. Stallman'ın tanımladığı problem, kişinin kendi bilişim faaliyetinin başka bir aktörün denetimine devredilmesidir.[^6]

Bu ayrım, özgür yazılım hareketinin kendi içerisinde de kodun lisans statüsünden daha geniş bir denetim problemi gördüğünü gösterir.

## AGPL neyi çözer, neyi çözmez?

Ağ hizmetlerinin yaygınlaşması copyleft açısından başka bir boşluğu da ortaya çıkarmıştır. Klasik GPL esas olarak yazılımın dağıtılması durumunda devreye girer. Bir şirket GPL lisanslı bir programı değiştirip kendi sunucularında çalıştırıyor fakat değiştirilmiş programı dağıtmıyorsa kaynak kodunu paylaşma yükümlülüğü aynı biçimde oluşmayabilir.

GNU Affero Genel Kamu Lisansı bu soruna müdahale eder. GNU'nun Türkçe lisans açıklamalarında AGPL'nin, ağ üzerinden kullanılan değiştirilmiş sürümlerin kaynak koduna hizmet kullanıcılarının erişebilmesi için ek bir koşul içerdiği belirtilir.[^7]

Bu, copyleft'in ağ hizmetleri alanına doğru genişlemesidir. Bir şirket AGPL lisanslı kodu geliştirip bir ağ hizmetinin parçası haline getiriyorsa, ilgili değişiklikleri kullanıcılarından saklayamaması hedeflenir.

Ancak GNU'nun kendi belgeleri de AGPL'nin SaaSS problemini çözmediğini özellikle belirtir.[^7] Bu ayrım önemlidir. AGPL kodun özgür kalmasını güvence altına almaya çalışır; hizmetin bütün toplumsal ve ekonomik ilişkisini dönüştürmez.

Kaynak kodu açık olabilir fakat sunucular özel mülkiyette kalabilir. Kullanıcı verileri şirket tarafından kontrol edilebilir. Platformun ekonomik modeli şirket tarafından belirlenebilir. Çalışanların üretim süreci üzerinde söz hakkı olmayabilir. Teknolojinin hangi amaç için geliştirileceği sermaye yatırım kararlarıyla belirlenebilir.

Bu nedenle AGPL özgür yazılımın hukuki alanını ağ hizmetlerine doğru genişletir, fakat mülkiyet sorununu kodun dışındaki bütün katmanlarda çözmez.

Bu, hareketin başarısızlığı değil, müdahale alanının sınırıdır.

## Mülkiyet sorunu kodda bitmiyor

Serinin ilk yazısında teknoloji üzerindeki denetimin yalnızca kaynak kodu düzeyinde ele alınamayacağını tartışmıştık. Özgür yazılım deneyimi şimdi bunun nedenini daha somut hale getiriyor.

Özgür yazılım yazılım üzerindeki dışlayıcı mülkiyet ilişkisine gerçek bir müdahalede bulunur. Copyleft, özgür hale getirilmiş kodun yeniden kapatılmasını sınırlandırır. Müşterek geliştirme pratikleri, karmaşık teknolojik üretimin tek bir özel şirketin kapalı hiyerarşisine mahkûm olmadığını gösterir.

Fakat özgür yazılımın başarısı aynı zamanda kendi sınırlarını görünür kılar.

Kod müşterek olabilirken üretim altyapısı özel kalabilir.

Bilgi özgürce paylaşılırken onun üzerinde yükselen hizmet sermayenin özel birikim alanına dönüşebilir.

Şirket, müşterek kodun geliştirme maliyetinden ve kolektif bilgi birikiminden yararlanırken müşteri ilişkisini, veriyi, altyapıyı ve gelir akışını kendi kontrolünde tutabilir.

Burada önemli bir ayrım ortaya çıkar. Mülkiyet yalnızca bir nesnenin hukuken kime ait olduğu sorusuna indirgenemez. Üretim araçlarının kim tarafından denetlendiği, emek sürecinin nasıl örgütlendiği, ortaya çıkan ürünün nasıl temellük edildiği ve üretimin hangi toplumsal amaçlara yöneltildiği de mülkiyet ilişkisinin parçalarıdır.

Marx'ın *Kapital*'de makine ve büyük sanayi üzerine çözümlemesi, tekniğin kapitalist üretim ilişkilerinin dışında nötr bir araç olmadığını; makinenin belirli toplumsal ilişkiler içerisinde sermayenin üretim ve emek üzerindeki egemenliğinin parçasına dönüşebildiğini gösterir. Marx ve Engels'in eserlerinin Türkçe arşivinde *Kapital*'in üç cildi de erişilebilir durumdadır.[^8]

Özgür yazılım bu açıdan ilginç bir tarihsel deneyim oluşturur. Üretimin belirli bir unsurunu —kodu ve teknik bilgiyi— özel dışlamanın dışına çıkarabilir. Fakat bu müşterek unsur kapitalist üretimin diğer katmanları tarafından çevrelenebilir ve özel birikim süreçlerine dahil edilebilir.

Bu yüzden “özgür yazılım kapitalizmin alternatifidir” demek de, “özgür yazılım kapitalizm tarafından tamamen yutulmuştur” demek de aynı ölçüde yetersizdir.

Daha doğru olan, özgür yazılımı **mülkiyet ilişkileri içerisindeki gerçek fakat sınırlı bir çatlak** olarak görmektir.

Bu çatlak önemlidir; çünkü özel ve dışlayıcı mülkiyetin karmaşık teknik üretimin zorunlu biçimi olmadığını gösterir. Bilgi ortaklaşa üretilebilir, paylaşılabilir ve yeniden geliştirilebilir. Kullanıcı teknik nesne karşısında yalnızca pasif tüketici olmak zorunda değildir.

Fakat aynı deneyim, bir üretim unsurunun müşterekleşmesinin üretim sisteminin bütününü müşterekleştirmeye yetmediğini de gösterir.

**Müşterek kod ile müşterek üretim sistemi aynı şey değildir.**

Özgür yazılımın en güçlü katkılarından biri belki de burada bulunur. Mülkiyet sorununu çözmez; onu teknik dünyanın merkezinde görünür hale getirir.

Bu nedenle serinin bundan sonraki adımı kodun kendisinden çok, kodun üzerinde yükseldiği maddi dünyaya yönelmek zorunda. Sunucular, veri merkezleri, işlemciler, telekomünikasyon ağları, enerji altyapısı ve bütün bunları üreten emek, dijital dünyanın görünmez maddi temelini oluşturuyor.

Özgür kodun hangi maddi üretim ilişkileri üzerinde çalıştığı sorusu, bizi özgür yazılımın sınırından teknolojik altyapının siyasal iktisadına götürüyor.

---


## Kaynakça ve ileri okuma

- GNU Projesi, [“Özgür Yazılım Nedir?”](https://www.gnu.org/philosophy/free-sw.tr.html). Dört temel özgürlük ve kullanıcının program üzerindeki denetimi.
- GNU Projesi, [“Copyleft Nedir?”](https://www.gnu.org/licenses/copyleft.tr.html). Değiştirilmiş ve yeniden dağıtılmış sürümlerin de özgür kalmasını sağlayan yöntem.
- Richard Stallman, [“Açık Kaynak, Özgür Yazılımın Özünü Gözden Kaçırıyor”](https://www.gnu.org/philosophy/open-source-misses-the-point.tr.html). Açık kaynak ile özgür yazılımın siyasal gerekçeleri arasındaki ayrım.
- GNU Projesi, [“Özgür ve Özgür Olmayan Yazılım Kategorileri”](https://www.gnu.org/philosophy/categories.tr.html). Lisans ve dağıtım kategorilerinin Türkçe açıklaması.
- Richard Stallman, [“Bu Sunucu Gerçekte Kime Hizmet Ediyor?”](https://www.gnu.org/philosophy/who-does-that-server-really-serve.tr.html). Ağ hizmetlerinde kullanıcının bilişimi üzerindeki denetimi.
- GNU Projesi, [“Neden GNU Affero GPL?”](https://www.gnu.org/licenses/why-affero-gpl.tr.html). Ağ üzerinden sunulan değiştirilmiş yazılımlarda kaynak koda erişim sorunu.
- GNU Projesi, [“Kendi Çalışmalarınız İçin Lisans Nasıl Seçilir?”](https://www.gnu.org/licenses/license-recommendations.tr.html). Özgür lisans seçimine ilişkin Türkçe kılavuz.
- GNU Projesi, [“GNU Bildirisi”](https://www.gnu.org/gnu/manifesto.tr.html). GNU hareketinin tarihsel ve siyasal programı.
- Nick Dyer-Witheford, [*Siber Marx: Yüksek Teknoloji Çağında Sınıf Mücadelesi*](https://www.kitapyurdu.com/kitap/siber-marx-yuksek-teknoloji-caginda-sinif-mucadelesi/58127.html), çev. Ali Çakıroğlu, Aykırı Yayınları, 2004.
- Nick Dyer-Witheford, Atle Mikkola Kjøsen ve James Steinhoff, [*Yapay Zekâ ve Kapitalizmin Geleceği: İnsandışı Bir Güç*](https://iletisim.com.tr/kitap/yapay-zeka-ve-kapitalizmin-gelecegi/10220), çev. Barış Cezar, İletişim Yayınları, 2022.
- Karl Marx ve Friedrich Engels, [Türkçe yapıtlar arşivi](https://www.marxists.org/turkce/m-e/index.htm). *Kapital* ve mülkiyet ilişkilerine ilişkin temel metinler.
- Yılmaz Alışkan, [“Dijital Medya, Fikri Mülkiyet Rejimi ve Özgür Açık Kaynak Yazılıma Eleştirel Bir Bakış”](https://dergipark.org.tr/tr/pub/erciyesiletisim/article/1434384). Dijital müşterekler, fikrî mülkiyet ve özgür yazılımın bilgi üretimindeki rolü üzerine Türkçe akademik makale.

[^1]: GNU Projesi, [“Özgür Yazılım Nedir?”](https://www.gnu.org/philosophy/free-sw.tr.html). Özgür yazılımın dört temel özgürlüğü ve kullanıcının program üzerindeki denetimi.

[^2]: GNU Projesi, [“Copyleft Nedir?”](https://www.gnu.org/licenses/copyleft.tr.html). Copyleft'in değiştirilmiş ve yeniden dağıtılmış sürümleri de özgür tutan işleyişi.

[^3]: Nick Dyer-Witheford, [*Siber Marx*](https://www.kitapyurdu.com/kitap/siber-marx-yuksek-teknoloji-caginda-sinif-mucadelesi/58127.html). Müşterek üretim, hacker emeği ve dijital teknolojilerin sınıfsal bağlamı.

[^4]: Nick Dyer-Witheford, [*Siber Marx*](https://www.kitapyurdu.com/kitap/siber-marx-yuksek-teknoloji-caginda-sinif-mucadelesi/58127.html). Bilgi ve iletişim teknolojilerinde sermaye-emek karşıtlığının yeni biçimleri.

[^5]: Richard Stallman, [“Açık Kaynak, Özgür Yazılımın Özünü Gözden Kaçırıyor”](https://www.gnu.org/philosophy/open-source-misses-the-point.tr.html). İki yaklaşım arasındaki değer ve amaç ayrımı.

[^6]: Richard Stallman, [“Bu Sunucu Gerçekte Kime Hizmet Ediyor?”](https://www.gnu.org/philosophy/who-does-that-server-really-serve.tr.html). “Yazılım Yerine Hizmet” ve kullanıcının bilişimi üzerindeki denetimi.

[^7]: GNU Projesi, [“Neden GNU Affero GPL?”](https://www.gnu.org/licenses/why-affero-gpl.tr.html). AGPL'nin ağ üzerinden kullanılan değiştirilmiş yazılımlara getirdiği kaynak kodu koşulu.

[^8]: Karl Marx, [Türkçe yapıtlar arşivi](https://www.marxists.org/turkce/m-e/index.htm), *Kapital*, Cilt I, “Makine ve Büyük Sanayi”.
