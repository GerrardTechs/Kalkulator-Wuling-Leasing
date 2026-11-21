// src/data/wulingData.js

export const LEASING_RATES = {
  ADIRA: { 12: 0.055, 24: 0.062, 36: 0.068, 48: 0.076, 60: 0.084, type: 'ADDM' },
  CIMB: { 11: 0.052, 23: 0.058, 35: 0.064, 47: 0.072, 59: 0.080, type: 'ADDM' },
  SGMW: { 12: 0.0526, 24: 0.0584, 36: 0.0712, 48: 0.079, 60: 0.086, type: 'ADDB' },
  MTF: { 12: 0.054, 24: 0.060, 36: 0.066, 48: 0.075, 60: 0.083, type: 'ADDB' },
  INDOMOBIL: { 12: 0.058, 24: 0.065, 36: 0.072, 48: 0.080, 60: 0.088, 96: 0.095, type: 'ADDB' }
};

const SUB_ICE_25 = { SGMW: 8000000, ADIRA: 4000000, CIMB: 4000000, MTF: 4000000, INDOMOBIL: 4000000 };
const SUB_EV_25_BIG = { SGMW: 25000000, ADIRA: 15000000, CIMB: 15000000, MTF: 15000000, INDOMOBIL: 15000000 };
const SUB_BINGUO = { SGMW: 10000000, ADIRA: 10000000, CIMB: 10000000, MTF: 10000000, INDOMOBIL: 10000000 };
const SUB_CLOUD_LITE_25 = { SGMW: 20000000, ADIRA: 15000000, CIMB: 15000000, MTF: 15000000, INDOMOBIL: 15000000 };
const SUB_INSURANCE_4M = { SGMW: 4000000, ADIRA: 4000000, CIMB: 4000000, MTF: 4000000, INDOMOBIL: 4000000 };
const SUB_INSURANCE_8M = { SGMW: 8000000, ADIRA: 8000000, CIMB: 8000000, MTF: 8000000, INDOMOBIL: 8000000 };
const SUB_EKSION_26 = { SGMW: 15000000, ADIRA: 8000000, CIMB: 8000000, MTF: 8000000, INDOMOBIL: 8000000 };
const SUB_ZERO = { SGMW: 0, ADIRA: 0, CIMB: 0, MTF: 0, INDOMOBIL: 0 };

export const VEHICLES = [
  {
    id: 'aira_ev_std',
    name: 'AIRA EV STANDARD RANGE',
    type: 'EV',
    otr: 168500000,
    disc: { '2025': 0, '2026': 0 },
    subvention: { '2025': SUB_EV_25_BIG, '2026': SUB_INSURANCE_4M },
    canRoyalis: false,
    canTradeIn: false,
    salesProgram: [
      'Lifetime Core EV Warranty (Power Battery, Drive Motor, MCU)',
      'Subvention NIK 26 (Free Insurance): Rp 4 Juta (Semua Leasing)',
      'Gratis Biaya Jasa & Suku Cadang Perawatan Berkala',
      'Paket Spesial DP 10 Juta (Angsuran Rp 4.559.000 x 60 bln)'
    ],
    stock: { '2025': [], '2026': [{ color: 'Starburst Black', loc: 'G. Lampung', note: 'Ready' }] },
    pricelist: {
      ADIRA: [
        { tenor: 12, tdp: 26280000, angsuran: 13867000 },
        { tenor: 24, tdp: 26280000, angsuran: 7632000 },
        { tenor: 36, tdp: 27960000, angsuran: 5564000 },
        { tenor: 48, tdp: 29650000, angsuran: 4522000 },
        { tenor: 60, tdp: 32180000, angsuran: 3924000 }
      ],
      CIMB: [
        { tenor: 11, tdp: 54322000, angsuran: 12172000 },
        { tenor: 23, tdp: 51563000, angsuran: 6300000 },
        { tenor: 35, tdp: 51253500, angsuran: 4311000 },
        { tenor: 47, tdp: 52295000, angsuran: 3436000 },
        { tenor: 59, tdp: 53614500, angsuran: 2922000 }
      ],
      SGMW: [
        { tenor: 12, label: 'DP 15%', tdp: 31275000, angsuran: 12982000 },
        { tenor: 24, label: 'DP 15%', tdp: 31275000, angsuran: 6952000 },
        { tenor: 36, label: 'DP 15%', tdp: 31275000, angsuran: 5061000 },
        { tenor: 12, label: 'DP 20%', tdp: 39700000, angsuran: 12243000 },
        { tenor: 24, label: 'DP 20%', tdp: 39700000, angsuran: 6560000 },
        { tenor: 36, label: 'DP 20%', tdp: 39700000, angsuran: 4777000 },
        { tenor: 12, label: 'DP 30%', tdp: 56550000, angsuran: 10762000 },
        { tenor: 24, label: 'DP 30%', tdp: 56550000, angsuran: 5771000 },
        { tenor: 36, label: 'DP 30%', tdp: 56550000, angsuran: 4206000 },
        { tenor: 60, label: 'Paket Promo DP 10 Jt', tdp: 10000000, angsuran: 4559000, isNettPromo: true }
      ],
      MTF: [
        { tenor: 12, tdp: 29275000, angsuran: 13542000 },
        { tenor: 24, tdp: 29275000, angsuran: 7296000 },
        { tenor: 36, tdp: 29275000, angsuran: 5140000 },
        { tenor: 48, tdp: 29275000, angsuran: 4281000 },
        { tenor: 60, tdp: 29275000, angsuran: 3730000 }
      ]
    }
  },
  {
    id: 'aira_ev_lr',
    name: 'AIRA EV LONG RANGE',
    type: 'EV',
    otr: 188500000,
    disc: { '2025': 0, '2026': 0 },
    subvention: { '2025': SUB_EV_25_BIG, '2026': SUB_INSURANCE_4M },
    canRoyalis: false,
    canTradeIn: false,
    salesProgram: ['Subvention NIK 26 (Free Insurance): Rp 4 Juta (Semua Leasing)'],
    stock: { '2025': [], '2026': [{ color: 'Starburst Black', loc: 'G. Lampung', note: 'Ready' }] },
    pricelist: {
      ADIRA: [
        { tenor: 12, tdp: 29280000, angsuran: 15470000 },
        { tenor: 24, tdp: 29280000, angsuran: 8514000 },
        { tenor: 36, tdp: 31160000, angsuran: 6205000 },
        { tenor: 48, tdp: 33050000, angsuran: 5043000 },
        { tenor: 60, tdp: 34930000, angsuran: 4399000 }
      ],
      CIMB: [
        { tenor: 11, tdp: 60199000, angsuran: 13617000 },
        { tenor: 23, tdp: 56946000, angsuran: 7048000 },
        { tenor: 35, tdp: 56527500, angsuran: 4822000 },
        { tenor: 47, tdp: 57795000, angsuran: 3843000 },
        { tenor: 59, tdp: 59163500, angsuran: 3269000 }
      ],
      SGMW: [
        { tenor: 12, label: 'DP 15%', tdp: 34275000, angsuran: 14522000 },
        { tenor: 24, label: 'DP 15%', tdp: 34275000, angsuran: 7777000 },
        { tenor: 36, label: 'DP 15%', tdp: 34275000, angsuran: 5661000 },
        { tenor: 12, label: 'DP 20%', tdp: 43700000, angsuran: 13695000 },
        { tenor: 24, label: 'DP 20%', tdp: 43700000, angsuran: 7337000 },
        { tenor: 36, label: 'DP 20%', tdp: 43700000, angsuran: 5343000 },
        { tenor: 12, label: 'DP 30%', tdp: 62550000, angsuran: 12039000 },
        { tenor: 24, label: 'DP 30%', tdp: 62550000, angsuran: 6456000 },
        { tenor: 36, label: 'DP 30%', tdp: 62550000, angsuran: 4705000 },
        { tenor: 60, label: 'Paket Promo DP 10 Jt', tdp: 10000000, angsuran: 5093000, isNettPromo: true }
      ],
      MTF: [
        { tenor: 12, tdp: 32275000, angsuran: 15148000 },
        { tenor: 24, tdp: 32275000, angsuran: 8161000 },
        { tenor: 36, tdp: 32275000, angsuran: 5749000 },
        { tenor: 48, tdp: 32275000, angsuran: 4793000 },
        { tenor: 60, tdp: 32275000, angsuran: 4181000 }
      ]
    }
  },
  {
    id: 'air_ev_lite_200',
    name: 'NEW AIR EV LITE 200',
    type: 'EV',
    otr: 246000000,
    disc: { '2025': 63000000, '2026': 0 },
    subvention: { '2025': SUB_EV_25_BIG, '2026': SUB_INSURANCE_4M }, // LITE NIK 26 hanya 4 Juta
    canRoyalis: false,
    canTradeIn: false,
    salesProgram: [
      'Subvention Lite NIK 26 (Free Insurance): Rp 4 Juta',
      'Diskon Besar NIK 2025 hingga Rp 63.000.000',
      'Gratis Kaca Film, Karpet, APAR & Charger Portable'
    ],
    stock: { '2025': [], '2026': [] },
    pricelist: {
      ADIRA: [
        { tenor: 12, tdp: 50200000, angsuran: 18797000 },
        { tenor: 24, tdp: 50200000, angsuran: 10305000 },
        { tenor: 36, tdp: 50200000, angsuran: 7528000 },
        { tenor: 48, tdp: 50200000, angsuran: 6180000 },
        { tenor: 60, tdp: 50200000, angsuran: 5484000 }
      ],
      CIMB: [
        { tenor: 11, tdp: 75892000, angsuran: 17771000 },
        { tenor: 23, tdp: 70754000, angsuran: 9197000 },
        { tenor: 35, tdp: 70030500, angsuran: 6293000 },
        { tenor: 47, tdp: 71403000, angsuran: 5015000 },
        { tenor: 59, tdp: 73165500, angsuran: 4266000 }
      ],
      SGMW: [], MTF: []
    }
  },
  {
    id: 'air_ev_lite_300',
    name: 'NEW AIR EV LITE 300',
    type: 'EV',
    otr: 282900000,
    disc: { '2025': 88000000, '2026': 0 },
    subvention: { '2025': SUB_EV_25_BIG, '2026': SUB_INSURANCE_4M }, // LITE NIK 26 hanya 4 Juta
    canRoyalis: false,
    canTradeIn: false,
    salesProgram: [
      'Subvention Lite NIK 26 (Free Insurance): Rp 4 Juta',
      'Diskon Spesial NIK 2025 sebesar Rp 88.000.000',
      'Gratis Kaca Film, Karpet, APAR & Portable Charger'
    ],
    stock: { '2025': [], '2026': [] },
    pricelist: {
      ADIRA: [
        { tenor: 12, tdp: 57580000, angsuran: 21562000 },
        { tenor: 24, tdp: 57580000, angsuran: 11822000 },
        { tenor: 36, tdp: 57580000, angsuran: 8617000 },
        { tenor: 48, tdp: 57580000, angsuran: 7073000 },
        { tenor: 60, tdp: 57580000, angsuran: 6275000 }
      ],
      CIMB: [
        { tenor: 11, tdp: 86555000, angsuran: 20436000 },
        { tenor: 23, tdp: 80436000, angsuran: 10577000 },
        { tenor: 35, tdp: 79047500, angsuran: 7237000 },
        { tenor: 47, tdp: 80489000, angsuran: 5768000 },
        { tenor: 59, tdp: 82376500, angsuran: 4906000 }
      ],
      SGMW: [], MTF: []
    }
  },
  {
    id: 'air_ev_pro_300',
    name: 'NEW AIR EV PRO 300',
    type: 'EV',
    otr: 340100000,
    disc: { '2025': 103000000, '2026': 0 },
    subvention: { '2025': SUB_EV_25_BIG, '2026': SUB_EV_25_BIG }, // PRO NIK 26 TETAP DAPAT 25jt/15jt
    canRoyalis: false,
    canTradeIn: false,
    salesProgram: [
      'Subvention PRO NIK 26 (Special Leasing EV): Rp 25 Jt (SGMW) / Rp 15 Jt (Lainnya)',
      'Super Diskon NIK 2025 Rp 103.000.000 (Unit Ready Lampung)',
      'Gratis 7kW AC Charging Pile + Instalasi Standar'
    ],
    stock: { '2025': [{ color: 'Starry Night Black', loc: 'Showroom Lampung', note: 'Ready' }], '2026': [] },
    pricelist: {
      ADIRA: [
        { tenor: 12, tdp: 69020000, angsuran: 25850000 },
        { tenor: 24, tdp: 69020000, angsuran: 14173000 },
        { tenor: 36, tdp: 69020000, angsuran: 10327000 },
        { tenor: 48, tdp: 69020000, angsuran: 8463000 },
        { tenor: 60, tdp: 69020000, angsuran: 7494000 }
      ],
      CIMB: [
        { tenor: 11, tdp: 103084000, angsuran: 24568000 },
        { tenor: 23, tdp: 95444000, angsuran: 12715000 },
        { tenor: 35, tdp: 93655500, angsuran: 8700000 },
        { tenor: 47, tdp: 94680000, angsuran: 6934000 },
        { tenor: 59, tdp: 96277500, angsuran: 5898000 }
      ],
      SGMW: [], MTF: []
    }
  },
  {
    id: 'binguo_lite',
    name: 'NEW BINGUO EV LITE',
    type: 'EV',
    otr: 330400000,
    disc: { '2025': 0, '2026': 20000000 },
    subvention: { '2025': SUB_BINGUO, '2026': SUB_BINGUO },
    canRoyalis: false,
    canTradeIn: false,
    salesProgram: [
      'Subvention Leasing Binguo: Rp 10.000.000 (Semua Leasing)',
      'Gratis 7kW AC Charging Device + Instalasi',
      'Gratis Kaca Film, Karpet Set, APAR & Dongle/Adapter'
    ],
    stock: { '2025': [], '2026': [] },
    pricelist: {
      ADIRA: [
        { tenor: 12, tdp: 67080000, angsuran: 25123000 },
        { tenor: 24, tdp: 67080000, angsuran: 13774000 },
        { tenor: 36, tdp: 67080000, angsuran: 10037000 },
        { tenor: 48, tdp: 67080000, angsuran: 8239000 },
        { tenor: 60, tdp: 67080000, angsuran: 7307000 }
      ],
      CIMB: [
        { tenor: 11, tdp: 100281000, angsuran: 23867000 },
        { tenor: 23, tdp: 92899000, angsuran: 12353000 },
        { tenor: 35, tdp: 91177500, angsuran: 8452000 },
        { tenor: 47, tdp: 92199000, angsuran: 6736000 },
        { tenor: 59, tdp: 93777500, angsuran: 5730000 }
      ],
      SGMW: [
        { tenor: 12, label: 'DP 15%', tdp: 55560000, angsuran: 25304000 },
        { tenor: 24, label: 'DP 15%', tdp: 55560000, angsuran: 13521000 },
        { tenor: 36, label: 'DP 15%', tdp: 55560000, angsuran: 9823000 },
        { tenor: 12, label: 'DP 20%', tdp: 72080000, angsuran: 23854000 },
        { tenor: 24, label: 'DP 20%', tdp: 72080000, angsuran: 12750000 },
        { tenor: 36, label: 'DP 20%', tdp: 72080000, angsuran: 9265000 },
        { tenor: 12, label: 'DP 30%', tdp: 105120000, angsuran: 20952000 },
        { tenor: 24, label: 'DP 30%', tdp: 105120000, angsuran: 11205000 },
        { tenor: 36, label: 'DP 30%', tdp: 105120000, angsuran: 8147000 }
      ],
      MTF: [
        { tenor: 12, tdp: 53810000, angsuran: 26404000 },
        { tenor: 24, tdp: 53810000, angsuran: 14159000 },
        { tenor: 36, tdp: 53810000, angsuran: 9955000 },
        { tenor: 48, tdp: 53810000, angsuran: 8286000 },
        { tenor: 60, tdp: 53810000, angsuran: 7216000 }
      ]
    }
  },
  {
    id: 'binguo_pro',
    name: 'NEW BINGUO EV PRO',
    type: 'EV',
    otr: 375500000,
    disc: { '2025': 65000000, '2026': 40000000 },
    subvention: { '2025': SUB_BINGUO, '2026': SUB_BINGUO },
    canRoyalis: false,
    canTradeIn: false,
    salesProgram: [
      'Subvention Leasing Binguo: Rp 10.000.000 (Semua Leasing)',
      'Gratis Biaya Perawatan Berkala hingga 15,5 Tahun / 155.000 KM',
      'DC Fast Charging (30% ke 80% hanya ~30-35 menit)'
    ],
    stock: { '2025': [{ color: 'Starry Black', loc: 'Showroom Lampung', note: 'Ready' }], '2026': [] },
    pricelist: {
      ADIRA: [
        { tenor: 12, tdp: 76100000, angsuran: 28503000 },
        { tenor: 24, tdp: 76100000, angsuran: 15628000 },
        { tenor: 36, tdp: 76100000, angsuran: 11385000 },
        { tenor: 48, tdp: 76100000, angsuran: 9331000 },
        { tenor: 60, tdp: 76100000, angsuran: 8261000 }
      ],
      CIMB: [
        { tenor: 11, tdp: 113313000, angsuran: 27125000 },
        { tenor: 23, tdp: 104731000, angsuran: 14039000 },
        { tenor: 35, tdp: 102694500, angsuran: 9606000 },
        { tenor: 47, tdp: 103729000, angsuran: 7655000 },
        { tenor: 59, tdp: 105397500, angsuran: 6512000 }
      ],
      SGMW: [
        { tenor: 12, label: 'DP 15%', tdp: 62325000, angsuran: 28757000 },
        { tenor: 24, label: 'DP 15%', tdp: 62325000, angsuran: 15366000 },
        { tenor: 36, label: 'DP 15%', tdp: 62325000, angsuran: 11163000 },
        { tenor: 12, label: 'DP 20%', tdp: 81100000, angsuran: 27109000 },
        { tenor: 24, label: 'DP 20%', tdp: 81100000, angsuran: 14490000 },
        { tenor: 36, label: 'DP 20%', tdp: 81100000, angsuran: 10529000 },
        { tenor: 12, label: 'DP 30%', tdp: 118650000, angsuran: 23811000 },
        { tenor: 24, label: 'DP 30%', tdp: 118650000, angsuran: 12734000 },
        { tenor: 36, label: 'DP 30%', tdp: 118650000, angsuran: 9258000 }
      ],
      MTF: [
        { tenor: 12, tdp: 60575000, angsuran: 30006000 },
        { tenor: 24, tdp: 60575000, angsuran: 16090000 },
        { tenor: 36, tdp: 60575000, angsuran: 11312000 },
        { tenor: 48, tdp: 60575000, angsuran: 9416000 },
        { tenor: 60, tdp: 60575000, angsuran: 8199000 }
      ]
    }
  },
  {
    id: 'binguo_lite_my26',
    name: 'NEW BINGUO EV LITE MY 26',
    type: 'EV',
    otr: 301500000,
    disc: { '2025': 0, '2026': 27000000 },
    subvention: { '2025': SUB_BINGUO, '2026': SUB_BINGUO },
    canRoyalis: false,
    canTradeIn: false,
    salesProgram: ['Subvention Leasing Binguo: Rp 10.000.000 (Semua Leasing)'],
    stock: { '2025': [], '2026': [] },
    pricelist: {
      ADIRA: [
        { tenor: 12, tdp: 61300000, angsuran: 22956000 },
        { tenor: 24, tdp: 61300000, angsuran: 12586000 },
        { tenor: 36, tdp: 61300000, angsuran: 9173000 },
        { tenor: 48, tdp: 61300000, angsuran: 7530000 },
        { tenor: 60, tdp: 61300000, angsuran: 6679000 }
      ],
      CIMB: [
        { tenor: 11, tdp: 91930000, angsuran: 21780000 },
        { tenor: 23, tdp: 85316000, angsuran: 11272000 },
        { tenor: 35, tdp: 83798500, angsuran: 7713000 },
        { tenor: 47, tdp: 84810000, angsuran: 6147000 },
        { tenor: 59, tdp: 86762500, angsuran: 5229000 }
      ],
      SGMW: [],
      MTF: [
        { tenor: 12, tdp: 49475000, angsuran: 24095000 },
        { tenor: 24, tdp: 49475000, angsuran: 12921000 },
        { tenor: 36, tdp: 49475000, angsuran: 9085000 },
        { tenor: 48, tdp: 49475000, angsuran: 7562000 },
        { tenor: 60, tdp: 49475000, angsuran: 6586000 }
      ]
    }
  },
  {
    id: 'binguo_pro_my26',
    name: 'NEW BINGUO EV PRO MY 26',
    type: 'EV',
    otr: 331500000,
    disc: { '2025': 0, '2026': 27000000 },
    subvention: { '2025': SUB_BINGUO, '2026': SUB_BINGUO },
    canRoyalis: false,
    canTradeIn: false,
    salesProgram: ['Subvention Leasing Binguo: Rp 10.000.000 (Semua Leasing)'],
    stock: { '2025': [], '2026': [] },
    pricelist: {
      ADIRA: [
        { tenor: 12, tdp: 67300000, angsuran: 25205000 },
        { tenor: 24, tdp: 67300000, angsuran: 13819000 },
        { tenor: 36, tdp: 67300000, angsuran: 10069000 },
        { tenor: 48, tdp: 67300000, angsuran: 8266000 },
        { tenor: 60, tdp: 67300000, angsuran: 7331000 }
      ],
      CIMB: [
        { tenor: 11, tdp: 100599000, angsuran: 23947000 },
        { tenor: 23, tdp: 93188000, angsuran: 12394000 },
        { tenor: 35, tdp: 91459500, angsuran: 8480000 },
        { tenor: 47, tdp: 92480000, angsuran: 6758000 },
        { tenor: 59, tdp: 94061500, angsuran: 5749000 }
      ],
      SGMW: [],
      MTF: [
        { tenor: 12, tdp: 53975000, angsuran: 26491000 },
        { tenor: 24, tdp: 53975000, angsuran: 14206000 },
        { tenor: 36, tdp: 53975000, angsuran: 9988000 },
        { tenor: 48, tdp: 53975000, angsuran: 8314000 },
        { tenor: 60, tdp: 53975000, angsuran: 7240000 }
      ]
    }
  },
  {
    id: 'cloud_lite_360',
    name: 'NEW CLOUD EV LITE 360',
    type: 'EV',
    otr: 310500000,
    disc: { '2025': 0, '2026': 0 },
    subvention: { '2025': SUB_CLOUD_LITE_25, '2026': SUB_ZERO },
    canRoyalis: true,
    canTradeIn: false,
    salesProgram: [
      'Subvention NIK 2025: SGMW 20 Jt / Leasing Lain 15 Jt',
      'Eligible Program Royalis Wuling (+ Rp 8 Juta)'
    ],
    stock: { '2025': [], '2026': [] },
    pricelist: {
      ADIRA: [
        { tenor: 12, tdp: 63100000, angsuran: 23631000 },
        { tenor: 24, tdp: 63100000, angsuran: 12956000 },
        { tenor: 36, tdp: 63100000, angsuran: 9442000 },
        { tenor: 48, tdp: 63100000, angsuran: 7751000 },
        { tenor: 60, tdp: 63100000, angsuran: 6875000 }
      ],
      CIMB: [
        { tenor: 11, tdp: 94530000, angsuran: 22430000 },
        { tenor: 23, tdp: 87678000, angsuran: 11609000 },
        { tenor: 35, tdp: 86095500, angsuran: 7943000 },
        { tenor: 47, tdp: 87110000, angsuran: 6330000 },
        { tenor: 59, tdp: 88649500, angsuran: 5385000 }
      ],
      SGMW: [
        { tenor: 12, label: 'DP 15%', tdp: 52575000, angsuran: 23781000 },
        { tenor: 24, label: 'DP 15%', tdp: 52575000, angsuran: 12707000 },
        { tenor: 36, label: 'DP 15%', tdp: 52575000, angsuran: 9232000 },
        { tenor: 12, label: 'DP 20%', tdp: 68100000, angsuran: 22418000 },
        { tenor: 24, label: 'DP 20%', tdp: 68100000, angsuran: 11982000 },
        { tenor: 36, label: 'DP 20%', tdp: 68100000, angsuran: 8708000 },
        { tenor: 12, label: 'DP 30%', tdp: 99150000, angsuran: 19691000 },
        { tenor: 24, label: 'DP 30%', tdp: 99150000, angsuran: 10531000 },
        { tenor: 36, label: 'DP 30%', tdp: 99150000, angsuran: 7656000 }
      ],
      MTF: [
        { tenor: 12, tdp: 50825000, angsuran: 24814000 },
        { tenor: 24, tdp: 50825000, angsuran: 13307000 },
        { tenor: 36, tdp: 50825000, angsuran: 9356000 },
        { tenor: 48, tdp: 50825000, angsuran: 7788000 },
        { tenor: 60, tdp: 50825000, angsuran: 6782000 }
      ]
    }
  },
  {
    id: 'cloud_pro_360',
    name: 'NEW CLOUD EV PRO 360',
    type: 'EV',
    otr: 350500000,
    disc: { '2025': 0, '2026': 0 },
    subvention: { '2025': SUB_CLOUD_LITE_25, '2026': SUB_ZERO },
    canRoyalis: true,
    canTradeIn: false,
    salesProgram: [
      'Subvention NIK 2025: SGMW 20 Jt / Leasing Lain 15 Jt',
      'Eligible Program Royalis Wuling (+ Rp 8 Juta)'
    ],
    stock: { '2025': [], '2026': [] },
    pricelist: {
      ADIRA: [
        { tenor: 12, tdp: 71100000, angsuran: 26629000 },
        { tenor: 24, tdp: 71100000, angsuran: 14600000 },
        { tenor: 36, tdp: 71100000, angsuran: 10637000 },
        { tenor: 48, tdp: 71100000, angsuran: 8718000 },
        { tenor: 60, tdp: 71100000, angsuran: 7719000 }
      ],
      CIMB: [
        { tenor: 11, tdp: 106088000, angsuran: 25319000 },
        { tenor: 23, tdp: 98171000, angsuran: 13104000 },
        { tenor: 35, tdp: 96309500, angsuran: 8966000 },
        { tenor: 47, tdp: 97337000, angsuran: 7146000 },
        { tenor: 59, tdp: 98955500, angsuran: 6078000 }
      ],
      SGMW: [
        { tenor: 12, label: 'DP 15%', tdp: 58575000, angsuran: 26843000 },
        { tenor: 24, label: 'DP 15%', tdp: 58575000, angsuran: 14343000 },
        { tenor: 36, label: 'DP 15%', tdp: 58575000, angsuran: 10420000 },
        { tenor: 12, label: 'DP 20%', tdp: 76100000, angsuran: 25305000 },
        { tenor: 24, label: 'DP 20%', tdp: 76100000, angsuran: 13525000 },
        { tenor: 36, label: 'DP 20%', tdp: 76100000, angsuran: 9829000 },
        { tenor: 12, label: 'DP 30%', tdp: 111150000, angsuran: 22226000 },
        { tenor: 24, label: 'DP 30%', tdp: 111150000, angsuran: 11887000 },
        { tenor: 36, label: 'DP 30%', tdp: 111150000, angsuran: 8642000 }
      ],
      MTF: [
        { tenor: 12, tdp: 56825000, angsuran: 28009000 },
        { tenor: 24, tdp: 56825000, angsuran: 15020000 },
        { tenor: 36, tdp: 56825000, angsuran: 10560000 },
        { tenor: 48, tdp: 56825000, angsuran: 8790000 },
        { tenor: 60, tdp: 56825000, angsuran: 7654000 }
      ]
    }
  },
  {
    id: 'cloud_lite_460',
    name: 'NEW CLOUD EV LITE 460',
    type: 'EV',
    otr: 428200000,
    disc: { '2025': 70000000, '2026': 33000000 },
    subvention: { '2025': SUB_CLOUD_LITE_25, '2026': SUB_ZERO },
    canRoyalis: true,
    canTradeIn: false,
    salesProgram: [
      'Subvention NIK 2025: SGMW 20 Jt / Leasing Lain 15 Jt',
      'Eligible Program Royalis Wuling (+ Rp 8 Juta)'
    ],
    stock: { '2025': [], '2026': [] },
    pricelist: {
      ADIRA: [
        { tenor: 12, tdp: 86640000, angsuran: 32038000 },
        { tenor: 24, tdp: 86640000, angsuran: 17568000 },
        { tenor: 36, tdp: 86640000, angsuran: 12797000 },
        { tenor: 48, tdp: 86640000, angsuran: 10489000 },
        { tenor: 60, tdp: 86640000, angsuran: 9285000 }
      ],
      CIMB: [], SGMW: [],
      MTF: [
        { tenor: 12, tdp: 68480000, angsuran: 33852000 },
        { tenor: 24, tdp: 68480000, angsuran: 18158000 },
        { tenor: 36, tdp: 68480000, angsuran: 12767000 },
        { tenor: 48, tdp: 68480000, angsuran: 10627000 },
        { tenor: 60, tdp: 68480000, angsuran: 9255000 }
      ]
    }
  },
  {
    id: 'cloud_pro_460',
    name: 'NEW CLOUD EV PRO 460',
    type: 'EV',
    otr: 456700000,
    disc: { '2025': 62000000, '2026': 30000000 },
    subvention: { '2025': SUB_CLOUD_LITE_25, '2026': SUB_ZERO },
    canRoyalis: true,
    canTradeIn: false,
    salesProgram: [
      'Subvention NIK 2025: SGMW 20 Jt / Leasing Lain 15 Jt',
      'Eligible Program Royalis Wuling (+ Rp 8 Juta)'
    ],
    stock: { '2025': [], '2026': [] },
    pricelist: {
      ADIRA: [
        { tenor: 12, tdp: 92240000, angsuran: 34110000 },
        { tenor: 24, tdp: 92240000, angsuran: 18704000 },
        { tenor: 36, tdp: 92240000, angsuran: 13624000 },
        { tenor: 48, tdp: 92240000, angsuran: 11166000 },
        { tenor: 60, tdp: 92240000, angsuran: 9884000 }
      ],
      CIMB: [], SGMW: [],
      MTF: [
        { tenor: 12, tdp: 72680000, angsuran: 36065000 },
        { tenor: 24, tdp: 72680000, angsuran: 19162000 },
        { tenor: 36, tdp: 72680000, angsuran: 13474000 },
        { tenor: 48, tdp: 72680000, angsuran: 11218000 },
        { tenor: 60, tdp: 72680000, angsuran: 9770000 }
      ]
    }
  },
  {
    id: 'darion_ev_ce_480',
    name: 'DARION EV CE 480',
    type: 'EV',
    otr: 417800000,
    disc: { '2025': 0, '2026': 14000000 },
    subvention: { '2025': SUB_INSURANCE_8M, '2026': SUB_INSURANCE_8M },
    canRoyalis: true,
    canTradeIn: false,
    salesProgram: [
      'Subvention Free Insurance: Rp 8.000.000 (Semua Leasing)',
      'Eligible Program Royalis Wuling (+ Rp 8.000.000)'
    ],
    stock: { '2025': [], '2026': [{ color: 'Twinkle Black', loc: 'G. Lampung', note: 'Ready (Diskon >14jt perlu PO)' }] },
    pricelist: {
      ADIRA: [
        { tenor: 12, tdp: 63550000, angsuran: 33101000 },
        { tenor: 24, tdp: 63550000, angsuran: 18143000 },
        { tenor: 36, tdp: 67720000, angsuran: 13062000 },
        { tenor: 48, tdp: 67720000, angsuran: 10704000 },
        { tenor: 60, tdp: 71890000, angsuran: 9366000 }
      ],
      CIMB: [
        { tenor: 11, tdp: 121442000, angsuran: 30181000 },
        { tenor: 23, tdp: 111734000, angsuran: 15620000 },
        { tenor: 35, tdp: 109402500, angsuran: 10688000 },
        { tenor: 47, tdp: 110451000, angsuran: 8518000 },
        { tenor: 59, tdp: 112203500, angsuran: 7245000 }
      ],
      SGMW: [],
      MTF: [
        { tenor: 12, tdp: 66920000, angsuran: 33030000 },
        { tenor: 24, tdp: 66920000, angsuran: 17717000 },
        { tenor: 36, tdp: 66920000, angsuran: 12457000 },
        { tenor: 48, tdp: 66920000, angsuran: 10370000 },
        { tenor: 60, tdp: 66920000, angsuran: 9031000 }
      ]
    }
  },
  {
    id: 'darion_ev_ce_540',
    name: 'DARION EV CE 540 (FULL HC)',
    type: 'EV',
    otr: 427800000,
    disc: { '2025': 0, '2026': 14000000 },
    subvention: { '2025': SUB_INSURANCE_8M, '2026': SUB_INSURANCE_8M },
    canRoyalis: true,
    canTradeIn: false,
    salesProgram: [
      'Subvention Free Insurance: Rp 8.000.000 (Semua Leasing)',
      'Eligible Program Royalis Wuling (+ Rp 8.000.000)'
    ],
    stock: { '2025': [], '2026': [{ color: 'Sandy White', loc: 'G. Lampung', note: 'Diminta Pekanbaru (Cek Ketersediaan)' }] },
    pricelist: {
      ADIRA: [
        { tenor: 12, tdp: 65050000, angsuran: 33886000 },
        { tenor: 24, tdp: 65050000, angsuran: 18574000 },
        { tenor: 36, tdp: 69320000, angsuran: 13372000 },
        { tenor: 48, tdp: 69320000, angsuran: 10957000 },
        { tenor: 60, tdp: 73590000, angsuran: 9588000 }
      ],
      CIMB: [
        { tenor: 11, tdp: 124233000, angsuran: 30903000 },
        { tenor: 23, tdp: 114259000, angsuran: 15994000 },
        { tenor: 35, tdp: 111857500, angsuran: 10944000 },
        { tenor: 47, tdp: 112908000, angsuran: 8722000 },
        { tenor: 59, tdp: 114682500, angsuran: 7419000 }
      ],
      SGMW: [
        { tenor: 12, label: 'DP 15%', tdp: 70170000, angsuran: 32393000 },
        { tenor: 24, label: 'DP 15%', tdp: 70170000, angsuran: 17309000 },
        { tenor: 36, label: 'DP 15%', tdp: 70170000, angsuran: 12576000 },
        { tenor: 12, label: 'DP 20%', tdp: 91560000, angsuran: 30515000 },
        { tenor: 24, label: 'DP 20%', tdp: 91560000, angsuran: 16311000 },
        { tenor: 36, label: 'DP 20%', tdp: 91560000, angsuran: 11853000 },
        { tenor: 12, label: 'DP 30%', tdp: 134340000, angsuran: 26758000 },
        { tenor: 24, label: 'DP 30%', tdp: 134340000, angsuran: 14311000 },
        { tenor: 36, label: 'DP 30%', tdp: 134340000, angsuran: 10406000 }
      ],
      MTF: [
        { tenor: 12, tdp: 68420000, angsuran: 33821000 },
        { tenor: 24, tdp: 68420000, angsuran: 18141000 },
        { tenor: 36, tdp: 68420000, angsuran: 12755000 },
        { tenor: 48, tdp: 68420000, angsuran: 10618000 },
        { tenor: 60, tdp: 68420000, angsuran: 9247000 }
      ]
    }
  },
  {
    id: 'darion_ev_ex',
    name: 'DARION EV EX',
    type: 'EV',
    otr: 487800000,
    disc: { '2025': 0, '2026': 8000000 },
    subvention: { '2025': SUB_INSURANCE_8M, '2026': SUB_INSURANCE_8M },
    canRoyalis: true,
    canTradeIn: false,
    cashNoDiscAllRisk: true,
    salesProgram: [
      'Subvention Free Insurance: Rp 8.000.000 (Semua Leasing)',
      'Pembelian Cash: Gratis Asuransi All Risk 2 Tahun (Tanpa Diskon OTR)',
      'Eligible Program Royalis Wuling (+ Rp 8.000.000)'
    ],
    stock: {
      '2025': [],
      '2026': [
        { color: 'Sandy White', loc: 'Showroom Lampung', note: 'Ready' },
        { color: 'Twinkle Black', loc: 'G. Lampung', note: 'Ready' },
        { color: 'Smokey Grey', loc: 'Plan Showroom Lampung', note: 'Ready' }
      ]
    },
    pricelist: {
      ADIRA: [
        { tenor: 12, tdp: 74170000, angsuran: 38660000 },
        { tenor: 24, tdp: 74170000, angsuran: 21157000 },
        { tenor: 36, tdp: 79050000, angsuran: 15231000 },
        { tenor: 48, tdp: 79050000, angsuran: 12480000 },
        { tenor: 60, tdp: 83930000, angsuran: 10919000 }
      ],
      CIMB: [
        { tenor: 11, tdp: 140983000, angsuran: 35237000 },
        { tenor: 23, tdp: 128750000, angsuran: 18237000 },
        { tenor: 35, tdp: 125928500, angsuran: 12479000 },
        { tenor: 47, tdp: 126997000, angsuran: 9945000 },
        { tenor: 59, tdp: 128889500, angsuran: 8459000 }
      ],
      SGMW: [
        { tenor: 12, label: 'DP 15%', tdp: 79170000, angsuran: 36935000 },
        { tenor: 24, label: 'DP 15%', tdp: 79170000, angsuran: 19704000 },
        { tenor: 36, label: 'DP 15%', tdp: 79170000, angsuran: 14315000 },
        { tenor: 12, label: 'DP 20%', tdp: 103560000, angsuran: 34794000 },
        { tenor: 24, label: 'DP 20%', tdp: 103560000, angsuran: 18565000 },
        { tenor: 36, label: 'DP 20%', tdp: 103560000, angsuran: 13491000 },
        { tenor: 12, label: 'DP 30%', tdp: 152340000, angsuran: 30509000 },
        { tenor: 24, label: 'DP 30%', tdp: 152340000, angsuran: 16285000 },
        { tenor: 36, label: 'DP 30%', tdp: 152340000, angsuran: 11841000 }
      ],
      MTF: [
        { tenor: 12, tdp: 77420000, angsuran: 38563000 },
        { tenor: 24, tdp: 77420000, angsuran: 20489000 },
        { tenor: 36, tdp: 77420000, angsuran: 14407000 },
        { tenor: 48, tdp: 77420000, angsuran: 11994000 },
        { tenor: 60, tdp: 77420000, angsuran: 10446000 }
      ]
    }
  },
  {
    id: 'darion_phev_ce',
    name: 'DARION PHEV CE',
    type: 'PHEV',
    otr: 462000000,
    disc: { '2025': 0, '2026': 5000000 },
    subvention: { '2025': SUB_ZERO, '2026': SUB_ZERO },
    canRoyalis: true,
    canTradeIn: false,
    salesProgram: [
      'Eligible Program Royalis Wuling (+ Rp 8.000.000 bagi pemilik Wuling)'
    ],
    stock: { '2025': [], '2026': [{ color: 'Twinkle Black', loc: 'G. Lampung', note: 'Ready' }] },
    pricelist: {
      ADIRA: [
        { tenor: 12, tdp: 70300000, angsuran: 36634000 },
        { tenor: 24, tdp: 70300000, angsuran: 20080000 },
        { tenor: 36, tdp: 74920000, angsuran: 14455000 },
        { tenor: 48, tdp: 74920000, angsuran: 11845000 },
        { tenor: 60, tdp: 79540000, angsuran: 10363000 }
      ],
      CIMB: [
        { tenor: 11, tdp: 133780000, angsuran: 33373000 },
        { tenor: 23, tdp: 122898000, angsuran: 17273000 },
        { tenor: 35, tdp: 120256500, angsuran: 11819000 },
        { tenor: 47, tdp: 121317000, angsuran: 9419000 },
        { tenor: 59, tdp: 123159500, angsuran: 8012000 }
      ],
      SGMW: [
        { tenor: 12, label: 'DP 15%', tdp: 75300000, angsuran: 35129000 },
        { tenor: 24, label: 'DP 15%', tdp: 75300000, angsuran: 19811000 },
        { tenor: 12, label: 'DP 20%', tdp: 98400000, angsuran: 33093000 },
        { tenor: 24, label: 'DP 20%', tdp: 98400000, angsuran: 18666000 },
        { tenor: 12, label: 'DP 30%', tdp: 144600000, angsuran: 29017000 },
        { tenor: 24, label: 'DP 30%', tdp: 144600000, angsuran: 16373000 }
      ],
      MTF: [
        { tenor: 12, tdp: 73550000, angsuran: 36524000 },
        { tenor: 24, tdp: 73550000, angsuran: 19406000 },
        { tenor: 36, tdp: 73550000, angsuran: 13646000 },
        { tenor: 48, tdp: 73550000, angsuran: 11360000 },
        { tenor: 60, tdp: 73550000, angsuran: 9894000 }
      ]
    }
  },
  {
    id: 'darion_phev_ex',
    name: 'DARION PHEV EX',
    type: 'PHEV',
    otr: 512000000,
    disc: { '2025': 0, '2026': 0 },
    subvention: { '2025': SUB_ZERO, '2026': SUB_ZERO },
    canRoyalis: true,
    canTradeIn: false,
    salesProgram: [
      'Eligible Program Royalis Wuling (+ Rp 8.000.000 bagi pemilik Wuling)'
    ],
    stock: { '2025': [], '2026': [] },
    pricelist: {
      ADIRA: [
        { tenor: 12, tdp: 77800000, angsuran: 40560000 },
        { tenor: 24, tdp: 77800000, angsuran: 22197000 },
        { tenor: 36, tdp: 82920000, angsuran: 15978000 },
        { tenor: 48, tdp: 82920000, angsuran: 13092000 },
        { tenor: 60, tdp: 88040000, angsuran: 11454000 }
      ],
      CIMB: [
        { tenor: 11, tdp: 147738000, angsuran: 36985000 },
        { tenor: 23, tdp: 134828000, angsuran: 19142000 },
        { tenor: 35, tdp: 131837500, angsuran: 13098000 },
        { tenor: 47, tdp: 132914000, angsuran: 10438000 },
        { tenor: 59, tdp: 134856500, angsuran: 8879000 }
      ],
      SGMW: [
        { tenor: 12, label: 'DP 15%', tdp: 82800000, angsuran: 38929000 },
        { tenor: 24, label: 'DP 15%', tdp: 82800000, angsuran: 21954000 },
        { tenor: 12, label: 'DP 20%', tdp: 108400000, angsuran: 36673000 },
        { tenor: 24, label: 'DP 20%', tdp: 108400000, angsuran: 20685000 },
        { tenor: 12, label: 'DP 30%', tdp: 159600000, angsuran: 32157000 },
        { tenor: 24, label: 'DP 30%', tdp: 159600000, angsuran: 18145000 }
      ],
      MTF: [
        { tenor: 12, tdp: 81450000, angsuran: 40476000 },
        { tenor: 24, tdp: 81450000, angsuran: 21505000 },
        { tenor: 36, tdp: 81450000, angsuran: 15101000 },
        { tenor: 48, tdp: 81450000, angsuran: 12572000 },
        { tenor: 60, tdp: 81450000, angsuran: 10950000 }
      ]
    }
  },
  {
    id: 'eksion_ev_ce',
    name: 'EKSION EV CE',
    type: 'EV',
    otr: 416800000,
    disc: { '2025': 0, '2026': 5000000 },
    subvention: { '2025': SUB_ZERO, '2026': SUB_EKSION_26 },
    canRoyalis: true,
    canTradeIn: true,
    salesProgram: [
      'Subvention NIK 26 Eksion Free Insurance: Rp 15 Jt (SGMW) / Rp 8 Jt (Leasing Lain)',
      'Subsidi Trade-In Rp 8.000.000 (Innova, Fortuner, HRV, dsb)',
      'Program Royalis Rp 8.000.000 (Bagi pemilik Wuling — tidak digabung Trade-In)'
    ],
    stock: { '2025': [], '2026': [{ color: 'Twinkle Black', loc: 'G. Lampung', note: 'Ready' }, { color: 'Sandy White', loc: 'G. Lampung', note: 'Ready' }] },
    pricelist: {
      ADIRA: [
        { tenor: 12, tdp: 63520000, angsuran: 33085000 },
        { tenor: 24, tdp: 63520000, angsuran: 18135000 },
        { tenor: 36, tdp: 67690000, angsuran: 13056000 },
        { tenor: 48, tdp: 67690000, angsuran: 10699000 },
        { tenor: 60, tdp: 71860000, angsuran: 9362000 }
      ],
      CIMB: [
        { tenor: 11, tdp: 121162000, angsuran: 30108000 },
        { tenor: 23, tdp: 111482000, angsuran: 15583000 },
        { tenor: 35, tdp: 109156500, angsuran: 10662000 },
        { tenor: 47, tdp: 110204000, angsuran: 8497000 },
        { tenor: 59, tdp: 111955500, angsuran: 7228000 }
      ],
      SGMW: [
        { tenor: 12, label: 'DP 15%', tdp: 68520000, angsuran: 31560000 },
        { tenor: 24, label: 'DP 15%', tdp: 68520000, angsuran: 16864000 },
        { tenor: 36, label: 'DP 15%', tdp: 68520000, angsuran: 12252000 },
        { tenor: 12, label: 'DP 20%', tdp: 89360000, angsuran: 29731000 },
        { tenor: 24, label: 'DP 20%', tdp: 89360000, angsuran: 15892000 },
        { tenor: 36, label: 'DP 20%', tdp: 89360000, angsuran: 11549000 },
        { tenor: 12, label: 'DP 30%', tdp: 131040000, angsuran: 26070000 },
        { tenor: 24, label: 'DP 30%', tdp: 131040000, angsuran: 13943000 },
        { tenor: 36, label: 'DP 30%', tdp: 131040000, angsuran: 10138000 }
      ],
      MTF: [
        { tenor: 12, tdp: 66920000, angsuran: 33030000 },
        { tenor: 24, tdp: 66920000, angsuran: 17717000 },
        { tenor: 36, tdp: 66920000, angsuran: 12457000 },
        { tenor: 48, tdp: 66920000, angsuran: 10370000 },
        { tenor: 60, tdp: 66920000, angsuran: 9031000 }
      ]
    }
  },
  {
    id: 'eksion_ev_ex',
    name: 'EKSION EV EX',
    type: 'EV',
    otr: 486800000,
    disc: { '2025': 0, '2026': 5000000 },
    subvention: { '2025': SUB_ZERO, '2026': SUB_EKSION_26 },
    canRoyalis: true,
    canTradeIn: true,
    salesProgram: [
      'Subvention NIK 26 Eksion Free Insurance: Rp 15 Jt (SGMW) / Rp 8 Jt (Leasing Lain)',
      'Subsidi Trade-In Rp 8.000.000 (Innova, Fortuner, HRV, dsb)',
      'Program Royalis Rp 8.000.000 (Bagi pemilik Wuling — tidak digabung Trade-In)'
    ],
    stock: { '2025': [], '2026': [{ color: 'Twinkle Black', loc: 'Showroom Lampung', note: 'Ready' }, { color: 'Twinkle Black', loc: 'G. Lampung', note: 'Ready' }] },
    pricelist: {
      ADIRA: [
        { tenor: 12, tdp: 74020000, angsuran: 38581000 },
        { tenor: 24, tdp: 74020000, angsuran: 21114000 },
        { tenor: 36, tdp: 78890000, angsuran: 15200000 },
        { tenor: 48, tdp: 78890000, angsuran: 12454000 },
        { tenor: 60, tdp: 83760000, angsuran: 10897000 }
      ],
      CIMB: [
        { tenor: 11, tdp: 140705000, angsuran: 35165000 },
        { tenor: 23, tdp: 128500000, angsuran: 18200000 },
        { tenor: 35, tdp: 125684500, angsuran: 12453000 },
        { tenor: 47, tdp: 126754000, angsuran: 9924000 },
        { tenor: 59, tdp: 128645500, angsuran: 8442000 }
      ],
      SGMW: [
        { tenor: 12, label: 'DP 15%', tdp: 79020000, angsuran: 36859000 },
        { tenor: 24, label: 'DP 15%', tdp: 79020000, angsuran: 19663000 },
        { tenor: 36, label: 'DP 15%', tdp: 79020000, angsuran: 14286000 },
        { tenor: 12, label: 'DP 20%', tdp: 103360000, angsuran: 34722000 },
        { tenor: 24, label: 'DP 20%', tdp: 103360000, angsuran: 18527000 },
        { tenor: 36, label: 'DP 20%', tdp: 103360000, angsuran: 13464000 },
        { tenor: 12, label: 'DP 30%', tdp: 152040000, angsuran: 30447000 },
        { tenor: 24, label: 'DP 30%', tdp: 152040000, angsuran: 16251000 },
        { tenor: 36, label: 'DP 30%', tdp: 152040000, angsuran: 11816000 }
      ],
      MTF: [
        { tenor: 12, tdp: 77270000, angsuran: 38484000 },
        { tenor: 24, tdp: 77270000, angsuran: 20447000 },
        { tenor: 36, tdp: 77270000, angsuran: 14378000 },
        { tenor: 48, tdp: 77270000, angsuran: 11969000 },
        { tenor: 60, tdp: 77270000, angsuran: 10425000 }
      ]
    }
  },
  {
    id: 'eksion_phev_ce',
    name: 'EKSION PHEV CE',
    type: 'PHEV',
    otr: 474000000,
    disc: { '2025': 0, '2026': 5000000 },
    subvention: { '2025': SUB_ZERO, '2026': SUB_EKSION_26 },
    canRoyalis: true,
    canTradeIn: true,
    salesProgram: [
      'Subvention NIK 26 Eksion Free Insurance: Rp 15 Jt (SGMW) / Rp 8 Jt (Leasing Lain)',
      'Subsidi Trade-In Rp 8.000.000 (Innova, Fortuner, HRV, dsb)',
      'Program Royalis Rp 8.000.000 (Bagi pemilik Wuling — tidak digabung Trade-In)'
    ],
    stock: { '2025': [], '2026': [] },
    pricelist: {
      ADIRA: [
        { tenor: 12, tdp: 72100000, angsuran: 37576000 },
        { tenor: 24, tdp: 72100000, angsuran: 20564000 },
        { tenor: 36, tdp: 76840000, angsuran: 14804000 },
        { tenor: 48, tdp: 76840000, angsuran: 12130000 },
        { tenor: 60, tdp: 81580000, angsuran: 10614000 }
      ],
      CIMB: [
        { tenor: 11, tdp: 137130000, angsuran: 34240000 },
        { tenor: 23, tdp: 125283000, angsuran: 17721000 },
        { tenor: 35, tdp: 122558500, angsuran: 12126000 },
        { tenor: 47, tdp: 123623000, angsuran: 9663000 },
        { tenor: 59, tdp: 125489500, angsuran: 8220000 }
      ],
      SGMW: [
        { tenor: 12, label: 'DP 15%', tdp: 77100000, angsuran: 36041000 },
        { tenor: 24, label: 'DP 15%', tdp: 77100000, angsuran: 20325000 },
        { tenor: 12, label: 'DP 20%', tdp: 100800000, angsuran: 33952000 },
        { tenor: 24, label: 'DP 20%', tdp: 100800000, angsuran: 19151000 },
        { tenor: 12, label: 'DP 30%', tdp: 148200000, angsuran: 29771000 },
        { tenor: 24, label: 'DP 30%', tdp: 148200000, angsuran: 16798000 }
      ],
      MTF: [
        { tenor: 12, tdp: 75350000, angsuran: 37472000 },
        { tenor: 24, tdp: 75350000, angsuran: 19910000 },
        { tenor: 36, tdp: 75350000, angsuran: 14000000 },
        { tenor: 48, tdp: 75350000, angsuran: 11655000 },
        { tenor: 60, tdp: 75350000, angsuran: 10151000 }
      ]
    }
  },
  {
    id: 'eksion_phev_ex',
    name: 'EKSION PHEV EX',
    type: 'PHEV',
    otr: 524000000,
    disc: { '2025': 0, '2026': 5000000 },
    subvention: { '2025': SUB_ZERO, '2026': SUB_EKSION_26 },
    canRoyalis: true,
    canTradeIn: true,
    salesProgram: [
      'Subvention NIK 26 Eksion Free Insurance: Rp 15 Jt (SGMW) / Rp 8 Jt (Leasing Lain)',
      'Subsidi Trade-In Rp 8.000.000 (Innova, Fortuner, HRV, dsb)',
      'Program Royalis Rp 8.000.000 (Bagi pemilik Wuling — tidak digabung Trade-In)'
    ],
    stock: { '2025': [], '2026': [{ color: 'Twinkle Black', loc: 'G. Lampung', note: 'Ready' }] },
    pricelist: {
      ADIRA: [
        { tenor: 12, tdp: 79600000, angsuran: 41502000 },
        { tenor: 24, tdp: 79600000, angsuran: 22713000 },
        { tenor: 36, tdp: 84840000, angsuran: 16349000 },
        { tenor: 48, tdp: 84840000, angsuran: 13396000 },
        { tenor: 60, tdp: 90080000, angsuran: 11720000 }
      ],
      CIMB: [
        { tenor: 11, tdp: 151088000, angsuran: 37852000 },
        { tenor: 23, tdp: 137844000, angsuran: 19591000 },
        { tenor: 35, tdp: 134768500, angsuran: 13405000 },
        { tenor: 47, tdp: 135849000, angsuran: 10683000 },
        { tenor: 59, tdp: 137814500, angsuran: 9087000 }
      ],
      SGMW: [
        { tenor: 12, label: 'DP 15%', tdp: 84600000, angsuran: 39842000 },
        { tenor: 24, label: 'DP 15%', tdp: 84600000, angsuran: 22469000 },
        { tenor: 12, label: 'DP 20%', tdp: 110800000, angsuran: 37532000 },
        { tenor: 24, label: 'DP 20%', tdp: 110800000, angsuran: 21170000 },
        { tenor: 12, label: 'DP 30%', tdp: 163200000, angsuran: 32910000 },
        { tenor: 24, label: 'DP 30%', tdp: 163200000, angsuran: 18570000 }
      ],
      MTF: [
        { tenor: 12, tdp: 83250000, angsuran: 41424000 },
        { tenor: 24, tdp: 83250000, angsuran: 22009000 },
        { tenor: 36, tdp: 83250000, angsuran: 15455000 },
        { tenor: 48, tdp: 83250000, angsuran: 12866000 },
        { tenor: 60, tdp: 83250000, angsuran: 11206000 }
      ]
    }
  },

  // === KATEGORI ICE (BENSIN) ===
  {
    id: 'alvez_ce_mt',
    name: 'NEW ALVEZ CE MT',
    type: 'ICE',
    otr: 261000000,
    disc: { '2025': 0, '2026': 55000000 },
    subvention: { '2025': SUB_ICE_25, '2026': SUB_ZERO },
    canRoyalis: false,
    canTradeIn: false,
    salesProgram: [
      'Diskon Spesial Rp 55 Juta (Khusus NIK 2026)',
      'Subvention Rp 8 Juta (WF) & Rp 4 Juta (Lainnya) HANYA BERLAKU JIKA ADA STOK NIK 2025'
    ],
    stock: { '2025': [], '2026': [{ color: 'Starry Black', loc: 'G. Lampung', note: 'Ready' }] },
    pricelist: {
      ADIRA: [
        { tenor: 12, tdp: 53200000, angsuran: 19921000 },
        { tenor: 24, tdp: 53200000, angsuran: 10922000 },
        { tenor: 36, tdp: 53200000, angsuran: 7977000 },
        { tenor: 48, tdp: 53200000, angsuran: 6548000 },
        { tenor: 60, tdp: 53200000, angsuran: 5810000 }
      ],
      CIMB: [
        { tenor: 11, tdp: 80226000, angsuran: 18854000 },
        { tenor: 23, tdp: 74690000, angsuran: 9758000 },
        { tenor: 35, tdp: 73886500, angsuran: 6677000 },
        { tenor: 47, tdp: 75288000, angsuran: 5321000 },
        { tenor: 59, tdp: 77100500, angsuran: 4526000 }
      ],
      SGMW: [
        { tenor: 12, label: 'DP 15%', tdp: 45150000, angsuran: 20075000 },
        { tenor: 24, label: 'DP 15%', tdp: 45150000, angsuran: 11340000 },
        { tenor: 12, label: 'DP 20%', tdp: 58200000, angsuran: 18925000 },
        { tenor: 24, label: 'DP 20%', tdp: 58200000, angsuran: 10693000 },
        { tenor: 12, label: 'DP 30%', tdp: 84300000, angsuran: 16623000 },
        { tenor: 24, label: 'DP 30%', tdp: 84300000, angsuran: 9398000 }
      ],
      MTF: [],
      INDOMOBIL: [
        { tenor: 60, label: 'Tenor Thn 1-5', tdp: 72000000, angsuran: 3589000 },
        { tenor: 96, label: 'Tenor Thn 6-8', tdp: 72000000, angsuran: 2699000 }
      ]
    }
  },
  {
    id: 'alvez_ce_cvt',
    name: 'NEW ALVEZ CE CVT',
    type: 'ICE',
    otr: 307200000,
    disc: { '2025': 0, '2026': 53000000 },
    subvention: { '2025': SUB_ICE_25, '2026': SUB_ZERO },
    canRoyalis: false,
    canTradeIn: false,
    salesProgram: [
      'Diskon Spesial Rp 53 Juta (Khusus NIK 2026)',
      'Subvention Rp 8 Juta (WF) & Rp 4 Juta (Lainnya) HANYA BERLAKU JIKA ADA STOK NIK 2025'
    ],
    stock: { '2025': [], '2026': [{ color: 'Candy White', loc: 'G. Lampung', note: 'Ready' }] },
    pricelist: {
      ADIRA: [
        { tenor: 12, tdp: 62440000, angsuran: 23384000 },
        { tenor: 24, tdp: 62440000, angsuran: 12821000 },
        { tenor: 36, tdp: 62440000, angsuran: 9343000 },
        { tenor: 48, tdp: 62440000, angsuran: 7670000 },
        { tenor: 60, tdp: 62440000, angsuran: 6803000 }
      ],
      CIMB: [
        { tenor: 11, tdp: 93576000, angsuran: 22191000 },
        { tenor: 23, tdp: 86811000, angsuran: 11485000 },
        { tenor: 35, tdp: 85253500, angsuran: 7859000 },
        { tenor: 47, tdp: 86266000, angsuran: 6263000 },
        { tenor: 59, tdp: 88236500, angsuran: 5327000 }
      ],
      SGMW: [
        { tenor: 12, label: 'DP 15%', tdp: 52080000, angsuran: 23627000 },
        { tenor: 24, label: 'DP 15%', tdp: 52080000, angsuran: 13346000 },
        { tenor: 12, label: 'DP 20%', tdp: 67440000, angsuran: 22273000 },
        { tenor: 24, label: 'DP 20%', tdp: 67440000, angsuran: 12585000 },
        { tenor: 12, label: 'DP 30%', tdp: 98160000, angsuran: 19563000 },
        { tenor: 24, label: 'DP 30%', tdp: 98160000, angsuran: 11060000 }
      ],
      MTF: [], INDOMOBIL: []
    }
  },
  {
    id: 'alvez_ex_cvt',
    name: 'NEW ALVEZ EX CVT',
    type: 'ICE',
    otr: 347400000,
    disc: { '2025': 0, '2026': 53000000 },
    subvention: { '2025': SUB_ICE_25, '2026': SUB_ZERO },
    canRoyalis: false,
    canTradeIn: false,
    salesProgram: [
      'Diskon Spesial Rp 53 Juta (Khusus NIK 2026)',
      'Subvention Rp 8 Juta (WF) & Rp 4 Juta (Lainnya) HANYA BERLAKU JIKA ADA STOK NIK 2025'
    ],
    stock: { '2025': [], '2026': [{ color: 'Starry Black', loc: 'G. Lampung', note: 'Ready' }] },
    pricelist: {
      ADIRA: [
        { tenor: 12, tdp: 70480000, angsuran: 26397000 },
        { tenor: 24, tdp: 70480000, angsuran: 14473000 },
        { tenor: 36, tdp: 70480000, angsuran: 10545000 },
        { tenor: 48, tdp: 70480000, angsuran: 8642000 },
        { tenor: 60, tdp: 70480000, angsuran: 7652000 }
      ],
      CIMB: [
        { tenor: 11, tdp: 105193000, angsuran: 25095000 },
        { tenor: 23, tdp: 97358000, angsuran: 12988000 },
        { tenor: 35, tdp: 95519500, angsuran: 8887000 },
        { tenor: 47, tdp: 96546000, angsuran: 7083000 },
        { tenor: 59, tdp: 98157500, angsuran: 6024000 }
      ],
      SGMW: [
        { tenor: 12, label: 'DP 15%', tdp: 58110000, angsuran: 26717000 },
        { tenor: 24, label: 'DP 15%', tdp: 58110000, angsuran: 15092000 },
        { tenor: 12, label: 'DP 20%', tdp: 75480000, angsuran: 25187000 },
        { tenor: 24, label: 'DP 20%', tdp: 75480000, angsuran: 14231000 },
        { tenor: 12, label: 'DP 30%', tdp: 110220000, angsuran: 22122000 },
        { tenor: 24, label: 'DP 30%', tdp: 110220000, angsuran: 12507000 }
      ],
      MTF: [], INDOMOBIL: []
    }
  },
  {
    id: 'confero_db',
    name: 'CONFERO 1.5 MT DB',
    type: 'ICE',
    otr: 230800000,
    disc: { '2025': 60000000, '2026': 45000000 },
    subvention: { '2025': SUB_ICE_25, '2026': SUB_ZERO },
    canRoyalis: false,
    canTradeIn: false,
    salesProgram: ['Khusus NIK 2025: Subvention Leasing WF 8 Jt / Lainnya 4 Jt'],
    stock: { '2025': [{ color: 'Starry Black', loc: 'G. Lampung', note: 'Blm pasang KF' }], '2026': [] },
    pricelist: {
      ADIRA: [
        { tenor: 12, tdp: 70240000, angsuran: 15564000 },
        { tenor: 24, tdp: 70240000, angsuran: 8562000 },
        { tenor: 36, tdp: 70240000, angsuran: 6265000 },
        { tenor: 48, tdp: 70240000, angsuran: 5146000 },
        { tenor: 60, tdp: 70240000, angsuran: 4573000 }
      ],
      CIMB: [
        { tenor: 11, tdp: 71500000, angsuran: 16673000 },
        { tenor: 23, tdp: 67199000, angsuran: 8629000 },
        { tenor: 35, tdp: 66555500, angsuran: 5904000 },
        { tenor: 47, tdp: 67901000, angsuran: 4706000 },
        { tenor: 59, label: 'DP 15%', tdp: 69609000, angsuran: 4003000 }
      ],
      SGMW: [
        { tenor: 12, label: 'DP 15%', tdp: 40620000, angsuran: 17753000 },
        { tenor: 24, label: 'DP 15%', tdp: 40620000, angsuran: 10028000 },
        { tenor: 12, label: 'DP 20%', tdp: 52160000, angsuran: 16737000 },
        { tenor: 24, label: 'DP 20%', tdp: 52160000, angsuran: 9457000 },
        { tenor: 12, label: 'DP 30%', tdp: 75240000, angsuran: 14700000 },
        { tenor: 24, label: 'DP 30%', tdp: 75240000, angsuran: 8311000 }
      ],
      MTF: []
    }
  },
  {
    id: 'confero_lux',
    name: 'CONFERO S 1.5C LUX MT',
    type: 'ICE',
    otr: 252600000,
    disc: { '2025': 55000000, '2026': 0 },
    subvention: { '2025': SUB_ICE_25, '2026': SUB_ZERO },
    canRoyalis: false,
    canTradeIn: false,
    salesProgram: ['Khusus NIK 2025: Subvention Leasing WF 8 Jt / Lainnya 4 Jt'],
    stock: { '2025': [{ color: 'Starry Black', loc: 'G. Lampung', note: 'Blm pasang KF' }], '2026': [] },
    pricelist: {
      ADIRA: [
        { tenor: 12, tdp: 76780000, angsuran: 17001000 },
        { tenor: 24, tdp: 76780000, angsuran: 9329000 },
        { tenor: 36, tdp: 76780000, angsuran: 6824000 },
        { tenor: 48, tdp: 76780000, angsuran: 5606000 },
        { tenor: 60, tdp: 76780000, angsuran: 4980000 }
      ],
      CIMB: [
        { tenor: 11, tdp: 77799000, angsuran: 18247000 },
        { tenor: 23, tdp: 72487000, angsuran: 9444000 },
        { tenor: 35, tdp: 71727500, angsuran: 6462000 },
        { tenor: 47, tdp: 73113000, angsuran: 5150000 },
        { tenor: 59, tdp: 74897500, angsuran: 4381000 }
      ],
      SGMW: [], MTF: []
    }
  }
];

export const TRADE_IN_ELIGIBLE_CARS = [
  'Innova', 'Fortuner', 'Veloz', 'Pajero', 'Xpander', 'Rush', 'Terios', 'HR-V'
]; 