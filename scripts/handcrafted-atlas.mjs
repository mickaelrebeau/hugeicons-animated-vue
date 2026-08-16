/**
 * Maps every generated icon to one of the 165 hand-crafted donors,
 * then applies that donor's transferable choreography to the new SVG.
 */

export const DONORS = [
  'add-circle', 'airplane-take-off-01', 'alarm-clock', 'alert-circle', 'archive-02',
  'arrow-down-02', 'arrow-down-left-01', 'arrow-down-right-01', 'arrow-left-02', 'arrow-right-02',
  'arrow-up-02', 'arrow-up-left-01', 'arrow-up-right-01', 'attachment', 'battery-charging-01',
  'bluetooth', 'bookmark-01', 'bug-01', 'bulb', 'calendar-03', 'calendar-add-01', 'call-02',
  'call-incoming-01', 'call-outgoing-01', 'camera-01', 'cancel-01', 'chevron-down', 'chevron-left',
  'chevron-right', 'chevron-up', 'circle-check', 'circle-x', 'clipboard-paste', 'clipboard',
  'clock-01', 'cloud-download', 'cloud-lightning', 'cloud-rain', 'cloud-upload', 'cloud',
  'code-xml', 'coffee-02', 'command', 'compass', 'copy-01', 'credit-card', 'crown',
  'cursor-pointer-01', 'dashboard-square-01', 'database', 'delete-02', 'diamond-02',
  'document-attachment', 'download-01', 'earth', 'edit-02', 'external-link', 'eye-off', 'eye',
  'favourite', 'file-01', 'file-add', 'file-download', 'file-upload', 'filter', 'fire', 'flash',
  'flower', 'folder-01', 'folder-add', 'folder-open', 'full-screen', 'ghost', 'gift', 'github',
  'grid-view', 'headphone-off', 'headphones', 'help-circle', 'history', 'home-01', 'image-01',
  'inbox', 'information-circle', 'key-01', 'leaf-01', 'link-01', 'link-square-02', 'list-view',
  'loading-03', 'location-01', 'location-add-01', 'lock', 'login-01', 'logout-01', 'magic-wand-01',
  'mail-01', 'mail-open', 'maximize-screen', 'menu-01', 'message-01', 'message-add-01', 'mic-01',
  'minimize-screen', 'minus-sign-circle', 'minus-sign', 'moon-02', 'more-horizontal', 'more-vertical',
  'mouse-left-click-01', 'music-note-01', 'notification-03', 'notification-off-01', 'paint-brush-02',
  'panel-left', 'party', 'pause', 'pin', 'play', 'plus-sign', 'printer', 'puzzle', 'qr-code-01',
  'redo', 'refresh', 'robot-01', 'rocket-01', 'save', 'scissor-01', 'search-01', 'sent',
  'settings-01', 'share-08', 'shield-02', 'shopping-cart-01', 'shopping-cart-add-01', 'sleeping',
  'sliders-horizontal', 'smile', 'snow', 'sort-by-down-01', 'sort-by-up-01', 'sparkles',
  'square-lock-01', 'star', 'sun-03', 'target-01', 'thumbs-up', 'tick-02', 'umbrella', 'undo',
  'upload-01', 'user-add-01', 'user-check-01', 'user-group', 'user-multiple-02', 'user-remove-01',
  'user', 'video-01', 'volume-high', 'volume-mute-01', 'wallet-01', 'wifi-01', 'zoom-in-area',
  'zoom-out-area',
]

const VERB = {
  'add-circle': 'the boundary makes room, then the add mark resolves at its center',
  'plus-sign': 'a mark stamping into place',
  'minus-sign': 'the minus pinches short and settles',
  'minus-sign-circle': 'subtraction compresses the mark while the containing circle absorbs it',
  'tick-02': 'the completed stroke compresses once as it lands',
  'circle-check': 'the ring holds while the check is drawn and lands',
  'cancel-01': 'both strokes stamp back onto the page',
  'circle-x': 'the ring holds while the cross stamps',
  'arrow-right-02': 'the glyph steps right along its own axis',
  'arrow-left-02': 'the glyph steps left along its own axis',
  'arrow-down-02': 'the glyph steps down along its own axis',
  'arrow-up-02': 'the glyph steps up along its own axis',
  'arrow-up-right-01': 'the glyph steps up-right along its own axis',
  'arrow-up-left-01': 'the glyph steps up-left along its own axis',
  'arrow-down-right-01': 'the glyph steps down-right along its own axis',
  'arrow-down-left-01': 'the glyph steps down-left along its own axis',
  'chevron-right': 'the chevron steps right and settles',
  'chevron-left': 'the chevron steps left and settles',
  'chevron-down': 'the chevron steps down and settles',
  'chevron-up': 'the chevron steps up and settles',
  'download-01': 'a conveyor: the arrow falls through, fades, and a new one drops in',
  'upload-01': 'the arrow launches off the top, and its replacement rises from the tray',
  'file-download': 'the download arrow falls into the document and the page catches it',
  'file-upload': 'the page loads the arrow and launches it cleanly upward',
  'cloud-download': 'the cloud compresses under a downward transfer, then floats back',
  'cloud-upload': 'the arrow loads beneath the cloud and surges upward',
  'notification-03': 'decaying pendulum ring; the clapper swings counter-phase',
  'alarm-clock': 'the clock rattles while its bells sweep through a mirrored arc',
  'call-02': 'the phone keeps ringing — rattle, rest, rattle again',
  'call-incoming-01': 'the incoming arrow drives toward the handset',
  'call-outgoing-01': 'the handset kicks the outgoing arrow into motion',
  user: 'a real nod — the head dips on its neck, the shoulders settle after',
  'user-add-01': 'the profile gives a buoyant nod and the add mark answers beside it',
  'user-check-01': 'the profile nods while the confirmation stroke draws and lands',
  'user-remove-01': 'the profile recoils from a decisive remove mark',
  'user-group': 'two readable profiles gather toward one another',
  'user-multiple-02': 'two readable profiles gather toward one another',
  'folder-01': 'match the compact lift, lean, and weighted settle of the sibling folders',
  'folder-add': 'the folder leans into the action and the add mark snaps firmly into place',
  'folder-open': 'the front flap hinges toward the viewer, then closes',
  'file-01': "the document's compact paper response",
  'file-add': 'a new sheet drops into the stack while the add mark stamps the corner',
  'list-view': 'rows contract and settle in reading order, alternating their anchored edge',
  'menu-01': 'every row stays attached to the same left rail',
  'dashboard-square-01': 'tiles assemble in reading order with a crisp diagonal ripple',
  'grid-view': 'the cells wake in a diagonal ripple and overshoot into alignment',
  'more-horizontal': 'the dots lift in sequence from their own centers',
  'more-vertical': 'the dots lift in sequence from their own centers',
  favourite: 'a playful lub-dub: the heart stays centered and swells on each beat',
  star: "catching the light: the star's own points stretch out",
  sparkles: 'two stars trade brightness so the twinkle feels continuous',
  'wifi-01': 'the signal physically expands from its source',
  'search-01': 'the lens leans in, scans, and settles back',
  'settings-01': 'the outer mechanism turns and settles while the center bearing stays fixed',
  refresh: 'rewinds slightly, then whips a full revolution',
  undo: 'a complete backward turn reads as undo',
  redo: 'a complete forward turn mirrors undo',
  history: 'the rewind ring and hands share one motion curve',
  lock: 'the body jiggles; the keyhole turns in its own seat',
  'square-lock-01': 'the shackle swings open on its hinge, hangs, then clicks shut',
  'key-01': 'the bow, tooth, and keyhole move as one rigid key',
  'delete-02': 'the hinged lid opens, then the bin absorbs the weight as it closes',
  play: 'the play shape compresses, releases forward, and settles without decoration',
  pause: 'the pair compresses toward the center, releases outward, and settles',
  eye: 'the pupil darts first, then yields as the lids meet',
  'eye-off': 'the slash clears, then the lids settle',
  'home-01': 'a welcoming hop; the door smile redraws as it lands',
  'login-01': 'the door yields while the arrow steps inward',
  'logout-01': 'the arrow steps outward while the door answers',
  'edit-02': 'the pencil scribbles; the baseline redraws underneath',
  'share-08': 'the network lights up — wires carry the signal, nodes pulse as it arrives',
  'shopping-cart-01': 'the cart is mid-dash — rattling over the floor',
  'shopping-cart-add-01': 'the plus lands in place while the cart absorbs the weight',
  'location-01': "a quick hop, carrying the landing ring with the pin",
  'location-add-01': 'the pin and add mark hop and settle as one object',
  pin: 'the pin drops onto its point',
  'camera-01': 'focus pull, then the shot: lens breathes, body snaps',
  'image-01': 'the complete photo lifts as one object',
  'video-01': 'the camera stays anchored while its side lens opens away',
  fire: 'while you hover, it burns — the flame outline flickers',
  flash: 'the bolt stores tension, discharges through its own outline, and settles',
  'leaf-01': 'the breeze holds — the leaf sways from its stem',
  flower: 'the petals turn around a fixed center',
  umbrella: 'drops reach the canopy and make a small splash at contact',
  cloud: 'a soft swell rolls through the cloud',
  'cloud-rain': 'rain falls from the cloud',
  'cloud-lightning': 'the bolt discharges under the cloud',
  'moon-02': 'a slow night float',
  sleeping: 'the Z marks drift farther from the face',
  snow: 'the connected flake turns as one object and returns to rest',
  'sun-03': 'a bright solar breath: the core gathers energy, the rays burst outward',
  'alert-circle': 'the mark shakes from its own center',
  'bug-01': 'the body shakes while the legs drift out of phase',
  'thumbs-up': 'the complete hand makes one coherent approval gesture',
  'bookmark-01': 'the ribbon catches at the binding and lands with a saved-state fold',
  'copy-01': 'the front sheet lifts off the rear panel, then returns',
  clipboard: 'the front clipboard merges over the rear board, then duplicates',
  'clipboard-paste': 'the arrow pulls back and releases while the clipboard absorbs it',
  'link-01': 'the complete chain flexes as one object',
  'link-square-02': 'the chain flexes inside the frame',
  'external-link': 'the arrow loads inside the frame, breaks free, and pulls the window',
  'shield-02': 'the shield absorbs the impact and passes the force into its core',
  'wallet-01': 'a banknote rises through the opening while the wallet stays coherent',
  'credit-card': 'the card swipes through a reader; details lag with inertia',
  'battery-charging-01': 'cells build to a full-charge surge, then hand energy back to the bolt',
  'zoom-in-area': 'the lens steps closer while the plus stamps',
  'zoom-out-area': 'the lens steps back while the minus pinches',
  'full-screen': 'all four corners contract, burst outward, and settle together',
  'maximize-screen': 'the arrow leads the window into the outer frame',
  'minimize-screen': 'the window yields inward toward the target frame',
  filter: 'the sliders shift in their tracks',
  'sliders-horizontal': 'each control snaps to a new setting',
  'sort-by-down-01': 'the arrow pulls the ordering downward',
  'sort-by-up-01': 'the arrow pulls the ordering upward',
  'volume-high': 'sound pressure expands away from the speaker',
  'volume-mute-01': 'the mute mark stamps while the waves collapse',
  'mic-01': "it's live — the grille bars pulse like an input meter",
  'mail-01': 'the flap turns edge-on, opens, then overshoots the closed position',
  'mail-open': 'the current letter keeps full visibility as it clears the top edge',
  'message-01': 'a message arrives — the bubble unfurls from its speech-tail',
  'message-add-01': 'the conversation inhales and the add mark pops into the open corner',
  'calendar-03': 'the binder responds once, then each date appears in reading order',
  'calendar-add-01': 'the calendar flips forward and the add mark stamps the new day',
  'airplane-take-off-01': 'one solid plane clears the frame before a second plane enters',
  sent: 'the first plane pulls back, banks, and accelerates beyond the top-right',
  'clock-01': 'a playful fast-forward: the long hand completes two circuits',
  compass: 'finding north: the needle whips a full turn, overshoots, and settles',
  earth: 'the globe turns as one object',
  'loading-03': 'a loading glyph is a wheel, so rotate the set in place',
  'target-01': 'the dart strikes and the inner ring expands into the next ring',
  'music-note-01': 'the sheet sways and the note heads answer',
  headphones: 'a bass hit stays inside the headphones: the band flexes and both cups answer',
  'headphone-off': 'the slash clears while the cups settle',
  'coffee-02': 'steam lifts while the cup settles',
  'robot-01': 'the antenna tunes in, the face tilts, and the display responds',
  'rocket-01': 'exhaust lags and stretches as acceleration builds',
  smile: 'recognition: a small head tilt, the smile widens, and it blinks',
  gift: "what's inside? — the box shakes from the base while the bows flutter",
  party: 'the popper recoils and the existing confetti emerges from inside its cone',
  ghost: 'a weightless bob with shifty eyes',
  crown: 'one restrained lift around its fixed center jewel',
  'diamond-02': 'the gem pops into the light and a glint flashes',
  puzzle: 'lift the piece, align it over its slot, then seat it with a click',
  command: 'a compact key press keeps the shortcut glyph clear',
  database: 'a short read head scans each platter from top to bottom',
  'qr-code-01': 'a scanner line travels down while the code cells answer in sequence',
  printer: 'the page hands off as the rollers release it',
  'scissor-01': 'the blades wind open, snap shut, and the frame answers',
  'paint-brush-02': 'roll up the wall to lay a strip, then collect it on the return',
  'magic-wand-01': 'a flick of the wrist, and the built-in stars keep happening',
  github: 'the cat crouches, then stretches and settles on its paws',
  'code-xml': 'the source slash clears toward the bottom left',
  bluetooth: 'the two nodes swap sides once along the arc',
  attachment: 'the paperclip winds open, catches, then springs into its nested shape',
  'document-attachment': 'the paperclip swings into the page and the text lines answer',
  inbox: 'the tray rises to catch incoming weight, then the inbox settles',
  'archive-02': 'a document slides through the bottom drawer seam',
  'panel-left': 'the divider follows the frame as the sidebar closes and reopens',
  'cursor-pointer-01': 'the pointer commits to a click; the rings collapse into the tip',
  'mouse-left-click-01': 'the click mark contracts as the mouse presses, then flicks back',
  save: 'the disk presses into place while its slots write in',
  bulb: 'a current climbs the stem, energizes the filament, and flexes the glass',
  'help-circle': 'the stem and dot answer each other',
  'information-circle': 'the stem and dot answer each other',
  'notification-off-01': 'the slash clears while the bell settles',
}

const RECIPE = {
  'add-circle': 'add-in-frame',
  'plus-sign': 'add-in-frame',
  'minus-sign': 'minus',
  'minus-sign-circle': 'minus-in-frame',
  'tick-02': 'draw-check',
  'circle-check': 'check-in-frame',
  'cancel-01': 'stamp-x',
  'circle-x': 'x-in-frame',
  'arrow-right-02': 'arrow-right',
  'arrow-left-02': 'arrow-left',
  'arrow-down-02': 'arrow-down',
  'arrow-up-02': 'arrow-up',
  'arrow-up-right-01': 'arrow-up',
  'arrow-up-left-01': 'arrow-up',
  'arrow-down-right-01': 'arrow-down',
  'arrow-down-left-01': 'arrow-down',
  'chevron-right': 'chevron-right',
  'chevron-left': 'chevron-left',
  'chevron-down': 'chevron-down',
  'chevron-up': 'chevron-up',
  'download-01': 'download',
  'upload-01': 'upload',
  'file-download': 'download',
  'file-upload': 'upload',
  'cloud-download': 'download',
  'cloud-upload': 'upload',
  'notification-03': 'swing',
  'alarm-clock': 'swing',
  'call-02': 'call',
  'call-incoming-01': 'login',
  'call-outgoing-01': 'logout',
  user: 'user',
  'user-add-01': 'user-add',
  'user-check-01': 'user-check',
  'user-remove-01': 'user-remove',
  'user-group': 'user-group',
  'user-multiple-02': 'user-group',
  'folder-01': 'folder',
  'folder-add': 'folder-add',
  'folder-open': 'folder',
  'file-01': 'file',
  'file-add': 'file-add',
  'list-view': 'list',
  'menu-01': 'list',
  'dashboard-square-01': 'grid',
  'grid-view': 'grid-cell',
  'more-horizontal': 'more',
  'more-vertical': 'more',
  favourite: 'heart',
  star: 'heart',
  sparkles: 'more',
  'wifi-01': 'wifi',
  'search-01': 'search',
  'settings-01': 'gear',
  refresh: 'refresh',
  undo: 'undo',
  redo: 'refresh',
  history: 'undo',
  lock: 'lock',
  'square-lock-01': 'lock',
  'key-01': 'lock',
  'delete-02': 'trash',
  play: 'play',
  pause: 'pause',
  eye: 'blink',
  'eye-off': 'blink',
  'home-01': 'home',
  'login-01': 'login',
  'logout-01': 'logout',
  'edit-02': 'edit',
  'share-08': 'share',
  'shopping-cart-01': 'cart',
  'shopping-cart-add-01': 'cart-add',
  'location-01': 'pin',
  'location-add-01': 'pin-add',
  pin: 'pin',
  'camera-01': 'camera',
  'image-01': 'file',
  'video-01': 'camera',
  fire: 'fire',
  flash: 'fire',
  'leaf-01': 'leaf',
  flower: 'leaf',
  umbrella: 'leaf',
  cloud: 'cloud',
  'cloud-rain': 'download',
  'cloud-lightning': 'fire',
  'moon-02': 'cloud',
  sleeping: 'cloud',
  snow: 'leaf',
  'sun-03': 'heart',
  'alert-circle': 'alert',
  'bug-01': 'alert',
  'thumbs-up': 'thumbs',
  'bookmark-01': 'bookmark',
  'copy-01': 'copy',
  clipboard: 'copy',
  'clipboard-paste': 'download',
  'link-01': 'link',
  'link-square-02': 'link',
  'external-link': 'external',
  'shield-02': 'shield',
  'wallet-01': 'wallet',
  'credit-card': 'card',
  'battery-charging-01': 'battery',
  'zoom-in-area': 'zoom-in',
  'zoom-out-area': 'zoom-out',
  'full-screen': 'expand',
  'maximize-screen': 'expand',
  'minimize-screen': 'collapse',
  filter: 'filter',
  'sliders-horizontal': 'slider',
  'sort-by-down-01': 'arrow-down',
  'sort-by-up-01': 'arrow-up',
  'volume-high': 'volume',
  'volume-mute-01': 'volume',
  'mic-01': 'volume',
  'mail-01': 'mail',
  'mail-open': 'mail',
  'message-01': 'message',
  'message-add-01': 'message-add',
  'calendar-03': 'file',
  'calendar-add-01': 'file-add',
  'airplane-take-off-01': 'arrow-up',
  sent: 'arrow-up',
  'clock-01': 'gear',
  compass: 'gear',
  earth: 'cloud',
  'loading-03': 'spin',
  'target-01': 'shield',
  'music-note-01': 'leaf',
  headphones: 'leaf',
  'headphone-off': 'leaf',
  'coffee-02': 'leaf',
  'robot-01': 'user',
  'rocket-01': 'arrow-up',
  smile: 'blink',
  gift: 'alert',
  party: 'alert',
  ghost: 'cloud',
  crown: 'home',
  'diamond-02': 'heart',
  puzzle: 'pin',
  command: 'camera',
  database: 'list',
  'qr-code-01': 'grid',
  printer: 'file',
  'scissor-01': 'stamp-x',
  'paint-brush-02': 'edit',
  'magic-wand-01': 'heart',
  github: 'leaf',
  'code-xml': 'stamp-x',
  bluetooth: 'share',
  attachment: 'leaf',
  'document-attachment': 'file',
  inbox: 'download',
  'archive-02': 'file',
  'panel-left': 'login',
  'cursor-pointer-01': 'play',
  'mouse-left-click-01': 'play',
  save: 'camera',
  bulb: 'fire',
  'help-circle': 'user',
  'information-circle': 'user',
  'notification-off-01': 'swing',
}

const SYNONYM = {
  account: 'user',
  profile: 'user',
  avatar: 'user',
  member: 'user',
  team: 'user-group',
  contact: 'user',
  customer: 'user',
  employee: 'user',
  person: 'user',
  people: 'user-group',
  man: 'user',
  woman: 'user',
  male: 'user',
  female: 'user',
  baby: 'user',
  kid: 'user',
  child: 'user',
  accessibility: 'user',
  add: 'add-circle',
  plus: 'plus-sign',
  minus: 'minus-sign',
  subtract: 'minus-sign',
  check: 'tick-02',
  tick: 'tick-02',
  done: 'tick-02',
  verify: 'tick-02',
  success: 'circle-check',
  approve: 'tick-02',
  cancel: 'cancel-01',
  close: 'cancel-01',
  cross: 'cancel-01',
  multiply: 'cancel-01',
  block: 'circle-x',
  ban: 'circle-x',
  forbidden: 'circle-x',
  arrow: 'arrow-right-02',
  chevron: 'chevron-right',
  caret: 'chevron-right',
  download: 'download-01',
  import: 'download-01',
  install: 'download-01',
  upload: 'upload-01',
  export: 'upload-01',
  publish: 'upload-01',
  notification: 'notification-03',
  bell: 'notification-03',
  alarm: 'alarm-clock',
  ring: 'notification-03',
  call: 'call-02',
  phone: 'call-02',
  telephone: 'call-02',
  folder: 'folder-01',
  directory: 'folder-01',
  file: 'file-01',
  document: 'file-01',
  page: 'file-01',
  paper: 'file-01',
  note: 'file-01',
  pdf: 'file-01',
  zip: 'file-01',
  archive: 'archive-02',
  mail: 'mail-01',
  email: 'mail-01',
  envelope: 'mail-01',
  inbox: 'inbox',
  message: 'message-01',
  chat: 'message-01',
  comment: 'message-01',
  bubble: 'message-01',
  search: 'search-01',
  find: 'search-01',
  magnifier: 'search-01',
  setting: 'settings-01',
  settings: 'settings-01',
  gear: 'settings-01',
  cog: 'settings-01',
  wifi: 'wifi-01',
  signal: 'wifi-01',
  broadcast: 'wifi-01',
  list: 'list-view',
  menu: 'menu-01',
  hamburger: 'menu-01',
  align: 'list-view',
  text: 'list-view',
  paragraph: 'list-view',
  grid: 'grid-view',
  dashboard: 'dashboard-square-01',
  layout: 'dashboard-square-01',
  widget: 'dashboard-square-01',
  table: 'dashboard-square-01',
  chart: 'dashboard-square-01',
  more: 'more-horizontal',
  heart: 'favourite',
  favourite: 'favourite',
  favorite: 'favourite',
  love: 'favourite',
  star: 'star',
  sparkle: 'sparkles',
  award: 'star',
  medal: 'star',
  lock: 'lock',
  unlock: 'square-lock-01',
  padlock: 'lock',
  secure: 'lock',
  key: 'key-01',
  password: 'key-01',
  delete: 'delete-02',
  trash: 'delete-02',
  bin: 'delete-02',
  play: 'play',
  youtube: 'play',
  pause: 'pause',
  eye: 'eye',
  view: 'eye',
  visible: 'eye',
  refresh: 'refresh',
  sync: 'refresh',
  reload: 'refresh',
  undo: 'undo',
  redo: 'redo',
  history: 'history',
  share: 'share-08',
  cart: 'shopping-cart-01',
  shop: 'shopping-cart-01',
  bag: 'shopping-cart-01',
  store: 'shopping-cart-01',
  location: 'location-01',
  map: 'location-01',
  pin: 'pin',
  marker: 'location-01',
  gps: 'location-01',
  place: 'location-01',
  home: 'home-01',
  house: 'home-01',
  building: 'home-01',
  office: 'home-01',
  login: 'login-01',
  signin: 'login-01',
  enter: 'login-01',
  logout: 'logout-01',
  signout: 'logout-01',
  exit: 'logout-01',
  edit: 'edit-02',
  pencil: 'edit-02',
  pen: 'edit-02',
  write: 'edit-02',
  adobe: 'edit-02',
  fire: 'fire',
  flame: 'fire',
  flash: 'flash',
  zap: 'flash',
  bolt: 'flash',
  leaf: 'leaf-01',
  plant: 'leaf-01',
  tree: 'leaf-01',
  flower: 'flower',
  cloud: 'cloud',
  weather: 'cloud',
  sun: 'sun-03',
  brightness: 'sun-03',
  moon: 'moon-02',
  night: 'moon-02',
  sleep: 'sleeping',
  camera: 'camera-01',
  photo: 'image-01',
  image: 'image-01',
  picture: 'image-01',
  clock: 'clock-01',
  time: 'clock-01',
  timer: 'clock-01',
  calendar: 'calendar-03',
  schedule: 'calendar-03',
  event: 'calendar-03',
  alert: 'alert-circle',
  warning: 'alert-circle',
  error: 'alert-circle',
  bug: 'bug-01',
  thumbs: 'thumbs-up',
  volume: 'volume-high',
  speaker: 'volume-high',
  sound: 'volume-high',
  mic: 'mic-01',
  microphone: 'mic-01',
  slider: 'sliders-horizontal',
  filter: 'filter',
  sort: 'sort-by-down-01',
  bookmark: 'bookmark-01',
  book: 'bookmark-01',
  copy: 'copy-01',
  clone: 'copy-01',
  duplicate: 'copy-01',
  clipboard: 'clipboard',
  paste: 'clipboard-paste',
  link: 'link-01',
  chain: 'link-01',
  external: 'external-link',
  shield: 'shield-02',
  wallet: 'wallet-01',
  money: 'wallet-01',
  dollar: 'wallet-01',
  bitcoin: 'wallet-01',
  coin: 'wallet-01',
  cash: 'wallet-01',
  bank: 'wallet-01',
  payment: 'wallet-01',
  card: 'credit-card',
  battery: 'battery-charging-01',
  zoom: 'zoom-in-area',
  fullscreen: 'full-screen',
  maximize: 'maximize-screen',
  expand: 'full-screen',
  minimize: 'minimize-screen',
  collapse: 'minimize-screen',
  print: 'printer',
  printer: 'printer',
  scissor: 'scissor-01',
  cut: 'scissor-01',
  save: 'save',
  attachment: 'attachment',
  paperclip: 'attachment',
  loading: 'loading-03',
  spinner: 'loading-03',
  compass: 'compass',
  earth: 'earth',
  globe: 'earth',
  world: 'earth',
  target: 'target-01',
  rocket: 'rocket-01',
  airplane: 'airplane-take-off-01',
  plane: 'airplane-take-off-01',
  flight: 'airplane-take-off-01',
  sent: 'sent',
  send: 'sent',
  video: 'video-01',
  movie: 'video-01',
  music: 'music-note-01',
  song: 'music-note-01',
  headphone: 'headphones',
  headphones: 'headphones',
  coffee: 'coffee-02',
  tea: 'coffee-02',
  cup: 'coffee-02',
  robot: 'robot-01',
  bot: 'robot-01',
  party: 'party',
  gift: 'gift',
  cake: 'gift',
  smile: 'smile',
  emoji: 'smile',
  face: 'smile',
  snow: 'snow',
  rain: 'cloud-rain',
  lightning: 'cloud-lightning',
  umbrella: 'umbrella',
  cursor: 'cursor-pointer-01',
  mouse: 'mouse-left-click-01',
  click: 'mouse-left-click-01',
  pointer: 'cursor-pointer-01',
  paint: 'paint-brush-02',
  brush: 'paint-brush-02',
  magic: 'magic-wand-01',
  wand: 'magic-wand-01',
  ghost: 'ghost',
  github: 'github',
  git: 'github',
  code: 'code-xml',
  xml: 'code-xml',
  html: 'code-xml',
  qr: 'qr-code-01',
  database: 'database',
  command: 'command',
  puzzle: 'puzzle',
  crown: 'crown',
  diamond: 'diamond-02',
  bluetooth: 'bluetooth',
  panel: 'panel-left',
  bulb: 'bulb',
  lamp: 'bulb',
  light: 'bulb',
  inbox: 'inbox',
  help: 'help-circle',
  information: 'information-circle',
  info: 'information-circle',
  yogurt: 'coffee-02',
  milk: 'coffee-02',
  food: 'coffee-02',
  drink: 'coffee-02',
  wrench: 'key-01',
  hammer: 'key-01',
  screwdriver: 'key-01',
  tool: 'key-01',
  abacus: 'sliders-horizontal',
  activity: 'dashboard-square-01',
  address: 'location-01',
  access: 'lock',
  accident: 'alert-circle',
  acceleration: 'rocket-01',
  recover: 'undo',
  recovery: 'undo',
  adobe: 'edit-02',
  youtube: 'play',
  ai: 'sparkles',
  border: 'dashboard-square-01',
  touch: 'mouse-left-click-01',
  tap: 'mouse-left-click-01',
  swipe: 'cursor-pointer-01',
  badge: 'star',
  go: 'arrow-right-02',
  rotate: 'refresh',
  usb: 'save',
  pathfinder: 'filter',
  receipt: 'file-01',
  navigation: 'location-01',
  alphabet: 'list-view',
  unlink: 'link-01',
  apple: 'leaf-01',
  artificial: 'sparkles',
  chair: 'home-01',
  coins: 'wallet-01',
  delivery: 'shopping-cart-01',
  flag: 'bookmark-01',
  google: 'search-01',
  heading: 'list-view',
  layer: 'dashboard-square-01',
  layers: 'dashboard-square-01',
  package: 'archive-02',
  power: 'flash',
  progress: 'loading-03',
  root: 'leaf-01',
  shaka: 'thumbs-up',
  test: 'tick-02',
  touchpad: 'mouse-left-click-01',
  agreement: 'tick-02',
  bed: 'sleeping',
  blood: 'favourite',
  cap: 'crown',
  car: 'shopping-cart-01',
  cashback: 'wallet-01',
  chemistry: 'bulb',
  disc: 'save',
  door: 'login-01',
  drag: 'cursor-pointer-01',
  exclamation: 'alert-circle',
  hand: 'thumbs-up',
  hold: 'mouse-left-click-01',
  ice: 'snow',
  knife: 'scissor-01',
  license: 'file-01',
  megaphone: 'volume-high',
  mobile: 'call-02',
  new: 'file-add',
  pizza: 'coffee-02',
  quiz: 'help-circle',
  radar: 'wifi-01',
  repeat: 'refresh',
  resize: 'full-screen',
  restaurant: 'coffee-02',
  scooter: 'shopping-cart-01',
  simcard: 'credit-card',
  stroke: 'edit-02',
  typescript: 'code-xml',
  web: 'earth',
  airpod: 'headphones',
  album: 'image-01',
  alien: 'ghost',
  atom: 'sparkles',
  audit: 'file-01',
  backward: 'undo',
  blockchain: 'link-01',
  brain: 'bulb',
  cards: 'credit-card',
  case: 'folder-01',
  checkmark: 'tick-02',
  city: 'home-01',
  clapping: 'thumbs-up',
  comet: 'sparkles',
  mp: 'file-01',
}

function tokensOf(name) {
  return name.split('-').filter((p) => !/^\d+$/.test(p))
}

function has(tokens, ...words) {
  return words.some((w) => tokens.has(w))
}

const GENERIC = new Set([
  'add', 'plus', 'minus', 'remove', 'check', 'off', 'on', 'in', 'out', 'up', 'down',
  'left', 'right', 'circle', 'square', 'stroke', 'solid', 'fill', 'icon', 'horizontal',
  'vertical', 'sign', 'area', 'big', 'small', 'mini', 'free',
])

function scoreName(name, donor) {
  const a = tokensOf(name)
  const b = tokensOf(donor)
  const sb = new Set(b)
  const base = name.replace(/-\d+$/, '')
  const db = donor.replace(/-\d+$/, '')
  let s = 0
  if (base === db) s += 100
  if (base.startsWith(`${db}-`) || db.startsWith(`${base}-`)) s += 70
  if (a[0] && a[0] === b[0] && a[0].length > 2 && !GENERIC.has(a[0])) s += 50
  if (a[1] && a[1] === b[1] && !GENERIC.has(a[1])) s += 28
  for (const t of a) {
    if (sb.has(t) && t.length > 2 && !GENERIC.has(t)) s += 16
  }
  if (a.length >= 2 && b.length >= 2 && a[0] === b[0] && a[1] === b[1] && !GENERIC.has(a[0])) s += 20
  return s
}

function matchByName(name) {
  let best = null
  let bestS = 0
  for (const d of DONORS) {
    const s = scoreName(name, d)
    if (s > bestS) {
      bestS = s
      best = d
    }
  }
  if (bestS >= 50) return best
  return null
}

function matchBySynonym(tokens) {
  const list = [...tokens]
  for (let i = 0; i < list.length - 1; i += 1) {
    const pair = `${list[i]}-${list[i + 1]}`
    if (SYNONYM[pair]) return SYNONYM[pair]
  }
  for (const t of [...list].reverse()) {
    if (SYNONYM[t]) return SYNONYM[t]
  }
  return null
}

function matchByGeometry(analyzed) {
  const plus = analyzed.some((a) => a.isPlus)
  const check = analyzed.some((a) => a.isCheck)
  const cross = analyzed.some((a) => a.isX)
  const dots = analyzed.filter((a) => a.isDot)
  const bars = analyzed.filter((a) => a.isBar || a.isHLine)
  const arcs = analyzed.filter((a) => a.isArc)
  const closed = analyzed.filter((a) => a.closed)
  const bodies = [...analyzed].sort((a, b) => b.area - a.area)
  const largest = bodies[0]
  const groups = groupSimilar(analyzed)

  if (plus) return analyzed.length > 1 ? 'add-circle' : 'plus-sign'
  if (check) return analyzed.some((a) => a.closed && a.area > 80) ? 'circle-check' : 'tick-02'
  if (cross) return analyzed.some((a) => a.closed && a.area > 80) ? 'circle-x' : 'cancel-01'
  if (bars.length >= 2 && bars.length >= analyzed.length - 1) return 'list-view'
  if (groups[0] && groups[0].length >= 4) return 'dashboard-square-01'
  if (groups[0] && groups[0].length >= 3) return 'grid-view'
  if (dots.length >= 2 && dots.length >= analyzed.length - 1) return 'more-horizontal'
  if (arcs.length >= 2) return 'wifi-01'
  const head = analyzed.find((a) => (a.isCircle || a.closed) && a.cy < 11 && a.area < 160)
  const body = analyzed.find((a) => a !== head && !a.closed && a.cy >= 11)
  if (head && body) return 'user'
  if (largest && bars.length >= 1 && largest.closed) return 'file-01'
  if (largest?.closed && largest.aspect < 0.7) return 'bookmark-01'
  if (largest?.closed && largest.aspect > 1.35) return 'file-01'
  if (largest?.closed && largest.cy > 14.5) return 'location-01'
  if (largest?.closed && largest.cy < 8.5) return 'notification-03'
  if (closed.length >= 2 && bodies[1] && largest.area > bodies[1].area * 1.7) return 'file-01'
  if (closed.length >= 2) return 'copy-01'
  if (analyzed.length === 1 && !largest?.closed) return 'edit-02'
  if (analyzed.length === 1 && largest?.closed && largest.area > 180) return 'home-01'
  if (analyzed.length === 1) return 'pin'
  if (analyzed.length >= 3) return 'dashboard-square-01'
  return 'folder-01'
}

function similar(a, b) {
  const ratio = Math.min(a.area, b.area) / Math.max(a.area, 0.01)
  return ratio > 0.55 && Math.abs(a.aspect - b.aspect) < 0.55 && Math.abs(a.w - b.w) < 4
}

function groupSimilar(items) {
  if (items.length < 2) return []
  const groups = []
  const used = new Set()
  for (let i = 0; i < items.length; i += 1) {
    if (used.has(i)) continue
    const pack = [items[i]]
    used.add(i)
    for (let j = i + 1; j < items.length; j += 1) {
      if (used.has(j)) continue
      if (similar(items[i], items[j])) {
        pack.push(items[j])
        used.add(j)
      }
    }
    if (pack.length >= 2) groups.push(pack)
  }
  return groups.sort((a, b) => b.length - a.length)
}

export function matchDonor(name, analyzed) {
  const tokens = new Set(tokensOf(name))

  if (has(tokens, 'heart', 'favourite', 'favorite', 'love') && has(tokens, 'add', 'plus')) return 'favourite'
  if (has(tokens, 'user', 'person', 'people', 'profile', 'avatar', 'member', 'team', 'contact', 'account', 'customer', 'employee', 'baby', 'kid', 'child') && has(tokens, 'add', 'plus')) return 'user-add-01'
  if (has(tokens, 'user', 'person', 'people', 'profile', 'avatar') && has(tokens, 'check', 'tick', 'done')) return 'user-check-01'
  if (has(tokens, 'user', 'person', 'people', 'profile', 'avatar') && has(tokens, 'remove', 'minus', 'delete')) return 'user-remove-01'
  if (has(tokens, 'folder') && has(tokens, 'add', 'plus')) return 'folder-add'
  if (has(tokens, 'file', 'document') && has(tokens, 'add', 'plus')) return 'file-add'
  if (has(tokens, 'file', 'document') && has(tokens, 'download')) return 'file-download'
  if (has(tokens, 'file', 'document') && has(tokens, 'upload')) return 'file-upload'
  if (has(tokens, 'cloud') && has(tokens, 'download')) return 'cloud-download'
  if (has(tokens, 'cloud') && has(tokens, 'upload')) return 'cloud-upload'
  if (has(tokens, 'message', 'chat', 'comment') && has(tokens, 'add', 'plus')) return 'message-add-01'
  if (has(tokens, 'calendar') && has(tokens, 'add', 'plus')) return 'calendar-add-01'
  if (has(tokens, 'location', 'map', 'pin') && has(tokens, 'add', 'plus')) return 'location-add-01'
  if (has(tokens, 'cart', 'shop', 'bag') && has(tokens, 'add', 'plus')) return 'shopping-cart-add-01'
  if (has(tokens, 'zoom') && has(tokens, 'out')) return 'zoom-out-area'
  if (has(tokens, 'zoom') && has(tokens, 'in')) return 'zoom-in-area'
  if (has(tokens, 'volume') && has(tokens, 'mute', 'off')) return 'volume-mute-01'
  if (has(tokens, 'eye') && has(tokens, 'off')) return 'eye-off'
  if (has(tokens, 'notification', 'bell') && has(tokens, 'off')) return 'notification-off-01'
  if (has(tokens, 'arrow', 'chevron', 'caret')) {
    if (has(tokens, 'up') && has(tokens, 'right')) return tokens.has('chevron') ? 'chevron-up' : 'arrow-up-right-01'
    if (has(tokens, 'up') && has(tokens, 'left')) return tokens.has('chevron') ? 'chevron-up' : 'arrow-up-left-01'
    if (has(tokens, 'down') && has(tokens, 'right')) return tokens.has('chevron') ? 'chevron-down' : 'arrow-down-right-01'
    if (has(tokens, 'down') && has(tokens, 'left')) return tokens.has('chevron') ? 'chevron-down' : 'arrow-down-left-01'
    if (has(tokens, 'right', 'forward', 'next')) return tokens.has('chevron') || tokens.has('caret') ? 'chevron-right' : 'arrow-right-02'
    if (has(tokens, 'left', 'back', 'previous')) return tokens.has('chevron') || tokens.has('caret') ? 'chevron-left' : 'arrow-left-02'
    if (has(tokens, 'up') && !has(tokens, 'upload')) return tokens.has('chevron') ? 'chevron-up' : 'arrow-up-02'
    if (has(tokens, 'down') && !has(tokens, 'download')) return tokens.has('chevron') ? 'chevron-down' : 'arrow-down-02'
    return tokens.has('chevron') || tokens.has('caret') ? 'chevron-right' : 'arrow-right-02'
  }

  const named = matchByName(name)
  if (named) return named
  const syn = matchBySynonym(tokens)
  if (syn) return syn
  return matchByGeometry(analyzed)
}

function role(kind, origin, extra = {}) {
  return { kind, origin, ...extra }
}

function originFor(el, bias = 'center') {
  if (!el) return [12, 12]
  const r = (n) => Math.round(n * 100) / 100
  if (bias === 'top') return [r(el.cx), r(el.minY)]
  if (bias === 'bottom') return [r(el.cx), r(el.maxY)]
  if (bias === 'left') return [r(el.minX), r(el.cy)]
  if (bias === 'right') return [r(el.maxX), r(el.cy)]
  return [r(el.cx), r(el.cy)]
}

function findPlus(analyzed) {
  const single = analyzed.find((a) => a.isPlus)
  if (single) return { els: [single], origin: originFor(single) }
  const verts = analyzed.filter((a) => a.isVLine)
  const horiz = analyzed.filter((a) => a.isHLine)
  for (const v of verts) {
    for (const h of horiz) {
      const crossX = v.cx >= h.minX - 1 && v.cx <= h.maxX + 1
      const crossY = h.cy >= v.minY - 1 && h.cy <= v.maxY + 1
      if (crossX && crossY) return { els: [v, h], origin: [Math.round(v.cx * 100) / 100, Math.round(h.cy * 100) / 100] }
    }
  }
  return null
}

function findCheck(analyzed) {
  return analyzed.find((a) => a.isCheck) || null
}

function findX(analyzed) {
  const single = analyzed.find((a) => a.isX)
  if (single) return { els: [single], origin: originFor(single) }
  return null
}

function framesOf(analyzed, marks) {
  const ids = new Set(marks.map((m) => m.index))
  return analyzed.filter((a) => !ids.has(a.index))
}

export function applyDonor(donor, name, analyzed, story = null) {
  const recipe = story?.recipe || RECIPE[donor] || 'folder'
  const verb = story?.verb || VERB[donor] || 'after a hand-crafted sibling'
  const loops = story?.loops ?? ['call-02', 'fire', 'wifi-01', 'mic-01', 'shopping-cart-01', 'music-note-01', 'loading-03', 'sun-03', 'alarm-clock', 'leaf-01', 'ghost', 'bug-01', 'cloud-rain'].includes(donor)
  const clip = story?.clip === true
  const roles = analyzed.map(() => ({ kind: 'folder-tilt', origin: [12, 12] }))
  const set = (el, next) => {
    if (!el) return
    roles[el.index] = next
  }
  const setAll = (kind, origin) => {
    for (const a of analyzed) set(a, role(kind, origin || originFor(a)))
  }
  const setMany = (els, kind, origin) => {
    els.forEach((el, i) => set(el, role(kind, origin || originFor(el), { custom: i })))
  }

  const plus = findPlus(analyzed)
  const check = findCheck(analyzed)
  const cross = findX(analyzed)
  const dots = analyzed.filter((a) => a.isDot)
  const bars = analyzed.filter((a) => a.isBar || a.isHLine)
  const arcs = analyzed.filter((a) => a.isArc)
  const bodies = [...analyzed].sort((a, b) => b.area - a.area)
  const largest = bodies[0]
  const smallest = bodies[bodies.length - 1]
  const groups = groupSimilar(analyzed)

  const applyPlusOn = (frameKind, plusKind) => {
    if (plus) {
      setMany(plus.els, plusKind, plus.origin)
      for (const a of framesOf(analyzed, plus.els)) set(a, role(frameKind, originFor(a)))
      return
    }
    if (smallest && largest && smallest !== largest) {
      set(smallest, role(plusKind, originFor(smallest)))
      set(largest, role(frameKind, originFor(largest)))
      return
    }
    setAll(plusKind, originFor(largest))
  }

  switch (recipe) {
    case 'frame':
      setAll('add-frame', originFor(largest))
      break
    case 'collision': {
      const lower = analyzed
        .filter((a) => a.cy >= 12)
        .sort((a, b) => a.cx - b.cx)
      const leftVehicle = lower[0] || analyzed[analyzed.length - 2]
      const rightVehicle = lower[lower.length - 1] || analyzed[analyzed.length - 1]
      const impact = analyzed.filter((a) => a !== leftVehicle && a !== rightVehicle)
      set(leftVehicle, role('collision-left', originFor(leftVehicle, 'bottom')))
      set(rightVehicle, role('collision-right', originFor(rightVehicle, 'bottom')))
      impact.forEach((a) => set(a, role('impact-burst', [12, 8])))
      break
    }
    case 'emergency-drive': {
      const beacon =
        analyzed.find((a) => a.cy < 10 && a.area < (largest?.area || 200) * 0.45) ||
        analyzed.find((a) => a.cy < 9)
      for (const a of analyzed) {
        set(a, role(a === beacon ? 'emergency-beacon' : 'emergency-drive', originFor(a, 'bottom')))
      }
      break
    }
    case 'emergency-beacon-frame': {
      // the structure stays put, the medical/emergency mark on it pulses
      const mark = analyzed.find((a) => a.isPlus) || smallest
      for (const a of analyzed) {
        set(a, role(a === mark ? 'emergency-beacon' : 'static', originFor(a)))
      }
      break
    }
    case 'clap': {
      // two hands drive together and rebound, no impact burst
      const sorted = [...analyzed].sort((a, b) => a.cx - b.cx)
      const mid = Math.ceil(sorted.length / 2)
      sorted.forEach((a, i) => {
        const left = i < mid
        set(a, role(left ? 'collision-left' : 'collision-right', originFor(a, left ? 'right' : 'left')))
      })
      break
    }
    case 'add-in-frame':
      applyPlusOn('add-frame', 'add-plus')
      break
    case 'minus':
      setAll('minus', originFor(analyzed.find((a) => a.isHLine) || largest))
      break
    case 'minus-in-frame': {
      const minus = analyzed.find((a) => a.isHLine) || smallest
      set(minus, role('minus', originFor(minus)))
      for (const a of framesOf(analyzed, [minus])) set(a, role('add-frame', originFor(a)))
      break
    }
    case 'draw-check':
      set(check || smallest, role('draw-check', originFor(check || smallest)))
      for (const a of framesOf(analyzed, [check || smallest])) set(a, role('check-impact', [12, 12]))
      break
    case 'check-in-frame':
      set(check || smallest, role('draw-check', originFor(check || smallest)))
      for (const a of framesOf(analyzed, [check || smallest])) set(a, role('check-impact', originFor(a)))
      break
    case 'stamp-x':
      if (cross) setMany(cross.els, 'stamp-x', cross.origin)
      else setAll('stamp-x', originFor(largest))
      break
    case 'x-in-frame':
      if (cross) {
        setMany(cross.els, 'stamp-x', cross.origin)
        for (const a of framesOf(analyzed, cross.els)) set(a, role('add-frame', originFor(a)))
      } else {
        set(smallest, role('stamp-x', originFor(smallest)))
        if (largest && largest !== smallest) set(largest, role('add-frame', originFor(largest)))
      }
      break
    case 'arrow-right':
      setAll('arrow-right', [12, 12])
      break
    case 'arrow-left':
      setAll('arrow-left', [12, 12])
      break
    case 'arrow-down':
      setAll('arrow-down', [12, 12])
      break
    case 'arrow-up':
      setAll('arrow-up', [12, 12])
      break
    case 'arrow-up-right':
      setAll('arrow-up-right', [12, 12])
      break
    case 'arrow-up-left':
      setAll('arrow-up-left', [12, 12])
      break
    case 'arrow-down-right':
      setAll('arrow-down-right', [12, 12])
      break
    case 'arrow-down-left':
      setAll('arrow-down-left', [12, 12])
      break
    case 'chevron-right':
      setAll('chevron-right', [12, 12])
      break
    case 'chevron-left':
      setAll('chevron-left', [12, 12])
      break
    case 'chevron-down':
      setAll('chevron-down', [12, 12])
      break
    case 'chevron-up':
      setAll('chevron-up', [12, 12])
      break
    case 'download': {
      const moving = analyzed.find((a) => a.dir === 'down' || a.chevron === 'down') || analyzed[analyzed.length - 1]
      const tray = analyzed.find((a) => a.index !== moving.index && a.cy > moving.cy - 1) || analyzed.find((a) => a.index !== moving.index)
      set(moving, role('download-arrow', originFor(moving)))
      if (tray) set(tray, role('download-tray', originFor(tray, 'bottom')))
      for (const a of analyzed) {
        if (roles[a.index].kind === 'folder-tilt') set(a, role('download-tray', originFor(a)))
      }
      break
    }
    case 'upload': {
      const moving = analyzed.find((a) => a.dir === 'up' || a.chevron === 'up') || analyzed[analyzed.length - 1]
      const tray = analyzed.find((a) => a.index !== moving.index)
      set(moving, role('upload-arrow', originFor(moving)))
      if (tray) set(tray, role('upload-tray', originFor(tray)))
      for (const a of analyzed) {
        if (roles[a.index].kind === 'folder-tilt') set(a, role('upload-tray', originFor(a)))
      }
      break
    }
    case 'swing':
      setAll('swing-bell', originFor(largest, 'top'))
      break
    case 'call':
      setAll('call', originFor(largest, 'top'))
      break
    case 'user': {
      const frame = analyzed.find((a) => a.closed && a.area > 220)
      const head =
        analyzed.find((a) => a !== frame && (a.isCircle || a.closed) && a.cy < 13 && a.area < 160) ||
        analyzed.find((a) => a !== frame && (a.isCircle || a.closed) && a.cy < 13) ||
        analyzed[0]
      const shoulders = analyzed.find((a) => a !== head && a !== frame && !a.isPlus && a.cy >= (head?.cy || 8))
      set(head, role('user-head', originFor(head, 'bottom')))
      if (shoulders) set(shoulders, role('user-body', originFor(shoulders)))
      if (frame) set(frame, role('add-frame', originFor(frame)))
      for (const a of analyzed) {
        if (roles[a.index].kind === 'folder-tilt') set(a, role('user-nod-all', originFor(a)))
      }
      break
    }
    case 'user-add':
      applyPlusOn('user-nod-all', 'add-plus')
      break
    case 'user-check':
      set(check || smallest, role('draw-check', originFor(check || smallest)))
      for (const a of framesOf(analyzed, [check || smallest])) set(a, role('user-nod-all', originFor(a)))
      break
    case 'user-remove':
      if (cross) {
        setMany(cross.els, 'user-remove-mark', cross.origin)
        for (const a of framesOf(analyzed, cross.els)) set(a, role('user-recoil', originFor(a)))
      } else {
        set(smallest, role('user-remove-mark', originFor(smallest)))
        for (const a of framesOf(analyzed, [smallest])) set(a, role('user-recoil', originFor(a)))
      }
      break
    case 'user-group':
      analyzed.forEach((a, i) => set(a, role(i === 0 ? 'user-nod-all' : 'user-recoil', originFor(a), { custom: i })))
      break
    case 'folder':
      setAll('folder-tilt', originFor(largest, 'bottom'))
      break
    case 'folder-add':
      applyPlusOn('folder-tilt', 'folder-plus')
      break
    case 'file':
      if (largest) set(largest, role('file-sheet', originFor(largest)))
      bars.filter((a) => a !== largest).forEach((a, i) => set(a, role('file-line', originFor(a, 'left'), { custom: i })))
      for (const a of analyzed) {
        if (roles[a.index].kind === 'folder-tilt') set(a, role('file-sheet', originFor(a)))
      }
      break
    case 'file-add':
      applyPlusOn('file-sheet', 'folder-plus')
      bars.forEach((a, i) => {
        if (roles[a.index].kind === 'file-sheet' || roles[a.index].kind === 'folder-tilt') {
          set(a, role('file-line', originFor(a, 'left'), { custom: i }))
        }
      })
      break
    case 'list': {
      const ordered = [...(bars.length >= 2 ? bars : analyzed)].sort((a, b) => a.cy - b.cy)
      ordered.forEach((a, i) => set(a, role('list-row', originFor(a, i % 2 === 0 ? 'left' : 'right'), { custom: i })))
      if (plus) setMany(plus.els, 'add-plus', plus.origin)
      else if (check) set(check, role('draw-check', originFor(check)))
      for (const a of analyzed) {
        if (roles[a.index].kind === 'folder-tilt') set(a, role('file-sheet', originFor(a)))
      }
      break
    }
    case 'grid': {
      const tiles = groups[0] ? [...groups[0]].sort((a, b) => a.cy - b.cy || a.cx - b.cx) : analyzed
      tiles.forEach((a, i) => set(a, role('grid-tile', originFor(a), { custom: i })))
      break
    }
    case 'grid-cell': {
      const tiles = groups[0] ? [...groups[0]].sort((a, b) => a.cy - b.cy || a.cx - b.cx) : analyzed
      tiles.forEach((a, i) => set(a, role('grid-cell', originFor(a), { custom: i })))
      break
    }
    case 'more': {
      const ordered = [...(dots.length >= 2 ? dots : analyzed)].sort((a, b) => a.cx - b.cx || a.cy - b.cy)
      ordered.forEach((a, i) => set(a, role('more-dot', originFor(a), { custom: i })))
      break
    }
    case 'heart':
      if (plus) applyPlusOn('heart', 'add-plus')
      else setAll('heart', originFor(largest))
      break
    case 'wifi': {
      const source = dots[0] || analyzed.find((a) => a.isCircle)
      const ordered = [...(arcs.length ? arcs : analyzed.filter((a) => a !== source))].sort((a, b) => a.area - b.area)
      const origin = source ? originFor(source) : [12, 18]
      ordered.forEach((a, i) => set(a, role('wifi-arc', origin, { custom: i })))
      if (source) set(source, role('wifi-source', origin))
      break
    }
    case 'search':
      setAll('search', originFor(largest))
      break
    case 'gear':
      setAll('gear', [12, 12])
      break
    case 'refresh':
      setAll('refresh', [12, 12])
      break
    case 'undo':
      setAll('undo', [12, 12])
      break
    case 'lock':
      if (largest) set(largest, role('lock-body', originFor(largest)))
      if (smallest && smallest !== largest) set(smallest, role('lock-key', originFor(smallest)))
      for (const a of analyzed) {
        if (roles[a.index].kind === 'folder-tilt') set(a, role('lock-body', originFor(a)))
      }
      break
    case 'trash': {
      const lid = analyzed.find((a) => a.cy < 10) || analyzed[0]
      const bin = analyzed.find((a) => a.index !== lid.index)
      set(lid, role('trash-lid', originFor(lid, 'left')))
      if (bin) set(bin, role('trash-bin', originFor(bin, 'bottom')))
      break
    }
    case 'play':
      setAll('play', originFor(largest, 'left'))
      break
    case 'pause':
      analyzed.forEach((a, i) => set(a, role('pause', originFor(a), { custom: i })))
      break
    case 'blink':
      setAll('blink', originFor(largest))
      break
    case 'home': {
      const smile = analyzed.find((a) => !a.closed && a.cy > 12) || smallest
      setAll('home-hop', originFor(largest, 'bottom'))
      if (smile && smile !== largest) set(smile, role('home-smile', originFor(smile, 'left')))
      break
    }
    case 'login': {
      const moving = analyzed.find((a) => !a.closed) || smallest
      set(moving, role('login-arrow', originFor(moving)))
      for (const a of framesOf(analyzed, [moving])) set(a, role('login-door', originFor(a, 'left')))
      break
    }
    case 'logout': {
      const moving = analyzed.find((a) => !a.closed) || smallest
      set(moving, role('logout-arrow', originFor(moving)))
      for (const a of framesOf(analyzed, [moving])) set(a, role('login-door', originFor(a, 'left')))
      break
    }
    case 'edit': {
      const nib = analyzed.find((a) => a.dir && String(a.dir).includes('-')) || analyzed.find((a) => !a.closed && a !== largest) || smallest
      set(nib, role('edit-nib', originFor(nib)))
      for (const a of framesOf(analyzed, [nib])) set(a, role(a.isHLine ? 'edit-line' : 'file-sheet', originFor(a)))
      break
    }
    case 'share': {
      const nodes = [...(dots.length >= 2 ? dots : analyzed.filter((a) => a.closed))].sort((a, b) => a.cy - b.cy)
      nodes.forEach((a, i) => set(a, role('share-node', originFor(a), { custom: i })))
      for (const a of analyzed) {
        if (roles[a.index].kind === 'folder-tilt') set(a, role('share-wire', originFor(a)))
      }
      break
    }
    case 'cart':
      setAll('cart-roll', originFor(largest, 'bottom'))
      break
    case 'cart-add':
      applyPlusOn('cart-roll', 'add-plus')
      break
    case 'pin':
      setAll('pin-drop', originFor(largest, 'bottom'))
      break
    case 'pin-add':
      applyPlusOn('pin-drop', 'add-plus')
      break
    case 'camera':
      setAll('camera', originFor(largest))
      break
    case 'fire':
      setAll('fire', originFor(largest, 'bottom'))
      break
    case 'leaf':
      setAll('leaf-sway', originFor(largest, 'bottom'))
      break
    case 'cloud':
      setAll('cloud-float', originFor(largest))
      break
    case 'alert':
      setAll('alert', originFor(largest))
      break
    case 'thumbs':
      setAll('thumbs', originFor(largest, 'bottom'))
      break
    case 'bookmark':
      setAll('bookmark', originFor(largest, 'top'))
      break
    case 'copy':
      if (largest) set(largest, role('file-sheet', originFor(largest)))
      if (smallest && smallest !== largest) set(smallest, role('copy-front', originFor(smallest)))
      for (const a of analyzed) {
        if (roles[a.index].kind === 'folder-tilt') set(a, role('copy-front', originFor(a)))
      }
      break
    case 'link':
      setAll('link-pull', originFor(largest))
      break
    case 'external': {
      const moving = analyzed.find((a) => !a.closed) || smallest
      set(moving, role('external-arrow', originFor(moving)))
      for (const a of framesOf(analyzed, [moving])) set(a, role('add-frame', originFor(a)))
      break
    }
    case 'shield':
      setAll('shield', originFor(largest))
      break
    case 'wallet':
      setAll('wallet', originFor(largest, 'left'))
      break
    case 'card':
      setAll('card-swipe', originFor(largest))
      break
    case 'battery':
      setAll('battery', originFor(largest, 'left'))
      break
    case 'zoom-in':
      applyPlusOn('zoom-in', 'add-plus')
      break
    case 'zoom-out': {
      const minus = analyzed.find((a) => a.isHLine) || smallest
      set(minus, role('minus', originFor(minus)))
      for (const a of framesOf(analyzed, [minus])) set(a, role('zoom-out', originFor(a)))
      break
    }
    case 'expand':
      setAll('expand', [12, 12])
      break
    case 'collapse':
      setAll('collapse', [12, 12])
      break
    case 'filter':
      setAll('filter', originFor(largest))
      break
    case 'slider':
      analyzed.forEach((a, i) => set(a, role('slider', originFor(a), { custom: i })))
      break
    case 'volume':
      analyzed.forEach((a, i) => set(a, role(a === largest ? 'camera' : 'volume', originFor(largest), { custom: i })))
      break
    case 'mail':
      setAll('mail-body', originFor(largest))
      break
    case 'message':
      setAll('message', originFor(largest))
      break
    case 'message-add':
      applyPlusOn('message', 'add-plus')
      break
    case 'spin':
      setAll('spin-loop', [12, 12])
      break
    case 'takeoff':
    case 'landing':
    case 'cruise': {
      const ground = analyzed.find((a) => a.isHLine && a.cy > 14) || analyzed.find((a) => a.isHLine)
      const body = analyzed.find((a) => a !== ground) || largest
      set(body, role(recipe, originFor(body)))
      if (ground) set(ground, role(recipe === 'landing' ? 'download-tray' : 'static', originFor(ground, 'bottom')))
      for (const a of analyzed) {
        if (roles[a.index].kind === 'folder-tilt') set(a, role(recipe, originFor(a)))
      }
      break
    }
    case 'sit':
      setAll('sit', originFor(largest, 'bottom'))
      break
    case 'disable': {
      const slash = cross?.els?.[0] || analyzed.find((a) => !a.closed && a.dir && String(a.dir).includes('-')) || smallest
      set(slash, role('stamp-x', originFor(slash)))
      for (const a of framesOf(analyzed, [slash])) set(a, role('power-down', originFor(a)))
      break
    }
    case 'power-down':
      setAll('power-down', originFor(largest))
      break
    case 'hover-flight':
      setAll('hover-flight', originFor(largest))
      break
    case 'launch': {
      const ground = analyzed.find((a) => a.isHLine && a.cy > 14)
      const body = analyzed.find((a) => a !== ground) || largest
      set(body, role('launch', originFor(body, 'bottom')))
      if (ground) set(ground, role('download-tray', originFor(ground, 'bottom')))
      for (const a of analyzed) {
        if (roles[a.index].kind === 'folder-tilt') set(a, role('launch', originFor(a, 'bottom')))
      }
      break
    }
    case 'roll':
      setAll('roll', originFor(largest, 'bottom'))
      break
    case 'bob-water':
      setAll('bob-water', originFor(largest))
      break
    case 'park':
      setAll('park', originFor(largest, 'bottom'))
      break
    case 'float-up':
      setAll('float-up', originFor(largest, 'bottom'))
      break
    case 'gust':
      setAll('gust', originFor(largest, 'bottom'))
      break
    case 'rain': {
      const cloud = largest
      const drops = analyzed.filter((a) => a !== cloud)
      if (drops.length) {
        set(cloud, role('cloud-float', originFor(cloud)))
        drops.forEach((a, i) => set(a, role('rain', originFor(a), { custom: i })))
      } else {
        setAll('rain', originFor(largest))
      }
      break
    }
    case 'snow':
      setAll('snow', originFor(largest))
      break
    case 'unlock': {
      const lid = analyzed.find((a) => a.cy < 11) || analyzed[0]
      const body = analyzed.find((a) => a.index !== lid.index)
      set(lid, role('unlock', originFor(lid, 'left')))
      if (body) set(body, role('lock-body', originFor(body)))
      break
    }
    case 'unfold':
      setAll('unfold', originFor(largest, 'top'))
      break
    case 'fold':
      setAll('fold', originFor(largest, 'top'))
      break
    case 'flap':
      setAll('flap', originFor(largest, 'bottom'))
      break
    case 'swim':
      setAll('swim', originFor(largest))
      break
    case 'run':
      setAll('run', originFor(largest, 'bottom'))
      break
    case 'walk':
      setAll('walk', originFor(largest, 'bottom'))
      break
    case 'bounce':
      setAll('bounce', originFor(largest, 'bottom'))
      break
    case 'strike':
      setAll('strike', originFor(largest, 'bottom'))
      break
    case 'saw':
      setAll('saw', originFor(largest))
      break
    case 'attract':
      setAll('attract', [12, 12])
      break
    case 'flip':
      setAll('flip', [12, 12])
      break
    case 'pour':
      setAll('pour', originFor(largest, 'bottom'))
      break
    case 'orbit': {
      // nucleus = smallest central primitive, everything else orbits around it
      const central = analyzed
        .filter((a) => Math.hypot(a.cx - 12, a.cy - 12) < 4)
        .sort((a, b) => a.area - b.area)[0]
      const nucleus = central || smallest
      for (const a of analyzed) {
        set(a, role(a === nucleus ? 'orbit-core' : 'orbit-path', [12, 12]))
      }
      break
    }
    case 'twist':
      setAll('twist', [12, 12])
      break
    case 'buzz':
      setAll('buzz', originFor(largest))
      break
    case 'slither':
      setAll('slither', originFor(largest, 'bottom'))
      break
    case 'ticker': {
      // bars rise in sequence, frame/axis stays put
      const bars = analyzed.filter((a) => a.h > a.w * 1.1 && a.area < (largest?.area || 400) * 0.6)
      const rising = bars.length >= 2 ? bars.sort((a, b) => a.cx - b.cx) : analyzed
      rising.forEach((a, i) => set(a, role('ticker', originFor(a, 'bottom'), { custom: i })))
      analyzed.filter((a) => !rising.includes(a)).forEach((a) => set(a, role('static', originFor(a))))
      break
    }
    case 'bloom': {
      // petals/leaves open outward, stem or core holds
      // a pot / base / stem at the bottom holds still; everything above it opens
      const base =
        analyzed.filter((a) => a.cy >= 14).sort((a, b) => b.area - a.area)[0] ||
        analyzed.filter((a) => a.closed).sort((a, b) => a.area - b.area)[0]
      const core = analyzed.length > 2 ? base : null
      const petals = analyzed.filter((a) => a !== core)
      const list = petals.length ? petals : analyzed
      list.forEach((a, i) => set(a, role('bloom', originFor(a, 'bottom'), { custom: i })))
      if (petals.length && core) set(core, role('static', originFor(core)))
      break
    }
    case 'ripen':
      setAll('ripen', originFor(largest, 'bottom'))
      break
    case 'lift':
      setAll('lift', originFor(largest, 'bottom'))
      break
    default:
      setAll('folder-tilt', originFor(largest, 'bottom'))
  }

  return { roles, loops, verb, donor, recipe, clip, source: story?.source || 'handcrafted' }
}
