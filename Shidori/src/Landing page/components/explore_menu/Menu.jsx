import React, { useState } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import loggo from "./images/logoo.png"
// import misalpav from "./images/misalpav.jpg";
import VadaPav from "./images/vadapav.jpg";
import SabudanaVada from "./images/sabudanavada.jpg";
import KothimbirVadi from "./images/kothimbirvadi.jpg";
import ChickenTikka from "./images/chickentikka.jpg";
import BombilFry from "./images/bombilfry.jpg";
import TandooriPomfret from "./images/tandoori pomfret.jpg";
import PrawnsKoliwada from "./images/Prawns Koliwada.jpg";
// import PuranPoli from "./images/puranpoli.jpg";
import BharliVangi from "./images/Bharli Vangi.jpg";
import MasalaBhaat from "./images/Masala Bhaat.jpg";
import ZunkaBhakri from "./images/Zunka Bhakri.jpg";
import KolhapuriMutton from "./images/Kolhapuri Mutton.jpg";
import MalvaniFishCurry from "./images/Malvani Fish Curry.jpg";
import PrawnsCurry from "./images/Prawns Curry.jpg";
import KombdiVade from "./images/Kombdi Vade.jpg";
// import Modak from "./images/modak.jpg";
import Basundi from "./images/Basundi.jpg";
import Shrikhand from "./images/Shrikhand.jpg";
import Rasmalai from "./images/Rasmalai.jpg";
import PaneerTikka from "./images/Paneer Tikka.jpg";
import AlooTikki from "./images/Aloo Tikki.jpg";
import DahiBhalla from "./images/Dahi Bhalla.jpg";
import CholeTikki from "./images/Chole Tikki.jpg";
import TandooriChicken from "./images/Tandoori Chicken.jpg";
import AmritsariFish from "./images/Amritsari Fish.jpg";
import MuttonSeekhKebab from "./images/Mutton Seekh Kebab.jpg";
import ChickenPakora from "./images/Chicken Pakora.jpg";
import DalMakhani from "./images/Dal Makhani.jpg";
import RajmaChawal from "./images/Rajma Chawal.jpg";
import SarsonDaSaag from "./images/Sarson Da Saag.jpg";
import CholeBhature from "./images/Chole Bhature.jpg";
import ButterChicken from "./images/Butter Chicken.jpg";
import KeemaNaan from "./images/Keema Naan.jpg";
import MuttonRoganJosh from "./images/Mutton Rogan Josh.jpg";
import FishCurry from "./images/Fish Curry.jpg";
import Phirni from "./images/Phirni.jpg";
import GajarKaHalwa from "./images/Gajar Ka Halwa.jpg";
import Rabri from "./images/Rabri.jpg";
import Kheer from "./images/Kheer.jpg";
import PyaazKachori from "./images/Pyaaz Kachori.jpg";
import MirchiVada from "./images/Mirchi Vada.jpg";
import DalPakwan from "./images/Dal Pakwan.jpg";
import MoongDalKachori from "./images/Moong Dal Kachori.jpg";
import DalBaatiChurma from "./images/Dal Baati Churma.jpg";
import GatteKiSabzi from "./images/Gatte Ki Sabzi.jpg";
import KerSangri from "./images/Ker Sangri.jpg";
import PapadKiSabzi from "./images/Papad Ki Sabzi.jpg";
import LaalMaas from "./images/Laal Maas.jpg";
import MohanMaas from "./images/Mohan Maas.jpg";
import Malpua from "./images/Malpua.jpg";
import Ghevar from "./images/Ghevar.jpg";
import Balushahi from "./images/Balushahi.jpg";
import MawaKachori from "./images/Mawa Kachori.jpg";
import MeduVada from "./images/Medu Vada.jpg";
import BananaBajji from "./images/Banana Bajji.jpg";
import MasalaVada from "./images/Masala Vada.jpg";
import Paniyaram from "./images/Paniyaram.jpg";
import Chicken65 from "./images/Chicken 65.jpg";
import NethiliFry from "./images/Nethili Fry.jpg";
import KariSukka from "./images/Kari Sukka.jpg";
import MeenVaruval from "./images/Meen Varuval.jpg";
import SambarSadam from "./images/Sambar Sadam.jpg";
import LemonRice from "./images/Lemon Rice.jpg";
import VathaKuzhambu from "./images/Vatha Kuzhambu.jpg";
import Kootu from "./images/Kootu.jpg";
import ChettinadChickenCurry from "./images/Chettinad Chicken Curry.jpg";
import MuttonKuzhambu from "./images/Mutton Kuzhambu.jpg";
// import FishCurry from "./images/Fish Curry.jpg";
// import EralThokku from "./images/Eral Thokku.jpg";
import PaalPayasam from "./images/Paal Payasam.jpg";
import MysorePak from "./images/Mysore Pak.jpg";
import Kesari from "./images/Kesari.jpg";
import Jangiri from "./images/Jangiri.jpg";
import Beguni from "./images/Beguni.jpg";
import AlooKabli from "./images/Aloo Kabli.jpg";
import MocharChop from "./images/Mochar Chop.jpg";
import Ghugni from "./images/Ghugni.jpg";
import FishFry from "./images/Fish Fry.jpg";
import KoshaMangsho from "./images/Kosha Mangsho.jpg";
import PrawnCutlet from "./images/Prawn Cutlet.jpg";
import ChickenKabiraji from "./images/Chicken Kabiraji.jpg";
import Shukto from "./images/Shukto.jpg";
import ChholarDal from "./images/Chholar Dal.jpg";
import AluPosto from "./images/Alu Posto.jpg";
import LuchiCholarDal from "./images/Luchi Cholar Dal.jpg";
import MacherJhol from "./images/Macher Jhol.jpg";
import DoiMaach from "./images/Doi Maach.jpg";
import ChingriMalaiCurry from "./images/Chingri Malai Curry.jpg";
import MuttonCurry from "./images/Mutton Curry.jpg";
import Rasgulla from "./images/Rasgulla.jpg";
import MishtiDoi from "./images/Mishti Doi.jpg";
import Sandesh from "./images/Sandesh.jpg";
import ChhenaPoda from "./images/Chhena Poda.jpg";
import Dhokla from "./images/Dhokla.jpg";
import Khandvi from "./images/Khandvi.jpg";
import Fafda from "./images/Fafda.jpg";
import Handvo from "./images/Handvo.jpg";
import Undhiyu from "./images/Undhiyu.jpg";
import SevTamatar from "./images/Sev Tamatar.jpg";
import BajraRotla from "./images/Bajra Rotla.jpg";
import DalDhokli from "./images/Dal Dhokli.jpg";
// import Basundi from "./images/Basundi.jpg";
import Mohanthal from "./images/Mohanthal.jpg";
// import Ghughra from "./images/Ghughra.jpg";
// import Shrikhand from "./images/Shrikhand.jpg";
import BananaChips from "./images/Banana Chips.jpg";
// import UlliVada from "./images/Ulli Vada.jpg";
import ParippuVada from "./images/Parippu Vada.jpg";
import Pazhampori from "./images/Pazhampori.jpg";
import PrawnsFry from "./images/Prawns Fry.jpg";
import KeralaChickenFry from "./images/Fish Mappas.jpg";
import FishMappas from "./images/Fish Mappas.jpg";
import CrabRoast from "./images/Crab Roast.jpg";
import Avial from "./images/Avial.jpg";
import Olan from "./images/Olan.jpg";
import Erissery from "./images/Erissery.jpg";
import PuttuKadalaCurry from "./images/Puttu Kadala Curry.jpg";
import MalabarBiryani from "./images/Malabar Biryani.jpg";
import KarimeenPollichathu from "./images/Karimeen Pollichathu.jpg";
import ChickenStew from "./images/Chicken Stew.jpg";
import ErachiVarattiyathu from "./images/Erachi Varattiyathu.jpg";
import PaladaPayasam from "./images/Palada Payasam.jpg";
import Unniyappam from "./images/Unniyappam.jpg";
import ChakkaPradhaman from "./images/Chakka Pradhaman.jpg";
import ElaneerPudding from "./images/Elaneer Pudding.jpg";
import Punugulu from "./images/Punugulu.jpg";
import Garelu from "./images/Garelu.jpg";
import MirchiBajji from "./images/Mirchi Bajji.jpg";
import Uggani from "./images/Uggani.jpg";
import KodiVepudu from "./images/Kodi Vepudu.jpg";
import RoyyalaIguru from "./images/Royyala Iguru.jpg";
import NatuKodiPulusu from "./images/Natu Kodi Pulusu.jpg";
import ChepaVepudu from "./images/Chepa Vepudu.jpg";
import GuttiVankaya from "./images/Gutti Vankaya.jpg";
import Pesarattu from "./images/Pesarattu.jpg";
import TomatoPappu from "./images/Tomato Pappu.jpg";
import AvakayaAnnam from "./images/Avakaya Annam.jpg";
import AndhraChickenCurry from "./images/Andhra Chicken Curry.jpg";
import GonguraMutton from "./images/Gongura Mutton.jpg";
// import PrawnsCurry from "./images/Prawns Curry.jpg";
import FishPulusu from "./images/Fish Pulusu.jpg";
import Pootharekulu from "./images/Pootharekulu.jpg";
import Ariselu from "./images/Ariselu.jpg";
// import Bobbattu from "./imagesBobbattu.jpg/";
import RavaLaddu from "./images/Rava Laddu.jpg";
// import AlooTikki from "./images/Aloo Tikki.jpg";
import DahiPuri from "./images/Dahi Puri.jpg";
import BasketChaat from "./images/Basket Chaat.jpg";
// import Samosa from "./images/Samosa.jpg"; 
import KakoriKebab from "./images/Kakori Kebab.jpg";
import GaloutiKebab from "./images/Galouti Kebab.jpg";
import BotiKebab from "./images/Boti Kebab.jpg";
import ShamiKebab from "./images/Shami Kebab.jpg";
import BaatiChokha from "./images/Baati Chokha.jpg";
import MatarPaneer from "./images/Matar Paneer.jpg";
// import AlooRasedar from "./images/Aloo Rasedar.jpg'";
import Tehri from "./images/Tehri.jpg";
import Nihari from "./images/Nihari.jpg";
import MuttonKorma from "./images/Mutton Korma.jpg";
import MughlaiBiryani from "./images/Mughlai Biryani.jpg";
import TundeKebab from "./images/Tunde Kebab.jpg";
import MakhanMalai from "./images/Makhan Malai.jpg";
import Petha from "./images/Petha.jpg";
import Imarti from "./images/Imarti.jpg";
import ShahiTukda from "./images/Shahi Tukda.jpg";
import LittiChokha from"./images/Litti Chokha.jpg";
import SattuParatha from"./images/Sattu Paratha.jpg";
import DalPitha from"./images/Dal Pitha.jpg";
import ChanaGhugni from"./images/Chana Ghugni.jpg";
import BihariKebab from"./images/Bihari Kebab.jpg";
import TaashKabab from"./images/Taash Kabab.jpg";
import ChamparanMutton from"./images/Champaran Mutton.jpg";
import MachhliBharta from"./images/Machhli Bharta.jpg";
import DalBhat from"./images/Dal Bhat.jpg";
import BihariKadhi from"./images/Bihari Kadhi.jpg";
import AlooKachalu from"./images/Aloo Kachalu.jpg";
import ChanaDalPoori from"./images/Chana Dal Poori.jpg";
import MuttonHandi from"./images/Mutton Handi.jpg";
// import FishCurry from"./images/Fish Curry.jpg";
import BihariChickenMasala from"./images/Bihari Chicken Masala.jpg";
import MachhliJhor from"./images/Machhli Jhor.jpg";
import Thekua from "./images/Thekua.jpg";
import Khaja from"./images/Khaja.jpg";
// import Balushahi from"./images/Balushahi.jpg";
import MakhanaKheer from"./images/Makhana Kheer.jpg";
import MaddurVada from"./images/Maddur Vada.jpg";
import NeerDosa from"./images/Neer Dosa.jpg";
import BisiBeleBath from"./images/Bisi Bele Bath.jpg";
import Chakli from"./images/Chakli.jpg";
import KoliSaaru from"./images/Koli Saaru.jpg";
import MangaloreanChickenSukka from"./images/Mangalorean Chicken Sukka.jpg";
import RavaFriedFish from"./images/Rava Fried Fish.jpg";
import ChickenGheeRoast from"./images/Chicken Ghee Roast.jpg";
import AkkiRoti from"./images/Akki Roti.jpg";
import BenneDosa from"./images/Benne Dosa.jpg";
import RagiMudde from"./images/Ragi Mudde.jpg";
import VegetableSagu from"./images/Vegetable Sagu.jpg";
import MuttonSaaru from"./images/Mutton Saaru.jpg";
import FishPulimunchi from"./images/Fish Pulimunchi.jpg";
import PorkBafat from "./images/Pork Bafat.jpg";
import ChickenSukka from "./images/Chicken Sukka.jpg";
// import MysorePak from "./images/Mysore Pak.jpg";
import Obbattu from "./images/Obbattu.jpg";
import KesariBath from "./images/Kesari Bath.jpg";
import RavaLadoo from "./images/Rava Ladoo.jpg";
import PohaJalebi from "./images/Poha Jalebi.jpg";
import BhutteKaKees from "./images/Bhutte Ka Kees.jpg";
import DalBafla from "./images/Dal Bafla.jpg"; 
import Kachori from "./images/Kachori.jpg";
import SeekhKebab from "./images/Seekh Kebab.jpg";
import MuttonShamiKebab from "./images/Mutton Shami Kebab.jpg";
import KeemaSamosa from "./images/Keema Samosa.jpg";
// import ChickenPakora from "./images/Chicken Pakora.jpg";
import BhopaliGoshtKorma from "./images/Bhopali Gosht Korma.jpg";
import AlooPalak from "./images/Aloo Palak.jpg";
import SabudanaKhichdi from "./images/Sabudana Khichdi.jpg";
import DalPaniya from "./images/Dal Paniya.jpg";
import RoganJosh from "./images/Rogan Josh.jpg";
import BhopaliChickenKorma from "./images/Bhopali Chicken Korma.jpg";
// import MuttonKorma from "./images/Mutton Korma.jpg";
// import FishCurry from "./images/Fish Curry.jpg";
import MawaBati from "./images/Mawa Bati.jpg";
// import ShahiTukda from "./images/Shahi Tukda.jpg";
import Jalebi from "./images/Jalebi.jpg";
// import Malpua from "./images/Malpua.jpg";
import BesanMasalaRoti from "./images/Besan Masala Roti.jpg";
import BajraKhichdi from "./images/Bajra Khichdi.jpg";
import KachriKiSabzi from "./images/Kachri Ki Sabzi.jpg";
import MixedDalPakora from "./images/Mixed Dal Pakora.jpg";
import MuttonTandoori from "./images/Mutton Tandoori.jpg";
import ChickenSeekhKebab from "./images/Chicken Seekh Kebab.jpg";
// import FishFry from "./images/Fish Fry.jpg";
import KeemaParatha from "./images/Keema Paratha.jpg";
import HaraDhaniaCholia from "./images/Hara Dhania Cholia.jpg";
import KadhiPakora from "./images/Kadhi Pakora.jpg";
import AlooGobhi from "./images/Aloo Gobhi.jpg";
import MixedDal from "./images/Mixed Dal.jpg";
import HaryanviMuttonCurry from "./images/Haryanvi Mutton Curry.jpg";
import ChickenCurry from "./images/Chicken Curry.jpg";
import KeemaKaleji from "./images/Keema Kaleji.jpg";
import DesiMurga from "./images/Desi Murga.jpg";
// import Ghevar from "./images/Ghevar.jpg";
import BaluShahi from "./images/Balu Shahi.jpg";
import MeetheChawal from "./images/Meethe Chawal.jpg";
// import Kheer from "./images/Kheer.jpg";
import Dalma from "./images/Dalma.jpg";
// import ChhenaPoda from "./images/Chhena Poda.jpg";
import Santula from "./images/Santula.jpg";
import PakhalBhata from "./images/Pakhal Bhata.jpg";
import MachaGhanta from "./images/Macha Ghanta.jpg";
import ChingudiMalai from "./images/Chingudi Malai.jpg";
// import MuttonCurry from "./images/Mutton Curry.jpg";
// import FishFry from "./images/Fish Fry.jpg";
import Besara from "./images/Besara.jpg";
import Kanika from "./images/Kanika.jpg";
import ChhatuRai from "./images/Chhatu Rai.jpg";
import KadaliManjaRai from "./images/Kadali Manja Rai.jpg";
import MachaJhola from "./images/Macha Jhola.jpg";
import DalmaMutton from "./images/Dalma Mutton.jpg";
import PrawnCurry from "./images/Prawn Curry.jpg";
import CrabCurry from "./images/Crab Curry.jpg";
import Rasagola from "./images/Rasagola.jpg";
// import ChhenaPoda from "./images/Chhena Poda.jpg";
import KhirSagar from "./images/Khir Sagar.jpg";
import ArisaPitha from "./images/Arisa Pitha.jpg";
import AlooPitika from "./images/Aloo Pitika.jpg";
import XaakBhaji from "./images/Xaak Bhaji.jpg";
import BilahiMaas from "./images/Bilahi Maas.jpg";   
import Khar from "./images/Khar.jpg"; 
import MasorTenga from "./images/Masor Tenga.jpg"; 
import ChickenwithBambooShoot from "./images/Chicken with Bamboo Shoot.jpg"; 
import PorkBharta from "./images/Pork Bharta.jpg"; 
import DuckFry from "./images/Duck Fry.jpg"; 
import BhaatwithDal from "./images/Bhaat with Dal.jpg"; 
import AluBengenaPitika from "./images/Alu Bengena Pitika.jpg"; 
import BlackDal from "./images/Black Dal.jpg"; 
import LaiXaak from "./images/Lai Xaak.jpg"; 
import AssameseFishCurry from "./images/Assamese Fish Curry.jpg"; 
import PorkwithBambooShoot from "./images/Pork with Bamboo Shoot.jpg"; 
import DuckCurry from "./images/Duck Curry.jpg"; 
import ChickenXak from "./images/Chicken Xak.jpg"; 
import Pitha from "./images/Pitha.jpg";
import KomalChaul from "./images/Komal Chaul.jpg";
import Jolpan from "./images/Jolpan.jpg";
import NarikolLaru from "./images/Narikol Laru.jpg";
import ChanaSamosa from "./images/Chana Samosa.jpg";
import Farra from "./images/Farra.jpg";
import Aamat from "./images/Aamat.jpg";
import Cheela from "./images/Cheela.jpg";
import MuttonSukha from "./images/Mutton Sukha.jpg";
import ChhattisgarhiFishFry from "./images/Chhattisgarhi Fish Fry.jpg";
// import PorkBharta from "./images/Pork Bharta.jpg";
import ChickenBharta from "./images/Chicken Bharta.jpg";
import Bafauri from "./images/Bafauri.jpg";
import DubkiKadhi from "./images/Dubki Kadhi.jpg"; 
import ChouselaRoti from "./images/Chousela Roti.jpg";
import BoreBaasi from "./images/Bore Baasi.jpg";
import RedAntChutneywithRice from "./images/Red Ant Chutney with Rice.jpg";
// import MuttonCurry from "./images/Mutton Curry.jpg";
import PayaSoup from "./images/Paya Soup.jpg";
import ChickenMasala from "./images/Chicken Masala.jpg";
import Khurma from "./images/Khurma.jpg";
import Dehrori from "./images/Dehrori.jpg";
import Gulgula from "./images/Gulgula.jpg";
import Tilgur from "./images/Tilgur.jpg";
// import Thekua from "./images/Thekua.jpg";
import Dhuska from "./images/Dhuska.jpg";
import Pittha from "./images/Pittha.jpg";
import Rugra from "./images/Rugra.jpg";
import MuttonKebab from "./images/Mutton Kebab.jpg";
import JharkhandiChickenFry from "./images/Jharkhandi Chicken Fry.jpg";
// import FishFry from "./images/Fish Fry.jpg";
import BhunaMutton from "./images/Bhuna Mutton.jpg";
// import ChanaGhugni from "./images/Chana Ghugni.jpg";
import AlooChokha from "./images/Aloo Chokha.jpg";
import HandiaRice from "./images/Handia Rice.jpg";
// import DalPitha from "./images/Dal Pitha.jpg";
// import MuttonCurry from "./images/Mutton Curry.jpg";
import DesiChickenCurry from "./images/Desi Chicken Curry.jpg";
// import FishCurry from "./images/Fish Curry.jpg";
import PorkCurry from "./images/Pork Curry.jpg";
// import Malpua from "./images/Malpua.jpg";
import Arsa from "./images/Arsa.jpg";
import KhusKhusKheer from "./images/Khus Khus Kheer.jpg";
import Tilkut from "./images/Tilkut.jpg";
import Kanghou from "./images/Kanghou.jpg";
import TanNap from "./images/Tan Nap.jpg";
import KelliChana from "./images/Kelli Chana.jpg";
import Paknam from "./images/Paknam.jpg";
import Eromba from "./images/Eromba.jpg";
import NgaAtaobaThongba from "./images/Nga Ataoba Thongba.jpg";
import Ooti from "./images/Ooti.jpg";
import NagaPorkFry from "./images/Naga Pork Fry.jpg";
import Chamthong from "./images/Chamthong.jpg";
import MorokMetpa from "./images/Morok Metpa.jpg";
import Kangsoi from "./images/Kangsoi.jpg";
import Kanglayen from "./images/Kanglayen.jpg";
import NgariCurry from "./images/Ngari Curry.jpg";
import SmokedPorkCurry from "./images/Smoked Pork Curry.jpg";
import ChickenThongba from "./images/Chicken Thongba.jpg";
import NgaThongba from "./images/Nga Thongba.jpg";
import ChakHaoKheer from "./images/Chak-Hao Kheer.jpg";
import NgaAtoiba from "./images/Nga Atoiba.jpg";
import KheerKanghou from "./images/Kheer Kanghou.jpg";
import Kabok from "./images/Kabok.jpg";
import Bai from "./images/Bai.jpg";
import Sanpiau from "./images/Sanpiau.jpg";
import Bekang from "./images/Bekang.jpg";
import Chhangban from "./images/Chhangban.jpg";
import PorkBambooShoot from "./images/Pork Bamboo Shoot.jpg";
import ArsaBuhchiar from "./images/Arsa Buhchiar.jpg";
import VawksaRep from "./images/Vawksa Rep.jpg";
import Sawhchiar from "./images/Sawhchiar.jpg";
import MisaMachPoora from "./images/Misa Mach Poora.jpg"
import ChhumHan from "./images/Chhum Han.jpg";
import HmarchaRawt from "./images/Hmarcha Rawt.jpg";
import BambooShootCurry from "./images/Bamboo Shoot Curry.jpg";
import SmokedPork from "./images/Smoked Pork.jpg";
import ChickenwithMustardLeaves from "./images/Chicken with Mustard Leaves.jpg";
import MizoDal from "./images/Mizo Dal.jpg";
import MizoBai from "./images/Mizo Bai.jpg";
import RiceCake from "./images/Rice Cake.jpg";
import SawhchiarPudding from "./images/Sawhchiar Pudding.jpg";
import ZuTeaKheer from "./images/Zu Tea Kheer.jpg";
import ChhangbanWrap from "./images/Chhangban Wrap.jpg";
import Thukpa from "./images/Thukpa.jpg";
import GyapaKhazi from "./images/Gyapa Khazi.jpg";
import Khura from "./images/Khura.jpg";
import RiceBeerPakoda from "./images/Rice Beer Pakoda.jpg";
import MithunMeatFry from "./images/Mithun Meat Fry.jpg";
import ChickenBambooShoot from "./images/Chicken Bamboo Shoot.jpg";
// import PorkBharta from "./images/Pork Bharta.jpg";
import FishTenga from "./images/Fish Tenga.jpg";
import RicewithLukter from "./images/Rice with Lukter.jpg";
import ChuraSabji from "./images/Chura Sabji.jpg";
import BoiledVegetableswithBambooShoot from "./images/Boiled Vegetables with Bamboo Shoot.jpg";
import Zan from "./images/Zan.jpg";
import Pasa from "./images/Pasa.jpg";
import SmokedPorkwithBambooShoot from "./images/Smoked Pork with Bamboo Shoot.jpg";
import YakMeatCurry from "./images/Yak Meat Curry.jpg";
import ChickenThukpa from "./images/Chicken Thukpa.jpg";
import Khapse from "./images/Khapse.jpg";
// import RiceCake from "./images/Rice Cake.jpg";
import SweetCornPudding from "./images/Sweet Corn Pudding.jpg";
import LocalHoneyDumplings from "./images/Local Honey Dumplings.jpg";
import PotatoChops from "./images/Potato Chops.jpg";
import BebincaRolls from "./images/Bebinca Rolls.jpg";
import PaneerRavaFry from "./images/Paneer Rava Fry.jpg";
import Kismur from "./images/Kismur.jpg";
import GoanPrawnRavaFry from "./images/Goan Prawn Rava Fry.jpg";
import FishRecheado from "./images/Fish Recheado.jpg";
import ChickenCafreal from "./images/Chicken Cafreal.jpg";
import Sukem from "./images/Sukem.jpg";
import GoanPulao from "./images/Goan Pulao.jpg";
// import FishRecheado from "./images/Fish Recheado.jpg";
// import ChickenCafreal from "./images/Chicken Cafreal.jpg";
// import Sukem from "./images/Sukem.jpg";
// import GoanPulao from "./images/Goan Pulao.jpg";
import ChanaDoce from "./images/Chana Doce.jpg";
import BhajiPav from "./images/Bhaji Pav.jpg";
import Khatkhate from "./images/Khatkhate.jpg";
import GoanFishCurry from "./images/Goan Fish Curry.jpg";
import PorkVindaloo from "./images/Pork Vindaloo.jpg";
import Xacuti from "./images/Xacuti.jpg";
import Sorpotel from "./images/Sorpotel.jpg";
import Bebinca from "./images/Bebinca.jpg";
import Dodol from "./images/Dodol.jpg";
import Serradura from "./images/Serradura.jpg";
// import Bebinca from "./images/Coconut Cake.jpg";
import CoconutCake from "./images/Coconut Cake.jpg";
import Siddu from "./images/Siddu.jpg";
import ChanaMadra from "./images/Chana Madra.jpg";
import SepuVadi from "./images/Sepu Vadi.jpg";
import Babru from "./images/Babru.jpg";
import ChickenAnardana from "./images/Chicken Anardana.jpg";
import TudkiyaBhath from "./images/Tudkiya Bhath.jpg";
import HimachaliMuttonRara from "./images/Himachali Mutton Rara.jpg";
import KulluTroutFish from "./images/Kullu Trout Fish.jpg";
import ChanaDalPalak from "./images/Chana Dal Palak.jpg";
import AlooPalda from "./images/Aloo Palda.jpg";
import MaharashtrianKadhi from "./images/Maharashtrian Kadhi.jpg";
import PahariRajma from "./images/Pahari Rajma.jpg";
import ChhaGosht from "./images/Chha Gosht.jpg";
import PahariChickenCurry from "./images/Pahari Chicken Curry.jpg";
// import MuttonRara from "./images/Mutton Rara";
import KhattaMeat from "./images/Khatta Meat.jpg";
import Mittha from "./images/Mittha.jpg";
import Akte from "./images/Akte.jpg";
import Gulgule from "./images/Gulgule.jpg";
import SiduwithHoney from "./images/Sidu with Honey.jpg";
import JadohVeg from "./images/Jadoh Veg.jpg";
import Dohneiiong from "./images/Dohneiiong.jpg";
import Tungrymbai from "./images/Tungrymbai.jpg";
import Pumaloi from "./images/Pumaloi.jpg";
import Jadoh from "./images/Jadoh.jpg";
import DohKhlieh from "./images/Doh Khlieh.jpg";
import Dohjem from "./images/Dohjem.jpg";
// import SmokedPork from "./images/Smoked Pork.jpg";
import RicewithTungrymbai from "./images/Rice with Tungrymbai.jpg";
import MeghalayaKadhi from "./images/Meghalaya Kadhi.jpg";
import Pukhlein from "./images/Pukhlein.jpg";
import Kappa from "./images/Kappa.jpg";
import MeghalayaPorkCurry from "./images/Meghalaya Pork Curry.jpg";
import ChickenTungtap from "./images/Chicken Tungtap.jpg";
import FishTungrymbai from "./images/Fish Tungrymbai.jpg";
import DohsyiarChicken from "./images/Dohsyiar Chicken.jpg";
import SakinGata from "./images/Sakin Gata.jpg";
// import Pukhlein from "./images/Pukhlein.jpg";
import RicePudding from "./images/Rice Pudding.jpg";
import PumaloiSweet from "./images/Pumaloi Sweet.jpg";

const dishes = {
    Maharashtra: [
        // Veg Starters
        // { name: 'Misal Pav', price: 50, ratings: 4.6, type: 'Veg Starters', image: require('../assets/misalpav.jpg') }, //wrong
        // { name: 'Misal Pav', price: 50, ratings: 4.6, type: 'Veg Starters', image: misalpav }, //right
        { name: 'Vada Pav', price: 30, ratings: 4.5, type: 'Veg Starters', image: VadaPav },
        { name: 'Sabudana Vada', price: 40, ratings: 4.7, type: 'Veg Starters', image: SabudanaVada },
        { name: 'Kothimbir Vadi', price: 35, ratings: 4.6, type: 'Veg Starters', image: KothimbirVadi },
    
        // Non-Veg Starters
        { name: 'Chicken Tikka', price: 200, ratings: 4.5, type: 'Non-Veg Starters', image: ChickenTikka },
        { name: 'Bombil Fry', price: 180, ratings: 4.7, type: 'Non-Veg Starters', image: BombilFry },
        { name: 'Tandoori Pomfret', price: 250, ratings: 4.6, type: 'Non-Veg Starters', image: TandooriPomfret },
        { name: 'Prawns Koliwada', price: 230, ratings: 4.7, type: 'Non-Veg Starters', image: PrawnsKoliwada },
    
        // Veg Main Course
        // { name: 'Puran Poli', price: 40, ratings: 4.8, type: 'Veg Main Course', image: PuranPoli  },
        { name: 'Bharli Vangi', price: 70, ratings: 4.6, type: 'Veg Main Course', image: BharliVangi },
        { name: 'Masala Bhaat', price: 60, ratings: 4.5, type: 'Veg Main Course', image: MasalaBhaat },
        { name: 'Zunka Bhakri', price: 50, ratings: 4.7, type: 'Veg Main Course', image: ZunkaBhakri },
    
        // Non-Veg Main Course
        { name: 'Kolhapuri Mutton', price: 300, ratings: 4.6, type: 'Non-Veg Main Course', image: KolhapuriMutton },
        { name: 'Malvani Fish Curry', price: 280, ratings: 4.7, type: 'Non-Veg Main Course', image: MalvaniFishCurry },
        { name: 'Prawns Curry', price: 250, ratings: 4.8, type: 'Non-Veg Main Course', image: PrawnsCurry },
        { name: 'Kombdi Vade', price: 270, ratings: 4.7, type: 'Non-Veg Main Course', image: KombdiVade },
    
        // Desserts
        // { name: 'Modak', price: 90, ratings: 4.8, type: 'Desserts', image: Modak },
        { name: 'Basundi', price: 110, ratings: 4.7, type: 'Desserts', image: Basundi },
        { name: 'Shrikhand', price: 120, ratings: 4.6, type: 'Desserts', image: Shrikhand },
        { name: 'Rasmalai', price: 40, ratings: 4.9, type: 'Desserts', image: Rasmalai },
    ],
    Punjab: [
        // Veg Starters
        { name: 'Paneer Tikka', price: 150, ratings: 4.8, type: 'Veg Starters', image: PaneerTikka },
        { name: 'Aloo Tikki', price: 50, ratings: 4.6, type: 'Veg Starters', image: AlooTikki },
        { name: 'Dahi Bhalla', price: 60, ratings: 4.7, type: 'Veg Starters', image: DahiBhalla },
        { name: 'Chole Tikki', price: 70, ratings: 4.5, type: 'Veg Starters', image: CholeTikki },
    
        // Non-Veg Starters
        { name: 'Tandoori Chicken', price: 300, ratings: 4.7, type: 'Non-Veg Starters', image: TandooriChicken },
        { name: 'Amritsari Fish', price: 250, ratings: 4.8, type: 'Non-Veg Starters', image: AmritsariFish },
        { name: 'Mutton Seekh Kebab', price: 280, ratings: 4.6, type: 'Non-Veg Starters', image: MuttonSeekhKebab },
        { name: 'Chicken Pakora', price: 180, ratings: 4.7, type: 'Non-Veg Starters', image: ChickenPakora },
    
        // Veg Main Course
        { name: 'Dal Makhani', price: 180, ratings: 4.8, type: 'Veg Main Course', image: DalMakhani },
        { name: 'Rajma Chawal', price: 130, ratings: 4.7, type: 'Veg Main Course', image: RajmaChawal },
        { name: 'Sarson Da Saag', price: 160, ratings: 4.9, type: 'Veg Main Course', image: SarsonDaSaag },
        { name: 'Chole Bhature', price: 120, ratings: 4.7, type: 'Veg Main Course', image: CholeBhature },
    
        // Non-Veg Main Course
        { name: 'Butter Chicken', price: 280, ratings: 4.9, type: 'Non-Veg Main Course', image: ButterChicken },
        { name: 'Keema Naan', price: 200, ratings: 4.6, type: 'Non-Veg Main Course', image: KeemaNaan },
        { name: 'Mutton Rogan Josh', price: 320, ratings: 4.7, type: 'Non-Veg Main Course', image: MuttonRoganJosh },
        { name: 'Fish Curry', price: 250, ratings: 4.8, type: 'Non-Veg Main Course', image: FishCurry },
    
        // Desserts
        { name: 'Phirni', price: 110, ratings: 4.9, type: 'Desserts', image: Phirni },
        { name: 'Gajar Ka Halwa', price: 140, ratings: 4.8, type: 'Desserts', image: GajarKaHalwa },
        { name: 'Rabri', price: 100, ratings: 4.7, type: 'Desserts', image: Rabri },
        { name: 'Kheer', price: 120, ratings: 4.8, type: 'Desserts', image: Kheer },
    ],
    Rajasthan: [
        // Veg Starters
        { name: 'Pyaaz Kachori', price: 50, ratings: 4.6, type: 'Veg Starters', image: PyaazKachori },
        { name: 'Mirchi Vada', price: 40, ratings: 4.5, type: 'Veg Starters', image: MirchiVada },
        { name: 'Dal Pakwan', price: 70, ratings: 4.7, type: 'Veg Starters', image: DalPakwan },
        { name: 'Moong Dal Kachori', price: 50, ratings: 4.6, type: 'Veg Starters', image: MoongDalKachori },
    
        // Veg Main Course
        { name: 'Dal Baati Churma', price: 120, ratings: 4.9, type: 'Veg Main Course', image: DalBaatiChurma },
        { name: 'Gatte Ki Sabzi', price: 100, ratings: 4.7, type: 'Veg Main Course', image: GatteKiSabzi },
        { name: 'Ker Sangri', price: 200, ratings: 4.6, type: 'Veg Main Course', image: KerSangri },
        { name: 'Papad Ki Sabzi', price: 90, ratings: 4.5, type: 'Veg Main Course', image: PapadKiSabzi },
    
        // Non-Veg Main Course
        { name: 'Laal Maas', price: 350, ratings: 4.8, type: 'Non-Veg Main Course', image: LaalMaas },
        { name: 'Mohan Maas', price: 320, ratings: 4.7, type: 'Non-Veg Main Course', image: MohanMaas },
    
        // Desserts
        { name: 'Malpua', price: 70, ratings: 4.9, type: 'Desserts', image: Malpua },
        { name: 'Ghevar', price: 90, ratings: 4.9, type: 'Desserts', image: Ghevar },
        { name: 'Balushahi', price: 80, ratings: 4.7, type: 'Desserts', image: Balushahi },
        { name: 'Mawa Kachori', price: 100, ratings: 4.8, type: 'Desserts', image: MawaKachori },
    ],
    TamilNadu: [
        // Veg Starters
        { name: 'Medu Vada', price: 40, ratings: 4.7, type: 'Veg Starters', image: MeduVada },
        { name: 'Banana Bajji', price: 30, ratings: 4.6, type: 'Veg Starters', image: BananaBajji },
        { name: 'Masala Vada', price: 35, ratings: 4.5, type: 'Veg Starters', image: MasalaVada },
        { name: 'Paniyaram', price: 50, ratings: 4.6, type: 'Veg Starters', image: Paniyaram },
    
        // Non-Veg Starters
        { name: 'Chicken 65', price: 180, ratings: 4.8, type: 'Non-Veg Starters', image: Chicken65 },
        { name: 'Nethili Fry', price: 200, ratings: 4.7, type: 'Non-Veg Starters', image: NethiliFry },
        { name: 'Kari Sukka', price: 220, ratings: 4.6, type: 'Non-Veg Starters', image: KariSukka },
        { name: 'Meen Varuval', price: 250, ratings: 4.7, type: 'Non-Veg Starters', image: MeenVaruval },
    
        // Veg Main Course
        { name: 'Sambar Sadam', price: 80, ratings: 4.8, type: 'Veg Main Course', image: SambarSadam },
        { name: 'Lemon Rice', price: 60, ratings: 4.6, type: 'Veg Main Course', image: LemonRice },
        { name: 'Vatha Kuzhambu', price: 90, ratings: 4.5, type: 'Veg Main Course', image: VathaKuzhambu },
        { name: 'Kootu', price: 70, ratings: 4.7, type: 'Veg Main Course', image: Kootu },
    
        // Non-Veg Main Course
        { name: 'Chettinad Chicken Curry', price: 280, ratings: 4.9, type: 'Non-Veg Main Course', image: ChettinadChickenCurry },
        { name: 'Mutton Kuzhambu', price: 300, ratings: 4.7, type: 'Non-Veg Main Course', image: MuttonKuzhambu },
        { name: 'Fish Curry', price: 250, ratings: 4.8, type: 'Non-Veg Main Course', image: FishCurry },
        // { name: 'Eral Thokku', price: 270, ratings: 4.6, type: 'Non-Veg Main Course', image: EralThokku },
    
        // Desserts
        { name: 'Paal Payasam', price: 100, ratings: 4.9, type: 'Desserts', image: PaalPayasam },
        { name: 'Mysore Pak', price: 120, ratings: 4.8, type: 'Desserts', image: MysorePak },
        { name: 'Kesari', price: 80, ratings: 4.7, type: 'Desserts', image: Kesari },
        { name: 'Jangiri', price: 90, ratings: 4.8, type: 'Desserts', image: Jangiri }
    ],    
    WestBengal: [
        // Veg Starters
        { name: 'Beguni', price: 30, ratings: 4.6, type: 'Veg Starters', image: Beguni },
        { name: 'Aloo Kabli', price: 40, ratings: 4.5, type: 'Veg Starters', image: AlooKabli },
        { name: 'Mochar Chop', price: 50, ratings: 4.7, type: 'Veg Starters', image: MocharChop },
        { name: 'Ghugni', price: 60, ratings: 4.6, type: 'Veg Starters', image: Ghugni },
    
        // Non-Veg Starters
        { name: 'Fish Fry', price: 200, ratings: 4.8, type: 'Non-Veg Starters', image: FishFry },
        { name: 'Kosha Mangsho', price: 250, ratings: 4.7, type: 'Non-Veg Starters', image: KoshaMangsho },
        { name: 'Prawn Cutlet', price: 220, ratings: 4.6, type: 'Non-Veg Starters', image: PrawnCutlet },
        { name: 'Chicken Kabiraji', price: 240, ratings: 4.7, type: 'Non-Veg Starters', image: ChickenKabiraji },
    
        // Veg Main Course
        { name: 'Shukto', price: 100, ratings: 4.8, type: 'Veg Main Course', image: Shukto },
        { name: 'Chholar Dal', price: 90, ratings: 4.7, type: 'Veg Main Course', image: ChholarDal },
        { name: 'Alu Posto', price: 80, ratings: 4.6, type: 'Veg Main Course', image: AluPosto },
        { name: 'Luchi & Cholar Dal', price: 110, ratings: 4.7, type: 'Veg Main Course', image: LuchiCholarDal },
    
        // Non-Veg Main Course
        { name: 'Macher Jhol', price: 250, ratings: 4.9, type: 'Non-Veg Main Course', image: MacherJhol },
        { name: 'Doi Maach', price: 270, ratings: 4.7, type: 'Non-Veg Main Course', image: DoiMaach },
        { name: 'Chingri Malai Curry', price: 320, ratings: 4.8, type: 'Non-Veg Main Course', image: ChingriMalaiCurry },
        { name: 'Mutton Curry', price: 280, ratings: 4.6, type: 'Non-Veg Main Course', image: MuttonCurry },
    
        // Desserts
        { name: 'Rasgulla', price: 50, ratings: 4.9, type: 'Desserts', image: Rasgulla },
        { name: 'Mishti Doi', price: 70, ratings: 4.8, type: 'Desserts', image: MishtiDoi },
        { name: 'Sandesh', price: 60, ratings: 4.7, type: 'Desserts', image: Sandesh},
        { name: 'Chhena Poda', price: 90, ratings: 4.8, type: 'Desserts', image: ChhenaPoda }
    ],    
    Gujarat: [
        // Veg Starters
        { name: 'Dhokla', price: 50, ratings: 4.8, type: 'Veg Starters', image: Dhokla },
        { name: 'Khandvi', price: 60, ratings: 4.7, type: 'Veg Starters', image: Khandvi },
        { name: 'Fafda', price: 40, ratings: 4.6, type: 'Veg Starters', image: Fafda },
        { name: 'Handvo', price: 70, ratings: 4.5, type: 'Veg Starters', image: Handvo },
    
        // Veg Main Course
        { name: 'Undhiyu', price: 150, ratings: 4.9, type: 'Veg Main Course', image: Undhiyu },
        { name: 'Sev Tamatar', price: 100, ratings: 4.7, type: 'Veg Main Course', image: SevTamatar },
        { name: 'Bajra Rotla', price: 90, ratings: 4.6, type: 'Veg Main Course', image: BajraRotla },
        { name: 'Dal Dhokli', price: 110, ratings: 4.8, type: 'Veg Main Course', image: DalDhokli },
    
        // Desserts
        { name: 'Basundi', price: 120, ratings: 4.8, type: 'Desserts', image: Basundi },
        { name: 'Mohanthal', price: 100, ratings: 4.7, type: 'Desserts', image: Mohanthal },
        // { name: 'Ghughra', price: 90, ratings: 4.6, type: 'Desserts', image: Ghughra },
        { name: 'Shrikhand', price: 110, ratings: 4.9, type: 'Desserts', image: Shrikhand }
    ], 
    Kerala: [
        // Veg Starters
        { name: 'Banana Chips', price: 40, ratings: 4.7, type: 'Veg Starters', image: BananaChips },
        // { name: 'Ulli Vada', price: 50, ratings: 4.6, type: 'Veg Starters', image: UlliVada },
        { name: 'Parippu Vada', price: 45, ratings: 4.5, type: 'Veg Starters', image: ParippuVada },
        { name: 'Pazhampori', price: 35, ratings: 4.6, type: 'Veg Starters', image: Pazhampori },
    
        // Non-Veg Starters
        { name: 'Kerala Chicken Fry', price: 200, ratings: 4.8, type: 'Non-Veg Starters', image: KeralaChickenFry },
        { name: 'Prawns Fry', price: 250, ratings: 4.7, type: 'Non-Veg Starters', image: PrawnsFry },
        { name: 'Fish Mappas', price: 230, ratings: 4.6, type: 'Non-Veg Starters', image: FishMappas },
        { name: 'Crab Roast', price: 270, ratings: 4.7, type: 'Non-Veg Starters', image: CrabRoast },
    
        // Veg Main Course
        { name: 'Avial', price: 120, ratings: 4.8, type: 'Veg Main Course', image: Avial },
        { name: 'Olan', price: 100, ratings: 4.7, type: 'Veg Main Course', image: Olan },
        { name: 'Erissery', price: 110, ratings: 4.6, type: 'Veg Main Course', image: Erissery },
        { name: 'Puttu & Kadala Curry', price: 90, ratings: 4.8, type: 'Veg Main Course', image: PuttuKadalaCurry },
    
        // Non-Veg Main Course
        { name: 'Malabar Biryani', price: 300, ratings: 4.9, type: 'Non-Veg Main Course', image: MalabarBiryani },
        { name: 'Karimeen Pollichathu', price: 320, ratings: 4.7, type: 'Non-Veg Main Course', image: KarimeenPollichathu },
        { name: 'Chicken Stew', price: 280, ratings: 4.6, type: 'Non-Veg Main Course', image: ChickenStew },
        { name: 'Erachi Varattiyathu', price: 290, ratings: 4.7, type: 'Non-Veg Main Course', image: ErachiVarattiyathu },
    
        // Desserts
        { name: 'Palada Payasam', price: 110, ratings: 4.9, type: 'Desserts', image: PaladaPayasam },
        { name: 'Unniyappam', price: 90, ratings: 4.8, type: 'Desserts', image: Unniyappam },
        { name: 'Chakka Pradhaman', price: 100, ratings: 4.7, type: 'Desserts', image: ChakkaPradhaman },
        { name: 'Elaneer Pudding', price: 120, ratings: 4.8, type: 'Desserts', image: ElaneerPudding }
    ], 
    AndhraPradesh: [
        // Veg Starters
        { name: 'Punugulu', price: 40, ratings: 4.6, type: 'Veg Starters', image: Punugulu },
        { name: 'Garelu', price: 50, ratings: 4.5, type: 'Veg Starters', image: Garelu },
        { name: 'Mirchi Bajji', price: 45, ratings: 4.7, type: 'Veg Starters', image: MirchiBajji },
        { name: 'Uggani', price: 35, ratings: 4.6, type: 'Veg Starters', image: Uggani },
    
        // Non-Veg Starters
        { name: 'Kodi Vepudu', price: 200, ratings: 4.8, type: 'Non-Veg Starters', image: KodiVepudu },
        { name: 'Royyala Iguru', price: 250, ratings: 4.7, type: 'Non-Veg Starters', image: RoyyalaIguru },
        { name: 'Natu Kodi Pulusu', price: 230, ratings: 4.6, type: 'Non-Veg Starters', image: NatuKodiPulusu },
        { name: 'Chepa Vepudu', price: 270, ratings: 4.7, type: 'Non-Veg Starters', image: ChepaVepudu },
    
        // Veg Main Course
        { name: 'Gutti Vankaya', price: 120, ratings: 4.8, type: 'Veg Main Course', image: GuttiVankaya },
        { name: 'Pesarattu', price: 100, ratings: 4.7, type: 'Veg Main Course', image: Pesarattu },
        { name: 'Tomato Pappu', price: 90, ratings: 4.6, type: 'Veg Main Course', image: TomatoPappu },
        { name: 'Avakaya Annam', price: 110, ratings: 4.8, type: 'Veg Main Course', image: AvakayaAnnam },
    
        // Non-Veg Main Course
        { name: 'Andhra Chicken Curry', price: 300, ratings: 4.9, type: 'Non-Veg Main Course', image: AndhraChickenCurry },
        { name: 'Gongura Mutton', price: 320, ratings: 4.7, type: 'Non-Veg Main Course', image: GonguraMutton },
        { name: 'Prawns Curry', price: 280, ratings: 4.6, type: 'Non-Veg Main Course', image: PrawnsCurry },
        { name: 'Fish Pulusu', price: 290, ratings: 4.7, type: 'Non-Veg Main Course', image: FishPulusu },
    
        // Desserts
        { name: 'Pootharekulu', price: 110, ratings: 4.9, type: 'Desserts', image: Pootharekulu },
        { name: 'Ariselu', price: 90, ratings: 4.8, type: 'Desserts', image: Ariselu },
        // { name: 'Bobbattu', price: 100, ratings: 4.7, type: 'Desserts', image: Bobbattu },
        { name: 'Rava Laddu', price: 120, ratings: 4.8, type: 'Desserts', image: RavaLaddu }
    ],
    UttarPradesh: [
        // Veg Starters
        { name: 'Aloo Tikki', price: 50, ratings: 4.7, type: 'Veg Starters', image: AlooTikki },
        { name: 'Dahi Puri', price: 60, ratings: 4.6, type: 'Veg Starters', image: DahiPuri },
        { name: 'Basket Chaat', price: 80, ratings: 4.8, type: 'Veg Starters', image: BasketChaat },
        // { name: 'Samosa', price: 30, ratings: 4.5, type: 'Veg Starters', image: Samosa },
    
        // Non-Veg Starters
        { name: 'Kakori Kebab', price: 250, ratings: 4.8, type: 'Non-Veg Starters', image: KakoriKebab },
        { name: 'Galouti Kebab', price: 280, ratings: 4.9, type: 'Non-Veg Starters', image: GaloutiKebab },
        { name: 'Boti Kebab', price: 260, ratings: 4.7, type: 'Non-Veg Starters', image: BotiKebab },
        { name: 'Shami Kebab', price: 220, ratings: 4.6, type: 'Non-Veg Starters', image: ShamiKebab },
    
        // Veg Main Course
        { name: 'Baati Chokha', price: 100, ratings: 4.8, type: 'Veg Main Course', image: BaatiChokha },
        { name: 'Matar Paneer', price: 140, ratings: 4.7, type: 'Veg Main Course', image: MatarPaneer },
        // { name: 'Aloo Rasedar', price: 90, ratings: 4.6, type: 'Veg Main Course', image: AlooRasedar },
        { name: 'Tehri', price: 110, ratings: 4.5, type: 'Veg Main Course', image: Tehri },
    
        // Non-Veg Main Course
        { name: 'Nihari', price: 320, ratings: 4.9, type: 'Non-Veg Main Course', image: Nihari },
        { name: 'Mutton Korma', price: 300, ratings: 4.8, type: 'Non-Veg Main Course', image: MuttonKorma },
        { name: 'Mughlai Biryani', price: 280, ratings: 4.7, type: 'Non-Veg Main Course', image: MughlaiBiryani },
        { name: 'Tunde Kebab', price: 270, ratings: 4.8, type: 'Non-Veg Main Course', image: TundeKebab },
    
        // Desserts
        { name: 'Makhan Malai', price: 80, ratings: 4.9, type: 'Desserts', image: MakhanMalai },
        { name: 'Petha', price: 60, ratings: 4.8, type: 'Desserts', image: Petha },
        { name: 'Imarti', price: 70, ratings: 4.7, type: 'Desserts', image: Imarti },
        { name: 'Shahi Tukda', price: 100, ratings: 4.9, type: 'Desserts', image: ShahiTukda },
    ], 
    Bihar: [
        // Veg Starters
        { name: 'Litti Chokha', price: 80, ratings: 4.8, type: 'Veg Starters', image: LittiChokha },
        { name: 'Sattu Paratha', price: 60, ratings: 4.6, type: 'Veg Starters', image: SattuParatha },
        { name: 'Dal Pitha', price: 70, ratings: 4.7, type: 'Veg Starters', image: DalPitha },
        { name: 'Chana Ghugni', price: 50, ratings: 4.5, type: 'Veg Starters', image: ChanaGhugni },
    
        // Non-Veg Starters
        { name: 'Bihari Kebab', price: 250, ratings: 4.7, type: 'Non-Veg Starters', image: BihariKebab },
        { name: 'Taash Kabab', price: 270, ratings: 4.8, type: 'Non-Veg Starters', image: TaashKabab },
        { name: 'Champaran Mutton', price: 320, ratings: 4.9, type: 'Non-Veg Starters', image: ChamparanMutton },
        { name: 'Machhli Bharta', price: 280, ratings: 4.6, type: 'Non-Veg Starters', image: MachhliBharta },
    
        // Veg Main Course
        { name: 'Dal Bhat', price: 90, ratings: 4.6, type: 'Veg Main Course', image: DalBhat },
        { name: 'Bihari Kadhi', price: 110, ratings: 4.5, type: 'Veg Main Course', image: BihariKadhi },
        { name: 'Aloo Kachalu', price: 80, ratings: 4.7, type: 'Veg Main Course', image: AlooKachalu },
        { name: 'Chana Dal Poori', price: 100, ratings: 4.6, type: 'Veg Main Course', image: ChanaDalPoori },
    
        // Non-Veg Main Course
        { name: 'Mutton Handi', price: 330, ratings: 4.9, type: 'Non-Veg Main Course', image: MuttonHandi },
        { name: 'Fish Curry', price: 300, ratings: 4.7, type: 'Non-Veg Main Course', image: FishCurry },
        { name: 'Bihari Chicken Masala', price: 280, ratings: 4.6, type: 'Non-Veg Main Course', image: BihariChickenMasala },
        { name: 'Machhli Jhor', price: 270, ratings: 4.7, type: 'Non-Veg Main Course', image: MachhliJhor },
    
        // Desserts
        { name: 'Thekua', price: 50, ratings: 4.8, type: 'Desserts', image: Thekua },
        { name: 'Khaja', price: 70, ratings: 4.7, type: 'Desserts', image: Khaja },
        { name: 'Balushahi', price: 80, ratings: 4.6, type: 'Desserts', image: Balushahi },
        { name: 'Makhana Kheer', price: 90, ratings: 4.9, type: 'Desserts', image: MakhanaKheer },
    ],  
    Karnataka: [
        // Veg Starters
        { name: 'Maddur Vada', price: 40, ratings: 4.7, type: 'Veg Starters', image: MaddurVada },
        { name: 'Neer Dosa', price: 50, ratings: 4.6, type: 'Veg Starters', image: NeerDosa },
        { name: 'Bisi Bele Bath', price: 90, ratings: 4.8, type: 'Veg Starters', image: BisiBeleBath },
        { name: 'Chakli', price: 30, ratings: 4.5, type: 'Veg Starters', image: Chakli },
    
        // Non-Veg Starters
        { name: 'Koli Saaru', price: 260, ratings: 4.8, type: 'Non-Veg Starters', image: KoliSaaru },
        { name: 'Mangalorean Chicken Sukka', price: 280, ratings: 4.9, type: 'Non-Veg Starters', image: MangaloreanChickenSukka },
        { name: 'Rava Fried Fish', price: 300, ratings: 4.7, type: 'Non-Veg Starters', image: RavaFriedFish },
        { name: 'Chicken Ghee Roast', price: 290, ratings: 4.6, type: 'Non-Veg Starters', image: ChickenGheeRoast },
    
        // Veg Main Course
        { name: 'Akki Roti', price: 70, ratings: 4.8, type: 'Veg Main Course', image: AkkiRoti },
        { name: 'Benne Dosa', price: 90, ratings: 4.7, type: 'Veg Main Course', image: BenneDosa },
        { name: 'Ragi Mudde', price: 80, ratings: 4.6, type: 'Veg Main Course', image: RagiMudde },
        { name: 'Vegetable Sagu', price: 110, ratings: 4.5, type: 'Veg Main Course', image: VegetableSagu },
    
        // Non-Veg Main Course
        { name: 'Mutton Saaru', price: 330, ratings: 4.9, type: 'Non-Veg Main Course', image: MuttonSaaru },
        { name: 'Fish Pulimunchi', price: 310, ratings: 4.7, type: 'Non-Veg Main Course', image: FishPulimunchi },
        { name: 'Pork Bafat', price: 290, ratings: 4.6, type: 'Non-Veg Main Course', image: PorkBafat },
        { name: 'Chicken Sukka', price: 270, ratings: 4.8, type: 'Non-Veg Main Course', image: ChickenSukka },
    
        // Desserts
        { name: 'Mysore Pak', price: 100, ratings: 4.9, type: 'Desserts', image: MysorePak },
        { name: 'Obbattu', price: 120, ratings: 4.8, type: 'Desserts', image: Obbattu },
        { name: 'Kesari Bath', price: 80, ratings: 4.7, type: 'Desserts', image: KesariBath },
        { name: 'Rava Ladoo', price: 90, ratings: 4.6, type: 'Desserts', image: RavaLadoo }
    ],
    MadhyaPradesh: [
        // Veg Starters
        { name: 'Poha Jalebi', price: 50, ratings: 4.6, type: 'Veg Starters', image: PohaJalebi },
        { name: 'Bhutte Ka Kees', price: 60, ratings: 4.7, type: 'Veg Starters', image: BhutteKaKees },
        { name: 'Dal Bafla', price: 80, ratings: 4.5, type: 'Veg Starters', image: DalBafla },
        { name: 'Kachori', price: 40, ratings: 4.6, type: 'Veg Starters', image: Kachori },
    
        // Non-Veg Starters
        { name: 'Seekh Kebab', price: 180, ratings: 4.7, type: 'Non-Veg Starters', image: SeekhKebab },
        { name: 'Mutton Shami Kebab', price: 200, ratings: 4.6, type: 'Non-Veg Starters', image: MuttonShamiKebab },
        { name: 'Keema Samosa', price: 150, ratings: 4.5, type: 'Non-Veg Starters', image: KeemaSamosa },
        { name: 'Chicken Pakora', price: 120, ratings: 4.6, type: 'Non-Veg Starters', image: ChickenPakora },
    
        // Veg Main Course
        { name: 'Bhopali Gosht Korma', price: 250, ratings: 4.7, type: 'Veg Main Course', image: BhopaliGoshtKorma },
        { name: 'Aloo Palak', price: 100, ratings: 4.6, type: 'Veg Main Course', image: AlooPalak },
        { name: 'Sabudana Khichdi', price: 80, ratings: 4.5, type: 'Veg Main Course', image: SabudanaKhichdi },
        { name: 'Dal Paniya', price: 90, ratings: 4.7, type: 'Veg Main Course', image: DalPaniya },
    
        // Non-Veg Main Course
        { name: 'Rogan Josh', price: 280, ratings: 4.8, type: 'Non-Veg Main Course', image: RoganJosh },
        { name: 'Bhopali Chicken Korma', price: 260, ratings: 4.7, type: 'Non-Veg Main Course', image: BhopaliChickenKorma },
        { name: 'Mutton Korma', price: 300, ratings: 4.6, type: 'Non-Veg Main Course', image: MuttonKorma },
        { name: 'Fish Curry', price: 230, ratings: 4.5, type: 'Non-Veg Main Course', image: FishCurry },
    
        // Desserts
        { name: 'Mawa Bati', price: 90, ratings: 4.9, type: 'Desserts', image: MawaBati },
        { name: 'Shahi Tukda', price: 110, ratings: 4.7, type: 'Desserts', image: ShahiTukda },
        { name: 'Jalebi', price: 60, ratings: 4.8, type: 'Desserts', image: Jalebi },
        { name: 'Malpua', price: 80, ratings: 4.7, type: 'Desserts', image: Malpua },
    ],
    Haryana: [
        // Veg Starters
        { name: 'Besan Masala Roti', price: 50, ratings: 4.6, type: 'Veg Starters', image: BesanMasalaRoti },
        { name: 'Bajra Khichdi', price: 70, ratings: 4.7, type: 'Veg Starters', image: BajraKhichdi },
        { name: 'Kachri Ki Sabzi', price: 80, ratings: 4.5, type: 'Veg Starters', image: KachriKiSabzi },
        { name: 'Mixed Dal Pakora', price: 40, ratings: 4.6, type: 'Veg Starters', image: MixedDalPakora },
    
        // Non-Veg Starters
        { name: 'Mutton Tandoori', price: 220, ratings: 4.7, type: 'Non-Veg Starters', image: MuttonTandoori },
        { name: 'Chicken Seekh Kebab', price: 180, ratings: 4.6, type: 'Non-Veg Starters', image: ChickenSeekhKebab },
        { name: 'Fish Fry', price: 200, ratings: 4.5, type: 'Non-Veg Starters', image: FishFry },
        { name: 'Keema Paratha', price: 150, ratings: 4.6, type: 'Non-Veg Starters', image: KeemaParatha },
    
        // Veg Main Course
        { name: 'Hara Dhania Cholia', price: 120, ratings: 4.7, type: 'Veg Main Course', image: HaraDhaniaCholia },
        { name: 'Kadhi Pakora', price: 100, ratings: 4.6, type: 'Veg Main Course', image: KadhiPakora },
        { name: 'Aloo Gobhi', price: 80, ratings: 4.5, type: 'Veg Main Course', image: AlooGobhi },
        { name: 'Mixed Dal', price: 90, ratings: 4.7, type: 'Veg Main Course', image: MixedDal },
    
        // Non-Veg Main Course
        { name: 'Haryanvi Mutton Curry', price: 300, ratings: 4.8, type: 'Non-Veg Main Course', image: HaryanviMuttonCurry },
        { name: 'Chicken Curry', price: 280, ratings: 4.7, type: 'Non-Veg Main Course', image: ChickenCurry },
        { name: 'Keema Kaleji', price: 250, ratings: 4.6, type: 'Non-Veg Main Course', image: KeemaKaleji },
        { name: 'Desi Murga', price: 350, ratings: 4.5, type: 'Non-Veg Main Course', image: DesiMurga },
    
        // Desserts
        { name: 'Ghevar', price: 90, ratings: 4.9, type: 'Desserts', image: Ghevar },
        { name: 'Balu Shahi', price: 100, ratings: 4.7, type: 'Desserts', image: BaluShahi },
        { name: 'Meethe Chawal', price: 80, ratings: 4.8, type: 'Desserts', image: MeetheChawal },
        { name: 'Kheer', price: 70, ratings: 4.7, type: 'Desserts', image: Kheer },
    ],
        Odisha: [
            // Veg Starters
            { name: 'Dalma', price: 60, ratings: 4.7, type: 'Veg Starters', image: Dalma },
            { name: 'Chhena Poda', price: 70, ratings: 4.8, type: 'Veg Starters', image: ChhenaPoda },
            { name: 'Santula', price: 50, ratings: 4.6, type: 'Veg Starters', image: Santula },
            { name: 'Pakhal Bhata', price: 40, ratings: 4.5, type: 'Veg Starters', image: PakhalBhata },
    
            // Non-Veg Starters
            { name: 'Macha Ghanta', price: 200, ratings: 4.7, type: 'Non-Veg Starters', image: MachaGhanta },
            { name: 'Chingudi Malai', price: 250, ratings: 4.6, type: 'Non-Veg Starters', image: ChingudiMalai },
            { name: 'Mutton Curry', price: 280, ratings: 4.5, type: 'Non-Veg Starters', image: MuttonCurry },
            { name: 'Fish Fry', price: 180, ratings: 4.6, type: 'Non-Veg Starters', image: FishFry },
    
            // Veg Main Course
            { name: 'Besara', price: 120, ratings: 4.8, type: 'Veg Main Course', image: Besara },
            { name: 'Kanika', price: 100, ratings: 4.7, type: 'Veg Main Course', image: Kanika },
            { name: 'Chhatu Rai', price: 110, ratings: 4.6, type: 'Veg Main Course', image: ChhatuRai },
            { name: 'Kadali Manja Rai', price: 90, ratings: 4.5, type: 'Veg Main Course', image: KadaliManjaRai },
    
            // Non-Veg Main Course
            { name: 'Macha Jhola', price: 250, ratings: 4.8, type: 'Non-Veg Main Course', image: MachaJhola },
            { name: 'Dalma Mutton', price: 280, ratings: 4.7, type: 'Non-Veg Main Course', image: DalmaMutton },
            { name: 'Prawn Curry', price: 300, ratings: 4.6, type: 'Non-Veg Main Course', image: PrawnCurry },
            { name: 'Crab Curry', price: 320, ratings: 4.5, type: 'Non-Veg Main Course', image: CrabCurry },
    
            // Desserts
            { name: 'Rasagola', price: 100, ratings: 4.9, type: 'Desserts', image: Rasagola },
            { name: 'Chhena Poda', price: 120, ratings: 4.8, type: 'Desserts', image: ChhenaPoda },
            { name: 'Khir Sagar', price: 80, ratings: 4.7, type: 'Desserts', image: KhirSagar },
            { name: 'Arisa Pitha', price: 70, ratings: 4.6, type: 'Desserts', image: ArisaPitha },
        ],
        Assam: [
            // Veg Starters
            { name: 'Aloo Pitika', price: 60, ratings: 4.7, type: 'Veg Starters', image: AlooPitika },
            { name: 'Xaak Bhaji', price: 50, ratings: 4.6, type: 'Veg Starters', image: XaakBhaji },
            { name: 'Bilahi Maas', price: 70, ratings: 4.5, type: 'Veg Starters', image: BilahiMaas },
            { name: 'Khar', price: 80, ratings: 4.7, type: 'Veg Starters', image: Khar },
    
            // Non-Veg Starters
            { name: 'Masor Tenga', price: 200, ratings: 4.7, type: 'Non-Veg Starters', image: MasorTenga },
            { name: 'Chicken with Bamboo Shoot', price: 220, ratings: 4.6, type: 'Non-Veg Starters', image: ChickenwithBambooShoot },
            { name: 'Pork Bharta', price: 250, ratings: 4.8, type: 'Non-Veg Starters', image: PorkBharta },
            { name: 'Duck Fry', price: 280, ratings: 4.7, type: 'Non-Veg Starters', image: DuckFry },
    
            // Veg Main Course
            { name: 'Bhaat with Dal', price: 90, ratings: 4.7, type: 'Veg Main Course', image: BhaatwithDal },
            { name: 'Alu Bengena Pitika', price: 80, ratings: 4.6, type: 'Veg Main Course', image: AluBengenaPitika },
            { name: 'Black Dal', price: 100, ratings: 4.8, type: 'Veg Main Course', image: BlackDal },
            { name: 'Lai Xaak', price: 70, ratings: 4.6, type: 'Veg Main Course', image: LaiXaak },
    
            // Non-Veg Main Course
            { name: 'Assamese Fish Curry', price: 260, ratings: 4.7, type: 'Non-Veg Main Course', image: AssameseFishCurry },
            { name: 'Pork with Bamboo Shoot', price: 300, ratings: 4.8, type: 'Non-Veg Main Course', image: PorkwithBambooShoot },
            { name: 'Duck Curry', price: 320, ratings: 4.7, type: 'Non-Veg Main Course', image: DuckCurry },
            { name: 'Chicken Xak', price: 280, ratings: 4.6, type: 'Non-Veg Main Course', image: ChickenXak },
    
            // Desserts
            { name: 'Pitha', price: 100, ratings: 4.9, type: 'Desserts', image: Pitha },
            { name: 'Komal Chaul', price: 90, ratings: 4.7, type: 'Desserts', image: KomalChaul },
            { name: 'Jolpan', price: 110, ratings: 4.8, type: 'Desserts', image: Jolpan },
            { name: 'Narikol Laru', price: 80, ratings: 4.6, type: 'Desserts', image: NarikolLaru }
        ],
        Chhattisgarh: [
            // Veg Starters
            { name: 'Chana Samosa', price: 40, ratings: 4.6, type: 'Veg Starters', image: ChanaSamosa },
            { name: 'Farra', price: 50, ratings: 4.7, type: 'Veg Starters', image: Farra },
            { name: 'Aamat', price: 60, ratings: 4.5, type: 'Veg Starters', image: Aamat },
            { name: 'Cheela', price: 40, ratings: 4.6, type: 'Veg Starters', image: Cheela },
    
            // Non-Veg Starters
            { name: 'Mutton Sukha', price: 280, ratings: 4.7, type: 'Non-Veg Starters', image: MuttonSukha },
            { name: 'Chhattisgarhi Fish Fry', price: 260, ratings: 4.8, type: 'Non-Veg Starters', image: ChhattisgarhiFishFry },
            { name: 'Pork Bharta', price: 300, ratings: 4.6, type: 'Non-Veg Starters', image: PorkBharta },
            { name: 'Chicken Bharta', price: 250, ratings: 4.7, type: 'Non-Veg Starters', image: ChickenBharta },
    
            // Veg Main Course
            { name: 'Bafauri', price: 70, ratings: 4.7, type: 'Veg Main Course', image: Bafauri },
            { name: 'Dubki Kadhi', price: 80, ratings: 4.6, type: 'Veg Main Course', image: DubkiKadhi },
            { name: 'Chousela Roti', price: 90, ratings: 4.8, type: 'Veg Main Course', image: ChouselaRoti },
            { name: 'Bore Baasi', price: 50, ratings: 4.7, type: 'Veg Main Course', image: BoreBaasi },
    
            // Non-Veg Main Course
            { name: 'Red Ant Chutney with Rice', price: 350, ratings: 4.6, type: 'Non-Veg Main Course', image: RedAntChutneywithRice },
            { name: 'Mutton Curry', price: 320, ratings: 4.7, type: 'Non-Veg Main Course', image: MuttonCurry },
            { name: 'Paya Soup', price: 280, ratings: 4.8, type: 'Non-Veg Main Course', image: PayaSoup },
            { name: 'Chicken Masala', price: 300, ratings: 4.7, type: 'Non-Veg Main Course', image: ChickenMasala },
    
            // Desserts
            { name: 'Khurma', price: 100, ratings: 4.9, type: 'Desserts', image: Khurma },
            { name: 'Dehrori', price: 120, ratings: 4.8, type: 'Desserts', image: Dehrori },
            { name: 'Gulgula', price: 90, ratings: 4.7, type: 'Desserts', image: Gulgula },
            { name: 'Tilgur', price: 80, ratings: 4.6, type: 'Desserts', image: Tilgur }
        ],
        Jharkhand: [
            // Veg Starters
            { name: 'Thekua', price: 50, ratings: 4.6, type: 'Veg Starters', image: Thekua },
            { name: 'Dhuska', price: 40, ratings: 4.7, type: 'Veg Starters', image: Dhuska },
            { name: 'Pittha', price: 60, ratings: 4.5, type: 'Veg Starters', image: Pittha },
            { name: 'Rugra', price: 70, ratings: 4.6, type: 'Veg Starters', image: Rugra },
        
            // Non-Veg Starters
            { name: 'Mutton Kebab', price: 250, ratings: 4.7, type: 'Non-Veg Starters', image: MuttonKebab },
            { name: 'Jharkhandi Chicken Fry', price: 230, ratings: 4.8, type: 'Non-Veg Starters', image: JharkhandiChickenFry },
            { name: 'Fish Fry', price: 220, ratings: 4.6, type: 'Non-Veg Starters', image: FishFry },
            { name: 'Bhuna Mutton', price: 280, ratings: 4.7, type: 'Non-Veg Starters', image: BhunaMutton },
        
            // Veg Main Course
            { name: 'Chana Ghugni', price: 80, ratings: 4.7, type: 'Veg Main Course', image: ChanaGhugni },
            { name: 'Aloo Chokha', price: 60, ratings: 4.8, type: 'Veg Main Course', image: AlooChokha },
            { name: 'Handia Rice', price: 90, ratings: 4.6, type: 'Veg Main Course', image: HandiaRice },
            { name: 'Dal Pitha', price: 70, ratings: 4.5, type: 'Veg Main Course', image: DalPitha },
        
            // Non-Veg Main Course
            { name: 'Mutton Curry', price: 300, ratings: 4.8, type: 'Non-Veg Main Course', image: MuttonCurry },
            { name: 'Desi Chicken Curry', price: 320, ratings: 4.7, type: 'Non-Veg Main Course', image: DesiChickenCurry },
            { name: 'Fish Curry', price: 280, ratings: 4.6, type: 'Non-Veg Main Course', image: FishCurry },
            { name: 'Pork Curry', price: 350, ratings: 4.7, type: 'Non-Veg Main Course', image: PorkCurry },
        
            // Desserts
            { name: 'Malpua', price: 80, ratings: 4.9, type: 'Desserts', image: Malpua },
            { name: 'Arsa', price: 90, ratings: 4.8, type: 'Desserts', image: Arsa },
            { name: 'Khus Khus Kheer', price: 100, ratings: 4.7, type: 'Desserts', image: KhusKhusKheer },
            { name: 'Tilkut', price: 70, ratings: 4.6, type: 'Desserts', image: Tilkut },
        ],
        Manipur: [
            // Veg Starters
            { name: 'Kanghou', price: 60, ratings: 4.6, type: 'Veg Starters', image: Kanghou },
            { name: 'Tan Nap', price: 50, ratings: 4.7, type: 'Veg Starters', image: TanNap },
            { name: 'Kelli Chana', price: 70, ratings: 4.5, type: 'Veg Starters', image: KelliChana },
            { name: 'Paknam', price: 80, ratings: 4.6, type: 'Veg Starters', image: Paknam },
        
            // Non-Veg Starters
            { name: 'Eromba', price: 200, ratings: 4.7, type: 'Non-Veg Starters', image: Eromba },
            { name: 'Nga Ataoba Thongba', price: 250, ratings: 4.8, type: 'Non-Veg Starters', image: NgaAtaobaThongba },
            { name: 'Ooti', price: 230, ratings: 4.6, type: 'Non-Veg Starters', image: Ooti },
            { name: 'Naga Pork Fry', price: 270, ratings: 4.7, type: 'Non-Veg Starters', image: NagaPorkFry },
        
            // Veg Main Course
            { name: 'Chamthong', price: 90, ratings: 4.7, type: 'Veg Main Course', image: Chamthong },
            { name: 'Morok Metpa', price: 80, ratings: 4.8, type: 'Veg Main Course', image: MorokMetpa },
            { name: 'Kangsoi', price: 100, ratings: 4.6, type: 'Veg Main Course', image: Kangsoi },
            { name: 'Kanglayen', price: 110, ratings: 4.5, type: 'Veg Main Course', image: Kanglayen },
        
            // Non-Veg Main Course
            { name: 'Ngari Curry', price: 280, ratings: 4.8, type: 'Non-Veg Main Course', image: NgariCurry },
            { name: 'Smoked Pork Curry', price: 320, ratings: 4.7, type: 'Non-Veg Main Course', image: SmokedPorkCurry },
            { name: 'Chicken Thongba', price: 300, ratings: 4.6, type: 'Non-Veg Main Course', image: ChickenThongba },
            { name: 'Nga Thongba', price: 290, ratings: 4.7, type: 'Non-Veg Main Course', image: NgaThongba },
        
            // Desserts
            { name: 'Chak-Hao Kheer', price: 120, ratings: 4.9, type: 'Desserts', image: ChakHaoKheer },
            { name: 'Nga Atoiba', price: 100, ratings: 4.8, type: 'Desserts', image: NgaAtoiba },
            { name: 'Kheer Kanghou', price: 110, ratings: 4.7, type: 'Desserts', image: KheerKanghou },
            { name: 'Kabok', price: 90, ratings: 4.6, type: 'Desserts', image: Kabok }
        ], 
        Mizoram: [
            // Veg Starters
            { name: 'Bai', price: 60, ratings: 4.6, type: 'Veg Starters', image: Bai },
            { name: 'Sanpiau', price: 50, ratings: 4.7, type: 'Veg Starters', image: Sanpiau },
            { name: 'Bekang', price: 70, ratings: 4.5, type: 'Veg Starters', image: Bekang },
            { name: 'Chhangban', price: 80, ratings: 4.6, type: 'Veg Starters', image: Chhangban },
        
            // Non-Veg Starters
            { name: 'Pork Bamboo Shoot', price: 200, ratings: 4.7, type: 'Non-Veg Starters', image: PorkBambooShoot },
            { name: 'Arsa Buhchiar', price: 250, ratings: 4.8, type: 'Non-Veg Starters', image: ArsaBuhchiar },
            { name: 'Vawksa Rep', price: 230, ratings: 4.6, type: 'Non-Veg Starters', image: VawksaRep },
            { name: 'Sawhchiar', price: 270, ratings: 4.7, type: 'Non-Veg Starters', image: Sawhchiar },
        
            // Veg Main Course
            { name: 'Misa Mach Poora', price: 90, ratings: 4.7, type: 'Veg Main Course', image: MisaMachPoora },
            { name: 'Chhum Han', price: 80, ratings: 4.8, type: 'Veg Main Course', image: ChhumHan },
            { name: 'Hmarcha Rawt', price: 100, ratings: 4.6, type: 'Veg Main Course', image: HmarchaRawt },
            { name: 'Bamboo Shoot Curry', price: 110, ratings: 4.5, type: 'Veg Main Course', image: BambooShootCurry },
        
            // Non-Veg Main Course
            { name: 'Smoked Pork', price: 280, ratings: 4.8, type: 'Non-Veg Main Course', image: SmokedPork },
            { name: 'Chicken with Mustard Leaves', price: 320, ratings: 4.7, type: 'Non-Veg Main Course', image: ChickenwithMustardLeaves },
            { name: 'Mizo Dal', price: 300, ratings: 4.6, type: 'Non-Veg Main Course', image: MizoDal },
            { name: 'Mizo Bai', price: 290, ratings: 4.7, type: 'Non-Veg Main Course', image: MizoBai },
        
            // Desserts
            { name: 'Rice Cake', price: 120, ratings: 4.9, type: 'Desserts', image: RiceCake },
            { name: 'Sawhchiar Pudding', price: 100, ratings: 4.8, type: 'Desserts', image: SawhchiarPudding },
            { name: 'Zu Tea Kheer', price: 110, ratings: 4.7, type: 'Desserts', image: ZuTeaKheer },
            { name: 'Chhangban Wrap', price: 90, ratings: 4.6, type: 'Desserts', image: ChhangbanWrap }
        ],
        ArunachalPradesh: [
            // Veg Starters
            { name: 'Thukpa', price: 80, ratings: 4.7, type: 'Veg Starters', image: Thukpa },
            { name: 'Gyapa Khazi', price: 90, ratings: 4.6, type: 'Veg Starters', image: GyapaKhazi },
            { name: 'Khura', price: 70, ratings: 4.5, type: 'Veg Starters', image: Khura },
            { name: 'Rice Beer Pakoda', price: 100, ratings: 4.6, type: 'Veg Starters', image: RiceBeerPakoda },
        
            // Non-Veg Starters
            { name: 'Mithun Meat Fry', price: 250, ratings: 4.8, type: 'Non-Veg Starters', image: MithunMeatFry },
            { name: 'Chicken Bamboo Shoot', price: 220, ratings: 4.7, type: 'Non-Veg Starters', image: ChickenBambooShoot },
            { name: 'Pork Bharta', price: 240, ratings: 4.6, type: 'Non-Veg Starters', image: PorkBharta },
            { name: 'Fish Tenga', price: 230, ratings: 4.7, type: 'Non-Veg Starters', image: FishTenga },
        
            // Veg Main Course
            { name: 'Rice with Lukter', price: 100, ratings: 4.7, type: 'Veg Main Course', image: RicewithLukter },
            { name: 'Chura Sabji', price: 90, ratings: 4.8, type: 'Veg Main Course', image: ChuraSabji },
            { name: 'Boiled Vegetables with Bamboo Shoot', price: 110, ratings: 4.6, type: 'Veg Main Course', image: BoiledVegetableswithBambooShoot },
            { name: 'Zan', price: 120, ratings: 4.5, type: 'Veg Main Course', image: Zan },
        
            // Non-Veg Main Course
            { name: 'Pasa', price: 300, ratings: 4.7, type: 'Non-Veg Main Course', image: Pasa },
            { name: 'Smoked Pork with Bamboo Shoot', price: 320, ratings: 4.8, type: 'Non-Veg Main Course', image: SmokedPorkwithBambooShoot },
            { name: 'Yak Meat Curry', price: 350, ratings: 4.6, type: 'Non-Veg Main Course', image: YakMeatCurry },
            { name: 'Chicken Thukpa', price: 280, ratings: 4.7, type: 'Non-Veg Main Course', image: ChickenThukpa },
        
            // Desserts
            { name: 'Khapse', price: 80, ratings: 4.9, type: 'Desserts', image: Khapse },
            { name: 'Rice Cake', price: 100, ratings: 4.8, type: 'Desserts', image: RiceCake },
            { name: 'Sweet Corn Pudding', price: 90, ratings: 4.7, type: 'Desserts', image: SweetCornPudding },
            { name: 'Local Honey Dumplings', price: 110, ratings: 4.6, type: 'Desserts', image: LocalHoneyDumplings }
        ],
            Goa: [
                // Veg Starters
                { name: 'Potato Chops', price: 80, ratings: 4.6, type: 'Veg Starters', image: PotatoChops },
                { name: 'Bebinca Rolls', price: 90, ratings: 4.7, type: 'Veg Starters', image: BebincaRolls },
                { name: 'Paneer Rava Fry', price: 100, ratings: 4.5, type: 'Veg Starters', image: PaneerRavaFry },
                { name: 'Kismur', price: 110, ratings: 4.6, type: 'Veg Starters', image: Kismur },
        
                // Non-Veg Starters
                { name: 'Goan Prawn Rava Fry', price: 250, ratings: 4.7, type: 'Non-Veg Starters', image: GoanPrawnRavaFry },
                { name: 'Fish Recheado', price: 280, ratings: 4.8, type: 'Non-Veg Starters', image: FishRecheado },
                { name: 'Chicken Cafreal', price: 260, ratings: 4.6, type: 'Non-Veg Starters', image: ChickenCafreal },
                { name: 'Sukem', price: 270, ratings: 4.7, type: 'Non-Veg Starters', image: Sukem },
        
                // Veg Main Course
                { name: 'Goan Pulao', price: 120, ratings: 4.7, type: 'Veg Main Course', image: GoanPulao },
                { name: 'Chana Doce', price: 130, ratings: 4.8, type: 'Veg Main Course', image: ChanaDoce },
                { name: 'Bhaji Pav', price: 110, ratings: 4.6, type: 'Veg Main Course', image: BhajiPav },
                { name: 'Khatkhate', price: 100, ratings: 4.5, type: 'Veg Main Course', image: Khatkhate },
        
                // Non-Veg Main Course
                { name: 'Goan Fish Curry', price: 350, ratings: 4.8, type: 'Non-Veg Main Course', image: GoanFishCurry },
                { name: 'Pork Vindaloo', price: 370, ratings: 4.7, type: 'Non-Veg Main Course', image: PorkVindaloo },
                { name: 'Xacuti', price: 360, ratings: 4.6, type: 'Non-Veg Main Course', image: Xacuti },
                { name: 'Sorpotel', price: 340, ratings: 4.7, type: 'Non-Veg Main Course', image: Sorpotel },
        
                // Desserts
                { name: 'Bebinca', price: 150, ratings: 4.9, type: 'Desserts', image: Bebinca },
                { name: 'Dodol', price: 130, ratings: 4.8, type: 'Desserts', image: Dodol },
                { name: 'Serradura', price: 120, ratings: 4.7, type: 'Desserts', image: Serradura },
                { name: 'Coconut Cake', price: 140, ratings: 4.6, type: 'Desserts', image: CoconutCake }
            ],
            HimachalPradesh: [
                // Veg Starters
                { name: 'Siddu', price: 80, ratings: 4.6, type: 'Veg Starters', image: Siddu },
                { name: 'Chana Madra', price: 90, ratings: 4.7, type: 'Veg Starters', image: ChanaMadra },
                { name: 'Sepu Vadi', price: 100, ratings: 4.5, type: 'Veg Starters', image: SepuVadi },
                { name: 'Babru', price: 110, ratings: 4.6, type: 'Veg Starters', image: Babru },
        
                // Non-Veg Starters
                { name: 'Chicken Anardana', price: 250, ratings: 4.7, type: 'Non-Veg Starters', image: ChickenAnardana },
                { name: 'Tudkiya Bhath', price: 270, ratings: 4.8, type: 'Non-Veg Starters', image: TudkiyaBhath },
                { name: 'Himachali Mutton Rara', price: 260, ratings: 4.6, type: 'Non-Veg Starters', image: HimachaliMuttonRara },
                { name: 'Kullu Trout Fish', price: 280, ratings: 4.7, type: 'Non-Veg Starters', image: KulluTroutFish },
        
                // Veg Main Course
                { name: 'Chana Dal Palak', price: 120, ratings: 4.7, type: 'Veg Main Course', image: ChanaDalPalak },
                { name: 'Aloo Palda', price: 130, ratings: 4.8, type: 'Veg Main Course', image: AlooPalda },
                { name: 'Maharashtrian Kadhi', price: 110, ratings: 4.6, type: 'Veg Main Course', image: MaharashtrianKadhi },
                { name: 'Pahari Rajma', price: 100, ratings: 4.5, type: 'Veg Main Course', image: PahariRajma },
        
                // Non-Veg Main Course
                { name: 'Chha Gosht', price: 350, ratings: 4.8, type: 'Non-Veg Main Course', image: ChhaGosht },
                { name: 'Pahari Chicken Curry', price: 370, ratings: 4.7, type: 'Non-Veg Main Course', image: PahariChickenCurry },
                // { name: 'Mutton Rara', price: 360, ratings: 4.6, type: 'Non-Veg Main Course', image: MuttonRara },
                { name: 'Khatta Meat', price: 340, ratings: 4.7, type: 'Non-Veg Main Course', image: KhattaMeat },
        
                // Desserts
                { name: 'Mittha', price: 150, ratings: 4.9, type: 'Desserts', image: Mittha },
                { name: 'Akte', price: 130, ratings: 4.8, type: 'Desserts', image: Akte },
                { name: 'Gulgule', price: 120, ratings: 4.7, type: 'Desserts', image: Gulgule },
                { name: 'Sidu with Honey', price: 140, ratings: 4.6, type: 'Desserts', image: SiduwithHoney }
            ],
            Meghalaya: [
                // Veg Starters
                { name: 'Jadoh Veg', price: 80, ratings: 4.6, type: 'Veg Starters', image: JadohVeg },
                { name: 'Dohneiiong', price: 90, ratings: 4.7, type: 'Veg Starters', image: Dohneiiong },
                { name: 'Tungrymbai', price: 100, ratings: 4.5, type: 'Veg Starters', image: Tungrymbai },
                { name: 'Pumaloi', price: 110, ratings: 4.6, type: 'Veg Starters', image: Pumaloi },
            
                // Non-Veg Starters
                { name: 'Jadoh', price: 250, ratings: 4.7, type: 'Non-Veg Starters', image: Jadoh },
                { name: 'Doh Khlieh', price: 270, ratings: 4.8, type: 'Non-Veg Starters', image: DohKhlieh },
                { name: 'Dohjem', price: 260, ratings: 4.6, type: 'Non-Veg Starters', image: Dohjem },
                { name: 'Smoked Pork', price: 280, ratings: 4.7, type: 'Non-Veg Starters', image: SmokedPork },
            
                // Veg Main Course
                { name: 'Rice with Tungrymbai', price: 120, ratings: 4.7, type: 'Veg Main Course', image: RicewithTungrymbai },
                { name: 'Meghalaya Kadhi', price: 130, ratings: 4.8, type: 'Veg Main Course', image: MeghalayaKadhi },
                { name: 'Pukhlein', price: 110, ratings: 4.6, type: 'Veg Main Course', image: Pukhlein },
                { name: 'Kappa', price: 100, ratings: 4.5, type: 'Veg Main Course', image: Kappa },
            
                // Non-Veg Main Course
                { name: 'Meghalaya Pork Curry', price: 350, ratings: 4.8, type: 'Non-Veg Main Course', image: MeghalayaPorkCurry },
                { name: 'Chicken Tungtap', price: 370, ratings: 4.7, type: 'Non-Veg Main Course', image: ChickenTungtap },
                { name: 'Fish Tungrymbai', price: 360, ratings: 4.6, type: 'Non-Veg Main Course', image: FishTungrymbai },
                { name: 'Dohsyiar Chicken', price: 340, ratings: 4.7, type: 'Non-Veg Main Course', image: DohsyiarChicken },
            
                // Desserts
                { name: 'Sakin Gata', price: 150, ratings: 4.9, type: 'Desserts', image: SakinGata },
                { name: 'Pukhlein', price: 130, ratings: 4.8, type: 'Desserts', image: Pukhlein },
                { name: 'Rice Pudding', price: 120, ratings: 4.7, type: 'Desserts', image: RicePudding },
                { name: 'Pumaloi Sweet', price: 140, ratings: 4.6, type: 'Desserts', image: PumaloiSweet }
            ],
    // UttarPradesh: [
    //     { name: 'Aloo Tikki', price: 50, ratings: 4.7, type: 'Veg Starters', image: AlooTikki },
    //     { name: 'Nihari', price: 320, ratings: 4.9, type: 'Non-Veg Main Course', image: Nihari }
    // ],
    // Bihar: [
    //     { name: 'Litti Chokha', price: 80, ratings: 4.8, type: 'Veg Starters', image: LittiChokha }
    // ],
    // Karnataka: [
    //     { name: 'Akki Roti', price: 70, ratings: 4.8, type: 'Veg Main Course', image: AkkiRoti },
    //     { name: 'Mysore Pak', price: 100, ratings: 4.9, type: 'Desserts', image: MysorePak }
    // ],
    // MadhyaPradesh: [
    //     { name: 'Seekh Kebab', price: 180, ratings: 4.7, type: 'Non-Veg Starters', image: SeekhKebab }
    // ],
    // Haryana: [
    //     { name: 'Ghevar', price: 90, ratings: 4.9, type: 'Desserts', image: Ghevar }
    // ],
    // Odisha: [
    //     { name: 'Chhena Poda', price: 70, ratings: 4.8, type: 'Veg Starters', image: ChhenaPoda }
    // ],
    // Assam: [
    //     { name: 'Masor Tenga', price: 200, ratings: 4.7, type: 'Non-Veg Starters', image: FishCurry }
    // ],
    // Chhattisgarh: [
    //     // Only dishes with imported images remain
    //     { name: 'Aamat', price: 60, ratings: 4.5, type: 'Veg Starters', image: Aamat },
    // ],
    // Jharkhand: [
    //     // Only dishes with imported images remain
    //     { name: 'Fish Fry', price: 220, ratings: 4.6, type: 'Non-Veg Starters', image: FishFry },
    //     { name: 'Chana Ghugni', price: 80, ratings: 4.7, type: 'Veg Main Course', image: Ghugni },
    //     { name: 'Fish Curry', price: 280, ratings: 4.6, type: 'Non-Veg Main Course', image: FishCurry },
    // ],
    // Goa: [
    //     // Only dishes with imported images remain
    //     { name: 'Fish Fry', price: 220, ratings: 4.6, type: 'Non-Veg Starters', image: FishFry },
    //     { name: 'Fish Curry', price: 280, ratings: 4.6, type: 'Non-Veg Main Course', image: FishCurry },
    // ],
    // Telangana: [
    //     // Only keeping dishes with matching imported images
    //     { name: 'Fish Pulusu', price: 280, ratings: 4.7, type: 'Non-Veg Starters', image: FishCurry }, // Assuming Fish Pulusu can use FishCurry
    //     { name: 'Hyderabadi Biryani', price: 350, ratings: 4.8, type: 'Non-Veg Main Course', image: Biryani },
    // ],
  
};

const Menu = () => {
    const [selectedState, setSelectedState] = useState('Maharashtra');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedRating, setSelectedRating] = useState(0);
    const [showFilters, setShowFilters] = useState(false);
    const [cart, setCart] = useState([]);
    const [cartPopup, setCartPopup] = useState(null);
    const [orderModal, setOrderModal] = useState(null);
    const [orderConfirmed, setOrderConfirmed] = useState(null);
    const [customerDetails, setCustomerDetails] = useState({ mobile: '', address: '', paymentMode: 'Cash on Delivery' });

    const addToCart = (item) => {
        setCart(prevCart => {
            if (prevCart.some(cartItem => cartItem.name === item.name)) {
                setCartPopup("alreadyInCart");
                return prevCart;
            }
            return [...prevCart, item];
        });
    };

    const handleCartClick = () => {
        if (cart.length === 0) {
            setCartPopup("empty");
        } else {
            setCartPopup("items");
        }
    };

    const filterDishes = () => {
        return dishes[selectedState].filter(dish =>
            (selectedCategory === "All" || dish.type === selectedCategory) &&
            dish.ratings >= selectedRating
        );
    };
    
    const handleOpenOrderModal = (item) => {
        setCustomerDetails({ mobile: '', address: '', paymentMode: 'Cash on Delivery' }); // Reset first
        setTimeout(() => setOrderModal({ ...item, quantity: 1 }), 0); // Then open modal
    };
    
    const handleConfirmOrder = (item, quantity) => {
        if (!customerDetails.mobile || !customerDetails.address) {
            alert("Please enter mobile number and address.");
            return;
        }
        const order = { ...item, quantity, total: item.price * quantity };
        if (!cart.some(cartItem => cartItem.name === item.name)) {
            setCart(prevCart => [...prevCart, order]);
        }
        setOrderModal(null);
        setOrderConfirmed(customerDetails);
        setCustomerDetails({ mobile: '', address: '', paymentMode: 'Cash on Delivery' });
    };
    
    return (
        <div className="bg-white">

            <div className="navbar-spacing">
            <nav className="flex justify-between items-center p-4 shadow-md bg-white">
              <div className="flex items-center space-x-2">
                <img src={loggo} alt="Logo" className="w-25 h-20" />
              </div>
              <div className="flex items-center space-x-6">
                <a href="#" className="text-gray-600 hover:text-black"><Link to={"/hero"}>Home</Link></a>
                <a href="#" className="text-gray-600 hover:text-black">Services</a>
                <a href="#" className="text-gray-600 hover:text-black"><Link to={"/sub"}>Subscriptions</Link></a>
                <a href="#" className="text-gray-600 hover:text-black"><Link to={"/menuexplore"}>Menu</Link></a>
                <a href="#" className="text-gray-600 hover:text-black">
                  Offers <sup className="text-red-500 font-bold">NEW</sup>
                </a>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg"><Link to={"/login"}>Sign In</Link></button>
              </div>
            </nav>
            </div>
            <div className="filter-container" style={{ position: "relative" }}></div>
            <button className="filter-toggle-button"
              onClick={() => setShowFilters(!showFilters)}
              style={{  position: "relative", zIndex: 1000, marginTop: "73px", }}>
              Filter
            </button>

            {showFilters && (
                <div className="filter-section" style={{ position: "relative" }}>
                    <div className="filter-group">
                        <label>STATE</label>
                        <select className="filter-select" onChange={(e) => {
                            setSelectedState(e.target.value);
                            setSelectedCategory("All");
                        }}>
                            {Object.keys(dishes).map((state) => (
                                <option key={state} value={state}>{state}</option>
                            ))}
                        </select>
                    </div>
                    <div className="filter-group">
                        <label>CUISINES</label>
                        <select className="filter-select" onChange={(e) => setSelectedCategory(e.target.value)}>
                            <option value="All">All</option>
                            <option value="Veg Starters">Veg Starters</option>
                            <option value="Non-Veg Starters">Non-Veg Starters</option>
                            <option value="Veg Main Course">Veg Main Course</option>
                            <option value="Non-Veg Main Course">Non-Veg Main Course</option>
                            <option value="Desserts">Desserts</option>
                        </select>
                    </div>
                    <div className="filter-group" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <label style={{ marginRight: "10px", whiteSpace: "nowrap" }}>RATINGS</label>
                        <input type="range" min="0" max="5" step="0.5" value={selectedRating} onChange={(e) => setSelectedRating(parseFloat(e.target.value))} style={{ marginLeft: "10px" }} />
                        <p style={{ marginLeft: "10px", whiteSpace: "nowrap" }}>{selectedRating} - 5</p>
                    </div>

                    <div className="cart-icon filter-cart" onClick={handleCartClick} style={{
                        color: "#FF6700",
                        fontSize: "20px",
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)"
                    }}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                        {cart.length > 0 && (
                            <span className="cart-count" style={{
                                position: "absolute",
                                top: "-10px",
                                right: "-10px",
                                background: "#FF6700",
                                color: "white",
                                borderRadius: "50%",
                                padding: "5px",
                                fontSize: "12px"
                            }}>
                                {cart.length}
                            </span>
                        )}
                    </div>
                </div>
            )}

            {cartPopup === "items" && (
                <div className="cart-popup">
                    <div className="cart-popup-box">
                        <h3>Items in Cart</h3>
                        <div>
                            {cart.map((item, index) => (
                                <p key={index}>{item.name} - ₹{item.price}</p>
                            ))}
                        </div>
                        <button onClick={() => setCartPopup(null)}>OK</button>
                    </div>
                </div>
            )}

            {cartPopup === "empty" && (
                <div className="cart-popup">
                    <div className="cart-popup-box">
                        <p>No dishes in cart</p>
                        <button onClick={() => setCartPopup(null)}>OK</button>
                    </div>
                </div>
            )}

            {cartPopup === "alreadyInCart" && (
                <div className="cart-popup">
                    <div className="cart-popup-box">
                        <p>Already in cart</p>
                        <button onClick={() => setCartPopup(null)}>OK</button>
                    </div>
                </div>
            )}

{orderModal && (
    <div className="modal-overlay">
        <div className="modal-box">
            <h3>{orderModal.name}</h3>
            <p>Price: ₹{orderModal.price}</p>

            {/* Quantity Selector */}
            <div className="quantity-selector">
                <button 
                    onClick={() => setOrderModal(prev => ({
                        ...prev, 
                        quantity: Math.max(1, (prev.quantity || 1) - 1)
                    }))}
                >-</button>
                <span>{orderModal.quantity || 1}</span>
                <button 
                    onClick={() => setOrderModal(prev => ({
                        ...prev, 
                        quantity: (prev.quantity || 1) + 1
                    }))}
                >+</button>
            </div>

            {/* Total Price */}
            <p>Total: ₹{((orderModal.price || 0) * (orderModal.quantity || 1)).toFixed(2)}</p>

            {/* Order Inputs */}
            <div className="order-inputs" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15px' }}>
                <label>📞 Mobile No.</label>
                <input 
                    type="text" 
                    placeholder="Enter Mobile No." 
                    value={customerDetails.mobile} 
                    onChange={(e) => {
                        const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
                        setCustomerDetails(prev => ({ ...prev, mobile: value }));
                    }} 
                    style={{ padding: '8px', marginBottom: '10px' }} 
                />

                <label>🏠 Address</label>
                <input 
                    type="text" 
                    placeholder="Enter Address" 
                    value={customerDetails.address} 
                    onChange={(e) => setCustomerDetails(prev => ({ ...prev, address: e.target.value }))}
                    style={{ padding: '8px', marginBottom: '10px' }} 
                />

                <label>💳 Mode of Payment</label>
                <select 
                    onChange={(e) => setCustomerDetails(prev => ({ ...prev, paymentMode: e.target.value }))}
                    value={customerDetails.paymentMode} 
                    style={{ padding: '8px', marginBottom: '10px' }}
                >
                    <option value="Cash on Delivery">Cash on Delivery</option>
                    <option value="Online Payment">Online Payment</option>
                </select>
            </div>

            {/* Buttons */}
            <button onClick={() => handleConfirmOrder(orderModal, orderModal.quantity || 1)} style={{ marginTop: '10px' }}>Confirm Order</button>
            <button onClick={() => setOrderModal(null)} style={{ marginTop: '10px' }}>Cancel</button>
        </div>
    </div>
)}

            {orderConfirmed && (
                <div className="modal-overlay">
                    <div className="modal-box">
                        <h3>✅ Order Confirmed!</h3>
                        <p>Your order has been placed successfully!</p>
                        <p>📞 Mobile No.: {orderConfirmed.mobile}</p>
                        <p>🏠 Address: {orderConfirmed.address}</p>
                        <p>💳 Mode of Payment: {orderConfirmed.paymentMode}</p>
                        <button onClick={() => setOrderConfirmed(null)}>Close</button>
                    </div>
                </div>
            )}

            <div className="food-section">
                <h2 className="section-heading">Dishes from {selectedState}</h2>
                {filterDishes().length > 0 ? (
                    <div className="food-grid">
                        {filterDishes().map((item) => (
                            <div className="food-item menu-box" key={item.name}>
                                <img src={item.image} alt={item.name} className="food-img" />
                                <div className="separator" style={{ backgroundColor: '#FF6700', height: '2px', margin: '2px 2px' }}></div>
                                <div className="food-info">
                                    <h3>{item.name}</h3>
                                    <p>Price: ₹{item.price}</p>
                                    <p>Ratings: {item.ratings}</p>
                                </div>
                                <div className="food-actions">
                                    <button className="order-button" onClick={() => setOrderModal(item)}>Order Now</button>
                                    <button className="cart-button" onClick={() => addToCart(item)}>
                                        <FontAwesomeIcon icon={faShoppingCart} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="no-selection-message">Select a filter to view dishes</p>
                )}
            </div>
        </div>
    );
};

export default Menu;
