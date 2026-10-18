import plugin from "tailwindcss/plugin";

const variants: [string, string[]][] = [
  [
    "design-00000",
    [
      "&:where(:has(#body-inner)) .fa"
    ]
  ],
  [
    "design-00001",
    [
      "&:where(:has(#body-inner)) .fa"
    ]
  ],
  [
    "design-00002",
    [
      "&:where(:has(#body-inner)) .fa",
      "&:where(:has(#body-inner)) .fa-brands",
      "&:where(:has(#body-inner)) .fa-classic",
      "&:where(:has(#body-inner)) .fa-regular",
      "&:where(:has(#body-inner)) .fa-sharp",
      "&:where(:has(#body-inner)) .fa-solid",
      "&:where(:has(#body-inner)) .fab",
      "&:where(:has(#body-inner)) .far",
      "&:where(:has(#body-inner)) .fas"
    ]
  ],
  [
    "design-00003",
    [
      "&:where(:has(#body-inner)) .fa",
      "&:where(:has(#body-inner)) .fa-brands",
      "&:where(:has(#body-inner)) .fa-classic",
      "&:where(:has(#body-inner)) .fa-regular",
      "&:where(:has(#body-inner)) .fa-sharp",
      "&:where(:has(#body-inner)) .fa-solid",
      "&:where(:has(#body-inner)) .fab",
      "&:where(:has(#body-inner)) .far",
      "&:where(:has(#body-inner)) .fas"
    ]
  ],
  [
    "design-00004",
    [
      "&:where(:has(#body-inner)) .fa",
      "&:where(:has(#body-inner)) .fa-brands",
      "&:where(:has(#body-inner)) .fa-classic",
      "&:where(:has(#body-inner)) .fa-regular",
      "&:where(:has(#body-inner)) .fa-sharp",
      "&:where(:has(#body-inner)) .fa-solid",
      "&:where(:has(#body-inner)) .fab",
      "&:where(:has(#body-inner)) .far",
      "&:where(:has(#body-inner)) .fas"
    ]
  ],
  [
    "design-00005",
    [
      "&:where(:has(#body-inner)) .fa",
      "&:where(:has(#body-inner)) .fa-brands",
      "&:where(:has(#body-inner)) .fa-classic",
      "&:where(:has(#body-inner)) .fa-regular",
      "&:where(:has(#body-inner)) .fa-sharp",
      "&:where(:has(#body-inner)) .fa-solid",
      "&:where(:has(#body-inner)) .fab",
      "&:where(:has(#body-inner)) .far",
      "&:where(:has(#body-inner)) .fas"
    ]
  ],
  [
    "design-00006",
    [
      "&:where(:has(#body-inner)) .fa",
      "&:where(:has(#body-inner)) .fa-brands",
      "&:where(:has(#body-inner)) .fa-classic",
      "&:where(:has(#body-inner)) .fa-regular",
      "&:where(:has(#body-inner)) .fa-sharp",
      "&:where(:has(#body-inner)) .fa-solid",
      "&:where(:has(#body-inner)) .fab",
      "&:where(:has(#body-inner)) .far",
      "&:where(:has(#body-inner)) .fas"
    ]
  ],
  [
    "design-00007",
    [
      "&:where(:has(#body-inner)) .fa",
      "&:where(:has(#body-inner)) .fa-brands",
      "&:where(:has(#body-inner)) .fa-classic",
      "&:where(:has(#body-inner)) .fa-regular",
      "&:where(:has(#body-inner)) .fa-sharp",
      "&:where(:has(#body-inner)) .fa-solid",
      "&:where(:has(#body-inner)) .fab",
      "&:where(:has(#body-inner)) .far",
      "&:where(:has(#body-inner)) .fas"
    ]
  ],
  [
    "design-00008",
    [
      "&:where(:has(#body-inner)) .fa",
      "&:where(:has(#body-inner)) .fa-brands",
      "&:where(:has(#body-inner)) .fa-classic",
      "&:where(:has(#body-inner)) .fa-regular",
      "&:where(:has(#body-inner)) .fa-sharp",
      "&:where(:has(#body-inner)) .fa-solid",
      "&:where(:has(#body-inner)) .fab",
      "&:where(:has(#body-inner)) .far",
      "&:where(:has(#body-inner)) .fas"
    ]
  ],
  [
    "design-00009",
    [
      "&:where(:has(#body-inner)) .fa-classic",
      "&:where(:has(#body-inner)) .fa-regular",
      "&:where(:has(#body-inner)) .fa-solid",
      "&:where(:has(#body-inner)) .far",
      "&:where(:has(#body-inner)) .fas"
    ]
  ],
  [
    "design-00010",
    [
      "&:where(:has(#body-inner)) .fa-brands",
      "&:where(:has(#body-inner)) .fab"
    ]
  ],
  [
    "design-00011",
    [
      "&:where(:has(#body-inner)) .fa-1x"
    ]
  ],
  [
    "design-00012",
    [
      "&:where(:has(#body-inner)) .fa-2x"
    ]
  ],
  [
    "design-00013",
    [
      "&:where(:has(#body-inner)) .fa-3x"
    ]
  ],
  [
    "design-00014",
    [
      "&:where(:has(#body-inner)) .fa-4x"
    ]
  ],
  [
    "design-00015",
    [
      "&:where(:has(#body-inner)) .fa-5x"
    ]
  ],
  [
    "design-00016",
    [
      "&:where(:has(#body-inner)) .fa-6x"
    ]
  ],
  [
    "design-00017",
    [
      "&:where(:has(#body-inner)) .fa-7x"
    ]
  ],
  [
    "design-00018",
    [
      "&:where(:has(#body-inner)) .fa-8x"
    ]
  ],
  [
    "design-00019",
    [
      "&:where(:has(#body-inner)) .fa-9x"
    ]
  ],
  [
    "design-00020",
    [
      "&:where(:has(#body-inner)) .fa-10x"
    ]
  ],
  [
    "design-00021",
    [
      "&:where(:has(#body-inner)) .fa-2xs"
    ]
  ],
  [
    "design-00022",
    [
      "&:where(:has(#body-inner)) .fa-2xs"
    ]
  ],
  [
    "design-00023",
    [
      "&:where(:has(#body-inner)) .fa-2xs"
    ]
  ],
  [
    "design-00024",
    [
      "&:where(:has(#body-inner)) .fa-xs"
    ]
  ],
  [
    "design-00025",
    [
      "&:where(:has(#body-inner)) .fa-xs"
    ]
  ],
  [
    "design-00026",
    [
      "&:where(:has(#body-inner)) .fa-xs"
    ]
  ],
  [
    "design-00027",
    [
      "&:where(:has(#body-inner)) .fa-sm"
    ]
  ],
  [
    "design-00028",
    [
      "&:where(:has(#body-inner)) .fa-sm"
    ]
  ],
  [
    "design-00029",
    [
      "&:where(:has(#body-inner)) .fa-sm"
    ]
  ],
  [
    "design-00030",
    [
      "&:where(:has(#body-inner)) .fa-lg"
    ]
  ],
  [
    "design-00031",
    [
      "&:where(:has(#body-inner)) .fa-lg"
    ]
  ],
  [
    "design-00032",
    [
      "&:where(:has(#body-inner)) .fa-lg"
    ]
  ],
  [
    "design-00033",
    [
      "&:where(:has(#body-inner)) .fa-xl"
    ]
  ],
  [
    "design-00034",
    [
      "&:where(:has(#body-inner)) .fa-xl"
    ]
  ],
  [
    "design-00035",
    [
      "&:where(:has(#body-inner)) .fa-xl"
    ]
  ],
  [
    "design-00036",
    [
      "&:where(:has(#body-inner)) .fa-2xl"
    ]
  ],
  [
    "design-00037",
    [
      "&:where(:has(#body-inner)) .fa-2xl"
    ]
  ],
  [
    "design-00038",
    [
      "&:where(:has(#body-inner)) .fa-2xl"
    ]
  ],
  [
    "design-00039",
    [
      "&:where(:has(#body-inner)) .fa-fw"
    ]
  ],
  [
    "design-00040",
    [
      "&:where(:has(#body-inner)) .fa-fw"
    ]
  ],
  [
    "design-00041",
    [
      "&:where(:has(#body-inner)) .fa-ul"
    ]
  ],
  [
    "design-00042",
    [
      "&:where(:has(#body-inner)) .fa-ul"
    ]
  ],
  [
    "design-00043",
    [
      "&:where(:has(#body-inner)) .fa-ul"
    ]
  ],
  [
    "design-00044",
    [
      "&:where(:has(#body-inner)) .fa-ul > li"
    ]
  ],
  [
    "design-00045",
    [
      "&:where(:has(#body-inner)) .fa-li"
    ]
  ],
  [
    "design-00046",
    [
      "&:where(:has(#body-inner)) .fa-li"
    ]
  ],
  [
    "design-00047",
    [
      "&:where(:has(#body-inner)) .fa-li"
    ]
  ],
  [
    "design-00048",
    [
      "&:where(:has(#body-inner)) .fa-li"
    ]
  ],
  [
    "design-00049",
    [
      "&:where(:has(#body-inner)) .fa-li"
    ]
  ],
  [
    "design-00050",
    [
      "&:where(:has(#body-inner)) .fa-border"
    ]
  ],
  [
    "design-00051",
    [
      "&:where(:has(#body-inner)) .fa-border"
    ]
  ],
  [
    "design-00052",
    [
      "&:where(:has(#body-inner)) .fa-border"
    ]
  ],
  [
    "design-00053",
    [
      "&:where(:has(#body-inner)) .fa-pull-left"
    ]
  ],
  [
    "design-00054",
    [
      "&:where(:has(#body-inner)) .fa-pull-left"
    ]
  ],
  [
    "design-00055",
    [
      "&:where(:has(#body-inner)) .fa-pull-right"
    ]
  ],
  [
    "design-00056",
    [
      "&:where(:has(#body-inner)) .fa-pull-right"
    ]
  ],
  [
    "design-00057",
    [
      "&:where(:has(#body-inner)) .fa-beat"
    ]
  ],
  [
    "design-00058",
    [
      "&:where(:has(#body-inner)) .fa-beat"
    ]
  ],
  [
    "design-00059",
    [
      "&:where(:has(#body-inner)) .fa-beat"
    ]
  ],
  [
    "design-00060",
    [
      "&:where(:has(#body-inner)) .fa-beat"
    ]
  ],
  [
    "design-00061",
    [
      "&:where(:has(#body-inner)) .fa-beat"
    ]
  ],
  [
    "design-00062",
    [
      "&:where(:has(#body-inner)) .fa-beat"
    ]
  ],
  [
    "design-00063",
    [
      "&:where(:has(#body-inner)) .fa-beat"
    ]
  ],
  [
    "design-00064",
    [
      "&:where(:has(#body-inner)) .fa-beat"
    ]
  ],
  [
    "design-00065",
    [
      "&:where(:has(#body-inner)) .fa-beat"
    ]
  ],
  [
    "design-00066",
    [
      "&:where(:has(#body-inner)) .fa-beat"
    ]
  ],
  [
    "design-00067",
    [
      "&:where(:has(#body-inner)) .fa-beat"
    ]
  ],
  [
    "design-00068",
    [
      "&:where(:has(#body-inner)) .fa-beat"
    ]
  ],
  [
    "design-00069",
    [
      "&:where(:has(#body-inner)) .fa-bounce"
    ]
  ],
  [
    "design-00070",
    [
      "&:where(:has(#body-inner)) .fa-bounce"
    ]
  ],
  [
    "design-00071",
    [
      "&:where(:has(#body-inner)) .fa-bounce"
    ]
  ],
  [
    "design-00072",
    [
      "&:where(:has(#body-inner)) .fa-bounce"
    ]
  ],
  [
    "design-00073",
    [
      "&:where(:has(#body-inner)) .fa-bounce"
    ]
  ],
  [
    "design-00074",
    [
      "&:where(:has(#body-inner)) .fa-bounce"
    ]
  ],
  [
    "design-00075",
    [
      "&:where(:has(#body-inner)) .fa-bounce"
    ]
  ],
  [
    "design-00076",
    [
      "&:where(:has(#body-inner)) .fa-bounce"
    ]
  ],
  [
    "design-00077",
    [
      "&:where(:has(#body-inner)) .fa-bounce"
    ]
  ],
  [
    "design-00078",
    [
      "&:where(:has(#body-inner)) .fa-bounce"
    ]
  ],
  [
    "design-00079",
    [
      "&:where(:has(#body-inner)) .fa-bounce"
    ]
  ],
  [
    "design-00080",
    [
      "&:where(:has(#body-inner)) .fa-bounce"
    ]
  ],
  [
    "design-00081",
    [
      "&:where(:has(#body-inner)) .fa-fade"
    ]
  ],
  [
    "design-00082",
    [
      "&:where(:has(#body-inner)) .fa-fade"
    ]
  ],
  [
    "design-00083",
    [
      "&:where(:has(#body-inner)) .fa-fade"
    ]
  ],
  [
    "design-00084",
    [
      "&:where(:has(#body-inner)) .fa-fade"
    ]
  ],
  [
    "design-00085",
    [
      "&:where(:has(#body-inner)) .fa-fade"
    ]
  ],
  [
    "design-00086",
    [
      "&:where(:has(#body-inner)) .fa-fade"
    ]
  ],
  [
    "design-00087",
    [
      "&:where(:has(#body-inner)) .fa-beat-fade",
      "&:where(:has(#body-inner)) .fa-fade"
    ]
  ],
  [
    "design-00088",
    [
      "&:where(:has(#body-inner)) .fa-beat-fade",
      "&:where(:has(#body-inner)) .fa-fade"
    ]
  ],
  [
    "design-00089",
    [
      "&:where(:has(#body-inner)) .fa-beat-fade",
      "&:where(:has(#body-inner)) .fa-fade"
    ]
  ],
  [
    "design-00090",
    [
      "&:where(:has(#body-inner)) .fa-beat-fade",
      "&:where(:has(#body-inner)) .fa-fade"
    ]
  ],
  [
    "design-00091",
    [
      "&:where(:has(#body-inner)) .fa-beat-fade",
      "&:where(:has(#body-inner)) .fa-fade"
    ]
  ],
  [
    "design-00092",
    [
      "&:where(:has(#body-inner)) .fa-beat-fade",
      "&:where(:has(#body-inner)) .fa-fade"
    ]
  ],
  [
    "design-00093",
    [
      "&:where(:has(#body-inner)) .fa-beat-fade"
    ]
  ],
  [
    "design-00094",
    [
      "&:where(:has(#body-inner)) .fa-beat-fade"
    ]
  ],
  [
    "design-00095",
    [
      "&:where(:has(#body-inner)) .fa-beat-fade"
    ]
  ],
  [
    "design-00096",
    [
      "&:where(:has(#body-inner)) .fa-beat-fade"
    ]
  ],
  [
    "design-00097",
    [
      "&:where(:has(#body-inner)) .fa-beat-fade"
    ]
  ],
  [
    "design-00098",
    [
      "&:where(:has(#body-inner)) .fa-beat-fade"
    ]
  ],
  [
    "design-00099",
    [
      "&:where(:has(#body-inner)) .fa-flip"
    ]
  ],
  [
    "design-00100",
    [
      "&:where(:has(#body-inner)) .fa-flip"
    ]
  ],
  [
    "design-00101",
    [
      "&:where(:has(#body-inner)) .fa-flip"
    ]
  ],
  [
    "design-00102",
    [
      "&:where(:has(#body-inner)) .fa-flip"
    ]
  ],
  [
    "design-00103",
    [
      "&:where(:has(#body-inner)) .fa-flip"
    ]
  ],
  [
    "design-00104",
    [
      "&:where(:has(#body-inner)) .fa-flip"
    ]
  ],
  [
    "design-00105",
    [
      "&:where(:has(#body-inner)) .fa-flip"
    ]
  ],
  [
    "design-00106",
    [
      "&:where(:has(#body-inner)) .fa-flip"
    ]
  ],
  [
    "design-00107",
    [
      "&:where(:has(#body-inner)) .fa-flip"
    ]
  ],
  [
    "design-00108",
    [
      "&:where(:has(#body-inner)) .fa-flip"
    ]
  ],
  [
    "design-00109",
    [
      "&:where(:has(#body-inner)) .fa-flip"
    ]
  ],
  [
    "design-00110",
    [
      "&:where(:has(#body-inner)) .fa-flip"
    ]
  ],
  [
    "design-00111",
    [
      "&:where(:has(#body-inner)) .fa-shake"
    ]
  ],
  [
    "design-00112",
    [
      "&:where(:has(#body-inner)) .fa-shake"
    ]
  ],
  [
    "design-00113",
    [
      "&:where(:has(#body-inner)) .fa-shake"
    ]
  ],
  [
    "design-00114",
    [
      "&:where(:has(#body-inner)) .fa-shake"
    ]
  ],
  [
    "design-00115",
    [
      "&:where(:has(#body-inner)) .fa-shake"
    ]
  ],
  [
    "design-00116",
    [
      "&:where(:has(#body-inner)) .fa-shake"
    ]
  ],
  [
    "design-00117",
    [
      "&:where(:has(#body-inner)) .fa-shake"
    ]
  ],
  [
    "design-00118",
    [
      "&:where(:has(#body-inner)) .fa-shake"
    ]
  ],
  [
    "design-00119",
    [
      "&:where(:has(#body-inner)) .fa-shake",
      "&:where(:has(#body-inner)) .fa-spin"
    ]
  ],
  [
    "design-00120",
    [
      "&:where(:has(#body-inner)) .fa-shake",
      "&:where(:has(#body-inner)) .fa-spin"
    ]
  ],
  [
    "design-00121",
    [
      "&:where(:has(#body-inner)) .fa-shake",
      "&:where(:has(#body-inner)) .fa-spin"
    ]
  ],
  [
    "design-00122",
    [
      "&:where(:has(#body-inner)) .fa-shake",
      "&:where(:has(#body-inner)) .fa-spin"
    ]
  ],
  [
    "design-00123",
    [
      "&:where(:has(#body-inner)) .fa-spin"
    ]
  ],
  [
    "design-00124",
    [
      "&:where(:has(#body-inner)) .fa-spin"
    ]
  ],
  [
    "design-00125",
    [
      "&:where(:has(#body-inner)) .fa-spin"
    ]
  ],
  [
    "design-00126",
    [
      "&:where(:has(#body-inner)) .fa-spin"
    ]
  ],
  [
    "design-00127",
    [
      "&:where(:has(#body-inner)) .fa-spin"
    ]
  ],
  [
    "design-00128",
    [
      "&:where(:has(#body-inner)) .fa-spin"
    ]
  ],
  [
    "design-00129",
    [
      "&:where(:has(#body-inner)) .fa-spin"
    ]
  ],
  [
    "design-00130",
    [
      "&:where(:has(#body-inner)) .fa-spin"
    ]
  ],
  [
    "design-00131",
    [
      "&:where(:has(#body-inner)) .fa-spin-reverse"
    ]
  ],
  [
    "design-00132",
    [
      "&:where(:has(#body-inner)) .fa-pulse",
      "&:where(:has(#body-inner)) .fa-spin-pulse"
    ]
  ],
  [
    "design-00133",
    [
      "&:where(:has(#body-inner)) .fa-pulse",
      "&:where(:has(#body-inner)) .fa-spin-pulse"
    ]
  ],
  [
    "design-00134",
    [
      "&:where(:has(#body-inner)) .fa-pulse",
      "&:where(:has(#body-inner)) .fa-spin-pulse"
    ]
  ],
  [
    "design-00135",
    [
      "&:where(:has(#body-inner)) .fa-pulse",
      "&:where(:has(#body-inner)) .fa-spin-pulse"
    ]
  ],
  [
    "design-00136",
    [
      "&:where(:has(#body-inner)) .fa-pulse",
      "&:where(:has(#body-inner)) .fa-spin-pulse"
    ]
  ],
  [
    "design-00137",
    [
      "&:where(:has(#body-inner)) .fa-pulse",
      "&:where(:has(#body-inner)) .fa-spin-pulse"
    ]
  ],
  [
    "design-00138",
    [
      "&:where(:has(#body-inner)) .fa-pulse",
      "&:where(:has(#body-inner)) .fa-spin-pulse"
    ]
  ],
  [
    "design-00139",
    [
      "&:where(:has(#body-inner)) .fa-pulse",
      "&:where(:has(#body-inner)) .fa-spin-pulse"
    ]
  ],
  [
    "design-00140",
    [
      "&:where(:has(#body-inner)) .fa-pulse",
      "&:where(:has(#body-inner)) .fa-spin-pulse"
    ]
  ],
  [
    "design-00141",
    [
      "&:where(:has(#body-inner)) .fa-pulse",
      "&:where(:has(#body-inner)) .fa-spin-pulse"
    ]
  ],
  [
    "design-00142",
    [
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-beat }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-beat-fade }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-bounce }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-fade }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-flip }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-pulse }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-shake }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-spin }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-spin-pulse }"
    ]
  ],
  [
    "design-00143",
    [
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-beat }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-beat-fade }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-bounce }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-fade }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-flip }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-pulse }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-shake }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-spin }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-spin-pulse }"
    ]
  ],
  [
    "design-00144",
    [
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-beat }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-beat-fade }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-bounce }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-fade }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-flip }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-pulse }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-shake }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-spin }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-spin-pulse }"
    ]
  ],
  [
    "design-00145",
    [
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-beat }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-beat-fade }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-bounce }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-fade }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-flip }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-pulse }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-shake }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-spin }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-spin-pulse }"
    ]
  ],
  [
    "design-00146",
    [
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-beat }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-beat-fade }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-bounce }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-fade }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-flip }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-pulse }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-shake }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-spin }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-spin-pulse }"
    ]
  ],
  [
    "design-00147",
    [
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-beat }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-beat-fade }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-bounce }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-fade }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-flip }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-pulse }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-shake }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-spin }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-spin-pulse }"
    ]
  ],
  [
    "design-00148",
    [
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-beat }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-beat-fade }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-bounce }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-fade }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-flip }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-pulse }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-shake }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-spin }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-spin-pulse }"
    ]
  ],
  [
    "design-00149",
    [
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-beat }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-beat-fade }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-bounce }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-fade }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-flip }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-pulse }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-shake }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-spin }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-spin-pulse }"
    ]
  ],
  [
    "design-00150",
    [
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-beat }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-beat-fade }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-bounce }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-fade }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-flip }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-pulse }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-shake }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-spin }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-spin-pulse }"
    ]
  ],
  [
    "design-00151",
    [
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-beat }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-beat-fade }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-bounce }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-fade }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-flip }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-pulse }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-shake }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-spin }",
      "@media (prefers-reduced-motion: reduce) { &:where(:has(#body-inner)) .fa-spin-pulse }"
    ]
  ],
  [
    "design-00152",
    [
      "&:where(:has(#body-inner)) .fa-rotate-90"
    ]
  ],
  [
    "design-00153",
    [
      "&:where(:has(#body-inner)) .fa-rotate-90"
    ]
  ],
  [
    "design-00154",
    [
      "&:where(:has(#body-inner)) .fa-rotate-180"
    ]
  ],
  [
    "design-00155",
    [
      "&:where(:has(#body-inner)) .fa-rotate-180"
    ]
  ],
  [
    "design-00156",
    [
      "&:where(:has(#body-inner)) .fa-rotate-270"
    ]
  ],
  [
    "design-00157",
    [
      "&:where(:has(#body-inner)) .fa-rotate-270"
    ]
  ],
  [
    "design-00158",
    [
      "&:where(:has(#body-inner)) .fa-flip-horizontal"
    ]
  ],
  [
    "design-00159",
    [
      "&:where(:has(#body-inner)) .fa-flip-horizontal"
    ]
  ],
  [
    "design-00160",
    [
      "&:where(:has(#body-inner)) .fa-flip-vertical"
    ]
  ],
  [
    "design-00161",
    [
      "&:where(:has(#body-inner)) .fa-flip-vertical"
    ]
  ],
  [
    "design-00162",
    [
      "&:where(:has(#body-inner)) .fa-flip-both",
      "&:where(:has(#body-inner)) .fa-flip-horizontal.fa-flip-vertical"
    ]
  ],
  [
    "design-00163",
    [
      "&:where(:has(#body-inner)) .fa-flip-both",
      "&:where(:has(#body-inner)) .fa-flip-horizontal.fa-flip-vertical"
    ]
  ],
  [
    "design-00164",
    [
      "&:where(:has(#body-inner)) .fa-rotate-by"
    ]
  ],
  [
    "design-00165",
    [
      "&:where(:has(#body-inner)) .fa-rotate-by"
    ]
  ],
  [
    "design-00166",
    [
      "&:where(:has(#body-inner)) .fa-stack"
    ]
  ],
  [
    "design-00167",
    [
      "&:where(:has(#body-inner)) .fa-stack"
    ]
  ],
  [
    "design-00168",
    [
      "&:where(:has(#body-inner)) .fa-stack"
    ]
  ],
  [
    "design-00169",
    [
      "&:where(:has(#body-inner)) .fa-stack"
    ]
  ],
  [
    "design-00170",
    [
      "&:where(:has(#body-inner)) .fa-stack"
    ]
  ],
  [
    "design-00171",
    [
      "&:where(:has(#body-inner)) .fa-stack"
    ]
  ],
  [
    "design-00172",
    [
      "&:where(:has(#body-inner)) .fa-stack-1x",
      "&:where(:has(#body-inner)) .fa-stack-2x"
    ]
  ],
  [
    "design-00173",
    [
      "&:where(:has(#body-inner)) .fa-stack-1x",
      "&:where(:has(#body-inner)) .fa-stack-2x"
    ]
  ],
  [
    "design-00174",
    [
      "&:where(:has(#body-inner)) .fa-stack-1x",
      "&:where(:has(#body-inner)) .fa-stack-2x"
    ]
  ],
  [
    "design-00175",
    [
      "&:where(:has(#body-inner)) .fa-stack-1x",
      "&:where(:has(#body-inner)) .fa-stack-2x"
    ]
  ],
  [
    "design-00176",
    [
      "&:where(:has(#body-inner)) .fa-stack-1x",
      "&:where(:has(#body-inner)) .fa-stack-2x"
    ]
  ],
  [
    "design-00177",
    [
      "&:where(:has(#body-inner)) .fa-stack-1x"
    ]
  ],
  [
    "design-00178",
    [
      "&:where(:has(#body-inner)) .fa-stack-2x"
    ]
  ],
  [
    "design-00179",
    [
      "&:where(:has(#body-inner)) .fa-inverse"
    ]
  ],
  [
    "design-00180",
    [
      "&:where(:has(#body-inner)) .fa-0::before"
    ]
  ],
  [
    "design-00181",
    [
      "&:where(:has(#body-inner)) .fa-1::before"
    ]
  ],
  [
    "design-00182",
    [
      "&:where(:has(#body-inner)) .fa-2::before"
    ]
  ],
  [
    "design-00183",
    [
      "&:where(:has(#body-inner)) .fa-3::before"
    ]
  ],
  [
    "design-00184",
    [
      "&:where(:has(#body-inner)) .fa-4::before"
    ]
  ],
  [
    "design-00185",
    [
      "&:where(:has(#body-inner)) .fa-5::before"
    ]
  ],
  [
    "design-00186",
    [
      "&:where(:has(#body-inner)) .fa-6::before"
    ]
  ],
  [
    "design-00187",
    [
      "&:where(:has(#body-inner)) .fa-7::before"
    ]
  ],
  [
    "design-00188",
    [
      "&:where(:has(#body-inner)) .fa-8::before"
    ]
  ],
  [
    "design-00189",
    [
      "&:where(:has(#body-inner)) .fa-9::before"
    ]
  ],
  [
    "design-00190",
    [
      "&:where(:has(#body-inner)) .fa-fill-drip::before"
    ]
  ],
  [
    "design-00191",
    [
      "&:where(:has(#body-inner)) .fa-arrows-to-circle::before"
    ]
  ],
  [
    "design-00192",
    [
      "&:where(:has(#body-inner)) .fa-chevron-circle-right::before",
      "&:where(:has(#body-inner)) .fa-circle-chevron-right::before"
    ]
  ],
  [
    "design-00193",
    [
      "&:where(:has(#body-inner)) .fa-at::before"
    ]
  ],
  [
    "design-00194",
    [
      "&:where(:has(#body-inner)) .fa-trash-alt::before",
      "&:where(:has(#body-inner)) .fa-trash-can::before"
    ]
  ],
  [
    "design-00195",
    [
      "&:where(:has(#body-inner)) .fa-text-height::before"
    ]
  ],
  [
    "design-00196",
    [
      "&:where(:has(#body-inner)) .fa-user-times::before",
      "&:where(:has(#body-inner)) .fa-user-xmark::before"
    ]
  ],
  [
    "design-00197",
    [
      "&:where(:has(#body-inner)) .fa-stethoscope::before"
    ]
  ],
  [
    "design-00198",
    [
      "&:where(:has(#body-inner)) .fa-comment-alt::before",
      "&:where(:has(#body-inner)) .fa-message::before"
    ]
  ],
  [
    "design-00199",
    [
      "&:where(:has(#body-inner)) .fa-info::before"
    ]
  ],
  [
    "design-00200",
    [
      "&:where(:has(#body-inner)) .fa-compress-alt::before",
      "&:where(:has(#body-inner)) .fa-down-left-and-up-right-to-center::before"
    ]
  ],
  [
    "design-00201",
    [
      "&:where(:has(#body-inner)) .fa-explosion::before"
    ]
  ],
  [
    "design-00202",
    [
      "&:where(:has(#body-inner)) .fa-file-alt::before",
      "&:where(:has(#body-inner)) .fa-file-lines::before",
      "&:where(:has(#body-inner)) .fa-file-text::before"
    ]
  ],
  [
    "design-00203",
    [
      "&:where(:has(#body-inner)) .fa-wave-square::before"
    ]
  ],
  [
    "design-00204",
    [
      "&:where(:has(#body-inner)) .fa-ring::before"
    ]
  ],
  [
    "design-00205",
    [
      "&:where(:has(#body-inner)) .fa-building-un::before"
    ]
  ],
  [
    "design-00206",
    [
      "&:where(:has(#body-inner)) .fa-dice-three::before"
    ]
  ],
  [
    "design-00207",
    [
      "&:where(:has(#body-inner)) .fa-calendar-alt::before",
      "&:where(:has(#body-inner)) .fa-calendar-days::before"
    ]
  ],
  [
    "design-00208",
    [
      "&:where(:has(#body-inner)) .fa-anchor-circle-check::before"
    ]
  ],
  [
    "design-00209",
    [
      "&:where(:has(#body-inner)) .fa-building-circle-arrow-right::before"
    ]
  ],
  [
    "design-00210",
    [
      "&:where(:has(#body-inner)) .fa-volleyball-ball::before",
      "&:where(:has(#body-inner)) .fa-volleyball::before"
    ]
  ],
  [
    "design-00211",
    [
      "&:where(:has(#body-inner)) .fa-arrows-up-to-line::before"
    ]
  ],
  [
    "design-00212",
    [
      "&:where(:has(#body-inner)) .fa-sort-desc::before",
      "&:where(:has(#body-inner)) .fa-sort-down::before"
    ]
  ],
  [
    "design-00213",
    [
      "&:where(:has(#body-inner)) .fa-circle-minus::before",
      "&:where(:has(#body-inner)) .fa-minus-circle::before"
    ]
  ],
  [
    "design-00214",
    [
      "&:where(:has(#body-inner)) .fa-door-open::before"
    ]
  ],
  [
    "design-00215",
    [
      "&:where(:has(#body-inner)) .fa-right-from-bracket::before",
      "&:where(:has(#body-inner)) .fa-sign-out-alt::before"
    ]
  ],
  [
    "design-00216",
    [
      "&:where(:has(#body-inner)) .fa-atom::before"
    ]
  ],
  [
    "design-00217",
    [
      "&:where(:has(#body-inner)) .fa-soap::before"
    ]
  ],
  [
    "design-00218",
    [
      "&:where(:has(#body-inner)) .fa-heart-music-camera-bolt::before",
      "&:where(:has(#body-inner)) .fa-icons::before"
    ]
  ],
  [
    "design-00219",
    [
      "&:where(:has(#body-inner)) .fa-microphone-alt-slash::before",
      "&:where(:has(#body-inner)) .fa-microphone-lines-slash::before"
    ]
  ],
  [
    "design-00220",
    [
      "&:where(:has(#body-inner)) .fa-bridge-circle-check::before"
    ]
  ],
  [
    "design-00221",
    [
      "&:where(:has(#body-inner)) .fa-pump-medical::before"
    ]
  ],
  [
    "design-00222",
    [
      "&:where(:has(#body-inner)) .fa-fingerprint::before"
    ]
  ],
  [
    "design-00223",
    [
      "&:where(:has(#body-inner)) .fa-hand-point-right::before"
    ]
  ],
  [
    "design-00224",
    [
      "&:where(:has(#body-inner)) .fa-magnifying-glass-location::before",
      "&:where(:has(#body-inner)) .fa-search-location::before"
    ]
  ],
  [
    "design-00225",
    [
      "&:where(:has(#body-inner)) .fa-forward-step::before",
      "&:where(:has(#body-inner)) .fa-step-forward::before"
    ]
  ],
  [
    "design-00226",
    [
      "&:where(:has(#body-inner)) .fa-face-smile-beam::before",
      "&:where(:has(#body-inner)) .fa-smile-beam::before"
    ]
  ],
  [
    "design-00227",
    [
      "&:where(:has(#body-inner)) .fa-flag-checkered::before"
    ]
  ],
  [
    "design-00228",
    [
      "&:where(:has(#body-inner)) .fa-football-ball::before",
      "&:where(:has(#body-inner)) .fa-football::before"
    ]
  ],
  [
    "design-00229",
    [
      "&:where(:has(#body-inner)) .fa-school-circle-exclamation::before"
    ]
  ],
  [
    "design-00230",
    [
      "&:where(:has(#body-inner)) .fa-crop::before"
    ]
  ],
  [
    "design-00231",
    [
      "&:where(:has(#body-inner)) .fa-angle-double-down::before",
      "&:where(:has(#body-inner)) .fa-angles-down::before"
    ]
  ],
  [
    "design-00232",
    [
      "&:where(:has(#body-inner)) .fa-users-rectangle::before"
    ]
  ],
  [
    "design-00233",
    [
      "&:where(:has(#body-inner)) .fa-people-roof::before"
    ]
  ],
  [
    "design-00234",
    [
      "&:where(:has(#body-inner)) .fa-people-line::before"
    ]
  ],
  [
    "design-00235",
    [
      "&:where(:has(#body-inner)) .fa-beer-mug-empty::before",
      "&:where(:has(#body-inner)) .fa-beer::before"
    ]
  ],
  [
    "design-00236",
    [
      "&:where(:has(#body-inner)) .fa-diagram-predecessor::before"
    ]
  ],
  [
    "design-00237",
    [
      "&:where(:has(#body-inner)) .fa-arrow-up-long::before",
      "&:where(:has(#body-inner)) .fa-long-arrow-up::before"
    ]
  ],
  [
    "design-00238",
    [
      "&:where(:has(#body-inner)) .fa-burn::before",
      "&:where(:has(#body-inner)) .fa-fire-flame-simple::before"
    ]
  ],
  [
    "design-00239",
    [
      "&:where(:has(#body-inner)) .fa-male::before",
      "&:where(:has(#body-inner)) .fa-person::before"
    ]
  ],
  [
    "design-00240",
    [
      "&:where(:has(#body-inner)) .fa-laptop::before"
    ]
  ],
  [
    "design-00241",
    [
      "&:where(:has(#body-inner)) .fa-file-csv::before"
    ]
  ],
  [
    "design-00242",
    [
      "&:where(:has(#body-inner)) .fa-menorah::before"
    ]
  ],
  [
    "design-00243",
    [
      "&:where(:has(#body-inner)) .fa-truck-plane::before"
    ]
  ],
  [
    "design-00244",
    [
      "&:where(:has(#body-inner)) .fa-record-vinyl::before"
    ]
  ],
  [
    "design-00245",
    [
      "&:where(:has(#body-inner)) .fa-face-grin-stars::before",
      "&:where(:has(#body-inner)) .fa-grin-stars::before"
    ]
  ],
  [
    "design-00246",
    [
      "&:where(:has(#body-inner)) .fa-bong::before"
    ]
  ],
  [
    "design-00247",
    [
      "&:where(:has(#body-inner)) .fa-pastafarianism::before",
      "&:where(:has(#body-inner)) .fa-spaghetti-monster-flying::before"
    ]
  ],
  [
    "design-00248",
    [
      "&:where(:has(#body-inner)) .fa-arrow-down-up-across-line::before"
    ]
  ],
  [
    "design-00249",
    [
      "&:where(:has(#body-inner)) .fa-spoon::before",
      "&:where(:has(#body-inner)) .fa-utensil-spoon::before"
    ]
  ],
  [
    "design-00250",
    [
      "&:where(:has(#body-inner)) .fa-jar-wheat::before"
    ]
  ],
  [
    "design-00251",
    [
      "&:where(:has(#body-inner)) .fa-envelopes-bulk::before",
      "&:where(:has(#body-inner)) .fa-mail-bulk::before"
    ]
  ],
  [
    "design-00252",
    [
      "&:where(:has(#body-inner)) .fa-file-circle-exclamation::before"
    ]
  ],
  [
    "design-00253",
    [
      "&:where(:has(#body-inner)) .fa-circle-h::before",
      "&:where(:has(#body-inner)) .fa-hospital-symbol::before"
    ]
  ],
  [
    "design-00254",
    [
      "&:where(:has(#body-inner)) .fa-pager::before"
    ]
  ],
  [
    "design-00255",
    [
      "&:where(:has(#body-inner)) .fa-address-book::before",
      "&:where(:has(#body-inner)) .fa-contact-book::before"
    ]
  ],
  [
    "design-00256",
    [
      "&:where(:has(#body-inner)) .fa-strikethrough::before"
    ]
  ],
  [
    "design-00257",
    [
      "&:where(:has(#body-inner)) .fa-k::before"
    ]
  ],
  [
    "design-00258",
    [
      "&:where(:has(#body-inner)) .fa-landmark-flag::before"
    ]
  ],
  [
    "design-00259",
    [
      "&:where(:has(#body-inner)) .fa-pencil-alt::before",
      "&:where(:has(#body-inner)) .fa-pencil::before"
    ]
  ],
  [
    "design-00260",
    [
      "&:where(:has(#body-inner)) .fa-backward::before"
    ]
  ],
  [
    "design-00261",
    [
      "&:where(:has(#body-inner)) .fa-caret-right::before"
    ]
  ],
  [
    "design-00262",
    [
      "&:where(:has(#body-inner)) .fa-comments::before"
    ]
  ],
  [
    "design-00263",
    [
      "&:where(:has(#body-inner)) .fa-file-clipboard::before",
      "&:where(:has(#body-inner)) .fa-paste::before"
    ]
  ],
  [
    "design-00264",
    [
      "&:where(:has(#body-inner)) .fa-code-pull-request::before"
    ]
  ],
  [
    "design-00265",
    [
      "&:where(:has(#body-inner)) .fa-clipboard-list::before"
    ]
  ],
  [
    "design-00266",
    [
      "&:where(:has(#body-inner)) .fa-truck-loading::before",
      "&:where(:has(#body-inner)) .fa-truck-ramp-box::before"
    ]
  ],
  [
    "design-00267",
    [
      "&:where(:has(#body-inner)) .fa-user-check::before"
    ]
  ],
  [
    "design-00268",
    [
      "&:where(:has(#body-inner)) .fa-vial-virus::before"
    ]
  ],
  [
    "design-00269",
    [
      "&:where(:has(#body-inner)) .fa-sheet-plastic::before"
    ]
  ],
  [
    "design-00270",
    [
      "&:where(:has(#body-inner)) .fa-blog::before"
    ]
  ],
  [
    "design-00271",
    [
      "&:where(:has(#body-inner)) .fa-user-ninja::before"
    ]
  ],
  [
    "design-00272",
    [
      "&:where(:has(#body-inner)) .fa-person-arrow-up-from-line::before"
    ]
  ],
  [
    "design-00273",
    [
      "&:where(:has(#body-inner)) .fa-scroll-torah::before",
      "&:where(:has(#body-inner)) .fa-torah::before"
    ]
  ],
  [
    "design-00274",
    [
      "&:where(:has(#body-inner)) .fa-broom-ball::before",
      "&:where(:has(#body-inner)) .fa-quidditch-broom-ball::before",
      "&:where(:has(#body-inner)) .fa-quidditch::before"
    ]
  ],
  [
    "design-00275",
    [
      "&:where(:has(#body-inner)) .fa-toggle-off::before"
    ]
  ],
  [
    "design-00276",
    [
      "&:where(:has(#body-inner)) .fa-archive::before",
      "&:where(:has(#body-inner)) .fa-box-archive::before"
    ]
  ],
  [
    "design-00277",
    [
      "&:where(:has(#body-inner)) .fa-person-drowning::before"
    ]
  ],
  [
    "design-00278",
    [
      "&:where(:has(#body-inner)) .fa-arrow-down-9-1::before",
      "&:where(:has(#body-inner)) .fa-sort-numeric-desc::before",
      "&:where(:has(#body-inner)) .fa-sort-numeric-down-alt::before"
    ]
  ],
  [
    "design-00279",
    [
      "&:where(:has(#body-inner)) .fa-face-grin-tongue-squint::before",
      "&:where(:has(#body-inner)) .fa-grin-tongue-squint::before"
    ]
  ],
  [
    "design-00280",
    [
      "&:where(:has(#body-inner)) .fa-spray-can::before"
    ]
  ],
  [
    "design-00281",
    [
      "&:where(:has(#body-inner)) .fa-truck-monster::before"
    ]
  ],
  [
    "design-00282",
    [
      "&:where(:has(#body-inner)) .fa-w::before"
    ]
  ],
  [
    "design-00283",
    [
      "&:where(:has(#body-inner)) .fa-earth-africa::before",
      "&:where(:has(#body-inner)) .fa-globe-africa::before"
    ]
  ],
  [
    "design-00284",
    [
      "&:where(:has(#body-inner)) .fa-rainbow::before"
    ]
  ],
  [
    "design-00285",
    [
      "&:where(:has(#body-inner)) .fa-circle-notch::before"
    ]
  ],
  [
    "design-00286",
    [
      "&:where(:has(#body-inner)) .fa-tablet-alt::before",
      "&:where(:has(#body-inner)) .fa-tablet-screen-button::before"
    ]
  ],
  [
    "design-00287",
    [
      "&:where(:has(#body-inner)) .fa-paw::before"
    ]
  ],
  [
    "design-00288",
    [
      "&:where(:has(#body-inner)) .fa-cloud::before"
    ]
  ],
  [
    "design-00289",
    [
      "&:where(:has(#body-inner)) .fa-trowel-bricks::before"
    ]
  ],
  [
    "design-00290",
    [
      "&:where(:has(#body-inner)) .fa-face-flushed::before",
      "&:where(:has(#body-inner)) .fa-flushed::before"
    ]
  ],
  [
    "design-00291",
    [
      "&:where(:has(#body-inner)) .fa-hospital-user::before"
    ]
  ],
  [
    "design-00292",
    [
      "&:where(:has(#body-inner)) .fa-tent-arrow-left-right::before"
    ]
  ],
  [
    "design-00293",
    [
      "&:where(:has(#body-inner)) .fa-gavel::before",
      "&:where(:has(#body-inner)) .fa-legal::before"
    ]
  ],
  [
    "design-00294",
    [
      "&:where(:has(#body-inner)) .fa-binoculars::before"
    ]
  ],
  [
    "design-00295",
    [
      "&:where(:has(#body-inner)) .fa-microphone-slash::before"
    ]
  ],
  [
    "design-00296",
    [
      "&:where(:has(#body-inner)) .fa-box-tissue::before"
    ]
  ],
  [
    "design-00297",
    [
      "&:where(:has(#body-inner)) .fa-motorcycle::before"
    ]
  ],
  [
    "design-00298",
    [
      "&:where(:has(#body-inner)) .fa-bell-concierge::before",
      "&:where(:has(#body-inner)) .fa-concierge-bell::before"
    ]
  ],
  [
    "design-00299",
    [
      "&:where(:has(#body-inner)) .fa-pen-ruler::before",
      "&:where(:has(#body-inner)) .fa-pencil-ruler::before"
    ]
  ],
  [
    "design-00300",
    [
      "&:where(:has(#body-inner)) .fa-people-arrows-left-right::before",
      "&:where(:has(#body-inner)) .fa-people-arrows::before"
    ]
  ],
  [
    "design-00301",
    [
      "&:where(:has(#body-inner)) .fa-mars-and-venus-burst::before"
    ]
  ],
  [
    "design-00302",
    [
      "&:where(:has(#body-inner)) .fa-caret-square-right::before",
      "&:where(:has(#body-inner)) .fa-square-caret-right::before"
    ]
  ],
  [
    "design-00303",
    [
      "&:where(:has(#body-inner)) .fa-cut::before",
      "&:where(:has(#body-inner)) .fa-scissors::before"
    ]
  ],
  [
    "design-00304",
    [
      "&:where(:has(#body-inner)) .fa-sun-plant-wilt::before"
    ]
  ],
  [
    "design-00305",
    [
      "&:where(:has(#body-inner)) .fa-toilets-portable::before"
    ]
  ],
  [
    "design-00306",
    [
      "&:where(:has(#body-inner)) .fa-hockey-puck::before"
    ]
  ],
  [
    "design-00307",
    [
      "&:where(:has(#body-inner)) .fa-table::before"
    ]
  ],
  [
    "design-00308",
    [
      "&:where(:has(#body-inner)) .fa-magnifying-glass-arrow-right::before"
    ]
  ],
  [
    "design-00309",
    [
      "&:where(:has(#body-inner)) .fa-digital-tachograph::before",
      "&:where(:has(#body-inner)) .fa-tachograph-digital::before"
    ]
  ],
  [
    "design-00310",
    [
      "&:where(:has(#body-inner)) .fa-users-slash::before"
    ]
  ],
  [
    "design-00311",
    [
      "&:where(:has(#body-inner)) .fa-clover::before"
    ]
  ],
  [
    "design-00312",
    [
      "&:where(:has(#body-inner)) .fa-mail-reply::before",
      "&:where(:has(#body-inner)) .fa-reply::before"
    ]
  ],
  [
    "design-00313",
    [
      "&:where(:has(#body-inner)) .fa-star-and-crescent::before"
    ]
  ],
  [
    "design-00314",
    [
      "&:where(:has(#body-inner)) .fa-house-fire::before"
    ]
  ],
  [
    "design-00315",
    [
      "&:where(:has(#body-inner)) .fa-minus-square::before",
      "&:where(:has(#body-inner)) .fa-square-minus::before"
    ]
  ],
  [
    "design-00316",
    [
      "&:where(:has(#body-inner)) .fa-helicopter::before"
    ]
  ],
  [
    "design-00317",
    [
      "&:where(:has(#body-inner)) .fa-compass::before"
    ]
  ],
  [
    "design-00318",
    [
      "&:where(:has(#body-inner)) .fa-caret-square-down::before",
      "&:where(:has(#body-inner)) .fa-square-caret-down::before"
    ]
  ],
  [
    "design-00319",
    [
      "&:where(:has(#body-inner)) .fa-file-circle-question::before"
    ]
  ],
  [
    "design-00320",
    [
      "&:where(:has(#body-inner)) .fa-laptop-code::before"
    ]
  ],
  [
    "design-00321",
    [
      "&:where(:has(#body-inner)) .fa-swatchbook::before"
    ]
  ],
  [
    "design-00322",
    [
      "&:where(:has(#body-inner)) .fa-prescription-bottle::before"
    ]
  ],
  [
    "design-00323",
    [
      "&:where(:has(#body-inner)) .fa-bars::before",
      "&:where(:has(#body-inner)) .fa-navicon::before"
    ]
  ],
  [
    "design-00324",
    [
      "&:where(:has(#body-inner)) .fa-people-group::before"
    ]
  ],
  [
    "design-00325",
    [
      "&:where(:has(#body-inner)) .fa-hourglass-3::before",
      "&:where(:has(#body-inner)) .fa-hourglass-end::before"
    ]
  ],
  [
    "design-00326",
    [
      "&:where(:has(#body-inner)) .fa-heart-broken::before",
      "&:where(:has(#body-inner)) .fa-heart-crack::before"
    ]
  ],
  [
    "design-00327",
    [
      "&:where(:has(#body-inner)) .fa-external-link-square-alt::before",
      "&:where(:has(#body-inner)) .fa-square-up-right::before"
    ]
  ],
  [
    "design-00328",
    [
      "&:where(:has(#body-inner)) .fa-face-kiss-beam::before",
      "&:where(:has(#body-inner)) .fa-kiss-beam::before"
    ]
  ],
  [
    "design-00329",
    [
      "&:where(:has(#body-inner)) .fa-film::before"
    ]
  ],
  [
    "design-00330",
    [
      "&:where(:has(#body-inner)) .fa-ruler-horizontal::before"
    ]
  ],
  [
    "design-00331",
    [
      "&:where(:has(#body-inner)) .fa-people-robbery::before"
    ]
  ],
  [
    "design-00332",
    [
      "&:where(:has(#body-inner)) .fa-lightbulb::before"
    ]
  ],
  [
    "design-00333",
    [
      "&:where(:has(#body-inner)) .fa-caret-left::before"
    ]
  ],
  [
    "design-00334",
    [
      "&:where(:has(#body-inner)) .fa-circle-exclamation::before",
      "&:where(:has(#body-inner)) .fa-exclamation-circle::before"
    ]
  ],
  [
    "design-00335",
    [
      "&:where(:has(#body-inner)) .fa-school-circle-xmark::before"
    ]
  ],
  [
    "design-00336",
    [
      "&:where(:has(#body-inner)) .fa-arrow-right-from-bracket::before",
      "&:where(:has(#body-inner)) .fa-sign-out::before"
    ]
  ],
  [
    "design-00337",
    [
      "&:where(:has(#body-inner)) .fa-chevron-circle-down::before",
      "&:where(:has(#body-inner)) .fa-circle-chevron-down::before"
    ]
  ],
  [
    "design-00338",
    [
      "&:where(:has(#body-inner)) .fa-unlock-alt::before",
      "&:where(:has(#body-inner)) .fa-unlock-keyhole::before"
    ]
  ],
  [
    "design-00339",
    [
      "&:where(:has(#body-inner)) .fa-cloud-showers-heavy::before"
    ]
  ],
  [
    "design-00340",
    [
      "&:where(:has(#body-inner)) .fa-headphones-alt::before",
      "&:where(:has(#body-inner)) .fa-headphones-simple::before"
    ]
  ],
  [
    "design-00341",
    [
      "&:where(:has(#body-inner)) .fa-sitemap::before"
    ]
  ],
  [
    "design-00342",
    [
      "&:where(:has(#body-inner)) .fa-circle-dollar-to-slot::before",
      "&:where(:has(#body-inner)) .fa-donate::before"
    ]
  ],
  [
    "design-00343",
    [
      "&:where(:has(#body-inner)) .fa-memory::before"
    ]
  ],
  [
    "design-00344",
    [
      "&:where(:has(#body-inner)) .fa-road-spikes::before"
    ]
  ],
  [
    "design-00345",
    [
      "&:where(:has(#body-inner)) .fa-fire-burner::before"
    ]
  ],
  [
    "design-00346",
    [
      "&:where(:has(#body-inner)) .fa-flag::before"
    ]
  ],
  [
    "design-00347",
    [
      "&:where(:has(#body-inner)) .fa-hanukiah::before"
    ]
  ],
  [
    "design-00348",
    [
      "&:where(:has(#body-inner)) .fa-feather::before"
    ]
  ],
  [
    "design-00349",
    [
      "&:where(:has(#body-inner)) .fa-volume-down::before",
      "&:where(:has(#body-inner)) .fa-volume-low::before"
    ]
  ],
  [
    "design-00350",
    [
      "&:where(:has(#body-inner)) .fa-comment-slash::before"
    ]
  ],
  [
    "design-00351",
    [
      "&:where(:has(#body-inner)) .fa-cloud-sun-rain::before"
    ]
  ],
  [
    "design-00352",
    [
      "&:where(:has(#body-inner)) .fa-compress::before"
    ]
  ],
  [
    "design-00353",
    [
      "&:where(:has(#body-inner)) .fa-wheat-alt::before",
      "&:where(:has(#body-inner)) .fa-wheat-awn::before"
    ]
  ],
  [
    "design-00354",
    [
      "&:where(:has(#body-inner)) .fa-ankh::before"
    ]
  ],
  [
    "design-00355",
    [
      "&:where(:has(#body-inner)) .fa-hands-holding-child::before"
    ]
  ],
  [
    "design-00356",
    [
      "&:where(:has(#body-inner)) .fa-asterisk::before"
    ]
  ],
  [
    "design-00357",
    [
      "&:where(:has(#body-inner)) .fa-check-square::before",
      "&:where(:has(#body-inner)) .fa-square-check::before"
    ]
  ],
  [
    "design-00358",
    [
      "&:where(:has(#body-inner)) .fa-peseta-sign::before"
    ]
  ],
  [
    "design-00359",
    [
      "&:where(:has(#body-inner)) .fa-header::before",
      "&:where(:has(#body-inner)) .fa-heading::before"
    ]
  ],
  [
    "design-00360",
    [
      "&:where(:has(#body-inner)) .fa-ghost::before"
    ]
  ],
  [
    "design-00361",
    [
      "&:where(:has(#body-inner)) .fa-list-squares::before",
      "&:where(:has(#body-inner)) .fa-list::before"
    ]
  ],
  [
    "design-00362",
    [
      "&:where(:has(#body-inner)) .fa-phone-square-alt::before",
      "&:where(:has(#body-inner)) .fa-square-phone-flip::before"
    ]
  ],
  [
    "design-00363",
    [
      "&:where(:has(#body-inner)) .fa-cart-plus::before"
    ]
  ],
  [
    "design-00364",
    [
      "&:where(:has(#body-inner)) .fa-gamepad::before"
    ]
  ],
  [
    "design-00365",
    [
      "&:where(:has(#body-inner)) .fa-circle-dot::before",
      "&:where(:has(#body-inner)) .fa-dot-circle::before"
    ]
  ],
  [
    "design-00366",
    [
      "&:where(:has(#body-inner)) .fa-dizzy::before",
      "&:where(:has(#body-inner)) .fa-face-dizzy::before"
    ]
  ],
  [
    "design-00367",
    [
      "&:where(:has(#body-inner)) .fa-egg::before"
    ]
  ],
  [
    "design-00368",
    [
      "&:where(:has(#body-inner)) .fa-house-medical-circle-xmark::before"
    ]
  ],
  [
    "design-00369",
    [
      "&:where(:has(#body-inner)) .fa-campground::before"
    ]
  ],
  [
    "design-00370",
    [
      "&:where(:has(#body-inner)) .fa-folder-plus::before"
    ]
  ],
  [
    "design-00371",
    [
      "&:where(:has(#body-inner)) .fa-futbol-ball::before",
      "&:where(:has(#body-inner)) .fa-futbol::before",
      "&:where(:has(#body-inner)) .fa-soccer-ball::before"
    ]
  ],
  [
    "design-00372",
    [
      "&:where(:has(#body-inner)) .fa-paint-brush::before",
      "&:where(:has(#body-inner)) .fa-paintbrush::before"
    ]
  ],
  [
    "design-00373",
    [
      "&:where(:has(#body-inner)) .fa-lock::before"
    ]
  ],
  [
    "design-00374",
    [
      "&:where(:has(#body-inner)) .fa-gas-pump::before"
    ]
  ],
  [
    "design-00375",
    [
      "&:where(:has(#body-inner)) .fa-hot-tub-person::before",
      "&:where(:has(#body-inner)) .fa-hot-tub::before"
    ]
  ],
  [
    "design-00376",
    [
      "&:where(:has(#body-inner)) .fa-map-location::before",
      "&:where(:has(#body-inner)) .fa-map-marked::before"
    ]
  ],
  [
    "design-00377",
    [
      "&:where(:has(#body-inner)) .fa-house-flood-water::before"
    ]
  ],
  [
    "design-00378",
    [
      "&:where(:has(#body-inner)) .fa-tree::before"
    ]
  ],
  [
    "design-00379",
    [
      "&:where(:has(#body-inner)) .fa-bridge-lock::before"
    ]
  ],
  [
    "design-00380",
    [
      "&:where(:has(#body-inner)) .fa-sack-dollar::before"
    ]
  ],
  [
    "design-00381",
    [
      "&:where(:has(#body-inner)) .fa-edit::before",
      "&:where(:has(#body-inner)) .fa-pen-to-square::before"
    ]
  ],
  [
    "design-00382",
    [
      "&:where(:has(#body-inner)) .fa-car-side::before"
    ]
  ],
  [
    "design-00383",
    [
      "&:where(:has(#body-inner)) .fa-share-alt::before",
      "&:where(:has(#body-inner)) .fa-share-nodes::before"
    ]
  ],
  [
    "design-00384",
    [
      "&:where(:has(#body-inner)) .fa-heart-circle-minus::before"
    ]
  ],
  [
    "design-00385",
    [
      "&:where(:has(#body-inner)) .fa-hourglass-2::before",
      "&:where(:has(#body-inner)) .fa-hourglass-half::before"
    ]
  ],
  [
    "design-00386",
    [
      "&:where(:has(#body-inner)) .fa-microscope::before"
    ]
  ],
  [
    "design-00387",
    [
      "&:where(:has(#body-inner)) .fa-sink::before"
    ]
  ],
  [
    "design-00388",
    [
      "&:where(:has(#body-inner)) .fa-bag-shopping::before",
      "&:where(:has(#body-inner)) .fa-shopping-bag::before"
    ]
  ],
  [
    "design-00389",
    [
      "&:where(:has(#body-inner)) .fa-arrow-down-z-a::before",
      "&:where(:has(#body-inner)) .fa-sort-alpha-desc::before",
      "&:where(:has(#body-inner)) .fa-sort-alpha-down-alt::before"
    ]
  ],
  [
    "design-00390",
    [
      "&:where(:has(#body-inner)) .fa-mitten::before"
    ]
  ],
  [
    "design-00391",
    [
      "&:where(:has(#body-inner)) .fa-person-rays::before"
    ]
  ],
  [
    "design-00392",
    [
      "&:where(:has(#body-inner)) .fa-users::before"
    ]
  ],
  [
    "design-00393",
    [
      "&:where(:has(#body-inner)) .fa-eye-slash::before"
    ]
  ],
  [
    "design-00394",
    [
      "&:where(:has(#body-inner)) .fa-flask-vial::before"
    ]
  ],
  [
    "design-00395",
    [
      "&:where(:has(#body-inner)) .fa-hand-paper::before",
      "&:where(:has(#body-inner)) .fa-hand::before"
    ]
  ],
  [
    "design-00396",
    [
      "&:where(:has(#body-inner)) .fa-om::before"
    ]
  ],
  [
    "design-00397",
    [
      "&:where(:has(#body-inner)) .fa-worm::before"
    ]
  ],
  [
    "design-00398",
    [
      "&:where(:has(#body-inner)) .fa-house-circle-xmark::before"
    ]
  ],
  [
    "design-00399",
    [
      "&:where(:has(#body-inner)) .fa-plug::before"
    ]
  ],
  [
    "design-00400",
    [
      "&:where(:has(#body-inner)) .fa-chevron-up::before"
    ]
  ],
  [
    "design-00401",
    [
      "&:where(:has(#body-inner)) .fa-hand-spock::before"
    ]
  ],
  [
    "design-00402",
    [
      "&:where(:has(#body-inner)) .fa-stopwatch::before"
    ]
  ],
  [
    "design-00403",
    [
      "&:where(:has(#body-inner)) .fa-face-kiss::before",
      "&:where(:has(#body-inner)) .fa-kiss::before"
    ]
  ],
  [
    "design-00404",
    [
      "&:where(:has(#body-inner)) .fa-bridge-circle-xmark::before"
    ]
  ],
  [
    "design-00405",
    [
      "&:where(:has(#body-inner)) .fa-face-grin-tongue::before",
      "&:where(:has(#body-inner)) .fa-grin-tongue::before"
    ]
  ],
  [
    "design-00406",
    [
      "&:where(:has(#body-inner)) .fa-chess-bishop::before"
    ]
  ],
  [
    "design-00407",
    [
      "&:where(:has(#body-inner)) .fa-face-grin-wink::before",
      "&:where(:has(#body-inner)) .fa-grin-wink::before"
    ]
  ],
  [
    "design-00408",
    [
      "&:where(:has(#body-inner)) .fa-deaf::before",
      "&:where(:has(#body-inner)) .fa-deafness::before",
      "&:where(:has(#body-inner)) .fa-ear-deaf::before",
      "&:where(:has(#body-inner)) .fa-hard-of-hearing::before"
    ]
  ],
  [
    "design-00409",
    [
      "&:where(:has(#body-inner)) .fa-road-circle-check::before"
    ]
  ],
  [
    "design-00410",
    [
      "&:where(:has(#body-inner)) .fa-dice-five::before"
    ]
  ],
  [
    "design-00411",
    [
      "&:where(:has(#body-inner)) .fa-rss-square::before",
      "&:where(:has(#body-inner)) .fa-square-rss::before"
    ]
  ],
  [
    "design-00412",
    [
      "&:where(:has(#body-inner)) .fa-land-mine-on::before"
    ]
  ],
  [
    "design-00413",
    [
      "&:where(:has(#body-inner)) .fa-i-cursor::before"
    ]
  ],
  [
    "design-00414",
    [
      "&:where(:has(#body-inner)) .fa-stamp::before"
    ]
  ],
  [
    "design-00415",
    [
      "&:where(:has(#body-inner)) .fa-stairs::before"
    ]
  ],
  [
    "design-00416",
    [
      "&:where(:has(#body-inner)) .fa-i::before"
    ]
  ],
  [
    "design-00417",
    [
      "&:where(:has(#body-inner)) .fa-hryvnia-sign::before",
      "&:where(:has(#body-inner)) .fa-hryvnia::before"
    ]
  ],
  [
    "design-00418",
    [
      "&:where(:has(#body-inner)) .fa-pills::before"
    ]
  ],
  [
    "design-00419",
    [
      "&:where(:has(#body-inner)) .fa-face-grin-wide::before",
      "&:where(:has(#body-inner)) .fa-grin-alt::before"
    ]
  ],
  [
    "design-00420",
    [
      "&:where(:has(#body-inner)) .fa-tooth::before"
    ]
  ],
  [
    "design-00421",
    [
      "&:where(:has(#body-inner)) .fa-v::before"
    ]
  ],
  [
    "design-00422",
    [
      "&:where(:has(#body-inner)) .fa-bangladeshi-taka-sign::before"
    ]
  ],
  [
    "design-00423",
    [
      "&:where(:has(#body-inner)) .fa-bicycle::before"
    ]
  ],
  [
    "design-00424",
    [
      "&:where(:has(#body-inner)) .fa-rod-asclepius::before",
      "&:where(:has(#body-inner)) .fa-rod-snake::before",
      "&:where(:has(#body-inner)) .fa-staff-aesculapius::before",
      "&:where(:has(#body-inner)) .fa-staff-snake::before"
    ]
  ],
  [
    "design-00425",
    [
      "&:where(:has(#body-inner)) .fa-head-side-cough-slash::before"
    ]
  ],
  [
    "design-00426",
    [
      "&:where(:has(#body-inner)) .fa-ambulance::before",
      "&:where(:has(#body-inner)) .fa-truck-medical::before"
    ]
  ],
  [
    "design-00427",
    [
      "&:where(:has(#body-inner)) .fa-wheat-awn-circle-exclamation::before"
    ]
  ],
  [
    "design-00428",
    [
      "&:where(:has(#body-inner)) .fa-snowman::before"
    ]
  ],
  [
    "design-00429",
    [
      "&:where(:has(#body-inner)) .fa-mortar-pestle::before"
    ]
  ],
  [
    "design-00430",
    [
      "&:where(:has(#body-inner)) .fa-road-barrier::before"
    ]
  ],
  [
    "design-00431",
    [
      "&:where(:has(#body-inner)) .fa-school::before"
    ]
  ],
  [
    "design-00432",
    [
      "&:where(:has(#body-inner)) .fa-igloo::before"
    ]
  ],
  [
    "design-00433",
    [
      "&:where(:has(#body-inner)) .fa-joint::before"
    ]
  ],
  [
    "design-00434",
    [
      "&:where(:has(#body-inner)) .fa-angle-right::before"
    ]
  ],
  [
    "design-00435",
    [
      "&:where(:has(#body-inner)) .fa-horse::before"
    ]
  ],
  [
    "design-00436",
    [
      "&:where(:has(#body-inner)) .fa-q::before"
    ]
  ],
  [
    "design-00437",
    [
      "&:where(:has(#body-inner)) .fa-g::before"
    ]
  ],
  [
    "design-00438",
    [
      "&:where(:has(#body-inner)) .fa-notes-medical::before"
    ]
  ],
  [
    "design-00439",
    [
      "&:where(:has(#body-inner)) .fa-temperature-2::before",
      "&:where(:has(#body-inner)) .fa-temperature-half::before",
      "&:where(:has(#body-inner)) .fa-thermometer-2::before",
      "&:where(:has(#body-inner)) .fa-thermometer-half::before"
    ]
  ],
  [
    "design-00440",
    [
      "&:where(:has(#body-inner)) .fa-dong-sign::before"
    ]
  ],
  [
    "design-00441",
    [
      "&:where(:has(#body-inner)) .fa-capsules::before"
    ]
  ],
  [
    "design-00442",
    [
      "&:where(:has(#body-inner)) .fa-poo-bolt::before",
      "&:where(:has(#body-inner)) .fa-poo-storm::before"
    ]
  ],
  [
    "design-00443",
    [
      "&:where(:has(#body-inner)) .fa-face-frown-open::before",
      "&:where(:has(#body-inner)) .fa-frown-open::before"
    ]
  ],
  [
    "design-00444",
    [
      "&:where(:has(#body-inner)) .fa-hand-point-up::before"
    ]
  ],
  [
    "design-00445",
    [
      "&:where(:has(#body-inner)) .fa-money-bill::before"
    ]
  ],
  [
    "design-00446",
    [
      "&:where(:has(#body-inner)) .fa-bookmark::before"
    ]
  ],
  [
    "design-00447",
    [
      "&:where(:has(#body-inner)) .fa-align-justify::before"
    ]
  ],
  [
    "design-00448",
    [
      "&:where(:has(#body-inner)) .fa-umbrella-beach::before"
    ]
  ],
  [
    "design-00449",
    [
      "&:where(:has(#body-inner)) .fa-helmet-un::before"
    ]
  ],
  [
    "design-00450",
    [
      "&:where(:has(#body-inner)) .fa-bullseye::before"
    ]
  ],
  [
    "design-00451",
    [
      "&:where(:has(#body-inner)) .fa-bacon::before"
    ]
  ],
  [
    "design-00452",
    [
      "&:where(:has(#body-inner)) .fa-hand-point-down::before"
    ]
  ],
  [
    "design-00453",
    [
      "&:where(:has(#body-inner)) .fa-arrow-up-from-bracket::before"
    ]
  ],
  [
    "design-00454",
    [
      "&:where(:has(#body-inner)) .fa-folder-blank::before",
      "&:where(:has(#body-inner)) .fa-folder::before"
    ]
  ],
  [
    "design-00455",
    [
      "&:where(:has(#body-inner)) .fa-file-medical-alt::before",
      "&:where(:has(#body-inner)) .fa-file-waveform::before"
    ]
  ],
  [
    "design-00456",
    [
      "&:where(:has(#body-inner)) .fa-radiation::before"
    ]
  ],
  [
    "design-00457",
    [
      "&:where(:has(#body-inner)) .fa-chart-simple::before"
    ]
  ],
  [
    "design-00458",
    [
      "&:where(:has(#body-inner)) .fa-mars-stroke::before"
    ]
  ],
  [
    "design-00459",
    [
      "&:where(:has(#body-inner)) .fa-vial::before"
    ]
  ],
  [
    "design-00460",
    [
      "&:where(:has(#body-inner)) .fa-dashboard::before",
      "&:where(:has(#body-inner)) .fa-gauge-med::before",
      "&:where(:has(#body-inner)) .fa-gauge::before",
      "&:where(:has(#body-inner)) .fa-tachometer-alt-average::before"
    ]
  ],
  [
    "design-00461",
    [
      "&:where(:has(#body-inner)) .fa-magic-wand-sparkles::before",
      "&:where(:has(#body-inner)) .fa-wand-magic-sparkles::before"
    ]
  ],
  [
    "design-00462",
    [
      "&:where(:has(#body-inner)) .fa-e::before"
    ]
  ],
  [
    "design-00463",
    [
      "&:where(:has(#body-inner)) .fa-pen-alt::before",
      "&:where(:has(#body-inner)) .fa-pen-clip::before"
    ]
  ],
  [
    "design-00464",
    [
      "&:where(:has(#body-inner)) .fa-bridge-circle-exclamation::before"
    ]
  ],
  [
    "design-00465",
    [
      "&:where(:has(#body-inner)) .fa-user::before"
    ]
  ],
  [
    "design-00466",
    [
      "&:where(:has(#body-inner)) .fa-school-circle-check::before"
    ]
  ],
  [
    "design-00467",
    [
      "&:where(:has(#body-inner)) .fa-dumpster::before"
    ]
  ],
  [
    "design-00468",
    [
      "&:where(:has(#body-inner)) .fa-shuttle-van::before",
      "&:where(:has(#body-inner)) .fa-van-shuttle::before"
    ]
  ],
  [
    "design-00469",
    [
      "&:where(:has(#body-inner)) .fa-building-user::before"
    ]
  ],
  [
    "design-00470",
    [
      "&:where(:has(#body-inner)) .fa-caret-square-left::before",
      "&:where(:has(#body-inner)) .fa-square-caret-left::before"
    ]
  ],
  [
    "design-00471",
    [
      "&:where(:has(#body-inner)) .fa-highlighter::before"
    ]
  ],
  [
    "design-00472",
    [
      "&:where(:has(#body-inner)) .fa-key::before"
    ]
  ],
  [
    "design-00473",
    [
      "&:where(:has(#body-inner)) .fa-bullhorn::before"
    ]
  ],
  [
    "design-00474",
    [
      "&:where(:has(#body-inner)) .fa-globe::before"
    ]
  ],
  [
    "design-00475",
    [
      "&:where(:has(#body-inner)) .fa-synagogue::before"
    ]
  ],
  [
    "design-00476",
    [
      "&:where(:has(#body-inner)) .fa-person-half-dress::before"
    ]
  ],
  [
    "design-00477",
    [
      "&:where(:has(#body-inner)) .fa-road-bridge::before"
    ]
  ],
  [
    "design-00478",
    [
      "&:where(:has(#body-inner)) .fa-location-arrow::before"
    ]
  ],
  [
    "design-00479",
    [
      "&:where(:has(#body-inner)) .fa-c::before"
    ]
  ],
  [
    "design-00480",
    [
      "&:where(:has(#body-inner)) .fa-tablet-button::before"
    ]
  ],
  [
    "design-00481",
    [
      "&:where(:has(#body-inner)) .fa-building-lock::before"
    ]
  ],
  [
    "design-00482",
    [
      "&:where(:has(#body-inner)) .fa-pizza-slice::before"
    ]
  ],
  [
    "design-00483",
    [
      "&:where(:has(#body-inner)) .fa-money-bill-wave::before"
    ]
  ],
  [
    "design-00484",
    [
      "&:where(:has(#body-inner)) .fa-area-chart::before",
      "&:where(:has(#body-inner)) .fa-chart-area::before"
    ]
  ],
  [
    "design-00485",
    [
      "&:where(:has(#body-inner)) .fa-house-flag::before"
    ]
  ],
  [
    "design-00486",
    [
      "&:where(:has(#body-inner)) .fa-person-circle-minus::before"
    ]
  ],
  [
    "design-00487",
    [
      "&:where(:has(#body-inner)) .fa-ban::before",
      "&:where(:has(#body-inner)) .fa-cancel::before"
    ]
  ],
  [
    "design-00488",
    [
      "&:where(:has(#body-inner)) .fa-camera-rotate::before"
    ]
  ],
  [
    "design-00489",
    [
      "&:where(:has(#body-inner)) .fa-air-freshener::before",
      "&:where(:has(#body-inner)) .fa-spray-can-sparkles::before"
    ]
  ],
  [
    "design-00490",
    [
      "&:where(:has(#body-inner)) .fa-star::before"
    ]
  ],
  [
    "design-00491",
    [
      "&:where(:has(#body-inner)) .fa-repeat::before"
    ]
  ],
  [
    "design-00492",
    [
      "&:where(:has(#body-inner)) .fa-cross::before"
    ]
  ],
  [
    "design-00493",
    [
      "&:where(:has(#body-inner)) .fa-box::before"
    ]
  ],
  [
    "design-00494",
    [
      "&:where(:has(#body-inner)) .fa-venus-mars::before"
    ]
  ],
  [
    "design-00495",
    [
      "&:where(:has(#body-inner)) .fa-arrow-pointer::before",
      "&:where(:has(#body-inner)) .fa-mouse-pointer::before"
    ]
  ],
  [
    "design-00496",
    [
      "&:where(:has(#body-inner)) .fa-expand-arrows-alt::before",
      "&:where(:has(#body-inner)) .fa-maximize::before"
    ]
  ],
  [
    "design-00497",
    [
      "&:where(:has(#body-inner)) .fa-charging-station::before"
    ]
  ],
  [
    "design-00498",
    [
      "&:where(:has(#body-inner)) .fa-shapes::before",
      "&:where(:has(#body-inner)) .fa-triangle-circle-square::before"
    ]
  ],
  [
    "design-00499",
    [
      "&:where(:has(#body-inner)) .fa-random::before",
      "&:where(:has(#body-inner)) .fa-shuffle::before"
    ]
  ],
  [
    "design-00500",
    [
      "&:where(:has(#body-inner)) .fa-person-running::before",
      "&:where(:has(#body-inner)) .fa-running::before"
    ]
  ],
  [
    "design-00501",
    [
      "&:where(:has(#body-inner)) .fa-mobile-retro::before"
    ]
  ],
  [
    "design-00502",
    [
      "&:where(:has(#body-inner)) .fa-grip-lines-vertical::before"
    ]
  ],
  [
    "design-00503",
    [
      "&:where(:has(#body-inner)) .fa-spider::before"
    ]
  ],
  [
    "design-00504",
    [
      "&:where(:has(#body-inner)) .fa-hands-bound::before"
    ]
  ],
  [
    "design-00505",
    [
      "&:where(:has(#body-inner)) .fa-file-invoice-dollar::before"
    ]
  ],
  [
    "design-00506",
    [
      "&:where(:has(#body-inner)) .fa-plane-circle-exclamation::before"
    ]
  ],
  [
    "design-00507",
    [
      "&:where(:has(#body-inner)) .fa-x-ray::before"
    ]
  ],
  [
    "design-00508",
    [
      "&:where(:has(#body-inner)) .fa-spell-check::before"
    ]
  ],
  [
    "design-00509",
    [
      "&:where(:has(#body-inner)) .fa-slash::before"
    ]
  ],
  [
    "design-00510",
    [
      "&:where(:has(#body-inner)) .fa-computer-mouse::before",
      "&:where(:has(#body-inner)) .fa-mouse::before"
    ]
  ],
  [
    "design-00511",
    [
      "&:where(:has(#body-inner)) .fa-arrow-right-to-bracket::before",
      "&:where(:has(#body-inner)) .fa-sign-in::before"
    ]
  ],
  [
    "design-00512",
    [
      "&:where(:has(#body-inner)) .fa-shop-slash::before",
      "&:where(:has(#body-inner)) .fa-store-alt-slash::before"
    ]
  ],
  [
    "design-00513",
    [
      "&:where(:has(#body-inner)) .fa-server::before"
    ]
  ],
  [
    "design-00514",
    [
      "&:where(:has(#body-inner)) .fa-virus-covid-slash::before"
    ]
  ],
  [
    "design-00515",
    [
      "&:where(:has(#body-inner)) .fa-shop-lock::before"
    ]
  ],
  [
    "design-00516",
    [
      "&:where(:has(#body-inner)) .fa-hourglass-1::before",
      "&:where(:has(#body-inner)) .fa-hourglass-start::before"
    ]
  ],
  [
    "design-00517",
    [
      "&:where(:has(#body-inner)) .fa-blender-phone::before"
    ]
  ],
  [
    "design-00518",
    [
      "&:where(:has(#body-inner)) .fa-building-wheat::before"
    ]
  ],
  [
    "design-00519",
    [
      "&:where(:has(#body-inner)) .fa-person-breastfeeding::before"
    ]
  ],
  [
    "design-00520",
    [
      "&:where(:has(#body-inner)) .fa-right-to-bracket::before",
      "&:where(:has(#body-inner)) .fa-sign-in-alt::before"
    ]
  ],
  [
    "design-00521",
    [
      "&:where(:has(#body-inner)) .fa-venus::before"
    ]
  ],
  [
    "design-00522",
    [
      "&:where(:has(#body-inner)) .fa-passport::before"
    ]
  ],
  [
    "design-00523",
    [
      "&:where(:has(#body-inner)) .fa-heart-pulse::before",
      "&:where(:has(#body-inner)) .fa-heartbeat::before"
    ]
  ],
  [
    "design-00524",
    [
      "&:where(:has(#body-inner)) .fa-people-carry-box::before",
      "&:where(:has(#body-inner)) .fa-people-carry::before"
    ]
  ],
  [
    "design-00525",
    [
      "&:where(:has(#body-inner)) .fa-temperature-high::before"
    ]
  ],
  [
    "design-00526",
    [
      "&:where(:has(#body-inner)) .fa-microchip::before"
    ]
  ],
  [
    "design-00527",
    [
      "&:where(:has(#body-inner)) .fa-crown::before"
    ]
  ],
  [
    "design-00528",
    [
      "&:where(:has(#body-inner)) .fa-weight-hanging::before"
    ]
  ],
  [
    "design-00529",
    [
      "&:where(:has(#body-inner)) .fa-xmarks-lines::before"
    ]
  ],
  [
    "design-00530",
    [
      "&:where(:has(#body-inner)) .fa-file-prescription::before"
    ]
  ],
  [
    "design-00531",
    [
      "&:where(:has(#body-inner)) .fa-weight-scale::before",
      "&:where(:has(#body-inner)) .fa-weight::before"
    ]
  ],
  [
    "design-00532",
    [
      "&:where(:has(#body-inner)) .fa-user-friends::before",
      "&:where(:has(#body-inner)) .fa-user-group::before"
    ]
  ],
  [
    "design-00533",
    [
      "&:where(:has(#body-inner)) .fa-arrow-up-a-z::before",
      "&:where(:has(#body-inner)) .fa-sort-alpha-up::before"
    ]
  ],
  [
    "design-00534",
    [
      "&:where(:has(#body-inner)) .fa-chess-knight::before"
    ]
  ],
  [
    "design-00535",
    [
      "&:where(:has(#body-inner)) .fa-face-laugh-squint::before",
      "&:where(:has(#body-inner)) .fa-laugh-squint::before"
    ]
  ],
  [
    "design-00536",
    [
      "&:where(:has(#body-inner)) .fa-wheelchair::before"
    ]
  ],
  [
    "design-00537",
    [
      "&:where(:has(#body-inner)) .fa-arrow-circle-up::before",
      "&:where(:has(#body-inner)) .fa-circle-arrow-up::before"
    ]
  ],
  [
    "design-00538",
    [
      "&:where(:has(#body-inner)) .fa-toggle-on::before"
    ]
  ],
  [
    "design-00539",
    [
      "&:where(:has(#body-inner)) .fa-person-walking::before",
      "&:where(:has(#body-inner)) .fa-walking::before"
    ]
  ],
  [
    "design-00540",
    [
      "&:where(:has(#body-inner)) .fa-l::before"
    ]
  ],
  [
    "design-00541",
    [
      "&:where(:has(#body-inner)) .fa-fire::before"
    ]
  ],
  [
    "design-00542",
    [
      "&:where(:has(#body-inner)) .fa-bed-pulse::before",
      "&:where(:has(#body-inner)) .fa-procedures::before"
    ]
  ],
  [
    "design-00543",
    [
      "&:where(:has(#body-inner)) .fa-shuttle-space::before",
      "&:where(:has(#body-inner)) .fa-space-shuttle::before"
    ]
  ],
  [
    "design-00544",
    [
      "&:where(:has(#body-inner)) .fa-face-laugh::before",
      "&:where(:has(#body-inner)) .fa-laugh::before"
    ]
  ],
  [
    "design-00545",
    [
      "&:where(:has(#body-inner)) .fa-folder-open::before"
    ]
  ],
  [
    "design-00546",
    [
      "&:where(:has(#body-inner)) .fa-heart-circle-plus::before"
    ]
  ],
  [
    "design-00547",
    [
      "&:where(:has(#body-inner)) .fa-code-fork::before"
    ]
  ],
  [
    "design-00548",
    [
      "&:where(:has(#body-inner)) .fa-city::before"
    ]
  ],
  [
    "design-00549",
    [
      "&:where(:has(#body-inner)) .fa-microphone-alt::before",
      "&:where(:has(#body-inner)) .fa-microphone-lines::before"
    ]
  ],
  [
    "design-00550",
    [
      "&:where(:has(#body-inner)) .fa-pepper-hot::before"
    ]
  ],
  [
    "design-00551",
    [
      "&:where(:has(#body-inner)) .fa-unlock::before"
    ]
  ],
  [
    "design-00552",
    [
      "&:where(:has(#body-inner)) .fa-colon-sign::before"
    ]
  ],
  [
    "design-00553",
    [
      "&:where(:has(#body-inner)) .fa-headset::before"
    ]
  ],
  [
    "design-00554",
    [
      "&:where(:has(#body-inner)) .fa-store-slash::before"
    ]
  ],
  [
    "design-00555",
    [
      "&:where(:has(#body-inner)) .fa-road-circle-xmark::before"
    ]
  ],
  [
    "design-00556",
    [
      "&:where(:has(#body-inner)) .fa-user-minus::before"
    ]
  ],
  [
    "design-00557",
    [
      "&:where(:has(#body-inner)) .fa-mars-stroke-up::before",
      "&:where(:has(#body-inner)) .fa-mars-stroke-v::before"
    ]
  ],
  [
    "design-00558",
    [
      "&:where(:has(#body-inner)) .fa-champagne-glasses::before",
      "&:where(:has(#body-inner)) .fa-glass-cheers::before"
    ]
  ],
  [
    "design-00559",
    [
      "&:where(:has(#body-inner)) .fa-clipboard::before"
    ]
  ],
  [
    "design-00560",
    [
      "&:where(:has(#body-inner)) .fa-house-circle-exclamation::before"
    ]
  ],
  [
    "design-00561",
    [
      "&:where(:has(#body-inner)) .fa-file-arrow-up::before",
      "&:where(:has(#body-inner)) .fa-file-upload::before"
    ]
  ],
  [
    "design-00562",
    [
      "&:where(:has(#body-inner)) .fa-wifi-3::before",
      "&:where(:has(#body-inner)) .fa-wifi-strong::before",
      "&:where(:has(#body-inner)) .fa-wifi::before"
    ]
  ],
  [
    "design-00563",
    [
      "&:where(:has(#body-inner)) .fa-bath::before",
      "&:where(:has(#body-inner)) .fa-bathtub::before"
    ]
  ],
  [
    "design-00564",
    [
      "&:where(:has(#body-inner)) .fa-underline::before"
    ]
  ],
  [
    "design-00565",
    [
      "&:where(:has(#body-inner)) .fa-user-edit::before",
      "&:where(:has(#body-inner)) .fa-user-pen::before"
    ]
  ],
  [
    "design-00566",
    [
      "&:where(:has(#body-inner)) .fa-signature::before"
    ]
  ],
  [
    "design-00567",
    [
      "&:where(:has(#body-inner)) .fa-stroopwafel::before"
    ]
  ],
  [
    "design-00568",
    [
      "&:where(:has(#body-inner)) .fa-bold::before"
    ]
  ],
  [
    "design-00569",
    [
      "&:where(:has(#body-inner)) .fa-anchor-lock::before"
    ]
  ],
  [
    "design-00570",
    [
      "&:where(:has(#body-inner)) .fa-building-ngo::before"
    ]
  ],
  [
    "design-00571",
    [
      "&:where(:has(#body-inner)) .fa-manat-sign::before"
    ]
  ],
  [
    "design-00572",
    [
      "&:where(:has(#body-inner)) .fa-not-equal::before"
    ]
  ],
  [
    "design-00573",
    [
      "&:where(:has(#body-inner)) .fa-border-style::before",
      "&:where(:has(#body-inner)) .fa-border-top-left::before"
    ]
  ],
  [
    "design-00574",
    [
      "&:where(:has(#body-inner)) .fa-map-location-dot::before",
      "&:where(:has(#body-inner)) .fa-map-marked-alt::before"
    ]
  ],
  [
    "design-00575",
    [
      "&:where(:has(#body-inner)) .fa-jedi::before"
    ]
  ],
  [
    "design-00576",
    [
      "&:where(:has(#body-inner)) .fa-poll::before",
      "&:where(:has(#body-inner)) .fa-square-poll-vertical::before"
    ]
  ],
  [
    "design-00577",
    [
      "&:where(:has(#body-inner)) .fa-mug-hot::before"
    ]
  ],
  [
    "design-00578",
    [
      "&:where(:has(#body-inner)) .fa-battery-car::before",
      "&:where(:has(#body-inner)) .fa-car-battery::before"
    ]
  ],
  [
    "design-00579",
    [
      "&:where(:has(#body-inner)) .fa-gift::before"
    ]
  ],
  [
    "design-00580",
    [
      "&:where(:has(#body-inner)) .fa-dice-two::before"
    ]
  ],
  [
    "design-00581",
    [
      "&:where(:has(#body-inner)) .fa-chess-queen::before"
    ]
  ],
  [
    "design-00582",
    [
      "&:where(:has(#body-inner)) .fa-glasses::before"
    ]
  ],
  [
    "design-00583",
    [
      "&:where(:has(#body-inner)) .fa-chess-board::before"
    ]
  ],
  [
    "design-00584",
    [
      "&:where(:has(#body-inner)) .fa-building-circle-check::before"
    ]
  ],
  [
    "design-00585",
    [
      "&:where(:has(#body-inner)) .fa-person-chalkboard::before"
    ]
  ],
  [
    "design-00586",
    [
      "&:where(:has(#body-inner)) .fa-mars-stroke-h::before",
      "&:where(:has(#body-inner)) .fa-mars-stroke-right::before"
    ]
  ],
  [
    "design-00587",
    [
      "&:where(:has(#body-inner)) .fa-hand-back-fist::before",
      "&:where(:has(#body-inner)) .fa-hand-rock::before"
    ]
  ],
  [
    "design-00588",
    [
      "&:where(:has(#body-inner)) .fa-caret-square-up::before",
      "&:where(:has(#body-inner)) .fa-square-caret-up::before"
    ]
  ],
  [
    "design-00589",
    [
      "&:where(:has(#body-inner)) .fa-cloud-showers-water::before"
    ]
  ],
  [
    "design-00590",
    [
      "&:where(:has(#body-inner)) .fa-bar-chart::before",
      "&:where(:has(#body-inner)) .fa-chart-bar::before"
    ]
  ],
  [
    "design-00591",
    [
      "&:where(:has(#body-inner)) .fa-hands-bubbles::before",
      "&:where(:has(#body-inner)) .fa-hands-wash::before"
    ]
  ],
  [
    "design-00592",
    [
      "&:where(:has(#body-inner)) .fa-less-than-equal::before"
    ]
  ],
  [
    "design-00593",
    [
      "&:where(:has(#body-inner)) .fa-train::before"
    ]
  ],
  [
    "design-00594",
    [
      "&:where(:has(#body-inner)) .fa-eye-low-vision::before",
      "&:where(:has(#body-inner)) .fa-low-vision::before"
    ]
  ],
  [
    "design-00595",
    [
      "&:where(:has(#body-inner)) .fa-crow::before"
    ]
  ],
  [
    "design-00596",
    [
      "&:where(:has(#body-inner)) .fa-sailboat::before"
    ]
  ],
  [
    "design-00597",
    [
      "&:where(:has(#body-inner)) .fa-window-restore::before"
    ]
  ],
  [
    "design-00598",
    [
      "&:where(:has(#body-inner)) .fa-plus-square::before",
      "&:where(:has(#body-inner)) .fa-square-plus::before"
    ]
  ],
  [
    "design-00599",
    [
      "&:where(:has(#body-inner)) .fa-torii-gate::before"
    ]
  ],
  [
    "design-00600",
    [
      "&:where(:has(#body-inner)) .fa-frog::before"
    ]
  ],
  [
    "design-00601",
    [
      "&:where(:has(#body-inner)) .fa-bucket::before"
    ]
  ],
  [
    "design-00602",
    [
      "&:where(:has(#body-inner)) .fa-image::before"
    ]
  ],
  [
    "design-00603",
    [
      "&:where(:has(#body-inner)) .fa-microphone::before"
    ]
  ],
  [
    "design-00604",
    [
      "&:where(:has(#body-inner)) .fa-cow::before"
    ]
  ],
  [
    "design-00605",
    [
      "&:where(:has(#body-inner)) .fa-caret-up::before"
    ]
  ],
  [
    "design-00606",
    [
      "&:where(:has(#body-inner)) .fa-screwdriver::before"
    ]
  ],
  [
    "design-00607",
    [
      "&:where(:has(#body-inner)) .fa-folder-closed::before"
    ]
  ],
  [
    "design-00608",
    [
      "&:where(:has(#body-inner)) .fa-house-tsunami::before"
    ]
  ],
  [
    "design-00609",
    [
      "&:where(:has(#body-inner)) .fa-square-nfi::before"
    ]
  ],
  [
    "design-00610",
    [
      "&:where(:has(#body-inner)) .fa-arrow-up-from-ground-water::before"
    ]
  ],
  [
    "design-00611",
    [
      "&:where(:has(#body-inner)) .fa-glass-martini-alt::before",
      "&:where(:has(#body-inner)) .fa-martini-glass::before"
    ]
  ],
  [
    "design-00612",
    [
      "&:where(:has(#body-inner)) .fa-rotate-back::before",
      "&:where(:has(#body-inner)) .fa-rotate-backward::before",
      "&:where(:has(#body-inner)) .fa-rotate-left::before",
      "&:where(:has(#body-inner)) .fa-undo-alt::before"
    ]
  ],
  [
    "design-00613",
    [
      "&:where(:has(#body-inner)) .fa-columns::before",
      "&:where(:has(#body-inner)) .fa-table-columns::before"
    ]
  ],
  [
    "design-00614",
    [
      "&:where(:has(#body-inner)) .fa-lemon::before"
    ]
  ],
  [
    "design-00615",
    [
      "&:where(:has(#body-inner)) .fa-head-side-mask::before"
    ]
  ],
  [
    "design-00616",
    [
      "&:where(:has(#body-inner)) .fa-handshake::before"
    ]
  ],
  [
    "design-00617",
    [
      "&:where(:has(#body-inner)) .fa-gem::before"
    ]
  ],
  [
    "design-00618",
    [
      "&:where(:has(#body-inner)) .fa-dolly-box::before",
      "&:where(:has(#body-inner)) .fa-dolly::before"
    ]
  ],
  [
    "design-00619",
    [
      "&:where(:has(#body-inner)) .fa-smoking::before"
    ]
  ],
  [
    "design-00620",
    [
      "&:where(:has(#body-inner)) .fa-compress-arrows-alt::before",
      "&:where(:has(#body-inner)) .fa-minimize::before"
    ]
  ],
  [
    "design-00621",
    [
      "&:where(:has(#body-inner)) .fa-monument::before"
    ]
  ],
  [
    "design-00622",
    [
      "&:where(:has(#body-inner)) .fa-snowplow::before"
    ]
  ],
  [
    "design-00623",
    [
      "&:where(:has(#body-inner)) .fa-angle-double-right::before",
      "&:where(:has(#body-inner)) .fa-angles-right::before"
    ]
  ],
  [
    "design-00624",
    [
      "&:where(:has(#body-inner)) .fa-cannabis::before"
    ]
  ],
  [
    "design-00625",
    [
      "&:where(:has(#body-inner)) .fa-circle-play::before",
      "&:where(:has(#body-inner)) .fa-play-circle::before"
    ]
  ],
  [
    "design-00626",
    [
      "&:where(:has(#body-inner)) .fa-tablets::before"
    ]
  ],
  [
    "design-00627",
    [
      "&:where(:has(#body-inner)) .fa-ethernet::before"
    ]
  ],
  [
    "design-00628",
    [
      "&:where(:has(#body-inner)) .fa-eur::before",
      "&:where(:has(#body-inner)) .fa-euro-sign::before",
      "&:where(:has(#body-inner)) .fa-euro::before"
    ]
  ],
  [
    "design-00629",
    [
      "&:where(:has(#body-inner)) .fa-chair::before"
    ]
  ],
  [
    "design-00630",
    [
      "&:where(:has(#body-inner)) .fa-check-circle::before",
      "&:where(:has(#body-inner)) .fa-circle-check::before"
    ]
  ],
  [
    "design-00631",
    [
      "&:where(:has(#body-inner)) .fa-circle-stop::before",
      "&:where(:has(#body-inner)) .fa-stop-circle::before"
    ]
  ],
  [
    "design-00632",
    [
      "&:where(:has(#body-inner)) .fa-compass-drafting::before",
      "&:where(:has(#body-inner)) .fa-drafting-compass::before"
    ]
  ],
  [
    "design-00633",
    [
      "&:where(:has(#body-inner)) .fa-plate-wheat::before"
    ]
  ],
  [
    "design-00634",
    [
      "&:where(:has(#body-inner)) .fa-icicles::before"
    ]
  ],
  [
    "design-00635",
    [
      "&:where(:has(#body-inner)) .fa-person-shelter::before"
    ]
  ],
  [
    "design-00636",
    [
      "&:where(:has(#body-inner)) .fa-neuter::before"
    ]
  ],
  [
    "design-00637",
    [
      "&:where(:has(#body-inner)) .fa-id-badge::before"
    ]
  ],
  [
    "design-00638",
    [
      "&:where(:has(#body-inner)) .fa-marker::before"
    ]
  ],
  [
    "design-00639",
    [
      "&:where(:has(#body-inner)) .fa-face-laugh-beam::before",
      "&:where(:has(#body-inner)) .fa-laugh-beam::before"
    ]
  ],
  [
    "design-00640",
    [
      "&:where(:has(#body-inner)) .fa-helicopter-symbol::before"
    ]
  ],
  [
    "design-00641",
    [
      "&:where(:has(#body-inner)) .fa-universal-access::before"
    ]
  ],
  [
    "design-00642",
    [
      "&:where(:has(#body-inner)) .fa-chevron-circle-up::before",
      "&:where(:has(#body-inner)) .fa-circle-chevron-up::before"
    ]
  ],
  [
    "design-00643",
    [
      "&:where(:has(#body-inner)) .fa-lari-sign::before"
    ]
  ],
  [
    "design-00644",
    [
      "&:where(:has(#body-inner)) .fa-volcano::before"
    ]
  ],
  [
    "design-00645",
    [
      "&:where(:has(#body-inner)) .fa-person-walking-dashed-line-arrow-right::before"
    ]
  ],
  [
    "design-00646",
    [
      "&:where(:has(#body-inner)) .fa-gbp::before",
      "&:where(:has(#body-inner)) .fa-pound-sign::before",
      "&:where(:has(#body-inner)) .fa-sterling-sign::before"
    ]
  ],
  [
    "design-00647",
    [
      "&:where(:has(#body-inner)) .fa-viruses::before"
    ]
  ],
  [
    "design-00648",
    [
      "&:where(:has(#body-inner)) .fa-square-person-confined::before"
    ]
  ],
  [
    "design-00649",
    [
      "&:where(:has(#body-inner)) .fa-user-tie::before"
    ]
  ],
  [
    "design-00650",
    [
      "&:where(:has(#body-inner)) .fa-arrow-down-long::before",
      "&:where(:has(#body-inner)) .fa-long-arrow-down::before"
    ]
  ],
  [
    "design-00651",
    [
      "&:where(:has(#body-inner)) .fa-tent-arrow-down-to-line::before"
    ]
  ],
  [
    "design-00652",
    [
      "&:where(:has(#body-inner)) .fa-certificate::before"
    ]
  ],
  [
    "design-00653",
    [
      "&:where(:has(#body-inner)) .fa-mail-reply-all::before",
      "&:where(:has(#body-inner)) .fa-reply-all::before"
    ]
  ],
  [
    "design-00654",
    [
      "&:where(:has(#body-inner)) .fa-suitcase::before"
    ]
  ],
  [
    "design-00655",
    [
      "&:where(:has(#body-inner)) .fa-person-skating::before",
      "&:where(:has(#body-inner)) .fa-skating::before"
    ]
  ],
  [
    "design-00656",
    [
      "&:where(:has(#body-inner)) .fa-filter-circle-dollar::before",
      "&:where(:has(#body-inner)) .fa-funnel-dollar::before"
    ]
  ],
  [
    "design-00657",
    [
      "&:where(:has(#body-inner)) .fa-camera-retro::before"
    ]
  ],
  [
    "design-00658",
    [
      "&:where(:has(#body-inner)) .fa-arrow-circle-down::before",
      "&:where(:has(#body-inner)) .fa-circle-arrow-down::before"
    ]
  ],
  [
    "design-00659",
    [
      "&:where(:has(#body-inner)) .fa-arrow-right-to-file::before",
      "&:where(:has(#body-inner)) .fa-file-import::before"
    ]
  ],
  [
    "design-00660",
    [
      "&:where(:has(#body-inner)) .fa-external-link-square::before",
      "&:where(:has(#body-inner)) .fa-square-arrow-up-right::before"
    ]
  ],
  [
    "design-00661",
    [
      "&:where(:has(#body-inner)) .fa-box-open::before"
    ]
  ],
  [
    "design-00662",
    [
      "&:where(:has(#body-inner)) .fa-scroll::before"
    ]
  ],
  [
    "design-00663",
    [
      "&:where(:has(#body-inner)) .fa-spa::before"
    ]
  ],
  [
    "design-00664",
    [
      "&:where(:has(#body-inner)) .fa-location-pin-lock::before"
    ]
  ],
  [
    "design-00665",
    [
      "&:where(:has(#body-inner)) .fa-pause::before"
    ]
  ],
  [
    "design-00666",
    [
      "&:where(:has(#body-inner)) .fa-hill-avalanche::before"
    ]
  ],
  [
    "design-00667",
    [
      "&:where(:has(#body-inner)) .fa-temperature-0::before",
      "&:where(:has(#body-inner)) .fa-temperature-empty::before",
      "&:where(:has(#body-inner)) .fa-thermometer-0::before",
      "&:where(:has(#body-inner)) .fa-thermometer-empty::before"
    ]
  ],
  [
    "design-00668",
    [
      "&:where(:has(#body-inner)) .fa-bomb::before"
    ]
  ],
  [
    "design-00669",
    [
      "&:where(:has(#body-inner)) .fa-registered::before"
    ]
  ],
  [
    "design-00670",
    [
      "&:where(:has(#body-inner)) .fa-address-card::before",
      "&:where(:has(#body-inner)) .fa-contact-card::before",
      "&:where(:has(#body-inner)) .fa-vcard::before"
    ]
  ],
  [
    "design-00671",
    [
      "&:where(:has(#body-inner)) .fa-balance-scale-right::before",
      "&:where(:has(#body-inner)) .fa-scale-unbalanced-flip::before"
    ]
  ],
  [
    "design-00672",
    [
      "&:where(:has(#body-inner)) .fa-subscript::before"
    ]
  ],
  [
    "design-00673",
    [
      "&:where(:has(#body-inner)) .fa-diamond-turn-right::before",
      "&:where(:has(#body-inner)) .fa-directions::before"
    ]
  ],
  [
    "design-00674",
    [
      "&:where(:has(#body-inner)) .fa-burst::before"
    ]
  ],
  [
    "design-00675",
    [
      "&:where(:has(#body-inner)) .fa-house-laptop::before",
      "&:where(:has(#body-inner)) .fa-laptop-house::before"
    ]
  ],
  [
    "design-00676",
    [
      "&:where(:has(#body-inner)) .fa-face-tired::before",
      "&:where(:has(#body-inner)) .fa-tired::before"
    ]
  ],
  [
    "design-00677",
    [
      "&:where(:has(#body-inner)) .fa-money-bills::before"
    ]
  ],
  [
    "design-00678",
    [
      "&:where(:has(#body-inner)) .fa-smog::before"
    ]
  ],
  [
    "design-00679",
    [
      "&:where(:has(#body-inner)) .fa-crutch::before"
    ]
  ],
  [
    "design-00680",
    [
      "&:where(:has(#body-inner)) .fa-cloud-arrow-up::before",
      "&:where(:has(#body-inner)) .fa-cloud-upload-alt::before",
      "&:where(:has(#body-inner)) .fa-cloud-upload::before"
    ]
  ],
  [
    "design-00681",
    [
      "&:where(:has(#body-inner)) .fa-palette::before"
    ]
  ],
  [
    "design-00682",
    [
      "&:where(:has(#body-inner)) .fa-arrows-turn-right::before"
    ]
  ],
  [
    "design-00683",
    [
      "&:where(:has(#body-inner)) .fa-vest::before"
    ]
  ],
  [
    "design-00684",
    [
      "&:where(:has(#body-inner)) .fa-ferry::before"
    ]
  ],
  [
    "design-00685",
    [
      "&:where(:has(#body-inner)) .fa-arrows-down-to-people::before"
    ]
  ],
  [
    "design-00686",
    [
      "&:where(:has(#body-inner)) .fa-seedling::before",
      "&:where(:has(#body-inner)) .fa-sprout::before"
    ]
  ],
  [
    "design-00687",
    [
      "&:where(:has(#body-inner)) .fa-arrows-alt-h::before",
      "&:where(:has(#body-inner)) .fa-left-right::before"
    ]
  ],
  [
    "design-00688",
    [
      "&:where(:has(#body-inner)) .fa-boxes-packing::before"
    ]
  ],
  [
    "design-00689",
    [
      "&:where(:has(#body-inner)) .fa-arrow-circle-left::before",
      "&:where(:has(#body-inner)) .fa-circle-arrow-left::before"
    ]
  ],
  [
    "design-00690",
    [
      "&:where(:has(#body-inner)) .fa-group-arrows-rotate::before"
    ]
  ],
  [
    "design-00691",
    [
      "&:where(:has(#body-inner)) .fa-bowl-food::before"
    ]
  ],
  [
    "design-00692",
    [
      "&:where(:has(#body-inner)) .fa-candy-cane::before"
    ]
  ],
  [
    "design-00693",
    [
      "&:where(:has(#body-inner)) .fa-arrow-down-wide-short::before",
      "&:where(:has(#body-inner)) .fa-sort-amount-asc::before",
      "&:where(:has(#body-inner)) .fa-sort-amount-down::before"
    ]
  ],
  [
    "design-00694",
    [
      "&:where(:has(#body-inner)) .fa-cloud-bolt::before",
      "&:where(:has(#body-inner)) .fa-thunderstorm::before"
    ]
  ],
  [
    "design-00695",
    [
      "&:where(:has(#body-inner)) .fa-remove-format::before",
      "&:where(:has(#body-inner)) .fa-text-slash::before"
    ]
  ],
  [
    "design-00696",
    [
      "&:where(:has(#body-inner)) .fa-face-smile-wink::before",
      "&:where(:has(#body-inner)) .fa-smile-wink::before"
    ]
  ],
  [
    "design-00697",
    [
      "&:where(:has(#body-inner)) .fa-file-word::before"
    ]
  ],
  [
    "design-00698",
    [
      "&:where(:has(#body-inner)) .fa-file-powerpoint::before"
    ]
  ],
  [
    "design-00699",
    [
      "&:where(:has(#body-inner)) .fa-arrows-h::before",
      "&:where(:has(#body-inner)) .fa-arrows-left-right::before"
    ]
  ],
  [
    "design-00700",
    [
      "&:where(:has(#body-inner)) .fa-house-lock::before"
    ]
  ],
  [
    "design-00701",
    [
      "&:where(:has(#body-inner)) .fa-cloud-arrow-down::before",
      "&:where(:has(#body-inner)) .fa-cloud-download-alt::before",
      "&:where(:has(#body-inner)) .fa-cloud-download::before"
    ]
  ],
  [
    "design-00702",
    [
      "&:where(:has(#body-inner)) .fa-children::before"
    ]
  ],
  [
    "design-00703",
    [
      "&:where(:has(#body-inner)) .fa-blackboard::before",
      "&:where(:has(#body-inner)) .fa-chalkboard::before"
    ]
  ],
  [
    "design-00704",
    [
      "&:where(:has(#body-inner)) .fa-user-alt-slash::before",
      "&:where(:has(#body-inner)) .fa-user-large-slash::before"
    ]
  ],
  [
    "design-00705",
    [
      "&:where(:has(#body-inner)) .fa-envelope-open::before"
    ]
  ],
  [
    "design-00706",
    [
      "&:where(:has(#body-inner)) .fa-handshake-alt-slash::before",
      "&:where(:has(#body-inner)) .fa-handshake-simple-slash::before"
    ]
  ],
  [
    "design-00707",
    [
      "&:where(:has(#body-inner)) .fa-mattress-pillow::before"
    ]
  ],
  [
    "design-00708",
    [
      "&:where(:has(#body-inner)) .fa-guarani-sign::before"
    ]
  ],
  [
    "design-00709",
    [
      "&:where(:has(#body-inner)) .fa-arrows-rotate::before",
      "&:where(:has(#body-inner)) .fa-refresh::before",
      "&:where(:has(#body-inner)) .fa-sync::before"
    ]
  ],
  [
    "design-00710",
    [
      "&:where(:has(#body-inner)) .fa-fire-extinguisher::before"
    ]
  ],
  [
    "design-00711",
    [
      "&:where(:has(#body-inner)) .fa-cruzeiro-sign::before"
    ]
  ],
  [
    "design-00712",
    [
      "&:where(:has(#body-inner)) .fa-greater-than-equal::before"
    ]
  ],
  [
    "design-00713",
    [
      "&:where(:has(#body-inner)) .fa-shield-alt::before",
      "&:where(:has(#body-inner)) .fa-shield-halved::before"
    ]
  ],
  [
    "design-00714",
    [
      "&:where(:has(#body-inner)) .fa-atlas::before",
      "&:where(:has(#body-inner)) .fa-book-atlas::before"
    ]
  ],
  [
    "design-00715",
    [
      "&:where(:has(#body-inner)) .fa-virus::before"
    ]
  ],
  [
    "design-00716",
    [
      "&:where(:has(#body-inner)) .fa-envelope-circle-check::before"
    ]
  ],
  [
    "design-00717",
    [
      "&:where(:has(#body-inner)) .fa-layer-group::before"
    ]
  ],
  [
    "design-00718",
    [
      "&:where(:has(#body-inner)) .fa-arrows-to-dot::before"
    ]
  ],
  [
    "design-00719",
    [
      "&:where(:has(#body-inner)) .fa-archway::before"
    ]
  ],
  [
    "design-00720",
    [
      "&:where(:has(#body-inner)) .fa-heart-circle-check::before"
    ]
  ],
  [
    "design-00721",
    [
      "&:where(:has(#body-inner)) .fa-house-chimney-crack::before",
      "&:where(:has(#body-inner)) .fa-house-damage::before"
    ]
  ],
  [
    "design-00722",
    [
      "&:where(:has(#body-inner)) .fa-file-archive::before",
      "&:where(:has(#body-inner)) .fa-file-zipper::before"
    ]
  ],
  [
    "design-00723",
    [
      "&:where(:has(#body-inner)) .fa-square::before"
    ]
  ],
  [
    "design-00724",
    [
      "&:where(:has(#body-inner)) .fa-glass-martini::before",
      "&:where(:has(#body-inner)) .fa-martini-glass-empty::before"
    ]
  ],
  [
    "design-00725",
    [
      "&:where(:has(#body-inner)) .fa-couch::before"
    ]
  ],
  [
    "design-00726",
    [
      "&:where(:has(#body-inner)) .fa-cedi-sign::before"
    ]
  ],
  [
    "design-00727",
    [
      "&:where(:has(#body-inner)) .fa-italic::before"
    ]
  ],
  [
    "design-00728",
    [
      "&:where(:has(#body-inner)) .fa-table-cells-column-lock::before"
    ]
  ],
  [
    "design-00729",
    [
      "&:where(:has(#body-inner)) .fa-church::before"
    ]
  ],
  [
    "design-00730",
    [
      "&:where(:has(#body-inner)) .fa-comments-dollar::before"
    ]
  ],
  [
    "design-00731",
    [
      "&:where(:has(#body-inner)) .fa-democrat::before"
    ]
  ],
  [
    "design-00732",
    [
      "&:where(:has(#body-inner)) .fa-z::before"
    ]
  ],
  [
    "design-00733",
    [
      "&:where(:has(#body-inner)) .fa-person-skiing::before",
      "&:where(:has(#body-inner)) .fa-skiing::before"
    ]
  ],
  [
    "design-00734",
    [
      "&:where(:has(#body-inner)) .fa-road-lock::before"
    ]
  ],
  [
    "design-00735",
    [
      "&:where(:has(#body-inner)) .fa-a::before"
    ]
  ],
  [
    "design-00736",
    [
      "&:where(:has(#body-inner)) .fa-temperature-arrow-down::before",
      "&:where(:has(#body-inner)) .fa-temperature-down::before"
    ]
  ],
  [
    "design-00737",
    [
      "&:where(:has(#body-inner)) .fa-feather-alt::before",
      "&:where(:has(#body-inner)) .fa-feather-pointed::before"
    ]
  ],
  [
    "design-00738",
    [
      "&:where(:has(#body-inner)) .fa-p::before"
    ]
  ],
  [
    "design-00739",
    [
      "&:where(:has(#body-inner)) .fa-snowflake::before"
    ]
  ],
  [
    "design-00740",
    [
      "&:where(:has(#body-inner)) .fa-newspaper::before"
    ]
  ],
  [
    "design-00741",
    [
      "&:where(:has(#body-inner)) .fa-ad::before",
      "&:where(:has(#body-inner)) .fa-rectangle-ad::before"
    ]
  ],
  [
    "design-00742",
    [
      "&:where(:has(#body-inner)) .fa-arrow-circle-right::before",
      "&:where(:has(#body-inner)) .fa-circle-arrow-right::before"
    ]
  ],
  [
    "design-00743",
    [
      "&:where(:has(#body-inner)) .fa-filter-circle-xmark::before"
    ]
  ],
  [
    "design-00744",
    [
      "&:where(:has(#body-inner)) .fa-locust::before"
    ]
  ],
  [
    "design-00745",
    [
      "&:where(:has(#body-inner)) .fa-sort::before",
      "&:where(:has(#body-inner)) .fa-unsorted::before"
    ]
  ],
  [
    "design-00746",
    [
      "&:where(:has(#body-inner)) .fa-list-1-2::before",
      "&:where(:has(#body-inner)) .fa-list-numeric::before",
      "&:where(:has(#body-inner)) .fa-list-ol::before"
    ]
  ],
  [
    "design-00747",
    [
      "&:where(:has(#body-inner)) .fa-person-dress-burst::before"
    ]
  ],
  [
    "design-00748",
    [
      "&:where(:has(#body-inner)) .fa-money-check-alt::before",
      "&:where(:has(#body-inner)) .fa-money-check-dollar::before"
    ]
  ],
  [
    "design-00749",
    [
      "&:where(:has(#body-inner)) .fa-vector-square::before"
    ]
  ],
  [
    "design-00750",
    [
      "&:where(:has(#body-inner)) .fa-bread-slice::before"
    ]
  ],
  [
    "design-00751",
    [
      "&:where(:has(#body-inner)) .fa-language::before"
    ]
  ],
  [
    "design-00752",
    [
      "&:where(:has(#body-inner)) .fa-face-kiss-wink-heart::before",
      "&:where(:has(#body-inner)) .fa-kiss-wink-heart::before"
    ]
  ],
  [
    "design-00753",
    [
      "&:where(:has(#body-inner)) .fa-filter::before"
    ]
  ],
  [
    "design-00754",
    [
      "&:where(:has(#body-inner)) .fa-question::before"
    ]
  ],
  [
    "design-00755",
    [
      "&:where(:has(#body-inner)) .fa-file-signature::before"
    ]
  ],
  [
    "design-00756",
    [
      "&:where(:has(#body-inner)) .fa-arrows-alt::before",
      "&:where(:has(#body-inner)) .fa-up-down-left-right::before"
    ]
  ],
  [
    "design-00757",
    [
      "&:where(:has(#body-inner)) .fa-house-chimney-user::before"
    ]
  ],
  [
    "design-00758",
    [
      "&:where(:has(#body-inner)) .fa-hand-holding-heart::before"
    ]
  ],
  [
    "design-00759",
    [
      "&:where(:has(#body-inner)) .fa-puzzle-piece::before"
    ]
  ],
  [
    "design-00760",
    [
      "&:where(:has(#body-inner)) .fa-money-check::before"
    ]
  ],
  [
    "design-00761",
    [
      "&:where(:has(#body-inner)) .fa-star-half-alt::before",
      "&:where(:has(#body-inner)) .fa-star-half-stroke::before"
    ]
  ],
  [
    "design-00762",
    [
      "&:where(:has(#body-inner)) .fa-code::before"
    ]
  ],
  [
    "design-00763",
    [
      "&:where(:has(#body-inner)) .fa-glass-whiskey::before",
      "&:where(:has(#body-inner)) .fa-whiskey-glass::before"
    ]
  ],
  [
    "design-00764",
    [
      "&:where(:has(#body-inner)) .fa-building-circle-exclamation::before"
    ]
  ],
  [
    "design-00765",
    [
      "&:where(:has(#body-inner)) .fa-magnifying-glass-chart::before"
    ]
  ],
  [
    "design-00766",
    [
      "&:where(:has(#body-inner)) .fa-arrow-up-right-from-square::before",
      "&:where(:has(#body-inner)) .fa-external-link::before"
    ]
  ],
  [
    "design-00767",
    [
      "&:where(:has(#body-inner)) .fa-cubes-stacked::before"
    ]
  ],
  [
    "design-00768",
    [
      "&:where(:has(#body-inner)) .fa-krw::before",
      "&:where(:has(#body-inner)) .fa-won-sign::before",
      "&:where(:has(#body-inner)) .fa-won::before"
    ]
  ],
  [
    "design-00769",
    [
      "&:where(:has(#body-inner)) .fa-virus-covid::before"
    ]
  ],
  [
    "design-00770",
    [
      "&:where(:has(#body-inner)) .fa-austral-sign::before"
    ]
  ],
  [
    "design-00771",
    [
      "&:where(:has(#body-inner)) .fa-f::before"
    ]
  ],
  [
    "design-00772",
    [
      "&:where(:has(#body-inner)) .fa-leaf::before"
    ]
  ],
  [
    "design-00773",
    [
      "&:where(:has(#body-inner)) .fa-road::before"
    ]
  ],
  [
    "design-00774",
    [
      "&:where(:has(#body-inner)) .fa-cab::before",
      "&:where(:has(#body-inner)) .fa-taxi::before"
    ]
  ],
  [
    "design-00775",
    [
      "&:where(:has(#body-inner)) .fa-person-circle-plus::before"
    ]
  ],
  [
    "design-00776",
    [
      "&:where(:has(#body-inner)) .fa-chart-pie::before",
      "&:where(:has(#body-inner)) .fa-pie-chart::before"
    ]
  ],
  [
    "design-00777",
    [
      "&:where(:has(#body-inner)) .fa-bolt-lightning::before"
    ]
  ],
  [
    "design-00778",
    [
      "&:where(:has(#body-inner)) .fa-sack-xmark::before"
    ]
  ],
  [
    "design-00779",
    [
      "&:where(:has(#body-inner)) .fa-file-excel::before"
    ]
  ],
  [
    "design-00780",
    [
      "&:where(:has(#body-inner)) .fa-file-contract::before"
    ]
  ],
  [
    "design-00781",
    [
      "&:where(:has(#body-inner)) .fa-fish-fins::before"
    ]
  ],
  [
    "design-00782",
    [
      "&:where(:has(#body-inner)) .fa-building-flag::before"
    ]
  ],
  [
    "design-00783",
    [
      "&:where(:has(#body-inner)) .fa-face-grin-beam::before",
      "&:where(:has(#body-inner)) .fa-grin-beam::before"
    ]
  ],
  [
    "design-00784",
    [
      "&:where(:has(#body-inner)) .fa-object-ungroup::before"
    ]
  ],
  [
    "design-00785",
    [
      "&:where(:has(#body-inner)) .fa-poop::before"
    ]
  ],
  [
    "design-00786",
    [
      "&:where(:has(#body-inner)) .fa-location-pin::before",
      "&:where(:has(#body-inner)) .fa-map-marker::before"
    ]
  ],
  [
    "design-00787",
    [
      "&:where(:has(#body-inner)) .fa-kaaba::before"
    ]
  ],
  [
    "design-00788",
    [
      "&:where(:has(#body-inner)) .fa-toilet-paper::before"
    ]
  ],
  [
    "design-00789",
    [
      "&:where(:has(#body-inner)) .fa-hard-hat::before",
      "&:where(:has(#body-inner)) .fa-hat-hard::before",
      "&:where(:has(#body-inner)) .fa-helmet-safety::before"
    ]
  ],
  [
    "design-00790",
    [
      "&:where(:has(#body-inner)) .fa-eject::before"
    ]
  ],
  [
    "design-00791",
    [
      "&:where(:has(#body-inner)) .fa-arrow-alt-circle-right::before",
      "&:where(:has(#body-inner)) .fa-circle-right::before"
    ]
  ],
  [
    "design-00792",
    [
      "&:where(:has(#body-inner)) .fa-plane-circle-check::before"
    ]
  ],
  [
    "design-00793",
    [
      "&:where(:has(#body-inner)) .fa-face-rolling-eyes::before",
      "&:where(:has(#body-inner)) .fa-meh-rolling-eyes::before"
    ]
  ],
  [
    "design-00794",
    [
      "&:where(:has(#body-inner)) .fa-object-group::before"
    ]
  ],
  [
    "design-00795",
    [
      "&:where(:has(#body-inner)) .fa-chart-line::before",
      "&:where(:has(#body-inner)) .fa-line-chart::before"
    ]
  ],
  [
    "design-00796",
    [
      "&:where(:has(#body-inner)) .fa-mask-ventilator::before"
    ]
  ],
  [
    "design-00797",
    [
      "&:where(:has(#body-inner)) .fa-arrow-right::before"
    ]
  ],
  [
    "design-00798",
    [
      "&:where(:has(#body-inner)) .fa-map-signs::before",
      "&:where(:has(#body-inner)) .fa-signs-post::before"
    ]
  ],
  [
    "design-00799",
    [
      "&:where(:has(#body-inner)) .fa-cash-register::before"
    ]
  ],
  [
    "design-00800",
    [
      "&:where(:has(#body-inner)) .fa-person-circle-question::before"
    ]
  ],
  [
    "design-00801",
    [
      "&:where(:has(#body-inner)) .fa-h::before"
    ]
  ],
  [
    "design-00802",
    [
      "&:where(:has(#body-inner)) .fa-tarp::before"
    ]
  ],
  [
    "design-00803",
    [
      "&:where(:has(#body-inner)) .fa-screwdriver-wrench::before",
      "&:where(:has(#body-inner)) .fa-tools::before"
    ]
  ],
  [
    "design-00804",
    [
      "&:where(:has(#body-inner)) .fa-arrows-to-eye::before"
    ]
  ],
  [
    "design-00805",
    [
      "&:where(:has(#body-inner)) .fa-plug-circle-bolt::before"
    ]
  ],
  [
    "design-00806",
    [
      "&:where(:has(#body-inner)) .fa-heart::before"
    ]
  ],
  [
    "design-00807",
    [
      "&:where(:has(#body-inner)) .fa-mars-and-venus::before"
    ]
  ],
  [
    "design-00808",
    [
      "&:where(:has(#body-inner)) .fa-home-user::before",
      "&:where(:has(#body-inner)) .fa-house-user::before"
    ]
  ],
  [
    "design-00809",
    [
      "&:where(:has(#body-inner)) .fa-dumpster-fire::before"
    ]
  ],
  [
    "design-00810",
    [
      "&:where(:has(#body-inner)) .fa-house-crack::before"
    ]
  ],
  [
    "design-00811",
    [
      "&:where(:has(#body-inner)) .fa-cocktail::before",
      "&:where(:has(#body-inner)) .fa-martini-glass-citrus::before"
    ]
  ],
  [
    "design-00812",
    [
      "&:where(:has(#body-inner)) .fa-face-surprise::before",
      "&:where(:has(#body-inner)) .fa-surprise::before"
    ]
  ],
  [
    "design-00813",
    [
      "&:where(:has(#body-inner)) .fa-bottle-water::before"
    ]
  ],
  [
    "design-00814",
    [
      "&:where(:has(#body-inner)) .fa-circle-pause::before",
      "&:where(:has(#body-inner)) .fa-pause-circle::before"
    ]
  ],
  [
    "design-00815",
    [
      "&:where(:has(#body-inner)) .fa-toilet-paper-slash::before"
    ]
  ],
  [
    "design-00816",
    [
      "&:where(:has(#body-inner)) .fa-apple-alt::before",
      "&:where(:has(#body-inner)) .fa-apple-whole::before"
    ]
  ],
  [
    "design-00817",
    [
      "&:where(:has(#body-inner)) .fa-kitchen-set::before"
    ]
  ],
  [
    "design-00818",
    [
      "&:where(:has(#body-inner)) .fa-r::before"
    ]
  ],
  [
    "design-00819",
    [
      "&:where(:has(#body-inner)) .fa-temperature-1::before",
      "&:where(:has(#body-inner)) .fa-temperature-quarter::before",
      "&:where(:has(#body-inner)) .fa-thermometer-1::before",
      "&:where(:has(#body-inner)) .fa-thermometer-quarter::before"
    ]
  ],
  [
    "design-00820",
    [
      "&:where(:has(#body-inner)) .fa-cube::before"
    ]
  ],
  [
    "design-00821",
    [
      "&:where(:has(#body-inner)) .fa-bitcoin-sign::before"
    ]
  ],
  [
    "design-00822",
    [
      "&:where(:has(#body-inner)) .fa-shield-dog::before"
    ]
  ],
  [
    "design-00823",
    [
      "&:where(:has(#body-inner)) .fa-solar-panel::before"
    ]
  ],
  [
    "design-00824",
    [
      "&:where(:has(#body-inner)) .fa-lock-open::before"
    ]
  ],
  [
    "design-00825",
    [
      "&:where(:has(#body-inner)) .fa-elevator::before"
    ]
  ],
  [
    "design-00826",
    [
      "&:where(:has(#body-inner)) .fa-money-bill-transfer::before"
    ]
  ],
  [
    "design-00827",
    [
      "&:where(:has(#body-inner)) .fa-money-bill-trend-up::before"
    ]
  ],
  [
    "design-00828",
    [
      "&:where(:has(#body-inner)) .fa-house-flood-water-circle-arrow-right::before"
    ]
  ],
  [
    "design-00829",
    [
      "&:where(:has(#body-inner)) .fa-poll-h::before",
      "&:where(:has(#body-inner)) .fa-square-poll-horizontal::before"
    ]
  ],
  [
    "design-00830",
    [
      "&:where(:has(#body-inner)) .fa-circle::before"
    ]
  ],
  [
    "design-00831",
    [
      "&:where(:has(#body-inner)) .fa-backward-fast::before",
      "&:where(:has(#body-inner)) .fa-fast-backward::before"
    ]
  ],
  [
    "design-00832",
    [
      "&:where(:has(#body-inner)) .fa-recycle::before"
    ]
  ],
  [
    "design-00833",
    [
      "&:where(:has(#body-inner)) .fa-user-astronaut::before"
    ]
  ],
  [
    "design-00834",
    [
      "&:where(:has(#body-inner)) .fa-plane-slash::before"
    ]
  ],
  [
    "design-00835",
    [
      "&:where(:has(#body-inner)) .fa-trademark::before"
    ]
  ],
  [
    "design-00836",
    [
      "&:where(:has(#body-inner)) .fa-basketball-ball::before",
      "&:where(:has(#body-inner)) .fa-basketball::before"
    ]
  ],
  [
    "design-00837",
    [
      "&:where(:has(#body-inner)) .fa-satellite-dish::before"
    ]
  ],
  [
    "design-00838",
    [
      "&:where(:has(#body-inner)) .fa-arrow-alt-circle-up::before",
      "&:where(:has(#body-inner)) .fa-circle-up::before"
    ]
  ],
  [
    "design-00839",
    [
      "&:where(:has(#body-inner)) .fa-mobile-alt::before",
      "&:where(:has(#body-inner)) .fa-mobile-screen-button::before"
    ]
  ],
  [
    "design-00840",
    [
      "&:where(:has(#body-inner)) .fa-volume-high::before",
      "&:where(:has(#body-inner)) .fa-volume-up::before"
    ]
  ],
  [
    "design-00841",
    [
      "&:where(:has(#body-inner)) .fa-users-rays::before"
    ]
  ],
  [
    "design-00842",
    [
      "&:where(:has(#body-inner)) .fa-wallet::before"
    ]
  ],
  [
    "design-00843",
    [
      "&:where(:has(#body-inner)) .fa-clipboard-check::before"
    ]
  ],
  [
    "design-00844",
    [
      "&:where(:has(#body-inner)) .fa-file-audio::before"
    ]
  ],
  [
    "design-00845",
    [
      "&:where(:has(#body-inner)) .fa-burger::before",
      "&:where(:has(#body-inner)) .fa-hamburger::before"
    ]
  ],
  [
    "design-00846",
    [
      "&:where(:has(#body-inner)) .fa-wrench::before"
    ]
  ],
  [
    "design-00847",
    [
      "&:where(:has(#body-inner)) .fa-bugs::before"
    ]
  ],
  [
    "design-00848",
    [
      "&:where(:has(#body-inner)) .fa-rupee-sign::before",
      "&:where(:has(#body-inner)) .fa-rupee::before"
    ]
  ],
  [
    "design-00849",
    [
      "&:where(:has(#body-inner)) .fa-file-image::before"
    ]
  ],
  [
    "design-00850",
    [
      "&:where(:has(#body-inner)) .fa-circle-question::before",
      "&:where(:has(#body-inner)) .fa-question-circle::before"
    ]
  ],
  [
    "design-00851",
    [
      "&:where(:has(#body-inner)) .fa-plane-departure::before"
    ]
  ],
  [
    "design-00852",
    [
      "&:where(:has(#body-inner)) .fa-handshake-slash::before"
    ]
  ],
  [
    "design-00853",
    [
      "&:where(:has(#body-inner)) .fa-book-bookmark::before"
    ]
  ],
  [
    "design-00854",
    [
      "&:where(:has(#body-inner)) .fa-code-branch::before"
    ]
  ],
  [
    "design-00855",
    [
      "&:where(:has(#body-inner)) .fa-hat-cowboy::before"
    ]
  ],
  [
    "design-00856",
    [
      "&:where(:has(#body-inner)) .fa-bridge::before"
    ]
  ],
  [
    "design-00857",
    [
      "&:where(:has(#body-inner)) .fa-phone-alt::before",
      "&:where(:has(#body-inner)) .fa-phone-flip::before"
    ]
  ],
  [
    "design-00858",
    [
      "&:where(:has(#body-inner)) .fa-truck-front::before"
    ]
  ],
  [
    "design-00859",
    [
      "&:where(:has(#body-inner)) .fa-cat::before"
    ]
  ],
  [
    "design-00860",
    [
      "&:where(:has(#body-inner)) .fa-anchor-circle-exclamation::before"
    ]
  ],
  [
    "design-00861",
    [
      "&:where(:has(#body-inner)) .fa-truck-field::before"
    ]
  ],
  [
    "design-00862",
    [
      "&:where(:has(#body-inner)) .fa-route::before"
    ]
  ],
  [
    "design-00863",
    [
      "&:where(:has(#body-inner)) .fa-clipboard-question::before"
    ]
  ],
  [
    "design-00864",
    [
      "&:where(:has(#body-inner)) .fa-panorama::before"
    ]
  ],
  [
    "design-00865",
    [
      "&:where(:has(#body-inner)) .fa-comment-medical::before"
    ]
  ],
  [
    "design-00866",
    [
      "&:where(:has(#body-inner)) .fa-teeth-open::before"
    ]
  ],
  [
    "design-00867",
    [
      "&:where(:has(#body-inner)) .fa-file-circle-minus::before"
    ]
  ],
  [
    "design-00868",
    [
      "&:where(:has(#body-inner)) .fa-tags::before"
    ]
  ],
  [
    "design-00869",
    [
      "&:where(:has(#body-inner)) .fa-wine-glass::before"
    ]
  ],
  [
    "design-00870",
    [
      "&:where(:has(#body-inner)) .fa-fast-forward::before",
      "&:where(:has(#body-inner)) .fa-forward-fast::before"
    ]
  ],
  [
    "design-00871",
    [
      "&:where(:has(#body-inner)) .fa-face-meh-blank::before",
      "&:where(:has(#body-inner)) .fa-meh-blank::before"
    ]
  ],
  [
    "design-00872",
    [
      "&:where(:has(#body-inner)) .fa-parking::before",
      "&:where(:has(#body-inner)) .fa-square-parking::before"
    ]
  ],
  [
    "design-00873",
    [
      "&:where(:has(#body-inner)) .fa-house-signal::before"
    ]
  ],
  [
    "design-00874",
    [
      "&:where(:has(#body-inner)) .fa-bars-progress::before",
      "&:where(:has(#body-inner)) .fa-tasks-alt::before"
    ]
  ],
  [
    "design-00875",
    [
      "&:where(:has(#body-inner)) .fa-faucet-drip::before"
    ]
  ],
  [
    "design-00876",
    [
      "&:where(:has(#body-inner)) .fa-cart-flatbed::before",
      "&:where(:has(#body-inner)) .fa-dolly-flatbed::before"
    ]
  ],
  [
    "design-00877",
    [
      "&:where(:has(#body-inner)) .fa-ban-smoking::before",
      "&:where(:has(#body-inner)) .fa-smoking-ban::before"
    ]
  ],
  [
    "design-00878",
    [
      "&:where(:has(#body-inner)) .fa-terminal::before"
    ]
  ],
  [
    "design-00879",
    [
      "&:where(:has(#body-inner)) .fa-mobile-button::before"
    ]
  ],
  [
    "design-00880",
    [
      "&:where(:has(#body-inner)) .fa-house-medical-flag::before"
    ]
  ],
  [
    "design-00881",
    [
      "&:where(:has(#body-inner)) .fa-basket-shopping::before",
      "&:where(:has(#body-inner)) .fa-shopping-basket::before"
    ]
  ],
  [
    "design-00882",
    [
      "&:where(:has(#body-inner)) .fa-tape::before"
    ]
  ],
  [
    "design-00883",
    [
      "&:where(:has(#body-inner)) .fa-bus-alt::before",
      "&:where(:has(#body-inner)) .fa-bus-simple::before"
    ]
  ],
  [
    "design-00884",
    [
      "&:where(:has(#body-inner)) .fa-eye::before"
    ]
  ],
  [
    "design-00885",
    [
      "&:where(:has(#body-inner)) .fa-face-sad-cry::before",
      "&:where(:has(#body-inner)) .fa-sad-cry::before"
    ]
  ],
  [
    "design-00886",
    [
      "&:where(:has(#body-inner)) .fa-audio-description::before"
    ]
  ],
  [
    "design-00887",
    [
      "&:where(:has(#body-inner)) .fa-person-military-to-person::before"
    ]
  ],
  [
    "design-00888",
    [
      "&:where(:has(#body-inner)) .fa-file-shield::before"
    ]
  ],
  [
    "design-00889",
    [
      "&:where(:has(#body-inner)) .fa-user-slash::before"
    ]
  ],
  [
    "design-00890",
    [
      "&:where(:has(#body-inner)) .fa-pen::before"
    ]
  ],
  [
    "design-00891",
    [
      "&:where(:has(#body-inner)) .fa-tower-observation::before"
    ]
  ],
  [
    "design-00892",
    [
      "&:where(:has(#body-inner)) .fa-file-code::before"
    ]
  ],
  [
    "design-00893",
    [
      "&:where(:has(#body-inner)) .fa-signal-5::before",
      "&:where(:has(#body-inner)) .fa-signal-perfect::before",
      "&:where(:has(#body-inner)) .fa-signal::before"
    ]
  ],
  [
    "design-00894",
    [
      "&:where(:has(#body-inner)) .fa-bus::before"
    ]
  ],
  [
    "design-00895",
    [
      "&:where(:has(#body-inner)) .fa-heart-circle-xmark::before"
    ]
  ],
  [
    "design-00896",
    [
      "&:where(:has(#body-inner)) .fa-home-lg::before",
      "&:where(:has(#body-inner)) .fa-house-chimney::before"
    ]
  ],
  [
    "design-00897",
    [
      "&:where(:has(#body-inner)) .fa-window-maximize::before"
    ]
  ],
  [
    "design-00898",
    [
      "&:where(:has(#body-inner)) .fa-face-frown::before",
      "&:where(:has(#body-inner)) .fa-frown::before"
    ]
  ],
  [
    "design-00899",
    [
      "&:where(:has(#body-inner)) .fa-prescription::before"
    ]
  ],
  [
    "design-00900",
    [
      "&:where(:has(#body-inner)) .fa-shop::before",
      "&:where(:has(#body-inner)) .fa-store-alt::before"
    ]
  ],
  [
    "design-00901",
    [
      "&:where(:has(#body-inner)) .fa-floppy-disk::before",
      "&:where(:has(#body-inner)) .fa-save::before"
    ]
  ],
  [
    "design-00902",
    [
      "&:where(:has(#body-inner)) .fa-vihara::before"
    ]
  ],
  [
    "design-00903",
    [
      "&:where(:has(#body-inner)) .fa-balance-scale-left::before",
      "&:where(:has(#body-inner)) .fa-scale-unbalanced::before"
    ]
  ],
  [
    "design-00904",
    [
      "&:where(:has(#body-inner)) .fa-sort-asc::before",
      "&:where(:has(#body-inner)) .fa-sort-up::before"
    ]
  ],
  [
    "design-00905",
    [
      "&:where(:has(#body-inner)) .fa-comment-dots::before",
      "&:where(:has(#body-inner)) .fa-commenting::before"
    ]
  ],
  [
    "design-00906",
    [
      "&:where(:has(#body-inner)) .fa-plant-wilt::before"
    ]
  ],
  [
    "design-00907",
    [
      "&:where(:has(#body-inner)) .fa-diamond::before"
    ]
  ],
  [
    "design-00908",
    [
      "&:where(:has(#body-inner)) .fa-face-grin-squint::before",
      "&:where(:has(#body-inner)) .fa-grin-squint::before"
    ]
  ],
  [
    "design-00909",
    [
      "&:where(:has(#body-inner)) .fa-hand-holding-dollar::before",
      "&:where(:has(#body-inner)) .fa-hand-holding-usd::before"
    ]
  ],
  [
    "design-00910",
    [
      "&:where(:has(#body-inner)) .fa-bacterium::before"
    ]
  ],
  [
    "design-00911",
    [
      "&:where(:has(#body-inner)) .fa-hand-pointer::before"
    ]
  ],
  [
    "design-00912",
    [
      "&:where(:has(#body-inner)) .fa-drum-steelpan::before"
    ]
  ],
  [
    "design-00913",
    [
      "&:where(:has(#body-inner)) .fa-hand-scissors::before"
    ]
  ],
  [
    "design-00914",
    [
      "&:where(:has(#body-inner)) .fa-hands-praying::before",
      "&:where(:has(#body-inner)) .fa-praying-hands::before"
    ]
  ],
  [
    "design-00915",
    [
      "&:where(:has(#body-inner)) .fa-arrow-right-rotate::before",
      "&:where(:has(#body-inner)) .fa-arrow-rotate-forward::before",
      "&:where(:has(#body-inner)) .fa-arrow-rotate-right::before",
      "&:where(:has(#body-inner)) .fa-redo::before"
    ]
  ],
  [
    "design-00916",
    [
      "&:where(:has(#body-inner)) .fa-biohazard::before"
    ]
  ],
  [
    "design-00917",
    [
      "&:where(:has(#body-inner)) .fa-location-crosshairs::before",
      "&:where(:has(#body-inner)) .fa-location::before"
    ]
  ],
  [
    "design-00918",
    [
      "&:where(:has(#body-inner)) .fa-mars-double::before"
    ]
  ],
  [
    "design-00919",
    [
      "&:where(:has(#body-inner)) .fa-child-dress::before"
    ]
  ],
  [
    "design-00920",
    [
      "&:where(:has(#body-inner)) .fa-users-between-lines::before"
    ]
  ],
  [
    "design-00921",
    [
      "&:where(:has(#body-inner)) .fa-lungs-virus::before"
    ]
  ],
  [
    "design-00922",
    [
      "&:where(:has(#body-inner)) .fa-face-grin-tears::before",
      "&:where(:has(#body-inner)) .fa-grin-tears::before"
    ]
  ],
  [
    "design-00923",
    [
      "&:where(:has(#body-inner)) .fa-phone::before"
    ]
  ],
  [
    "design-00924",
    [
      "&:where(:has(#body-inner)) .fa-calendar-times::before",
      "&:where(:has(#body-inner)) .fa-calendar-xmark::before"
    ]
  ],
  [
    "design-00925",
    [
      "&:where(:has(#body-inner)) .fa-child-reaching::before"
    ]
  ],
  [
    "design-00926",
    [
      "&:where(:has(#body-inner)) .fa-head-side-virus::before"
    ]
  ],
  [
    "design-00927",
    [
      "&:where(:has(#body-inner)) .fa-user-cog::before",
      "&:where(:has(#body-inner)) .fa-user-gear::before"
    ]
  ],
  [
    "design-00928",
    [
      "&:where(:has(#body-inner)) .fa-arrow-up-1-9::before",
      "&:where(:has(#body-inner)) .fa-sort-numeric-up::before"
    ]
  ],
  [
    "design-00929",
    [
      "&:where(:has(#body-inner)) .fa-door-closed::before"
    ]
  ],
  [
    "design-00930",
    [
      "&:where(:has(#body-inner)) .fa-shield-virus::before"
    ]
  ],
  [
    "design-00931",
    [
      "&:where(:has(#body-inner)) .fa-dice-six::before"
    ]
  ],
  [
    "design-00932",
    [
      "&:where(:has(#body-inner)) .fa-mosquito-net::before"
    ]
  ],
  [
    "design-00933",
    [
      "&:where(:has(#body-inner)) .fa-bridge-water::before"
    ]
  ],
  [
    "design-00934",
    [
      "&:where(:has(#body-inner)) .fa-person-booth::before"
    ]
  ],
  [
    "design-00935",
    [
      "&:where(:has(#body-inner)) .fa-text-width::before"
    ]
  ],
  [
    "design-00936",
    [
      "&:where(:has(#body-inner)) .fa-hat-wizard::before"
    ]
  ],
  [
    "design-00937",
    [
      "&:where(:has(#body-inner)) .fa-pen-fancy::before"
    ]
  ],
  [
    "design-00938",
    [
      "&:where(:has(#body-inner)) .fa-digging::before",
      "&:where(:has(#body-inner)) .fa-person-digging::before"
    ]
  ],
  [
    "design-00939",
    [
      "&:where(:has(#body-inner)) .fa-trash::before"
    ]
  ],
  [
    "design-00940",
    [
      "&:where(:has(#body-inner)) .fa-gauge-simple-med::before",
      "&:where(:has(#body-inner)) .fa-gauge-simple::before",
      "&:where(:has(#body-inner)) .fa-tachometer-average::before"
    ]
  ],
  [
    "design-00941",
    [
      "&:where(:has(#body-inner)) .fa-book-medical::before"
    ]
  ],
  [
    "design-00942",
    [
      "&:where(:has(#body-inner)) .fa-poo::before"
    ]
  ],
  [
    "design-00943",
    [
      "&:where(:has(#body-inner)) .fa-quote-right-alt::before",
      "&:where(:has(#body-inner)) .fa-quote-right::before"
    ]
  ],
  [
    "design-00944",
    [
      "&:where(:has(#body-inner)) .fa-shirt::before",
      "&:where(:has(#body-inner)) .fa-t-shirt::before",
      "&:where(:has(#body-inner)) .fa-tshirt::before"
    ]
  ],
  [
    "design-00945",
    [
      "&:where(:has(#body-inner)) .fa-cubes::before"
    ]
  ],
  [
    "design-00946",
    [
      "&:where(:has(#body-inner)) .fa-divide::before"
    ]
  ],
  [
    "design-00947",
    [
      "&:where(:has(#body-inner)) .fa-tenge-sign::before",
      "&:where(:has(#body-inner)) .fa-tenge::before"
    ]
  ],
  [
    "design-00948",
    [
      "&:where(:has(#body-inner)) .fa-headphones::before"
    ]
  ],
  [
    "design-00949",
    [
      "&:where(:has(#body-inner)) .fa-hands-holding::before"
    ]
  ],
  [
    "design-00950",
    [
      "&:where(:has(#body-inner)) .fa-hands-clapping::before"
    ]
  ],
  [
    "design-00951",
    [
      "&:where(:has(#body-inner)) .fa-republican::before"
    ]
  ],
  [
    "design-00952",
    [
      "&:where(:has(#body-inner)) .fa-arrow-left::before"
    ]
  ],
  [
    "design-00953",
    [
      "&:where(:has(#body-inner)) .fa-person-circle-xmark::before"
    ]
  ],
  [
    "design-00954",
    [
      "&:where(:has(#body-inner)) .fa-ruler::before"
    ]
  ],
  [
    "design-00955",
    [
      "&:where(:has(#body-inner)) .fa-align-left::before"
    ]
  ],
  [
    "design-00956",
    [
      "&:where(:has(#body-inner)) .fa-dice-d6::before"
    ]
  ],
  [
    "design-00957",
    [
      "&:where(:has(#body-inner)) .fa-restroom::before"
    ]
  ],
  [
    "design-00958",
    [
      "&:where(:has(#body-inner)) .fa-j::before"
    ]
  ],
  [
    "design-00959",
    [
      "&:where(:has(#body-inner)) .fa-users-viewfinder::before"
    ]
  ],
  [
    "design-00960",
    [
      "&:where(:has(#body-inner)) .fa-file-video::before"
    ]
  ],
  [
    "design-00961",
    [
      "&:where(:has(#body-inner)) .fa-external-link-alt::before",
      "&:where(:has(#body-inner)) .fa-up-right-from-square::before"
    ]
  ],
  [
    "design-00962",
    [
      "&:where(:has(#body-inner)) .fa-table-cells::before",
      "&:where(:has(#body-inner)) .fa-th::before"
    ]
  ],
  [
    "design-00963",
    [
      "&:where(:has(#body-inner)) .fa-file-pdf::before"
    ]
  ],
  [
    "design-00964",
    [
      "&:where(:has(#body-inner)) .fa-bible::before",
      "&:where(:has(#body-inner)) .fa-book-bible::before"
    ]
  ],
  [
    "design-00965",
    [
      "&:where(:has(#body-inner)) .fa-o::before"
    ]
  ],
  [
    "design-00966",
    [
      "&:where(:has(#body-inner)) .fa-medkit::before",
      "&:where(:has(#body-inner)) .fa-suitcase-medical::before"
    ]
  ],
  [
    "design-00967",
    [
      "&:where(:has(#body-inner)) .fa-user-secret::before"
    ]
  ],
  [
    "design-00968",
    [
      "&:where(:has(#body-inner)) .fa-otter::before"
    ]
  ],
  [
    "design-00969",
    [
      "&:where(:has(#body-inner)) .fa-female::before",
      "&:where(:has(#body-inner)) .fa-person-dress::before"
    ]
  ],
  [
    "design-00970",
    [
      "&:where(:has(#body-inner)) .fa-comment-dollar::before"
    ]
  ],
  [
    "design-00971",
    [
      "&:where(:has(#body-inner)) .fa-briefcase-clock::before",
      "&:where(:has(#body-inner)) .fa-business-time::before"
    ]
  ],
  [
    "design-00972",
    [
      "&:where(:has(#body-inner)) .fa-table-cells-large::before",
      "&:where(:has(#body-inner)) .fa-th-large::before"
    ]
  ],
  [
    "design-00973",
    [
      "&:where(:has(#body-inner)) .fa-book-tanakh::before",
      "&:where(:has(#body-inner)) .fa-tanakh::before"
    ]
  ],
  [
    "design-00974",
    [
      "&:where(:has(#body-inner)) .fa-phone-volume::before",
      "&:where(:has(#body-inner)) .fa-volume-control-phone::before"
    ]
  ],
  [
    "design-00975",
    [
      "&:where(:has(#body-inner)) .fa-hat-cowboy-side::before"
    ]
  ],
  [
    "design-00976",
    [
      "&:where(:has(#body-inner)) .fa-clipboard-user::before"
    ]
  ],
  [
    "design-00977",
    [
      "&:where(:has(#body-inner)) .fa-child::before"
    ]
  ],
  [
    "design-00978",
    [
      "&:where(:has(#body-inner)) .fa-lira-sign::before"
    ]
  ],
  [
    "design-00979",
    [
      "&:where(:has(#body-inner)) .fa-satellite::before"
    ]
  ],
  [
    "design-00980",
    [
      "&:where(:has(#body-inner)) .fa-plane-lock::before"
    ]
  ],
  [
    "design-00981",
    [
      "&:where(:has(#body-inner)) .fa-tag::before"
    ]
  ],
  [
    "design-00982",
    [
      "&:where(:has(#body-inner)) .fa-comment::before"
    ]
  ],
  [
    "design-00983",
    [
      "&:where(:has(#body-inner)) .fa-birthday-cake::before",
      "&:where(:has(#body-inner)) .fa-cake-candles::before",
      "&:where(:has(#body-inner)) .fa-cake::before"
    ]
  ],
  [
    "design-00984",
    [
      "&:where(:has(#body-inner)) .fa-envelope::before"
    ]
  ],
  [
    "design-00985",
    [
      "&:where(:has(#body-inner)) .fa-angle-double-up::before",
      "&:where(:has(#body-inner)) .fa-angles-up::before"
    ]
  ],
  [
    "design-00986",
    [
      "&:where(:has(#body-inner)) .fa-paperclip::before"
    ]
  ],
  [
    "design-00987",
    [
      "&:where(:has(#body-inner)) .fa-arrow-right-to-city::before"
    ]
  ],
  [
    "design-00988",
    [
      "&:where(:has(#body-inner)) .fa-ribbon::before"
    ]
  ],
  [
    "design-00989",
    [
      "&:where(:has(#body-inner)) .fa-lungs::before"
    ]
  ],
  [
    "design-00990",
    [
      "&:where(:has(#body-inner)) .fa-arrow-up-9-1::before",
      "&:where(:has(#body-inner)) .fa-sort-numeric-up-alt::before"
    ]
  ],
  [
    "design-00991",
    [
      "&:where(:has(#body-inner)) .fa-litecoin-sign::before"
    ]
  ],
  [
    "design-00992",
    [
      "&:where(:has(#body-inner)) .fa-border-none::before"
    ]
  ],
  [
    "design-00993",
    [
      "&:where(:has(#body-inner)) .fa-circle-nodes::before"
    ]
  ],
  [
    "design-00994",
    [
      "&:where(:has(#body-inner)) .fa-parachute-box::before"
    ]
  ],
  [
    "design-00995",
    [
      "&:where(:has(#body-inner)) .fa-indent::before"
    ]
  ],
  [
    "design-00996",
    [
      "&:where(:has(#body-inner)) .fa-truck-field-un::before"
    ]
  ],
  [
    "design-00997",
    [
      "&:where(:has(#body-inner)) .fa-hourglass-empty::before",
      "&:where(:has(#body-inner)) .fa-hourglass::before"
    ]
  ],
  [
    "design-00998",
    [
      "&:where(:has(#body-inner)) .fa-mountain::before"
    ]
  ],
  [
    "design-00999",
    [
      "&:where(:has(#body-inner)) .fa-user-doctor::before",
      "&:where(:has(#body-inner)) .fa-user-md::before"
    ]
  ],
  [
    "design-01000",
    [
      "&:where(:has(#body-inner)) .fa-circle-info::before",
      "&:where(:has(#body-inner)) .fa-info-circle::before"
    ]
  ],
  [
    "design-01001",
    [
      "&:where(:has(#body-inner)) .fa-cloud-meatball::before"
    ]
  ],
  [
    "design-01002",
    [
      "&:where(:has(#body-inner)) .fa-camera-alt::before",
      "&:where(:has(#body-inner)) .fa-camera::before"
    ]
  ],
  [
    "design-01003",
    [
      "&:where(:has(#body-inner)) .fa-square-virus::before"
    ]
  ],
  [
    "design-01004",
    [
      "&:where(:has(#body-inner)) .fa-meteor::before"
    ]
  ],
  [
    "design-01005",
    [
      "&:where(:has(#body-inner)) .fa-car-on::before"
    ]
  ],
  [
    "design-01006",
    [
      "&:where(:has(#body-inner)) .fa-sleigh::before"
    ]
  ],
  [
    "design-01007",
    [
      "&:where(:has(#body-inner)) .fa-arrow-down-1-9::before",
      "&:where(:has(#body-inner)) .fa-sort-numeric-asc::before",
      "&:where(:has(#body-inner)) .fa-sort-numeric-down::before"
    ]
  ],
  [
    "design-01008",
    [
      "&:where(:has(#body-inner)) .fa-hand-holding-droplet::before",
      "&:where(:has(#body-inner)) .fa-hand-holding-water::before"
    ]
  ],
  [
    "design-01009",
    [
      "&:where(:has(#body-inner)) .fa-water::before"
    ]
  ],
  [
    "design-01010",
    [
      "&:where(:has(#body-inner)) .fa-calendar-check::before"
    ]
  ],
  [
    "design-01011",
    [
      "&:where(:has(#body-inner)) .fa-braille::before"
    ]
  ],
  [
    "design-01012",
    [
      "&:where(:has(#body-inner)) .fa-prescription-bottle-alt::before",
      "&:where(:has(#body-inner)) .fa-prescription-bottle-medical::before"
    ]
  ],
  [
    "design-01013",
    [
      "&:where(:has(#body-inner)) .fa-landmark::before"
    ]
  ],
  [
    "design-01014",
    [
      "&:where(:has(#body-inner)) .fa-truck::before"
    ]
  ],
  [
    "design-01015",
    [
      "&:where(:has(#body-inner)) .fa-crosshairs::before"
    ]
  ],
  [
    "design-01016",
    [
      "&:where(:has(#body-inner)) .fa-person-cane::before"
    ]
  ],
  [
    "design-01017",
    [
      "&:where(:has(#body-inner)) .fa-tent::before"
    ]
  ],
  [
    "design-01018",
    [
      "&:where(:has(#body-inner)) .fa-vest-patches::before"
    ]
  ],
  [
    "design-01019",
    [
      "&:where(:has(#body-inner)) .fa-check-double::before"
    ]
  ],
  [
    "design-01020",
    [
      "&:where(:has(#body-inner)) .fa-arrow-down-a-z::before",
      "&:where(:has(#body-inner)) .fa-sort-alpha-asc::before",
      "&:where(:has(#body-inner)) .fa-sort-alpha-down::before"
    ]
  ],
  [
    "design-01021",
    [
      "&:where(:has(#body-inner)) .fa-money-bill-wheat::before"
    ]
  ],
  [
    "design-01022",
    [
      "&:where(:has(#body-inner)) .fa-cookie::before"
    ]
  ],
  [
    "design-01023",
    [
      "&:where(:has(#body-inner)) .fa-arrow-left-rotate::before",
      "&:where(:has(#body-inner)) .fa-arrow-rotate-back::before",
      "&:where(:has(#body-inner)) .fa-arrow-rotate-backward::before",
      "&:where(:has(#body-inner)) .fa-arrow-rotate-left::before",
      "&:where(:has(#body-inner)) .fa-undo::before"
    ]
  ],
  [
    "design-01024",
    [
      "&:where(:has(#body-inner)) .fa-hard-drive::before",
      "&:where(:has(#body-inner)) .fa-hdd::before"
    ]
  ],
  [
    "design-01025",
    [
      "&:where(:has(#body-inner)) .fa-face-grin-squint-tears::before",
      "&:where(:has(#body-inner)) .fa-grin-squint-tears::before"
    ]
  ],
  [
    "design-01026",
    [
      "&:where(:has(#body-inner)) .fa-dumbbell::before"
    ]
  ],
  [
    "design-01027",
    [
      "&:where(:has(#body-inner)) .fa-list-alt::before",
      "&:where(:has(#body-inner)) .fa-rectangle-list::before"
    ]
  ],
  [
    "design-01028",
    [
      "&:where(:has(#body-inner)) .fa-tarp-droplet::before"
    ]
  ],
  [
    "design-01029",
    [
      "&:where(:has(#body-inner)) .fa-house-medical-circle-check::before"
    ]
  ],
  [
    "design-01030",
    [
      "&:where(:has(#body-inner)) .fa-person-skiing-nordic::before",
      "&:where(:has(#body-inner)) .fa-skiing-nordic::before"
    ]
  ],
  [
    "design-01031",
    [
      "&:where(:has(#body-inner)) .fa-calendar-plus::before"
    ]
  ],
  [
    "design-01032",
    [
      "&:where(:has(#body-inner)) .fa-plane-arrival::before"
    ]
  ],
  [
    "design-01033",
    [
      "&:where(:has(#body-inner)) .fa-arrow-alt-circle-left::before",
      "&:where(:has(#body-inner)) .fa-circle-left::before"
    ]
  ],
  [
    "design-01034",
    [
      "&:where(:has(#body-inner)) .fa-subway::before",
      "&:where(:has(#body-inner)) .fa-train-subway::before"
    ]
  ],
  [
    "design-01035",
    [
      "&:where(:has(#body-inner)) .fa-chart-gantt::before"
    ]
  ],
  [
    "design-01036",
    [
      "&:where(:has(#body-inner)) .fa-indian-rupee-sign::before",
      "&:where(:has(#body-inner)) .fa-indian-rupee::before",
      "&:where(:has(#body-inner)) .fa-inr::before"
    ]
  ],
  [
    "design-01037",
    [
      "&:where(:has(#body-inner)) .fa-crop-alt::before",
      "&:where(:has(#body-inner)) .fa-crop-simple::before"
    ]
  ],
  [
    "design-01038",
    [
      "&:where(:has(#body-inner)) .fa-money-bill-1::before",
      "&:where(:has(#body-inner)) .fa-money-bill-alt::before"
    ]
  ],
  [
    "design-01039",
    [
      "&:where(:has(#body-inner)) .fa-left-long::before",
      "&:where(:has(#body-inner)) .fa-long-arrow-alt-left::before"
    ]
  ],
  [
    "design-01040",
    [
      "&:where(:has(#body-inner)) .fa-dna::before"
    ]
  ],
  [
    "design-01041",
    [
      "&:where(:has(#body-inner)) .fa-virus-slash::before"
    ]
  ],
  [
    "design-01042",
    [
      "&:where(:has(#body-inner)) .fa-minus::before",
      "&:where(:has(#body-inner)) .fa-subtract::before"
    ]
  ],
  [
    "design-01043",
    [
      "&:where(:has(#body-inner)) .fa-chess::before"
    ]
  ],
  [
    "design-01044",
    [
      "&:where(:has(#body-inner)) .fa-arrow-left-long::before",
      "&:where(:has(#body-inner)) .fa-long-arrow-left::before"
    ]
  ],
  [
    "design-01045",
    [
      "&:where(:has(#body-inner)) .fa-plug-circle-check::before"
    ]
  ],
  [
    "design-01046",
    [
      "&:where(:has(#body-inner)) .fa-street-view::before"
    ]
  ],
  [
    "design-01047",
    [
      "&:where(:has(#body-inner)) .fa-franc-sign::before"
    ]
  ],
  [
    "design-01048",
    [
      "&:where(:has(#body-inner)) .fa-volume-off::before"
    ]
  ],
  [
    "design-01049",
    [
      "&:where(:has(#body-inner)) .fa-american-sign-language-interpreting::before",
      "&:where(:has(#body-inner)) .fa-asl-interpreting::before",
      "&:where(:has(#body-inner)) .fa-hands-american-sign-language-interpreting::before",
      "&:where(:has(#body-inner)) .fa-hands-asl-interpreting::before"
    ]
  ],
  [
    "design-01050",
    [
      "&:where(:has(#body-inner)) .fa-cog::before",
      "&:where(:has(#body-inner)) .fa-gear::before"
    ]
  ],
  [
    "design-01051",
    [
      "&:where(:has(#body-inner)) .fa-droplet-slash::before",
      "&:where(:has(#body-inner)) .fa-tint-slash::before"
    ]
  ],
  [
    "design-01052",
    [
      "&:where(:has(#body-inner)) .fa-mosque::before"
    ]
  ],
  [
    "design-01053",
    [
      "&:where(:has(#body-inner)) .fa-mosquito::before"
    ]
  ],
  [
    "design-01054",
    [
      "&:where(:has(#body-inner)) .fa-star-of-david::before"
    ]
  ],
  [
    "design-01055",
    [
      "&:where(:has(#body-inner)) .fa-person-military-rifle::before"
    ]
  ],
  [
    "design-01056",
    [
      "&:where(:has(#body-inner)) .fa-cart-shopping::before",
      "&:where(:has(#body-inner)) .fa-shopping-cart::before"
    ]
  ],
  [
    "design-01057",
    [
      "&:where(:has(#body-inner)) .fa-vials::before"
    ]
  ],
  [
    "design-01058",
    [
      "&:where(:has(#body-inner)) .fa-plug-circle-plus::before"
    ]
  ],
  [
    "design-01059",
    [
      "&:where(:has(#body-inner)) .fa-place-of-worship::before"
    ]
  ],
  [
    "design-01060",
    [
      "&:where(:has(#body-inner)) .fa-grip-vertical::before"
    ]
  ],
  [
    "design-01061",
    [
      "&:where(:has(#body-inner)) .fa-arrow-turn-up::before",
      "&:where(:has(#body-inner)) .fa-level-up::before"
    ]
  ],
  [
    "design-01062",
    [
      "&:where(:has(#body-inner)) .fa-u::before"
    ]
  ],
  [
    "design-01063",
    [
      "&:where(:has(#body-inner)) .fa-square-root-alt::before",
      "&:where(:has(#body-inner)) .fa-square-root-variable::before"
    ]
  ],
  [
    "design-01064",
    [
      "&:where(:has(#body-inner)) .fa-clock-four::before",
      "&:where(:has(#body-inner)) .fa-clock::before"
    ]
  ],
  [
    "design-01065",
    [
      "&:where(:has(#body-inner)) .fa-backward-step::before",
      "&:where(:has(#body-inner)) .fa-step-backward::before"
    ]
  ],
  [
    "design-01066",
    [
      "&:where(:has(#body-inner)) .fa-pallet::before"
    ]
  ],
  [
    "design-01067",
    [
      "&:where(:has(#body-inner)) .fa-faucet::before"
    ]
  ],
  [
    "design-01068",
    [
      "&:where(:has(#body-inner)) .fa-baseball-bat-ball::before"
    ]
  ],
  [
    "design-01069",
    [
      "&:where(:has(#body-inner)) .fa-s::before"
    ]
  ],
  [
    "design-01070",
    [
      "&:where(:has(#body-inner)) .fa-timeline::before"
    ]
  ],
  [
    "design-01071",
    [
      "&:where(:has(#body-inner)) .fa-keyboard::before"
    ]
  ],
  [
    "design-01072",
    [
      "&:where(:has(#body-inner)) .fa-caret-down::before"
    ]
  ],
  [
    "design-01073",
    [
      "&:where(:has(#body-inner)) .fa-clinic-medical::before",
      "&:where(:has(#body-inner)) .fa-house-chimney-medical::before"
    ]
  ],
  [
    "design-01074",
    [
      "&:where(:has(#body-inner)) .fa-temperature-3::before",
      "&:where(:has(#body-inner)) .fa-temperature-three-quarters::before",
      "&:where(:has(#body-inner)) .fa-thermometer-3::before",
      "&:where(:has(#body-inner)) .fa-thermometer-three-quarters::before"
    ]
  ],
  [
    "design-01075",
    [
      "&:where(:has(#body-inner)) .fa-mobile-android-alt::before",
      "&:where(:has(#body-inner)) .fa-mobile-screen::before"
    ]
  ],
  [
    "design-01076",
    [
      "&:where(:has(#body-inner)) .fa-plane-up::before"
    ]
  ],
  [
    "design-01077",
    [
      "&:where(:has(#body-inner)) .fa-piggy-bank::before"
    ]
  ],
  [
    "design-01078",
    [
      "&:where(:has(#body-inner)) .fa-battery-3::before",
      "&:where(:has(#body-inner)) .fa-battery-half::before"
    ]
  ],
  [
    "design-01079",
    [
      "&:where(:has(#body-inner)) .fa-mountain-city::before"
    ]
  ],
  [
    "design-01080",
    [
      "&:where(:has(#body-inner)) .fa-coins::before"
    ]
  ],
  [
    "design-01081",
    [
      "&:where(:has(#body-inner)) .fa-khanda::before"
    ]
  ],
  [
    "design-01082",
    [
      "&:where(:has(#body-inner)) .fa-sliders-h::before",
      "&:where(:has(#body-inner)) .fa-sliders::before"
    ]
  ],
  [
    "design-01083",
    [
      "&:where(:has(#body-inner)) .fa-folder-tree::before"
    ]
  ],
  [
    "design-01084",
    [
      "&:where(:has(#body-inner)) .fa-network-wired::before"
    ]
  ],
  [
    "design-01085",
    [
      "&:where(:has(#body-inner)) .fa-map-pin::before"
    ]
  ],
  [
    "design-01086",
    [
      "&:where(:has(#body-inner)) .fa-hamsa::before"
    ]
  ],
  [
    "design-01087",
    [
      "&:where(:has(#body-inner)) .fa-cent-sign::before"
    ]
  ],
  [
    "design-01088",
    [
      "&:where(:has(#body-inner)) .fa-flask::before"
    ]
  ],
  [
    "design-01089",
    [
      "&:where(:has(#body-inner)) .fa-person-pregnant::before"
    ]
  ],
  [
    "design-01090",
    [
      "&:where(:has(#body-inner)) .fa-wand-sparkles::before"
    ]
  ],
  [
    "design-01091",
    [
      "&:where(:has(#body-inner)) .fa-ellipsis-v::before",
      "&:where(:has(#body-inner)) .fa-ellipsis-vertical::before"
    ]
  ],
  [
    "design-01092",
    [
      "&:where(:has(#body-inner)) .fa-ticket::before"
    ]
  ],
  [
    "design-01093",
    [
      "&:where(:has(#body-inner)) .fa-power-off::before"
    ]
  ],
  [
    "design-01094",
    [
      "&:where(:has(#body-inner)) .fa-long-arrow-alt-right::before",
      "&:where(:has(#body-inner)) .fa-right-long::before"
    ]
  ],
  [
    "design-01095",
    [
      "&:where(:has(#body-inner)) .fa-flag-usa::before"
    ]
  ],
  [
    "design-01096",
    [
      "&:where(:has(#body-inner)) .fa-laptop-file::before"
    ]
  ],
  [
    "design-01097",
    [
      "&:where(:has(#body-inner)) .fa-teletype::before",
      "&:where(:has(#body-inner)) .fa-tty::before"
    ]
  ],
  [
    "design-01098",
    [
      "&:where(:has(#body-inner)) .fa-diagram-next::before"
    ]
  ],
  [
    "design-01099",
    [
      "&:where(:has(#body-inner)) .fa-person-rifle::before"
    ]
  ],
  [
    "design-01100",
    [
      "&:where(:has(#body-inner)) .fa-house-medical-circle-exclamation::before"
    ]
  ],
  [
    "design-01101",
    [
      "&:where(:has(#body-inner)) .fa-closed-captioning::before"
    ]
  ],
  [
    "design-01102",
    [
      "&:where(:has(#body-inner)) .fa-hiking::before",
      "&:where(:has(#body-inner)) .fa-person-hiking::before"
    ]
  ],
  [
    "design-01103",
    [
      "&:where(:has(#body-inner)) .fa-venus-double::before"
    ]
  ],
  [
    "design-01104",
    [
      "&:where(:has(#body-inner)) .fa-images::before"
    ]
  ],
  [
    "design-01105",
    [
      "&:where(:has(#body-inner)) .fa-calculator::before"
    ]
  ],
  [
    "design-01106",
    [
      "&:where(:has(#body-inner)) .fa-people-pulling::before"
    ]
  ],
  [
    "design-01107",
    [
      "&:where(:has(#body-inner)) .fa-n::before"
    ]
  ],
  [
    "design-01108",
    [
      "&:where(:has(#body-inner)) .fa-cable-car::before",
      "&:where(:has(#body-inner)) .fa-tram::before"
    ]
  ],
  [
    "design-01109",
    [
      "&:where(:has(#body-inner)) .fa-cloud-rain::before"
    ]
  ],
  [
    "design-01110",
    [
      "&:where(:has(#body-inner)) .fa-building-circle-xmark::before"
    ]
  ],
  [
    "design-01111",
    [
      "&:where(:has(#body-inner)) .fa-ship::before"
    ]
  ],
  [
    "design-01112",
    [
      "&:where(:has(#body-inner)) .fa-arrows-down-to-line::before"
    ]
  ],
  [
    "design-01113",
    [
      "&:where(:has(#body-inner)) .fa-download::before"
    ]
  ],
  [
    "design-01114",
    [
      "&:where(:has(#body-inner)) .fa-face-grin::before",
      "&:where(:has(#body-inner)) .fa-grin::before"
    ]
  ],
  [
    "design-01115",
    [
      "&:where(:has(#body-inner)) .fa-backspace::before",
      "&:where(:has(#body-inner)) .fa-delete-left::before"
    ]
  ],
  [
    "design-01116",
    [
      "&:where(:has(#body-inner)) .fa-eye-dropper-empty::before",
      "&:where(:has(#body-inner)) .fa-eye-dropper::before",
      "&:where(:has(#body-inner)) .fa-eyedropper::before"
    ]
  ],
  [
    "design-01117",
    [
      "&:where(:has(#body-inner)) .fa-file-circle-check::before"
    ]
  ],
  [
    "design-01118",
    [
      "&:where(:has(#body-inner)) .fa-forward::before"
    ]
  ],
  [
    "design-01119",
    [
      "&:where(:has(#body-inner)) .fa-mobile-android::before",
      "&:where(:has(#body-inner)) .fa-mobile-phone::before",
      "&:where(:has(#body-inner)) .fa-mobile::before"
    ]
  ],
  [
    "design-01120",
    [
      "&:where(:has(#body-inner)) .fa-face-meh::before",
      "&:where(:has(#body-inner)) .fa-meh::before"
    ]
  ],
  [
    "design-01121",
    [
      "&:where(:has(#body-inner)) .fa-align-center::before"
    ]
  ],
  [
    "design-01122",
    [
      "&:where(:has(#body-inner)) .fa-book-dead::before",
      "&:where(:has(#body-inner)) .fa-book-skull::before"
    ]
  ],
  [
    "design-01123",
    [
      "&:where(:has(#body-inner)) .fa-drivers-license::before",
      "&:where(:has(#body-inner)) .fa-id-card::before"
    ]
  ],
  [
    "design-01124",
    [
      "&:where(:has(#body-inner)) .fa-dedent::before",
      "&:where(:has(#body-inner)) .fa-outdent::before"
    ]
  ],
  [
    "design-01125",
    [
      "&:where(:has(#body-inner)) .fa-heart-circle-exclamation::before"
    ]
  ],
  [
    "design-01126",
    [
      "&:where(:has(#body-inner)) .fa-home-alt::before",
      "&:where(:has(#body-inner)) .fa-home-lg-alt::before",
      "&:where(:has(#body-inner)) .fa-home::before",
      "&:where(:has(#body-inner)) .fa-house::before"
    ]
  ],
  [
    "design-01127",
    [
      "&:where(:has(#body-inner)) .fa-calendar-week::before"
    ]
  ],
  [
    "design-01128",
    [
      "&:where(:has(#body-inner)) .fa-laptop-medical::before"
    ]
  ],
  [
    "design-01129",
    [
      "&:where(:has(#body-inner)) .fa-b::before"
    ]
  ],
  [
    "design-01130",
    [
      "&:where(:has(#body-inner)) .fa-file-medical::before"
    ]
  ],
  [
    "design-01131",
    [
      "&:where(:has(#body-inner)) .fa-dice-one::before"
    ]
  ],
  [
    "design-01132",
    [
      "&:where(:has(#body-inner)) .fa-kiwi-bird::before"
    ]
  ],
  [
    "design-01133",
    [
      "&:where(:has(#body-inner)) .fa-arrow-right-arrow-left::before",
      "&:where(:has(#body-inner)) .fa-exchange::before"
    ]
  ],
  [
    "design-01134",
    [
      "&:where(:has(#body-inner)) .fa-redo-alt::before",
      "&:where(:has(#body-inner)) .fa-rotate-forward::before",
      "&:where(:has(#body-inner)) .fa-rotate-right::before"
    ]
  ],
  [
    "design-01135",
    [
      "&:where(:has(#body-inner)) .fa-cutlery::before",
      "&:where(:has(#body-inner)) .fa-utensils::before"
    ]
  ],
  [
    "design-01136",
    [
      "&:where(:has(#body-inner)) .fa-arrow-up-wide-short::before",
      "&:where(:has(#body-inner)) .fa-sort-amount-up::before"
    ]
  ],
  [
    "design-01137",
    [
      "&:where(:has(#body-inner)) .fa-mill-sign::before"
    ]
  ],
  [
    "design-01138",
    [
      "&:where(:has(#body-inner)) .fa-bowl-rice::before"
    ]
  ],
  [
    "design-01139",
    [
      "&:where(:has(#body-inner)) .fa-skull::before"
    ]
  ],
  [
    "design-01140",
    [
      "&:where(:has(#body-inner)) .fa-broadcast-tower::before",
      "&:where(:has(#body-inner)) .fa-tower-broadcast::before"
    ]
  ],
  [
    "design-01141",
    [
      "&:where(:has(#body-inner)) .fa-truck-pickup::before"
    ]
  ],
  [
    "design-01142",
    [
      "&:where(:has(#body-inner)) .fa-long-arrow-alt-up::before",
      "&:where(:has(#body-inner)) .fa-up-long::before"
    ]
  ],
  [
    "design-01143",
    [
      "&:where(:has(#body-inner)) .fa-stop::before"
    ]
  ],
  [
    "design-01144",
    [
      "&:where(:has(#body-inner)) .fa-code-merge::before"
    ]
  ],
  [
    "design-01145",
    [
      "&:where(:has(#body-inner)) .fa-upload::before"
    ]
  ],
  [
    "design-01146",
    [
      "&:where(:has(#body-inner)) .fa-hurricane::before"
    ]
  ],
  [
    "design-01147",
    [
      "&:where(:has(#body-inner)) .fa-mound::before"
    ]
  ],
  [
    "design-01148",
    [
      "&:where(:has(#body-inner)) .fa-toilet-portable::before"
    ]
  ],
  [
    "design-01149",
    [
      "&:where(:has(#body-inner)) .fa-compact-disc::before"
    ]
  ],
  [
    "design-01150",
    [
      "&:where(:has(#body-inner)) .fa-file-arrow-down::before",
      "&:where(:has(#body-inner)) .fa-file-download::before"
    ]
  ],
  [
    "design-01151",
    [
      "&:where(:has(#body-inner)) .fa-caravan::before"
    ]
  ],
  [
    "design-01152",
    [
      "&:where(:has(#body-inner)) .fa-shield-cat::before"
    ]
  ],
  [
    "design-01153",
    [
      "&:where(:has(#body-inner)) .fa-bolt::before",
      "&:where(:has(#body-inner)) .fa-zap::before"
    ]
  ],
  [
    "design-01154",
    [
      "&:where(:has(#body-inner)) .fa-glass-water::before"
    ]
  ],
  [
    "design-01155",
    [
      "&:where(:has(#body-inner)) .fa-oil-well::before"
    ]
  ],
  [
    "design-01156",
    [
      "&:where(:has(#body-inner)) .fa-vault::before"
    ]
  ],
  [
    "design-01157",
    [
      "&:where(:has(#body-inner)) .fa-mars::before"
    ]
  ],
  [
    "design-01158",
    [
      "&:where(:has(#body-inner)) .fa-toilet::before"
    ]
  ],
  [
    "design-01159",
    [
      "&:where(:has(#body-inner)) .fa-plane-circle-xmark::before"
    ]
  ],
  [
    "design-01160",
    [
      "&:where(:has(#body-inner)) .fa-cny::before",
      "&:where(:has(#body-inner)) .fa-jpy::before",
      "&:where(:has(#body-inner)) .fa-rmb::before",
      "&:where(:has(#body-inner)) .fa-yen-sign::before",
      "&:where(:has(#body-inner)) .fa-yen::before"
    ]
  ],
  [
    "design-01161",
    [
      "&:where(:has(#body-inner)) .fa-rouble::before",
      "&:where(:has(#body-inner)) .fa-rub::before",
      "&:where(:has(#body-inner)) .fa-ruble-sign::before",
      "&:where(:has(#body-inner)) .fa-ruble::before"
    ]
  ],
  [
    "design-01162",
    [
      "&:where(:has(#body-inner)) .fa-sun::before"
    ]
  ],
  [
    "design-01163",
    [
      "&:where(:has(#body-inner)) .fa-guitar::before"
    ]
  ],
  [
    "design-01164",
    [
      "&:where(:has(#body-inner)) .fa-face-laugh-wink::before",
      "&:where(:has(#body-inner)) .fa-laugh-wink::before"
    ]
  ],
  [
    "design-01165",
    [
      "&:where(:has(#body-inner)) .fa-horse-head::before"
    ]
  ],
  [
    "design-01166",
    [
      "&:where(:has(#body-inner)) .fa-bore-hole::before"
    ]
  ],
  [
    "design-01167",
    [
      "&:where(:has(#body-inner)) .fa-industry::before"
    ]
  ],
  [
    "design-01168",
    [
      "&:where(:has(#body-inner)) .fa-arrow-alt-circle-down::before",
      "&:where(:has(#body-inner)) .fa-circle-down::before"
    ]
  ],
  [
    "design-01169",
    [
      "&:where(:has(#body-inner)) .fa-arrows-turn-to-dots::before"
    ]
  ],
  [
    "design-01170",
    [
      "&:where(:has(#body-inner)) .fa-florin-sign::before"
    ]
  ],
  [
    "design-01171",
    [
      "&:where(:has(#body-inner)) .fa-arrow-down-short-wide::before",
      "&:where(:has(#body-inner)) .fa-sort-amount-desc::before",
      "&:where(:has(#body-inner)) .fa-sort-amount-down-alt::before"
    ]
  ],
  [
    "design-01172",
    [
      "&:where(:has(#body-inner)) .fa-less-than::before"
    ]
  ],
  [
    "design-01173",
    [
      "&:where(:has(#body-inner)) .fa-angle-down::before"
    ]
  ],
  [
    "design-01174",
    [
      "&:where(:has(#body-inner)) .fa-car-tunnel::before"
    ]
  ],
  [
    "design-01175",
    [
      "&:where(:has(#body-inner)) .fa-head-side-cough::before"
    ]
  ],
  [
    "design-01176",
    [
      "&:where(:has(#body-inner)) .fa-grip-lines::before"
    ]
  ],
  [
    "design-01177",
    [
      "&:where(:has(#body-inner)) .fa-thumbs-down::before"
    ]
  ],
  [
    "design-01178",
    [
      "&:where(:has(#body-inner)) .fa-user-lock::before"
    ]
  ],
  [
    "design-01179",
    [
      "&:where(:has(#body-inner)) .fa-arrow-right-long::before",
      "&:where(:has(#body-inner)) .fa-long-arrow-right::before"
    ]
  ],
  [
    "design-01180",
    [
      "&:where(:has(#body-inner)) .fa-anchor-circle-xmark::before"
    ]
  ],
  [
    "design-01181",
    [
      "&:where(:has(#body-inner)) .fa-ellipsis-h::before",
      "&:where(:has(#body-inner)) .fa-ellipsis::before"
    ]
  ],
  [
    "design-01182",
    [
      "&:where(:has(#body-inner)) .fa-chess-pawn::before"
    ]
  ],
  [
    "design-01183",
    [
      "&:where(:has(#body-inner)) .fa-first-aid::before",
      "&:where(:has(#body-inner)) .fa-kit-medical::before"
    ]
  ],
  [
    "design-01184",
    [
      "&:where(:has(#body-inner)) .fa-person-through-window::before"
    ]
  ],
  [
    "design-01185",
    [
      "&:where(:has(#body-inner)) .fa-toolbox::before"
    ]
  ],
  [
    "design-01186",
    [
      "&:where(:has(#body-inner)) .fa-hands-holding-circle::before"
    ]
  ],
  [
    "design-01187",
    [
      "&:where(:has(#body-inner)) .fa-bug::before"
    ]
  ],
  [
    "design-01188",
    [
      "&:where(:has(#body-inner)) .fa-credit-card-alt::before",
      "&:where(:has(#body-inner)) .fa-credit-card::before"
    ]
  ],
  [
    "design-01189",
    [
      "&:where(:has(#body-inner)) .fa-automobile::before",
      "&:where(:has(#body-inner)) .fa-car::before"
    ]
  ],
  [
    "design-01190",
    [
      "&:where(:has(#body-inner)) .fa-hand-holding-hand::before"
    ]
  ],
  [
    "design-01191",
    [
      "&:where(:has(#body-inner)) .fa-book-open-reader::before",
      "&:where(:has(#body-inner)) .fa-book-reader::before"
    ]
  ],
  [
    "design-01192",
    [
      "&:where(:has(#body-inner)) .fa-mountain-sun::before"
    ]
  ],
  [
    "design-01193",
    [
      "&:where(:has(#body-inner)) .fa-arrows-left-right-to-line::before"
    ]
  ],
  [
    "design-01194",
    [
      "&:where(:has(#body-inner)) .fa-dice-d20::before"
    ]
  ],
  [
    "design-01195",
    [
      "&:where(:has(#body-inner)) .fa-truck-droplet::before"
    ]
  ],
  [
    "design-01196",
    [
      "&:where(:has(#body-inner)) .fa-file-circle-xmark::before"
    ]
  ],
  [
    "design-01197",
    [
      "&:where(:has(#body-inner)) .fa-temperature-arrow-up::before",
      "&:where(:has(#body-inner)) .fa-temperature-up::before"
    ]
  ],
  [
    "design-01198",
    [
      "&:where(:has(#body-inner)) .fa-medal::before"
    ]
  ],
  [
    "design-01199",
    [
      "&:where(:has(#body-inner)) .fa-bed::before"
    ]
  ],
  [
    "design-01200",
    [
      "&:where(:has(#body-inner)) .fa-h-square::before",
      "&:where(:has(#body-inner)) .fa-square-h::before"
    ]
  ],
  [
    "design-01201",
    [
      "&:where(:has(#body-inner)) .fa-podcast::before"
    ]
  ],
  [
    "design-01202",
    [
      "&:where(:has(#body-inner)) .fa-temperature-4::before",
      "&:where(:has(#body-inner)) .fa-temperature-full::before",
      "&:where(:has(#body-inner)) .fa-thermometer-4::before",
      "&:where(:has(#body-inner)) .fa-thermometer-full::before"
    ]
  ],
  [
    "design-01203",
    [
      "&:where(:has(#body-inner)) .fa-bell::before"
    ]
  ],
  [
    "design-01204",
    [
      "&:where(:has(#body-inner)) .fa-superscript::before"
    ]
  ],
  [
    "design-01205",
    [
      "&:where(:has(#body-inner)) .fa-plug-circle-xmark::before"
    ]
  ],
  [
    "design-01206",
    [
      "&:where(:has(#body-inner)) .fa-star-of-life::before"
    ]
  ],
  [
    "design-01207",
    [
      "&:where(:has(#body-inner)) .fa-phone-slash::before"
    ]
  ],
  [
    "design-01208",
    [
      "&:where(:has(#body-inner)) .fa-paint-roller::before"
    ]
  ],
  [
    "design-01209",
    [
      "&:where(:has(#body-inner)) .fa-hands-helping::before",
      "&:where(:has(#body-inner)) .fa-handshake-angle::before"
    ]
  ],
  [
    "design-01210",
    [
      "&:where(:has(#body-inner)) .fa-location-dot::before",
      "&:where(:has(#body-inner)) .fa-map-marker-alt::before"
    ]
  ],
  [
    "design-01211",
    [
      "&:where(:has(#body-inner)) .fa-file::before"
    ]
  ],
  [
    "design-01212",
    [
      "&:where(:has(#body-inner)) .fa-greater-than::before"
    ]
  ],
  [
    "design-01213",
    [
      "&:where(:has(#body-inner)) .fa-person-swimming::before",
      "&:where(:has(#body-inner)) .fa-swimmer::before"
    ]
  ],
  [
    "design-01214",
    [
      "&:where(:has(#body-inner)) .fa-arrow-down::before"
    ]
  ],
  [
    "design-01215",
    [
      "&:where(:has(#body-inner)) .fa-droplet::before",
      "&:where(:has(#body-inner)) .fa-tint::before"
    ]
  ],
  [
    "design-01216",
    [
      "&:where(:has(#body-inner)) .fa-eraser::before"
    ]
  ],
  [
    "design-01217",
    [
      "&:where(:has(#body-inner)) .fa-earth-america::before",
      "&:where(:has(#body-inner)) .fa-earth-americas::before",
      "&:where(:has(#body-inner)) .fa-earth::before",
      "&:where(:has(#body-inner)) .fa-globe-americas::before"
    ]
  ],
  [
    "design-01218",
    [
      "&:where(:has(#body-inner)) .fa-person-burst::before"
    ]
  ],
  [
    "design-01219",
    [
      "&:where(:has(#body-inner)) .fa-dove::before"
    ]
  ],
  [
    "design-01220",
    [
      "&:where(:has(#body-inner)) .fa-battery-0::before",
      "&:where(:has(#body-inner)) .fa-battery-empty::before"
    ]
  ],
  [
    "design-01221",
    [
      "&:where(:has(#body-inner)) .fa-socks::before"
    ]
  ],
  [
    "design-01222",
    [
      "&:where(:has(#body-inner)) .fa-inbox::before"
    ]
  ],
  [
    "design-01223",
    [
      "&:where(:has(#body-inner)) .fa-section::before"
    ]
  ],
  [
    "design-01224",
    [
      "&:where(:has(#body-inner)) .fa-gauge-high::before",
      "&:where(:has(#body-inner)) .fa-tachometer-alt-fast::before",
      "&:where(:has(#body-inner)) .fa-tachometer-alt::before"
    ]
  ],
  [
    "design-01225",
    [
      "&:where(:has(#body-inner)) .fa-envelope-open-text::before"
    ]
  ],
  [
    "design-01226",
    [
      "&:where(:has(#body-inner)) .fa-hospital-alt::before",
      "&:where(:has(#body-inner)) .fa-hospital-wide::before",
      "&:where(:has(#body-inner)) .fa-hospital::before"
    ]
  ],
  [
    "design-01227",
    [
      "&:where(:has(#body-inner)) .fa-wine-bottle::before"
    ]
  ],
  [
    "design-01228",
    [
      "&:where(:has(#body-inner)) .fa-chess-rook::before"
    ]
  ],
  [
    "design-01229",
    [
      "&:where(:has(#body-inner)) .fa-bars-staggered::before",
      "&:where(:has(#body-inner)) .fa-reorder::before",
      "&:where(:has(#body-inner)) .fa-stream::before"
    ]
  ],
  [
    "design-01230",
    [
      "&:where(:has(#body-inner)) .fa-dharmachakra::before"
    ]
  ],
  [
    "design-01231",
    [
      "&:where(:has(#body-inner)) .fa-hotdog::before"
    ]
  ],
  [
    "design-01232",
    [
      "&:where(:has(#body-inner)) .fa-blind::before",
      "&:where(:has(#body-inner)) .fa-person-walking-with-cane::before"
    ]
  ],
  [
    "design-01233",
    [
      "&:where(:has(#body-inner)) .fa-drum::before"
    ]
  ],
  [
    "design-01234",
    [
      "&:where(:has(#body-inner)) .fa-ice-cream::before"
    ]
  ],
  [
    "design-01235",
    [
      "&:where(:has(#body-inner)) .fa-heart-circle-bolt::before"
    ]
  ],
  [
    "design-01236",
    [
      "&:where(:has(#body-inner)) .fa-fax::before"
    ]
  ],
  [
    "design-01237",
    [
      "&:where(:has(#body-inner)) .fa-paragraph::before"
    ]
  ],
  [
    "design-01238",
    [
      "&:where(:has(#body-inner)) .fa-check-to-slot::before",
      "&:where(:has(#body-inner)) .fa-vote-yea::before"
    ]
  ],
  [
    "design-01239",
    [
      "&:where(:has(#body-inner)) .fa-star-half::before"
    ]
  ],
  [
    "design-01240",
    [
      "&:where(:has(#body-inner)) .fa-boxes-alt::before",
      "&:where(:has(#body-inner)) .fa-boxes-stacked::before",
      "&:where(:has(#body-inner)) .fa-boxes::before"
    ]
  ],
  [
    "design-01241",
    [
      "&:where(:has(#body-inner)) .fa-chain::before",
      "&:where(:has(#body-inner)) .fa-link::before"
    ]
  ],
  [
    "design-01242",
    [
      "&:where(:has(#body-inner)) .fa-assistive-listening-systems::before",
      "&:where(:has(#body-inner)) .fa-ear-listen::before"
    ]
  ],
  [
    "design-01243",
    [
      "&:where(:has(#body-inner)) .fa-tree-city::before"
    ]
  ],
  [
    "design-01244",
    [
      "&:where(:has(#body-inner)) .fa-play::before"
    ]
  ],
  [
    "design-01245",
    [
      "&:where(:has(#body-inner)) .fa-font::before"
    ]
  ],
  [
    "design-01246",
    [
      "&:where(:has(#body-inner)) .fa-table-cells-row-lock::before"
    ]
  ],
  [
    "design-01247",
    [
      "&:where(:has(#body-inner)) .fa-rupiah-sign::before"
    ]
  ],
  [
    "design-01248",
    [
      "&:where(:has(#body-inner)) .fa-magnifying-glass::before",
      "&:where(:has(#body-inner)) .fa-search::before"
    ]
  ],
  [
    "design-01249",
    [
      "&:where(:has(#body-inner)) .fa-ping-pong-paddle-ball::before",
      "&:where(:has(#body-inner)) .fa-table-tennis-paddle-ball::before",
      "&:where(:has(#body-inner)) .fa-table-tennis::before"
    ]
  ],
  [
    "design-01250",
    [
      "&:where(:has(#body-inner)) .fa-diagnoses::before",
      "&:where(:has(#body-inner)) .fa-person-dots-from-line::before"
    ]
  ],
  [
    "design-01251",
    [
      "&:where(:has(#body-inner)) .fa-trash-can-arrow-up::before",
      "&:where(:has(#body-inner)) .fa-trash-restore-alt::before"
    ]
  ],
  [
    "design-01252",
    [
      "&:where(:has(#body-inner)) .fa-naira-sign::before"
    ]
  ],
  [
    "design-01253",
    [
      "&:where(:has(#body-inner)) .fa-cart-arrow-down::before"
    ]
  ],
  [
    "design-01254",
    [
      "&:where(:has(#body-inner)) .fa-walkie-talkie::before"
    ]
  ],
  [
    "design-01255",
    [
      "&:where(:has(#body-inner)) .fa-file-edit::before",
      "&:where(:has(#body-inner)) .fa-file-pen::before"
    ]
  ],
  [
    "design-01256",
    [
      "&:where(:has(#body-inner)) .fa-receipt::before"
    ]
  ],
  [
    "design-01257",
    [
      "&:where(:has(#body-inner)) .fa-pen-square::before",
      "&:where(:has(#body-inner)) .fa-pencil-square::before",
      "&:where(:has(#body-inner)) .fa-square-pen::before"
    ]
  ],
  [
    "design-01258",
    [
      "&:where(:has(#body-inner)) .fa-suitcase-rolling::before"
    ]
  ],
  [
    "design-01259",
    [
      "&:where(:has(#body-inner)) .fa-person-circle-exclamation::before"
    ]
  ],
  [
    "design-01260",
    [
      "&:where(:has(#body-inner)) .fa-chevron-down::before"
    ]
  ],
  [
    "design-01261",
    [
      "&:where(:has(#body-inner)) .fa-battery-5::before",
      "&:where(:has(#body-inner)) .fa-battery-full::before",
      "&:where(:has(#body-inner)) .fa-battery::before"
    ]
  ],
  [
    "design-01262",
    [
      "&:where(:has(#body-inner)) .fa-skull-crossbones::before"
    ]
  ],
  [
    "design-01263",
    [
      "&:where(:has(#body-inner)) .fa-code-compare::before"
    ]
  ],
  [
    "design-01264",
    [
      "&:where(:has(#body-inner)) .fa-list-dots::before",
      "&:where(:has(#body-inner)) .fa-list-ul::before"
    ]
  ],
  [
    "design-01265",
    [
      "&:where(:has(#body-inner)) .fa-school-lock::before"
    ]
  ],
  [
    "design-01266",
    [
      "&:where(:has(#body-inner)) .fa-tower-cell::before"
    ]
  ],
  [
    "design-01267",
    [
      "&:where(:has(#body-inner)) .fa-down-long::before",
      "&:where(:has(#body-inner)) .fa-long-arrow-alt-down::before"
    ]
  ],
  [
    "design-01268",
    [
      "&:where(:has(#body-inner)) .fa-ranking-star::before"
    ]
  ],
  [
    "design-01269",
    [
      "&:where(:has(#body-inner)) .fa-chess-king::before"
    ]
  ],
  [
    "design-01270",
    [
      "&:where(:has(#body-inner)) .fa-person-harassing::before"
    ]
  ],
  [
    "design-01271",
    [
      "&:where(:has(#body-inner)) .fa-brazilian-real-sign::before"
    ]
  ],
  [
    "design-01272",
    [
      "&:where(:has(#body-inner)) .fa-landmark-alt::before",
      "&:where(:has(#body-inner)) .fa-landmark-dome::before"
    ]
  ],
  [
    "design-01273",
    [
      "&:where(:has(#body-inner)) .fa-arrow-up::before"
    ]
  ],
  [
    "design-01274",
    [
      "&:where(:has(#body-inner)) .fa-television::before",
      "&:where(:has(#body-inner)) .fa-tv-alt::before",
      "&:where(:has(#body-inner)) .fa-tv::before"
    ]
  ],
  [
    "design-01275",
    [
      "&:where(:has(#body-inner)) .fa-shrimp::before"
    ]
  ],
  [
    "design-01276",
    [
      "&:where(:has(#body-inner)) .fa-list-check::before",
      "&:where(:has(#body-inner)) .fa-tasks::before"
    ]
  ],
  [
    "design-01277",
    [
      "&:where(:has(#body-inner)) .fa-jug-detergent::before"
    ]
  ],
  [
    "design-01278",
    [
      "&:where(:has(#body-inner)) .fa-circle-user::before",
      "&:where(:has(#body-inner)) .fa-user-circle::before"
    ]
  ],
  [
    "design-01279",
    [
      "&:where(:has(#body-inner)) .fa-user-shield::before"
    ]
  ],
  [
    "design-01280",
    [
      "&:where(:has(#body-inner)) .fa-wind::before"
    ]
  ],
  [
    "design-01281",
    [
      "&:where(:has(#body-inner)) .fa-car-burst::before",
      "&:where(:has(#body-inner)) .fa-car-crash::before"
    ]
  ],
  [
    "design-01282",
    [
      "&:where(:has(#body-inner)) .fa-y::before"
    ]
  ],
  [
    "design-01283",
    [
      "&:where(:has(#body-inner)) .fa-person-snowboarding::before",
      "&:where(:has(#body-inner)) .fa-snowboarding::before"
    ]
  ],
  [
    "design-01284",
    [
      "&:where(:has(#body-inner)) .fa-shipping-fast::before",
      "&:where(:has(#body-inner)) .fa-truck-fast::before"
    ]
  ],
  [
    "design-01285",
    [
      "&:where(:has(#body-inner)) .fa-fish::before"
    ]
  ],
  [
    "design-01286",
    [
      "&:where(:has(#body-inner)) .fa-user-graduate::before"
    ]
  ],
  [
    "design-01287",
    [
      "&:where(:has(#body-inner)) .fa-adjust::before",
      "&:where(:has(#body-inner)) .fa-circle-half-stroke::before"
    ]
  ],
  [
    "design-01288",
    [
      "&:where(:has(#body-inner)) .fa-clapperboard::before"
    ]
  ],
  [
    "design-01289",
    [
      "&:where(:has(#body-inner)) .fa-circle-radiation::before",
      "&:where(:has(#body-inner)) .fa-radiation-alt::before"
    ]
  ],
  [
    "design-01290",
    [
      "&:where(:has(#body-inner)) .fa-baseball-ball::before",
      "&:where(:has(#body-inner)) .fa-baseball::before"
    ]
  ],
  [
    "design-01291",
    [
      "&:where(:has(#body-inner)) .fa-jet-fighter-up::before"
    ]
  ],
  [
    "design-01292",
    [
      "&:where(:has(#body-inner)) .fa-diagram-project::before",
      "&:where(:has(#body-inner)) .fa-project-diagram::before"
    ]
  ],
  [
    "design-01293",
    [
      "&:where(:has(#body-inner)) .fa-copy::before"
    ]
  ],
  [
    "design-01294",
    [
      "&:where(:has(#body-inner)) .fa-volume-mute::before",
      "&:where(:has(#body-inner)) .fa-volume-times::before",
      "&:where(:has(#body-inner)) .fa-volume-xmark::before"
    ]
  ],
  [
    "design-01295",
    [
      "&:where(:has(#body-inner)) .fa-hand-sparkles::before"
    ]
  ],
  [
    "design-01296",
    [
      "&:where(:has(#body-inner)) .fa-grip-horizontal::before",
      "&:where(:has(#body-inner)) .fa-grip::before"
    ]
  ],
  [
    "design-01297",
    [
      "&:where(:has(#body-inner)) .fa-share-from-square::before",
      "&:where(:has(#body-inner)) .fa-share-square::before"
    ]
  ],
  [
    "design-01298",
    [
      "&:where(:has(#body-inner)) .fa-child-combatant::before",
      "&:where(:has(#body-inner)) .fa-child-rifle::before"
    ]
  ],
  [
    "design-01299",
    [
      "&:where(:has(#body-inner)) .fa-gun::before"
    ]
  ],
  [
    "design-01300",
    [
      "&:where(:has(#body-inner)) .fa-phone-square::before",
      "&:where(:has(#body-inner)) .fa-square-phone::before"
    ]
  ],
  [
    "design-01301",
    [
      "&:where(:has(#body-inner)) .fa-add::before",
      "&:where(:has(#body-inner)) .fa-plus::before"
    ]
  ],
  [
    "design-01302",
    [
      "&:where(:has(#body-inner)) .fa-expand::before"
    ]
  ],
  [
    "design-01303",
    [
      "&:where(:has(#body-inner)) .fa-computer::before"
    ]
  ],
  [
    "design-01304",
    [
      "&:where(:has(#body-inner)) .fa-close::before",
      "&:where(:has(#body-inner)) .fa-multiply::before",
      "&:where(:has(#body-inner)) .fa-remove::before",
      "&:where(:has(#body-inner)) .fa-times::before",
      "&:where(:has(#body-inner)) .fa-xmark::before"
    ]
  ],
  [
    "design-01305",
    [
      "&:where(:has(#body-inner)) .fa-arrows-up-down-left-right::before",
      "&:where(:has(#body-inner)) .fa-arrows::before"
    ]
  ],
  [
    "design-01306",
    [
      "&:where(:has(#body-inner)) .fa-chalkboard-teacher::before",
      "&:where(:has(#body-inner)) .fa-chalkboard-user::before"
    ]
  ],
  [
    "design-01307",
    [
      "&:where(:has(#body-inner)) .fa-peso-sign::before"
    ]
  ],
  [
    "design-01308",
    [
      "&:where(:has(#body-inner)) .fa-building-shield::before"
    ]
  ],
  [
    "design-01309",
    [
      "&:where(:has(#body-inner)) .fa-baby::before"
    ]
  ],
  [
    "design-01310",
    [
      "&:where(:has(#body-inner)) .fa-users-line::before"
    ]
  ],
  [
    "design-01311",
    [
      "&:where(:has(#body-inner)) .fa-quote-left-alt::before",
      "&:where(:has(#body-inner)) .fa-quote-left::before"
    ]
  ],
  [
    "design-01312",
    [
      "&:where(:has(#body-inner)) .fa-tractor::before"
    ]
  ],
  [
    "design-01313",
    [
      "&:where(:has(#body-inner)) .fa-trash-arrow-up::before",
      "&:where(:has(#body-inner)) .fa-trash-restore::before"
    ]
  ],
  [
    "design-01314",
    [
      "&:where(:has(#body-inner)) .fa-arrow-down-up-lock::before"
    ]
  ],
  [
    "design-01315",
    [
      "&:where(:has(#body-inner)) .fa-lines-leaning::before"
    ]
  ],
  [
    "design-01316",
    [
      "&:where(:has(#body-inner)) .fa-ruler-combined::before"
    ]
  ],
  [
    "design-01317",
    [
      "&:where(:has(#body-inner)) .fa-copyright::before"
    ]
  ],
  [
    "design-01318",
    [
      "&:where(:has(#body-inner)) .fa-equals::before"
    ]
  ],
  [
    "design-01319",
    [
      "&:where(:has(#body-inner)) .fa-blender::before"
    ]
  ],
  [
    "design-01320",
    [
      "&:where(:has(#body-inner)) .fa-teeth::before"
    ]
  ],
  [
    "design-01321",
    [
      "&:where(:has(#body-inner)) .fa-ils::before",
      "&:where(:has(#body-inner)) .fa-shekel-sign::before",
      "&:where(:has(#body-inner)) .fa-shekel::before",
      "&:where(:has(#body-inner)) .fa-sheqel-sign::before",
      "&:where(:has(#body-inner)) .fa-sheqel::before"
    ]
  ],
  [
    "design-01322",
    [
      "&:where(:has(#body-inner)) .fa-map::before"
    ]
  ],
  [
    "design-01323",
    [
      "&:where(:has(#body-inner)) .fa-rocket::before"
    ]
  ],
  [
    "design-01324",
    [
      "&:where(:has(#body-inner)) .fa-photo-film::before",
      "&:where(:has(#body-inner)) .fa-photo-video::before"
    ]
  ],
  [
    "design-01325",
    [
      "&:where(:has(#body-inner)) .fa-folder-minus::before"
    ]
  ],
  [
    "design-01326",
    [
      "&:where(:has(#body-inner)) .fa-store::before"
    ]
  ],
  [
    "design-01327",
    [
      "&:where(:has(#body-inner)) .fa-arrow-trend-up::before"
    ]
  ],
  [
    "design-01328",
    [
      "&:where(:has(#body-inner)) .fa-plug-circle-minus::before"
    ]
  ],
  [
    "design-01329",
    [
      "&:where(:has(#body-inner)) .fa-sign-hanging::before",
      "&:where(:has(#body-inner)) .fa-sign::before"
    ]
  ],
  [
    "design-01330",
    [
      "&:where(:has(#body-inner)) .fa-bezier-curve::before"
    ]
  ],
  [
    "design-01331",
    [
      "&:where(:has(#body-inner)) .fa-bell-slash::before"
    ]
  ],
  [
    "design-01332",
    [
      "&:where(:has(#body-inner)) .fa-tablet-android::before",
      "&:where(:has(#body-inner)) .fa-tablet::before"
    ]
  ],
  [
    "design-01333",
    [
      "&:where(:has(#body-inner)) .fa-school-flag::before"
    ]
  ],
  [
    "design-01334",
    [
      "&:where(:has(#body-inner)) .fa-fill::before"
    ]
  ],
  [
    "design-01335",
    [
      "&:where(:has(#body-inner)) .fa-angle-up::before"
    ]
  ],
  [
    "design-01336",
    [
      "&:where(:has(#body-inner)) .fa-drumstick-bite::before"
    ]
  ],
  [
    "design-01337",
    [
      "&:where(:has(#body-inner)) .fa-holly-berry::before"
    ]
  ],
  [
    "design-01338",
    [
      "&:where(:has(#body-inner)) .fa-chevron-left::before"
    ]
  ],
  [
    "design-01339",
    [
      "&:where(:has(#body-inner)) .fa-bacteria::before"
    ]
  ],
  [
    "design-01340",
    [
      "&:where(:has(#body-inner)) .fa-hand-lizard::before"
    ]
  ],
  [
    "design-01341",
    [
      "&:where(:has(#body-inner)) .fa-notdef::before"
    ]
  ],
  [
    "design-01342",
    [
      "&:where(:has(#body-inner)) .fa-disease::before"
    ]
  ],
  [
    "design-01343",
    [
      "&:where(:has(#body-inner)) .fa-briefcase-medical::before"
    ]
  ],
  [
    "design-01344",
    [
      "&:where(:has(#body-inner)) .fa-genderless::before"
    ]
  ],
  [
    "design-01345",
    [
      "&:where(:has(#body-inner)) .fa-chevron-right::before"
    ]
  ],
  [
    "design-01346",
    [
      "&:where(:has(#body-inner)) .fa-retweet::before"
    ]
  ],
  [
    "design-01347",
    [
      "&:where(:has(#body-inner)) .fa-car-alt::before",
      "&:where(:has(#body-inner)) .fa-car-rear::before"
    ]
  ],
  [
    "design-01348",
    [
      "&:where(:has(#body-inner)) .fa-pump-soap::before"
    ]
  ],
  [
    "design-01349",
    [
      "&:where(:has(#body-inner)) .fa-video-slash::before"
    ]
  ],
  [
    "design-01350",
    [
      "&:where(:has(#body-inner)) .fa-battery-2::before",
      "&:where(:has(#body-inner)) .fa-battery-quarter::before"
    ]
  ],
  [
    "design-01351",
    [
      "&:where(:has(#body-inner)) .fa-radio::before"
    ]
  ],
  [
    "design-01352",
    [
      "&:where(:has(#body-inner)) .fa-baby-carriage::before",
      "&:where(:has(#body-inner)) .fa-carriage-baby::before"
    ]
  ],
  [
    "design-01353",
    [
      "&:where(:has(#body-inner)) .fa-traffic-light::before"
    ]
  ],
  [
    "design-01354",
    [
      "&:where(:has(#body-inner)) .fa-thermometer::before"
    ]
  ],
  [
    "design-01355",
    [
      "&:where(:has(#body-inner)) .fa-vr-cardboard::before"
    ]
  ],
  [
    "design-01356",
    [
      "&:where(:has(#body-inner)) .fa-hand-middle-finger::before"
    ]
  ],
  [
    "design-01357",
    [
      "&:where(:has(#body-inner)) .fa-percent::before",
      "&:where(:has(#body-inner)) .fa-percentage::before"
    ]
  ],
  [
    "design-01358",
    [
      "&:where(:has(#body-inner)) .fa-truck-moving::before"
    ]
  ],
  [
    "design-01359",
    [
      "&:where(:has(#body-inner)) .fa-glass-water-droplet::before"
    ]
  ],
  [
    "design-01360",
    [
      "&:where(:has(#body-inner)) .fa-display::before"
    ]
  ],
  [
    "design-01361",
    [
      "&:where(:has(#body-inner)) .fa-face-smile::before",
      "&:where(:has(#body-inner)) .fa-smile::before"
    ]
  ],
  [
    "design-01362",
    [
      "&:where(:has(#body-inner)) .fa-thumb-tack::before",
      "&:where(:has(#body-inner)) .fa-thumbtack::before"
    ]
  ],
  [
    "design-01363",
    [
      "&:where(:has(#body-inner)) .fa-trophy::before"
    ]
  ],
  [
    "design-01364",
    [
      "&:where(:has(#body-inner)) .fa-person-praying::before",
      "&:where(:has(#body-inner)) .fa-pray::before"
    ]
  ],
  [
    "design-01365",
    [
      "&:where(:has(#body-inner)) .fa-hammer::before"
    ]
  ],
  [
    "design-01366",
    [
      "&:where(:has(#body-inner)) .fa-hand-peace::before"
    ]
  ],
  [
    "design-01367",
    [
      "&:where(:has(#body-inner)) .fa-rotate::before",
      "&:where(:has(#body-inner)) .fa-sync-alt::before"
    ]
  ],
  [
    "design-01368",
    [
      "&:where(:has(#body-inner)) .fa-spinner::before"
    ]
  ],
  [
    "design-01369",
    [
      "&:where(:has(#body-inner)) .fa-robot::before"
    ]
  ],
  [
    "design-01370",
    [
      "&:where(:has(#body-inner)) .fa-peace::before"
    ]
  ],
  [
    "design-01371",
    [
      "&:where(:has(#body-inner)) .fa-cogs::before",
      "&:where(:has(#body-inner)) .fa-gears::before"
    ]
  ],
  [
    "design-01372",
    [
      "&:where(:has(#body-inner)) .fa-warehouse::before"
    ]
  ],
  [
    "design-01373",
    [
      "&:where(:has(#body-inner)) .fa-arrow-up-right-dots::before"
    ]
  ],
  [
    "design-01374",
    [
      "&:where(:has(#body-inner)) .fa-splotch::before"
    ]
  ],
  [
    "design-01375",
    [
      "&:where(:has(#body-inner)) .fa-face-grin-hearts::before",
      "&:where(:has(#body-inner)) .fa-grin-hearts::before"
    ]
  ],
  [
    "design-01376",
    [
      "&:where(:has(#body-inner)) .fa-dice-four::before"
    ]
  ],
  [
    "design-01377",
    [
      "&:where(:has(#body-inner)) .fa-sim-card::before"
    ]
  ],
  [
    "design-01378",
    [
      "&:where(:has(#body-inner)) .fa-transgender-alt::before",
      "&:where(:has(#body-inner)) .fa-transgender::before"
    ]
  ],
  [
    "design-01379",
    [
      "&:where(:has(#body-inner)) .fa-mercury::before"
    ]
  ],
  [
    "design-01380",
    [
      "&:where(:has(#body-inner)) .fa-arrow-turn-down::before",
      "&:where(:has(#body-inner)) .fa-level-down::before"
    ]
  ],
  [
    "design-01381",
    [
      "&:where(:has(#body-inner)) .fa-person-falling-burst::before"
    ]
  ],
  [
    "design-01382",
    [
      "&:where(:has(#body-inner)) .fa-award::before"
    ]
  ],
  [
    "design-01383",
    [
      "&:where(:has(#body-inner)) .fa-ticket-alt::before",
      "&:where(:has(#body-inner)) .fa-ticket-simple::before"
    ]
  ],
  [
    "design-01384",
    [
      "&:where(:has(#body-inner)) .fa-building::before"
    ]
  ],
  [
    "design-01385",
    [
      "&:where(:has(#body-inner)) .fa-angle-double-left::before",
      "&:where(:has(#body-inner)) .fa-angles-left::before"
    ]
  ],
  [
    "design-01386",
    [
      "&:where(:has(#body-inner)) .fa-qrcode::before"
    ]
  ],
  [
    "design-01387",
    [
      "&:where(:has(#body-inner)) .fa-clock-rotate-left::before",
      "&:where(:has(#body-inner)) .fa-history::before"
    ]
  ],
  [
    "design-01388",
    [
      "&:where(:has(#body-inner)) .fa-face-grin-beam-sweat::before",
      "&:where(:has(#body-inner)) .fa-grin-beam-sweat::before"
    ]
  ],
  [
    "design-01389",
    [
      "&:where(:has(#body-inner)) .fa-arrow-right-from-file::before",
      "&:where(:has(#body-inner)) .fa-file-export::before"
    ]
  ],
  [
    "design-01390",
    [
      "&:where(:has(#body-inner)) .fa-shield-blank::before",
      "&:where(:has(#body-inner)) .fa-shield::before"
    ]
  ],
  [
    "design-01391",
    [
      "&:where(:has(#body-inner)) .fa-arrow-up-short-wide::before",
      "&:where(:has(#body-inner)) .fa-sort-amount-up-alt::before"
    ]
  ],
  [
    "design-01392",
    [
      "&:where(:has(#body-inner)) .fa-house-medical::before"
    ]
  ],
  [
    "design-01393",
    [
      "&:where(:has(#body-inner)) .fa-golf-ball-tee::before",
      "&:where(:has(#body-inner)) .fa-golf-ball::before"
    ]
  ],
  [
    "design-01394",
    [
      "&:where(:has(#body-inner)) .fa-chevron-circle-left::before",
      "&:where(:has(#body-inner)) .fa-circle-chevron-left::before"
    ]
  ],
  [
    "design-01395",
    [
      "&:where(:has(#body-inner)) .fa-house-chimney-window::before"
    ]
  ],
  [
    "design-01396",
    [
      "&:where(:has(#body-inner)) .fa-pen-nib::before"
    ]
  ],
  [
    "design-01397",
    [
      "&:where(:has(#body-inner)) .fa-tent-arrow-turn-left::before"
    ]
  ],
  [
    "design-01398",
    [
      "&:where(:has(#body-inner)) .fa-tents::before"
    ]
  ],
  [
    "design-01399",
    [
      "&:where(:has(#body-inner)) .fa-magic::before",
      "&:where(:has(#body-inner)) .fa-wand-magic::before"
    ]
  ],
  [
    "design-01400",
    [
      "&:where(:has(#body-inner)) .fa-dog::before"
    ]
  ],
  [
    "design-01401",
    [
      "&:where(:has(#body-inner)) .fa-carrot::before"
    ]
  ],
  [
    "design-01402",
    [
      "&:where(:has(#body-inner)) .fa-moon::before"
    ]
  ],
  [
    "design-01403",
    [
      "&:where(:has(#body-inner)) .fa-wine-glass-alt::before",
      "&:where(:has(#body-inner)) .fa-wine-glass-empty::before"
    ]
  ],
  [
    "design-01404",
    [
      "&:where(:has(#body-inner)) .fa-cheese::before"
    ]
  ],
  [
    "design-01405",
    [
      "&:where(:has(#body-inner)) .fa-yin-yang::before"
    ]
  ],
  [
    "design-01406",
    [
      "&:where(:has(#body-inner)) .fa-music::before"
    ]
  ],
  [
    "design-01407",
    [
      "&:where(:has(#body-inner)) .fa-code-commit::before"
    ]
  ],
  [
    "design-01408",
    [
      "&:where(:has(#body-inner)) .fa-temperature-low::before"
    ]
  ],
  [
    "design-01409",
    [
      "&:where(:has(#body-inner)) .fa-biking::before",
      "&:where(:has(#body-inner)) .fa-person-biking::before"
    ]
  ],
  [
    "design-01410",
    [
      "&:where(:has(#body-inner)) .fa-broom::before"
    ]
  ],
  [
    "design-01411",
    [
      "&:where(:has(#body-inner)) .fa-shield-heart::before"
    ]
  ],
  [
    "design-01412",
    [
      "&:where(:has(#body-inner)) .fa-gopuram::before"
    ]
  ],
  [
    "design-01413",
    [
      "&:where(:has(#body-inner)) .fa-earth-oceania::before",
      "&:where(:has(#body-inner)) .fa-globe-oceania::before"
    ]
  ],
  [
    "design-01414",
    [
      "&:where(:has(#body-inner)) .fa-square-xmark::before",
      "&:where(:has(#body-inner)) .fa-times-square::before",
      "&:where(:has(#body-inner)) .fa-xmark-square::before"
    ]
  ],
  [
    "design-01415",
    [
      "&:where(:has(#body-inner)) .fa-hashtag::before"
    ]
  ],
  [
    "design-01416",
    [
      "&:where(:has(#body-inner)) .fa-expand-alt::before",
      "&:where(:has(#body-inner)) .fa-up-right-and-down-left-from-center::before"
    ]
  ],
  [
    "design-01417",
    [
      "&:where(:has(#body-inner)) .fa-oil-can::before"
    ]
  ],
  [
    "design-01418",
    [
      "&:where(:has(#body-inner)) .fa-t::before"
    ]
  ],
  [
    "design-01419",
    [
      "&:where(:has(#body-inner)) .fa-hippo::before"
    ]
  ],
  [
    "design-01420",
    [
      "&:where(:has(#body-inner)) .fa-chart-column::before"
    ]
  ],
  [
    "design-01421",
    [
      "&:where(:has(#body-inner)) .fa-infinity::before"
    ]
  ],
  [
    "design-01422",
    [
      "&:where(:has(#body-inner)) .fa-vial-circle-check::before"
    ]
  ],
  [
    "design-01423",
    [
      "&:where(:has(#body-inner)) .fa-person-arrow-down-to-line::before"
    ]
  ],
  [
    "design-01424",
    [
      "&:where(:has(#body-inner)) .fa-voicemail::before"
    ]
  ],
  [
    "design-01425",
    [
      "&:where(:has(#body-inner)) .fa-fan::before"
    ]
  ],
  [
    "design-01426",
    [
      "&:where(:has(#body-inner)) .fa-person-walking-luggage::before"
    ]
  ],
  [
    "design-01427",
    [
      "&:where(:has(#body-inner)) .fa-arrows-alt-v::before",
      "&:where(:has(#body-inner)) .fa-up-down::before"
    ]
  ],
  [
    "design-01428",
    [
      "&:where(:has(#body-inner)) .fa-cloud-moon-rain::before"
    ]
  ],
  [
    "design-01429",
    [
      "&:where(:has(#body-inner)) .fa-calendar::before"
    ]
  ],
  [
    "design-01430",
    [
      "&:where(:has(#body-inner)) .fa-trailer::before"
    ]
  ],
  [
    "design-01431",
    [
      "&:where(:has(#body-inner)) .fa-bahai::before",
      "&:where(:has(#body-inner)) .fa-haykal::before"
    ]
  ],
  [
    "design-01432",
    [
      "&:where(:has(#body-inner)) .fa-sd-card::before"
    ]
  ],
  [
    "design-01433",
    [
      "&:where(:has(#body-inner)) .fa-dragon::before"
    ]
  ],
  [
    "design-01434",
    [
      "&:where(:has(#body-inner)) .fa-shoe-prints::before"
    ]
  ],
  [
    "design-01435",
    [
      "&:where(:has(#body-inner)) .fa-circle-plus::before",
      "&:where(:has(#body-inner)) .fa-plus-circle::before"
    ]
  ],
  [
    "design-01436",
    [
      "&:where(:has(#body-inner)) .fa-face-grin-tongue-wink::before",
      "&:where(:has(#body-inner)) .fa-grin-tongue-wink::before"
    ]
  ],
  [
    "design-01437",
    [
      "&:where(:has(#body-inner)) .fa-hand-holding::before"
    ]
  ],
  [
    "design-01438",
    [
      "&:where(:has(#body-inner)) .fa-plug-circle-exclamation::before"
    ]
  ],
  [
    "design-01439",
    [
      "&:where(:has(#body-inner)) .fa-chain-broken::before",
      "&:where(:has(#body-inner)) .fa-chain-slash::before",
      "&:where(:has(#body-inner)) .fa-link-slash::before",
      "&:where(:has(#body-inner)) .fa-unlink::before"
    ]
  ],
  [
    "design-01440",
    [
      "&:where(:has(#body-inner)) .fa-clone::before"
    ]
  ],
  [
    "design-01441",
    [
      "&:where(:has(#body-inner)) .fa-person-walking-arrow-loop-left::before"
    ]
  ],
  [
    "design-01442",
    [
      "&:where(:has(#body-inner)) .fa-arrow-up-z-a::before",
      "&:where(:has(#body-inner)) .fa-sort-alpha-up-alt::before"
    ]
  ],
  [
    "design-01443",
    [
      "&:where(:has(#body-inner)) .fa-fire-alt::before",
      "&:where(:has(#body-inner)) .fa-fire-flame-curved::before"
    ]
  ],
  [
    "design-01444",
    [
      "&:where(:has(#body-inner)) .fa-tornado::before"
    ]
  ],
  [
    "design-01445",
    [
      "&:where(:has(#body-inner)) .fa-file-circle-plus::before"
    ]
  ],
  [
    "design-01446",
    [
      "&:where(:has(#body-inner)) .fa-book-quran::before",
      "&:where(:has(#body-inner)) .fa-quran::before"
    ]
  ],
  [
    "design-01447",
    [
      "&:where(:has(#body-inner)) .fa-anchor::before"
    ]
  ],
  [
    "design-01448",
    [
      "&:where(:has(#body-inner)) .fa-border-all::before"
    ]
  ],
  [
    "design-01449",
    [
      "&:where(:has(#body-inner)) .fa-angry::before",
      "&:where(:has(#body-inner)) .fa-face-angry::before"
    ]
  ],
  [
    "design-01450",
    [
      "&:where(:has(#body-inner)) .fa-cookie-bite::before"
    ]
  ],
  [
    "design-01451",
    [
      "&:where(:has(#body-inner)) .fa-arrow-trend-down::before"
    ]
  ],
  [
    "design-01452",
    [
      "&:where(:has(#body-inner)) .fa-feed::before",
      "&:where(:has(#body-inner)) .fa-rss::before"
    ]
  ],
  [
    "design-01453",
    [
      "&:where(:has(#body-inner)) .fa-draw-polygon::before"
    ]
  ],
  [
    "design-01454",
    [
      "&:where(:has(#body-inner)) .fa-balance-scale::before",
      "&:where(:has(#body-inner)) .fa-scale-balanced::before"
    ]
  ],
  [
    "design-01455",
    [
      "&:where(:has(#body-inner)) .fa-gauge-simple-high::before",
      "&:where(:has(#body-inner)) .fa-tachometer-fast::before",
      "&:where(:has(#body-inner)) .fa-tachometer::before"
    ]
  ],
  [
    "design-01456",
    [
      "&:where(:has(#body-inner)) .fa-shower::before"
    ]
  ],
  [
    "design-01457",
    [
      "&:where(:has(#body-inner)) .fa-desktop-alt::before",
      "&:where(:has(#body-inner)) .fa-desktop::before"
    ]
  ],
  [
    "design-01458",
    [
      "&:where(:has(#body-inner)) .fa-m::before"
    ]
  ],
  [
    "design-01459",
    [
      "&:where(:has(#body-inner)) .fa-table-list::before",
      "&:where(:has(#body-inner)) .fa-th-list::before"
    ]
  ],
  [
    "design-01460",
    [
      "&:where(:has(#body-inner)) .fa-comment-sms::before",
      "&:where(:has(#body-inner)) .fa-sms::before"
    ]
  ],
  [
    "design-01461",
    [
      "&:where(:has(#body-inner)) .fa-book::before"
    ]
  ],
  [
    "design-01462",
    [
      "&:where(:has(#body-inner)) .fa-user-plus::before"
    ]
  ],
  [
    "design-01463",
    [
      "&:where(:has(#body-inner)) .fa-check::before"
    ]
  ],
  [
    "design-01464",
    [
      "&:where(:has(#body-inner)) .fa-battery-4::before",
      "&:where(:has(#body-inner)) .fa-battery-three-quarters::before"
    ]
  ],
  [
    "design-01465",
    [
      "&:where(:has(#body-inner)) .fa-house-circle-check::before"
    ]
  ],
  [
    "design-01466",
    [
      "&:where(:has(#body-inner)) .fa-angle-left::before"
    ]
  ],
  [
    "design-01467",
    [
      "&:where(:has(#body-inner)) .fa-diagram-successor::before"
    ]
  ],
  [
    "design-01468",
    [
      "&:where(:has(#body-inner)) .fa-truck-arrow-right::before"
    ]
  ],
  [
    "design-01469",
    [
      "&:where(:has(#body-inner)) .fa-arrows-split-up-and-left::before"
    ]
  ],
  [
    "design-01470",
    [
      "&:where(:has(#body-inner)) .fa-fist-raised::before",
      "&:where(:has(#body-inner)) .fa-hand-fist::before"
    ]
  ],
  [
    "design-01471",
    [
      "&:where(:has(#body-inner)) .fa-cloud-moon::before"
    ]
  ],
  [
    "design-01472",
    [
      "&:where(:has(#body-inner)) .fa-briefcase::before"
    ]
  ],
  [
    "design-01473",
    [
      "&:where(:has(#body-inner)) .fa-person-falling::before"
    ]
  ],
  [
    "design-01474",
    [
      "&:where(:has(#body-inner)) .fa-image-portrait::before",
      "&:where(:has(#body-inner)) .fa-portrait::before"
    ]
  ],
  [
    "design-01475",
    [
      "&:where(:has(#body-inner)) .fa-user-tag::before"
    ]
  ],
  [
    "design-01476",
    [
      "&:where(:has(#body-inner)) .fa-rug::before"
    ]
  ],
  [
    "design-01477",
    [
      "&:where(:has(#body-inner)) .fa-earth-europe::before",
      "&:where(:has(#body-inner)) .fa-globe-europe::before"
    ]
  ],
  [
    "design-01478",
    [
      "&:where(:has(#body-inner)) .fa-cart-flatbed-suitcase::before",
      "&:where(:has(#body-inner)) .fa-luggage-cart::before"
    ]
  ],
  [
    "design-01479",
    [
      "&:where(:has(#body-inner)) .fa-rectangle-times::before",
      "&:where(:has(#body-inner)) .fa-rectangle-xmark::before",
      "&:where(:has(#body-inner)) .fa-times-rectangle::before",
      "&:where(:has(#body-inner)) .fa-window-close::before"
    ]
  ],
  [
    "design-01480",
    [
      "&:where(:has(#body-inner)) .fa-baht-sign::before"
    ]
  ],
  [
    "design-01481",
    [
      "&:where(:has(#body-inner)) .fa-book-open::before"
    ]
  ],
  [
    "design-01482",
    [
      "&:where(:has(#body-inner)) .fa-book-journal-whills::before",
      "&:where(:has(#body-inner)) .fa-journal-whills::before"
    ]
  ],
  [
    "design-01483",
    [
      "&:where(:has(#body-inner)) .fa-handcuffs::before"
    ]
  ],
  [
    "design-01484",
    [
      "&:where(:has(#body-inner)) .fa-exclamation-triangle::before",
      "&:where(:has(#body-inner)) .fa-triangle-exclamation::before",
      "&:where(:has(#body-inner)) .fa-warning::before"
    ]
  ],
  [
    "design-01485",
    [
      "&:where(:has(#body-inner)) .fa-database::before"
    ]
  ],
  [
    "design-01486",
    [
      "&:where(:has(#body-inner)) .fa-mail-forward::before",
      "&:where(:has(#body-inner)) .fa-share::before"
    ]
  ],
  [
    "design-01487",
    [
      "&:where(:has(#body-inner)) .fa-bottle-droplet::before"
    ]
  ],
  [
    "design-01488",
    [
      "&:where(:has(#body-inner)) .fa-mask-face::before"
    ]
  ],
  [
    "design-01489",
    [
      "&:where(:has(#body-inner)) .fa-hill-rockslide::before"
    ]
  ],
  [
    "design-01490",
    [
      "&:where(:has(#body-inner)) .fa-exchange-alt::before",
      "&:where(:has(#body-inner)) .fa-right-left::before"
    ]
  ],
  [
    "design-01491",
    [
      "&:where(:has(#body-inner)) .fa-paper-plane::before"
    ]
  ],
  [
    "design-01492",
    [
      "&:where(:has(#body-inner)) .fa-road-circle-exclamation::before"
    ]
  ],
  [
    "design-01493",
    [
      "&:where(:has(#body-inner)) .fa-dungeon::before"
    ]
  ],
  [
    "design-01494",
    [
      "&:where(:has(#body-inner)) .fa-align-right::before"
    ]
  ],
  [
    "design-01495",
    [
      "&:where(:has(#body-inner)) .fa-money-bill-1-wave::before",
      "&:where(:has(#body-inner)) .fa-money-bill-wave-alt::before"
    ]
  ],
  [
    "design-01496",
    [
      "&:where(:has(#body-inner)) .fa-life-ring::before"
    ]
  ],
  [
    "design-01497",
    [
      "&:where(:has(#body-inner)) .fa-hands::before",
      "&:where(:has(#body-inner)) .fa-sign-language::before",
      "&:where(:has(#body-inner)) .fa-signing::before"
    ]
  ],
  [
    "design-01498",
    [
      "&:where(:has(#body-inner)) .fa-calendar-day::before"
    ]
  ],
  [
    "design-01499",
    [
      "&:where(:has(#body-inner)) .fa-ladder-water::before",
      "&:where(:has(#body-inner)) .fa-swimming-pool::before",
      "&:where(:has(#body-inner)) .fa-water-ladder::before"
    ]
  ],
  [
    "design-01500",
    [
      "&:where(:has(#body-inner)) .fa-arrows-up-down::before",
      "&:where(:has(#body-inner)) .fa-arrows-v::before"
    ]
  ],
  [
    "design-01501",
    [
      "&:where(:has(#body-inner)) .fa-face-grimace::before",
      "&:where(:has(#body-inner)) .fa-grimace::before"
    ]
  ],
  [
    "design-01502",
    [
      "&:where(:has(#body-inner)) .fa-wheelchair-alt::before",
      "&:where(:has(#body-inner)) .fa-wheelchair-move::before"
    ]
  ],
  [
    "design-01503",
    [
      "&:where(:has(#body-inner)) .fa-level-down-alt::before",
      "&:where(:has(#body-inner)) .fa-turn-down::before"
    ]
  ],
  [
    "design-01504",
    [
      "&:where(:has(#body-inner)) .fa-person-walking-arrow-right::before"
    ]
  ],
  [
    "design-01505",
    [
      "&:where(:has(#body-inner)) .fa-envelope-square::before",
      "&:where(:has(#body-inner)) .fa-square-envelope::before"
    ]
  ],
  [
    "design-01506",
    [
      "&:where(:has(#body-inner)) .fa-dice::before"
    ]
  ],
  [
    "design-01507",
    [
      "&:where(:has(#body-inner)) .fa-bowling-ball::before"
    ]
  ],
  [
    "design-01508",
    [
      "&:where(:has(#body-inner)) .fa-brain::before"
    ]
  ],
  [
    "design-01509",
    [
      "&:where(:has(#body-inner)) .fa-band-aid::before",
      "&:where(:has(#body-inner)) .fa-bandage::before"
    ]
  ],
  [
    "design-01510",
    [
      "&:where(:has(#body-inner)) .fa-calendar-minus::before"
    ]
  ],
  [
    "design-01511",
    [
      "&:where(:has(#body-inner)) .fa-circle-xmark::before",
      "&:where(:has(#body-inner)) .fa-times-circle::before",
      "&:where(:has(#body-inner)) .fa-xmark-circle::before"
    ]
  ],
  [
    "design-01512",
    [
      "&:where(:has(#body-inner)) .fa-gifts::before"
    ]
  ],
  [
    "design-01513",
    [
      "&:where(:has(#body-inner)) .fa-hotel::before"
    ]
  ],
  [
    "design-01514",
    [
      "&:where(:has(#body-inner)) .fa-earth-asia::before",
      "&:where(:has(#body-inner)) .fa-globe-asia::before"
    ]
  ],
  [
    "design-01515",
    [
      "&:where(:has(#body-inner)) .fa-id-card-alt::before",
      "&:where(:has(#body-inner)) .fa-id-card-clip::before"
    ]
  ],
  [
    "design-01516",
    [
      "&:where(:has(#body-inner)) .fa-magnifying-glass-plus::before",
      "&:where(:has(#body-inner)) .fa-search-plus::before"
    ]
  ],
  [
    "design-01517",
    [
      "&:where(:has(#body-inner)) .fa-thumbs-up::before"
    ]
  ],
  [
    "design-01518",
    [
      "&:where(:has(#body-inner)) .fa-user-clock::before"
    ]
  ],
  [
    "design-01519",
    [
      "&:where(:has(#body-inner)) .fa-allergies::before",
      "&:where(:has(#body-inner)) .fa-hand-dots::before"
    ]
  ],
  [
    "design-01520",
    [
      "&:where(:has(#body-inner)) .fa-file-invoice::before"
    ]
  ],
  [
    "design-01521",
    [
      "&:where(:has(#body-inner)) .fa-window-minimize::before"
    ]
  ],
  [
    "design-01522",
    [
      "&:where(:has(#body-inner)) .fa-coffee::before",
      "&:where(:has(#body-inner)) .fa-mug-saucer::before"
    ]
  ],
  [
    "design-01523",
    [
      "&:where(:has(#body-inner)) .fa-brush::before"
    ]
  ],
  [
    "design-01524",
    [
      "&:where(:has(#body-inner)) .fa-mask::before"
    ]
  ],
  [
    "design-01525",
    [
      "&:where(:has(#body-inner)) .fa-magnifying-glass-minus::before",
      "&:where(:has(#body-inner)) .fa-search-minus::before"
    ]
  ],
  [
    "design-01526",
    [
      "&:where(:has(#body-inner)) .fa-ruler-vertical::before"
    ]
  ],
  [
    "design-01527",
    [
      "&:where(:has(#body-inner)) .fa-user-alt::before",
      "&:where(:has(#body-inner)) .fa-user-large::before"
    ]
  ],
  [
    "design-01528",
    [
      "&:where(:has(#body-inner)) .fa-train-tram::before"
    ]
  ],
  [
    "design-01529",
    [
      "&:where(:has(#body-inner)) .fa-user-nurse::before"
    ]
  ],
  [
    "design-01530",
    [
      "&:where(:has(#body-inner)) .fa-syringe::before"
    ]
  ],
  [
    "design-01531",
    [
      "&:where(:has(#body-inner)) .fa-cloud-sun::before"
    ]
  ],
  [
    "design-01532",
    [
      "&:where(:has(#body-inner)) .fa-stopwatch-20::before"
    ]
  ],
  [
    "design-01533",
    [
      "&:where(:has(#body-inner)) .fa-square-full::before"
    ]
  ],
  [
    "design-01534",
    [
      "&:where(:has(#body-inner)) .fa-magnet::before"
    ]
  ],
  [
    "design-01535",
    [
      "&:where(:has(#body-inner)) .fa-jar::before"
    ]
  ],
  [
    "design-01536",
    [
      "&:where(:has(#body-inner)) .fa-note-sticky::before",
      "&:where(:has(#body-inner)) .fa-sticky-note::before"
    ]
  ],
  [
    "design-01537",
    [
      "&:where(:has(#body-inner)) .fa-bug-slash::before"
    ]
  ],
  [
    "design-01538",
    [
      "&:where(:has(#body-inner)) .fa-arrow-up-from-water-pump::before"
    ]
  ],
  [
    "design-01539",
    [
      "&:where(:has(#body-inner)) .fa-bone::before"
    ]
  ],
  [
    "design-01540",
    [
      "&:where(:has(#body-inner)) .fa-user-injured::before"
    ]
  ],
  [
    "design-01541",
    [
      "&:where(:has(#body-inner)) .fa-face-sad-tear::before",
      "&:where(:has(#body-inner)) .fa-sad-tear::before"
    ]
  ],
  [
    "design-01542",
    [
      "&:where(:has(#body-inner)) .fa-plane::before"
    ]
  ],
  [
    "design-01543",
    [
      "&:where(:has(#body-inner)) .fa-tent-arrows-down::before"
    ]
  ],
  [
    "design-01544",
    [
      "&:where(:has(#body-inner)) .fa-exclamation::before"
    ]
  ],
  [
    "design-01545",
    [
      "&:where(:has(#body-inner)) .fa-arrows-spin::before"
    ]
  ],
  [
    "design-01546",
    [
      "&:where(:has(#body-inner)) .fa-print::before"
    ]
  ],
  [
    "design-01547",
    [
      "&:where(:has(#body-inner)) .fa-try::before",
      "&:where(:has(#body-inner)) .fa-turkish-lira-sign::before",
      "&:where(:has(#body-inner)) .fa-turkish-lira::before"
    ]
  ],
  [
    "design-01548",
    [
      "&:where(:has(#body-inner)) .fa-dollar-sign::before",
      "&:where(:has(#body-inner)) .fa-dollar::before",
      "&:where(:has(#body-inner)) .fa-usd::before"
    ]
  ],
  [
    "design-01549",
    [
      "&:where(:has(#body-inner)) .fa-x::before"
    ]
  ],
  [
    "design-01550",
    [
      "&:where(:has(#body-inner)) .fa-magnifying-glass-dollar::before",
      "&:where(:has(#body-inner)) .fa-search-dollar::before"
    ]
  ],
  [
    "design-01551",
    [
      "&:where(:has(#body-inner)) .fa-users-cog::before",
      "&:where(:has(#body-inner)) .fa-users-gear::before"
    ]
  ],
  [
    "design-01552",
    [
      "&:where(:has(#body-inner)) .fa-person-military-pointing::before"
    ]
  ],
  [
    "design-01553",
    [
      "&:where(:has(#body-inner)) .fa-bank::before",
      "&:where(:has(#body-inner)) .fa-building-columns::before",
      "&:where(:has(#body-inner)) .fa-institution::before",
      "&:where(:has(#body-inner)) .fa-museum::before",
      "&:where(:has(#body-inner)) .fa-university::before"
    ]
  ],
  [
    "design-01554",
    [
      "&:where(:has(#body-inner)) .fa-umbrella::before"
    ]
  ],
  [
    "design-01555",
    [
      "&:where(:has(#body-inner)) .fa-trowel::before"
    ]
  ],
  [
    "design-01556",
    [
      "&:where(:has(#body-inner)) .fa-d::before"
    ]
  ],
  [
    "design-01557",
    [
      "&:where(:has(#body-inner)) .fa-stapler::before"
    ]
  ],
  [
    "design-01558",
    [
      "&:where(:has(#body-inner)) .fa-masks-theater::before",
      "&:where(:has(#body-inner)) .fa-theater-masks::before"
    ]
  ],
  [
    "design-01559",
    [
      "&:where(:has(#body-inner)) .fa-kip-sign::before"
    ]
  ],
  [
    "design-01560",
    [
      "&:where(:has(#body-inner)) .fa-hand-point-left::before"
    ]
  ],
  [
    "design-01561",
    [
      "&:where(:has(#body-inner)) .fa-handshake-alt::before",
      "&:where(:has(#body-inner)) .fa-handshake-simple::before"
    ]
  ],
  [
    "design-01562",
    [
      "&:where(:has(#body-inner)) .fa-fighter-jet::before",
      "&:where(:has(#body-inner)) .fa-jet-fighter::before"
    ]
  ],
  [
    "design-01563",
    [
      "&:where(:has(#body-inner)) .fa-share-alt-square::before",
      "&:where(:has(#body-inner)) .fa-square-share-nodes::before"
    ]
  ],
  [
    "design-01564",
    [
      "&:where(:has(#body-inner)) .fa-barcode::before"
    ]
  ],
  [
    "design-01565",
    [
      "&:where(:has(#body-inner)) .fa-plus-minus::before"
    ]
  ],
  [
    "design-01566",
    [
      "&:where(:has(#body-inner)) .fa-video-camera::before",
      "&:where(:has(#body-inner)) .fa-video::before"
    ]
  ],
  [
    "design-01567",
    [
      "&:where(:has(#body-inner)) .fa-graduation-cap::before",
      "&:where(:has(#body-inner)) .fa-mortar-board::before"
    ]
  ],
  [
    "design-01568",
    [
      "&:where(:has(#body-inner)) .fa-hand-holding-medical::before"
    ]
  ],
  [
    "design-01569",
    [
      "&:where(:has(#body-inner)) .fa-person-circle-check::before"
    ]
  ],
  [
    "design-01570",
    [
      "&:where(:has(#body-inner)) .fa-level-up-alt::before",
      "&:where(:has(#body-inner)) .fa-turn-up::before"
    ]
  ],
  [
    "design-01571",
    [
      "&:where(:has(#body-inner)) .fa-sr-only",
      "&:where(:has(#body-inner)) .fa-sr-only-focusable:not(:focus)",
      "&:where(:has(#body-inner)) .sr-only",
      "&:where(:has(#body-inner)) .sr-only-focusable:not(:focus)"
    ]
  ],
  [
    "design-01572",
    [
      "&:where(:has(#body-inner)) .fa-sr-only",
      "&:where(:has(#body-inner)) .fa-sr-only-focusable:not(:focus)",
      "&:where(:has(#body-inner)) .sr-only",
      "&:where(:has(#body-inner)) .sr-only-focusable:not(:focus)"
    ]
  ],
  [
    "design-01573",
    [
      "&:where(:has(#body-inner)) .fa-sr-only",
      "&:where(:has(#body-inner)) .fa-sr-only-focusable:not(:focus)",
      "&:where(:has(#body-inner)) .sr-only",
      "&:where(:has(#body-inner)) .sr-only-focusable:not(:focus)"
    ]
  ],
  [
    "design-01574",
    [
      "&:where(:has(#body-inner)) .fa-sr-only",
      "&:where(:has(#body-inner)) .fa-sr-only-focusable:not(:focus)",
      "&:where(:has(#body-inner)) .sr-only",
      "&:where(:has(#body-inner)) .sr-only-focusable:not(:focus)"
    ]
  ],
  [
    "design-01575",
    [
      "&:where(:has(#body-inner)) .fa-sr-only",
      "&:where(:has(#body-inner)) .fa-sr-only-focusable:not(:focus)",
      "&:where(:has(#body-inner)) .sr-only",
      "&:where(:has(#body-inner)) .sr-only-focusable:not(:focus)"
    ]
  ],
  [
    "design-01576",
    [
      "&:where(:has(#body-inner)) .fa-sr-only",
      "&:where(:has(#body-inner)) .fa-sr-only-focusable:not(:focus)",
      "&:where(:has(#body-inner)) .sr-only",
      "&:where(:has(#body-inner)) .sr-only-focusable:not(:focus)"
    ]
  ],
  [
    "design-01577",
    [
      "&:where(:has(#body-inner)) .fa-sr-only",
      "&:where(:has(#body-inner)) .fa-sr-only-focusable:not(:focus)",
      "&:where(:has(#body-inner)) .sr-only",
      "&:where(:has(#body-inner)) .sr-only-focusable:not(:focus)"
    ]
  ],
  [
    "design-01578",
    [
      "&:where(:has(#body-inner)) .fa-sr-only",
      "&:where(:has(#body-inner)) .fa-sr-only-focusable:not(:focus)",
      "&:where(:has(#body-inner)) .sr-only",
      "&:where(:has(#body-inner)) .sr-only-focusable:not(:focus)"
    ]
  ],
  [
    "design-01579",
    [
      "&:where(:has(#body-inner)) .fa-sr-only",
      "&:where(:has(#body-inner)) .fa-sr-only-focusable:not(:focus)",
      "&:where(:has(#body-inner)) .sr-only",
      "&:where(:has(#body-inner)) .sr-only-focusable:not(:focus)"
    ]
  ],
  [
    "design-01580",
    [
      "&:where(:has(#body-inner)):root"
    ]
  ],
  [
    "design-01581",
    [
      "&:where(:has(#body-inner)):root"
    ]
  ],
  [
    "design-01582",
    [
      "&:where(:has(#body-inner)) .fa-brands",
      "&:where(:has(#body-inner)) .fab"
    ]
  ],
  [
    "design-01583",
    [
      "&:where(:has(#body-inner)) .fa-monero::before"
    ]
  ],
  [
    "design-01584",
    [
      "&:where(:has(#body-inner)) .fa-hooli::before"
    ]
  ],
  [
    "design-01585",
    [
      "&:where(:has(#body-inner)) .fa-yelp::before"
    ]
  ],
  [
    "design-01586",
    [
      "&:where(:has(#body-inner)) .fa-cc-visa::before"
    ]
  ],
  [
    "design-01587",
    [
      "&:where(:has(#body-inner)) .fa-lastfm::before"
    ]
  ],
  [
    "design-01588",
    [
      "&:where(:has(#body-inner)) .fa-shopware::before"
    ]
  ],
  [
    "design-01589",
    [
      "&:where(:has(#body-inner)) .fa-creative-commons-nc::before"
    ]
  ],
  [
    "design-01590",
    [
      "&:where(:has(#body-inner)) .fa-aws::before"
    ]
  ],
  [
    "design-01591",
    [
      "&:where(:has(#body-inner)) .fa-redhat::before"
    ]
  ],
  [
    "design-01592",
    [
      "&:where(:has(#body-inner)) .fa-yoast::before"
    ]
  ],
  [
    "design-01593",
    [
      "&:where(:has(#body-inner)) .fa-cloudflare::before"
    ]
  ],
  [
    "design-01594",
    [
      "&:where(:has(#body-inner)) .fa-ups::before"
    ]
  ],
  [
    "design-01595",
    [
      "&:where(:has(#body-inner)) .fa-pixiv::before"
    ]
  ],
  [
    "design-01596",
    [
      "&:where(:has(#body-inner)) .fa-wpexplorer::before"
    ]
  ],
  [
    "design-01597",
    [
      "&:where(:has(#body-inner)) .fa-dyalog::before"
    ]
  ],
  [
    "design-01598",
    [
      "&:where(:has(#body-inner)) .fa-bity::before"
    ]
  ],
  [
    "design-01599",
    [
      "&:where(:has(#body-inner)) .fa-stackpath::before"
    ]
  ],
  [
    "design-01600",
    [
      "&:where(:has(#body-inner)) .fa-buysellads::before"
    ]
  ],
  [
    "design-01601",
    [
      "&:where(:has(#body-inner)) .fa-first-order::before"
    ]
  ],
  [
    "design-01602",
    [
      "&:where(:has(#body-inner)) .fa-modx::before"
    ]
  ],
  [
    "design-01603",
    [
      "&:where(:has(#body-inner)) .fa-guilded::before"
    ]
  ],
  [
    "design-01604",
    [
      "&:where(:has(#body-inner)) .fa-vnv::before"
    ]
  ],
  [
    "design-01605",
    [
      "&:where(:has(#body-inner)) .fa-js-square::before",
      "&:where(:has(#body-inner)) .fa-square-js::before"
    ]
  ],
  [
    "design-01606",
    [
      "&:where(:has(#body-inner)) .fa-microsoft::before"
    ]
  ],
  [
    "design-01607",
    [
      "&:where(:has(#body-inner)) .fa-qq::before"
    ]
  ],
  [
    "design-01608",
    [
      "&:where(:has(#body-inner)) .fa-orcid::before"
    ]
  ],
  [
    "design-01609",
    [
      "&:where(:has(#body-inner)) .fa-java::before"
    ]
  ],
  [
    "design-01610",
    [
      "&:where(:has(#body-inner)) .fa-invision::before"
    ]
  ],
  [
    "design-01611",
    [
      "&:where(:has(#body-inner)) .fa-creative-commons-pd-alt::before"
    ]
  ],
  [
    "design-01612",
    [
      "&:where(:has(#body-inner)) .fa-centercode::before"
    ]
  ],
  [
    "design-01613",
    [
      "&:where(:has(#body-inner)) .fa-glide-g::before"
    ]
  ],
  [
    "design-01614",
    [
      "&:where(:has(#body-inner)) .fa-drupal::before"
    ]
  ],
  [
    "design-01615",
    [
      "&:where(:has(#body-inner)) .fa-jxl::before"
    ]
  ],
  [
    "design-01616",
    [
      "&:where(:has(#body-inner)) .fa-hire-a-helper::before"
    ]
  ],
  [
    "design-01617",
    [
      "&:where(:has(#body-inner)) .fa-creative-commons-by::before"
    ]
  ],
  [
    "design-01618",
    [
      "&:where(:has(#body-inner)) .fa-unity::before"
    ]
  ],
  [
    "design-01619",
    [
      "&:where(:has(#body-inner)) .fa-whmcs::before"
    ]
  ],
  [
    "design-01620",
    [
      "&:where(:has(#body-inner)) .fa-rocketchat::before"
    ]
  ],
  [
    "design-01621",
    [
      "&:where(:has(#body-inner)) .fa-vk::before"
    ]
  ],
  [
    "design-01622",
    [
      "&:where(:has(#body-inner)) .fa-untappd::before"
    ]
  ],
  [
    "design-01623",
    [
      "&:where(:has(#body-inner)) .fa-mailchimp::before"
    ]
  ],
  [
    "design-01624",
    [
      "&:where(:has(#body-inner)) .fa-css3-alt::before"
    ]
  ],
  [
    "design-01625",
    [
      "&:where(:has(#body-inner)) .fa-reddit-square::before",
      "&:where(:has(#body-inner)) .fa-square-reddit::before"
    ]
  ],
  [
    "design-01626",
    [
      "&:where(:has(#body-inner)) .fa-vimeo-v::before"
    ]
  ],
  [
    "design-01627",
    [
      "&:where(:has(#body-inner)) .fa-contao::before"
    ]
  ],
  [
    "design-01628",
    [
      "&:where(:has(#body-inner)) .fa-square-font-awesome::before"
    ]
  ],
  [
    "design-01629",
    [
      "&:where(:has(#body-inner)) .fa-deskpro::before"
    ]
  ],
  [
    "design-01630",
    [
      "&:where(:has(#body-inner)) .fa-brave::before"
    ]
  ],
  [
    "design-01631",
    [
      "&:where(:has(#body-inner)) .fa-sistrix::before"
    ]
  ],
  [
    "design-01632",
    [
      "&:where(:has(#body-inner)) .fa-instagram-square::before",
      "&:where(:has(#body-inner)) .fa-square-instagram::before"
    ]
  ],
  [
    "design-01633",
    [
      "&:where(:has(#body-inner)) .fa-battle-net::before"
    ]
  ],
  [
    "design-01634",
    [
      "&:where(:has(#body-inner)) .fa-the-red-yeti::before"
    ]
  ],
  [
    "design-01635",
    [
      "&:where(:has(#body-inner)) .fa-hacker-news-square::before",
      "&:where(:has(#body-inner)) .fa-square-hacker-news::before"
    ]
  ],
  [
    "design-01636",
    [
      "&:where(:has(#body-inner)) .fa-edge::before"
    ]
  ],
  [
    "design-01637",
    [
      "&:where(:has(#body-inner)) .fa-threads::before"
    ]
  ],
  [
    "design-01638",
    [
      "&:where(:has(#body-inner)) .fa-napster::before"
    ]
  ],
  [
    "design-01639",
    [
      "&:where(:has(#body-inner)) .fa-snapchat-square::before",
      "&:where(:has(#body-inner)) .fa-square-snapchat::before"
    ]
  ],
  [
    "design-01640",
    [
      "&:where(:has(#body-inner)) .fa-google-plus-g::before"
    ]
  ],
  [
    "design-01641",
    [
      "&:where(:has(#body-inner)) .fa-artstation::before"
    ]
  ],
  [
    "design-01642",
    [
      "&:where(:has(#body-inner)) .fa-markdown::before"
    ]
  ],
  [
    "design-01643",
    [
      "&:where(:has(#body-inner)) .fa-sourcetree::before"
    ]
  ],
  [
    "design-01644",
    [
      "&:where(:has(#body-inner)) .fa-google-plus::before"
    ]
  ],
  [
    "design-01645",
    [
      "&:where(:has(#body-inner)) .fa-diaspora::before"
    ]
  ],
  [
    "design-01646",
    [
      "&:where(:has(#body-inner)) .fa-foursquare::before"
    ]
  ],
  [
    "design-01647",
    [
      "&:where(:has(#body-inner)) .fa-stack-overflow::before"
    ]
  ],
  [
    "design-01648",
    [
      "&:where(:has(#body-inner)) .fa-github-alt::before"
    ]
  ],
  [
    "design-01649",
    [
      "&:where(:has(#body-inner)) .fa-phoenix-squadron::before"
    ]
  ],
  [
    "design-01650",
    [
      "&:where(:has(#body-inner)) .fa-pagelines::before"
    ]
  ],
  [
    "design-01651",
    [
      "&:where(:has(#body-inner)) .fa-algolia::before"
    ]
  ],
  [
    "design-01652",
    [
      "&:where(:has(#body-inner)) .fa-red-river::before"
    ]
  ],
  [
    "design-01653",
    [
      "&:where(:has(#body-inner)) .fa-creative-commons-sa::before"
    ]
  ],
  [
    "design-01654",
    [
      "&:where(:has(#body-inner)) .fa-safari::before"
    ]
  ],
  [
    "design-01655",
    [
      "&:where(:has(#body-inner)) .fa-google::before"
    ]
  ],
  [
    "design-01656",
    [
      "&:where(:has(#body-inner)) .fa-font-awesome-alt::before",
      "&:where(:has(#body-inner)) .fa-square-font-awesome-stroke::before"
    ]
  ],
  [
    "design-01657",
    [
      "&:where(:has(#body-inner)) .fa-atlassian::before"
    ]
  ],
  [
    "design-01658",
    [
      "&:where(:has(#body-inner)) .fa-linkedin-in::before"
    ]
  ],
  [
    "design-01659",
    [
      "&:where(:has(#body-inner)) .fa-digital-ocean::before"
    ]
  ],
  [
    "design-01660",
    [
      "&:where(:has(#body-inner)) .fa-nimblr::before"
    ]
  ],
  [
    "design-01661",
    [
      "&:where(:has(#body-inner)) .fa-chromecast::before"
    ]
  ],
  [
    "design-01662",
    [
      "&:where(:has(#body-inner)) .fa-evernote::before"
    ]
  ],
  [
    "design-01663",
    [
      "&:where(:has(#body-inner)) .fa-hacker-news::before"
    ]
  ],
  [
    "design-01664",
    [
      "&:where(:has(#body-inner)) .fa-creative-commons-sampling::before"
    ]
  ],
  [
    "design-01665",
    [
      "&:where(:has(#body-inner)) .fa-adversal::before"
    ]
  ],
  [
    "design-01666",
    [
      "&:where(:has(#body-inner)) .fa-creative-commons::before"
    ]
  ],
  [
    "design-01667",
    [
      "&:where(:has(#body-inner)) .fa-watchman-monitoring::before"
    ]
  ],
  [
    "design-01668",
    [
      "&:where(:has(#body-inner)) .fa-fonticons::before"
    ]
  ],
  [
    "design-01669",
    [
      "&:where(:has(#body-inner)) .fa-weixin::before"
    ]
  ],
  [
    "design-01670",
    [
      "&:where(:has(#body-inner)) .fa-shirtsinbulk::before"
    ]
  ],
  [
    "design-01671",
    [
      "&:where(:has(#body-inner)) .fa-codepen::before"
    ]
  ],
  [
    "design-01672",
    [
      "&:where(:has(#body-inner)) .fa-git-alt::before"
    ]
  ],
  [
    "design-01673",
    [
      "&:where(:has(#body-inner)) .fa-lyft::before"
    ]
  ],
  [
    "design-01674",
    [
      "&:where(:has(#body-inner)) .fa-rev::before"
    ]
  ],
  [
    "design-01675",
    [
      "&:where(:has(#body-inner)) .fa-windows::before"
    ]
  ],
  [
    "design-01676",
    [
      "&:where(:has(#body-inner)) .fa-wizards-of-the-coast::before"
    ]
  ],
  [
    "design-01677",
    [
      "&:where(:has(#body-inner)) .fa-square-viadeo::before",
      "&:where(:has(#body-inner)) .fa-viadeo-square::before"
    ]
  ],
  [
    "design-01678",
    [
      "&:where(:has(#body-inner)) .fa-meetup::before"
    ]
  ],
  [
    "design-01679",
    [
      "&:where(:has(#body-inner)) .fa-centos::before"
    ]
  ],
  [
    "design-01680",
    [
      "&:where(:has(#body-inner)) .fa-adn::before"
    ]
  ],
  [
    "design-01681",
    [
      "&:where(:has(#body-inner)) .fa-cloudsmith::before"
    ]
  ],
  [
    "design-01682",
    [
      "&:where(:has(#body-inner)) .fa-opensuse::before"
    ]
  ],
  [
    "design-01683",
    [
      "&:where(:has(#body-inner)) .fa-pied-piper-alt::before"
    ]
  ],
  [
    "design-01684",
    [
      "&:where(:has(#body-inner)) .fa-dribbble-square::before",
      "&:where(:has(#body-inner)) .fa-square-dribbble::before"
    ]
  ],
  [
    "design-01685",
    [
      "&:where(:has(#body-inner)) .fa-codiepie::before"
    ]
  ],
  [
    "design-01686",
    [
      "&:where(:has(#body-inner)) .fa-node::before"
    ]
  ],
  [
    "design-01687",
    [
      "&:where(:has(#body-inner)) .fa-mix::before"
    ]
  ],
  [
    "design-01688",
    [
      "&:where(:has(#body-inner)) .fa-steam::before"
    ]
  ],
  [
    "design-01689",
    [
      "&:where(:has(#body-inner)) .fa-cc-apple-pay::before"
    ]
  ],
  [
    "design-01690",
    [
      "&:where(:has(#body-inner)) .fa-scribd::before"
    ]
  ],
  [
    "design-01691",
    [
      "&:where(:has(#body-inner)) .fa-debian::before"
    ]
  ],
  [
    "design-01692",
    [
      "&:where(:has(#body-inner)) .fa-openid::before"
    ]
  ],
  [
    "design-01693",
    [
      "&:where(:has(#body-inner)) .fa-instalod::before"
    ]
  ],
  [
    "design-01694",
    [
      "&:where(:has(#body-inner)) .fa-expeditedssl::before"
    ]
  ],
  [
    "design-01695",
    [
      "&:where(:has(#body-inner)) .fa-sellcast::before"
    ]
  ],
  [
    "design-01696",
    [
      "&:where(:has(#body-inner)) .fa-square-twitter::before",
      "&:where(:has(#body-inner)) .fa-twitter-square::before"
    ]
  ],
  [
    "design-01697",
    [
      "&:where(:has(#body-inner)) .fa-r-project::before"
    ]
  ],
  [
    "design-01698",
    [
      "&:where(:has(#body-inner)) .fa-delicious::before"
    ]
  ],
  [
    "design-01699",
    [
      "&:where(:has(#body-inner)) .fa-freebsd::before"
    ]
  ],
  [
    "design-01700",
    [
      "&:where(:has(#body-inner)) .fa-vuejs::before"
    ]
  ],
  [
    "design-01701",
    [
      "&:where(:has(#body-inner)) .fa-accusoft::before"
    ]
  ],
  [
    "design-01702",
    [
      "&:where(:has(#body-inner)) .fa-ioxhost::before"
    ]
  ],
  [
    "design-01703",
    [
      "&:where(:has(#body-inner)) .fa-fonticons-fi::before"
    ]
  ],
  [
    "design-01704",
    [
      "&:where(:has(#body-inner)) .fa-app-store::before"
    ]
  ],
  [
    "design-01705",
    [
      "&:where(:has(#body-inner)) .fa-cc-mastercard::before"
    ]
  ],
  [
    "design-01706",
    [
      "&:where(:has(#body-inner)) .fa-itunes-note::before"
    ]
  ],
  [
    "design-01707",
    [
      "&:where(:has(#body-inner)) .fa-golang::before"
    ]
  ],
  [
    "design-01708",
    [
      "&:where(:has(#body-inner)) .fa-kickstarter::before",
      "&:where(:has(#body-inner)) .fa-square-kickstarter::before"
    ]
  ],
  [
    "design-01709",
    [
      "&:where(:has(#body-inner)) .fa-grav::before"
    ]
  ],
  [
    "design-01710",
    [
      "&:where(:has(#body-inner)) .fa-weibo::before"
    ]
  ],
  [
    "design-01711",
    [
      "&:where(:has(#body-inner)) .fa-uncharted::before"
    ]
  ],
  [
    "design-01712",
    [
      "&:where(:has(#body-inner)) .fa-firstdraft::before"
    ]
  ],
  [
    "design-01713",
    [
      "&:where(:has(#body-inner)) .fa-square-youtube::before",
      "&:where(:has(#body-inner)) .fa-youtube-square::before"
    ]
  ],
  [
    "design-01714",
    [
      "&:where(:has(#body-inner)) .fa-wikipedia-w::before"
    ]
  ],
  [
    "design-01715",
    [
      "&:where(:has(#body-inner)) .fa-rendact::before",
      "&:where(:has(#body-inner)) .fa-wpressr::before"
    ]
  ],
  [
    "design-01716",
    [
      "&:where(:has(#body-inner)) .fa-angellist::before"
    ]
  ],
  [
    "design-01717",
    [
      "&:where(:has(#body-inner)) .fa-galactic-republic::before"
    ]
  ],
  [
    "design-01718",
    [
      "&:where(:has(#body-inner)) .fa-nfc-directional::before"
    ]
  ],
  [
    "design-01719",
    [
      "&:where(:has(#body-inner)) .fa-skype::before"
    ]
  ],
  [
    "design-01720",
    [
      "&:where(:has(#body-inner)) .fa-joget::before"
    ]
  ],
  [
    "design-01721",
    [
      "&:where(:has(#body-inner)) .fa-fedora::before"
    ]
  ],
  [
    "design-01722",
    [
      "&:where(:has(#body-inner)) .fa-stripe-s::before"
    ]
  ],
  [
    "design-01723",
    [
      "&:where(:has(#body-inner)) .fa-meta::before"
    ]
  ],
  [
    "design-01724",
    [
      "&:where(:has(#body-inner)) .fa-laravel::before"
    ]
  ],
  [
    "design-01725",
    [
      "&:where(:has(#body-inner)) .fa-hotjar::before"
    ]
  ],
  [
    "design-01726",
    [
      "&:where(:has(#body-inner)) .fa-bluetooth-b::before"
    ]
  ],
  [
    "design-01727",
    [
      "&:where(:has(#body-inner)) .fa-square-letterboxd::before"
    ]
  ],
  [
    "design-01728",
    [
      "&:where(:has(#body-inner)) .fa-sticker-mule::before"
    ]
  ],
  [
    "design-01729",
    [
      "&:where(:has(#body-inner)) .fa-creative-commons-zero::before"
    ]
  ],
  [
    "design-01730",
    [
      "&:where(:has(#body-inner)) .fa-hips::before"
    ]
  ],
  [
    "design-01731",
    [
      "&:where(:has(#body-inner)) .fa-behance::before"
    ]
  ],
  [
    "design-01732",
    [
      "&:where(:has(#body-inner)) .fa-reddit::before"
    ]
  ],
  [
    "design-01733",
    [
      "&:where(:has(#body-inner)) .fa-discord::before"
    ]
  ],
  [
    "design-01734",
    [
      "&:where(:has(#body-inner)) .fa-chrome::before"
    ]
  ],
  [
    "design-01735",
    [
      "&:where(:has(#body-inner)) .fa-app-store-ios::before"
    ]
  ],
  [
    "design-01736",
    [
      "&:where(:has(#body-inner)) .fa-cc-discover::before"
    ]
  ],
  [
    "design-01737",
    [
      "&:where(:has(#body-inner)) .fa-wpbeginner::before"
    ]
  ],
  [
    "design-01738",
    [
      "&:where(:has(#body-inner)) .fa-confluence::before"
    ]
  ],
  [
    "design-01739",
    [
      "&:where(:has(#body-inner)) .fa-shoelace::before"
    ]
  ],
  [
    "design-01740",
    [
      "&:where(:has(#body-inner)) .fa-mdb::before"
    ]
  ],
  [
    "design-01741",
    [
      "&:where(:has(#body-inner)) .fa-dochub::before"
    ]
  ],
  [
    "design-01742",
    [
      "&:where(:has(#body-inner)) .fa-accessible-icon::before"
    ]
  ],
  [
    "design-01743",
    [
      "&:where(:has(#body-inner)) .fa-ebay::before"
    ]
  ],
  [
    "design-01744",
    [
      "&:where(:has(#body-inner)) .fa-amazon::before"
    ]
  ],
  [
    "design-01745",
    [
      "&:where(:has(#body-inner)) .fa-unsplash::before"
    ]
  ],
  [
    "design-01746",
    [
      "&:where(:has(#body-inner)) .fa-yarn::before"
    ]
  ],
  [
    "design-01747",
    [
      "&:where(:has(#body-inner)) .fa-square-steam::before",
      "&:where(:has(#body-inner)) .fa-steam-square::before"
    ]
  ],
  [
    "design-01748",
    [
      "&:where(:has(#body-inner)) .fa-500px::before"
    ]
  ],
  [
    "design-01749",
    [
      "&:where(:has(#body-inner)) .fa-square-vimeo::before",
      "&:where(:has(#body-inner)) .fa-vimeo-square::before"
    ]
  ],
  [
    "design-01750",
    [
      "&:where(:has(#body-inner)) .fa-asymmetrik::before"
    ]
  ],
  [
    "design-01751",
    [
      "&:where(:has(#body-inner)) .fa-font-awesome-flag::before",
      "&:where(:has(#body-inner)) .fa-font-awesome-logo-full::before",
      "&:where(:has(#body-inner)) .fa-font-awesome::before"
    ]
  ],
  [
    "design-01752",
    [
      "&:where(:has(#body-inner)) .fa-gratipay::before"
    ]
  ],
  [
    "design-01753",
    [
      "&:where(:has(#body-inner)) .fa-apple::before"
    ]
  ],
  [
    "design-01754",
    [
      "&:where(:has(#body-inner)) .fa-hive::before"
    ]
  ],
  [
    "design-01755",
    [
      "&:where(:has(#body-inner)) .fa-gitkraken::before"
    ]
  ],
  [
    "design-01756",
    [
      "&:where(:has(#body-inner)) .fa-keybase::before"
    ]
  ],
  [
    "design-01757",
    [
      "&:where(:has(#body-inner)) .fa-apple-pay::before"
    ]
  ],
  [
    "design-01758",
    [
      "&:where(:has(#body-inner)) .fa-padlet::before"
    ]
  ],
  [
    "design-01759",
    [
      "&:where(:has(#body-inner)) .fa-amazon-pay::before"
    ]
  ],
  [
    "design-01760",
    [
      "&:where(:has(#body-inner)) .fa-github-square::before",
      "&:where(:has(#body-inner)) .fa-square-github::before"
    ]
  ],
  [
    "design-01761",
    [
      "&:where(:has(#body-inner)) .fa-stumbleupon::before"
    ]
  ],
  [
    "design-01762",
    [
      "&:where(:has(#body-inner)) .fa-fedex::before"
    ]
  ],
  [
    "design-01763",
    [
      "&:where(:has(#body-inner)) .fa-phoenix-framework::before"
    ]
  ],
  [
    "design-01764",
    [
      "&:where(:has(#body-inner)) .fa-shopify::before"
    ]
  ],
  [
    "design-01765",
    [
      "&:where(:has(#body-inner)) .fa-neos::before"
    ]
  ],
  [
    "design-01766",
    [
      "&:where(:has(#body-inner)) .fa-square-threads::before"
    ]
  ],
  [
    "design-01767",
    [
      "&:where(:has(#body-inner)) .fa-hackerrank::before"
    ]
  ],
  [
    "design-01768",
    [
      "&:where(:has(#body-inner)) .fa-researchgate::before"
    ]
  ],
  [
    "design-01769",
    [
      "&:where(:has(#body-inner)) .fa-swift::before"
    ]
  ],
  [
    "design-01770",
    [
      "&:where(:has(#body-inner)) .fa-angular::before"
    ]
  ],
  [
    "design-01771",
    [
      "&:where(:has(#body-inner)) .fa-speakap::before"
    ]
  ],
  [
    "design-01772",
    [
      "&:where(:has(#body-inner)) .fa-angrycreative::before"
    ]
  ],
  [
    "design-01773",
    [
      "&:where(:has(#body-inner)) .fa-y-combinator::before"
    ]
  ],
  [
    "design-01774",
    [
      "&:where(:has(#body-inner)) .fa-empire::before"
    ]
  ],
  [
    "design-01775",
    [
      "&:where(:has(#body-inner)) .fa-envira::before"
    ]
  ],
  [
    "design-01776",
    [
      "&:where(:has(#body-inner)) .fa-google-scholar::before"
    ]
  ],
  [
    "design-01777",
    [
      "&:where(:has(#body-inner)) .fa-gitlab-square::before",
      "&:where(:has(#body-inner)) .fa-square-gitlab::before"
    ]
  ],
  [
    "design-01778",
    [
      "&:where(:has(#body-inner)) .fa-studiovinari::before"
    ]
  ],
  [
    "design-01779",
    [
      "&:where(:has(#body-inner)) .fa-pied-piper::before"
    ]
  ],
  [
    "design-01780",
    [
      "&:where(:has(#body-inner)) .fa-wordpress::before"
    ]
  ],
  [
    "design-01781",
    [
      "&:where(:has(#body-inner)) .fa-product-hunt::before"
    ]
  ],
  [
    "design-01782",
    [
      "&:where(:has(#body-inner)) .fa-firefox::before"
    ]
  ],
  [
    "design-01783",
    [
      "&:where(:has(#body-inner)) .fa-linode::before"
    ]
  ],
  [
    "design-01784",
    [
      "&:where(:has(#body-inner)) .fa-goodreads::before"
    ]
  ],
  [
    "design-01785",
    [
      "&:where(:has(#body-inner)) .fa-odnoklassniki-square::before",
      "&:where(:has(#body-inner)) .fa-square-odnoklassniki::before"
    ]
  ],
  [
    "design-01786",
    [
      "&:where(:has(#body-inner)) .fa-jsfiddle::before"
    ]
  ],
  [
    "design-01787",
    [
      "&:where(:has(#body-inner)) .fa-sith::before"
    ]
  ],
  [
    "design-01788",
    [
      "&:where(:has(#body-inner)) .fa-themeisle::before"
    ]
  ],
  [
    "design-01789",
    [
      "&:where(:has(#body-inner)) .fa-page4::before"
    ]
  ],
  [
    "design-01790",
    [
      "&:where(:has(#body-inner)) .fa-hashnode::before"
    ]
  ],
  [
    "design-01791",
    [
      "&:where(:has(#body-inner)) .fa-react::before"
    ]
  ],
  [
    "design-01792",
    [
      "&:where(:has(#body-inner)) .fa-cc-paypal::before"
    ]
  ],
  [
    "design-01793",
    [
      "&:where(:has(#body-inner)) .fa-squarespace::before"
    ]
  ],
  [
    "design-01794",
    [
      "&:where(:has(#body-inner)) .fa-cc-stripe::before"
    ]
  ],
  [
    "design-01795",
    [
      "&:where(:has(#body-inner)) .fa-creative-commons-share::before"
    ]
  ],
  [
    "design-01796",
    [
      "&:where(:has(#body-inner)) .fa-bitcoin::before"
    ]
  ],
  [
    "design-01797",
    [
      "&:where(:has(#body-inner)) .fa-keycdn::before"
    ]
  ],
  [
    "design-01798",
    [
      "&:where(:has(#body-inner)) .fa-opera::before"
    ]
  ],
  [
    "design-01799",
    [
      "&:where(:has(#body-inner)) .fa-itch-io::before"
    ]
  ],
  [
    "design-01800",
    [
      "&:where(:has(#body-inner)) .fa-umbraco::before"
    ]
  ],
  [
    "design-01801",
    [
      "&:where(:has(#body-inner)) .fa-galactic-senate::before"
    ]
  ],
  [
    "design-01802",
    [
      "&:where(:has(#body-inner)) .fa-ubuntu::before"
    ]
  ],
  [
    "design-01803",
    [
      "&:where(:has(#body-inner)) .fa-draft2digital::before"
    ]
  ],
  [
    "design-01804",
    [
      "&:where(:has(#body-inner)) .fa-stripe::before"
    ]
  ],
  [
    "design-01805",
    [
      "&:where(:has(#body-inner)) .fa-houzz::before"
    ]
  ],
  [
    "design-01806",
    [
      "&:where(:has(#body-inner)) .fa-gg::before"
    ]
  ],
  [
    "design-01807",
    [
      "&:where(:has(#body-inner)) .fa-dhl::before"
    ]
  ],
  [
    "design-01808",
    [
      "&:where(:has(#body-inner)) .fa-pinterest-square::before",
      "&:where(:has(#body-inner)) .fa-square-pinterest::before"
    ]
  ],
  [
    "design-01809",
    [
      "&:where(:has(#body-inner)) .fa-xing::before"
    ]
  ],
  [
    "design-01810",
    [
      "&:where(:has(#body-inner)) .fa-blackberry::before"
    ]
  ],
  [
    "design-01811",
    [
      "&:where(:has(#body-inner)) .fa-creative-commons-pd::before"
    ]
  ],
  [
    "design-01812",
    [
      "&:where(:has(#body-inner)) .fa-playstation::before"
    ]
  ],
  [
    "design-01813",
    [
      "&:where(:has(#body-inner)) .fa-quinscape::before"
    ]
  ],
  [
    "design-01814",
    [
      "&:where(:has(#body-inner)) .fa-less::before"
    ]
  ],
  [
    "design-01815",
    [
      "&:where(:has(#body-inner)) .fa-blogger-b::before"
    ]
  ],
  [
    "design-01816",
    [
      "&:where(:has(#body-inner)) .fa-opencart::before"
    ]
  ],
  [
    "design-01817",
    [
      "&:where(:has(#body-inner)) .fa-vine::before"
    ]
  ],
  [
    "design-01818",
    [
      "&:where(:has(#body-inner)) .fa-signal-messenger::before"
    ]
  ],
  [
    "design-01819",
    [
      "&:where(:has(#body-inner)) .fa-paypal::before"
    ]
  ],
  [
    "design-01820",
    [
      "&:where(:has(#body-inner)) .fa-gitlab::before"
    ]
  ],
  [
    "design-01821",
    [
      "&:where(:has(#body-inner)) .fa-typo3::before"
    ]
  ],
  [
    "design-01822",
    [
      "&:where(:has(#body-inner)) .fa-reddit-alien::before"
    ]
  ],
  [
    "design-01823",
    [
      "&:where(:has(#body-inner)) .fa-yahoo::before"
    ]
  ],
  [
    "design-01824",
    [
      "&:where(:has(#body-inner)) .fa-dailymotion::before"
    ]
  ],
  [
    "design-01825",
    [
      "&:where(:has(#body-inner)) .fa-affiliatetheme::before"
    ]
  ],
  [
    "design-01826",
    [
      "&:where(:has(#body-inner)) .fa-pied-piper-pp::before"
    ]
  ],
  [
    "design-01827",
    [
      "&:where(:has(#body-inner)) .fa-bootstrap::before"
    ]
  ],
  [
    "design-01828",
    [
      "&:where(:has(#body-inner)) .fa-odnoklassniki::before"
    ]
  ],
  [
    "design-01829",
    [
      "&:where(:has(#body-inner)) .fa-nfc-symbol::before"
    ]
  ],
  [
    "design-01830",
    [
      "&:where(:has(#body-inner)) .fa-mintbit::before"
    ]
  ],
  [
    "design-01831",
    [
      "&:where(:has(#body-inner)) .fa-ethereum::before"
    ]
  ],
  [
    "design-01832",
    [
      "&:where(:has(#body-inner)) .fa-speaker-deck::before"
    ]
  ],
  [
    "design-01833",
    [
      "&:where(:has(#body-inner)) .fa-creative-commons-nc-eu::before"
    ]
  ],
  [
    "design-01834",
    [
      "&:where(:has(#body-inner)) .fa-patreon::before"
    ]
  ],
  [
    "design-01835",
    [
      "&:where(:has(#body-inner)) .fa-avianex::before"
    ]
  ],
  [
    "design-01836",
    [
      "&:where(:has(#body-inner)) .fa-ello::before"
    ]
  ],
  [
    "design-01837",
    [
      "&:where(:has(#body-inner)) .fa-gofore::before"
    ]
  ],
  [
    "design-01838",
    [
      "&:where(:has(#body-inner)) .fa-bimobject::before"
    ]
  ],
  [
    "design-01839",
    [
      "&:where(:has(#body-inner)) .fa-brave-reverse::before"
    ]
  ],
  [
    "design-01840",
    [
      "&:where(:has(#body-inner)) .fa-facebook-f::before"
    ]
  ],
  [
    "design-01841",
    [
      "&:where(:has(#body-inner)) .fa-google-plus-square::before",
      "&:where(:has(#body-inner)) .fa-square-google-plus::before"
    ]
  ],
  [
    "design-01842",
    [
      "&:where(:has(#body-inner)) .fa-web-awesome::before"
    ]
  ],
  [
    "design-01843",
    [
      "&:where(:has(#body-inner)) .fa-mandalorian::before"
    ]
  ],
  [
    "design-01844",
    [
      "&:where(:has(#body-inner)) .fa-first-order-alt::before"
    ]
  ],
  [
    "design-01845",
    [
      "&:where(:has(#body-inner)) .fa-osi::before"
    ]
  ],
  [
    "design-01846",
    [
      "&:where(:has(#body-inner)) .fa-google-wallet::before"
    ]
  ],
  [
    "design-01847",
    [
      "&:where(:has(#body-inner)) .fa-d-and-d-beyond::before"
    ]
  ],
  [
    "design-01848",
    [
      "&:where(:has(#body-inner)) .fa-periscope::before"
    ]
  ],
  [
    "design-01849",
    [
      "&:where(:has(#body-inner)) .fa-fulcrum::before"
    ]
  ],
  [
    "design-01850",
    [
      "&:where(:has(#body-inner)) .fa-cloudscale::before"
    ]
  ],
  [
    "design-01851",
    [
      "&:where(:has(#body-inner)) .fa-forumbee::before"
    ]
  ],
  [
    "design-01852",
    [
      "&:where(:has(#body-inner)) .fa-mizuni::before"
    ]
  ],
  [
    "design-01853",
    [
      "&:where(:has(#body-inner)) .fa-schlix::before"
    ]
  ],
  [
    "design-01854",
    [
      "&:where(:has(#body-inner)) .fa-square-xing::before",
      "&:where(:has(#body-inner)) .fa-xing-square::before"
    ]
  ],
  [
    "design-01855",
    [
      "&:where(:has(#body-inner)) .fa-bandcamp::before"
    ]
  ],
  [
    "design-01856",
    [
      "&:where(:has(#body-inner)) .fa-wpforms::before"
    ]
  ],
  [
    "design-01857",
    [
      "&:where(:has(#body-inner)) .fa-cloudversify::before"
    ]
  ],
  [
    "design-01858",
    [
      "&:where(:has(#body-inner)) .fa-usps::before"
    ]
  ],
  [
    "design-01859",
    [
      "&:where(:has(#body-inner)) .fa-megaport::before"
    ]
  ],
  [
    "design-01860",
    [
      "&:where(:has(#body-inner)) .fa-magento::before"
    ]
  ],
  [
    "design-01861",
    [
      "&:where(:has(#body-inner)) .fa-spotify::before"
    ]
  ],
  [
    "design-01862",
    [
      "&:where(:has(#body-inner)) .fa-optin-monster::before"
    ]
  ],
  [
    "design-01863",
    [
      "&:where(:has(#body-inner)) .fa-fly::before"
    ]
  ],
  [
    "design-01864",
    [
      "&:where(:has(#body-inner)) .fa-aviato::before"
    ]
  ],
  [
    "design-01865",
    [
      "&:where(:has(#body-inner)) .fa-itunes::before"
    ]
  ],
  [
    "design-01866",
    [
      "&:where(:has(#body-inner)) .fa-cuttlefish::before"
    ]
  ],
  [
    "design-01867",
    [
      "&:where(:has(#body-inner)) .fa-blogger::before"
    ]
  ],
  [
    "design-01868",
    [
      "&:where(:has(#body-inner)) .fa-flickr::before"
    ]
  ],
  [
    "design-01869",
    [
      "&:where(:has(#body-inner)) .fa-viber::before"
    ]
  ],
  [
    "design-01870",
    [
      "&:where(:has(#body-inner)) .fa-soundcloud::before"
    ]
  ],
  [
    "design-01871",
    [
      "&:where(:has(#body-inner)) .fa-digg::before"
    ]
  ],
  [
    "design-01872",
    [
      "&:where(:has(#body-inner)) .fa-tencent-weibo::before"
    ]
  ],
  [
    "design-01873",
    [
      "&:where(:has(#body-inner)) .fa-letterboxd::before"
    ]
  ],
  [
    "design-01874",
    [
      "&:where(:has(#body-inner)) .fa-symfony::before"
    ]
  ],
  [
    "design-01875",
    [
      "&:where(:has(#body-inner)) .fa-maxcdn::before"
    ]
  ],
  [
    "design-01876",
    [
      "&:where(:has(#body-inner)) .fa-etsy::before"
    ]
  ],
  [
    "design-01877",
    [
      "&:where(:has(#body-inner)) .fa-facebook-messenger::before"
    ]
  ],
  [
    "design-01878",
    [
      "&:where(:has(#body-inner)) .fa-audible::before"
    ]
  ],
  [
    "design-01879",
    [
      "&:where(:has(#body-inner)) .fa-think-peaks::before"
    ]
  ],
  [
    "design-01880",
    [
      "&:where(:has(#body-inner)) .fa-bilibili::before"
    ]
  ],
  [
    "design-01881",
    [
      "&:where(:has(#body-inner)) .fa-erlang::before"
    ]
  ],
  [
    "design-01882",
    [
      "&:where(:has(#body-inner)) .fa-x-twitter::before"
    ]
  ],
  [
    "design-01883",
    [
      "&:where(:has(#body-inner)) .fa-cotton-bureau::before"
    ]
  ],
  [
    "design-01884",
    [
      "&:where(:has(#body-inner)) .fa-dashcube::before"
    ]
  ],
  [
    "design-01885",
    [
      "&:where(:has(#body-inner)) .fa-42-group::before",
      "&:where(:has(#body-inner)) .fa-innosoft::before"
    ]
  ],
  [
    "design-01886",
    [
      "&:where(:has(#body-inner)) .fa-stack-exchange::before"
    ]
  ],
  [
    "design-01887",
    [
      "&:where(:has(#body-inner)) .fa-elementor::before"
    ]
  ],
  [
    "design-01888",
    [
      "&:where(:has(#body-inner)) .fa-pied-piper-square::before",
      "&:where(:has(#body-inner)) .fa-square-pied-piper::before"
    ]
  ],
  [
    "design-01889",
    [
      "&:where(:has(#body-inner)) .fa-creative-commons-nd::before"
    ]
  ],
  [
    "design-01890",
    [
      "&:where(:has(#body-inner)) .fa-palfed::before"
    ]
  ],
  [
    "design-01891",
    [
      "&:where(:has(#body-inner)) .fa-superpowers::before"
    ]
  ],
  [
    "design-01892",
    [
      "&:where(:has(#body-inner)) .fa-resolving::before"
    ]
  ],
  [
    "design-01893",
    [
      "&:where(:has(#body-inner)) .fa-xbox::before"
    ]
  ],
  [
    "design-01894",
    [
      "&:where(:has(#body-inner)) .fa-square-web-awesome-stroke::before"
    ]
  ],
  [
    "design-01895",
    [
      "&:where(:has(#body-inner)) .fa-searchengin::before"
    ]
  ],
  [
    "design-01896",
    [
      "&:where(:has(#body-inner)) .fa-tiktok::before"
    ]
  ],
  [
    "design-01897",
    [
      "&:where(:has(#body-inner)) .fa-facebook-square::before",
      "&:where(:has(#body-inner)) .fa-square-facebook::before"
    ]
  ],
  [
    "design-01898",
    [
      "&:where(:has(#body-inner)) .fa-renren::before"
    ]
  ],
  [
    "design-01899",
    [
      "&:where(:has(#body-inner)) .fa-linux::before"
    ]
  ],
  [
    "design-01900",
    [
      "&:where(:has(#body-inner)) .fa-glide::before"
    ]
  ],
  [
    "design-01901",
    [
      "&:where(:has(#body-inner)) .fa-linkedin::before"
    ]
  ],
  [
    "design-01902",
    [
      "&:where(:has(#body-inner)) .fa-hubspot::before"
    ]
  ],
  [
    "design-01903",
    [
      "&:where(:has(#body-inner)) .fa-deploydog::before"
    ]
  ],
  [
    "design-01904",
    [
      "&:where(:has(#body-inner)) .fa-twitch::before"
    ]
  ],
  [
    "design-01905",
    [
      "&:where(:has(#body-inner)) .fa-ravelry::before"
    ]
  ],
  [
    "design-01906",
    [
      "&:where(:has(#body-inner)) .fa-mixer::before"
    ]
  ],
  [
    "design-01907",
    [
      "&:where(:has(#body-inner)) .fa-lastfm-square::before",
      "&:where(:has(#body-inner)) .fa-square-lastfm::before"
    ]
  ],
  [
    "design-01908",
    [
      "&:where(:has(#body-inner)) .fa-vimeo::before"
    ]
  ],
  [
    "design-01909",
    [
      "&:where(:has(#body-inner)) .fa-mendeley::before"
    ]
  ],
  [
    "design-01910",
    [
      "&:where(:has(#body-inner)) .fa-uniregistry::before"
    ]
  ],
  [
    "design-01911",
    [
      "&:where(:has(#body-inner)) .fa-figma::before"
    ]
  ],
  [
    "design-01912",
    [
      "&:where(:has(#body-inner)) .fa-creative-commons-remix::before"
    ]
  ],
  [
    "design-01913",
    [
      "&:where(:has(#body-inner)) .fa-cc-amazon-pay::before"
    ]
  ],
  [
    "design-01914",
    [
      "&:where(:has(#body-inner)) .fa-dropbox::before"
    ]
  ],
  [
    "design-01915",
    [
      "&:where(:has(#body-inner)) .fa-instagram::before"
    ]
  ],
  [
    "design-01916",
    [
      "&:where(:has(#body-inner)) .fa-cmplid::before"
    ]
  ],
  [
    "design-01917",
    [
      "&:where(:has(#body-inner)) .fa-upwork::before"
    ]
  ],
  [
    "design-01918",
    [
      "&:where(:has(#body-inner)) .fa-facebook::before"
    ]
  ],
  [
    "design-01919",
    [
      "&:where(:has(#body-inner)) .fa-gripfire::before"
    ]
  ],
  [
    "design-01920",
    [
      "&:where(:has(#body-inner)) .fa-jedi-order::before"
    ]
  ],
  [
    "design-01921",
    [
      "&:where(:has(#body-inner)) .fa-uikit::before"
    ]
  ],
  [
    "design-01922",
    [
      "&:where(:has(#body-inner)) .fa-fort-awesome-alt::before"
    ]
  ],
  [
    "design-01923",
    [
      "&:where(:has(#body-inner)) .fa-phabricator::before"
    ]
  ],
  [
    "design-01924",
    [
      "&:where(:has(#body-inner)) .fa-ussunnah::before"
    ]
  ],
  [
    "design-01925",
    [
      "&:where(:has(#body-inner)) .fa-earlybirds::before"
    ]
  ],
  [
    "design-01926",
    [
      "&:where(:has(#body-inner)) .fa-trade-federation::before"
    ]
  ],
  [
    "design-01927",
    [
      "&:where(:has(#body-inner)) .fa-autoprefixer::before"
    ]
  ],
  [
    "design-01928",
    [
      "&:where(:has(#body-inner)) .fa-whatsapp::before"
    ]
  ],
  [
    "design-01929",
    [
      "&:where(:has(#body-inner)) .fa-square-upwork::before"
    ]
  ],
  [
    "design-01930",
    [
      "&:where(:has(#body-inner)) .fa-slideshare::before"
    ]
  ],
  [
    "design-01931",
    [
      "&:where(:has(#body-inner)) .fa-google-play::before"
    ]
  ],
  [
    "design-01932",
    [
      "&:where(:has(#body-inner)) .fa-viadeo::before"
    ]
  ],
  [
    "design-01933",
    [
      "&:where(:has(#body-inner)) .fa-line::before"
    ]
  ],
  [
    "design-01934",
    [
      "&:where(:has(#body-inner)) .fa-google-drive::before"
    ]
  ],
  [
    "design-01935",
    [
      "&:where(:has(#body-inner)) .fa-servicestack::before"
    ]
  ],
  [
    "design-01936",
    [
      "&:where(:has(#body-inner)) .fa-simplybuilt::before"
    ]
  ],
  [
    "design-01937",
    [
      "&:where(:has(#body-inner)) .fa-bitbucket::before"
    ]
  ],
  [
    "design-01938",
    [
      "&:where(:has(#body-inner)) .fa-imdb::before"
    ]
  ],
  [
    "design-01939",
    [
      "&:where(:has(#body-inner)) .fa-deezer::before"
    ]
  ],
  [
    "design-01940",
    [
      "&:where(:has(#body-inner)) .fa-raspberry-pi::before"
    ]
  ],
  [
    "design-01941",
    [
      "&:where(:has(#body-inner)) .fa-jira::before"
    ]
  ],
  [
    "design-01942",
    [
      "&:where(:has(#body-inner)) .fa-docker::before"
    ]
  ],
  [
    "design-01943",
    [
      "&:where(:has(#body-inner)) .fa-screenpal::before"
    ]
  ],
  [
    "design-01944",
    [
      "&:where(:has(#body-inner)) .fa-bluetooth::before"
    ]
  ],
  [
    "design-01945",
    [
      "&:where(:has(#body-inner)) .fa-gitter::before"
    ]
  ],
  [
    "design-01946",
    [
      "&:where(:has(#body-inner)) .fa-d-and-d::before"
    ]
  ],
  [
    "design-01947",
    [
      "&:where(:has(#body-inner)) .fa-microblog::before"
    ]
  ],
  [
    "design-01948",
    [
      "&:where(:has(#body-inner)) .fa-cc-diners-club::before"
    ]
  ],
  [
    "design-01949",
    [
      "&:where(:has(#body-inner)) .fa-gg-circle::before"
    ]
  ],
  [
    "design-01950",
    [
      "&:where(:has(#body-inner)) .fa-pied-piper-hat::before"
    ]
  ],
  [
    "design-01951",
    [
      "&:where(:has(#body-inner)) .fa-kickstarter-k::before"
    ]
  ],
  [
    "design-01952",
    [
      "&:where(:has(#body-inner)) .fa-yandex::before"
    ]
  ],
  [
    "design-01953",
    [
      "&:where(:has(#body-inner)) .fa-readme::before"
    ]
  ],
  [
    "design-01954",
    [
      "&:where(:has(#body-inner)) .fa-html5::before"
    ]
  ],
  [
    "design-01955",
    [
      "&:where(:has(#body-inner)) .fa-sellsy::before"
    ]
  ],
  [
    "design-01956",
    [
      "&:where(:has(#body-inner)) .fa-square-web-awesome::before"
    ]
  ],
  [
    "design-01957",
    [
      "&:where(:has(#body-inner)) .fa-sass::before"
    ]
  ],
  [
    "design-01958",
    [
      "&:where(:has(#body-inner)) .fa-wirsindhandwerk::before",
      "&:where(:has(#body-inner)) .fa-wsh::before"
    ]
  ],
  [
    "design-01959",
    [
      "&:where(:has(#body-inner)) .fa-buromobelexperte::before"
    ]
  ],
  [
    "design-01960",
    [
      "&:where(:has(#body-inner)) .fa-salesforce::before"
    ]
  ],
  [
    "design-01961",
    [
      "&:where(:has(#body-inner)) .fa-octopus-deploy::before"
    ]
  ],
  [
    "design-01962",
    [
      "&:where(:has(#body-inner)) .fa-medapps::before"
    ]
  ],
  [
    "design-01963",
    [
      "&:where(:has(#body-inner)) .fa-ns8::before"
    ]
  ],
  [
    "design-01964",
    [
      "&:where(:has(#body-inner)) .fa-pinterest-p::before"
    ]
  ],
  [
    "design-01965",
    [
      "&:where(:has(#body-inner)) .fa-apper::before"
    ]
  ],
  [
    "design-01966",
    [
      "&:where(:has(#body-inner)) .fa-fort-awesome::before"
    ]
  ],
  [
    "design-01967",
    [
      "&:where(:has(#body-inner)) .fa-waze::before"
    ]
  ],
  [
    "design-01968",
    [
      "&:where(:has(#body-inner)) .fa-bluesky::before"
    ]
  ],
  [
    "design-01969",
    [
      "&:where(:has(#body-inner)) .fa-cc-jcb::before"
    ]
  ],
  [
    "design-01970",
    [
      "&:where(:has(#body-inner)) .fa-snapchat-ghost::before",
      "&:where(:has(#body-inner)) .fa-snapchat::before"
    ]
  ],
  [
    "design-01971",
    [
      "&:where(:has(#body-inner)) .fa-fantasy-flight-games::before"
    ]
  ],
  [
    "design-01972",
    [
      "&:where(:has(#body-inner)) .fa-rust::before"
    ]
  ],
  [
    "design-01973",
    [
      "&:where(:has(#body-inner)) .fa-wix::before"
    ]
  ],
  [
    "design-01974",
    [
      "&:where(:has(#body-inner)) .fa-behance-square::before",
      "&:where(:has(#body-inner)) .fa-square-behance::before"
    ]
  ],
  [
    "design-01975",
    [
      "&:where(:has(#body-inner)) .fa-supple::before"
    ]
  ],
  [
    "design-01976",
    [
      "&:where(:has(#body-inner)) .fa-webflow::before"
    ]
  ],
  [
    "design-01977",
    [
      "&:where(:has(#body-inner)) .fa-rebel::before"
    ]
  ],
  [
    "design-01978",
    [
      "&:where(:has(#body-inner)) .fa-css3::before"
    ]
  ],
  [
    "design-01979",
    [
      "&:where(:has(#body-inner)) .fa-staylinked::before"
    ]
  ],
  [
    "design-01980",
    [
      "&:where(:has(#body-inner)) .fa-kaggle::before"
    ]
  ],
  [
    "design-01981",
    [
      "&:where(:has(#body-inner)) .fa-space-awesome::before"
    ]
  ],
  [
    "design-01982",
    [
      "&:where(:has(#body-inner)) .fa-deviantart::before"
    ]
  ],
  [
    "design-01983",
    [
      "&:where(:has(#body-inner)) .fa-cpanel::before"
    ]
  ],
  [
    "design-01984",
    [
      "&:where(:has(#body-inner)) .fa-goodreads-g::before"
    ]
  ],
  [
    "design-01985",
    [
      "&:where(:has(#body-inner)) .fa-git-square::before",
      "&:where(:has(#body-inner)) .fa-square-git::before"
    ]
  ],
  [
    "design-01986",
    [
      "&:where(:has(#body-inner)) .fa-square-tumblr::before",
      "&:where(:has(#body-inner)) .fa-tumblr-square::before"
    ]
  ],
  [
    "design-01987",
    [
      "&:where(:has(#body-inner)) .fa-trello::before"
    ]
  ],
  [
    "design-01988",
    [
      "&:where(:has(#body-inner)) .fa-creative-commons-nc-jp::before"
    ]
  ],
  [
    "design-01989",
    [
      "&:where(:has(#body-inner)) .fa-get-pocket::before"
    ]
  ],
  [
    "design-01990",
    [
      "&:where(:has(#body-inner)) .fa-perbyte::before"
    ]
  ],
  [
    "design-01991",
    [
      "&:where(:has(#body-inner)) .fa-grunt::before"
    ]
  ],
  [
    "design-01992",
    [
      "&:where(:has(#body-inner)) .fa-weebly::before"
    ]
  ],
  [
    "design-01993",
    [
      "&:where(:has(#body-inner)) .fa-connectdevelop::before"
    ]
  ],
  [
    "design-01994",
    [
      "&:where(:has(#body-inner)) .fa-leanpub::before"
    ]
  ],
  [
    "design-01995",
    [
      "&:where(:has(#body-inner)) .fa-black-tie::before"
    ]
  ],
  [
    "design-01996",
    [
      "&:where(:has(#body-inner)) .fa-themeco::before"
    ]
  ],
  [
    "design-01997",
    [
      "&:where(:has(#body-inner)) .fa-python::before"
    ]
  ],
  [
    "design-01998",
    [
      "&:where(:has(#body-inner)) .fa-android::before"
    ]
  ],
  [
    "design-01999",
    [
      "&:where(:has(#body-inner)) .fa-bots::before"
    ]
  ],
  [
    "design-02000",
    [
      "&:where(:has(#body-inner)) .fa-free-code-camp::before"
    ]
  ],
  [
    "design-02001",
    [
      "&:where(:has(#body-inner)) .fa-hornbill::before"
    ]
  ],
  [
    "design-02002",
    [
      "&:where(:has(#body-inner)) .fa-js::before"
    ]
  ],
  [
    "design-02003",
    [
      "&:where(:has(#body-inner)) .fa-ideal::before"
    ]
  ],
  [
    "design-02004",
    [
      "&:where(:has(#body-inner)) .fa-git::before"
    ]
  ],
  [
    "design-02005",
    [
      "&:where(:has(#body-inner)) .fa-dev::before"
    ]
  ],
  [
    "design-02006",
    [
      "&:where(:has(#body-inner)) .fa-sketch::before"
    ]
  ],
  [
    "design-02007",
    [
      "&:where(:has(#body-inner)) .fa-yandex-international::before"
    ]
  ],
  [
    "design-02008",
    [
      "&:where(:has(#body-inner)) .fa-cc-amex::before"
    ]
  ],
  [
    "design-02009",
    [
      "&:where(:has(#body-inner)) .fa-uber::before"
    ]
  ],
  [
    "design-02010",
    [
      "&:where(:has(#body-inner)) .fa-github::before"
    ]
  ],
  [
    "design-02011",
    [
      "&:where(:has(#body-inner)) .fa-php::before"
    ]
  ],
  [
    "design-02012",
    [
      "&:where(:has(#body-inner)) .fa-alipay::before"
    ]
  ],
  [
    "design-02013",
    [
      "&:where(:has(#body-inner)) .fa-youtube::before"
    ]
  ],
  [
    "design-02014",
    [
      "&:where(:has(#body-inner)) .fa-skyatlas::before"
    ]
  ],
  [
    "design-02015",
    [
      "&:where(:has(#body-inner)) .fa-firefox-browser::before"
    ]
  ],
  [
    "design-02016",
    [
      "&:where(:has(#body-inner)) .fa-replyd::before"
    ]
  ],
  [
    "design-02017",
    [
      "&:where(:has(#body-inner)) .fa-suse::before"
    ]
  ],
  [
    "design-02018",
    [
      "&:where(:has(#body-inner)) .fa-jenkins::before"
    ]
  ],
  [
    "design-02019",
    [
      "&:where(:has(#body-inner)) .fa-twitter::before"
    ]
  ],
  [
    "design-02020",
    [
      "&:where(:has(#body-inner)) .fa-rockrms::before"
    ]
  ],
  [
    "design-02021",
    [
      "&:where(:has(#body-inner)) .fa-pinterest::before"
    ]
  ],
  [
    "design-02022",
    [
      "&:where(:has(#body-inner)) .fa-buffer::before"
    ]
  ],
  [
    "design-02023",
    [
      "&:where(:has(#body-inner)) .fa-npm::before"
    ]
  ],
  [
    "design-02024",
    [
      "&:where(:has(#body-inner)) .fa-yammer::before"
    ]
  ],
  [
    "design-02025",
    [
      "&:where(:has(#body-inner)) .fa-btc::before"
    ]
  ],
  [
    "design-02026",
    [
      "&:where(:has(#body-inner)) .fa-dribbble::before"
    ]
  ],
  [
    "design-02027",
    [
      "&:where(:has(#body-inner)) .fa-stumbleupon-circle::before"
    ]
  ],
  [
    "design-02028",
    [
      "&:where(:has(#body-inner)) .fa-internet-explorer::before"
    ]
  ],
  [
    "design-02029",
    [
      "&:where(:has(#body-inner)) .fa-stubber::before"
    ]
  ],
  [
    "design-02030",
    [
      "&:where(:has(#body-inner)) .fa-telegram-plane::before",
      "&:where(:has(#body-inner)) .fa-telegram::before"
    ]
  ],
  [
    "design-02031",
    [
      "&:where(:has(#body-inner)) .fa-old-republic::before"
    ]
  ],
  [
    "design-02032",
    [
      "&:where(:has(#body-inner)) .fa-odysee::before"
    ]
  ],
  [
    "design-02033",
    [
      "&:where(:has(#body-inner)) .fa-square-whatsapp::before",
      "&:where(:has(#body-inner)) .fa-whatsapp-square::before"
    ]
  ],
  [
    "design-02034",
    [
      "&:where(:has(#body-inner)) .fa-node-js::before"
    ]
  ],
  [
    "design-02035",
    [
      "&:where(:has(#body-inner)) .fa-edge-legacy::before"
    ]
  ],
  [
    "design-02036",
    [
      "&:where(:has(#body-inner)) .fa-slack-hash::before",
      "&:where(:has(#body-inner)) .fa-slack::before"
    ]
  ],
  [
    "design-02037",
    [
      "&:where(:has(#body-inner)) .fa-medrt::before"
    ]
  ],
  [
    "design-02038",
    [
      "&:where(:has(#body-inner)) .fa-usb::before"
    ]
  ],
  [
    "design-02039",
    [
      "&:where(:has(#body-inner)) .fa-tumblr::before"
    ]
  ],
  [
    "design-02040",
    [
      "&:where(:has(#body-inner)) .fa-vaadin::before"
    ]
  ],
  [
    "design-02041",
    [
      "&:where(:has(#body-inner)) .fa-quora::before"
    ]
  ],
  [
    "design-02042",
    [
      "&:where(:has(#body-inner)) .fa-square-x-twitter::before"
    ]
  ],
  [
    "design-02043",
    [
      "&:where(:has(#body-inner)) .fa-reacteurope::before"
    ]
  ],
  [
    "design-02044",
    [
      "&:where(:has(#body-inner)) .fa-medium-m::before",
      "&:where(:has(#body-inner)) .fa-medium::before"
    ]
  ],
  [
    "design-02045",
    [
      "&:where(:has(#body-inner)) .fa-amilia::before"
    ]
  ],
  [
    "design-02046",
    [
      "&:where(:has(#body-inner)) .fa-mixcloud::before"
    ]
  ],
  [
    "design-02047",
    [
      "&:where(:has(#body-inner)) .fa-flipboard::before"
    ]
  ],
  [
    "design-02048",
    [
      "&:where(:has(#body-inner)) .fa-viacoin::before"
    ]
  ],
  [
    "design-02049",
    [
      "&:where(:has(#body-inner)) .fa-critical-role::before"
    ]
  ],
  [
    "design-02050",
    [
      "&:where(:has(#body-inner)) .fa-sitrox::before"
    ]
  ],
  [
    "design-02051",
    [
      "&:where(:has(#body-inner)) .fa-discourse::before"
    ]
  ],
  [
    "design-02052",
    [
      "&:where(:has(#body-inner)) .fa-joomla::before"
    ]
  ],
  [
    "design-02053",
    [
      "&:where(:has(#body-inner)) .fa-mastodon::before"
    ]
  ],
  [
    "design-02054",
    [
      "&:where(:has(#body-inner)) .fa-airbnb::before"
    ]
  ],
  [
    "design-02055",
    [
      "&:where(:has(#body-inner)) .fa-wolf-pack-battalion::before"
    ]
  ],
  [
    "design-02056",
    [
      "&:where(:has(#body-inner)) .fa-buy-n-large::before"
    ]
  ],
  [
    "design-02057",
    [
      "&:where(:has(#body-inner)) .fa-gulp::before"
    ]
  ],
  [
    "design-02058",
    [
      "&:where(:has(#body-inner)) .fa-creative-commons-sampling-plus::before"
    ]
  ],
  [
    "design-02059",
    [
      "&:where(:has(#body-inner)) .fa-strava::before"
    ]
  ],
  [
    "design-02060",
    [
      "&:where(:has(#body-inner)) .fa-ember::before"
    ]
  ],
  [
    "design-02061",
    [
      "&:where(:has(#body-inner)) .fa-canadian-maple-leaf::before"
    ]
  ],
  [
    "design-02062",
    [
      "&:where(:has(#body-inner)) .fa-teamspeak::before"
    ]
  ],
  [
    "design-02063",
    [
      "&:where(:has(#body-inner)) .fa-pushed::before"
    ]
  ],
  [
    "design-02064",
    [
      "&:where(:has(#body-inner)) .fa-wordpress-simple::before"
    ]
  ],
  [
    "design-02065",
    [
      "&:where(:has(#body-inner)) .fa-nutritionix::before"
    ]
  ],
  [
    "design-02066",
    [
      "&:where(:has(#body-inner)) .fa-wodu::before"
    ]
  ],
  [
    "design-02067",
    [
      "&:where(:has(#body-inner)) .fa-google-pay::before"
    ]
  ],
  [
    "design-02068",
    [
      "&:where(:has(#body-inner)) .fa-intercom::before"
    ]
  ],
  [
    "design-02069",
    [
      "&:where(:has(#body-inner)) .fa-zhihu::before"
    ]
  ],
  [
    "design-02070",
    [
      "&:where(:has(#body-inner)) .fa-korvue::before"
    ]
  ],
  [
    "design-02071",
    [
      "&:where(:has(#body-inner)) .fa-pix::before"
    ]
  ],
  [
    "design-02072",
    [
      "&:where(:has(#body-inner)) .fa-steam-symbol::before"
    ]
  ],
  [
    "design-02073",
    [
      "&:where(:has(#body-inner)):root"
    ]
  ],
  [
    "design-02074",
    [
      "&:where(:has(#body-inner)) .fa-regular",
      "&:where(:has(#body-inner)) .far"
    ]
  ],
  [
    "design-02075",
    [
      "&:where(:has(#body-inner)):root"
    ]
  ],
  [
    "design-02076",
    [
      "&:where(:has(#body-inner)):root"
    ]
  ],
  [
    "design-02077",
    [
      "&:where(:has(#body-inner)) .fa-solid",
      "&:where(:has(#body-inner)) .fas"
    ]
  ],
  [
    "design-02078",
    [
      "&:where(:has(#body-inner)) body.compensate-for-scrollbar"
    ]
  ],
  [
    "design-02079",
    [
      "&:where(:has(#body-inner)) .fancybox-active"
    ]
  ],
  [
    "design-02080",
    [
      "&:where(:has(#body-inner)) .fancybox-is-hidden"
    ]
  ],
  [
    "design-02081",
    [
      "&:where(:has(#body-inner)) .fancybox-is-hidden"
    ]
  ],
  [
    "design-02082",
    [
      "&:where(:has(#body-inner)) .fancybox-is-hidden"
    ]
  ],
  [
    "design-02083",
    [
      "&:where(:has(#body-inner)) .fancybox-is-hidden"
    ]
  ],
  [
    "design-02084",
    [
      "&:where(:has(#body-inner)) .fancybox-is-hidden"
    ]
  ],
  [
    "design-02085",
    [
      "&:where(:has(#body-inner)) .fancybox-container"
    ]
  ],
  [
    "design-02086",
    [
      "&:where(:has(#body-inner)) .fancybox-container"
    ]
  ],
  [
    "design-02087",
    [
      "&:where(:has(#body-inner)) .fancybox-container"
    ]
  ],
  [
    "design-02088",
    [
      "&:where(:has(#body-inner)) .fancybox-container"
    ]
  ],
  [
    "design-02089",
    [
      "&:where(:has(#body-inner)) .fancybox-container"
    ]
  ],
  [
    "design-02090",
    [
      "&:where(:has(#body-inner)) .fancybox-container"
    ]
  ],
  [
    "design-02091",
    [
      "&:where(:has(#body-inner)) .fancybox-container"
    ]
  ],
  [
    "design-02092",
    [
      "&:where(:has(#body-inner)) .fancybox-container"
    ]
  ],
  [
    "design-02093",
    [
      "&:where(:has(#body-inner)) .fancybox-container"
    ]
  ],
  [
    "design-02094",
    [
      "&:where(:has(#body-inner)) .fancybox-container"
    ]
  ],
  [
    "design-02095",
    [
      "&:where(:has(#body-inner)) .fancybox-container"
    ]
  ],
  [
    "design-02096",
    [
      "&:where(:has(#body-inner)) .fancybox-container"
    ]
  ],
  [
    "design-02097",
    [
      "&:where(:has(#body-inner)) .fancybox-container *"
    ]
  ],
  [
    "design-02098",
    [
      "&:where(:has(#body-inner)) .fancybox-bg",
      "&:where(:has(#body-inner)) .fancybox-inner",
      "&:where(:has(#body-inner)) .fancybox-outer",
      "&:where(:has(#body-inner)) .fancybox-stage"
    ]
  ],
  [
    "design-02099",
    [
      "&:where(:has(#body-inner)) .fancybox-bg",
      "&:where(:has(#body-inner)) .fancybox-inner",
      "&:where(:has(#body-inner)) .fancybox-outer",
      "&:where(:has(#body-inner)) .fancybox-stage"
    ]
  ],
  [
    "design-02100",
    [
      "&:where(:has(#body-inner)) .fancybox-bg",
      "&:where(:has(#body-inner)) .fancybox-inner",
      "&:where(:has(#body-inner)) .fancybox-outer",
      "&:where(:has(#body-inner)) .fancybox-stage"
    ]
  ],
  [
    "design-02101",
    [
      "&:where(:has(#body-inner)) .fancybox-bg",
      "&:where(:has(#body-inner)) .fancybox-inner",
      "&:where(:has(#body-inner)) .fancybox-outer",
      "&:where(:has(#body-inner)) .fancybox-stage"
    ]
  ],
  [
    "design-02102",
    [
      "&:where(:has(#body-inner)) .fancybox-bg",
      "&:where(:has(#body-inner)) .fancybox-inner",
      "&:where(:has(#body-inner)) .fancybox-outer",
      "&:where(:has(#body-inner)) .fancybox-stage"
    ]
  ],
  [
    "design-02103",
    [
      "&:where(:has(#body-inner)) .fancybox-outer"
    ]
  ],
  [
    "design-02104",
    [
      "&:where(:has(#body-inner)) .fancybox-outer"
    ]
  ],
  [
    "design-02105",
    [
      "&:where(:has(#body-inner)) .fancybox-bg"
    ]
  ],
  [
    "design-02106",
    [
      "&:where(:has(#body-inner)) .fancybox-bg"
    ]
  ],
  [
    "design-02107",
    [
      "&:where(:has(#body-inner)) .fancybox-bg"
    ]
  ],
  [
    "design-02108",
    [
      "&:where(:has(#body-inner)) .fancybox-bg"
    ]
  ],
  [
    "design-02109",
    [
      "&:where(:has(#body-inner)) .fancybox-bg"
    ]
  ],
  [
    "design-02110",
    [
      "&:where(:has(#body-inner)) .fancybox-is-open .fancybox-bg"
    ]
  ],
  [
    "design-02111",
    [
      "&:where(:has(#body-inner)) .fancybox-is-open .fancybox-bg"
    ]
  ],
  [
    "design-02112",
    [
      "&:where(:has(#body-inner)) .fancybox-caption",
      "&:where(:has(#body-inner)) .fancybox-infobar",
      "&:where(:has(#body-inner)) .fancybox-navigation .fancybox-button",
      "&:where(:has(#body-inner)) .fancybox-toolbar"
    ]
  ],
  [
    "design-02113",
    [
      "&:where(:has(#body-inner)) .fancybox-caption",
      "&:where(:has(#body-inner)) .fancybox-infobar",
      "&:where(:has(#body-inner)) .fancybox-navigation .fancybox-button",
      "&:where(:has(#body-inner)) .fancybox-toolbar"
    ]
  ],
  [
    "design-02114",
    [
      "&:where(:has(#body-inner)) .fancybox-caption",
      "&:where(:has(#body-inner)) .fancybox-infobar",
      "&:where(:has(#body-inner)) .fancybox-navigation .fancybox-button",
      "&:where(:has(#body-inner)) .fancybox-toolbar"
    ]
  ],
  [
    "design-02115",
    [
      "&:where(:has(#body-inner)) .fancybox-caption",
      "&:where(:has(#body-inner)) .fancybox-infobar",
      "&:where(:has(#body-inner)) .fancybox-navigation .fancybox-button",
      "&:where(:has(#body-inner)) .fancybox-toolbar"
    ]
  ],
  [
    "design-02116",
    [
      "&:where(:has(#body-inner)) .fancybox-caption",
      "&:where(:has(#body-inner)) .fancybox-infobar",
      "&:where(:has(#body-inner)) .fancybox-navigation .fancybox-button",
      "&:where(:has(#body-inner)) .fancybox-toolbar"
    ]
  ],
  [
    "design-02117",
    [
      "&:where(:has(#body-inner)) .fancybox-caption",
      "&:where(:has(#body-inner)) .fancybox-infobar",
      "&:where(:has(#body-inner)) .fancybox-navigation .fancybox-button",
      "&:where(:has(#body-inner)) .fancybox-toolbar"
    ]
  ],
  [
    "design-02118",
    [
      "&:where(:has(#body-inner)) .fancybox-show-caption .fancybox-caption",
      "&:where(:has(#body-inner)) .fancybox-show-infobar .fancybox-infobar",
      "&:where(:has(#body-inner)) .fancybox-show-nav .fancybox-navigation .fancybox-button",
      "&:where(:has(#body-inner)) .fancybox-show-toolbar .fancybox-toolbar"
    ]
  ],
  [
    "design-02119",
    [
      "&:where(:has(#body-inner)) .fancybox-show-caption .fancybox-caption",
      "&:where(:has(#body-inner)) .fancybox-show-infobar .fancybox-infobar",
      "&:where(:has(#body-inner)) .fancybox-show-nav .fancybox-navigation .fancybox-button",
      "&:where(:has(#body-inner)) .fancybox-show-toolbar .fancybox-toolbar"
    ]
  ],
  [
    "design-02120",
    [
      "&:where(:has(#body-inner)) .fancybox-show-caption .fancybox-caption",
      "&:where(:has(#body-inner)) .fancybox-show-infobar .fancybox-infobar",
      "&:where(:has(#body-inner)) .fancybox-show-nav .fancybox-navigation .fancybox-button",
      "&:where(:has(#body-inner)) .fancybox-show-toolbar .fancybox-toolbar"
    ]
  ],
  [
    "design-02121",
    [
      "&:where(:has(#body-inner)) .fancybox-infobar"
    ]
  ],
  [
    "design-02122",
    [
      "&:where(:has(#body-inner)) .fancybox-infobar"
    ]
  ],
  [
    "design-02123",
    [
      "&:where(:has(#body-inner)) .fancybox-infobar"
    ]
  ],
  [
    "design-02124",
    [
      "&:where(:has(#body-inner)) .fancybox-infobar"
    ]
  ],
  [
    "design-02125",
    [
      "&:where(:has(#body-inner)) .fancybox-infobar"
    ]
  ],
  [
    "design-02126",
    [
      "&:where(:has(#body-inner)) .fancybox-infobar"
    ]
  ],
  [
    "design-02127",
    [
      "&:where(:has(#body-inner)) .fancybox-infobar"
    ]
  ],
  [
    "design-02128",
    [
      "&:where(:has(#body-inner)) .fancybox-infobar"
    ]
  ],
  [
    "design-02129",
    [
      "&:where(:has(#body-inner)) .fancybox-infobar"
    ]
  ],
  [
    "design-02130",
    [
      "&:where(:has(#body-inner)) .fancybox-infobar"
    ]
  ],
  [
    "design-02131",
    [
      "&:where(:has(#body-inner)) .fancybox-infobar"
    ]
  ],
  [
    "design-02132",
    [
      "&:where(:has(#body-inner)) .fancybox-infobar"
    ]
  ],
  [
    "design-02133",
    [
      "&:where(:has(#body-inner)) .fancybox-infobar"
    ]
  ],
  [
    "design-02134",
    [
      "&:where(:has(#body-inner)) .fancybox-infobar"
    ]
  ],
  [
    "design-02135",
    [
      "&:where(:has(#body-inner)) .fancybox-infobar"
    ]
  ],
  [
    "design-02136",
    [
      "&:where(:has(#body-inner)) .fancybox-infobar"
    ]
  ],
  [
    "design-02137",
    [
      "&:where(:has(#body-inner)) .fancybox-toolbar"
    ]
  ],
  [
    "design-02138",
    [
      "&:where(:has(#body-inner)) .fancybox-toolbar"
    ]
  ],
  [
    "design-02139",
    [
      "&:where(:has(#body-inner)) .fancybox-stage"
    ]
  ],
  [
    "design-02140",
    [
      "&:where(:has(#body-inner)) .fancybox-stage"
    ]
  ],
  [
    "design-02141",
    [
      "&:where(:has(#body-inner)) .fancybox-stage"
    ]
  ],
  [
    "design-02142",
    [
      "&:where(:has(#body-inner)) .fancybox-stage"
    ]
  ],
  [
    "design-02143",
    [
      "&:where(:has(#body-inner)) .fancybox-is-open .fancybox-stage"
    ]
  ],
  [
    "design-02144",
    [
      "&:where(:has(#body-inner)) .fancybox-slide"
    ]
  ],
  [
    "design-02145",
    [
      "&:where(:has(#body-inner)) .fancybox-slide"
    ]
  ],
  [
    "design-02146",
    [
      "&:where(:has(#body-inner)) .fancybox-slide"
    ]
  ],
  [
    "design-02147",
    [
      "&:where(:has(#body-inner)) .fancybox-slide"
    ]
  ],
  [
    "design-02148",
    [
      "&:where(:has(#body-inner)) .fancybox-slide"
    ]
  ],
  [
    "design-02149",
    [
      "&:where(:has(#body-inner)) .fancybox-slide"
    ]
  ],
  [
    "design-02150",
    [
      "&:where(:has(#body-inner)) .fancybox-slide"
    ]
  ],
  [
    "design-02151",
    [
      "&:where(:has(#body-inner)) .fancybox-slide"
    ]
  ],
  [
    "design-02152",
    [
      "&:where(:has(#body-inner)) .fancybox-slide"
    ]
  ],
  [
    "design-02153",
    [
      "&:where(:has(#body-inner)) .fancybox-slide"
    ]
  ],
  [
    "design-02154",
    [
      "&:where(:has(#body-inner)) .fancybox-slide"
    ]
  ],
  [
    "design-02155",
    [
      "&:where(:has(#body-inner)) .fancybox-slide"
    ]
  ],
  [
    "design-02156",
    [
      "&:where(:has(#body-inner)) .fancybox-slide"
    ]
  ],
  [
    "design-02157",
    [
      "&:where(:has(#body-inner)) .fancybox-slide"
    ]
  ],
  [
    "design-02158",
    [
      "&:where(:has(#body-inner)) .fancybox-slide"
    ]
  ],
  [
    "design-02159",
    [
      "&:where(:has(#body-inner)) .fancybox-slide::before"
    ]
  ],
  [
    "design-02160",
    [
      "&:where(:has(#body-inner)) .fancybox-slide::before"
    ]
  ],
  [
    "design-02161",
    [
      "&:where(:has(#body-inner)) .fancybox-slide::before"
    ]
  ],
  [
    "design-02162",
    [
      "&:where(:has(#body-inner)) .fancybox-slide::before"
    ]
  ],
  [
    "design-02163",
    [
      "&:where(:has(#body-inner)) .fancybox-slide::before"
    ]
  ],
  [
    "design-02164",
    [
      "&:where(:has(#body-inner)) .fancybox-slide::before"
    ]
  ],
  [
    "design-02165",
    [
      "&:where(:has(#body-inner)) .fancybox-is-sliding .fancybox-slide",
      "&:where(:has(#body-inner)) .fancybox-slide--current",
      "&:where(:has(#body-inner)) .fancybox-slide--next",
      "&:where(:has(#body-inner)) .fancybox-slide--previous"
    ]
  ],
  [
    "design-02166",
    [
      "&:where(:has(#body-inner)) .fancybox-slide--image"
    ]
  ],
  [
    "design-02167",
    [
      "&:where(:has(#body-inner)) .fancybox-slide--image"
    ]
  ],
  [
    "design-02168",
    [
      "&:where(:has(#body-inner)) .fancybox-slide--image::before"
    ]
  ],
  [
    "design-02169",
    [
      "&:where(:has(#body-inner)) .fancybox-slide--html"
    ]
  ],
  [
    "design-02170",
    [
      "&:where(:has(#body-inner)) .fancybox-content"
    ]
  ],
  [
    "design-02171",
    [
      "&:where(:has(#body-inner)) .fancybox-content"
    ]
  ],
  [
    "design-02172",
    [
      "&:where(:has(#body-inner)) .fancybox-content"
    ]
  ],
  [
    "design-02173",
    [
      "&:where(:has(#body-inner)) .fancybox-content"
    ]
  ],
  [
    "design-02174",
    [
      "&:where(:has(#body-inner)) .fancybox-content"
    ]
  ],
  [
    "design-02175",
    [
      "&:where(:has(#body-inner)) .fancybox-content"
    ]
  ],
  [
    "design-02176",
    [
      "&:where(:has(#body-inner)) .fancybox-content"
    ]
  ],
  [
    "design-02177",
    [
      "&:where(:has(#body-inner)) .fancybox-content"
    ]
  ],
  [
    "design-02178",
    [
      "&:where(:has(#body-inner)) .fancybox-content"
    ]
  ],
  [
    "design-02179",
    [
      "&:where(:has(#body-inner)) .fancybox-content"
    ]
  ],
  [
    "design-02180",
    [
      "&:where(:has(#body-inner)) .fancybox-slide--image .fancybox-content"
    ]
  ],
  [
    "design-02181",
    [
      "&:where(:has(#body-inner)) .fancybox-slide--image .fancybox-content"
    ]
  ],
  [
    "design-02182",
    [
      "&:where(:has(#body-inner)) .fancybox-slide--image .fancybox-content"
    ]
  ],
  [
    "design-02183",
    [
      "&:where(:has(#body-inner)) .fancybox-slide--image .fancybox-content"
    ]
  ],
  [
    "design-02184",
    [
      "&:where(:has(#body-inner)) .fancybox-slide--image .fancybox-content"
    ]
  ],
  [
    "design-02185",
    [
      "&:where(:has(#body-inner)) .fancybox-slide--image .fancybox-content"
    ]
  ],
  [
    "design-02186",
    [
      "&:where(:has(#body-inner)) .fancybox-slide--image .fancybox-content"
    ]
  ],
  [
    "design-02187",
    [
      "&:where(:has(#body-inner)) .fancybox-slide--image .fancybox-content"
    ]
  ],
  [
    "design-02188",
    [
      "&:where(:has(#body-inner)) .fancybox-slide--image .fancybox-content"
    ]
  ],
  [
    "design-02189",
    [
      "&:where(:has(#body-inner)) .fancybox-slide--image .fancybox-content"
    ]
  ],
  [
    "design-02190",
    [
      "&:where(:has(#body-inner)) .fancybox-slide--image .fancybox-content"
    ]
  ],
  [
    "design-02191",
    [
      "&:where(:has(#body-inner)) .fancybox-slide--image .fancybox-content"
    ]
  ],
  [
    "design-02192",
    [
      "&:where(:has(#body-inner)) .fancybox-slide--image .fancybox-content"
    ]
  ],
  [
    "design-02193",
    [
      "&:where(:has(#body-inner)) .fancybox-slide--image .fancybox-content"
    ]
  ],
  [
    "design-02194",
    [
      "&:where(:has(#body-inner)) .fancybox-slide--image .fancybox-content"
    ]
  ],
  [
    "design-02195",
    [
      "&:where(:has(#body-inner)) .fancybox-slide--image .fancybox-content"
    ]
  ],
  [
    "design-02196",
    [
      "&:where(:has(#body-inner)) .fancybox-slide--image .fancybox-content"
    ]
  ],
  [
    "design-02197",
    [
      "&:where(:has(#body-inner)) .fancybox-slide--image .fancybox-content"
    ]
  ],
  [
    "design-02198",
    [
      "&:where(:has(#body-inner)) .fancybox-can-zoomOut .fancybox-content"
    ]
  ],
  [
    "design-02199",
    [
      "&:where(:has(#body-inner)) .fancybox-can-zoomIn .fancybox-content"
    ]
  ],
  [
    "design-02200",
    [
      "&:where(:has(#body-inner)) .fancybox-can-pan .fancybox-content",
      "&:where(:has(#body-inner)) .fancybox-can-swipe .fancybox-content"
    ]
  ],
  [
    "design-02201",
    [
      "&:where(:has(#body-inner)) .fancybox-is-grabbing .fancybox-content"
    ]
  ],
  [
    "design-02202",
    [
      "&:where(:has(#body-inner)) .fancybox-container [data-selectable=\"true\"]"
    ]
  ],
  [
    "design-02203",
    [
      "&:where(:has(#body-inner)) .fancybox-image",
      "&:where(:has(#body-inner)) .fancybox-spaceball"
    ]
  ],
  [
    "design-02204",
    [
      "&:where(:has(#body-inner)) .fancybox-image",
      "&:where(:has(#body-inner)) .fancybox-spaceball"
    ]
  ],
  [
    "design-02205",
    [
      "&:where(:has(#body-inner)) .fancybox-image",
      "&:where(:has(#body-inner)) .fancybox-spaceball"
    ]
  ],
  [
    "design-02206",
    [
      "&:where(:has(#body-inner)) .fancybox-image",
      "&:where(:has(#body-inner)) .fancybox-spaceball"
    ]
  ],
  [
    "design-02207",
    [
      "&:where(:has(#body-inner)) .fancybox-image",
      "&:where(:has(#body-inner)) .fancybox-spaceball"
    ]
  ],
  [
    "design-02208",
    [
      "&:where(:has(#body-inner)) .fancybox-image",
      "&:where(:has(#body-inner)) .fancybox-spaceball"
    ]
  ],
  [
    "design-02209",
    [
      "&:where(:has(#body-inner)) .fancybox-image",
      "&:where(:has(#body-inner)) .fancybox-spaceball"
    ]
  ],
  [
    "design-02210",
    [
      "&:where(:has(#body-inner)) .fancybox-image",
      "&:where(:has(#body-inner)) .fancybox-spaceball"
    ]
  ],
  [
    "design-02211",
    [
      "&:where(:has(#body-inner)) .fancybox-image",
      "&:where(:has(#body-inner)) .fancybox-spaceball"
    ]
  ],
  [
    "design-02212",
    [
      "&:where(:has(#body-inner)) .fancybox-image",
      "&:where(:has(#body-inner)) .fancybox-spaceball"
    ]
  ],
  [
    "design-02213",
    [
      "&:where(:has(#body-inner)) .fancybox-image",
      "&:where(:has(#body-inner)) .fancybox-spaceball"
    ]
  ],
  [
    "design-02214",
    [
      "&:where(:has(#body-inner)) .fancybox-image",
      "&:where(:has(#body-inner)) .fancybox-spaceball"
    ]
  ],
  [
    "design-02215",
    [
      "&:where(:has(#body-inner)) .fancybox-image",
      "&:where(:has(#body-inner)) .fancybox-spaceball"
    ]
  ],
  [
    "design-02216",
    [
      "&:where(:has(#body-inner)) .fancybox-image",
      "&:where(:has(#body-inner)) .fancybox-spaceball"
    ]
  ],
  [
    "design-02217",
    [
      "&:where(:has(#body-inner)) .fancybox-image",
      "&:where(:has(#body-inner)) .fancybox-spaceball"
    ]
  ],
  [
    "design-02218",
    [
      "&:where(:has(#body-inner)) .fancybox-spaceball"
    ]
  ],
  [
    "design-02219",
    [
      "&:where(:has(#body-inner)) .fancybox-slide--iframe .fancybox-content",
      "&:where(:has(#body-inner)) .fancybox-slide--map .fancybox-content",
      "&:where(:has(#body-inner)) .fancybox-slide--pdf .fancybox-content",
      "&:where(:has(#body-inner)) .fancybox-slide--video .fancybox-content"
    ]
  ],
  [
    "design-02220",
    [
      "&:where(:has(#body-inner)) .fancybox-slide--iframe .fancybox-content",
      "&:where(:has(#body-inner)) .fancybox-slide--map .fancybox-content",
      "&:where(:has(#body-inner)) .fancybox-slide--pdf .fancybox-content",
      "&:where(:has(#body-inner)) .fancybox-slide--video .fancybox-content"
    ]
  ],
  [
    "design-02221",
    [
      "&:where(:has(#body-inner)) .fancybox-slide--iframe .fancybox-content",
      "&:where(:has(#body-inner)) .fancybox-slide--map .fancybox-content",
      "&:where(:has(#body-inner)) .fancybox-slide--pdf .fancybox-content",
      "&:where(:has(#body-inner)) .fancybox-slide--video .fancybox-content"
    ]
  ],
  [
    "design-02222",
    [
      "&:where(:has(#body-inner)) .fancybox-slide--iframe .fancybox-content",
      "&:where(:has(#body-inner)) .fancybox-slide--map .fancybox-content",
      "&:where(:has(#body-inner)) .fancybox-slide--pdf .fancybox-content",
      "&:where(:has(#body-inner)) .fancybox-slide--video .fancybox-content"
    ]
  ],
  [
    "design-02223",
    [
      "&:where(:has(#body-inner)) .fancybox-slide--video .fancybox-content"
    ]
  ],
  [
    "design-02224",
    [
      "&:where(:has(#body-inner)) .fancybox-slide--map .fancybox-content"
    ]
  ],
  [
    "design-02225",
    [
      "&:where(:has(#body-inner)) .fancybox-slide--iframe .fancybox-content"
    ]
  ],
  [
    "design-02226",
    [
      "&:where(:has(#body-inner)) .fancybox-iframe",
      "&:where(:has(#body-inner)) .fancybox-video"
    ]
  ],
  [
    "design-02227",
    [
      "&:where(:has(#body-inner)) .fancybox-iframe",
      "&:where(:has(#body-inner)) .fancybox-video"
    ]
  ],
  [
    "design-02228",
    [
      "&:where(:has(#body-inner)) .fancybox-iframe",
      "&:where(:has(#body-inner)) .fancybox-video"
    ]
  ],
  [
    "design-02229",
    [
      "&:where(:has(#body-inner)) .fancybox-iframe",
      "&:where(:has(#body-inner)) .fancybox-video"
    ]
  ],
  [
    "design-02230",
    [
      "&:where(:has(#body-inner)) .fancybox-iframe",
      "&:where(:has(#body-inner)) .fancybox-video"
    ]
  ],
  [
    "design-02231",
    [
      "&:where(:has(#body-inner)) .fancybox-iframe",
      "&:where(:has(#body-inner)) .fancybox-video"
    ]
  ],
  [
    "design-02232",
    [
      "&:where(:has(#body-inner)) .fancybox-iframe",
      "&:where(:has(#body-inner)) .fancybox-video"
    ]
  ],
  [
    "design-02233",
    [
      "&:where(:has(#body-inner)) .fancybox-iframe",
      "&:where(:has(#body-inner)) .fancybox-video"
    ]
  ],
  [
    "design-02234",
    [
      "&:where(:has(#body-inner)) .fancybox-iframe"
    ]
  ],
  [
    "design-02235",
    [
      "&:where(:has(#body-inner)) .fancybox-iframe"
    ]
  ],
  [
    "design-02236",
    [
      "&:where(:has(#body-inner)) .fancybox-iframe"
    ]
  ],
  [
    "design-02237",
    [
      "&:where(:has(#body-inner)) .fancybox-error"
    ]
  ],
  [
    "design-02238",
    [
      "&:where(:has(#body-inner)) .fancybox-error"
    ]
  ],
  [
    "design-02239",
    [
      "&:where(:has(#body-inner)) .fancybox-error"
    ]
  ],
  [
    "design-02240",
    [
      "&:where(:has(#body-inner)) .fancybox-error"
    ]
  ],
  [
    "design-02241",
    [
      "&:where(:has(#body-inner)) .fancybox-error"
    ]
  ],
  [
    "design-02242",
    [
      "&:where(:has(#body-inner)) .fancybox-error p"
    ]
  ],
  [
    "design-02243",
    [
      "&:where(:has(#body-inner)) .fancybox-error p"
    ]
  ],
  [
    "design-02244",
    [
      "&:where(:has(#body-inner)) .fancybox-error p"
    ]
  ],
  [
    "design-02245",
    [
      "&:where(:has(#body-inner)) .fancybox-error p"
    ]
  ],
  [
    "design-02246",
    [
      "&:where(:has(#body-inner)) .fancybox-error p"
    ]
  ],
  [
    "design-02247",
    [
      "&:where(:has(#body-inner)) .fancybox-button"
    ]
  ],
  [
    "design-02248",
    [
      "&:where(:has(#body-inner)) .fancybox-button"
    ]
  ],
  [
    "design-02249",
    [
      "&:where(:has(#body-inner)) .fancybox-button"
    ]
  ],
  [
    "design-02250",
    [
      "&:where(:has(#body-inner)) .fancybox-button"
    ]
  ],
  [
    "design-02251",
    [
      "&:where(:has(#body-inner)) .fancybox-button"
    ]
  ],
  [
    "design-02252",
    [
      "&:where(:has(#body-inner)) .fancybox-button"
    ]
  ],
  [
    "design-02253",
    [
      "&:where(:has(#body-inner)) .fancybox-button"
    ]
  ],
  [
    "design-02254",
    [
      "&:where(:has(#body-inner)) .fancybox-button"
    ]
  ],
  [
    "design-02255",
    [
      "&:where(:has(#body-inner)) .fancybox-button"
    ]
  ],
  [
    "design-02256",
    [
      "&:where(:has(#body-inner)) .fancybox-button"
    ]
  ],
  [
    "design-02257",
    [
      "&:where(:has(#body-inner)) .fancybox-button"
    ]
  ],
  [
    "design-02258",
    [
      "&:where(:has(#body-inner)) .fancybox-button"
    ]
  ],
  [
    "design-02259",
    [
      "&:where(:has(#body-inner)) .fancybox-button"
    ]
  ],
  [
    "design-02260",
    [
      "&:where(:has(#body-inner)) .fancybox-button"
    ]
  ],
  [
    "design-02261",
    [
      "&:where(:has(#body-inner)) .fancybox-button",
      "&:where(:has(#body-inner)) .fancybox-button:link",
      "&:where(:has(#body-inner)) .fancybox-button:visited"
    ]
  ],
  [
    "design-02262",
    [
      "&:where(:has(#body-inner)) .fancybox-button:hover"
    ]
  ],
  [
    "design-02263",
    [
      "&:where(:has(#body-inner)) .fancybox-button:focus"
    ]
  ],
  [
    "design-02264",
    [
      "&:where(:has(#body-inner)) .fancybox-button.fancybox-focus"
    ]
  ],
  [
    "design-02265",
    [
      "&:where(:has(#body-inner)) .fancybox-button[disabled]",
      "&:where(:has(#body-inner)) .fancybox-button[disabled]:hover"
    ]
  ],
  [
    "design-02266",
    [
      "&:where(:has(#body-inner)) .fancybox-button[disabled]",
      "&:where(:has(#body-inner)) .fancybox-button[disabled]:hover"
    ]
  ],
  [
    "design-02267",
    [
      "&:where(:has(#body-inner)) .fancybox-button[disabled]",
      "&:where(:has(#body-inner)) .fancybox-button[disabled]:hover"
    ]
  ],
  [
    "design-02268",
    [
      "&:where(:has(#body-inner)) .fancybox-button div"
    ]
  ],
  [
    "design-02269",
    [
      "&:where(:has(#body-inner)) .fancybox-button svg"
    ]
  ],
  [
    "design-02270",
    [
      "&:where(:has(#body-inner)) .fancybox-button svg"
    ]
  ],
  [
    "design-02271",
    [
      "&:where(:has(#body-inner)) .fancybox-button svg"
    ]
  ],
  [
    "design-02272",
    [
      "&:where(:has(#body-inner)) .fancybox-button svg"
    ]
  ],
  [
    "design-02273",
    [
      "&:where(:has(#body-inner)) .fancybox-button svg"
    ]
  ],
  [
    "design-02274",
    [
      "&:where(:has(#body-inner)) .fancybox-button svg path"
    ]
  ],
  [
    "design-02275",
    [
      "&:where(:has(#body-inner)) .fancybox-button svg path"
    ]
  ],
  [
    "design-02276",
    [
      "&:where(:has(#body-inner)) .fancybox-button--fsenter svg:nth-child(2)",
      "&:where(:has(#body-inner)) .fancybox-button--fsexit svg:first-child",
      "&:where(:has(#body-inner)) .fancybox-button--pause svg:first-child",
      "&:where(:has(#body-inner)) .fancybox-button--play svg:nth-child(2)"
    ]
  ],
  [
    "design-02277",
    [
      "&:where(:has(#body-inner)) .fancybox-progress"
    ]
  ],
  [
    "design-02278",
    [
      "&:where(:has(#body-inner)) .fancybox-progress"
    ]
  ],
  [
    "design-02279",
    [
      "&:where(:has(#body-inner)) .fancybox-progress"
    ]
  ],
  [
    "design-02280",
    [
      "&:where(:has(#body-inner)) .fancybox-progress"
    ]
  ],
  [
    "design-02281",
    [
      "&:where(:has(#body-inner)) .fancybox-progress"
    ]
  ],
  [
    "design-02282",
    [
      "&:where(:has(#body-inner)) .fancybox-progress"
    ]
  ],
  [
    "design-02283",
    [
      "&:where(:has(#body-inner)) .fancybox-progress"
    ]
  ],
  [
    "design-02284",
    [
      "&:where(:has(#body-inner)) .fancybox-progress"
    ]
  ],
  [
    "design-02285",
    [
      "&:where(:has(#body-inner)) .fancybox-progress"
    ]
  ],
  [
    "design-02286",
    [
      "&:where(:has(#body-inner)) .fancybox-progress"
    ]
  ],
  [
    "design-02287",
    [
      "&:where(:has(#body-inner)) .fancybox-progress"
    ]
  ],
  [
    "design-02288",
    [
      "&:where(:has(#body-inner)) .fancybox-close-small"
    ]
  ],
  [
    "design-02289",
    [
      "&:where(:has(#body-inner)) .fancybox-close-small"
    ]
  ],
  [
    "design-02290",
    [
      "&:where(:has(#body-inner)) .fancybox-close-small"
    ]
  ],
  [
    "design-02291",
    [
      "&:where(:has(#body-inner)) .fancybox-close-small"
    ]
  ],
  [
    "design-02292",
    [
      "&:where(:has(#body-inner)) .fancybox-close-small"
    ]
  ],
  [
    "design-02293",
    [
      "&:where(:has(#body-inner)) .fancybox-close-small"
    ]
  ],
  [
    "design-02294",
    [
      "&:where(:has(#body-inner)) .fancybox-close-small"
    ]
  ],
  [
    "design-02295",
    [
      "&:where(:has(#body-inner)) .fancybox-close-small"
    ]
  ],
  [
    "design-02296",
    [
      "&:where(:has(#body-inner)) .fancybox-close-small"
    ]
  ],
  [
    "design-02297",
    [
      "&:where(:has(#body-inner)) .fancybox-close-small"
    ]
  ],
  [
    "design-02298",
    [
      "&:where(:has(#body-inner)) .fancybox-close-small"
    ]
  ],
  [
    "design-02299",
    [
      "&:where(:has(#body-inner)) .fancybox-close-small:hover"
    ]
  ],
  [
    "design-02300",
    [
      "&:where(:has(#body-inner)) .fancybox-close-small:hover"
    ]
  ],
  [
    "design-02301",
    [
      "&:where(:has(#body-inner)) .fancybox-slide--html .fancybox-close-small"
    ]
  ],
  [
    "design-02302",
    [
      "&:where(:has(#body-inner)) .fancybox-slide--html .fancybox-close-small"
    ]
  ],
  [
    "design-02303",
    [
      "&:where(:has(#body-inner)) .fancybox-slide--html .fancybox-close-small"
    ]
  ],
  [
    "design-02304",
    [
      "&:where(:has(#body-inner)) .fancybox-slide--html .fancybox-close-small"
    ]
  ],
  [
    "design-02305",
    [
      "&:where(:has(#body-inner)) .fancybox-slide--image.fancybox-is-scaling .fancybox-content"
    ]
  ],
  [
    "design-02306",
    [
      "&:where(:has(#body-inner)) .fancybox-is-scaling .fancybox-close-small",
      "&:where(:has(#body-inner)) .fancybox-is-zoomable.fancybox-can-pan .fancybox-close-small"
    ]
  ],
  [
    "design-02307",
    [
      "&:where(:has(#body-inner)) .fancybox-navigation .fancybox-button"
    ]
  ],
  [
    "design-02308",
    [
      "&:where(:has(#body-inner)) .fancybox-navigation .fancybox-button"
    ]
  ],
  [
    "design-02309",
    [
      "&:where(:has(#body-inner)) .fancybox-navigation .fancybox-button"
    ]
  ],
  [
    "design-02310",
    [
      "&:where(:has(#body-inner)) .fancybox-navigation .fancybox-button"
    ]
  ],
  [
    "design-02311",
    [
      "&:where(:has(#body-inner)) .fancybox-navigation .fancybox-button"
    ]
  ],
  [
    "design-02312",
    [
      "&:where(:has(#body-inner)) .fancybox-navigation .fancybox-button"
    ]
  ],
  [
    "design-02313",
    [
      "&:where(:has(#body-inner)) .fancybox-navigation .fancybox-button div"
    ]
  ],
  [
    "design-02314",
    [
      "&:where(:has(#body-inner)) .fancybox-navigation .fancybox-button--arrow_left"
    ]
  ],
  [
    "design-02315",
    [
      "&:where(:has(#body-inner)) .fancybox-navigation .fancybox-button--arrow_left"
    ]
  ],
  [
    "design-02316",
    [
      "&:where(:has(#body-inner)) .fancybox-navigation .fancybox-button--arrow_left"
    ]
  ],
  [
    "design-02317",
    [
      "&:where(:has(#body-inner)) .fancybox-navigation .fancybox-button--arrow_right"
    ]
  ],
  [
    "design-02318",
    [
      "&:where(:has(#body-inner)) .fancybox-navigation .fancybox-button--arrow_right"
    ]
  ],
  [
    "design-02319",
    [
      "&:where(:has(#body-inner)) .fancybox-navigation .fancybox-button--arrow_right"
    ]
  ],
  [
    "design-02320",
    [
      "&:where(:has(#body-inner)) .fancybox-caption"
    ]
  ],
  [
    "design-02321",
    [
      "&:where(:has(#body-inner)) .fancybox-caption"
    ]
  ],
  [
    "design-02322",
    [
      "&:where(:has(#body-inner)) .fancybox-caption"
    ]
  ],
  [
    "design-02323",
    [
      "&:where(:has(#body-inner)) .fancybox-caption"
    ]
  ],
  [
    "design-02324",
    [
      "&:where(:has(#body-inner)) .fancybox-caption"
    ]
  ],
  [
    "design-02325",
    [
      "&:where(:has(#body-inner)) .fancybox-caption"
    ]
  ],
  [
    "design-02326",
    [
      "&:where(:has(#body-inner)) .fancybox-caption"
    ]
  ],
  [
    "design-02327",
    [
      "&:where(:has(#body-inner)) .fancybox-caption"
    ]
  ],
  [
    "design-02328",
    [
      "&:where(:has(#body-inner)) .fancybox-caption"
    ]
  ],
  [
    "design-02329",
    [
      "&:where(:has(#body-inner)) .fancybox-caption"
    ]
  ],
  [
    "design-02330",
    [
      "&:where(:has(#body-inner)) .fancybox-caption"
    ]
  ],
  [
    "design-02331",
    [
      "&:where(:has(#body-inner)) .fancybox-caption"
    ]
  ],
  [
    "design-02332",
    [
      "@supports (padding:max(0px)) { &:where(:has(#body-inner)) .fancybox-caption }"
    ]
  ],
  [
    "design-02333",
    [
      "&:where(:has(#body-inner)) .fancybox-caption--separate"
    ]
  ],
  [
    "design-02334",
    [
      "&:where(:has(#body-inner)) .fancybox-caption__body"
    ]
  ],
  [
    "design-02335",
    [
      "&:where(:has(#body-inner)) .fancybox-caption__body"
    ]
  ],
  [
    "design-02336",
    [
      "&:where(:has(#body-inner)) .fancybox-caption__body"
    ]
  ],
  [
    "design-02337",
    [
      "&:where(:has(#body-inner)) .fancybox-caption a",
      "&:where(:has(#body-inner)) .fancybox-caption a:link",
      "&:where(:has(#body-inner)) .fancybox-caption a:visited"
    ]
  ],
  [
    "design-02338",
    [
      "&:where(:has(#body-inner)) .fancybox-caption a",
      "&:where(:has(#body-inner)) .fancybox-caption a:link",
      "&:where(:has(#body-inner)) .fancybox-caption a:visited"
    ]
  ],
  [
    "design-02339",
    [
      "&:where(:has(#body-inner)) .fancybox-caption a:hover"
    ]
  ],
  [
    "design-02340",
    [
      "&:where(:has(#body-inner)) .fancybox-caption a:hover"
    ]
  ],
  [
    "design-02341",
    [
      "&:where(:has(#body-inner)) .fancybox-loading"
    ]
  ],
  [
    "design-02342",
    [
      "&:where(:has(#body-inner)) .fancybox-loading"
    ]
  ],
  [
    "design-02343",
    [
      "&:where(:has(#body-inner)) .fancybox-loading"
    ]
  ],
  [
    "design-02344",
    [
      "&:where(:has(#body-inner)) .fancybox-loading"
    ]
  ],
  [
    "design-02345",
    [
      "&:where(:has(#body-inner)) .fancybox-loading"
    ]
  ],
  [
    "design-02346",
    [
      "&:where(:has(#body-inner)) .fancybox-loading"
    ]
  ],
  [
    "design-02347",
    [
      "&:where(:has(#body-inner)) .fancybox-loading"
    ]
  ],
  [
    "design-02348",
    [
      "&:where(:has(#body-inner)) .fancybox-loading"
    ]
  ],
  [
    "design-02349",
    [
      "&:where(:has(#body-inner)) .fancybox-loading"
    ]
  ],
  [
    "design-02350",
    [
      "&:where(:has(#body-inner)) .fancybox-loading"
    ]
  ],
  [
    "design-02351",
    [
      "&:where(:has(#body-inner)) .fancybox-loading"
    ]
  ],
  [
    "design-02352",
    [
      "&:where(:has(#body-inner)) .fancybox-loading"
    ]
  ],
  [
    "design-02353",
    [
      "&:where(:has(#body-inner)) .fancybox-loading"
    ]
  ],
  [
    "design-02354",
    [
      "&:where(:has(#body-inner)) .fancybox-loading"
    ]
  ],
  [
    "design-02355",
    [
      "&:where(:has(#body-inner)) .fancybox-animated"
    ]
  ],
  [
    "design-02356",
    [
      "&:where(:has(#body-inner)) .fancybox-fx-slide.fancybox-slide--previous"
    ]
  ],
  [
    "design-02357",
    [
      "&:where(:has(#body-inner)) .fancybox-fx-slide.fancybox-slide--previous"
    ]
  ],
  [
    "design-02358",
    [
      "&:where(:has(#body-inner)) .fancybox-fx-slide.fancybox-slide--next"
    ]
  ],
  [
    "design-02359",
    [
      "&:where(:has(#body-inner)) .fancybox-fx-slide.fancybox-slide--next"
    ]
  ],
  [
    "design-02360",
    [
      "&:where(:has(#body-inner)) .fancybox-fx-slide.fancybox-slide--current"
    ]
  ],
  [
    "design-02361",
    [
      "&:where(:has(#body-inner)) .fancybox-fx-slide.fancybox-slide--current"
    ]
  ],
  [
    "design-02362",
    [
      "&:where(:has(#body-inner)) .fancybox-fx-fade.fancybox-slide--next",
      "&:where(:has(#body-inner)) .fancybox-fx-fade.fancybox-slide--previous"
    ]
  ],
  [
    "design-02363",
    [
      "&:where(:has(#body-inner)) .fancybox-fx-fade.fancybox-slide--next",
      "&:where(:has(#body-inner)) .fancybox-fx-fade.fancybox-slide--previous"
    ]
  ],
  [
    "design-02364",
    [
      "&:where(:has(#body-inner)) .fancybox-fx-fade.fancybox-slide--current"
    ]
  ],
  [
    "design-02365",
    [
      "&:where(:has(#body-inner)) .fancybox-fx-zoom-in-out.fancybox-slide--previous"
    ]
  ],
  [
    "design-02366",
    [
      "&:where(:has(#body-inner)) .fancybox-fx-zoom-in-out.fancybox-slide--previous"
    ]
  ],
  [
    "design-02367",
    [
      "&:where(:has(#body-inner)) .fancybox-fx-zoom-in-out.fancybox-slide--next"
    ]
  ],
  [
    "design-02368",
    [
      "&:where(:has(#body-inner)) .fancybox-fx-zoom-in-out.fancybox-slide--next"
    ]
  ],
  [
    "design-02369",
    [
      "&:where(:has(#body-inner)) .fancybox-fx-zoom-in-out.fancybox-slide--current"
    ]
  ],
  [
    "design-02370",
    [
      "&:where(:has(#body-inner)) .fancybox-fx-zoom-in-out.fancybox-slide--current"
    ]
  ],
  [
    "design-02371",
    [
      "&:where(:has(#body-inner)) .fancybox-fx-rotate.fancybox-slide--previous"
    ]
  ],
  [
    "design-02372",
    [
      "&:where(:has(#body-inner)) .fancybox-fx-rotate.fancybox-slide--previous"
    ]
  ],
  [
    "design-02373",
    [
      "&:where(:has(#body-inner)) .fancybox-fx-rotate.fancybox-slide--next"
    ]
  ],
  [
    "design-02374",
    [
      "&:where(:has(#body-inner)) .fancybox-fx-rotate.fancybox-slide--next"
    ]
  ],
  [
    "design-02375",
    [
      "&:where(:has(#body-inner)) .fancybox-fx-rotate.fancybox-slide--current"
    ]
  ],
  [
    "design-02376",
    [
      "&:where(:has(#body-inner)) .fancybox-fx-rotate.fancybox-slide--current"
    ]
  ],
  [
    "design-02377",
    [
      "&:where(:has(#body-inner)) .fancybox-fx-circular.fancybox-slide--previous"
    ]
  ],
  [
    "design-02378",
    [
      "&:where(:has(#body-inner)) .fancybox-fx-circular.fancybox-slide--previous"
    ]
  ],
  [
    "design-02379",
    [
      "&:where(:has(#body-inner)) .fancybox-fx-circular.fancybox-slide--next"
    ]
  ],
  [
    "design-02380",
    [
      "&:where(:has(#body-inner)) .fancybox-fx-circular.fancybox-slide--next"
    ]
  ],
  [
    "design-02381",
    [
      "&:where(:has(#body-inner)) .fancybox-fx-circular.fancybox-slide--current"
    ]
  ],
  [
    "design-02382",
    [
      "&:where(:has(#body-inner)) .fancybox-fx-circular.fancybox-slide--current"
    ]
  ],
  [
    "design-02383",
    [
      "&:where(:has(#body-inner)) .fancybox-fx-tube.fancybox-slide--previous"
    ]
  ],
  [
    "design-02384",
    [
      "&:where(:has(#body-inner)) .fancybox-fx-tube.fancybox-slide--next"
    ]
  ],
  [
    "design-02385",
    [
      "&:where(:has(#body-inner)) .fancybox-fx-tube.fancybox-slide--current"
    ]
  ],
  [
    "design-02386",
    [
      "@media (max-height: 576px) { &:where(:has(#body-inner)) .fancybox-slide }"
    ]
  ],
  [
    "design-02387",
    [
      "@media (max-height: 576px) { &:where(:has(#body-inner)) .fancybox-slide }"
    ]
  ],
  [
    "design-02388",
    [
      "@media (max-height: 576px) { &:where(:has(#body-inner)) .fancybox-slide--image }"
    ]
  ],
  [
    "design-02389",
    [
      "@media (max-height: 576px) { &:where(:has(#body-inner)) .fancybox-close-small }"
    ]
  ],
  [
    "design-02390",
    [
      "@media (max-height: 576px) { &:where(:has(#body-inner)) .fancybox-slide--image .fancybox-close-small }"
    ]
  ],
  [
    "design-02391",
    [
      "@media (max-height: 576px) { &:where(:has(#body-inner)) .fancybox-slide--image .fancybox-close-small }"
    ]
  ],
  [
    "design-02392",
    [
      "@media (max-height: 576px) { &:where(:has(#body-inner)) .fancybox-slide--image .fancybox-close-small }"
    ]
  ],
  [
    "design-02393",
    [
      "@media (max-height: 576px) { &:where(:has(#body-inner)) .fancybox-slide--image .fancybox-close-small }"
    ]
  ],
  [
    "design-02394",
    [
      "@media (max-height: 576px) { &:where(:has(#body-inner)) .fancybox-slide--image .fancybox-close-small }"
    ]
  ],
  [
    "design-02395",
    [
      "@media (max-height: 576px) { &:where(:has(#body-inner)) .fancybox-slide--image .fancybox-close-small }"
    ]
  ],
  [
    "design-02396",
    [
      "@media (max-height: 576px) { &:where(:has(#body-inner)) .fancybox-slide--image .fancybox-close-small }"
    ]
  ],
  [
    "design-02397",
    [
      "@media (max-height: 576px) { &:where(:has(#body-inner)) .fancybox-slide--image .fancybox-close-small }"
    ]
  ],
  [
    "design-02398",
    [
      "@media (max-height: 576px) { &:where(:has(#body-inner)) .fancybox-caption }"
    ]
  ],
  [
    "design-02399",
    [
      "@media (max-height: 576px) { &:where(:has(#body-inner)) .fancybox-caption }"
    ]
  ],
  [
    "design-02400",
    [
      "@media (max-height: 576px) { @supports (padding:max(0px)) { &:where(:has(#body-inner)) .fancybox-caption } }"
    ]
  ],
  [
    "design-02401",
    [
      "@media (max-height: 576px) { @supports (padding:max(0px)) { &:where(:has(#body-inner)) .fancybox-caption } }"
    ]
  ],
  [
    "design-02402",
    [
      "&:where(:has(#body-inner)) .fancybox-share"
    ]
  ],
  [
    "design-02403",
    [
      "&:where(:has(#body-inner)) .fancybox-share"
    ]
  ],
  [
    "design-02404",
    [
      "&:where(:has(#body-inner)) .fancybox-share"
    ]
  ],
  [
    "design-02405",
    [
      "&:where(:has(#body-inner)) .fancybox-share"
    ]
  ],
  [
    "design-02406",
    [
      "&:where(:has(#body-inner)) .fancybox-share"
    ]
  ],
  [
    "design-02407",
    [
      "&:where(:has(#body-inner)) .fancybox-share h1"
    ]
  ],
  [
    "design-02408",
    [
      "&:where(:has(#body-inner)) .fancybox-share h1"
    ]
  ],
  [
    "design-02409",
    [
      "&:where(:has(#body-inner)) .fancybox-share h1"
    ]
  ],
  [
    "design-02410",
    [
      "&:where(:has(#body-inner)) .fancybox-share h1"
    ]
  ],
  [
    "design-02411",
    [
      "&:where(:has(#body-inner)) .fancybox-share p"
    ]
  ],
  [
    "design-02412",
    [
      "&:where(:has(#body-inner)) .fancybox-share p"
    ]
  ],
  [
    "design-02413",
    [
      "&:where(:has(#body-inner)) .fancybox-share__button"
    ]
  ],
  [
    "design-02414",
    [
      "&:where(:has(#body-inner)) .fancybox-share__button"
    ]
  ],
  [
    "design-02415",
    [
      "&:where(:has(#body-inner)) .fancybox-share__button"
    ]
  ],
  [
    "design-02416",
    [
      "&:where(:has(#body-inner)) .fancybox-share__button"
    ]
  ],
  [
    "design-02417",
    [
      "&:where(:has(#body-inner)) .fancybox-share__button"
    ]
  ],
  [
    "design-02418",
    [
      "&:where(:has(#body-inner)) .fancybox-share__button"
    ]
  ],
  [
    "design-02419",
    [
      "&:where(:has(#body-inner)) .fancybox-share__button"
    ]
  ],
  [
    "design-02420",
    [
      "&:where(:has(#body-inner)) .fancybox-share__button"
    ]
  ],
  [
    "design-02421",
    [
      "&:where(:has(#body-inner)) .fancybox-share__button"
    ]
  ],
  [
    "design-02422",
    [
      "&:where(:has(#body-inner)) .fancybox-share__button"
    ]
  ],
  [
    "design-02423",
    [
      "&:where(:has(#body-inner)) .fancybox-share__button"
    ]
  ],
  [
    "design-02424",
    [
      "&:where(:has(#body-inner)) .fancybox-share__button"
    ]
  ],
  [
    "design-02425",
    [
      "&:where(:has(#body-inner)) .fancybox-share__button"
    ]
  ],
  [
    "design-02426",
    [
      "&:where(:has(#body-inner)) .fancybox-share__button"
    ]
  ],
  [
    "design-02427",
    [
      "&:where(:has(#body-inner)) .fancybox-share__button"
    ]
  ],
  [
    "design-02428",
    [
      "&:where(:has(#body-inner)) .fancybox-share__button"
    ]
  ],
  [
    "design-02429",
    [
      "&:where(:has(#body-inner)) .fancybox-share__button:link",
      "&:where(:has(#body-inner)) .fancybox-share__button:visited"
    ]
  ],
  [
    "design-02430",
    [
      "&:where(:has(#body-inner)) .fancybox-share__button:hover"
    ]
  ],
  [
    "design-02431",
    [
      "&:where(:has(#body-inner)) .fancybox-share__button--fb"
    ]
  ],
  [
    "design-02432",
    [
      "&:where(:has(#body-inner)) .fancybox-share__button--fb:hover"
    ]
  ],
  [
    "design-02433",
    [
      "&:where(:has(#body-inner)) .fancybox-share__button--pt"
    ]
  ],
  [
    "design-02434",
    [
      "&:where(:has(#body-inner)) .fancybox-share__button--pt:hover"
    ]
  ],
  [
    "design-02435",
    [
      "&:where(:has(#body-inner)) .fancybox-share__button--tw"
    ]
  ],
  [
    "design-02436",
    [
      "&:where(:has(#body-inner)) .fancybox-share__button--tw:hover"
    ]
  ],
  [
    "design-02437",
    [
      "&:where(:has(#body-inner)) .fancybox-share__button svg"
    ]
  ],
  [
    "design-02438",
    [
      "&:where(:has(#body-inner)) .fancybox-share__button svg"
    ]
  ],
  [
    "design-02439",
    [
      "&:where(:has(#body-inner)) .fancybox-share__button svg"
    ]
  ],
  [
    "design-02440",
    [
      "&:where(:has(#body-inner)) .fancybox-share__button svg"
    ]
  ],
  [
    "design-02441",
    [
      "&:where(:has(#body-inner)) .fancybox-share__button svg"
    ]
  ],
  [
    "design-02442",
    [
      "&:where(:has(#body-inner)) .fancybox-share__button svg"
    ]
  ],
  [
    "design-02443",
    [
      "&:where(:has(#body-inner)) .fancybox-share__button svg path"
    ]
  ],
  [
    "design-02444",
    [
      "&:where(:has(#body-inner)) .fancybox-share__input"
    ]
  ],
  [
    "design-02445",
    [
      "&:where(:has(#body-inner)) .fancybox-share__input"
    ]
  ],
  [
    "design-02446",
    [
      "&:where(:has(#body-inner)) .fancybox-share__input"
    ]
  ],
  [
    "design-02447",
    [
      "&:where(:has(#body-inner)) .fancybox-share__input"
    ]
  ],
  [
    "design-02448",
    [
      "&:where(:has(#body-inner)) .fancybox-share__input"
    ]
  ],
  [
    "design-02449",
    [
      "&:where(:has(#body-inner)) .fancybox-share__input"
    ]
  ],
  [
    "design-02450",
    [
      "&:where(:has(#body-inner)) .fancybox-share__input"
    ]
  ],
  [
    "design-02451",
    [
      "&:where(:has(#body-inner)) .fancybox-share__input"
    ]
  ],
  [
    "design-02452",
    [
      "&:where(:has(#body-inner)) .fancybox-share__input"
    ]
  ],
  [
    "design-02453",
    [
      "&:where(:has(#body-inner)) .fancybox-share__input"
    ]
  ],
  [
    "design-02454",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs"
    ]
  ],
  [
    "design-02455",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs"
    ]
  ],
  [
    "design-02456",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs"
    ]
  ],
  [
    "design-02457",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs"
    ]
  ],
  [
    "design-02458",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs"
    ]
  ],
  [
    "design-02459",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs"
    ]
  ],
  [
    "design-02460",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs"
    ]
  ],
  [
    "design-02461",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs"
    ]
  ],
  [
    "design-02462",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs"
    ]
  ],
  [
    "design-02463",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs"
    ]
  ],
  [
    "design-02464",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs"
    ]
  ],
  [
    "design-02465",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs"
    ]
  ],
  [
    "design-02466",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs"
    ]
  ],
  [
    "design-02467",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs-x"
    ]
  ],
  [
    "design-02468",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs-x"
    ]
  ],
  [
    "design-02469",
    [
      "&:where(:has(#body-inner)) .fancybox-show-thumbs .fancybox-thumbs"
    ]
  ],
  [
    "design-02470",
    [
      "&:where(:has(#body-inner)) .fancybox-show-thumbs .fancybox-inner"
    ]
  ],
  [
    "design-02471",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list"
    ]
  ],
  [
    "design-02472",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list"
    ]
  ],
  [
    "design-02473",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list"
    ]
  ],
  [
    "design-02474",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list"
    ]
  ],
  [
    "design-02475",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list"
    ]
  ],
  [
    "design-02476",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list"
    ]
  ],
  [
    "design-02477",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list"
    ]
  ],
  [
    "design-02478",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list"
    ]
  ],
  [
    "design-02479",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list"
    ]
  ],
  [
    "design-02480",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list"
    ]
  ],
  [
    "design-02481",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list"
    ]
  ],
  [
    "design-02482",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs-x .fancybox-thumbs__list"
    ]
  ],
  [
    "design-02483",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs-y .fancybox-thumbs__list::-webkit-scrollbar"
    ]
  ],
  [
    "design-02484",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs-y .fancybox-thumbs__list::-webkit-scrollbar-track"
    ]
  ],
  [
    "design-02485",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs-y .fancybox-thumbs__list::-webkit-scrollbar-track"
    ]
  ],
  [
    "design-02486",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs-y .fancybox-thumbs__list::-webkit-scrollbar-track"
    ]
  ],
  [
    "design-02487",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs-y .fancybox-thumbs__list::-webkit-scrollbar-thumb"
    ]
  ],
  [
    "design-02488",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs-y .fancybox-thumbs__list::-webkit-scrollbar-thumb"
    ]
  ],
  [
    "design-02489",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list a"
    ]
  ],
  [
    "design-02490",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list a"
    ]
  ],
  [
    "design-02491",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list a"
    ]
  ],
  [
    "design-02492",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list a"
    ]
  ],
  [
    "design-02493",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list a"
    ]
  ],
  [
    "design-02494",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list a"
    ]
  ],
  [
    "design-02495",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list a"
    ]
  ],
  [
    "design-02496",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list a"
    ]
  ],
  [
    "design-02497",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list a"
    ]
  ],
  [
    "design-02498",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list a"
    ]
  ],
  [
    "design-02499",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list a"
    ]
  ],
  [
    "design-02500",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list a"
    ]
  ],
  [
    "design-02501",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list a"
    ]
  ],
  [
    "design-02502",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list a"
    ]
  ],
  [
    "design-02503",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list a"
    ]
  ],
  [
    "design-02504",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list a"
    ]
  ],
  [
    "design-02505",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list a"
    ]
  ],
  [
    "design-02506",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list a"
    ]
  ],
  [
    "design-02507",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list a::before"
    ]
  ],
  [
    "design-02508",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list a::before"
    ]
  ],
  [
    "design-02509",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list a::before"
    ]
  ],
  [
    "design-02510",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list a::before"
    ]
  ],
  [
    "design-02511",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list a::before"
    ]
  ],
  [
    "design-02512",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list a::before"
    ]
  ],
  [
    "design-02513",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list a::before"
    ]
  ],
  [
    "design-02514",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list a::before"
    ]
  ],
  [
    "design-02515",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list a::before"
    ]
  ],
  [
    "design-02516",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list a::before"
    ]
  ],
  [
    "design-02517",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list a:focus::before"
    ]
  ],
  [
    "design-02518",
    [
      "&:where(:has(#body-inner)) .fancybox-thumbs__list a.fancybox-thumbs-active::before"
    ]
  ],
  [
    "design-02519",
    [
      "@media (max-width: 576px) { &:where(:has(#body-inner)) .fancybox-thumbs }"
    ]
  ],
  [
    "design-02520",
    [
      "@media (max-width: 576px) { &:where(:has(#body-inner)) .fancybox-show-thumbs .fancybox-inner }"
    ]
  ],
  [
    "design-02521",
    [
      "@media (max-width: 576px) { &:where(:has(#body-inner)) .fancybox-thumbs__list a }"
    ]
  ],
  [
    "design-02522",
    [
      "&:where(:has(#body-inner)):root"
    ]
  ],
  [
    "design-02523",
    [
      "&:where(:has(#body-inner)) .swiper"
    ]
  ],
  [
    "design-02524",
    [
      "&:where(:has(#body-inner)) .swiper"
    ]
  ],
  [
    "design-02525",
    [
      "&:where(:has(#body-inner)) .swiper"
    ]
  ],
  [
    "design-02526",
    [
      "&:where(:has(#body-inner)) .swiper"
    ]
  ],
  [
    "design-02527",
    [
      "&:where(:has(#body-inner)) .swiper"
    ]
  ],
  [
    "design-02528",
    [
      "&:where(:has(#body-inner)) .swiper"
    ]
  ],
  [
    "design-02529",
    [
      "&:where(:has(#body-inner)) .swiper"
    ]
  ],
  [
    "design-02530",
    [
      "&:where(:has(#body-inner)) .swiper"
    ]
  ],
  [
    "design-02531",
    [
      "&:where(:has(#body-inner)) .swiper-vertical > .swiper-wrapper"
    ]
  ],
  [
    "design-02532",
    [
      "&:where(:has(#body-inner)) .swiper-wrapper"
    ]
  ],
  [
    "design-02533",
    [
      "&:where(:has(#body-inner)) .swiper-wrapper"
    ]
  ],
  [
    "design-02534",
    [
      "&:where(:has(#body-inner)) .swiper-wrapper"
    ]
  ],
  [
    "design-02535",
    [
      "&:where(:has(#body-inner)) .swiper-wrapper"
    ]
  ],
  [
    "design-02536",
    [
      "&:where(:has(#body-inner)) .swiper-wrapper"
    ]
  ],
  [
    "design-02537",
    [
      "&:where(:has(#body-inner)) .swiper-wrapper"
    ]
  ],
  [
    "design-02538",
    [
      "&:where(:has(#body-inner)) .swiper-wrapper"
    ]
  ],
  [
    "design-02539",
    [
      "&:where(:has(#body-inner)) .swiper-wrapper"
    ]
  ],
  [
    "design-02540",
    [
      "&:where(:has(#body-inner)) .swiper-android .swiper-slide",
      "&:where(:has(#body-inner)) .swiper-ios .swiper-slide",
      "&:where(:has(#body-inner)) .swiper-wrapper"
    ]
  ],
  [
    "design-02541",
    [
      "&:where(:has(#body-inner)) .swiper-horizontal"
    ]
  ],
  [
    "design-02542",
    [
      "&:where(:has(#body-inner)) .swiper-vertical"
    ]
  ],
  [
    "design-02543",
    [
      "&:where(:has(#body-inner)) .swiper-slide"
    ]
  ],
  [
    "design-02544",
    [
      "&:where(:has(#body-inner)) .swiper-slide"
    ]
  ],
  [
    "design-02545",
    [
      "&:where(:has(#body-inner)) .swiper-slide"
    ]
  ],
  [
    "design-02546",
    [
      "&:where(:has(#body-inner)) .swiper-slide"
    ]
  ],
  [
    "design-02547",
    [
      "&:where(:has(#body-inner)) .swiper-slide"
    ]
  ],
  [
    "design-02548",
    [
      "&:where(:has(#body-inner)) .swiper-slide"
    ]
  ],
  [
    "design-02549",
    [
      "&:where(:has(#body-inner)) .swiper-slide-invisible-blank"
    ]
  ],
  [
    "design-02550",
    [
      "&:where(:has(#body-inner)) .swiper-autoheight",
      "&:where(:has(#body-inner)) .swiper-autoheight .swiper-slide"
    ]
  ],
  [
    "design-02551",
    [
      "&:where(:has(#body-inner)) .swiper-autoheight .swiper-wrapper"
    ]
  ],
  [
    "design-02552",
    [
      "&:where(:has(#body-inner)) .swiper-autoheight .swiper-wrapper"
    ]
  ],
  [
    "design-02553",
    [
      "&:where(:has(#body-inner)) .swiper-backface-hidden .swiper-slide"
    ]
  ],
  [
    "design-02554",
    [
      "&:where(:has(#body-inner)) .swiper-backface-hidden .swiper-slide"
    ]
  ],
  [
    "design-02555",
    [
      "&:where(:has(#body-inner)) .swiper-backface-hidden .swiper-slide"
    ]
  ],
  [
    "design-02556",
    [
      "&:where(:has(#body-inner)) .swiper-3d.swiper-css-mode .swiper-wrapper"
    ]
  ],
  [
    "design-02557",
    [
      "&:where(:has(#body-inner)) .swiper-3d .swiper-wrapper"
    ]
  ],
  [
    "design-02558",
    [
      "&:where(:has(#body-inner)) .swiper-3d"
    ]
  ],
  [
    "design-02559",
    [
      "&:where(:has(#body-inner)) .swiper-3d .swiper-cube-shadow",
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide"
    ]
  ],
  [
    "design-02560",
    [
      "&:where(:has(#body-inner)) .swiper-css-mode > .swiper-wrapper"
    ]
  ],
  [
    "design-02561",
    [
      "&:where(:has(#body-inner)) .swiper-css-mode > .swiper-wrapper"
    ]
  ],
  [
    "design-02562",
    [
      "&:where(:has(#body-inner)) .swiper-css-mode > .swiper-wrapper"
    ]
  ],
  [
    "design-02563",
    [
      "&:where(:has(#body-inner)) .swiper-css-mode > .swiper-wrapper::-webkit-scrollbar"
    ]
  ],
  [
    "design-02564",
    [
      "&:where(:has(#body-inner)) .swiper-css-mode > .swiper-wrapper > .swiper-slide"
    ]
  ],
  [
    "design-02565",
    [
      "&:where(:has(#body-inner)) .swiper-css-mode.swiper-horizontal > .swiper-wrapper"
    ]
  ],
  [
    "design-02566",
    [
      "&:where(:has(#body-inner)) .swiper-css-mode.swiper-vertical > .swiper-wrapper"
    ]
  ],
  [
    "design-02567",
    [
      "&:where(:has(#body-inner)) .swiper-css-mode.swiper-free-mode > .swiper-wrapper"
    ]
  ],
  [
    "design-02568",
    [
      "&:where(:has(#body-inner)) .swiper-css-mode.swiper-free-mode > .swiper-wrapper > .swiper-slide"
    ]
  ],
  [
    "design-02569",
    [
      "&:where(:has(#body-inner)) .swiper-css-mode.swiper-centered > .swiper-wrapper::before"
    ]
  ],
  [
    "design-02570",
    [
      "&:where(:has(#body-inner)) .swiper-css-mode.swiper-centered > .swiper-wrapper::before"
    ]
  ],
  [
    "design-02571",
    [
      "&:where(:has(#body-inner)) .swiper-css-mode.swiper-centered > .swiper-wrapper::before"
    ]
  ],
  [
    "design-02572",
    [
      "&:where(:has(#body-inner)) .swiper-css-mode.swiper-centered > .swiper-wrapper > .swiper-slide"
    ]
  ],
  [
    "design-02573",
    [
      "&:where(:has(#body-inner)) .swiper-css-mode.swiper-centered > .swiper-wrapper > .swiper-slide"
    ]
  ],
  [
    "design-02574",
    [
      "&:where(:has(#body-inner)) .swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child"
    ]
  ],
  [
    "design-02575",
    [
      "&:where(:has(#body-inner)) .swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper::before"
    ]
  ],
  [
    "design-02576",
    [
      "&:where(:has(#body-inner)) .swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper::before"
    ]
  ],
  [
    "design-02577",
    [
      "&:where(:has(#body-inner)) .swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper::before"
    ]
  ],
  [
    "design-02578",
    [
      "&:where(:has(#body-inner)) .swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child"
    ]
  ],
  [
    "design-02579",
    [
      "&:where(:has(#body-inner)) .swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper::before"
    ]
  ],
  [
    "design-02580",
    [
      "&:where(:has(#body-inner)) .swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper::before"
    ]
  ],
  [
    "design-02581",
    [
      "&:where(:has(#body-inner)) .swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper::before"
    ]
  ],
  [
    "design-02582",
    [
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow",
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow-bottom",
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow-left",
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow-right",
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow-top"
    ]
  ],
  [
    "design-02583",
    [
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow",
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow-bottom",
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow-left",
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow-right",
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow-top"
    ]
  ],
  [
    "design-02584",
    [
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow",
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow-bottom",
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow-left",
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow-right",
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow-top"
    ]
  ],
  [
    "design-02585",
    [
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow",
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow-bottom",
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow-left",
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow-right",
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow-top"
    ]
  ],
  [
    "design-02586",
    [
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow",
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow-bottom",
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow-left",
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow-right",
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow-top"
    ]
  ],
  [
    "design-02587",
    [
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow",
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow-bottom",
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow-left",
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow-right",
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow-top"
    ]
  ],
  [
    "design-02588",
    [
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow",
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow-bottom",
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow-left",
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow-right",
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow-top"
    ]
  ],
  [
    "design-02589",
    [
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow"
    ]
  ],
  [
    "design-02590",
    [
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow-left"
    ]
  ],
  [
    "design-02591",
    [
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow-right"
    ]
  ],
  [
    "design-02592",
    [
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow-top"
    ]
  ],
  [
    "design-02593",
    [
      "&:where(:has(#body-inner)) .swiper-3d .swiper-slide-shadow-bottom"
    ]
  ],
  [
    "design-02594",
    [
      "&:where(:has(#body-inner)) .swiper-lazy-preloader"
    ]
  ],
  [
    "design-02595",
    [
      "&:where(:has(#body-inner)) .swiper-lazy-preloader"
    ]
  ],
  [
    "design-02596",
    [
      "&:where(:has(#body-inner)) .swiper-lazy-preloader"
    ]
  ],
  [
    "design-02597",
    [
      "&:where(:has(#body-inner)) .swiper-lazy-preloader"
    ]
  ],
  [
    "design-02598",
    [
      "&:where(:has(#body-inner)) .swiper-lazy-preloader"
    ]
  ],
  [
    "design-02599",
    [
      "&:where(:has(#body-inner)) .swiper-lazy-preloader"
    ]
  ],
  [
    "design-02600",
    [
      "&:where(:has(#body-inner)) .swiper-lazy-preloader"
    ]
  ],
  [
    "design-02601",
    [
      "&:where(:has(#body-inner)) .swiper-lazy-preloader"
    ]
  ],
  [
    "design-02602",
    [
      "&:where(:has(#body-inner)) .swiper-lazy-preloader"
    ]
  ],
  [
    "design-02603",
    [
      "&:where(:has(#body-inner)) .swiper-lazy-preloader"
    ]
  ],
  [
    "design-02604",
    [
      "&:where(:has(#body-inner)) .swiper-lazy-preloader"
    ]
  ],
  [
    "design-02605",
    [
      "&:where(:has(#body-inner)) .swiper-lazy-preloader"
    ]
  ],
  [
    "design-02606",
    [
      "&:where(:has(#body-inner)) .swiper-lazy-preloader"
    ]
  ],
  [
    "design-02607",
    [
      "&:where(:has(#body-inner)) .swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader",
      "&:where(:has(#body-inner)) .swiper:not(.swiper-watch-progress) .swiper-lazy-preloader"
    ]
  ],
  [
    "design-02608",
    [
      "&:where(:has(#body-inner)) .swiper-lazy-preloader-white"
    ]
  ],
  [
    "design-02609",
    [
      "&:where(:has(#body-inner)) .swiper-lazy-preloader-black"
    ]
  ],
  [
    "design-02610",
    [
      "&:where(:has(#body-inner)) .swiper-virtual .swiper-slide"
    ]
  ],
  [
    "design-02611",
    [
      "&:where(:has(#body-inner)) .swiper-virtual .swiper-slide"
    ]
  ],
  [
    "design-02612",
    [
      "&:where(:has(#body-inner)) .swiper-virtual.swiper-css-mode .swiper-wrapper::after"
    ]
  ],
  [
    "design-02613",
    [
      "&:where(:has(#body-inner)) .swiper-virtual.swiper-css-mode .swiper-wrapper::after"
    ]
  ],
  [
    "design-02614",
    [
      "&:where(:has(#body-inner)) .swiper-virtual.swiper-css-mode .swiper-wrapper::after"
    ]
  ],
  [
    "design-02615",
    [
      "&:where(:has(#body-inner)) .swiper-virtual.swiper-css-mode .swiper-wrapper::after"
    ]
  ],
  [
    "design-02616",
    [
      "&:where(:has(#body-inner)) .swiper-virtual.swiper-css-mode .swiper-wrapper::after"
    ]
  ],
  [
    "design-02617",
    [
      "&:where(:has(#body-inner)) .swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after"
    ]
  ],
  [
    "design-02618",
    [
      "&:where(:has(#body-inner)) .swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after"
    ]
  ],
  [
    "design-02619",
    [
      "&:where(:has(#body-inner)) .swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after"
    ]
  ],
  [
    "design-02620",
    [
      "&:where(:has(#body-inner)) .swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after"
    ]
  ],
  [
    "design-02621",
    [
      "&:where(:has(#body-inner)):root"
    ]
  ],
  [
    "design-02622",
    [
      "&:where(:has(#body-inner)) .swiper-button-next",
      "&:where(:has(#body-inner)) .swiper-button-prev"
    ]
  ],
  [
    "design-02623",
    [
      "&:where(:has(#body-inner)) .swiper-button-next",
      "&:where(:has(#body-inner)) .swiper-button-prev"
    ]
  ],
  [
    "design-02624",
    [
      "&:where(:has(#body-inner)) .swiper-button-next",
      "&:where(:has(#body-inner)) .swiper-button-prev"
    ]
  ],
  [
    "design-02625",
    [
      "&:where(:has(#body-inner)) .swiper-button-next",
      "&:where(:has(#body-inner)) .swiper-button-prev"
    ]
  ],
  [
    "design-02626",
    [
      "&:where(:has(#body-inner)) .swiper-button-next",
      "&:where(:has(#body-inner)) .swiper-button-prev"
    ]
  ],
  [
    "design-02627",
    [
      "&:where(:has(#body-inner)) .swiper-button-next",
      "&:where(:has(#body-inner)) .swiper-button-prev"
    ]
  ],
  [
    "design-02628",
    [
      "&:where(:has(#body-inner)) .swiper-button-next",
      "&:where(:has(#body-inner)) .swiper-button-prev"
    ]
  ],
  [
    "design-02629",
    [
      "&:where(:has(#body-inner)) .swiper-button-next",
      "&:where(:has(#body-inner)) .swiper-button-prev"
    ]
  ],
  [
    "design-02630",
    [
      "&:where(:has(#body-inner)) .swiper-button-next",
      "&:where(:has(#body-inner)) .swiper-button-prev"
    ]
  ],
  [
    "design-02631",
    [
      "&:where(:has(#body-inner)) .swiper-button-next",
      "&:where(:has(#body-inner)) .swiper-button-prev"
    ]
  ],
  [
    "design-02632",
    [
      "&:where(:has(#body-inner)) .swiper-button-next",
      "&:where(:has(#body-inner)) .swiper-button-prev"
    ]
  ],
  [
    "design-02633",
    [
      "&:where(:has(#body-inner)) .swiper-button-next.swiper-button-disabled",
      "&:where(:has(#body-inner)) .swiper-button-prev.swiper-button-disabled"
    ]
  ],
  [
    "design-02634",
    [
      "&:where(:has(#body-inner)) .swiper-button-next.swiper-button-disabled",
      "&:where(:has(#body-inner)) .swiper-button-prev.swiper-button-disabled"
    ]
  ],
  [
    "design-02635",
    [
      "&:where(:has(#body-inner)) .swiper-button-next.swiper-button-disabled",
      "&:where(:has(#body-inner)) .swiper-button-prev.swiper-button-disabled"
    ]
  ],
  [
    "design-02636",
    [
      "&:where(:has(#body-inner)) .swiper-button-next.swiper-button-hidden",
      "&:where(:has(#body-inner)) .swiper-button-prev.swiper-button-hidden"
    ]
  ],
  [
    "design-02637",
    [
      "&:where(:has(#body-inner)) .swiper-button-next.swiper-button-hidden",
      "&:where(:has(#body-inner)) .swiper-button-prev.swiper-button-hidden"
    ]
  ],
  [
    "design-02638",
    [
      "&:where(:has(#body-inner)) .swiper-button-next.swiper-button-hidden",
      "&:where(:has(#body-inner)) .swiper-button-prev.swiper-button-hidden"
    ]
  ],
  [
    "design-02639",
    [
      "&:where(:has(#body-inner)) .swiper-navigation-disabled .swiper-button-next",
      "&:where(:has(#body-inner)) .swiper-navigation-disabled .swiper-button-prev"
    ]
  ],
  [
    "design-02640",
    [
      "&:where(:has(#body-inner)) .swiper-button-next svg",
      "&:where(:has(#body-inner)) .swiper-button-prev svg"
    ]
  ],
  [
    "design-02641",
    [
      "&:where(:has(#body-inner)) .swiper-button-next svg",
      "&:where(:has(#body-inner)) .swiper-button-prev svg"
    ]
  ],
  [
    "design-02642",
    [
      "&:where(:has(#body-inner)) .swiper-button-next svg",
      "&:where(:has(#body-inner)) .swiper-button-prev svg"
    ]
  ],
  [
    "design-02643",
    [
      "&:where(:has(#body-inner)) .swiper-button-next svg",
      "&:where(:has(#body-inner)) .swiper-button-prev svg"
    ]
  ],
  [
    "design-02644",
    [
      "&:where(:has(#body-inner)) .swiper-rtl .swiper-button-next svg",
      "&:where(:has(#body-inner)) .swiper-rtl .swiper-button-prev svg"
    ]
  ],
  [
    "design-02645",
    [
      "&:where(:has(#body-inner)) .swiper-button-prev",
      "&:where(:has(#body-inner)) .swiper-rtl .swiper-button-next"
    ]
  ],
  [
    "design-02646",
    [
      "&:where(:has(#body-inner)) .swiper-button-prev",
      "&:where(:has(#body-inner)) .swiper-rtl .swiper-button-next"
    ]
  ],
  [
    "design-02647",
    [
      "&:where(:has(#body-inner)) .swiper-button-next",
      "&:where(:has(#body-inner)) .swiper-rtl .swiper-button-prev"
    ]
  ],
  [
    "design-02648",
    [
      "&:where(:has(#body-inner)) .swiper-button-next",
      "&:where(:has(#body-inner)) .swiper-rtl .swiper-button-prev"
    ]
  ],
  [
    "design-02649",
    [
      "&:where(:has(#body-inner)) .swiper-button-lock"
    ]
  ],
  [
    "design-02650",
    [
      "&:where(:has(#body-inner)) .swiper-button-next::after",
      "&:where(:has(#body-inner)) .swiper-button-prev::after"
    ]
  ],
  [
    "design-02651",
    [
      "&:where(:has(#body-inner)) .swiper-button-next::after",
      "&:where(:has(#body-inner)) .swiper-button-prev::after"
    ]
  ],
  [
    "design-02652",
    [
      "&:where(:has(#body-inner)) .swiper-button-next::after",
      "&:where(:has(#body-inner)) .swiper-button-prev::after"
    ]
  ],
  [
    "design-02653",
    [
      "&:where(:has(#body-inner)) .swiper-button-next::after",
      "&:where(:has(#body-inner)) .swiper-button-prev::after"
    ]
  ],
  [
    "design-02654",
    [
      "&:where(:has(#body-inner)) .swiper-button-next::after",
      "&:where(:has(#body-inner)) .swiper-button-prev::after"
    ]
  ],
  [
    "design-02655",
    [
      "&:where(:has(#body-inner)) .swiper-button-next::after",
      "&:where(:has(#body-inner)) .swiper-button-prev::after"
    ]
  ],
  [
    "design-02656",
    [
      "&:where(:has(#body-inner)) .swiper-button-prev::after",
      "&:where(:has(#body-inner)) .swiper-rtl .swiper-button-next::after"
    ]
  ],
  [
    "design-02657",
    [
      "&:where(:has(#body-inner)) .swiper-button-next",
      "&:where(:has(#body-inner)) .swiper-rtl .swiper-button-prev"
    ]
  ],
  [
    "design-02658",
    [
      "&:where(:has(#body-inner)) .swiper-button-next",
      "&:where(:has(#body-inner)) .swiper-rtl .swiper-button-prev"
    ]
  ],
  [
    "design-02659",
    [
      "&:where(:has(#body-inner)) .swiper-button-next::after",
      "&:where(:has(#body-inner)) .swiper-rtl .swiper-button-prev::after"
    ]
  ],
  [
    "design-02660",
    [
      "&:where(:has(#body-inner)) .swiper-pagination"
    ]
  ],
  [
    "design-02661",
    [
      "&:where(:has(#body-inner)) .swiper-pagination"
    ]
  ],
  [
    "design-02662",
    [
      "&:where(:has(#body-inner)) .swiper-pagination"
    ]
  ],
  [
    "design-02663",
    [
      "&:where(:has(#body-inner)) .swiper-pagination"
    ]
  ],
  [
    "design-02664",
    [
      "&:where(:has(#body-inner)) .swiper-pagination"
    ]
  ],
  [
    "design-02665",
    [
      "&:where(:has(#body-inner)) .swiper-pagination.swiper-pagination-hidden"
    ]
  ],
  [
    "design-02666",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-disabled > .swiper-pagination",
      "&:where(:has(#body-inner)) .swiper-pagination.swiper-pagination-disabled"
    ]
  ],
  [
    "design-02667",
    [
      "&:where(:has(#body-inner)) .swiper-horizontal > .swiper-pagination-bullets",
      "&:where(:has(#body-inner)) .swiper-pagination-bullets.swiper-pagination-horizontal",
      "&:where(:has(#body-inner)) .swiper-pagination-custom",
      "&:where(:has(#body-inner)) .swiper-pagination-fraction"
    ]
  ],
  [
    "design-02668",
    [
      "&:where(:has(#body-inner)) .swiper-horizontal > .swiper-pagination-bullets",
      "&:where(:has(#body-inner)) .swiper-pagination-bullets.swiper-pagination-horizontal",
      "&:where(:has(#body-inner)) .swiper-pagination-custom",
      "&:where(:has(#body-inner)) .swiper-pagination-fraction"
    ]
  ],
  [
    "design-02669",
    [
      "&:where(:has(#body-inner)) .swiper-horizontal > .swiper-pagination-bullets",
      "&:where(:has(#body-inner)) .swiper-pagination-bullets.swiper-pagination-horizontal",
      "&:where(:has(#body-inner)) .swiper-pagination-custom",
      "&:where(:has(#body-inner)) .swiper-pagination-fraction"
    ]
  ],
  [
    "design-02670",
    [
      "&:where(:has(#body-inner)) .swiper-horizontal > .swiper-pagination-bullets",
      "&:where(:has(#body-inner)) .swiper-pagination-bullets.swiper-pagination-horizontal",
      "&:where(:has(#body-inner)) .swiper-pagination-custom",
      "&:where(:has(#body-inner)) .swiper-pagination-fraction"
    ]
  ],
  [
    "design-02671",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-bullets-dynamic"
    ]
  ],
  [
    "design-02672",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-bullets-dynamic"
    ]
  ],
  [
    "design-02673",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-bullets-dynamic .swiper-pagination-bullet"
    ]
  ],
  [
    "design-02674",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-bullets-dynamic .swiper-pagination-bullet"
    ]
  ],
  [
    "design-02675",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active"
    ]
  ],
  [
    "design-02676",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main"
    ]
  ],
  [
    "design-02677",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev"
    ]
  ],
  [
    "design-02678",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev"
    ]
  ],
  [
    "design-02679",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next"
    ]
  ],
  [
    "design-02680",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next"
    ]
  ],
  [
    "design-02681",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-bullet"
    ]
  ],
  [
    "design-02682",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-bullet"
    ]
  ],
  [
    "design-02683",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-bullet"
    ]
  ],
  [
    "design-02684",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-bullet"
    ]
  ],
  [
    "design-02685",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-bullet"
    ]
  ],
  [
    "design-02686",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-bullet"
    ]
  ],
  [
    "design-02687",
    [
      "&:where(:has(#body-inner)) button.swiper-pagination-bullet"
    ]
  ],
  [
    "design-02688",
    [
      "&:where(:has(#body-inner)) button.swiper-pagination-bullet"
    ]
  ],
  [
    "design-02689",
    [
      "&:where(:has(#body-inner)) button.swiper-pagination-bullet"
    ]
  ],
  [
    "design-02690",
    [
      "&:where(:has(#body-inner)) button.swiper-pagination-bullet"
    ]
  ],
  [
    "design-02691",
    [
      "&:where(:has(#body-inner)) button.swiper-pagination-bullet"
    ]
  ],
  [
    "design-02692",
    [
      "&:where(:has(#body-inner)) button.swiper-pagination-bullet"
    ]
  ],
  [
    "design-02693",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-clickable .swiper-pagination-bullet"
    ]
  ],
  [
    "design-02694",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-bullet:only-child"
    ]
  ],
  [
    "design-02695",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-bullet-active"
    ]
  ],
  [
    "design-02696",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-bullet-active"
    ]
  ],
  [
    "design-02697",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-vertical.swiper-pagination-bullets",
      "&:where(:has(#body-inner)) .swiper-vertical > .swiper-pagination-bullets"
    ]
  ],
  [
    "design-02698",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-vertical.swiper-pagination-bullets",
      "&:where(:has(#body-inner)) .swiper-vertical > .swiper-pagination-bullets"
    ]
  ],
  [
    "design-02699",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-vertical.swiper-pagination-bullets",
      "&:where(:has(#body-inner)) .swiper-vertical > .swiper-pagination-bullets"
    ]
  ],
  [
    "design-02700",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-vertical.swiper-pagination-bullets",
      "&:where(:has(#body-inner)) .swiper-vertical > .swiper-pagination-bullets"
    ]
  ],
  [
    "design-02701",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet",
      "&:where(:has(#body-inner)) .swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet"
    ]
  ],
  [
    "design-02702",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet",
      "&:where(:has(#body-inner)) .swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet"
    ]
  ],
  [
    "design-02703",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic",
      "&:where(:has(#body-inner)) .swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic"
    ]
  ],
  [
    "design-02704",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic",
      "&:where(:has(#body-inner)) .swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic"
    ]
  ],
  [
    "design-02705",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic",
      "&:where(:has(#body-inner)) .swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic"
    ]
  ],
  [
    "design-02706",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet",
      "&:where(:has(#body-inner)) .swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet"
    ]
  ],
  [
    "design-02707",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet",
      "&:where(:has(#body-inner)) .swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet"
    ]
  ],
  [
    "design-02708",
    [
      "&:where(:has(#body-inner)) .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet",
      "&:where(:has(#body-inner)) .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet"
    ]
  ],
  [
    "design-02709",
    [
      "&:where(:has(#body-inner)) .swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic",
      "&:where(:has(#body-inner)) .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic"
    ]
  ],
  [
    "design-02710",
    [
      "&:where(:has(#body-inner)) .swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic",
      "&:where(:has(#body-inner)) .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic"
    ]
  ],
  [
    "design-02711",
    [
      "&:where(:has(#body-inner)) .swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic",
      "&:where(:has(#body-inner)) .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic"
    ]
  ],
  [
    "design-02712",
    [
      "&:where(:has(#body-inner)) .swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet",
      "&:where(:has(#body-inner)) .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet"
    ]
  ],
  [
    "design-02713",
    [
      "&:where(:has(#body-inner)) .swiper-horizontal.swiper-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet"
    ]
  ],
  [
    "design-02714",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-fraction"
    ]
  ],
  [
    "design-02715",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-progressbar"
    ]
  ],
  [
    "design-02716",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-progressbar"
    ]
  ],
  [
    "design-02717",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-02718",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-02719",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-02720",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-02721",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-02722",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-02723",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-02724",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-02725",
    [
      "&:where(:has(#body-inner)) .swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-02726",
    [
      "&:where(:has(#body-inner)) .swiper-horizontal > .swiper-pagination-progressbar",
      "&:where(:has(#body-inner)) .swiper-pagination-progressbar.swiper-pagination-horizontal",
      "&:where(:has(#body-inner)) .swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite",
      "&:where(:has(#body-inner)) .swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite"
    ]
  ],
  [
    "design-02727",
    [
      "&:where(:has(#body-inner)) .swiper-horizontal > .swiper-pagination-progressbar",
      "&:where(:has(#body-inner)) .swiper-pagination-progressbar.swiper-pagination-horizontal",
      "&:where(:has(#body-inner)) .swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite",
      "&:where(:has(#body-inner)) .swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite"
    ]
  ],
  [
    "design-02728",
    [
      "&:where(:has(#body-inner)) .swiper-horizontal > .swiper-pagination-progressbar",
      "&:where(:has(#body-inner)) .swiper-pagination-progressbar.swiper-pagination-horizontal",
      "&:where(:has(#body-inner)) .swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite",
      "&:where(:has(#body-inner)) .swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite"
    ]
  ],
  [
    "design-02729",
    [
      "&:where(:has(#body-inner)) .swiper-horizontal > .swiper-pagination-progressbar",
      "&:where(:has(#body-inner)) .swiper-pagination-progressbar.swiper-pagination-horizontal",
      "&:where(:has(#body-inner)) .swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite",
      "&:where(:has(#body-inner)) .swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite"
    ]
  ],
  [
    "design-02730",
    [
      "&:where(:has(#body-inner)) .swiper-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite",
      "&:where(:has(#body-inner)) .swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite",
      "&:where(:has(#body-inner)) .swiper-pagination-progressbar.swiper-pagination-vertical",
      "&:where(:has(#body-inner)) .swiper-vertical > .swiper-pagination-progressbar"
    ]
  ],
  [
    "design-02731",
    [
      "&:where(:has(#body-inner)) .swiper-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite",
      "&:where(:has(#body-inner)) .swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite",
      "&:where(:has(#body-inner)) .swiper-pagination-progressbar.swiper-pagination-vertical",
      "&:where(:has(#body-inner)) .swiper-vertical > .swiper-pagination-progressbar"
    ]
  ],
  [
    "design-02732",
    [
      "&:where(:has(#body-inner)) .swiper-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite",
      "&:where(:has(#body-inner)) .swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite",
      "&:where(:has(#body-inner)) .swiper-pagination-progressbar.swiper-pagination-vertical",
      "&:where(:has(#body-inner)) .swiper-vertical > .swiper-pagination-progressbar"
    ]
  ],
  [
    "design-02733",
    [
      "&:where(:has(#body-inner)) .swiper-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite",
      "&:where(:has(#body-inner)) .swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite",
      "&:where(:has(#body-inner)) .swiper-pagination-progressbar.swiper-pagination-vertical",
      "&:where(:has(#body-inner)) .swiper-vertical > .swiper-pagination-progressbar"
    ]
  ],
  [
    "design-02734",
    [
      "&:where(:has(#body-inner)) .swiper-pagination-lock"
    ]
  ],
  [
    "design-02735",
    [
      "&:where(:has(#body-inner)) .swiper-scrollbar"
    ]
  ],
  [
    "design-02736",
    [
      "&:where(:has(#body-inner)) .swiper-scrollbar"
    ]
  ],
  [
    "design-02737",
    [
      "&:where(:has(#body-inner)) .swiper-scrollbar"
    ]
  ],
  [
    "design-02738",
    [
      "&:where(:has(#body-inner)) .swiper-scrollbar"
    ]
  ],
  [
    "design-02739",
    [
      "&:where(:has(#body-inner)) .swiper-scrollbar-disabled > .swiper-scrollbar",
      "&:where(:has(#body-inner)) .swiper-scrollbar.swiper-scrollbar-disabled"
    ]
  ],
  [
    "design-02740",
    [
      "&:where(:has(#body-inner)) .swiper-horizontal > .swiper-scrollbar",
      "&:where(:has(#body-inner)) .swiper-scrollbar.swiper-scrollbar-horizontal"
    ]
  ],
  [
    "design-02741",
    [
      "&:where(:has(#body-inner)) .swiper-horizontal > .swiper-scrollbar",
      "&:where(:has(#body-inner)) .swiper-scrollbar.swiper-scrollbar-horizontal"
    ]
  ],
  [
    "design-02742",
    [
      "&:where(:has(#body-inner)) .swiper-horizontal > .swiper-scrollbar",
      "&:where(:has(#body-inner)) .swiper-scrollbar.swiper-scrollbar-horizontal"
    ]
  ],
  [
    "design-02743",
    [
      "&:where(:has(#body-inner)) .swiper-horizontal > .swiper-scrollbar",
      "&:where(:has(#body-inner)) .swiper-scrollbar.swiper-scrollbar-horizontal"
    ]
  ],
  [
    "design-02744",
    [
      "&:where(:has(#body-inner)) .swiper-horizontal > .swiper-scrollbar",
      "&:where(:has(#body-inner)) .swiper-scrollbar.swiper-scrollbar-horizontal"
    ]
  ],
  [
    "design-02745",
    [
      "&:where(:has(#body-inner)) .swiper-horizontal > .swiper-scrollbar",
      "&:where(:has(#body-inner)) .swiper-scrollbar.swiper-scrollbar-horizontal"
    ]
  ],
  [
    "design-02746",
    [
      "&:where(:has(#body-inner)) .swiper-horizontal > .swiper-scrollbar",
      "&:where(:has(#body-inner)) .swiper-scrollbar.swiper-scrollbar-horizontal"
    ]
  ],
  [
    "design-02747",
    [
      "&:where(:has(#body-inner)) .swiper-scrollbar.swiper-scrollbar-vertical",
      "&:where(:has(#body-inner)) .swiper-vertical > .swiper-scrollbar"
    ]
  ],
  [
    "design-02748",
    [
      "&:where(:has(#body-inner)) .swiper-scrollbar.swiper-scrollbar-vertical",
      "&:where(:has(#body-inner)) .swiper-vertical > .swiper-scrollbar"
    ]
  ],
  [
    "design-02749",
    [
      "&:where(:has(#body-inner)) .swiper-scrollbar.swiper-scrollbar-vertical",
      "&:where(:has(#body-inner)) .swiper-vertical > .swiper-scrollbar"
    ]
  ],
  [
    "design-02750",
    [
      "&:where(:has(#body-inner)) .swiper-scrollbar.swiper-scrollbar-vertical",
      "&:where(:has(#body-inner)) .swiper-vertical > .swiper-scrollbar"
    ]
  ],
  [
    "design-02751",
    [
      "&:where(:has(#body-inner)) .swiper-scrollbar.swiper-scrollbar-vertical",
      "&:where(:has(#body-inner)) .swiper-vertical > .swiper-scrollbar"
    ]
  ],
  [
    "design-02752",
    [
      "&:where(:has(#body-inner)) .swiper-scrollbar.swiper-scrollbar-vertical",
      "&:where(:has(#body-inner)) .swiper-vertical > .swiper-scrollbar"
    ]
  ],
  [
    "design-02753",
    [
      "&:where(:has(#body-inner)) .swiper-scrollbar.swiper-scrollbar-vertical",
      "&:where(:has(#body-inner)) .swiper-vertical > .swiper-scrollbar"
    ]
  ],
  [
    "design-02754",
    [
      "&:where(:has(#body-inner)) .swiper-scrollbar-drag"
    ]
  ],
  [
    "design-02755",
    [
      "&:where(:has(#body-inner)) .swiper-scrollbar-drag"
    ]
  ],
  [
    "design-02756",
    [
      "&:where(:has(#body-inner)) .swiper-scrollbar-drag"
    ]
  ],
  [
    "design-02757",
    [
      "&:where(:has(#body-inner)) .swiper-scrollbar-drag"
    ]
  ],
  [
    "design-02758",
    [
      "&:where(:has(#body-inner)) .swiper-scrollbar-drag"
    ]
  ],
  [
    "design-02759",
    [
      "&:where(:has(#body-inner)) .swiper-scrollbar-drag"
    ]
  ],
  [
    "design-02760",
    [
      "&:where(:has(#body-inner)) .swiper-scrollbar-drag"
    ]
  ],
  [
    "design-02761",
    [
      "&:where(:has(#body-inner)) .swiper-scrollbar-cursor-drag"
    ]
  ],
  [
    "design-02762",
    [
      "&:where(:has(#body-inner)) .swiper-scrollbar-lock"
    ]
  ],
  [
    "design-02763",
    [
      "&:where(:has(#body-inner)) .swiper-zoom-container"
    ]
  ],
  [
    "design-02764",
    [
      "&:where(:has(#body-inner)) .swiper-zoom-container"
    ]
  ],
  [
    "design-02765",
    [
      "&:where(:has(#body-inner)) .swiper-zoom-container"
    ]
  ],
  [
    "design-02766",
    [
      "&:where(:has(#body-inner)) .swiper-zoom-container"
    ]
  ],
  [
    "design-02767",
    [
      "&:where(:has(#body-inner)) .swiper-zoom-container"
    ]
  ],
  [
    "design-02768",
    [
      "&:where(:has(#body-inner)) .swiper-zoom-container"
    ]
  ],
  [
    "design-02769",
    [
      "&:where(:has(#body-inner)) .swiper-zoom-container > canvas",
      "&:where(:has(#body-inner)) .swiper-zoom-container > img",
      "&:where(:has(#body-inner)) .swiper-zoom-container > svg"
    ]
  ],
  [
    "design-02770",
    [
      "&:where(:has(#body-inner)) .swiper-zoom-container > canvas",
      "&:where(:has(#body-inner)) .swiper-zoom-container > img",
      "&:where(:has(#body-inner)) .swiper-zoom-container > svg"
    ]
  ],
  [
    "design-02771",
    [
      "&:where(:has(#body-inner)) .swiper-zoom-container > canvas",
      "&:where(:has(#body-inner)) .swiper-zoom-container > img",
      "&:where(:has(#body-inner)) .swiper-zoom-container > svg"
    ]
  ],
  [
    "design-02772",
    [
      "&:where(:has(#body-inner)) .swiper-slide-zoomed"
    ]
  ],
  [
    "design-02773",
    [
      "&:where(:has(#body-inner)) .swiper-slide-zoomed"
    ]
  ],
  [
    "design-02774",
    [
      "&:where(:has(#body-inner)) .swiper .swiper-notification"
    ]
  ],
  [
    "design-02775",
    [
      "&:where(:has(#body-inner)) .swiper .swiper-notification"
    ]
  ],
  [
    "design-02776",
    [
      "&:where(:has(#body-inner)) .swiper .swiper-notification"
    ]
  ],
  [
    "design-02777",
    [
      "&:where(:has(#body-inner)) .swiper .swiper-notification"
    ]
  ],
  [
    "design-02778",
    [
      "&:where(:has(#body-inner)) .swiper .swiper-notification"
    ]
  ],
  [
    "design-02779",
    [
      "&:where(:has(#body-inner)) .swiper .swiper-notification"
    ]
  ],
  [
    "design-02780",
    [
      "&:where(:has(#body-inner)) .swiper-free-mode > .swiper-wrapper"
    ]
  ],
  [
    "design-02781",
    [
      "&:where(:has(#body-inner)) .swiper-free-mode > .swiper-wrapper"
    ]
  ],
  [
    "design-02782",
    [
      "&:where(:has(#body-inner)) .swiper-grid > .swiper-wrapper"
    ]
  ],
  [
    "design-02783",
    [
      "&:where(:has(#body-inner)) .swiper-grid-column > .swiper-wrapper"
    ]
  ],
  [
    "design-02784",
    [
      "&:where(:has(#body-inner)) .swiper-grid-column > .swiper-wrapper"
    ]
  ],
  [
    "design-02785",
    [
      "&:where(:has(#body-inner)) .swiper-fade.swiper-free-mode .swiper-slide"
    ]
  ],
  [
    "design-02786",
    [
      "&:where(:has(#body-inner)) .swiper-fade .swiper-slide"
    ]
  ],
  [
    "design-02787",
    [
      "&:where(:has(#body-inner)) .swiper-fade .swiper-slide"
    ]
  ],
  [
    "design-02788",
    [
      "&:where(:has(#body-inner)) .swiper-fade .swiper-slide .swiper-slide"
    ]
  ],
  [
    "design-02789",
    [
      "&:where(:has(#body-inner)) .swiper-fade .swiper-slide-active"
    ]
  ],
  [
    "design-02790",
    [
      "&:where(:has(#body-inner)) .swiper-fade .swiper-slide-active .swiper-slide-active"
    ]
  ],
  [
    "design-02791",
    [
      "&:where(:has(#body-inner)) .swiper.swiper-cube"
    ]
  ],
  [
    "design-02792",
    [
      "&:where(:has(#body-inner)) .swiper-cube .swiper-slide"
    ]
  ],
  [
    "design-02793",
    [
      "&:where(:has(#body-inner)) .swiper-cube .swiper-slide"
    ]
  ],
  [
    "design-02794",
    [
      "&:where(:has(#body-inner)) .swiper-cube .swiper-slide"
    ]
  ],
  [
    "design-02795",
    [
      "&:where(:has(#body-inner)) .swiper-cube .swiper-slide"
    ]
  ],
  [
    "design-02796",
    [
      "&:where(:has(#body-inner)) .swiper-cube .swiper-slide"
    ]
  ],
  [
    "design-02797",
    [
      "&:where(:has(#body-inner)) .swiper-cube .swiper-slide"
    ]
  ],
  [
    "design-02798",
    [
      "&:where(:has(#body-inner)) .swiper-cube .swiper-slide"
    ]
  ],
  [
    "design-02799",
    [
      "&:where(:has(#body-inner)) .swiper-cube .swiper-slide"
    ]
  ],
  [
    "design-02800",
    [
      "&:where(:has(#body-inner)) .swiper-cube .swiper-slide .swiper-slide"
    ]
  ],
  [
    "design-02801",
    [
      "&:where(:has(#body-inner)) .swiper-cube.swiper-rtl .swiper-slide"
    ]
  ],
  [
    "design-02802",
    [
      "&:where(:has(#body-inner)) .swiper-cube .swiper-slide-active",
      "&:where(:has(#body-inner)) .swiper-cube .swiper-slide-active .swiper-slide-active"
    ]
  ],
  [
    "design-02803",
    [
      "&:where(:has(#body-inner)) .swiper-cube .swiper-slide-active",
      "&:where(:has(#body-inner)) .swiper-cube .swiper-slide-next",
      "&:where(:has(#body-inner)) .swiper-cube .swiper-slide-prev"
    ]
  ],
  [
    "design-02804",
    [
      "&:where(:has(#body-inner)) .swiper-cube .swiper-slide-active",
      "&:where(:has(#body-inner)) .swiper-cube .swiper-slide-next",
      "&:where(:has(#body-inner)) .swiper-cube .swiper-slide-prev"
    ]
  ],
  [
    "design-02805",
    [
      "&:where(:has(#body-inner)) .swiper-cube .swiper-cube-shadow"
    ]
  ],
  [
    "design-02806",
    [
      "&:where(:has(#body-inner)) .swiper-cube .swiper-cube-shadow"
    ]
  ],
  [
    "design-02807",
    [
      "&:where(:has(#body-inner)) .swiper-cube .swiper-cube-shadow"
    ]
  ],
  [
    "design-02808",
    [
      "&:where(:has(#body-inner)) .swiper-cube .swiper-cube-shadow"
    ]
  ],
  [
    "design-02809",
    [
      "&:where(:has(#body-inner)) .swiper-cube .swiper-cube-shadow"
    ]
  ],
  [
    "design-02810",
    [
      "&:where(:has(#body-inner)) .swiper-cube .swiper-cube-shadow"
    ]
  ],
  [
    "design-02811",
    [
      "&:where(:has(#body-inner)) .swiper-cube .swiper-cube-shadow"
    ]
  ],
  [
    "design-02812",
    [
      "&:where(:has(#body-inner)) .swiper-cube .swiper-cube-shadow::before"
    ]
  ],
  [
    "design-02813",
    [
      "&:where(:has(#body-inner)) .swiper-cube .swiper-cube-shadow::before"
    ]
  ],
  [
    "design-02814",
    [
      "&:where(:has(#body-inner)) .swiper-cube .swiper-cube-shadow::before"
    ]
  ],
  [
    "design-02815",
    [
      "&:where(:has(#body-inner)) .swiper-cube .swiper-cube-shadow::before"
    ]
  ],
  [
    "design-02816",
    [
      "&:where(:has(#body-inner)) .swiper-cube .swiper-cube-shadow::before"
    ]
  ],
  [
    "design-02817",
    [
      "&:where(:has(#body-inner)) .swiper-cube .swiper-cube-shadow::before"
    ]
  ],
  [
    "design-02818",
    [
      "&:where(:has(#body-inner)) .swiper-cube .swiper-cube-shadow::before"
    ]
  ],
  [
    "design-02819",
    [
      "&:where(:has(#body-inner)) .swiper-cube .swiper-cube-shadow::before"
    ]
  ],
  [
    "design-02820",
    [
      "&:where(:has(#body-inner)) .swiper-cube .swiper-slide-next + .swiper-slide"
    ]
  ],
  [
    "design-02821",
    [
      "&:where(:has(#body-inner)) .swiper-cube .swiper-slide-next + .swiper-slide"
    ]
  ],
  [
    "design-02822",
    [
      "&:where(:has(#body-inner)) .swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-bottom",
      "&:where(:has(#body-inner)) .swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-left",
      "&:where(:has(#body-inner)) .swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-right",
      "&:where(:has(#body-inner)) .swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-top"
    ]
  ],
  [
    "design-02823",
    [
      "&:where(:has(#body-inner)) .swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-bottom",
      "&:where(:has(#body-inner)) .swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-left",
      "&:where(:has(#body-inner)) .swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-right",
      "&:where(:has(#body-inner)) .swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-top"
    ]
  ],
  [
    "design-02824",
    [
      "&:where(:has(#body-inner)) .swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-bottom",
      "&:where(:has(#body-inner)) .swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-left",
      "&:where(:has(#body-inner)) .swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-right",
      "&:where(:has(#body-inner)) .swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-top"
    ]
  ],
  [
    "design-02825",
    [
      "&:where(:has(#body-inner)) .swiper.swiper-flip"
    ]
  ],
  [
    "design-02826",
    [
      "&:where(:has(#body-inner)) .swiper-flip .swiper-slide"
    ]
  ],
  [
    "design-02827",
    [
      "&:where(:has(#body-inner)) .swiper-flip .swiper-slide"
    ]
  ],
  [
    "design-02828",
    [
      "&:where(:has(#body-inner)) .swiper-flip .swiper-slide"
    ]
  ],
  [
    "design-02829",
    [
      "&:where(:has(#body-inner)) .swiper-flip .swiper-slide"
    ]
  ],
  [
    "design-02830",
    [
      "&:where(:has(#body-inner)) .swiper-flip .swiper-slide .swiper-slide"
    ]
  ],
  [
    "design-02831",
    [
      "&:where(:has(#body-inner)) .swiper-flip .swiper-slide-active",
      "&:where(:has(#body-inner)) .swiper-flip .swiper-slide-active .swiper-slide-active"
    ]
  ],
  [
    "design-02832",
    [
      "&:where(:has(#body-inner)) .swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-bottom",
      "&:where(:has(#body-inner)) .swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-left",
      "&:where(:has(#body-inner)) .swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-right",
      "&:where(:has(#body-inner)) .swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-top"
    ]
  ],
  [
    "design-02833",
    [
      "&:where(:has(#body-inner)) .swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-bottom",
      "&:where(:has(#body-inner)) .swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-left",
      "&:where(:has(#body-inner)) .swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-right",
      "&:where(:has(#body-inner)) .swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-top"
    ]
  ],
  [
    "design-02834",
    [
      "&:where(:has(#body-inner)) .swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-bottom",
      "&:where(:has(#body-inner)) .swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-left",
      "&:where(:has(#body-inner)) .swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-right",
      "&:where(:has(#body-inner)) .swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-top"
    ]
  ],
  [
    "design-02835",
    [
      "&:where(:has(#body-inner)) .swiper-creative .swiper-slide"
    ]
  ],
  [
    "design-02836",
    [
      "&:where(:has(#body-inner)) .swiper-creative .swiper-slide"
    ]
  ],
  [
    "design-02837",
    [
      "&:where(:has(#body-inner)) .swiper-creative .swiper-slide"
    ]
  ],
  [
    "design-02838",
    [
      "&:where(:has(#body-inner)) .swiper-creative .swiper-slide"
    ]
  ],
  [
    "design-02839",
    [
      "&:where(:has(#body-inner)) .swiper.swiper-cards"
    ]
  ],
  [
    "design-02840",
    [
      "&:where(:has(#body-inner)) .swiper-cards .swiper-slide"
    ]
  ],
  [
    "design-02841",
    [
      "&:where(:has(#body-inner)) .swiper-cards .swiper-slide"
    ]
  ],
  [
    "design-02842",
    [
      "&:where(:has(#body-inner)) .swiper-cards .swiper-slide"
    ]
  ],
  [
    "design-02843",
    [
      "&:where(:has(#body-inner)) .swiper-cards .swiper-slide"
    ]
  ],
  [
    "design-02844",
    [
      "&:where(:has(#body-inner)) .clear"
    ]
  ],
  [
    "design-02845",
    [
      "&:where(:has(#body-inner)) .clear"
    ]
  ],
  [
    "design-02846",
    [
      "&:where(:has(#body-inner)) .clear::after"
    ]
  ],
  [
    "design-02847",
    [
      "&:where(:has(#body-inner)) .clear::after"
    ]
  ],
  [
    "design-02848",
    [
      "&:where(:has(#body-inner)) .clear::after"
    ]
  ],
  [
    "design-02849",
    [
      "&:where(:has(#body-inner)) [class*=\"cover-opacity-\"]::before"
    ]
  ],
  [
    "design-02850",
    [
      "&:where(:has(#body-inner)) [class*=\"cover-opacity-\"]::before"
    ]
  ],
  [
    "design-02851",
    [
      "&:where(:has(#body-inner)) [class*=\"cover-opacity-\"]::before"
    ]
  ],
  [
    "design-02852",
    [
      "&:where(:has(#body-inner)) [class*=\"cover-opacity-\"]::before"
    ]
  ],
  [
    "design-02853",
    [
      "&:where(:has(#body-inner)) [class*=\"cover-opacity-\"]::before"
    ]
  ],
  [
    "design-02854",
    [
      "&:where(:has(#body-inner)) [class*=\"cover-opacity-\"]::before"
    ]
  ],
  [
    "design-02855",
    [
      "&:where(:has(#body-inner)) [class*=\"cover-opacity-\"]::before"
    ]
  ],
  [
    "design-02856",
    [
      "&:where(:has(#body-inner)) [class*=\"cover-opacity-\"]::before"
    ]
  ],
  [
    "design-02857",
    [
      "&:where(:has(#body-inner)) [class*=\"cover-opacity-\"]::before"
    ]
  ],
  [
    "design-02858",
    [
      "&:where(:has(#body-inner)) [class*=\"cover-opacity-\"]::before"
    ]
  ],
  [
    "design-02859",
    [
      "&:where(:has(#body-inner)) .hide"
    ]
  ],
  [
    "design-02860",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .hide-from-xlg }"
    ]
  ],
  [
    "design-02861",
    [
      "&:where(:has(#body-inner)) body.is-mobile .hide-from-mobile"
    ]
  ],
  [
    "design-02862",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .hide-to-mobile"
    ]
  ],
  [
    "design-02863",
    [
      "&:where(:has(#body-inner)) .bg-image"
    ]
  ],
  [
    "design-02864",
    [
      "&:where(:has(#body-inner)) .bg-image"
    ]
  ],
  [
    "design-02865",
    [
      "&:where(:has(#body-inner)) .bg-image"
    ]
  ],
  [
    "design-02866",
    [
      "&:where(:has(#body-inner)) .bg-image"
    ]
  ],
  [
    "design-02867",
    [
      "&:where(:has(#body-inner)) .text-xlg"
    ]
  ],
  [
    "design-02868",
    [
      "&:where(:has(#body-inner)) .text-xlg p",
      "&:where(:has(#body-inner)) p.text-xlg"
    ]
  ],
  [
    "design-02869",
    [
      "&:where(:has(#body-inner)) .text-center"
    ]
  ],
  [
    "design-02870",
    [
      "&:where(:has(#body-inner)) .text-left"
    ]
  ],
  [
    "design-02871",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .text-center-to-md }"
    ]
  ],
  [
    "design-02872",
    [
      "&:where(:has(#body-inner)) .min-width"
    ]
  ],
  [
    "design-02873",
    [
      "&:where(:has(#body-inner)) .max-width"
    ]
  ],
  [
    "design-02874",
    [
      "&:where(:has(#body-inner)) .max-width-100"
    ]
  ],
  [
    "design-02875",
    [
      "&:where(:has(#body-inner)) .max-width-200"
    ]
  ],
  [
    "design-02876",
    [
      "&:where(:has(#body-inner)) .max-width-500"
    ]
  ],
  [
    "design-02877",
    [
      "&:where(:has(#body-inner)) .max-width-600"
    ]
  ],
  [
    "design-02878",
    [
      "&:where(:has(#body-inner)) .max-width-700"
    ]
  ],
  [
    "design-02879",
    [
      "&:where(:has(#body-inner)) .max-width-1000"
    ]
  ],
  [
    "design-02880",
    [
      "&:where(:has(#body-inner)) .max-width-1400"
    ]
  ],
  [
    "design-02881",
    [
      "&:where(:has(#body-inner)) .max-width-1600"
    ]
  ],
  [
    "design-02882",
    [
      "&:where(:has(#body-inner)) .max-width-1800"
    ]
  ],
  [
    "design-02883",
    [
      "&:where(:has(#body-inner)) .full-height"
    ]
  ],
  [
    "design-02884",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .full-height-vh }"
    ]
  ],
  [
    "design-02885",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .full-height-vh }"
    ]
  ],
  [
    "design-02886",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-header-fixed-on .full-height-vh }"
    ]
  ],
  [
    "design-02887",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-header-fixed-on .full-height-vh }"
    ]
  ],
  [
    "design-02888",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) body.tt-header-fixed-on .full-height-vh-m }"
    ]
  ],
  [
    "design-02889",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) body.tt-header-fixed-on .full-height-vh-m }"
    ]
  ],
  [
    "design-02890",
    [
      "&:where(:has(#body-inner)) .text-green"
    ]
  ],
  [
    "design-02891",
    [
      "&:where(:has(#body-inner)) .text-red"
    ]
  ],
  [
    "design-02892",
    [
      "&:where(:has(#body-inner)) a.tt-link"
    ]
  ],
  [
    "design-02893",
    [
      "&:where(:has(#body-inner)) a.tt-link"
    ]
  ],
  [
    "design-02894",
    [
      "&:where(:has(#body-inner)) a.tt-link"
    ]
  ],
  [
    "design-02895",
    [
      "&:where(:has(#body-inner)) a.tt-link"
    ]
  ],
  [
    "design-02896",
    [
      "&:where(:has(#body-inner)) a.tt-link"
    ]
  ],
  [
    "design-02897",
    [
      "&:where(:has(#body-inner)) a.tt-link"
    ]
  ],
  [
    "design-02898",
    [
      "&:where(:has(#body-inner)) a.tt-link"
    ]
  ],
  [
    "design-02899",
    [
      "&:where(:has(#body-inner)) a.tt-link:hover",
      "&:where(:has(#body-inner)) a.tt-link:focus"
    ]
  ],
  [
    "design-02900",
    [
      "&:where(:has(#body-inner)) a.tt-link:hover",
      "&:where(:has(#body-inner)) a.tt-link:focus"
    ]
  ],
  [
    "design-02901",
    [
      "&:where(:has(#body-inner)) a.tt-link-2"
    ]
  ],
  [
    "design-02902",
    [
      "&:where(:has(#body-inner)) a.tt-link-2"
    ]
  ],
  [
    "design-02903",
    [
      "&:where(:has(#body-inner)) a.tt-link-2"
    ]
  ],
  [
    "design-02904",
    [
      "&:where(:has(#body-inner)) a.tt-link-2"
    ]
  ],
  [
    "design-02905",
    [
      "&:where(:has(#body-inner)) a.tt-link-2"
    ]
  ],
  [
    "design-02906",
    [
      "&:where(:has(#body-inner)) a.tt-link-2:hover",
      "&:where(:has(#body-inner)) a.tt-link-2:focus"
    ]
  ],
  [
    "design-02907",
    [
      "&:where(:has(#body-inner)) a.tt-link-2:hover",
      "&:where(:has(#body-inner)) a.tt-link-2:focus"
    ]
  ],
  [
    "design-02908",
    [
      "&:where(:has(#body-inner)) .bg-green"
    ]
  ],
  [
    "design-02909",
    [
      "&:where(:has(#body-inner)) .bg-red"
    ]
  ],
  [
    "design-02910",
    [
      "&:where(:has(#body-inner)) .rounded"
    ]
  ],
  [
    "design-02911",
    [
      "&:where(:has(#body-inner)) .border"
    ]
  ],
  [
    "design-02912",
    [
      "&:where(:has(#body-inner)) .border-top"
    ]
  ],
  [
    "design-02913",
    [
      "&:where(:has(#body-inner)) .border-right"
    ]
  ],
  [
    "design-02914",
    [
      "&:where(:has(#body-inner)) .border-solid"
    ]
  ],
  [
    "design-02915",
    [
      "&:where(:has(#body-inner)) .padding-top-40"
    ]
  ],
  [
    "design-02916",
    [
      "&:where(:has(#body-inner)) .padding-top-120"
    ]
  ],
  [
    "design-02917",
    [
      "&:where(:has(#body-inner)) .padding-bottom-120"
    ]
  ],
  [
    "design-02918",
    [
      "&:where(:has(#body-inner)) .padding-left-5"
    ]
  ],
  [
    "design-02919",
    [
      "&:where(:has(#body-inner)) .padding-right-5"
    ]
  ],
  [
    "design-02920",
    [
      "&:where(:has(#body-inner)) .padding-left-1-p"
    ]
  ],
  [
    "design-02921",
    [
      "&:where(:has(#body-inner)) .padding-left-3-p"
    ]
  ],
  [
    "design-02922",
    [
      "&:where(:has(#body-inner)) .padding-left-5-p"
    ]
  ],
  [
    "design-02923",
    [
      "&:where(:has(#body-inner)) .padding-right-1-p"
    ]
  ],
  [
    "design-02924",
    [
      "&:where(:has(#body-inner)) .padding-right-3-p"
    ]
  ],
  [
    "design-02925",
    [
      "&:where(:has(#body-inner)) .padding-right-5-p"
    ]
  ],
  [
    "design-02926",
    [
      "&:where(:has(#body-inner)) .no-padding"
    ]
  ],
  [
    "design-02927",
    [
      "&:where(:has(#body-inner)) .no-padding-top"
    ]
  ],
  [
    "design-02928",
    [
      "&:where(:has(#body-inner)) .no-padding-bottom"
    ]
  ],
  [
    "design-02929",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .padding-right-md-5 }"
    ]
  ],
  [
    "design-02930",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .padding-right-md-5-p }"
    ]
  ],
  [
    "design-02931",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .padding-left-lg-5 }"
    ]
  ],
  [
    "design-02932",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .padding-right-lg-5 }"
    ]
  ],
  [
    "design-02933",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .padding-left-lg-5-p }"
    ]
  ],
  [
    "design-02934",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .padding-right-lg-5-p }"
    ]
  ],
  [
    "design-02935",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .padding-top-xlg-10 }"
    ]
  ],
  [
    "design-02936",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .padding-top-xlg-20 }"
    ]
  ],
  [
    "design-02937",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .padding-top-xlg-60 }"
    ]
  ],
  [
    "design-02938",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .padding-top-xlg-100 }"
    ]
  ],
  [
    "design-02939",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .padding-top-xlg-120 }"
    ]
  ],
  [
    "design-02940",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .padding-top-xlg-160 }"
    ]
  ],
  [
    "design-02941",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .padding-bottom-xlg-10 }"
    ]
  ],
  [
    "design-02942",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .padding-bottom-xlg-40 }"
    ]
  ],
  [
    "design-02943",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .padding-bottom-xlg-100 }"
    ]
  ],
  [
    "design-02944",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .padding-bottom-xlg-120 }"
    ]
  ],
  [
    "design-02945",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .padding-bottom-xlg-140 }"
    ]
  ],
  [
    "design-02946",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .padding-bottom-xlg-160 }"
    ]
  ],
  [
    "design-02947",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .padding-left-xlg-7-p }"
    ]
  ],
  [
    "design-02948",
    [
      "&:where(:has(#body-inner)) .margin-top-20"
    ]
  ],
  [
    "design-02949",
    [
      "&:where(:has(#body-inner)) .margin-top-30"
    ]
  ],
  [
    "design-02950",
    [
      "&:where(:has(#body-inner)) .margin-top-40"
    ]
  ],
  [
    "design-02951",
    [
      "&:where(:has(#body-inner)) .margin-bottom-20"
    ]
  ],
  [
    "design-02952",
    [
      "&:where(:has(#body-inner)) .margin-bottom-30"
    ]
  ],
  [
    "design-02953",
    [
      "&:where(:has(#body-inner)) .margin-bottom-40"
    ]
  ],
  [
    "design-02954",
    [
      "&:where(:has(#body-inner)) .margin-bottom-60"
    ]
  ],
  [
    "design-02955",
    [
      "&:where(:has(#body-inner)) .margin-bottom-80"
    ]
  ],
  [
    "design-02956",
    [
      "&:where(:has(#body-inner)) .margin-bottom-120"
    ]
  ],
  [
    "design-02957",
    [
      "&:where(:has(#body-inner)) .no-margin"
    ]
  ],
  [
    "design-02958",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .margin-bottom-lg-120 }"
    ]
  ],
  [
    "design-02959",
    [
      "&:where(:has(#body-inner)) .tt-row"
    ]
  ],
  [
    "design-02960",
    [
      "&:where(:has(#body-inner)) .tt-row"
    ]
  ],
  [
    "design-02961",
    [
      "&:where(:has(#body-inner)) .tt-row"
    ]
  ],
  [
    "design-02962",
    [
      "&:where(:has(#body-inner)) .tt-wrap .tt-row"
    ]
  ],
  [
    "design-02963",
    [
      "&:where(:has(#body-inner)) .tt-wrap .tt-row"
    ]
  ],
  [
    "design-02964",
    [
      "&:where(:has(#body-inner)) [class*=\"tt-col-\"]"
    ]
  ],
  [
    "design-02965",
    [
      "&:where(:has(#body-inner)) [class*=\"tt-col-\"]"
    ]
  ],
  [
    "design-02966",
    [
      "&:where(:has(#body-inner)) [class*=\"tt-col-\"]"
    ]
  ],
  [
    "design-02967",
    [
      "&:where(:has(#body-inner)) [class*=\"tt-col-\"]"
    ]
  ],
  [
    "design-02968",
    [
      "&:where(:has(#body-inner)) .tt-col-6"
    ]
  ],
  [
    "design-02969",
    [
      "&:where(:has(#body-inner)) .tt-col-6"
    ]
  ],
  [
    "design-02970",
    [
      "&:where(:has(#body-inner)) .tt-col-6"
    ]
  ],
  [
    "design-02971",
    [
      "&:where(:has(#body-inner)) .tt-row-reverse"
    ]
  ],
  [
    "design-02972",
    [
      "&:where(:has(#body-inner)) .tt-row-reverse"
    ]
  ],
  [
    "design-02973",
    [
      "&:where(:has(#body-inner)) .tt-justify-content-center"
    ]
  ],
  [
    "design-02974",
    [
      "&:where(:has(#body-inner)) .tt-justify-content-center"
    ]
  ],
  [
    "design-02975",
    [
      "&:where(:has(#body-inner)) .tt-justify-content-center"
    ]
  ],
  [
    "design-02976",
    [
      "&:where(:has(#body-inner)) .tt-align-self-center"
    ]
  ],
  [
    "design-02977",
    [
      "&:where(:has(#body-inner)) .tt-align-self-center"
    ]
  ],
  [
    "design-02978",
    [
      "@media (min-width: 576px) { &:where(:has(#body-inner)) .tt-sm-row-reverse }"
    ]
  ],
  [
    "design-02979",
    [
      "@media (min-width: 576px) { &:where(:has(#body-inner)) .tt-sm-row-reverse }"
    ]
  ],
  [
    "design-02980",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-col-md }"
    ]
  ],
  [
    "design-02981",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-col-md }"
    ]
  ],
  [
    "design-02982",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-col-md }"
    ]
  ],
  [
    "design-02983",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-col-md }"
    ]
  ],
  [
    "design-02984",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-col-md }"
    ]
  ],
  [
    "design-02985",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-col-md-4 }"
    ]
  ],
  [
    "design-02986",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-col-md-4 }"
    ]
  ],
  [
    "design-02987",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-col-md-4 }"
    ]
  ],
  [
    "design-02988",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-col-md-8 }"
    ]
  ],
  [
    "design-02989",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-col-md-8 }"
    ]
  ],
  [
    "design-02990",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-col-md-8 }"
    ]
  ],
  [
    "design-02991",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-justify-content-md-end }"
    ]
  ],
  [
    "design-02992",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-justify-content-md-end }"
    ]
  ],
  [
    "design-02993",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-justify-content-md-end }"
    ]
  ],
  [
    "design-02994",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-justify-content-md-center }"
    ]
  ],
  [
    "design-02995",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-justify-content-md-center }"
    ]
  ],
  [
    "design-02996",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-justify-content-md-center }"
    ]
  ],
  [
    "design-02997",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-align-items-md-end }"
    ]
  ],
  [
    "design-02998",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-align-items-md-end }"
    ]
  ],
  [
    "design-02999",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-col-lg }"
    ]
  ],
  [
    "design-03000",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-col-lg }"
    ]
  ],
  [
    "design-03001",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-col-lg }"
    ]
  ],
  [
    "design-03002",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-col-lg }"
    ]
  ],
  [
    "design-03003",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-col-lg }"
    ]
  ],
  [
    "design-03004",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-col-lg-1 }"
    ]
  ],
  [
    "design-03005",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-col-lg-1 }"
    ]
  ],
  [
    "design-03006",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-col-lg-1 }"
    ]
  ],
  [
    "design-03007",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-col-lg-2 }"
    ]
  ],
  [
    "design-03008",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-col-lg-2 }"
    ]
  ],
  [
    "design-03009",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-col-lg-2 }"
    ]
  ],
  [
    "design-03010",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-col-lg-3 }"
    ]
  ],
  [
    "design-03011",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-col-lg-3 }"
    ]
  ],
  [
    "design-03012",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-col-lg-3 }"
    ]
  ],
  [
    "design-03013",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-col-lg-4 }"
    ]
  ],
  [
    "design-03014",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-col-lg-4 }"
    ]
  ],
  [
    "design-03015",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-col-lg-4 }"
    ]
  ],
  [
    "design-03016",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-col-lg-5 }"
    ]
  ],
  [
    "design-03017",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-col-lg-5 }"
    ]
  ],
  [
    "design-03018",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-col-lg-5 }"
    ]
  ],
  [
    "design-03019",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-col-lg-6 }"
    ]
  ],
  [
    "design-03020",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-col-lg-6 }"
    ]
  ],
  [
    "design-03021",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-col-lg-6 }"
    ]
  ],
  [
    "design-03022",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-col-lg-7 }"
    ]
  ],
  [
    "design-03023",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-col-lg-7 }"
    ]
  ],
  [
    "design-03024",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-col-lg-7 }"
    ]
  ],
  [
    "design-03025",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-col-lg-8 }"
    ]
  ],
  [
    "design-03026",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-col-lg-8 }"
    ]
  ],
  [
    "design-03027",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-col-lg-8 }"
    ]
  ],
  [
    "design-03028",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-col-lg-9 }"
    ]
  ],
  [
    "design-03029",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-col-lg-9 }"
    ]
  ],
  [
    "design-03030",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-col-lg-9 }"
    ]
  ],
  [
    "design-03031",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-col-lg-10 }"
    ]
  ],
  [
    "design-03032",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-col-lg-10 }"
    ]
  ],
  [
    "design-03033",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-col-lg-10 }"
    ]
  ],
  [
    "design-03034",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-lg-row-reverse }"
    ]
  ],
  [
    "design-03035",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-lg-row-reverse }"
    ]
  ],
  [
    "design-03036",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-col-xl }"
    ]
  ],
  [
    "design-03037",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-col-xl }"
    ]
  ],
  [
    "design-03038",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-col-xl }"
    ]
  ],
  [
    "design-03039",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-col-xl }"
    ]
  ],
  [
    "design-03040",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-col-xl }"
    ]
  ],
  [
    "design-03041",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-col-xl-1 }"
    ]
  ],
  [
    "design-03042",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-col-xl-1 }"
    ]
  ],
  [
    "design-03043",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-col-xl-1 }"
    ]
  ],
  [
    "design-03044",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-col-xl-5 }"
    ]
  ],
  [
    "design-03045",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-col-xl-5 }"
    ]
  ],
  [
    "design-03046",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-col-xl-5 }"
    ]
  ],
  [
    "design-03047",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-col-xl-7 }"
    ]
  ],
  [
    "design-03048",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-col-xl-7 }"
    ]
  ],
  [
    "design-03049",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-col-xl-7 }"
    ]
  ],
  [
    "design-03050",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-col-xl-12 }"
    ]
  ],
  [
    "design-03051",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-col-xl-12 }"
    ]
  ],
  [
    "design-03052",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-col-xl-12 }"
    ]
  ],
  [
    "design-03053",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-xl-row-reverse }"
    ]
  ],
  [
    "design-03054",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-xl-row-reverse }"
    ]
  ],
  [
    "design-03055",
    [
      "@media (min-width: 1400px) { &:where(:has(#body-inner)) .tt-col-xxl }"
    ]
  ],
  [
    "design-03056",
    [
      "@media (min-width: 1400px) { &:where(:has(#body-inner)) .tt-col-xxl }"
    ]
  ],
  [
    "design-03057",
    [
      "@media (min-width: 1400px) { &:where(:has(#body-inner)) .tt-col-xxl }"
    ]
  ],
  [
    "design-03058",
    [
      "@media (min-width: 1400px) { &:where(:has(#body-inner)) .tt-col-xxl }"
    ]
  ],
  [
    "design-03059",
    [
      "@media (min-width: 1400px) { &:where(:has(#body-inner)) .tt-col-xxl }"
    ]
  ],
  [
    "design-03060",
    [
      "@media (min-width: 1400px) { &:where(:has(#body-inner)) .tt-col-xxl-2 }"
    ]
  ],
  [
    "design-03061",
    [
      "@media (min-width: 1400px) { &:where(:has(#body-inner)) .tt-col-xxl-2 }"
    ]
  ],
  [
    "design-03062",
    [
      "@media (min-width: 1400px) { &:where(:has(#body-inner)) .tt-col-xxl-2 }"
    ]
  ],
  [
    "design-03063",
    [
      "@media (min-width: 1400px) { &:where(:has(#body-inner)) .tt-col-xxl-6 }"
    ]
  ],
  [
    "design-03064",
    [
      "@media (min-width: 1400px) { &:where(:has(#body-inner)) .tt-col-xxl-6 }"
    ]
  ],
  [
    "design-03065",
    [
      "@media (min-width: 1400px) { &:where(:has(#body-inner)) .tt-col-xxl-6 }"
    ]
  ],
  [
    "design-03066",
    [
      "&:where(:has(#body-inner)) table"
    ]
  ],
  [
    "design-03067",
    [
      "&:where(:has(#body-inner)) table"
    ]
  ],
  [
    "design-03068",
    [
      "&:where(:has(#body-inner)) table"
    ]
  ],
  [
    "design-03069",
    [
      "&:where(:has(#body-inner)) table"
    ]
  ],
  [
    "design-03070",
    [
      "&:where(:has(#body-inner)) table"
    ]
  ],
  [
    "design-03071",
    [
      "&:where(:has(#body-inner)) table"
    ]
  ],
  [
    "design-03072",
    [
      "&:where(:has(#body-inner)) table"
    ]
  ],
  [
    "design-03073",
    [
      "&:where(:has(#body-inner)) table"
    ]
  ],
  [
    "design-03074",
    [
      "&:where(:has(#body-inner)) table"
    ]
  ],
  [
    "design-03075",
    [
      "&:where(:has(#body-inner)) th"
    ]
  ],
  [
    "design-03076",
    [
      "&:where(:has(#body-inner)) th"
    ]
  ],
  [
    "design-03077",
    [
      "&:where(:has(#body-inner)) th",
      "&:where(:has(#body-inner)) td"
    ]
  ],
  [
    "design-03078",
    [
      "&:where(:has(#body-inner)) th",
      "&:where(:has(#body-inner)) td"
    ]
  ],
  [
    "design-03079",
    [
      "&:where(:has(#body-inner)) th",
      "&:where(:has(#body-inner)) td"
    ]
  ],
  [
    "design-03080",
    [
      "&:where(:has(#body-inner)) table th",
      "&:where(:has(#body-inner)) table td"
    ]
  ],
  [
    "design-03081",
    [
      "&:where(:has(#body-inner)) table tbody tr"
    ]
  ],
  [
    "design-03082",
    [
      "&:where(:has(#body-inner)) table tbody tr:nth-of-type(2n+1)"
    ]
  ],
  [
    "design-03083",
    [
      "&:where(:has(#body-inner)) table thead"
    ]
  ],
  [
    "design-03084",
    [
      "&:where(:has(#body-inner)) table thead th",
      "&:where(:has(#body-inner)) table thead td"
    ]
  ],
  [
    "design-03085",
    [
      "&:where(:has(#body-inner)) table tbody th",
      "&:where(:has(#body-inner)) table tbody td"
    ]
  ],
  [
    "design-03086",
    [
      "&:where(:has(#body-inner)) table tfoot"
    ]
  ],
  [
    "design-03087",
    [
      "&:where(:has(#body-inner)) table tfoot th",
      "&:where(:has(#body-inner)) table tfoot td"
    ]
  ],
  [
    "design-03088",
    [
      "&:where(:has(#body-inner)) table caption"
    ]
  ],
  [
    "design-03089",
    [
      "&:where(:has(#body-inner)) table caption"
    ]
  ],
  [
    "design-03090",
    [
      "&:where(:has(#body-inner)) table caption"
    ]
  ],
  [
    "design-03091",
    [
      "&:where(:has(#body-inner)) table caption"
    ]
  ],
  [
    "design-03092",
    [
      "&:where(:has(#body-inner)) blockquote"
    ]
  ],
  [
    "design-03093",
    [
      "&:where(:has(#body-inner)) blockquote"
    ]
  ],
  [
    "design-03094",
    [
      "&:where(:has(#body-inner)) blockquote"
    ]
  ],
  [
    "design-03095",
    [
      "&:where(:has(#body-inner)) blockquote"
    ]
  ],
  [
    "design-03096",
    [
      "&:where(:has(#body-inner)) blockquote"
    ]
  ],
  [
    "design-03097",
    [
      "&:where(:has(#body-inner)) blockquote"
    ]
  ],
  [
    "design-03098",
    [
      "&:where(:has(#body-inner)) blockquote"
    ]
  ],
  [
    "design-03099",
    [
      "&:where(:has(#body-inner)) blockquote"
    ]
  ],
  [
    "design-03100",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) blockquote }"
    ]
  ],
  [
    "design-03101",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) blockquote }"
    ]
  ],
  [
    "design-03102",
    [
      "&:where(:has(#body-inner)) blockquote.open-quote"
    ]
  ],
  [
    "design-03103",
    [
      "&:where(:has(#body-inner)) blockquote.open-quote::before"
    ]
  ],
  [
    "design-03104",
    [
      "&:where(:has(#body-inner)) blockquote.open-quote::before"
    ]
  ],
  [
    "design-03105",
    [
      "&:where(:has(#body-inner)) blockquote.open-quote::before"
    ]
  ],
  [
    "design-03106",
    [
      "&:where(:has(#body-inner)) blockquote.open-quote::before"
    ]
  ],
  [
    "design-03107",
    [
      "&:where(:has(#body-inner)) blockquote.open-quote::before"
    ]
  ],
  [
    "design-03108",
    [
      "&:where(:has(#body-inner)) blockquote.open-quote::before"
    ]
  ],
  [
    "design-03109",
    [
      "&:where(:has(#body-inner)) blockquote.open-quote::before"
    ]
  ],
  [
    "design-03110",
    [
      "&:where(:has(#body-inner)) blockquote.open-quote::before"
    ]
  ],
  [
    "design-03111",
    [
      "&:where(:has(#body-inner)) blockquote footer"
    ]
  ],
  [
    "design-03112",
    [
      "&:where(:has(#body-inner)) blockquote footer"
    ]
  ],
  [
    "design-03113",
    [
      "&:where(:has(#body-inner)) blockquote footer"
    ]
  ],
  [
    "design-03114",
    [
      "&:where(:has(#body-inner)) blockquote footer"
    ]
  ],
  [
    "design-03115",
    [
      "&:where(:has(#body-inner)) blockquote footer"
    ]
  ],
  [
    "design-03116",
    [
      "&:where(:has(#body-inner)) blockquote footer a"
    ]
  ],
  [
    "design-03117",
    [
      "&:where(:has(#body-inner)) blockquote footer a:hover",
      "&:where(:has(#body-inner)) blockquote footer a:focus"
    ]
  ],
  [
    "design-03118",
    [
      "&:where(:has(#body-inner)) blockquote footer::before"
    ]
  ],
  [
    "design-03119",
    [
      "&:where(:has(#body-inner)) blockquote footer::before"
    ]
  ],
  [
    "design-03120",
    [
      "&:where(:has(#body-inner)) blockquote footer::before"
    ]
  ],
  [
    "design-03121",
    [
      "&:where(:has(#body-inner)) blockquote footer::before"
    ]
  ],
  [
    "design-03122",
    [
      "&:where(:has(#body-inner)) blockquote footer::before"
    ]
  ],
  [
    "design-03123",
    [
      "&:where(:has(#body-inner)) blockquote footer::before"
    ]
  ],
  [
    "design-03124",
    [
      "&:where(:has(#body-inner)) button"
    ]
  ],
  [
    "design-03125",
    [
      "&:where(:has(#body-inner)) button"
    ]
  ],
  [
    "design-03126",
    [
      "&:where(:has(#body-inner)) button"
    ]
  ],
  [
    "design-03127",
    [
      "&:where(:has(#body-inner)) .tt-btn"
    ]
  ],
  [
    "design-03128",
    [
      "&:where(:has(#body-inner)) .tt-btn"
    ]
  ],
  [
    "design-03129",
    [
      "&:where(:has(#body-inner)) .tt-btn"
    ]
  ],
  [
    "design-03130",
    [
      "&:where(:has(#body-inner)) .tt-btn"
    ]
  ],
  [
    "design-03131",
    [
      "&:where(:has(#body-inner)) .tt-btn"
    ]
  ],
  [
    "design-03132",
    [
      "&:where(:has(#body-inner)) .tt-btn"
    ]
  ],
  [
    "design-03133",
    [
      "&:where(:has(#body-inner)) .tt-btn"
    ]
  ],
  [
    "design-03134",
    [
      "&:where(:has(#body-inner)) .tt-btn"
    ]
  ],
  [
    "design-03135",
    [
      "&:where(:has(#body-inner)) .tt-btn"
    ]
  ],
  [
    "design-03136",
    [
      "&:where(:has(#body-inner)) .tt-btn"
    ]
  ],
  [
    "design-03137",
    [
      "&:where(:has(#body-inner)) .tt-btn"
    ]
  ],
  [
    "design-03138",
    [
      "&:where(:has(#body-inner)) .tt-btn"
    ]
  ],
  [
    "design-03139",
    [
      "&:where(:has(#body-inner)) .tt-btn"
    ]
  ],
  [
    "design-03140",
    [
      "&:where(:has(#body-inner)) .tt-btn"
    ]
  ],
  [
    "design-03141",
    [
      "&:where(:has(#body-inner)) .tt-btn"
    ]
  ],
  [
    "design-03142",
    [
      "&:where(:has(#body-inner)) .tt-btn"
    ]
  ],
  [
    "design-03143",
    [
      "&:where(:has(#body-inner)) .tt-btn-inner"
    ]
  ],
  [
    "design-03144",
    [
      "&:where(:has(#body-inner)) .tt-btn-inner"
    ]
  ],
  [
    "design-03145",
    [
      "&:where(:has(#body-inner)) .tt-btn-inner"
    ]
  ],
  [
    "design-03146",
    [
      "&:where(:has(#body-inner)) .tt-btn-inner"
    ]
  ],
  [
    "design-03147",
    [
      "&:where(:has(#body-inner)) .tt-btn-inner"
    ]
  ],
  [
    "design-03148",
    [
      "&:where(:has(#body-inner)) .tt-btn-inner"
    ]
  ],
  [
    "design-03149",
    [
      "&:where(:has(#body-inner)) .tt-btn-inner"
    ]
  ],
  [
    "design-03150",
    [
      "&:where(:has(#body-inner)) .tt-btn-inner > *"
    ]
  ],
  [
    "design-03151",
    [
      "&:where(:has(#body-inner)) .tt-btn-inner > *"
    ]
  ],
  [
    "design-03152",
    [
      "&:where(:has(#body-inner)) .tt-btn-inner > *"
    ]
  ],
  [
    "design-03153",
    [
      "&:where(:has(#body-inner)) .tt-btn-inner > *",
      "&:where(:has(#body-inner)) .tt-btn-inner > ::after"
    ]
  ],
  [
    "design-03154",
    [
      "&:where(:has(#body-inner)) .tt-btn-inner > *",
      "&:where(:has(#body-inner)) .tt-btn-inner > ::after"
    ]
  ],
  [
    "design-03155",
    [
      "&:where(:has(#body-inner)) .tt-btn-inner > *",
      "&:where(:has(#body-inner)) .tt-btn-inner > ::after"
    ]
  ],
  [
    "design-03156",
    [
      "&:where(:has(#body-inner)) .tt-btn-inner > *",
      "&:where(:has(#body-inner)) .tt-btn-inner > ::after"
    ]
  ],
  [
    "design-03157",
    [
      "&:where(:has(#body-inner)) .tt-btn-inner > ::after"
    ]
  ],
  [
    "design-03158",
    [
      "&:where(:has(#body-inner)) .tt-btn-inner > ::after"
    ]
  ],
  [
    "design-03159",
    [
      "&:where(:has(#body-inner)) .tt-btn-inner > ::after"
    ]
  ],
  [
    "design-03160",
    [
      "&:where(:has(#body-inner)) .tt-btn-inner > ::after"
    ]
  ],
  [
    "design-03161",
    [
      "&:where(:has(#body-inner)) .tt-btn-inner > ::after"
    ]
  ],
  [
    "design-03162",
    [
      "&:where(:has(#body-inner)) .tt-btn-inner > ::after"
    ]
  ],
  [
    "design-03163",
    [
      "&:where(:has(#body-inner)) .tt-btn-inner > ::after"
    ]
  ],
  [
    "design-03164",
    [
      "&:where(:has(#body-inner)) .tt-btn:hover .tt-btn-inner > :not(.tt-btn-icon)"
    ]
  ],
  [
    "design-03165",
    [
      "&:where(:has(#body-inner)) .tt-btn-icon"
    ]
  ],
  [
    "design-03166",
    [
      "&:where(:has(#body-inner)) .tt-btn-icon"
    ]
  ],
  [
    "design-03167",
    [
      "&:where(:has(#body-inner)) .tt-btn-icon:first-child"
    ]
  ],
  [
    "design-03168",
    [
      "&:where(:has(#body-inner)) .tt-btn-icon:last-child"
    ]
  ],
  [
    "design-03169",
    [
      "&:where(:has(#body-inner)) .tt-magnetic-btn"
    ]
  ],
  [
    "design-03170",
    [
      "&:where(:has(#body-inner)) .tt-magnetic-btn"
    ]
  ],
  [
    "design-03171",
    [
      "&:where(:has(#body-inner)) .tt-magnetic-btn .tt-btn"
    ]
  ],
  [
    "design-03172",
    [
      "&:where(:has(#body-inner)) .tt-btn-full"
    ]
  ],
  [
    "design-03173",
    [
      "&:where(:has(#body-inner)) .tt-btn-full"
    ]
  ],
  [
    "design-03174",
    [
      "&:where(:has(#body-inner)) .tt-btn-full"
    ]
  ],
  [
    "design-03175",
    [
      "&:where(:has(#body-inner)) .tt-btn-round"
    ]
  ],
  [
    "design-03176",
    [
      "&:where(:has(#body-inner)) .tt-btn-round"
    ]
  ],
  [
    "design-03177",
    [
      "&:where(:has(#body-inner)) .tt-btn-round"
    ]
  ],
  [
    "design-03178",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-btn-round }"
    ]
  ],
  [
    "design-03179",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-btn-round }"
    ]
  ],
  [
    "design-03180",
    [
      "&:where(:has(#body-inner)) .tt-btn-round .tt-btn-inner > *"
    ]
  ],
  [
    "design-03181",
    [
      "&:where(:has(#body-inner)) .tt-btn-primary"
    ]
  ],
  [
    "design-03182",
    [
      "&:where(:has(#body-inner)) .tt-btn-primary"
    ]
  ],
  [
    "design-03183",
    [
      "&:where(:has(#body-inner)) .tt-btn-primary > *",
      "&:where(:has(#body-inner)) .tt-btn-primary > ::after"
    ]
  ],
  [
    "design-03184",
    [
      "&:where(:has(#body-inner)) .tt-btn-secondary"
    ]
  ],
  [
    "design-03185",
    [
      "&:where(:has(#body-inner)) .tt-btn-secondary > *",
      "&:where(:has(#body-inner)) .tt-btn-secondary > ::after"
    ]
  ],
  [
    "design-03186",
    [
      "&:where(:has(#body-inner)) .tt-btn-outline"
    ]
  ],
  [
    "design-03187",
    [
      "&:where(:has(#body-inner)) .tt-btn-outline > *",
      "&:where(:has(#body-inner)) .tt-btn-outline > ::after"
    ]
  ],
  [
    "design-03188",
    [
      "&:where(:has(#body-inner)) .tt-btn-dark"
    ]
  ],
  [
    "design-03189",
    [
      "&:where(:has(#body-inner)) .tt-btn-dark > *",
      "&:where(:has(#body-inner)) .tt-btn-dark > ::after"
    ]
  ],
  [
    "design-03190",
    [
      "&:where(:has(#body-inner)) .tt-btn-accent"
    ]
  ],
  [
    "design-03191",
    [
      "&:where(:has(#body-inner)) .tt-btn-accent"
    ]
  ],
  [
    "design-03192",
    [
      "&:where(:has(#body-inner)) .tt-btn-accent > *",
      "&:where(:has(#body-inner)) .tt-btn-accent > ::after"
    ]
  ],
  [
    "design-03193",
    [
      "&:where(:has(#body-inner)) .tt-btn-link"
    ]
  ],
  [
    "design-03194",
    [
      "&:where(:has(#body-inner)) .tt-btn-link"
    ]
  ],
  [
    "design-03195",
    [
      "&:where(:has(#body-inner)) .tt-btn-link"
    ]
  ],
  [
    "design-03196",
    [
      "&:where(:has(#body-inner)) .tt-btn-link"
    ]
  ],
  [
    "design-03197",
    [
      "&:where(:has(#body-inner)) .tt-btn-link"
    ]
  ],
  [
    "design-03198",
    [
      "&:where(:has(#body-inner)) .tt-btn-link"
    ]
  ],
  [
    "design-03199",
    [
      "&:where(:has(#body-inner)) .tt-btn-link"
    ]
  ],
  [
    "design-03200",
    [
      "&:where(:has(#body-inner)) .tt-btn-link"
    ]
  ],
  [
    "design-03201",
    [
      "&:where(:has(#body-inner)) .tt-btn-link > *",
      "&:where(:has(#body-inner)) .tt-btn-link > ::after"
    ]
  ],
  [
    "design-03202",
    [
      "&:where(:has(#body-inner)) .tt-btn-link > *",
      "&:where(:has(#body-inner)) .tt-btn-link > ::after"
    ]
  ],
  [
    "design-03203",
    [
      "&:where(:has(#body-inner)) .tt-btn-line"
    ]
  ],
  [
    "design-03204",
    [
      "&:where(:has(#body-inner)) .tt-btn-line"
    ]
  ],
  [
    "design-03205",
    [
      "&:where(:has(#body-inner)) .tt-btn-line"
    ]
  ],
  [
    "design-03206",
    [
      "&:where(:has(#body-inner)) .tt-btn-line"
    ]
  ],
  [
    "design-03207",
    [
      "&:where(:has(#body-inner)) .tt-btn-line"
    ]
  ],
  [
    "design-03208",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-btn:hover .tt-btn-line"
    ]
  ],
  [
    "design-03209",
    [
      "&:where(:has(#body-inner)) .tt-btn.tt-btn-disabled"
    ]
  ],
  [
    "design-03210",
    [
      "&:where(:has(#body-inner)) .tt-btn.tt-btn-disabled"
    ]
  ],
  [
    "design-03211",
    [
      "&:where(:has(#body-inner)) .tt-social-buttons ul"
    ]
  ],
  [
    "design-03212",
    [
      "&:where(:has(#body-inner)) .tt-social-buttons ul"
    ]
  ],
  [
    "design-03213",
    [
      "&:where(:has(#body-inner)) .tt-social-buttons ul"
    ]
  ],
  [
    "design-03214",
    [
      "&:where(:has(#body-inner)) .tt-social-buttons ul"
    ]
  ],
  [
    "design-03215",
    [
      "&:where(:has(#body-inner)) .tt-social-buttons ul"
    ]
  ],
  [
    "design-03216",
    [
      "&:where(:has(#body-inner)) .tt-social-buttons ul > li"
    ]
  ],
  [
    "design-03217",
    [
      "&:where(:has(#body-inner)) .tt-social-buttons > ul > li a"
    ]
  ],
  [
    "design-03218",
    [
      "&:where(:has(#body-inner)) .tt-social-buttons > ul > li a"
    ]
  ],
  [
    "design-03219",
    [
      "&:where(:has(#body-inner)) .tt-social-buttons > ul > li a"
    ]
  ],
  [
    "design-03220",
    [
      "&:where(:has(#body-inner)) .tt-social-buttons > ul > li a"
    ]
  ],
  [
    "design-03221",
    [
      "&:where(:has(#body-inner)) .tt-social-buttons > ul > li a"
    ]
  ],
  [
    "design-03222",
    [
      "&:where(:has(#body-inner)) .tt-social-buttons > ul > li a"
    ]
  ],
  [
    "design-03223",
    [
      "&:where(:has(#body-inner)) .tt-social-buttons > ul > li a"
    ]
  ],
  [
    "design-03224",
    [
      "&:where(:has(#body-inner)) .tt-social-buttons > ul > li a"
    ]
  ],
  [
    "design-03225",
    [
      "&:where(:has(#body-inner)) .tt-social-buttons > ul > li a"
    ]
  ],
  [
    "design-03226",
    [
      "&:where(:has(#body-inner)) .tt-social-buttons.tt-sbtn-inline > ul"
    ]
  ],
  [
    "design-03227",
    [
      "&:where(:has(#body-inner)) .tt-social-buttons.tt-sbtn-inline > ul"
    ]
  ],
  [
    "design-03228",
    [
      "&:where(:has(#body-inner)) .tt-social-buttons.tt-sbtn-inline ul > li:first-child"
    ]
  ],
  [
    "design-03229",
    [
      "&:where(:has(#body-inner)) .tt-social-buttons.tt-sbtn-inline ul > li:last-child"
    ]
  ],
  [
    "design-03230",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-social-buttons.tt-sbtn-bordered ul > li }"
    ]
  ],
  [
    "design-03231",
    [
      "&:where(:has(#body-inner)) .tt-social-buttons.tt-sbtn-bordered > ul > li a"
    ]
  ],
  [
    "design-03232",
    [
      "&:where(:has(#body-inner)) .tt-social-buttons.tt-sbtn-bordered > ul > li a"
    ]
  ],
  [
    "design-03233",
    [
      "&:where(:has(#body-inner)) .tt-social-buttons.tt-sbtn-bordered > ul > li a"
    ]
  ],
  [
    "design-03234",
    [
      "&:where(:has(#body-inner)) .tt-social-buttons.tt-sbtn-bordered > ul > li a"
    ]
  ],
  [
    "design-03235",
    [
      "&:where(:has(#body-inner)) .tt-social-buttons.tt-sbtn-bordered > ul > li a"
    ]
  ],
  [
    "design-03236",
    [
      "&:where(:has(#body-inner)) .tt-social-buttons.tt-sbtn-bordered > ul > li a"
    ]
  ],
  [
    "design-03237",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-social-buttons.tt-sbtn-filled ul > li }"
    ]
  ],
  [
    "design-03238",
    [
      "&:where(:has(#body-inner)) .tt-social-buttons.tt-sbtn-filled > ul > li a"
    ]
  ],
  [
    "design-03239",
    [
      "&:where(:has(#body-inner)) .tt-social-buttons.tt-sbtn-filled > ul > li a"
    ]
  ],
  [
    "design-03240",
    [
      "&:where(:has(#body-inner)) .tt-social-buttons.tt-sbtn-filled > ul > li a"
    ]
  ],
  [
    "design-03241",
    [
      "&:where(:has(#body-inner)) .tt-social-buttons.tt-sbtn-filled > ul > li a"
    ]
  ],
  [
    "design-03242",
    [
      "&:where(:has(#body-inner)) .tt-social-buttons.tt-sbtn-filled > ul > li a"
    ]
  ],
  [
    "design-03243",
    [
      "&:where(:has(#body-inner)) .tt-social-buttons.tt-sbtn-filled > ul > li a"
    ]
  ],
  [
    "design-03244",
    [
      "&:where(:has(#body-inner)) .tt-social-buttons.tt-sbtn-filled > ul > li a"
    ]
  ],
  [
    "design-03245",
    [
      "&:where(:has(#body-inner)) .tt-form"
    ]
  ],
  [
    "design-03246",
    [
      "&:where(:has(#body-inner)) .tt-form-control"
    ]
  ],
  [
    "design-03247",
    [
      "&:where(:has(#body-inner)) .tt-form-control"
    ]
  ],
  [
    "design-03248",
    [
      "&:where(:has(#body-inner)) .tt-form-control"
    ]
  ],
  [
    "design-03249",
    [
      "&:where(:has(#body-inner)) .tt-form-control"
    ]
  ],
  [
    "design-03250",
    [
      "&:where(:has(#body-inner)) .tt-form-control"
    ]
  ],
  [
    "design-03251",
    [
      "&:where(:has(#body-inner)) .tt-form-control"
    ]
  ],
  [
    "design-03252",
    [
      "&:where(:has(#body-inner)) .tt-form-control"
    ]
  ],
  [
    "design-03253",
    [
      "&:where(:has(#body-inner)) .tt-form-control"
    ]
  ],
  [
    "design-03254",
    [
      "&:where(:has(#body-inner)) .tt-form-control"
    ]
  ],
  [
    "design-03255",
    [
      "&:where(:has(#body-inner)) .tt-form-control"
    ]
  ],
  [
    "design-03256",
    [
      "&:where(:has(#body-inner)) .tt-form-control:focus"
    ]
  ],
  [
    "design-03257",
    [
      "&:where(:has(#body-inner)) .tt-form-control:focus"
    ]
  ],
  [
    "design-03258",
    [
      "&:where(:has(#body-inner)) .tt-form-control:focus"
    ]
  ],
  [
    "design-03259",
    [
      "&:where(:has(#body-inner)) .tt-form-control:focus"
    ]
  ],
  [
    "design-03260",
    [
      "&:where(:has(#body-inner)) .tt-form-control + .tt-form-control"
    ]
  ],
  [
    "design-03261",
    [
      "&:where(:has(#body-inner)) .tt-form-control:disabled",
      "&:where(:has(#body-inner)) .tt-form-control[readonly]"
    ]
  ],
  [
    "design-03262",
    [
      "&:where(:has(#body-inner)) .tt-form-control:disabled",
      "&:where(:has(#body-inner)) .tt-form-control[readonly]"
    ]
  ],
  [
    "design-03263",
    [
      "&:where(:has(#body-inner)) .tt-form-control:disabled",
      "&:where(:has(#body-inner)) .tt-form-control[readonly]"
    ]
  ],
  [
    "design-03264",
    [
      "&:where(:has(#body-inner)) .tt-form-control:not(textarea):not([size])"
    ]
  ],
  [
    "design-03265",
    [
      "&:where(:has(#body-inner)) .tt-form-text"
    ]
  ],
  [
    "design-03266",
    [
      "&:where(:has(#body-inner)) .tt-form-text"
    ]
  ],
  [
    "design-03267",
    [
      "&:where(:has(#body-inner)) .tt-form-text"
    ]
  ],
  [
    "design-03268",
    [
      "&:where(:has(#body-inner)) .tt-form-text"
    ]
  ],
  [
    "design-03269",
    [
      "&:where(:has(#body-inner)) label"
    ]
  ],
  [
    "design-03270",
    [
      "&:where(:has(#body-inner)) label"
    ]
  ],
  [
    "design-03271",
    [
      "&:where(:has(#body-inner)) label"
    ]
  ],
  [
    "design-03272",
    [
      "&:where(:has(#body-inner)) label"
    ]
  ],
  [
    "design-03273",
    [
      "&:where(:has(#body-inner)) label"
    ]
  ],
  [
    "design-03274",
    [
      "&:where(:has(#body-inner)) label .required"
    ]
  ],
  [
    "design-03275",
    [
      "&:where(:has(#body-inner)) label .required"
    ]
  ],
  [
    "design-03276",
    [
      "&:where(:has(#body-inner)) label .required"
    ]
  ],
  [
    "design-03277",
    [
      "&:where(:has(#body-inner)) ::placeholder"
    ]
  ],
  [
    "design-03278",
    [
      "&:where(:has(#body-inner)) ::placeholder"
    ]
  ],
  [
    "design-03279",
    [
      "&:where(:has(#body-inner)) ::-webkit-input-placeholder"
    ]
  ],
  [
    "design-03280",
    [
      "&:where(:has(#body-inner)) ::-webkit-input-placeholder"
    ]
  ],
  [
    "design-03281",
    [
      "&:where(:has(#body-inner)) .tt-form-group"
    ]
  ],
  [
    "design-03282",
    [
      "&:where(:has(#body-inner)) .tt-form-group"
    ]
  ],
  [
    "design-03283",
    [
      "&:where(:has(#body-inner)) input[type=\"checkbox\"]",
      "&:where(:has(#body-inner)) input[type=\"radio\"]"
    ]
  ],
  [
    "design-03284",
    [
      "&:where(:has(#body-inner)) input[type=\"checkbox\"]",
      "&:where(:has(#body-inner)) input[type=\"radio\"]"
    ]
  ],
  [
    "design-03285",
    [
      "&:where(:has(#body-inner)) input[type=\"checkbox\"]",
      "&:where(:has(#body-inner)) input[type=\"radio\"]"
    ]
  ],
  [
    "design-03286",
    [
      "&:where(:has(#body-inner)) select"
    ]
  ],
  [
    "design-03287",
    [
      "&:where(:has(#body-inner)) select option"
    ]
  ],
  [
    "design-03288",
    [
      "&:where(:has(#body-inner)) select option"
    ]
  ],
  [
    "design-03289",
    [
      "&:where(:has(#body-inner)) select option[value=\"\"][disabled]"
    ]
  ],
  [
    "design-03290",
    [
      "&:where(:has(#body-inner)) select[multiple] option"
    ]
  ],
  [
    "design-03291",
    [
      "&:where(:has(#body-inner)) select[multiple] option"
    ]
  ],
  [
    "design-03292",
    [
      "&:where(:has(#body-inner)) select option[disabled]",
      "&:where(:has(#body-inner)) select[multiple] option[disabled]"
    ]
  ],
  [
    "design-03293",
    [
      "&:where(:has(#body-inner)) select option[disabled]",
      "&:where(:has(#body-inner)) select[multiple] option[disabled]"
    ]
  ],
  [
    "design-03294",
    [
      "&:where(:has(#body-inner)) select:invalid"
    ]
  ],
  [
    "design-03295",
    [
      "&:where(:has(#body-inner)) select:invalid"
    ]
  ],
  [
    "design-03296",
    [
      "&:where(:has(#body-inner)) input[type=\"range\"]"
    ]
  ],
  [
    "design-03297",
    [
      "&:where(:has(#body-inner)) .tt-form-check",
      "&:where(:has(#body-inner)) .tt-form-radio"
    ]
  ],
  [
    "design-03298",
    [
      "&:where(:has(#body-inner)) .tt-form-check",
      "&:where(:has(#body-inner)) .tt-form-radio"
    ]
  ],
  [
    "design-03299",
    [
      "&:where(:has(#body-inner)) .tt-form-check",
      "&:where(:has(#body-inner)) .tt-form-radio"
    ]
  ],
  [
    "design-03300",
    [
      "&:where(:has(#body-inner)) .tt-form-check input",
      "&:where(:has(#body-inner)) .tt-form-radio input"
    ]
  ],
  [
    "design-03301",
    [
      "&:where(:has(#body-inner)) .tt-form-check input",
      "&:where(:has(#body-inner)) .tt-form-radio input"
    ]
  ],
  [
    "design-03302",
    [
      "&:where(:has(#body-inner)) .tt-form-check input",
      "&:where(:has(#body-inner)) .tt-form-radio input"
    ]
  ],
  [
    "design-03303",
    [
      "&:where(:has(#body-inner)) .tt-form-check input",
      "&:where(:has(#body-inner)) .tt-form-radio input"
    ]
  ],
  [
    "design-03304",
    [
      "&:where(:has(#body-inner)) .tt-form-check input",
      "&:where(:has(#body-inner)) .tt-form-radio input"
    ]
  ],
  [
    "design-03305",
    [
      "&:where(:has(#body-inner)) .tt-form-check label",
      "&:where(:has(#body-inner)) .tt-form-radio label"
    ]
  ],
  [
    "design-03306",
    [
      "&:where(:has(#body-inner)) .tt-form-check label",
      "&:where(:has(#body-inner)) .tt-form-radio label"
    ]
  ],
  [
    "design-03307",
    [
      "&:where(:has(#body-inner)) .tt-form-check label",
      "&:where(:has(#body-inner)) .tt-form-radio label"
    ]
  ],
  [
    "design-03308",
    [
      "&:where(:has(#body-inner)) .tt-form-check label",
      "&:where(:has(#body-inner)) .tt-form-radio label"
    ]
  ],
  [
    "design-03309",
    [
      "&:where(:has(#body-inner)) .tt-form-check label",
      "&:where(:has(#body-inner)) .tt-form-radio label"
    ]
  ],
  [
    "design-03310",
    [
      "&:where(:has(#body-inner)) .tt-form-check label",
      "&:where(:has(#body-inner)) .tt-form-radio label"
    ]
  ],
  [
    "design-03311",
    [
      "&:where(:has(#body-inner)) .tt-form-check label",
      "&:where(:has(#body-inner)) .tt-form-radio label"
    ]
  ],
  [
    "design-03312",
    [
      "&:where(:has(#body-inner)) .tt-form-check label::before",
      "&:where(:has(#body-inner)) .tt-form-radio label::before"
    ]
  ],
  [
    "design-03313",
    [
      "&:where(:has(#body-inner)) .tt-form-check label::before",
      "&:where(:has(#body-inner)) .tt-form-radio label::before"
    ]
  ],
  [
    "design-03314",
    [
      "&:where(:has(#body-inner)) .tt-form-check label::before",
      "&:where(:has(#body-inner)) .tt-form-radio label::before"
    ]
  ],
  [
    "design-03315",
    [
      "&:where(:has(#body-inner)) .tt-form-check label::before",
      "&:where(:has(#body-inner)) .tt-form-radio label::before"
    ]
  ],
  [
    "design-03316",
    [
      "&:where(:has(#body-inner)) .tt-form-check label::before",
      "&:where(:has(#body-inner)) .tt-form-radio label::before"
    ]
  ],
  [
    "design-03317",
    [
      "&:where(:has(#body-inner)) .tt-form-check label::before",
      "&:where(:has(#body-inner)) .tt-form-radio label::before"
    ]
  ],
  [
    "design-03318",
    [
      "&:where(:has(#body-inner)) .tt-form-check label::before",
      "&:where(:has(#body-inner)) .tt-form-radio label::before"
    ]
  ],
  [
    "design-03319",
    [
      "&:where(:has(#body-inner)) .tt-form-check label::before",
      "&:where(:has(#body-inner)) .tt-form-radio label::before"
    ]
  ],
  [
    "design-03320",
    [
      "&:where(:has(#body-inner)) .tt-form-check label::before",
      "&:where(:has(#body-inner)) .tt-form-radio label::before"
    ]
  ],
  [
    "design-03321",
    [
      "&:where(:has(#body-inner)) .tt-form-check label::before",
      "&:where(:has(#body-inner)) .tt-form-radio label::before"
    ]
  ],
  [
    "design-03322",
    [
      "&:where(:has(#body-inner)) .tt-form-check label::before",
      "&:where(:has(#body-inner)) .tt-form-radio label::before"
    ]
  ],
  [
    "design-03323",
    [
      "&:where(:has(#body-inner)) .tt-form-check:hover label::before",
      "&:where(:has(#body-inner)) .tt-form-radio:hover label::before"
    ]
  ],
  [
    "design-03324",
    [
      "&:where(:has(#body-inner)) .tt-form-check label::after",
      "&:where(:has(#body-inner)) .tt-form-radio label::after"
    ]
  ],
  [
    "design-03325",
    [
      "&:where(:has(#body-inner)) .tt-form-check label::after",
      "&:where(:has(#body-inner)) .tt-form-radio label::after"
    ]
  ],
  [
    "design-03326",
    [
      "&:where(:has(#body-inner)) .tt-form-check label::after",
      "&:where(:has(#body-inner)) .tt-form-radio label::after"
    ]
  ],
  [
    "design-03327",
    [
      "&:where(:has(#body-inner)) .tt-form-check label::after",
      "&:where(:has(#body-inner)) .tt-form-radio label::after"
    ]
  ],
  [
    "design-03328",
    [
      "&:where(:has(#body-inner)) .tt-form-check label::after",
      "&:where(:has(#body-inner)) .tt-form-radio label::after"
    ]
  ],
  [
    "design-03329",
    [
      "&:where(:has(#body-inner)) .tt-form-check label::after",
      "&:where(:has(#body-inner)) .tt-form-radio label::after"
    ]
  ],
  [
    "design-03330",
    [
      "&:where(:has(#body-inner)) .tt-form-check label::after",
      "&:where(:has(#body-inner)) .tt-form-radio label::after"
    ]
  ],
  [
    "design-03331",
    [
      "&:where(:has(#body-inner)) .tt-form-check label::after",
      "&:where(:has(#body-inner)) .tt-form-radio label::after"
    ]
  ],
  [
    "design-03332",
    [
      "&:where(:has(#body-inner)) .tt-form-check label::after",
      "&:where(:has(#body-inner)) .tt-form-radio label::after"
    ]
  ],
  [
    "design-03333",
    [
      "&:where(:has(#body-inner)) .tt-form-check label::after",
      "&:where(:has(#body-inner)) .tt-form-radio label::after"
    ]
  ],
  [
    "design-03334",
    [
      "&:where(:has(#body-inner)) .tt-form-check input:checked ~ label::after",
      "&:where(:has(#body-inner)) .tt-form-radio input:checked ~ label::after"
    ]
  ],
  [
    "design-03335",
    [
      "&:where(:has(#body-inner)) .tt-form-radio label::before"
    ]
  ],
  [
    "design-03336",
    [
      "&:where(:has(#body-inner)) .tt-form-radio label::after"
    ]
  ],
  [
    "design-03337",
    [
      "&:where(:has(#body-inner)) .tt-form-radio label::after"
    ]
  ],
  [
    "design-03338",
    [
      "&:where(:has(#body-inner)) .tt-form-radio label::after"
    ]
  ],
  [
    "design-03339",
    [
      "&:where(:has(#body-inner)) .tt-form-radio label::after"
    ]
  ],
  [
    "design-03340",
    [
      "&:where(:has(#body-inner)) .tt-form-radio label::after"
    ]
  ],
  [
    "design-03341",
    [
      "&:where(:has(#body-inner)) .tt-form-radio label::after"
    ]
  ],
  [
    "design-03342",
    [
      "&:where(:has(#body-inner)) .tt-form-check input:disabled",
      "&:where(:has(#body-inner)) .tt-form-radio input:disabled"
    ]
  ],
  [
    "design-03343",
    [
      "&:where(:has(#body-inner)) .tt-form-check input:disabled ~ label",
      "&:where(:has(#body-inner)) .tt-form-radio input:disabled ~ label"
    ]
  ],
  [
    "design-03344",
    [
      "&:where(:has(#body-inner)) .tt-form-check input:disabled ~ label",
      "&:where(:has(#body-inner)) .tt-form-radio input:disabled ~ label"
    ]
  ],
  [
    "design-03345",
    [
      "&:where(:has(#body-inner)) .tt-form-check.tt-form-check-inline",
      "&:where(:has(#body-inner)) .tt-form-radio.tt-form-radio-inline"
    ]
  ],
  [
    "design-03346",
    [
      "&:where(:has(#body-inner)) .tt-form-check.tt-form-check-inline",
      "&:where(:has(#body-inner)) .tt-form-radio.tt-form-radio-inline"
    ]
  ],
  [
    "design-03347",
    [
      "&:where(:has(#body-inner)) .btn-file"
    ]
  ],
  [
    "design-03348",
    [
      "&:where(:has(#body-inner)) .btn-file > * input"
    ]
  ],
  [
    "design-03349",
    [
      "&:where(:has(#body-inner)) .btn-file > * input"
    ]
  ],
  [
    "design-03350",
    [
      "&:where(:has(#body-inner)) .btn-file > * input"
    ]
  ],
  [
    "design-03351",
    [
      "&:where(:has(#body-inner)) .btn-file > * input"
    ]
  ],
  [
    "design-03352",
    [
      "&:where(:has(#body-inner)) .tt-file-info"
    ]
  ],
  [
    "design-03353",
    [
      "&:where(:has(#body-inner)) .tt-file-info"
    ]
  ],
  [
    "design-03354",
    [
      "&:where(:has(#body-inner)) .tt-file-info"
    ]
  ],
  [
    "design-03355",
    [
      "&:where(:has(#body-inner)) .tt-file-info"
    ]
  ],
  [
    "design-03356",
    [
      "&:where(:has(#body-inner)) .tt-file-info"
    ]
  ],
  [
    "design-03357",
    [
      "&:where(:has(#body-inner)) .tt-file-info"
    ]
  ],
  [
    "design-03358",
    [
      "&:where(:has(#body-inner)) .tt-file-info"
    ]
  ],
  [
    "design-03359",
    [
      "&:where(:has(#body-inner)) .tt-form-btn-inside"
    ]
  ],
  [
    "design-03360",
    [
      "&:where(:has(#body-inner)) .tt-form-btn-inside-field"
    ]
  ],
  [
    "design-03361",
    [
      "&:where(:has(#body-inner)) .tt-form-btn-inside .tt-form-control"
    ]
  ],
  [
    "design-03362",
    [
      "&:where(:has(#body-inner)) .tt-form-btn-inside button"
    ]
  ],
  [
    "design-03363",
    [
      "&:where(:has(#body-inner)) .tt-form-btn-inside button"
    ]
  ],
  [
    "design-03364",
    [
      "&:where(:has(#body-inner)) .tt-form-btn-inside button"
    ]
  ],
  [
    "design-03365",
    [
      "&:where(:has(#body-inner)) .tt-form-btn-inside button"
    ]
  ],
  [
    "design-03366",
    [
      "&:where(:has(#body-inner)) .tt-form-btn-inside button"
    ]
  ],
  [
    "design-03367",
    [
      "&:where(:has(#body-inner)) .tt-form-btn-inside button"
    ]
  ],
  [
    "design-03368",
    [
      "&:where(:has(#body-inner)) .tt-form-btn-inside button"
    ]
  ],
  [
    "design-03369",
    [
      "&:where(:has(#body-inner)) .tt-form-btn-inside button"
    ]
  ],
  [
    "design-03370",
    [
      "&:where(:has(#body-inner)) .tt-form-btn-inside button"
    ]
  ],
  [
    "design-03371",
    [
      "&:where(:has(#body-inner)) .tt-form-btn-inside button"
    ]
  ],
  [
    "design-03372",
    [
      "&:where(:has(#body-inner)) .tt-form-btn-inside button"
    ]
  ],
  [
    "design-03373",
    [
      "&:where(:has(#body-inner)) .tt-form-btn-inside button"
    ]
  ],
  [
    "design-03374",
    [
      "&:where(:has(#body-inner)) .tt-form-btn-inside button"
    ]
  ],
  [
    "design-03375",
    [
      "&:where(:has(#body-inner)) .tt-form-btn-inside button:hover"
    ]
  ],
  [
    "design-03376",
    [
      "&:where(:has(#body-inner)) .tt-form-filled .tt-form-control"
    ]
  ],
  [
    "design-03377",
    [
      "&:where(:has(#body-inner)) .tt-form-filled .tt-form-control"
    ]
  ],
  [
    "design-03378",
    [
      "&:where(:has(#body-inner)) .tt-form-filled .tt-form-control:focus"
    ]
  ],
  [
    "design-03379",
    [
      "&:where(:has(#body-inner)) .tt-form-filled .tt-form-control:disabled",
      "&:where(:has(#body-inner)) .tt-form-filled .tt-form-control[readonly]"
    ]
  ],
  [
    "design-03380",
    [
      "&:where(:has(#body-inner)) .tt-form-minimal .tt-form-group > label"
    ]
  ],
  [
    "design-03381",
    [
      "&:where(:has(#body-inner)) .tt-form-minimal .tt-form-control"
    ]
  ],
  [
    "design-03382",
    [
      "&:where(:has(#body-inner)) .tt-form-minimal .tt-form-control"
    ]
  ],
  [
    "design-03383",
    [
      "&:where(:has(#body-inner)) .tt-form-minimal .tt-form-control"
    ]
  ],
  [
    "design-03384",
    [
      "&:where(:has(#body-inner)) .tt-form-minimal .tt-form-control"
    ]
  ],
  [
    "design-03385",
    [
      "&:where(:has(#body-inner)) .tt-form-minimal .tt-form-control"
    ]
  ],
  [
    "design-03386",
    [
      "&:where(:has(#body-inner)) .tt-form-minimal .tt-form-control"
    ]
  ],
  [
    "design-03387",
    [
      "&:where(:has(#body-inner)) .tt-form-minimal .tt-form-control:disabled",
      "&:where(:has(#body-inner)) .tt-form-minimal .tt-form-control[readonly]"
    ]
  ],
  [
    "design-03388",
    [
      "&:where(:has(#body-inner)) .tt-form-minimal .tt-form-control"
    ]
  ],
  [
    "design-03389",
    [
      "&:where(:has(#body-inner)) .tt-form-minimal select.tt-form-control"
    ]
  ],
  [
    "design-03390",
    [
      "&:where(:has(#body-inner)) .tt-form-minimal ::placeholder"
    ]
  ],
  [
    "design-03391",
    [
      "&:where(:has(#body-inner)) .tt-form-minimal ::-webkit-input-placeholder"
    ]
  ],
  [
    "design-03392",
    [
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-group"
    ]
  ],
  [
    "design-03393",
    [
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-group"
    ]
  ],
  [
    "design-03394",
    [
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-group"
    ]
  ],
  [
    "design-03395",
    [
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-group"
    ]
  ],
  [
    "design-03396",
    [
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-group"
    ]
  ],
  [
    "design-03397",
    [
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-group"
    ]
  ],
  [
    "design-03398",
    [
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-group"
    ]
  ],
  [
    "design-03399",
    [
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-group"
    ]
  ],
  [
    "design-03400",
    [
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-group"
    ]
  ],
  [
    "design-03401",
    [
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-group label"
    ]
  ],
  [
    "design-03402",
    [
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-group label"
    ]
  ],
  [
    "design-03403",
    [
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-group label"
    ]
  ],
  [
    "design-03404",
    [
      "&:where(:has(#body-inner)) .tt-form-creative .tt-fg-typing label"
    ]
  ],
  [
    "design-03405",
    [
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-check label",
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-radio label"
    ]
  ],
  [
    "design-03406",
    [
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-check label",
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-radio label"
    ]
  ],
  [
    "design-03407",
    [
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-control"
    ]
  ],
  [
    "design-03408",
    [
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-control"
    ]
  ],
  [
    "design-03409",
    [
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-control"
    ]
  ],
  [
    "design-03410",
    [
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-control"
    ]
  ],
  [
    "design-03411",
    [
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-control:not(textarea):not([size])"
    ]
  ],
  [
    "design-03412",
    [
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-control:disabled",
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-control[readonly]"
    ]
  ],
  [
    "design-03413",
    [
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-control:disabled",
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-control[readonly]"
    ]
  ],
  [
    "design-03414",
    [
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-text"
    ]
  ],
  [
    "design-03415",
    [
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-text"
    ]
  ],
  [
    "design-03416",
    [
      "&:where(:has(#body-inner)) .tt-form-creative .tt-fg-typing .tt-form-text"
    ]
  ],
  [
    "design-03417",
    [
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-btn-inside button[type=\"submit\"]"
    ]
  ],
  [
    "design-03418",
    [
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-btn-inside button[type=\"submit\"]"
    ]
  ],
  [
    "design-03419",
    [
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-btn-inside button[type=\"submit\"]"
    ]
  ],
  [
    "design-03420",
    [
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-btn-inside button[type=\"submit\"]"
    ]
  ],
  [
    "design-03421",
    [
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-btn-inside button[type=\"submit\"]"
    ]
  ],
  [
    "design-03422",
    [
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-btn-inside button[type=\"submit\"]"
    ]
  ],
  [
    "design-03423",
    [
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-btn-inside button[type=\"submit\"]"
    ]
  ],
  [
    "design-03424",
    [
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-btn-inside button[type=\"submit\"]"
    ]
  ],
  [
    "design-03425",
    [
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-btn-inside button[type=\"submit\"]"
    ]
  ],
  [
    "design-03426",
    [
      "&:where(:has(#body-inner)) .tt-form-creative .tt-form-btn-inside button[type=\"submit\"]:hover"
    ]
  ],
  [
    "design-03427",
    [
      "&:where(:has(#body-inner)) .tt-form-creative.tt-form-tilted .tt-form-group"
    ]
  ],
  [
    "design-03428",
    [
      "&:where(:has(#body-inner)) .tt-form-creative.tt-form-tilted .tt-form-group:nth-child(2n+1)"
    ]
  ],
  [
    "design-03429",
    [
      "&:where(:has(#body-inner)) .tt-form-creative.tt-form-tilted .tt-form-group:nth-child(2n)"
    ]
  ],
  [
    "design-03430",
    [
      "&:where(:has(#body-inner)) .tt-form-creative.tt-form-counter"
    ]
  ],
  [
    "design-03431",
    [
      "&:where(:has(#body-inner)) .tt-form-creative.tt-form-counter:has(.tt-form-group:nth-of-type(2)) .tt-form-group"
    ]
  ],
  [
    "design-03432",
    [
      "&:where(:has(#body-inner)) .tt-form-creative.tt-form-counter:has(.tt-form-group:nth-of-type(2)) .tt-form-group"
    ]
  ],
  [
    "design-03433",
    [
      "&:where(:has(#body-inner)) .tt-form-creative.tt-form-counter:has(.tt-form-group:nth-of-type(2)) .tt-form-group::before"
    ]
  ],
  [
    "design-03434",
    [
      "&:where(:has(#body-inner)) .tt-form-creative.tt-form-counter:has(.tt-form-group:nth-of-type(2)) .tt-form-group::before"
    ]
  ],
  [
    "design-03435",
    [
      "&:where(:has(#body-inner)) .tt-form-creative.tt-form-counter:has(.tt-form-group:nth-of-type(2)) .tt-form-group::before"
    ]
  ],
  [
    "design-03436",
    [
      "&:where(:has(#body-inner)) .tt-form-creative.tt-form-counter:has(.tt-form-group:nth-of-type(2)) .tt-form-group::before"
    ]
  ],
  [
    "design-03437",
    [
      "&:where(:has(#body-inner)) .tt-form-creative.tt-form-counter:has(.tt-form-group:nth-of-type(2)) .tt-form-group::before"
    ]
  ],
  [
    "design-03438",
    [
      "&:where(:has(#body-inner)) .tt-form-creative.tt-form-counter:has(.tt-form-group:nth-of-type(2)) .tt-form-group::before"
    ]
  ],
  [
    "design-03439",
    [
      "&:where(:has(#body-inner)) .tt-form-sm .tt-form-control"
    ]
  ],
  [
    "design-03440",
    [
      "&:where(:has(#body-inner)) .tt-form-sm .tt-form-control:not(textarea):not([size])"
    ]
  ],
  [
    "design-03441",
    [
      "&:where(:has(#body-inner)) .tt-form-sm ::placeholder"
    ]
  ],
  [
    "design-03442",
    [
      "&:where(:has(#body-inner)) .tt-form-sm ::-webkit-input-placeholder"
    ]
  ],
  [
    "design-03443",
    [
      "&:where(:has(#body-inner)) .tt-form-sm label:not(.tt-btn)"
    ]
  ],
  [
    "design-03444",
    [
      "&:where(:has(#body-inner)) .tt-form-sm .tt-btn"
    ]
  ],
  [
    "design-03445",
    [
      "&:where(:has(#body-inner)) .tt-form-sm .tt-btn"
    ]
  ],
  [
    "design-03446",
    [
      "&:where(:has(#body-inner)) .tt-form-sm .tt-form-btn-inside button"
    ]
  ],
  [
    "design-03447",
    [
      "&:where(:has(#body-inner)) .tt-form-sm.tt-form-creative .tt-form-group"
    ]
  ],
  [
    "design-03448",
    [
      "&:where(:has(#body-inner)) .tt-form-sm.tt-form-creative .tt-form-group"
    ]
  ],
  [
    "design-03449",
    [
      "&:where(:has(#body-inner)) .tt-form-sm.tt-form-creative .tt-form-group"
    ]
  ],
  [
    "design-03450",
    [
      "&:where(:has(#body-inner)) .tt-form-sm.tt-form-creative .tt-form-group label"
    ]
  ],
  [
    "design-03451",
    [
      "&:where(:has(#body-inner)) .tt-form-sm.tt-form-creative .tt-form-btn-inside button[type=\"submit\"]"
    ]
  ],
  [
    "design-03452",
    [
      "&:where(:has(#body-inner)) .tt-form-lg .tt-form-control:not(textarea):not([size])"
    ]
  ],
  [
    "design-03453",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-form-lg .tt-form-group label:not(.tt-btn) }"
    ]
  ],
  [
    "design-03454",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-form-lg .tt-form-control }"
    ]
  ],
  [
    "design-03455",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-form-lg ::placeholder }"
    ]
  ],
  [
    "design-03456",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-form-lg ::-webkit-input-placeholder }"
    ]
  ],
  [
    "design-03457",
    [
      "&:where(:has(#body-inner)) .tt-form-lg .tt-btn"
    ]
  ],
  [
    "design-03458",
    [
      "&:where(:has(#body-inner)) .tt-form-lg .tt-form-btn-inside button"
    ]
  ],
  [
    "design-03459",
    [
      "&:where(:has(#body-inner)) .tt-form-lg.tt-form-creative .tt-form-group"
    ]
  ],
  [
    "design-03460",
    [
      "&:where(:has(#body-inner)) .tt-form-lg.tt-form-creative .tt-form-group"
    ]
  ],
  [
    "design-03461",
    [
      "&:where(:has(#body-inner)) .tt-form-lg.tt-form-creative .tt-form-group"
    ]
  ],
  [
    "design-03462",
    [
      "&:where(:has(#body-inner)) .tt-form-lg.tt-form-creative .tt-form-group label"
    ]
  ],
  [
    "design-03463",
    [
      "&:where(:has(#body-inner)) ul.list-unstyled"
    ]
  ],
  [
    "design-03464",
    [
      "&:where(:has(#body-inner)) ul.list-unstyled"
    ]
  ],
  [
    "design-03465",
    [
      "&:where(:has(#body-inner)) ul.tt-list"
    ]
  ],
  [
    "design-03466",
    [
      "&:where(:has(#body-inner)) ul.tt-list"
    ]
  ],
  [
    "design-03467",
    [
      "&:where(:has(#body-inner)) ul.tt-list"
    ]
  ],
  [
    "design-03468",
    [
      "&:where(:has(#body-inner)) ul.tt-list > li"
    ]
  ],
  [
    "design-03469",
    [
      "&:where(:has(#body-inner)) ul.tt-list a",
      "&:where(:has(#body-inner)) ul.tt-list a:hover",
      "&:where(:has(#body-inner)) ul.tt-list a:focus"
    ]
  ],
  [
    "design-03470",
    [
      "&:where(:has(#body-inner)) ul.list-inline"
    ]
  ],
  [
    "design-03471",
    [
      "&:where(:has(#body-inner)) ul.list-inline"
    ]
  ],
  [
    "design-03472",
    [
      "&:where(:has(#body-inner)) ul.list-inline"
    ]
  ],
  [
    "design-03473",
    [
      "&:where(:has(#body-inner)) ul.list-inline > li"
    ]
  ],
  [
    "design-03474",
    [
      "&:where(:has(#body-inner)) ul.list-inline > li"
    ]
  ],
  [
    "design-03475",
    [
      "&:where(:has(#body-inner)) ul.list-inline > li"
    ]
  ],
  [
    "design-03476",
    [
      "&:where(:has(#body-inner)) .tt-heading"
    ]
  ],
  [
    "design-03477",
    [
      "&:where(:has(#body-inner)) .tt-heading"
    ]
  ],
  [
    "design-03478",
    [
      "&:where(:has(#body-inner)) .tt-heading"
    ]
  ],
  [
    "design-03479",
    [
      "&:where(:has(#body-inner)) .tt-heading"
    ]
  ],
  [
    "design-03480",
    [
      "&:where(:has(#body-inner)) .tt-heading"
    ]
  ],
  [
    "design-03481",
    [
      "@media (max-width: 991px) { &:where(:has(#body-inner)) .tt-heading }"
    ]
  ],
  [
    "design-03482",
    [
      "&:where(:has(#body-inner)) .tt-wrap .tt-heading"
    ]
  ],
  [
    "design-03483",
    [
      "&:where(:has(#body-inner)) .tt-wrap .tt-heading"
    ]
  ],
  [
    "design-03484",
    [
      "&:where(:has(#body-inner)) .tt-heading-title"
    ]
  ],
  [
    "design-03485",
    [
      "&:where(:has(#body-inner)) .tt-heading-title"
    ]
  ],
  [
    "design-03486",
    [
      "&:where(:has(#body-inner)) .tt-heading-title"
    ]
  ],
  [
    "design-03487",
    [
      "&:where(:has(#body-inner)) .tt-heading-title"
    ]
  ],
  [
    "design-03488",
    [
      "&:where(:has(#body-inner)) .tt-heading-title"
    ]
  ],
  [
    "design-03489",
    [
      "@media (max-width: 991px) { &:where(:has(#body-inner)) .tt-heading-title br }"
    ]
  ],
  [
    "design-03490",
    [
      "&:where(:has(#body-inner)) .tt-heading-title a",
      "&:where(:has(#body-inner)) .tt-heading-title a:hover",
      "&:where(:has(#body-inner)) .tt-heading-title a:focus"
    ]
  ],
  [
    "design-03491",
    [
      "&:where(:has(#body-inner)) .tt-heading-subtitle"
    ]
  ],
  [
    "design-03492",
    [
      "&:where(:has(#body-inner)) .tt-heading-subtitle"
    ]
  ],
  [
    "design-03493",
    [
      "&:where(:has(#body-inner)) .tt-heading-subtitle"
    ]
  ],
  [
    "design-03494",
    [
      "&:where(:has(#body-inner)) .tt-heading-subtitle"
    ]
  ],
  [
    "design-03495",
    [
      "&:where(:has(#body-inner)) .tt-heading-subtitle"
    ]
  ],
  [
    "design-03496",
    [
      "&:where(:has(#body-inner)) .tt-heading-subtitle"
    ]
  ],
  [
    "design-03497",
    [
      "@media (max-width: 991px) { &:where(:has(#body-inner)) .tt-heading-subtitle br }"
    ]
  ],
  [
    "design-03498",
    [
      "&:where(:has(#body-inner)) .tt-heading-title + .tt-heading-subtitle"
    ]
  ],
  [
    "design-03499",
    [
      "&:where(:has(#body-inner)) .tt-heading-title + p",
      "&:where(:has(#body-inner)) .tt-heading-subtitle + p"
    ]
  ],
  [
    "design-03500",
    [
      "&:where(:has(#body-inner)) .tt-heading > p:last-child"
    ]
  ],
  [
    "design-03501",
    [
      "@media (max-width: 991px) { &:where(:has(#body-inner)) .tt-heading p br }"
    ]
  ],
  [
    "design-03502",
    [
      "&:where(:has(#body-inner)) .tt-heading.tt-heading-center"
    ]
  ],
  [
    "design-03503",
    [
      "&:where(:has(#body-inner)) .tt-heading.tt-heading-center"
    ]
  ],
  [
    "design-03504",
    [
      "&:where(:has(#body-inner)) .tt-heading.tt-heading-center"
    ]
  ],
  [
    "design-03505",
    [
      "&:where(:has(#body-inner)) .tt-heading.tt-heading-center"
    ]
  ],
  [
    "design-03506",
    [
      "&:where(:has(#body-inner)) .tt-heading.tt-heading-center"
    ]
  ],
  [
    "design-03507",
    [
      "&:where(:has(#body-inner)) .tt-heading.tt-heading-xsm .tt-heading-title"
    ]
  ],
  [
    "design-03508",
    [
      "&:where(:has(#body-inner)) .tt-heading.tt-heading-xsm .tt-heading-subtitle"
    ]
  ],
  [
    "design-03509",
    [
      "&:where(:has(#body-inner)) .tt-heading.tt-heading-sm .tt-heading-title"
    ]
  ],
  [
    "design-03510",
    [
      "&:where(:has(#body-inner)) .tt-heading.tt-heading-sm .tt-heading-subtitle"
    ]
  ],
  [
    "design-03511",
    [
      "&:where(:has(#body-inner)) .tt-heading.tt-heading-lg .tt-heading-title"
    ]
  ],
  [
    "design-03512",
    [
      "&:where(:has(#body-inner)) .tt-heading.tt-heading-xlg .tt-heading-title"
    ]
  ],
  [
    "design-03513",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-heading.tt-heading-xlg .tt-heading-title + p }",
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-heading.tt-heading-xlg .tt-heading-subtitle + p }"
    ]
  ],
  [
    "design-03514",
    [
      "&:where(:has(#body-inner)) .tt-heading.tt-heading-xxlg .tt-heading-title"
    ]
  ],
  [
    "design-03515",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-heading.tt-heading-xxlg .tt-heading-title + p }",
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-heading.tt-heading-xxlg .tt-heading-subtitle + p }"
    ]
  ],
  [
    "design-03516",
    [
      "&:where(:has(#body-inner)) .tt-heading.tt-heading-xxxlg .tt-heading-title"
    ]
  ],
  [
    "design-03517",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-heading.tt-heading-xxxlg .tt-heading-title + p }",
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-heading.tt-heading-xxxlg .tt-heading-subtitle + p }"
    ]
  ],
  [
    "design-03518",
    [
      "&:where(:has(#body-inner)) .tt-split-box"
    ]
  ],
  [
    "design-03519",
    [
      "&:where(:has(#body-inner)) .tt-wrap .tt-split-box"
    ]
  ],
  [
    "design-03520",
    [
      "&:where(:has(#body-inner)) .tt-split-box [class*=\"tt-col-\"]"
    ]
  ],
  [
    "design-03521",
    [
      "&:where(:has(#body-inner)) .tt-wrap .tt-split-box [class*=\"tt-col-\"]"
    ]
  ],
  [
    "design-03522",
    [
      "&:where(:has(#body-inner)) .tt-wrap .tt-split-box [class*=\"tt-col-\"]"
    ]
  ],
  [
    "design-03523",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-split-box-content }"
    ]
  ],
  [
    "design-03524",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-wrap .tt-split-box-content }"
    ]
  ],
  [
    "design-03525",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-split-box-content }"
    ]
  ],
  [
    "design-03526",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-wrap .tt-split-box-content }"
    ]
  ],
  [
    "design-03527",
    [
      "&:where(:has(#body-inner)) .tt-split-box-title"
    ]
  ],
  [
    "design-03528",
    [
      "&:where(:has(#body-inner)) .tt-split-box-title"
    ]
  ],
  [
    "design-03529",
    [
      "&:where(:has(#body-inner)) .tt-split-box-title"
    ]
  ],
  [
    "design-03530",
    [
      "&:where(:has(#body-inner)) .tt-split-box-title"
    ]
  ],
  [
    "design-03531",
    [
      "&:where(:has(#body-inner)) .tt-split-box-title"
    ]
  ],
  [
    "design-03532",
    [
      "&:where(:has(#body-inner)) .tt-split-box-title"
    ]
  ],
  [
    "design-03533",
    [
      "&:where(:has(#body-inner)) .tt-split-box-text"
    ]
  ],
  [
    "design-03534",
    [
      "&:where(:has(#body-inner)) .tt-split-box-image"
    ]
  ],
  [
    "design-03535",
    [
      "&:where(:has(#body-inner)) .tt-split-box-image"
    ]
  ],
  [
    "design-03536",
    [
      "&:where(:has(#body-inner)) .tt-split-box-image-inner"
    ]
  ],
  [
    "design-03537",
    [
      "&:where(:has(#body-inner)) .tt-split-box-image img"
    ]
  ],
  [
    "design-03538",
    [
      "&:where(:has(#body-inner)) .tt-split-box-image img"
    ]
  ],
  [
    "design-03539",
    [
      "&:where(:has(#body-inner)) .tt-split-box-image img"
    ]
  ],
  [
    "design-03540",
    [
      "&:where(:has(#body-inner)) .tt-split-box[class*=\"tt-spx-image-\"] .tt-split-box-image"
    ]
  ],
  [
    "design-03541",
    [
      "&:where(:has(#body-inner)) .tt-split-box[class*=\"tt-spx-image-\"] .tt-split-box-image::after"
    ]
  ],
  [
    "design-03542",
    [
      "&:where(:has(#body-inner)) .tt-split-box[class*=\"tt-spx-image-\"] .tt-split-box-image::after"
    ]
  ],
  [
    "design-03543",
    [
      "&:where(:has(#body-inner)) .tt-split-box[class*=\"tt-spx-image-\"] .tt-split-box-image::after"
    ]
  ],
  [
    "design-03544",
    [
      "&:where(:has(#body-inner)) .tt-split-box.tt-spx-image-1 .tt-split-box-image::after"
    ]
  ],
  [
    "design-03545",
    [
      "&:where(:has(#body-inner)) .tt-split-box.tt-spx-image-2 .tt-split-box-image::after"
    ]
  ],
  [
    "design-03546",
    [
      "&:where(:has(#body-inner)) .tt-split-box.tt-spx-image-3 .tt-split-box-image::after"
    ]
  ],
  [
    "design-03547",
    [
      "&:where(:has(#body-inner)) .tt-split-box[class*=\"tt-spx-image-\"] .tt-split-box-image-inner"
    ]
  ],
  [
    "design-03548",
    [
      "&:where(:has(#body-inner)) .tt-split-box[class*=\"tt-spx-image-\"] .tt-split-box-image-inner"
    ]
  ],
  [
    "design-03549",
    [
      "&:where(:has(#body-inner)) .tt-split-box[class*=\"tt-spx-image-\"] .tt-split-box-image img"
    ]
  ],
  [
    "design-03550",
    [
      "&:where(:has(#body-inner)) .tt-split-box[class*=\"tt-spx-image-\"] .tt-split-box-image img"
    ]
  ],
  [
    "design-03551",
    [
      "&:where(:has(#body-inner)) .tt-split-box[class*=\"tt-spx-image-\"] .tt-split-box-image img"
    ]
  ],
  [
    "design-03552",
    [
      "&:where(:has(#body-inner)) .tt-split-box[class*=\"tt-spx-image-\"] .tt-split-box-image img"
    ]
  ],
  [
    "design-03553",
    [
      "&:where(:has(#body-inner)) .tt-split-box[class*=\"tt-spx-image-\"] .tt-split-box-image img"
    ]
  ],
  [
    "design-03554",
    [
      "&:where(:has(#body-inner)) .tt-split-box[class*=\"tt-spx-image-\"] .tt-split-box-image img"
    ]
  ],
  [
    "design-03555",
    [
      "&:where(:has(#body-inner)) .tt-split-box[class*=\"tt-spx-image-\"] .tt-split-box-image img"
    ]
  ],
  [
    "design-03556",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-split-box[class*=\"tt-spx-image-\"] .tt-split-box-content }"
    ]
  ],
  [
    "design-03557",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-split-box[class*=\"tt-spx-image-\"] .tt-split-box-content }"
    ]
  ],
  [
    "design-03558",
    [
      "&:where(:has(#body-inner)) .tt-split-box[class*=\"tt-spx-image-\"] .tt-anim-zoomin-wrap",
      "&:where(:has(#body-inner)) .tt-split-box[class*=\"tt-spx-image-\"] .tt-image-parallax-wrap",
      "&:where(:has(#body-inner)) .tt-split-box[class*=\"tt-spx-image-\"] .tt-image-parallax-inner"
    ]
  ],
  [
    "design-03559",
    [
      "&:where(:has(#body-inner)) .tt-split-box[class*=\"tt-spx-image-\"] .tt-anim-zoomin-wrap",
      "&:where(:has(#body-inner)) .tt-split-box[class*=\"tt-spx-image-\"] .tt-image-parallax-wrap",
      "&:where(:has(#body-inner)) .tt-split-box[class*=\"tt-spx-image-\"] .tt-image-parallax-inner"
    ]
  ],
  [
    "design-03560",
    [
      "&:where(:has(#body-inner)) .tt-split-box.tt-spx-reverse .tt-row"
    ]
  ],
  [
    "design-03561",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-wrap .tt-split-box.tt-spx-reverse .tt-split-box-content }"
    ]
  ],
  [
    "design-03562",
    [
      "&:where(:has(#body-inner)) .tt-split-box.tt-spx-boxed"
    ]
  ],
  [
    "design-03563",
    [
      "&:where(:has(#body-inner)) .tt-split-box.tt-spx-boxed .tt-split-box-image"
    ]
  ],
  [
    "design-03564",
    [
      "&:where(:has(#body-inner)) .tt-split-box.tt-spx-boxed .tt-split-box-image"
    ]
  ],
  [
    "design-03565",
    [
      "&:where(:has(#body-inner)) .tt-split-box.tt-spx-boxed .tt-split-box-image"
    ]
  ],
  [
    "design-03566",
    [
      "&:where(:has(#body-inner)) .tt-split-box.tt-spx-boxed .tt-split-box-image-inner"
    ]
  ],
  [
    "design-03567",
    [
      "&:where(:has(#body-inner)) .tt-split-box.tt-spx-boxed .tt-split-box-image-inner"
    ]
  ],
  [
    "design-03568",
    [
      "&:where(:has(#body-inner)) .tt-split-box.tt-spx-tilted-1 .tt-split-box-image"
    ]
  ],
  [
    "design-03569",
    [
      "&:where(:has(#body-inner)) .tt-split-box.tt-spx-tilted-2 .tt-split-box-image"
    ]
  ],
  [
    "design-03570",
    [
      "&:where(:has(#body-inner)) .tt-split-box.tt-spx-border-radius .tt-split-box-image",
      "&:where(:has(#body-inner)) .tt-split-box.tt-spx-border-radius .tt-split-box-image-inner"
    ]
  ],
  [
    "design-03571",
    [
      "&:where(:has(#body-inner)) .tt-accordion-item"
    ]
  ],
  [
    "design-03572",
    [
      "&:where(:has(#body-inner)) .tt-accordion-heading"
    ]
  ],
  [
    "design-03573",
    [
      "&:where(:has(#body-inner)) .tt-accordion-heading"
    ]
  ],
  [
    "design-03574",
    [
      "&:where(:has(#body-inner)) .tt-accordion-heading"
    ]
  ],
  [
    "design-03575",
    [
      "&:where(:has(#body-inner)) .tt-accordion-heading"
    ]
  ],
  [
    "design-03576",
    [
      "&:where(:has(#body-inner)) .tt-accordion-heading"
    ]
  ],
  [
    "design-03577",
    [
      "&:where(:has(#body-inner)) .tt-acc-head"
    ]
  ],
  [
    "design-03578",
    [
      "&:where(:has(#body-inner)) .tt-acc-head"
    ]
  ],
  [
    "design-03579",
    [
      "&:where(:has(#body-inner)) .tt-acc-head"
    ]
  ],
  [
    "design-03580",
    [
      "@media (min-width: 1600px) { &:where(:has(#body-inner)) .tt-acc-head }"
    ]
  ],
  [
    "design-03581",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-acc-head }"
    ]
  ],
  [
    "design-03582",
    [
      "&:where(:has(#body-inner)) .tt-wrap .tt-acc-head"
    ]
  ],
  [
    "design-03583",
    [
      "&:where(:has(#body-inner)) .tt-acc-head-inner"
    ]
  ],
  [
    "design-03584",
    [
      "&:where(:has(#body-inner)) .tt-acc-head-title"
    ]
  ],
  [
    "design-03585",
    [
      "&:where(:has(#body-inner)) .tt-acc-head-title"
    ]
  ],
  [
    "design-03586",
    [
      "&:where(:has(#body-inner)) .tt-acc-head-title"
    ]
  ],
  [
    "design-03587",
    [
      "&:where(:has(#body-inner)) .tt-acc-head-title"
    ]
  ],
  [
    "design-03588",
    [
      "&:where(:has(#body-inner)) .tt-acc-head-title"
    ]
  ],
  [
    "design-03589",
    [
      "&:where(:has(#body-inner)) .tt-acc-head-title"
    ]
  ],
  [
    "design-03590",
    [
      "&:where(:has(#body-inner)) .tt-acc-head-subtext"
    ]
  ],
  [
    "design-03591",
    [
      "&:where(:has(#body-inner)) .tt-acc-head-subtext"
    ]
  ],
  [
    "design-03592",
    [
      "&:where(:has(#body-inner)) .tt-acc-head-subtext"
    ]
  ],
  [
    "design-03593",
    [
      "&:where(:has(#body-inner)) .tt-acc-head-subtext"
    ]
  ],
  [
    "design-03594",
    [
      "&:where(:has(#body-inner)) .tt-acc-head-subtext"
    ]
  ],
  [
    "design-03595",
    [
      "&:where(:has(#body-inner)) .tt-accordion-caret"
    ]
  ],
  [
    "design-03596",
    [
      "@media (min-width: 1600px) { &:where(:has(#body-inner)) .tt-accordion-caret }"
    ]
  ],
  [
    "design-03597",
    [
      "&:where(:has(#body-inner)) .tt-wrap .tt-accordion-caret"
    ]
  ],
  [
    "design-03598",
    [
      "&:where(:has(#body-inner)) .tt-accordion-caret-inner"
    ]
  ],
  [
    "design-03599",
    [
      "&:where(:has(#body-inner)) .tt-accordion-caret-inner"
    ]
  ],
  [
    "design-03600",
    [
      "&:where(:has(#body-inner)) .tt-accordion-caret-inner"
    ]
  ],
  [
    "design-03601",
    [
      "&:where(:has(#body-inner)) .tt-accordion-caret-inner"
    ]
  ],
  [
    "design-03602",
    [
      "&:where(:has(#body-inner)) .tt-accordion-caret-inner"
    ]
  ],
  [
    "design-03603",
    [
      "&:where(:has(#body-inner)) .tt-accordion-caret-inner"
    ]
  ],
  [
    "design-03604",
    [
      "&:where(:has(#body-inner)) .tt-accordion-caret-inner"
    ]
  ],
  [
    "design-03605",
    [
      "&:where(:has(#body-inner)) .tt-accordion-caret-inner"
    ]
  ],
  [
    "design-03606",
    [
      "&:where(:has(#body-inner)) .tt-accordion-caret-inner"
    ]
  ],
  [
    "design-03607",
    [
      "&:where(:has(#body-inner)) .tt-accordion-caret-inner"
    ]
  ],
  [
    "design-03608",
    [
      "&:where(:has(#body-inner)) .tt-accordion-caret-inner"
    ]
  ],
  [
    "design-03609",
    [
      "&:where(:has(#body-inner)) .tt-accordion-caret svg"
    ]
  ],
  [
    "design-03610",
    [
      "&:where(:has(#body-inner)) .tt-accordion-item .tt-accordion-caret-inner > *"
    ]
  ],
  [
    "design-03611",
    [
      "&:where(:has(#body-inner)) .tt-accordion-item.active .tt-accordion-caret-inner > *"
    ]
  ],
  [
    "design-03612",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-counter .tt-accordion-item"
    ]
  ],
  [
    "design-03613",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-counter .tt-acc-head-inner"
    ]
  ],
  [
    "design-03614",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-counter .tt-acc-head-inner::before"
    ]
  ],
  [
    "design-03615",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-counter .tt-acc-head-inner::before"
    ]
  ],
  [
    "design-03616",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-counter .tt-acc-head-inner::before"
    ]
  ],
  [
    "design-03617",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-counter .tt-acc-head-inner::before"
    ]
  ],
  [
    "design-03618",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-counter .tt-acc-head-inner::before"
    ]
  ],
  [
    "design-03619",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-counter .tt-acc-head-inner::before"
    ]
  ],
  [
    "design-03620",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-counter .tt-acc-head-inner::before"
    ]
  ],
  [
    "design-03621",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-counter .tt-acc-head-inner::before"
    ]
  ],
  [
    "design-03622",
    [
      "@media (min-width: 1600px) { &:where(:has(#body-inner)) .tt-accordion.tt-acc-counter .tt-accordion-content }"
    ]
  ],
  [
    "design-03623",
    [
      "@media (min-width: 1600px) { &:where(:has(#body-inner)) .tt-accordion.tt-acc-counter .tt-accordion-content }"
    ]
  ],
  [
    "design-03624",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-wrap .tt-accordion.tt-acc-counter .tt-accordion-content }"
    ]
  ],
  [
    "design-03625",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-wrap .tt-accordion.tt-acc-counter .tt-accordion-content }"
    ]
  ],
  [
    "design-03626",
    [
      "&:where(:has(#body-inner)) .tt-accordion-content"
    ]
  ],
  [
    "design-03627",
    [
      "&:where(:has(#body-inner)) .tt-wrap .tt-accordion-content"
    ]
  ],
  [
    "design-03628",
    [
      "@media (min-width: 1600px) { &:where(:has(#body-inner)) .tt-accordion-content }"
    ]
  ],
  [
    "design-03629",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-accordion-content }"
    ]
  ],
  [
    "design-03630",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-accordion-content }"
    ]
  ],
  [
    "design-03631",
    [
      "&:where(:has(#body-inner)) .tt-accordion-content:not(.is-open)"
    ]
  ],
  [
    "design-03632",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-borders .tt-accordion-item"
    ]
  ],
  [
    "design-03633",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-borders .tt-accordion-heading"
    ]
  ],
  [
    "design-03634",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-borders .tt-accordion-heading"
    ]
  ],
  [
    "design-03635",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-borders .tt-acc-head"
    ]
  ],
  [
    "design-03636",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-borders .tt-acc-head"
    ]
  ],
  [
    "design-03637",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-borders .tt-accordion-item:last-child"
    ]
  ],
  [
    "design-03638",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-boxed"
    ]
  ],
  [
    "design-03639",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-boxed"
    ]
  ],
  [
    "design-03640",
    [
      "&:where(:has(#body-inner)) .tt-wrap .tt-accordion.tt-acc-boxed"
    ]
  ],
  [
    "design-03641",
    [
      "&:where(:has(#body-inner)) .tt-wrap .tt-accordion.tt-acc-boxed"
    ]
  ],
  [
    "design-03642",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-boxed .tt-accordion-item"
    ]
  ],
  [
    "design-03643",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-boxed .tt-accordion-item"
    ]
  ],
  [
    "design-03644",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-boxed .tt-accordion-item"
    ]
  ],
  [
    "design-03645",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-boxed .tt-accordion-item"
    ]
  ],
  [
    "design-03646",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-boxed .tt-accordion-item",
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-boxed.tt-acc-tilted .tt-accordion-item"
    ]
  ],
  [
    "design-03647",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-boxed .tt-acc-head"
    ]
  ],
  [
    "design-03648",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-boxed .tt-accordion-caret"
    ]
  ],
  [
    "design-03649",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-boxed .tt-accordion-content"
    ]
  ],
  [
    "design-03650",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-boxed .tt-accordion-content"
    ]
  ],
  [
    "design-03651",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-boxed .tt-accordion-content"
    ]
  ],
  [
    "design-03652",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-accordion.tt-acc-boxed .tt-acc-head }"
    ]
  ],
  [
    "design-03653",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-accordion.tt-acc-boxed .tt-accordion-caret }"
    ]
  ],
  [
    "design-03654",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-accordion.tt-acc-boxed .tt-accordion-content }"
    ]
  ],
  [
    "design-03655",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-accordion.tt-acc-boxed .tt-accordion-content }"
    ]
  ],
  [
    "design-03656",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-tilted .tt-accordion-item"
    ]
  ],
  [
    "design-03657",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-tilted .tt-accordion-item:nth-child(2n+1)"
    ]
  ],
  [
    "design-03658",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-tilted .tt-accordion-item:nth-child(2n)"
    ]
  ],
  [
    "design-03659",
    [
      "&:where(:has(#body-inner)) .tt-wrap .tt-accordion.tt-acc-tilted .tt-accordion-item:nth-child(2n+1)"
    ]
  ],
  [
    "design-03660",
    [
      "&:where(:has(#body-inner)) .tt-wrap .tt-accordion.tt-acc-tilted .tt-accordion-item:nth-child(2n)"
    ]
  ],
  [
    "design-03661",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-tilted .tt-accordion-content"
    ]
  ],
  [
    "design-03662",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-tilted.tt-acc-borders"
    ]
  ],
  [
    "design-03663",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-tilted.tt-acc-borders"
    ]
  ],
  [
    "design-03664",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-tilted.tt-acc-borders"
    ]
  ],
  [
    "design-03665",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-tilted.tt-acc-borders .tt-accordion-item"
    ]
  ],
  [
    "design-03666",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-tilted.tt-acc-borders .tt-accordion-item"
    ]
  ],
  [
    "design-03667",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-tilted.tt-acc-borders .tt-accordion-item"
    ]
  ],
  [
    "design-03668",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-tilted.tt-acc-borders .tt-accordion-item"
    ]
  ],
  [
    "design-03669",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-tilted.tt-acc-borders .tt-accordion-item"
    ]
  ],
  [
    "design-03670",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-tilted.tt-acc-borders .tt-accordion-item"
    ]
  ],
  [
    "design-03671",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-tilted.tt-acc-borders .tt-accordion-item"
    ]
  ],
  [
    "design-03672",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-tilted.tt-acc-borders .tt-accordion-heading"
    ]
  ],
  [
    "design-03673",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-sm .tt-acc-head-title"
    ]
  ],
  [
    "design-03674",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-sm .tt-accordion-caret-inner"
    ]
  ],
  [
    "design-03675",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-lg .tt-acc-head-title"
    ]
  ],
  [
    "design-03676",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-lg .tt-acc-head-title"
    ]
  ],
  [
    "design-03677",
    [
      "@media (min-width: 1200px) { &:where(:has(#body-inner)) .tt-accordion.tt-acc-lg.tt-acc-borders .tt-acc-head }",
      "@media (min-width: 1200px) { &:where(:has(#body-inner)) .tt-accordion.tt-acc-lg.tt-acc-boxed .tt-acc-head }"
    ]
  ],
  [
    "design-03678",
    [
      "@media (min-width: 1200px) { &:where(:has(#body-inner)) .tt-accordion.tt-acc-lg.tt-acc-borders .tt-acc-head }",
      "@media (min-width: 1200px) { &:where(:has(#body-inner)) .tt-accordion.tt-acc-lg.tt-acc-boxed .tt-acc-head }"
    ]
  ],
  [
    "design-03679",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-accordion.tt-acc-lg .tt-accordion-caret-inner }"
    ]
  ],
  [
    "design-03680",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-xlg .tt-acc-head-title"
    ]
  ],
  [
    "design-03681",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-xlg .tt-acc-head-title"
    ]
  ],
  [
    "design-03682",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-xlg .tt-accordion-caret-inner"
    ]
  ],
  [
    "design-03683",
    [
      "@media (min-width: 1200px) { &:where(:has(#body-inner)) .tt-accordion.tt-acc-xlg.tt-acc-borders .tt-acc-head }",
      "@media (min-width: 1200px) { &:where(:has(#body-inner)) .tt-accordion.tt-acc-xlg.tt-acc-boxed .tt-acc-head }"
    ]
  ],
  [
    "design-03684",
    [
      "@media (min-width: 1200px) { &:where(:has(#body-inner)) .tt-accordion.tt-acc-xlg.tt-acc-borders .tt-acc-head }",
      "@media (min-width: 1200px) { &:where(:has(#body-inner)) .tt-accordion.tt-acc-xlg.tt-acc-boxed .tt-acc-head }"
    ]
  ],
  [
    "design-03685",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-accordion.tt-acc-xlg .tt-accordion-caret-inner }"
    ]
  ],
  [
    "design-03686",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-xxlg .tt-acc-head-title"
    ]
  ],
  [
    "design-03687",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-xxlg .tt-acc-head-title"
    ]
  ],
  [
    "design-03688",
    [
      "&:where(:has(#body-inner)) .tt-accordion.tt-acc-xxlg .tt-accordion-caret-inner"
    ]
  ],
  [
    "design-03689",
    [
      "@media (min-width: 1200px) { &:where(:has(#body-inner)) .tt-accordion.tt-acc-xxlg.tt-acc-borders .tt-acc-head }"
    ]
  ],
  [
    "design-03690",
    [
      "@media (min-width: 1200px) { &:where(:has(#body-inner)) .tt-accordion.tt-acc-xxlg.tt-acc-borders .tt-acc-head }"
    ]
  ],
  [
    "design-03691",
    [
      "@media (min-width: 1200px) { &:where(:has(#body-inner)) .tt-accordion.tt-acc-xxlg.tt-acc-boxed .tt-acc-head }"
    ]
  ],
  [
    "design-03692",
    [
      "@media (min-width: 1200px) { &:where(:has(#body-inner)) .tt-accordion.tt-acc-xxlg .tt-accordion-caret }"
    ]
  ],
  [
    "design-03693",
    [
      "@media (min-width: 1200px) { &:where(:has(#body-inner)) .tt-accordion.tt-acc-xxlg.tt-acc-boxed .tt-accordion-content }"
    ]
  ],
  [
    "design-03694",
    [
      "@media (min-width: 1200px) { &:where(:has(#body-inner)) .tt-accordion.tt-acc-xxlg.tt-acc-boxed .tt-accordion-content }"
    ]
  ],
  [
    "design-03695",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-accordion.tt-acc-xxlg .tt-accordion-caret-inner }"
    ]
  ],
  [
    "design-03696",
    [
      "&:where(:has(#body-inner)) .tt-avards-list"
    ]
  ],
  [
    "design-03697",
    [
      "&:where(:has(#body-inner)) .tt-avlist-item"
    ]
  ],
  [
    "design-03698",
    [
      "&:where(:has(#body-inner)) .tt-avlist-item"
    ]
  ],
  [
    "design-03699",
    [
      "&:where(:has(#body-inner)) .tt-avlist-item"
    ]
  ],
  [
    "design-03700",
    [
      "&:where(:has(#body-inner)) .tt-avlist-item"
    ]
  ],
  [
    "design-03701",
    [
      "&:where(:has(#body-inner)) .tt-avlist-item"
    ]
  ],
  [
    "design-03702",
    [
      "&:where(:has(#body-inner)) .tt-avlist-item"
    ]
  ],
  [
    "design-03703",
    [
      "&:where(:has(#body-inner)) .tt-avlist-item"
    ]
  ],
  [
    "design-03704",
    [
      "&:where(:has(#body-inner)) .tt-avlist-item"
    ]
  ],
  [
    "design-03705",
    [
      "&:where(:has(#body-inner)) .tt-avlist-item"
    ]
  ],
  [
    "design-03706",
    [
      "&:where(:has(#body-inner)) .tt-avlist-item"
    ]
  ],
  [
    "design-03707",
    [
      "&:where(:has(#body-inner)) .tt-avlist-item:last-child"
    ]
  ],
  [
    "design-03708",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-avlist-item:focus"
    ]
  ],
  [
    "design-03709",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-avlist-item:hover",
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-avlist-item:active"
    ]
  ],
  [
    "design-03710",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-avlist-item:hover *",
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-avlist-item:focus *"
    ]
  ],
  [
    "design-03711",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-avlist-item::before"
    ]
  ],
  [
    "design-03712",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-avlist-item::before"
    ]
  ],
  [
    "design-03713",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-avlist-item::before"
    ]
  ],
  [
    "design-03714",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-avlist-item::before"
    ]
  ],
  [
    "design-03715",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-avlist-item::before"
    ]
  ],
  [
    "design-03716",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-avlist-item::before"
    ]
  ],
  [
    "design-03717",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-avlist-item::before"
    ]
  ],
  [
    "design-03718",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-avlist-item::before"
    ]
  ],
  [
    "design-03719",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-avlist-item::before"
    ]
  ],
  [
    "design-03720",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-avlist-item::before"
    ]
  ],
  [
    "design-03721",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-avlist-item::before"
    ]
  ],
  [
    "design-03722",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-avlist-item::before"
    ]
  ],
  [
    "design-03723",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-avlist-item::before"
    ]
  ],
  [
    "design-03724",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-avlist-item:hover::before"
    ]
  ],
  [
    "design-03725",
    [
      "&:where(:has(#body-inner)) body.is-mobile .tt-avlist-item:hover",
      "&:where(:has(#body-inner)) body.is-mobile .tt-avlist-item:focus"
    ]
  ],
  [
    "design-03726",
    [
      "&:where(:has(#body-inner)) .tt-wrap .tt-avlist-item"
    ]
  ],
  [
    "design-03727",
    [
      "&:where(:has(#body-inner)) .tt-wrap .tt-avlist-item"
    ]
  ],
  [
    "design-03728",
    [
      "&:where(:has(#body-inner)) .tt-avlist-item-inner"
    ]
  ],
  [
    "design-03729",
    [
      "&:where(:has(#body-inner)) .tt-avlist-item-inner"
    ]
  ],
  [
    "design-03730",
    [
      "&:where(:has(#body-inner)) .tt-avlist-item-inner"
    ]
  ],
  [
    "design-03731",
    [
      "&:where(:has(#body-inner)) .tt-avlist-item-inner"
    ]
  ],
  [
    "design-03732",
    [
      "&:where(:has(#body-inner)) .tt-avlist-col"
    ]
  ],
  [
    "design-03733",
    [
      "&:where(:has(#body-inner)) .tt-avlist-count::before"
    ]
  ],
  [
    "design-03734",
    [
      "&:where(:has(#body-inner)) .tt-avlist-count::before"
    ]
  ],
  [
    "design-03735",
    [
      "&:where(:has(#body-inner)) .tt-avlist-count::before"
    ]
  ],
  [
    "design-03736",
    [
      "&:where(:has(#body-inner)) .tt-avlist-count::before"
    ]
  ],
  [
    "design-03737",
    [
      "&:where(:has(#body-inner)) .tt-avlist-title"
    ]
  ],
  [
    "design-03738",
    [
      "&:where(:has(#body-inner)) .tt-avlist-title"
    ]
  ],
  [
    "design-03739",
    [
      "&:where(:has(#body-inner)) .tt-avlist-title"
    ]
  ],
  [
    "design-03740",
    [
      "&:where(:has(#body-inner)) .tt-avlist-title"
    ]
  ],
  [
    "design-03741",
    [
      "&:where(:has(#body-inner)) .tt-avlist-title"
    ]
  ],
  [
    "design-03742",
    [
      "&:where(:has(#body-inner)) .tt-avlist-description",
      "&:where(:has(#body-inner)) .tt-avlist-info"
    ]
  ],
  [
    "design-03743",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-avlist-item-inner }"
    ]
  ],
  [
    "design-03744",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-avlist-col }"
    ]
  ],
  [
    "design-03745",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-avlist-col }"
    ]
  ],
  [
    "design-03746",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-avlist-col }"
    ]
  ],
  [
    "design-03747",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-avlist-col }"
    ]
  ],
  [
    "design-03748",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-avlist-col }"
    ]
  ],
  [
    "design-03749",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-avlist-col.tt-avlist-col-info }"
    ]
  ],
  [
    "design-03750",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-avlist-col.tt-avlist-col-info }"
    ]
  ],
  [
    "design-03751",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-avlist-col.tt-avlist-col-count }"
    ]
  ],
  [
    "design-03752",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-avlist-item }"
    ]
  ],
  [
    "design-03753",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-avlist-count }"
    ]
  ],
  [
    "design-03754",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-avlist-count }"
    ]
  ],
  [
    "design-03755",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-avlist-count }"
    ]
  ],
  [
    "design-03756",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-avlist-count }"
    ]
  ],
  [
    "design-03757",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-avlist-count }"
    ]
  ],
  [
    "design-03758",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-avlist-title }"
    ]
  ],
  [
    "design-03759",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-avlist-title }"
    ]
  ],
  [
    "design-03760",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-avlist-title br }"
    ]
  ],
  [
    "design-03761",
    [
      "&:where(:has(#body-inner)) .tt-avards-list.tt-avlist-tilted .tt-avlist-item"
    ]
  ],
  [
    "design-03762",
    [
      "&:where(:has(#body-inner)) .tt-avards-list.tt-avlist-tilted .tt-avlist-item"
    ]
  ],
  [
    "design-03763",
    [
      "&:where(:has(#body-inner)) .tt-avards-list.tt-avlist-tilted.tt-avlist-boxed .tt-avlist-item"
    ]
  ],
  [
    "design-03764",
    [
      "&:where(:has(#body-inner)) .tt-avards-list.tt-avlist-tilted .tt-avlist-item:nth-child(2n+1)"
    ]
  ],
  [
    "design-03765",
    [
      "&:where(:has(#body-inner)) .tt-avards-list.tt-avlist-tilted .tt-avlist-item:nth-child(2n)"
    ]
  ],
  [
    "design-03766",
    [
      "@media (max-width: 991px) { &:where(:has(#body-inner)) .tt-avards-list.tt-avlist-tilted .tt-avlist-item:nth-child(2n+1) }"
    ]
  ],
  [
    "design-03767",
    [
      "@media (max-width: 991px) { &:where(:has(#body-inner)) .tt-avards-list.tt-avlist-tilted .tt-avlist-item:nth-child(2n) }"
    ]
  ],
  [
    "design-03768",
    [
      "&:where(:has(#body-inner)) .tt-avards-list.tt-avlist-boxed"
    ]
  ],
  [
    "design-03769",
    [
      "&:where(:has(#body-inner)) .tt-avards-list.tt-avlist-boxed"
    ]
  ],
  [
    "design-03770",
    [
      "&:where(:has(#body-inner)) .tt-wrap .tt-avards-list.tt-avlist-boxed"
    ]
  ],
  [
    "design-03771",
    [
      "&:where(:has(#body-inner)) .tt-wrap .tt-avards-list.tt-avlist-boxed"
    ]
  ],
  [
    "design-03772",
    [
      "&:where(:has(#body-inner)) .tt-avards-list.tt-avlist-boxed .tt-avlist-item"
    ]
  ],
  [
    "design-03773",
    [
      "&:where(:has(#body-inner)) .tt-avards-list.tt-avlist-boxed .tt-avlist-item"
    ]
  ],
  [
    "design-03774",
    [
      "&:where(:has(#body-inner)) .tt-avards-list.tt-avlist-boxed .tt-avlist-item"
    ]
  ],
  [
    "design-03775",
    [
      "&:where(:has(#body-inner)) .tt-avards-list.tt-avlist-boxed .tt-avlist-item"
    ]
  ],
  [
    "design-03776",
    [
      "&:where(:has(#body-inner)) .tt-avards-list.tt-avlist-boxed .tt-avlist-item"
    ]
  ],
  [
    "design-03777",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text"
    ]
  ],
  [
    "design-03778",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text"
    ]
  ],
  [
    "design-03779",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text"
    ]
  ],
  [
    "design-03780",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text"
    ]
  ],
  [
    "design-03781",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text"
    ]
  ],
  [
    "design-03782",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text"
    ]
  ],
  [
    "design-03783",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text"
    ]
  ],
  [
    "design-03784",
    [
      "&:where(:has(#body-inner)) .tt-scrt-inner"
    ]
  ],
  [
    "design-03785",
    [
      "&:where(:has(#body-inner)) .tt-scrt-inner"
    ]
  ],
  [
    "design-03786",
    [
      "&:where(:has(#body-inner)) .tt-scrt-inner"
    ]
  ],
  [
    "design-03787",
    [
      "&:where(:has(#body-inner)) .tt-scrt-inner"
    ]
  ],
  [
    "design-03788",
    [
      "&:where(:has(#body-inner)) .tt-scrt-inner"
    ]
  ],
  [
    "design-03789",
    [
      "&:where(:has(#body-inner)) .tt-scrt-content"
    ]
  ],
  [
    "design-03790",
    [
      "&:where(:has(#body-inner)) .tt-scrt-content"
    ]
  ],
  [
    "design-03791",
    [
      "&:where(:has(#body-inner)) .tt-scrt-content"
    ]
  ],
  [
    "design-03792",
    [
      "&:where(:has(#body-inner)) .tt-scrt-content"
    ]
  ],
  [
    "design-03793",
    [
      "&:where(:has(#body-inner)) .tt-scrt-text"
    ]
  ],
  [
    "design-03794",
    [
      "&:where(:has(#body-inner)) .tt-scrt-text"
    ]
  ],
  [
    "design-03795",
    [
      "&:where(:has(#body-inner)) .tt-scrt-text"
    ]
  ],
  [
    "design-03796",
    [
      "&:where(:has(#body-inner)) .tt-scrt-text"
    ]
  ],
  [
    "design-03797",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text.tt-scrt-separator-exist .tt-scrt-text"
    ]
  ],
  [
    "design-03798",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text.tt-scrt-separator-exist .tt-scrt-text"
    ]
  ],
  [
    "design-03799",
    [
      "&:where(:has(#body-inner)) .tt-scrt-separator"
    ]
  ],
  [
    "design-03800",
    [
      "&:where(:has(#body-inner)) .tt-scrt-separator"
    ]
  ],
  [
    "design-03801",
    [
      "&:where(:has(#body-inner)) .tt-scrt-separator > i"
    ]
  ],
  [
    "design-03802",
    [
      "&:where(:has(#body-inner)) .tt-scrt-separator > svg"
    ]
  ],
  [
    "design-03803",
    [
      "&:where(:has(#body-inner)) .tt-scrt-separator > svg"
    ]
  ],
  [
    "design-03804",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text.scrt-dyn-separator[data-opposite-direction=\"true\"] .tt-scrt-separator > i",
      "&:where(:has(#body-inner)) .tt-scrolling-text.scrt-dyn-separator[data-opposite-direction=\"true\"] .tt-scrt-separator > svg"
    ]
  ],
  [
    "design-03805",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text.scrt-dyn-separator .tt-scrt-separator"
    ]
  ],
  [
    "design-03806",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text.scrt-dyn-separator .tt-scrt-separator"
    ]
  ],
  [
    "design-03807",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text.scrolled-up.scrt-dyn-separator .tt-scrt-separator"
    ]
  ],
  [
    "design-03808",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text-crossed"
    ]
  ],
  [
    "design-03809",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text-crossed"
    ]
  ],
  [
    "design-03810",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text-crossed"
    ]
  ],
  [
    "design-03811",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text-crossed"
    ]
  ],
  [
    "design-03812",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text-crossed-inner"
    ]
  ],
  [
    "design-03813",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text-crossed-inner"
    ]
  ],
  [
    "design-03814",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text-crossed .tt-scrolling-text"
    ]
  ],
  [
    "design-03815",
    [
      "&:where(:has(#body-inner)) .bg-white .tt-scrolling-text-crossed .tt-scrolling-text"
    ]
  ],
  [
    "design-03816",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text-crossed .tt-scrolling-text:nth-child(1)"
    ]
  ],
  [
    "design-03817",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text-crossed .tt-scrolling-text:nth-child(2)"
    ]
  ],
  [
    "design-03818",
    [
      "@media (max-width: 991px) { &:where(:has(#body-inner)) .tt-scrolling-text-crossed .tt-scrolling-text:nth-child(1) }"
    ]
  ],
  [
    "design-03819",
    [
      "@media (max-width: 991px) { &:where(:has(#body-inner)) .tt-scrolling-text-crossed .tt-scrolling-text:nth-child(2) }"
    ]
  ],
  [
    "design-03820",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text.tt-scrt-tilted-1",
      "&:where(:has(#body-inner)) .tt-scrolling-text.tt-scrt-tilted-2"
    ]
  ],
  [
    "design-03821",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text.tt-scrt-tilted-1"
    ]
  ],
  [
    "design-03822",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text.tt-scrt-tilted-2"
    ]
  ],
  [
    "design-03823",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text.tt-scrt-bordered:not(.scrt-color-reverse):not(.tt-scrt-boxed)"
    ]
  ],
  [
    "design-03824",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text.tt-scrt-bordered:not(.scrt-color-reverse):not(.tt-scrt-boxed)"
    ]
  ],
  [
    "design-03825",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text.tt-scrt-boxed"
    ]
  ],
  [
    "design-03826",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text.tt-scrt-boxed"
    ]
  ],
  [
    "design-03827",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text.tt-scrt-boxed .tt-scrt-text"
    ]
  ],
  [
    "design-03828",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text.tt-scrt-boxed .tt-scrt-text"
    ]
  ],
  [
    "design-03829",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text.tt-scrt-boxed .tt-scrt-text"
    ]
  ],
  [
    "design-03830",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text.tt-scrt-boxed .tt-scrt-text"
    ]
  ],
  [
    "design-03831",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text.tt-scrt-boxed .tt-scrt-text"
    ]
  ],
  [
    "design-03832",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text.tt-scrt-boxed .tt-scrt-text"
    ]
  ],
  [
    "design-03833",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text.tt-scrt-boxed .tt-scrt-text"
    ]
  ],
  [
    "design-03834",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text.tt-scrt-boxed .tt-scrt-text"
    ]
  ],
  [
    "design-03835",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text.tt-scrt-boxed .tt-scrt-text"
    ]
  ],
  [
    "design-03836",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text.tt-scrt-boxed .tt-scrt-text"
    ]
  ],
  [
    "design-03837",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text.tt-scrt-boxed.scrt-color-reverse .tt-scrt-text"
    ]
  ],
  [
    "design-03838",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text.tt-scrt-boxed.scrt-color-reverse .tt-scrt-text"
    ]
  ],
  [
    "design-03839",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text.tt-scrt-boxed .tt-scrt-separator"
    ]
  ],
  [
    "design-03840",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text.tt-scrt-boxed.scrt-color-reverse .tt-scrt-separator > svg"
    ]
  ],
  [
    "design-03841",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text.scrt-color-reverse:not(.tt-scrt-boxed)"
    ]
  ],
  [
    "design-03842",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text.scrt-color-reverse:not(.tt-scrt-boxed)"
    ]
  ],
  [
    "design-03843",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text.scrt-color-reverse:not(.tt-scrt-boxed) .tt-scrt-separator > svg"
    ]
  ],
  [
    "design-03844",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text.tt-scrt-sm"
    ]
  ],
  [
    "design-03845",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text.tt-scrt-sm .tt-scrt-separator > svg"
    ]
  ],
  [
    "design-03846",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text.tt-scrt-lg"
    ]
  ],
  [
    "design-03847",
    [
      "&:where(:has(#body-inner)) .tt-scrolling-text.tt-scrt-lg .tt-scrt-separator > svg"
    ]
  ],
  [
    "design-03848",
    [
      "&:where(:has(#body-inner)) .tt-logo-wall"
    ]
  ],
  [
    "design-03849",
    [
      "&:where(:has(#body-inner)) .tt-logo-wall"
    ]
  ],
  [
    "design-03850",
    [
      "&:where(:has(#body-inner)) .tt-logo-wall"
    ]
  ],
  [
    "design-03851",
    [
      "&:where(:has(#body-inner)) .tt-logo-wall"
    ]
  ],
  [
    "design-03852",
    [
      "&:where(:has(#body-inner)) .tt-logo-wall"
    ]
  ],
  [
    "design-03853",
    [
      "&:where(:has(#body-inner)) .tt-logo-wall"
    ]
  ],
  [
    "design-03854",
    [
      "&:where(:has(#body-inner)) .tt-logo-wall"
    ]
  ],
  [
    "design-03855",
    [
      "&:where(:has(#body-inner)) .tt-logo-wall"
    ]
  ],
  [
    "design-03856",
    [
      "&:where(:has(#body-inner)) .tt-logo-wall > li"
    ]
  ],
  [
    "design-03857",
    [
      "&:where(:has(#body-inner)) .tt-logo-wall > li"
    ]
  ],
  [
    "design-03858",
    [
      "&:where(:has(#body-inner)) .tt-logo-wall-item"
    ]
  ],
  [
    "design-03859",
    [
      "&:where(:has(#body-inner)) .tt-logo-wall-item"
    ]
  ],
  [
    "design-03860",
    [
      "&:where(:has(#body-inner)) .tt-logo-wall-item"
    ]
  ],
  [
    "design-03861",
    [
      "&:where(:has(#body-inner)) .tt-logo-wall-item"
    ]
  ],
  [
    "design-03862",
    [
      "&:where(:has(#body-inner)) .tt-logo-wall-item"
    ]
  ],
  [
    "design-03863",
    [
      "&:where(:has(#body-inner)) .tt-logo-wall-item"
    ]
  ],
  [
    "design-03864",
    [
      "&:where(:has(#body-inner)) .tt-logo-wall-item"
    ]
  ],
  [
    "design-03865",
    [
      "&:where(:has(#body-inner)) .tt-logo-wall-item::before"
    ]
  ],
  [
    "design-03866",
    [
      "&:where(:has(#body-inner)) .tt-logo-wall-item::before"
    ]
  ],
  [
    "design-03867",
    [
      "&:where(:has(#body-inner)) .tt-logo-wall-item::before"
    ]
  ],
  [
    "design-03868",
    [
      "&:where(:has(#body-inner)) .tt-logo-wall-item::before"
    ]
  ],
  [
    "design-03869",
    [
      "&:where(:has(#body-inner)) .tt-lv-item-inner"
    ]
  ],
  [
    "design-03870",
    [
      "&:where(:has(#body-inner)) .tt-lv-item-inner"
    ]
  ],
  [
    "design-03871",
    [
      "&:where(:has(#body-inner)) .tt-lv-item-inner"
    ]
  ],
  [
    "design-03872",
    [
      "&:where(:has(#body-inner)) .tt-lv-item-inner"
    ]
  ],
  [
    "design-03873",
    [
      "&:where(:has(#body-inner)) .tt-lv-item-inner"
    ]
  ],
  [
    "design-03874",
    [
      "&:where(:has(#body-inner)) .tt-lv-item-inner"
    ]
  ],
  [
    "design-03875",
    [
      "&:where(:has(#body-inner)) a.tt-logo-wall-item img"
    ]
  ],
  [
    "design-03876",
    [
      "&:where(:has(#body-inner)) a.tt-logo-wall-item img"
    ]
  ],
  [
    "design-03877",
    [
      "&:where(:has(#body-inner)) a.tt-logo-wall-item:hover img"
    ]
  ],
  [
    "design-03878",
    [
      "&:where(:has(#body-inner)) .tt-lv-img-dark"
    ]
  ],
  [
    "design-03879",
    [
      "&:where(:has(#body-inner)) .tt-lv-img-light"
    ]
  ],
  [
    "design-03880",
    [
      "&:where(:has(#body-inner)) .tt-logo-wall.tt-lw-boxed .tt-logo-wall-item"
    ]
  ],
  [
    "design-03881",
    [
      "&:where(:has(#body-inner)) .tt-logo-wall.tt-lw-boxed .tt-logo-wall-item"
    ]
  ],
  [
    "design-03882",
    [
      "&:where(:has(#body-inner)) .tt-logo-wall.tt-lw-boxed .tt-logo-wall-item"
    ]
  ],
  [
    "design-03883",
    [
      "&:where(:has(#body-inner)) .tt-logo-wall.tt-lw-tilted > li:nth-child(2n+1) .tt-logo-wall-item"
    ]
  ],
  [
    "design-03884",
    [
      "&:where(:has(#body-inner)) .tt-logo-wall.tt-lw-tilted > li:nth-child(2n) .tt-logo-wall-item"
    ]
  ],
  [
    "design-03885",
    [
      "&:where(:has(#body-inner)) .tt-logo-wall.tt-lw-col-6 > li"
    ]
  ],
  [
    "design-03886",
    [
      "&:where(:has(#body-inner)) .tt-logo-wall.tt-lw-col-4 > li"
    ]
  ],
  [
    "design-03887",
    [
      "&:where(:has(#body-inner)) .tt-logo-wall.tt-lw-col-3 > li"
    ]
  ],
  [
    "design-03888",
    [
      "&:where(:has(#body-inner)) .tt-logo-wall.tt-lw-col-2 > li"
    ]
  ],
  [
    "design-03889",
    [
      "@media (max-width: 1360px) { &:where(:has(#body-inner)) .tt-logo-wall.tt-lw-col-6 > li }"
    ]
  ],
  [
    "design-03890",
    [
      "@media (max-width: 1200px) { &:where(:has(#body-inner)) .tt-logo-wall > li }",
      "@media (max-width: 1200px) { &:where(:has(#body-inner)) .tt-logo-wall.tt-lw-col-6 > li }"
    ]
  ],
  [
    "design-03891",
    [
      "@media (max-width: 991px) { &:where(:has(#body-inner)) .tt-logo-wall > li }",
      "@media (max-width: 991px) { &:where(:has(#body-inner)) .tt-logo-wall.tt-lw-col-4 > li }"
    ]
  ],
  [
    "design-03892",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-logo-wall > li }",
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-logo-wall.tt-lw-col-6 > li }",
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-logo-wall.tt-lw-col-4 > li }"
    ]
  ],
  [
    "design-03893",
    [
      "@media (max-width: 600px) { &:where(:has(#body-inner)) .tt-logo-wall > li }",
      "@media (max-width: 600px) { &:where(:has(#body-inner)) .tt-logo-wall.tt-lw-col-6 > li }",
      "@media (max-width: 600px) { &:where(:has(#body-inner)) .tt-logo-wall.tt-lw-col-4 > li }",
      "@media (max-width: 600px) { &:where(:has(#body-inner)) .tt-logo-wall.tt-lw-col-3 > li }"
    ]
  ],
  [
    "design-03894",
    [
      "&:where(:has(#body-inner)) .tt-pagination"
    ]
  ],
  [
    "design-03895",
    [
      "&:where(:has(#body-inner)) .tt-pagination"
    ]
  ],
  [
    "design-03896",
    [
      "&:where(:has(#body-inner)) .tt-wrap .tt-pagination"
    ]
  ],
  [
    "design-03897",
    [
      "&:where(:has(#body-inner)) .tt-wrap .tt-pagination"
    ]
  ],
  [
    "design-03898",
    [
      "&:where(:has(#body-inner)) .tt-pagin-numbers"
    ]
  ],
  [
    "design-03899",
    [
      "&:where(:has(#body-inner)) .tt-pagin-numbers"
    ]
  ],
  [
    "design-03900",
    [
      "&:where(:has(#body-inner)) .tt-pagin-numbers"
    ]
  ],
  [
    "design-03901",
    [
      "&:where(:has(#body-inner)) .tt-pagin-item"
    ]
  ],
  [
    "design-03902",
    [
      "&:where(:has(#body-inner)) .tt-pagin-item"
    ]
  ],
  [
    "design-03903",
    [
      "&:where(:has(#body-inner)) .tt-pagin-item"
    ]
  ],
  [
    "design-03904",
    [
      "&:where(:has(#body-inner)) .tt-pagin-item"
    ]
  ],
  [
    "design-03905",
    [
      "&:where(:has(#body-inner)) .tt-pagin-item"
    ]
  ],
  [
    "design-03906",
    [
      "&:where(:has(#body-inner)) .tt-pagin-item"
    ]
  ],
  [
    "design-03907",
    [
      "&:where(:has(#body-inner)) .tt-pagin-item"
    ]
  ],
  [
    "design-03908",
    [
      "&:where(:has(#body-inner)) .tt-pagin-item"
    ]
  ],
  [
    "design-03909",
    [
      "&:where(:has(#body-inner)) .tt-pagin-item"
    ]
  ],
  [
    "design-03910",
    [
      "&:where(:has(#body-inner)) .tt-pagin-item"
    ]
  ],
  [
    "design-03911",
    [
      "&:where(:has(#body-inner)) .tt-pagin-item"
    ]
  ],
  [
    "design-03912",
    [
      "&:where(:has(#body-inner)) .tt-pagin-item"
    ]
  ],
  [
    "design-03913",
    [
      "&:where(:has(#body-inner)) .tt-pagin-item"
    ]
  ],
  [
    "design-03914",
    [
      "&:where(:has(#body-inner)) .tt-pagin-item"
    ]
  ],
  [
    "design-03915",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-pagin-item }"
    ]
  ],
  [
    "design-03916",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-pagin-item }"
    ]
  ],
  [
    "design-03917",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-pagin-item }"
    ]
  ],
  [
    "design-03918",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-pagin-item }"
    ]
  ],
  [
    "design-03919",
    [
      "&:where(:has(#body-inner)) .tt-pagin-item:hover",
      "&:where(:has(#body-inner)) .tt-pagin-item:focus"
    ]
  ],
  [
    "design-03920",
    [
      "&:where(:has(#body-inner)) .tt-pagin-item.active"
    ]
  ],
  [
    "design-03921",
    [
      "&:where(:has(#body-inner)) .tt-pagin-item.active"
    ]
  ],
  [
    "design-03922",
    [
      "&:where(:has(#body-inner)) .tt-pagin-item.active"
    ]
  ],
  [
    "design-03923",
    [
      "&:where(:has(#body-inner)) .tt-pagin-item.active"
    ]
  ],
  [
    "design-03924",
    [
      "&:where(:has(#body-inner)) .tt-pagin-item.active"
    ]
  ],
  [
    "design-03925",
    [
      "&:where(:has(#body-inner)) .tt-pagin-item.active"
    ]
  ],
  [
    "design-03926",
    [
      "&:where(:has(#body-inner)) .tt-pagin-prev a",
      "&:where(:has(#body-inner)) .tt-pagin-next a"
    ]
  ],
  [
    "design-03927",
    [
      "&:where(:has(#body-inner)) .tt-pagin-prev"
    ]
  ],
  [
    "design-03928",
    [
      "&:where(:has(#body-inner)) .tt-pagin-next"
    ]
  ],
  [
    "design-03929",
    [
      "&:where(:has(#body-inner)) .tt-pagination.tt-pagin-center"
    ]
  ],
  [
    "design-03930",
    [
      "&:where(:has(#body-inner)) .tt-pagination.tt-pagin-center"
    ]
  ],
  [
    "design-03931",
    [
      "&:where(:has(#body-inner)) .tt-testimonials-list"
    ]
  ],
  [
    "design-03932",
    [
      "&:where(:has(#body-inner)) .tt-testimonials-list-item"
    ]
  ],
  [
    "design-03933",
    [
      "&:where(:has(#body-inner)) .tt-tli-inner"
    ]
  ],
  [
    "design-03934",
    [
      "&:where(:has(#body-inner)) .tt-tli-inner"
    ]
  ],
  [
    "design-03935",
    [
      "&:where(:has(#body-inner)) .tt-tli-inner"
    ]
  ],
  [
    "design-03936",
    [
      "&:where(:has(#body-inner)) .tt-tli-inner"
    ]
  ],
  [
    "design-03937",
    [
      "&:where(:has(#body-inner)) .tt-tli-inner"
    ]
  ],
  [
    "design-03938",
    [
      "&:where(:has(#body-inner)) .tt-testimonials-list-item blockquote"
    ]
  ],
  [
    "design-03939",
    [
      "&:where(:has(#body-inner)) .tt-testimonials-list-item blockquote"
    ]
  ],
  [
    "design-03940",
    [
      "&:where(:has(#body-inner)) .tt-testimonials-list-item blockquote"
    ]
  ],
  [
    "design-03941",
    [
      "&:where(:has(#body-inner)) .tt-testimonials-list-item blockquote"
    ]
  ],
  [
    "design-03942",
    [
      "&:where(:has(#body-inner)) .tt-testimonials-list-item blockquote"
    ]
  ],
  [
    "design-03943",
    [
      "&:where(:has(#body-inner)) .tt-testimonials-list-item blockquote"
    ]
  ],
  [
    "design-03944",
    [
      "&:where(:has(#body-inner)) .tt-testimonials-list-item blockquote:not(.open-quote)"
    ]
  ],
  [
    "design-03945",
    [
      "&:where(:has(#body-inner)) .tt-testimonials-list-item blockquote footer"
    ]
  ],
  [
    "design-03946",
    [
      "&:where(:has(#body-inner)) .tt-testimonials-list-item blockquote footer"
    ]
  ],
  [
    "design-03947",
    [
      "&:where(:has(#body-inner)) .tt-testimonials-list.tt-tli-lg blockquote"
    ]
  ],
  [
    "design-03948",
    [
      "&:where(:has(#body-inner)) .tt-testimonials-list.tt-tli-xlg blockquote"
    ]
  ],
  [
    "design-03949",
    [
      "&:where(:has(#body-inner)) .tt-testimonials-list.tt-tli-boxed .tt-tli-inner"
    ]
  ],
  [
    "design-03950",
    [
      "&:where(:has(#body-inner)) .tt-testimonials-list.tt-tli-boxed .tt-tli-inner"
    ]
  ],
  [
    "design-03951",
    [
      "&:where(:has(#body-inner)) .tt-testimonials-list.tt-tli-boxed .tt-tli-inner"
    ]
  ],
  [
    "design-03952",
    [
      "&:where(:has(#body-inner)) .tt-testimonials-list.tt-tli-boxed .tt-tli-inner"
    ]
  ],
  [
    "design-03953",
    [
      "&:where(:has(#body-inner)) .tt-testimonials-list.tt-tli-boxed .tt-tli-inner"
    ]
  ],
  [
    "design-03954",
    [
      "&:where(:has(#body-inner)) .tt-testimonials-list.tt-tli-boxed .tt-tli-inner"
    ]
  ],
  [
    "design-03955",
    [
      "&:where(:has(#body-inner)) .tt-testimonials-list-item.tt-tli-reverse-color .tt-tli-inner"
    ]
  ],
  [
    "design-03956",
    [
      "&:where(:has(#body-inner)) .tt-testimonials-list-item.tt-tli-reverse-color .tt-tli-inner"
    ]
  ],
  [
    "design-03957",
    [
      "&:where(:has(#body-inner)) .tt-testimonials-list-item.tt-tli-reverse-color .tt-tli-inner"
    ]
  ],
  [
    "design-03958",
    [
      "&:where(:has(#body-inner)) .tt-testimonials-list-item.tt-tli-reverse-color .tt-tli-inner"
    ]
  ],
  [
    "design-03959",
    [
      "&:where(:has(#body-inner)) .tt-testimonials-list.tt-tli-tilted .tt-tli-inner"
    ]
  ],
  [
    "design-03960",
    [
      "&:where(:has(#body-inner)) .tt-testimonials-list.tt-tli-tilted .tt-testimonials-list-item:nth-child(2n+1) .tt-tli-inner"
    ]
  ],
  [
    "design-03961",
    [
      "&:where(:has(#body-inner)) .tt-testimonials-list.tt-tli-tilted .tt-testimonials-list-item:nth-child(2n) .tt-tli-inner"
    ]
  ],
  [
    "design-03962",
    [
      "&:where(:has(#body-inner)) .tt-image"
    ]
  ],
  [
    "design-03963",
    [
      "&:where(:has(#body-inner)) .tt-image"
    ]
  ],
  [
    "design-03964",
    [
      "&:where(:has(#body-inner)) .tt-image figure"
    ]
  ],
  [
    "design-03965",
    [
      "&:where(:has(#body-inner)) a.tt-image-link"
    ]
  ],
  [
    "design-03966",
    [
      "&:where(:has(#body-inner)) .tt-image-img-inner"
    ]
  ],
  [
    "design-03967",
    [
      "&:where(:has(#body-inner)) .tt-image-hover"
    ]
  ],
  [
    "design-03968",
    [
      "&:where(:has(#body-inner)) a.tt-image-link:hover .tt-image-hover"
    ]
  ],
  [
    "design-03969",
    [
      "&:where(:has(#body-inner)) .tt-image img"
    ]
  ],
  [
    "design-03970",
    [
      "&:where(:has(#body-inner)) .tt-image.tti-border-radius .tt-image-img",
      "&:where(:has(#body-inner)) .tt-image.tti-border-radius .tt-image-img-inner"
    ]
  ],
  [
    "design-03971",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-image.tti-landscape img }",
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-image.tti-portrait img }",
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-image.tti-square img }"
    ]
  ],
  [
    "design-03972",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-image.tti-landscape img }",
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-image.tti-portrait img }",
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-image.tti-square img }"
    ]
  ],
  [
    "design-03973",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-image.tti-landscape img }",
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-image.tti-portrait img }",
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-image.tti-square img }"
    ]
  ],
  [
    "design-03974",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-image.tti-landscape img }",
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-image.tti-portrait img }",
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-image.tti-square img }"
    ]
  ],
  [
    "design-03975",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-image.tti-landscape img }",
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-image.tti-portrait img }",
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-image.tti-square img }"
    ]
  ],
  [
    "design-03976",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-image.tti-landscape img }"
    ]
  ],
  [
    "design-03977",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-image.tti-portrait img }"
    ]
  ],
  [
    "design-03978",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-image.tti-square img }"
    ]
  ],
  [
    "design-03979",
    [
      "&:where(:has(#body-inner)) .tt-image.tti-boxed"
    ]
  ],
  [
    "design-03980",
    [
      "&:where(:has(#body-inner)) .tt-section-inner:not(.tt-wrap) .tt-image.tti-boxed"
    ]
  ],
  [
    "design-03981",
    [
      "&:where(:has(#body-inner)) .tt-section-inner:not(.tt-wrap) .tt-image.tti-boxed"
    ]
  ],
  [
    "design-03982",
    [
      "&:where(:has(#body-inner)) .tt-section-inner:not(.tt-wrap) .tt-image.tti-boxed"
    ]
  ],
  [
    "design-03983",
    [
      "&:where(:has(#body-inner)) .tt-image.tti-boxed .tt-image-img"
    ]
  ],
  [
    "design-03984",
    [
      "&:where(:has(#body-inner)) .tt-image.tti-boxed .tt-image-img"
    ]
  ],
  [
    "design-03985",
    [
      "&:where(:has(#body-inner)) .tt-image.tti-boxed .tt-image-img"
    ]
  ],
  [
    "design-03986",
    [
      "&:where(:has(#body-inner)) .tt-image.tti-boxed .tt-image-img"
    ]
  ],
  [
    "design-03987",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-image.tti-boxed figcaption }"
    ]
  ],
  [
    "design-03988",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-image.tti-boxed figcaption }"
    ]
  ],
  [
    "design-03989",
    [
      "&:where(:has(#body-inner)) .tt-image.tti-tilted-1"
    ]
  ],
  [
    "design-03990",
    [
      "&:where(:has(#body-inner)) .tt-image.tti-tilted-2"
    ]
  ],
  [
    "design-03991",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-image.tti-fixed-height img }"
    ]
  ],
  [
    "design-03992",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-image.tti-fixed-height img }"
    ]
  ],
  [
    "design-03993",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-image.tti-fixed-height img }"
    ]
  ],
  [
    "design-03994",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-image.tti-fixed-height img }"
    ]
  ],
  [
    "design-03995",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-image.tti-fixed-height img }"
    ]
  ],
  [
    "design-03996",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-image.tti-full-height img }"
    ]
  ],
  [
    "design-03997",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-image.tti-full-height img }"
    ]
  ],
  [
    "design-03998",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-image.tti-full-height img }"
    ]
  ],
  [
    "design-03999",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-image.tti-full-height img }"
    ]
  ],
  [
    "design-04000",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-image.tti-full-height img }"
    ]
  ],
  [
    "design-04001",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-image.tti-full-height.tti-boxed img }"
    ]
  ],
  [
    "design-04002",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-image.tti-full-height.tti-boxed img }"
    ]
  ],
  [
    "design-04003",
    [
      "&:where(:has(#body-inner)) .tt-video"
    ]
  ],
  [
    "design-04004",
    [
      "&:where(:has(#body-inner)) .tt-video"
    ]
  ],
  [
    "design-04005",
    [
      "&:where(:has(#body-inner)) .tt-video"
    ]
  ],
  [
    "design-04006",
    [
      "&:where(:has(#body-inner)) .tt-video"
    ]
  ],
  [
    "design-04007",
    [
      "&:where(:has(#body-inner)) .tt-video"
    ]
  ],
  [
    "design-04008",
    [
      "&:where(:has(#body-inner)) .tt-video video"
    ]
  ],
  [
    "design-04009",
    [
      "&:where(:has(#body-inner)) .tt-video video"
    ]
  ],
  [
    "design-04010",
    [
      "&:where(:has(#body-inner)) .tt-video video"
    ]
  ],
  [
    "design-04011",
    [
      "&:where(:has(#body-inner)) .tt-video.ttv-border-radius"
    ]
  ],
  [
    "design-04012",
    [
      "&:where(:has(#body-inner)) .tt-video.ttv-grayscale"
    ]
  ],
  [
    "design-04013",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-video.ttv-landscape:not(.ttv-fixed-height)::after }",
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-video.ttv-portrait:not(.ttv-fixed-height)::after }"
    ]
  ],
  [
    "design-04014",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-video.ttv-landscape:not(.ttv-fixed-height)::after }",
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-video.ttv-portrait:not(.ttv-fixed-height)::after }"
    ]
  ],
  [
    "design-04015",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-video.ttv-landscape:not(.ttv-fixed-height)::after }"
    ]
  ],
  [
    "design-04016",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-video.ttv-portrait:not(.ttv-fixed-height)::after }"
    ]
  ],
  [
    "design-04017",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-video.ttv-landscape:not(.ttv-fixed-height) video }",
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-video.ttv-portrait:not(.ttv-fixed-height) video }"
    ]
  ],
  [
    "design-04018",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-video.ttv-landscape:not(.ttv-fixed-height) video }",
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-video.ttv-portrait:not(.ttv-fixed-height) video }"
    ]
  ],
  [
    "design-04019",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-video.ttv-landscape:not(.ttv-fixed-height) video }",
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-video.ttv-portrait:not(.ttv-fixed-height) video }"
    ]
  ],
  [
    "design-04020",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-video.ttv-landscape:not(.ttv-fixed-height) video }",
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-video.ttv-portrait:not(.ttv-fixed-height) video }"
    ]
  ],
  [
    "design-04021",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-video.ttv-landscape:not(.ttv-fixed-height) video }",
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-video.ttv-portrait:not(.ttv-fixed-height) video }"
    ]
  ],
  [
    "design-04022",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-video.ttv-landscape:not(.ttv-fixed-height) video }",
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-video.ttv-portrait:not(.ttv-fixed-height) video }"
    ]
  ],
  [
    "design-04023",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-video.ttv-landscape:not(.ttv-fixed-height) video }",
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-video.ttv-portrait:not(.ttv-fixed-height) video }"
    ]
  ],
  [
    "design-04024",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-video.ttv-fixed-height video }"
    ]
  ],
  [
    "design-04025",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-video.ttv-fixed-height video }"
    ]
  ],
  [
    "design-04026",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-video.ttv-fixed-height video }"
    ]
  ],
  [
    "design-04027",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-video.ttv-fixed-height video }"
    ]
  ],
  [
    "design-04028",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-video.ttv-full-height video }"
    ]
  ],
  [
    "design-04029",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-video.ttv-full-height video }"
    ]
  ],
  [
    "design-04030",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-video.ttv-full-height video }"
    ]
  ],
  [
    "design-04031",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-video.ttv-full-height video }"
    ]
  ],
  [
    "design-04032",
    [
      "&:where(:has(#body-inner)) .tt-embed"
    ]
  ],
  [
    "design-04033",
    [
      "&:where(:has(#body-inner)) .tt-embed"
    ]
  ],
  [
    "design-04034",
    [
      "&:where(:has(#body-inner)) .tt-embed"
    ]
  ],
  [
    "design-04035",
    [
      "&:where(:has(#body-inner)) .tt-embed"
    ]
  ],
  [
    "design-04036",
    [
      "&:where(:has(#body-inner)) .tt-embed"
    ]
  ],
  [
    "design-04037",
    [
      "&:where(:has(#body-inner)) .tt-embed"
    ]
  ],
  [
    "design-04038",
    [
      "&:where(:has(#body-inner)) .tt-embed::before"
    ]
  ],
  [
    "design-04039",
    [
      "&:where(:has(#body-inner)) .tt-embed::before"
    ]
  ],
  [
    "design-04040",
    [
      "&:where(:has(#body-inner)) .tt-embed::before"
    ]
  ],
  [
    "design-04041",
    [
      "&:where(:has(#body-inner)) .tt-embed .tt-embed-item",
      "&:where(:has(#body-inner)) .tt-embed embed",
      "&:where(:has(#body-inner)) .tt-embed iframe",
      "&:where(:has(#body-inner)) .tt-embed object",
      "&:where(:has(#body-inner)) .tt-embed video"
    ]
  ],
  [
    "design-04042",
    [
      "&:where(:has(#body-inner)) .tt-embed .tt-embed-item",
      "&:where(:has(#body-inner)) .tt-embed embed",
      "&:where(:has(#body-inner)) .tt-embed iframe",
      "&:where(:has(#body-inner)) .tt-embed object",
      "&:where(:has(#body-inner)) .tt-embed video"
    ]
  ],
  [
    "design-04043",
    [
      "&:where(:has(#body-inner)) .tt-embed .tt-embed-item",
      "&:where(:has(#body-inner)) .tt-embed embed",
      "&:where(:has(#body-inner)) .tt-embed iframe",
      "&:where(:has(#body-inner)) .tt-embed object",
      "&:where(:has(#body-inner)) .tt-embed video"
    ]
  ],
  [
    "design-04044",
    [
      "&:where(:has(#body-inner)) .tt-embed .tt-embed-item",
      "&:where(:has(#body-inner)) .tt-embed embed",
      "&:where(:has(#body-inner)) .tt-embed iframe",
      "&:where(:has(#body-inner)) .tt-embed object",
      "&:where(:has(#body-inner)) .tt-embed video"
    ]
  ],
  [
    "design-04045",
    [
      "&:where(:has(#body-inner)) .tt-embed .tt-embed-item",
      "&:where(:has(#body-inner)) .tt-embed embed",
      "&:where(:has(#body-inner)) .tt-embed iframe",
      "&:where(:has(#body-inner)) .tt-embed object",
      "&:where(:has(#body-inner)) .tt-embed video"
    ]
  ],
  [
    "design-04046",
    [
      "&:where(:has(#body-inner)) .tt-embed .tt-embed-item",
      "&:where(:has(#body-inner)) .tt-embed embed",
      "&:where(:has(#body-inner)) .tt-embed iframe",
      "&:where(:has(#body-inner)) .tt-embed object",
      "&:where(:has(#body-inner)) .tt-embed video"
    ]
  ],
  [
    "design-04047",
    [
      "&:where(:has(#body-inner)) .tt-embed .tt-embed-item",
      "&:where(:has(#body-inner)) .tt-embed embed",
      "&:where(:has(#body-inner)) .tt-embed iframe",
      "&:where(:has(#body-inner)) .tt-embed object",
      "&:where(:has(#body-inner)) .tt-embed video"
    ]
  ],
  [
    "design-04048",
    [
      "&:where(:has(#body-inner)) .tt-gallery"
    ]
  ],
  [
    "design-04049",
    [
      "&:where(:has(#body-inner)) .tt-gallery-item"
    ]
  ],
  [
    "design-04050",
    [
      "&:where(:has(#body-inner)) .tt-gallery-item"
    ]
  ],
  [
    "design-04051",
    [
      "&:where(:has(#body-inner)) .tt-gallery-item"
    ]
  ],
  [
    "design-04052",
    [
      "&:where(:has(#body-inner)) .tt-gallery-item"
    ]
  ],
  [
    "design-04053",
    [
      "&:where(:has(#body-inner)) .tt-gallery-item"
    ]
  ],
  [
    "design-04054",
    [
      "&:where(:has(#body-inner)) .tt-grid[class*=\"tt-grid-gap-\"] .tt-gallery-item"
    ]
  ],
  [
    "design-04055",
    [
      "&:where(:has(#body-inner)) .tt-gallery-image"
    ]
  ],
  [
    "design-04056",
    [
      "&:where(:has(#body-inner)) .tt-gallery-image"
    ]
  ],
  [
    "design-04057",
    [
      "&:where(:has(#body-inner)) .tt-gallery-image"
    ]
  ],
  [
    "design-04058",
    [
      "&:where(:has(#body-inner)) .tt-gallery-image"
    ]
  ],
  [
    "design-04059",
    [
      "&:where(:has(#body-inner)) .tt-gallery-image img"
    ]
  ],
  [
    "design-04060",
    [
      "&:where(:has(#body-inner)) .tt-gallery-image img"
    ]
  ],
  [
    "design-04061",
    [
      "&:where(:has(#body-inner)) .tt-gallery-image img"
    ]
  ],
  [
    "design-04062",
    [
      "&:where(:has(#body-inner)) .tt-gallery-image img"
    ]
  ],
  [
    "design-04063",
    [
      "&:where(:has(#body-inner)) .tt-gallery-image img"
    ]
  ],
  [
    "design-04064",
    [
      "&:where(:has(#body-inner)) .tt-gallery-image img"
    ]
  ],
  [
    "design-04065",
    [
      "&:where(:has(#body-inner)) .tt-gallery-image img"
    ]
  ],
  [
    "design-04066",
    [
      "&:where(:has(#body-inner)) .tt-gallery-item:hover .tt-gallery-image img"
    ]
  ],
  [
    "design-04067",
    [
      "&:where(:has(#body-inner)) .tt-gallery-item.tt-gai-portrait .tt-gallery-image img"
    ]
  ],
  [
    "design-04068",
    [
      "&:where(:has(#body-inner)) .tt-gallery-video-wrap"
    ]
  ],
  [
    "design-04069",
    [
      "&:where(:has(#body-inner)) .tt-gallery-video-wrap"
    ]
  ],
  [
    "design-04070",
    [
      "&:where(:has(#body-inner)) .tt-gallery-video"
    ]
  ],
  [
    "design-04071",
    [
      "&:where(:has(#body-inner)) .tt-gallery-video"
    ]
  ],
  [
    "design-04072",
    [
      "&:where(:has(#body-inner)) .tt-gallery-video"
    ]
  ],
  [
    "design-04073",
    [
      "&:where(:has(#body-inner)) .tt-gallery-video"
    ]
  ],
  [
    "design-04074",
    [
      "&:where(:has(#body-inner)) .tt-gallery-video"
    ]
  ],
  [
    "design-04075",
    [
      "&:where(:has(#body-inner)) .tt-gallery-video"
    ]
  ],
  [
    "design-04076",
    [
      "&:where(:has(#body-inner)) .tt-gallery-video"
    ]
  ],
  [
    "design-04077",
    [
      "&:where(:has(#body-inner)) .tt-gallery-item.tt-gai-portrait .tt-gallery-video"
    ]
  ],
  [
    "design-04078",
    [
      "@media (max-width: 639px) { &:where(:has(#body-inner)) .tt-gallery .tt-grid-list }"
    ]
  ],
  [
    "design-04079",
    [
      "@media (max-width: 639px) { &:where(:has(#body-inner)) .tt-gallery .tt-grid-item[class*=\"w-\"] }"
    ]
  ],
  [
    "design-04080",
    [
      "&:where(:has(#body-inner)) .tt-gallery.tt-gai-boxed .tt-gallery-item"
    ]
  ],
  [
    "design-04081",
    [
      "&:where(:has(#body-inner)) .tt-gallery.tt-gai-boxed .tt-gallery-item"
    ]
  ],
  [
    "design-04082",
    [
      "&:where(:has(#body-inner)) .tt-gallery.tt-gai-boxed .tt-gallery-item"
    ]
  ],
  [
    "design-04083",
    [
      "&:where(:has(#body-inner)) .tt-gallery.tt-gai-boxed .tt-gallery-item"
    ]
  ],
  [
    "design-04084",
    [
      "&:where(:has(#body-inner)) .tt-gallery.tt-gai-boxed .tt-gallery-image",
      "&:where(:has(#body-inner)) .tt-gallery.tt-gai-boxed .tt-gallery-video"
    ]
  ],
  [
    "design-04085",
    [
      "&:where(:has(#body-inner)) .tt-gallery.tt-gai-tilted .tt-grid-item:nth-child(2n+1) .tt-gallery-item"
    ]
  ],
  [
    "design-04086",
    [
      "&:where(:has(#body-inner)) .tt-gallery.tt-gai-tilted .tt-grid-item:nth-child(2n) .tt-gallery-item"
    ]
  ],
  [
    "design-04087",
    [
      "&:where(:has(#body-inner)) .tt-clipper"
    ]
  ],
  [
    "design-04088",
    [
      "&:where(:has(#body-inner)) .tt-clipper"
    ]
  ],
  [
    "design-04089",
    [
      "&:where(:has(#body-inner)) .tt-clipper"
    ]
  ],
  [
    "design-04090",
    [
      "&:where(:has(#body-inner)) .tt-clipper-inner"
    ]
  ],
  [
    "design-04091",
    [
      "&:where(:has(#body-inner)) .tt-clipper-inner"
    ]
  ],
  [
    "design-04092",
    [
      "&:where(:has(#body-inner)) .tt-clipper-inner"
    ]
  ],
  [
    "design-04093",
    [
      "&:where(:has(#body-inner)) .tt-clipper-inner"
    ]
  ],
  [
    "design-04094",
    [
      "&:where(:has(#body-inner)) .tt-clipper-inner"
    ]
  ],
  [
    "design-04095",
    [
      "&:where(:has(#body-inner)) .tt-clipper-inner"
    ]
  ],
  [
    "design-04096",
    [
      "&:where(:has(#body-inner)) .tt-clipper-inner"
    ]
  ],
  [
    "design-04097",
    [
      "&:where(:has(#body-inner)) .tt-clipper-inner"
    ]
  ],
  [
    "design-04098",
    [
      "&:where(:has(#body-inner)) .tt-clipper-inner"
    ]
  ],
  [
    "design-04099",
    [
      "&:where(:has(#body-inner)) .tt-clipper-inner"
    ]
  ],
  [
    "design-04100",
    [
      "&:where(:has(#body-inner)) .tt-wrap .tt-clipper-inner"
    ]
  ],
  [
    "design-04101",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-clipper-inner }"
    ]
  ],
  [
    "design-04102",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-wrap .tt-clipper-inner }"
    ]
  ],
  [
    "design-04103",
    [
      "@media (max-width: 991px) { &:where(:has(#body-inner)) .tt-clipper-inner }"
    ]
  ],
  [
    "design-04104",
    [
      "&:where(:has(#body-inner)) .tt-clipper-bg"
    ]
  ],
  [
    "design-04105",
    [
      "&:where(:has(#body-inner)) .tt-clipper-bg"
    ]
  ],
  [
    "design-04106",
    [
      "&:where(:has(#body-inner)) .tt-clipper-bg"
    ]
  ],
  [
    "design-04107",
    [
      "&:where(:has(#body-inner)) .tt-clipper-bg img",
      "&:where(:has(#body-inner)) .tt-clipper-bg video"
    ]
  ],
  [
    "design-04108",
    [
      "&:where(:has(#body-inner)) .tt-clipper-bg img",
      "&:where(:has(#body-inner)) .tt-clipper-bg video"
    ]
  ],
  [
    "design-04109",
    [
      "&:where(:has(#body-inner)) .tt-clipper-bg img",
      "&:where(:has(#body-inner)) .tt-clipper-bg video"
    ]
  ],
  [
    "design-04110",
    [
      "&:where(:has(#body-inner)) .tt-clipper-bg img",
      "&:where(:has(#body-inner)) .tt-clipper-bg video"
    ]
  ],
  [
    "design-04111",
    [
      "&:where(:has(#body-inner)) .tt-clipper-bg .tt-anim-zoomin-wrap",
      "&:where(:has(#body-inner)) .tt-clipper-bg .tt-image-parallax-wrap",
      "&:where(:has(#body-inner)) .tt-clipper-bg .tt-image-parallax-inner"
    ]
  ],
  [
    "design-04112",
    [
      "&:where(:has(#body-inner)) .tt-clipper-bg .tt-anim-zoomin-wrap",
      "&:where(:has(#body-inner)) .tt-clipper-bg .tt-image-parallax-wrap",
      "&:where(:has(#body-inner)) .tt-clipper-bg .tt-image-parallax-inner"
    ]
  ],
  [
    "design-04113",
    [
      "&:where(:has(#body-inner)) [class*=\"tt-clipper-cover-\"] .tt-clipper-bg::before"
    ]
  ],
  [
    "design-04114",
    [
      "&:where(:has(#body-inner)) [class*=\"tt-clipper-cover-\"] .tt-clipper-bg::before"
    ]
  ],
  [
    "design-04115",
    [
      "&:where(:has(#body-inner)) [class*=\"tt-clipper-cover-\"] .tt-clipper-bg::before"
    ]
  ],
  [
    "design-04116",
    [
      "&:where(:has(#body-inner)) [class*=\"tt-clipper-cover-\"] .tt-clipper-bg::before"
    ]
  ],
  [
    "design-04117",
    [
      "&:where(:has(#body-inner)) [class*=\"tt-clipper-cover-\"] .tt-clipper-bg::before"
    ]
  ],
  [
    "design-04118",
    [
      "&:where(:has(#body-inner)) [class*=\"tt-clipper-cover-\"] .tt-clipper-bg::before"
    ]
  ],
  [
    "design-04119",
    [
      "&:where(:has(#body-inner)) [class*=\"tt-clipper-cover-\"] .tt-clipper-bg::before"
    ]
  ],
  [
    "design-04120",
    [
      "&:where(:has(#body-inner)) [class*=\"tt-clipper-cover-\"] .tt-clipper-bg::before"
    ]
  ],
  [
    "design-04121",
    [
      "&:where(:has(#body-inner)) [class*=\"tt-clipper-cover-\"] .tt-clipper-bg::before"
    ]
  ],
  [
    "design-04122",
    [
      "&:where(:has(#body-inner)) [class*=\"tt-clipper-cover-\"] .tt-clipper-bg::before"
    ]
  ],
  [
    "design-04123",
    [
      "&:where(:has(#body-inner)) .tt-clipper-cover-0 .tt-clipper-bg::before"
    ]
  ],
  [
    "design-04124",
    [
      "&:where(:has(#body-inner)) .tt-clipper-cover-0-5 .tt-clipper-bg::before"
    ]
  ],
  [
    "design-04125",
    [
      "&:where(:has(#body-inner)) .tt-clipper-cover-1 .tt-clipper-bg::before"
    ]
  ],
  [
    "design-04126",
    [
      "&:where(:has(#body-inner)) .tt-clipper-cover-1-5 .tt-clipper-bg::before"
    ]
  ],
  [
    "design-04127",
    [
      "&:where(:has(#body-inner)) .tt-clipper-cover-2 .tt-clipper-bg::before"
    ]
  ],
  [
    "design-04128",
    [
      "&:where(:has(#body-inner)) .tt-clipper-cover-2-5 .tt-clipper-bg::before"
    ]
  ],
  [
    "design-04129",
    [
      "&:where(:has(#body-inner)) .tt-clipper-cover-3 .tt-clipper-bg::before"
    ]
  ],
  [
    "design-04130",
    [
      "&:where(:has(#body-inner)) .tt-clipper-cover-3-5 .tt-clipper-bg::before"
    ]
  ],
  [
    "design-04131",
    [
      "&:where(:has(#body-inner)) .tt-clipper-cover-4 .tt-clipper-bg::before"
    ]
  ],
  [
    "design-04132",
    [
      "&:where(:has(#body-inner)) .tt-clipper-cover-4-5 .tt-clipper-bg::before"
    ]
  ],
  [
    "design-04133",
    [
      "&:where(:has(#body-inner)) .tt-clipper-cover-5 .tt-clipper-bg::before"
    ]
  ],
  [
    "design-04134",
    [
      "&:where(:has(#body-inner)) .tt-clipper-cover-5-5 .tt-clipper-bg::before"
    ]
  ],
  [
    "design-04135",
    [
      "&:where(:has(#body-inner)) .tt-clipper-cover-6 .tt-clipper-bg::before"
    ]
  ],
  [
    "design-04136",
    [
      "&:where(:has(#body-inner)) .tt-clipper-cover-6-5 .tt-clipper-bg::before"
    ]
  ],
  [
    "design-04137",
    [
      "&:where(:has(#body-inner)) .tt-clipper-cover-7 .tt-clipper-bg::before"
    ]
  ],
  [
    "design-04138",
    [
      "&:where(:has(#body-inner)) .tt-clipper-cover-7-5 .tt-clipper-bg::before"
    ]
  ],
  [
    "design-04139",
    [
      "&:where(:has(#body-inner)) .tt-clipper-cover-8 .tt-clipper-bg::before"
    ]
  ],
  [
    "design-04140",
    [
      "&:where(:has(#body-inner)) .tt-clipper-cover-8-5 .tt-clipper-bg::before"
    ]
  ],
  [
    "design-04141",
    [
      "&:where(:has(#body-inner)) .tt-clipper-cover-9 .tt-clipper-bg::before"
    ]
  ],
  [
    "design-04142",
    [
      "&:where(:has(#body-inner)) .tt-clipper-cover-9-5 .tt-clipper-bg::before"
    ]
  ],
  [
    "design-04143",
    [
      "&:where(:has(#body-inner)) .tt-clipper.tt-clipper-grayscale .tt-clipper-bg"
    ]
  ],
  [
    "design-04144",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-clipper-btn"
    ]
  ],
  [
    "design-04145",
    [
      "&:where(:has(#body-inner)) .tt-clipper-btn"
    ]
  ],
  [
    "design-04146",
    [
      "&:where(:has(#body-inner)) .tt-clipper-btn"
    ]
  ],
  [
    "design-04147",
    [
      "&:where(:has(#body-inner)) .tt-clipper-btn"
    ]
  ],
  [
    "design-04148",
    [
      "&:where(:has(#body-inner)) .tt-clipper-btn"
    ]
  ],
  [
    "design-04149",
    [
      "&:where(:has(#body-inner)) .tt-clipper-btn"
    ]
  ],
  [
    "design-04150",
    [
      "&:where(:has(#body-inner)) .tt-clipper-btn"
    ]
  ],
  [
    "design-04151",
    [
      "&:where(:has(#body-inner)) .tt-clipper-btn"
    ]
  ],
  [
    "design-04152",
    [
      "&:where(:has(#body-inner)) .tt-clipper-btn"
    ]
  ],
  [
    "design-04153",
    [
      "&:where(:has(#body-inner)) .tt-clipper-btn"
    ]
  ],
  [
    "design-04154",
    [
      "&:where(:has(#body-inner)) .tt-clipper-btn"
    ]
  ],
  [
    "design-04155",
    [
      "&:where(:has(#body-inner)) .tt-clipper-btn"
    ]
  ],
  [
    "design-04156",
    [
      "&:where(:has(#body-inner)) .tt-clipper-btn"
    ]
  ],
  [
    "design-04157",
    [
      "&:where(:has(#body-inner)) .tt-moving-images"
    ]
  ],
  [
    "design-04158",
    [
      "&:where(:has(#body-inner)) .tt-moving-images"
    ]
  ],
  [
    "design-04159",
    [
      "&:where(:has(#body-inner)) .tt-moving-images"
    ]
  ],
  [
    "design-04160",
    [
      "&:where(:has(#body-inner)) .tt-moi-list"
    ]
  ],
  [
    "design-04161",
    [
      "&:where(:has(#body-inner)) .tt-moi-list"
    ]
  ],
  [
    "design-04162",
    [
      "&:where(:has(#body-inner)) .tt-moving-images:not(.tt-moi-equal).tt-moi-top .tt-moi-list"
    ]
  ],
  [
    "design-04163",
    [
      "&:where(:has(#body-inner)) .tt-moving-images:not(.tt-moi-equal).tt-moi-bottom .tt-moi-list"
    ]
  ],
  [
    "design-04164",
    [
      "&:where(:has(#body-inner)) .tt-moi-item"
    ]
  ],
  [
    "design-04165",
    [
      "&:where(:has(#body-inner)) .tt-moi-item-inner"
    ]
  ],
  [
    "design-04166",
    [
      "&:where(:has(#body-inner)) .tt-moi-item-inner"
    ]
  ],
  [
    "design-04167",
    [
      "&:where(:has(#body-inner)) .tt-moi-item-inner"
    ]
  ],
  [
    "design-04168",
    [
      "&:where(:has(#body-inner)) .tt-moi-item-inner"
    ]
  ],
  [
    "design-04169",
    [
      "&:where(:has(#body-inner)) .tt-moi-item-inner"
    ]
  ],
  [
    "design-04170",
    [
      "&:where(:has(#body-inner)) .tt-moi-item img"
    ]
  ],
  [
    "design-04171",
    [
      "&:where(:has(#body-inner)) .tt-moi-item img"
    ]
  ],
  [
    "design-04172",
    [
      "&:where(:has(#body-inner)) .tt-moi-item img"
    ]
  ],
  [
    "design-04173",
    [
      "&:where(:has(#body-inner)) .tt-moi-item img"
    ]
  ],
  [
    "design-04174",
    [
      "&:where(:has(#body-inner)) .tt-moi-item img"
    ]
  ],
  [
    "design-04175",
    [
      "&:where(:has(#body-inner)) .tt-moi-item img"
    ]
  ],
  [
    "design-04176",
    [
      "&:where(:has(#body-inner)) .tt-moving-images:not(.tt-moi-equal).tt-moi-bottom .tt-moi-item:nth-child(1)"
    ]
  ],
  [
    "design-04177",
    [
      "&:where(:has(#body-inner)) .tt-moving-images:not(.tt-moi-equal).tt-moi-bottom .tt-moi-item:nth-child(2)"
    ]
  ],
  [
    "design-04178",
    [
      "&:where(:has(#body-inner)) .tt-moving-images:not(.tt-moi-equal).tt-moi-bottom .tt-moi-item:nth-child(3)"
    ]
  ],
  [
    "design-04179",
    [
      "&:where(:has(#body-inner)) .tt-moving-images:not(.tt-moi-equal).tt-moi-bottom .tt-moi-item:nth-child(4)"
    ]
  ],
  [
    "design-04180",
    [
      "&:where(:has(#body-inner)) .tt-moving-images:not(.tt-moi-equal).tt-moi-bottom .tt-moi-item:nth-child(5)"
    ]
  ],
  [
    "design-04181",
    [
      "&:where(:has(#body-inner)) .tt-moving-images:not(.tt-moi-equal).tt-moi-top .tt-moi-item:nth-child(1)"
    ]
  ],
  [
    "design-04182",
    [
      "&:where(:has(#body-inner)) .tt-moving-images:not(.tt-moi-equal).tt-moi-top .tt-moi-item:nth-child(2)"
    ]
  ],
  [
    "design-04183",
    [
      "&:where(:has(#body-inner)) .tt-moving-images:not(.tt-moi-equal).tt-moi-top .tt-moi-item:nth-child(3)"
    ]
  ],
  [
    "design-04184",
    [
      "&:where(:has(#body-inner)) .tt-moving-images:not(.tt-moi-equal).tt-moi-top .tt-moi-item:nth-child(4)"
    ]
  ],
  [
    "design-04185",
    [
      "&:where(:has(#body-inner)) .tt-moving-images:not(.tt-moi-equal).tt-moi-top .tt-moi-item:nth-child(5)"
    ]
  ],
  [
    "design-04186",
    [
      "&:where(:has(#body-inner)) .tt-moving-images.tt-moi-boxed .tt-moi-item-inner"
    ]
  ],
  [
    "design-04187",
    [
      "&:where(:has(#body-inner)) .tt-moving-images.tt-moi-boxed .tt-moi-item-inner"
    ]
  ],
  [
    "design-04188",
    [
      "&:where(:has(#body-inner)) .tt-moving-images.tt-moi-boxed .tt-moi-item-inner"
    ]
  ],
  [
    "design-04189",
    [
      "&:where(:has(#body-inner)) .tt-moving-images.tt-moi-boxed .tt-moi-item-inner"
    ]
  ],
  [
    "design-04190",
    [
      "&:where(:has(#body-inner)) .tt-moving-images.tt-moi-boxed .tt-moi-item-inner"
    ]
  ],
  [
    "design-04191",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-moving-images.tt-moi-boxed .tt-moi-item-inner }"
    ]
  ],
  [
    "design-04192",
    [
      "&:where(:has(#body-inner)) .tt-moving-images.tt-moi-boxed .tt-moi-item img"
    ]
  ],
  [
    "design-04193",
    [
      "&:where(:has(#body-inner)) .tt-moving-images.tt-moi-tilted-1 .tt-moi-item:nth-child(2n+1)"
    ]
  ],
  [
    "design-04194",
    [
      "&:where(:has(#body-inner)) .tt-moving-images.tt-moi-tilted-1 .tt-moi-item:nth-child(2n)"
    ]
  ],
  [
    "design-04195",
    [
      "&:where(:has(#body-inner)) .tt-moving-images.tt-moi-tilted-2 .tt-moi-item:nth-child(2n+1)"
    ]
  ],
  [
    "design-04196",
    [
      "&:where(:has(#body-inner)) .tt-moving-images.tt-moi-tilted-2 .tt-moi-item:nth-child(2n)"
    ]
  ],
  [
    "design-04197",
    [
      "&:where(:has(#body-inner)) .tt-sticky-horizontal-scroll"
    ]
  ],
  [
    "design-04198",
    [
      "&:where(:has(#body-inner)) .tt-shs-pin-wrap"
    ]
  ],
  [
    "design-04199",
    [
      "&:where(:has(#body-inner)) .tt-shs-animation-wrap"
    ]
  ],
  [
    "design-04200",
    [
      "&:where(:has(#body-inner)) .tt-shs-animation-wrap"
    ]
  ],
  [
    "design-04201",
    [
      "&:where(:has(#body-inner)) .tt-shs-animation-wrap"
    ]
  ],
  [
    "design-04202",
    [
      "&:where(:has(#body-inner)) .tt-shs-animation-wrap"
    ]
  ],
  [
    "design-04203",
    [
      "&:where(:has(#body-inner)) .tt-shs-animation-wrap"
    ]
  ],
  [
    "design-04204",
    [
      "&:where(:has(#body-inner)) .tt-shs-item"
    ]
  ],
  [
    "design-04205",
    [
      "&:where(:has(#body-inner)) .tt-shs-item:first-child"
    ]
  ],
  [
    "design-04206",
    [
      "&:where(:has(#body-inner)) .tt-shs-item:last-child"
    ]
  ],
  [
    "design-04207",
    [
      "&:where(:has(#body-inner)) .tt-shs-item-inner"
    ]
  ],
  [
    "design-04208",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-shs-item-inner }"
    ]
  ],
  [
    "design-04209",
    [
      "&:where(:has(#body-inner)) a.tt-shs-item-inner"
    ]
  ],
  [
    "design-04210",
    [
      "&:where(:has(#body-inner)) .tt-shs-item-image"
    ]
  ],
  [
    "design-04211",
    [
      "&:where(:has(#body-inner)) .tt-shs-item-image-inner"
    ]
  ],
  [
    "design-04212",
    [
      "&:where(:has(#body-inner)) .tt-shs-item-image-inner"
    ]
  ],
  [
    "design-04213",
    [
      "&:where(:has(#body-inner)) .tt-shs-item-image .tt-anim-zoomin-wrap"
    ]
  ],
  [
    "design-04214",
    [
      "&:where(:has(#body-inner)) .tt-shs-item-image .tt-anim-zoomin-wrap"
    ]
  ],
  [
    "design-04215",
    [
      "&:where(:has(#body-inner)) .tt-shs-item-image img"
    ]
  ],
  [
    "design-04216",
    [
      "&:where(:has(#body-inner)) .tt-shs-item-image img"
    ]
  ],
  [
    "design-04217",
    [
      "&:where(:has(#body-inner)) .tt-shs-item-image img"
    ]
  ],
  [
    "design-04218",
    [
      "&:where(:has(#body-inner)) .tt-shs-item-image img"
    ]
  ],
  [
    "design-04219",
    [
      "&:where(:has(#body-inner)) .tt-shs-item-image img"
    ]
  ],
  [
    "design-04220",
    [
      "&:where(:has(#body-inner)) .tt-shs-item-image img"
    ]
  ],
  [
    "design-04221",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-shs-item-image figcaption .figcaption-inner }"
    ]
  ],
  [
    "design-04222",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-shs-item-image figcaption .figcaption-inner }"
    ]
  ],
  [
    "design-04223",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-shs-item-image figcaption .figcaption-inner }"
    ]
  ],
  [
    "design-04224",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-shs-item-image figcaption .figcaption-inner }"
    ]
  ],
  [
    "design-04225",
    [
      "&:where(:has(#body-inner)) .tt-sticky-horizontal-scroll.tt-shs-boxed"
    ]
  ],
  [
    "design-04226",
    [
      "&:where(:has(#body-inner)) .tt-sticky-horizontal-scroll.tt-shs-boxed .tt-shs-item-image-inner"
    ]
  ],
  [
    "design-04227",
    [
      "&:where(:has(#body-inner)) .tt-sticky-horizontal-scroll.tt-shs-boxed .tt-shs-item-image-inner"
    ]
  ],
  [
    "design-04228",
    [
      "&:where(:has(#body-inner)) .tt-sticky-horizontal-scroll.tt-shs-boxed .tt-shs-item-image-inner"
    ]
  ],
  [
    "design-04229",
    [
      "&:where(:has(#body-inner)) .tt-sticky-horizontal-scroll.tt-shs-boxed .tt-shs-item-image-inner"
    ]
  ],
  [
    "design-04230",
    [
      "&:where(:has(#body-inner)) .tt-sticky-horizontal-scroll.tt-shs-boxed .tt-shs-item-image img"
    ]
  ],
  [
    "design-04231",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-sticky-horizontal-scroll.tt-shs-boxed .tt-shs-item-image figcaption }"
    ]
  ],
  [
    "design-04232",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-sticky-horizontal-scroll.tt-shs-boxed .tt-shs-item-image figcaption }"
    ]
  ],
  [
    "design-04233",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-sticky-horizontal-scroll.tt-shs-boxed .tt-shs-item-image figcaption }"
    ]
  ],
  [
    "design-04234",
    [
      "&:where(:has(#body-inner)) .tt-sticky-horizontal-scroll.tt-shs-tilted .tt-shs-item:nth-child(2n+1)"
    ]
  ],
  [
    "design-04235",
    [
      "&:where(:has(#body-inner)) .tt-sticky-horizontal-scroll.tt-shs-tilted .tt-shs-item:nth-child(2n)"
    ]
  ],
  [
    "design-04236",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-shs-keep-scrolling"
    ]
  ],
  [
    "design-04237",
    [
      "&:where(:has(#body-inner)) .tt-shs-keep-scrolling"
    ]
  ],
  [
    "design-04238",
    [
      "&:where(:has(#body-inner)) .tt-shs-keep-scrolling"
    ]
  ],
  [
    "design-04239",
    [
      "&:where(:has(#body-inner)) .tt-shs-keep-scrolling"
    ]
  ],
  [
    "design-04240",
    [
      "&:where(:has(#body-inner)) .tt-shs-keep-scrolling"
    ]
  ],
  [
    "design-04241",
    [
      "&:where(:has(#body-inner)) .tt-shs-keep-scrolling"
    ]
  ],
  [
    "design-04242",
    [
      "&:where(:has(#body-inner)) .tt-shs-keep-scrolling"
    ]
  ],
  [
    "design-04243",
    [
      "&:where(:has(#body-inner)) .tt-shs-keep-scrolling"
    ]
  ],
  [
    "design-04244",
    [
      "&:where(:has(#body-inner)) .tt-shs-keep-scrolling"
    ]
  ],
  [
    "design-04245",
    [
      "&:where(:has(#body-inner)) .tt-shs-keep-scrolling"
    ]
  ],
  [
    "design-04246",
    [
      "&:where(:has(#body-inner)) .tt-shs-keep-scrolling"
    ]
  ],
  [
    "design-04247",
    [
      "&:where(:has(#body-inner)) .tt-shs-keep-scrolling"
    ]
  ],
  [
    "design-04248",
    [
      "&:where(:has(#body-inner)) .tt-sticky-horizontal-scroll.is-pinned .tt-shs-keep-scrolling"
    ]
  ],
  [
    "design-04249",
    [
      "&:where(:has(#body-inner)) .tt-sticky-horizontal-scroll.is-pinned .tt-shs-keep-scrolling"
    ]
  ],
  [
    "design-04250",
    [
      "&:where(:has(#body-inner)) .tt-shs-keep-scrolling span"
    ]
  ],
  [
    "design-04251",
    [
      "&:where(:has(#body-inner)) .tt-shs-keep-scrolling i"
    ]
  ],
  [
    "design-04252",
    [
      "&:where(:has(#body-inner)) .tt-shs-keep-scrolling i"
    ]
  ],
  [
    "design-04253",
    [
      "&:where(:has(#body-inner)) .tt-content-slider"
    ]
  ],
  [
    "design-04254",
    [
      "&:where(:has(#body-inner)) .tt-content-slider"
    ]
  ],
  [
    "design-04255",
    [
      "&:where(:has(#body-inner)) .tt-content-slider .swiper"
    ]
  ],
  [
    "design-04256",
    [
      "&:where(:has(#body-inner)) .tt-wrap .tt-content-slider .swiper"
    ]
  ],
  [
    "design-04257",
    [
      "&:where(:has(#body-inner)) .tt-content-slider-item"
    ]
  ],
  [
    "design-04258",
    [
      "&:where(:has(#body-inner)) .tt-content-slider-item"
    ]
  ],
  [
    "design-04259",
    [
      "&:where(:has(#body-inner)) .tt-content-slider-item"
    ]
  ],
  [
    "design-04260",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-content-slider-item }"
    ]
  ],
  [
    "design-04261",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-content-slider-item }"
    ]
  ],
  [
    "design-04262",
    [
      "&:where(:has(#body-inner)) .tt-wrap .tt-content-slider-item"
    ]
  ],
  [
    "design-04263",
    [
      "&:where(:has(#body-inner)) .tt-wrap .tt-content-slider-item"
    ]
  ],
  [
    "design-04264",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-content-slider-item }",
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-wrap .tt-content-slider-item }"
    ]
  ],
  [
    "design-04265",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-content-slider-item }",
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-wrap .tt-content-slider-item }"
    ]
  ],
  [
    "design-04266",
    [
      "&:where(:has(#body-inner)) .tt-cs-image-wrap"
    ]
  ],
  [
    "design-04267",
    [
      "&:where(:has(#body-inner)) .tt-cs-image-wrap"
    ]
  ],
  [
    "design-04268",
    [
      "&:where(:has(#body-inner)) .tt-cs-image",
      "&:where(:has(#body-inner)) .tt-cs-video"
    ]
  ],
  [
    "design-04269",
    [
      "&:where(:has(#body-inner)) .tt-cs-image",
      "&:where(:has(#body-inner)) .tt-cs-video"
    ]
  ],
  [
    "design-04270",
    [
      "&:where(:has(#body-inner)) .tt-cs-image",
      "&:where(:has(#body-inner)) .tt-cs-video"
    ]
  ],
  [
    "design-04271",
    [
      "&:where(:has(#body-inner)) .tt-cs-image",
      "&:where(:has(#body-inner)) .tt-cs-video"
    ]
  ],
  [
    "design-04272",
    [
      "&:where(:has(#body-inner)) .tt-content-slider-item .tt-anim-zoomin-wrap",
      "&:where(:has(#body-inner)) .tt-content-slider-item .tt-image-parallax-wrap",
      "&:where(:has(#body-inner)) .tt-content-slider-item .tt-image-parallax-inner"
    ]
  ],
  [
    "design-04273",
    [
      "&:where(:has(#body-inner)) .tt-content-slider-item .tt-anim-zoomin-wrap",
      "&:where(:has(#body-inner)) .tt-content-slider-item .tt-image-parallax-wrap",
      "&:where(:has(#body-inner)) .tt-content-slider-item .tt-image-parallax-inner"
    ]
  ],
  [
    "design-04274",
    [
      "&:where(:has(#body-inner)) .tt-content-slider .swiper-lazy-preloader"
    ]
  ],
  [
    "design-04275",
    [
      "&:where(:has(#body-inner)) .tt-content-slider .swiper-lazy-preloader"
    ]
  ],
  [
    "design-04276",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-prev",
      "&:where(:has(#body-inner)) .tt-cs-nav-next"
    ]
  ],
  [
    "design-04277",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-prev",
      "&:where(:has(#body-inner)) .tt-cs-nav-next"
    ]
  ],
  [
    "design-04278",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-prev",
      "&:where(:has(#body-inner)) .tt-cs-nav-next"
    ]
  ],
  [
    "design-04279",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-prev",
      "&:where(:has(#body-inner)) .tt-cs-nav-next"
    ]
  ],
  [
    "design-04280",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-prev",
      "&:where(:has(#body-inner)) .tt-cs-nav-next"
    ]
  ],
  [
    "design-04281",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-prev",
      "&:where(:has(#body-inner)) .tt-cs-nav-next"
    ]
  ],
  [
    "design-04282",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-prev",
      "&:where(:has(#body-inner)) .tt-cs-nav-next"
    ]
  ],
  [
    "design-04283",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-prev",
      "&:where(:has(#body-inner)) .tt-cs-nav-next"
    ]
  ],
  [
    "design-04284",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-prev",
      "&:where(:has(#body-inner)) .tt-cs-nav-next"
    ]
  ],
  [
    "design-04285",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-prev"
    ]
  ],
  [
    "design-04286",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-prev"
    ]
  ],
  [
    "design-04287",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-prev"
    ]
  ],
  [
    "design-04288",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-next"
    ]
  ],
  [
    "design-04289",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-next"
    ]
  ],
  [
    "design-04290",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-next"
    ]
  ],
  [
    "design-04291",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-next:not([class*=\"cursor-arrow-\"])",
      "&:where(:has(#body-inner)) .tt-cs-nav-prev:not([class*=\"cursor-arrow-\"])",
      "&:where(:has(#body-inner)) body.is-mobile .tt-cs-nav-next",
      "&:where(:has(#body-inner)) body.is-mobile .tt-cs-nav-prev",
      "&:where(:has(#body-inner)) body.is-mobile .tt-cs-nav-next"
    ]
  ],
  [
    "design-04292",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-arrow"
    ]
  ],
  [
    "design-04293",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-arrow"
    ]
  ],
  [
    "design-04294",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-arrow"
    ]
  ],
  [
    "design-04295",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-arrow"
    ]
  ],
  [
    "design-04296",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-arrow"
    ]
  ],
  [
    "design-04297",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-arrow"
    ]
  ],
  [
    "design-04298",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-arrow"
    ]
  ],
  [
    "design-04299",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-arrow"
    ]
  ],
  [
    "design-04300",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-arrow"
    ]
  ],
  [
    "design-04301",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-arrow"
    ]
  ],
  [
    "design-04302",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-arrow"
    ]
  ],
  [
    "design-04303",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-arrow"
    ]
  ],
  [
    "design-04304",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-arrow"
    ]
  ],
  [
    "design-04305",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-arrow"
    ]
  ],
  [
    "design-04306",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-arrow:hover"
    ]
  ],
  [
    "design-04307",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-next:not([class*=\"cursor-arrow-\"]) .tt-cs-nav-arrow",
      "&:where(:has(#body-inner)) .tt-cs-nav-prev:not([class*=\"cursor-arrow-\"]) .tt-cs-nav-arrow",
      "&:where(:has(#body-inner)) body.is-mobile .tt-cs-nav-arrow",
      "&:where(:has(#body-inner)) body.is-mobile .tt-cs-nav-arrow"
    ]
  ],
  [
    "design-04308",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-next:not([class*=\"cursor-arrow-\"]) .tt-cs-nav-arrow",
      "&:where(:has(#body-inner)) .tt-cs-nav-prev:not([class*=\"cursor-arrow-\"]) .tt-cs-nav-arrow",
      "&:where(:has(#body-inner)) body.is-mobile .tt-cs-nav-arrow",
      "&:where(:has(#body-inner)) body.is-mobile .tt-cs-nav-arrow"
    ]
  ],
  [
    "design-04309",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-cs-nav-arrow }"
    ]
  ],
  [
    "design-04310",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-cs-nav-arrow }"
    ]
  ],
  [
    "design-04311",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-cs-nav-arrow }"
    ]
  ],
  [
    "design-04312",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-arrow::after"
    ]
  ],
  [
    "design-04313",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-arrow::after"
    ]
  ],
  [
    "design-04314",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-arrow::after"
    ]
  ],
  [
    "design-04315",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-arrow::after"
    ]
  ],
  [
    "design-04316",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-arrow::after"
    ]
  ],
  [
    "design-04317",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-arrow::after"
    ]
  ],
  [
    "design-04318",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-arrow::after"
    ]
  ],
  [
    "design-04319",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-arrow::after"
    ]
  ],
  [
    "design-04320",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-prev .tt-cs-nav-arrow::after"
    ]
  ],
  [
    "design-04321",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-next .tt-cs-nav-arrow::after"
    ]
  ],
  [
    "design-04322",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-arrow-disabled .tt-cs-nav-arrow"
    ]
  ],
  [
    "design-04323",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-arrow-disabled .tt-cs-nav-arrow"
    ]
  ],
  [
    "design-04324",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-arrow-disabled .tt-cs-nav-arrow"
    ]
  ],
  [
    "design-04325",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-arrow-disabled .tt-cs-nav-arrow"
    ]
  ],
  [
    "design-04326",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-arrow-disabled.cursor-arrow-left",
      "&:where(:has(#body-inner)) .tt-cs-nav-arrow-disabled.cursor-arrow-right"
    ]
  ],
  [
    "design-04327",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-arrow-disabled.cursor-arrow-left",
      "&:where(:has(#body-inner)) .tt-cs-nav-arrow-disabled.cursor-arrow-right"
    ]
  ],
  [
    "design-04328",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-arrow-disabled.cursor-arrow-left",
      "&:where(:has(#body-inner)) .tt-cs-nav-arrow-disabled.cursor-arrow-right"
    ]
  ],
  [
    "design-04329",
    [
      "&:where(:has(#body-inner)) .tt-cs-nav-arrow-disabled.cursor-arrow-left",
      "&:where(:has(#body-inner)) .tt-cs-nav-arrow-disabled.cursor-arrow-right"
    ]
  ],
  [
    "design-04330",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination"
    ]
  ],
  [
    "design-04331",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination"
    ]
  ],
  [
    "design-04332",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination"
    ]
  ],
  [
    "design-04333",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination"
    ]
  ],
  [
    "design-04334",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination"
    ]
  ],
  [
    "design-04335",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination"
    ]
  ],
  [
    "design-04336",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination .tt-cs-pagination-bullets"
    ]
  ],
  [
    "design-04337",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination .swiper-pagination-bullet"
    ]
  ],
  [
    "design-04338",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination .swiper-pagination-bullet"
    ]
  ],
  [
    "design-04339",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination .swiper-pagination-bullet"
    ]
  ],
  [
    "design-04340",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination .swiper-pagination-bullet"
    ]
  ],
  [
    "design-04341",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination .swiper-pagination-bullet"
    ]
  ],
  [
    "design-04342",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination .swiper-pagination-bullet"
    ]
  ],
  [
    "design-04343",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination .swiper-pagination-bullet"
    ]
  ],
  [
    "design-04344",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination .swiper-pagination-bullet"
    ]
  ],
  [
    "design-04345",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination .swiper-pagination-bullet-active"
    ]
  ],
  [
    "design-04346",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination .swiper-pagination-bullet-active"
    ]
  ],
  [
    "design-04347",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination-bullets-dynamic"
    ]
  ],
  [
    "design-04348",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination-bullets-dynamic"
    ]
  ],
  [
    "design-04349",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination-bullets-dynamic"
    ]
  ],
  [
    "design-04350",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination-bullets-dynamic .swiper-pagination-bullet"
    ]
  ],
  [
    "design-04351",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination-bullets-dynamic .swiper-pagination-bullet"
    ]
  ],
  [
    "design-04352",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination-bullets-dynamic .swiper-pagination-bullet"
    ]
  ],
  [
    "design-04353",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev"
    ]
  ],
  [
    "design-04354",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev"
    ]
  ],
  [
    "design-04355",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination-bullets-dynamic .swiper-pagination-bullet-active-next"
    ]
  ],
  [
    "design-04356",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next"
    ]
  ],
  [
    "design-04357",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination-bullets-dynamic .swiper-pagination-bullet-active-main"
    ]
  ],
  [
    "design-04358",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination-fraction"
    ]
  ],
  [
    "design-04359",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination-fraction"
    ]
  ],
  [
    "design-04360",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination-fraction"
    ]
  ],
  [
    "design-04361",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination-fraction"
    ]
  ],
  [
    "design-04362",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination-fraction"
    ]
  ],
  [
    "design-04363",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination-fraction"
    ]
  ],
  [
    "design-04364",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination-fraction"
    ]
  ],
  [
    "design-04365",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination-progressbar"
    ]
  ],
  [
    "design-04366",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination-progressbar"
    ]
  ],
  [
    "design-04367",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination-progressbar"
    ]
  ],
  [
    "design-04368",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination-progressbar"
    ]
  ],
  [
    "design-04369",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-cs-pagination-progressbar }"
    ]
  ],
  [
    "design-04370",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-04371",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-04372",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-04373",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-04374",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-04375",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-04376",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-04377",
    [
      "&:where(:has(#body-inner)) .tt-cs-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-04378",
    [
      "&:where(:has(#body-inner)) .tt-content-slider.tt-cs-pagination-outside:not(.tt-cs-hide-pagination)"
    ]
  ],
  [
    "design-04379",
    [
      "&:where(:has(#body-inner)) .tt-content-slider.tt-cs-pagination-outside:not(.tt-cs-hide-pagination)"
    ]
  ],
  [
    "design-04380",
    [
      "&:where(:has(#body-inner)) .tt-content-slider.tt-cs-pagination-outside:not(.tt-cs-hide-pagination) .tt-cs-pagination"
    ]
  ],
  [
    "design-04381",
    [
      "&:where(:has(#body-inner)) .tt-content-slider.tt-cs-pagination-outside:not(.tt-cs-hide-pagination) .swiper-pagination-bullet:not(.swiper-pagination-bullet-active)"
    ]
  ],
  [
    "design-04382",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-content-slider.tt-cs-pagination-outside }"
    ]
  ],
  [
    "design-04383",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-content-slider.tt-cs-pagination-outside }"
    ]
  ],
  [
    "design-04384",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-content-slider.tt-cs-pagination-outside .tt-cs-pagination }"
    ]
  ],
  [
    "design-04385",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-content-slider.tt-cs-hide-pagination .tt-cs-pagination }"
    ]
  ],
  [
    "design-04386",
    [
      "&:where(:has(#body-inner)) .tt-content-slider.tt-cs-boxed"
    ]
  ],
  [
    "design-04387",
    [
      "&:where(:has(#body-inner)) .tt-content-slider.tt-cs-boxed"
    ]
  ],
  [
    "design-04388",
    [
      "&:where(:has(#body-inner)) .tt-content-slider.tt-cs-boxed"
    ]
  ],
  [
    "design-04389",
    [
      "&:where(:has(#body-inner)) .tt-content-slider.tt-cs-boxed"
    ]
  ],
  [
    "design-04390",
    [
      "&:where(:has(#body-inner)) .tt-content-slider.tt-cs-boxed"
    ]
  ],
  [
    "design-04391",
    [
      "&:where(:has(#body-inner)) .tt-content-slider.tt-cs-boxed"
    ]
  ],
  [
    "design-04392",
    [
      "&:where(:has(#body-inner)) .tt-content-slider.tt-cs-boxed:not(.tt-cs-pagination-outside) .tt-cs-pagination"
    ]
  ],
  [
    "design-04393",
    [
      "&:where(:has(#body-inner)) .tt-content-slider.tt-cs-boxed .swiper"
    ]
  ],
  [
    "design-04394",
    [
      "&:where(:has(#body-inner)) .tt-content-slider.tt-cs-tilted-1"
    ]
  ],
  [
    "design-04395",
    [
      "&:where(:has(#body-inner)) .tt-content-slider.tt-cs-tilted-2"
    ]
  ],
  [
    "design-04396",
    [
      "&:where(:has(#body-inner)) .tt-content-carousel"
    ]
  ],
  [
    "design-04397",
    [
      "&:where(:has(#body-inner)) .tt-content-carousel-item"
    ]
  ],
  [
    "design-04398",
    [
      "&:where(:has(#body-inner)) .tt-content-carousel-item"
    ]
  ],
  [
    "design-04399",
    [
      "&:where(:has(#body-inner)) .tt-content-carousel-item"
    ]
  ],
  [
    "design-04400",
    [
      "&:where(:has(#body-inner)) .tt-content-carousel-item"
    ]
  ],
  [
    "design-04401",
    [
      "&:where(:has(#body-inner)) .tt-content-carousel-item"
    ]
  ],
  [
    "design-04402",
    [
      "&:where(:has(#body-inner)) .tt-content-carousel[data-size-small=\"true\"] .tt-content-carousel-item"
    ]
  ],
  [
    "design-04403",
    [
      "&:where(:has(#body-inner)) .tt-content-carousel[data-size-small=\"true\"] .tt-content-carousel-item"
    ]
  ],
  [
    "design-04404",
    [
      "&:where(:has(#body-inner)) .tt-cc-image-wrap"
    ]
  ],
  [
    "design-04405",
    [
      "&:where(:has(#body-inner)) .tt-cc-image-wrap"
    ]
  ],
  [
    "design-04406",
    [
      "&:where(:has(#body-inner)) .tt-cc-image",
      "&:where(:has(#body-inner)) .tt-cc-video"
    ]
  ],
  [
    "design-04407",
    [
      "&:where(:has(#body-inner)) .tt-cc-image",
      "&:where(:has(#body-inner)) .tt-cc-video"
    ]
  ],
  [
    "design-04408",
    [
      "&:where(:has(#body-inner)) .tt-cc-image",
      "&:where(:has(#body-inner)) .tt-cc-video"
    ]
  ],
  [
    "design-04409",
    [
      "&:where(:has(#body-inner)) .tt-cc-image",
      "&:where(:has(#body-inner)) .tt-cc-video"
    ]
  ],
  [
    "design-04410",
    [
      "&:where(:has(#body-inner)) .tt-cc-image",
      "&:where(:has(#body-inner)) .tt-cc-video",
      "&:where(:has(#body-inner)) .tt-content-carousel-item .tt-anim-zoomin-wrap",
      "&:where(:has(#body-inner)) .tt-content-carousel-item .tt-image-parallax-wrap"
    ]
  ],
  [
    "design-04411",
    [
      "&:where(:has(#body-inner)) .tt-cc-image",
      "&:where(:has(#body-inner)) .tt-cc-video",
      "&:where(:has(#body-inner)) .tt-content-carousel-item .tt-anim-zoomin-wrap",
      "&:where(:has(#body-inner)) .tt-content-carousel-item .tt-image-parallax-wrap"
    ]
  ],
  [
    "design-04412",
    [
      "&:where(:has(#body-inner)) .tt-content-carousel .swiper-lazy-preloader"
    ]
  ],
  [
    "design-04413",
    [
      "&:where(:has(#body-inner)) .tt-content-carousel .swiper-lazy-preloader"
    ]
  ],
  [
    "design-04414",
    [
      "&:where(:has(#body-inner)) .tt-cc-nav-prev",
      "&:where(:has(#body-inner)) .tt-cc-nav-next"
    ]
  ],
  [
    "design-04415",
    [
      "&:where(:has(#body-inner)) .tt-cc-nav-prev",
      "&:where(:has(#body-inner)) .tt-cc-nav-next"
    ]
  ],
  [
    "design-04416",
    [
      "&:where(:has(#body-inner)) .tt-cc-nav-prev",
      "&:where(:has(#body-inner)) .tt-cc-nav-next"
    ]
  ],
  [
    "design-04417",
    [
      "&:where(:has(#body-inner)) .tt-cc-nav-prev",
      "&:where(:has(#body-inner)) .tt-cc-nav-next"
    ]
  ],
  [
    "design-04418",
    [
      "&:where(:has(#body-inner)) .tt-cc-nav-prev"
    ]
  ],
  [
    "design-04419",
    [
      "&:where(:has(#body-inner)) .tt-cc-nav-next"
    ]
  ],
  [
    "design-04420",
    [
      "&:where(:has(#body-inner)) .tt-cc-nav-arrow"
    ]
  ],
  [
    "design-04421",
    [
      "&:where(:has(#body-inner)) .tt-cc-nav-arrow"
    ]
  ],
  [
    "design-04422",
    [
      "&:where(:has(#body-inner)) .tt-cc-nav-arrow"
    ]
  ],
  [
    "design-04423",
    [
      "&:where(:has(#body-inner)) .tt-cc-nav-arrow"
    ]
  ],
  [
    "design-04424",
    [
      "&:where(:has(#body-inner)) .tt-cc-nav-arrow"
    ]
  ],
  [
    "design-04425",
    [
      "&:where(:has(#body-inner)) .tt-cc-nav-arrow"
    ]
  ],
  [
    "design-04426",
    [
      "&:where(:has(#body-inner)) .tt-cc-nav-arrow"
    ]
  ],
  [
    "design-04427",
    [
      "&:where(:has(#body-inner)) .tt-cc-nav-arrow"
    ]
  ],
  [
    "design-04428",
    [
      "&:where(:has(#body-inner)) .tt-cc-nav-arrow"
    ]
  ],
  [
    "design-04429",
    [
      "&:where(:has(#body-inner)) .tt-cc-nav-arrow"
    ]
  ],
  [
    "design-04430",
    [
      "&:where(:has(#body-inner)) .tt-cc-nav-arrow"
    ]
  ],
  [
    "design-04431",
    [
      "&:where(:has(#body-inner)) .tt-cc-nav-arrow"
    ]
  ],
  [
    "design-04432",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-cc-nav-arrow }"
    ]
  ],
  [
    "design-04433",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-cc-nav-arrow }"
    ]
  ],
  [
    "design-04434",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-cc-nav-arrow }"
    ]
  ],
  [
    "design-04435",
    [
      "&:where(:has(#body-inner)) .tt-cc-nav-arrow::after"
    ]
  ],
  [
    "design-04436",
    [
      "&:where(:has(#body-inner)) .tt-cc-nav-arrow::after"
    ]
  ],
  [
    "design-04437",
    [
      "&:where(:has(#body-inner)) .tt-cc-nav-arrow::after"
    ]
  ],
  [
    "design-04438",
    [
      "&:where(:has(#body-inner)) .tt-cc-nav-arrow::after"
    ]
  ],
  [
    "design-04439",
    [
      "&:where(:has(#body-inner)) .tt-cc-nav-arrow::after"
    ]
  ],
  [
    "design-04440",
    [
      "&:where(:has(#body-inner)) .tt-cc-nav-arrow::after"
    ]
  ],
  [
    "design-04441",
    [
      "&:where(:has(#body-inner)) .tt-cc-nav-arrow::after"
    ]
  ],
  [
    "design-04442",
    [
      "&:where(:has(#body-inner)) .tt-cc-nav-arrow::after"
    ]
  ],
  [
    "design-04443",
    [
      "&:where(:has(#body-inner)) .tt-cc-nav-prev .tt-cc-nav-arrow::after"
    ]
  ],
  [
    "design-04444",
    [
      "&:where(:has(#body-inner)) .tt-cc-nav-next .tt-cc-nav-arrow::after"
    ]
  ],
  [
    "design-04445",
    [
      "&:where(:has(#body-inner)) .tt-cc-nav-arrow-disabled"
    ]
  ],
  [
    "design-04446",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-content-carousel.tt-cc-hide-navigation .tt-cc-nav-prev",
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-content-carousel.tt-cc-hide-navigation .tt-cc-nav-next"
    ]
  ],
  [
    "design-04447",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination"
    ]
  ],
  [
    "design-04448",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination"
    ]
  ],
  [
    "design-04449",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination"
    ]
  ],
  [
    "design-04450",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination"
    ]
  ],
  [
    "design-04451",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination"
    ]
  ],
  [
    "design-04452",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination"
    ]
  ],
  [
    "design-04453",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-bullets"
    ]
  ],
  [
    "design-04454",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-bullets .swiper-pagination-bullet"
    ]
  ],
  [
    "design-04455",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-bullets .swiper-pagination-bullet"
    ]
  ],
  [
    "design-04456",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-bullets .swiper-pagination-bullet"
    ]
  ],
  [
    "design-04457",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-bullets .swiper-pagination-bullet"
    ]
  ],
  [
    "design-04458",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-bullets .swiper-pagination-bullet"
    ]
  ],
  [
    "design-04459",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-bullets .swiper-pagination-bullet"
    ]
  ],
  [
    "design-04460",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-bullets .swiper-pagination-bullet"
    ]
  ],
  [
    "design-04461",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-bullets .swiper-pagination-bullet"
    ]
  ],
  [
    "design-04462",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-bullets .swiper-pagination-bullet-active"
    ]
  ],
  [
    "design-04463",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-bullets .swiper-pagination-bullet-active"
    ]
  ],
  [
    "design-04464",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-bullets-dynamic"
    ]
  ],
  [
    "design-04465",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-bullets-dynamic"
    ]
  ],
  [
    "design-04466",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-bullets-dynamic"
    ]
  ],
  [
    "design-04467",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-bullets-dynamic"
    ]
  ],
  [
    "design-04468",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-bullets-dynamic"
    ]
  ],
  [
    "design-04469",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-bullets-dynamic"
    ]
  ],
  [
    "design-04470",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-bullets-dynamic .swiper-pagination-bullet"
    ]
  ],
  [
    "design-04471",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-bullets-dynamic .swiper-pagination-bullet"
    ]
  ],
  [
    "design-04472",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-bullets-dynamic .swiper-pagination-bullet"
    ]
  ],
  [
    "design-04473",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev"
    ]
  ],
  [
    "design-04474",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev"
    ]
  ],
  [
    "design-04475",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-bullets-dynamic .swiper-pagination-bullet-active-next"
    ]
  ],
  [
    "design-04476",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next"
    ]
  ],
  [
    "design-04477",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-bullets-dynamic .swiper-pagination-bullet-active-main"
    ]
  ],
  [
    "design-04478",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-fraction"
    ]
  ],
  [
    "design-04479",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-fraction"
    ]
  ],
  [
    "design-04480",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-fraction"
    ]
  ],
  [
    "design-04481",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-progressbar"
    ]
  ],
  [
    "design-04482",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-progressbar"
    ]
  ],
  [
    "design-04483",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-progressbar"
    ]
  ],
  [
    "design-04484",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-progressbar"
    ]
  ],
  [
    "design-04485",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-cc-pagination-progressbar }"
    ]
  ],
  [
    "design-04486",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-04487",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-04488",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-04489",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-04490",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-04491",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-04492",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-04493",
    [
      "&:where(:has(#body-inner)) .tt-cc-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-04494",
    [
      "&:where(:has(#body-inner)) .tt-content-carousel.tt-cc-pagination-outside:not(.tt-cc-hide-pagination)"
    ]
  ],
  [
    "design-04495",
    [
      "&:where(:has(#body-inner)) .tt-content-carousel.tt-cc-pagination-outside:not(.tt-cc-hide-pagination)"
    ]
  ],
  [
    "design-04496",
    [
      "&:where(:has(#body-inner)) .tt-content-carousel.tt-cc-pagination-outside:not(.tt-cc-hide-pagination) .tt-cc-pagination"
    ]
  ],
  [
    "design-04497",
    [
      "&:where(:has(#body-inner)) .tt-content-carousel.tt-cc-pagination-outside:not(.tt-cc-hide-pagination) .swiper-pagination-bullet:not(.swiper-pagination-bullet-active)"
    ]
  ],
  [
    "design-04498",
    [
      "&:where(:has(#body-inner)) .tt-content-carousel.tt-cc-pagination-outside:not(.tt-cc-hide-pagination) .tt-cc-pagination-fraction"
    ]
  ],
  [
    "design-04499",
    [
      "&:where(:has(#body-inner)) .tt-content-carousel.tt-cc-pagination-outside:not(.tt-cc-hide-pagination) .tt-cc-pagination-progressbar"
    ]
  ],
  [
    "design-04500",
    [
      "&:where(:has(#body-inner)) .tt-content-carousel.tt-cc-pagination-outside:not(.tt-cc-hide-pagination) .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-04501",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-content-carousel.tt-cc-pagination-outside }"
    ]
  ],
  [
    "design-04502",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-content-carousel.tt-cc-pagination-outside }"
    ]
  ],
  [
    "design-04503",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-content-carousel.tt-cc-pagination-outside .tt-cc-pagination }"
    ]
  ],
  [
    "design-04504",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-content-carousel.tt-cc-hide-pagination .tt-cc-pagination }"
    ]
  ],
  [
    "design-04505",
    [
      "&:where(:has(#body-inner)) .tt-content-carousel.tt-cc-boxed"
    ]
  ],
  [
    "design-04506",
    [
      "&:where(:has(#body-inner)) .tt-content-carousel.tt-cc-boxed"
    ]
  ],
  [
    "design-04507",
    [
      "&:where(:has(#body-inner)) .tt-content-carousel.tt-cc-boxed"
    ]
  ],
  [
    "design-04508",
    [
      "&:where(:has(#body-inner)) .tt-content-carousel.tt-cc-boxed .swiper"
    ]
  ],
  [
    "design-04509",
    [
      "&:where(:has(#body-inner)) .tt-content-carousel.tt-cc-boxed .tt-cc-image-wrap"
    ]
  ],
  [
    "design-04510",
    [
      "&:where(:has(#body-inner)) .tt-content-carousel.tt-cc-boxed .tt-cc-image-wrap"
    ]
  ],
  [
    "design-04511",
    [
      "&:where(:has(#body-inner)) .tt-content-carousel.tt-cc-boxed .tt-cc-image-wrap"
    ]
  ],
  [
    "design-04512",
    [
      "&:where(:has(#body-inner)) .tt-content-carousel.tt-cc-boxed .tt-cc-image-wrap"
    ]
  ],
  [
    "design-04513",
    [
      "&:where(:has(#body-inner)) .tt-content-carousel.tt-cc-boxed .tt-cc-image-wrap"
    ]
  ],
  [
    "design-04514",
    [
      "&:where(:has(#body-inner)) .tt-content-carousel.tt-cc-boxed:not(.tt-cc-pagination-outside) .tt-cc-pagination"
    ]
  ],
  [
    "design-04515",
    [
      "&:where(:has(#body-inner)) .tt-content-carousel.tt-cc-tilted .swiper-slide"
    ]
  ],
  [
    "design-04516",
    [
      "&:where(:has(#body-inner)) .tt-content-carousel.tt-cc-tilted .swiper-slide"
    ]
  ],
  [
    "design-04517",
    [
      "&:where(:has(#body-inner)) .tt-content-carousel.tt-cc-tilted .swiper-slide.swiper-slide-prev",
      "&:where(:has(#body-inner)) .tt-content-carousel.tt-cc-tilted .swiper-slide.swiper-slide-next"
    ]
  ],
  [
    "design-04518",
    [
      "&:where(:has(#body-inner)) .tt-content-carousel.tt-cc-tilted .swiper"
    ]
  ],
  [
    "design-04519",
    [
      "&:where(:has(#body-inner)) .tt-content-carousel.tt-cc-tilted .swiper"
    ]
  ],
  [
    "design-04520",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel"
    ]
  ],
  [
    "design-04521",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel"
    ]
  ],
  [
    "design-04522",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel"
    ]
  ],
  [
    "design-04523",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel-item"
    ]
  ],
  [
    "design-04524",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel-item"
    ]
  ],
  [
    "design-04525",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel-item"
    ]
  ],
  [
    "design-04526",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel-item"
    ]
  ],
  [
    "design-04527",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel-item"
    ]
  ],
  [
    "design-04528",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel[data-size-small=\"true\"] .tt-portfolio-carousel-item"
    ]
  ],
  [
    "design-04529",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel[data-size-small=\"true\"] .tt-portfolio-carousel-item"
    ]
  ],
  [
    "design-04530",
    [
      "&:where(:has(#body-inner)) .tt-pci-item-inner"
    ]
  ],
  [
    "design-04531",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel:not([data-size-small=\"true\"]) .tt-pci-item-inner"
    ]
  ],
  [
    "design-04532",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel:not([data-size-small=\"true\"]) .swiper-slide-active .tt-pci-item-inner"
    ]
  ],
  [
    "design-04533",
    [
      "&:where(:has(#body-inner)) .tt-pci-image"
    ]
  ],
  [
    "design-04534",
    [
      "&:where(:has(#body-inner)) .tt-pci-image"
    ]
  ],
  [
    "design-04535",
    [
      "&:where(:has(#body-inner)) .tt-pci-image"
    ]
  ],
  [
    "design-04536",
    [
      "&:where(:has(#body-inner)) .tt-pci-image"
    ]
  ],
  [
    "design-04537",
    [
      "&:where(:has(#body-inner)) .tt-pci-image"
    ]
  ],
  [
    "design-04538",
    [
      "&:where(:has(#body-inner)) .tt-pci-image"
    ]
  ],
  [
    "design-04539",
    [
      "&:where(:has(#body-inner)) .tt-pci-image"
    ]
  ],
  [
    "design-04540",
    [
      "&:where(:has(#body-inner)) .tt-pci-image img"
    ]
  ],
  [
    "design-04541",
    [
      "&:where(:has(#body-inner)) .tt-pci-image img"
    ]
  ],
  [
    "design-04542",
    [
      "&:where(:has(#body-inner)) .tt-pci-image img"
    ]
  ],
  [
    "design-04543",
    [
      "&:where(:has(#body-inner)) .tt-pci-image img"
    ]
  ],
  [
    "design-04544",
    [
      "&:where(:has(#body-inner)) .tt-pci-image img"
    ]
  ],
  [
    "design-04545",
    [
      "&:where(:has(#body-inner)) .tt-pci-image img"
    ]
  ],
  [
    "design-04546",
    [
      "&:where(:has(#body-inner)) .tt-pci-image img"
    ]
  ],
  [
    "design-04547",
    [
      "&:where(:has(#body-inner)) .tt-pci-image img"
    ]
  ],
  [
    "design-04548",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel[data-size-small=\"true\"] .tt-pci-image img"
    ]
  ],
  [
    "design-04549",
    [
      "&:where(:has(#body-inner)) .tt-pci-image:hover img"
    ]
  ],
  [
    "design-04550",
    [
      "&:where(:has(#body-inner)) .tt-pci-video"
    ]
  ],
  [
    "design-04551",
    [
      "&:where(:has(#body-inner)) .tt-pci-video"
    ]
  ],
  [
    "design-04552",
    [
      "&:where(:has(#body-inner)) .tt-pci-video"
    ]
  ],
  [
    "design-04553",
    [
      "&:where(:has(#body-inner)) .tt-pci-video"
    ]
  ],
  [
    "design-04554",
    [
      "&:where(:has(#body-inner)) .tt-pci-video"
    ]
  ],
  [
    "design-04555",
    [
      "&:where(:has(#body-inner)) .tt-pci-video"
    ]
  ],
  [
    "design-04556",
    [
      "&:where(:has(#body-inner)) .tt-pci-video video"
    ]
  ],
  [
    "design-04557",
    [
      "&:where(:has(#body-inner)) .tt-pci-video video"
    ]
  ],
  [
    "design-04558",
    [
      "&:where(:has(#body-inner)) .tt-pci-video video"
    ]
  ],
  [
    "design-04559",
    [
      "&:where(:has(#body-inner)) .tt-pci-video video"
    ]
  ],
  [
    "design-04560",
    [
      "&:where(:has(#body-inner)) .tt-pci-video video"
    ]
  ],
  [
    "design-04561",
    [
      "&:where(:has(#body-inner)) .tt-pci-video video"
    ]
  ],
  [
    "design-04562",
    [
      "&:where(:has(#body-inner)) .tt-pci-video video"
    ]
  ],
  [
    "design-04563",
    [
      "&:where(:has(#body-inner)) .tt-pci-video video"
    ]
  ],
  [
    "design-04564",
    [
      "&:where(:has(#body-inner)) .tt-pci-video video"
    ]
  ],
  [
    "design-04565",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel[data-size-small=\"true\"] .tt-pci-video video"
    ]
  ],
  [
    "design-04566",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel .swiper-lazy-preloader"
    ]
  ],
  [
    "design-04567",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel .swiper-lazy-preloader"
    ]
  ],
  [
    "design-04568",
    [
      "&:where(:has(#body-inner)) .tt-pci-info"
    ]
  ],
  [
    "design-04569",
    [
      "&:where(:has(#body-inner)) .tt-pci-info"
    ]
  ],
  [
    "design-04570",
    [
      "&:where(:has(#body-inner)) .tt-pci-title"
    ]
  ],
  [
    "design-04571",
    [
      "&:where(:has(#body-inner)) .tt-pci-title"
    ]
  ],
  [
    "design-04572",
    [
      "&:where(:has(#body-inner)) .tt-pci-title"
    ]
  ],
  [
    "design-04573",
    [
      "&:where(:has(#body-inner)) .tt-pci-title"
    ]
  ],
  [
    "design-04574",
    [
      "&:where(:has(#body-inner)) .tt-pci-title"
    ]
  ],
  [
    "design-04575",
    [
      "&:where(:has(#body-inner)) .tt-pci-title"
    ]
  ],
  [
    "design-04576",
    [
      "&:where(:has(#body-inner)) .tt-pci-title"
    ]
  ],
  [
    "design-04577",
    [
      "&:where(:has(#body-inner)) .tt-pci-title"
    ]
  ],
  [
    "design-04578",
    [
      "&:where(:has(#body-inner)) .tt-pci-title"
    ]
  ],
  [
    "design-04579",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel[data-size-small=\"true\"] .tt-pci-title"
    ]
  ],
  [
    "design-04580",
    [
      "&:where(:has(#body-inner)) .tt-pci-title a"
    ]
  ],
  [
    "design-04581",
    [
      "&:where(:has(#body-inner)) .tt-pci-title a"
    ]
  ],
  [
    "design-04582",
    [
      "&:where(:has(#body-inner)) .tt-pci-title a"
    ]
  ],
  [
    "design-04583",
    [
      "&:where(:has(#body-inner)) .tt-pci-title a"
    ]
  ],
  [
    "design-04584",
    [
      "&:where(:has(#body-inner)) .tt-pci-title a:hover",
      "&:where(:has(#body-inner)) .tt-pci-title a:focus"
    ]
  ],
  [
    "design-04585",
    [
      "&:where(:has(#body-inner)) .tt-pci-title a:hover",
      "&:where(:has(#body-inner)) .tt-pci-title a:focus"
    ]
  ],
  [
    "design-04586",
    [
      "&:where(:has(#body-inner)) .tt-pci-title a:hover",
      "&:where(:has(#body-inner)) .tt-pci-title a:focus"
    ]
  ],
  [
    "design-04587",
    [
      "&:where(:has(#body-inner)) .tt-pci-icon"
    ]
  ],
  [
    "design-04588",
    [
      "&:where(:has(#body-inner)) .tt-pci-icon"
    ]
  ],
  [
    "design-04589",
    [
      "&:where(:has(#body-inner)) .tt-pci-icon"
    ]
  ],
  [
    "design-04590",
    [
      "&:where(:has(#body-inner)) .tt-pci-icon"
    ]
  ],
  [
    "design-04591",
    [
      "&:where(:has(#body-inner)) .tt-pci-icon"
    ]
  ],
  [
    "design-04592",
    [
      "&:where(:has(#body-inner)) .tt-pci-icon"
    ]
  ],
  [
    "design-04593",
    [
      "&:where(:has(#body-inner)) .tt-pci-icon"
    ]
  ],
  [
    "design-04594",
    [
      "&:where(:has(#body-inner)) .tt-pci-icon"
    ]
  ],
  [
    "design-04595",
    [
      "&:where(:has(#body-inner)) .tt-pci-icon"
    ]
  ],
  [
    "design-04596",
    [
      "&:where(:has(#body-inner)) .tt-pci-icon"
    ]
  ],
  [
    "design-04597",
    [
      "&:where(:has(#body-inner)) .tt-pci-icon"
    ]
  ],
  [
    "design-04598",
    [
      "&:where(:has(#body-inner)) .tt-pci-icon"
    ]
  ],
  [
    "design-04599",
    [
      "&:where(:has(#body-inner)) .tt-pci-icon"
    ]
  ],
  [
    "design-04600",
    [
      "&:where(:has(#body-inner)) .tt-pci-icon"
    ]
  ],
  [
    "design-04601",
    [
      "&:where(:has(#body-inner)) .tt-pci-icon:hover"
    ]
  ],
  [
    "design-04602",
    [
      "&:where(:has(#body-inner)) .tt-pci-icon svg"
    ]
  ],
  [
    "design-04603",
    [
      "&:where(:has(#body-inner)) .tt-pci-icon svg"
    ]
  ],
  [
    "design-04604",
    [
      "&:where(:has(#body-inner)) .tt-pci-icon svg"
    ]
  ],
  [
    "design-04605",
    [
      "&:where(:has(#body-inner)) .tt-pci-icon svg"
    ]
  ],
  [
    "design-04606",
    [
      "&:where(:has(#body-inner)) .tt-pci-categories"
    ]
  ],
  [
    "design-04607",
    [
      "&:where(:has(#body-inner)) .tt-pci-categories"
    ]
  ],
  [
    "design-04608",
    [
      "&:where(:has(#body-inner)) .tt-pci-categories"
    ]
  ],
  [
    "design-04609",
    [
      "&:where(:has(#body-inner)) .tt-pci-categories"
    ]
  ],
  [
    "design-04610",
    [
      "&:where(:has(#body-inner)) .tt-pci-categories"
    ]
  ],
  [
    "design-04611",
    [
      "&:where(:has(#body-inner)) .tt-pci-categories"
    ]
  ],
  [
    "design-04612",
    [
      "&:where(:has(#body-inner)) .tt-pci-categories"
    ]
  ],
  [
    "design-04613",
    [
      "&:where(:has(#body-inner)) .tt-pci-category"
    ]
  ],
  [
    "design-04614",
    [
      "&:where(:has(#body-inner)) .tt-pci-category"
    ]
  ],
  [
    "design-04615",
    [
      "&:where(:has(#body-inner)) .tt-pci-category"
    ]
  ],
  [
    "design-04616",
    [
      "&:where(:has(#body-inner)) .tt-pci-category"
    ]
  ],
  [
    "design-04617",
    [
      "&:where(:has(#body-inner)) .tt-pci-category"
    ]
  ],
  [
    "design-04618",
    [
      "&:where(:has(#body-inner)) .tt-pci-category"
    ]
  ],
  [
    "design-04619",
    [
      "&:where(:has(#body-inner)) .tt-pci-category"
    ]
  ],
  [
    "design-04620",
    [
      "&:where(:has(#body-inner)) .tt-pci-category"
    ]
  ],
  [
    "design-04621",
    [
      "&:where(:has(#body-inner)) .tt-pci-category"
    ]
  ],
  [
    "design-04622",
    [
      "&:where(:has(#body-inner)) .tt-pci-category"
    ]
  ],
  [
    "design-04623",
    [
      "&:where(:has(#body-inner)) .tt-pci-category"
    ]
  ],
  [
    "design-04624",
    [
      "&:where(:has(#body-inner)) .tt-pci-category"
    ]
  ],
  [
    "design-04625",
    [
      "&:where(:has(#body-inner)) .tt-pci-category:hover",
      "&:where(:has(#body-inner)) .tt-pci-category:focus"
    ]
  ],
  [
    "design-04626",
    [
      "&:where(:has(#body-inner)) .tt-pci-category:hover",
      "&:where(:has(#body-inner)) .tt-pci-category:focus"
    ]
  ],
  [
    "design-04627",
    [
      "&:where(:has(#body-inner)) .tt-pci-category:hover",
      "&:where(:has(#body-inner)) .tt-pci-category:focus"
    ]
  ],
  [
    "design-04628",
    [
      "&:where(:has(#body-inner)) .tt-pci-nav-prev",
      "&:where(:has(#body-inner)) .tt-pci-nav-next"
    ]
  ],
  [
    "design-04629",
    [
      "&:where(:has(#body-inner)) .tt-pci-nav-prev",
      "&:where(:has(#body-inner)) .tt-pci-nav-next"
    ]
  ],
  [
    "design-04630",
    [
      "&:where(:has(#body-inner)) .tt-pci-nav-prev",
      "&:where(:has(#body-inner)) .tt-pci-nav-next"
    ]
  ],
  [
    "design-04631",
    [
      "&:where(:has(#body-inner)) .tt-pci-nav-prev",
      "&:where(:has(#body-inner)) .tt-pci-nav-next"
    ]
  ],
  [
    "design-04632",
    [
      "&:where(:has(#body-inner)) .tt-pci-nav-prev"
    ]
  ],
  [
    "design-04633",
    [
      "&:where(:has(#body-inner)) .tt-pci-nav-next"
    ]
  ],
  [
    "design-04634",
    [
      "&:where(:has(#body-inner)) .tt-pci-nav-arrow"
    ]
  ],
  [
    "design-04635",
    [
      "&:where(:has(#body-inner)) .tt-pci-nav-arrow"
    ]
  ],
  [
    "design-04636",
    [
      "&:where(:has(#body-inner)) .tt-pci-nav-arrow"
    ]
  ],
  [
    "design-04637",
    [
      "&:where(:has(#body-inner)) .tt-pci-nav-arrow"
    ]
  ],
  [
    "design-04638",
    [
      "&:where(:has(#body-inner)) .tt-pci-nav-arrow"
    ]
  ],
  [
    "design-04639",
    [
      "&:where(:has(#body-inner)) .tt-pci-nav-arrow"
    ]
  ],
  [
    "design-04640",
    [
      "&:where(:has(#body-inner)) .tt-pci-nav-arrow"
    ]
  ],
  [
    "design-04641",
    [
      "&:where(:has(#body-inner)) .tt-pci-nav-arrow"
    ]
  ],
  [
    "design-04642",
    [
      "&:where(:has(#body-inner)) .tt-pci-nav-arrow"
    ]
  ],
  [
    "design-04643",
    [
      "&:where(:has(#body-inner)) .tt-pci-nav-arrow"
    ]
  ],
  [
    "design-04644",
    [
      "&:where(:has(#body-inner)) .tt-pci-nav-arrow"
    ]
  ],
  [
    "design-04645",
    [
      "&:where(:has(#body-inner)) .tt-pci-nav-arrow"
    ]
  ],
  [
    "design-04646",
    [
      "&:where(:has(#body-inner)) .tt-pci-nav-arrow"
    ]
  ],
  [
    "design-04647",
    [
      "&:where(:has(#body-inner)) .tt-pci-nav-arrow"
    ]
  ],
  [
    "design-04648",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-pci-nav-arrow }"
    ]
  ],
  [
    "design-04649",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-pci-nav-arrow }"
    ]
  ],
  [
    "design-04650",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-pci-nav-arrow }"
    ]
  ],
  [
    "design-04651",
    [
      "&:where(:has(#body-inner)) .tt-pci-nav-arrow::after"
    ]
  ],
  [
    "design-04652",
    [
      "&:where(:has(#body-inner)) .tt-pci-nav-arrow::after"
    ]
  ],
  [
    "design-04653",
    [
      "&:where(:has(#body-inner)) .tt-pci-nav-arrow::after"
    ]
  ],
  [
    "design-04654",
    [
      "&:where(:has(#body-inner)) .tt-pci-nav-arrow::after"
    ]
  ],
  [
    "design-04655",
    [
      "&:where(:has(#body-inner)) .tt-pci-nav-arrow::after"
    ]
  ],
  [
    "design-04656",
    [
      "&:where(:has(#body-inner)) .tt-pci-nav-arrow::after"
    ]
  ],
  [
    "design-04657",
    [
      "&:where(:has(#body-inner)) .tt-pci-nav-arrow::after"
    ]
  ],
  [
    "design-04658",
    [
      "&:where(:has(#body-inner)) .tt-pci-nav-arrow::after"
    ]
  ],
  [
    "design-04659",
    [
      "&:where(:has(#body-inner)) .tt-pci-nav-prev .tt-pci-nav-arrow::after"
    ]
  ],
  [
    "design-04660",
    [
      "&:where(:has(#body-inner)) .tt-pci-nav-next .tt-pci-nav-arrow::after"
    ]
  ],
  [
    "design-04661",
    [
      "&:where(:has(#body-inner)) .tt-pci-nav-arrow-disabled"
    ]
  ],
  [
    "design-04662",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-portfolio-carousel.tt-pci-hide-navigation .tt-pci-nav-prev",
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-portfolio-carousel.tt-pci-hide-navigation .tt-pci-nav-next"
    ]
  ],
  [
    "design-04663",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination"
    ]
  ],
  [
    "design-04664",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination"
    ]
  ],
  [
    "design-04665",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination"
    ]
  ],
  [
    "design-04666",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination"
    ]
  ],
  [
    "design-04667",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination"
    ]
  ],
  [
    "design-04668",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-bullets"
    ]
  ],
  [
    "design-04669",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-bullets .swiper-pagination-bullet"
    ]
  ],
  [
    "design-04670",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-bullets .swiper-pagination-bullet"
    ]
  ],
  [
    "design-04671",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-bullets .swiper-pagination-bullet"
    ]
  ],
  [
    "design-04672",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-bullets .swiper-pagination-bullet"
    ]
  ],
  [
    "design-04673",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-bullets .swiper-pagination-bullet"
    ]
  ],
  [
    "design-04674",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-bullets .swiper-pagination-bullet"
    ]
  ],
  [
    "design-04675",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-bullets .swiper-pagination-bullet"
    ]
  ],
  [
    "design-04676",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-bullets .swiper-pagination-bullet"
    ]
  ],
  [
    "design-04677",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-bullets .swiper-pagination-bullet-active"
    ]
  ],
  [
    "design-04678",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-bullets .swiper-pagination-bullet-active"
    ]
  ],
  [
    "design-04679",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-bullets-dynamic"
    ]
  ],
  [
    "design-04680",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-bullets-dynamic"
    ]
  ],
  [
    "design-04681",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-bullets-dynamic"
    ]
  ],
  [
    "design-04682",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-bullets-dynamic"
    ]
  ],
  [
    "design-04683",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-bullets-dynamic"
    ]
  ],
  [
    "design-04684",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-bullets-dynamic"
    ]
  ],
  [
    "design-04685",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-bullets-dynamic .swiper-pagination-bullet"
    ]
  ],
  [
    "design-04686",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-bullets-dynamic .swiper-pagination-bullet"
    ]
  ],
  [
    "design-04687",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-bullets-dynamic .swiper-pagination-bullet"
    ]
  ],
  [
    "design-04688",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev"
    ]
  ],
  [
    "design-04689",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev"
    ]
  ],
  [
    "design-04690",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-bullets-dynamic .swiper-pagination-bullet-active-next"
    ]
  ],
  [
    "design-04691",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next"
    ]
  ],
  [
    "design-04692",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-bullets-dynamic .swiper-pagination-bullet-active-main"
    ]
  ],
  [
    "design-04693",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-fraction"
    ]
  ],
  [
    "design-04694",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-fraction"
    ]
  ],
  [
    "design-04695",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-fraction"
    ]
  ],
  [
    "design-04696",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-progressbar"
    ]
  ],
  [
    "design-04697",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-progressbar"
    ]
  ],
  [
    "design-04698",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-progressbar"
    ]
  ],
  [
    "design-04699",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-progressbar"
    ]
  ],
  [
    "design-04700",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pci-pagination-progressbar }"
    ]
  ],
  [
    "design-04701",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-04702",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-04703",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-04704",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-04705",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-04706",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-04707",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-04708",
    [
      "&:where(:has(#body-inner)) .tt-pci-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-04709",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-hide-pagination .tt-pci-pagination }"
    ]
  ],
  [
    "design-04710",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-focused:not([data-size-small=\"true\"]) .tt-pci-item-inner"
    ]
  ],
  [
    "design-04711",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-focused:not([data-size-small=\"true\"]) .tt-pci-item-inner"
    ]
  ],
  [
    "design-04712",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-focused:not([data-size-small=\"true\"]) .tt-pci-item-inner"
    ]
  ],
  [
    "design-04713",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-focused:not([data-size-small=\"true\"]) .tt-pci-item-inner"
    ]
  ],
  [
    "design-04714",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-focused:not([data-size-small=\"true\"]) .tt-pci-item-inner"
    ]
  ],
  [
    "design-04715",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-focused:not([data-size-small=\"true\"]) .tt-pci-item-inner"
    ]
  ],
  [
    "design-04716",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-focused:not([data-size-small=\"true\"]) .swiper-slide-active .tt-pci-item-inner"
    ]
  ],
  [
    "design-04717",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-focused:not([data-size-small=\"true\"]) .swiper-slide-active .tt-pci-item-inner"
    ]
  ],
  [
    "design-04718",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-focused:not([data-size-small=\"true\"]) .swiper-slide-active .tt-pci-item-inner"
    ]
  ],
  [
    "design-04719",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-focused:not([data-size-small=\"true\"]) .swiper-slide-active .tt-pci-item-inner"
    ]
  ],
  [
    "design-04720",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-focused:not([data-size-small=\"true\"]):not(.tt-pci-full) .tt-pci-nav-arrow"
    ]
  ],
  [
    "design-04721",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-focused:not([data-size-small=\"true\"]):not(.tt-pci-full) .tt-pci-nav-arrow"
    ]
  ],
  [
    "design-04722",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-portfolio-carousel-item"
    ]
  ],
  [
    "design-04723",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-image::before",
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-video::before"
    ]
  ],
  [
    "design-04724",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-image::before",
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-video::before"
    ]
  ],
  [
    "design-04725",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-image::before",
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-video::before"
    ]
  ],
  [
    "design-04726",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-image::before",
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-video::before"
    ]
  ],
  [
    "design-04727",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-image::before",
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-video::before"
    ]
  ],
  [
    "design-04728",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-image::before",
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-video::before"
    ]
  ],
  [
    "design-04729",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-image::before",
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-video::before"
    ]
  ],
  [
    "design-04730",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-image img",
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-video video"
    ]
  ],
  [
    "design-04731",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-info"
    ]
  ],
  [
    "design-04732",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-info"
    ]
  ],
  [
    "design-04733",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-info"
    ]
  ],
  [
    "design-04734",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-info"
    ]
  ],
  [
    "design-04735",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-info"
    ]
  ],
  [
    "design-04736",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-info"
    ]
  ],
  [
    "design-04737",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-info"
    ]
  ],
  [
    "design-04738",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-info"
    ]
  ],
  [
    "design-04739",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-info"
    ]
  ],
  [
    "design-04740",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-info"
    ]
  ],
  [
    "design-04741",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-title"
    ]
  ],
  [
    "design-04742",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-title"
    ]
  ],
  [
    "design-04743",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-title a"
    ]
  ],
  [
    "design-04744",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-icon"
    ]
  ],
  [
    "design-04745",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-icon"
    ]
  ],
  [
    "design-04746",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-icon"
    ]
  ],
  [
    "design-04747",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-icon"
    ]
  ],
  [
    "design-04748",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-icon"
    ]
  ],
  [
    "design-04749",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-icon"
    ]
  ],
  [
    "design-04750",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-icon svg"
    ]
  ],
  [
    "design-04751",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-categories"
    ]
  ],
  [
    "design-04752",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-categories"
    ]
  ],
  [
    "design-04753",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-category"
    ]
  ],
  [
    "design-04754",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-category"
    ]
  ],
  [
    "design-04755",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-category"
    ]
  ],
  [
    "design-04756",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .tt-pci-category"
    ]
  ],
  [
    "design-04757",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .swiper-slide-active .tt-pci-category"
    ]
  ],
  [
    "design-04758",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .swiper-slide-active .tt-pci-category:hover"
    ]
  ],
  [
    "design-04759",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-inside .swiper-slide-active .tt-pci-category:hover"
    ]
  ],
  [
    "design-04760",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-boxed"
    ]
  ],
  [
    "design-04761",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-boxed"
    ]
  ],
  [
    "design-04762",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-boxed"
    ]
  ],
  [
    "design-04763",
    [
      "@media (min-width: 991px) { &:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-boxed[data-size-small=\"true\"] }"
    ]
  ],
  [
    "design-04764",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-boxed .swiper"
    ]
  ],
  [
    "design-04765",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-boxed .tt-pci-item-inner"
    ]
  ],
  [
    "design-04766",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-boxed .tt-pci-item-inner"
    ]
  ],
  [
    "design-04767",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-boxed .tt-pci-item-inner"
    ]
  ],
  [
    "design-04768",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-boxed .tt-pci-item-inner"
    ]
  ],
  [
    "design-04769",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-boxed .tt-pci-item-inner"
    ]
  ],
  [
    "design-04770",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-boxed.tt-pci-inside .tt-pci-info"
    ]
  ],
  [
    "design-04771",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-tilted .swiper"
    ]
  ],
  [
    "design-04772",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-tilted .swiper"
    ]
  ],
  [
    "design-04773",
    [
      "@media (max-width: 990px) { &:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-tilted[data-size-small=\"true\"] .tt-portfolio-carousel-item }"
    ]
  ],
  [
    "design-04774",
    [
      "@media (max-width: 990px) { &:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-tilted[data-size-small=\"true\"] .tt-portfolio-carousel-item }"
    ]
  ],
  [
    "design-04775",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-tilted .tt-pci-item-inner"
    ]
  ],
  [
    "design-04776",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-tilted .swiper-slide.swiper-slide-prev .tt-pci-item-inner"
    ]
  ],
  [
    "design-04777",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-tilted .swiper-slide.swiper-slide-next .tt-pci-item-inner"
    ]
  ],
  [
    "design-04778",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-tilted .swiper-slide.swiper-slide-active .tt-pci-item-inner"
    ]
  ],
  [
    "design-04779",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-tilted .tt-pci-item-inner"
    ]
  ],
  [
    "design-04780",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full"
    ]
  ],
  [
    "design-04781",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .swiper"
    ]
  ],
  [
    "design-04782",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .swiper"
    ]
  ],
  [
    "design-04783",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .swiper"
    ]
  ],
  [
    "design-04784",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .swiper"
    ]
  ],
  [
    "design-04785",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .swiper"
    ]
  ],
  [
    "design-04786",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .swiper"
    ]
  ],
  [
    "design-04787",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .swiper"
    ]
  ],
  [
    "design-04788",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full:not([data-size-small=\"true\"]) .tt-portfolio-carousel-item"
    ]
  ],
  [
    "design-04789",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full:not([data-size-small=\"true\"]) .tt-portfolio-carousel-item"
    ]
  ],
  [
    "design-04790",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full[data-size-small=\"true\"] .tt-portfolio-carousel-item"
    ]
  ],
  [
    "design-04791",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full[data-size-small=\"true\"] .tt-portfolio-carousel-item"
    ]
  ],
  [
    "design-04792",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .tt-pci-nav-prev",
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .tt-pci-nav-next"
    ]
  ],
  [
    "design-04793",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .tt-pci-nav-prev",
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .tt-pci-nav-next"
    ]
  ],
  [
    "design-04794",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .tt-pci-nav-prev",
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .tt-pci-nav-next"
    ]
  ],
  [
    "design-04795",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .tt-pci-nav-arrow"
    ]
  ],
  [
    "design-04796",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .tt-pci-nav-arrow"
    ]
  ],
  [
    "design-04797",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .tt-pci-nav-arrow"
    ]
  ],
  [
    "design-04798",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .tt-pci-nav-arrow"
    ]
  ],
  [
    "design-04799",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .tt-pci-nav-arrow"
    ]
  ],
  [
    "design-04800",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .tt-pci-nav-arrow"
    ]
  ],
  [
    "design-04801",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .tt-pci-nav-arrow"
    ]
  ],
  [
    "design-04802",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .tt-pci-nav-arrow"
    ]
  ],
  [
    "design-04803",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .tt-pci-nav-arrow"
    ]
  ],
  [
    "design-04804",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .tt-pci-nav-arrow"
    ]
  ],
  [
    "design-04805",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .tt-pci-nav-arrow }"
    ]
  ],
  [
    "design-04806",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .tt-pci-nav-arrow }"
    ]
  ],
  [
    "design-04807",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .tt-pci-nav-arrow }"
    ]
  ],
  [
    "design-04808",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .tt-pci-nav-arrow:hover",
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .tt-pci-nav-arrow:focus"
    ]
  ],
  [
    "design-04809",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .tt-pci-nav-arrow:hover",
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .tt-pci-nav-arrow:focus"
    ]
  ],
  [
    "design-04810",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .tt-pci-nav-next"
    ]
  ],
  [
    "design-04811",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .tt-pci-nav-prev"
    ]
  ],
  [
    "design-04812",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .tt-pci-nav-prev"
    ]
  ],
  [
    "design-04813",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .tt-pci-nav-prev }"
    ]
  ],
  [
    "design-04814",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .tt-pci-pagination"
    ]
  ],
  [
    "design-04815",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .tt-social-buttons"
    ]
  ],
  [
    "design-04816",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .tt-social-buttons"
    ]
  ],
  [
    "design-04817",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .tt-social-buttons"
    ]
  ],
  [
    "design-04818",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .tt-social-buttons"
    ]
  ],
  [
    "design-04819",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .tt-social-buttons > ul > li a"
    ]
  ],
  [
    "design-04820",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-portfolio-carousel.tt-pci-full .tt-social-buttons }"
    ]
  ],
  [
    "design-04821",
    [
      "&:where(:has(#body-inner)) .tt-team-list-item"
    ]
  ],
  [
    "design-04822",
    [
      "&:where(:has(#body-inner)) .tt-teli-image"
    ]
  ],
  [
    "design-04823",
    [
      "&:where(:has(#body-inner)) .tt-teli-image"
    ]
  ],
  [
    "design-04824",
    [
      "&:where(:has(#body-inner)) .tt-teli-image"
    ]
  ],
  [
    "design-04825",
    [
      "&:where(:has(#body-inner)) .tt-teli-image"
    ]
  ],
  [
    "design-04826",
    [
      "&:where(:has(#body-inner)) .tt-teli-image"
    ]
  ],
  [
    "design-04827",
    [
      "&:where(:has(#body-inner)) .tt-teli-image"
    ]
  ],
  [
    "design-04828",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-teli-image }"
    ]
  ],
  [
    "design-04829",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-teli-image }"
    ]
  ],
  [
    "design-04830",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-teli-image }"
    ]
  ],
  [
    "design-04831",
    [
      "&:where(:has(#body-inner)) .tt-team-list-item:hover .tt-teli-image"
    ]
  ],
  [
    "design-04832",
    [
      "&:where(:has(#body-inner)) .tt-teli-image-inner"
    ]
  ],
  [
    "design-04833",
    [
      "&:where(:has(#body-inner)) .tt-teli-image-inner"
    ]
  ],
  [
    "design-04834",
    [
      "&:where(:has(#body-inner)) .tt-teli-image-inner"
    ]
  ],
  [
    "design-04835",
    [
      "&:where(:has(#body-inner)) .tt-teli-image-inner"
    ]
  ],
  [
    "design-04836",
    [
      "&:where(:has(#body-inner)) .tt-teli-image-inner"
    ]
  ],
  [
    "design-04837",
    [
      "&:where(:has(#body-inner)) .tt-teli-image img"
    ]
  ],
  [
    "design-04838",
    [
      "&:where(:has(#body-inner)) .tt-teli-image img"
    ]
  ],
  [
    "design-04839",
    [
      "&:where(:has(#body-inner)) .tt-teli-image img"
    ]
  ],
  [
    "design-04840",
    [
      "&:where(:has(#body-inner)) .tt-teli-image img"
    ]
  ],
  [
    "design-04841",
    [
      "&:where(:has(#body-inner)) .tt-teli-image img"
    ]
  ],
  [
    "design-04842",
    [
      "&:where(:has(#body-inner)) .tt-teli-image img"
    ]
  ],
  [
    "design-04843",
    [
      "&:where(:has(#body-inner)) .tt-teli-inner"
    ]
  ],
  [
    "design-04844",
    [
      "&:where(:has(#body-inner)) .tt-teli-inner"
    ]
  ],
  [
    "design-04845",
    [
      "&:where(:has(#body-inner)) .tt-teli-inner"
    ]
  ],
  [
    "design-04846",
    [
      "&:where(:has(#body-inner)) .tt-teli-inner"
    ]
  ],
  [
    "design-04847",
    [
      "&:where(:has(#body-inner)) .tt-teli-inner"
    ]
  ],
  [
    "design-04848",
    [
      "&:where(:has(#body-inner)) .tt-teli-inner"
    ]
  ],
  [
    "design-04849",
    [
      "&:where(:has(#body-inner)) .tt-teli-inner"
    ]
  ],
  [
    "design-04850",
    [
      "&:where(:has(#body-inner)) .tt-teli-inner"
    ]
  ],
  [
    "design-04851",
    [
      "&:where(:has(#body-inner)) .tt-teli-inner"
    ]
  ],
  [
    "design-04852",
    [
      "&:where(:has(#body-inner)) .tt-teli-inner"
    ]
  ],
  [
    "design-04853",
    [
      "&:where(:has(#body-inner)) .tt-teli-inner"
    ]
  ],
  [
    "design-04854",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-teli-inner }"
    ]
  ],
  [
    "design-04855",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-teli-inner }"
    ]
  ],
  [
    "design-04856",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-teli-inner }"
    ]
  ],
  [
    "design-04857",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-teli-inner }"
    ]
  ],
  [
    "design-04858",
    [
      "&:where(:has(#body-inner)) .tt-teli-inner:hover",
      "&:where(:has(#body-inner)) .tt-teli-inner:focus"
    ]
  ],
  [
    "design-04859",
    [
      "&:where(:has(#body-inner)) .tt-team-list-item:first-child .tt-teli-inner"
    ]
  ],
  [
    "design-04860",
    [
      "&:where(:has(#body-inner)) .tt-teli-caption"
    ]
  ],
  [
    "design-04861",
    [
      "&:where(:has(#body-inner)) .tt-teli-caption"
    ]
  ],
  [
    "design-04862",
    [
      "&:where(:has(#body-inner)) .tt-teli-title"
    ]
  ],
  [
    "design-04863",
    [
      "&:where(:has(#body-inner)) .tt-teli-title"
    ]
  ],
  [
    "design-04864",
    [
      "&:where(:has(#body-inner)) .tt-teli-title"
    ]
  ],
  [
    "design-04865",
    [
      "&:where(:has(#body-inner)) .tt-teli-info"
    ]
  ],
  [
    "design-04866",
    [
      "&:where(:has(#body-inner)) .tt-teli-info"
    ]
  ],
  [
    "design-04867",
    [
      "&:where(:has(#body-inner)) .tt-teli-description"
    ]
  ],
  [
    "design-04868",
    [
      "&:where(:has(#body-inner)) .tt-teli-description"
    ]
  ],
  [
    "design-04869",
    [
      "&:where(:has(#body-inner)) .tt-teli-description"
    ]
  ],
  [
    "design-04870",
    [
      "&:where(:has(#body-inner)) .tt-teli-description"
    ]
  ],
  [
    "design-04871",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-teli-description }"
    ]
  ],
  [
    "design-04872",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-teli-inner::before"
    ]
  ],
  [
    "design-04873",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-teli-inner::before"
    ]
  ],
  [
    "design-04874",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-teli-inner::before"
    ]
  ],
  [
    "design-04875",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-teli-inner::before"
    ]
  ],
  [
    "design-04876",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-teli-inner::before"
    ]
  ],
  [
    "design-04877",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-teli-inner::before"
    ]
  ],
  [
    "design-04878",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-teli-inner::before"
    ]
  ],
  [
    "design-04879",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-teli-inner::before"
    ]
  ],
  [
    "design-04880",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-teli-inner::before"
    ]
  ],
  [
    "design-04881",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-teli-inner::before"
    ]
  ],
  [
    "design-04882",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-teli-inner::before"
    ]
  ],
  [
    "design-04883",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-teli-inner::before"
    ]
  ],
  [
    "design-04884",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-teli-inner::before"
    ]
  ],
  [
    "design-04885",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-teli-inner:hover::before"
    ]
  ],
  [
    "design-04886",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-teli-inner"
    ]
  ],
  [
    "design-04887",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-team-list-item:hover .tt-teli-inner"
    ]
  ],
  [
    "design-04888",
    [
      "@media (min-width: 767px) { &:where(:has(#body-inner)) body:not(.is-mobile) .tt-team-list.tt-teli-alter .tt-teli-image }"
    ]
  ],
  [
    "design-04889",
    [
      "@media (min-width: 767px) { &:where(:has(#body-inner)) body:not(.is-mobile) .tt-team-list.tt-teli-alter .tt-teli-image }"
    ]
  ],
  [
    "design-04890",
    [
      "@media (min-width: 767px) { &:where(:has(#body-inner)) body:not(.is-mobile) .tt-team-list.tt-teli-alter .tt-teli-image }"
    ]
  ],
  [
    "design-04891",
    [
      "@media (min-width: 767px) { &:where(:has(#body-inner)) body:not(.is-mobile) .tt-team-list.tt-teli-alter .tt-teli-image }"
    ]
  ],
  [
    "design-04892",
    [
      "@media (min-width: 767px) { &:where(:has(#body-inner)) body:not(.is-mobile) .tt-team-list.tt-teli-alter .tt-teli-image }"
    ]
  ],
  [
    "design-04893",
    [
      "@media (min-width: 767px) { &:where(:has(#body-inner)) body:not(.is-mobile) .tt-wrap .tt-team-list.tt-teli-alter .tt-teli-image }"
    ]
  ],
  [
    "design-04894",
    [
      "@media (min-width: 767px) { &:where(:has(#body-inner)) body:not(.is-mobile) .tt-team-list.tt-teli-alter .tt-teli-image-inner }"
    ]
  ],
  [
    "design-04895",
    [
      "@media (min-width: 767px) { &:where(:has(#body-inner)) body:not(.is-mobile) .tt-team-list.tt-teli-alter .tt-teli-image-inner }"
    ]
  ],
  [
    "design-04896",
    [
      "@media (min-width: 767px) { &:where(:has(#body-inner)) body:not(.is-mobile) .tt-team-list.tt-teli-alter .tt-teli-image-inner }"
    ]
  ],
  [
    "design-04897",
    [
      "@media (min-width: 767px) { &:where(:has(#body-inner)) body:not(.is-mobile) .tt-team-list.tt-teli-alter .tt-teli-image-inner }"
    ]
  ],
  [
    "design-04898",
    [
      "@media (min-width: 767px) { &:where(:has(#body-inner)) body:not(.is-mobile) .tt-team-list.tt-teli-alter .tt-teli-image-inner }"
    ]
  ],
  [
    "design-04899",
    [
      "@media (min-width: 767px) { &:where(:has(#body-inner)) body:not(.is-mobile) .tt-team-list.tt-teli-alter .tt-teli-image-inner }"
    ]
  ],
  [
    "design-04900",
    [
      "@media (min-width: 767px) { &:where(:has(#body-inner)) body:not(.is-mobile) .tt-wrap .tt-team-list.tt-teli-alter .tt-teli-image-inner }"
    ]
  ],
  [
    "design-04901",
    [
      "@media (min-width: 767px) { &:where(:has(#body-inner)) body:not(.is-mobile) .tt-team-list.tt-teli-alter .tt-team-list-item:hover .tt-teli-image-inner }"
    ]
  ],
  [
    "design-04902",
    [
      "@media (min-width: 767px) { &:where(:has(#body-inner)) body:not(.is-mobile) .tt-team-list.tt-teli-alter .tt-team-list-item:hover .tt-teli-image-inner }"
    ]
  ],
  [
    "design-04903",
    [
      "@media (min-width: 767px) { &:where(:has(#body-inner)) body:not(.is-mobile) .tt-team-list.tt-teli-alter .tt-teli-image img }"
    ]
  ],
  [
    "design-04904",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) body:not(.is-mobile) .tt-team-list.tt-teli-alter .tt-teli-image }"
    ]
  ],
  [
    "design-04905",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) body:not(.is-mobile) .tt-team-list.tt-teli-alter .tt-teli-image }"
    ]
  ],
  [
    "design-04906",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) body:not(.is-mobile) .tt-team-list.tt-teli-alter .tt-teli-image }"
    ]
  ],
  [
    "design-04907",
    [
      "&:where(:has(#body-inner)) .tt-team-list.tt-teli-tilted .tt-team-list-item:nth-child(2n+1) .tt-teli-image"
    ]
  ],
  [
    "design-04908",
    [
      "&:where(:has(#body-inner)) .tt-team-list.tt-teli-tilted .tt-team-list-item:nth-child(2n) .tt-teli-image"
    ]
  ],
  [
    "design-04909",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-team-list.tt-teli-tilted .tt-teli-image }"
    ]
  ],
  [
    "design-04910",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-team-list.tt-teli-tilted .tt-teli-image }"
    ]
  ],
  [
    "design-04911",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-team-list.tt-teli-tilted .tt-teli-image }"
    ]
  ],
  [
    "design-04912",
    [
      "@media (min-width: 767px) { &:where(:has(#body-inner)) body:not(.is-mobile) .tt-team-list.tt-teli-tilted.tt-teli-alter .tt-team-list-item:nth-child(2n+1):hover .tt-teli-image-inner }"
    ]
  ],
  [
    "design-04913",
    [
      "@media (min-width: 767px) { &:where(:has(#body-inner)) body:not(.is-mobile) .tt-team-list.tt-teli-tilted.tt-teli-alter .tt-team-list-item:nth-child(2n):hover .tt-teli-image-inner }"
    ]
  ],
  [
    "design-04914",
    [
      "&:where(:has(#body-inner)) .tt-team-list.tt-teli-tilted .tt-teli-inner"
    ]
  ],
  [
    "design-04915",
    [
      "&:where(:has(#body-inner)) .tt-team-list.tt-teli-tilted .tt-teli-inner"
    ]
  ],
  [
    "design-04916",
    [
      "&:where(:has(#body-inner)) .tt-team-list.tt-teli-tilted .tt-teli-inner"
    ]
  ],
  [
    "design-04917",
    [
      "&:where(:has(#body-inner)) .tt-team-list.tt-teli-tilted .tt-teli-inner"
    ]
  ],
  [
    "design-04918",
    [
      "&:where(:has(#body-inner)) .tt-team-list.tt-teli-tilted .tt-teli-inner"
    ]
  ],
  [
    "design-04919",
    [
      "&:where(:has(#body-inner)) .tt-team-list.tt-teli-tilted .tt-team-list-item:nth-child(2n+1) .tt-teli-inner"
    ]
  ],
  [
    "design-04920",
    [
      "&:where(:has(#body-inner)) .tt-team-list.tt-teli-tilted .tt-team-list-item:nth-child(2n) .tt-teli-inner"
    ]
  ],
  [
    "design-04921",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-team-list.tt-teli-tilted .tt-team-list-item:nth-child(2n+1) .tt-teli-inner }"
    ]
  ],
  [
    "design-04922",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-team-list.tt-teli-tilted .tt-team-list-item:nth-child(2n) .tt-teli-inner }"
    ]
  ],
  [
    "design-04923",
    [
      "&:where(:has(#body-inner)) .tt-team-list.tt-teli-boxed"
    ]
  ],
  [
    "design-04924",
    [
      "&:where(:has(#body-inner)) .tt-team-list.tt-teli-boxed"
    ]
  ],
  [
    "design-04925",
    [
      "&:where(:has(#body-inner)) .tt-wrap .tt-team-list.tt-teli-boxed"
    ]
  ],
  [
    "design-04926",
    [
      "&:where(:has(#body-inner)) .tt-wrap .tt-team-list.tt-teli-boxed"
    ]
  ],
  [
    "design-04927",
    [
      "@media (min-width: 767px) { &:where(:has(#body-inner)) body:not(.is-mobile) .tt-team-list.tt-teli-boxed .tt-teli-image }"
    ]
  ],
  [
    "design-04928",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-wrap .tt-team-list.tt-teli-boxed .tt-teli-image }"
    ]
  ],
  [
    "design-04929",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-wrap .tt-team-list.tt-teli-boxed .tt-teli-image }"
    ]
  ],
  [
    "design-04930",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-wrap .tt-team-list.tt-teli-boxed .tt-teli-image }"
    ]
  ],
  [
    "design-04931",
    [
      "&:where(:has(#body-inner)) .tt-team-list.tt-teli-boxed:not(.tt-teli-tilted) .tt-teli-inner"
    ]
  ],
  [
    "design-04932",
    [
      "&:where(:has(#body-inner)) .tt-team-list.tt-teli-boxed .tt-teli-inner"
    ]
  ],
  [
    "design-04933",
    [
      "&:where(:has(#body-inner)) .tt-team-list.tt-teli-boxed .tt-teli-inner"
    ]
  ],
  [
    "design-04934",
    [
      "&:where(:has(#body-inner)) .tt-team-list.tt-teli-boxed .tt-teli-inner"
    ]
  ],
  [
    "design-04935",
    [
      "&:where(:has(#body-inner)) .tt-team-list.tt-teli-boxed .tt-teli-inner"
    ]
  ],
  [
    "design-04936",
    [
      "&:where(:has(#body-inner)) .tt-team-list.tt-teli-boxed .tt-teli-inner"
    ]
  ],
  [
    "design-04937",
    [
      "&:where(:has(#body-inner)) .tt-team-list.tt-teli-boxed .tt-teli-inner"
    ]
  ],
  [
    "design-04938",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-team-list.tt-teli-boxed .tt-teli-inner }"
    ]
  ],
  [
    "design-04939",
    [
      "&:where(:has(#body-inner)) .tt-pricing-plan"
    ]
  ],
  [
    "design-04940",
    [
      "&:where(:has(#body-inner)) .tt-pricing-plan"
    ]
  ],
  [
    "design-04941",
    [
      "&:where(:has(#body-inner)) .tt-pricing-plan"
    ]
  ],
  [
    "design-04942",
    [
      "&:where(:has(#body-inner)) .tt-pricing-plan"
    ]
  ],
  [
    "design-04943",
    [
      "&:where(:has(#body-inner)) .tt-pricing-plan"
    ]
  ],
  [
    "design-04944",
    [
      "&:where(:has(#body-inner)) .tt-pricing-plan"
    ]
  ],
  [
    "design-04945",
    [
      "&:where(:has(#body-inner)) .tt-ppl-header"
    ]
  ],
  [
    "design-04946",
    [
      "&:where(:has(#body-inner)) .tt-ppl-name"
    ]
  ],
  [
    "design-04947",
    [
      "&:where(:has(#body-inner)) .tt-ppl-name"
    ]
  ],
  [
    "design-04948",
    [
      "&:where(:has(#body-inner)) .tt-ppl-name"
    ]
  ],
  [
    "design-04949",
    [
      "&:where(:has(#body-inner)) .tt-ppl-name"
    ]
  ],
  [
    "design-04950",
    [
      "&:where(:has(#body-inner)) .tt-ppl-description"
    ]
  ],
  [
    "design-04951",
    [
      "&:where(:has(#body-inner)) .tt-ppl-description"
    ]
  ],
  [
    "design-04952",
    [
      "&:where(:has(#body-inner)) .tt-ppl-description"
    ]
  ],
  [
    "design-04953",
    [
      "&:where(:has(#body-inner)) .tt-ppl-price"
    ]
  ],
  [
    "design-04954",
    [
      "&:where(:has(#body-inner)) .tt-ppl-price"
    ]
  ],
  [
    "design-04955",
    [
      "&:where(:has(#body-inner)) .tt-ppl-price"
    ]
  ],
  [
    "design-04956",
    [
      "&:where(:has(#body-inner)) .tt-ppl-price"
    ]
  ],
  [
    "design-04957",
    [
      "&:where(:has(#body-inner)) .tt-ppl-price"
    ]
  ],
  [
    "design-04958",
    [
      "&:where(:has(#body-inner)) .tt-ppl-price"
    ]
  ],
  [
    "design-04959",
    [
      "&:where(:has(#body-inner)) .tt-ppl-currency"
    ]
  ],
  [
    "design-04960",
    [
      "&:where(:has(#body-inner)) .tt-ppl-currency"
    ]
  ],
  [
    "design-04961",
    [
      "&:where(:has(#body-inner)) .tt-ppl-period"
    ]
  ],
  [
    "design-04962",
    [
      "&:where(:has(#body-inner)) .tt-ppl-period"
    ]
  ],
  [
    "design-04963",
    [
      "&:where(:has(#body-inner)) .tt-ppl-period"
    ]
  ],
  [
    "design-04964",
    [
      "&:where(:has(#body-inner)) .tt-ppl-note"
    ]
  ],
  [
    "design-04965",
    [
      "&:where(:has(#body-inner)) .tt-ppl-note"
    ]
  ],
  [
    "design-04966",
    [
      "&:where(:has(#body-inner)) .tt-ppl-note"
    ]
  ],
  [
    "design-04967",
    [
      "&:where(:has(#body-inner)) .tt-ppl-note"
    ]
  ],
  [
    "design-04968",
    [
      "&:where(:has(#body-inner)) .tt-ppl-button"
    ]
  ],
  [
    "design-04969",
    [
      "&:where(:has(#body-inner)) .tt-ppl-button .tt-btn"
    ]
  ],
  [
    "design-04970",
    [
      "&:where(:has(#body-inner)) .tt-ppl-features"
    ]
  ],
  [
    "design-04971",
    [
      "&:where(:has(#body-inner)) .tt-ppl-features-list"
    ]
  ],
  [
    "design-04972",
    [
      "&:where(:has(#body-inner)) .tt-ppl-features-list"
    ]
  ],
  [
    "design-04973",
    [
      "&:where(:has(#body-inner)) .tt-ppl-features-list"
    ]
  ],
  [
    "design-04974",
    [
      "&:where(:has(#body-inner)) .tt-ppl-feature"
    ]
  ],
  [
    "design-04975",
    [
      "&:where(:has(#body-inner)) .tt-ppl-feature"
    ]
  ],
  [
    "design-04976",
    [
      "&:where(:has(#body-inner)) .tt-ppl-feature"
    ]
  ],
  [
    "design-04977",
    [
      "&:where(:has(#body-inner)) .tt-ppl-feature"
    ]
  ],
  [
    "design-04978",
    [
      "&:where(:has(#body-inner)) .tt-ppl-feature-icon"
    ]
  ],
  [
    "design-04979",
    [
      "&:where(:has(#body-inner)) .tt-ppl-feature-icon"
    ]
  ],
  [
    "design-04980",
    [
      "&:where(:has(#body-inner)) .tt-ppl-feature.not-included .tt-ppl-feature-icon"
    ]
  ],
  [
    "design-04981",
    [
      "&:where(:has(#body-inner)) a.tt-ppl-feature-text"
    ]
  ],
  [
    "design-04982",
    [
      "&:where(:has(#body-inner)) a.tt-ppl-feature-text"
    ]
  ],
  [
    "design-04983",
    [
      "&:where(:has(#body-inner)) a.tt-ppl-feature-text"
    ]
  ],
  [
    "design-04984",
    [
      "&:where(:has(#body-inner)) a.tt-ppl-feature-text"
    ]
  ],
  [
    "design-04985",
    [
      "&:where(:has(#body-inner)) a.tt-ppl-feature-text"
    ]
  ],
  [
    "design-04986",
    [
      "&:where(:has(#body-inner)) a.tt-ppl-feature-text:hover",
      "&:where(:has(#body-inner)) a.tt-ppl-feature-text:focus"
    ]
  ],
  [
    "design-04987",
    [
      "&:where(:has(#body-inner)) a.tt-ppl-feature-text:hover",
      "&:where(:has(#body-inner)) a.tt-ppl-feature-text:focus"
    ]
  ],
  [
    "design-04988",
    [
      "&:where(:has(#body-inner)) a.tt-ppl-feature-text:hover",
      "&:where(:has(#body-inner)) a.tt-ppl-feature-text:focus"
    ]
  ],
  [
    "design-04989",
    [
      "&:where(:has(#body-inner)) [data-ppl-tooltip]"
    ]
  ],
  [
    "design-04990",
    [
      "&:where(:has(#body-inner)) [data-ppl-tooltip]"
    ]
  ],
  [
    "design-04991",
    [
      "&:where(:has(#body-inner)) [data-ppl-tooltip] .tt-ppl-feature-text"
    ]
  ],
  [
    "design-04992",
    [
      "&:where(:has(#body-inner)) .ppl-tooltip"
    ]
  ],
  [
    "design-04993",
    [
      "&:where(:has(#body-inner)) .ppl-tooltip"
    ]
  ],
  [
    "design-04994",
    [
      "&:where(:has(#body-inner)) .ppl-tooltip"
    ]
  ],
  [
    "design-04995",
    [
      "&:where(:has(#body-inner)) .ppl-tooltip"
    ]
  ],
  [
    "design-04996",
    [
      "&:where(:has(#body-inner)) .ppl-tooltip"
    ]
  ],
  [
    "design-04997",
    [
      "&:where(:has(#body-inner)) .ppl-tooltip"
    ]
  ],
  [
    "design-04998",
    [
      "&:where(:has(#body-inner)) .ppl-tooltip"
    ]
  ],
  [
    "design-04999",
    [
      "&:where(:has(#body-inner)) .ppl-tooltip"
    ]
  ],
  [
    "design-05000",
    [
      "&:where(:has(#body-inner)) .ppl-tooltip"
    ]
  ],
  [
    "design-05001",
    [
      "&:where(:has(#body-inner)) .ppl-tooltip"
    ]
  ],
  [
    "design-05002",
    [
      "&:where(:has(#body-inner)) .ppl-tooltip"
    ]
  ],
  [
    "design-05003",
    [
      "&:where(:has(#body-inner)) .ppl-tooltip"
    ]
  ],
  [
    "design-05004",
    [
      "&:where(:has(#body-inner)) .ppl-tooltip"
    ]
  ],
  [
    "design-05005",
    [
      "&:where(:has(#body-inner)) .ppl-tooltip"
    ]
  ],
  [
    "design-05006",
    [
      "&:where(:has(#body-inner)) .ppl-tooltip"
    ]
  ],
  [
    "design-05007",
    [
      "&:where(:has(#body-inner)) .ppl-tooltip"
    ]
  ],
  [
    "design-05008",
    [
      "&:where(:has(#body-inner)) .ppl-tooltip"
    ]
  ],
  [
    "design-05009",
    [
      "&:where(:has(#body-inner)) .ppl-tooltip::before"
    ]
  ],
  [
    "design-05010",
    [
      "&:where(:has(#body-inner)) .ppl-tooltip::before"
    ]
  ],
  [
    "design-05011",
    [
      "&:where(:has(#body-inner)) .ppl-tooltip::before"
    ]
  ],
  [
    "design-05012",
    [
      "&:where(:has(#body-inner)) .ppl-tooltip::before"
    ]
  ],
  [
    "design-05013",
    [
      "&:where(:has(#body-inner)) .ppl-tooltip::before"
    ]
  ],
  [
    "design-05014",
    [
      "&:where(:has(#body-inner)) .ppl-tooltip::before"
    ]
  ],
  [
    "design-05015",
    [
      "&:where(:has(#body-inner)) .ppl-tooltip::before"
    ]
  ],
  [
    "design-05016",
    [
      "&:where(:has(#body-inner)) .ppl-tooltip::before"
    ]
  ],
  [
    "design-05017",
    [
      "&:where(:has(#body-inner)) .ppl-tooltip::before"
    ]
  ],
  [
    "design-05018",
    [
      "&:where(:has(#body-inner)) .ppl-tooltip::before"
    ]
  ],
  [
    "design-05019",
    [
      "&:where(:has(#body-inner)) [data-ppl-tooltip].tt-tooltip-active .ppl-tooltip"
    ]
  ],
  [
    "design-05020",
    [
      "&:where(:has(#body-inner)) [data-ppl-tooltip].tt-tooltip-active .ppl-tooltip"
    ]
  ],
  [
    "design-05021",
    [
      "&:where(:has(#body-inner)) [data-ppl-tooltip].tt-tooltip-locked .ppl-tooltip"
    ]
  ],
  [
    "design-05022",
    [
      "&:where(:has(#body-inner)) .tt-pricing-plan[data-ppl-featured]"
    ]
  ],
  [
    "design-05023",
    [
      "&:where(:has(#body-inner)) .tt-pricing-plan[data-ppl-featured]"
    ]
  ],
  [
    "design-05024",
    [
      "&:where(:has(#body-inner)) .tt-pricing-plan[data-ppl-featured]"
    ]
  ],
  [
    "design-05025",
    [
      "&:where(:has(#body-inner)) .tt-pricing-plan[data-ppl-featured]::before"
    ]
  ],
  [
    "design-05026",
    [
      "&:where(:has(#body-inner)) .tt-pricing-plan[data-ppl-featured]::before"
    ]
  ],
  [
    "design-05027",
    [
      "&:where(:has(#body-inner)) .tt-pricing-plan[data-ppl-featured]::before"
    ]
  ],
  [
    "design-05028",
    [
      "&:where(:has(#body-inner)) .tt-pricing-plan[data-ppl-featured]::before"
    ]
  ],
  [
    "design-05029",
    [
      "&:where(:has(#body-inner)) .tt-pricing-plan[data-ppl-featured]::before"
    ]
  ],
  [
    "design-05030",
    [
      "&:where(:has(#body-inner)) .tt-pricing-plan[data-ppl-featured]::before"
    ]
  ],
  [
    "design-05031",
    [
      "&:where(:has(#body-inner)) .tt-pricing-plan[data-ppl-featured]::before"
    ]
  ],
  [
    "design-05032",
    [
      "&:where(:has(#body-inner)) .tt-pricing-plan[data-ppl-featured]::before"
    ]
  ],
  [
    "design-05033",
    [
      "&:where(:has(#body-inner)) .tt-pricing-plan[data-ppl-featured]::before"
    ]
  ],
  [
    "design-05034",
    [
      "&:where(:has(#body-inner)) .tt-pricing-plan[data-ppl-featured]::before"
    ]
  ],
  [
    "design-05035",
    [
      "&:where(:has(#body-inner)) .tt-pricing-plan[data-ppl-featured]::before"
    ]
  ],
  [
    "design-05036",
    [
      "&:where(:has(#body-inner)) .tt-pricing-plan[data-ppl-featured] .tt-ppl-button .tt-btn"
    ]
  ],
  [
    "design-05037",
    [
      "&:where(:has(#body-inner)) .tt-pricing-plan[data-ppl-featured] .tt-ppl-button .tt-btn"
    ]
  ],
  [
    "design-05038",
    [
      "&:where(:has(#body-inner)) .tt-pricing-plan[data-ppl-featured] .tt-btn-secondary > *",
      "&:where(:has(#body-inner)) .tt-pricing-plan[data-ppl-featured] .tt-btn-secondary > ::after"
    ]
  ],
  [
    "design-05039",
    [
      "&:where(:has(#body-inner)) .tt-pricing-plan[data-ppl-featured] .ppl-tooltip"
    ]
  ],
  [
    "design-05040",
    [
      "&:where(:has(#body-inner)) .tt-pricing-plan[data-ppl-featured] .ppl-tooltip"
    ]
  ],
  [
    "design-05041",
    [
      "&:where(:has(#body-inner)) .tt-pricing-plan[data-ppl-featured] .ppl-tooltip::before"
    ]
  ],
  [
    "design-05042",
    [
      "&:where(:has(#body-inner)) .tt-pricing-container.tt-ppl-boxed .tt-pricing-plan"
    ]
  ],
  [
    "design-05043",
    [
      "&:where(:has(#body-inner)) .tt-pricing-container.tt-ppl-boxed .tt-pricing-plan"
    ]
  ],
  [
    "design-05044",
    [
      "&:where(:has(#body-inner)) .tt-pricing-plan.tt-ppl-tilted-1"
    ]
  ],
  [
    "design-05045",
    [
      "&:where(:has(#body-inner)) .tt-pricing-plan.tt-ppl-tilted-2"
    ]
  ],
  [
    "design-05046",
    [
      "&:where(:has(#body-inner)) .tt-text-image"
    ]
  ],
  [
    "design-05047",
    [
      "&:where(:has(#body-inner)) .tt-text-image"
    ]
  ],
  [
    "design-05048",
    [
      "&:where(:has(#body-inner)) .tt-text-image"
    ]
  ],
  [
    "design-05049",
    [
      "&:where(:has(#body-inner)) .tt-text-image"
    ]
  ],
  [
    "design-05050",
    [
      "&:where(:has(#body-inner)) .tt-text-image"
    ]
  ],
  [
    "design-05051",
    [
      "&:where(:has(#body-inner)) .tt-text-image img"
    ]
  ],
  [
    "design-05052",
    [
      "&:where(:has(#body-inner)) .tt-text-image img"
    ]
  ],
  [
    "design-05053",
    [
      "&:where(:has(#body-inner)) .tt-text-image img"
    ]
  ],
  [
    "design-05054",
    [
      "&:where(:has(#body-inner)) .tt-text-image img"
    ]
  ],
  [
    "design-05055",
    [
      "&:where(:has(#body-inner)) .tt-text-image img"
    ]
  ],
  [
    "design-05056",
    [
      "&:where(:has(#body-inner)) .tt-text-image img"
    ]
  ],
  [
    "design-05057",
    [
      "&:where(:has(#body-inner)) .tt-text-image a"
    ]
  ],
  [
    "design-05058",
    [
      "&:where(:has(#body-inner)) .tt-text-image a"
    ]
  ],
  [
    "design-05059",
    [
      "&:where(:has(#body-inner)) .tt-text-image a img"
    ]
  ],
  [
    "design-05060",
    [
      "&:where(:has(#body-inner)) .tt-text-image a:hover img"
    ]
  ],
  [
    "design-05061",
    [
      "&:where(:has(#body-inner)) .tt-text-image.tt-timg-fixed img"
    ]
  ],
  [
    "design-05062",
    [
      "&:where(:has(#body-inner)) .tt-text-image.tt-timg-boxed"
    ]
  ],
  [
    "design-05063",
    [
      "&:where(:has(#body-inner)) .tt-text-image.tt-timg-boxed"
    ]
  ],
  [
    "design-05064",
    [
      "&:where(:has(#body-inner)) .tt-text-image.tt-timg-boxed"
    ]
  ],
  [
    "design-05065",
    [
      "&:where(:has(#body-inner)) .tt-text-image.tt-timg-boxed"
    ]
  ],
  [
    "design-05066",
    [
      "&:where(:has(#body-inner)) .tt-text-image.tt-timg-boxed"
    ]
  ],
  [
    "design-05067",
    [
      "&:where(:has(#body-inner)) .tt-text-image.tt-timg-boxed a"
    ]
  ],
  [
    "design-05068",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-text-image.tt-timg-boxed }"
    ]
  ],
  [
    "design-05069",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-text-image.tt-timg-boxed }"
    ]
  ],
  [
    "design-05070",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-text-image.tt-timg-boxed }"
    ]
  ],
  [
    "design-05071",
    [
      "&:where(:has(#body-inner)) .tt-text-image.tt-timg-tilted-1"
    ]
  ],
  [
    "design-05072",
    [
      "&:where(:has(#body-inner)) .tt-text-image.tt-timg-tilted-2"
    ]
  ],
  [
    "design-05073",
    [
      "&:where(:has(#body-inner)):root"
    ]
  ],
  [
    "design-05074",
    [
      "&:where(:has(#body-inner)):root"
    ]
  ],
  [
    "design-05075",
    [
      "&:where(:has(#body-inner)):root"
    ]
  ],
  [
    "design-05076",
    [
      "&:where(:has(#body-inner)):root"
    ]
  ],
  [
    "design-05077",
    [
      "&:where(:has(#body-inner)):root"
    ]
  ],
  [
    "design-05078",
    [
      "&:where(:has(#body-inner)):root"
    ]
  ],
  [
    "design-05079",
    [
      "&:where(:has(#body-inner)):root"
    ]
  ],
  [
    "design-05080",
    [
      "&:where(:has(#body-inner)):root"
    ]
  ],
  [
    "design-05081",
    [
      "&:where(:has(#body-inner)):root"
    ]
  ],
  [
    "design-05082",
    [
      "&:where(:has(#body-inner)):root"
    ]
  ],
  [
    "design-05083",
    [
      "&:where(:has(#body-inner)):root"
    ]
  ],
  [
    "design-05084",
    [
      "&:where(:has(#body-inner)):root"
    ]
  ],
  [
    "design-05085",
    [
      "&:where(:has(#body-inner)):root"
    ]
  ],
  [
    "design-05086",
    [
      "&:where(:has(#body-inner)):root"
    ]
  ],
  [
    "design-05087",
    [
      "&:where(:has(#body-inner)):root"
    ]
  ],
  [
    "design-05088",
    [
      "&:where(:has(#body-inner)):root"
    ]
  ],
  [
    "design-05089",
    [
      "&:where(:has(#body-inner)):root"
    ]
  ],
  [
    "design-05090",
    [
      "&:where(:has(#body-inner)):root"
    ]
  ],
  [
    "design-05091",
    [
      "&:where(:has(#body-inner)):root"
    ]
  ],
  [
    "design-05092",
    [
      "&:where(:has(#body-inner)):root"
    ]
  ],
  [
    "design-05093",
    [
      "&:where(:has(#body-inner)):root"
    ]
  ],
  [
    "design-05094",
    [
      "&:where(:has(#body-inner)):root"
    ]
  ],
  [
    "design-05095",
    [
      "&:where(:has(#body-inner)):root"
    ]
  ],
  [
    "design-05096",
    [
      "&:where(:has(#body-inner)) *",
      "&:where(:has(#body-inner))"
    ]
  ],
  [
    "design-05097",
    [
      "html&:where(:has(#body-inner))",
      "&:where(:has(#body-inner)) body"
    ]
  ],
  [
    "design-05098",
    [
      "html&:where(:has(#body-inner))",
      "&:where(:has(#body-inner)) body"
    ]
  ],
  [
    "design-05099",
    [
      "&:where(:has(#body-inner)) body"
    ]
  ],
  [
    "design-05100",
    [
      "&:where(:has(#body-inner)) body"
    ]
  ],
  [
    "design-05101",
    [
      "&:where(:has(#body-inner)) body"
    ]
  ],
  [
    "design-05102",
    [
      "&:where(:has(#body-inner)) body"
    ]
  ],
  [
    "design-05103",
    [
      "&:where(:has(#body-inner)) body"
    ]
  ],
  [
    "design-05104",
    [
      "&:where(:has(#body-inner)) body"
    ]
  ],
  [
    "design-05105",
    [
      "&:where(:has(#body-inner)) body"
    ]
  ],
  [
    "design-05106",
    [
      "&:where(:has(#body-inner)) body"
    ]
  ],
  [
    "design-05107",
    [
      "&:where(:has(#body-inner)) body"
    ]
  ],
  [
    "design-05108",
    [
      "&:where(:has(#body-inner)) body"
    ]
  ],
  [
    "design-05109",
    [
      "&:where(:has(#body-inner)) body"
    ]
  ],
  [
    "design-05110",
    [
      "&:where(:has(#body-inner)) body"
    ]
  ],
  [
    "design-05111",
    [
      "&:where(:has(#body-inner)) body"
    ]
  ],
  [
    "design-05112",
    [
      "&:where(:has(#body-inner)) main"
    ]
  ],
  [
    "design-05113",
    [
      "&:where(:has(#body-inner)) p"
    ]
  ],
  [
    "design-05114",
    [
      "@media (max-width: 480px) { &:where(:has(#body-inner)) p br }"
    ]
  ],
  [
    "design-05115",
    [
      "&:where(:has(#body-inner)) a"
    ]
  ],
  [
    "design-05116",
    [
      "&:where(:has(#body-inner)) a"
    ]
  ],
  [
    "design-05117",
    [
      "&:where(:has(#body-inner)) a"
    ]
  ],
  [
    "design-05118",
    [
      "&:where(:has(#body-inner)) a"
    ]
  ],
  [
    "design-05119",
    [
      "&:where(:has(#body-inner)) a:hover",
      "&:where(:has(#body-inner)) a:focus"
    ]
  ],
  [
    "design-05120",
    [
      "&:where(:has(#body-inner)) p a"
    ]
  ],
  [
    "design-05121",
    [
      "&:where(:has(#body-inner)) pre"
    ]
  ],
  [
    "design-05122",
    [
      "&:where(:has(#body-inner)) pre"
    ]
  ],
  [
    "design-05123",
    [
      "&:where(:has(#body-inner)) pre"
    ]
  ],
  [
    "design-05124",
    [
      "&:where(:has(#body-inner)) pre"
    ]
  ],
  [
    "design-05125",
    [
      "&:where(:has(#body-inner)) pre"
    ]
  ],
  [
    "design-05126",
    [
      "&:where(:has(#body-inner)) pre"
    ]
  ],
  [
    "design-05127",
    [
      "&:where(:has(#body-inner)) pre"
    ]
  ],
  [
    "design-05128",
    [
      "&:where(:has(#body-inner)) pre"
    ]
  ],
  [
    "design-05129",
    [
      "&:where(:has(#body-inner)) pre"
    ]
  ],
  [
    "design-05130",
    [
      "&:where(:has(#body-inner)) pre"
    ]
  ],
  [
    "design-05131",
    [
      "&:where(:has(#body-inner)) pre"
    ]
  ],
  [
    "design-05132",
    [
      "&:where(:has(#body-inner)) pre"
    ]
  ],
  [
    "design-05133",
    [
      "&:where(:has(#body-inner)) pre"
    ]
  ],
  [
    "design-05134",
    [
      "&:where(:has(#body-inner)) pre"
    ]
  ],
  [
    "design-05135",
    [
      "&:where(:has(#body-inner)) pre"
    ]
  ],
  [
    "design-05136",
    [
      "&:where(:has(#body-inner)) pre",
      "&:where(:has(#body-inner)) code",
      "&:where(:has(#body-inner)) kbd",
      "&:where(:has(#body-inner)) samp"
    ]
  ],
  [
    "design-05137",
    [
      "&:where(:has(#body-inner)) pre",
      "&:where(:has(#body-inner)) code",
      "&:where(:has(#body-inner)) kbd",
      "&:where(:has(#body-inner)) samp"
    ]
  ],
  [
    "design-05138",
    [
      "&:where(:has(#body-inner)) code"
    ]
  ],
  [
    "design-05139",
    [
      "&:where(:has(#body-inner)) code"
    ]
  ],
  [
    "design-05140",
    [
      "&:where(:has(#body-inner)) pre code"
    ]
  ],
  [
    "design-05141",
    [
      "&:where(:has(#body-inner)) pre code"
    ]
  ],
  [
    "design-05142",
    [
      "&:where(:has(#body-inner)) img"
    ]
  ],
  [
    "design-05143",
    [
      "&:where(:has(#body-inner)) img"
    ]
  ],
  [
    "design-05144",
    [
      "&:where(:has(#body-inner)) img"
    ]
  ],
  [
    "design-05145",
    [
      "&:where(:has(#body-inner)) b",
      "&:where(:has(#body-inner)) strong"
    ]
  ],
  [
    "design-05146",
    [
      "&:where(:has(#body-inner)) b",
      "&:where(:has(#body-inner)) strong"
    ]
  ],
  [
    "design-05147",
    [
      "&:where(:has(#body-inner)) abbr"
    ]
  ],
  [
    "design-05148",
    [
      "&:where(:has(#body-inner)) abbr"
    ]
  ],
  [
    "design-05149",
    [
      "&:where(:has(#body-inner)) mark"
    ]
  ],
  [
    "design-05150",
    [
      "&:where(:has(#body-inner)) mark"
    ]
  ],
  [
    "design-05151",
    [
      "&:where(:has(#body-inner)) mark"
    ]
  ],
  [
    "design-05152",
    [
      "&:where(:has(#body-inner)) mark"
    ]
  ],
  [
    "design-05153",
    [
      "&:where(:has(#body-inner)) mark"
    ]
  ],
  [
    "design-05154",
    [
      "&:where(:has(#body-inner)) mark"
    ]
  ],
  [
    "design-05155",
    [
      "&:where(:has(#body-inner)) section"
    ]
  ],
  [
    "design-05156",
    [
      "&:where(:has(#body-inner)) button:focus"
    ]
  ],
  [
    "design-05157",
    [
      "&:where(:has(#body-inner)) .small",
      "&:where(:has(#body-inner)) small"
    ]
  ],
  [
    "design-05158",
    [
      "&:where(:has(#body-inner)) hr"
    ]
  ],
  [
    "design-05159",
    [
      "&:where(:has(#body-inner)) hr"
    ]
  ],
  [
    "design-05160",
    [
      "&:where(:has(#body-inner)) hr"
    ]
  ],
  [
    "design-05161",
    [
      "&:where(:has(#body-inner)) hr"
    ]
  ],
  [
    "design-05162",
    [
      "&:where(:has(#body-inner)) hr"
    ]
  ],
  [
    "design-05163",
    [
      "&:where(:has(#body-inner)) ::selection"
    ]
  ],
  [
    "design-05164",
    [
      "&:where(:has(#body-inner)) ::selection"
    ]
  ],
  [
    "design-05165",
    [
      "&:where(:has(#body-inner)) ::selection"
    ]
  ],
  [
    "design-05166",
    [
      "&:where(:has(#body-inner)) ::selection"
    ]
  ],
  [
    "design-05167",
    [
      "&:where(:has(#body-inner)) ::-webkit-selection"
    ]
  ],
  [
    "design-05168",
    [
      "&:where(:has(#body-inner)) ::-webkit-selection"
    ]
  ],
  [
    "design-05169",
    [
      "&:where(:has(#body-inner)) ::-webkit-selection"
    ]
  ],
  [
    "design-05170",
    [
      "&:where(:has(#body-inner)) ::-webkit-selection"
    ]
  ],
  [
    "design-05171",
    [
      "&:where(:has(#body-inner)) #tt-page-transition"
    ]
  ],
  [
    "design-05172",
    [
      "&:where(:has(#body-inner)) body.tt-transition #tt-page-transition"
    ]
  ],
  [
    "design-05173",
    [
      "&:where(:has(#body-inner)) body.tt-transition #tt-page-transition"
    ]
  ],
  [
    "design-05174",
    [
      "&:where(:has(#body-inner)) body.tt-transition #tt-page-transition"
    ]
  ],
  [
    "design-05175",
    [
      "&:where(:has(#body-inner)) body.tt-transition .tt-ptr-overlay-top"
    ]
  ],
  [
    "design-05176",
    [
      "&:where(:has(#body-inner)) body.tt-transition .tt-ptr-overlay-top"
    ]
  ],
  [
    "design-05177",
    [
      "&:where(:has(#body-inner)) body.tt-transition .tt-ptr-overlay-top"
    ]
  ],
  [
    "design-05178",
    [
      "&:where(:has(#body-inner)) body.tt-transition .tt-ptr-overlay-top"
    ]
  ],
  [
    "design-05179",
    [
      "&:where(:has(#body-inner)) body.tt-transition .tt-ptr-overlay-top"
    ]
  ],
  [
    "design-05180",
    [
      "&:where(:has(#body-inner)) body.tt-transition .tt-ptr-overlay-top"
    ]
  ],
  [
    "design-05181",
    [
      "&:where(:has(#body-inner)) body.tt-transition .tt-ptr-overlay-top"
    ]
  ],
  [
    "design-05182",
    [
      "&:where(:has(#body-inner)) body.tt-transition .tt-ptr-overlay-top"
    ]
  ],
  [
    "design-05183",
    [
      "&:where(:has(#body-inner)) body.tt-transition .tt-ptr-overlay-bottom"
    ]
  ],
  [
    "design-05184",
    [
      "&:where(:has(#body-inner)) body.tt-transition .tt-ptr-overlay-bottom"
    ]
  ],
  [
    "design-05185",
    [
      "&:where(:has(#body-inner)) body.tt-transition .tt-ptr-overlay-bottom"
    ]
  ],
  [
    "design-05186",
    [
      "&:where(:has(#body-inner)) body.tt-transition .tt-ptr-overlay-bottom"
    ]
  ],
  [
    "design-05187",
    [
      "&:where(:has(#body-inner)) body.tt-transition .tt-ptr-overlay-bottom"
    ]
  ],
  [
    "design-05188",
    [
      "&:where(:has(#body-inner)) body.tt-transition .tt-ptr-overlay-bottom"
    ]
  ],
  [
    "design-05189",
    [
      "&:where(:has(#body-inner)) body.tt-transition .tt-ptr-overlay-bottom"
    ]
  ],
  [
    "design-05190",
    [
      "&:where(:has(#body-inner)) body.tt-transition .tt-ptr-overlay-bottom"
    ]
  ],
  [
    "design-05191",
    [
      "&:where(:has(#body-inner)) body.tt-transition .tt-ptr-preloader"
    ]
  ],
  [
    "design-05192",
    [
      "&:where(:has(#body-inner)) body.tt-transition .tt-ptr-preloader"
    ]
  ],
  [
    "design-05193",
    [
      "&:where(:has(#body-inner)) body.tt-transition .tt-ptr-preloader"
    ]
  ],
  [
    "design-05194",
    [
      "&:where(:has(#body-inner)) body.tt-transition .tt-ptr-preloader"
    ]
  ],
  [
    "design-05195",
    [
      "&:where(:has(#body-inner)) body.tt-transition .tt-ptr-preloader"
    ]
  ],
  [
    "design-05196",
    [
      "&:where(:has(#body-inner)) body.tt-transition .tt-ptr-prel-content"
    ]
  ],
  [
    "design-05197",
    [
      "&:where(:has(#body-inner)) body.tt-transition .tt-ptr-prel-content"
    ]
  ],
  [
    "design-05198",
    [
      "&:where(:has(#body-inner)) body.tt-transition .tt-ptr-prel-content"
    ]
  ],
  [
    "design-05199",
    [
      "&:where(:has(#body-inner)) body.tt-transition .tt-ptr-prel-content"
    ]
  ],
  [
    "design-05200",
    [
      "&:where(:has(#body-inner)) body.tt-transition .tt-ptr-prel-content"
    ]
  ],
  [
    "design-05201",
    [
      "&:where(:has(#body-inner)) body.tt-transition .tt-ptr-prel-content"
    ]
  ],
  [
    "design-05202",
    [
      "&:where(:has(#body-inner)) .tt-ptr-prel-image"
    ]
  ],
  [
    "design-05203",
    [
      "&:where(:has(#body-inner)) .tt-ptr-prel-image"
    ]
  ],
  [
    "design-05204",
    [
      "&:where(:has(#body-inner)) .tt-custom-scrollbar"
    ]
  ],
  [
    "design-05205",
    [
      "html&:where(:has(#body-inner))",
      "&:where(:has(#body-inner)) .tt-custom-scrollbar"
    ]
  ],
  [
    "design-05206",
    [
      "html&:where(:has(#body-inner))",
      "&:where(:has(#body-inner)) .tt-custom-scrollbar"
    ]
  ],
  [
    "design-05207",
    [
      "&:where(:has(#body-inner)) select",
      "&:where(:has(#body-inner)) textarea"
    ]
  ],
  [
    "design-05208",
    [
      "&:where(:has(#body-inner)) select",
      "&:where(:has(#body-inner)) textarea"
    ]
  ],
  [
    "design-05209",
    [
      "html&:where(:has(#body-inner))::-webkit-scrollbar",
      "&:where(:has(#body-inner)) .tt-custom-scrollbar::-webkit-scrollbar"
    ]
  ],
  [
    "design-05210",
    [
      "html&:where(:has(#body-inner))::-webkit-scrollbar",
      "&:where(:has(#body-inner)) .tt-custom-scrollbar::-webkit-scrollbar"
    ]
  ],
  [
    "design-05211",
    [
      "&:where(:has(#body-inner)) select::-webkit-scrollbar",
      "&:where(:has(#body-inner)) textarea::-webkit-scrollbar"
    ]
  ],
  [
    "design-05212",
    [
      "html&:where(:has(#body-inner))::-webkit-scrollbar-track",
      "&:where(:has(#body-inner)) select::-webkit-scrollbar-track",
      "&:where(:has(#body-inner)) textarea::-webkit-scrollbar-track",
      "&:where(:has(#body-inner)) .tt-custom-scrollbar::-webkit-scrollbar-track"
    ]
  ],
  [
    "design-05213",
    [
      "html&:where(:has(#body-inner))::-webkit-scrollbar-thumb",
      "&:where(:has(#body-inner)) .tt-custom-scrollbar::-webkit-scrollbar-thumb"
    ]
  ],
  [
    "design-05214",
    [
      "html&:where(:has(#body-inner))::-webkit-scrollbar-thumb",
      "&:where(:has(#body-inner)) .tt-custom-scrollbar::-webkit-scrollbar-thumb"
    ]
  ],
  [
    "design-05215",
    [
      "html&:where(:has(#body-inner))::-webkit-scrollbar-thumb:hover",
      "&:where(:has(#body-inner)) .tt-custom-scrollbar::-webkit-scrollbar-thumb:hover"
    ]
  ],
  [
    "design-05216",
    [
      "&:where(:has(#body-inner)) select::-webkit-scrollbar-thumb",
      "&:where(:has(#body-inner)) textarea::-webkit-scrollbar-thumb"
    ]
  ],
  [
    "design-05217",
    [
      "&:where(:has(#body-inner)) select::-webkit-scrollbar-thumb",
      "&:where(:has(#body-inner)) textarea::-webkit-scrollbar-thumb"
    ]
  ],
  [
    "design-05218",
    [
      "&:where(:has(#body-inner)) select::-webkit-scrollbar-thumb:hover",
      "&:where(:has(#body-inner)) textarea::-webkit-scrollbar-thumb:hover"
    ]
  ],
  [
    "design-05219",
    [
      "&:where(:has(#body-inner)) #magic-cursor"
    ]
  ],
  [
    "design-05220",
    [
      "&:where(:has(#body-inner)) #magic-cursor"
    ]
  ],
  [
    "design-05221",
    [
      "&:where(:has(#body-inner)) #magic-cursor"
    ]
  ],
  [
    "design-05222",
    [
      "&:where(:has(#body-inner)) #magic-cursor"
    ]
  ],
  [
    "design-05223",
    [
      "&:where(:has(#body-inner)) #magic-cursor"
    ]
  ],
  [
    "design-05224",
    [
      "&:where(:has(#body-inner)) #magic-cursor"
    ]
  ],
  [
    "design-05225",
    [
      "&:where(:has(#body-inner)) #magic-cursor"
    ]
  ],
  [
    "design-05226",
    [
      "&:where(:has(#body-inner)) #magic-cursor"
    ]
  ],
  [
    "design-05227",
    [
      "&:where(:has(#body-inner)) #magic-cursor"
    ]
  ],
  [
    "design-05228",
    [
      "&:where(:has(#body-inner)) body.tt-magic-cursor #magic-cursor"
    ]
  ],
  [
    "design-05229",
    [
      "&:where(:has(#body-inner)) #ball"
    ]
  ],
  [
    "design-05230",
    [
      "&:where(:has(#body-inner)) #ball"
    ]
  ],
  [
    "design-05231",
    [
      "&:where(:has(#body-inner)) #ball"
    ]
  ],
  [
    "design-05232",
    [
      "&:where(:has(#body-inner)) #ball"
    ]
  ],
  [
    "design-05233",
    [
      "&:where(:has(#body-inner)) #ball"
    ]
  ],
  [
    "design-05234",
    [
      "&:where(:has(#body-inner)) #ball"
    ]
  ],
  [
    "design-05235",
    [
      "&:where(:has(#body-inner)) #ball"
    ]
  ],
  [
    "design-05236",
    [
      "&:where(:has(#body-inner)) #ball"
    ]
  ],
  [
    "design-05237",
    [
      "&:where(:has(#body-inner)) #ball.ball-view"
    ]
  ],
  [
    "design-05238",
    [
      "&:where(:has(#body-inner)) #ball.ball-view"
    ]
  ],
  [
    "design-05239",
    [
      "&:where(:has(#body-inner)) #ball.ball-view"
    ]
  ],
  [
    "design-05240",
    [
      "&:where(:has(#body-inner)) #ball.ball-view"
    ]
  ],
  [
    "design-05241",
    [
      "&:where(:has(#body-inner)) #ball.ball-view"
    ]
  ],
  [
    "design-05242",
    [
      "&:where(:has(#body-inner)) #ball.ball-view"
    ]
  ],
  [
    "design-05243",
    [
      "&:where(:has(#body-inner)) #ball.ball-view"
    ]
  ],
  [
    "design-05244",
    [
      "&:where(:has(#body-inner)) #ball .ball-view-inner"
    ]
  ],
  [
    "design-05245",
    [
      "&:where(:has(#body-inner)) #ball .ball-view-inner"
    ]
  ],
  [
    "design-05246",
    [
      "&:where(:has(#body-inner)) #ball .ball-view-inner"
    ]
  ],
  [
    "design-05247",
    [
      "&:where(:has(#body-inner)) #ball .ball-view-inner"
    ]
  ],
  [
    "design-05248",
    [
      "&:where(:has(#body-inner)) #ball .ball-view-inner i"
    ]
  ],
  [
    "design-05249",
    [
      "&:where(:has(#body-inner)) #ball.ball-drag"
    ]
  ],
  [
    "design-05250",
    [
      "&:where(:has(#body-inner)) #ball.ball-drag"
    ]
  ],
  [
    "design-05251",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-inner"
    ]
  ],
  [
    "design-05252",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-inner"
    ]
  ],
  [
    "design-05253",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-inner"
    ]
  ],
  [
    "design-05254",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-inner"
    ]
  ],
  [
    "design-05255",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-inner"
    ]
  ],
  [
    "design-05256",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-inner"
    ]
  ],
  [
    "design-05257",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-inner::before",
      "&:where(:has(#body-inner)) #ball .ball-drag-inner::after"
    ]
  ],
  [
    "design-05258",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-inner::before",
      "&:where(:has(#body-inner)) #ball .ball-drag-inner::after"
    ]
  ],
  [
    "design-05259",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-inner::before",
      "&:where(:has(#body-inner)) #ball .ball-drag-inner::after"
    ]
  ],
  [
    "design-05260",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-inner::before",
      "&:where(:has(#body-inner)) #ball .ball-drag-inner::after"
    ]
  ],
  [
    "design-05261",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-inner::before",
      "&:where(:has(#body-inner)) #ball .ball-drag-inner::after"
    ]
  ],
  [
    "design-05262",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-inner::before",
      "&:where(:has(#body-inner)) #ball .ball-drag-inner::after"
    ]
  ],
  [
    "design-05263",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-inner::before",
      "&:where(:has(#body-inner)) #ball .ball-drag-inner::after"
    ]
  ],
  [
    "design-05264",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-inner::before",
      "&:where(:has(#body-inner)) #ball .ball-drag-inner::after"
    ]
  ],
  [
    "design-05265",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-inner::before",
      "&:where(:has(#body-inner)) #ball .ball-drag-inner::after"
    ]
  ],
  [
    "design-05266",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-inner::before",
      "&:where(:has(#body-inner)) #ball .ball-drag-inner::after"
    ]
  ],
  [
    "design-05267",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-inner::before"
    ]
  ],
  [
    "design-05268",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-inner::before"
    ]
  ],
  [
    "design-05269",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-inner::after"
    ]
  ],
  [
    "design-05270",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-inner::after"
    ]
  ],
  [
    "design-05271",
    [
      "&:where(:has(#body-inner)) #ball.ball-drag-mouse-down"
    ]
  ],
  [
    "design-05272",
    [
      "&:where(:has(#body-inner)) #ball.ball-drag-mouse-down"
    ]
  ],
  [
    "design-05273",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-mouse-down-inner"
    ]
  ],
  [
    "design-05274",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-mouse-down-inner"
    ]
  ],
  [
    "design-05275",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-mouse-down-inner"
    ]
  ],
  [
    "design-05276",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-mouse-down-inner"
    ]
  ],
  [
    "design-05277",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-mouse-down-inner::before",
      "&:where(:has(#body-inner)) #ball .ball-drag-mouse-down-inner::after"
    ]
  ],
  [
    "design-05278",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-mouse-down-inner::before",
      "&:where(:has(#body-inner)) #ball .ball-drag-mouse-down-inner::after"
    ]
  ],
  [
    "design-05279",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-mouse-down-inner::before",
      "&:where(:has(#body-inner)) #ball .ball-drag-mouse-down-inner::after"
    ]
  ],
  [
    "design-05280",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-mouse-down-inner::before",
      "&:where(:has(#body-inner)) #ball .ball-drag-mouse-down-inner::after"
    ]
  ],
  [
    "design-05281",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-mouse-down-inner::before",
      "&:where(:has(#body-inner)) #ball .ball-drag-mouse-down-inner::after"
    ]
  ],
  [
    "design-05282",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-mouse-down-inner::before",
      "&:where(:has(#body-inner)) #ball .ball-drag-mouse-down-inner::after"
    ]
  ],
  [
    "design-05283",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-mouse-down-inner::before",
      "&:where(:has(#body-inner)) #ball .ball-drag-mouse-down-inner::after"
    ]
  ],
  [
    "design-05284",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-mouse-down-inner::before",
      "&:where(:has(#body-inner)) #ball .ball-drag-mouse-down-inner::after"
    ]
  ],
  [
    "design-05285",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-mouse-down-inner::before",
      "&:where(:has(#body-inner)) #ball .ball-drag-mouse-down-inner::after"
    ]
  ],
  [
    "design-05286",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-mouse-down-inner::before",
      "&:where(:has(#body-inner)) #ball .ball-drag-mouse-down-inner::after"
    ]
  ],
  [
    "design-05287",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-mouse-down-inner::before"
    ]
  ],
  [
    "design-05288",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-mouse-down-inner::before"
    ]
  ],
  [
    "design-05289",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-mouse-down-inner::after"
    ]
  ],
  [
    "design-05290",
    [
      "&:where(:has(#body-inner)) #ball .ball-drag-mouse-down-inner::after"
    ]
  ],
  [
    "design-05291",
    [
      "&:where(:has(#body-inner)) #ball.ball-arrow"
    ]
  ],
  [
    "design-05292",
    [
      "&:where(:has(#body-inner)) #ball.ball-arrow"
    ]
  ],
  [
    "design-05293",
    [
      "&:where(:has(#body-inner)) #ball .ball-arrow-left",
      "&:where(:has(#body-inner)) #ball .ball-arrow-right"
    ]
  ],
  [
    "design-05294",
    [
      "&:where(:has(#body-inner)) #ball .ball-arrow-left",
      "&:where(:has(#body-inner)) #ball .ball-arrow-right"
    ]
  ],
  [
    "design-05295",
    [
      "&:where(:has(#body-inner)) #ball .ball-arrow-left",
      "&:where(:has(#body-inner)) #ball .ball-arrow-right"
    ]
  ],
  [
    "design-05296",
    [
      "&:where(:has(#body-inner)) #ball .ball-arrow-left::before",
      "&:where(:has(#body-inner)) #ball .ball-arrow-right::before"
    ]
  ],
  [
    "design-05297",
    [
      "&:where(:has(#body-inner)) #ball .ball-arrow-left::before",
      "&:where(:has(#body-inner)) #ball .ball-arrow-right::before"
    ]
  ],
  [
    "design-05298",
    [
      "&:where(:has(#body-inner)) #ball .ball-arrow-left::before",
      "&:where(:has(#body-inner)) #ball .ball-arrow-right::before"
    ]
  ],
  [
    "design-05299",
    [
      "&:where(:has(#body-inner)) #ball .ball-arrow-left::before",
      "&:where(:has(#body-inner)) #ball .ball-arrow-right::before"
    ]
  ],
  [
    "design-05300",
    [
      "&:where(:has(#body-inner)) #ball .ball-arrow-left::before",
      "&:where(:has(#body-inner)) #ball .ball-arrow-right::before"
    ]
  ],
  [
    "design-05301",
    [
      "&:where(:has(#body-inner)) #ball .ball-arrow-left::before",
      "&:where(:has(#body-inner)) #ball .ball-arrow-right::before"
    ]
  ],
  [
    "design-05302",
    [
      "&:where(:has(#body-inner)) #ball .ball-arrow-left::before",
      "&:where(:has(#body-inner)) #ball .ball-arrow-right::before"
    ]
  ],
  [
    "design-05303",
    [
      "&:where(:has(#body-inner)) #ball .ball-arrow-left::before",
      "&:where(:has(#body-inner)) #ball .ball-arrow-right::before"
    ]
  ],
  [
    "design-05304",
    [
      "&:where(:has(#body-inner)) #ball .ball-arrow-left::before"
    ]
  ],
  [
    "design-05305",
    [
      "&:where(:has(#body-inner)) #ball .ball-arrow-right::before"
    ]
  ],
  [
    "design-05306",
    [
      "&:where(:has(#body-inner)) #ball.ball-close"
    ]
  ],
  [
    "design-05307",
    [
      "&:where(:has(#body-inner)) #ball.ball-close"
    ]
  ],
  [
    "design-05308",
    [
      "&:where(:has(#body-inner)) #ball .ball-close-inner"
    ]
  ],
  [
    "design-05309",
    [
      "&:where(:has(#body-inner)) #ball .ball-close-inner"
    ]
  ],
  [
    "design-05310",
    [
      "&:where(:has(#body-inner)) #ball .ball-close-inner"
    ]
  ],
  [
    "design-05311",
    [
      "&:where(:has(#body-inner)) #ball .ball-close-inner"
    ]
  ],
  [
    "design-05312",
    [
      "&:where(:has(#body-inner)) #ball .ball-close-inner"
    ]
  ],
  [
    "design-05313",
    [
      "&:where(:has(#body-inner)) #ball .ball-close-inner"
    ]
  ],
  [
    "design-05314",
    [
      "&:where(:has(#body-inner)) #ball .ball-close-inner"
    ]
  ],
  [
    "design-05315",
    [
      "&:where(:has(#body-inner)) .magnetic-wrap"
    ]
  ],
  [
    "design-05316",
    [
      "&:where(:has(#body-inner)) .magnetic-wrap"
    ]
  ],
  [
    "design-05317",
    [
      "&:where(:has(#body-inner)) #ball.magnetic-active"
    ]
  ],
  [
    "design-05318",
    [
      "&:where(:has(#body-inner)) .h1",
      "&:where(:has(#body-inner)) .h2",
      "&:where(:has(#body-inner)) .h3",
      "&:where(:has(#body-inner)) .h4",
      "&:where(:has(#body-inner)) .h5",
      "&:where(:has(#body-inner)) .h6",
      "&:where(:has(#body-inner)) h1",
      "&:where(:has(#body-inner)) h2",
      "&:where(:has(#body-inner)) h3",
      "&:where(:has(#body-inner)) h4",
      "&:where(:has(#body-inner)) h5",
      "&:where(:has(#body-inner)) h6"
    ]
  ],
  [
    "design-05319",
    [
      "&:where(:has(#body-inner)) .h1",
      "&:where(:has(#body-inner)) .h2",
      "&:where(:has(#body-inner)) .h3",
      "&:where(:has(#body-inner)) .h4",
      "&:where(:has(#body-inner)) .h5",
      "&:where(:has(#body-inner)) .h6",
      "&:where(:has(#body-inner)) h1",
      "&:where(:has(#body-inner)) h2",
      "&:where(:has(#body-inner)) h3",
      "&:where(:has(#body-inner)) h4",
      "&:where(:has(#body-inner)) h5",
      "&:where(:has(#body-inner)) h6"
    ]
  ],
  [
    "design-05320",
    [
      "&:where(:has(#body-inner)) .h1",
      "&:where(:has(#body-inner)) .h2",
      "&:where(:has(#body-inner)) .h3",
      "&:where(:has(#body-inner)) .h4",
      "&:where(:has(#body-inner)) .h5",
      "&:where(:has(#body-inner)) .h6",
      "&:where(:has(#body-inner)) h1",
      "&:where(:has(#body-inner)) h2",
      "&:where(:has(#body-inner)) h3",
      "&:where(:has(#body-inner)) h4",
      "&:where(:has(#body-inner)) h5",
      "&:where(:has(#body-inner)) h6"
    ]
  ],
  [
    "design-05321",
    [
      "&:where(:has(#body-inner)) .h1",
      "&:where(:has(#body-inner)) .h2",
      "&:where(:has(#body-inner)) .h3",
      "&:where(:has(#body-inner)) .h4",
      "&:where(:has(#body-inner)) .h5",
      "&:where(:has(#body-inner)) .h6",
      "&:where(:has(#body-inner)) h1",
      "&:where(:has(#body-inner)) h2",
      "&:where(:has(#body-inner)) h3",
      "&:where(:has(#body-inner)) h4",
      "&:where(:has(#body-inner)) h5",
      "&:where(:has(#body-inner)) h6"
    ]
  ],
  [
    "design-05322",
    [
      "&:where(:has(#body-inner)) .h1",
      "&:where(:has(#body-inner)) .h2",
      "&:where(:has(#body-inner)) .h3",
      "&:where(:has(#body-inner)) .h4",
      "&:where(:has(#body-inner)) .h5",
      "&:where(:has(#body-inner)) .h6",
      "&:where(:has(#body-inner)) h1",
      "&:where(:has(#body-inner)) h2",
      "&:where(:has(#body-inner)) h3",
      "&:where(:has(#body-inner)) h4",
      "&:where(:has(#body-inner)) h5",
      "&:where(:has(#body-inner)) h6"
    ]
  ],
  [
    "design-05323",
    [
      "&:where(:has(#body-inner)) .h1",
      "&:where(:has(#body-inner)) .h2",
      "&:where(:has(#body-inner)) .h3",
      "&:where(:has(#body-inner)) .h4",
      "&:where(:has(#body-inner)) .h5",
      "&:where(:has(#body-inner)) .h6",
      "&:where(:has(#body-inner)) h1",
      "&:where(:has(#body-inner)) h2",
      "&:where(:has(#body-inner)) h3",
      "&:where(:has(#body-inner)) h4",
      "&:where(:has(#body-inner)) h5",
      "&:where(:has(#body-inner)) h6"
    ]
  ],
  [
    "design-05324",
    [
      "&:where(:has(#body-inner)) .h1",
      "&:where(:has(#body-inner)) .h2",
      "&:where(:has(#body-inner)) .h3",
      "&:where(:has(#body-inner)) h1",
      "&:where(:has(#body-inner)) h2",
      "&:where(:has(#body-inner)) h3"
    ]
  ],
  [
    "design-05325",
    [
      "&:where(:has(#body-inner)) .h4",
      "&:where(:has(#body-inner)) .h5",
      "&:where(:has(#body-inner)) .h6",
      "&:where(:has(#body-inner)) h4",
      "&:where(:has(#body-inner)) h5",
      "&:where(:has(#body-inner)) h6"
    ]
  ],
  [
    "design-05326",
    [
      "&:where(:has(#body-inner)) .h1",
      "&:where(:has(#body-inner)) h1"
    ]
  ],
  [
    "design-05327",
    [
      "&:where(:has(#body-inner)) .h2",
      "&:where(:has(#body-inner)) h2"
    ]
  ],
  [
    "design-05328",
    [
      "&:where(:has(#body-inner)) .h3",
      "&:where(:has(#body-inner)) h3"
    ]
  ],
  [
    "design-05329",
    [
      "&:where(:has(#body-inner)) .h4",
      "&:where(:has(#body-inner)) h4"
    ]
  ],
  [
    "design-05330",
    [
      "&:where(:has(#body-inner)) .h5",
      "&:where(:has(#body-inner)) h5"
    ]
  ],
  [
    "design-05331",
    [
      "&:where(:has(#body-inner)) .h6",
      "&:where(:has(#body-inner)) h6"
    ]
  ],
  [
    "design-05332",
    [
      "&:where(:has(#body-inner)) .h1.border-bottom",
      "&:where(:has(#body-inner)) .h2.border-bottom",
      "&:where(:has(#body-inner)) .h3.border-bottom",
      "&:where(:has(#body-inner)) .h4.border-bottom",
      "&:where(:has(#body-inner)) .h5.border-bottom",
      "&:where(:has(#body-inner)) .h6.border-bottom",
      "&:where(:has(#body-inner)) h1.border-bottom",
      "&:where(:has(#body-inner)) h2.border-bottom",
      "&:where(:has(#body-inner)) h3.border-bottom",
      "&:where(:has(#body-inner)) h4.border-bottom",
      "&:where(:has(#body-inner)) h5.border-bottom",
      "&:where(:has(#body-inner)) h6.border-bottom"
    ]
  ],
  [
    "design-05333",
    [
      "&:where(:has(#body-inner)) figure"
    ]
  ],
  [
    "design-05334",
    [
      "&:where(:has(#body-inner)) figure"
    ]
  ],
  [
    "design-05335",
    [
      "&:where(:has(#body-inner)) figure"
    ]
  ],
  [
    "design-05336",
    [
      "&:where(:has(#body-inner)) figure"
    ]
  ],
  [
    "design-05337",
    [
      "&:where(:has(#body-inner)) figure"
    ]
  ],
  [
    "design-05338",
    [
      "&:where(:has(#body-inner)) figure"
    ]
  ],
  [
    "design-05339",
    [
      "&:where(:has(#body-inner)) figure"
    ]
  ],
  [
    "design-05340",
    [
      "&:where(:has(#body-inner)) figure img"
    ]
  ],
  [
    "design-05341",
    [
      "&:where(:has(#body-inner)) figure img"
    ]
  ],
  [
    "design-05342",
    [
      "&:where(:has(#body-inner)) figure img"
    ]
  ],
  [
    "design-05343",
    [
      "&:where(:has(#body-inner)) figcaption"
    ]
  ],
  [
    "design-05344",
    [
      "&:where(:has(#body-inner)) figcaption"
    ]
  ],
  [
    "design-05345",
    [
      "&:where(:has(#body-inner)) figcaption"
    ]
  ],
  [
    "design-05346",
    [
      "&:where(:has(#body-inner)) figcaption"
    ]
  ],
  [
    "design-05347",
    [
      "&:where(:has(#body-inner)) figcaption"
    ]
  ],
  [
    "design-05348",
    [
      "&:where(:has(#body-inner)) figcaption"
    ]
  ],
  [
    "design-05349",
    [
      "&:where(:has(#body-inner)) figcaption"
    ]
  ],
  [
    "design-05350",
    [
      "&:where(:has(#body-inner)) figcaption"
    ]
  ],
  [
    "design-05351",
    [
      "&:where(:has(#body-inner)) figcaption"
    ]
  ],
  [
    "design-05352",
    [
      "&:where(:has(#body-inner)) figcaption"
    ]
  ],
  [
    "design-05353",
    [
      "&:where(:has(#body-inner)) figcaption"
    ]
  ],
  [
    "design-05354",
    [
      "&:where(:has(#body-inner)) figcaption"
    ]
  ],
  [
    "design-05355",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) figcaption }"
    ]
  ],
  [
    "design-05356",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) figcaption }"
    ]
  ],
  [
    "design-05357",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) figcaption }"
    ]
  ],
  [
    "design-05358",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) figcaption }"
    ]
  ],
  [
    "design-05359",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) figcaption }"
    ]
  ],
  [
    "design-05360",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) figcaption }"
    ]
  ],
  [
    "design-05361",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) figcaption }"
    ]
  ],
  [
    "design-05362",
    [
      "&:where(:has(#body-inner)) figcaption a"
    ]
  ],
  [
    "design-05363",
    [
      "&:where(:has(#body-inner)) figcaption a"
    ]
  ],
  [
    "design-05364",
    [
      "&:where(:has(#body-inner)) figcaption a:hover",
      "&:where(:has(#body-inner)) figcaption a:focus"
    ]
  ],
  [
    "design-05365",
    [
      "&:where(:has(#body-inner)) figcaption a:hover",
      "&:where(:has(#body-inner)) figcaption a:focus"
    ]
  ],
  [
    "design-05366",
    [
      "&:where(:has(#body-inner)) #body-inner"
    ]
  ],
  [
    "design-05367",
    [
      "&:where(:has(#body-inner)) #body-inner"
    ]
  ],
  [
    "design-05368",
    [
      "&:where(:has(#body-inner)) #body-inner"
    ]
  ],
  [
    "design-05369",
    [
      "&:where(:has(#body-inner)) #body-inner"
    ]
  ],
  [
    "design-05370",
    [
      "&:where(:has(#body-inner)) #body-inner"
    ]
  ],
  [
    "design-05371",
    [
      "&:where(:has(#body-inner)) #tt-content-wrap"
    ]
  ],
  [
    "design-05372",
    [
      "&:where(:has(#body-inner)) #tt-content-wrap"
    ]
  ],
  [
    "design-05373",
    [
      "&:where(:has(#body-inner)) .tt-wrap"
    ]
  ],
  [
    "design-05374",
    [
      "&:where(:has(#body-inner)) .tt-wrap"
    ]
  ],
  [
    "design-05375",
    [
      "&:where(:has(#body-inner)) .tt-wrap"
    ]
  ],
  [
    "design-05376",
    [
      "&:where(:has(#body-inner)) .tt-wrap"
    ]
  ],
  [
    "design-05377",
    [
      "&:where(:has(#body-inner)) .tt-wrap"
    ]
  ],
  [
    "design-05378",
    [
      "@media (min-width: 992px) and (max-width: 1360px) { &:where(:has(#body-inner)) .tt-wrap }"
    ]
  ],
  [
    "design-05379",
    [
      "@media (min-width: 992px) and (max-width: 1360px) { &:where(:has(#body-inner)) .tt-wrap }"
    ]
  ],
  [
    "design-05380",
    [
      "&:where(:has(#body-inner)) .tt-wrap .tt-wrap"
    ]
  ],
  [
    "design-05381",
    [
      "&:where(:has(#body-inner)) .tt-wrap .tt-wrap"
    ]
  ],
  [
    "design-05382",
    [
      "&:where(:has(#body-inner)) .tt-wrap .tt-wrap"
    ]
  ],
  [
    "design-05383",
    [
      "&:where(:has(#body-inner)) #tt-header"
    ]
  ],
  [
    "design-05384",
    [
      "&:where(:has(#body-inner)) #tt-header"
    ]
  ],
  [
    "design-05385",
    [
      "&:where(:has(#body-inner)) #tt-header"
    ]
  ],
  [
    "design-05386",
    [
      "&:where(:has(#body-inner)) #tt-header"
    ]
  ],
  [
    "design-05387",
    [
      "&:where(:has(#body-inner)) #tt-header"
    ]
  ],
  [
    "design-05388",
    [
      "&:where(:has(#body-inner)) #tt-header"
    ]
  ],
  [
    "design-05389",
    [
      "&:where(:has(#body-inner)) #tt-header.tt-header-fixed"
    ]
  ],
  [
    "design-05390",
    [
      "&:where(:has(#body-inner)) #tt-header.tt-header-scroll"
    ]
  ],
  [
    "design-05391",
    [
      "&:where(:has(#body-inner)) #tt-header.tt-header-scroll"
    ]
  ],
  [
    "design-05392",
    [
      "&:where(:has(#body-inner)) #tt-header.tt-header-scroll"
    ]
  ],
  [
    "design-05393",
    [
      "&:where(:has(#body-inner)) body:not(.tt-m-menu-open) #tt-header.tt-header-scroll.tt-fly-up"
    ]
  ],
  [
    "design-05394",
    [
      "&:where(:has(#body-inner)) .tt-header-inner"
    ]
  ],
  [
    "design-05395",
    [
      "&:where(:has(#body-inner)) .tt-header-inner"
    ]
  ],
  [
    "design-05396",
    [
      "&:where(:has(#body-inner)) .tt-header-inner"
    ]
  ],
  [
    "design-05397",
    [
      "&:where(:has(#body-inner)) .tt-header-inner"
    ]
  ],
  [
    "design-05398",
    [
      "&:where(:has(#body-inner)) .tt-header-inner"
    ]
  ],
  [
    "design-05399",
    [
      "&:where(:has(#body-inner)) .tt-header-inner"
    ]
  ],
  [
    "design-05400",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-header-inner }"
    ]
  ],
  [
    "design-05401",
    [
      "&:where(:has(#body-inner)) .tt-header-inner:not(.tt-wrap)"
    ]
  ],
  [
    "design-05402",
    [
      "&:where(:has(#body-inner)) .tt-header-inner:not(.tt-wrap)"
    ]
  ],
  [
    "design-05403",
    [
      "&:where(:has(#body-inner)) #tt-header.tt-filled"
    ]
  ],
  [
    "design-05404",
    [
      "&:where(:has(#body-inner)) #tt-header::before"
    ]
  ],
  [
    "design-05405",
    [
      "&:where(:has(#body-inner)) #tt-header::before"
    ]
  ],
  [
    "design-05406",
    [
      "&:where(:has(#body-inner)) #tt-header::before"
    ]
  ],
  [
    "design-05407",
    [
      "&:where(:has(#body-inner)) #tt-header::before"
    ]
  ],
  [
    "design-05408",
    [
      "&:where(:has(#body-inner)) #tt-header::before"
    ]
  ],
  [
    "design-05409",
    [
      "&:where(:has(#body-inner)) #tt-header.tt-filled::before"
    ]
  ],
  [
    "design-05410",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) #tt-header.tt-filled .tt-header-inner }"
    ]
  ],
  [
    "design-05411",
    [
      "&:where(:has(#body-inner)) .tt-header-col"
    ]
  ],
  [
    "design-05412",
    [
      "&:where(:has(#body-inner)) .tt-header-col"
    ]
  ],
  [
    "design-05413",
    [
      "&:where(:has(#body-inner)) .tt-header-col-center"
    ]
  ],
  [
    "design-05414",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-header-col-right }"
    ]
  ],
  [
    "design-05415",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-header-col-right }"
    ]
  ],
  [
    "design-05416",
    [
      "&:where(:has(#body-inner)) #tt-header.tt-header-alter .tt-header-inner"
    ]
  ],
  [
    "design-05417",
    [
      "&:where(:has(#body-inner)) #tt-header.tt-header-alter .tt-header-col-left"
    ]
  ],
  [
    "design-05418",
    [
      "&:where(:has(#body-inner)) #tt-header.tt-header-alter .tt-header-col-left"
    ]
  ],
  [
    "design-05419",
    [
      "&:where(:has(#body-inner)) #tt-header.tt-header-alter .tt-header-col-center"
    ]
  ],
  [
    "design-05420",
    [
      "&:where(:has(#body-inner)) #tt-header.tt-header-alter .tt-header-col-center"
    ]
  ],
  [
    "design-05421",
    [
      "&:where(:has(#body-inner)) #tt-header.tt-header-alter .tt-header-col-center"
    ]
  ],
  [
    "design-05422",
    [
      "&:where(:has(#body-inner)) #tt-header.tt-header-alter .tt-header-col-right"
    ]
  ],
  [
    "design-05423",
    [
      "&:where(:has(#body-inner)) #tt-header.tt-header-alter .tt-header-col-right"
    ]
  ],
  [
    "design-05424",
    [
      "&:where(:has(#body-inner)) #tt-header.tt-header-alter .tt-header-col-right"
    ]
  ],
  [
    "design-05425",
    [
      "&:where(:has(#body-inner)) #tt-header.tt-header-alter .tt-header-col-right"
    ]
  ],
  [
    "design-05426",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) #tt-header.tt-header-alter .tt-header-col-center }"
    ]
  ],
  [
    "design-05427",
    [
      "&:where(:has(#body-inner)) .tt-logo"
    ]
  ],
  [
    "design-05428",
    [
      "&:where(:has(#body-inner)) .tt-logo"
    ]
  ],
  [
    "design-05429",
    [
      "&:where(:has(#body-inner)) .tt-logo"
    ]
  ],
  [
    "design-05430",
    [
      "&:where(:has(#body-inner)) .tt-logo"
    ]
  ],
  [
    "design-05431",
    [
      "&:where(:has(#body-inner)) .tt-logo"
    ]
  ],
  [
    "design-05432",
    [
      "&:where(:has(#body-inner)) .tt-logo a"
    ]
  ],
  [
    "design-05433",
    [
      "&:where(:has(#body-inner)) .tt-logo a"
    ]
  ],
  [
    "design-05434",
    [
      "&:where(:has(#body-inner)) .tt-logo a"
    ]
  ],
  [
    "design-05435",
    [
      "&:where(:has(#body-inner)) .tt-logo img"
    ]
  ],
  [
    "design-05436",
    [
      "&:where(:has(#body-inner)) .tt-logo-light"
    ]
  ],
  [
    "design-05437",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-logo img }"
    ]
  ],
  [
    "design-05438",
    [
      "&:where(:has(#body-inner)) #tt-header .tt-magnetic-btn"
    ]
  ],
  [
    "design-05439",
    [
      "&:where(:has(#body-inner)) #tt-header .tt-btn"
    ]
  ],
  [
    "design-05440",
    [
      "&:where(:has(#body-inner)) #tt-header .tt-btn"
    ]
  ],
  [
    "design-05441",
    [
      "&:where(:has(#body-inner)) #tt-header .tt-btn"
    ]
  ],
  [
    "design-05442",
    [
      "&:where(:has(#body-inner)) #tt-header .tt-btn"
    ]
  ],
  [
    "design-05443",
    [
      "&:where(:has(#body-inner)) #tt-header .tt-btn"
    ]
  ],
  [
    "design-05444",
    [
      "&:where(:has(#body-inner)) #tt-header .tt-btn"
    ]
  ],
  [
    "design-05445",
    [
      "&:where(:has(#body-inner)) #tt-header .tt-btn"
    ]
  ],
  [
    "design-05446",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu }"
    ]
  ],
  [
    "design-05447",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list }"
    ]
  ],
  [
    "design-05448",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list }"
    ]
  ],
  [
    "design-05449",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list }"
    ]
  ],
  [
    "design-05450",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list }"
    ]
  ],
  [
    "design-05451",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list }"
    ]
  ],
  [
    "design-05452",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list > li }"
    ]
  ],
  [
    "design-05453",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list > li:first-child }"
    ]
  ],
  [
    "design-05454",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list > li:first-child }"
    ]
  ],
  [
    "design-05455",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list > li:last-child }"
    ]
  ],
  [
    "design-05456",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list > li:last-child }"
    ]
  ],
  [
    "design-05457",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > .tt-submenu-trigger > a }"
    ]
  ],
  [
    "design-05458",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > .tt-submenu-trigger > a }"
    ]
  ],
  [
    "design-05459",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > .tt-submenu-trigger > a }"
    ]
  ],
  [
    "design-05460",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > .tt-submenu-trigger > a }"
    ]
  ],
  [
    "design-05461",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > .tt-submenu-trigger > a }"
    ]
  ],
  [
    "design-05462",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > .tt-submenu-trigger > a }"
    ]
  ],
  [
    "design-05463",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > .tt-submenu-trigger > a }"
    ]
  ],
  [
    "design-05464",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > .tt-submenu-trigger > a }"
    ]
  ],
  [
    "design-05465",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > .tt-submenu-trigger > a }"
    ]
  ],
  [
    "design-05466",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > .tt-submenu-trigger > a }"
    ]
  ],
  [
    "design-05467",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > .tt-submenu-trigger > a }"
    ]
  ],
  [
    "design-05468",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > a:hover }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > .tt-submenu-trigger > a:hover }"
    ]
  ],
  [
    "design-05469",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > a:hover }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > .tt-submenu-trigger > a:hover }"
    ]
  ],
  [
    "design-05470",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list > li.active > a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list > li.active > .tt-submenu-trigger > a }"
    ]
  ],
  [
    "design-05471",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list > li.active > a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-main-menu-list > li.active > .tt-submenu-trigger > a }"
    ]
  ],
  [
    "design-05472",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-wrap }"
    ]
  ],
  [
    "design-05473",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-trigger }"
    ]
  ],
  [
    "design-05474",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-trigger.tt-no-first-click::before }"
    ]
  ],
  [
    "design-05475",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-trigger.tt-no-first-click::before }"
    ]
  ],
  [
    "design-05476",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-trigger.tt-no-first-click::before }"
    ]
  ],
  [
    "design-05477",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-trigger.tt-no-first-click::before }"
    ]
  ],
  [
    "design-05478",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-trigger.tt-no-first-click::before }"
    ]
  ],
  [
    "design-05479",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-trigger.tt-no-first-click::before }"
    ]
  ],
  [
    "design-05480",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-trigger.tt-no-first-click::before }"
    ]
  ],
  [
    "design-05481",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-trigger.tt-no-first-click::before }"
    ]
  ],
  [
    "design-05482",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu }"
    ]
  ],
  [
    "design-05483",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu }"
    ]
  ],
  [
    "design-05484",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu }"
    ]
  ],
  [
    "design-05485",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu }"
    ]
  ],
  [
    "design-05486",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu }"
    ]
  ],
  [
    "design-05487",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu }"
    ]
  ],
  [
    "design-05488",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu }"
    ]
  ],
  [
    "design-05489",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu }"
    ]
  ],
  [
    "design-05490",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu }"
    ]
  ],
  [
    "design-05491",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu }"
    ]
  ],
  [
    "design-05492",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu }"
    ]
  ],
  [
    "design-05493",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-master > .tt-submenu }"
    ]
  ],
  [
    "design-05494",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-wrap.tt-submenu-open > .tt-submenu }"
    ]
  ],
  [
    "design-05495",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-wrap.tt-submenu-open > .tt-submenu }"
    ]
  ],
  [
    "design-05496",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-wrap.tt-submenu-open > .tt-submenu }"
    ]
  ],
  [
    "design-05497",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-wrap.tt-submenu-open > .tt-submenu }"
    ]
  ],
  [
    "design-05498",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-list }"
    ]
  ],
  [
    "design-05499",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-list }"
    ]
  ],
  [
    "design-05500",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-list }"
    ]
  ],
  [
    "design-05501",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-list }"
    ]
  ],
  [
    "design-05502",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-list }"
    ]
  ],
  [
    "design-05503",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-list li }"
    ]
  ],
  [
    "design-05504",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-list li a }"
    ]
  ],
  [
    "design-05505",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-list li a }"
    ]
  ],
  [
    "design-05506",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-list li a }"
    ]
  ],
  [
    "design-05507",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-list li a }"
    ]
  ],
  [
    "design-05508",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-list li a }"
    ]
  ],
  [
    "design-05509",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-list li a }"
    ]
  ],
  [
    "design-05510",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-list li a }"
    ]
  ],
  [
    "design-05511",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-list li a }"
    ]
  ],
  [
    "design-05512",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-list li a }"
    ]
  ],
  [
    "design-05513",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-list li a }"
    ]
  ],
  [
    "design-05514",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-list > li a:hover }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-list > li > .tt-submenu-trigger:hover a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-list > li.active > a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-list > li.active > .tt-submenu-trigger a }"
    ]
  ],
  [
    "design-05515",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-m-caret }"
    ]
  ],
  [
    "design-05516",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu .tt-submenu-wrap > .tt-submenu }"
    ]
  ],
  [
    "design-05517",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu .tt-submenu-wrap > .tt-submenu }"
    ]
  ],
  [
    "design-05518",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu .tt-submenu-wrap > .tt-submenu }"
    ]
  ],
  [
    "design-05519",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu .tt-submenu-wrap > .tt-submenu }"
    ]
  ],
  [
    "design-05520",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu .tt-submenu-wrap > .tt-submenu }"
    ]
  ],
  [
    "design-05521",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-trigger > a::after }"
    ]
  ],
  [
    "design-05522",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-trigger > a::after }"
    ]
  ],
  [
    "design-05523",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-trigger > a::after }"
    ]
  ],
  [
    "design-05524",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-trigger > a::after }"
    ]
  ],
  [
    "design-05525",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-trigger > a::after }"
    ]
  ],
  [
    "design-05526",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-trigger > a::after }"
    ]
  ],
  [
    "design-05527",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-trigger > a::after }"
    ]
  ],
  [
    "design-05528",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-trigger > a::after }"
    ]
  ],
  [
    "design-05529",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-trigger > a::after }"
    ]
  ],
  [
    "design-05530",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-trigger > a::after }"
    ]
  ],
  [
    "design-05531",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-trigger > a::after }"
    ]
  ],
  [
    "design-05532",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-trigger > a::after }"
    ]
  ],
  [
    "design-05533",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-wrap .tt-submenu-wrap .tt-submenu-trigger > a::after }"
    ]
  ],
  [
    "design-05534",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-wrap .tt-submenu-wrap .tt-submenu-trigger > a::after }"
    ]
  ],
  [
    "design-05535",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-wrap .tt-submenu-wrap .tt-submenu-trigger > a::after }"
    ]
  ],
  [
    "design-05536",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-wrap .tt-submenu-wrap .tt-submenu-trigger > a::after }"
    ]
  ],
  [
    "design-05537",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-wrap .tt-submenu-wrap .tt-submenu-trigger > a::after }"
    ]
  ],
  [
    "design-05538",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-submenu-trigger .tt-submenu-trigger-m }"
    ]
  ],
  [
    "design-05539",
    [
      "@media (max-width: 1400px) { &:where(:has(#body-inner)) .tt-main-menu-list > li }"
    ]
  ],
  [
    "design-05540",
    [
      "@media (max-width: 1400px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > a }",
      "@media (max-width: 1400px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > .tt-submenu-trigger > a }"
    ]
  ],
  [
    "design-05541",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) #tt-m-menu-toggle-btn-wrap }"
    ]
  ],
  [
    "design-05542",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu }"
    ]
  ],
  [
    "design-05543",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu }"
    ]
  ],
  [
    "design-05544",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu }"
    ]
  ],
  [
    "design-05545",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu }"
    ]
  ],
  [
    "design-05546",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu }"
    ]
  ],
  [
    "design-05547",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu }"
    ]
  ],
  [
    "design-05548",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu }"
    ]
  ],
  [
    "design-05549",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu }"
    ]
  ],
  [
    "design-05550",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu }"
    ]
  ],
  [
    "design-05551",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu }"
    ]
  ],
  [
    "design-05552",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu }"
    ]
  ],
  [
    "design-05553",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-holder }"
    ]
  ],
  [
    "design-05554",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-holder }"
    ]
  ],
  [
    "design-05555",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-holder }"
    ]
  ],
  [
    "design-05556",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-holder }"
    ]
  ],
  [
    "design-05557",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-holder }"
    ]
  ],
  [
    "design-05558",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-inner }"
    ]
  ],
  [
    "design-05559",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-inner }"
    ]
  ],
  [
    "design-05560",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-inner }"
    ]
  ],
  [
    "design-05561",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-inner }"
    ]
  ],
  [
    "design-05562",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-content }"
    ]
  ],
  [
    "design-05563",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-content }"
    ]
  ],
  [
    "design-05564",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-content }"
    ]
  ],
  [
    "design-05565",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-list }"
    ]
  ],
  [
    "design-05566",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-list }"
    ]
  ],
  [
    "design-05567",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-list }"
    ]
  ],
  [
    "design-05568",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-list }"
    ]
  ],
  [
    "design-05569",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-list > li }"
    ]
  ],
  [
    "design-05570",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-list > li }"
    ]
  ],
  [
    "design-05571",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-list > li:first-child }"
    ]
  ],
  [
    "design-05572",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-list > li:last-child }"
    ]
  ],
  [
    "design-05573",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > a }",
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > .tt-submenu-trigger > a }"
    ]
  ],
  [
    "design-05574",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > a }",
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > .tt-submenu-trigger > a }"
    ]
  ],
  [
    "design-05575",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > a }",
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > .tt-submenu-trigger > a }"
    ]
  ],
  [
    "design-05576",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > a }",
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > .tt-submenu-trigger > a }"
    ]
  ],
  [
    "design-05577",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > a }",
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > .tt-submenu-trigger > a }"
    ]
  ],
  [
    "design-05578",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > a }",
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > .tt-submenu-trigger > a }"
    ]
  ],
  [
    "design-05579",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > a }",
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > .tt-submenu-trigger > a }"
    ]
  ],
  [
    "design-05580",
    [
      "@media (max-width: 1024px) { @media (max-width: 767px) { &:where(:has(#body-inner)) .tt-main-menu-inner } }"
    ]
  ],
  [
    "design-05581",
    [
      "@media (max-width: 1024px) { @media (max-width: 767px) { &:where(:has(#body-inner)) .tt-main-menu-inner } }"
    ]
  ],
  [
    "design-05582",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-list > li.active > a }",
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-list > li.active > .tt-submenu-trigger a }",
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-list > li > .tt-submenu-trigger.tt-m-submenu-open a }",
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu-list > li.active > .tt-submenu-trigger .tt-m-caret }"
    ]
  ],
  [
    "design-05583",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu-wrap }"
    ]
  ],
  [
    "design-05584",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu-trigger }"
    ]
  ],
  [
    "design-05585",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu-trigger }"
    ]
  ],
  [
    "design-05586",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu-trigger > a }"
    ]
  ],
  [
    "design-05587",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu-trigger > a }"
    ]
  ],
  [
    "design-05588",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu-trigger .tt-submenu-trigger-m }"
    ]
  ],
  [
    "design-05589",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu-trigger .tt-submenu-trigger-m }"
    ]
  ],
  [
    "design-05590",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu-trigger .tt-submenu-trigger-m }"
    ]
  ],
  [
    "design-05591",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu-trigger .tt-submenu-trigger-m }"
    ]
  ],
  [
    "design-05592",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu-trigger .tt-submenu-trigger-m }"
    ]
  ],
  [
    "design-05593",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu-trigger .tt-submenu-trigger-m }"
    ]
  ],
  [
    "design-05594",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu-trigger .tt-submenu-trigger-m }"
    ]
  ],
  [
    "design-05595",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu-trigger .tt-submenu-trigger-m }"
    ]
  ],
  [
    "design-05596",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu }"
    ]
  ],
  [
    "design-05597",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu }"
    ]
  ],
  [
    "design-05598",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu }"
    ]
  ],
  [
    "design-05599",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu }"
    ]
  ],
  [
    "design-05600",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu }"
    ]
  ],
  [
    "design-05601",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu }"
    ]
  ],
  [
    "design-05602",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu }"
    ]
  ],
  [
    "design-05603",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu }"
    ]
  ],
  [
    "design-05604",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu }"
    ]
  ],
  [
    "design-05605",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu-list }"
    ]
  ],
  [
    "design-05606",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu-list }"
    ]
  ],
  [
    "design-05607",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu-list }"
    ]
  ],
  [
    "design-05608",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu-list .tt-submenu }"
    ]
  ],
  [
    "design-05609",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu-list > li a }"
    ]
  ],
  [
    "design-05610",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu-list > li a }"
    ]
  ],
  [
    "design-05611",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu-list > li a }"
    ]
  ],
  [
    "design-05612",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu-list > li a }"
    ]
  ],
  [
    "design-05613",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu-list > li a }"
    ]
  ],
  [
    "design-05614",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu-list > li a }"
    ]
  ],
  [
    "design-05615",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu-list > li a }"
    ]
  ],
  [
    "design-05616",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu-list > li a:hover }",
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu-list > li > .tt-submenu-trigger:hover a }",
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu-list > li > .tt-submenu-trigger:hover .tt-m-caret }",
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu-list > li > .tt-submenu-trigger.tt-m-submenu-open a }",
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu-list > li > .tt-submenu-trigger.tt-m-submenu-open .tt-m-caret }",
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu-list > li.active > a }",
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu-list > li.active > .tt-submenu-trigger a }",
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu-list > li.active > .tt-submenu-trigger .tt-m-caret }"
    ]
  ],
  [
    "design-05617",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-caret }"
    ]
  ],
  [
    "design-05618",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-caret }"
    ]
  ],
  [
    "design-05619",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-caret }"
    ]
  ],
  [
    "design-05620",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-caret }"
    ]
  ],
  [
    "design-05621",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-caret }"
    ]
  ],
  [
    "design-05622",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-caret }"
    ]
  ],
  [
    "design-05623",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-caret }"
    ]
  ],
  [
    "design-05624",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-caret }"
    ]
  ],
  [
    "design-05625",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-caret }"
    ]
  ],
  [
    "design-05626",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-caret }"
    ]
  ],
  [
    "design-05627",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-caret }"
    ]
  ],
  [
    "design-05628",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-caret }"
    ]
  ],
  [
    "design-05629",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-caret }"
    ]
  ],
  [
    "design-05630",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-caret }"
    ]
  ],
  [
    "design-05631",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-caret::after }"
    ]
  ],
  [
    "design-05632",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-caret::after }"
    ]
  ],
  [
    "design-05633",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-caret::after }"
    ]
  ],
  [
    "design-05634",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-caret::after }"
    ]
  ],
  [
    "design-05635",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-caret::after }"
    ]
  ],
  [
    "design-05636",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-caret::after }"
    ]
  ],
  [
    "design-05637",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-caret::after }"
    ]
  ],
  [
    "design-05638",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-caret::after }"
    ]
  ],
  [
    "design-05639",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-caret::after }"
    ]
  ],
  [
    "design-05640",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu-trigger.tt-m-submenu-open .tt-m-caret::after }"
    ]
  ],
  [
    "design-05641",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-submenu-list > li > .tt-submenu-trigger .tt-m-caret }"
    ]
  ],
  [
    "design-05642",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) #tt-m-menu-toggle-btn-wrap }"
    ]
  ],
  [
    "design-05643",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) #tt-m-menu-toggle-btn-wrap }"
    ]
  ],
  [
    "design-05644",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) #tt-m-menu-toggle-btn-wrap }"
    ]
  ],
  [
    "design-05645",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) #tt-m-menu-toggle-btn-wrap }"
    ]
  ],
  [
    "design-05646",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) #tt-m-menu-toggle-btn-wrap }"
    ]
  ],
  [
    "design-05647",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) #tt-m-menu-toggle-btn-wrap }"
    ]
  ],
  [
    "design-05648",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn-holder }"
    ]
  ],
  [
    "design-05649",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn }"
    ]
  ],
  [
    "design-05650",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn }"
    ]
  ],
  [
    "design-05651",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn }"
    ]
  ],
  [
    "design-05652",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn }"
    ]
  ],
  [
    "design-05653",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn span }"
    ]
  ],
  [
    "design-05654",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn span }"
    ]
  ],
  [
    "design-05655",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn span }"
    ]
  ],
  [
    "design-05656",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn span }"
    ]
  ],
  [
    "design-05657",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn span }"
    ]
  ],
  [
    "design-05658",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn span }"
    ]
  ],
  [
    "design-05659",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn span }"
    ]
  ],
  [
    "design-05660",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn span }"
    ]
  ],
  [
    "design-05661",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn span }"
    ]
  ],
  [
    "design-05662",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn span::before }",
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn span::after }"
    ]
  ],
  [
    "design-05663",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn span::before }",
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn span::after }"
    ]
  ],
  [
    "design-05664",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn span::before }",
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn span::after }"
    ]
  ],
  [
    "design-05665",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn span::before }",
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn span::after }"
    ]
  ],
  [
    "design-05666",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn span::before }",
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn span::after }"
    ]
  ],
  [
    "design-05667",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn span::before }",
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn span::after }"
    ]
  ],
  [
    "design-05668",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn span::before }",
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn span::after }"
    ]
  ],
  [
    "design-05669",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn span::before }"
    ]
  ],
  [
    "design-05670",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn span::after }"
    ]
  ],
  [
    "design-05671",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn span::after }"
    ]
  ],
  [
    "design-05672",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn-text }"
    ]
  ],
  [
    "design-05673",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn-text }"
    ]
  ],
  [
    "design-05674",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn-text }"
    ]
  ],
  [
    "design-05675",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn-text }"
    ]
  ],
  [
    "design-05676",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn-text }"
    ]
  ],
  [
    "design-05677",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn-text }"
    ]
  ],
  [
    "design-05678",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn-text }"
    ]
  ],
  [
    "design-05679",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn-text }"
    ]
  ],
  [
    "design-05680",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) body.tt-m-menu-open .tt-m-menu-toggle-btn-text .tt-m-menu-text-menu }"
    ]
  ],
  [
    "design-05681",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) body.tt-m-menu-open .tt-m-menu-toggle-btn span }"
    ]
  ],
  [
    "design-05682",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) body.tt-m-menu-open .tt-m-menu-toggle-btn span }"
    ]
  ],
  [
    "design-05683",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) body.tt-m-menu-open .tt-m-menu-toggle-btn span::before }"
    ]
  ],
  [
    "design-05684",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) body.tt-m-menu-open .tt-m-menu-toggle-btn span::before }"
    ]
  ],
  [
    "design-05685",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) body.tt-m-menu-open .tt-m-menu-toggle-btn span::before }"
    ]
  ],
  [
    "design-05686",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) body.tt-m-menu-open .tt-m-menu-toggle-btn span::after }"
    ]
  ],
  [
    "design-05687",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) body.tt-m-menu-open .tt-m-menu-toggle-btn span::after }"
    ]
  ],
  [
    "design-05688",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) body.tt-m-menu-open .tt-m-menu-toggle-btn span::after }"
    ]
  ],
  [
    "design-05689",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-m-menu-toggle-btn-text .tt-m-menu-text-close }"
    ]
  ],
  [
    "design-05690",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) body.tt-m-menu-open .tt-m-menu-toggle-btn-text .tt-m-menu-text-close }"
    ]
  ],
  [
    "design-05691",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) body.tt-m-menu-toggle-no-click #tt-m-menu-toggle-btn-wrap }"
    ]
  ],
  [
    "design-05692",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu.tt-m-menu-center .tt-main-menu-content }"
    ]
  ],
  [
    "design-05693",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-main-menu.tt-m-menu-center .tt-submenu-list }"
    ]
  ],
  [
    "design-05694",
    [
      "&:where(:has(#body-inner)) #page-header"
    ]
  ],
  [
    "design-05695",
    [
      "&:where(:has(#body-inner)) .page-header-inner"
    ]
  ],
  [
    "design-05696",
    [
      "&:where(:has(#body-inner)) .page-header-inner"
    ]
  ],
  [
    "design-05697",
    [
      "&:where(:has(#body-inner)) .page-header-inner"
    ]
  ],
  [
    "design-05698",
    [
      "&:where(:has(#body-inner)) .page-header-inner"
    ]
  ],
  [
    "design-05699",
    [
      "&:where(:has(#body-inner)) .page-header-inner"
    ]
  ],
  [
    "design-05700",
    [
      "&:where(:has(#body-inner)) .page-header-inner"
    ]
  ],
  [
    "design-05701",
    [
      "&:where(:has(#body-inner)) .page-header-inner"
    ]
  ],
  [
    "design-05702",
    [
      "@media (max-width: 1500px) { &:where(:has(#body-inner)) .page-header-inner }"
    ]
  ],
  [
    "design-05703",
    [
      "@media (max-width: 1500px) { &:where(:has(#body-inner)) .page-header-inner }"
    ]
  ],
  [
    "design-05704",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .page-header-inner }"
    ]
  ],
  [
    "design-05705",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .page-header-inner }"
    ]
  ],
  [
    "design-05706",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .page-header-inner }"
    ]
  ],
  [
    "design-05707",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .page-header-inner }"
    ]
  ],
  [
    "design-05708",
    [
      "&:where(:has(#body-inner)) .ph-image"
    ]
  ],
  [
    "design-05709",
    [
      "&:where(:has(#body-inner)) .ph-image"
    ]
  ],
  [
    "design-05710",
    [
      "&:where(:has(#body-inner)) .ph-image"
    ]
  ],
  [
    "design-05711",
    [
      "&:where(:has(#body-inner)) .ph-image"
    ]
  ],
  [
    "design-05712",
    [
      "&:where(:has(#body-inner)) .ph-image img"
    ]
  ],
  [
    "design-05713",
    [
      "&:where(:has(#body-inner)) .ph-image img"
    ]
  ],
  [
    "design-05714",
    [
      "&:where(:has(#body-inner)) .ph-image img"
    ]
  ],
  [
    "design-05715",
    [
      "&:where(:has(#body-inner)) .ph-image img"
    ]
  ],
  [
    "design-05716",
    [
      "&:where(:has(#body-inner)) .ph-image-inner"
    ]
  ],
  [
    "design-05717",
    [
      "&:where(:has(#body-inner)) .ph-image-inner"
    ]
  ],
  [
    "design-05718",
    [
      "&:where(:has(#body-inner)) .page-header.ph-image-parallax .ph-image-inner"
    ]
  ],
  [
    "design-05719",
    [
      "&:where(:has(#body-inner)) [class*=\"ph-image-cover-\"] .ph-image-inner::before"
    ]
  ],
  [
    "design-05720",
    [
      "&:where(:has(#body-inner)) [class*=\"ph-image-cover-\"] .ph-image-inner::before"
    ]
  ],
  [
    "design-05721",
    [
      "&:where(:has(#body-inner)) [class*=\"ph-image-cover-\"] .ph-image-inner::before"
    ]
  ],
  [
    "design-05722",
    [
      "&:where(:has(#body-inner)) [class*=\"ph-image-cover-\"] .ph-image-inner::before"
    ]
  ],
  [
    "design-05723",
    [
      "&:where(:has(#body-inner)) [class*=\"ph-image-cover-\"] .ph-image-inner::before"
    ]
  ],
  [
    "design-05724",
    [
      "&:where(:has(#body-inner)) [class*=\"ph-image-cover-\"] .ph-image-inner::before"
    ]
  ],
  [
    "design-05725",
    [
      "&:where(:has(#body-inner)) [class*=\"ph-image-cover-\"] .ph-image-inner::before"
    ]
  ],
  [
    "design-05726",
    [
      "&:where(:has(#body-inner)) [class*=\"ph-image-cover-\"] .ph-image-inner::before"
    ]
  ],
  [
    "design-05727",
    [
      "&:where(:has(#body-inner)) [class*=\"ph-image-cover-\"] .ph-image-inner::before"
    ]
  ],
  [
    "design-05728",
    [
      "&:where(:has(#body-inner)) [class*=\"ph-image-cover-\"] .ph-image-inner::before"
    ]
  ],
  [
    "design-05729",
    [
      "&:where(:has(#body-inner)) .ph-image-cover-0 .ph-image-inner::before"
    ]
  ],
  [
    "design-05730",
    [
      "&:where(:has(#body-inner)) .ph-image-cover-0-5 .ph-image-inner::before"
    ]
  ],
  [
    "design-05731",
    [
      "&:where(:has(#body-inner)) .ph-image-cover-1 .ph-image-inner::before"
    ]
  ],
  [
    "design-05732",
    [
      "&:where(:has(#body-inner)) .ph-image-cover-1-5 .ph-image-inner::before"
    ]
  ],
  [
    "design-05733",
    [
      "&:where(:has(#body-inner)) .ph-image-cover-2 .ph-image-inner::before"
    ]
  ],
  [
    "design-05734",
    [
      "&:where(:has(#body-inner)) .ph-image-cover-2-5 .ph-image-inner::before"
    ]
  ],
  [
    "design-05735",
    [
      "&:where(:has(#body-inner)) .ph-image-cover-3 .ph-image-inner::before"
    ]
  ],
  [
    "design-05736",
    [
      "&:where(:has(#body-inner)) .ph-image-cover-3-5 .ph-image-inner::before"
    ]
  ],
  [
    "design-05737",
    [
      "&:where(:has(#body-inner)) .ph-image-cover-4 .ph-image-inner::before"
    ]
  ],
  [
    "design-05738",
    [
      "&:where(:has(#body-inner)) .ph-image-cover-4-5 .ph-image-inner::before"
    ]
  ],
  [
    "design-05739",
    [
      "&:where(:has(#body-inner)) .ph-image-cover-5 .ph-image-inner::before"
    ]
  ],
  [
    "design-05740",
    [
      "&:where(:has(#body-inner)) .ph-image-cover-5-5 .ph-image-inner::before"
    ]
  ],
  [
    "design-05741",
    [
      "&:where(:has(#body-inner)) .ph-image-cover-6 .ph-image-inner::before"
    ]
  ],
  [
    "design-05742",
    [
      "&:where(:has(#body-inner)) .ph-image-cover-6-5 .ph-image-inner::before"
    ]
  ],
  [
    "design-05743",
    [
      "&:where(:has(#body-inner)) .ph-image-cover-7 .ph-image-inner::before"
    ]
  ],
  [
    "design-05744",
    [
      "&:where(:has(#body-inner)) .ph-image-cover-7-5 .ph-image-inner::before"
    ]
  ],
  [
    "design-05745",
    [
      "&:where(:has(#body-inner)) .ph-image-cover-8 .ph-image-inner::before"
    ]
  ],
  [
    "design-05746",
    [
      "&:where(:has(#body-inner)) .ph-image-cover-8-5 .ph-image-inner::before"
    ]
  ],
  [
    "design-05747",
    [
      "&:where(:has(#body-inner)) .ph-image-cover-9 .ph-image-inner::before"
    ]
  ],
  [
    "design-05748",
    [
      "&:where(:has(#body-inner)) .ph-image-cover-9-5 .ph-image-inner::before"
    ]
  ],
  [
    "design-05749",
    [
      "&:where(:has(#body-inner)) .ph-image.ph-image-grayscale"
    ]
  ],
  [
    "design-05750",
    [
      "&:where(:has(#body-inner)) .ph-video"
    ]
  ],
  [
    "design-05751",
    [
      "&:where(:has(#body-inner)) .ph-video"
    ]
  ],
  [
    "design-05752",
    [
      "&:where(:has(#body-inner)) .ph-video"
    ]
  ],
  [
    "design-05753",
    [
      "&:where(:has(#body-inner)) .ph-video"
    ]
  ],
  [
    "design-05754",
    [
      "&:where(:has(#body-inner)) .ph-video-inner"
    ]
  ],
  [
    "design-05755",
    [
      "&:where(:has(#body-inner)) .ph-video-inner"
    ]
  ],
  [
    "design-05756",
    [
      "&:where(:has(#body-inner)) .page-header.ph-image-parallax .ph-video-inner"
    ]
  ],
  [
    "design-05757",
    [
      "&:where(:has(#body-inner)) .ph-video video"
    ]
  ],
  [
    "design-05758",
    [
      "&:where(:has(#body-inner)) .ph-video video"
    ]
  ],
  [
    "design-05759",
    [
      "&:where(:has(#body-inner)) .ph-video video"
    ]
  ],
  [
    "design-05760",
    [
      "&:where(:has(#body-inner)) .ph-video video"
    ]
  ],
  [
    "design-05761",
    [
      "&:where(:has(#body-inner)) [class*=\"ph-video-cover-\"] .ph-video-inner::before"
    ]
  ],
  [
    "design-05762",
    [
      "&:where(:has(#body-inner)) [class*=\"ph-video-cover-\"] .ph-video-inner::before"
    ]
  ],
  [
    "design-05763",
    [
      "&:where(:has(#body-inner)) [class*=\"ph-video-cover-\"] .ph-video-inner::before"
    ]
  ],
  [
    "design-05764",
    [
      "&:where(:has(#body-inner)) [class*=\"ph-video-cover-\"] .ph-video-inner::before"
    ]
  ],
  [
    "design-05765",
    [
      "&:where(:has(#body-inner)) [class*=\"ph-video-cover-\"] .ph-video-inner::before"
    ]
  ],
  [
    "design-05766",
    [
      "&:where(:has(#body-inner)) [class*=\"ph-video-cover-\"] .ph-video-inner::before"
    ]
  ],
  [
    "design-05767",
    [
      "&:where(:has(#body-inner)) [class*=\"ph-video-cover-\"] .ph-video-inner::before"
    ]
  ],
  [
    "design-05768",
    [
      "&:where(:has(#body-inner)) [class*=\"ph-video-cover-\"] .ph-video-inner::before"
    ]
  ],
  [
    "design-05769",
    [
      "&:where(:has(#body-inner)) [class*=\"ph-video-cover-\"] .ph-video-inner::before"
    ]
  ],
  [
    "design-05770",
    [
      "&:where(:has(#body-inner)) [class*=\"ph-video-cover-\"] .ph-video-inner::before"
    ]
  ],
  [
    "design-05771",
    [
      "&:where(:has(#body-inner)) .ph-video-cover-0 .ph-video-inner::before"
    ]
  ],
  [
    "design-05772",
    [
      "&:where(:has(#body-inner)) .ph-video-cover-0-5 .ph-video-inner::before"
    ]
  ],
  [
    "design-05773",
    [
      "&:where(:has(#body-inner)) .ph-video-cover-1 .ph-video-inner::before"
    ]
  ],
  [
    "design-05774",
    [
      "&:where(:has(#body-inner)) .ph-video-cover-1-5 .ph-video-inner::before"
    ]
  ],
  [
    "design-05775",
    [
      "&:where(:has(#body-inner)) .ph-video-cover-2 .ph-video-inner::before"
    ]
  ],
  [
    "design-05776",
    [
      "&:where(:has(#body-inner)) .ph-video-cover-2-5 .ph-video-inner::before"
    ]
  ],
  [
    "design-05777",
    [
      "&:where(:has(#body-inner)) .ph-video-cover-3 .ph-video-inner::before"
    ]
  ],
  [
    "design-05778",
    [
      "&:where(:has(#body-inner)) .ph-video-cover-3-5 .ph-video-inner::before"
    ]
  ],
  [
    "design-05779",
    [
      "&:where(:has(#body-inner)) .ph-video-cover-4 .ph-video-inner::before"
    ]
  ],
  [
    "design-05780",
    [
      "&:where(:has(#body-inner)) .ph-video-cover-4-5 .ph-video-inner::before"
    ]
  ],
  [
    "design-05781",
    [
      "&:where(:has(#body-inner)) .ph-video-cover-5 .ph-video-inner::before"
    ]
  ],
  [
    "design-05782",
    [
      "&:where(:has(#body-inner)) .ph-video-cover-5-5 .ph-video-inner::before"
    ]
  ],
  [
    "design-05783",
    [
      "&:where(:has(#body-inner)) .ph-video-cover-6 .ph-video-inner::before"
    ]
  ],
  [
    "design-05784",
    [
      "&:where(:has(#body-inner)) .ph-video-cover-6-5 .ph-video-inner::before"
    ]
  ],
  [
    "design-05785",
    [
      "&:where(:has(#body-inner)) .ph-video-cover-7 .ph-video-inner::before"
    ]
  ],
  [
    "design-05786",
    [
      "&:where(:has(#body-inner)) .ph-video-cover-7-5 .ph-video-inner::before"
    ]
  ],
  [
    "design-05787",
    [
      "&:where(:has(#body-inner)) .ph-video-cover-8 .ph-video-inner::before"
    ]
  ],
  [
    "design-05788",
    [
      "&:where(:has(#body-inner)) .ph-video-cover-8-5 .ph-video-inner::before"
    ]
  ],
  [
    "design-05789",
    [
      "&:where(:has(#body-inner)) .ph-video-cover-9 .ph-video-inner::before"
    ]
  ],
  [
    "design-05790",
    [
      "&:where(:has(#body-inner)) .ph-video-cover-9-5 .ph-video-inner::before"
    ]
  ],
  [
    "design-05791",
    [
      "&:where(:has(#body-inner)) .ph-video.ph-video-grayscale"
    ]
  ],
  [
    "design-05792",
    [
      "&:where(:has(#body-inner)) .ph-caption-subtitle"
    ]
  ],
  [
    "design-05793",
    [
      "&:where(:has(#body-inner)) .ph-caption-subtitle"
    ]
  ],
  [
    "design-05794",
    [
      "&:where(:has(#body-inner)) .ph-caption-subtitle"
    ]
  ],
  [
    "design-05795",
    [
      "&:where(:has(#body-inner)) .ph-caption-subtitle"
    ]
  ],
  [
    "design-05796",
    [
      "&:where(:has(#body-inner)) .ph-caption-title"
    ]
  ],
  [
    "design-05797",
    [
      "&:where(:has(#body-inner)) .ph-caption-title"
    ]
  ],
  [
    "design-05798",
    [
      "&:where(:has(#body-inner)) .ph-caption-title"
    ]
  ],
  [
    "design-05799",
    [
      "&:where(:has(#body-inner)) .ph-caption-title"
    ]
  ],
  [
    "design-05800",
    [
      "&:where(:has(#body-inner)) .ph-caption-title"
    ]
  ],
  [
    "design-05801",
    [
      "&:where(:has(#body-inner)) .ph-caption-title"
    ]
  ],
  [
    "design-05802",
    [
      "&:where(:has(#body-inner)) .ph-caption-title"
    ]
  ],
  [
    "design-05803",
    [
      "&:where(:has(#body-inner)) .ph-caption-title"
    ]
  ],
  [
    "design-05804",
    [
      "@media (max-width: 414px) { &:where(:has(#body-inner)) .ph-caption-title }"
    ]
  ],
  [
    "design-05805",
    [
      "@media (max-width: 991px) { &:where(:has(#body-inner)) .ph-caption-title br }"
    ]
  ],
  [
    "design-05806",
    [
      "&:where(:has(#body-inner)) .ph-caption-description"
    ]
  ],
  [
    "design-05807",
    [
      "&:where(:has(#body-inner)) .ph-caption-description"
    ]
  ],
  [
    "design-05808",
    [
      "&:where(:has(#body-inner)) .ph-caption-description"
    ]
  ],
  [
    "design-05809",
    [
      "&:where(:has(#body-inner)) .ph-caption-description"
    ]
  ],
  [
    "design-05810",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .ph-caption-description }"
    ]
  ],
  [
    "design-05811",
    [
      "&:where(:has(#body-inner)) .ph-caption-categories"
    ]
  ],
  [
    "design-05812",
    [
      "&:where(:has(#body-inner)) .ph-caption-categories"
    ]
  ],
  [
    "design-05813",
    [
      "&:where(:has(#body-inner)) .ph-caption-categories"
    ]
  ],
  [
    "design-05814",
    [
      "&:where(:has(#body-inner)) .ph-caption-categories"
    ]
  ],
  [
    "design-05815",
    [
      "&:where(:has(#body-inner)) .ph-caption-categories"
    ]
  ],
  [
    "design-05816",
    [
      "&:where(:has(#body-inner)) .ph-caption-title + .ph-caption-categories"
    ]
  ],
  [
    "design-05817",
    [
      "&:where(:has(#body-inner)) .ph-caption-title + .ph-caption-categories"
    ]
  ],
  [
    "design-05818",
    [
      "&:where(:has(#body-inner)) .ph-caption-category"
    ]
  ],
  [
    "design-05819",
    [
      "&:where(:has(#body-inner)) .ph-caption-category"
    ]
  ],
  [
    "design-05820",
    [
      "&:where(:has(#body-inner)) .ph-caption-category"
    ]
  ],
  [
    "design-05821",
    [
      "&:where(:has(#body-inner)) .ph-caption-category"
    ]
  ],
  [
    "design-05822",
    [
      "&:where(:has(#body-inner)) .ph-caption-category"
    ]
  ],
  [
    "design-05823",
    [
      "&:where(:has(#body-inner)) .ph-caption-category"
    ]
  ],
  [
    "design-05824",
    [
      "&:where(:has(#body-inner)) .ph-caption-category"
    ]
  ],
  [
    "design-05825",
    [
      "&:where(:has(#body-inner)) .ph-caption-category"
    ]
  ],
  [
    "design-05826",
    [
      "&:where(:has(#body-inner)) a.ph-caption-category"
    ]
  ],
  [
    "design-05827",
    [
      "&:where(:has(#body-inner)) #page-header .ph-caption-categories a.ph-caption-category:hover",
      "&:where(:has(#body-inner)) #page-header .ph-caption-categories a.ph-caption-category:focus"
    ]
  ],
  [
    "design-05828",
    [
      "&:where(:has(#body-inner)) #page-header .ph-caption-categories a.ph-caption-category:hover",
      "&:where(:has(#body-inner)) #page-header .ph-caption-categories a.ph-caption-category:focus"
    ]
  ],
  [
    "design-05829",
    [
      "&:where(:has(#body-inner)) body.ph-image-on .ph-caption-category",
      "&:where(:has(#body-inner)) body.ph-video-on .ph-caption-category"
    ]
  ],
  [
    "design-05830",
    [
      "&:where(:has(#body-inner)) body.ph-image-on .ph-caption-category",
      "&:where(:has(#body-inner)) body.ph-video-on .ph-caption-category"
    ]
  ],
  [
    "design-05831",
    [
      "&:where(:has(#body-inner)) body.ph-image-on .ph-caption-category",
      "&:where(:has(#body-inner)) body.ph-video-on .ph-caption-category"
    ]
  ],
  [
    "design-05832",
    [
      "&:where(:has(#body-inner)) body.ph-image-on #page-header .ph-caption-categories a.ph-caption-category:hover",
      "&:where(:has(#body-inner)) body.ph-image-on #page-header .ph-caption-categories a.ph-caption-category:focus",
      "&:where(:has(#body-inner)) body.ph-video-on #page-header .ph-caption-categories a.ph-caption-category:hover",
      "&:where(:has(#body-inner)) body.ph-video-on #page-header .ph-caption-categories a.ph-caption-category:focus"
    ]
  ],
  [
    "design-05833",
    [
      "&:where(:has(#body-inner)) body.ph-image-on #page-header .ph-caption-categories a.ph-caption-category:hover",
      "&:where(:has(#body-inner)) body.ph-image-on #page-header .ph-caption-categories a.ph-caption-category:focus",
      "&:where(:has(#body-inner)) body.ph-video-on #page-header .ph-caption-categories a.ph-caption-category:hover",
      "&:where(:has(#body-inner)) body.ph-video-on #page-header .ph-caption-categories a.ph-caption-category:focus"
    ]
  ],
  [
    "design-05834",
    [
      "&:where(:has(#body-inner)) .ph-caption-categories .ph-caption-category ~ .ph-caption-category ~ .ph-caption-category ~ .ph-caption-category"
    ]
  ],
  [
    "design-05835",
    [
      "&:where(:has(#body-inner)) .ph-caption-categories .ph-caption-category ~ .ph-caption-category ~ .ph-caption-category ~ .ph-caption-category"
    ]
  ],
  [
    "design-05836",
    [
      "&:where(:has(#body-inner)) .ph-caption-categories .ph-caption-category ~ .ph-caption-category ~ .ph-caption-category ~ .ph-caption-category ~ .ph-caption-category"
    ]
  ],
  [
    "design-05837",
    [
      "&:where(:has(#body-inner)) .ph-caption-categories .ph-caption-category + .ph-caption-category + .ph-caption-category + .ph-caption-category::before"
    ]
  ],
  [
    "design-05838",
    [
      "&:where(:has(#body-inner)) .ph-caption-categories .ph-caption-category + .ph-caption-category + .ph-caption-category + .ph-caption-category::before"
    ]
  ],
  [
    "design-05839",
    [
      "&:where(:has(#body-inner)) .ph-caption-categories .ph-caption-category + .ph-caption-category + .ph-caption-category + .ph-caption-category::before"
    ]
  ],
  [
    "design-05840",
    [
      "&:where(:has(#body-inner)) .ph-caption-categories .ph-caption-category + .ph-caption-category + .ph-caption-category + .ph-caption-category::before"
    ]
  ],
  [
    "design-05841",
    [
      "&:where(:has(#body-inner)) .ph-caption-categories .ph-caption-category + .ph-caption-category + .ph-caption-category + .ph-caption-category::before"
    ]
  ],
  [
    "design-05842",
    [
      "&:where(:has(#body-inner)) .ph-caption-categories .ph-caption-category + .ph-caption-category + .ph-caption-category + .ph-caption-category::before"
    ]
  ],
  [
    "design-05843",
    [
      "&:where(:has(#body-inner)) .ph-caption-categories .ph-caption-category + .ph-caption-category + .ph-caption-category + .ph-caption-category::before"
    ]
  ],
  [
    "design-05844",
    [
      "&:where(:has(#body-inner)) .ph-caption-meta"
    ]
  ],
  [
    "design-05845",
    [
      "&:where(:has(#body-inner)) .ph-caption-meta"
    ]
  ],
  [
    "design-05846",
    [
      "&:where(:has(#body-inner)) .ph-caption-meta"
    ]
  ],
  [
    "design-05847",
    [
      "&:where(:has(#body-inner)) .ph-caption-meta"
    ]
  ],
  [
    "design-05848",
    [
      "&:where(:has(#body-inner)) .ph-caption-meta"
    ]
  ],
  [
    "design-05849",
    [
      "&:where(:has(#body-inner)) .ph-caption-meta"
    ]
  ],
  [
    "design-05850",
    [
      "&:where(:has(#body-inner)) .ph-caption-meta"
    ]
  ],
  [
    "design-05851",
    [
      "&:where(:has(#body-inner)) .ph-cap-meta-posted-by"
    ]
  ],
  [
    "design-05852",
    [
      "&:where(:has(#body-inner)) .ph-cap-meta-posted-by"
    ]
  ],
  [
    "design-05853",
    [
      "&:where(:has(#body-inner)) .ph-cap-meta-posted-by a"
    ]
  ],
  [
    "design-05854",
    [
      "&:where(:has(#body-inner)) .ph-cap-meta-posted-by a"
    ]
  ],
  [
    "design-05855",
    [
      "&:where(:has(#body-inner)) .ph-cap-meta-posted-by a:hover"
    ]
  ],
  [
    "design-05856",
    [
      "&:where(:has(#body-inner)) #page-header.ph-cap-sm .ph-caption-title"
    ]
  ],
  [
    "design-05857",
    [
      "&:where(:has(#body-inner)) #page-header.ph-cap-sm .ph-caption-title"
    ]
  ],
  [
    "design-05858",
    [
      "&:where(:has(#body-inner)) #page-header.ph-cap-lg .ph-caption-title"
    ]
  ],
  [
    "design-05859",
    [
      "&:where(:has(#body-inner)) #page-header.ph-cap-xlg .ph-caption-title"
    ]
  ],
  [
    "design-05860",
    [
      "&:where(:has(#body-inner)) #page-header.ph-cap-xxlg .ph-caption-title"
    ]
  ],
  [
    "design-05861",
    [
      "&:where(:has(#body-inner)) #page-header.ph-cap-xxxlg .ph-caption-title"
    ]
  ],
  [
    "design-05862",
    [
      "&:where(:has(#body-inner)) #page-header.ph-cap-xxxlg .ph-caption-title"
    ]
  ],
  [
    "design-05863",
    [
      "@media (min-width: 1200px) { &:where(:has(#body-inner)) #page-header.ph-cap-xxxlg .ph-caption-subtitle }"
    ]
  ],
  [
    "design-05864",
    [
      "&:where(:has(#body-inner)) #page-header.ph-cap-xxxxlg .ph-caption-title"
    ]
  ],
  [
    "design-05865",
    [
      "&:where(:has(#body-inner)) #page-header.ph-cap-xxxxlg .ph-caption-title"
    ]
  ],
  [
    "design-05866",
    [
      "@media (min-width: 1200px) { &:where(:has(#body-inner)) #page-header.ph-cap-xxxxlg .ph-caption-subtitle }"
    ]
  ],
  [
    "design-05867",
    [
      "&:where(:has(#body-inner)) .ph-image-trail"
    ]
  ],
  [
    "design-05868",
    [
      "&:where(:has(#body-inner)) .ph-image-trail"
    ]
  ],
  [
    "design-05869",
    [
      "&:where(:has(#body-inner)) .ph-image-trail"
    ]
  ],
  [
    "design-05870",
    [
      "&:where(:has(#body-inner)) .ph-itr-img"
    ]
  ],
  [
    "design-05871",
    [
      "&:where(:has(#body-inner)) .ph-itr-img"
    ]
  ],
  [
    "design-05872",
    [
      "&:where(:has(#body-inner)) .ph-itr-img"
    ]
  ],
  [
    "design-05873",
    [
      "&:where(:has(#body-inner)) .ph-itr-img"
    ]
  ],
  [
    "design-05874",
    [
      "&:where(:has(#body-inner)) .ph-itr-img"
    ]
  ],
  [
    "design-05875",
    [
      "&:where(:has(#body-inner)) .ph-itr-img"
    ]
  ],
  [
    "design-05876",
    [
      "&:where(:has(#body-inner)) .ph-itr-img"
    ]
  ],
  [
    "design-05877",
    [
      "&:where(:has(#body-inner)) #page-header.ph-center .page-header-inner"
    ]
  ],
  [
    "design-05878",
    [
      "&:where(:has(#body-inner)) #page-header.ph-center .page-header-inner"
    ]
  ],
  [
    "design-05879",
    [
      "&:where(:has(#body-inner)) #page-header.ph-center .page-header-inner"
    ]
  ],
  [
    "design-05880",
    [
      "&:where(:has(#body-inner)) #page-header.ph-center .page-header-inner"
    ]
  ],
  [
    "design-05881",
    [
      "@media (max-width: 1200px) { &:where(:has(#body-inner)) #page-header.ph-center .page-header-inner }"
    ]
  ],
  [
    "design-05882",
    [
      "@media (max-width: 1200px) { &:where(:has(#body-inner)) #page-header.ph-center .page-header-inner }"
    ]
  ],
  [
    "design-05883",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) #page-header.ph-center .page-header-inner }"
    ]
  ],
  [
    "design-05884",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) #page-header.ph-center .page-header-inner }"
    ]
  ],
  [
    "design-05885",
    [
      "&:where(:has(#body-inner)) #page-header.ph-center .ph-caption"
    ]
  ],
  [
    "design-05886",
    [
      "&:where(:has(#body-inner)) #page-header.ph-center .ph-caption-description"
    ]
  ],
  [
    "design-05887",
    [
      "&:where(:has(#body-inner)) #page-header.ph-center .ph-caption-description"
    ]
  ],
  [
    "design-05888",
    [
      "&:where(:has(#body-inner)) #page-header.ph-center .ph-caption-categories"
    ]
  ],
  [
    "design-05889",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) #page-header.ph-full }"
    ]
  ],
  [
    "design-05890",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) #page-header.ph-full }"
    ]
  ],
  [
    "design-05891",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) #page-header.ph-full }"
    ]
  ],
  [
    "design-05892",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) #page-header.ph-full }"
    ]
  ],
  [
    "design-05893",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) #page-header.ph-full }"
    ]
  ],
  [
    "design-05894",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) #page-header.ph-full .page-header-inner }"
    ]
  ],
  [
    "design-05895",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) #page-header.ph-full .page-header-inner }"
    ]
  ],
  [
    "design-05896",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) #page-header.ph-full-m }"
    ]
  ],
  [
    "design-05897",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) #page-header.ph-full-m }"
    ]
  ],
  [
    "design-05898",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) #page-header.ph-full-m }"
    ]
  ],
  [
    "design-05899",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) #page-header.ph-full-m }"
    ]
  ],
  [
    "design-05900",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) #page-header.ph-full-m }"
    ]
  ],
  [
    "design-05901",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) #page-header.ph-full-m .page-header-inner }"
    ]
  ],
  [
    "design-05902",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) #page-header.ph-full-m .page-header-inner }"
    ]
  ],
  [
    "design-05903",
    [
      "&:where(:has(#body-inner)) .ph-social"
    ]
  ],
  [
    "design-05904",
    [
      "&:where(:has(#body-inner)) .ph-social"
    ]
  ],
  [
    "design-05905",
    [
      "&:where(:has(#body-inner)) .ph-social"
    ]
  ],
  [
    "design-05906",
    [
      "&:where(:has(#body-inner)) .ph-social"
    ]
  ],
  [
    "design-05907",
    [
      "&:where(:has(#body-inner)) .ph-social"
    ]
  ],
  [
    "design-05908",
    [
      "@media (max-width: 1600px) { &:where(:has(#body-inner)) .ph-social }"
    ]
  ],
  [
    "design-05909",
    [
      "@media (max-width: 1600px) { &:where(:has(#body-inner)) .ph-social .tt-social-buttons > ul > li a }"
    ]
  ],
  [
    "design-05910",
    [
      "@media (max-width: 1600px) { &:where(:has(#body-inner)) .ph-social .tt-social-buttons > ul > li a }"
    ]
  ],
  [
    "design-05911",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .ph-social .tt-social-buttons:not(.tt-sbtn-inline) > ul }"
    ]
  ],
  [
    "design-05912",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .ph-social .tt-social-buttons:not(.tt-sbtn-inline) > ul }"
    ]
  ],
  [
    "design-05913",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .ph-social .tt-social-buttons:not(.tt-sbtn-inline) > ul }"
    ]
  ],
  [
    "design-05914",
    [
      "&:where(:has(#body-inner)) .tt-scroll-down"
    ]
  ],
  [
    "design-05915",
    [
      "&:where(:has(#body-inner)) .tt-scroll-down"
    ]
  ],
  [
    "design-05916",
    [
      "&:where(:has(#body-inner)) .tt-scroll-down"
    ]
  ],
  [
    "design-05917",
    [
      "&:where(:has(#body-inner)) .tt-scroll-down"
    ]
  ],
  [
    "design-05918",
    [
      "@media (max-width: 1600px) { &:where(:has(#body-inner)) .tt-scroll-down }"
    ]
  ],
  [
    "design-05919",
    [
      "&:where(:has(#body-inner)) .tt-sd-inner"
    ]
  ],
  [
    "design-05920",
    [
      "&:where(:has(#body-inner)) .tt-sd-inner"
    ]
  ],
  [
    "design-05921",
    [
      "&:where(:has(#body-inner)) .tt-sd-inner"
    ]
  ],
  [
    "design-05922",
    [
      "&:where(:has(#body-inner)) .tt-sd-inner"
    ]
  ],
  [
    "design-05923",
    [
      "&:where(:has(#body-inner)) .tt-sd-inner"
    ]
  ],
  [
    "design-05924",
    [
      "&:where(:has(#body-inner)) .tt-sd-inner"
    ]
  ],
  [
    "design-05925",
    [
      "&:where(:has(#body-inner)) .tt-sd-inner"
    ]
  ],
  [
    "design-05926",
    [
      "&:where(:has(#body-inner)) .tt-sd-inner"
    ]
  ],
  [
    "design-05927",
    [
      "&:where(:has(#body-inner)) .tt-sd-inner"
    ]
  ],
  [
    "design-05928",
    [
      "&:where(:has(#body-inner)) .tt-sd-inner"
    ]
  ],
  [
    "design-05929",
    [
      "&:where(:has(#body-inner)) .tt-sd-inner"
    ]
  ],
  [
    "design-05930",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-sd-inner }"
    ]
  ],
  [
    "design-05931",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-sd-inner }"
    ]
  ],
  [
    "design-05932",
    [
      "&:where(:has(#body-inner)) .tt-sd-arrow"
    ]
  ],
  [
    "design-05933",
    [
      "&:where(:has(#body-inner)) .tt-sd-arrow"
    ]
  ],
  [
    "design-05934",
    [
      "&:where(:has(#body-inner)) .tt-sd-arrow svg"
    ]
  ],
  [
    "design-05935",
    [
      "&:where(:has(#body-inner)) .tt-sd-arrow svg"
    ]
  ],
  [
    "design-05936",
    [
      "&:where(:has(#body-inner)) .tt-sd-arrow svg"
    ]
  ],
  [
    "design-05937",
    [
      "&:where(:has(#body-inner)) .tt-sd-arrow svg"
    ]
  ],
  [
    "design-05938",
    [
      "&:where(:has(#body-inner)) .ph-share"
    ]
  ],
  [
    "design-05939",
    [
      "&:where(:has(#body-inner)) .ph-share"
    ]
  ],
  [
    "design-05940",
    [
      "&:where(:has(#body-inner)) .ph-share"
    ]
  ],
  [
    "design-05941",
    [
      "&:where(:has(#body-inner)) .ph-share"
    ]
  ],
  [
    "design-05942",
    [
      "&:where(:has(#body-inner)) .ph-share"
    ]
  ],
  [
    "design-05943",
    [
      "&:where(:has(#body-inner)) .ph-share-trigger"
    ]
  ],
  [
    "design-05944",
    [
      "&:where(:has(#body-inner)) .ph-share-text"
    ]
  ],
  [
    "design-05945",
    [
      "&:where(:has(#body-inner)) .ph-share-text"
    ]
  ],
  [
    "design-05946",
    [
      "&:where(:has(#body-inner)) .ph-share-text"
    ]
  ],
  [
    "design-05947",
    [
      "&:where(:has(#body-inner)) .ph-share-icon"
    ]
  ],
  [
    "design-05948",
    [
      "&:where(:has(#body-inner)) .ph-share-buttons ul"
    ]
  ],
  [
    "design-05949",
    [
      "&:where(:has(#body-inner)) .ph-share-buttons ul"
    ]
  ],
  [
    "design-05950",
    [
      "&:where(:has(#body-inner)) .ph-share-buttons ul"
    ]
  ],
  [
    "design-05951",
    [
      "&:where(:has(#body-inner)) .ph-share-buttons > ul > li a"
    ]
  ],
  [
    "design-05952",
    [
      "&:where(:has(#body-inner)) .ph-share-buttons > ul > li a"
    ]
  ],
  [
    "design-05953",
    [
      "&:where(:has(#body-inner)) .ph-share-buttons > ul > li a"
    ]
  ],
  [
    "design-05954",
    [
      "&:where(:has(#body-inner)) .ph-share-buttons > ul > li a"
    ]
  ],
  [
    "design-05955",
    [
      "&:where(:has(#body-inner)) .ph-share-buttons > ul > li a"
    ]
  ],
  [
    "design-05956",
    [
      "&:where(:has(#body-inner)) .ph-share-buttons > ul > li a"
    ]
  ],
  [
    "design-05957",
    [
      "&:where(:has(#body-inner)) .ph-share-buttons > ul > li a"
    ]
  ],
  [
    "design-05958",
    [
      "&:where(:has(#body-inner)) .ph-share-buttons > ul > li a"
    ]
  ],
  [
    "design-05959",
    [
      "&:where(:has(#body-inner)) .ph-share-buttons > ul > li a"
    ]
  ],
  [
    "design-05960",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .ph-share-inner }"
    ]
  ],
  [
    "design-05961",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .ph-share-trigger }"
    ]
  ],
  [
    "design-05962",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .ph-share-trigger }"
    ]
  ],
  [
    "design-05963",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .ph-share-trigger }"
    ]
  ],
  [
    "design-05964",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .ph-share-trigger }"
    ]
  ],
  [
    "design-05965",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .ph-share-trigger }"
    ]
  ],
  [
    "design-05966",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .ph-share-trigger }"
    ]
  ],
  [
    "design-05967",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .ph-share-trigger }"
    ]
  ],
  [
    "design-05968",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .ph-share-trigger }"
    ]
  ],
  [
    "design-05969",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .ph-share-trigger }"
    ]
  ],
  [
    "design-05970",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .ph-share-text }"
    ]
  ],
  [
    "design-05971",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .ph-share-icon }"
    ]
  ],
  [
    "design-05972",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .ph-share:hover .ph-share-trigger }"
    ]
  ],
  [
    "design-05973",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .ph-share:hover .ph-share-trigger }"
    ]
  ],
  [
    "design-05974",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .ph-share:hover .ph-share-trigger }"
    ]
  ],
  [
    "design-05975",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .ph-share-buttons }"
    ]
  ],
  [
    "design-05976",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .ph-share-buttons }"
    ]
  ],
  [
    "design-05977",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .ph-share-buttons }"
    ]
  ],
  [
    "design-05978",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .ph-share-buttons }"
    ]
  ],
  [
    "design-05979",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .ph-share:hover .ph-share-buttons }"
    ]
  ],
  [
    "design-05980",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .ph-share:hover .ph-share-buttons }"
    ]
  ],
  [
    "design-05981",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .ph-share:hover .ph-share-buttons }"
    ]
  ],
  [
    "design-05982",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .ph-share }"
    ]
  ],
  [
    "design-05983",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .ph-share }"
    ]
  ],
  [
    "design-05984",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .ph-share }"
    ]
  ],
  [
    "design-05985",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .ph-share-text }"
    ]
  ],
  [
    "design-05986",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .ph-share-text::after }"
    ]
  ],
  [
    "design-05987",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .ph-share-text::after }"
    ]
  ],
  [
    "design-05988",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .ph-share-icon }"
    ]
  ],
  [
    "design-05989",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .ph-share-buttons ul }"
    ]
  ],
  [
    "design-05990",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .ph-share-buttons ul }"
    ]
  ],
  [
    "design-05991",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .ph-share-buttons > ul > li a }"
    ]
  ],
  [
    "design-05992",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .ph-share-buttons > ul > li a }"
    ]
  ],
  [
    "design-05993",
    [
      "&:where(:has(#body-inner)) body.ph-image-on.tt-ph-visible:not(.ph-bg-is-light-on):not(.tt-m-menu-active) #tt-header:not(.tt-filled)",
      "&:where(:has(#body-inner)) body.ph-video-on.tt-ph-visible:not(.ph-bg-is-light-on):not(.tt-m-menu-active) #tt-header:not(.tt-filled)"
    ]
  ],
  [
    "design-05994",
    [
      "&:where(:has(#body-inner)) body.ph-image-on.tt-ph-visible:not(.ph-bg-is-light-on):not(.tt-m-menu-active) #tt-header:not(.tt-filled) .tt-logo-light",
      "&:where(:has(#body-inner)) body.ph-video-on.tt-ph-visible:not(.ph-bg-is-light-on):not(.tt-m-menu-active) #tt-header:not(.tt-filled) .tt-logo-light"
    ]
  ],
  [
    "design-05995",
    [
      "&:where(:has(#body-inner)) body.ph-image-on.tt-ph-visible:not(.ph-bg-is-light-on):not(.tt-m-menu-active) #tt-header:not(.tt-filled) .tt-logo-dark",
      "&:where(:has(#body-inner)) body.ph-video-on.tt-ph-visible:not(.ph-bg-is-light-on):not(.tt-m-menu-active) #tt-header:not(.tt-filled) .tt-logo-dark"
    ]
  ],
  [
    "design-05996",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-image-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-main-menu-list > li > a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-image-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-main-menu-list > li > .tt-submenu-trigger > a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-video-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-main-menu-list > li > a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-video-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-main-menu-list > li > .tt-submenu-trigger > a }"
    ]
  ],
  [
    "design-05997",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-image-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-main-menu-list > li > a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-image-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-main-menu-list > li > .tt-submenu-trigger > a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-video-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-main-menu-list > li > a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-video-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-main-menu-list > li > .tt-submenu-trigger > a }"
    ]
  ],
  [
    "design-05998",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-image-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-main-menu-list > li > a:hover }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-image-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-main-menu-list > li > .tt-submenu-trigger > a:hover }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-video-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-main-menu-list > li > a:hover }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-video-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-main-menu-list > li > .tt-submenu-trigger > a:hover }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-image-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-main-menu-list > li.active > a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-image-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-main-menu-list > li.active > .tt-submenu-trigger > a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-video-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-main-menu-list > li.active > a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-video-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-main-menu-list > li.active > .tt-submenu-trigger > a }"
    ]
  ],
  [
    "design-05999",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-image-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-main-menu-list > li > a:hover }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-image-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-main-menu-list > li > .tt-submenu-trigger > a:hover }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-video-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-main-menu-list > li > a:hover }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-video-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-main-menu-list > li > .tt-submenu-trigger > a:hover }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-image-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-main-menu-list > li.active > a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-image-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-main-menu-list > li.active > .tt-submenu-trigger > a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-video-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-main-menu-list > li.active > a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-video-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-main-menu-list > li.active > .tt-submenu-trigger > a }"
    ]
  ],
  [
    "design-06000",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-image-on.tt-ph-visible.ph-bg-is-light-on #tt-header:not(.tt-filled) .tt-main-menu-list > li > a:hover }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-image-on.tt-ph-visible.ph-bg-is-light-on #tt-header:not(.tt-filled) .tt-main-menu-list > li > .tt-submenu-trigger > a:hover }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-video-on.tt-ph-visible.ph-bg-is-light-on #tt-header:not(.tt-filled) .tt-main-menu-list > li > a:hover }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-video-on.tt-ph-visible.ph-bg-is-light-on #tt-header:not(.tt-filled) .tt-main-menu-list > li > .tt-submenu-trigger > a:hover }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-image-on.tt-ph-visible.ph-bg-is-light-on #tt-header:not(.tt-filled) .tt-main-menu-list > li.active > a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-image-on.tt-ph-visible.ph-bg-is-light-on #tt-header:not(.tt-filled) .tt-main-menu-list > li.active > .tt-submenu-trigger > a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-video-on.tt-ph-visible.ph-bg-is-light-on #tt-header:not(.tt-filled) .tt-main-menu-list > li.active > a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-video-on.tt-ph-visible.ph-bg-is-light-on #tt-header:not(.tt-filled) .tt-main-menu-list > li.active > .tt-submenu-trigger > a }"
    ]
  ],
  [
    "design-06001",
    [
      "&:where(:has(#body-inner)) body.ph-image-on.tt-ph-visible:not(.ph-bg-is-light-on):not(.tt-m-menu-active) #tt-header:not(.tt-filled) .tt-m-menu-toggle-btn-text",
      "&:where(:has(#body-inner)) body.ph-video-on.tt-ph-visible:not(.ph-bg-is-light-on):not(.tt-m-menu-active) #tt-header:not(.tt-filled) .tt-m-menu-toggle-btn-text"
    ]
  ],
  [
    "design-06002",
    [
      "&:where(:has(#body-inner)) body.ph-image-on.tt-ph-visible:not(.ph-bg-is-light-on):not(.tt-m-menu-active) #tt-header:not(.tt-filled) .tt-m-menu-toggle-btn span::before",
      "&:where(:has(#body-inner)) body.ph-image-on.tt-ph-visible:not(.ph-bg-is-light-on):not(.tt-m-menu-active) #tt-header:not(.tt-filled) .tt-m-menu-toggle-btn span::after",
      "&:where(:has(#body-inner)) body.ph-video-on.tt-ph-visible:not(.ph-bg-is-light-on):not(.tt-m-menu-active) #tt-header:not(.tt-filled) .tt-m-menu-toggle-btn span::before",
      "&:where(:has(#body-inner)) body.ph-video-on.tt-ph-visible:not(.ph-bg-is-light-on):not(.tt-m-menu-active) #tt-header:not(.tt-filled) .tt-m-menu-toggle-btn span::after"
    ]
  ],
  [
    "design-06003",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-image-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-btn-secondary }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-video-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-btn-secondary }"
    ]
  ],
  [
    "design-06004",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-image-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-btn-secondary > * }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-image-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-btn-secondary > ::after }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-video-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-btn-secondary > * }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-video-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-btn-secondary > ::after }"
    ]
  ],
  [
    "design-06005",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-image-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-btn-outline }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-video-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-btn-outline }"
    ]
  ],
  [
    "design-06006",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-image-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-btn-outline > * }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-image-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-btn-outline > ::after }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-video-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-btn-outline > * }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-video-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-btn-outline > ::after }"
    ]
  ],
  [
    "design-06007",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-image-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-btn-link > * }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-image-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-btn-link > ::after }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-video-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-btn-link > * }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-video-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-btn-link > ::after }"
    ]
  ],
  [
    "design-06008",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-image-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-btn-line }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-video-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-btn-line }"
    ]
  ],
  [
    "design-06009",
    [
      "&:where(:has(#body-inner)) body.ph-image-on:not(.ph-bg-is-light-on) #page-header",
      "&:where(:has(#body-inner)) body.ph-image-on:not(.ph-bg-is-light-on) #page-header a",
      "&:where(:has(#body-inner)) body.ph-video-on:not(.ph-bg-is-light-on) #page-header",
      "&:where(:has(#body-inner)) body.ph-video-on:not(.ph-bg-is-light-on) #page-header a"
    ]
  ],
  [
    "design-06010",
    [
      "&:where(:has(#body-inner)) body.ph-image-on:not(.ph-bg-is-light-on) .tt-sd-inner",
      "&:where(:has(#body-inner)) body.ph-video-on:not(.ph-bg-is-light-on) .tt-sd-inner"
    ]
  ],
  [
    "design-06011",
    [
      "&:where(:has(#body-inner)) body.ph-image-on:not(.ph-bg-is-light-on) .tt-sd-inner",
      "&:where(:has(#body-inner)) body.ph-video-on:not(.ph-bg-is-light-on) .tt-sd-inner"
    ]
  ],
  [
    "design-06012",
    [
      "&:where(:has(#body-inner)) body.ph-image-on:not(.ph-bg-is-light-on) .tt-sd-arrow svg",
      "&:where(:has(#body-inner)) body.ph-video-on:not(.ph-bg-is-light-on) .tt-sd-arrow svg"
    ]
  ],
  [
    "design-06013",
    [
      "&:where(:has(#body-inner)) body.ph-image-on:not(.ph-bg-is-light-on) #page-header .tt-social-buttons > ul > li a",
      "&:where(:has(#body-inner)) body.ph-video-on:not(.ph-bg-is-light-on) #page-header .tt-social-buttons > ul > li a"
    ]
  ],
  [
    "design-06014",
    [
      "&:where(:has(#body-inner)) body.ph-image-on:not(.ph-bg-is-light-on) .ph-share-trigger",
      "&:where(:has(#body-inner)) body.ph-image-on:not(.ph-bg-is-light-on) .ph-share-buttons > ul > li a",
      "&:where(:has(#body-inner)) body.ph-video-on:not(.ph-bg-is-light-on) .ph-share-trigger",
      "&:where(:has(#body-inner)) body.ph-video-on:not(.ph-bg-is-light-on) .ph-share-buttons > ul > li a"
    ]
  ],
  [
    "design-06015",
    [
      "&:where(:has(#body-inner)) body.ph-image-on:not(.ph-bg-is-light-on) #page-header .ph-caption-meta",
      "&:where(:has(#body-inner)) body.ph-video-on:not(.ph-bg-is-light-on) #page-header .ph-caption-meta a"
    ]
  ],
  [
    "design-06016",
    [
      "&:where(:has(#body-inner)) body.ph-image-on:not(.ph-bg-is-light-on) #page-header .tt-btn-primary",
      "&:where(:has(#body-inner)) body.ph-video-on:not(.ph-bg-is-light-on) #page-header .tt-btn-primary"
    ]
  ],
  [
    "design-06017",
    [
      "&:where(:has(#body-inner)) body.ph-image-on:not(.ph-bg-is-light-on) #page-header .tt-btn-secondary",
      "&:where(:has(#body-inner)) body.ph-video-on:not(.ph-bg-is-light-on) #page-header .tt-btn-secondary"
    ]
  ],
  [
    "design-06018",
    [
      "&:where(:has(#body-inner)) body.ph-image-on:not(.ph-bg-is-light-on) #page-header .tt-btn-secondary > *",
      "&:where(:has(#body-inner)) body.ph-image-on:not(.ph-bg-is-light-on) #page-header .tt-btn-secondary > ::after",
      "&:where(:has(#body-inner)) body.ph-video-on:not(.ph-bg-is-light-on) #page-header .tt-btn-secondary > *",
      "&:where(:has(#body-inner)) body.ph-video-on:not(.ph-bg-is-light-on) #page-header .tt-btn-secondary > ::after"
    ]
  ],
  [
    "design-06019",
    [
      "&:where(:has(#body-inner)) body.ph-image-on:not(.ph-bg-is-light-on) #page-header .tt-btn-accent",
      "&:where(:has(#body-inner)) body.ph-video-on:not(.ph-bg-is-light-on) #page-header .tt-btn-accent"
    ]
  ],
  [
    "design-06020",
    [
      "&:where(:has(#body-inner)) body.ph-image-on:not(.ph-bg-is-light-on) #page-header .tt-btn-accent",
      "&:where(:has(#body-inner)) body.ph-video-on:not(.ph-bg-is-light-on) #page-header .tt-btn-accent"
    ]
  ],
  [
    "design-06021",
    [
      "&:where(:has(#body-inner)) body.ph-image-on:not(.ph-bg-is-light-on) #page-header .tt-btn-accent > *",
      "&:where(:has(#body-inner)) body.ph-image-on:not(.ph-bg-is-light-on) #page-header .tt-btn-accent > ::after",
      "&:where(:has(#body-inner)) body.ph-video-on:not(.ph-bg-is-light-on) #page-header .tt-btn-accent > *",
      "&:where(:has(#body-inner)) body.ph-video-on:not(.ph-bg-is-light-on) #page-header .tt-btn-accent > ::after"
    ]
  ],
  [
    "design-06022",
    [
      "&:where(:has(#body-inner)) body.ph-image-on:not(.ph-bg-is-light-on) #page-header .tt-btn-outline",
      "&:where(:has(#body-inner)) body.ph-video-on:not(.ph-bg-is-light-on) #page-header .tt-btn-outline"
    ]
  ],
  [
    "design-06023",
    [
      "&:where(:has(#body-inner)) body.ph-image-on:not(.ph-bg-is-light-on) #page-header .tt-btn-outline > *",
      "&:where(:has(#body-inner)) body.ph-image-on:not(.ph-bg-is-light-on) #page-header .tt-btn-outline > ::after",
      "&:where(:has(#body-inner)) body.ph-video-on:not(.ph-bg-is-light-on) #page-header .tt-btn-outline > *",
      "&:where(:has(#body-inner)) body.ph-video-on:not(.ph-bg-is-light-on) #page-header .tt-btn-outline > ::after"
    ]
  ],
  [
    "design-06024",
    [
      "&:where(:has(#body-inner)) body.ph-image-on:not(.ph-bg-is-light-on) #page-header .tt-big-round-ptn-inner",
      "&:where(:has(#body-inner)) body.ph-video-on:not(.ph-bg-is-light-on) #page-header .tt-big-round-ptn-inner"
    ]
  ],
  [
    "design-06025",
    [
      "&:where(:has(#body-inner)) body.ph-image-on:not(.ph-bg-is-light-on) #page-header .tt-btn-link > *",
      "&:where(:has(#body-inner)) body.ph-image-on:not(.ph-bg-is-light-on) #page-header .tt-btn-link > ::after",
      "&:where(:has(#body-inner)) body.ph-video-on:not(.ph-bg-is-light-on) #page-header .tt-btn-link > *",
      "&:where(:has(#body-inner)) body.ph-video-on:not(.ph-bg-is-light-on) #page-header .tt-btn-link > ::after"
    ]
  ],
  [
    "design-06026",
    [
      "&:where(:has(#body-inner)) body.ph-image-on:not(.ph-bg-is-light-on) #page-header .tt-btn-line",
      "&:where(:has(#body-inner)) body.ph-video-on:not(.ph-bg-is-light-on) #page-header .tt-btn-line"
    ]
  ],
  [
    "design-06027",
    [
      "&:where(:has(#body-inner)) .tt-section"
    ]
  ],
  [
    "design-06028",
    [
      "&:where(:has(#body-inner)) .tt-section"
    ]
  ],
  [
    "design-06029",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-section }"
    ]
  ],
  [
    "design-06030",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-section }"
    ]
  ],
  [
    "design-06031",
    [
      "&:where(:has(#body-inner)) .tt-section[class*=\"height-vh\"]"
    ]
  ],
  [
    "design-06032",
    [
      "&:where(:has(#body-inner)) .tt-section[class*=\"height-vh\"]"
    ]
  ],
  [
    "design-06033",
    [
      "&:where(:has(#body-inner)) .tt-section[class*=\"height-vh\"]"
    ]
  ],
  [
    "design-06034",
    [
      "&:where(:has(#body-inner)) .tt-section-background"
    ]
  ],
  [
    "design-06035",
    [
      "&:where(:has(#body-inner)) .tt-section-background"
    ]
  ],
  [
    "design-06036",
    [
      "&:where(:has(#body-inner)) .tt-section-background"
    ]
  ],
  [
    "design-06037",
    [
      "&:where(:has(#body-inner)) .tt-section-background"
    ]
  ],
  [
    "design-06038",
    [
      "&:where(:has(#body-inner)) .tt-section-background img",
      "&:where(:has(#body-inner)) .tt-section-background video"
    ]
  ],
  [
    "design-06039",
    [
      "&:where(:has(#body-inner)) .tt-section-background img",
      "&:where(:has(#body-inner)) .tt-section-background video"
    ]
  ],
  [
    "design-06040",
    [
      "&:where(:has(#body-inner)) .tt-section-background img",
      "&:where(:has(#body-inner)) .tt-section-background video"
    ]
  ],
  [
    "design-06041",
    [
      "&:where(:has(#body-inner)) .tt-section-background img",
      "&:where(:has(#body-inner)) .tt-section-background video"
    ]
  ],
  [
    "design-06042",
    [
      "&:where(:has(#body-inner)) .tt-section-background .tt-anim-zoomin-wrap",
      "&:where(:has(#body-inner)) .tt-section-background .tt-image-parallax-wrap",
      "&:where(:has(#body-inner)) .tt-section-background .tt-image-parallax-inner"
    ]
  ],
  [
    "design-06043",
    [
      "&:where(:has(#body-inner)) .tt-section-background .tt-anim-zoomin-wrap",
      "&:where(:has(#body-inner)) .tt-section-background .tt-image-parallax-wrap",
      "&:where(:has(#body-inner)) .tt-section-background .tt-image-parallax-inner"
    ]
  ],
  [
    "design-06044",
    [
      "&:where(:has(#body-inner)) .tt-section-background[class*=\"tt-sbg-cover-\"]::before"
    ]
  ],
  [
    "design-06045",
    [
      "&:where(:has(#body-inner)) .tt-section-background[class*=\"tt-sbg-cover-\"]::before"
    ]
  ],
  [
    "design-06046",
    [
      "&:where(:has(#body-inner)) .tt-section-background[class*=\"tt-sbg-cover-\"]::before"
    ]
  ],
  [
    "design-06047",
    [
      "&:where(:has(#body-inner)) .tt-section-background[class*=\"tt-sbg-cover-\"]::before"
    ]
  ],
  [
    "design-06048",
    [
      "&:where(:has(#body-inner)) .tt-section-background[class*=\"tt-sbg-cover-\"]::before"
    ]
  ],
  [
    "design-06049",
    [
      "&:where(:has(#body-inner)) .tt-section-background[class*=\"tt-sbg-cover-\"]::before"
    ]
  ],
  [
    "design-06050",
    [
      "&:where(:has(#body-inner)) .tt-section-background[class*=\"tt-sbg-cover-\"]::before"
    ]
  ],
  [
    "design-06051",
    [
      "&:where(:has(#body-inner)) .tt-section-background[class*=\"tt-sbg-cover-\"]::before"
    ]
  ],
  [
    "design-06052",
    [
      "&:where(:has(#body-inner)) .tt-section-background[class*=\"tt-sbg-cover-\"]::before"
    ]
  ],
  [
    "design-06053",
    [
      "&:where(:has(#body-inner)) .tt-section-background[class*=\"tt-sbg-cover-\"]::before"
    ]
  ],
  [
    "design-06054",
    [
      "&:where(:has(#body-inner)) .tt-section-background.tt-sbg-cover-0::before"
    ]
  ],
  [
    "design-06055",
    [
      "&:where(:has(#body-inner)) .tt-section-background.tt-sbg-cover-0-5::before"
    ]
  ],
  [
    "design-06056",
    [
      "&:where(:has(#body-inner)) .tt-section-background.tt-sbg-cover-1::before"
    ]
  ],
  [
    "design-06057",
    [
      "&:where(:has(#body-inner)) .tt-section-background.tt-sbg-cover-1-5::before"
    ]
  ],
  [
    "design-06058",
    [
      "&:where(:has(#body-inner)) .tt-section-background.tt-sbg-cover-2::before"
    ]
  ],
  [
    "design-06059",
    [
      "&:where(:has(#body-inner)) .tt-section-background.tt-sbg-cover-2-5::before"
    ]
  ],
  [
    "design-06060",
    [
      "&:where(:has(#body-inner)) .tt-section-background.tt-sbg-cover-3::before"
    ]
  ],
  [
    "design-06061",
    [
      "&:where(:has(#body-inner)) .tt-section-background.tt-sbg-cover-3-5::before"
    ]
  ],
  [
    "design-06062",
    [
      "&:where(:has(#body-inner)) .tt-section-background.tt-sbg-cover-4::before"
    ]
  ],
  [
    "design-06063",
    [
      "&:where(:has(#body-inner)) .tt-section-background.tt-sbg-cover-4-5::before"
    ]
  ],
  [
    "design-06064",
    [
      "&:where(:has(#body-inner)) .tt-section-background.tt-sbg-cover-5::before"
    ]
  ],
  [
    "design-06065",
    [
      "&:where(:has(#body-inner)) .tt-section-background.tt-sbg-cover-5-5::before"
    ]
  ],
  [
    "design-06066",
    [
      "&:where(:has(#body-inner)) .tt-section-background.tt-sbg-cover-6::before"
    ]
  ],
  [
    "design-06067",
    [
      "&:where(:has(#body-inner)) .tt-section-background.tt-sbg-cover-6-5::before"
    ]
  ],
  [
    "design-06068",
    [
      "&:where(:has(#body-inner)) .tt-section-background.tt-sbg-cover-7::before"
    ]
  ],
  [
    "design-06069",
    [
      "&:where(:has(#body-inner)) .tt-section-background.tt-sbg-cover-7-5::before"
    ]
  ],
  [
    "design-06070",
    [
      "&:where(:has(#body-inner)) .tt-section-background.tt-sbg-cover-8::before"
    ]
  ],
  [
    "design-06071",
    [
      "&:where(:has(#body-inner)) .tt-section-background.tt-sbg-cover-8-5::before"
    ]
  ],
  [
    "design-06072",
    [
      "&:where(:has(#body-inner)) .tt-section-background.tt-sbg-cover-9::before"
    ]
  ],
  [
    "design-06073",
    [
      "&:where(:has(#body-inner)) .tt-section-background.tt-sbg-cover-9-5::before"
    ]
  ],
  [
    "design-06074",
    [
      "&:where(:has(#body-inner)) .tt-sbg-on:not(.tt-sbg-is-light-on)"
    ]
  ],
  [
    "design-06075",
    [
      "&:where(:has(#body-inner)) .tt-sbg-on:not(.tt-sbg-is-light-on)"
    ]
  ],
  [
    "design-06076",
    [
      "&:where(:has(#body-inner)) .tt-sbg-on:not(.tt-sbg-is-light-on) .tt-btn-primary"
    ]
  ],
  [
    "design-06077",
    [
      "&:where(:has(#body-inner)) .tt-sbg-on:not(.tt-sbg-is-light-on) .tt-btn-accent"
    ]
  ],
  [
    "design-06078",
    [
      "&:where(:has(#body-inner)) .tt-sbg-on:not(.tt-sbg-is-light-on) .tt-btn-accent"
    ]
  ],
  [
    "design-06079",
    [
      "&:where(:has(#body-inner)) .tt-sbg-on:not(.tt-sbg-is-light-on) .tt-btn-accent > *",
      "&:where(:has(#body-inner)) .tt-sbg-on:not(.tt-sbg-is-light-on) .tt-btn-accent > ::after"
    ]
  ],
  [
    "design-06080",
    [
      "&:where(:has(#body-inner)) .tt-sbg-on:not(.tt-sbg-is-light-on) .tt-btn-secondary"
    ]
  ],
  [
    "design-06081",
    [
      "&:where(:has(#body-inner)) .tt-sbg-on:not(.tt-sbg-is-light-on) .tt-btn-secondary > *",
      "&:where(:has(#body-inner)) .tt-sbg-on:not(.tt-sbg-is-light-on) .tt-btn-secondary > ::after"
    ]
  ],
  [
    "design-06082",
    [
      "&:where(:has(#body-inner)) .tt-sbg-on:not(.tt-sbg-is-light-on) .tt-btn-outline"
    ]
  ],
  [
    "design-06083",
    [
      "&:where(:has(#body-inner)) .tt-sbg-on:not(.tt-sbg-is-light-on) .tt-btn-outline > *",
      "&:where(:has(#body-inner)) .tt-sbg-on:not(.tt-sbg-is-light-on) .tt-btn-outline > ::after"
    ]
  ],
  [
    "design-06084",
    [
      "&:where(:has(#body-inner)) .tt-sbg-on:not(.tt-sbg-is-light-on) .tt-btn-link > *",
      "&:where(:has(#body-inner)) .tt-sbg-on:not(.tt-sbg-is-light-on) .tt-btn-link > ::after"
    ]
  ],
  [
    "design-06085",
    [
      "&:where(:has(#body-inner)) .tt-sbg-on:not(.tt-sbg-is-light-on) .tt-btn-line"
    ]
  ],
  [
    "design-06086",
    [
      "&:where(:has(#body-inner)) .tt-sbg-is-light-on"
    ]
  ],
  [
    "design-06087",
    [
      "&:where(:has(#body-inner)) .tt-sbg-is-light-on .tt-btn-secondary"
    ]
  ],
  [
    "design-06088",
    [
      "&:where(:has(#body-inner)) .tt-sbg-is-light-on .tt-btn-secondary > *",
      "&:where(:has(#body-inner)) .tt-sbg-is-light-on .tt-btn-secondary > ::after"
    ]
  ],
  [
    "design-06089",
    [
      "&:where(:has(#body-inner)) .tt-sbg-is-light-on .tt-btn-outline"
    ]
  ],
  [
    "design-06090",
    [
      "&:where(:has(#body-inner)) .tt-sbg-is-light-on .tt-btn-outline > *",
      "&:where(:has(#body-inner)) .tt-sbg-is-light-on .tt-btn-outline > ::after"
    ]
  ],
  [
    "design-06091",
    [
      "&:where(:has(#body-inner)) .tt-sbg-is-light-on .tt-btn-link > *",
      "&:where(:has(#body-inner)) .tt-sbg-is-light-on .tt-btn-link > ::after"
    ]
  ],
  [
    "design-06092",
    [
      "&:where(:has(#body-inner)) .tt-sbg-is-light-on .tt-btn-line"
    ]
  ],
  [
    "design-06093",
    [
      "&:where(:has(#body-inner)) .tt-section-inner"
    ]
  ],
  [
    "design-06094",
    [
      "&:where(:has(#body-inner)) .tt-section-inner"
    ]
  ],
  [
    "design-06095",
    [
      "&:where(:has(#body-inner)) .tt-section-inner"
    ]
  ],
  [
    "design-06096",
    [
      "&:where(:has(#body-inner)) .tt-section-inner"
    ]
  ],
  [
    "design-06097",
    [
      "&:where(:has(#body-inner)) .tt-404-error"
    ]
  ],
  [
    "design-06098",
    [
      "&:where(:has(#body-inner)) .tt-404-error"
    ]
  ],
  [
    "design-06099",
    [
      "&:where(:has(#body-inner)) .tt-404-error"
    ]
  ],
  [
    "design-06100",
    [
      "&:where(:has(#body-inner)) .tt-404-error"
    ]
  ],
  [
    "design-06101",
    [
      "&:where(:has(#body-inner)) .tt-404-error"
    ]
  ],
  [
    "design-06102",
    [
      "&:where(:has(#body-inner)) .tt-404-error"
    ]
  ],
  [
    "design-06103",
    [
      "&:where(:has(#body-inner)) .tt-404-error"
    ]
  ],
  [
    "design-06104",
    [
      "&:where(:has(#body-inner)) .tt-404-error"
    ]
  ],
  [
    "design-06105",
    [
      "&:where(:has(#body-inner)) .tt-404-error"
    ]
  ],
  [
    "design-06106",
    [
      "&:where(:has(#body-inner)) .tt-404-error-title"
    ]
  ],
  [
    "design-06107",
    [
      "&:where(:has(#body-inner)) .tt-404-error-title"
    ]
  ],
  [
    "design-06108",
    [
      "&:where(:has(#body-inner)) .tt-404-error-title"
    ]
  ],
  [
    "design-06109",
    [
      "&:where(:has(#body-inner)) .tt-404-error-title"
    ]
  ],
  [
    "design-06110",
    [
      "&:where(:has(#body-inner)) .tt-404-error-title"
    ]
  ],
  [
    "design-06111",
    [
      "&:where(:has(#body-inner)) .tt-404-error-subtitle"
    ]
  ],
  [
    "design-06112",
    [
      "&:where(:has(#body-inner)) .tt-404-error-subtitle"
    ]
  ],
  [
    "design-06113",
    [
      "&:where(:has(#body-inner)) .tt-404-error-subtitle"
    ]
  ],
  [
    "design-06114",
    [
      "&:where(:has(#body-inner)) .tt-404-error-subtitle"
    ]
  ],
  [
    "design-06115",
    [
      "&:where(:has(#body-inner)) .tt-404-error-subtitle"
    ]
  ],
  [
    "design-06116",
    [
      "&:where(:has(#body-inner)) .tt-404-error-subtitle"
    ]
  ],
  [
    "design-06117",
    [
      "&:where(:has(#body-inner)) .tt-404-error-description"
    ]
  ],
  [
    "design-06118",
    [
      "&:where(:has(#body-inner)) .tt-404-error-description"
    ]
  ],
  [
    "design-06119",
    [
      "&:where(:has(#body-inner)) .tt-404-error-description"
    ]
  ],
  [
    "design-06120",
    [
      "&:where(:has(#body-inner)) .tt-404-error-description"
    ]
  ],
  [
    "design-06121",
    [
      "html&:where(:has(#body-inner)).with-fancybox body:not(.is-mobile) #tt-header",
      "html&:where(:has(#body-inner)).with-fancybox body:not(.is-mobile) .tt-scroll-to-top"
    ]
  ],
  [
    "design-06122",
    [
      "&:where(:has(#body-inner)) .fancybox__caption"
    ]
  ],
  [
    "design-06123",
    [
      "&:where(:has(#body-inner)) .fancybox__caption"
    ]
  ],
  [
    "design-06124",
    [
      "&:where(:has(#body-inner)) .fancybox__caption"
    ]
  ],
  [
    "design-06125",
    [
      "&:where(:has(#body-inner)) .has-youtube .fancybox__content",
      "&:where(:has(#body-inner)) .has-vimeo .fancybox__content",
      "&:where(:has(#body-inner)) .has-html5video .fancybox__content"
    ]
  ],
  [
    "design-06126",
    [
      "&:where(:has(#body-inner)) .has-youtube .fancybox__content",
      "&:where(:has(#body-inner)) .has-vimeo .fancybox__content",
      "&:where(:has(#body-inner)) .has-html5video .fancybox__content"
    ]
  ],
  [
    "design-06127",
    [
      "&:where(:has(#body-inner)) body:not(.is-mobile) .tt-lightbox-icon"
    ]
  ],
  [
    "design-06128",
    [
      "&:where(:has(#body-inner)) .tt-lightbox-icon"
    ]
  ],
  [
    "design-06129",
    [
      "&:where(:has(#body-inner)) .tt-lightbox-icon"
    ]
  ],
  [
    "design-06130",
    [
      "&:where(:has(#body-inner)) .tt-lightbox-icon"
    ]
  ],
  [
    "design-06131",
    [
      "&:where(:has(#body-inner)) .tt-lightbox-icon"
    ]
  ],
  [
    "design-06132",
    [
      "&:where(:has(#body-inner)) .tt-lightbox-icon"
    ]
  ],
  [
    "design-06133",
    [
      "&:where(:has(#body-inner)) .tt-lightbox-icon"
    ]
  ],
  [
    "design-06134",
    [
      "&:where(:has(#body-inner)) .tt-lightbox-icon"
    ]
  ],
  [
    "design-06135",
    [
      "&:where(:has(#body-inner)) .tt-lightbox-icon"
    ]
  ],
  [
    "design-06136",
    [
      "&:where(:has(#body-inner)) .tt-lightbox-icon"
    ]
  ],
  [
    "design-06137",
    [
      "&:where(:has(#body-inner)) .tt-lightbox-icon"
    ]
  ],
  [
    "design-06138",
    [
      "&:where(:has(#body-inner)) .tt-lightbox-icon::before"
    ]
  ],
  [
    "design-06139",
    [
      "&:where(:has(#body-inner)) .tt-lightbox-icon::before"
    ]
  ],
  [
    "design-06140",
    [
      "&:where(:has(#body-inner)) .tt-lightbox-icon::before"
    ]
  ],
  [
    "design-06141",
    [
      "&:where(:has(#body-inner)) .tt-lightbox-icon::before"
    ]
  ],
  [
    "design-06142",
    [
      "&:where(:has(#body-inner)) .tt-lightbox-icon::before"
    ]
  ],
  [
    "design-06143",
    [
      "&:where(:has(#body-inner)) .tt-lightbox-icon::before"
    ]
  ],
  [
    "design-06144",
    [
      "&:where(:has(#body-inner)) .tt-lightbox-icon::before"
    ]
  ],
  [
    "design-06145",
    [
      "&:where(:has(#body-inner)) .tt-lightbox-icon::before"
    ]
  ],
  [
    "design-06146",
    [
      "&:where(:has(#body-inner)) .tt-lightbox-icon::before"
    ]
  ],
  [
    "design-06147",
    [
      "&:where(:has(#body-inner)) .tt-lightbox-icon::before"
    ]
  ],
  [
    "design-06148",
    [
      "&:where(:has(#body-inner)) .tt-lightbox-icon::before"
    ]
  ],
  [
    "design-06149",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-scrolling"
    ]
  ],
  [
    "design-06150",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-scrolling"
    ]
  ],
  [
    "design-06151",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item }"
    ]
  ],
  [
    "design-06152",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item }"
    ]
  ],
  [
    "design-06153",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item }"
    ]
  ],
  [
    "design-06154",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item }"
    ]
  ],
  [
    "design-06155",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item }"
    ]
  ],
  [
    "design-06156",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item }"
    ]
  ],
  [
    "design-06157",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item }"
    ]
  ],
  [
    "design-06158",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item }"
    ]
  ],
  [
    "design-06159",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item }"
    ]
  ],
  [
    "design-06160",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-inner }"
    ]
  ],
  [
    "design-06161",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-inner }"
    ]
  ],
  [
    "design-06162",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-inner }"
    ]
  ],
  [
    "design-06163",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-inner }"
    ]
  ],
  [
    "design-06164",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-inner }"
    ]
  ],
  [
    "design-06165",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-content }"
    ]
  ],
  [
    "design-06166",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-content }"
    ]
  ],
  [
    "design-06167",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-content }"
    ]
  ],
  [
    "design-06168",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-content }"
    ]
  ],
  [
    "design-06169",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-content }"
    ]
  ],
  [
    "design-06170",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-content }"
    ]
  ],
  [
    "design-06171",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-content }"
    ]
  ],
  [
    "design-06172",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-content }"
    ]
  ],
  [
    "design-06173",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) body.is-mobile .tt-pscr-item-content }"
    ]
  ],
  [
    "design-06174",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item.no-image .tt-pscr-item-content::after }"
    ]
  ],
  [
    "design-06175",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item.no-image .tt-pscr-item-content::after }"
    ]
  ],
  [
    "design-06176",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item.no-image .tt-pscr-item-content::after }"
    ]
  ],
  [
    "design-06177",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item.no-image .tt-pscr-item-content::after }"
    ]
  ],
  [
    "design-06178",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item.no-image .tt-pscr-item-content::after }"
    ]
  ],
  [
    "design-06179",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item.no-image .tt-pscr-item-content::after }"
    ]
  ],
  [
    "design-06180",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item.no-image .tt-pscr-item-content::after }"
    ]
  ],
  [
    "design-06181",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-title }"
    ]
  ],
  [
    "design-06182",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-title }"
    ]
  ],
  [
    "design-06183",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-title }"
    ]
  ],
  [
    "design-06184",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-title }"
    ]
  ],
  [
    "design-06185",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-title }"
    ]
  ],
  [
    "design-06186",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item.no-image .tt-pscr-item-title }"
    ]
  ],
  [
    "design-06187",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item.no-image .tt-pscr-item-title }"
    ]
  ],
  [
    "design-06188",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-image img }"
    ]
  ],
  [
    "design-06189",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-image img }"
    ]
  ],
  [
    "design-06190",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-image img }"
    ]
  ],
  [
    "design-06191",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-image img }"
    ]
  ],
  [
    "design-06192",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-image img }"
    ]
  ],
  [
    "design-06193",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-image img }"
    ]
  ],
  [
    "design-06194",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-categories }"
    ]
  ],
  [
    "design-06195",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-categories }"
    ]
  ],
  [
    "design-06196",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-categories }"
    ]
  ],
  [
    "design-06197",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-categories }"
    ]
  ],
  [
    "design-06198",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-categories }"
    ]
  ],
  [
    "design-06199",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-categories }"
    ]
  ],
  [
    "design-06200",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-categories }"
    ]
  ],
  [
    "design-06201",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-categories }"
    ]
  ],
  [
    "design-06202",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-categories }"
    ]
  ],
  [
    "design-06203",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-category }"
    ]
  ],
  [
    "design-06204",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-category }"
    ]
  ],
  [
    "design-06205",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-category }"
    ]
  ],
  [
    "design-06206",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-category }"
    ]
  ],
  [
    "design-06207",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-category }"
    ]
  ],
  [
    "design-06208",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-category }"
    ]
  ],
  [
    "design-06209",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-category }"
    ]
  ],
  [
    "design-06210",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-category }"
    ]
  ],
  [
    "design-06211",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-category }"
    ]
  ],
  [
    "design-06212",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-category }"
    ]
  ],
  [
    "design-06213",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item:hover .tt-pscr-item-category }"
    ]
  ],
  [
    "design-06214",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item:hover .tt-pscr-item-category }"
    ]
  ],
  [
    "design-06215",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item-category ~ .tt-pscr-item-category ~ .tt-pscr-item-category ~ .tt-pscr-item-category ~ .tt-pscr-item-category }"
    ]
  ],
  [
    "design-06216",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item.tt-pscri-reverse-color }",
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-boxed .tt-pscr-item.tt-pscri-reverse-color }"
    ]
  ],
  [
    "design-06217",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item.tt-pscri-reverse-color }",
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-boxed .tt-pscr-item.tt-pscri-reverse-color }"
    ]
  ],
  [
    "design-06218",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item.tt-pscri-reverse-color }",
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-boxed .tt-pscr-item.tt-pscri-reverse-color }"
    ]
  ],
  [
    "design-06219",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item.tt-pscri-reverse-color }",
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-boxed .tt-pscr-item.tt-pscri-reverse-color }"
    ]
  ],
  [
    "design-06220",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item.tt-pscri-reverse-color:hover }",
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item.tt-pscri-reverse-color:focus }"
    ]
  ],
  [
    "design-06221",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item.tt-pscri-reverse-color.no-image .tt-pscr-item-content::after }"
    ]
  ],
  [
    "design-06222",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item:hover }",
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item:focus }"
    ]
  ],
  [
    "design-06223",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-pscr-item:hover .tt-pscr-item-content }"
    ]
  ],
  [
    "design-06224",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-alter-hover .tt-pscr-item:nth-child(2n) .tt-pscr-item-content }"
    ]
  ],
  [
    "design-06225",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-tilted }"
    ]
  ],
  [
    "design-06226",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-tilted }"
    ]
  ],
  [
    "design-06227",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-tilted .tt-pscr-item }"
    ]
  ],
  [
    "design-06228",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-tilted .tt-pscr-item }"
    ]
  ],
  [
    "design-06229",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-tilted .tt-pscr-item }"
    ]
  ],
  [
    "design-06230",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-tilted .tt-pscr-item:nth-child(2n+1) }"
    ]
  ],
  [
    "design-06231",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-tilted .tt-pscr-item:nth-child(2n) }"
    ]
  ],
  [
    "design-06232",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-boxed }",
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-boxed.tt-pscr-tilted }"
    ]
  ],
  [
    "design-06233",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-boxed }",
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-boxed.tt-pscr-tilted }"
    ]
  ],
  [
    "design-06234",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-boxed .tt-pscr-item }"
    ]
  ],
  [
    "design-06235",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-boxed .tt-pscr-item }"
    ]
  ],
  [
    "design-06236",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-boxed .tt-pscr-item }"
    ]
  ],
  [
    "design-06237",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-boxed .tt-pscr-item }"
    ]
  ],
  [
    "design-06238",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-boxed .tt-pscr-item }"
    ]
  ],
  [
    "design-06239",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-boxed .tt-pscr-item }"
    ]
  ],
  [
    "design-06240",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-boxed .tt-pscr-item }"
    ]
  ],
  [
    "design-06241",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-lg }"
    ]
  ],
  [
    "design-06242",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-xlg }"
    ]
  ],
  [
    "design-06243",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-xxlg }"
    ]
  ],
  [
    "design-06244",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling }"
    ]
  ],
  [
    "design-06245",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling }"
    ]
  ],
  [
    "design-06246",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item }"
    ]
  ],
  [
    "design-06247",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item }"
    ]
  ],
  [
    "design-06248",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item }"
    ]
  ],
  [
    "design-06249",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item }"
    ]
  ],
  [
    "design-06250",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item:hover }",
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item:focus }"
    ]
  ],
  [
    "design-06251",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-content }"
    ]
  ],
  [
    "design-06252",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-content }"
    ]
  ],
  [
    "design-06253",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-title }"
    ]
  ],
  [
    "design-06254",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-title }"
    ]
  ],
  [
    "design-06255",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-title }"
    ]
  ],
  [
    "design-06256",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-title }"
    ]
  ],
  [
    "design-06257",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-title }"
    ]
  ],
  [
    "design-06258",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-title }"
    ]
  ],
  [
    "design-06259",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-title::after }"
    ]
  ],
  [
    "design-06260",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-title::after }"
    ]
  ],
  [
    "design-06261",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-title::after }"
    ]
  ],
  [
    "design-06262",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-title::after }"
    ]
  ],
  [
    "design-06263",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-title::after }"
    ]
  ],
  [
    "design-06264",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-title::after }"
    ]
  ],
  [
    "design-06265",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-title::after }"
    ]
  ],
  [
    "design-06266",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-title::after }"
    ]
  ],
  [
    "design-06267",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-title::after }"
    ]
  ],
  [
    "design-06268",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-title::after }"
    ]
  ],
  [
    "design-06269",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-title::after }"
    ]
  ],
  [
    "design-06270",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-title::after }"
    ]
  ],
  [
    "design-06271",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-title::after }"
    ]
  ],
  [
    "design-06272",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-title::after }"
    ]
  ],
  [
    "design-06273",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-title::after }"
    ]
  ],
  [
    "design-06274",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-title::after }"
    ]
  ],
  [
    "design-06275",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-title::after }"
    ]
  ],
  [
    "design-06276",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-title::after }"
    ]
  ],
  [
    "design-06277",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-title::after }"
    ]
  ],
  [
    "design-06278",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-title::after }"
    ]
  ],
  [
    "design-06279",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-title::after }"
    ]
  ],
  [
    "design-06280",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-title::after }"
    ]
  ],
  [
    "design-06281",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-image }"
    ]
  ],
  [
    "design-06282",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-image }"
    ]
  ],
  [
    "design-06283",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-image }"
    ]
  ],
  [
    "design-06284",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-image }"
    ]
  ],
  [
    "design-06285",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-image }"
    ]
  ],
  [
    "design-06286",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-image }"
    ]
  ],
  [
    "design-06287",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-image::after }"
    ]
  ],
  [
    "design-06288",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-image::after }"
    ]
  ],
  [
    "design-06289",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-image::after }"
    ]
  ],
  [
    "design-06290",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-image::after }"
    ]
  ],
  [
    "design-06291",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-image img }"
    ]
  ],
  [
    "design-06292",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-image img }"
    ]
  ],
  [
    "design-06293",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-image img }"
    ]
  ],
  [
    "design-06294",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-image img }"
    ]
  ],
  [
    "design-06295",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-image img }"
    ]
  ],
  [
    "design-06296",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-image img }"
    ]
  ],
  [
    "design-06297",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-image img }"
    ]
  ],
  [
    "design-06298",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-image img }"
    ]
  ],
  [
    "design-06299",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-categories }"
    ]
  ],
  [
    "design-06300",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-categories }"
    ]
  ],
  [
    "design-06301",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-categories }"
    ]
  ],
  [
    "design-06302",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-categories }"
    ]
  ],
  [
    "design-06303",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-categories }"
    ]
  ],
  [
    "design-06304",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-category }"
    ]
  ],
  [
    "design-06305",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-category }"
    ]
  ],
  [
    "design-06306",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-category }"
    ]
  ],
  [
    "design-06307",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-category }"
    ]
  ],
  [
    "design-06308",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-category }"
    ]
  ],
  [
    "design-06309",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-category }"
    ]
  ],
  [
    "design-06310",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-category }"
    ]
  ],
  [
    "design-06311",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-category }"
    ]
  ],
  [
    "design-06312",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item-category }"
    ]
  ],
  [
    "design-06313",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item.tt-pscri-reverse-color-m }",
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-boxed .tt-pscr-item.tt-pscri-reverse-color-m }"
    ]
  ],
  [
    "design-06314",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item.tt-pscri-reverse-color-m }",
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-boxed .tt-pscr-item.tt-pscri-reverse-color-m }"
    ]
  ],
  [
    "design-06315",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item.tt-pscri-reverse-color-m }",
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-boxed .tt-pscr-item.tt-pscri-reverse-color-m }"
    ]
  ],
  [
    "design-06316",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item.tt-pscri-reverse-color-m }",
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-boxed .tt-pscr-item.tt-pscri-reverse-color-m }"
    ]
  ],
  [
    "design-06317",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling:not(.tt-pscr-boxed) .tt-pscr-item.tt-pscri-reverse-color-m }"
    ]
  ],
  [
    "design-06318",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling:not(.tt-pscr-boxed) .tt-pscr-item.tt-pscri-reverse-color-m }"
    ]
  ],
  [
    "design-06319",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item.tt-pscri-reverse-color-m .tt-pscr-item-title::after }"
    ]
  ],
  [
    "design-06320",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item.tt-pscri-reverse-color-m .tt-pscr-item-title::after }"
    ]
  ],
  [
    "design-06321",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item.tt-pscri-reverse-color-m .tt-pscr-item-category }"
    ]
  ],
  [
    "design-06322",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pscr-item.tt-pscri-reverse-color-m .tt-pscr-item-category }"
    ]
  ],
  [
    "design-06323",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-tilted-m .tt-pscr-item:nth-child(2n+1) }"
    ]
  ],
  [
    "design-06324",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-tilted-m .tt-pscr-item:nth-child(2n) }"
    ]
  ],
  [
    "design-06325",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-boxed .tt-pscr-item }"
    ]
  ],
  [
    "design-06326",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-boxed .tt-pscr-item }"
    ]
  ],
  [
    "design-06327",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-boxed .tt-pscr-item }"
    ]
  ],
  [
    "design-06328",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-boxed .tt-pscr-item }"
    ]
  ],
  [
    "design-06329",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-boxed .tt-pscr-item }"
    ]
  ],
  [
    "design-06330",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-boxed .tt-pscr-item }"
    ]
  ],
  [
    "design-06331",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-portfolio-scrolling.tt-pscr-boxed .tt-pscr-item }"
    ]
  ],
  [
    "design-06332",
    [
      "&:where(:has(#body-inner)) .tt-grid"
    ]
  ],
  [
    "design-06333",
    [
      "&:where(:has(#body-inner)) .tt-grid-filter"
    ]
  ],
  [
    "design-06334",
    [
      "&:where(:has(#body-inner)) .tt-grid-filter"
    ]
  ],
  [
    "design-06335",
    [
      "&:where(:has(#body-inner)) .tt-grid-filter"
    ]
  ],
  [
    "design-06336",
    [
      "&:where(:has(#body-inner)) .tt-grid-filter .tt-magnetic-btn"
    ]
  ],
  [
    "design-06337",
    [
      "&:where(:has(#body-inner)) .tt-grid-filter .tt-btn"
    ]
  ],
  [
    "design-06338",
    [
      "&:where(:has(#body-inner)) .tt-grid-filter .tt-btn"
    ]
  ],
  [
    "design-06339",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-grid-filter }"
    ]
  ],
  [
    "design-06340",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-grid-filter .tt-magnetic-btn }"
    ]
  ],
  [
    "design-06341",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-grid-filter .tt-btn }"
    ]
  ],
  [
    "design-06342",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-grid-filter .tt-btn }"
    ]
  ],
  [
    "design-06343",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-grid-filter .tt-btn }"
    ]
  ],
  [
    "design-06344",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-grid-filter .tt-btn }"
    ]
  ],
  [
    "design-06345",
    [
      "&:where(:has(#body-inner)) .tt-grid-filter.tt-grf-center"
    ]
  ],
  [
    "design-06346",
    [
      "&:where(:has(#body-inner)) .tt-grid-filter.tt-grf-right"
    ]
  ],
  [
    "design-06347",
    [
      "&:where(:has(#body-inner)) .tt-grid-list"
    ]
  ],
  [
    "design-06348",
    [
      "&:where(:has(#body-inner)) .tt-grid-list"
    ]
  ],
  [
    "design-06349",
    [
      "&:where(:has(#body-inner)) .tt-grid-item"
    ]
  ],
  [
    "design-06350",
    [
      "&:where(:has(#body-inner)) .tt-grid-item-inner"
    ]
  ],
  [
    "design-06351",
    [
      "&:where(:has(#body-inner)) .tt-grid.tt-grid-gap-1"
    ]
  ],
  [
    "design-06352",
    [
      "&:where(:has(#body-inner)) .tt-grid.tt-grid-gap-1 .tt-grid-list"
    ]
  ],
  [
    "design-06353",
    [
      "&:where(:has(#body-inner)) .tt-grid.tt-grid-gap-1 .tt-grid-list"
    ]
  ],
  [
    "design-06354",
    [
      "&:where(:has(#body-inner)) .tt-grid.tt-grid-gap-1 .tt-grid-item-inner"
    ]
  ],
  [
    "design-06355",
    [
      "&:where(:has(#body-inner)) .tt-grid.tt-grid-gap-2"
    ]
  ],
  [
    "design-06356",
    [
      "&:where(:has(#body-inner)) .tt-grid.tt-grid-gap-2 .tt-grid-list"
    ]
  ],
  [
    "design-06357",
    [
      "&:where(:has(#body-inner)) .tt-grid.tt-grid-gap-2 .tt-grid-list"
    ]
  ],
  [
    "design-06358",
    [
      "&:where(:has(#body-inner)) .tt-grid.tt-grid-gap-2 .tt-grid-item-inner"
    ]
  ],
  [
    "design-06359",
    [
      "&:where(:has(#body-inner)) .tt-grid.tt-grid-gap-3"
    ]
  ],
  [
    "design-06360",
    [
      "&:where(:has(#body-inner)) .tt-grid.tt-grid-gap-3 .tt-grid-list"
    ]
  ],
  [
    "design-06361",
    [
      "&:where(:has(#body-inner)) .tt-grid.tt-grid-gap-3 .tt-grid-list"
    ]
  ],
  [
    "design-06362",
    [
      "&:where(:has(#body-inner)) .tt-grid.tt-grid-gap-3 .tt-grid-item-inner"
    ]
  ],
  [
    "design-06363",
    [
      "&:where(:has(#body-inner)) .tt-grid.tt-grid-gap-4"
    ]
  ],
  [
    "design-06364",
    [
      "&:where(:has(#body-inner)) .tt-grid.tt-grid-gap-4 .tt-grid-list"
    ]
  ],
  [
    "design-06365",
    [
      "&:where(:has(#body-inner)) .tt-grid.tt-grid-gap-4 .tt-grid-list"
    ]
  ],
  [
    "design-06366",
    [
      "&:where(:has(#body-inner)) .tt-grid.tt-grid-gap-4 .tt-grid-item-inner"
    ]
  ],
  [
    "design-06367",
    [
      "&:where(:has(#body-inner)) .tt-grid.tt-grid-gap-5"
    ]
  ],
  [
    "design-06368",
    [
      "&:where(:has(#body-inner)) .tt-grid.tt-grid-gap-5 .tt-grid-list"
    ]
  ],
  [
    "design-06369",
    [
      "&:where(:has(#body-inner)) .tt-grid.tt-grid-gap-5 .tt-grid-list"
    ]
  ],
  [
    "design-06370",
    [
      "&:where(:has(#body-inner)) .tt-grid.tt-grid-gap-5 .tt-grid-item-inner"
    ]
  ],
  [
    "design-06371",
    [
      "&:where(:has(#body-inner)) .tt-grid.tt-grid-gap-6"
    ]
  ],
  [
    "design-06372",
    [
      "&:where(:has(#body-inner)) .tt-grid.tt-grid-gap-6 .tt-grid-list"
    ]
  ],
  [
    "design-06373",
    [
      "&:where(:has(#body-inner)) .tt-grid.tt-grid-gap-6 .tt-grid-list"
    ]
  ],
  [
    "design-06374",
    [
      "&:where(:has(#body-inner)) .tt-grid.tt-grid-gap-6 .tt-grid-item-inner"
    ]
  ],
  [
    "design-06375",
    [
      "&:where(:has(#body-inner)) .tt-wrap .tt-grid[class*=\"tt-grid-gap-\"] .tt-grid-list"
    ]
  ],
  [
    "design-06376",
    [
      "&:where(:has(#body-inner)) .tt-wrap .tt-grid[class*=\"tt-grid-gap-\"] .tt-grid-list"
    ]
  ],
  [
    "design-06377",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-grid.tt-grid-gap-1 .tt-grid-item-inner }",
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-grid.tt-grid-gap-2 .tt-grid-item-inner }",
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-grid.tt-grid-gap-3 .tt-grid-item-inner }",
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-grid.tt-grid-gap-4 .tt-grid-item-inner }",
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-grid.tt-grid-gap-5 .tt-grid-item-inner }",
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-grid.tt-grid-gap-6 .tt-grid-item-inner }"
    ]
  ],
  [
    "design-06378",
    [
      "&:where(:has(#body-inner)) .tt-grid-load-more"
    ]
  ],
  [
    "design-06379",
    [
      "&:where(:has(#body-inner)) .tt-grid-load-more"
    ]
  ],
  [
    "design-06380",
    [
      "&:where(:has(#body-inner)) .tt-grid-load-more"
    ]
  ],
  [
    "design-06381",
    [
      "&:where(:has(#body-inner)) .tt-grid-load-more"
    ]
  ],
  [
    "design-06382",
    [
      "&:where(:has(#body-inner)) .tt-grid-load-more"
    ]
  ],
  [
    "design-06383",
    [
      "&:where(:has(#body-inner)) .tt-grid-load-more"
    ]
  ],
  [
    "design-06384",
    [
      "&:where(:has(#body-inner)) .tt-grid:not([class*=\"tt-grid-gap-\"]) .tt-grid-load-more",
      "&:where(:has(#body-inner)) .tt-grid.tt-grid-gap-1 .tt-grid-load-more"
    ]
  ],
  [
    "design-06385",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-grid.tt-grid-gap-1 .tt-grid-load-more }"
    ]
  ],
  [
    "design-06386",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-grid.tt-grid-gap-2 .tt-grid-load-more }"
    ]
  ],
  [
    "design-06387",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-grid.tt-grid-gap-3 .tt-grid-load-more }"
    ]
  ],
  [
    "design-06388",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-grid.tt-grid-gap-4 .tt-grid-load-more }"
    ]
  ],
  [
    "design-06389",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-grid.tt-grid-gap-5 .tt-grid-load-more }"
    ]
  ],
  [
    "design-06390",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-grid.tt-grid-gap-6 .tt-grid-load-more }"
    ]
  ],
  [
    "design-06391",
    [
      "&:where(:has(#body-inner)) .tt-grid-no-more-msg"
    ]
  ],
  [
    "design-06392",
    [
      "&:where(:has(#body-inner)) .tt-grid-no-more-msg"
    ]
  ],
  [
    "design-06393",
    [
      "&:where(:has(#body-inner)) .tt-grid-no-more-msg"
    ]
  ],
  [
    "design-06394",
    [
      "&:where(:has(#body-inner)) .tt-grid-no-more-msg"
    ]
  ],
  [
    "design-06395",
    [
      "&:where(:has(#body-inner)) .tt-grid-no-more-msg"
    ]
  ],
  [
    "design-06396",
    [
      "&:where(:has(#body-inner)) .tt-grid-no-more-msg"
    ]
  ],
  [
    "design-06397",
    [
      "&:where(:has(#body-inner)) .tt-grid-no-more-msg"
    ]
  ],
  [
    "design-06398",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid"
    ]
  ],
  [
    "design-06399",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid-item"
    ]
  ],
  [
    "design-06400",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid-item"
    ]
  ],
  [
    "design-06401",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid-item"
    ]
  ],
  [
    "design-06402",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid-item"
    ]
  ],
  [
    "design-06403",
    [
      "@media (max-width: 648px) { &:where(:has(#body-inner)) .tt-portfolio-grid .tt-grid-item[class*=\"h-\"] }"
    ]
  ],
  [
    "design-06404",
    [
      "&:where(:has(#body-inner)) .tt-pgi-image"
    ]
  ],
  [
    "design-06405",
    [
      "&:where(:has(#body-inner)) .tt-pgi-image"
    ]
  ],
  [
    "design-06406",
    [
      "&:where(:has(#body-inner)) .tt-pgi-image"
    ]
  ],
  [
    "design-06407",
    [
      "&:where(:has(#body-inner)) .tt-pgi-image"
    ]
  ],
  [
    "design-06408",
    [
      "&:where(:has(#body-inner)) .tt-pgi-image"
    ]
  ],
  [
    "design-06409",
    [
      "&:where(:has(#body-inner)) .tt-pgi-image"
    ]
  ],
  [
    "design-06410",
    [
      "&:where(:has(#body-inner)) .tt-pgi-image"
    ]
  ],
  [
    "design-06411",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid:not(.tt-pgi-inside) .tt-pgi-image"
    ]
  ],
  [
    "design-06412",
    [
      "&:where(:has(#body-inner)) .tt-pgi-image img"
    ]
  ],
  [
    "design-06413",
    [
      "&:where(:has(#body-inner)) .tt-pgi-image img"
    ]
  ],
  [
    "design-06414",
    [
      "&:where(:has(#body-inner)) .tt-pgi-image img"
    ]
  ],
  [
    "design-06415",
    [
      "&:where(:has(#body-inner)) .tt-pgi-image img"
    ]
  ],
  [
    "design-06416",
    [
      "&:where(:has(#body-inner)) .tt-pgi-image img"
    ]
  ],
  [
    "design-06417",
    [
      "&:where(:has(#body-inner)) .tt-pgi-image img"
    ]
  ],
  [
    "design-06418",
    [
      "&:where(:has(#body-inner)) .tt-pgi-image img"
    ]
  ],
  [
    "design-06419",
    [
      "&:where(:has(#body-inner)) .tt-pgi-image img"
    ]
  ],
  [
    "design-06420",
    [
      "&:where(:has(#body-inner)) .tt-pgi-image:hover img"
    ]
  ],
  [
    "design-06421",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid-item.tt-pgi-portrait .tt-pgi-image img"
    ]
  ],
  [
    "design-06422",
    [
      "&:where(:has(#body-inner)) .tt-pgi-video"
    ]
  ],
  [
    "design-06423",
    [
      "&:where(:has(#body-inner)) .tt-pgi-video"
    ]
  ],
  [
    "design-06424",
    [
      "&:where(:has(#body-inner)) .tt-pgi-video"
    ]
  ],
  [
    "design-06425",
    [
      "&:where(:has(#body-inner)) .tt-pgi-video"
    ]
  ],
  [
    "design-06426",
    [
      "&:where(:has(#body-inner)) .tt-pgi-video"
    ]
  ],
  [
    "design-06427",
    [
      "&:where(:has(#body-inner)) .tt-pgi-video"
    ]
  ],
  [
    "design-06428",
    [
      "&:where(:has(#body-inner)) .tt-pgi-video"
    ]
  ],
  [
    "design-06429",
    [
      "&:where(:has(#body-inner)) .tt-pgi-video video"
    ]
  ],
  [
    "design-06430",
    [
      "&:where(:has(#body-inner)) .tt-pgi-video video"
    ]
  ],
  [
    "design-06431",
    [
      "&:where(:has(#body-inner)) .tt-pgi-video video"
    ]
  ],
  [
    "design-06432",
    [
      "&:where(:has(#body-inner)) .tt-pgi-video video"
    ]
  ],
  [
    "design-06433",
    [
      "&:where(:has(#body-inner)) .tt-pgi-video video"
    ]
  ],
  [
    "design-06434",
    [
      "&:where(:has(#body-inner)) .tt-pgi-video video"
    ]
  ],
  [
    "design-06435",
    [
      "&:where(:has(#body-inner)) .tt-pgi-video video"
    ]
  ],
  [
    "design-06436",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid-item.tt-pgi-portrait .tt-pgi-video video"
    ]
  ],
  [
    "design-06437",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid:not(.tt-pgi-inside) .tt-pgi-video"
    ]
  ],
  [
    "design-06438",
    [
      "&:where(:has(#body-inner)) .tt-pgi-info"
    ]
  ],
  [
    "design-06439",
    [
      "&:where(:has(#body-inner)) .tt-pgi-info"
    ]
  ],
  [
    "design-06440",
    [
      "&:where(:has(#body-inner)) .tt-pgi-info"
    ]
  ],
  [
    "design-06441",
    [
      "&:where(:has(#body-inner)) .tt-pgi-title"
    ]
  ],
  [
    "design-06442",
    [
      "&:where(:has(#body-inner)) .tt-pgi-title"
    ]
  ],
  [
    "design-06443",
    [
      "&:where(:has(#body-inner)) .tt-pgi-title"
    ]
  ],
  [
    "design-06444",
    [
      "&:where(:has(#body-inner)) .tt-pgi-title"
    ]
  ],
  [
    "design-06445",
    [
      "&:where(:has(#body-inner)) .tt-pgi-title"
    ]
  ],
  [
    "design-06446",
    [
      "&:where(:has(#body-inner)) .tt-pgi-title"
    ]
  ],
  [
    "design-06447",
    [
      "&:where(:has(#body-inner)) .tt-pgi-title"
    ]
  ],
  [
    "design-06448",
    [
      "&:where(:has(#body-inner)) .tt-pgi-title"
    ]
  ],
  [
    "design-06449",
    [
      "&:where(:has(#body-inner)) .tt-pgi-title"
    ]
  ],
  [
    "design-06450",
    [
      "&:where(:has(#body-inner)) .tt-pgi-title a"
    ]
  ],
  [
    "design-06451",
    [
      "&:where(:has(#body-inner)) .tt-pgi-title a"
    ]
  ],
  [
    "design-06452",
    [
      "&:where(:has(#body-inner)) .tt-pgi-title a"
    ]
  ],
  [
    "design-06453",
    [
      "&:where(:has(#body-inner)) .tt-pgi-title a"
    ]
  ],
  [
    "design-06454",
    [
      "&:where(:has(#body-inner)) .tt-pgi-title a:hover",
      "&:where(:has(#body-inner)) .tt-pgi-title a:focus"
    ]
  ],
  [
    "design-06455",
    [
      "&:where(:has(#body-inner)) .tt-pgi-title a:hover",
      "&:where(:has(#body-inner)) .tt-pgi-title a:focus"
    ]
  ],
  [
    "design-06456",
    [
      "&:where(:has(#body-inner)) .tt-pgi-icon"
    ]
  ],
  [
    "design-06457",
    [
      "&:where(:has(#body-inner)) .tt-pgi-icon"
    ]
  ],
  [
    "design-06458",
    [
      "&:where(:has(#body-inner)) .tt-pgi-icon"
    ]
  ],
  [
    "design-06459",
    [
      "&:where(:has(#body-inner)) .tt-pgi-icon"
    ]
  ],
  [
    "design-06460",
    [
      "&:where(:has(#body-inner)) .tt-pgi-icon"
    ]
  ],
  [
    "design-06461",
    [
      "&:where(:has(#body-inner)) .tt-pgi-icon"
    ]
  ],
  [
    "design-06462",
    [
      "&:where(:has(#body-inner)) .tt-pgi-icon"
    ]
  ],
  [
    "design-06463",
    [
      "&:where(:has(#body-inner)) .tt-pgi-icon"
    ]
  ],
  [
    "design-06464",
    [
      "&:where(:has(#body-inner)) .tt-pgi-icon"
    ]
  ],
  [
    "design-06465",
    [
      "&:where(:has(#body-inner)) .tt-pgi-icon"
    ]
  ],
  [
    "design-06466",
    [
      "&:where(:has(#body-inner)) .tt-pgi-icon"
    ]
  ],
  [
    "design-06467",
    [
      "&:where(:has(#body-inner)) .tt-pgi-icon"
    ]
  ],
  [
    "design-06468",
    [
      "&:where(:has(#body-inner)) .tt-pgi-icon"
    ]
  ],
  [
    "design-06469",
    [
      "&:where(:has(#body-inner)) .tt-pgi-icon"
    ]
  ],
  [
    "design-06470",
    [
      "&:where(:has(#body-inner)) .tt-pgi-icon:hover"
    ]
  ],
  [
    "design-06471",
    [
      "&:where(:has(#body-inner)) .tt-pgi-icon svg"
    ]
  ],
  [
    "design-06472",
    [
      "&:where(:has(#body-inner)) .tt-pgi-icon svg"
    ]
  ],
  [
    "design-06473",
    [
      "&:where(:has(#body-inner)) .tt-pgi-icon svg"
    ]
  ],
  [
    "design-06474",
    [
      "&:where(:has(#body-inner)) .tt-pgi-icon svg"
    ]
  ],
  [
    "design-06475",
    [
      "&:where(:has(#body-inner)) .tt-pgi-categories"
    ]
  ],
  [
    "design-06476",
    [
      "&:where(:has(#body-inner)) .tt-pgi-categories"
    ]
  ],
  [
    "design-06477",
    [
      "&:where(:has(#body-inner)) .tt-pgi-categories"
    ]
  ],
  [
    "design-06478",
    [
      "&:where(:has(#body-inner)) .tt-pgi-categories"
    ]
  ],
  [
    "design-06479",
    [
      "&:where(:has(#body-inner)) .tt-pgi-categories"
    ]
  ],
  [
    "design-06480",
    [
      "&:where(:has(#body-inner)) .tt-pgi-categories"
    ]
  ],
  [
    "design-06481",
    [
      "&:where(:has(#body-inner)) .tt-pgi-categories"
    ]
  ],
  [
    "design-06482",
    [
      "&:where(:has(#body-inner)) .tt-pgi-category"
    ]
  ],
  [
    "design-06483",
    [
      "&:where(:has(#body-inner)) .tt-pgi-category"
    ]
  ],
  [
    "design-06484",
    [
      "&:where(:has(#body-inner)) .tt-pgi-category"
    ]
  ],
  [
    "design-06485",
    [
      "&:where(:has(#body-inner)) .tt-pgi-category"
    ]
  ],
  [
    "design-06486",
    [
      "&:where(:has(#body-inner)) .tt-pgi-category"
    ]
  ],
  [
    "design-06487",
    [
      "&:where(:has(#body-inner)) .tt-pgi-category"
    ]
  ],
  [
    "design-06488",
    [
      "&:where(:has(#body-inner)) .tt-pgi-category"
    ]
  ],
  [
    "design-06489",
    [
      "&:where(:has(#body-inner)) .tt-pgi-category"
    ]
  ],
  [
    "design-06490",
    [
      "&:where(:has(#body-inner)) .tt-pgi-category"
    ]
  ],
  [
    "design-06491",
    [
      "&:where(:has(#body-inner)) .tt-pgi-category"
    ]
  ],
  [
    "design-06492",
    [
      "&:where(:has(#body-inner)) .tt-pgi-category"
    ]
  ],
  [
    "design-06493",
    [
      "&:where(:has(#body-inner)) .tt-pgi-category"
    ]
  ],
  [
    "design-06494",
    [
      "&:where(:has(#body-inner)) a.tt-pgi-category:hover",
      "&:where(:has(#body-inner)) a.tt-pgi-category:focus"
    ]
  ],
  [
    "design-06495",
    [
      "&:where(:has(#body-inner)) a.tt-pgi-category:hover",
      "&:where(:has(#body-inner)) a.tt-pgi-category:focus"
    ]
  ],
  [
    "design-06496",
    [
      "&:where(:has(#body-inner)) a.tt-pgi-category:hover",
      "&:where(:has(#body-inner)) a.tt-pgi-category:focus"
    ]
  ],
  [
    "design-06497",
    [
      "&:where(:has(#body-inner)) .tt-grid.tt-grid-col-3 .tt-pgi-title"
    ]
  ],
  [
    "design-06498",
    [
      "&:where(:has(#body-inner)) .tt-grid.tt-grid-col-4 .tt-pgi-title"
    ]
  ],
  [
    "design-06499",
    [
      "&:where(:has(#body-inner)) .tt-grid.tt-grid-col-5 .tt-pgi-title"
    ]
  ],
  [
    "design-06500",
    [
      "&:where(:has(#body-inner)) .tt-grid.tt-grid-col-6 .tt-pgi-title"
    ]
  ],
  [
    "design-06501",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-portfolio-grid-item"
    ]
  ],
  [
    "design-06502",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-grid:not([class*=\"tt-grid-gap-\"]) .tt-pgi-image",
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-grid:not([class*=\"tt-grid-gap-\"]) .tt-pgi-video"
    ]
  ],
  [
    "design-06503",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-image::before"
    ]
  ],
  [
    "design-06504",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-image::before"
    ]
  ],
  [
    "design-06505",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-image::before"
    ]
  ],
  [
    "design-06506",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-image::before"
    ]
  ],
  [
    "design-06507",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-image::before"
    ]
  ],
  [
    "design-06508",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-image::before"
    ]
  ],
  [
    "design-06509",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-image::before"
    ]
  ],
  [
    "design-06510",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-info"
    ]
  ],
  [
    "design-06511",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-info"
    ]
  ],
  [
    "design-06512",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-info"
    ]
  ],
  [
    "design-06513",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-info"
    ]
  ],
  [
    "design-06514",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-info"
    ]
  ],
  [
    "design-06515",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-info"
    ]
  ],
  [
    "design-06516",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-info"
    ]
  ],
  [
    "design-06517",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-info"
    ]
  ],
  [
    "design-06518",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-info"
    ]
  ],
  [
    "design-06519",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-info"
    ]
  ],
  [
    "design-06520",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-info"
    ]
  ],
  [
    "design-06521",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-title"
    ]
  ],
  [
    "design-06522",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-title"
    ]
  ],
  [
    "design-06523",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-title a"
    ]
  ],
  [
    "design-06524",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-icon"
    ]
  ],
  [
    "design-06525",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-icon"
    ]
  ],
  [
    "design-06526",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-icon"
    ]
  ],
  [
    "design-06527",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-icon"
    ]
  ],
  [
    "design-06528",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-icon"
    ]
  ],
  [
    "design-06529",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-icon"
    ]
  ],
  [
    "design-06530",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-icon svg"
    ]
  ],
  [
    "design-06531",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-categories"
    ]
  ],
  [
    "design-06532",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-categories"
    ]
  ],
  [
    "design-06533",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-category"
    ]
  ],
  [
    "design-06534",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-category"
    ]
  ],
  [
    "design-06535",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-category"
    ]
  ],
  [
    "design-06536",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-category"
    ]
  ],
  [
    "design-06537",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-category"
    ]
  ],
  [
    "design-06538",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside .tt-pgi-category:hover"
    ]
  ],
  [
    "design-06539",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-boxed .tt-portfolio-grid-item"
    ]
  ],
  [
    "design-06540",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-boxed .tt-portfolio-grid-item"
    ]
  ],
  [
    "design-06541",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-boxed .tt-portfolio-grid-item"
    ]
  ],
  [
    "design-06542",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-boxed .tt-portfolio-grid-item"
    ]
  ],
  [
    "design-06543",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-boxed .tt-portfolio-grid-item"
    ]
  ],
  [
    "design-06544",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside.tt-pgi-boxed .tt-pgi-info"
    ]
  ],
  [
    "design-06545",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-inside.tt-pgi-boxed .tt-pgi-info"
    ]
  ],
  [
    "design-06546",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-tilted .tt-grid-item:nth-child(2n+1) .tt-portfolio-grid-item"
    ]
  ],
  [
    "design-06547",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-grid.tt-pgi-tilted .tt-grid-item:nth-child(2n) .tt-portfolio-grid-item"
    ]
  ],
  [
    "design-06548",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-list"
    ]
  ],
  [
    "design-06549",
    [
      "&:where(:has(#body-inner)) .tt-pl-item"
    ]
  ],
  [
    "design-06550",
    [
      "&:where(:has(#body-inner)) .tt-pl-item:last-child"
    ]
  ],
  [
    "design-06551",
    [
      "&:where(:has(#body-inner)) .tt-pli-inner"
    ]
  ],
  [
    "design-06552",
    [
      "&:where(:has(#body-inner)) .tt-pli-inner"
    ]
  ],
  [
    "design-06553",
    [
      "&:where(:has(#body-inner)) .tt-pli-inner"
    ]
  ],
  [
    "design-06554",
    [
      "&:where(:has(#body-inner)) .tt-pli-inner"
    ]
  ],
  [
    "design-06555",
    [
      "&:where(:has(#body-inner)) .tt-wrap .tt-pli-inner"
    ]
  ],
  [
    "design-06556",
    [
      "&:where(:has(#body-inner)) .tt-wrap .tt-pli-inner"
    ]
  ],
  [
    "design-06557",
    [
      "&:where(:has(#body-inner)) .tt-pli-col-info"
    ]
  ],
  [
    "design-06558",
    [
      "&:where(:has(#body-inner)) .tt-pli-col-image"
    ]
  ],
  [
    "design-06559",
    [
      "&:where(:has(#body-inner)) .tt-pli-info-inner"
    ]
  ],
  [
    "design-06560",
    [
      "&:where(:has(#body-inner)) .tt-pli-info-inner"
    ]
  ],
  [
    "design-06561",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-pli-info-inner }"
    ]
  ],
  [
    "design-06562",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-pli-info-col-caption }"
    ]
  ],
  [
    "design-06563",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-pli-info-col-caption }"
    ]
  ],
  [
    "design-06564",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-pli-info-col-text }"
    ]
  ],
  [
    "design-06565",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-pli-info-col-text }"
    ]
  ],
  [
    "design-06566",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-pli-info-col-text }"
    ]
  ],
  [
    "design-06567",
    [
      "@media (min-width: 768px) { &:where(:has(#body-inner)) .tt-pli-info-col-text }"
    ]
  ],
  [
    "design-06568",
    [
      "&:where(:has(#body-inner)) .tt-pli-title"
    ]
  ],
  [
    "design-06569",
    [
      "&:where(:has(#body-inner)) .tt-pli-title"
    ]
  ],
  [
    "design-06570",
    [
      "&:where(:has(#body-inner)) .tt-pli-title"
    ]
  ],
  [
    "design-06571",
    [
      "&:where(:has(#body-inner)) .tt-pli-title"
    ]
  ],
  [
    "design-06572",
    [
      "&:where(:has(#body-inner)) .tt-pli-title"
    ]
  ],
  [
    "design-06573",
    [
      "&:where(:has(#body-inner)) .tt-pli-title"
    ]
  ],
  [
    "design-06574",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-pli-title br }"
    ]
  ],
  [
    "design-06575",
    [
      "&:where(:has(#body-inner)) .tt-pli-title a"
    ]
  ],
  [
    "design-06576",
    [
      "&:where(:has(#body-inner)) .tt-pli-title a"
    ]
  ],
  [
    "design-06577",
    [
      "&:where(:has(#body-inner)) .tt-pli-title a"
    ]
  ],
  [
    "design-06578",
    [
      "&:where(:has(#body-inner)) .tt-pli-title a"
    ]
  ],
  [
    "design-06579",
    [
      "&:where(:has(#body-inner)) .tt-pli-title a"
    ]
  ],
  [
    "design-06580",
    [
      "&:where(:has(#body-inner)) .tt-pli-title a"
    ]
  ],
  [
    "design-06581",
    [
      "&:where(:has(#body-inner)) .tt-pli-title a"
    ]
  ],
  [
    "design-06582",
    [
      "&:where(:has(#body-inner)) .tt-pli-title a:hover",
      "&:where(:has(#body-inner)) .tt-pli-title a:focus"
    ]
  ],
  [
    "design-06583",
    [
      "&:where(:has(#body-inner)) .tt-pli-categories"
    ]
  ],
  [
    "design-06584",
    [
      "&:where(:has(#body-inner)) .tt-pli-categories"
    ]
  ],
  [
    "design-06585",
    [
      "&:where(:has(#body-inner)) .tt-pli-categories"
    ]
  ],
  [
    "design-06586",
    [
      "&:where(:has(#body-inner)) .tt-pli-categories"
    ]
  ],
  [
    "design-06587",
    [
      "&:where(:has(#body-inner)) .tt-pli-categories"
    ]
  ],
  [
    "design-06588",
    [
      "&:where(:has(#body-inner)) .tt-pli-categories"
    ]
  ],
  [
    "design-06589",
    [
      "&:where(:has(#body-inner)) .tt-pli-categories"
    ]
  ],
  [
    "design-06590",
    [
      "&:where(:has(#body-inner)) .tt-pli-category"
    ]
  ],
  [
    "design-06591",
    [
      "&:where(:has(#body-inner)) .tt-pli-category"
    ]
  ],
  [
    "design-06592",
    [
      "&:where(:has(#body-inner)) .tt-pli-category"
    ]
  ],
  [
    "design-06593",
    [
      "&:where(:has(#body-inner)) .tt-pli-category"
    ]
  ],
  [
    "design-06594",
    [
      "&:where(:has(#body-inner)) .tt-pli-category"
    ]
  ],
  [
    "design-06595",
    [
      "&:where(:has(#body-inner)) .tt-pli-category"
    ]
  ],
  [
    "design-06596",
    [
      "&:where(:has(#body-inner)) .tt-pli-category"
    ]
  ],
  [
    "design-06597",
    [
      "&:where(:has(#body-inner)) .tt-pli-category"
    ]
  ],
  [
    "design-06598",
    [
      "&:where(:has(#body-inner)) .tt-pli-category"
    ]
  ],
  [
    "design-06599",
    [
      "&:where(:has(#body-inner)) .tt-pli-category"
    ]
  ],
  [
    "design-06600",
    [
      "&:where(:has(#body-inner)) a.tt-pli-category:hover",
      "&:where(:has(#body-inner)) a.tt-pli-category:focus"
    ]
  ],
  [
    "design-06601",
    [
      "&:where(:has(#body-inner)) a.tt-pli-category:hover",
      "&:where(:has(#body-inner)) a.tt-pli-category:focus"
    ]
  ],
  [
    "design-06602",
    [
      "&:where(:has(#body-inner)) a.tt-pli-category:hover",
      "&:where(:has(#body-inner)) a.tt-pli-category:focus"
    ]
  ],
  [
    "design-06603",
    [
      "&:where(:has(#body-inner)) .tt-pli-description"
    ]
  ],
  [
    "design-06604",
    [
      "&:where(:has(#body-inner)) .tt-pli-description"
    ]
  ],
  [
    "design-06605",
    [
      "&:where(:has(#body-inner)) .tt-pli-description"
    ]
  ],
  [
    "design-06606",
    [
      "&:where(:has(#body-inner)) .tt-pli-description"
    ]
  ],
  [
    "design-06607",
    [
      "&:where(:has(#body-inner)) .tt-pli-image",
      "&:where(:has(#body-inner)) .tt-pli-video"
    ]
  ],
  [
    "design-06608",
    [
      "&:where(:has(#body-inner)) .tt-pli-image",
      "&:where(:has(#body-inner)) .tt-pli-video"
    ]
  ],
  [
    "design-06609",
    [
      "&:where(:has(#body-inner)) .tt-pli-image",
      "&:where(:has(#body-inner)) .tt-pli-video"
    ]
  ],
  [
    "design-06610",
    [
      "&:where(:has(#body-inner)) .tt-pli-image",
      "&:where(:has(#body-inner)) .tt-pli-video"
    ]
  ],
  [
    "design-06611",
    [
      "&:where(:has(#body-inner)) .tt-pli-image img",
      "&:where(:has(#body-inner)) .tt-pli-video video"
    ]
  ],
  [
    "design-06612",
    [
      "&:where(:has(#body-inner)) .tt-pli-image img",
      "&:where(:has(#body-inner)) .tt-pli-video video"
    ]
  ],
  [
    "design-06613",
    [
      "&:where(:has(#body-inner)) .tt-pli-image img",
      "&:where(:has(#body-inner)) .tt-pli-video video"
    ]
  ],
  [
    "design-06614",
    [
      "&:where(:has(#body-inner)) .tt-pli-image img",
      "&:where(:has(#body-inner)) .tt-pli-video video"
    ]
  ],
  [
    "design-06615",
    [
      "&:where(:has(#body-inner)) .tt-pli-image img",
      "&:where(:has(#body-inner)) .tt-pli-video video"
    ]
  ],
  [
    "design-06616",
    [
      "&:where(:has(#body-inner)) .tt-pli-image img",
      "&:where(:has(#body-inner)) .tt-pli-video video"
    ]
  ],
  [
    "design-06617",
    [
      "&:where(:has(#body-inner)) .tt-pli-image img",
      "&:where(:has(#body-inner)) .tt-pli-video video"
    ]
  ],
  [
    "design-06618",
    [
      "&:where(:has(#body-inner)) .tt-pli-image img",
      "&:where(:has(#body-inner)) .tt-pli-video video"
    ]
  ],
  [
    "design-06619",
    [
      "&:where(:has(#body-inner)) .tt-pli-image:hover img"
    ]
  ],
  [
    "design-06620",
    [
      "&:where(:has(#body-inner)) .tt-pli-image-inner",
      "&:where(:has(#body-inner)) .tt-pli-image .tt-image-parallax-wrap",
      "&:where(:has(#body-inner)) .tt-pli-image .tt-image-parallax-inner",
      "&:where(:has(#body-inner)) .tt-pli-image .tt-anim-zoomin",
      "&:where(:has(#body-inner)) .tt-pli-image .tt-anim-zoomin-wrap",
      "&:where(:has(#body-inner)) .tt-pli-video-inner",
      "&:where(:has(#body-inner)) .tt-pli-video .tt-image-parallax-wrap",
      "&:where(:has(#body-inner)) .tt-pli-video .tt-image-parallax-inner",
      "&:where(:has(#body-inner)) .tt-pli-video .tt-anim-zoomin",
      "&:where(:has(#body-inner)) .tt-pli-video .tt-anim-zoomin-wrap"
    ]
  ],
  [
    "design-06621",
    [
      "&:where(:has(#body-inner)) .tt-pl-item.tt-pl-item-portrait .tt-pli-image",
      "&:where(:has(#body-inner)) .tt-pl-item.tt-pl-item-portrait .tt-pli-video"
    ]
  ],
  [
    "design-06622",
    [
      "&:where(:has(#body-inner)) .tt-pl-item.tt-pl-item-landscape .tt-pli-image",
      "&:where(:has(#body-inner)) .tt-pl-item.tt-pl-item-landscape .tt-pli-video"
    ]
  ],
  [
    "design-06623",
    [
      "&:where(:has(#body-inner)) .tt-pl-item.tt-pl-item-square .tt-pli-image",
      "&:where(:has(#body-inner)) .tt-pl-item.tt-pl-item-square .tt-pli-video"
    ]
  ],
  [
    "design-06624",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-list.tt-pli-title-sm .tt-pli-title"
    ]
  ],
  [
    "design-06625",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-list.tt-pli-title-lg .tt-pli-title"
    ]
  ],
  [
    "design-06626",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-list.tt-pli-title-xlg .tt-pli-title"
    ]
  ],
  [
    "design-06627",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-list.tt-pli-title-xxlg .tt-pli-title"
    ]
  ],
  [
    "design-06628",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-list.tt-pli-title-xxlg .tt-pli-title"
    ]
  ],
  [
    "design-06629",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-shifted .tt-pli-inner }"
    ]
  ],
  [
    "design-06630",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline.tt-pl-shifted .tt-pli-inner }"
    ]
  ],
  [
    "design-06631",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline.tt-pl-shifted .tt-pl-item:nth-child(2n+1) .tt-pli-inner }"
    ]
  ],
  [
    "design-06632",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline.tt-pl-shifted .tt-pl-item:nth-child(2n+1) .tt-pli-inner }"
    ]
  ],
  [
    "design-06633",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline.tt-pl-shifted .tt-pl-item:nth-child(2n) .tt-pli-inner }"
    ]
  ],
  [
    "design-06634",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline.tt-pl-shifted .tt-pl-item:nth-child(2n) .tt-pli-inner }"
    ]
  ],
  [
    "design-06635",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline.tt-pl-shifted .tt-pl-item:nth-child(2n) .tt-pli-inner }"
    ]
  ],
  [
    "design-06636",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-wrap .tt-portfolio-list.tt-pl-inline.tt-pl-shifted .tt-pl-item:nth-child(2n+1) .tt-pli-inner }",
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-wrap .tt-portfolio-list.tt-pl-inline.tt-pl-shifted .tt-pl-item:nth-child(2n) .tt-pli-inner }"
    ]
  ],
  [
    "design-06637",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-wrap .tt-portfolio-list.tt-pl-inline.tt-pl-shifted .tt-pl-item:nth-child(2n+1) .tt-pli-inner }",
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-wrap .tt-portfolio-list.tt-pl-inline.tt-pl-shifted .tt-pl-item:nth-child(2n) .tt-pli-inner }"
    ]
  ],
  [
    "design-06638",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline.tt-pl-shifted .tt-pl-item:nth-child(2n) .tt-pli-info-inner }"
    ]
  ],
  [
    "design-06639",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline.tt-pl-shifted .tt-pl-item:nth-child(2n) .tt-pli-info-inner }"
    ]
  ],
  [
    "design-06640",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-shifted .tt-pl-item:nth-child(2n+1) .tt-pli-inner }"
    ]
  ],
  [
    "design-06641",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-shifted .tt-pl-item:nth-child(2n) .tt-pli-inner }"
    ]
  ],
  [
    "design-06642",
    [
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-shifted .tt-pl-item.tt-pl-item-landscape .tt-pli-image }",
      "@media (min-width: 992px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-shifted .tt-pl-item.tt-pl-item-landscape .tt-pli-video }"
    ]
  ],
  [
    "design-06643",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline .tt-pli-item }"
    ]
  ],
  [
    "design-06644",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline .tt-pli-item }"
    ]
  ],
  [
    "design-06645",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline .tt-pli-inner }"
    ]
  ],
  [
    "design-06646",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline .tt-pli-inner }"
    ]
  ],
  [
    "design-06647",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline .tt-wrap .tt-pli-inner }"
    ]
  ],
  [
    "design-06648",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline .tt-pl-item }"
    ]
  ],
  [
    "design-06649",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline .tt-pl-item }"
    ]
  ],
  [
    "design-06650",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline .tt-pl-item }"
    ]
  ],
  [
    "design-06651",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline .tt-pl-item:last-child }"
    ]
  ],
  [
    "design-06652",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline .tt-pl-item:last-child }"
    ]
  ],
  [
    "design-06653",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline .tt-pl-item.tt-pl-item-landscape .tt-pli-image }",
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline .tt-pl-item.tt-pl-item-landscape .tt-pli-video }"
    ]
  ],
  [
    "design-06654",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline .tt-pli-inner }"
    ]
  ],
  [
    "design-06655",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline .tt-pli-col-info }"
    ]
  ],
  [
    "design-06656",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline .tt-pli-col-info }"
    ]
  ],
  [
    "design-06657",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline .tt-pli-categories }"
    ]
  ],
  [
    "design-06658",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline .tt-pli-categories }"
    ]
  ],
  [
    "design-06659",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline .tt-pli-col-image }"
    ]
  ],
  [
    "design-06660",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline .tt-pli-col-image }"
    ]
  ],
  [
    "design-06661",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline .tt-pli-info-inner }"
    ]
  ],
  [
    "design-06662",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline .tt-pli-info-inner }"
    ]
  ],
  [
    "design-06663",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline .tt-pli-info-inner }"
    ]
  ],
  [
    "design-06664",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline .tt-pli-info-inner }"
    ]
  ],
  [
    "design-06665",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline .tt-pli-info-col-caption }"
    ]
  ],
  [
    "design-06666",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline .tt-pli-info-col-caption }"
    ]
  ],
  [
    "design-06667",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline .tt-pli-info-col-caption }"
    ]
  ],
  [
    "design-06668",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline .tt-pli-info-col-caption }"
    ]
  ],
  [
    "design-06669",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline .tt-pli-info-col-text }"
    ]
  ],
  [
    "design-06670",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline .tt-pli-info-col-text }"
    ]
  ],
  [
    "design-06671",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline .tt-pli-info-col-text }"
    ]
  ],
  [
    "design-06672",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline .tt-pli-info-col-text }"
    ]
  ],
  [
    "design-06673",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline .tt-pli-description }"
    ]
  ],
  [
    "design-06674",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline .tt-pli-description }"
    ]
  ],
  [
    "design-06675",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline .tt-pli-description }"
    ]
  ],
  [
    "design-06676",
    [
      "@media (min-width: 769px) { &:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline .tt-pli-description }"
    ]
  ],
  [
    "design-06677",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-list:not(.tt-pl-inline).tt-pl-boxed .tt-pli-inner"
    ]
  ],
  [
    "design-06678",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-list:not(.tt-pl-inline).tt-pl-boxed .tt-pli-inner"
    ]
  ],
  [
    "design-06679",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-list:not(.tt-pl-inline).tt-pl-boxed .tt-pli-inner"
    ]
  ],
  [
    "design-06680",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-list:not(.tt-pl-inline).tt-pl-boxed .tt-pli-inner"
    ]
  ],
  [
    "design-06681",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-list:not(.tt-pl-inline).tt-pl-boxed .tt-pli-inner"
    ]
  ],
  [
    "design-06682",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline.tt-pl-boxed .tt-pli-image",
      "&:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline.tt-pl-boxed .tt-pli-video"
    ]
  ],
  [
    "design-06683",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline.tt-pl-boxed .tt-pli-image",
      "&:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline.tt-pl-boxed .tt-pli-video"
    ]
  ],
  [
    "design-06684",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline.tt-pl-boxed .tt-pli-image",
      "&:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline.tt-pl-boxed .tt-pli-video"
    ]
  ],
  [
    "design-06685",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline.tt-pl-boxed .tt-pli-image",
      "&:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline.tt-pl-boxed .tt-pli-video"
    ]
  ],
  [
    "design-06686",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline.tt-pl-boxed .tt-pli-image",
      "&:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline.tt-pl-boxed .tt-pli-video"
    ]
  ],
  [
    "design-06687",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline.tt-pl-boxed .tt-pli-image-inner",
      "&:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline.tt-pl-boxed .tt-pli-video-inner"
    ]
  ],
  [
    "design-06688",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline.tt-pl-boxed .tt-pli-image-inner",
      "&:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline.tt-pl-boxed .tt-pli-video-inner"
    ]
  ],
  [
    "design-06689",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-list:not(.tt-pl-inline).tt-pl-tilted .tt-pl-item:nth-child(2n+1) .tt-pli-inner",
      "&:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline.tt-pl-tilted .tt-pl-item:nth-child(2n+1) .tt-pli-image",
      "&:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline.tt-pl-tilted .tt-pl-item:nth-child(2n+1) .tt-pli-video"
    ]
  ],
  [
    "design-06690",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-list:not(.tt-pl-inline).tt-pl-tilted .tt-pl-item:nth-child(2n) .tt-pli-inner",
      "&:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline.tt-pl-tilted .tt-pl-item:nth-child(2n) .tt-pli-image",
      "&:where(:has(#body-inner)) .tt-portfolio-list.tt-pl-inline.tt-pl-tilted .tt-pl-item:nth-child(2n) .tt-pli-video"
    ]
  ],
  [
    "design-06691",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-slider"
    ]
  ],
  [
    "design-06692",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-slider"
    ]
  ],
  [
    "design-06693",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-slider .swiper"
    ]
  ],
  [
    "design-06694",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-slider .swiper"
    ]
  ],
  [
    "design-06695",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-slider .swiper"
    ]
  ],
  [
    "design-06696",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-slider .swiper-slide"
    ]
  ],
  [
    "design-06697",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-slider-item"
    ]
  ],
  [
    "design-06698",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-slider-item"
    ]
  ],
  [
    "design-06699",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-slider-item"
    ]
  ],
  [
    "design-06700",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-slider-item"
    ]
  ],
  [
    "design-06701",
    [
      "&:where(:has(#body-inner)) .tt-posl-image-wrap"
    ]
  ],
  [
    "design-06702",
    [
      "&:where(:has(#body-inner)) .tt-posl-image-wrap"
    ]
  ],
  [
    "design-06703",
    [
      "&:where(:has(#body-inner)) .tt-posl-image-wrap"
    ]
  ],
  [
    "design-06704",
    [
      "&:where(:has(#body-inner)) img.tt-posl-image",
      "&:where(:has(#body-inner)) video.tt-posl-video"
    ]
  ],
  [
    "design-06705",
    [
      "&:where(:has(#body-inner)) img.tt-posl-image",
      "&:where(:has(#body-inner)) video.tt-posl-video"
    ]
  ],
  [
    "design-06706",
    [
      "&:where(:has(#body-inner)) img.tt-posl-image",
      "&:where(:has(#body-inner)) video.tt-posl-video"
    ]
  ],
  [
    "design-06707",
    [
      "&:where(:has(#body-inner)) img.tt-posl-image",
      "&:where(:has(#body-inner)) video.tt-posl-video"
    ]
  ],
  [
    "design-06708",
    [
      "&:where(:has(#body-inner)) img.tt-posl-image",
      "&:where(:has(#body-inner)) video.tt-posl-video"
    ]
  ],
  [
    "design-06709",
    [
      "&:where(:has(#body-inner)) img.tt-posl-image",
      "&:where(:has(#body-inner)) video.tt-posl-video"
    ]
  ],
  [
    "design-06710",
    [
      "&:where(:has(#body-inner)) img.tt-posl-image",
      "&:where(:has(#body-inner)) video.tt-posl-video"
    ]
  ],
  [
    "design-06711",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-caption"
    ]
  ],
  [
    "design-06712",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-caption"
    ]
  ],
  [
    "design-06713",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-caption"
    ]
  ],
  [
    "design-06714",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-caption"
    ]
  ],
  [
    "design-06715",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-caption"
    ]
  ],
  [
    "design-06716",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-caption"
    ]
  ],
  [
    "design-06717",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-caption"
    ]
  ],
  [
    "design-06718",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-caption"
    ]
  ],
  [
    "design-06719",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-caption"
    ]
  ],
  [
    "design-06720",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-caption"
    ]
  ],
  [
    "design-06721",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-caption-inner"
    ]
  ],
  [
    "design-06722",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-caption-inner"
    ]
  ],
  [
    "design-06723",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-caption-inner"
    ]
  ],
  [
    "design-06724",
    [
      "&:where(:has(#body-inner)) .swiper-slide-prev .tt-posl-item-caption-inner",
      "&:where(:has(#body-inner)) .swiper-slide-next .tt-posl-item-caption-inner"
    ]
  ],
  [
    "design-06725",
    [
      "&:where(:has(#body-inner)) .swiper-slide-prev .tt-posl-item-caption-inner",
      "&:where(:has(#body-inner)) .swiper-slide-next .tt-posl-item-caption-inner"
    ]
  ],
  [
    "design-06726",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-title"
    ]
  ],
  [
    "design-06727",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-title"
    ]
  ],
  [
    "design-06728",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-title"
    ]
  ],
  [
    "design-06729",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-title"
    ]
  ],
  [
    "design-06730",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-title"
    ]
  ],
  [
    "design-06731",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-title"
    ]
  ],
  [
    "design-06732",
    [
      "@media (max-width: 414px) { &:where(:has(#body-inner)) .tt-posl-item-title }"
    ]
  ],
  [
    "design-06733",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-title a"
    ]
  ],
  [
    "design-06734",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-title a"
    ]
  ],
  [
    "design-06735",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-title a"
    ]
  ],
  [
    "design-06736",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-categories-wrap"
    ]
  ],
  [
    "design-06737",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-categories-wrap"
    ]
  ],
  [
    "design-06738",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-categories-wrap"
    ]
  ],
  [
    "design-06739",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-categories-wrap"
    ]
  ],
  [
    "design-06740",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-categories-wrap"
    ]
  ],
  [
    "design-06741",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-categories-wrap"
    ]
  ],
  [
    "design-06742",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-categories-wrap"
    ]
  ],
  [
    "design-06743",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-categories-wrap"
    ]
  ],
  [
    "design-06744",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-category"
    ]
  ],
  [
    "design-06745",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-category"
    ]
  ],
  [
    "design-06746",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-category"
    ]
  ],
  [
    "design-06747",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-category"
    ]
  ],
  [
    "design-06748",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-category"
    ]
  ],
  [
    "design-06749",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-category"
    ]
  ],
  [
    "design-06750",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-category"
    ]
  ],
  [
    "design-06751",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-category"
    ]
  ],
  [
    "design-06752",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-category"
    ]
  ],
  [
    "design-06753",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-category"
    ]
  ],
  [
    "design-06754",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-category:hover",
      "&:where(:has(#body-inner)) .tt-posl-item-category:focus"
    ]
  ],
  [
    "design-06755",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-category:hover",
      "&:where(:has(#body-inner)) .tt-posl-item-category:focus"
    ]
  ],
  [
    "design-06756",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-category ~ .tt-posl-item-category ~ .tt-posl-item-category ~ .tt-posl-item-category"
    ]
  ],
  [
    "design-06757",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-category ~ .tt-posl-item-category ~ .tt-posl-item-category ~ .tt-posl-item-category"
    ]
  ],
  [
    "design-06758",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-category ~ .tt-posl-item-category ~ .tt-posl-item-category ~ .tt-posl-item-category ~ .tt-posl-item-category"
    ]
  ],
  [
    "design-06759",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-category + .tt-posl-item-category + .tt-posl-item-category + .tt-posl-item-category::before"
    ]
  ],
  [
    "design-06760",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-category + .tt-posl-item-category + .tt-posl-item-category + .tt-posl-item-category::before"
    ]
  ],
  [
    "design-06761",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-category + .tt-posl-item-category + .tt-posl-item-category + .tt-posl-item-category::before"
    ]
  ],
  [
    "design-06762",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-category + .tt-posl-item-category + .tt-posl-item-category + .tt-posl-item-category::before"
    ]
  ],
  [
    "design-06763",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-category + .tt-posl-item-category + .tt-posl-item-category + .tt-posl-item-category::before"
    ]
  ],
  [
    "design-06764",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-category + .tt-posl-item-category + .tt-posl-item-category + .tt-posl-item-category::before"
    ]
  ],
  [
    "design-06765",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-category + .tt-posl-item-category + .tt-posl-item-category + .tt-posl-item-category::before"
    ]
  ],
  [
    "design-06766",
    [
      "&:where(:has(#body-inner)) .tt-posl-item-category + .tt-posl-item-category + .tt-posl-item-category + .tt-posl-item-category::before"
    ]
  ],
  [
    "design-06767",
    [
      "&:where(:has(#body-inner)) .tt-posl-nav-prev",
      "&:where(:has(#body-inner)) .tt-posl-nav-next"
    ]
  ],
  [
    "design-06768",
    [
      "&:where(:has(#body-inner)) .tt-posl-nav-prev",
      "&:where(:has(#body-inner)) .tt-posl-nav-next"
    ]
  ],
  [
    "design-06769",
    [
      "&:where(:has(#body-inner)) .tt-posl-nav-prev",
      "&:where(:has(#body-inner)) .tt-posl-nav-next"
    ]
  ],
  [
    "design-06770",
    [
      "&:where(:has(#body-inner)) .tt-posl-nav-prev:focus",
      "&:where(:has(#body-inner)) .tt-posl-nav-next:focus"
    ]
  ],
  [
    "design-06771",
    [
      "&:where(:has(#body-inner)) .tt-posl-nav-prev:focus",
      "&:where(:has(#body-inner)) .tt-posl-nav-next:focus"
    ]
  ],
  [
    "design-06772",
    [
      "&:where(:has(#body-inner)) .tt-posl-nav-prev"
    ]
  ],
  [
    "design-06773",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-posl-nav-prev }"
    ]
  ],
  [
    "design-06774",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-posl-nav-prev }"
    ]
  ],
  [
    "design-06775",
    [
      "&:where(:has(#body-inner)) .tt-posl-nav-next"
    ]
  ],
  [
    "design-06776",
    [
      "&:where(:has(#body-inner)) .tt-posl-nav-arrow"
    ]
  ],
  [
    "design-06777",
    [
      "&:where(:has(#body-inner)) .tt-posl-nav-arrow"
    ]
  ],
  [
    "design-06778",
    [
      "&:where(:has(#body-inner)) .tt-posl-nav-arrow"
    ]
  ],
  [
    "design-06779",
    [
      "&:where(:has(#body-inner)) .tt-posl-nav-arrow"
    ]
  ],
  [
    "design-06780",
    [
      "&:where(:has(#body-inner)) .tt-posl-nav-arrow"
    ]
  ],
  [
    "design-06781",
    [
      "&:where(:has(#body-inner)) .tt-posl-nav-arrow"
    ]
  ],
  [
    "design-06782",
    [
      "&:where(:has(#body-inner)) .tt-posl-nav-arrow"
    ]
  ],
  [
    "design-06783",
    [
      "&:where(:has(#body-inner)) .tt-posl-nav-arrow"
    ]
  ],
  [
    "design-06784",
    [
      "&:where(:has(#body-inner)) .tt-posl-nav-arrow"
    ]
  ],
  [
    "design-06785",
    [
      "&:where(:has(#body-inner)) .tt-posl-nav-arrow"
    ]
  ],
  [
    "design-06786",
    [
      "&:where(:has(#body-inner)) .tt-posl-nav-arrow"
    ]
  ],
  [
    "design-06787",
    [
      "&:where(:has(#body-inner)) .tt-posl-nav-arrow"
    ]
  ],
  [
    "design-06788",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-posl-nav-arrow }"
    ]
  ],
  [
    "design-06789",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-posl-nav-arrow }"
    ]
  ],
  [
    "design-06790",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-posl-nav-arrow }"
    ]
  ],
  [
    "design-06791",
    [
      "&:where(:has(#body-inner)) .tt-posl-nav-arrow-disabled"
    ]
  ],
  [
    "design-06792",
    [
      "&:where(:has(#body-inner)) .tt-posl-nav-arrow svg"
    ]
  ],
  [
    "design-06793",
    [
      "&:where(:has(#body-inner)) .tt-posl-nav-arrow svg"
    ]
  ],
  [
    "design-06794",
    [
      "&:where(:has(#body-inner)) .tt-posl-nav-prev .tt-posl-nav-arrow svg"
    ]
  ],
  [
    "design-06795",
    [
      "&:where(:has(#body-inner)) .tt-posl-nav-next .tt-posl-nav-arrow svg"
    ]
  ],
  [
    "design-06796",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-slider[data-direction=\"horizontal\"] .tt-posl-nav-prev .tt-posl-nav-arrow svg"
    ]
  ],
  [
    "design-06797",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-slider[data-direction=\"horizontal\"] .tt-posl-nav-next .tt-posl-nav-arrow svg"
    ]
  ],
  [
    "design-06798",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination"
    ]
  ],
  [
    "design-06799",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination"
    ]
  ],
  [
    "design-06800",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination"
    ]
  ],
  [
    "design-06801",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination"
    ]
  ],
  [
    "design-06802",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination"
    ]
  ],
  [
    "design-06803",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination"
    ]
  ],
  [
    "design-06804",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination"
    ]
  ],
  [
    "design-06805",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination .swiper-pagination-bullets"
    ]
  ],
  [
    "design-06806",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination .swiper-pagination-bullet"
    ]
  ],
  [
    "design-06807",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination .swiper-pagination-bullet"
    ]
  ],
  [
    "design-06808",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination .swiper-pagination-bullet"
    ]
  ],
  [
    "design-06809",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination .swiper-pagination-bullet"
    ]
  ],
  [
    "design-06810",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination .swiper-pagination-bullet"
    ]
  ],
  [
    "design-06811",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination .swiper-pagination-bullet"
    ]
  ],
  [
    "design-06812",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination .swiper-pagination-bullet"
    ]
  ],
  [
    "design-06813",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination .swiper-pagination-bullet"
    ]
  ],
  [
    "design-06814",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination .swiper-pagination-bullet"
    ]
  ],
  [
    "design-06815",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination .swiper-pagination-bullet"
    ]
  ],
  [
    "design-06816",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination .swiper-pagination-bullet-active"
    ]
  ],
  [
    "design-06817",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination .swiper-pagination-bullet-active"
    ]
  ],
  [
    "design-06818",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination .swiper-pagination-bullet-active"
    ]
  ],
  [
    "design-06819",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination-bullets-dynamic"
    ]
  ],
  [
    "design-06820",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination-bullets-dynamic"
    ]
  ],
  [
    "design-06821",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination-bullets-dynamic"
    ]
  ],
  [
    "design-06822",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination-bullets-dynamic"
    ]
  ],
  [
    "design-06823",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination-bullets-dynamic .swiper-pagination-bullet"
    ]
  ],
  [
    "design-06824",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination-bullets-dynamic .swiper-pagination-bullet"
    ]
  ],
  [
    "design-06825",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination-bullets-dynamic .swiper-pagination-bullet"
    ]
  ],
  [
    "design-06826",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination-bullets-dynamic .swiper-pagination-bullet"
    ]
  ],
  [
    "design-06827",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination-bullets-dynamic .swiper-pagination-bullet"
    ]
  ],
  [
    "design-06828",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination-bullets-dynamic .swiper-pagination-bullet"
    ]
  ],
  [
    "design-06829",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev"
    ]
  ],
  [
    "design-06830",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev"
    ]
  ],
  [
    "design-06831",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination-bullets-dynamic .swiper-pagination-bullet-active-next"
    ]
  ],
  [
    "design-06832",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next"
    ]
  ],
  [
    "design-06833",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination-bullets-dynamic .swiper-pagination-bullet-active-main"
    ]
  ],
  [
    "design-06834",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination-fraction"
    ]
  ],
  [
    "design-06835",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination-fraction"
    ]
  ],
  [
    "design-06836",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination-fraction"
    ]
  ],
  [
    "design-06837",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination-progressbar"
    ]
  ],
  [
    "design-06838",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination-progressbar"
    ]
  ],
  [
    "design-06839",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination-progressbar"
    ]
  ],
  [
    "design-06840",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination-progressbar"
    ]
  ],
  [
    "design-06841",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-posl-pagination-progressbar }"
    ]
  ],
  [
    "design-06842",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-06843",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-06844",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-06845",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-06846",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-06847",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-06848",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-06849",
    [
      "&:where(:has(#body-inner)) .tt-posl-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-06850",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-slider .tt-social-buttons"
    ]
  ],
  [
    "design-06851",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-slider .tt-social-buttons"
    ]
  ],
  [
    "design-06852",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-slider .tt-social-buttons"
    ]
  ],
  [
    "design-06853",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-slider .tt-social-buttons"
    ]
  ],
  [
    "design-06854",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-portfolio-slider .tt-social-buttons }"
    ]
  ],
  [
    "design-06855",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-slider .tt-social-buttons > ul"
    ]
  ],
  [
    "design-06856",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-slider .tt-social-buttons > ul > li a"
    ]
  ],
  [
    "design-06857",
    [
      "@media (max-width: 1600px) { &:where(:has(#body-inner)) .tt-portfolio-slider .tt-social-buttons > ul > li a }"
    ]
  ],
  [
    "design-06858",
    [
      "@media (max-width: 1600px) { &:where(:has(#body-inner)) .tt-portfolio-slider .tt-social-buttons > ul > li a }"
    ]
  ],
  [
    "design-06859",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-portfolio-slider .tt-btn }"
    ]
  ],
  [
    "design-06860",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-portfolio-slider .tt-btn }"
    ]
  ],
  [
    "design-06861",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-portfolio-slider .tt-btn }"
    ]
  ],
  [
    "design-06862",
    [
      "&:where(:has(#body-inner)) body.tt-posl-vertical-on #ball .ball-drag-mouse-down-inner"
    ]
  ],
  [
    "design-06863",
    [
      "&:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on):not(.tt-m-menu-active) #tt-header:not(.tt-filled)"
    ]
  ],
  [
    "design-06864",
    [
      "&:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on):not(.tt-m-menu-active) #tt-header:not(.tt-filled) .tt-logo-light"
    ]
  ],
  [
    "design-06865",
    [
      "&:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on):not(.tt-m-menu-active) #tt-header:not(.tt-filled) .tt-logo-dark"
    ]
  ],
  [
    "design-06866",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on) #tt-header:not(.tt-filled) .tt-main-menu-list > li > a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on) #tt-header:not(.tt-filled) .tt-main-menu-list > li > .tt-submenu-trigger > a }"
    ]
  ],
  [
    "design-06867",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on) #tt-header:not(.tt-filled) .tt-submenu-master > .tt-submenu-trigger > a::after }"
    ]
  ],
  [
    "design-06868",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on) #tt-header:not(.tt-filled) .tt-main-menu-list > li.active > a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on) #tt-header:not(.tt-filled) .tt-main-menu-list > li.active > .tt-submenu-trigger > a }"
    ]
  ],
  [
    "design-06869",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on) #tt-header:not(.tt-filled) .tt-main-menu-list > li.active > a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on) #tt-header:not(.tt-filled) .tt-main-menu-list > li.active > .tt-submenu-trigger > a }"
    ]
  ],
  [
    "design-06870",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on) #tt-header:not(.tt-filled) .tt-main-menu-list > li > a:hover }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on) #tt-header:not(.tt-filled) .tt-main-menu-list > li > .tt-submenu-trigger > a:hover }"
    ]
  ],
  [
    "design-06871",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on) #tt-header:not(.tt-filled) .tt-main-menu-list > li > a:hover }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on) #tt-header:not(.tt-filled) .tt-main-menu-list > li > .tt-submenu-trigger > a:hover }"
    ]
  ],
  [
    "design-06872",
    [
      "&:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on):not(.tt-m-menu-active) #tt-header:not(.tt-filled) .tt-m-menu-toggle-btn-text"
    ]
  ],
  [
    "design-06873",
    [
      "&:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on):not(.tt-m-menu-active) #tt-header:not(.tt-filled) .tt-m-menu-toggle-btn span::before",
      "&:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on):not(.tt-m-menu-active) #tt-header:not(.tt-filled) .tt-m-menu-toggle-btn span::after"
    ]
  ],
  [
    "design-06874",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on) #tt-header:not(.tt-filled) .tt-btn-secondary }"
    ]
  ],
  [
    "design-06875",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on) #tt-header:not(.tt-filled) .tt-btn-secondary > * }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on) #tt-header:not(.tt-filled) .tt-btn-secondary > ::after }"
    ]
  ],
  [
    "design-06876",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on) #tt-header:not(.tt-filled) .tt-btn-outline }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.ph-video-on.tt-ph-visible:not(.tt-posl-light-bg-on) #tt-header:not(.tt-filled) .tt-btn-outline }"
    ]
  ],
  [
    "design-06877",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on) #tt-header:not(.tt-filled) .tt-btn-outline > * }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on) #tt-header:not(.tt-filled) .tt-btn-outline > ::after }"
    ]
  ],
  [
    "design-06878",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on) #tt-header:not(.tt-filled) .tt-btn-link > * }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on) #tt-header:not(.tt-filled) .tt-btn-link > ::after }"
    ]
  ],
  [
    "design-06879",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on) #tt-header:not(.tt-filled) .tt-btn-line }"
    ]
  ],
  [
    "design-06880",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on) #tt-header:not(.tt-filled) .tt-style-switch svg }"
    ]
  ],
  [
    "design-06881",
    [
      "&:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on) .tt-btn-secondary"
    ]
  ],
  [
    "design-06882",
    [
      "&:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on) .tt-btn-secondary > *",
      "&:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on) .tt-btn-secondary > ::after"
    ]
  ],
  [
    "design-06883",
    [
      "&:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on) .tt-btn-outline"
    ]
  ],
  [
    "design-06884",
    [
      "&:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on) .tt-btn-outline > *",
      "&:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on) .tt-btn-outline > ::after"
    ]
  ],
  [
    "design-06885",
    [
      "&:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on) .tt-big-round-ptn-inner"
    ]
  ],
  [
    "design-06886",
    [
      "&:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on) .tt-btn-link > *",
      "&:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on) .tt-btn-link > ::after"
    ]
  ],
  [
    "design-06887",
    [
      "&:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-posl-light-bg-on) .tt-btn-line"
    ]
  ],
  [
    "design-06888",
    [
      "&:where(:has(#body-inner)) body.tt-posl-light-bg-on:not(.tt-m-menu-active) #tt-header:not(.tt-filled)"
    ]
  ],
  [
    "design-06889",
    [
      "&:where(:has(#body-inner)) body.tt-posl-light-bg-on:not(.tt-m-menu-active) #tt-header:not(.tt-filled) .tt-logo-light"
    ]
  ],
  [
    "design-06890",
    [
      "&:where(:has(#body-inner)) body.tt-posl-light-bg-on:not(.tt-m-menu-active) #tt-header:not(.tt-filled) .tt-logo-dark"
    ]
  ],
  [
    "design-06891",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-posl-light-bg-on #tt-header:not(.tt-filled) .tt-main-menu-list > li > a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-posl-light-bg-on #tt-header:not(.tt-filled) .tt-main-menu-list > li > .tt-submenu-trigger > a }"
    ]
  ],
  [
    "design-06892",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-posl-light-bg-on #tt-header:not(.tt-filled) .tt-submenu-master > .tt-submenu-trigger > a::after }"
    ]
  ],
  [
    "design-06893",
    [
      "&:where(:has(#body-inner)) body.tt-posl-light-bg-on:not(.tt-m-menu-active) #tt-header:not(.tt-filled) .tt-m-menu-toggle-btn-text"
    ]
  ],
  [
    "design-06894",
    [
      "&:where(:has(#body-inner)) body.tt-posl-light-bg-on:not(.tt-m-menu-active) #tt-header:not(.tt-filled) .tt-m-menu-toggle-btn span::before",
      "&:where(:has(#body-inner)) body.tt-posl-light-bg-on:not(.tt-m-menu-active) #tt-header:not(.tt-filled) .tt-m-menu-toggle-btn span::after"
    ]
  ],
  [
    "design-06895",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-posl-light-bg-on #tt-header:not(.tt-filled) .tt-btn-secondary }"
    ]
  ],
  [
    "design-06896",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-posl-light-bg-on #tt-header:not(.tt-filled) .tt-btn-secondary > * }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-posl-light-bg-on #tt-header:not(.tt-filled) .tt-btn-secondary > ::after }"
    ]
  ],
  [
    "design-06897",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-posl-light-bg-on #tt-header:not(.tt-filled) .tt-btn-outline }"
    ]
  ],
  [
    "design-06898",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-posl-light-bg-on #tt-header:not(.tt-filled) .tt-btn-outline > * }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-posl-light-bg-on #tt-header:not(.tt-filled) .tt-btn-outline > ::after }"
    ]
  ],
  [
    "design-06899",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-posl-light-bg-on #tt-header:not(.tt-filled) .tt-btn-link > * }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-posl-light-bg-on #tt-header:not(.tt-filled) .tt-btn-link > ::after }"
    ]
  ],
  [
    "design-06900",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-posl-light-bg-on #tt-header:not(.tt-filled) .tt-btn-line }"
    ]
  ],
  [
    "design-06901",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-posl-light-bg-on #tt-header:not(.tt-filled) .tt-style-switch svg }"
    ]
  ],
  [
    "design-06902",
    [
      "&:where(:has(#body-inner)) body.tt-posl-light-bg-on .tt-portfolio-slider",
      "&:where(:has(#body-inner)) body.tt-posl-light-bg-on .tt-portfolio-slider a",
      "&:where(:has(#body-inner)) body.tt-posl-light-bg-on .tt-posl-item-title",
      "&:where(:has(#body-inner)) body.tt-posl-light-bg-on .tt-posl-item-title a",
      "&:where(:has(#body-inner)) body.tt-posl-light-bg-on .tt-posl-item-category",
      "&:where(:has(#body-inner)) body.tt-posl-light-bg-on .tt-posl-item-category a",
      "&:where(:has(#body-inner)) body.tt-posl-light-bg-on .tt-posl-item-category + .tt-posl-item-category + .tt-posl-item-category + .tt-posl-item-category::before",
      "&:where(:has(#body-inner)) body.tt-posl-light-bg-on .tt-portfolio-slider .tt-social-buttons > ul > li a",
      "&:where(:has(#body-inner)) body.tt-posl-light-bg-on .tt-posl-nav-arrow",
      "&:where(:has(#body-inner)) body.tt-posl-light-bg-on .tt-posl-pagination"
    ]
  ],
  [
    "design-06903",
    [
      "&:where(:has(#body-inner)) body.tt-posl-light-bg-on .tt-posl-pagination-fraction .swiper-pagination-total::before",
      "&:where(:has(#body-inner)) body.tt-posl-light-bg-on .tt-posl-pagination .swiper-pagination-bullet:not(.swiper-pagination-bullet-active)",
      "&:where(:has(#body-inner)) body.tt-posl-light-bg-on .tt-posl-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-06904",
    [
      "&:where(:has(#body-inner)) body.tt-posl-light-bg-on .tt-posl-nav-arrow"
    ]
  ],
  [
    "design-06905",
    [
      "&:where(:has(#body-inner)) body.tt-posl-light-bg-on .tt-posl-nav-arrow svg"
    ]
  ],
  [
    "design-06906",
    [
      "&:where(:has(#body-inner)) body.tt-posl-light-bg-on .tt-portfolio-slider .tt-btn-secondary"
    ]
  ],
  [
    "design-06907",
    [
      "&:where(:has(#body-inner)) body.tt-posl-light-bg-on .tt-portfolio-slider .tt-btn-secondary > *",
      "&:where(:has(#body-inner)) body.tt-posl-light-bg-on .tt-portfolio-slider .tt-btn-secondary > ::after"
    ]
  ],
  [
    "design-06908",
    [
      "&:where(:has(#body-inner)) body.tt-posl-light-bg-on .tt-portfolio-slider .tt-btn-outline"
    ]
  ],
  [
    "design-06909",
    [
      "&:where(:has(#body-inner)) body.tt-posl-light-bg-on .tt-portfolio-slider .tt-btn-outline > *",
      "&:where(:has(#body-inner)) body.tt-posl-light-bg-on .tt-portfolio-slider .tt-btn-outline > ::after"
    ]
  ],
  [
    "design-06910",
    [
      "&:where(:has(#body-inner)) body.tt-posl-light-bg-on .tt-portfolio-slider .tt-big-round-ptn-inner"
    ]
  ],
  [
    "design-06911",
    [
      "&:where(:has(#body-inner)) body.tt-posl-light-bg-on .tt-portfolio-slider .tt-big-round-ptn-inner:hover",
      "&:where(:has(#body-inner)) body.tt-posl-light-bg-on .tt-portfolio-slider .tt-big-round-ptn-inner:focus"
    ]
  ],
  [
    "design-06912",
    [
      "&:where(:has(#body-inner)) body.tt-posl-light-bg-on .tt-portfolio-slider .tt-btn-link > *",
      "&:where(:has(#body-inner)) body.tt-posl-light-bg-on .tt-portfolio-slider .tt-btn-link > ::after"
    ]
  ],
  [
    "design-06913",
    [
      "&:where(:has(#body-inner)) body.tt-posl-light-bg-on .tt-portfolio-slider .tt-btn-line"
    ]
  ],
  [
    "design-06914",
    [
      "&:where(:has(#body-inner)) body.tt-posl-light-bg-on #ball.ball-drag-mouse-down"
    ]
  ],
  [
    "design-06915",
    [
      "&:where(:has(#body-inner)) body.tt-posl-light-bg-on #ball .ball-drag-mouse-down-inner"
    ]
  ],
  [
    "design-06916",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards"
    ]
  ],
  [
    "design-06917",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards"
    ]
  ],
  [
    "design-06918",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards"
    ]
  ],
  [
    "design-06919",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards"
    ]
  ],
  [
    "design-06920",
    [
      "&:where(:has(#body-inner)) .tt-portf-card"
    ]
  ],
  [
    "design-06921",
    [
      "&:where(:has(#body-inner)) .tt-portf-card"
    ]
  ],
  [
    "design-06922",
    [
      "&:where(:has(#body-inner)) .tt-portf-card"
    ]
  ],
  [
    "design-06923",
    [
      "&:where(:has(#body-inner)) .tt-portf-card"
    ]
  ],
  [
    "design-06924",
    [
      "&:where(:has(#body-inner)) .tt-portf-card"
    ]
  ],
  [
    "design-06925",
    [
      "&:where(:has(#body-inner)) .tt-portf-card:last-child"
    ]
  ],
  [
    "design-06926",
    [
      "&:where(:has(#body-inner)) .tt-pcard-image"
    ]
  ],
  [
    "design-06927",
    [
      "&:where(:has(#body-inner)) .tt-pcard-image"
    ]
  ],
  [
    "design-06928",
    [
      "&:where(:has(#body-inner)) .tt-pcard-image"
    ]
  ],
  [
    "design-06929",
    [
      "&:where(:has(#body-inner)) .tt-pcard-image"
    ]
  ],
  [
    "design-06930",
    [
      "&:where(:has(#body-inner)) .tt-pcard-image"
    ]
  ],
  [
    "design-06931",
    [
      "&:where(:has(#body-inner)) .tt-pcard-image img"
    ]
  ],
  [
    "design-06932",
    [
      "&:where(:has(#body-inner)) .tt-pcard-image img"
    ]
  ],
  [
    "design-06933",
    [
      "&:where(:has(#body-inner)) .tt-pcard-image img"
    ]
  ],
  [
    "design-06934",
    [
      "&:where(:has(#body-inner)) .tt-pcard-image img"
    ]
  ],
  [
    "design-06935",
    [
      "&:where(:has(#body-inner)) .tt-pcard-image img"
    ]
  ],
  [
    "design-06936",
    [
      "&:where(:has(#body-inner)) .tt-portf-card:nth-child(1)"
    ]
  ],
  [
    "design-06937",
    [
      "&:where(:has(#body-inner)) .tt-portf-card:nth-child(1)"
    ]
  ],
  [
    "design-06938",
    [
      "&:where(:has(#body-inner)) .tt-portf-card:nth-child(1)"
    ]
  ],
  [
    "design-06939",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards:hover .tt-portf-card:nth-child(1)"
    ]
  ],
  [
    "design-06940",
    [
      "&:where(:has(#body-inner)) .tt-portf-card:nth-child(2)"
    ]
  ],
  [
    "design-06941",
    [
      "&:where(:has(#body-inner)) .tt-portf-card:nth-child(2)"
    ]
  ],
  [
    "design-06942",
    [
      "&:where(:has(#body-inner)) .tt-portf-card:nth-child(2)"
    ]
  ],
  [
    "design-06943",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards:hover .tt-portf-card:nth-child(2)"
    ]
  ],
  [
    "design-06944",
    [
      "&:where(:has(#body-inner)) .tt-pcard-info"
    ]
  ],
  [
    "design-06945",
    [
      "&:where(:has(#body-inner)) .tt-pcard-info"
    ]
  ],
  [
    "design-06946",
    [
      "&:where(:has(#body-inner)) .tt-pcard-title"
    ]
  ],
  [
    "design-06947",
    [
      "&:where(:has(#body-inner)) .tt-pcard-title"
    ]
  ],
  [
    "design-06948",
    [
      "&:where(:has(#body-inner)) .tt-pcard-title"
    ]
  ],
  [
    "design-06949",
    [
      "&:where(:has(#body-inner)) .tt-pcard-title"
    ]
  ],
  [
    "design-06950",
    [
      "&:where(:has(#body-inner)) .tt-pcard-title"
    ]
  ],
  [
    "design-06951",
    [
      "&:where(:has(#body-inner)) .tt-pcard-title"
    ]
  ],
  [
    "design-06952",
    [
      "&:where(:has(#body-inner)) .tt-pcard-title"
    ]
  ],
  [
    "design-06953",
    [
      "&:where(:has(#body-inner)) .tt-pcard-title"
    ]
  ],
  [
    "design-06954",
    [
      "&:where(:has(#body-inner)) .tt-pcard-title"
    ]
  ],
  [
    "design-06955",
    [
      "&:where(:has(#body-inner)) .tt-pcard-icon"
    ]
  ],
  [
    "design-06956",
    [
      "&:where(:has(#body-inner)) .tt-pcard-icon"
    ]
  ],
  [
    "design-06957",
    [
      "&:where(:has(#body-inner)) .tt-pcard-icon"
    ]
  ],
  [
    "design-06958",
    [
      "&:where(:has(#body-inner)) .tt-pcard-icon"
    ]
  ],
  [
    "design-06959",
    [
      "&:where(:has(#body-inner)) .tt-pcard-icon"
    ]
  ],
  [
    "design-06960",
    [
      "&:where(:has(#body-inner)) .tt-pcard-icon"
    ]
  ],
  [
    "design-06961",
    [
      "&:where(:has(#body-inner)) .tt-pcard-icon"
    ]
  ],
  [
    "design-06962",
    [
      "&:where(:has(#body-inner)) .tt-pcard-icon"
    ]
  ],
  [
    "design-06963",
    [
      "&:where(:has(#body-inner)) .tt-pcard-icon"
    ]
  ],
  [
    "design-06964",
    [
      "&:where(:has(#body-inner)) .tt-pcard-icon"
    ]
  ],
  [
    "design-06965",
    [
      "&:where(:has(#body-inner)) .tt-pcard-icon"
    ]
  ],
  [
    "design-06966",
    [
      "&:where(:has(#body-inner)) .tt-pcard-icon"
    ]
  ],
  [
    "design-06967",
    [
      "&:where(:has(#body-inner)) .tt-pcard-icon"
    ]
  ],
  [
    "design-06968",
    [
      "&:where(:has(#body-inner)) .tt-pcard-icon svg"
    ]
  ],
  [
    "design-06969",
    [
      "&:where(:has(#body-inner)) .tt-pcard-icon svg"
    ]
  ],
  [
    "design-06970",
    [
      "&:where(:has(#body-inner)) .tt-pcard-icon svg"
    ]
  ],
  [
    "design-06971",
    [
      "&:where(:has(#body-inner)) .tt-pcard-icon svg"
    ]
  ],
  [
    "design-06972",
    [
      "&:where(:has(#body-inner)) .tt-pcard-categories"
    ]
  ],
  [
    "design-06973",
    [
      "&:where(:has(#body-inner)) .tt-pcard-categories"
    ]
  ],
  [
    "design-06974",
    [
      "&:where(:has(#body-inner)) .tt-pcard-categories"
    ]
  ],
  [
    "design-06975",
    [
      "&:where(:has(#body-inner)) .tt-pcard-categories"
    ]
  ],
  [
    "design-06976",
    [
      "&:where(:has(#body-inner)) .tt-pcard-categories"
    ]
  ],
  [
    "design-06977",
    [
      "&:where(:has(#body-inner)) .tt-pcard-categories"
    ]
  ],
  [
    "design-06978",
    [
      "&:where(:has(#body-inner)) .tt-pcard-categories"
    ]
  ],
  [
    "design-06979",
    [
      "&:where(:has(#body-inner)) .tt-pcard-category"
    ]
  ],
  [
    "design-06980",
    [
      "&:where(:has(#body-inner)) .tt-pcard-category"
    ]
  ],
  [
    "design-06981",
    [
      "&:where(:has(#body-inner)) .tt-pcard-category"
    ]
  ],
  [
    "design-06982",
    [
      "&:where(:has(#body-inner)) .tt-pcard-category"
    ]
  ],
  [
    "design-06983",
    [
      "&:where(:has(#body-inner)) .tt-pcard-category"
    ]
  ],
  [
    "design-06984",
    [
      "&:where(:has(#body-inner)) .tt-pcard-category"
    ]
  ],
  [
    "design-06985",
    [
      "&:where(:has(#body-inner)) .tt-pcard-category"
    ]
  ],
  [
    "design-06986",
    [
      "&:where(:has(#body-inner)) .tt-pcard-category"
    ]
  ],
  [
    "design-06987",
    [
      "&:where(:has(#body-inner)) .tt-pcard-category"
    ]
  ],
  [
    "design-06988",
    [
      "&:where(:has(#body-inner)) .tt-pcard-category"
    ]
  ],
  [
    "design-06989",
    [
      "&:where(:has(#body-inner)) .tt-pcard-category"
    ]
  ],
  [
    "design-06990",
    [
      "&:where(:has(#body-inner)) .tt-pcard-category"
    ]
  ],
  [
    "design-06991",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards.tt-pcard-boxed .tt-portf-card"
    ]
  ],
  [
    "design-06992",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards.tt-pcard-boxed .tt-portf-card"
    ]
  ],
  [
    "design-06993",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards.tt-pcard-boxed .tt-portf-card"
    ]
  ],
  [
    "design-06994",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards.tt-pcard-boxed .tt-portf-card"
    ]
  ],
  [
    "design-06995",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards.tt-pcard-boxed .tt-portf-card"
    ]
  ],
  [
    "design-06996",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards.tt-pcard-boxed .tt-portf-card"
    ]
  ],
  [
    "design-06997",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards.tt-pcard-boxed .tt-portf-card"
    ]
  ],
  [
    "design-06998",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards.tt-pcard-boxed .tt-portf-card"
    ]
  ],
  [
    "design-06999",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards.tt-pcard-boxed .tt-portf-card"
    ]
  ],
  [
    "design-07000",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards.tt-pcard-boxed .tt-portf-card"
    ]
  ],
  [
    "design-07001",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards.tt-pcard-boxed .tt-pcard-title"
    ]
  ],
  [
    "design-07002",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards.tt-pcard-boxed .tt-pcard-icon"
    ]
  ],
  [
    "design-07003",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards.tt-pcard-boxed .tt-pcard-icon"
    ]
  ],
  [
    "design-07004",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards.tt-pcard-boxed .tt-pcard-icon"
    ]
  ],
  [
    "design-07005",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards.tt-pcard-boxed .tt-pcard-icon"
    ]
  ],
  [
    "design-07006",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards.tt-pcard-boxed .tt-pcard-icon"
    ]
  ],
  [
    "design-07007",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards.tt-pcard-boxed .tt-pcard-icon"
    ]
  ],
  [
    "design-07008",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards.tt-pcard-boxed .tt-pcard-icon svg"
    ]
  ],
  [
    "design-07009",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards:not(.tt-pcard-boxed) .tt-pcard-image"
    ]
  ],
  [
    "design-07010",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards:not(.tt-pcard-boxed) .tt-pcard-image::before"
    ]
  ],
  [
    "design-07011",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards:not(.tt-pcard-boxed) .tt-pcard-image::before"
    ]
  ],
  [
    "design-07012",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards:not(.tt-pcard-boxed) .tt-pcard-image::before"
    ]
  ],
  [
    "design-07013",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards:not(.tt-pcard-boxed) .tt-pcard-image::before"
    ]
  ],
  [
    "design-07014",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards:not(.tt-pcard-boxed) .tt-pcard-image::before"
    ]
  ],
  [
    "design-07015",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards:not(.tt-pcard-boxed) .tt-pcard-image::before"
    ]
  ],
  [
    "design-07016",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards:not(.tt-pcard-boxed) .tt-pcard-image::before"
    ]
  ],
  [
    "design-07017",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards:not(.tt-pcard-boxed) .tt-pcard-info"
    ]
  ],
  [
    "design-07018",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards:not(.tt-pcard-boxed) .tt-pcard-info"
    ]
  ],
  [
    "design-07019",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards:not(.tt-pcard-boxed) .tt-pcard-info"
    ]
  ],
  [
    "design-07020",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards:not(.tt-pcard-boxed) .tt-pcard-info"
    ]
  ],
  [
    "design-07021",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards:not(.tt-pcard-boxed) .tt-pcard-info"
    ]
  ],
  [
    "design-07022",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards:not(.tt-pcard-boxed) .tt-pcard-info"
    ]
  ],
  [
    "design-07023",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards:not(.tt-pcard-boxed) .tt-pcard-info"
    ]
  ],
  [
    "design-07024",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards:not(.tt-pcard-boxed) .tt-pcard-info"
    ]
  ],
  [
    "design-07025",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards:not(.tt-pcard-boxed) .tt-pcard-title"
    ]
  ],
  [
    "design-07026",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards:not(.tt-pcard-boxed) .tt-pcard-categories"
    ]
  ],
  [
    "design-07027",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards:not(.tt-pcard-boxed) .tt-pcard-category"
    ]
  ],
  [
    "design-07028",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards:not(.tt-pcard-boxed) .tt-pcard-category"
    ]
  ],
  [
    "design-07029",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards:not(.tt-pcard-boxed) .tt-pcard-category"
    ]
  ],
  [
    "design-07030",
    [
      "&:where(:has(#body-inner)) .tt-portfolio-cards:not(.tt-pcard-boxed) .tt-pcard-category"
    ]
  ],
  [
    "design-07031",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list"
    ]
  ],
  [
    "design-07032",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list"
    ]
  ],
  [
    "design-07033",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list > ul"
    ]
  ],
  [
    "design-07034",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list > ul"
    ]
  ],
  [
    "design-07035",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list > ul"
    ]
  ],
  [
    "design-07036",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list > ul > li"
    ]
  ],
  [
    "design-07037",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list > ul > li"
    ]
  ],
  [
    "design-07038",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list > ul > li"
    ]
  ],
  [
    "design-07039",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list > ul > li"
    ]
  ],
  [
    "design-07040",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list > ul > li"
    ]
  ],
  [
    "design-07041",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list > ul > li::after"
    ]
  ],
  [
    "design-07042",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list > ul > li::after"
    ]
  ],
  [
    "design-07043",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list > ul > li::after"
    ]
  ],
  [
    "design-07044",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list > ul > li::after"
    ]
  ],
  [
    "design-07045",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list > ul > li::after"
    ]
  ],
  [
    "design-07046",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list > ul > li::after"
    ]
  ],
  [
    "design-07047",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list > ul > li::after"
    ]
  ],
  [
    "design-07048",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list > ul > li::after"
    ]
  ],
  [
    "design-07049",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list > ul > li::after"
    ]
  ],
  [
    "design-07050",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list .pi-list-heading"
    ]
  ],
  [
    "design-07051",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list .pi-list-heading"
    ]
  ],
  [
    "design-07052",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list .pi-list-heading"
    ]
  ],
  [
    "design-07053",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list .pi-list-heading"
    ]
  ],
  [
    "design-07054",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list .pi-list-cont"
    ]
  ],
  [
    "design-07055",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list .pi-list-cont a"
    ]
  ],
  [
    "design-07056",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list .pi-list-cont a"
    ]
  ],
  [
    "design-07057",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list .pi-list-cont a"
    ]
  ],
  [
    "design-07058",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list .pi-list-cont a:hover"
    ]
  ],
  [
    "design-07059",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list .social-buttons"
    ]
  ],
  [
    "design-07060",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list .social-buttons"
    ]
  ],
  [
    "design-07061",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list .social-buttons"
    ]
  ],
  [
    "design-07062",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list .social-buttons > ul > li"
    ]
  ],
  [
    "design-07063",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list .social-buttons > ul > li a"
    ]
  ],
  [
    "design-07064",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list .social-buttons > ul > li a"
    ]
  ],
  [
    "design-07065",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list .social-buttons > ul > li a"
    ]
  ],
  [
    "design-07066",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list .pi-list-icon"
    ]
  ],
  [
    "design-07067",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list .pi-list-icon"
    ]
  ],
  [
    "design-07068",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list .pi-list-icon"
    ]
  ],
  [
    "design-07069",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list .pi-list-icon"
    ]
  ],
  [
    "design-07070",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list .pi-list-icon"
    ]
  ],
  [
    "design-07071",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list .pi-list-icon"
    ]
  ],
  [
    "design-07072",
    [
      "@media (min-width: 681px) { &:where(:has(#body-inner)) .tt-project-info-list.tt-pil-inline > ul > li }"
    ]
  ],
  [
    "design-07073",
    [
      "@media (min-width: 681px) { &:where(:has(#body-inner)) .tt-project-info-list.tt-pil-inline > ul > li }"
    ]
  ],
  [
    "design-07074",
    [
      "@media (min-width: 681px) { &:where(:has(#body-inner)) .tt-project-info-list.tt-pil-inline > ul > li }"
    ]
  ],
  [
    "design-07075",
    [
      "@media (min-width: 681px) { &:where(:has(#body-inner)) .tt-project-info-list.tt-pil-inline > ul > li:last-child }"
    ]
  ],
  [
    "design-07076",
    [
      "@media (min-width: 681px) { &:where(:has(#body-inner)) .tt-project-info-list.tt-pil-inline > ul > li::after }"
    ]
  ],
  [
    "design-07077",
    [
      "@media (min-width: 681px) { &:where(:has(#body-inner)) .tt-project-info-list.tt-pil-inline > ul > li::after }"
    ]
  ],
  [
    "design-07078",
    [
      "@media (min-width: 681px) { &:where(:has(#body-inner)) .tt-project-info-list.tt-pil-inline > ul > li:last-child::after }"
    ]
  ],
  [
    "design-07079",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list.pi-list-center"
    ]
  ],
  [
    "design-07080",
    [
      "&:where(:has(#body-inner)) .tt-project-info-list:not(.tt-pil-inline).pi-list-center > ul > li::after",
      "&:where(:has(#body-inner)) .tt-project-info-list:not(.tt-pil-inline).text-center > ul > li::after",
      "&:where(:has(#body-inner)) .text-center .tt-project-info-list:not(.tt-pil-inline) > ul > li::after"
    ]
  ],
  [
    "design-07081",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-item"
    ]
  ],
  [
    "design-07082",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-item"
    ]
  ],
  [
    "design-07083",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-item"
    ]
  ],
  [
    "design-07084",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-item"
    ]
  ],
  [
    "design-07085",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-item"
    ]
  ],
  [
    "design-07086",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-item"
    ]
  ],
  [
    "design-07087",
    [
      "&:where(:has(#body-inner)) .tt-wrap .tt-ps-nav-item"
    ]
  ],
  [
    "design-07088",
    [
      "&:where(:has(#body-inner)) .tt-wrap .tt-ps-nav-item"
    ]
  ],
  [
    "design-07089",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-item.tt-ps-nav-prev"
    ]
  ],
  [
    "design-07090",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-item.tt-ps-nav-next"
    ]
  ],
  [
    "design-07091",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-item.tt-ps-nav-next"
    ]
  ],
  [
    "design-07092",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-item.tt-ps-nav-next"
    ]
  ],
  [
    "design-07093",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-image"
    ]
  ],
  [
    "design-07094",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-image"
    ]
  ],
  [
    "design-07095",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-image"
    ]
  ],
  [
    "design-07096",
    [
      "&:where(:has(#body-inner)) .tt-wrap:not([class*=\"max-width-\"]) .tt-ps-nav-image"
    ]
  ],
  [
    "design-07097",
    [
      "@media (max-width: 1400px) { &:where(:has(#body-inner)) .tt-ps-nav-image }"
    ]
  ],
  [
    "design-07098",
    [
      "@media (max-width: 1400px) { &:where(:has(#body-inner)) .tt-wrap .tt-ps-nav-image }"
    ]
  ],
  [
    "design-07099",
    [
      "@media (max-width: 768px) { &:where(:has(#body-inner)) .tt-ps-nav-image }"
    ]
  ],
  [
    "design-07100",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-image-inner"
    ]
  ],
  [
    "design-07101",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-image-inner"
    ]
  ],
  [
    "design-07102",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-image img"
    ]
  ],
  [
    "design-07103",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-image img"
    ]
  ],
  [
    "design-07104",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-image img"
    ]
  ],
  [
    "design-07105",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-image img"
    ]
  ],
  [
    "design-07106",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-image img"
    ]
  ],
  [
    "design-07107",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-image img"
    ]
  ],
  [
    "design-07108",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-image img"
    ]
  ],
  [
    "design-07109",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-image:hover img"
    ]
  ],
  [
    "design-07110",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-subtitle"
    ]
  ],
  [
    "design-07111",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-subtitle"
    ]
  ],
  [
    "design-07112",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-subtitle"
    ]
  ],
  [
    "design-07113",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-subtitle"
    ]
  ],
  [
    "design-07114",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-subtitle"
    ]
  ],
  [
    "design-07115",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-subtitle"
    ]
  ],
  [
    "design-07116",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-subtitle"
    ]
  ],
  [
    "design-07117",
    [
      "@media (max-width: 1400px) { &:where(:has(#body-inner)) .tt-ps-nav-subtitle }"
    ]
  ],
  [
    "design-07118",
    [
      "@media (max-width: 1400px) { &:where(:has(#body-inner)) .tt-ps-nav-subtitle }"
    ]
  ],
  [
    "design-07119",
    [
      "@media (max-width: 1400px) { &:where(:has(#body-inner)) .tt-ps-nav-subtitle }"
    ]
  ],
  [
    "design-07120",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-item.tt-ps-nav-next .tt-ps-nav-subtitle"
    ]
  ],
  [
    "design-07121",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-arrow"
    ]
  ],
  [
    "design-07122",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-arrow"
    ]
  ],
  [
    "design-07123",
    [
      "@media (max-width: 1400px) { &:where(:has(#body-inner)) .tt-ps-nav-arrow }"
    ]
  ],
  [
    "design-07124",
    [
      "@media (max-width: 1400px) { &:where(:has(#body-inner)) .tt-ps-nav-arrow }"
    ]
  ],
  [
    "design-07125",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-item.tt-ps-nav-prev .tt-ps-nav-arrow"
    ]
  ],
  [
    "design-07126",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-arrow svg"
    ]
  ],
  [
    "design-07127",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-title"
    ]
  ],
  [
    "design-07128",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-title"
    ]
  ],
  [
    "design-07129",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-title"
    ]
  ],
  [
    "design-07130",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-title"
    ]
  ],
  [
    "design-07131",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-title"
    ]
  ],
  [
    "design-07132",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-title"
    ]
  ],
  [
    "design-07133",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-title"
    ]
  ],
  [
    "design-07134",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-title"
    ]
  ],
  [
    "design-07135",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-title a"
    ]
  ],
  [
    "design-07136",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-title a:hover",
      "&:where(:has(#body-inner)) .tt-ps-nav-title a:focus"
    ]
  ],
  [
    "design-07137",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-categories"
    ]
  ],
  [
    "design-07138",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-categories"
    ]
  ],
  [
    "design-07139",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-categories"
    ]
  ],
  [
    "design-07140",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-categories"
    ]
  ],
  [
    "design-07141",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-categories"
    ]
  ],
  [
    "design-07142",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-categories"
    ]
  ],
  [
    "design-07143",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-categories"
    ]
  ],
  [
    "design-07144",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-next .tt-ps-nav-categories"
    ]
  ],
  [
    "design-07145",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-category"
    ]
  ],
  [
    "design-07146",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-category"
    ]
  ],
  [
    "design-07147",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-category"
    ]
  ],
  [
    "design-07148",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-category"
    ]
  ],
  [
    "design-07149",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-category"
    ]
  ],
  [
    "design-07150",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-category"
    ]
  ],
  [
    "design-07151",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-category"
    ]
  ],
  [
    "design-07152",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-category"
    ]
  ],
  [
    "design-07153",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-category"
    ]
  ],
  [
    "design-07154",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-category"
    ]
  ],
  [
    "design-07155",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-category"
    ]
  ],
  [
    "design-07156",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-category"
    ]
  ],
  [
    "design-07157",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-category:hover",
      "&:where(:has(#body-inner)) .tt-ps-nav-category:focus"
    ]
  ],
  [
    "design-07158",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-category:hover",
      "&:where(:has(#body-inner)) .tt-ps-nav-category:focus"
    ]
  ],
  [
    "design-07159",
    [
      "&:where(:has(#body-inner)) .tt-ps-nav-category:hover",
      "&:where(:has(#body-inner)) .tt-ps-nav-category:focus"
    ]
  ],
  [
    "design-07160",
    [
      "&:where(:has(#body-inner)) .tt-portf-single-nav.tt-ps-nav-boxed .tt-ps-nav-image"
    ]
  ],
  [
    "design-07161",
    [
      "&:where(:has(#body-inner)) .tt-portf-single-nav.tt-ps-nav-boxed .tt-ps-nav-image"
    ]
  ],
  [
    "design-07162",
    [
      "&:where(:has(#body-inner)) .tt-portf-single-nav.tt-ps-nav-boxed .tt-ps-nav-image"
    ]
  ],
  [
    "design-07163",
    [
      "&:where(:has(#body-inner)) .tt-portf-single-nav.tt-ps-nav-boxed .tt-ps-nav-image"
    ]
  ],
  [
    "design-07164",
    [
      "&:where(:has(#body-inner)) .tt-wrap:not([class*=\"max-width-\"]) .tt-portf-single-nav.tt-ps-nav-boxed .tt-ps-nav-image"
    ]
  ],
  [
    "design-07165",
    [
      "&:where(:has(#body-inner)) .tt-portf-single-nav.tt-ps-nav-tilted .tt-ps-nav-item.tt-ps-nav-prev .tt-ps-nav-image"
    ]
  ],
  [
    "design-07166",
    [
      "&:where(:has(#body-inner)) .tt-portf-single-nav.tt-ps-nav-tilted .tt-ps-nav-item.tt-ps-nav-next .tt-ps-nav-image"
    ]
  ],
  [
    "design-07167",
    [
      "&:where(:has(#body-inner)) .tt-portf-single-nav.tt-ps-nav-landscape .tt-ps-nav-image img"
    ]
  ],
  [
    "design-07168",
    [
      "&:where(:has(#body-inner)) .tt-portf-single-nav.tt-ps-nav-portrait .tt-ps-nav-image img"
    ]
  ],
  [
    "design-07169",
    [
      "&:where(:has(#body-inner)) #tt-contact-form"
    ]
  ],
  [
    "design-07170",
    [
      "&:where(:has(#body-inner)) .tt-contact-form-inner"
    ]
  ],
  [
    "design-07171",
    [
      "&:where(:has(#body-inner)) .tt-contact-form-inner"
    ]
  ],
  [
    "design-07172",
    [
      "&:where(:has(#body-inner)) .tt-contact-form-inner"
    ]
  ],
  [
    "design-07173",
    [
      "&:where(:has(#body-inner)) #tt-contact-form.cfm-submitted .tt-contact-form-inner"
    ]
  ],
  [
    "design-07174",
    [
      "&:where(:has(#body-inner)) #tt-contact-form.cfm-submitted .tt-contact-form-inner"
    ]
  ],
  [
    "design-07175",
    [
      "&:where(:has(#body-inner)) #tt-contact-form.cfm-submitted .tt-contact-form-inner"
    ]
  ],
  [
    "design-07176",
    [
      "&:where(:has(#body-inner)) #tt-contact-form.cfm-submitted .tt-contact-form-inner"
    ]
  ],
  [
    "design-07177",
    [
      "&:where(:has(#body-inner)) #tt-contact-form-messages"
    ]
  ],
  [
    "design-07178",
    [
      "&:where(:has(#body-inner)) #tt-contact-form-messages"
    ]
  ],
  [
    "design-07179",
    [
      "&:where(:has(#body-inner)) #tt-contact-form-messages"
    ]
  ],
  [
    "design-07180",
    [
      "&:where(:has(#body-inner)) #tt-contact-form-messages"
    ]
  ],
  [
    "design-07181",
    [
      "&:where(:has(#body-inner)) #tt-contact-form-messages"
    ]
  ],
  [
    "design-07182",
    [
      "&:where(:has(#body-inner)) #tt-contact-form-messages"
    ]
  ],
  [
    "design-07183",
    [
      "&:where(:has(#body-inner)) #tt-contact-form-messages"
    ]
  ],
  [
    "design-07184",
    [
      "&:where(:has(#body-inner)) #tt-contact-form-messages"
    ]
  ],
  [
    "design-07185",
    [
      "&:where(:has(#body-inner)) #tt-contact-form-messages"
    ]
  ],
  [
    "design-07186",
    [
      "&:where(:has(#body-inner)) #tt-contact-form.cfm-submitted #tt-contact-form-messages"
    ]
  ],
  [
    "design-07187",
    [
      "&:where(:has(#body-inner)) #tt-contact-form.cfm-submitted #tt-contact-form-messages"
    ]
  ],
  [
    "design-07188",
    [
      "&:where(:has(#body-inner)) .tt-cfm-inner"
    ]
  ],
  [
    "design-07189",
    [
      "&:where(:has(#body-inner)) .tt-cfm-inner span"
    ]
  ],
  [
    "design-07190",
    [
      "&:where(:has(#body-inner)) .tt-cfm-inner span"
    ]
  ],
  [
    "design-07191",
    [
      "&:where(:has(#body-inner)) .tt-cfm-inner span"
    ]
  ],
  [
    "design-07192",
    [
      "&:where(:has(#body-inner)) .tt-cfm-inner span"
    ]
  ],
  [
    "design-07193",
    [
      "&:where(:has(#body-inner)) .tt-cfm-sending"
    ]
  ],
  [
    "design-07194",
    [
      "&:where(:has(#body-inner)) .tt-cfm-sending"
    ]
  ],
  [
    "design-07195",
    [
      "&:where(:has(#body-inner)) .tt-cfm-success"
    ]
  ],
  [
    "design-07196",
    [
      "&:where(:has(#body-inner)) .tt-cfm-success"
    ]
  ],
  [
    "design-07197",
    [
      "&:where(:has(#body-inner)) .tt-cfm-error"
    ]
  ],
  [
    "design-07198",
    [
      "&:where(:has(#body-inner)) .tt-cfm-error"
    ]
  ],
  [
    "design-07199",
    [
      "&:where(:has(#body-inner)) .tt-cfm-close"
    ]
  ],
  [
    "design-07200",
    [
      "&:where(:has(#body-inner)) .tt-cfm-close"
    ]
  ],
  [
    "design-07201",
    [
      "&:where(:has(#body-inner)) .tt-cfm-close"
    ]
  ],
  [
    "design-07202",
    [
      "&:where(:has(#body-inner)) .tt-cfm-close"
    ]
  ],
  [
    "design-07203",
    [
      "&:where(:has(#body-inner)) .tt-cfm-close"
    ]
  ],
  [
    "design-07204",
    [
      "&:where(:has(#body-inner)) .tt-cfm-close"
    ]
  ],
  [
    "design-07205",
    [
      "&:where(:has(#body-inner)) .tt-cfm-close"
    ]
  ],
  [
    "design-07206",
    [
      "&:where(:has(#body-inner)) .tt-cfm-close"
    ]
  ],
  [
    "design-07207",
    [
      "&:where(:has(#body-inner)) .tt-cfm-close"
    ]
  ],
  [
    "design-07208",
    [
      "&:where(:has(#body-inner)) .tt-cfm-close"
    ]
  ],
  [
    "design-07209",
    [
      "&:where(:has(#body-inner)) .tt-cfm-close"
    ]
  ],
  [
    "design-07210",
    [
      "&:where(:has(#body-inner)) .tt-cfm-close"
    ]
  ],
  [
    "design-07211",
    [
      "&:where(:has(#body-inner)) .tt-cfm-close"
    ]
  ],
  [
    "design-07212",
    [
      "&:where(:has(#body-inner)) .tt-cfm-close"
    ]
  ],
  [
    "design-07213",
    [
      "&:where(:has(#body-inner)) .tt-cfm-close"
    ]
  ],
  [
    "design-07214",
    [
      "&:where(:has(#body-inner)) .tt-cfm-close"
    ]
  ],
  [
    "design-07215",
    [
      "&:where(:has(#body-inner)) .tt-cfm-close:hover"
    ]
  ],
  [
    "design-07216",
    [
      "&:where(:has(#body-inner)) .tt-contact-info-icon"
    ]
  ],
  [
    "design-07217",
    [
      "&:where(:has(#body-inner)) .tt-contact-info-icon"
    ]
  ],
  [
    "design-07218",
    [
      "&:where(:has(#body-inner)) .tt-contact-info-heading"
    ]
  ],
  [
    "design-07219",
    [
      "&:where(:has(#body-inner)) .tt-contact-info-heading"
    ]
  ],
  [
    "design-07220",
    [
      "&:where(:has(#body-inner)) .tt-contact-info .tt-social-buttons:not(.tt-sbtn-filled):not(.tt-sbtn-bordered) > ul"
    ]
  ],
  [
    "design-07221",
    [
      "&:where(:has(#body-inner)) .tt-contact-info.tt-ci-boxed"
    ]
  ],
  [
    "design-07222",
    [
      "&:where(:has(#body-inner)) .tt-contact-info.tt-ci-boxed"
    ]
  ],
  [
    "design-07223",
    [
      "&:where(:has(#body-inner)) .tt-contact-info.tt-ci-boxed"
    ]
  ],
  [
    "design-07224",
    [
      "&:where(:has(#body-inner)) .tt-contact-info.tt-ci-boxed"
    ]
  ],
  [
    "design-07225",
    [
      "&:where(:has(#body-inner)) .tt-contact-info.tt-ci-boxed"
    ]
  ],
  [
    "design-07226",
    [
      "&:where(:has(#body-inner)) .tt-contact-info.tt-ci-boxed.tt-ci-tilted-1"
    ]
  ],
  [
    "design-07227",
    [
      "&:where(:has(#body-inner)) .tt-contact-info.tt-ci-boxed.tt-ci-tilted-2"
    ]
  ],
  [
    "design-07228",
    [
      "&:where(:has(#body-inner)) #tt-footer"
    ]
  ],
  [
    "design-07229",
    [
      "&:where(:has(#body-inner)) #tt-footer"
    ]
  ],
  [
    "design-07230",
    [
      "&:where(:has(#body-inner)) #tt-footer"
    ]
  ],
  [
    "design-07231",
    [
      "&:where(:has(#body-inner)) #tt-footer"
    ]
  ],
  [
    "design-07232",
    [
      "&:where(:has(#body-inner)) #tt-footer"
    ]
  ],
  [
    "design-07233",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) #tt-footer }"
    ]
  ],
  [
    "design-07234",
    [
      "&:where(:has(#body-inner)) .tt-footer-inner:not(.tt-wrap)"
    ]
  ],
  [
    "design-07235",
    [
      "&:where(:has(#body-inner)) .tt-footer-inner:not(.tt-wrap)"
    ]
  ],
  [
    "design-07236",
    [
      "&:where(:has(#body-inner)) .tt-footer-inner:not(.tt-wrap)"
    ]
  ],
  [
    "design-07237",
    [
      "&:where(:has(#body-inner)) .tt-footer-inner:not(.tt-wrap)"
    ]
  ],
  [
    "design-07238",
    [
      "&:where(:has(#body-inner)) .tt-footer-widget"
    ]
  ],
  [
    "design-07239",
    [
      "&:where(:has(#body-inner)) .tt-footer-widget"
    ]
  ],
  [
    "design-07240",
    [
      "&:where(:has(#body-inner)) .tt-footer-widget a:not(.tt-btn)"
    ]
  ],
  [
    "design-07241",
    [
      "&:where(:has(#body-inner)) .tt-footer-widget-heading"
    ]
  ],
  [
    "design-07242",
    [
      "&:where(:has(#body-inner)) .tt-footer-widget-heading"
    ]
  ],
  [
    "design-07243",
    [
      "&:where(:has(#body-inner)) .tt-footer-widget-heading"
    ]
  ],
  [
    "design-07244",
    [
      "&:where(:has(#body-inner)) .tt-footer-widget-heading"
    ]
  ],
  [
    "design-07245",
    [
      "&:where(:has(#body-inner)) .tt-footer-widget-heading"
    ]
  ],
  [
    "design-07246",
    [
      "&:where(:has(#body-inner)) .tt-footer-widget-list"
    ]
  ],
  [
    "design-07247",
    [
      "&:where(:has(#body-inner)) .tt-footer-widget-list"
    ]
  ],
  [
    "design-07248",
    [
      "&:where(:has(#body-inner)) .tt-footer-widget-list"
    ]
  ],
  [
    "design-07249",
    [
      "&:where(:has(#body-inner)) .tt-footer-widget-list li"
    ]
  ],
  [
    "design-07250",
    [
      "&:where(:has(#body-inner)) .tt-footer-widget-list li"
    ]
  ],
  [
    "design-07251",
    [
      "&:where(:has(#body-inner)) .tt-footer-bottom"
    ]
  ],
  [
    "design-07252",
    [
      "&:where(:has(#body-inner)) .tt-footer-bottom"
    ]
  ],
  [
    "design-07253",
    [
      "&:where(:has(#body-inner)) .tt-footer-bottom [class^=\"tt-col-\"]"
    ]
  ],
  [
    "design-07254",
    [
      "&:where(:has(#body-inner)) .tt-footer-bottom .tt-footer-widget"
    ]
  ],
  [
    "design-07255",
    [
      "&:where(:has(#body-inner)) .tt-copyright-year"
    ]
  ],
  [
    "design-07256",
    [
      "&:where(:has(#body-inner)) .tt-scroll-to-top"
    ]
  ],
  [
    "design-07257",
    [
      "&:where(:has(#body-inner)) .tt-scroll-to-top"
    ]
  ],
  [
    "design-07258",
    [
      "&:where(:has(#body-inner)) .tt-scroll-to-top"
    ]
  ],
  [
    "design-07259",
    [
      "&:where(:has(#body-inner)) .tt-scroll-to-top"
    ]
  ],
  [
    "design-07260",
    [
      "&:where(:has(#body-inner)) .tt-scroll-to-top"
    ]
  ],
  [
    "design-07261",
    [
      "&:where(:has(#body-inner)) .tt-scroll-to-top"
    ]
  ],
  [
    "design-07262",
    [
      "&:where(:has(#body-inner)) .tt-scroll-to-top"
    ]
  ],
  [
    "design-07263",
    [
      "&:where(:has(#body-inner)) .tt-scroll-to-top"
    ]
  ],
  [
    "design-07264",
    [
      "@media (max-width: 1400px) { &:where(:has(#body-inner)) .tt-scroll-to-top }"
    ]
  ],
  [
    "design-07265",
    [
      "@media (max-width: 1400px) { &:where(:has(#body-inner)) .tt-scroll-to-top }"
    ]
  ],
  [
    "design-07266",
    [
      "&:where(:has(#body-inner)) .tt-scroll-to-top.tt-stt-active"
    ]
  ],
  [
    "design-07267",
    [
      "&:where(:has(#body-inner)) .tt-scroll-to-top.tt-stt-active"
    ]
  ],
  [
    "design-07268",
    [
      "&:where(:has(#body-inner)) .tt-scroll-to-top.tt-stt-active"
    ]
  ],
  [
    "design-07269",
    [
      "&:where(:has(#body-inner)) .tt-stt-inner"
    ]
  ],
  [
    "design-07270",
    [
      "&:where(:has(#body-inner)) .tt-stt-inner"
    ]
  ],
  [
    "design-07271",
    [
      "&:where(:has(#body-inner)) .tt-stt-inner"
    ]
  ],
  [
    "design-07272",
    [
      "&:where(:has(#body-inner)) .tt-stt-inner"
    ]
  ],
  [
    "design-07273",
    [
      "&:where(:has(#body-inner)) .tt-stt-inner"
    ]
  ],
  [
    "design-07274",
    [
      "&:where(:has(#body-inner)) .tt-stt-inner"
    ]
  ],
  [
    "design-07275",
    [
      "&:where(:has(#body-inner)) .tt-stt-inner"
    ]
  ],
  [
    "design-07276",
    [
      "&:where(:has(#body-inner)) .tt-stt-inner"
    ]
  ],
  [
    "design-07277",
    [
      "&:where(:has(#body-inner)) .tt-stt-inner"
    ]
  ],
  [
    "design-07278",
    [
      "&:where(:has(#body-inner)) .tt-stt-inner"
    ]
  ],
  [
    "design-07279",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-stt-inner }"
    ]
  ],
  [
    "design-07280",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-stt-inner }"
    ]
  ],
  [
    "design-07281",
    [
      "&:where(:has(#body-inner)) .tt-stt-arrow"
    ]
  ],
  [
    "design-07282",
    [
      "&:where(:has(#body-inner)) .tt-stt-arrow"
    ]
  ],
  [
    "design-07283",
    [
      "&:where(:has(#body-inner)) .tt-stt-arrow svg"
    ]
  ],
  [
    "design-07284",
    [
      "&:where(:has(#body-inner)) .tt-stt-arrow svg"
    ]
  ],
  [
    "design-07285",
    [
      "&:where(:has(#body-inner)) .tt-stt-arrow svg"
    ]
  ],
  [
    "design-07286",
    [
      "&:where(:has(#body-inner)) .tt-stt-arrow svg"
    ]
  ],
  [
    "design-07287",
    [
      "&:where(:has(#body-inner)) .tt-clients-mobile-marquee"
    ]
  ],
  [
    "design-07288",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-clients-desktop-grid }"
    ]
  ],
  [
    "design-07289",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-clients-mobile-marquee }"
    ]
  ],
  [
    "design-07290",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-clients-mobile-marquee }"
    ]
  ],
  [
    "design-07291",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-clients-mobile-marquee }"
    ]
  ],
  [
    "design-07292",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-clients-mobile-marquee }"
    ]
  ],
  [
    "design-07293",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-clients-mobile-marquee }"
    ]
  ],
  [
    "design-07294",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-clients-mobile-marquee }"
    ]
  ],
  [
    "design-07295",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-clients-mobile-marquee }"
    ]
  ],
  [
    "design-07296",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-clients-mobile-marquee }"
    ]
  ],
  [
    "design-07297",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-marquee-row }"
    ]
  ],
  [
    "design-07298",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-marquee-row }"
    ]
  ],
  [
    "design-07299",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-marquee-row }"
    ]
  ],
  [
    "design-07300",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-marquee-row }"
    ]
  ],
  [
    "design-07301",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-marquee-row:last-child }"
    ]
  ],
  [
    "design-07302",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-marquee-track }"
    ]
  ],
  [
    "design-07303",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-marquee-track }"
    ]
  ],
  [
    "design-07304",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-marquee-track }"
    ]
  ],
  [
    "design-07305",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-marquee-track ul.tt-logo-wall }"
    ]
  ],
  [
    "design-07306",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-marquee-track ul.tt-logo-wall }"
    ]
  ],
  [
    "design-07307",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-marquee-track ul.tt-logo-wall }"
    ]
  ],
  [
    "design-07308",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-marquee-track ul.tt-logo-wall }"
    ]
  ],
  [
    "design-07309",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-marquee-track ul.tt-logo-wall }"
    ]
  ],
  [
    "design-07310",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-marquee-track ul.tt-logo-wall }"
    ]
  ],
  [
    "design-07311",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-marquee-track ul.tt-logo-wall }"
    ]
  ],
  [
    "design-07312",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-marquee-track ul.tt-logo-wall li }"
    ]
  ],
  [
    "design-07313",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-marquee-track ul.tt-logo-wall li }"
    ]
  ],
  [
    "design-07314",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-marquee-track ul.tt-logo-wall li }"
    ]
  ],
  [
    "design-07315",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-marquee-track ul.tt-logo-wall li }"
    ]
  ],
  [
    "design-07316",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-marquee-track ul.tt-logo-wall li }"
    ]
  ],
  [
    "design-07317",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-marquee-track ul.tt-logo-wall li .tt-logo-wall-item }"
    ]
  ],
  [
    "design-07318",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-marquee-track ul.tt-logo-wall li .tt-logo-wall-item }"
    ]
  ],
  [
    "design-07319",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-marquee-track ul.tt-logo-wall li .tt-logo-wall-item }"
    ]
  ],
  [
    "design-07320",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-marquee-track ul.tt-logo-wall li .tt-logo-wall-item }"
    ]
  ],
  [
    "design-07321",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-marquee-ltr .tt-marquee-track }"
    ]
  ],
  [
    "design-07322",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-marquee-rtl .tt-marquee-track }"
    ]
  ],
  [
    "design-07323",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-clients-mobile-marquee }"
    ]
  ],
  [
    "design-07324",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) .tt-clients-desktop-grid }"
    ]
  ],
  [
    "design-07325",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) #faq .tt-heading-title }"
    ]
  ],
  [
    "design-07326",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) #faq .tt-heading-title }"
    ]
  ],
  [
    "design-07327",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) #faq .tt-heading-title }"
    ]
  ],
  [
    "design-07328",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on"
    ]
  ],
  [
    "design-07329",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on"
    ]
  ],
  [
    "design-07330",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on"
    ]
  ],
  [
    "design-07331",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on"
    ]
  ],
  [
    "design-07332",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on"
    ]
  ],
  [
    "design-07333",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on"
    ]
  ],
  [
    "design-07334",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on"
    ]
  ],
  [
    "design-07335",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on"
    ]
  ],
  [
    "design-07336",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on"
    ]
  ],
  [
    "design-07337",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on"
    ]
  ],
  [
    "design-07338",
    [
      "&:where(:has(#body-inner)) .tt-style-switch"
    ]
  ],
  [
    "design-07339",
    [
      "&:where(:has(#body-inner)) .tt-style-switch"
    ]
  ],
  [
    "design-07340",
    [
      "&:where(:has(#body-inner)) .tt-style-switch"
    ]
  ],
  [
    "design-07341",
    [
      "&:where(:has(#body-inner)) .tt-style-switch"
    ]
  ],
  [
    "design-07342",
    [
      "&:where(:has(#body-inner)) .tt-style-switch"
    ]
  ],
  [
    "design-07343",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-style-switch }"
    ]
  ],
  [
    "design-07344",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) .tt-style-switch }"
    ]
  ],
  [
    "design-07345",
    [
      "&:where(:has(#body-inner)) .tt-style-switch-inner"
    ]
  ],
  [
    "design-07346",
    [
      "&:where(:has(#body-inner)) .tt-style-switch-inner"
    ]
  ],
  [
    "design-07347",
    [
      "&:where(:has(#body-inner)) .tt-style-switch-inner"
    ]
  ],
  [
    "design-07348",
    [
      "&:where(:has(#body-inner)) .tt-style-switch-inner"
    ]
  ],
  [
    "design-07349",
    [
      "&:where(:has(#body-inner)) .tt-style-switch-inner"
    ]
  ],
  [
    "design-07350",
    [
      "&:where(:has(#body-inner)) .tt-style-switch-inner"
    ]
  ],
  [
    "design-07351",
    [
      "&:where(:has(#body-inner)) .tt-style-switch-inner"
    ]
  ],
  [
    "design-07352",
    [
      "&:where(:has(#body-inner)) .tt-style-switch-inner"
    ]
  ],
  [
    "design-07353",
    [
      "&:where(:has(#body-inner)) .tt-style-switch svg"
    ]
  ],
  [
    "design-07354",
    [
      "&:where(:has(#body-inner)) .tt-style-switch svg"
    ]
  ],
  [
    "design-07355",
    [
      "&:where(:has(#body-inner)) .tt-style-switch svg"
    ]
  ],
  [
    "design-07356",
    [
      "&:where(:has(#body-inner)) .tt-style-switch svg"
    ]
  ],
  [
    "design-07357",
    [
      "&:where(:has(#body-inner)) .tt-style-switch svg"
    ]
  ],
  [
    "design-07358",
    [
      "&:where(:has(#body-inner)) body.ph-image-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-style-switch svg",
      "&:where(:has(#body-inner)) body.ph-video-on.tt-ph-visible:not(.ph-bg-is-light-on) #tt-header:not(.tt-filled) .tt-style-switch svg"
    ]
  ],
  [
    "design-07359",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on.tt-ph-visible:not(.tt-m-menu-active) #tt-header:not(.tt-filled) .tt-style-switch svg"
    ]
  ],
  [
    "design-07360",
    [
      "&:where(:has(#body-inner)) .tt-stsw-dark"
    ]
  ],
  [
    "design-07361",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on .tt-stsw-dark"
    ]
  ],
  [
    "design-07362",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on .tt-stsw-light"
    ]
  ],
  [
    "design-07363",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) #tt-header.tt-header-alter .tt-style-switch }"
    ]
  ],
  [
    "design-07364",
    [
      "@media (max-width: 1024px) { &:where(:has(#body-inner)) #tt-header.tt-header-alter .tt-style-switch }"
    ]
  ],
  [
    "design-07365",
    [
      "&:where(:has(#body-inner)) body.tt-portfolio-slider-on:not(.tt-m-menu-open) .tt-style-switch"
    ]
  ],
  [
    "design-07366",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on ::selection"
    ]
  ],
  [
    "design-07367",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on ::selection"
    ]
  ],
  [
    "design-07368",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on ::selection"
    ]
  ],
  [
    "design-07369",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on ::selection"
    ]
  ],
  [
    "design-07370",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on ::-webkit-selection"
    ]
  ],
  [
    "design-07371",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on ::-webkit-selection"
    ]
  ],
  [
    "design-07372",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on ::-webkit-selection"
    ]
  ],
  [
    "design-07373",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on ::-webkit-selection"
    ]
  ],
  [
    "design-07374",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on pre"
    ]
  ],
  [
    "design-07375",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on .tt-logo-dark"
    ]
  ],
  [
    "design-07376",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on .tt-logo-light"
    ]
  ],
  [
    "design-07377",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on.ph-image-on:not(.ph-bg-is-light-on) .tt-sd-arrow svg",
      "&:where(:has(#body-inner)) body.tt-dark-mode-on.ph-video-on:not(.ph-bg-is-light-on) .tt-sd-arrow svg"
    ]
  ],
  [
    "design-07378",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on.tt-ph-visible:not(.tt-m-menu-active) #tt-header:not(.tt-filled)"
    ]
  ],
  [
    "design-07379",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on.tt-ph-visible:not(.tt-m-menu-active) #tt-header:not(.tt-filled) .tt-logo-light"
    ]
  ],
  [
    "design-07380",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on.tt-ph-visible:not(.tt-m-menu-active) #tt-header:not(.tt-filled) .tt-logo-dark"
    ]
  ],
  [
    "design-07381",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on.tt-ph-visible #tt-header:not(.tt-filled) .tt-main-menu-list > li > a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on.tt-ph-visible #tt-header:not(.tt-filled) .tt-main-menu-list > li > .tt-submenu-trigger > a }"
    ]
  ],
  [
    "design-07382",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on.tt-ph-visible #tt-header:not(.tt-filled) .tt-main-menu-list > li > a:hover }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on.tt-ph-visible #tt-header:not(.tt-filled) .tt-main-menu-list > li > .tt-submenu-trigger > a:hover }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on.tt-ph-visible #tt-header:not(.tt-filled) .tt-main-menu-list > li.active > a }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on.tt-ph-visible #tt-header:not(.tt-filled) .tt-main-menu-list > li.active > .tt-submenu-trigger > a }"
    ]
  ],
  [
    "design-07383",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on.tt-ph-visible:not(.tt-m-menu-active) #tt-header:not(.tt-filled) .tt-m-menu-toggle-btn-text"
    ]
  ],
  [
    "design-07384",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on.tt-ph-visible:not(.tt-m-menu-active) #tt-header:not(.tt-filled) .tt-m-menu-toggle-btn span::before",
      "&:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on.tt-ph-visible:not(.tt-m-menu-active) #tt-header:not(.tt-filled) .tt-m-menu-toggle-btn span::after"
    ]
  ],
  [
    "design-07385",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on #tt-header:not(.tt-filled) .tt-btn-secondary }"
    ]
  ],
  [
    "design-07386",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on #tt-header:not(.tt-filled) .tt-btn-secondary > * }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on #tt-header:not(.tt-filled) .tt-btn-secondary > ::after }"
    ]
  ],
  [
    "design-07387",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on #tt-header:not(.tt-filled) .tt-btn-outline }"
    ]
  ],
  [
    "design-07388",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on #tt-header:not(.tt-filled) .tt-btn-outline > * }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on #tt-header:not(.tt-filled) .tt-btn-outline > ::after }"
    ]
  ],
  [
    "design-07389",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on #tt-header:not(.tt-filled) .tt-btn-link > * }",
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on #tt-header:not(.tt-filled) .tt-btn-link > ::after }"
    ]
  ],
  [
    "design-07390",
    [
      "@media (min-width: 1025px) { &:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on #tt-header:not(.tt-filled) .tt-btn-line }"
    ]
  ],
  [
    "design-07391",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on #page-header",
      "&:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on #page-header a"
    ]
  ],
  [
    "design-07392",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on .tt-sd-inner"
    ]
  ],
  [
    "design-07393",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on .tt-sd-inner"
    ]
  ],
  [
    "design-07394",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on .tt-sd-arrow svg"
    ]
  ],
  [
    "design-07395",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on #page-header .tt-social-buttons > ul > li a"
    ]
  ],
  [
    "design-07396",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on .ph-share-trigger",
      "&:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on .ph-share-buttons > ul > li a"
    ]
  ],
  [
    "design-07397",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on #page-header .tt-btn-secondary"
    ]
  ],
  [
    "design-07398",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on #page-header .tt-btn-secondary > *",
      "&:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on #page-header .tt-btn-secondary > ::after"
    ]
  ],
  [
    "design-07399",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on #page-header .tt-btn-outline"
    ]
  ],
  [
    "design-07400",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on #page-header .tt-btn-outline > *",
      "&:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on #page-header .tt-btn-outline > ::after"
    ]
  ],
  [
    "design-07401",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on #page-header .tt-big-round-ptn-inner"
    ]
  ],
  [
    "design-07402",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on #page-header .tt-big-round-ptn-inner:hover",
      "&:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on #page-header .tt-big-round-ptn-inner:focus"
    ]
  ],
  [
    "design-07403",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on #page-header .tt-btn-link > *",
      "&:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on #page-header .tt-btn-link > ::after"
    ]
  ],
  [
    "design-07404",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on.ph-bg-is-light-on #page-header .tt-btn-line"
    ]
  ],
  [
    "design-07405",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on .tt-section-bg-on"
    ]
  ],
  [
    "design-07406",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on .tt-lv-img-dark"
    ]
  ],
  [
    "design-07407",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on .tt-lv-img-light"
    ]
  ],
  [
    "design-07408",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on .tt-content-carousel.cc-pagination-outside:not(.tt-cc-hide-pagination) .swiper-pagination-bullet:not(.swiper-pagination-bullet-active)"
    ]
  ],
  [
    "design-07409",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on .tt-content-carousel.cc-pagination-outside:not(.tt-cc-hide-pagination) .tt-cc-pagination-fraction"
    ]
  ],
  [
    "design-07410",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on .tt-content-carousel.tt-cc-pagination-outside:not(.tt-cc-hide-pagination) .tt-cc-pagination-progressbar"
    ]
  ],
  [
    "design-07411",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on .tt-content-carousel.cc-pagination-outside:not(.tt-cc-hide-pagination) .tt-cc-pagination-progressbar .swiper-pagination-progressbar-fill"
    ]
  ],
  [
    "design-07412",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on .tt-tli-inner"
    ]
  ],
  [
    "design-07413",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on .tt-pricing-container:not(.tt-ppl-boxed) .tt-pricing-plan:not([data-ppl-featured])"
    ]
  ],
  [
    "design-07414",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on table thead",
      "&:where(:has(#body-inner)) body.tt-dark-mode-on table tfoot"
    ]
  ],
  [
    "design-07415",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on table tbody tr:nth-of-type(2n+1)"
    ]
  ],
  [
    "design-07416",
    [
      "&:where(:has(#body-inner)) body.tt-dark-mode-on .bli-inner",
      "&:where(:has(#body-inner)) body.tt-dark-mode-on .tt-blog-post",
      "&:where(:has(#body-inner)) body.tt-dark-mode-on .tt-blog-post-nav",
      "&:where(:has(#body-inner)) body.tt-dark-mode-on .tt-comment",
      "&:where(:has(#body-inner)) body.tt-dark-mode-on .sidebar-widget"
    ]
  ],
  [
    "design-07417",
    [
      "& .dashboard"
    ]
  ],
  [
    "design-07418",
    [
      "& .dashboard"
    ]
  ],
  [
    "design-07419",
    [
      "& .dashboard"
    ]
  ],
  [
    "design-07420",
    [
      "& .dashboard"
    ]
  ],
  [
    "design-07421",
    [
      "& .dashboard"
    ]
  ],
  [
    "design-07422",
    [
      "& .dashboard *",
      "& .dashboard ::before",
      "& .dashboard ::after"
    ]
  ],
  [
    "design-07423",
    [
      "& .dashboard a"
    ]
  ],
  [
    "design-07424",
    [
      "& .dashboard input:not([type=\"checkbox\"])",
      "& .dashboard select",
      "& .dashboard textarea"
    ]
  ],
  [
    "design-07425",
    [
      "& .dashboard input:not([type=\"checkbox\"])",
      "& .dashboard select",
      "& .dashboard textarea"
    ]
  ],
  [
    "design-07426",
    [
      "& .dashboard input:not([type=\"checkbox\"])",
      "& .dashboard select",
      "& .dashboard textarea"
    ]
  ],
  [
    "design-07427",
    [
      "& .dashboard input:not([type=\"checkbox\"])",
      "& .dashboard select",
      "& .dashboard textarea"
    ]
  ],
  [
    "design-07428",
    [
      "& .dashboard input:not([type=\"checkbox\"])",
      "& .dashboard select",
      "& .dashboard textarea"
    ]
  ],
  [
    "design-07429",
    [
      "& .dashboard input:not([type=\"checkbox\"])",
      "& .dashboard select",
      "& .dashboard textarea"
    ]
  ],
  [
    "design-07430",
    [
      "& .dashboard input:not([type=\"checkbox\"])",
      "& .dashboard select",
      "& .dashboard textarea"
    ]
  ],
  [
    "design-07431",
    [
      "& .dashboard input:not([type=\"checkbox\"])",
      "& .dashboard select",
      "& .dashboard textarea"
    ]
  ],
  [
    "design-07432",
    [
      "& .dashboard input:not([type=\"checkbox\"])",
      "& .dashboard select",
      "& .dashboard textarea"
    ]
  ],
  [
    "design-07433",
    [
      "& .dashboard button",
      "& .dashboard .button"
    ]
  ],
  [
    "design-07434",
    [
      "& .dashboard button",
      "& .dashboard .button"
    ]
  ],
  [
    "design-07435",
    [
      "& .dashboard button",
      "& .dashboard .button"
    ]
  ],
  [
    "design-07436",
    [
      "& .dashboard button",
      "& .dashboard .button"
    ]
  ],
  [
    "design-07437",
    [
      "& .dashboard button",
      "& .dashboard .button"
    ]
  ],
  [
    "design-07438",
    [
      "& .dashboard button",
      "& .dashboard .button"
    ]
  ],
  [
    "design-07439",
    [
      "& .dashboard button",
      "& .dashboard .button"
    ]
  ],
  [
    "design-07440",
    [
      "& .dashboard button",
      "& .dashboard .button"
    ]
  ],
  [
    "design-07441",
    [
      "& .dashboard button",
      "& .dashboard .button"
    ]
  ],
  [
    "design-07442",
    [
      "& .dashboard button:disabled"
    ]
  ],
  [
    "design-07443",
    [
      "& .dashboard button:disabled"
    ]
  ],
  [
    "design-07444",
    [
      "& .dashboard :focus-visible"
    ]
  ],
  [
    "design-07445",
    [
      "& .dashboard :focus-visible"
    ]
  ],
  [
    "design-07446",
    [
      "& .dashboard label"
    ]
  ],
  [
    "design-07447",
    [
      "& .dashboard label"
    ]
  ],
  [
    "design-07448",
    [
      "& .dashboard label",
      "& .dashboard summary",
      "& .dashboard p"
    ]
  ],
  [
    "design-07449",
    [
      "& .dashboard h1",
      "& .dashboard h2",
      "& .dashboard p"
    ]
  ]
];

export default plugin(({ addVariant }) => {
  for (const [name, formats] of variants) addVariant(name, formats);
});

