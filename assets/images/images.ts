const images = {
  pokemon: {
    1: require('./pokemon/1.png'),
    2: require('./pokemon/2.png'),
    3: require('./pokemon/3.png'),
    4: require('./pokemon/4.png'),
    5: require('./pokemon/5.png'),
    6: require('./pokemon/6.png'),
    7: require('./pokemon/7.png'),
    8: require('./pokemon/8.png'),
    9: require('./pokemon/9.png'),
    10: require('./pokemon/10.png'),
    11: require('./pokemon/11.png'),
    12: require('./pokemon/12.png'),
    13: require('./pokemon/13.png'),
    14: require('./pokemon/14.png'),
    15: require('./pokemon/15.png'),
    16: require('./pokemon/16.png'),
    17: require('./pokemon/17.png'),
    18: require('./pokemon/18.png'),
    19: require('./pokemon/19.png'),
    20: require('./pokemon/20.png'),
    21: require('./pokemon/21.png'),
    22: require('./pokemon/22.png'),
    23: require('./pokemon/23.png'),
    24: require('./pokemon/24.png'),
    25: require('./pokemon/25.png'),
    26: require('./pokemon/26.png'),
    27: require('./pokemon/27.png'),
    28: require('./pokemon/28.png'),
    29: require('./pokemon/29.png'),
    30: require('./pokemon/30.png'),
    31: require('./pokemon/31.png'),
    32: require('./pokemon/32.png'),
    33: require('./pokemon/33.png'),
    34: require('./pokemon/34.png'),
    35: require('./pokemon/35.png'),
    36: require('./pokemon/36.png'),
    37: require('./pokemon/37.png'),
    38: require('./pokemon/38.png'),
    39: require('./pokemon/39.png'),
    40: require('./pokemon/40.png'),
    41: require('./pokemon/41.png'),
    42: require('./pokemon/42.png'),
    43: require('./pokemon/43.png'),
    44: require('./pokemon/44.png'),
    45: require('./pokemon/45.png'),
    46: require('./pokemon/46.png'),
    47: require('./pokemon/47.png'),
    48: require('./pokemon/48.png'),
    49: require('./pokemon/49.png'),
    50: require('./pokemon/50.png'),
    51: require('./pokemon/51.png'),
    52: require('./pokemon/52.png'),
    53: require('./pokemon/53.png'),
    54: require('./pokemon/54.png'),
    55: require('./pokemon/55.png'),
    56: require('./pokemon/56.png'),
    57: require('./pokemon/57.png'),
    58: require('./pokemon/58.png'),
    59: require('./pokemon/59.png'),
    60: require('./pokemon/60.png'),
    61: require('./pokemon/61.png'),
    62: require('./pokemon/62.png'),
    63: require('./pokemon/63.png'),
    64: require('./pokemon/64.png'),
    65: require('./pokemon/65.png'),
    66: require('./pokemon/66.png'),
    67: require('./pokemon/67.png'),
    68: require('./pokemon/68.png'),
    69: require('./pokemon/69.png'),
    70: require('./pokemon/70.png'),
    71: require('./pokemon/71.png'),
    72: require('./pokemon/72.png'),
    73: require('./pokemon/73.png'),
    74: require('./pokemon/74.png'),
    75: require('./pokemon/75.png'),
    76: require('./pokemon/76.png'),
    77: require('./pokemon/77.png'),
    78: require('./pokemon/78.png'),
    79: require('./pokemon/79.png'),
    80: require('./pokemon/80.png'),
    81: require('./pokemon/81.png'),
    82: require('./pokemon/82.png'),
    83: require('./pokemon/83.png'),
    84: require('./pokemon/84.png'),
    85: require('./pokemon/85.png'),
    86: require('./pokemon/86.png'),
    87: require('./pokemon/87.png'),
    88: require('./pokemon/88.png'),
    89: require('./pokemon/89.png'),
    90: require('./pokemon/90.png'),
    91: require('./pokemon/91.png'),
    92: require('./pokemon/92.png'),
    93: require('./pokemon/93.png'),
    94: require('./pokemon/94.png'),
    95: require('./pokemon/95.png'),
    96: require('./pokemon/96.png'),
    97: require('./pokemon/97.png'),
    98: require('./pokemon/98.png'),
    99: require('./pokemon/99.png'),
    100: require('./pokemon/100.png'),
    101: require('./pokemon/101.png'),
    102: require('./pokemon/102.png'),
    103: require('./pokemon/103.png'),
    104: require('./pokemon/104.png'),
    105: require('./pokemon/105.png'),
    106: require('./pokemon/106.png'),
    107: require('./pokemon/107.png'),
    108: require('./pokemon/108.png'),
    109: require('./pokemon/109.png'),
    110: require('./pokemon/110.png'),
    111: require('./pokemon/111.png'),
    112: require('./pokemon/112.png'),
    113: require('./pokemon/113.png'),
    114: require('./pokemon/114.png'),
    115: require('./pokemon/115.png'),
    116: require('./pokemon/116.png'),
    117: require('./pokemon/117.png'),
    118: require('./pokemon/118.png'),
    119: require('./pokemon/119.png'),
    120: require('./pokemon/120.png'),
    121: require('./pokemon/121.png'),
    122: require('./pokemon/122.png'),
    123: require('./pokemon/123.png'),
    124: require('./pokemon/124.png'),
    125: require('./pokemon/125.png'),
    126: require('./pokemon/126.png'),
    127: require('./pokemon/127.png'),
    128: require('./pokemon/128.png'),
    129: require('./pokemon/129.png'),
    130: require('./pokemon/130.png'),
    131: require('./pokemon/131.png'),
    132: require('./pokemon/132.png'),
    133: require('./pokemon/133.png'),
    134: require('./pokemon/134.png'),
    135: require('./pokemon/135.png'),
    136: require('./pokemon/136.png'),
    137: require('./pokemon/137.png'),
    138: require('./pokemon/138.png'),
    139: require('./pokemon/139.png'),
    140: require('./pokemon/140.png'),
    141: require('./pokemon/141.png'),
    142: require('./pokemon/142.png'),
    143: require('./pokemon/143.png'),
    144: require('./pokemon/144.png'),
    145: require('./pokemon/145.png'),
    146: require('./pokemon/146.png'),
    147: require('./pokemon/147.png'),
    148: require('./pokemon/148.png'),
    149: require('./pokemon/149.png'),
    150: require('./pokemon/150.png'),
    151: require('./pokemon/151.png'),
    152: require('./pokemon/152.png'),
    153: require('./pokemon/153.png'),
    154: require('./pokemon/154.png'),
    155: require('./pokemon/155.png'),
    156: require('./pokemon/156.png'),
    157: require('./pokemon/157.png'),
    158: require('./pokemon/158.png'),
    159: require('./pokemon/159.png'),
    160: require('./pokemon/160.png'),
    161: require('./pokemon/161.png'),
    162: require('./pokemon/162.png'),
    163: require('./pokemon/163.png'),
    164: require('./pokemon/164.png'),
    165: require('./pokemon/165.png'),
    166: require('./pokemon/166.png'),
    167: require('./pokemon/167.png'),
    168: require('./pokemon/168.png'),
    169: require('./pokemon/169.png'),
    170: require('./pokemon/170.png'),
    171: require('./pokemon/171.png'),
    172: require('./pokemon/172.png'),
    173: require('./pokemon/173.png'),
    174: require('./pokemon/174.png'),
    175: require('./pokemon/175.png'),
    176: require('./pokemon/176.png'),
    177: require('./pokemon/177.png'),
    178: require('./pokemon/178.png'),
    179: require('./pokemon/179.png'),
    180: require('./pokemon/180.png'),
    181: require('./pokemon/181.png'),
    182: require('./pokemon/182.png'),
    183: require('./pokemon/183.png'),
    184: require('./pokemon/184.png'),
    185: require('./pokemon/185.png'),
    186: require('./pokemon/186.png'),
    187: require('./pokemon/187.png'),
    188: require('./pokemon/188.png'),
    189: require('./pokemon/189.png'),
    190: require('./pokemon/190.png'),
    191: require('./pokemon/191.png'),
    192: require('./pokemon/192.png'),
    193: require('./pokemon/193.png'),
    194: require('./pokemon/194.png'),
    195: require('./pokemon/195.png'),
    196: require('./pokemon/196.png'),
    197: require('./pokemon/197.png'),
    198: require('./pokemon/198.png'),
    199: require('./pokemon/199.png'),
    200: require('./pokemon/200.png'),
    201: require('./pokemon/201.png'),
    202: require('./pokemon/202.png'),
    203: require('./pokemon/203.png'),
    204: require('./pokemon/204.png'),
    205: require('./pokemon/205.png'),
    206: require('./pokemon/206.png'),
    207: require('./pokemon/207.png'),
    208: require('./pokemon/208.png'),
    209: require('./pokemon/209.png'),
    210: require('./pokemon/210.png'),
    211: require('./pokemon/211.png'),
    212: require('./pokemon/212.png'),
    213: require('./pokemon/213.png'),
    214: require('./pokemon/214.png'),
    215: require('./pokemon/215.png'),
    216: require('./pokemon/216.png'),
    217: require('./pokemon/217.png'),
    218: require('./pokemon/218.png'),
    219: require('./pokemon/219.png'),
    220: require('./pokemon/220.png'),
    221: require('./pokemon/221.png'),
    222: require('./pokemon/222.png'),
    223: require('./pokemon/223.png'),
    224: require('./pokemon/224.png'),
    225: require('./pokemon/225.png'),
    226: require('./pokemon/226.png'),
    227: require('./pokemon/227.png'),
    228: require('./pokemon/228.png'),
    229: require('./pokemon/229.png'),
    230: require('./pokemon/230.png'),
    231: require('./pokemon/231.png'),
    232: require('./pokemon/232.png'),
    233: require('./pokemon/233.png'),
    234: require('./pokemon/234.png'),
    235: require('./pokemon/235.png'),
    236: require('./pokemon/236.png'),
    237: require('./pokemon/237.png'),
    238: require('./pokemon/238.png'),
    239: require('./pokemon/239.png'),
    240: require('./pokemon/240.png'),
    241: require('./pokemon/241.png'),
    242: require('./pokemon/242.png'),
    243: require('./pokemon/243.png'),
    244: require('./pokemon/244.png'),
    245: require('./pokemon/245.png'),
    246: require('./pokemon/246.png'),
    247: require('./pokemon/247.png'),
    248: require('./pokemon/248.png'),
    249: require('./pokemon/249.png'),
    250: require('./pokemon/250.png'),
    251: require('./pokemon/251.png'),
    252: require('./pokemon/252.png'),
    253: require('./pokemon/253.png'),
    254: require('./pokemon/254.png'),
    255: require('./pokemon/255.png'),
    256: require('./pokemon/256.png'),
    257: require('./pokemon/257.png'),
    258: require('./pokemon/258.png'),
    259: require('./pokemon/259.png'),
    260: require('./pokemon/260.png'),
    261: require('./pokemon/261.png'),
    262: require('./pokemon/262.png'),
    263: require('./pokemon/263.png'),
    264: require('./pokemon/264.png'),
    265: require('./pokemon/265.png'),
    266: require('./pokemon/266.png'),
    267: require('./pokemon/267.png'),
    268: require('./pokemon/268.png'),
    269: require('./pokemon/269.png'),
    270: require('./pokemon/270.png'),
    271: require('./pokemon/271.png'),
    272: require('./pokemon/272.png'),
    273: require('./pokemon/273.png'),
    274: require('./pokemon/274.png'),
    275: require('./pokemon/275.png'),
    276: require('./pokemon/276.png'),
    277: require('./pokemon/277.png'),
    278: require('./pokemon/278.png'),
    279: require('./pokemon/279.png'),
    280: require('./pokemon/280.png'),
    281: require('./pokemon/281.png'),
    282: require('./pokemon/282.png'),
    283: require('./pokemon/283.png'),
    284: require('./pokemon/284.png'),
    285: require('./pokemon/285.png'),
    286: require('./pokemon/286.png'),
    287: require('./pokemon/287.png'),
    288: require('./pokemon/288.png'),
    289: require('./pokemon/289.png'),
    290: require('./pokemon/290.png'),
    291: require('./pokemon/291.png'),
    292: require('./pokemon/292.png'),
    293: require('./pokemon/293.png'),
    294: require('./pokemon/294.png'),
    295: require('./pokemon/295.png'),
    296: require('./pokemon/296.png'),
    297: require('./pokemon/297.png'),
    298: require('./pokemon/298.png'),
    299: require('./pokemon/299.png'),
    300: require('./pokemon/300.png'),
    301: require('./pokemon/301.png'),
    302: require('./pokemon/302.png'),
    303: require('./pokemon/303.png'),
    304: require('./pokemon/304.png'),
    305: require('./pokemon/305.png'),
    306: require('./pokemon/306.png'),
    307: require('./pokemon/307.png'),
    308: require('./pokemon/308.png'),
    309: require('./pokemon/309.png'),
    310: require('./pokemon/310.png'),
    311: require('./pokemon/311.png'),
    312: require('./pokemon/312.png'),
    313: require('./pokemon/313.png'),
    314: require('./pokemon/314.png'),
    315: require('./pokemon/315.png'),
    316: require('./pokemon/316.png'),
    317: require('./pokemon/317.png'),
    318: require('./pokemon/318.png'),
    319: require('./pokemon/319.png'),
    320: require('./pokemon/320.png'),
    321: require('./pokemon/321.png'),
    322: require('./pokemon/322.png'),
    323: require('./pokemon/323.png'),
    324: require('./pokemon/324.png'),
    325: require('./pokemon/325.png'),
    326: require('./pokemon/326.png'),
    327: require('./pokemon/327.png'),
    328: require('./pokemon/328.png'),
    329: require('./pokemon/329.png'),
    330: require('./pokemon/330.png'),
    331: require('./pokemon/331.png'),
    332: require('./pokemon/332.png'),
    333: require('./pokemon/333.png'),
    334: require('./pokemon/334.png'),
    335: require('./pokemon/335.png'),
    336: require('./pokemon/336.png'),
    337: require('./pokemon/337.png'),
    338: require('./pokemon/338.png'),
    339: require('./pokemon/339.png'),
    340: require('./pokemon/340.png'),
    341: require('./pokemon/341.png'),
    342: require('./pokemon/342.png'),
    343: require('./pokemon/343.png'),
    344: require('./pokemon/344.png'),
    345: require('./pokemon/345.png'),
    346: require('./pokemon/346.png'),
    347: require('./pokemon/347.png'),
    348: require('./pokemon/348.png'),
    349: require('./pokemon/349.png'),
    350: require('./pokemon/350.png'),
    351: require('./pokemon/351.png'),
    352: require('./pokemon/352.png'),
    353: require('./pokemon/353.png'),
    354: require('./pokemon/354.png'),
    355: require('./pokemon/355.png'),
    356: require('./pokemon/356.png'),
    357: require('./pokemon/357.png'),
    358: require('./pokemon/358.png'),
    359: require('./pokemon/359.png'),
    360: require('./pokemon/360.png'),
    361: require('./pokemon/361.png'),
    362: require('./pokemon/362.png'),
    363: require('./pokemon/363.png'),
    364: require('./pokemon/364.png'),
    365: require('./pokemon/365.png'),
    366: require('./pokemon/366.png'),
    367: require('./pokemon/367.png'),
    368: require('./pokemon/368.png'),
    369: require('./pokemon/369.png'),
    370: require('./pokemon/370.png'),
    371: require('./pokemon/371.png'),
    372: require('./pokemon/372.png'),
    373: require('./pokemon/373.png'),
    374: require('./pokemon/374.png'),
    375: require('./pokemon/375.png'),
    376: require('./pokemon/376.png'),
    377: require('./pokemon/377.png'),
    378: require('./pokemon/378.png'),
    379: require('./pokemon/379.png'),
    380: require('./pokemon/380.png'),
    381: require('./pokemon/381.png'),
    382: require('./pokemon/382.png'),
    383: require('./pokemon/383.png'),
    384: require('./pokemon/384.png'),
    385: require('./pokemon/385.png'),
    386: require('./pokemon/386.png'),
    387: require('./pokemon/387.png'),
    388: require('./pokemon/388.png'),
    389: require('./pokemon/389.png'),
    390: require('./pokemon/390.png'),
    391: require('./pokemon/391.png'),
    392: require('./pokemon/392.png'),
    393: require('./pokemon/393.png'),
    394: require('./pokemon/394.png'),
    395: require('./pokemon/395.png'),
    396: require('./pokemon/396.png'),
    397: require('./pokemon/397.png'),
    398: require('./pokemon/398.png'),
    399: require('./pokemon/399.png'),
    400: require('./pokemon/400.png'),
    401: require('./pokemon/401.png'),
    402: require('./pokemon/402.png'),
    403: require('./pokemon/403.png'),
    404: require('./pokemon/404.png'),
    405: require('./pokemon/405.png'),
    406: require('./pokemon/406.png'),
    407: require('./pokemon/407.png'),
    408: require('./pokemon/408.png'),
    409: require('./pokemon/409.png'),
    410: require('./pokemon/410.png'),
    411: require('./pokemon/411.png'),
    412: require('./pokemon/412.png'),
    413: require('./pokemon/413.png'),
    414: require('./pokemon/414.png'),
    415: require('./pokemon/415.png'),
    416: require('./pokemon/416.png'),
    417: require('./pokemon/417.png'),
    418: require('./pokemon/418.png'),
    419: require('./pokemon/419.png'),
    420: require('./pokemon/420.png'),
    421: require('./pokemon/421.png'),
    422: require('./pokemon/422.png'),
    423: require('./pokemon/423.png'),
    424: require('./pokemon/424.png'),
    425: require('./pokemon/425.png'),
    426: require('./pokemon/426.png'),
    427: require('./pokemon/427.png'),
    428: require('./pokemon/428.png'),
    429: require('./pokemon/429.png'),
    430: require('./pokemon/430.png'),
    431: require('./pokemon/431.png'),
    432: require('./pokemon/432.png'),
    433: require('./pokemon/433.png'),
    434: require('./pokemon/434.png'),
    435: require('./pokemon/435.png'),
    436: require('./pokemon/436.png'),
    437: require('./pokemon/437.png'),
    438: require('./pokemon/438.png'),
    439: require('./pokemon/439.png'),
    440: require('./pokemon/440.png'),
    441: require('./pokemon/441.png'),
    442: require('./pokemon/442.png'),
    443: require('./pokemon/443.png'),
    444: require('./pokemon/444.png'),
    445: require('./pokemon/445.png'),
    446: require('./pokemon/446.png'),
    447: require('./pokemon/447.png'),
    448: require('./pokemon/448.png'),
    449: require('./pokemon/449.png'),
    450: require('./pokemon/450.png'),
    451: require('./pokemon/451.png'),
    452: require('./pokemon/452.png'),
    453: require('./pokemon/453.png'),
    454: require('./pokemon/454.png'),
    455: require('./pokemon/455.png'),
    456: require('./pokemon/456.png'),
    457: require('./pokemon/457.png'),
    458: require('./pokemon/458.png'),
    459: require('./pokemon/459.png'),
    460: require('./pokemon/460.png'),
    461: require('./pokemon/461.png'),
    462: require('./pokemon/462.png'),
    463: require('./pokemon/463.png'),
    464: require('./pokemon/464.png'),
    465: require('./pokemon/465.png'),
    466: require('./pokemon/466.png'),
    467: require('./pokemon/467.png'),
    468: require('./pokemon/468.png'),
    469: require('./pokemon/469.png'),
    470: require('./pokemon/470.png'),
    471: require('./pokemon/471.png'),
    472: require('./pokemon/472.png'),
    473: require('./pokemon/473.png'),
    474: require('./pokemon/474.png'),
    475: require('./pokemon/475.png'),
    476: require('./pokemon/476.png'),
    477: require('./pokemon/477.png'),
    478: require('./pokemon/478.png'),
    479: require('./pokemon/479.png'),
    480: require('./pokemon/480.png'),
    481: require('./pokemon/481.png'),
    482: require('./pokemon/482.png'),
    483: require('./pokemon/483.png'),
    484: require('./pokemon/484.png'),
    485: require('./pokemon/485.png'),
    486: require('./pokemon/486.png'),
    487: require('./pokemon/487.png'),
    488: require('./pokemon/488.png'),
    489: require('./pokemon/489.png'),
    490: require('./pokemon/490.png'),
    491: require('./pokemon/491.png'),
    492: require('./pokemon/492.png'),
    493: require('./pokemon/493.png'),
    494: require('./pokemon/494.png'),
    495: require('./pokemon/495.png'),
    496: require('./pokemon/496.png'),
    497: require('./pokemon/497.png'),
    498: require('./pokemon/498.png'),
    499: require('./pokemon/499.png'),
    500: require('./pokemon/500.png'),
    501: require('./pokemon/501.png'),
    502: require('./pokemon/502.png'),
    503: require('./pokemon/503.png'),
    504: require('./pokemon/504.png'),
    505: require('./pokemon/505.png'),
    506: require('./pokemon/506.png'),
    507: require('./pokemon/507.png'),
    508: require('./pokemon/508.png'),
    509: require('./pokemon/509.png'),
    510: require('./pokemon/510.png'),
    511: require('./pokemon/511.png'),
    512: require('./pokemon/512.png'),
    513: require('./pokemon/513.png'),
    514: require('./pokemon/514.png'),
    515: require('./pokemon/515.png'),
    516: require('./pokemon/516.png'),
    517: require('./pokemon/517.png'),
    518: require('./pokemon/518.png'),
    519: require('./pokemon/519.png'),
    520: require('./pokemon/520.png'),
    521: require('./pokemon/521.png'),
    522: require('./pokemon/522.png'),
    523: require('./pokemon/523.png'),
    524: require('./pokemon/524.png'),
    525: require('./pokemon/525.png'),
    526: require('./pokemon/526.png'),
    527: require('./pokemon/527.png'),
    528: require('./pokemon/528.png'),
    529: require('./pokemon/529.png'),
    530: require('./pokemon/530.png'),
    531: require('./pokemon/531.png'),
    532: require('./pokemon/532.png'),
    533: require('./pokemon/533.png'),
    534: require('./pokemon/534.png'),
    535: require('./pokemon/535.png'),
    536: require('./pokemon/536.png'),
    537: require('./pokemon/537.png'),
    538: require('./pokemon/538.png'),
    539: require('./pokemon/539.png'),
    540: require('./pokemon/540.png'),
    541: require('./pokemon/541.png'),
    542: require('./pokemon/542.png'),
    543: require('./pokemon/543.png'),
    544: require('./pokemon/544.png'),
    545: require('./pokemon/545.png'),
    546: require('./pokemon/546.png'),
    547: require('./pokemon/547.png'),
    548: require('./pokemon/548.png'),
    549: require('./pokemon/549.png'),
    550: require('./pokemon/550.png'),
    551: require('./pokemon/551.png'),
    552: require('./pokemon/552.png'),
    553: require('./pokemon/553.png'),
    554: require('./pokemon/554.png'),
    555: require('./pokemon/555.png'),
    556: require('./pokemon/556.png'),
    557: require('./pokemon/557.png'),
    558: require('./pokemon/558.png'),
    559: require('./pokemon/559.png'),
    560: require('./pokemon/560.png'),
    561: require('./pokemon/561.png'),
    562: require('./pokemon/562.png'),
    563: require('./pokemon/563.png'),
    564: require('./pokemon/564.png'),
    565: require('./pokemon/565.png'),
    566: require('./pokemon/566.png'),
    567: require('./pokemon/567.png'),
    568: require('./pokemon/568.png'),
    569: require('./pokemon/569.png'),
    570: require('./pokemon/570.png'),
    571: require('./pokemon/571.png'),
    572: require('./pokemon/572.png'),
    573: require('./pokemon/573.png'),
    574: require('./pokemon/574.png'),
    575: require('./pokemon/575.png'),
    576: require('./pokemon/576.png'),
    577: require('./pokemon/577.png'),
    578: require('./pokemon/578.png'),
    579: require('./pokemon/579.png'),
    580: require('./pokemon/580.png'),
    581: require('./pokemon/581.png'),
    582: require('./pokemon/582.png'),
    583: require('./pokemon/583.png'),
    584: require('./pokemon/584.png'),
    585: require('./pokemon/585.png'),
    586: require('./pokemon/586.png'),
    587: require('./pokemon/587.png'),
    588: require('./pokemon/588.png'),
    589: require('./pokemon/589.png'),
    590: require('./pokemon/590.png'),
    591: require('./pokemon/591.png'),
    592: require('./pokemon/592.png'),
    593: require('./pokemon/593.png'),
    594: require('./pokemon/594.png'),
    595: require('./pokemon/595.png'),
    596: require('./pokemon/596.png'),
    597: require('./pokemon/597.png'),
    598: require('./pokemon/598.png'),
    599: require('./pokemon/599.png'),
    600: require('./pokemon/600.png'),
    601: require('./pokemon/601.png'),
    602: require('./pokemon/602.png'),
    603: require('./pokemon/603.png'),
    604: require('./pokemon/604.png'),
    605: require('./pokemon/605.png'),
    606: require('./pokemon/606.png'),
    607: require('./pokemon/607.png'),
    608: require('./pokemon/608.png'),
    609: require('./pokemon/609.png'),
    610: require('./pokemon/610.png'),
    611: require('./pokemon/611.png'),
    612: require('./pokemon/612.png'),
    613: require('./pokemon/613.png'),
    614: require('./pokemon/614.png'),
    615: require('./pokemon/615.png'),
    616: require('./pokemon/616.png'),
    617: require('./pokemon/617.png'),
    618: require('./pokemon/618.png'),
    619: require('./pokemon/619.png'),
    620: require('./pokemon/620.png'),
    621: require('./pokemon/621.png'),
    622: require('./pokemon/622.png'),
    623: require('./pokemon/623.png'),
    624: require('./pokemon/624.png'),
    625: require('./pokemon/625.png'),
    626: require('./pokemon/626.png'),
    627: require('./pokemon/627.png'),
    628: require('./pokemon/628.png'),
    629: require('./pokemon/629.png'),
    630: require('./pokemon/630.png'),
    631: require('./pokemon/631.png'),
    632: require('./pokemon/632.png'),
    633: require('./pokemon/633.png'),
    634: require('./pokemon/634.png'),
    635: require('./pokemon/635.png'),
    636: require('./pokemon/636.png'),
    637: require('./pokemon/637.png'),
    638: require('./pokemon/638.png'),
    639: require('./pokemon/639.png'),
    640: require('./pokemon/640.png'),
    641: require('./pokemon/641.png'),
    642: require('./pokemon/642.png'),
    643: require('./pokemon/643.png'),
    644: require('./pokemon/644.png'),
    645: require('./pokemon/645.png'),
    646: require('./pokemon/646.png'),
    647: require('./pokemon/647.png'),
    648: require('./pokemon/648.png'),
    649: require('./pokemon/649.png'),
    650: require('./pokemon/650.png'),
    651: require('./pokemon/651.png'),
    652: require('./pokemon/652.png'),
    653: require('./pokemon/653.png'),
    654: require('./pokemon/654.png'),
    655: require('./pokemon/655.png'),
    656: require('./pokemon/656.png'),
    657: require('./pokemon/657.png'),
    658: require('./pokemon/658.png'),
    659: require('./pokemon/659.png'),
    660: require('./pokemon/660.png'),
    661: require('./pokemon/661.png'),
    662: require('./pokemon/662.png'),
    663: require('./pokemon/663.png'),
    664: require('./pokemon/664.png'),
    665: require('./pokemon/665.png'),
    666: require('./pokemon/666.png'),
    667: require('./pokemon/667.png'),
    668: require('./pokemon/668.png'),
    669: require('./pokemon/669.png'),
    670: require('./pokemon/670.png'),
    671: require('./pokemon/671.png'),
    672: require('./pokemon/672.png'),
    673: require('./pokemon/673.png'),
    674: require('./pokemon/674.png'),
    675: require('./pokemon/675.png'),
    676: require('./pokemon/676.png'),
    677: require('./pokemon/677.png'),
    678: require('./pokemon/678.png'),
    679: require('./pokemon/679.png'),
    680: require('./pokemon/680.png'),
    681: require('./pokemon/681.png'),
    682: require('./pokemon/682.png'),
    683: require('./pokemon/683.png'),
    684: require('./pokemon/684.png'),
    685: require('./pokemon/685.png'),
    686: require('./pokemon/686.png'),
    687: require('./pokemon/687.png'),
    688: require('./pokemon/688.png'),
    689: require('./pokemon/689.png'),
    690: require('./pokemon/690.png'),
    691: require('./pokemon/691.png'),
    692: require('./pokemon/692.png'),
    693: require('./pokemon/693.png'),
    694: require('./pokemon/694.png'),
    695: require('./pokemon/695.png'),
    696: require('./pokemon/696.png'),
    697: require('./pokemon/697.png'),
    698: require('./pokemon/698.png'),
    699: require('./pokemon/699.png'),
    700: require('./pokemon/700.png'),
    701: require('./pokemon/701.png'),
    702: require('./pokemon/702.png'),
    703: require('./pokemon/703.png'),
    704: require('./pokemon/704.png'),
    705: require('./pokemon/705.png'),
    706: require('./pokemon/706.png'),
    707: require('./pokemon/707.png'),
    708: require('./pokemon/708.png'),
    709: require('./pokemon/709.png'),
    710: require('./pokemon/710.png'),
    711: require('./pokemon/711.png'),
    712: require('./pokemon/712.png'),
    713: require('./pokemon/713.png'),
    714: require('./pokemon/714.png'),
    715: require('./pokemon/715.png'),
    716: require('./pokemon/716.png'),
    717: require('./pokemon/717.png'),
    718: require('./pokemon/718.png'),
    719: require('./pokemon/719.png'),
    720: require('./pokemon/720.png'),
    721: require('./pokemon/721.png'),
    722: require('./pokemon/722.png'),
    723: require('./pokemon/723.png'),
    724: require('./pokemon/724.png'),
    725: require('./pokemon/725.png'),
    726: require('./pokemon/726.png'),
    727: require('./pokemon/727.png'),
    728: require('./pokemon/728.png'),
    729: require('./pokemon/729.png'),
    730: require('./pokemon/730.png'),
    731: require('./pokemon/731.png'),
    732: require('./pokemon/732.png'),
    733: require('./pokemon/733.png'),
    734: require('./pokemon/734.png'),
    735: require('./pokemon/735.png'),
    736: require('./pokemon/736.png'),
    737: require('./pokemon/737.png'),
    738: require('./pokemon/738.png'),
    739: require('./pokemon/739.png'),
    740: require('./pokemon/740.png'),
    741: require('./pokemon/741.png'),
    742: require('./pokemon/742.png'),
    743: require('./pokemon/743.png'),
    744: require('./pokemon/744.png'),
    745: require('./pokemon/745.png'),
    746: require('./pokemon/746.png'),
    747: require('./pokemon/747.png'),
    748: require('./pokemon/748.png'),
    749: require('./pokemon/749.png'),
    750: require('./pokemon/750.png'),
    751: require('./pokemon/751.png'),
    752: require('./pokemon/752.png'),
    753: require('./pokemon/753.png'),
    754: require('./pokemon/754.png'),
    755: require('./pokemon/755.png'),
    756: require('./pokemon/756.png'),
    757: require('./pokemon/757.png'),
    758: require('./pokemon/758.png'),
    759: require('./pokemon/759.png'),
    760: require('./pokemon/760.png'),
    761: require('./pokemon/761.png'),
    762: require('./pokemon/762.png'),
    763: require('./pokemon/763.png'),
    764: require('./pokemon/764.png'),
    765: require('./pokemon/765.png'),
    766: require('./pokemon/766.png'),
    767: require('./pokemon/767.png'),
    768: require('./pokemon/768.png'),
    769: require('./pokemon/769.png'),
    770: require('./pokemon/770.png'),
    771: require('./pokemon/771.png'),
    772: require('./pokemon/772.png'),
    773: require('./pokemon/773.png'),
    774: require('./pokemon/774.png'),
    775: require('./pokemon/775.png'),
    776: require('./pokemon/776.png'),
    777: require('./pokemon/777.png'),
    778: require('./pokemon/778.png'),
    779: require('./pokemon/779.png'),
    780: require('./pokemon/780.png'),
    781: require('./pokemon/781.png'),
    782: require('./pokemon/782.png'),
    783: require('./pokemon/783.png'),
    784: require('./pokemon/784.png'),
    785: require('./pokemon/785.png'),
    786: require('./pokemon/786.png'),
    787: require('./pokemon/787.png'),
    788: require('./pokemon/788.png'),
    789: require('./pokemon/789.png'),
    790: require('./pokemon/790.png'),
    791: require('./pokemon/791.png'),
    792: require('./pokemon/792.png'),
    793: require('./pokemon/793.png'),
    794: require('./pokemon/794.png'),
    795: require('./pokemon/795.png'),
    796: require('./pokemon/796.png'),
    797: require('./pokemon/797.png'),
    798: require('./pokemon/798.png'),
    799: require('./pokemon/799.png'),
    800: require('./pokemon/800.png'),
    801: require('./pokemon/801.png'),
    802: require('./pokemon/802.png'),
    803: require('./pokemon/803.png'),
    804: require('./pokemon/804.png'),
    805: require('./pokemon/805.png'),
    806: require('./pokemon/806.png'),
    807: require('./pokemon/807.png'),
    808: require('./pokemon/808.png'),
    809: require('./pokemon/809.png'),
    810: require('./pokemon/810.png'),
    811: require('./pokemon/811.png'),
    812: require('./pokemon/812.png'),
    813: require('./pokemon/813.png'),
    814: require('./pokemon/814.png'),
    815: require('./pokemon/815.png'),
    816: require('./pokemon/816.png'),
    817: require('./pokemon/817.png'),
    818: require('./pokemon/818.png'),
    819: require('./pokemon/819.png'),
    820: require('./pokemon/820.png'),
    821: require('./pokemon/821.png'),
    822: require('./pokemon/822.png'),
    823: require('./pokemon/823.png'),
    824: require('./pokemon/824.png'),
    825: require('./pokemon/825.png'),
    826: require('./pokemon/826.png'),
    827: require('./pokemon/827.png'),
    828: require('./pokemon/828.png'),
    829: require('./pokemon/829.png'),
    830: require('./pokemon/830.png'),
    831: require('./pokemon/831.png'),
    832: require('./pokemon/832.png'),
    833: require('./pokemon/833.png'),
    834: require('./pokemon/834.png'),
    835: require('./pokemon/835.png'),
    836: require('./pokemon/836.png'),
    837: require('./pokemon/837.png'),
    838: require('./pokemon/838.png'),
    839: require('./pokemon/839.png'),
    840: require('./pokemon/840.png'),
    841: require('./pokemon/841.png'),
    842: require('./pokemon/842.png'),
    843: require('./pokemon/843.png'),
    844: require('./pokemon/844.png'),
    845: require('./pokemon/845.png'),
    846: require('./pokemon/846.png'),
    847: require('./pokemon/847.png'),
    848: require('./pokemon/848.png'),
    849: require('./pokemon/849.png'),
    850: require('./pokemon/850.png'),
    851: require('./pokemon/851.png'),
    852: require('./pokemon/852.png'),
    853: require('./pokemon/853.png'),
    854: require('./pokemon/854.png'),
    855: require('./pokemon/855.png'),
    856: require('./pokemon/856.png'),
    857: require('./pokemon/857.png'),
    858: require('./pokemon/858.png'),
    859: require('./pokemon/859.png'),
    860: require('./pokemon/860.png'),
    861: require('./pokemon/861.png'),
    862: require('./pokemon/862.png'),
    863: require('./pokemon/863.png'),
    864: require('./pokemon/864.png'),
    865: require('./pokemon/865.png'),
    866: require('./pokemon/866.png'),
    867: require('./pokemon/867.png'),
    868: require('./pokemon/868.png'),
    869: require('./pokemon/869.png'),
    870: require('./pokemon/870.png'),
    871: require('./pokemon/871.png'),
    872: require('./pokemon/872.png'),
    873: require('./pokemon/873.png'),
    874: require('./pokemon/874.png'),
    875: require('./pokemon/875.png'),
    876: require('./pokemon/876.png'),
    877: require('./pokemon/877.png'),
    878: require('./pokemon/878.png'),
    879: require('./pokemon/879.png'),
    880: require('./pokemon/880.png'),
    881: require('./pokemon/881.png'),
    882: require('./pokemon/882.png'),
    883: require('./pokemon/883.png'),
    884: require('./pokemon/884.png'),
    885: require('./pokemon/885.png'),
    886: require('./pokemon/886.png'),
    887: require('./pokemon/887.png'),
    888: require('./pokemon/888.png'),
    889: require('./pokemon/889.png'),
    890: require('./pokemon/890.png'),
  },
};

export default images;