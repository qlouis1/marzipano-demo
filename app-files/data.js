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
          "yaw": -45 * Math.PI / 180,
          "pitch": 0,
          "title": "01_outside_hotspot<br>",
          "text": "01_outside_hotspot"
        }
      ],
      "iframeHotspots": [
        {
          "yaw": 45 * Math.PI / 180,
          "pitch": 0,
          "title": "GMAPS",
          "src": 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9487.563699358636!2d-9.211273541013671!3d38.69789785451112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecf578f4d20e9%3A0x530952e38d140ae6!2sDigisfera+-+Fotografia+e+Inform%C3%A1tica%2C+Lda!5e1!3m2!1spt-PT!2spt!4v1429956174252',
          "width": 1280,
          "height": 480,
          "opts": { perspective: { radius: 1640, extraTransforms: "rotateX(5deg)" } }
        }
      ],
      "imageHotspots": [
        {
          "type": "ImageHotspot",
          "yaw": -50 * Math.PI / 180,
          "pitch": -8 * Math.PI / 180,
          "title": "GMAPS",
          "src": './data/kanb.png',
          "width": 250,
          "height": 250,
          "a": "https://ent.univ-rennes1.fr/"
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
        },
        {
          "yaw": -11 * Math.PI / 180,
          "pitch": 3 * Math.PI / 180,
          "rotation": 0,
          "target": "09-seminar"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.5013264737525382,
          "pitch": 0.24071713381517768,
          "title": "02_reception_hotspot",
          "text": "<div>02_reception_hotspot</div>"
        }
      ],
      "iframeHotspots": [],
      "imageHotspots": [],
      "imageHotspots": []
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
      ],
      "iframeHotspots": [],
      "imageHotspots": []
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
      ],
      "iframeHotspots": [],
      "imageHotspots": []
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
      ],
      "iframeHotspots": [],
      "imageHotspots": []
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
      ],
      "iframeHotspots": [],
      "imageHotspots": []
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
      ],
      "iframeHotspots": [],
      "imageHotspots": []
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
          "yaw": 120 * Math.PI / 180,
          "pitch": 5 * Math.PI / 180,
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
      ],
      "iframeHotspots": [],
      "imageHotspots": [
        {
          "type": "ImageHotspot",
          "yaw": 120 * Math.PI / 180,
          "pitch": 5 * Math.PI / 180,
          "title": "FRAME",
          "src": './data/frame.png',
          "width": 12000,
          "height": 7500
        },
        {
          "type": "ImageHotspot",
          "yaw": -90 * Math.PI / 180,
          "pitch": -0 * Math.PI / 180,
          "title": "KANB",
          "src": './data/kanb.png',
          "width": 1200,
          "height": 750
        }
      ]
    },
    {
      "id": "09-seminar",
      "name": "09-seminar",
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
          "yaw": -115 * Math.PI / 180,
          "pitch": 0 * Math.PI / 180,
          "rotation": 0,
          "target": "02-reception"
        }
      ],
      "infoHotspots": [
      ],
      "iframeHotspots": [
        {
          "yaw": 70 * Math.PI / 180,
          "pitch": 0 * Math.PI / 180,
          "title": "GMAPS",
          "src": 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9487.563699358636!2d-9.211273541013671!3d38.69789785451112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecf578f4d20e9%3A0x530952e38d140ae6!2sDigisfera+-+Fotografia+e+Inform%C3%A1tica%2C+Lda!5e1!3m2!1spt-PT!2spt!4v1429956174252',
          "width": 1280,
          "height": 480,
          "opts": { perspective: { radius: 1640, extraTransforms: "rotateY(-45deg) translateY(70px)" } }
        }
      ],
      "imageHotspots": [
        {
          "type": "ImageHotspot",
          "yaw": -90 * Math.PI / 180,
          "pitch": -0 * Math.PI / 180,
          "title": "KANB",
          "src": './data/kanb.png',
          "width": 1200,
          "height": 750
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
    "infoHotspots": [],
    "iframeHotspots": [],
    "imageHotspots": []
  },
  "name": "Marzipano démo",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
