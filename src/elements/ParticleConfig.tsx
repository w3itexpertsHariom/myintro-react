import Particles from "react-tsparticles"
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

const ParticleConfig = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        //console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <>
            <Particles id="tsparticles"

                options={
                    {
                        "autoPlay": true,
                        "background": {
                            "image": "",
                            "position": "",
                            "repeat": "",
                            "size": "",
                            "opacity": 1
                        },
                        "backgroundMask": {
                            "composite": "destination-out",
                            "cover": {
                                "color": {
                                    "value": "#fff"
                                },
                                "opacity": 1
                            },
                            "enable": false
                        },
                        "defaultThemes": {},
                        "delay": 0,
                        "fullScreen": {
                            "enable": true,
                            "zIndex": -1
                        },
                        "detectRetina": true,
                        "duration": 0,
                        "fpsLimit": 500,
                        "interactivity": {
                            "detectsOn": "window",
                            "events": {
                                "onClick": {
                                    "enable": false,
                                    "mode": []
                                },
                                "onDiv": {
                                    "selectors": [],
                                    "enable": false,
                                    "mode": [],
                                    "type": "circle"
                                },
                                "onHover": {
                                    "enable": true,
                                    "mode": "trail",
                                    "parallax": {
                                        "enable": false,
                                        "force": 2,
                                        "smooth": 10
                                    }
                                },
                                "resize": {
                                    "delay": 0.5,
                                    "enable": true
                                }
                            },
                            "modes": {
                                "attract": {
                                    "distance": 100,
                                    "duration": 0.4,
                                    "easing": "ease-out-quad",
                                    "factor": 1,
                                    "maxSpeed": 50,
                                    "speed": 1
                                },
                                "bounce": {
                                    "distance": 200
                                },
                                "bubble": {
                                    "distance": 200,
                                    "duration": 0.4,
                                    "mix": false,
                                    "divs": {
                                        "distance": 200,
                                        "duration": 0.4,
                                        "mix": false,
                                        "selectors": []
                                    }
                                },
                                "connect": {
                                    "distance": 80,
                                    "links": {
                                        "opacity": 0.5
                                    },
                                    "radius": 60
                                },
                                "grab": {
                                    "distance": 100,
                                    "links": {
                                        "blink": false,
                                        "consent": false,
                                        "opacity": 1
                                    }
                                },
                                "push": {
                                    "default": true,
                                    "groups": [],
                                    "quantity": 4
                                },
                                "remove": {
                                    "quantity": 2
                                },
                                "repulse": {
                                    "distance": 200,
                                    "duration": 0.4,
                                    "factor": 100,
                                    "speed": 1,
                                    "maxSpeed": 50,
                                    "easing": "ease-out-quad",
                                    "divs": {
                                        "distance": 200,
                                        "duration": 0.4,
                                        "factor": 100,
                                        "speed": 1,
                                        "maxSpeed": 50,
                                        "easing": "ease-out-quad",
                                        "selectors": []
                                    }
                                },
                                "slow": {
                                    "factor": 3,
                                    "radius": 200
                                },
                                "trail": {
                                    "delay": 0.005,
                                    "pauseOnStop": true,
                                    "quantity": 5,
                                    "particles": {
                                        "color": {
                                            "value": "#ff0000",
                                            "animation": {
                                                "enable": true,
                                                "speed": 400,
                                                "sync": true
                                            }
                                        },
                                        "collisions": {
                                            "enable": false
                                        },
                                        "links": {
                                            "enable": false
                                        },
                                        "move": {
                                            "outModes": {
                                                "default": "destroy"
                                            },
                                            "speed": 2
                                        },
                                        "size": {
                                            "value": 2,
                                            "animation": {
                                                "enable": true,
                                                "speed": 5,
                                                "minimumValue": 1,
                                                "sync": true,
                                                "startValue": "min",
                                                "destroy": "max"
                                            }
                                        }
                                    }
                                },
                                "light": {
                                    "area": {
                                        "gradient": {
                                            "start": {
                                                "value": "#ffffff"
                                            },
                                            "stop": {
                                                "value": "#000000"
                                            }
                                        },
                                        "radius": 1000
                                    },
                                    "shadow": {
                                        "color": {
                                            "value": "#000000"
                                        },
                                        "length": 5000
                                    }
                                }
                            }
                        },
                        "manualParticles": [],
                        "particles": {
                            "bounce": {
                                "horizontal": {
                                    "random": {
                                        "enable": false,
                                        "minimumValue": 0.1
                                    },
                                    "value": 1
                                },
                                "vertical": {
                                    "random": {
                                        "enable": false,
                                        "minimumValue": 0.1
                                    },
                                    "value": 1
                                }
                            },
                            "collisions": {
                                "absorb": {
                                    "speed": 5
                                },
                                "bounce": {
                                    "horizontal": {
                                        "random": {
                                            "enable": false,
                                            "minimumValue": 0.1
                                        },
                                        "value": 1
                                    },
                                    "vertical": {
                                        "random": {
                                            "enable": false,
                                            "minimumValue": 0.1
                                        },
                                        "value": 1
                                    }
                                },
                                "enable": false,
                                "maxSpeed": 50,
                                "mode": "bounce",
                                "overlap": {
                                    "enable": true,
                                    "retries": 0
                                }
                            },
                            "color": {
                                "value": "#2e0ea5",
                                "animation": {
                                    "h": {
                                        "count": 0,
                                        "enable": true,
                                        "offset": 0,
                                        "speed": 50,
                                        "delay": 0,
                                        "decay": 0,
                                        "sync": false
                                    },
                                    "s": {
                                        "count": 0,
                                        "enable": false,
                                        "offset": 0,
                                        "speed": 1,
                                        "delay": 0,
                                        "decay": 0,
                                        "sync": true
                                    },
                                    "l": {
                                        "count": 0,
                                        "enable": false,
                                        "offset": 0,
                                        "speed": 1,
                                        "delay": 0,
                                        "decay": 0,
                                        "sync": true
                                    }
                                }
                            },
                            "groups": {},
                            "move": {
                                "angle": {
                                    "offset": 0,
                                    "value": 90
                                },
                                "attract": {
                                    "distance": 200,
                                    "enable": false,
                                    "rotate": {
                                        "x": 3000,
                                        "y": 3000
                                    }
                                },
                                "center": {
                                    "x": 50,
                                    "y": 50,
                                    "mode": "percent",
                                    "radius": 0
                                },
                                "decay": 0,
                                "distance": {},
                                "direction": "none",
                                "drift": 0,
                                "enable": true,
                                "gravity": {
                                    "acceleration": 9.81,
                                    "enable": false,
                                    "inverse": false,
                                    "maxSpeed": 50
                                },
                                "path": {
                                    "clamp": true,
                                    "delay": {
                                        "random": {
                                            "enable": false,
                                            "minimumValue": 0
                                        },
                                        "value": 0
                                    },
                                    "enable": false,
                                    "options": {}
                                },
                                "outModes": {
                                    "default": "out",
                                    "bottom": "out",
                                    "left": "out",
                                    "right": "out",
                                    "top": "out"
                                },
                                "random": false,
                                "size": false,
                                "speed": 2,
                                "spin": {
                                    "acceleration": 0,
                                    "enable": false
                                },
                                "straight": false,
                                "trail": {
                                    "enable": false,
                                    "length": 10,
                                    "fill": {}
                                },
                                "vibrate": false,
                                "warp": false
                            },
                            "number": {
                                "density": {
                                    "enable": true,
                                    "width": 1920,
                                    "height": 1080
                                },
                                "limit": 0,
                                "value": 100
                            },
                            "opacity": {
                                "random": {
                                    "enable": true,
                                    "minimumValue": 0.3
                                },
                                "value": {
                                    "min": 0.3,
                                    "max": 0.8
                                },
                                "animation": {
                                    "count": 0,
                                    "enable": true,
                                    "speed": 0.5,
                                    "decay": 0,
                                    "delay": 0,
                                    "sync": false,
                                    "mode": "auto",
                                    "startValue": "random",
                                    "destroy": "none",
                                    "minimumValue": 0.3
                                }
                            },
                            "reduceDuplicates": false,
                            "shadow": {
                                "blur": 0,
                                "color": {
                                    "value": "#000"
                                },
                                "enable": false,
                                "offset": {
                                    "x": 0,
                                    "y": 0
                                }
                            },
                            "shape": {
                                "close": true,
                                "fill": true,
                                "options": {},
                                "type": "circle"
                            },
                            "size": {
                                "random": {
                                    "enable": true,
                                    "minimumValue": 1
                                },
                                "value": {
                                    "min": 1,
                                    "max": 3
                                },
                                "animation": {
                                    "count": 0,
                                    "enable": true,
                                    "speed": 3,
                                    "decay": 0,
                                    "delay": 0,
                                    "sync": false,
                                    "mode": "auto",
                                    "startValue": "random",
                                    "destroy": "none",
                                    "minimumValue": 1
                                }
                            },
                            "stroke": {
                                "width": 0
                            },
                            "zIndex": {
                                "random": {
                                    "enable": false,
                                    "minimumValue": 0
                                },
                                "value": 0,
                                "opacityRate": 1,
                                "sizeRate": 1,
                                "velocityRate": 1
                            },
                            "life": {
                                "count": 0,
                                "delay": {
                                    "random": {
                                        "enable": false,
                                        "minimumValue": 0
                                    },
                                    "value": 0,
                                    "sync": false
                                },
                                "duration": {
                                    "random": {
                                        "enable": false,
                                        "minimumValue": 0.0001
                                    },
                                    "value": 0,
                                    "sync": false
                                }
                            },
                            "rotate": {
                                "random": {
                                    "enable": false,
                                    "minimumValue": 0
                                },
                                "value": 0,
                                "animation": {
                                    "enable": false,
                                    "speed": 0,
                                    "decay": 0,
                                    "sync": false
                                },
                                "direction": "clockwise",
                                "path": false
                            },
                            "destroy": {
                                "bounds": {},
                                "mode": "none",
                                "split": {
                                    "count": 1,
                                    "factor": {
                                        "random": {
                                            "enable": false,
                                            "minimumValue": 0
                                        },
                                        "value": 3
                                    },
                                    "rate": {
                                        "random": {
                                            "enable": false,
                                            "minimumValue": 0
                                        },
                                        "value": {
                                            "min": 4,
                                            "max": 9
                                        }
                                    },
                                    "sizeOffset": true,
                                    "particles": {}
                                }
                            },
                            "roll": {
                                "darken": {
                                    "enable": false,
                                    "value": 0
                                },
                                "enable": false,
                                "enlighten": {
                                    "enable": false,
                                    "value": 0
                                },
                                "mode": "vertical",
                                "speed": 25
                            },
                            "tilt": {
                                "random": {
                                    "enable": false,
                                    "minimumValue": 0
                                },
                                "value": 0,
                                "animation": {
                                    "enable": false,
                                    "speed": 0,
                                    "decay": 0,
                                    "sync": false
                                },
                                "direction": "clockwise",
                                "enable": false
                            },
                            "twinkle": {
                                "lines": {
                                    "enable": false,
                                    "frequency": 0.05,
                                    "opacity": 1
                                },
                                "particles": {
                                    "enable": false,
                                    "frequency": 0.05,
                                    "opacity": 1
                                }
                            },
                            "wobble": {
                                "distance": 5,
                                "enable": false,
                                "speed": {
                                    "angle": 50,
                                    "move": 10
                                }
                            },
                            "orbit": {
                                "animation": {
                                    "count": 0,
                                    "enable": false,
                                    "speed": 1,
                                    "decay": 0,
                                    "delay": 0,
                                    "sync": false
                                },
                                "enable": false,
                                "opacity": 1,
                                "rotation": {
                                    "random": {
                                        "enable": false,
                                        "minimumValue": 0
                                    },
                                    "value": 45
                                },
                                "width": 1
                            },
                            "links": {
                                "blink": false,
                                "color": {
                                    "value": "random"
                                },
                                "consent": false,
                                "distance": 100,
                                "enable": true,
                                "frequency": 1,
                                "opacity": 1,
                                "shadow": {
                                    "blur": 5,
                                    "color": {
                                        "value": "#2e0ea5"
                                    },
                                    "enable": false
                                },
                                "triangles": {
                                    "enable": false,
                                    "frequency": 1
                                },
                                "width": 1,
                                "warp": false
                            },
                            "repulse": {
                                "random": {
                                    "enable": false,
                                    "minimumValue": 0
                                },
                                "value": 0,
                                "enabled": false,
                                "distance": 1,
                                "duration": 1,
                                "factor": 1,
                                "speed": 1
                            }
                        },
                        "pauseOnBlur": true,
                        "pauseOnOutsideViewport": true,
                        "responsive": [],
                        "smooth": false,
                        "style": {},
                        "themes": [],
                        "zLayers": 100,
                        "emitters": []
                    }
                }
                init={particlesInit} loaded={particlesLoaded} />
        </>
    )
}

export const ParticleAnimation2 = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <Particles id="tsparticles"

            options={
                {
                    "autoPlay": true,
                    "background": {
                        "image": '',
                        "position": "",
                        "repeat": "",
                        "size": "100%",
                        "opacity": 1
                    },
                    "backgroundMask": {
                        "composite": "destination-out",
                        "cover": {
                            "color": {
                                "value": "#1504fc"
                            },
                            "opacity": 1
                        },
                        "enable": false
                    },

                    "defaultThemes": {},
                    "delay": 0,
                    "fullScreen": {
                        "enable": true,
                        "zIndex": 1
                    },
                    "detectRetina": true,
                    "duration": 0,
                    "fpsLimit": 500,
                    "interactivity": {
                        "detectsOn": "window",
                        "events": {
                            "onClick": {
                                "enable": false,
                                "mode": []
                            },
                            "onDiv": {
                                "selectors": [],
                                "enable": false,
                                "mode": [],
                                "type": "circle"
                            },
                            "onHover": {
                                "enable": true,
                                "mode": "repulse",
                                "parallax": {
                                    "enable": false,
                                    "force": 2,
                                    "smooth": 10
                                }
                            },
                            "resize": {
                                "delay": 5,
                                "enable": true
                            }
                        },
                        "modes": {
                            "attract": {
                                "distance": 100,
                                "duration": 0.4,
                                "easing": "ease-out-quad",
                                "factor": 1,
                                "maxSpeed": 50,
                                "speed": 1
                            },
                            "bounce": {
                                "distance": 200
                            },
                            "bubble": {
                                "distance": 100,
                                "duration": 0.4,
                                "mix": false,
                                "size": 500,
                                "divs": {
                                    "distance": 200,
                                    "duration": 0.4,
                                    "mix": false,
                                    "selectors": []
                                }
                            },
                            "connect": {
                                "distance": 80,
                                "links": {
                                    "opacity": 0.5
                                },
                                "radius": 50
                            },
                            "grab": {
                                "distance": 100,
                                "links": {
                                    "blink": false,
                                    "consent": false,
                                    "opacity": 1
                                }
                            },
                            "push": {
                                "default": true,
                                "groups": [],
                                "quantity": 50
                            },
                            "remove": {
                                "quantity": 2
                            },
                            "repulse": {
                                "distance": 200,
                                "duration": 0.4,
                                "factor": 100,
                                "speed": 1,
                                "maxSpeed": 50,
                                "easing": "ease-out-quad",
                                "divs": {
                                    "distance": 200,
                                    "duration": 0.4,
                                    "factor": 100,
                                    "speed": 1,
                                    "maxSpeed": 50,
                                    "easing": "ease-out-quad",
                                    "selectors": []
                                }
                            },
                            "slow": {
                                "factor": 3,
                                "radius": 200
                            },
                            "trail": {
                                "delay": 0.005,
                                "pauseOnStop": true,
                                "quantity": 5,
                                "particles": {
                                    "color": {
                                        "value": "#1504fc",
                                        "animation": {
                                            "enable": true,
                                            "speed": 500,
                                            "sync": true
                                        }
                                    },
                                    "collisions": {
                                        "enable": false
                                    },
                                    "links": {
                                        "enable": false
                                    },
                                    "move": {
                                        "outModes": {
                                            "default": "destroy"
                                        },
                                        "speed": 2
                                    },
                                    "size": {
                                        "value": 0,
                                        "animation": {
                                            "enable": true,
                                            "speed": 5,
                                            "minimumValue": 1,
                                            "sync": true,
                                            "startValue": "min",
                                            "destroy": "max"
                                        }
                                    }
                                }
                            },
                            "light": {
                                "area": {
                                    "gradient": {
                                        "start": {
                                            "value": "#ffffff"
                                        },
                                        "stop": {
                                            "value": "#000000"
                                        }
                                    },
                                    "radius": 1000
                                },
                                "shadow": {
                                    "color": {
                                        "value": "#1504fc"
                                    },
                                    "length": 5000
                                }
                            }
                        }
                    },
                    "manualParticles": [],
                    "particles": {
                        "bounce": {
                            "horizontal": {
                                "random": {
                                    "enable": false,
                                    "minimumValue": 0.1
                                },
                                "value": 1
                            },
                            "vertical": {
                                "random": {
                                    "enable": false,
                                    "minimumValue": 0.1
                                },
                                "value": 1
                            }
                        },
                        "collisions": {
                            "absorb": {
                                "speed": 5
                            },
                            "bounce": {
                                "horizontal": {
                                    "random": {
                                        "enable": false,
                                        "minimumValue": 0.1
                                    },
                                    "value": 1
                                },
                                "vertical": {
                                    "random": {
                                        "enable": false,
                                        "minimumValue": 0.1
                                    },
                                    "value": 1
                                }
                            },
                            "enable": false,
                            "maxSpeed": 50,
                            "mode": "bounce",
                            "overlap": {
                                "enable": true,
                                "retries": 0
                            }
                        },
                        "color": {
                            "value": "#1504fc",
                            "animation": {
                                "h": {
                                    "count": 0,
                                    "enable": true,
                                    "offset": 0,
                                    "speed": 50,
                                    "delay": 0,
                                    "decay": 0,
                                    "sync": false
                                },
                                "s": {
                                    "count": 0,
                                    "enable": false,
                                    "offset": 0,
                                    "speed": 1,
                                    "delay": 0,
                                    "decay": 0,
                                    "sync": true
                                },
                                "l": {
                                    "count": 0,
                                    "enable": false,
                                    "offset": 0,
                                    "speed": 1,
                                    "delay": 0,
                                    "decay": 0,
                                    "sync": true
                                }
                            }
                        },
                        "groups": {},
                        "move": {
                            "angle": {
                                "offset": 0,
                                "value": 500
                            },
                            "attract": {
                                "distance": 200,
                                "enable": false,
                                "rotate": {
                                    "x": 3000,
                                    "y": 3000
                                }
                            },
                            "center": {
                                "x": 50,
                                "y": 50,
                                "mode": "percent",
                                "radius": 0
                            },
                            "decay": 0,
                            "distance": {},
                            "direction": "none",
                            "drift": 0,
                            "enable": true,
                            "gravity": {
                                "acceleration": 9.81,
                                "enable": false,
                                "inverse": false,
                                "maxSpeed": 50
                            },
                            "path": {
                                "clamp": true,
                                "delay": {
                                    "random": {
                                        "enable": false,
                                        "minimumValue": 0
                                    },
                                    "value": 0
                                },
                                "enable": false,
                                "options": {}
                            },
                            "outModes": {
                                "default": "out",
                                "bottom": "out",
                                "left": "out",
                                "right": "out",
                                "top": "out"
                            },
                            "random": false,
                            "size": true,
                            "speed": 2,
                            "spin": {
                                "acceleration": 0,
                                "enable": false
                            },
                            "straight": false,
                            "trail": {
                                "enable": false,
                                "length": 10,
                                "fill": {}
                            },
                            "vibrate": false,
                            "warp": false
                        },
                        "number": {
                            "density": {
                                "enable": true,
                                "width": 1920,
                                "height": 1080
                            },
                            "limit": 0,
                            "value": 100
                        },
                        "opacity": {
                            "random": {
                                "enable": true,
                                "minimumValue": 0.3
                            },
                            "value": {
                                "min": 0.3,
                                "max": 0.8
                            },
                            "animation": {
                                "count": 0,
                                "enable": true,
                                "speed": 0.5,
                                "decay": 0,
                                "delay": 0,
                                "sync": false,
                                "mode": "auto",
                                "startValue": "random",
                                "destroy": "none",
                                "minimumValue": 0.3
                            }
                        },
                        "reduceDuplicates": false,
                        "shadow": {
                            "blur": 0,
                            "color": {
                                "value": "#1504fc"
                            },
                            "enable": false,
                            "offset": {
                                "x": 0,
                                "y": 0
                            }
                        },
                        "shape": {
                            "close": true,
                            "fill": true,
                            "options": {},
                            "type": "circle"
                        },
                        "size": {
                            "random": {
                                "enable": true,
                                "minimumValue": 1
                            },
                            "value": {
                                "min": 1,
                                "max": 3
                            },
                            "animation": {
                                "count": 0,
                                "enable": true,
                                "speed": 3,
                                "decay": 0,
                                "delay": 0,
                                "sync": false,
                                "mode": "auto",
                                "startValue": "random",
                                "destroy": "none",
                                "minimumValue": 1
                            }
                        },
                        "stroke": {
                            "width": 0
                        },
                        "zIndex": {
                            "random": {
                                "enable": false,
                                "minimumValue": 0
                            },
                            "value": 0,
                            "opacityRate": 1,
                            "sizeRate": 1,
                            "velocityRate": 1
                        },
                        "life": {
                            "count": 0,
                            "delay": {
                                "random": {
                                    "enable": false,
                                    "minimumValue": 0
                                },
                                "value": 0,
                                "sync": false
                            },
                            "duration": {
                                "random": {
                                    "enable": false,
                                    "minimumValue": 0.0001
                                },
                                "value": 0,
                                "sync": false
                            }
                        },
                        "rotate": {
                            "random": {
                                "enable": false,
                                "minimumValue": 0
                            },
                            "value": 0,
                            "animation": {
                                "enable": false,
                                "speed": 0,
                                "decay": 0,
                                "sync": false
                            },
                            "direction": "clockwise",
                            "path": false
                        },
                        "destroy": {
                            "bounds": {},
                            "mode": "none",
                            "split": {
                                "count": 1,
                                "factor": {
                                    "random": {
                                        "enable": false,
                                        "minimumValue": 0
                                    },
                                    "value": 3
                                },
                                "rate": {
                                    "random": {
                                        "enable": false,
                                        "minimumValue": 0
                                    },
                                    "value": {
                                        "min": 4,
                                        "max": 9
                                    }
                                },
                                "sizeOffset": true,
                                "particles": {}
                            }
                        },
                        "roll": {
                            "darken": {
                                "enable": false,
                                "value": 0
                            },
                            "enable": false,
                            "enlighten": {
                                "enable": false,
                                "value": 0
                            },
                            "mode": "vertical",
                            "speed": 25
                        },
                        "tilt": {
                            "random": {
                                "enable": false,
                                "minimumValue": 0
                            },
                            "value": 0,
                            "animation": {
                                "enable": false,
                                "speed": 0,
                                "decay": 0,
                                "sync": false
                            },
                            "direction": "clockwise",
                            "enable": false
                        },
                        "twinkle": {
                            "lines": {
                                "enable": false,
                                "frequency": 0.05,
                                "opacity": 1
                            },
                            "particles": {
                                "enable": false,
                                "frequency": 0.05,
                                "opacity": 1
                            }
                        },
                        "wobble": {
                            "distance": 5,
                            "enable": false,
                            "speed": {
                                "angle": 50,
                                "move": 10
                            }
                        },
                        "orbit": {
                            "animation": {
                                "count": 0,
                                "enable": false,
                                "speed": 1,
                                "decay": 0,
                                "delay": 0,
                                "sync": false
                            },
                            "enable": false,
                            "opacity": 1,
                            "rotation": {
                                "random": {
                                    "enable": false,
                                    "minimumValue": 0
                                },
                                "value": 45
                            },
                            "width": 1
                        },
                        "links": {
                            "blink": false,
                            "color": {
                                "value": "random"
                            },
                            "consent": false,
                            "distance": 100,
                            "enable": true,
                            "frequency": 1,
                            "opacity": 1,
                            "shadow": {
                                "blur": 5,
                                "color": {
                                    "value": "#1504fc"
                                },
                                "enable": false
                            },
                            "triangles": {
                                "enable": false,
                                "frequency": 1
                            },
                            "width": 1,
                            "warp": false
                        },
                        "repulse": {
                            "random": {
                                "enable": false,
                                "minimumValue": 0
                            },
                            "value": 0,
                            "enabled": false,
                            "distance": 1,
                            "duration": 1,
                            "factor": 1,
                            "speed": 1
                        }
                    },
                    "pauseOnBlur": true,
                    "pauseOnOutsideViewport": true,
                    "responsive": [],
                    "smooth": false,
                    "style": {},
                    "themes": [],
                    "zLayers": 100,
                    "emitters": []
                }
            }
            init={particlesInit} loaded={particlesLoaded} />
    )
}

export const ParticleAnimation3 = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <Particles id="tsparticles"
            options={
                {
                    "autoPlay": true,
                    "background": {
                        "color": {
                            "value": "#000000"
                        },
                        "image": "",
                        "position": "",
                        "repeat": "",
                        "size": "",
                        "opacity": 1
                    },
                    "backgroundMask": {
                        "composite": "destination-out",
                        "cover": {
                            "color": {
                                "value": "#7cff01"
                            },
                            "opacity": 1
                        },
                        "enable": false
                    },
                    "defaultThemes": {},
                    "delay": 0,
                    "fullScreen": {
                        "enable": true,
                        "zIndex": -1
                    },
                    "detectRetina": true,
                    "duration": 0,
                    "fpsLimit": 120,
                    "interactivity": {
                        "detectsOn": "window",
                        "events": {
                            "onClick": {
                                "enable": false,
                                "mode": []
                            },
                            "onDiv": {
                                "selectors": [],
                                "enable": false,
                                "mode": [],
                                "type": "circle"
                            },
                            "onHover": {
                                "enable": true,
                                "mode": "trail",
                                "parallax": {
                                    "enable": true,
                                    "force": 20,
                                    "smooth": 100
                                }
                            },
                            "resize": {
                                "delay": 0.5,
                                "enable": true
                            }
                        },
                        "modes": {
                            "attract": {
                                "distance": 200,
                                "duration": 0.4,
                                "easing": "ease-out-quad",
                                "factor": 1,
                                "maxSpeed": 50,
                                "speed": 1
                            },
                            "bounce": {
                                "distance": 200
                            },
                            "bubble": {
                                "distance": 200,
                                "duration": 0.4,
                                "mix": false,
                                "divs": {
                                    "distance": 200,
                                    "duration": 0.4,
                                    "mix": false,
                                    "selectors": []
                                }
                            },
                            "connect": {
                                "distance": 80,
                                "links": {
                                    "opacity": 0.5
                                },
                                "radius": 60
                            },
                            "grab": {
                                "distance": 100,
                                "links": {
                                    "blink": false,
                                    "consent": false,
                                    "opacity": 1
                                }
                            },
                            "push": {
                                "default": true,
                                "groups": [],
                                "quantity": 4
                            },
                            "remove": {
                                "quantity": 2
                            },
                            "repulse": {
                                "distance": 200,
                                "duration": 0.4,
                                "factor": 100,
                                "speed": 1,
                                "maxSpeed": 50,
                                "easing": "ease-out-quad",
                                "divs": {
                                    "distance": 200,
                                    "duration": 0.4,
                                    "factor": 100,
                                    "speed": 1,
                                    "maxSpeed": 50,
                                    "easing": "ease-out-quad",
                                    "selectors": []
                                }
                            },
                            "slow": {
                                "factor": 3,
                                "radius": 200
                            },
                            "trail": {
                                "delay": 1,
                                "pauseOnStop": false,
                                "quantity": 1
                            },
                            "light": {
                                "area": {
                                    "gradient": {
                                        "start": {
                                            "value": "#7cff01"
                                        },
                                        "stop": {
                                            "value": "#7cff01"
                                        }
                                    },
                                    "radius": 1000
                                },
                                "shadow": {
                                    "color": {
                                        "value": "#7cff01"
                                    },
                                    "length": 2000
                                }
                            }
                        }
                    },
                    "manualParticles": [],
                    "particles": {
                        "bounce": {
                            "horizontal": {
                                "random": {
                                    "enable": false,
                                    "minimumValue": 0.1
                                },
                                "value": 1
                            },
                            "vertical": {
                                "random": {
                                    "enable": false,
                                    "minimumValue": 0.1
                                },
                                "value": 1
                            }
                        },
                        "collisions": {
                            "absorb": {
                                "speed": 2
                            },
                            "bounce": {
                                "horizontal": {
                                    "random": {
                                        "enable": false,
                                        "minimumValue": 0.1
                                    },
                                    "value": 1
                                },
                                "vertical": {
                                    "random": {
                                        "enable": false,
                                        "minimumValue": 0.1
                                    },
                                    "value": 1
                                }
                            },
                            "enable": false,
                            "maxSpeed": 50,
                            "mode": "bounce",
                            "overlap": {
                                "enable": true,
                                "retries": 0
                            }
                        },
                        "color": {
                            "value": "#fff",
                            "animation": {
                                "h": {
                                    "count": 0,
                                    "enable": false,
                                    "offset": 0,
                                    "speed": 20,
                                    "delay": 0,
                                    "decay": 0,
                                    "sync": true
                                },
                                "s": {
                                    "count": 0,
                                    "enable": false,
                                    "offset": 0,
                                    "speed": 1,
                                    "delay": 0,
                                    "decay": 0,
                                    "sync": true
                                },
                                "l": {
                                    "count": 0,
                                    "enable": false,
                                    "offset": 0,
                                    "speed": 1,
                                    "delay": 0,
                                    "decay": 0,
                                    "sync": true
                                }
                            }
                        },
                        "groups": {
                            "z5000": {
                                "number": {
                                    "value": 70
                                },
                                "zIndex": {
                                    "value": 50
                                }
                            },
                            "z7500": {
                                "number": {
                                    "value": 30
                                },
                                "zIndex": {
                                    "value": 75
                                }
                            },
                            "z2500": {
                                "number": {
                                    "value": 50
                                },
                                "zIndex": {
                                    "value": 25
                                }
                            },
                            "z1000": {
                                "number": {
                                    "value": 40
                                },
                                "zIndex": {
                                    "value": 10
                                }
                            }
                        },
                        "move": {
                            "angle": {
                                "offset": 0,
                                "value": 10
                            },
                            "attract": {
                                "distance": 200,
                                "enable": false,
                                "rotate": {
                                    "x": 600,
                                    "y": 1200
                                }
                            },
                            "center": {
                                "x": 50,
                                "y": 50,
                                "mode": "percent",
                                "radius": 0
                            },
                            "decay": 0,
                            "distance": {},
                            "direction": "right",
                            "drift": 0,
                            "enable": true,
                            "gravity": {
                                "acceleration": 9.81,
                                "enable": false,
                                "inverse": false,
                                "maxSpeed": 50
                            },
                            "path": {
                                "clamp": true,
                                "delay": {
                                    "random": {
                                        "enable": false,
                                        "minimumValue": 0
                                    },
                                    "value": 0
                                },
                                "enable": false,
                                "options": {}
                            },
                            "outModes": {
                                "default": "out",
                                "bottom": "out",
                                "left": "out",
                                "right": "out",
                                "top": "out"
                            },
                            "random": false,
                            "size": false,
                            "speed": 5,
                            "spin": {
                                "acceleration": 0,
                                "enable": false
                            },
                            "straight": false,
                            "trail": {
                                "enable": false,
                                "length": 10,
                                "fill": {}
                            },
                            "vibrate": false,
                            "warp": false
                        },
                        "number": {
                            "density": {
                                "enable": false,
                                "width": 1920,
                                "height": 1080
                            },
                            "limit": 0,
                            "value": 200
                        },
                        "opacity": {
                            "random": {
                                "enable": false,
                                "minimumValue": 0.1
                            },
                            "value": 1,
                            "animation": {
                                "count": 0,
                                "enable": false,
                                "speed": 3,
                                "decay": 0,
                                "delay": 0,
                                "sync": false,
                                "mode": "auto",
                                "startValue": "random",
                                "destroy": "none",
                                "minimumValue": 0.1
                            }
                        },
                        "reduceDuplicates": false,
                        "shadow": {
                            "blur": 0,
                            "color": {
                                "value": "#000"
                            },
                            "enable": false,
                            "offset": {
                                "x": 0,
                                "y": 0
                            }
                        },
                        "shape": {
                            "close": true,
                            "fill": true,
                            "options": {},
                            "type": "circle"
                        },
                        "size": {
                            "random": {
                                "enable": false,
                                "minimumValue": 1
                            },
                            "value": 3,
                            "animation": {
                                "count": 0,
                                "enable": false,
                                "speed": 5,
                                "decay": 0,
                                "delay": 0,
                                "sync": false,
                                "mode": "auto",
                                "startValue": "random",
                                "destroy": "none"
                            }
                        },
                        "stroke": {
                            "width": 0
                        },
                        "zIndex": {
                            "random": {
                                "enable": false,
                                "minimumValue": 0
                            },
                            "value": 5,
                            "opacityRate": 0.5,
                            "sizeRate": 1,
                            "velocityRate": 1
                        },
                        "life": {
                            "count": 0,
                            "delay": {
                                "random": {
                                    "enable": false,
                                    "minimumValue": 0
                                },
                                "value": 0,
                                "sync": false
                            },
                            "duration": {
                                "random": {
                                    "enable": false,
                                    "minimumValue": 0.0001
                                },
                                "value": 0,
                                "sync": false
                            }
                        },
                        "rotate": {
                            "random": {
                                "enable": false,
                                "minimumValue": 0
                            },
                            "value": 0,
                            "animation": {
                                "enable": false,
                                "speed": 0,
                                "decay": 0,
                                "sync": false
                            },
                            "direction": "clockwise",
                            "path": false
                        },
                        "destroy": {
                            "bounds": {},
                            "mode": "none",
                            "split": {
                                "count": 1,
                                "factor": {
                                    "random": {
                                        "enable": false,
                                        "minimumValue": 0
                                    },
                                    "value": 3
                                },
                                "rate": {
                                    "random": {
                                        "enable": false,
                                        "minimumValue": 0
                                    },
                                    "value": {
                                        "min": 4,
                                        "max": 9
                                    }
                                },
                                "sizeOffset": true,
                                "particles": {}
                            }
                        },
                        "roll": {
                            "darken": {
                                "enable": false,
                                "value": 0
                            },
                            "enable": false,
                            "enlighten": {
                                "enable": false,
                                "value": 0
                            },
                            "mode": "vertical",
                            "speed": 25
                        },
                        "tilt": {
                            "random": {
                                "enable": false,
                                "minimumValue": 0
                            },
                            "value": 0,
                            "animation": {
                                "enable": false,
                                "speed": 0,
                                "decay": 0,
                                "sync": false
                            },
                            "direction": "clockwise",
                            "enable": false
                        },
                        "twinkle": {
                            "lines": {
                                "enable": false,
                                "frequency": 0.05,
                                "opacity": 1
                            },
                            "particles": {
                                "enable": false,
                                "frequency": 0.05,
                                "opacity": 1
                            }
                        },
                        "wobble": {
                            "distance": 5,
                            "enable": false,
                            "speed": {
                                "angle": 50,
                                "move": 10
                            }
                        },
                        "orbit": {
                            "animation": {
                                "count": 0,
                                "enable": false,
                                "speed": 1,
                                "decay": 0,
                                "delay": 0,
                                "sync": false
                            },
                            "enable": false,
                            "opacity": 1,
                            "rotation": {
                                "random": {
                                    "enable": false,
                                    "minimumValue": 0
                                },
                                "value": 45
                            },
                            "width": 1
                        },
                        "links": {
                            "blink": false,
                            "color": {
                                "value": "#ffffff"
                            },
                            "consent": false,
                            "distance": 100,
                            "enable": false,
                            "frequency": 1,
                            "opacity": 0.4,
                            "shadow": {
                                "blur": 5,
                                "color": {
                                    "value": "#000"
                                },
                                "enable": false
                            },
                            "triangles": {
                                "enable": false,
                                "frequency": 1
                            },
                            "width": 1,
                            "warp": false
                        },
                        "repulse": {
                            "random": {
                                "enable": false,
                                "minimumValue": 0
                            },
                            "value": 0,
                            "enabled": false,
                            "distance": 1,
                            "duration": 1,
                            "factor": 1,
                            "speed": 1
                        }
                    },
                    "pauseOnBlur": true,
                    "pauseOnOutsideViewport": true,
                    "responsive": [],
                    "smooth": false,
                    "style": {},
                    "themes": [],
                    "zLayers": 100,
                    "emitters": {
                        "autoPlay": true,
                        "fill": true,
                        "life": {
                            "wait": false
                        },
                        "rate": {
                            "quantity": 1,
                            "delay": 7
                        },
                        "shape": "square",
                        "startCount": 0,
                        "size": {
                            "mode": "percent",
                            "height": 0,
                            "width": 0
                        },
                        "particles": {
                            "shape": {
                                "type": "images",
                                "options": {
                                    "images": {
                                        "src": "https://particles.js.org/images/cyan_amongus.png",
                                        "width": 1000,
                                        "height": 1000
                                    }
                                }
                            },
                            "size": {
                                "value": 40
                            },
                            "move": {
                                "speed": 10,
                                "outModes": {
                                    "default": "none",
                                    "right": "destroy"
                                },
                                "straight": true
                            },
                            "zIndex": {
                                "value": 0
                            },
                            "rotate": {
                                "value": {
                                    "min": 0,
                                    "max": 360
                                },
                                "animation": {
                                    "enable": true,
                                    "speed": 10,
                                    "sync": true
                                }
                            }
                        },
                        "position": {
                            "x": -5,
                            "y": 55
                        }
                    }
                }
            }
            init={particlesInit} loaded={particlesLoaded} />
    )
}

export const ParticleAnimation4 = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <Particles id="tsparticles"
            options={
                {
                    "autoPlay": true,
                    "background": {
                        "color": {
                            "value": ""
                        },
                        "image": "",
                        "position": "",
                        "repeat": "",
                        "size": "",
                        "opacity": 1
                    },
                    "backgroundMask": {
                        "composite": "destination-out",
                        "cover": {
                            "color": {
                                "value": "#7cff01"
                            },
                            "opacity": 1
                        },
                        "enable": false
                    },
                    "defaultThemes": {},
                    "delay": 0,
                    "fullScreen": {
                        "enable": true,
                        "zIndex": -1
                    },
                    "detectRetina": true,
                    "duration": 0,
                    "fpsLimit": 120,
                    "interactivity": {
                        "detectsOn": "window",
                        "events": {
                            "onClick": {
                                "enable": false,
                                "mode": []
                            },
                            "onDiv": {
                                "selectors": [],
                                "enable": false,
                                "mode": [],
                                "type": "circle"
                            },
                            "resize": {
                                "delay": 0.5,
                                "enable": true
                            }
                        },
                        "modes": {
                            "attract": {
                                "distance": 200,
                                "duration": 0.4,
                                "easing": "ease-out-quad",
                                "factor": 1,
                                "maxSpeed": 50,
                                "speed": 1
                            },
                            "bounce": {
                                "distance": 200
                            },
                            "bubble": {
                                "distance": 200,
                                "duration": 0.4,
                                "mix": false,
                                "divs": {
                                    "distance": 200,
                                    "duration": 0.4,
                                    "mix": false,
                                    "selectors": []
                                }
                            },
                            "connect": {
                                "distance": 80,
                                "links": {
                                    "opacity": 0.5
                                },
                                "radius": 60
                            },
                            "grab": {
                                "distance": 100,
                                "links": {
                                    "blink": false,
                                    "consent": false,
                                    "opacity": 1
                                }
                            },
                            "push": {
                                "default": true,
                                "groups": [],
                                "quantity": 4
                            },
                            "remove": {
                                "quantity": 2
                            },
                            "repulse": {
                                "distance": 200,
                                "duration": 0.4,
                                "factor": 100,
                                "speed": 1,
                                "maxSpeed": 50,
                                "easing": "ease-out-quad",
                                "divs": {
                                    "distance": 200,
                                    "duration": 0.4,
                                    "factor": 100,
                                    "speed": 1,
                                    "maxSpeed": 50,
                                    "easing": "ease-out-quad",
                                    "selectors": []
                                }
                            },
                            "slow": {
                                "factor": 3,
                                "radius": 200
                            },
                            "trail": {
                                "delay": 1,
                                "pauseOnStop": false,
                                "quantity": 1
                            },
                            "light": {
                                "area": {
                                    "gradient": {
                                        "start": {
                                            "value": "#7cff01"
                                        },
                                        "stop": {
                                            "value": "#7cff01"
                                        }
                                    },
                                    "radius": 1000
                                },
                                "shadow": {
                                    "color": {
                                        "value": "#7cff01"
                                    },
                                    "length": 2000
                                }
                            }
                        }
                    },
                    "manualParticles": [],
                    "particles": {
                        "bounce": {
                            "horizontal": {
                                "random": {
                                    "enable": false,
                                    "minimumValue": 0.1
                                },
                                "value": 1
                            },
                            "vertical": {
                                "random": {
                                    "enable": false,
                                    "minimumValue": 0.1
                                },
                                "value": 1
                            }
                        },
                        "collisions": {
                            "absorb": {
                                "speed": 2
                            },
                            "bounce": {
                                "horizontal": {
                                    "random": {
                                        "enable": false,
                                        "minimumValue": 0.1
                                    },
                                    "value": 1
                                },
                                "vertical": {
                                    "random": {
                                        "enable": false,
                                        "minimumValue": 0.1
                                    },
                                    "value": 1
                                }
                            },
                            "enable": false,
                            "maxSpeed": 50,
                            "mode": "bounce",
                            "overlap": {
                                "enable": true,
                                "retries": 0
                            }
                        },
                        "color": {
                            "value": "#fff",
                            "animation": {
                                "h": {
                                    "count": 10,
                                    "enable": false,
                                    "offset": 10,
                                    "speed": 20,
                                    "delay": 0,
                                    "decay": 0,
                                    "sync": true
                                },
                                "s": {
                                    "count": 0,
                                    "enable": false,
                                    "offset": 0,
                                    "speed": 1,
                                    "delay": 0,
                                    "decay": 0,
                                    "sync": true
                                },
                                "l": {
                                    "count": 0,
                                    "enable": false,
                                    "offset": 0,
                                    "speed": 1,
                                    "delay": 0,
                                    "decay": 0,
                                    "sync": true
                                }
                            }
                        },
                        "groups": {
                            "z5000": {
                                "number": {
                                    "value": 70
                                },
                                "zIndex": {
                                    "value": 50
                                }
                            },
                            "z7500": {
                                "number": {
                                    "value": 30
                                },
                                "zIndex": {
                                    "value": 75
                                }
                            },
                            "z2500": {
                                "number": {
                                    "value": 50
                                },
                                "zIndex": {
                                    "value": 25
                                }
                            },
                            "z1000": {
                                "number": {
                                    "value": 40
                                },
                                "zIndex": {
                                    "value": 10
                                }
                            }
                        },
                        "move": {
                            "angle": {
                                "offset": 0,
                                "value": 10
                            },
                            "attract": {
                                "distance": 200,
                                "enable": false,
                                "rotate": {
                                    "x": 600,
                                    "y": 1200
                                }
                            },
                            "center": {
                                "x": 50,
                                "y": 50,
                                "mode": "percent",
                                "radius": 0
                            },
                            "decay": 0,
                            "distance": {},
                            "direction": "right",
                            "drift": 0,
                            "enable": true,
                            "gravity": {
                                "acceleration": 9.81,
                                "enable": false,
                                "inverse": false,
                                "maxSpeed": 50
                            },
                            "path": {
                                "clamp": true,
                                "delay": {
                                    "random": {
                                        "enable": false,
                                        "minimumValue": 0
                                    },
                                    "value": 0
                                },
                                "enable": false,
                                "options": {}
                            },
                            "random": true,
                            "size": true,
                            "speed": 5,
                            "spin": {
                                "acceleration": 0,
                                "enable": false
                            },
                            "straight": false,
                            "trail": {
                                "enable": false,
                                "length": 10,
                                "fill": {}
                            },
                            "vibrate": false,
                            "warp": false
                        },
                        "number": {
                            "density": {
                                "enable": false,
                                "width": 1920,
                                "height": 1080
                            },
                            "limit": 0,
                            "value": 200
                        },
                        "opacity": {
                            "random": {
                                "enable": false,
                                "minimumValue": 0.1
                            },
                            "value": 1,
                            "animation": {
                                "count": 0,
                                "enable": false,
                                "speed": 3,
                                "decay": 0,
                                "delay": 0,
                                "sync": false,
                                "mode": "auto",
                                "startValue": "random",
                                "destroy": "none",
                                "minimumValue": 0.1
                            }
                        },
                        "reduceDuplicates": false,
                        "shadow": {
                            "blur": 10,
                            "color": {
                                "value": "#000"
                            },
                            "enable": false,
                            "offset": {
                                "x": 0,
                                "y": 0
                            }
                        },
                        "shape": {
                            "close": true,
                            "fill": true,
                            "options": {},
                            "type": "circle"
                        },
                        "size": {
                            "random": {
                                "enable": false,
                                "minimumValue": 1
                            },
                            "value": 8,
                            "animation": {
                                "count": 0,
                                "enable": false,
                                "speed": 5,
                                "decay": 0,
                                "delay": 0,
                                "sync": false,
                                "mode": "auto",
                                "startValue": "random",
                                "destroy": "none"
                            }
                        },
                        "stroke": {
                            "width": 0
                        },
                        "zIndex": {
                            "random": {
                                "enable": false,
                                "minimumValue": 0
                            },
                            "value": 5,
                            "opacityRate": 0.5,
                            "sizeRate": 1,
                            "velocityRate": 1
                        },
                        "life": {
                            "count": 0,
                            "delay": {
                                "random": {
                                    "enable": false,
                                    "minimumValue": 0
                                },
                                "value": 0,
                                "sync": false
                            },
                            "duration": {
                                "random": {
                                    "enable": false,
                                    "minimumValue": 0.0001
                                },
                                "value": 0,
                                "sync": false
                            }
                        },
                        "rotate": {
                            "random": {
                                "enable": false,
                                "minimumValue": 0
                            },
                            "value": 0,
                            "animation": {
                                "enable": false,
                                "speed": 0,
                                "decay": 0,
                                "sync": false
                            },
                            "direction": "clockwise",
                            "path": false
                        },
                        "destroy": {
                            "bounds": {},
                            "mode": "none",
                            "split": {
                                "count": 1,
                                "factor": {
                                    "random": {
                                        "enable": false,
                                        "minimumValue": 0
                                    },
                                    "value": 3
                                },
                                "rate": {
                                    "random": {
                                        "enable": false,
                                        "minimumValue": 0
                                    },
                                    "value": {
                                        "min": 4,
                                        "max": 9
                                    }
                                },
                                "sizeOffset": true,
                                "particles": {}
                            }
                        },
                        "roll": {
                            "darken": {
                                "enable": false,
                                "value": 0
                            },
                            "enable": false,
                            "enlighten": {
                                "enable": false,
                                "value": 0
                            },
                            "mode": "vertical",
                            "speed": 25
                        },
                        "tilt": {
                            "random": {
                                "enable": false,
                                "minimumValue": 0
                            },
                            "value": 0,
                            "animation": {
                                "enable": false,
                                "speed": 0,
                                "decay": 0,
                                "sync": false
                            },
                            "direction": "clockwise",
                            "enable": false
                        },
                        "twinkle": {
                            "lines": {
                                "enable": false,
                                "frequency": 0.05,
                                "opacity": 1
                            },
                            "particles": {
                                "enable": false,
                                "frequency": 0.05,
                                "opacity": 1
                            }
                        },
                        "wobble": {
                            "distance": 5,
                            "enable": false,
                            "speed": {
                                "angle": 50,
                                "move": 10
                            }
                        },
                        "orbit": {
                            "animation": {
                                "count": 0,
                                "enable": false,
                                "speed": 1,
                                "decay": 0,
                                "delay": 0,
                                "sync": false
                            },
                            "enable": false,
                            "opacity": 1,
                            "rotation": {
                                "random": {
                                    "enable": false,
                                    "minimumValue": 0
                                },
                                "value": 45
                            },
                            "width": 1
                        },
                        "links": {
                            "blink": false,
                            "color": {
                                "value": "#ffffff"
                            },
                            "consent": false,
                            "distance": 100,
                            "enable": false,
                            "frequency": 1,
                            "opacity": 0.4,
                            "shadow": {
                                "blur": 20,
                                "color": {
                                    "value": "#000"
                                },
                                "enable": false
                            },
                            "triangles": {
                                "enable": false,
                                "frequency": 1
                            },
                            "width": 1,
                            "warp": false
                        },
                        "repulse": {
                            "random": {
                                "enable": false,
                                "minimumValue": 0
                            },
                            "value": 0,
                            "enabled": false,
                            "distance": 1,
                            "duration": 1,
                            "factor": 1,
                            "speed": 1
                        }
                    },
                    "pauseOnBlur": true,
                    "pauseOnOutsideViewport": true,
                    "responsive": [],
                    "smooth": false,
                    "style": {},
                    "themes": [],
                    "zLayers": 100,
                    "emitters": {
                        "autoPlay": true,
                        "fill": true,
                        "life": {
                            "wait": false
                        },
                        "rate": {
                            "quantity": 1,
                            "delay": 7
                        },
                        "shape": "square",
                        "startCount": 0,
                        "size": {
                            "mode": "percent",
                            "height": 0,
                            "width": 0
                        },
                        "particles": {
                            "shape": {
                                "type": "images",
                                "options": {
                                    "images": {
                                        "width": 1000,
                                        "height": 1000
                                    }
                                }
                            },
                            "size": {
                                "value": 40
                            },
                            "move": {
                                "speed": 10,
                                "outModes": {
                                    "default": "none",
                                    "right": "destroy"
                                },
                                "straight": true
                            },
                            "zIndex": {
                                "value": 0
                            },
                            "rotate": {
                                "value": {
                                    "min": 0,
                                    "max": 360
                                },
                                "animation": {
                                    "enable": true,
                                    "speed": 10,
                                    "sync": true
                                }
                            }
                        },
                        "position": {
                            "x": -5,
                            "y": 55
                        }
                    }
                }
            }

            init={particlesInit} loaded={particlesLoaded} />
    )
}
export const ParticleAnimation5 = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <Particles id="tsparticles"
            options={
                {
                    detectRetina: true,
                    fpsLimit: 100,
                    interactivity: {
                        detectsOn: "canvas",
                        events: {
                            onClick: {
                                enable: true,
                                mode: "repulse"
                            },
                            onDiv: {
                                elementId: "repulse-div",
                                enable: false,
                                mode: "repulse"
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                                parallax: {
                                    enable: true,
                                    force: 60,
                                    smooth: 10
                                }
                            },
                            resize: true
                        },

                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 100,
                                speed: 3
                            },
                            connect: {
                                distance: 80,
                                lineLinked: {
                                    opacity: 0.5
                                },
                                radius: 60
                            },
                            grab: {
                                distance: 400,
                                lineLinked: {
                                    opacity: 1
                                }
                            },
                            push: {
                                quantity: 4
                            },
                            remove: {
                                quantity: 2
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: "#ffffff"
                        },
                        lineLinked: {
                            blink: false,
                            color: "#000",
                            consent: false,
                            distance: 150,
                            enable: false,
                            opacity: 0,
                            width: 0
                        },
                        rotate: {
                            value: 0,
                            random: false,
                            direction: "clockwise",
                            animation: {
                                enable: false,
                                speed: 5,
                                sync: false
                            }
                        },
                        move: {
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200
                            },
                            bounce: false,
                            direction: "bottom",
                            enable: true,
                            outMode: "out",
                            random: true,
                            speed: 30,
                            straight: true
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            limit: 0,
                            value: 300
                        },
                        opacity: {
                            animation: {
                                enable: false,
                                minimumValue: 0.1,
                                speed: 1,
                                sync: false
                            },
                            random: false,
                            value: 0.5
                        },
                        shape: {
                            character: {
                                fill: false,
                                font: "Verdana",
                                style: "",
                                value: "*",
                                weight: "400"
                            },
                            image: [],
                            polygon: {
                                nb_sides: 5
                            },
                            stroke: {
                                color: "#efefefee",
                                width: 1
                            },
                            type: "line"
                        },
                        size: {
                            animation: {
                                enable: false,
                                minimumValue: 0.1,
                                speed: 100,
                                sync: false
                            },
                            random: false,
                            value: 5
                        }
                    },
                    polygon: {
                        draw: {
                            enable: false,
                            lineColor: "#ffffff",
                            lineWidth: 0.5
                        },
                        move: {
                            radius: 10
                        },
                        scale: 1,
                        type: "none",
                        url: ""
                    }
                }
            }
            init={particlesInit} loaded={particlesLoaded} />
    )
}




export default ParticleConfig