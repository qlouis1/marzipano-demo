var APP_DATA = {
  "scenes": [
    {
      "id": "01-outside",
      "name": "01-outside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.438812555604352
      },
      "linkHotspots": [
        {
          "yaw": 0.027520993351838996,
          "pitch": 0.011100218774799941,
          "rotation": 6.283185307179586,
          "target": "02-reception"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.3374331182328394,
          "pitch": 0.010476348018610082,
          "title": "01_outside_hotspot<br>",
          "text": "01_outside_hotspot"
        }
      ]
    },
    {
      "id": "02-reception",
      "name": "02-reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3370201965853212,
          "pitch": 0.06579998974241619,
          "rotation": 0,
          "target": "01-outside"
        },
        {
          "yaw": -1.401944445047718,
          "pitch": 0.03735000572677549,
          "rotation": 0,
          "target": "03-exhibition"
        },
        {
          "yaw": -1.779546890430126,
          "pitch": 0.09374289887150056,
          "rotation": 4.71238898038469,
          "target": "05-void_bottom"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.5013264737525382,
          "pitch": 0.24071713381517768,
          "title": "02_reception_hotspot",
          "text": "<div>02_reception_hotspot</div>"
        }
      ]
    },
    {
      "id": "03-exhibition",
      "name": "03-exhibition",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6535202858823972,
          "pitch": 0.01536278769386712,
          "rotation": 0,
          "target": "02-reception"
        },
        {
          "yaw": -0.705560814717856,
          "pitch": 0.1905776007053106,
          "rotation": 0,
          "target": "04-exhibition_stars"
        },
        {
          "yaw": -0.01868803930004681,
          "pitch": -0.0033763183284527543,
          "rotation": 0,
          "target": "06-exhibition_old_telescope"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.265158945203474,
          "pitch": 0.05459585008885348,
          "title": "03_floor-1_hotspot",
          "text": "03_floor-1_hotspot"
        }
      ]
    },
    {
      "id": "04-exhibition_stars",
      "name": "04-exhibition_stars",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2735839327688447,
          "pitch": 0.06931944226615983,
          "rotation": 0,
          "target": "03-exhibition"
        },
        {
          "yaw": -0.17259483231557127,
          "pitch": 0.09348955360104938,
          "rotation": 0,
          "target": "02-reception"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.7801193404532487,
          "pitch": 0.12375776527332505,
          "title": "04_floor-2_hotspot",
          "text": "04_floor-2_hotspot"
        }
      ]
    },
    {
      "id": "05-void_bottom",
      "name": "05-void_bottom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.256710858589539,
          "pitch": 0.0935167655801461,
          "rotation": 0,
          "target": "02-reception"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.10179365795294615,
          "pitch": -0.030917260880336528,
          "title": "05_floor-3_hotspot",
          "text": "<div>05_floor-3_hotspot</div>"
        }
      ]
    },
    {
      "id": "06-exhibition_old_telescope",
      "name": "06-exhibition_old_telescope",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9160847831027858,
          "pitch": 0.20143863954147534,
          "rotation": 3.141592653589793,
          "target": "03-exhibition"
        },
        {
          "yaw": 2.6685367386806336,
          "pitch": 0.09329880710284577,
          "rotation": 0,
          "target": "07-exhibition_atacama"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.19297913047752324,
          "pitch": 0.1704978037822773,
          "title": "06_level-1_hotspot",
          "text": "<div>06_level-1_hotspot</div>"
        }
      ]
    },
    {
      "id": "07-exhibition_atacama",
      "name": "07-exhibition_atacama",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3809718399698951,
          "pitch": 0.05814590459618074,
          "rotation": 0,
          "target": "06-exhibition_old_telescope"
        },
        {
          "yaw": 0.4299293131984143,
          "pitch": 0.03817668730892976,
          "rotation": 0,
          "target": "08-void"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.653443997585768,
          "pitch": 0.051174882624593465,
          "title": "07_level-2_hotspot",
          "text": "07_level-2_hotspot"
        }
      ]
    },
    {
      "id": "08-void",
      "name": "08-void",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.027520993351838996,
          "pitch": 0.011100218774799941,
          "rotation": 6.283185307179586,
          "target": "07-exhibition_atacama"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6595419830280207,
          "pitch": -0.9928675290048403,
          "title": "08_level-3_hotspot",
          "text": "08_level-3_hotspot"
        }
      ]
    }
  ],
  "mire":
  {
    "id": "0-mire",
    "name": "0-mire",
    "levels": [
      {
        "tileSize": 256,
        "size": 256,
        "fallbackOnly": true
      },
      {
        "tileSize": 512,
        "size": 512
      },
      {
        "tileSize": 512,
        "size": 1024
      }
    ],
    "faceSize": 512,
    "initialViewParameters": {
      "yaw": 0,
      "pitch": 0,
      "fov": 1.438812555604352
    },
    "linkHotspots": [],
    "infoHotspots": []
  },
  "name": "Marzipano démo",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
