import type { Config } from "tailwindcss";

const keyframes = {
  "fa-beat": {
    "0%, 90%": {
      "transform": "scale(1)"
    },
    "45%": {
      "transform": "scale(var(--fa-beat-scale,1.25))"
    }
  },
  "fa-bounce": {
    "0%": {
      "transform": "scale(1) translateY(0px)"
    },
    "10%": {
      "transform": "scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)"
    },
    "30%": {
      "transform": "scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))"
    },
    "50%": {
      "transform": "scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)"
    },
    "57%": {
      "transform": "scale(1) translateY(var(--fa-bounce-rebound,-.125em))"
    },
    "64%": {
      "transform": "scale(1) translateY(0px)"
    },
    "100%": {
      "transform": "scale(1) translateY(0px)"
    }
  },
  "fa-fade": {
    "50%": {
      "opacity": "var(--fa-fade-opacity,.4)"
    }
  },
  "fa-beat-fade": {
    "0%, 100%": {
      "opacity": "var(--fa-beat-fade-opacity,.4)",
      "transform": "scale(1)"
    },
    "50%": {
      "opacity": "1",
      "transform": "scale(var(--fa-beat-fade-scale,1.125))"
    }
  },
  "fa-flip": {
    "50%": {
      "transform": "rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))"
    }
  },
  "fa-shake": {
    "0%": {
      "transform": "rotate(-15deg)"
    },
    "4%": {
      "transform": "rotate(15deg)"
    },
    "8%, 24%": {
      "transform": "rotate(-18deg)"
    },
    "12%, 28%": {
      "transform": "rotate(18deg)"
    },
    "16%": {
      "transform": "rotate(-22deg)"
    },
    "20%": {
      "transform": "rotate(22deg)"
    },
    "32%": {
      "transform": "rotate(-12deg)"
    },
    "36%": {
      "transform": "rotate(12deg)"
    },
    "40%, 100%": {
      "transform": "rotate(0deg)"
    }
  },
  "fa-spin": {
    "0%": {
      "transform": "rotate(0deg)"
    },
    "100%": {
      "transform": "rotate(1turn)"
    }
  },
  "a": {
    "100%": {
      "transform": "rotate(1turn)"
    }
  },
  "swiper-preloader-spin": {
    "0%": {
      "transform": "rotate(0deg)"
    },
    "100%": {
      "transform": "rotate(360deg)"
    }
  },
  "swipe-line": {
    "0%": {
      "transform-origin": "right center",
      "transform": "scale(1)"
    },
    "33%": {
      "transform-origin": "right center",
      "transform": "scaleX(0)"
    },
    "66%": {
      "transform-origin": "left center",
      "transform": "scaleX(0)"
    },
    "100%": {
      "transform-origin": "left center",
      "transform": "scale(1)"
    }
  },
  "pscr_marquee2": {
    "0%": {
      "transform": "translateX(-100%)"
    },
    "100%": {
      "transform": "translateX(0px)"
    }
  },
  "pscr_marquee1": {
    "0%": {
      "transform": "translateX(0px)"
    },
    "100%": {
      "transform": "translateX(-100%)"
    }
  },
  "marquee-ltr-anim": {
    "0%": {
      "transform": "translateX(-50%)"
    },
    "100%": {
      "transform": "translateX(0%)"
    }
  },
  "marquee-rtl-anim": {
    "0%": {
      "transform": "translateX(0%)"
    },
    "100%": {
      "transform": "translateX(-50%)"
    }
  }
};

const config: Config = { theme: { extend: {
  keyframes,
  animation: Object.fromEntries(Object.keys(keyframes).map(name => [name, `${name} 1s linear infinite`])),
} } };

export default config;

