/**
 * Name-first stories. The full icon name decides the gesture
 * (landing lands, take-off climbs, seat sits) — a sibling donor never overrides that.
 */

function tokensOf(name) {
  return name.split('-').filter((p) => !/^\d+$/.test(p))
}

function has(tokens, ...words) {
  return words.some((w) => tokens.has(w))
}

function all(tokens, ...words) {
  return words.every((w) => tokens.has(w))
}

function story(recipe, verb, donor, extra = {}) {
  return { recipe, verb, donor, source: 'semantic', ...extra }
}

const SUBJECT_STORIES = {
  ai: ['more', 'the intelligence points answer one another instead of pulsing as a single badge', 'sparkles'],
  artificial: ['more', 'the intelligence points answer one another instead of pulsing as a single badge', 'sparkles'],
  user: ['user', 'the head reacts first; the shoulders follow with human weight', 'user'],
  account: ['user', 'the profile acknowledges the action with a short nod', 'user'],
  baby: ['user', 'the small head bobs while the body follows softly', 'user'],
  body: ['user', 'the figure shifts its weight from head to feet', 'user'],
  hand: ['thumbs', 'the wrist leads one readable hand gesture', 'thumbs-up'],
  finger: ['play', 'the fingertip presses and releases the target', 'mouse-left-click-01'],
  pointing: ['play', 'the fingertip commits toward the direction it already points', 'cursor-pointer-01'],
  cursor: ['play', 'the pointer leans into its tip and clicks', 'cursor-pointer-01'],
  mouse: ['play', 'the shell presses under the active button and releases', 'mouse-left-click-01'],
  touch: ['play', 'the touch point compresses and sends the response outward', 'mouse-left-click-01'],
  touchpad: ['play', 'the pad yields beneath a deliberate press', 'mouse-left-click-01'],
  swipe: ['roll', 'the gesture gathers momentum, crosses the surface, and eases out', 'cursor-pointer-01'],
  drag: ['roll', 'the grabbed object pulls away, carries momentum, and returns', 'cursor-pointer-01'],
  hold: ['attract', 'pressure builds under the held point, then releases', 'mouse-left-click-01'],
  file: ['file', 'the sheet lifts from its stack while its details follow', 'file-01'],
  receipt: ['file', 'the receipt feeds out and its printed rows follow in order', 'file-01'],
  invoice: ['file', 'the invoice lifts while its amount lines write in', 'file-01'],
  license: ['card', 'the credential slides forward for inspection, then returns', 'credit-card'],
  note: ['file', 'the note lifts and its written lines answer from the margin', 'file-01'],
  folder: ['folder', 'the tab leads a compact lift and the folder lands on its base', 'folder-01'],
  archive: ['file', 'the stored sheet passes through the drawer seam', 'archive-02'],
  package: ['bounce', 'the parcel drops onto its base, compresses, and settles', 'archive-02'],
  delivery: ['roll', 'the delivery moves forward with a weighted wheel response', 'shopping-cart-01'],
  mail: ['mail', 'the envelope flap opens and the body catches its return', 'mail-01'],
  message: ['message', 'the speech tail anchors the bubble as it answers', 'message-01'],
  chat: ['message', 'the conversation bubbles answer in reading order', 'message-01'],
  bubble: ['message', 'the bubble unfurls from its tail and settles', 'message-01'],
  comment: ['message', 'the comment enters from its speech tail and settles', 'message-01'],
  call: ['call', 'the handset rings from its cradle with a decaying swing', 'call-02'],
  phone: ['call', 'the handset rocks against its cradle and settles', 'call-02'],
  notification: ['swing', 'the bell rings from its hanging point and decays naturally', 'notification-03'],
  bell: ['swing', 'the bell rings from its hanging point and decays naturally', 'notification-03'],
  calendar: ['unfold', 'the bound page flips from its rings and settles flat', 'calendar-03'],
  time: ['gear', 'the hands advance around their actual center and settle on the mark', 'clock-01'],
  clock: ['gear', 'the hands advance around their actual center and settle on the mark', 'clock-01'],
  chart: ['grid', 'the data marks rise in reading order so the chart appears to calculate itself', 'dashboard-square-01'],
  analytics: ['grid', 'the measures resolve from baseline to result in reading order', 'dashboard-square-01'],
  dashboard: ['grid', 'the dashboard modules assemble in a diagonal reading ripple', 'dashboard-square-01'],
  layout: ['grid', 'the layout regions snap into their intended grid positions', 'dashboard-square-01'],
  grid: ['grid-cell', 'the cells assemble from top-left to bottom-right', 'grid-view'],
  table: ['grid', 'rows and columns resolve in reading order', 'dashboard-square-01'],
  hierarchy: ['grid', 'the hierarchy resolves from parent to children', 'dashboard-square-01'],
  workflow: ['share', 'the workflow propagates from one node to the next', 'share-08'],
  structure: ['share', 'the structure resolves from its root toward each branch', 'share-08'],
  node: ['share', 'the connected nodes receive the signal one after another', 'share-08'],
  presentation: ['unfold', 'the presentation opens like a screen and its content settles', 'panel-left'],
  text: ['list', 'the text rows write and settle from their reading edge', 'list-view'],
  alphabet: ['list', 'the glyph rows resolve in reading order', 'list-view'],
  paragraph: ['list', 'the paragraph lines contract from alternating margins', 'list-view'],
  heading: ['list', 'the heading establishes its weight before the supporting lines', 'list-view'],
  align: ['list', 'the rows slide toward the named alignment edge', 'list-view'],
  sorting: ['list', 'the values trade places while the direction mark leads', 'sort-by-down-01'],
  menu: ['list', 'the menu rows scan downward without losing their shared rail', 'menu-01'],
  list: ['list', 'the rows answer in reading order from alternating edges', 'list-view'],
  border: ['grid', 'the named border traces the exact edge it represents', 'dashboard-square-01'],
  corner: ['expand', 'the corner travels along its own diagonal and returns', 'full-screen'],
  circle: ['frame', 'the circular boundary absorbs the inner action and returns to round', 'add-circle'],
  square: ['frame', 'the square boundary absorbs the inner action without drifting', 'dashboard-square-01'],
  triangle: ['shield', 'the triangular mass loads toward its point and settles', 'shield-02'],
  computer: ['camera', 'the machine wakes like a physical key press and steadies on its stand', 'command'],
  laptop: ['unfold', 'the display opens from the keyboard hinge and settles upright', 'panel-left'],
  tablet: ['camera', 'the glass responds to a centered press while the shell stays planted', 'command'],
  mobile: ['call', 'the phone gives one tactile ring and settles in the hand', 'call-02'],
  tv: ['camera', 'the screen wakes inward from its bezel', 'video-01'],
  usb: ['login', 'the connector lines up, inserts, and seats with a small click', 'login-01'],
  camera: ['camera', 'the lens focuses before the body takes the shot', 'camera-01'],
  image: ['file', 'the picture lifts as one card while its scene follows with depth', 'image-01'],
  gallery: ['copy', 'the front image separates from the stack and returns', 'image-01'],
  film: ['roll', 'the film advances by one frame and clicks into registration', 'video-01'],
  video: ['camera', 'the camera body holds while the recording part opens and responds', 'video-01'],
  audio: ['volume', 'sound pressure travels away from its source in ordered waves', 'volume-high'],
  music: ['leaf', 'the note heads bounce on the beat while the stem carries the motion', 'music-note-01'],
  bluetooth: ['share', 'the two endpoints exchange a signal along the central path', 'bluetooth'],
  wifi: ['wifi', 'the signal expands physically from its source to its outer arc', 'wifi-01'],
  rss: ['wifi', 'the feed expands from the source dot to the outer arc', 'wifi-01'],
  signal: ['wifi', 'the signal travels from its source toward the strongest bar', 'wifi-01'],
  internet: ['wifi', 'the connection propagates outward through its network arcs', 'wifi-01'],
  link: ['link', 'the chain pulls taut along its existing overlap and relaxes', 'link-01'],
  unlink: ['link', 'the two chain halves pull apart along the break and reconnect', 'link-01'],
  git: ['share', 'the branch signal travels from root to each commit node', 'share-08'],
  arrow: ['arrow-right', 'the arrow moves along the direction already encoded by its head', 'arrow-right-02'],
  chevrons: ['chevron-right', 'the chevrons advance in sequence along their pointing axis', 'chevron-right'],
  direction: ['arrow-right', 'the direction mark commits along its own axis and settles', 'arrow-right-02'],
  navigation: ['pin', 'the navigation mark hops toward its indicated destination', 'location-01'],
  route: ['share', 'the route draws from origin to destination', 'share-08'],
  location: ['pin', 'the pin lifts, drops onto its point, and carries the landing ring', 'location-01'],
  maps: ['pin', 'the marker drops onto the mapped position', 'location-01'],
  map: ['pin', 'the marker drops onto the mapped position', 'location-01'],
  gps: ['pin', 'the position resolves inward onto the target point', 'target-01'],
  pathfinder: ['share', 'the path resolves from its start node toward the destination', 'share-08'],
  shopping: ['cart', 'the cart rolls on its wheels while its contents lag behind', 'shopping-cart-01'],
  store: ['home', 'the storefront opens from its awning and settles on its foundation', 'home-01'],
  wallet: ['wallet', 'the wallet opens along its clasp and reveals its contents', 'wallet-01'],
  money: ['wallet', 'the value rises from the wallet and settles back into place', 'wallet-01'],
  bitcoin: ['flip', 'the coin flips around its vertical axis and lands on the same face', 'credit-card'],
  coins: ['flip', 'the coins trade depth one after another and settle into a stack', 'credit-card'],
  dollar: ['flip', 'the currency mark turns like a coin and faces forward again', 'credit-card'],
  banknote: ['wallet', 'the banknote rises from its holder and slides back inside', 'wallet-01'],
  credit: ['card', 'the card swipes through an implied reader and catches its inertia', 'credit-card'],
  payment: ['card', 'the payment card commits forward and returns after approval', 'credit-card'],
  cashback: ['wallet', 'the value leaves, reverses direction, and returns to the wallet', 'wallet-01'],
  coupon: ['file', 'the coupon tears forward along its perforated edge and settles', 'file-01'],
  discount: ['flip', 'the discount badge flips to reveal the deal and faces forward again', 'credit-card'],
  safe: ['lock', 'the safe resists, turns at its lock, and settles with weight', 'lock'],
  security: ['shield', 'the shield absorbs a centered impact and passes force into its core', 'shield-02'],
  shield: ['shield', 'the shield absorbs a centered impact and returns to shape', 'shield-02'],
  lock: ['lock', 'the body reacts while the keyway turns in its own seat', 'lock'],
  keyframe: ['list', 'the timeline marks resolve in chronological order', 'list-view'],
  keyframes: ['list', 'the timeline marks resolve in chronological order', 'list-view'],
  activity: ['grid', 'the activity trace advances from left to right like a live reading', 'dashboard-square-01'],
  pulse: ['heart', 'the waveform contracts and releases around its baseline', 'favourite'],
  smart: ['more', 'the smart accents answer one another around the primary object', 'sparkles'],
  solar: ['heart', 'energy gathers in the core before traveling out to the rays', 'sun-03'],
  sun: ['heart', 'energy gathers in the core before traveling out to the rays', 'sun-03'],
  moon: ['cloud', 'the crescent drifts slowly through its night field', 'moon-02'],
  cloud: ['cloud', 'a soft swell travels through the cloud while its baseline holds', 'cloud'],
  fire: ['fire', 'the flame leans, splits, and recovers from its base', 'fire'],
  lamp: ['fire', 'current reaches the light source, which answers with a restrained glow', 'bulb'],
  electric: ['fire', 'the charge stores tension and discharges along the bolt', 'flash'],
  power: ['fire', 'energy loads into the power mark and releases through its opening', 'flash'],
  battery: ['battery', 'the charge grows from the terminal side and fills the cell', 'battery-charging-01'],
  plant: ['leaf', 'the stem anchors a short breeze through the leaves', 'leaf-01'],
  tree: ['leaf', 'the trunk stays planted while the crown moves in the breeze', 'leaf-01'],
  root: ['leaf', 'growth travels from the root into the upper branches', 'leaf-01'],
  eco: ['leaf', 'the leaf sways from its stem and settles naturally', 'leaf-01'],
  apple: ['bounce', 'the fruit drops a short distance and lands with weight', 'home-01'],
  hospital: ['emergency-drive', 'the medical mark responds urgently while the building stays grounded', 'alert-circle'],
  medicine: ['file', 'the dose moves into place and the container settles', 'file-01'],
  blood: ['heart', 'the drop contracts like a heartbeat and returns to shape', 'favourite'],
  brain: ['more', 'a thought travels across the connected lobes in sequence', 'sparkles'],
  dental: ['bounce', 'the tooth seats into its gum line and settles', 'home-01'],
  doctor: ['user', 'the clinician nods while the medical detail answers', 'user'],
  workout: ['run', 'the body loads, exerts, and returns to a stable stance', 'thumbs-up'],
  dumbbell: ['bounce', 'the weight lifts from both ends and lands with mass', 'thumbs-up'],
  yoga: ['user', 'the pose inhales upward and settles back into balance', 'user'],
  game: ['alert', 'the control gives one playful input response and recenters', 'command'],
  joystick: ['play', 'the stick leans toward an input and springs to center', 'command'],
  chess: ['pin', 'the piece lifts, advances one square, and seats on the board', 'puzzle'],
  basketball: ['bounce', 'the ball compresses against the floor and rebounds', 'home-01'],
  golf: ['strike', 'the club winds up, strikes, and follows through', 'scissor-01'],
  book: ['unfold', 'the cover opens from its spine and the pages settle', 'folder-open'],
  bookshelf: ['list', 'the books settle onto the shelf one after another', 'list-view'],
  school: ['home', 'the schoolhouse lands on its foundation while its detail answers', 'home-01'],
  legal: ['file', 'the legal sheet lands and its ruling line resolves', 'file-01'],
  agreement: ['check-in-frame', 'the agreement draws its confirmation and lands', 'circle-check'],
  test: ['check-in-frame', 'the result resolves into a check and lands', 'circle-check'],
  quiz: ['user', 'the question mark bobs while its dot answers below', 'help-circle'],
  award: ['heart', 'the award rises proudly and catches the light', 'star'],
  medal: ['heart', 'the medal lifts from its ribbon and settles with weight', 'star'],
  badge: ['heart', 'the badge stamps into place and catches one glint', 'star'],
  laurel: ['leaf', 'both branches open outward from the medal and settle symmetrically', 'leaf-01'],
  crown: ['home', 'the crown gives one restrained royal lift around its fixed jewel', 'crown'],
  diamond: ['heart', 'the gem turns into the light, flashes, and faces forward', 'diamond-02'],
  magic: ['heart', 'the wand flicks and its stars answer in sequence', 'magic-wand-01'],
  more: ['more', 'the dots lift in sequence from their own centers', 'more-horizontal'],
  add: ['add-in-frame', 'the new mark stamps into the available space', 'add-circle'],
  plus: ['add-in-frame', 'the plus assembles from its two strokes and lands', 'plus-sign'],
  minus: ['minus-in-frame', 'the minus pinches short, overshoots, and settles', 'minus-sign-circle'],
  check: ['check-in-frame', 'the confirmation stroke draws from tail to tip and lands', 'circle-check'],
  checkmark: ['draw-check', 'the confirmation stroke draws from tail to tip and lands', 'tick-02'],
  tick: ['draw-check', 'the tick writes itself and compresses once on landing', 'tick-02'],
  cancel: ['x-in-frame', 'the two cancel strokes strike in sequence and the frame catches them', 'circle-x'],
  delete: ['trash', 'the lid opens from its hinge and the bin catches the discarded weight', 'delete-02'],
  save: ['camera', 'the disk presses into place while its slots write in', 'save'],
  copy: ['copy', 'the front object separates from the source, pauses, and returns', 'copy-01'],
  edit: ['edit', 'the nib writes a short stroke and the baseline answers', 'edit-02'],
  pen: ['edit', 'the nib leads a short handwritten stroke and lifts', 'edit-02'],
  pencil: ['edit', 'the pencil scribbles and lifts from the written line', 'edit-02'],
  paint: ['edit', 'the tool lays down a stroke and collects it on return', 'paint-brush-02'],
  filter: ['filter', 'the funnel narrows the data from its wide mouth to its result', 'filter'],
  insert: ['login', 'the object lines up, enters its slot, and seats', 'login-01'],
  login: ['login', 'the arrow gathers outside and enters through the opening', 'login-01'],
  logout: ['logout', 'the arrow loads inside and clears the opening', 'logout-01'],
  settings: ['gear', 'the outer mechanism turns while the central bearing holds', 'settings-01'],
  setting: ['gear', 'the outer mechanism turns while the central bearing holds', 'settings-01'],
  rotate: ['refresh', 'the glyph winds back and completes the named turn', 'refresh'],
  flip: ['flip', 'the object turns edge-on and reveals its opposite face', 'credit-card'],
  go: ['arrow-right', 'the mark commits forward along its indicated direction', 'arrow-right-02'],
  left: ['arrow-left', 'the mark commits left along its own axis', 'arrow-left-02'],
  right: ['arrow-right', 'the mark commits right along its own axis', 'arrow-right-02'],
  maximize: ['expand', 'the corners drive outward to occupy the larger frame', 'maximize-screen'],
  minimize: ['collapse', 'the corners pull inward toward the smaller frame', 'minimize-screen'],
  resize: ['expand', 'opposite corners pull the frame to its new extent', 'full-screen'],
  briefcase: ['folder', 'the case lifts by its handle and lands flat on its base', 'folder-01'],
  home: ['home', 'the house gives a welcoming hop and lands on its foundation', 'home-01'],
  house: ['home', 'the house gives a welcoming hop and lands on its foundation', 'home-01'],
  building: ['home', 'the structure rises a fraction, then settles onto its foundation', 'home-01'],
  city: ['home', 'the skyline rises from the ground and settles building by building', 'home-01'],
  mosque: ['home', 'the dome lifts gently while the minarets remain grounded', 'home-01'],
  database: ['list', 'a read head scans each platter from top to bottom', 'database'],
  tap: ['play', 'the contact point presses, ripples, and releases', 'mouse-left-click-01'],
  blockchain: ['share', 'the transaction travels block by block through the chain', 'share-08'],
  dress: ['gust', 'the fabric catches a short breeze from its hanging point', 'leaf-01'],
  google: ['search', 'the search mark leans in, scans, and recenters', 'search-01'],
  bookmark: ['bookmark', 'the ribbon catches at the binding and lands in its saved fold', 'bookmark-01'],
  chair: ['sit', 'the seat compresses under weight and springs back', 'home-01'],
  sofa: ['sit', 'the cushions compress together and recover their shape', 'home-01'],
  bed: ['sit', 'the mattress yields under weight and rises back softly', 'home-01'],
  cabinet: ['unfold', 'the cabinet opens from its hinge and closes with weight', 'folder-open'],
  wardrobe: ['unfold', 'the doors open from their hinges and settle closed', 'folder-open'],
  equipment: ['strike', 'the tool loads against its working end, acts, and settles', 'scissor-01'],
  tool: ['strike', 'the tool loads against its working end, acts, and settles', 'scissor-01'],
  adobe: ['edit', 'the creative tool draws one clean stroke through its mark', 'edit-02'],
  album: ['copy', 'the front image lifts from the album stack and returns', 'image-01'],
  ease: ['grid', 'the easing curve draws from its first keyframe to its last', 'dashboard-square-01'],
  layer: ['copy', 'the layers separate in depth, pause, and stack again', 'copy-01'],
  layers: ['copy', 'the layers separate in depth, pause, and stack again', 'copy-01'],
  move: ['roll', 'the object travels along the direction encoded by its handles and returns', 'cursor-pointer-01'],
  task: ['check-in-frame', 'the task resolves into a drawn confirmation and lands', 'circle-check'],
  thumbs: ['thumbs', 'the hand rises from the wrist in one coherent approval gesture', 'thumbs-up'],
  shaka: ['thumbs', 'the hand rocks once from the wrist and returns', 'thumbs-up'],
  waterfall: ['rain', 'water continuously falls while the rock line stays planted', 'cloud-rain'],
  web: ['wifi', 'the connection propagates outward through the web', 'wifi-01'],
  global: ['cloud', 'the globe turns a short arc and returns to its meridian', 'earth'],
  arrange: ['grid', 'the pieces leave their offsets and snap into the named arrangement', 'dashboard-square-01'],
  distribute: ['grid', 'the pieces spread to equal spacing, then return', 'dashboard-square-01'],
  between: ['grid', 'the outer pieces make room and the middle element seats between them', 'dashboard-square-01'],
  bread: ['bounce', 'the loaf drops onto the counter and settles with soft weight', 'home-01'],
  cheese: ['bounce', 'the slice lifts from the board and lands back on its rind', 'home-01'],
  cupcake: ['bounce', 'the cake rises in its wrapper and lands with a soft squash', 'home-01'],
  pizza: ['bounce', 'the slice lifts by its crust and settles back onto the plate', 'home-01'],
  sushi: ['bounce', 'the piece lifts from the plate and lands without losing its stack', 'home-01'],
  restaurant: ['bounce', 'the serving piece lifts from the plate and settles', 'home-01'],
  coffee: ['pour', 'the cup tips just enough for the liquid gesture, then rights itself', 'coffee-02'],
  milk: ['pour', 'the carton tips, pours, and returns upright', 'coffee-02'],
  dish: ['bounce', 'the dish lifts from the table and lands with ceramic weight', 'home-01'],
  pan: ['pour', 'the pan tips from its handle and returns to the burner', 'coffee-02'],
  cylinder: ['flip', 'the solid turns around its vertical axis to reveal its volume', 'credit-card'],
  parabola: ['grid', 'the curve draws from its vertex outward to both arms', 'dashboard-square-01'],
  tally: ['list', 'the tally strokes write one after another and the crossing stroke finishes', 'list-view'],
  ear: ['volume', 'sound waves travel into the ear instead of pulsing the whole symbol', 'volume-high'],
  mask: ['blink', 'the eye openings narrow while the mask itself stays still', 'eye'],
  online: ['wifi', 'the status signal expands from source to outer ring', 'wifi-01'],
  live: ['wifi', 'the live signal propagates outward in repeated rings', 'wifi-01'],
  progress: ['spin', 'the progress marks advance around their actual center', 'loading-03'],
  loading: ['spin', 'the loading spokes remain visible while the set rotates', 'loading-03'],
  sort: ['list', 'the values trade visual weight in the named sort direction', 'sort-by-down-01'],
  stairs: ['arrow-up', 'the movement climbs step by step in the indicated direction', 'arrow-up-02'],
  ticket: ['file', 'the ticket feeds forward along its perforated edge and returns', 'file-01'],
  passport: ['unfold', 'the passport opens from its spine and closes flat', 'folder-open'],
  traffic: ['roll', 'traffic advances one vehicle-length and brakes into place', 'shopping-cart-01'],
  road: ['roll', 'the road markings stream backward to imply forward travel', 'shopping-cart-01'],
  airpod: ['volume', 'sound pressure expands from the earbud speaker', 'volume-high'],
  backpack: ['bounce', 'the bag lifts by its straps and lands with its contents lagging', 'home-01'],
  cap: ['gust', 'the brim catches a short gust and settles back on its crown', 'bookmark-01'],
  card: ['card', 'the card swipes through an implied reader and catches its inertia', 'credit-card'],
  simcard: ['card', 'the chip slides toward its slot and clicks into registration', 'credit-card'],
  chemistry: ['more', 'the bonded atoms exchange energy from node to node', 'sparkles'],
  atom: ['spin', 'the orbital paths turn around the fixed nucleus', 'loading-03'],
  contact: ['user', 'the contact gives a short nod while its detail follows', 'user'],
  customer: ['user', 'the customer profile acknowledges with a short nod', 'user'],
  group: ['user-group', 'the profiles gather toward one another and settle as a group', 'user-group'],
  disc: ['spin', 'the disc turns once around its physical spindle', 'loading-03'],
  vynil: ['spin', 'the record turns around its center label', 'loading-03'],
  fuel: ['battery', 'the fuel level grows from empty toward the inlet', 'battery-charging-01'],
  plug: ['login', 'the plug aligns with its socket, inserts, and seats', 'login-01'],
  jsx: ['edit', 'the code brackets write inward toward the expression', 'code-xml'],
  typescript: ['edit', 'the code mark writes one crisp stroke and settles', 'code-xml'],
  knife: ['strike', 'the blade draws through the cut and returns to guard', 'scissor-01'],
  sword: ['strike', 'the blade winds up, slices through, and follows through', 'scissor-01'],
  lasso: ['link', 'the loop opens, catches its target, and pulls taut', 'link-01'],
  megaphone: ['volume', 'sound pressure expands from the horn in ordered waves', 'volume-high'],
  radio: ['wifi', 'the broadcast leaves the antenna in expanding arcs', 'wifi-01'],
  radar: ['spin', 'the sweep turns around the fixed center and reveals each contact', 'loading-03'],
  satellite: ['wifi', 'the satellite sends a signal outward while its body holds orbit', 'wifi-01'],
  mining: ['strike', 'the tool lifts and strikes the working face once', 'scissor-01'],
  playlist: ['list', 'the tracks resolve in playback order from top to bottom', 'list-view'],
  recycle: ['refresh', 'the three segments chase one another around the loop and settle', 'refresh'],
  repeat: ['refresh', 'the loop completes in its indicated direction and returns to rest', 'refresh'],
  refresh: ['refresh', 'the arrow winds back, completes one turn, and settles exactly at zero', 'refresh'],
  scroll: ['list', 'the content rows travel through the viewport and ease to a stop', 'list-view'],
  server: ['list', 'the rack rows wake from top to bottom like a health check', 'database'],
  soil: ['leaf', 'growth pushes upward from the soil line and settles on its stem', 'leaf-01'],
  work: ['folder', 'the work case lifts by its handle and settles on its base', 'folder-01'],
}

function subjectStory(parts) {
  for (const token of parts) {
    const value = SUBJECT_STORIES[token]
    if (value) return story(value[0], value[1], value[2])
  }
  return null
}

function geometryStory(name, parts, analyzed) {
  if (!analyzed?.length) return null

  const label = parts.join(' ')
  const direction =
    (parts.includes('up') && parts.includes('right') && 'up-right') ||
    (parts.includes('up') && parts.includes('left') && 'up-left') ||
    (parts.includes('down') && parts.includes('right') && 'down-right') ||
    (parts.includes('down') && parts.includes('left') && 'down-left') ||
    (parts.includes('up') && 'up') ||
    (parts.includes('down') && 'down') ||
    (parts.includes('left') && 'left') ||
    (parts.includes('right') && 'right') ||
    analyzed.map((a) => a.chevron).find(Boolean)

  if (direction) {
    const recipe = `arrow-${direction}`
    return story(
      recipe,
      `the ${label} follows the ${direction} direction already encoded by its geometry`,
      direction.includes('up')
        ? 'arrow-up-02'
        : direction.includes('down')
          ? 'arrow-down-02'
          : direction === 'left'
            ? 'arrow-left-02'
            : 'arrow-right-02',
      { source: 'geometry' },
    )
  }

  const plus = analyzed.some((a) => a.isPlus)
  const check = analyzed.some((a) => a.isCheck)
  const cross = analyzed.some((a) => a.isX)
  const dots = analyzed.filter((a) => a.isDot)
  const arcs = analyzed.filter((a) => a.isArc)
  const bars = analyzed.filter((a) => a.isBar || a.isHLine)
  const closed = analyzed.filter((a) => a.closed)
  const largest = [...analyzed].sort((a, b) => b.area - a.area)[0]

  if (plus) return story('add-in-frame', `the ${label} makes room for its add mark, which stamps into place`, 'add-circle', { source: 'geometry' })
  if (check) return story('check-in-frame', `the ${label} draws its confirmation stroke and lands once`, 'circle-check', { source: 'geometry' })
  if (cross) return story('x-in-frame', `the ${label} strikes its two crossing strokes and recoils`, 'circle-x', { source: 'geometry' })
  if (dots.length >= 3) return story('more', `the repeated points of the ${label} answer in spatial order`, 'more-horizontal', { source: 'geometry' })
  if (arcs.length >= 2) return story('wifi', `the arcs of the ${label} propagate outward from their geometric source`, 'wifi-01', { source: 'geometry' })
  if (bars.length >= 3) return story('list', `the parallel marks of the ${label} resolve in reading order`, 'list-view', { source: 'geometry' })
  if (closed.length >= 4) return story('grid', `the separate cells of the ${label} assemble from top-left to bottom-right`, 'dashboard-square-01', { source: 'geometry' })
  if (largest?.closed && bars.length) return story('file', `the body of the ${label} lifts while its detail lines follow`, 'file-01', { source: 'geometry' })
  if (closed.length >= 2) return story('copy', `the nested parts of the ${label} separate in depth and stack again`, 'copy-01', { source: 'geometry' })
  if (analyzed.length >= 4) return story('grid-cell', `the pieces of the ${label} take turns from their own geometric centers`, 'grid-view', { source: 'geometry' })
  if (analyzed.length >= 2) return story('folder', `the parts of the ${label} move from their own mass and settle together`, 'folder-01', { source: 'geometry' })
  if (!largest?.closed) return story('edit', `the open stroke of the ${label} writes along the direction of its path`, 'edit-02', { source: 'geometry' })
  return story('bounce', `the silhouette of the ${label} loads onto its base and settles with weight`, 'home-01', { source: 'geometry' })
}

export function storyOf(name, analyzed = []) {
  const parts = tokensOf(name)
  const t = new Set(parts)
  const n = name

  if (has(t, 'accident', 'collision', 'crash')) {
    return story(
      'collision',
      'two vehicles drive into the same point, recoil from the impact, and leave the crash burst hanging between them',
      'alert-circle',
    )
  }
  if (has(t, 'ambulance')) {
    return story(
      'emergency-drive',
      'the ambulance lunges forward while its roof beacon flashes in alternating beats',
      'shopping-cart-01',
    )
  }

  // ── Health & care ───────────────────────────────────────────────────────────
  if (has(t, 'hospital', 'clinic') && !has(t, 'bed')) {
    return story('emergency-beacon-frame', 'the building holds while the cross on the facade pulses like an on-call sign', 'home-01')
  }
  if (has(t, 'wheelchair')) {
    return story('roll', 'the chair rolls forward as the wheel turns under the seat', 'shopping-cart-01')
  }
  if (has(t, 'stethoscope', 'pulse', 'heartbeat', 'cardiogram', 'ecg', 'ekg')) {
    return story('heart', 'a lub-dub beat travels through the trace', 'favourite')
  }
  if (has(t, 'syringe', 'injection', 'vaccine', 'vaccination')) {
    return story('login', 'the plunger presses in, then draws back', 'login-03')
  }
  if (has(t, 'pill', 'pills', 'capsule', 'tablet', 'medicine', 'drug') && !has(t, 'tablets')) {
    return story('flip', 'the capsule turns over to show its other half', 'credit-card')
  }
  if (has(t, 'bandage', 'plaster', 'aid') || all(t, 'first', 'kit')) {
    return story('check-in-frame', 'the dressing presses on and the confirmation settles', 'checkmark-circle-01')
  }
  if (has(t, 'virus', 'bacteria', 'germ', 'covid', 'biohazard', 'infection')) {
    return story('buzz', 'the body jitters the way a live culture does under the lens', 'bug-01', { loops: true })
  }
  if (has(t, 'dna', 'gene', 'genetic', 'helix', 'chromosome')) {
    return story('twist', 'the strands rotate around the shared axis', 'refresh')
  }
  if (has(t, 'tooth', 'dental', 'dentist', 'teeth')) {
    return story('ripen', 'it squeaks clean with a small polish beat', 'favourite')
  }

  // ── Security & trust ────────────────────────────────────────────────────────
  if (has(t, 'fingerprint', 'biometric', 'faceid', 'touchid')) {
    return story('attract', 'the ridges read inward until the print resolves', 'target-01')
  }
  if (has(t, 'vault', 'safe', 'strongbox') && !has(t, 'safety')) {
    return story('unlock', 'the dial turns and the door breaks its seal', 'square-lock-01')
  }
  if (has(t, 'firewall', 'vpn', 'antivirus', 'malware', 'spyware', 'hack', 'hacker', 'breach')) {
    return story('shield', 'the guard takes the hit and the ring pushes the threat back', 'shield-01')
  }

  // ── Failure & error states ──────────────────────────────────────────────────
  if (has(t, 'error', 'failed', 'failure', 'invalid', 'rejected', 'denied', 'forbidden', 'blocked')) {
    return story('alert', 'it refuses the input with a short head-shake', 'alert-circle')
  }
  if (has(t, 'danger', 'hazard', 'warning', 'caution', 'risk', 'unsafe')) {
    return story('alert', 'the sign shakes to flag the hazard and holds the warning', 'alert-circle')
  }

  // ── Sport, gym & human effort ───────────────────────────────────────────────
  if (has(t, 'dumbbell', 'barbell', 'weight', 'weights', 'gym', 'fitness', 'workout', 'squats', 'pushup')) {
    return story('lift', 'the load dips, drives up, and comes back under control', 'thumbs-up')
  }
  if (has(t, 'boxing', 'punch', 'kick', 'karate', 'taekwondo', 'martial')) {
    return story('strike', 'it winds up and lands the blow, then recovers guard', 'scissor-01')
  }
  if (has(t, 'yoga', 'meditation', 'meditate', 'pray', 'prayer', 'namaste')) {
    return story('sit', 'the posture settles into a slow held breath', 'home-01')
  }
  if (has(t, 'skateboard', 'skate', 'skating', 'ski', 'snowboard', 'rollerblade')) {
    return story('roll', 'it carves forward on its edge and eases back', 'shopping-cart-01')
  }
  if (has(t, 'surf', 'surfing', 'surfboard')) {
    return story('bob-water', 'it rides the swell and finds the waterline again', 'cloud')
  }
  if (has(t, 'basketball', 'football', 'soccer', 'volleyball', 'baseball', 'tennis', 'golf', 'badminton', 'cricket', 'hockey', 'bowling', 'rugby', 'billiard', 'dart')) {
    return story('bounce', 'the ball loads on the ground and comes back up with weight', 'home-01')
  }
  if (has(t, 'clap', 'clapping', 'applause', 'highfive')) {
    return story('clap', 'both hands drive together and rebound from the contact', 'thumbs-up')
  }
  if (has(t, 'dance', 'dancing', 'party') && !has(t, 'popper')) {
    return story('gust', 'the body sways off-axis and swings back on the beat', 'leaf-01')
  }

  // ── Science & space ─────────────────────────────────────────────────────────
  if (has(t, 'atom', 'atomic', 'molecule', 'nuclear', 'orbit', 'planet', 'saturn', 'galaxy', 'solar', 'electron')) {
    return story('orbit', 'the shells sweep around a nucleus that breathes in place', 'earth', { loops: true })
  }
  if (has(t, 'microscope', 'telescope', 'lens', 'magnify')) {
    return story('search', 'it racks focus onto the subject and holds', 'search-01')
  }
  if (has(t, 'flask', 'beaker', 'chemistry', 'chemical', 'lab', 'laboratory', 'test-tube', 'experiment')) {
    return story('pour', 'the vessel tips, decants, and rights itself', 'coffee-02')
  }
  if (has(t, 'satellite', 'antenna', 'telemetry')) {
    return story('wifi', 'the dish sweeps and the signal arcs push outward from it', 'wifi-01', { loops: true })
  }

  // ── Money & markets ─────────────────────────────────────────────────────────
  if (has(t, 'bitcoin', 'crypto', 'ethereum', 'litecoin', 'dogecoin', 'nft') && !has(t, 'chart', 'graph')) {
    return story('flip', 'the coin turns over on its own axis and lands flat', 'credit-card')
  }
  if (has(t, 'stock', 'stocks', 'trade', 'trading', 'market', 'profit', 'revenue', 'growth') || all(t, 'chart', 'up')) {
    return story('ticker', 'the bars step up one after another to their new highs', 'list-view')
  }
  if (has(t, 'bank', 'banking', 'atm', 'treasury', 'deposit', 'savings') && !has(t, 'power')) {
    return story('wallet', 'the note slides up out of the vault and tucks back in', 'wallet-01')
  }
  if (has(t, 'invoice', 'receipt', 'bill', 'tax', 'zakat', 'budget', 'audit')) {
    return story('file', 'the sheet lifts off the stack, is stamped, and drops back', 'file-01')
  }

  // ── Plants, produce & small fauna ───────────────────────────────────────────
  if (has(t, 'flower', 'blossom', 'rose', 'tulip', 'bloom', 'plant', 'seedling', 'sprout')) {
    return story('bloom', 'the petals open outward one by one from the core', 'flower')
  }
  if (has(t, 'tree', 'forest', 'palm', 'pine', 'bamboo', 'cactus', 'bush', 'shrub')) {
    return story('gust', 'the crown leans on a breeze while the trunk stays planted', 'leaf-01')
  }
  if (has(t, 'apple', 'banana', 'orange', 'cherry', 'cherries', 'grape', 'grapes', 'lemon', 'strawberry', 'watermelon', 'peach', 'pear', 'mango', 'avocado', 'fruit', 'berry')) {
    return story('ripen', 'it hangs, swells to ripe, and settles on its stem', 'favourite')
  }
  if (has(t, 'bee', 'butterfly', 'insect', 'fly', 'mosquito', 'dragonfly', 'ant', 'wasp') && !has(t, 'flying')) {
    return story('buzz', 'the wings blur and it hovers a hair off its mark', 'bug-01', { loops: true })
  }
  if (has(t, 'snake', 'worm', 'serpent', 'eel')) {
    return story('slither', 'the body sends an S-curve down its length and moves on it', 'leaf-01')
  }
  if (has(t, 'mountain', 'hill', 'volcano-off', 'rock', 'stone', 'cliff') && !has(t, 'volcano')) {
    return story('bounce', 'the mass takes its own weight and settles onto the base', 'home-01')
  }
  if (has(t, 'waterfall', 'river', 'stream', 'creek')) {
    return story('rain', 'the fall keeps running while the banks hold still', 'cloud-rain', { loops: true })
  }

  // ── Food & kitchen ──────────────────────────────────────────────────────────
  if (has(t, 'kettle', 'teapot', 'jug', 'pitcher', 'watering')) {
    return story('pour', 'it tips over the spout and comes back level', 'coffee-02')
  }
  if (has(t, 'blender', 'mixer', 'whisk', 'grinder')) {
    return story('spin', 'the blade spins up and the jug stays planted', 'loading-03', { loops: true })
  }
  if (has(t, 'oven', 'microwave', 'toaster', 'stove', 'grill', 'bbq', 'barbecue')) {
    return story('fire', 'heat builds inside the cavity and shimmers out', 'fire', { loops: true })
  }
  if (has(t, 'fridge', 'refrigerator', 'freezer', 'cooler')) {
    return story('unfold', 'the door swings open on its hinge and closes again', 'folder-open')
  }
  if (has(t, 'washer', 'washing', 'dryer', 'laundry', 'dishwasher')) {
    return story('spin', 'the drum takes a full turn behind the door', 'loading-03', { loops: true })
  }
  if (has(t, 'vacuum', 'hoover')) {
    return story('roll', 'it pushes forward across the floor and pulls back', 'shopping-cart-01')
  }

  // ── Home & furniture ────────────────────────────────────────────────────────
  if (has(t, 'bed', 'bedroom', 'mattress', 'sofa', 'couch', 'armchair', 'chair', 'stool', 'bench')) {
    return story('sit', 'the cushion compresses under the weight and recovers', 'home-01')
  }
  if (has(t, 'door', 'gate', 'window', 'curtain', 'blinds', 'garage') && !has(t, 'doorbell')) {
    return story('unfold', 'it swings open from the hinge, then closes on the same arc', 'folder-open')
  }
  if (has(t, 'shower', 'faucet', 'tap-water', 'sink', 'bath', 'bathtub', 'hose')) {
    return story('rain', 'water runs down out of the fitting and the fixture holds', 'cloud-rain', { loops: true })
  }
  if (has(t, 'lamp', 'bulb', 'lightbulb', 'chandelier', 'lantern', 'torch-light')) {
    return story('fire', 'the filament comes up to brightness and holds', 'fire')
  }

  // ── Navigation, logistics & travel ──────────────────────────────────────────
  if (has(t, 'compass', 'gps', 'navigator') && !has(t, 'navigation')) {
    return story('gear', 'the needle overshoots the bearing and settles on it', 'compass')
  }
  if (has(t, 'delivery', 'courier', 'shipment', 'shipping', 'freight', 'cargo', 'logistics', 'dispatch')) {
    return story('roll', 'the load moves along the route and eases to its stop', 'shopping-cart-01')
  }
  if (has(t, 'luggage', 'suitcase', 'trolley', 'baggage', 'backpack') && !has(t, 'passport')) {
    return story('lift', 'the case is hoisted, held, and set back down', 'thumbs-up')
  }
  if (has(t, 'passport', 'visa-card', 'boarding', 'checkin')) {
    return story('unfold', 'it opens to the stamped page, then shuts', 'folder-open')
  }

  if (has(t, 'airplane', 'plane', 'flight', 'jet', 'airport')) {
    if (n.includes('take-off') || t.has('takeoff') || all(t, 'take', 'off')) {
      return story(
        'takeoff',
        'the plane rolls, rotates, and climbs out of the frame; a second one slots onto the runway',
        'airplane-take-off-01',
        { clip: true },
      )
    }
    if (has(t, 'landing', 'land') && !has(t, 'landscape')) {
      return story(
        'landing',
        'the plane flares, drops onto the runway, and settles on its wheels',
        'airplane-take-off-01',
        { clip: true },
      )
    }
    if (has(t, 'seat')) {
      return story('sit', 'the seat compresses as if someone just sat down', 'home-01')
    }
    if (has(t, 'mode') && has(t, 'off')) {
      return story('disable', 'the slash cuts through and the plane goes still', 'notification-off-01')
    }
    if (has(t, 'mode')) {
      return story('power-down', 'the plane levels off and the signal dies', 'airplane-take-off-01')
    }
    if (has(t, 'airport', 'tower')) {
      return story('cruise', 'a small craft banks past the tower, then the building settles', 'home-01')
    }
    return story('cruise', 'the plane banks, glides forward, and levels out', 'airplane-take-off-01')
  }

  if (has(t, 'helicopter')) {
    return story('hover-flight', 'it hangs in the air — a rotor wash bob that never quite sits', 'leaf-01', { loops: true })
  }
  if (has(t, 'rocket')) {
    return story('launch', 'the rocket stretches, clears the pad, and a new one rises into the same slot', 'rocket-01', { clip: true })
  }
  if (has(t, 'parachute')) {
    return story('landing', 'the canopy fills, then the load eases onto the ground', 'umbrella')
  }
  if (has(t, 'balloon', 'balloons') || all(t, 'hot', 'air')) {
    return story('float-up', 'it tugs at the tether and drifts a little higher', 'cloud')
  }
  if (has(t, 'kite')) {
    return story('gust', 'the kite tugs against the line, then settles', 'leaf-01')
  }
  if (has(t, 'ship', 'boat', 'yacht', 'sail', 'ferry', 'submarine', 'anchor')) {
    return story('bob-water', 'it rides a short swell and settles back on the waterline', 'cloud')
  }
  if (has(t, 'car', 'taxi', 'bus', 'truck', 'van', 'jeep', 'scooter', 'motorcycle', 'bike', 'bicycle', 'train', 'metro', 'subway', 'tram')) {
    if (has(t, 'parking', 'park')) return story('park', 'it rolls into the bay and stops with a short brake dip', 'shopping-cart-01')
    if (has(t, 'charging', 'charge')) return story('battery', 'the charge swells through the body', 'battery-charging-01')
    return story('roll', 'it rolls forward on its wheels, then eases back', 'shopping-cart-01')
  }

  if (has(t, 'rain', 'drizzle', 'storm') && !has(t, 'bow')) {
    return story('rain', 'drops fall through the glyph while the cloud holds', 'cloud-rain', { loops: true })
  }
  if (has(t, 'snow', 'snowflake')) {
    return story('snow', 'the flake drifts sideways and turns as it falls', 'snow')
  }
  if (has(t, 'wind', 'breeze', 'gust')) {
    return story('gust', 'a gust leans the silhouette, then it springs back', 'leaf-01')
  }
  if (has(t, 'tornado', 'hurricane', 'cyclone', 'fan', 'propeller', 'turbine')) {
    return story('spin', 'it turns in place the way the real thing does', 'loading-03', { loops: true })
  }

  if (has(t, 'unlock')) {
    return story('unlock', 'the shackle swings open on its hinge, hangs, then clicks shut', 'square-lock-01')
  }
  if (has(t, 'open') && !has(t, 'opener')) {
    return story('unfold', 'it opens from the hinge and shows what was inside', 'folder-open')
  }
  if (has(t, 'close', 'closed') && !has(t, 'closet')) {
    return story('fold', 'it folds shut along the same hinge', 'folder-01')
  }
  if ((has(t, 'off', 'slash', 'disabled', 'mute', 'silent') || n.endsWith('-off')) && !has(t, 'take', 'coffee', 'office')) {
    return story('disable', 'the slash cuts through and the rest of the glyph recoils', 'notification-off-01')
  }

  if (has(t, 'incoming')) return story('login', 'it gathers outside and drives inward', 'call-incoming-01')
  if (has(t, 'outgoing')) return story('logout', 'it kicks outward and leaves the frame', 'call-outgoing-01')
  if (
    has(t, 'sent', 'send') &&
    !has(t, 'sensor') &&
    (has(t, 'mail', 'message', 'chat', 'comment', 'letter', 'envelope', 'paper', 'plane', 'notification') || parts[parts.length - 1] === 'sent')
  ) {
    return story('takeoff', 'it pulls back, banks, and leaves toward the top-right', 'sent', { clip: true })
  }

  const isFood = has(t, 'food', 'thighs', 'meat', 'meal', 'dish', 'plate', 'recipe', 'burger', 'nugget', 'steak', 'soup', 'fry', 'fries', 'grill', 'roast')
  if (has(t, 'bird', 'dove', 'eagle', 'owl', 'duck') || (has(t, 'chicken') && !isFood)) {
    return story('flap', 'the wings beat once and the body lifts with them', 'leaf-01')
  }
  if ((has(t, 'fish', 'shark', 'whale', 'dolphin') && !isFood) || has(t, 'swim', 'swimming')) {
    return story('swim', 'it flicks its tail and glides a body-length forward', 'leaf-01')
  }
  if (has(t, 'horse', 'sprint', 'jog') || (has(t, 'run', 'running') && !has(t, 'command', 'dry', 'script', 'code', 'test'))) {
    return story('run', 'a short gallop — stretch, gather, settle', 'thumbs-up')
  }
  if (has(t, 'walk', 'hiking', 'footsteps')) {
    return story('walk', 'a two-beat step that keeps the silhouette readable', 'user')
  }
  if (has(t, 'jump', 'trampoline')) {
    return story('bounce', 'it loads, leaves the ground, and lands with weight', 'home-01')
  }
  if (has(t, 'swim')) {
    return story('swim', 'a single stroke and glide', 'leaf-01')
  }

  if (has(t, 'hammer', 'mallet')) {
    return story('strike', 'the head lifts and comes down on the work', 'scissor-01')
  }
  if (has(t, 'saw')) {
    return story('saw', 'a short back-and-forth cut along the teeth', 'scissor-01')
  }
  if (has(t, 'axe', 'hatchet')) {
    return story('strike', 'it winds up and bites into the cut', 'scissor-01')
  }
  if (has(t, 'magnet')) {
    return story('attract', 'nearby pieces lean in, then the magnet holds', 'target-01')
  }
  if (has(t, 'dice', 'die')) {
    return story('alert', 'it rattles in the cup and slams a new face', 'bug-01')
  }
  if (has(t, 'coin', 'token') && !has(t, 'bitcoin')) {
    return story('flip', 'it flips once and lands on the same face', 'credit-card')
  }
  if (has(t, 'flag', 'banner')) {
    return story('gust', 'the cloth snaps in a short wind, then hangs', 'bookmark-01')
  }
  if (has(t, 'candle', 'flame', 'torch') && !has(t, 'interface')) {
    return story('fire', 'the flame leans and recovers the way fire does', 'fire', { loops: true })
  }
  if (has(t, 'fountain', 'geyser')) {
    return story('float-up', 'water climbs and falls back into the basin', 'cloud')
  }
  if (has(t, 'volcano', 'eruption')) {
    return story('launch', 'pressure builds, then it clears the crater', 'fire')
  }
  if (has(t, 'earthquake', 'tremor')) {
    return story('alert', 'the ground shakes and the mass resettles', 'alert-circle')
  }
  if (
    has(t, 'tsunami', 'tide') ||
    (has(t, 'wave', 'waves') && !has(t, 'audio', 'sound', 'sine', 'square', 'triangle', 'sawtooth', 'pulse', 'hand', 'micro', 'radio', 'signal', 'brain'))
  ) {
    return story('bob-water', 'a swell rolls through and the surface finds level', 'cloud')
  }
  if (has(t, 'swing')) {
    return story('swing', 'a decaying pendulum from the hanging point', 'notification-03')
  }
  if (has(t, 'slide') && !has(t, 'slider')) {
    return story('roll', 'it travels along its own track and eases back', 'shopping-cart-01')
  }
  if (has(t, 'wink', 'winking')) {
    return story('blink', 'one lid closes and the face stays otherwise still', 'eye')
  }
  if (has(t, 'pour', 'drink', 'soda', 'wine', 'beer', 'juice')) {
    return story('pour', 'it tips, pours, and rights itself', 'coffee-02')
  }
  if (has(t, 'sleep', 'sleeping', 'zzz')) {
    return story('cloud', 'the marks drift farther from the face', 'sleeping')
  }
  if (has(t, 'ring', 'ringing') && !has(t, 'earrings', 'chart', 'progress', 'diagram', 'engagement', 'wedding', 'boxing')) {
    return story('swing', 'it rings — a decaying arc from the hanging point', 'notification-03')
  }
  if (has(t, 'hang', 'hangup')) {
    return story('logout', 'the handset drops back onto the cradle', 'call-02')
  }
  if (has(t, 'record', 'rec') && !has(t, 'recordings')) {
    return story('camera', 'the body snaps and the record mark flashes', 'video-01')
  }
  if (has(t, 'cut', 'scissor', 'scissors')) {
    return story('stamp-x', 'the blades wind open and snap shut', 'scissor-01')
  }
  if (has(t, 'board') && has(t, 'clip')) {
    return story('copy', 'the front board covers, pauses, then returns', 'clipboard')
  }
  if (has(t, 'parking', 'parked')) {
    return story('park', 'it rolls into place and stops', 'shopping-cart-01')
  }
  if (has(t, 'charging', 'charge') && !has(t, 'charger')) {
    return story('battery', 'cells build to a shared full-charge surge', 'battery-charging-01')
  }
  if (has(t, 'empty')) {
    return story('minus', 'the contents pinch away until the vessel is hollow', 'minus-sign')
  }
  if (has(t, 'full') && has(t, 'battery', 'tank', 'glass', 'bottle', 'cup', 'storage', 'disk', 'bin', 'basket')) {
    return story('heart', 'it swells to a full state and settles', 'favourite')
  }
  if (has(t, 'heat', 'heating') || (has(t, 'hot') && !has(t, 'price', 'sale', 'deal', 'dog', 'spot', 'key', 'air'))) {
    return story('fire', 'heat shimmers through the outline', 'fire')
  }
  if (has(t, 'cold', 'freeze', 'frozen') || (has(t, 'ice') && !has(t, 'hockey', 'cream', 'skate'))) {
    return story('snow', 'it stiffens and a little frost turns on the surface', 'snow')
  }
  if (has(t, 'search', 'find', 'magnifier', 'lookup')) {
    return story('search', 'the lens leans in, scans, and settles back', 'search-01')
  }
  if (has(t, 'download', 'import', 'install') && !has(t, 'cloud')) {
    return story('download', 'the arrow falls through; the tray takes the weight', 'download-01')
  }
  if (has(t, 'upload', 'export', 'publish') && !has(t, 'cloud')) {
    return story('upload', 'the arrow launches off the top', 'upload-01')
  }

  if (has(t, 'user', 'account', 'profile', 'contact', 'member') && has(t, 'add', 'plus')) {
    return story('user-add', 'the profile nods and the add mark answers beside it', 'user-add-01')
  }
  if (has(t, 'user', 'account', 'profile', 'contact', 'member') && has(t, 'check', 'tick', 'verified')) {
    return story('user-check', 'the profile nods while the confirmation stroke draws beside it', 'user-check-01')
  }
  if (has(t, 'user', 'account', 'profile', 'contact', 'member') && has(t, 'remove', 'minus', 'delete')) {
    return story('user-remove', 'the profile recoils from the remove mark and both settle', 'user-remove-01')
  }
  if (has(t, 'folder') && has(t, 'add', 'plus')) {
    return story('folder-add', 'the folder leans into the action and the add mark stamps the corner', 'folder-add')
  }
  if (has(t, 'file', 'document', 'note') && has(t, 'add', 'plus', 'new')) {
    return story('file-add', 'a new sheet drops into the stack while the add mark stamps its corner', 'file-add')
  }
  if (has(t, 'calendar') && has(t, 'add', 'plus', 'new')) {
    return story('file-add', 'the page flips forward and the add mark stamps the new date', 'calendar-add-01')
  }
  if (has(t, 'message', 'chat', 'comment', 'bubble') && has(t, 'add', 'plus', 'new')) {
    return story('message-add', 'the conversation inhales and the add mark appears in the open corner', 'message-add-01')
  }
  if (has(t, 'location', 'map', 'marker', 'pin') && has(t, 'add', 'plus')) {
    return story('pin-add', 'the pin hops onto its point while the add mark answers beside it', 'location-add-01')
  }
  if (has(t, 'shopping', 'cart', 'basket', 'bag') && has(t, 'add', 'plus')) {
    return story('cart-add', 'the plus lands in the basket and the cart absorbs its weight', 'shopping-cart-add-01')
  }

  if (has(t, 'arrow', 'chevron', 'chevrons', 'caret', 'direction')) {
    const chevron = has(t, 'chevron', 'chevrons', 'caret')
    if (all(t, 'up', 'right')) return story('arrow-up-right', 'the mark commits up-right along its diagonal', chevron ? 'chevron-up' : 'arrow-up-right-01')
    if (all(t, 'up', 'left')) return story('arrow-up-left', 'the mark commits up-left along its diagonal', chevron ? 'chevron-up' : 'arrow-up-left-01')
    if (all(t, 'down', 'right')) return story('arrow-down-right', 'the mark commits down-right along its diagonal', chevron ? 'chevron-down' : 'arrow-down-right-01')
    if (all(t, 'down', 'left')) return story('arrow-down-left', 'the mark commits down-left along its diagonal', chevron ? 'chevron-down' : 'arrow-down-left-01')
    if (has(t, 'up')) return story(chevron ? 'chevron-up' : 'arrow-up', 'the mark commits upward along its own axis', chevron ? 'chevron-up' : 'arrow-up-02')
    if (has(t, 'down')) return story(chevron ? 'chevron-down' : 'arrow-down', 'the mark commits downward along its own axis', chevron ? 'chevron-down' : 'arrow-down-02')
    if (has(t, 'left', 'back', 'previous')) return story(chevron ? 'chevron-left' : 'arrow-left', 'the mark commits left along its own axis', chevron ? 'chevron-left' : 'arrow-left-02')
    return story(chevron ? 'chevron-right' : 'arrow-right', 'the mark commits right along its own axis', chevron ? 'chevron-right' : 'arrow-right-02')
  }

  if (has(t, 'add', 'plus', 'new') && !has(t, 'address')) {
    return story('add-in-frame', 'the existing shape makes room and the new mark stamps into place', 'add-circle')
  }
  if (has(t, 'remove', 'minus', 'subtract')) {
    return story('minus-in-frame', 'the remove mark pinches short while the host shape recoils', 'minus-sign-circle')
  }
  if (has(t, 'check', 'checkmark', 'tick', 'done', 'verified', 'approve', 'success')) {
    return story('check-in-frame', 'the confirmation stroke writes from tail to tip and lands once', 'circle-check')
  }
  if (has(t, 'cancel', 'close', 'cross', 'multiply')) {
    return story('x-in-frame', 'the two closing strokes strike in sequence and settle', 'circle-x')
  }
  if (has(t, 'play')) return story('play', 'the play head compresses, releases forward, and settles', 'play')
  if (has(t, 'pause')) return story('pause', 'the two pause bars squeeze toward one another and release', 'pause')
  if (has(t, 'delete', 'trash', 'bin')) return story('trash', 'the lid opens and the bin catches the discarded weight', 'delete-02')
  if (has(t, 'copy', 'duplicate', 'clone')) return story('copy', 'the front copy separates from the source and returns', 'copy-01')
  if (has(t, 'save')) return story('camera', 'the disk presses into place while its slots write in', 'save')
  if (has(t, 'share')) return story('share', 'the signal travels through each connection and reaches every node', 'share-08')

  return subjectStory(parts) || geometryStory(name, parts, analyzed)
}
