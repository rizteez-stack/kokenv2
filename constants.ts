import { Rank, Category, RankVisualData } from './types';
import React from 'react';

// FIX: Converted from JSX to React.createElement to be compatible with .ts files.
const DemirIcon: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { className, viewBox: "0 0 100 100", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M50 10 L90 50 L50 90 L10 50 Z", stroke: "currentColor", strokeWidth: "5" }))
);
// FIX: Converted from JSX to React.createElement to be compatible with .ts files.
const BronzIcon: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { className, viewBox: "0 0 100 100", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M20 20 H80 L50 80 Z", stroke: "currentColor", strokeWidth: "5" }))
);
// FIX: Converted from JSX to React.createElement to be compatible with .ts files.
const GümüşIcon: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { className, viewBox: "0 0 100 100", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement('path', { d: "M50 15 L85 85 H15 Z", stroke: "currentColor", strokeWidth: "5" }),
        React.createElement('path', { d: "M50 45 L70 75 H30 Z", stroke: "currentColor", strokeWidth: "4" })
    )
);
// FIX: Converted from JSX to React.createElement to be compatible with .ts files.
const AltınIcon: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { className, viewBox: "0 0 100 100", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, React.createElement('path', { d: "M50 5 L61.8 38.2 L98.5 43.5 L73.2 66.8 L80.9 99 L50 81 L19.1 99 L26.8 66.8 L1.5 43.5 L38.2 38.2 Z", stroke: "currentColor", strokeWidth: "4" }))
);
// FIX: Converted from JSX to React.createElement to be compatible with .ts files.
const PlatinIcon: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { className, viewBox: "0 0 100 100", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement('path', { d: "M10 30 L50 10 L90 30 L90 70 L50 90 L10 70 Z", stroke: "currentColor", strokeWidth: "5" }),
        React.createElement('path', { d: "M10 30 L50 50 L90 30 M50 90 V 50", stroke: "currentColor", strokeWidth: "3" })
    )
);
// FIX: Converted from JSX to React.createElement to be compatible with .ts files.
const ElmasIcon: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { className, viewBox: "0 0 100 100", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement('path', { d: "M50 5 L95 50 L50 95 L5 50 Z", stroke: "currentColor", strokeWidth: "5" }),
        React.createElement('path', { d: "M50 5 L75 50 L50 95 M50 5 L25 50 L50 95 M5 50 H95", stroke: "currentColor", strokeWidth: "2" })
    )
);
// FIX: Converted from JSX to React.createElement to be compatible with .ts files.
const UstalıkIcon: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { className, viewBox: "0 0 100 100", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement('path', { d: "M50 10 C 80 10, 90 40, 90 50 C 90 60, 80 90, 50 90 C 20 90, 10 60, 10 50 C 10 40, 20 10, 50 10 Z", stroke: "currentColor", strokeWidth: "5" }),
        React.createElement('circle', { cx: "50", cy: "50", r: "15", stroke: "currentColor", strokeWidth: "4" })
    )
);
// FIX: Converted from JSX to React.createElement to be compatible with .ts files.
const BüyükUstaIcon: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { className, viewBox: "0 0 100 100", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement('path', { d: "M20 10 H80 L90 50 L80 90 H20 L10 50 Z", stroke: "currentColor", strokeWidth: "5" }),
        React.createElement('path', { d: "M50 25 L65 50 L50 75 L35 50 Z", stroke: "currentColor", strokeWidth: "4" })
    )
);
// FIX: Converted from JSX to React.createElement to be compatible with .ts files.
const ChallengerIcon: React.FC<{ className?: string }> = ({ className }) => (
    React.createElement('svg', { className, viewBox: "0 0 100 100", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement('circle', { cx: "50", cy: "50", r: "45", stroke: "currentColor", strokeWidth: "5" }),
        React.createElement('path', { d: "M50 5 L50 95 M5 50 H95 M22 22 L78 78 M22 78 L78 22", stroke: "currentColor", strokeWidth: "3", strokeDasharray: "5 5" })
    )
);

export const RANK_VISUALS: Record<Rank, RankVisualData> = {
  [Rank.Demir]: { name: "Demir", Icon: DemirIcon, color: "text-gray-400", bgColor: "bg-gray-800", shadowColor: "shadow-gray-400" },
  [Rank.Bronz]: { name: "Bronz", Icon: BronzIcon, color: "text-orange-400", bgColor: "bg-orange-900", shadowColor: "shadow-orange-400" },
  [Rank.Gümüş]: { name: "Gümüş", Icon: GümüşIcon, color: "text-slate-300", bgColor: "bg-slate-700", shadowColor: "shadow-slate-300" },
  [Rank.Altın]: { name: "Altın", Icon: AltınIcon, color: "text-yellow-400", bgColor: "bg-yellow-800", shadowColor: "shadow-yellow-400" },
  [Rank.Platin]: { name: "Platin", Icon: PlatinIcon, color: "text-teal-300", bgColor: "bg-teal-800", shadowColor: "shadow-teal-300" },
  [Rank.Elmas]: { name: "Elmas", Icon: ElmasIcon, color: "text-cyan-400", bgColor: "bg-cyan-900", shadowColor: "shadow-cyan-400" },
  [Rank.Ustalık]: { name: "Ustalık", Icon: UstalıkIcon, color: "text-purple-400", bgColor: "bg-purple-900", shadowColor: "shadow-purple-400" },
  [Rank.BüyükUsta]: { name: "Büyük Usta", Icon: BüyükUstaIcon, color: "text-red-500", bgColor: "bg-red-900", shadowColor: "shadow-red-500" },
  [Rank.Challenger]: { name: "Challenger", Icon: ChallengerIcon, color: "text-fuchsia-500", bgColor: "bg-fuchsia-900", shadowColor: "shadow-fuchsia-500" },
};

export const CATEGORIES_DATA: Category[] = [
  {
    id: 'finans',
    name: 'FİNANS',
    ranks: [
      { name: 'Demir', tasks: [{id:'f-d-1', description:'Günlük harcama kaydı'}, {id:'f-d-2', description:'Haftalık borç listesi çıkarmak'}, {id:'f-d-3', description:'Aylık gelir-gider farkının listesini çıkarmak'}, {id:'f-d-4', description:'Acil durum kavramını öğrenmek'}] },
      { name: 'Bronz', tasks: [{id:'f-b-1', description:'Haftalık bütçe yapmak ve uygulamak'}, {id:'f-b-2', description:'Borç ödemelerini otomatikleştirmek'}, {id:'f-b-3', description:"Gelirin %5-%10'unu kenara koymayı denemek"}, {id:'f-b-4', description:'Giderleri kategorize etmek'}, {id:'f-b-5', description:'Kredi kartı borçlarını tamamen kapatmak'}] },
      { name: 'Gümüş', tasks: [{id:'f-g-1', description:'Acil durum fonu başlatmak'}, {id:'f-g-2', description:"Gelirin %15'ini kenara koymayı denemek"}, {id:'f-g-3', description:'Gereksiz abonelikleri iptal etmek'}, {id:'f-g-4', description:'Harcamaları ay sonunda gözden geçirmek'}, {id:'f-g-5', description:'İlk yatırım araçlarıyla tanışmaya başlamak'}] },
      { name: 'Altın', tasks: [{id:'f-a-1', description:'Acil durum fonunu daha iyi yönetmek'}, {id:'f-a-2', description:"Gelirin %25'ini birikime ayırmak"}, {id:'f-a-3', description:'Kısa vadeli hedefler için farklı bir banka hesabı açmak'}, {id:'f-a-4', description:'Düzenli yatırım yapmak'}, {id:'f-a-5', description:'Harcamalarımı analiz etmek ve optimize etmek'}] },
      { name: 'Platin', tasks: [{id:'f-p-1', description:'Yatırımı farklı araçlara bölmek'}, {id:'f-p-2', description:'Gelir artışı için ek kaynak yaratmak'}, {id:'f-p-3', description:'Yatırım kararlarında duygusal davranmamak'}, {id:'f-p-4', description:'Düzenli olarak finansal makale veya kitap okumak'}] },
      { name: 'Elmas', tasks: [{id:'f-e-1', description:"Gelirlerin %30'unu yatırımlara ayırmak"}, {id:'f-e-2', description:'Gelecek satın alımları için plan yapmak'}, {id:'f-e-3', description:'Vergi ve yasal mevzuatları öğrenmek ve avantajına kullanmak'}, {id:'f-e-4', description:'Pasif gelir kanallarını büyütmek'}, {id:'f-e-5', description:'Büyük finansal hedefler için yıllık plan yapmak'}] },
      { name: 'Ustalık', tasks: [{id:'f-u-1', description:'Yıllık gelir ve gider planını detaylı çıkarmak'}, {id:'f-u-2', description:'Uzun vadeli fonlara düzenli yatırımlar yapmak'}, {id:'f-u-3', description:'Harcamalara minimalist yaklaşımı benimsemek'}, {id:'f-u-4', description:'Finansal hedefleri net bir şekilde takip etmek'}] },
      { name: 'Büyük Usta', tasks: [{id:'f-bu-1', description:'Portföy çeşitliliğini uluslararası boyuta taşımak'}, {id:'f-bu-2', description:'Gelir kaynaklarını tamamen pasif hale getirmek'}, {id:'f-bu-3', description:'Finansal bilgi paylaşımını büyütmek'}, {id:'f-bu-4', description:'Yeni iş yatırımlarıyla büyüme fırsatlarını değerlendirmek'}, {id:'f-bu-5', description:'Risk yönetimini ve sigortayı profesyonel seviyede uygulamak'}] },
      { name: 'Challenger', tasks: [{id:'f-c-1', description:'Tüm harcamaları pasif gelirlerle karşılamak'}, {id:'f-c-2', description:'Yatırımları uluslararası düzeyde yönetmek'}, {id:'f-c-3', description:'Serveti sürdürülebilir kılmak.'}] },
    ]
  },
  {
    id: 'saglik',
    name: 'SAĞLIK',
    ranks: [
      { name: 'Demir', tasks: [{id:'s-d-1', description:'Günlük su tüketimini takip etmek'}, {id:'s-d-2', description:'Uyku düzenini kaydetmek'}, {id:'s-d-3', description:'Abur cuburu minumuma indirmek'}, {id:'s-d-4', description:'Haftalık kilo ölçümü yapmak'}] },
      { name: 'Bronz', tasks: [{id:'s-b-1', description:'Haftada 3 gün düzenli yürüyüş'}, {id:'s-b-2', description:'Günlük kalori ihtiyacını bilmek ve aşmamak'}, {id:'s-b-3', description:'Gazlı içecekleri tamamen bırakmak'}, {id:'s-b-4', description:'Uykuyu belirli bir düzene sokmak'}, {id:'s-b-5', description:'Basit esneme hareketleri eklemek'}] },
      { name: 'Gümüş', tasks: [{id:'s-g-1', description:'Haftada 4 gün spor yapmak'}, {id:'s-g-2', description:'Şeker tüketimini sınırlandırmak'}, {id:'s-g-3', description:'Aylık sağlık kontrolü yapmak'}] },
      { name: 'Altın', tasks: [{id:'s-a-1', description:'Haftada 4 gün spor yapmak'}, {id:'s-a-2', description:'Yemeklerde porsiyon kontrolü yapmak'}, {id:'s-a-3', description:'Günlük 15 dakika meditasyon'}] },
      { name: 'Platin', tasks: [{id:'s-p-1', description:'Haftada 5 gün egzersiz'}, {id:'s-p-2', description:'Alkol kullanımı sınırlandırma'}, {id:'s-p-3', description:'Uyku kalitesini optimize etmek'}] },
      { name: 'Elmas', tasks: [{id:'s-e-1', description:'Vücut ölçülerini düzenli aralıklarla ölçmek'}, {id:'s-e-2', description:'Düzenli esneklik ve denge egzersizleri yapmak'}, {id:'s-e-3', description:'Spor performansını ölçmek'}] },
      { name: 'Ustalık', tasks: [{id:'s-u-1', description:'Sporu rutinleştirmiş olmak'}, {id:'s-u-2', description:'Beslenmenin bilinçli ve sürdürülebilir olması'}, {id:'s-u-3', description:'Uyku spor stres üçlüsünde denge'}] },
      { name: 'Büyük Usta', tasks: [{id:'s-bu-1', description:'Spor programı kişisel olmalı'}, {id:'s-bu-2', description:'Uzun mesafe koşular'}, {id:'s-bu-3', description:'Spor etkinliklerine katılmak'}] },
      { name: 'Challenger', tasks: [{id:'s-c-1', description:'Sağlık ve spor olarak rol model olmak'}] },
    ]
  },
  {
    id: 'karakter',
    name: 'KARAKTER',
    ranks: [
        { name: 'Demir', tasks: [{id:'k-d-1', description:'Günde en az 1 tane yapılacak bir iş belirlemek'}, {id:'k-d-2', description:'Sabah kalkış saatlerini kaydetmek'}, {id:'k-d-3', description:'Zaman öldüren alışkanlıkları gözden geçirme'}, {id:'k-d-4', description:'Gün sonunda ne yaptığını not etme'}] },
        { name: 'Bronz', tasks: [{id:'k-b-1', description:'Sabah ve Akşam rutinini tanımlamak'}, {id:'k-b-2', description:'Günde en az 1 hedefi tamamlamak'}, {id:'k-b-3', description:'Haftada 1 günü planlamaya ayırmak'}, {id:'k-b-4', description:'Tembellik anlarını fark etmek ve kısa mola sonrası hedefe tekrar yönelmek'}, {id:'k-b-5', description:'Küçük sorumluluları zamanında yerine getirmek'}] },
        { name: 'Gümüş', tasks: [{id:'k-g-1', description:'Her gün yapılacak listesi ve tamamlananları işaretlemek'}, {id:'k-g-2', description:'Haftalık alışkanlık takibi yapmak'}, {id:'k-g-3', description:'Aylık hedef belirlemek ve raporlamak'}] },
        { name: 'Altın', tasks: [{id:'k-a-1', description:'Günde en az 2 saat derin çalışma'}, {id:'k-a-2', description:"Haftalık planın %90'ını uygulamak"}, {id:'k-a-3', description:'Gün sonunda günlük geri bildirim yazmak'}, {id:'k-a-4', description:'Telefon ekran süresini sınırlamak'}] },
        { name: 'Platin', tasks: [{id:'k-p-1', description:'Haftalık neleri doğru neleri yanlış yaptım listesi'}, {id:'k-p-2', description:'Sabahları erken uyanmak'}] },
        { name: 'Elmas', tasks: [{id:'k-e-1', description:"Haftalık ve aylık hedeflerin %95'ini tamamlamak"}, {id:'k-e-2', description:'Gereksiz kararları ortadan kaldırmak'}, {id:'k-e-3', description:'Kriz anlarında bile disiplini sürdürmek'}] },
        { name: 'Ustalık', tasks: [{id:'k-u-1', description:'Uzun vadeli hedeflerle günlük rutinler uyumlu olmalı'}, {id:'k-u-2', description:'Büyük projeler için net plan yapılmalı'}, {id:'k-u-3', description:'Kendini motive etmeye gerek kalmadan bile gerekeni yapabilmek'}] },
        { name: 'Büyük Usta', tasks: [{id:'k-bu-1', description:'Kendi sistemini sürekli iyileştirmek'}, {id:'k-bu-2', description:'Zamanı çok net yönetmek'}, {id:'k-bu-3', description:'Disiplinsiz ortamlarda bile kendi çizgini korumak'}] },
        { name: 'Challenger', tasks: [{id:'k-c-1', description:'Tüm rutinler otomatikleştirilmiş olmalı ve sapma olmamalı'}, {id:'k-c-2', description:'Kendi yaşam felsefesi ve hedefler doğrultusunda sürekli gelişim'}, {id:'k-c-3', description:'Zor şartlarda bile çizgiyi korumak'}] },
    ]
  },
  {
    id: 'dil',
    name: 'DİL',
    ranks: [
        { name: 'Demir', tasks: [{id:'d-d-1', description:'Her gün 5 kelime öğrenmeye çalışmak'}, {id:'d-d-2', description:'Basit selamlaşma kaliplarını günlük ifadeleri ezberlemek'}, {id:'d-d-3', description:'Sözlük defteri tutmak'}] },
        { name: 'Bronz', tasks: [{id:'d-b-1', description:'Her gün kısa cümleler yazmak'}, {id:'d-b-2', description:'Haftada 1 kez kısa konuşma pratiği yapmak'}, {id:'d-b-3', description:'Basit animasyonlar izlemek'}, {id:'d-b-4', description:'Gramerin temel yapılarını öğrenmek'}] },
        { name: 'Gümüş', tasks: [{id:'d-g-1', description:'Haftada 3 kez konuşma pratiği'}, {id:'d-g-2', description:'İngilizce günlük tutmak'}, {id:'d-g-3', description:'İngilizce alt yazılı film veya dizi izlemek'}, {id:'d-g-4', description:'Basit gramer yapılarını doğru kullanmak'}] },
        { name: 'Altın', tasks: [{id:'d-a-1', description:'İngilizce podcast dinlemek'}, {id:'d-a-2', description:'İngilizce haberler okumak'}] },
        { name: 'Platin', tasks: [{id:'d-p-1', description:'Uzun makale ve haberleri okuyup özetlemek'}, {id:'d-p-2', description:'İngilizce olarak günlük plan yapmak'}] },
        { name: 'Elmas', tasks: [{id:'d-e-1', description:'İngilizce not alma ve düşünme alışkanlığı'}, {id:'d-e-2', description:'Essay veya blog yazmak'}] },
        { name: 'Ustalık', tasks: [{id:'d-u-1', description:'İngilizceyle yaşamak'}, {id:'d-u-2', description:'Düzenli sunum ve konuşma yapmak'}, {id:'d-u-3', description:'İngilizce içerik üretmek'}] },
        { name: 'Büyük Usta', tasks: [{id:'d-bu-1', description:'Düşünceyi ve mizahı veya duyguyu İngilizce ifade etmeyi öğrenmek'}, {id:'d-bu-2', description:'Başka bir yabancı dile başlamak'}] },
        { name: 'Challenger', tasks: [{id:'d-c-1', description:'Kültürlerarası iletişimde uzmanlaşmak'}, {id:'d-c-2', description:'Diğer öğrenilecek dilde iyi bir seviyeye gelmek'}] },
    ]
  },
  {
    id: 'sosyal',
    name: 'SOSYAL BECERİ/NETWORK',
    ranks: [
        { name: 'Demir', tasks: [{id:'sb-d-1', description:'Sosyal ortamları gözlemle'}, {id:'sb-d-2', description:'Konuşmalarda göz teması kurmayı dene'}, {id:'sb-d-3', description:'Sosyal kaygıyı fark edip not almak'}] },
        { name: 'Bronz', tasks: [{id:'sb-b-1', description:'İnsanları aktif dinlemek ve söz kesmemek'}, {id:'sb-b-2', description:'Nerede ne konuşulacağını gözlemlemek'}, {id:'sb-b-3', description:'Basit sosyal rutinler geliştirmek'}] },
        { name: 'Gümüş', tasks: [{id:'sb-g-1', description:'Haftada 1 kez sosyal etkinliklere katılmak'}, {id:'sb-g-2', description:'Yeni insanlarla tanışmaya çalışmak'}, {id:'sb-g-3', description:'Sosyal ortamlarda kendini ifade etmeyi öğrenmek'}] },
        { name: 'Altın', tasks: [{id:'sb-a-1', description:'Yeni insanlarla tanışırken rahat olmak'}, {id:'sb-a-2', description:'Grup içinde fikir paylaşabilmek'}, {id:'sb-a-3', description:'İletişimde empati kurmayı denemek'}] },
        { name: 'Platin', tasks: [{id:'sb-p-1', description:'Grup sohbetlerinde liderlik yapmak'}, {id:'sb-p-2', description:'Network oluşturmak için etkinliklere katılmak'}, {id:'sb-p-3', description:'Hafta da en az 1 kişiyle tanışmak'}, {id:'sb-p-4', description:'Sosyal beceri kitapları okumak'}] },
        { name: 'Elmas', tasks: [{id:'sb-e-1', description:'Topluluklarda aktif görev almak'}, {id:'sb-e-2', description:'İnsanlarla uzun vadeli ilişki sürdürmeyi öğrenmek'}, {id:'sb-e-3', description:'Empatiyi ileri seviyeye taşımak'}, {id:'sb-e-4', description:'Çevreye pozitif enerji vermek'}] },
        { name: 'Ustalık', tasks: [{id:'sb-u-1', description:'Sosyal ortamlar organize etmek'}, {id:'sb-u-2', description:'İnsanları tanıştırarak çevre oluşturmak'}, {id:'sb-u-3', description:'İlişkilerde güvenilir ve destekleyici olmak'}, {id:'sb-u-4', description:'Çatışma çözme becerisini geliştirmek'}] },
        { name: 'Büyük Usta', tasks: [{id:'sb-bu-1', description:'Ulusal ve uluslarası sosyal etkinliklere katılmak'}, {id:'sb-bu-2', description:'Topluluklarda örnek alınan kişi olmak'}, {id:'sb-bu-3', description:'Sosyal ilişkileri stratejik yönetmek'}] },
        { name: 'Challenger', tasks: [{id:'sb-c-1', description:'Farklı milletlerden arkadaş ve iş çevresi edinmek'}, {id:'sb-c-2', description:'İnsanları birleştiren büyük organizasyonlar yapmak'}, {id:'sb-c-3', description:'İletişimde usta olmak'}] },
    ]
  },
  {
    id: 'bilgi',
    name: 'BİLGİ İŞLEYİŞİ',
    ranks: [
        { name: 'Demir', tasks: [{id:'bi-d-1', description:'Günde 15 dakika haber okumak'}, {id:'bi-d-2', description:'Konstanstasyon süresini ölçmek'}, {id:'bi-d-3', description:'Haftada 1 kez kendine soru sormak ve araşırmak'}] },
        { name: 'Bronz', tasks: [{id:'bi-b-1', description:'Günde 20 dakika haber okumak'}, {id:'bi-b-2', description:'Haftada 1 yeni konu araştırma'}] },
        { name: 'Gümüş', tasks: [{id:'bi-g-1', description:'Günde 25 dakika haber okumak'}, {id:'bi-g-2', description:'1 konuya odaklanarak bitirmek'}] },
        { name: 'Altın', tasks: [{id:'bi-a-1', description:'30 dakika haber okumak'}, {id:'bi-a-2', description:'Önemli haberleri not almak'}] },
        { name: 'Platin', tasks: [{id:'bi-p-1', description:'Kendi öğrenme metodunu oturtmak'}, {id:'bi-p-2', description:'Alanında en az 1 konuda derinleşmek'}] },
        { name: 'Elmas', tasks: [{id:'bi-e-1', description:'Alanında en az 2 konuda derinleşmek'}] },
        { name: 'Ustalık', tasks: [{id:'bi-u-1', description:'Öğrendiklerini içerik haline getirmek'}, {id:'bi-u-2', description:'Araştırmalara kendi raporlarını hazırlamak'}] },
        { name: 'Büyük Usta', tasks: [{id:'bi-bu-1', description:'Uzun vadeli öğrenme planı hazırlamak'}, {id:'bi-bu-2', description:'Birden fazla disiplinde bilgi sahibi olmak'}] },
        { name: 'Challenger', tasks: [{id:'bi-c-1', description:'Üretim ile öğrenmeyi entegre etmek'}] },
    ]
  },
  {
    id: 'teknik',
    name: 'TEKNİK BECERİ',
    ranks: [
        { name: 'Demir', tasks: [{id:'tb-d-1', description:'Mevcut işte temel görevlerini zamanında yapmak'}, {id:'tb-d-2', description:'Hataları not etmek ve tekrar etmemek'}, {id:'tb-d-3', description:'Basit iş disiplini oluşturmak'}] },
        { name: 'Bronz', tasks: [{id:'tb-b-1', description:'Basit iş projelerini kendi başına tamamlamak'}, {id:'tb-b-2', description:'Sorumluluklarını zamanında yerine getirmek'}] },
        { name: 'Gümüş', tasks: [{id:'tb-g-1', description:'Haftada 8-10 saat beceri geliştirmek için çalışmak'}, {id:'tb-g-2', description:'Kendi işini planlayıp uygulamak'}, {id:'tb-g-3', description:'Basit projeleri baştan sona tamamlamak'}] },
        { name: 'Altın', tasks: [{id:'tb-a-1', description:'Haftada 15 saat beceri geliştirmek için çalışmak'}, {id:'tb-a-2', description:'Portföy oluşturmak'}, {id:'tb-a-3', description:'Becerilerle ilgili topluluklara katılmak'}] },
        { name: 'Platin', tasks: [{id:'tb-p-1', description:'Orta ölçekli projeleri bağımsız bir şekilde yönetmek'}, {id:'tb-p-2', description:'İş piyasasında değer üretmeye başlamak'}, {id:'tb-p-3', description:'Hedef beceride derinleşmek'}] },
        { name: 'Elmas', tasks: [{id:'tb-e-1', description:'Büyük projelerde sorumluluk almak'}, {id:'tb-e-2', description:'Profesyonel iş-ürün teslimi yapmak'}, {id:'tb-e-3', description:'İleri düzey sertifikalar edinmek'}] },
        { name: 'Ustalık', tasks: [{id:'tb-u-1', description:'Projeleri yönetmek ve ekip koordinasyonu yapmak'}, {id:'tb-u-2', description:'Kendi uzmanlık alanında içerik üretmek'}, {id:'tb-u-3', description:'İşte veya serbest piyasada güvenilir bir marka olmak'}, {id:'tb-u-4', description:'Uluslarası standartlarda iş yapmak'}] },
        { name: 'Büyük Usta', tasks: [{id:'tb-bu-1', description:'Büyük ekipleri veya projeleri yönetebilecek seviyede olmak'}, {id:'tb-bu-2', description:'Yeni iş alanları yaratmak'}, {id:'tb-bu-3', description:'Kendi alanında yenilik geliştirmek'}] },
        { name: 'Challenger', tasks: [{id:'tb-c-1', description:'Alanında uluslarası seviyede olmak'}, {id:'tb-c-2', description:'Bir şirkete markaya ve büyük ölçekli projelere sahip olmak'}, {id:'tb-c-3', description:'Küresel ölçekte değer üretmek'}] },
    ]
  },
];