import React, { useState } from 'react';
import './Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import misalpav from "./images/misalpav.jpg";
import VadaPav from "./images/vadapav.jpg";
import SabudanaVada from "./images/sabudanavada.jpg";
import KothimbirVadi from "./images/kothimbirvadi.jpg";
import ChickenTikka from "./images/chickentikka.jpg";
import BombilFry from "./images/bombilfry.jpg";
import TandooriPomfret from "./images/tandoori pomfret.jpg";
import PrawnsKoliwada from "./images/Prawns Koliwada.jpg";
import PuranPoli from "./images/puranpoli.jpg";
import BharliVangi from "./images/Bharli Vangi.jpg";
import MasalaBhaat from "./images/Masala Bhaat.jpg";
import ZunkaBhakri from "./images/Zunka Bhakri.jpg";
import KolhapuriMutton from "./images/Kolhapuri Mutton.jpg";
import MalvaniFishCurry from "./images/Malvani Fish Curry.jpg";
import PrawnsCurry from "./images/Prawns Curry.jpg";
import KombdiVade from "./images/Kombdi Vade.jpg";
import Modak from "./images/modak.jpg";
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

// import rasmalai from "./images/rasmalai.jpg";
// import AlooBajji from "./images/AlooBajji.jpg";
// import AlooBonda from "./images/AlooBonda.jpg";
// import AlooGobi from "./images/AlooGobi.jpg";
// import AlooGobiParatha from "./images/AlooGobiParatha.jpg";
// import AlooGobiTikki from "./images/AlooGobiTikki.jpg";
// import AlooGobiMasala from "./images/AlooGobiMasala.jpg";
// import AlooGobiSabzi from "./images/AlooGobiSabzi.jpg";
// import AlooTikki from "./images/AlooTikki.jpg";
// import AlooKachori from "./images/AlooKachori.jpg";
// import AlooChaat from "./images/AlooChaat.jpg";
// import AlooParatha from "./images/AlooParatha.jpg";
// import AmritsariFish from "./images/AmritsariFish.jpg";
// import BananaBajji from "./images/BananaBajji.jpg";
// import BharliVangi from "./images/BharliVangi.jpg";
// import BombilFry from "./images/BombilFry.jpg";
// import ButterChicken from "./images/ButterChicken.jpg";
// import BaidaRoti from "./images/BaidaRoti.jpg";
// import BhelPuri from "./images/BhelPuri.jpg";
// import Biryani from "./images/Biryani.jpg";
// import Chaat from "./images/Chaat.jpg";
// import CholeTikki from "./images/CholeTikki.jpg";
// import CholeBhature from "./images/CholeBhature.jpg";
// import CholeMasala from "./images/CholeMasala.jpg";
// import CholePalak from "./images/CholePalak.jpg";
// import CholePuri from "./images/CholePuri.jpg";
// import CholeRice from "./images/CholeRice.jpg";
// import ChickenTikka from "./images/ChickenTikka.jpg";
// import ChickenPakora from "./images/ChickenPakora.jpg";
// import ChickenTikkaMasala from "./images/ChickenTikkaMasala.jpg";
// import DalBaatiChurma from "./images/DalBaatiChurma.jpg";
// import DalPakwan from "./images/DalPakwan.jpg";
// import DahiBhalla from "./images/DahiBhalla.jpg";
// import Dhokla from "./images/Dhokla.jpg";
// import Dhokli from "./images/Dhokli.jpg";
// import EggCurry from "./images/EggCurry.jpg";
// import FishFry from "./images/FishFry.jpg";
// import FishTikka from "./images/FishTikka.jpg";
// import Ghevar from "./images/Ghevar.jpg";
// import GobiManchurian from "./images/GobiManchurian.jpg";
// import GajarKaHalwa from "./images/GajarKaHalwa.jpg";
// import GheeRice from "./images/GheeRice.jpg";
// import GheeRiceWithChicken from "./images/GheeRiceWithChicken.jpg";
// import GheeRiceWithFish from "./images/GheeRiceWithFish.jpg";
// import GheeRiceWithMutton from "./images/GheeRiceWithMutton.jpg";
// import GheeRiceWithPrawns from "./images/GheeRiceWithPrawns.jpg";
// import GheeRiceWithVegetables from "./images/GheeRiceWithVegetables.jpg";
// import Ghugni from "./images/Ghugni.jpg";
// import Handvo from "./images/Handvo.jpg";
// import Idli from "./images/Idli.jpg";
// import IdliSambar from "./images/IdliSambar.jpg";
// import Jalebi from "./images/Jalebi.jpg";
// import Jangiri from "./images/Jangiri.jpg";
// import Kachori from "./images/Kachori.jpg";
// import KachoriChaat from "./images/KachoriChaat.jpg";
// import KachoriSabzi from "./images/KachoriSabzi.jpg";
// import KachoriWithChole from "./images/KachoriWithChole.jpg";
// import KachoriWithPotato from "./images/KachoriWithPotato.jpg";
// import KachoriWithVegetables from "./images/KachoriWithVegetables.jpg";
// import KachoriWithPaneer from "./images/KachoriWithPaneer.jpg";
// import KachoriWithChicken from "./images/KachoriWithChicken.jpg";
// import KachoriWithFish from "./images/KachoriWithFish.jpg";
// import KachoriWithMutton from "./images/KachoriWithMutton.jpg";
// import KachoriWithPrawns from "./images/KachoriWithPrawns.jpg";
// import KachoriWithEgg from "./images/KachoriWithEgg.jpg";
// import DalMakhani from "./images/DalMakhani.jpg";
// import KadaiPaneer from "./images/KadaiPaneer.jpg";
// import KadaiChicken from "./images/KadaiChicken.jpg";
// import KadaiPaneerWithChole from "./images/KadaiPaneerWithChole.jpg";
// import KadaiPaneerWithPotato from "./images/KadaiPaneerWithPotato.jpg";
// import KadaiPaneerWithVegetables from "./images/KadaiPaneerWithVegetables.jpg";
// import KadaiPaneerWithPaneer from "./images/KadaiPaneerWithPaneer.jpg";
// import KadaiPaneerWithChicken from "./images/KadaiPaneerWithChicken.jpg";
// import KadaiPaneerWithFish from "./images/KadaiPaneerWithFish.jpg";
// import KothimbirVadi from "./images/KothimbirVadi.jpg";
// import FishCurry from "./images/FishCurry.jpg";
// import GatteKiSabzi from "./images/GatteKiSabzi.jpg";
// import GheeRiceWithEgg from "./images/GheeRiceWithEgg.jpg";
// import GheeRiceWithAloo from "./images/GheeRiceWithAloo.jpg";
// import GheeRiceWithKachori from "./images/GheeRiceWithKachori.jpg";
// import GheeRiceWithSamosa from "./images/GheeRiceWithSamosa.jpg";
// import GheeRiceWithChole from "./images/GheeRiceWithChole.jpg";
// import GulabJamun from "./images/GulabJamun.jpg";
// import IdliChutney from "./images/IdliChutney.jpg";
// import IdliChutneySambar from "./images/IdliChutneySambar.jpg";
// import IdliSambharChutney from "./images/IdliSambharChutney.jpg";
// import IdliSambharChutneyWithChole from "./images/IdliSambharChutneyWithChole.jpg";
// import IdliSambharChutneyWithPotato from "./images/IdliSambharChutneyWithPotato.jpg";
// import IdliSambharChutneyWithVegetables from "./images/IdliSambharChutneyWithVegetables.jpg";
// import IdliSambharChutneyWithPaneer from "./images/IdliSambharChutneyWithPaneer.jpg";
// import IdliSambhar from "./images/IdliSambhar.jpg";
// import KolhapuriMutton from "./images/KolhapuriMutton.jpg";
// import KombdiVade from "./images/KombdiVade.jpg";
// import LaalMaas from "./images/LaalMaas.jpg";
// import LittiChokha from "./images/LittiChokha.jpg";
// import MalaiChicken from "./images/MalaiChicken.jpg";
// import MalaiPaneer from "./images/MalaiPaneer.jpg";
// import MalaiTikka from "./images/MalaiTikka.jpg";
// import MalaiTikkaMasala from "./images/MalaiTikkaMasala.jpg";
// import MalaiTikkaRoll from "./images/MalaiTikkaRoll.jpg";
// import MalaiTikkaWithChole from "./images/MalaiTikkaWithChole.jpg";
// import MalaiTikkaWithPotato from "./images/MalaiTikkaWithPotato.jpg";
// import MalaiTikkaWithVegetables from "./images/MalaiTikkaWithVegetables.jpg";
// import MalaiTikkaWithPaneer from "./images/MalaiTikkaWithPaneer.jpg";
// import MalaiTikkaWithChicken from "./images/MalaiTikkaWithChicken.jpg";
// import MalaiTikkaWithFish from "./images/MalaiTikkaWithFish.jpg";
// import MalaiTikkaWithMutton from "./images/MalaiTikkaWithMutton.jpg";
// import MalaiTikkaWithPrawns from "./images/MalaiTikkaWithPrawns.jpg";
// import MalaiKofta from "./images/MalaiKofta.jpg";
// import MalvaniFishCurry from "./images/MalvaniFishCurry.jpg";
// import MeduVada from "./images/MeduVada.jpg";
// import MysorePak from "./images/MysorePak.jpg";
// import MishtiDoi from "./images/MishtiDoi.jpg";
// import MocharChop from "./images/MocharChop.jpg";
// import MoongDalKachori from "./images/MoongDalKachori.jpg";
// import MuttonBiryani from "./images/MuttonBiryani.jpg";
// import NethiliFry from "./images/NethiliFry.jpg";
// import Naan from "./images/Naan.jpg";
// import NaanWithChole from "./images/NaanWithChole.jpg";
// import NaanWithPotato from "./images/NaanWithPotato.jpg";
// import NaanWithVegetables from "./images/NaanWithVegetables.jpg";
// import NaanWithPaneer from "./images/NaanWithPaneer.jpg";
// import NaanWithChicken from "./images/NaanWithChicken.jpg";
// import NaanWithFish from "./images/NaanWithFish.jpg";
// import NaanWithMutton from "./images/NaanWithMutton.jpg";
// import NaanWithPrawns from "./images/NaanWithPrawns.jpg";
// import NaanWithEgg from "./images/NaanWithEgg.jpg";
// import NaanWithAloo from "./images/NaanWithAloo.jpg";
// import NaanWithKachori from "./images/NaanWithKachori.jpg";
// import NaanWithSamosa from "./images/NaanWithSamosa.jpg";
// import Noodles from "./images/Noodles.jpg";
// import OnionBhaji from "./images/OnionBhaji.jpg";
// import OnionBhajiWithChole from "./images/OnionBhajiWithChole.jpg";
// import OnionBhajiWithPotato from "./images/OnionBhajiWithPotato.jpg";
// import OnionBhajiWithVegetables from "./images/OnionBhajiWithVegetables.jpg";
// import OnionBhajiWithPaneer from "./images/OnionBhajiWithPaneer.jpg";
// import OnionBhajiWithChicken from "./images/OnionBhajiWithChicken.jpg";
// import OnionBhajiWithFish from "./images/OnionBhajiWithFish.jpg";
// import OnionBhajiWithMutton from "./images/OnionBhajiWithMutton.jpg";
// import OnionBhajiWithPrawns from "./images/OnionBhajiWithPrawns.jpg";
// import OnionBhajiWithEgg from "./images/OnionBhajiWithEgg.jpg";
// import OnionBhajiWithAloo from "./images/OnionBhajiWithAloo.jpg";
// import OnionBhajiWithKachori from "./images/OnionBhajiWithKachori.jpg";
// import OnionBhajiWithSamosa from "./images/OnionBhajiWithSamosa.jpg";
// import OnionPakora from "./images/OnionPakora.jpg";
// import Pakora from "./images/Pakora.jpg";
// import PaneerButterChicken from "./images/PaneerButterChicken.jpg";
// import PaneerButterMasala from "./images/PaneerButterMasala.jpg";
// import PaneerKadhai from "./images/PaneerKadhai.jpg";
// import PaneerKachori from "./images/PaneerKachori.jpg";
// import PaneerKachoriWithChole from "./images/PaneerKachoriWithChole.jpg";
// import PaneerKachoriWithPotato from "./images/PaneerKachoriWithPotato.jpg";
// import PaneerKachoriWithVegetables from "./images/PaneerKachoriWithVegetables.jpg";
// import PaneerKachoriWithPaneer from "./images/PaneerKachoriWithPaneer.jpg";
// import PaneerKachoriWithChicken from "./images/PaneerKachoriWithChicken.jpg";
// import PaneerKachoriWithFish from "./images/PaneerKachoriWithFish.jpg"; 
// import Paniyaram from "./images/Paniyaram.jpg";
// import PaniyaramWithChole from "./images/PaniyaramWithChole.jpg";
// import PaniyaramWithPotato from "./images/PaniyaramWithPotato.jpg";
// import PaniyaramWithVegetables from "./images/PaniyaramWithVegetables.jpg";
// import PaniyaramWithPaneer from "./images/PaniyaramWithPaneer.jpg";
// import PaniyaramWithChicken from "./images/PaniyaramWithChicken.jpg";
// import PaniyaramWithFish from "./images/PaniyaramWithFish.jpg";
// import PaniyaramWithMutton from "./images/PaniyaramWithMutton.jpg";
// import PaniyaramWithPrawns from "./images/PaniyaramWithPrawns.jpg";
// import PaniyaramWithEgg from "./images/PaniyaramWithEgg.jpg";
// import PaneerBiryani from "./images/PaneerBiryani.jpg";
// import PaneerBiryaniWithChole from "./images/PaneerBiryaniWithChole.jpg";
// import PaneerBiryaniWithPotato from "./images/PaneerBiryaniWithPotato.jpg";
// import PaneerBiryaniWithVegetables from "./images/PaneerBiryaniWithVegetables.jpg";
// import PaneerBiryaniWithPaneer from "./images/PaneerBiryaniWithPaneer.jpg";
// import PaneerBiryaniWithChicken from "./images/PaneerBiryaniWithChicken.jpg";
// import PaneerBiryaniWithFish from "./images/PaneerBiryaniWithFish.jpg";
// import PaneerBiryaniWithMutton from "./images/PaneerBiryaniWithMutton.jpg";
// import PaneerBiryaniWithPrawns from "./images/PaneerBiryaniWithPrawns.jpg";
// import PaneerBiryaniWithEgg from "./images/PaneerBiryaniWithEgg.jpg";
// import PaneerBiryaniWithAloo from "./images/PaneerBiryaniWithAloo.jpg";
// import PaneerBiryaniWithKachori from "./images/PaneerBiryaniWithKachori.jpg";
// import PaneerBiryaniWithSamosa from "./images/PaneerBiryaniWithSamosa.jpg";
// import PaneerMasala from "./images/PaneerMasala.jpg";
// import PaneerParatha from "./images/PaneerParatha.jpg";
// import PaneerPakora from "./images/PaneerPakora.jpg";
// import PaneerTikkaMasala from "./images/PaneerTikkaMasala.jpg";
// import PaneerTikkaRoll from "./images/PaneerTikkaRoll.jpg";
// import PaneerTikkaWithChole from "./images/PaneerTikkaWithChole.jpg";
// import PaneerTikkaWithPotato from "./images/PaneerTikkaWithPotato.jpg";
// import PaneerTikkaWithVegetables from "./images/PaneerTikkaWithVegetables.jpg";
// import PaneerTikkaWithPaneer from "./images/PaneerTikkaWithPaneer.jpg";
// import PaneerTikkaWithChicken from "./images/PaneerTikkaWithChicken.jpg";
// import PaneerTikkaWithFish from "./images/PaneerTikkaWithFish.jpg";
// import PaneerTikkaWithMutton from "./images/PaneerTikkaWithMutton.jpg";
// import PaneerTikkaWithPrawns from "./images/PaneerTikkaWithPrawns.jpg";
// import PaneerTikkaWithEgg from "./images/PaneerTikkaWithEgg.jpg";
// import PaniPuri from "./images/PaniPuri.jpg";
// import PuranPuri from "./images/PuranPuri.jpg";
// import PrawnsCurry from "./images/PrawnsCurry.jpg";
// import PrawnsKoliwada from "./images/PrawnsKoliwada.jpg";
// import PrawnsMasala from "./images/PrawnsMasala.jpg";
// import PrawnsTikka from "./images/PrawnsTikka.jpg";
// import PrawnsTikkaMasala from "./images/PrawnsTikkaMasala.jpg";
// import PrawnsTikkaRoll from "./images/PrawnsTikkaRoll.jpg";
// import PrawnsTikkaWithChole from "./images/PrawnsTikkaWithChole.jpg";
// import PrawnsTikkaWithPotato from "./images/PrawnsTikkaWithPotato.jpg";
// import PrawnsTikkaWithVegetables from "./images/PrawnsTikkaWithVegetables.jpg";
// import PrawnsTikkaWithPaneer from "./images/PrawnsTikkaWithPaneer.jpg";
// import PrawnsTikkaWithChicken from "./images/PrawnsTikkaWithChicken.jpg";
// import PrawnsTikkaWithFish from "./images/PrawnsTikkaWithFish.jpg";
// import PrawnsTikkaWithMutton from "./images/PrawnsTikkaWithMutton.jpg";
// import PrawnsTikkaWithPrawns from "./images/PrawnsTikkaWithPrawns.jpg";
// import PrawnsTikkaWithEgg from "./images/PrawnsTikkaWithEgg.jpg";
// import PrawnsTikkaWithAloo from "./images/PrawnsTikkaWithAloo.jpg";
// import PrawnsTikkaWithKachori from "./images/PrawnsTikkaWithKachori.jpg";
// import PrawnsTikkaWithSamosa from "./images/PrawnsTikkaWithSamosa.jpg";
// import PaneerTikka from "./images/PaneerTikka.jpg";
// import Rasmalai from "./images/Rasmalai.jpg";
// import RajmaChawal from "./images/RajmaChawal.jpg";
// import RawaIdli from "./images/RawaIdli.jpg";
// import RawaDosa from "./images/RawaDosa.jpg";
// import Roti from "./images/Roti.jpg";
// import SabudanaKhichdi from "./images/SabudanaKhichdi.jpg";
// import SabudanaKhichdiWithChole from "./images/SabudanaKhichdiWithChole.jpg";
// import SabudanaKhichdiWithPotato from "./images/SabudanaKhichdiWithPotato.jpg";
// import SabudanaKhichdiWithVegetables from "./images/SabudanaKhichdiWithVegetables.jpg";
// import SabudanaKhichdiWithPaneer from "./images/SabudanaKhichdiWithPaneer.jpg";
// import SabudanaVada from "./images/SabudanaVada.jpg";
// import Sambar from "./images/Sambar.jpg";
// import SambarSadham from "./images/SambarSadham.jpg";
// import Samosa from "./images/Samosa.jpg";
// import SamosaChaat from "./images/SamosaChaat.jpg";
// import SamosaWithChole from "./images/SamosaWithChole.jpg";
// import SamosaWithPotato from "./images/SamosaWithPotato.jpg";
// import SamosaWithVegetables from "./images/SamosaWithVegetables.jpg";
// import SamosaWithPaneer from "./images/SamosaWithPaneer.jpg";
// import SamosaWithChicken from "./images/SamosaWithChicken.jpg";
// import SamosaWithFish from "./images/SamosaWithFish.jpg";
// import SamosaWithMutton from "./images/SamosaWithMutton.jpg";
// import SamosaWithPrawns from "./images/SamosaWithPrawns.jpg";
// import SamosaWithEgg from "./images/SamosaWithEgg.jpg";
// import SeekhKebab from "./images/SeekhKebab.jpg";
// import ShrimpFriedRice from "./images/ShrimpFriedRice.jpg";
// import ShrimpFriedRiceWithChicken from "./images/ShrimpFriedRiceWithChicken.jpg";
// import ShrimpFriedRiceWithFish from "./images/ShrimpFriedRiceWithFish.jpg";
// import ShrimpFriedRiceWithMutton from "./images/ShrimpFriedRiceWithMutton.jpg";
// import ShrimpFriedRiceWithPrawns from "./images/ShrimpFriedRiceWithPrawns.jpg";
// import ShrimpFriedRiceWithVegetables from "./images/ShrimpFriedRiceWithVegetables.jpg";
// import ShrimpFriedRiceWithEgg from "./images/ShrimpFriedRiceWithEgg.jpg";
// import ShrimpFriedRiceWithPaneer from "./images/ShrimpFriedRiceWithPaneer.jpg";
// import ShrimpFriedRiceWithPotato from "./images/ShrimpFriedRiceWithPotato.jpg";
// import ShrimpFriedRiceWithChole from "./images/ShrimpFriedRiceWithChole.jpg";
// import ShrimpFriedRiceWithKachori from "./images/ShrimpFriedRiceWithKachori.jpg";
// import ShrimpFriedRiceWithSamosa from "./images/ShrimpFriedRiceWithSamosa.jpg";
// import ShrimpFriedRiceWithAloo from "./images/ShrimpFriedRiceWithAloo.jpg";
// import TandooriChicken from "./images/TandooriChicken.jpg";
// import TandooriPomfret from "./images/TandooriPomfret.jpg";
// import TandooriRoti from "./images/TandooriRoti.jpg";
// import Thalipeeth from "./images/Thalipeeth.jpg";
// import Upma from "./images/Upma.jpg";
// import Uttapam from "./images/Uttapam.jpg";
// import Vada from "./images/Vada.jpg";  
// import VadaSambar from "./images/VadaSambar.jpg";
// import VadaPav from "./images/VadaPav.jpg";


const dishes = {
    Maharashtra: [
        // Veg Starters
        // { name: 'Misal Pav', price: 50, ratings: 4.6, type: 'Veg Starters', image: require('../assets/misalpav.jpg') }, //wrong
        { name: 'Misal Pav', price: 50, ratings: 4.6, type: 'Veg Starters', image: misalpav }, //right
        { name: 'Vada Pav', price: 30, ratings: 4.5, type: 'Veg Starters', image: VadaPav },
        { name: 'Sabudana Vada', price: 40, ratings: 4.7, type: 'Veg Starters', image: SabudanaVada },
        { name: 'Kothimbir Vadi', price: 35, ratings: 4.6, type: 'Veg Starters', image: KothimbirVadi },
    
        // Non-Veg Starters
        { name: 'Chicken Tikka', price: 200, ratings: 4.5, type: 'Non-Veg Starters', image: ChickenTikka },
        { name: 'Bombil Fry', price: 180, ratings: 4.7, type: 'Non-Veg Starters', image: BombilFry },
        { name: 'Tandoori Pomfret', price: 250, ratings: 4.6, type: 'Non-Veg Starters', image: TandooriPomfret },
        { name: 'Prawns Koliwada', price: 230, ratings: 4.7, type: 'Non-Veg Starters', image: PrawnsKoliwada },
    
        // Veg Main Course
        { name: 'Puran Poli', price: 40, ratings: 4.8, type: 'Veg Main Course', image: PuranPoli  },
        { name: 'Bharli Vangi', price: 70, ratings: 4.6, type: 'Veg Main Course', image: BharliVangi },
        { name: 'Masala Bhaat', price: 60, ratings: 4.5, type: 'Veg Main Course', image: MasalaBhaat },
        { name: 'Zunka Bhakri', price: 50, ratings: 4.7, type: 'Veg Main Course', image: ZunkaBhakri },
    
        // Non-Veg Main Course
        { name: 'Kolhapuri Mutton', price: 300, ratings: 4.6, type: 'Non-Veg Main Course', image: KolhapuriMutton },
        { name: 'Malvani Fish Curry', price: 280, ratings: 4.7, type: 'Non-Veg Main Course', image: MalvaniFishCurry },
        { name: 'Prawns Curry', price: 250, ratings: 4.8, type: 'Non-Veg Main Course', image: PrawnsCurry },
        { name: 'Kombdi Vade', price: 270, ratings: 4.7, type: 'Non-Veg Main Course', image: KombdiVade },
    
        // Desserts
        { name: 'Modak', price: 90, ratings: 4.8, type: 'Desserts', image: Modak },
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
    // Rajasthan: [
    //     { name: 'Dal Baati Churma', price: 120, ratings: 4.9, type: 'Veg Main Course', image: DalBaatiChurma },
    //     { name: 'Gatte Ki Sabzi', price: 100, ratings: 4.7, type: 'Veg Main Course', image: GatteKiSabzi },
    //     { name: 'Laal Maas', price: 350, ratings: 4.8, type: 'Non-Veg Main Course', image: LaalMaas },
    //     { name: 'Ghevar', price: 90, ratings: 4.9, type: 'Desserts', image: Ghevar }
    // ],
    // TamilNadu: [
    //     { name: 'Medu Vada', price: 40, ratings: 4.7, type: 'Veg Starters', image: MeduVada },
    //     { name: 'Banana Bajji', price: 30, ratings: 4.6, type: 'Veg Starters', image: BananaBajji },
    //     { name: 'Nethili Fry', price: 200, ratings: 4.7, type: 'Non-Veg Starters', image: NethiliFry },
    //     { name: 'Sambar Sadham', price: 80, ratings: 4.8, type: 'Veg Main Course', image: SambarSadham },
    //     { name: 'Fish Curry', price: 250, ratings: 4.8, type: 'Non-Veg Main Course', image: FishCurry },
    //     { name: 'Mysore Pak', price: 120, ratings: 4.8, type: 'Desserts', image: MysorePak },
    //     { name: 'Jangiri', price: 90, ratings: 4.8, type: 'Desserts', image: Jangiri }
    // ],
    // WestBengal: [
    //     { name: 'Mochar Chop', price: 50, ratings: 4.7, type: 'Veg Starters', image: MocharChop },
    //     { name: 'Fish Fry', price: 200, ratings: 4.8, type: 'Non-Veg Starters', image: FishFry },
    //     { name: 'Mishti Doi', price: 70, ratings: 4.8, type: 'Desserts', image: MishtiDoi }
    // ],
    // Gujarat: [
    //     { name: 'Dhokla', price: 50, ratings: 4.8, type: 'Veg Starters', image: Dhokla },
    //     { name: 'Handvo', price: 70, ratings: 4.5, type: 'Veg Starters', image: Handvo }
    // ],
    // Kerala: [
    //     { name: 'Prawns Fry', price: 250, ratings: 4.7, type: 'Non-Veg Starters', image: PrawnsKoliwada },
    //     { name: 'Malabar Biryani', price: 300, ratings: 4.9, type: 'Non-Veg Main Course', image: MuttonBiryani }
    // ],
    // AndhraPradesh: [
    //     { name: 'Gutti Vankaya', price: 120, ratings: 4.8, type: 'Veg Main Course', image: GuttiVankaya },
    //     { name: 'Andhra Chicken Curry', price: 300, ratings: 4.9, type: 'Non-Veg Main Course', image: ChickenTikkaMasala }
    // ],
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
        <div className="bg-white menu-page">
            <div className="navbar-spacing"></div>
            <div className="filter-container" style={{ position: "relative" }}></div>
            <button className="filter-toggle-button"
              onClick={() => setShowFilters(!showFilters)}
              style={{ position: "relative", zIndex: 1000 }}>
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