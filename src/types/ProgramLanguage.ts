// const obj = $$('[data-filter-list] a').reduce((acc, e) => {
//     acc[e.textContent.trim()] = e.href.slice(28, e.href.indexOf('?'));
//     return acc;
// }, {});
// copy(JSON.stringify(obj, null, 4).replace(':', '='));

export enum ProgramLanguage {
    'Unknown languages' = 'unknown',
    '1C Enterprise' = '1c-enterprise',
    '2-Dimensional Array' = '2-dimensional-array',
    '4D' = '4d',
    ABAP = 'abap',
    'ABAP CDS' = 'abap-cds',
    ABNF = 'abnf',
    ActionScript = 'actionscript',
    Ada = 'ada',
    'Adblock Filter List' = 'adblock-filter-list',
    'Adobe Font Metrics' = 'adobe-font-metrics',
    Agda = 'agda',
    'AGS Script' = 'ags-script',
    AIDL = 'aidl',
    AL = 'al',
    Alloy = 'alloy',
    'Alpine Abuild' = 'alpine-abuild',
    'Altium Designer' = 'altium-designer',
    AMPL = 'ampl',
    AngelScript = 'angelscript',
    'Ant Build System' = 'ant-build-system',
    Antlers = 'antlers',
    ANTLR = 'antlr',
    ApacheConf = 'apacheconf',
    Apex = 'apex',
    'API Blueprint' = 'api-blueprint',
    APL = 'apl',
    'Apollo Guidance Computer' = '',
    AppleScript = 'applescript',
    Arc = 'arc',
    AsciiDoc = 'asciidoc',
    ASL = 'asl',
    'ASN.1' = 'asn.1',
    'Classic ASP' = 'classic-asp',
    'ASP.NET' = 'asp.net',
    AspectJ = 'aspectj',
    Assembly = 'assembly',
    Astro = 'astro',
    Asymptote = 'asymptote',
    ATS = 'ats',
    Augeas = 'augeas',
    AutoHotkey = 'autohotkey',
    AutoIt = 'autoit',
    'Avro IDL' = 'avro-idl',
    Awk = 'awk',
    Ballerina = 'ballerina',
    BASIC = 'basic',
    Batchfile = 'batchfile',
    Beef = 'beef',
    Befunge = 'befunge',
    Berry = 'berry',
    BibTeX = 'bibtex',
    Bicep = 'bicep',
    Bikeshed = 'bikeshed',
    Bison = 'bison',
    BitBake = 'bitbake',
    Blade = 'blade',
    BlitzBasic = 'blitzbasic',
    BlitzMax = 'blitzmax',
    Bluespec = 'bluespec',
    'Bluespec BH' = 'bluespec-bh',
    Boo = 'boo',
    Boogie = 'boogie',
    Brainfuck = 'brainfuck',
    BrighterScript = 'brighterscript',
    Brightscript = 'brightscript',
    Zeek = 'zeek',
    Browserslist = 'browserslist',
    C = 'c',
    'C#' = 'c%23',
    'C++' = 'c++',
    'C-ObjDump' = 'c-objdump',
    'C2hs Haskell' = 'c2hs-haskell',
    'Cabal Config' = 'cabal-config',
    Cadence = 'cadence',
    Cairo = 'cairo',
    CameLIGO = 'cameligo',
    'CAP CDS' = 'cap-cds',
    "Cap'n Proto" = "cap'n-proto",
    CartoCSS = 'cartocss',
    Ceylon = 'ceylon',
    Chapel = 'chapel',
    Charity = 'charity',
    Checksums = 'checksums',
    ChucK = 'chuck',
    CIL = 'cil',
    Circom = 'circom',
    Cirru = 'cirru',
    Clarion = 'clarion',
    Clarity = 'clarity',
    Clean = 'clean',
    Click = 'click',
    CLIPS = 'clips',
    Clojure = 'clojure',
    'Closure Templates' = 'closure-templates',
    'Cloud Firestore Security Rules' = 'cloud-firestore-security-rules',
    CMake = 'cmake',
    COBOL = 'cobol',
    CODEOWNERS = 'codeowners',
    CodeQL = 'codeql',
    CoffeeScript = 'coffeescript',
    ColdFusion = 'coldfusion',
    'ColdFusion CFC' = 'coldfusion-cfc',
    COLLADA = 'collada',
    'Common Lisp' = 'common-lisp',
    'Common Workflow Language' = 'common-workflow-language',
    'Component Pascal' = 'component-pascal',
    'CoNLL-U' = 'conll-u',
    Cool = 'cool',
    Coq = 'coq',
    'Cpp-ObjDump' = 'cpp-objdump',
    Creole = 'creole',
    Crystal = 'crystal',
    CSON = 'cson',
    Csound = 'csound',
    'Csound Document' = 'csound-document',
    'Csound Score' = 'csound-score',
    CSS = 'css',
    CSV = 'csv',
    Cuda = 'cuda',
    CUE = 'cue',
    'Cue Sheet' = 'cue-sheet',
    'cURL Config' = 'curl-config',
    Curry = 'curry',
    CWeb = 'cweb',
    Cycript = 'cycript',
    Cypher = 'cypher',
    Cython = 'cython',
    D = 'd',
    'D-ObjDump' = 'd-objdump',
    D2 = 'd2',
    Dafny = 'dafny',
    'Darcs Patch' = 'darcs-patch',
    Dart = 'dart',
    DataWeave = 'dataweave',
    'Debian Package Control File' = 'debian-package-control-file',
    DenizenScript = 'denizenscript',
    desktop = 'desktop',
    Dhall = 'dhall',
    Diff = 'diff',
    'DIGITAL Command Language' = 'digital-command-language',
    dircolors = 'dircolors',
    'DirectX 3D File' = 'directx-3d-file',
    DM = 'dm',
    'DNS Zone' = 'dns-zone',
    Dockerfile = 'dockerfile',
    Dogescript = 'dogescript',
    Dotenv = 'dotenv',
    DTrace = 'dtrace',
    Dylan = 'dylan',
    E = 'e',
    'E-mail' = 'e-mail',
    Eagle = 'eagle',
    Earthly = 'earthly',
    Easybuild = 'easybuild',
    EBNF = 'ebnf',
    eC = 'ec',
    'Ecere Projects' = 'ecere-projects',
    ECL = 'ecl',
    ECLiPSe = 'eclipse',
    Ecmarkup = 'ecmarkup',
    EdgeQL = 'edgeql',
    EditorConfig = 'editorconfig',
    'Edje Data Collection' = 'edje-data-collection',
    edn = 'edn',
    Eiffel = 'eiffel',
    EJS = 'ejs',
    Elixir = 'elixir',
    Elm = 'elm',
    Elvish = 'elvish',
    'Elvish Transcript' = 'elvish-transcript',
    'Emacs Lisp' = 'emacs-lisp',
    EmberScript = 'emberscript',
    EQ = 'eq',
    Erlang = 'erlang',
    Euphoria = 'euphoria',
    'F#' = 'f%23',
    'F*' = 'f*',
    Factor = 'factor',
    Fancy = 'fancy',
    Fantom = 'fantom',
    Faust = 'faust',
    Fennel = 'fennel',
    'FIGlet Font' = 'figlet-font',
    'Filebench WML' = 'filebench-wml',
    Filterscript = 'filterscript',
    fish = 'fish',
    Fluent = 'fluent',
    FLUX = 'flux',
    Formatted = 'formatted',
    Forth = 'forth',
    Fortran = 'fortran',
    'Fortran Free Form' = 'fortran-free-form',
    FreeBasic = 'freebasic',
    FreeMarker = 'freemarker',
    Frege = 'frege',
    Futhark = 'futhark',
    'G-code' = 'g-code',
    'Game Maker Language' = 'game-maker-language',
    GAML = 'gaml',
    GAMS = 'gams',
    GAP = 'gap',
    'GCC Machine Description' = 'gcc-machine-description',
    GDB = 'gdb',
    GDScript = 'gdscript',
    GEDCOM = 'gedcom',
    'Gemfile.lock' = 'gemfile.lock',
    Gemini = 'gemini',
    'Genero 4gl' = 'genero-4gl',
    'Genero per' = 'genero-per',
    Genie = 'genie',
    Genshi = 'genshi',
    'Gentoo Ebuild' = 'gentoo-ebuild',
    'Gentoo Eclass' = 'gentoo-eclass',
    'Gerber Image' = 'gerber-image',
    'Gettext Catalog' = 'gettext-catalog',
    Gherkin = 'gherkin',
    'Git Attributes' = 'git-attributes',
    'Git Config' = 'git-config',
    'Git Revision List' = 'git-revision-list',
    Gleam = 'gleam',
    'Glimmer JS' = 'glimmer-js',
    GLSL = 'glsl',
    Glyph = 'glyph',
    'Glyph Bitmap Distribution Format' = 'glyph-bitmap-distribution-format',
    GN = 'gn',
    Gnuplot = 'gnuplot',
    Go = 'go',
    'Go Checksums' = 'go-checksums',
    'Go Module' = 'go-module',
    'Go Workspace' = 'go-workspace',
    'Godot Resource' = 'godot-resource',
    Golo = 'golo',
    Gosu = 'gosu',
    Grace = 'grace',
    Gradle = 'gradle',
    'Gradle Kotlin DSL' = 'gradle-kotlin-dsl',
    'Grammatical Framework' = 'grammatical-framework',
    'Graph Modeling Language' = 'graph-modeling-language',
    GraphQL = 'graphql',
    'Graphviz (DOT)' = 'graphviz-(dot)',
    Groovy = 'groovy',
    'Groovy Server Pages' = 'groovy-server-pages',
    GSC = 'gsc',
    Hack = 'hack',
    Haml = 'haml',
    Handlebars = 'handlebars',
    HAProxy = 'haproxy',
    Harbour = 'harbour',
    Haskell = 'haskell',
    Haxe = 'haxe',
    HCL = 'hcl',
    HiveQL = 'hiveql',
    HLSL = 'hlsl',
    HOCON = 'hocon',
    HolyC = 'holyc',
    hoon = 'hoon',
    'Hosts File' = 'hosts-file',
    HTML = 'html',
    Jinja = 'jinja',
    'HTML+ECR' = 'html+ecr',
    'HTML+EEX' = 'html+eex',
    'HTML+ERB' = 'html+erb',
    'HTML+PHP' = 'html+php',
    'HTML+Razor' = 'html+razor',
    HTTP = 'http',
    HXML = 'hxml',
    Hy = 'hy',
    HyPhy = 'hyphy',
    IDL = 'idl',
    Idris = 'idris',
    'Ignore List' = 'ignore-list',
    'IGOR Pro' = 'igor-pro',
    'ImageJ Macro' = 'imagej-macro',
    Imba = 'imba',
    'Inform 7' = 'inform-7',
    INI = 'ini',
    Ink = 'ink',
    'Inno Setup' = 'inno-setup',
    Io = 'io',
    Ioke = 'ioke',
    'IRC log' = 'irc-log',
    Isabelle = 'isabelle',
    'Isabelle ROOT' = 'isabelle-root',
    J = 'j',
    Janet = 'janet',
    'JAR Manifest' = 'jar-manifest',
    Jasmin = 'jasmin',
    Java = 'java',
    'Java Properties' = 'java-properties',
    'Java Server Pages' = 'java-server-pages',
    JavaScript = 'javascript',
    'JavaScript+ERB' = 'javascript+erb',
    JCL = 'jcl',
    'Jest Snapshot' = 'jest-snapshot',
    'JetBrains MPS' = 'jetbrains-mps',
    JFlex = 'jflex',
    Jison = 'jison',
    'Jison Lex' = 'jison-lex',
    Jolie = 'jolie',
    jq = 'jq',
    JSON = 'json',
    'JSON with Comments' = 'json-with-comments',
    JSON5 = 'json5',
    JSONiq = 'jsoniq',
    JSONLD = 'jsonld',
    Jsonnet = 'jsonnet',
    Julia = 'julia',
    'Jupyter Notebook' = 'jupyter-notebook',
    Just = 'just',
    'Kaitai Struct' = 'kaitai-struct',
    KakouneScript = 'kakounescript',
    KerboScript = 'kerboscript',
    'KiCad Layout' = 'kicad-layout',
    'KiCad Legacy Layout' = 'kicad-legacy-layout',
    'KiCad Schematic' = 'kicad-schematic',
    Kickstart = 'kickstart',
    Kit = 'kit',
    Kotlin = 'kotlin',
    KRL = 'krl',
    Kusto = 'kusto',
    kvlang = 'kvlang',
    LabVIEW = 'labview',
    Lark = 'lark',
    Lasso = 'lasso',
    Latte = 'latte',
    Lean = 'lean',
    'Lean 4' = 'lean-4',
    Less = 'less',
    Lex = 'lex',
    LFE = 'lfe',
    LigoLANG = 'ligolang',
    LilyPond = 'lilypond',
    Limbo = 'limbo',
    'Linker Script' = 'linker-script',
    'Linux Kernel Module' = 'linux-kernel-module',
    Liquid = 'liquid',
    'Literate Agda' = 'literate-agda',
    'Literate CoffeeScript' = 'literate-coffeescript',
    'Literate Haskell' = 'literate-haskell',
    LiveScript = 'livescript',
    LLVM = 'llvm',
    Logos = 'logos',
    Logtalk = 'logtalk',
    LOLCODE = 'lolcode',
    LookML = 'lookml',
    LoomScript = 'loomscript',
    LSL = 'lsl',
    'LTspice Symbol' = 'ltspice-symbol',
    Lua = 'lua',
    M = 'm',
    M4 = 'm4',
    M4Sugar = 'm4sugar',
    Macaulay2 = 'macaulay2',
    Makefile = 'makefile',
    Mako = 'mako',
    Markdown = 'markdown',
    Marko = 'marko',
    Mask = 'mask',
    Mathematica = 'mathematica',
    MATLAB = 'matlab',
    'Maven POM' = 'maven-pom',
    Max = 'max',
    MAXScript = 'maxscript',
    mcfunction = 'mcfunction',
    MDX = 'mdx',
    Wikitext = 'wikitext',
    Mercury = 'mercury',
    Mermaid = 'mermaid',
    Meson = 'meson',
    Metal = 'metal',
    'Microsoft Developer Studio Project' = 'microsoft-developer-studio-project',
    'Microsoft Visual Studio Solution' = 'microsoft-visual-studio-solution',
    MiniD = 'minid',
    MiniYAML = 'miniyaml',
    Mint = 'mint',
    Mirah = 'mirah',
    'mIRC Script' = 'mirc-script',
    MLIR = 'mlir',
    Modelica = 'modelica',
    'Modula-2' = 'modula-2',
    'Modula-3' = 'modula-3',
    'Module Management System' = 'module-management-system',
    Monkey = 'monkey',
    'Monkey C' = 'monkey-c',
    Moocode = 'moocode',
    MoonScript = 'moonscript',
    Motoko = 'motoko',
    'Motorola 68K Assembly' = 'motorola-68k-assembly',
    Move = 'move',
    MQL4 = 'mql4',
    MQL5 = 'mql5',
    MTML = 'mtml',
    MUF = 'muf',
    mupad = 'mupad',
    Muse = 'muse',
    Mustache = 'mustache',
    Myghty = 'myghty',
    nanorc = 'nanorc',
    Nasal = 'nasal',
    NASL = 'nasl',
    NCL = 'ncl',
    Nearley = 'nearley',
    Nemerle = 'nemerle',
    NEON = 'neon',
    nesC = 'nesc',
    NetLinx = 'netlinx',
    'NetLinx+ERB' = 'netlinx+erb',
    NetLogo = 'netlogo',
    NewLisp = 'newlisp',
    Nextflow = 'nextflow',
    Nginx = 'nginx',
    Nim = 'nim',
    Ninja = 'ninja',
    Nit = 'nit',
    Nix = 'nix',
    NL = 'nl',
    'NPM Config' = 'npm-config',
    NSIS = 'nsis',
    Nu = 'nu',
    NumPy = 'numpy',
    Nunjucks = 'nunjucks',
    Nushell = 'nushell',
    NWScript = 'nwscript',
    'OASv2-json' = 'oasv2-json',
    'OASv2-yaml' = 'oasv2-yaml',
    'OASv3-json' = 'oasv3-json',
    'OASv3-yaml' = 'oasv3-yaml',
    ObjDump = 'objdump',
    'Object Data Instance Notation' = 'object-data-instance-notation',
    'Objective-C' = 'objective-c',
    'Objective-C++' = 'objective-c++',
    'Objective-J' = 'objective-j',
    ObjectScript = 'objectscript',
    OCaml = 'ocaml',
    Odin = 'odin',
    Omgrofl = 'omgrofl',
    ooc = 'ooc',
    Opa = 'opa',
    Opal = 'opal',
    'Open Policy Agent' = 'open-policy-agent',
    'OpenAPI Specification v2' = 'openapi-specification-v2',
    'OpenAPI Specification v3' = 'openapi-specification-v3',
    OpenCL = 'opencl',
    'OpenEdge ABL' = 'openedge-abl',
    OpenQASM = 'openqasm',
    'OpenRC runscript' = 'openrc-runscript',
    OpenSCAD = 'openscad',
    'OpenStep Property List' = 'openstep-property-list',
    'OpenType Feature File' = 'opentype-feature-file',
    'Option List' = 'option-list',
    Org = 'org',
    Ox = 'ox',
    Oxygene = 'oxygene',
    Oz = 'oz',
    P4 = 'p4',
    Pact = 'pact',
    Pan = 'pan',
    Papyrus = 'papyrus',
    Parrot = 'parrot',
    'Parrot Assembly' = 'parrot-assembly',
    'Parrot Internal Representation' = 'parrot-internal-representation',
    Pascal = 'pascal',
    Pawn = 'pawn',
    PDDL = 'pddl',
    'PEG.js' = 'peg.js',
    Pep8 = 'pep8',
    Perl = 'perl',
    PHP = 'php',
    Pic = 'pic',
    Pickle = 'pickle',
    PicoLisp = 'picolisp',
    PigLatin = 'piglatin',
    Pike = 'pike',
    PlantUML = 'plantuml',
    PLpgSQL = 'plpgsql',
    PLSQL = 'plsql',
    Pod = 'pod',
    'Pod 6' = 'pod-6',
    PogoScript = 'pogoscript',
    Polar = 'polar',
    Pony = 'pony',
    Portugol = 'portugol',
    PostCSS = 'postcss',
    PostScript = 'postscript',
    'POV-Ray SDL' = 'pov-ray-sdl',
    PowerBuilder = 'powerbuilder',
    PowerShell = 'powershell',
    Praat = 'praat',
    Prisma = 'prisma',
    Processing = 'processing',
    Procfile = 'procfile',
    Proguard = 'proguard',
    Prolog = 'prolog',
    Promela = 'promela',
    'Propeller Spin' = 'propeller-spin',
    'Protocol Buffer' = 'protocol-buffer',
    'Protocol Buffer Text Format' = 'protocol-buffer-text-format',
    'Public Key' = 'public-key',
    Pug = 'pug',
    Puppet = 'puppet',
    'Pure Data' = 'pure-data',
    PureBasic = 'purebasic',
    PureScript = 'purescript',
    Pyret = 'pyret',
    Python = 'python',
    'Python console' = 'python-console',
    'Python traceback' = 'python-traceback',
    q = 'q',
    'Q#' = 'q%23',
    QMake = 'qmake',
    QML = 'qml',
    'Qt Script' = 'qt-script',
    Quake = 'quake',
    R = 'r',
    Racket = 'racket',
    Ragel = 'ragel',
    Raku = 'raku',
    RAML = 'raml',
    Rascal = 'rascal',
    'Raw token data' = 'raw-token-data',
    RBS = 'rbs',
    RDoc = 'rdoc',
    'Readline Config' = 'readline-config',
    REALbasic = 'realbasic',
    Reason = 'reason',
    ReasonLIGO = 'reasonligo',
    Rebol = 'rebol',
    'Record Jar' = 'record-jar',
    Red = 'red',
    Redcode = 'redcode',
    'Redirect Rules' = 'redirect-rules',
    'Regular Expression' = 'regular-expression',
    "Ren'Py" = "ren'py",
    RenderScript = 'renderscript',
    ReScript = 'rescript',
    reStructuredText = 'restructuredtext',
    REXX = 'rexx',
    Rez = 'rez',
    'Rich Text Format' = 'rich-text-format',
    Ring = 'ring',
    Riot = 'riot',
    RMarkdown = 'rmarkdown',
    RobotFramework = 'robotframework',
    'robots.txt' = 'robots.txt',
    Roff = 'roff',
    'Roff Manpage' = 'roff-manpage',
    Rouge = 'rouge',
    'RouterOS Script' = 'routeros-script',
    RPC = 'rpc',
    RPGLE = 'rpgle',
    'RPM Spec' = 'rpm-spec',
    Ruby = 'ruby',
    RUNOFF = 'runoff',
    Rust = 'rust',
    Sage = 'sage',
    SaltStack = 'saltstack',
    SAS = 'sas',
    Sass = 'sass',
    Scala = 'scala',
    Scaml = 'scaml',
    Scenic = 'scenic',
    Scheme = 'scheme',
    Scilab = 'scilab',
    SCSS = 'scss',
    sed = 'sed',
    Self = 'self',
    'SELinux Policy' = 'selinux-policy',
    ShaderLab = 'shaderlab',
    Shell = 'shell',
    'ShellCheck Config' = 'shellcheck-config',
    ShellSession = 'shellsession',
    Shen = 'shen',
    Sieve = 'sieve',
    'Simple File Verification' = 'simple-file-verification',
    Singularity = 'singularity',
    Slash = 'slash',
    Slice = 'slice',
    Slim = 'slim',
    Smali = 'smali',
    Smalltalk = 'smalltalk',
    Smarty = 'smarty',
    Smithy = 'smithy',
    SmPL = 'smpl',
    SMT = 'smt',
    Snakemake = 'snakemake',
    Solidity = 'solidity',
    Soong = 'soong',
    SourcePawn = 'sourcepawn',
    SPARQL = 'sparql',
    'Spline Font Database' = 'spline-font-database',
    SQF = 'sqf',
    SQL = 'sql',
    SQLPL = 'sqlpl',
    Squirrel = 'squirrel',
    'SRecode Template' = 'srecode-template',
    'SSH Config' = 'ssh-config',
    Stan = 'stan',
    'Standard ML' = 'standard-ml',
    STAR = 'star',
    Starlark = 'starlark',
    Stata = 'stata',
    STL = 'stl',
    STON = 'ston',
    StringTemplate = 'stringtemplate',
    Stylus = 'stylus',
    'SubRip Text' = 'subrip-text',
    SugarSS = 'sugarss',
    SuperCollider = 'supercollider',
    Svelte = 'svelte',
    SVG = 'svg',
    Sway = 'sway',
    Sweave = 'sweave',
    Swift = 'swift',
    SWIG = 'swig',
    SystemVerilog = 'systemverilog',
    Talon = 'talon',
    Tcl = 'tcl',
    Tcsh = 'tcsh',
    Tea = 'tea',
    Terra = 'terra',
    'Terraform Template' = 'terraform-template',
    TeX = 'tex',
    Texinfo = 'texinfo',
    Text = 'text',
    Textile = 'textile',
    'TextMate Properties' = 'textmate-properties',
    Thrift = 'thrift',
    'TI Program' = 'ti-program',
    'TL-Verilog' = 'tl-verilog',
    TLA = 'tla',
    Toit = 'toit',
    TOML = 'toml',
    TSQL = 'tsql',
    TSV = 'tsv',
    TSX = 'tsx',
    Turing = 'turing',
    Turtle = 'turtle',
    Twig = 'twig',
    TXL = 'txl',
    'Type Language' = 'type-language',
    TypeScript = 'typescript',
    Typst = 'typst',
    'Unified Parallel C' = 'unified-parallel-c',
    'Unity3D Asset' = 'unity3d-asset',
    'Unix Assembly' = 'unix-assembly',
    Uno = 'uno',
    UnrealScript = 'unrealscript',
    UrWeb = 'urweb',
    V = 'v',
    Vala = 'vala',
    'Valve Data Format' = 'valve-data-format',
    VBA = 'vba',
    VBScript = 'vbscript',
    VCL = 'vcl',
    'Velocity Template Language' = 'velocity-template-language',
    Verilog = 'verilog',
    VHDL = 'vhdl',
    'Vim Help File' = 'vim-help-file',
    'Vim Script' = 'vim-script',
    'Vim Snippet' = 'vim-snippet',
    'Visual Basic .NET' = 'visual-basic-.net',
    'Visual Basic 6.0' = 'visual-basic-6.0',
    Volt = 'volt',
    Vue = 'vue',
    Vyper = 'vyper',
    'Wavefront Material' = 'wavefront-material',
    'Wavefront Object' = 'wavefront-object',
    WDL = 'wdl',
    'Web Ontology Language' = 'web-ontology-language',
    WebAssembly = 'webassembly',
    'WebAssembly Interface Type' = 'webassembly-interface-type',
    WebIDL = 'webidl',
    WebVTT = 'webvtt',
    'Wget Config' = 'wget-config',
    WGSL = 'wgsl',
    Whiley = 'whiley',
    'Win32 Message File' = 'win32-message-file',
    'Windows Registry Entries' = 'windows-registry-entries',
    wisp = 'wisp',
    'Witcher Script' = 'witcher-script',
    Wollok = 'wollok',
    'World of Warcraft Addon Data' = 'world-of-warcraft-addon-data',
    Wren = 'wren',
    'X BitMap' = 'x-bitmap',
    'X Font Directory Index' = 'x-font-directory-index',
    'X PixMap' = 'x-pixmap',
    X10 = 'x10',
    xBase = 'xbase',
    XC = 'xc',
    XCompose = 'xcompose',
    XML = 'xml',
    'XML Property List' = 'xml-property-list',
    Xojo = 'xojo',
    Xonsh = 'xonsh',
    XPages = 'xpages',
    XProc = 'xproc',
    XQuery = 'xquery',
    XS = 'xs',
    XSLT = 'xslt',
    Xtend = 'xtend',
    Yacc = 'yacc',
    YAML = 'yaml',
    YANG = 'yang',
    YARA = 'yara',
    YASnippet = 'yasnippet',
    Yul = 'yul',
    ZAP = 'zap',
    ZenScript = 'zenscript',
    Zephir = 'zephir',
    Zig = 'zig',
    ZIL = 'zil',
    Zimpl = 'zimpl',
}
