const router = require("express").Router();
const { ig } = require("../controllers/ig");
const { thinh } = require("../controllers/thinh");
const { tho } = require("../controllers/tho");
const { joker } = require("../controllers/joker");
const { tw } = require("../controllers/tw");
const { cadao } = require("../controllers/cadao");
const { mp3 } = require("../controllers/mp3");
const { trai } = require("../controllers/trai");
const { nude } = require("../controllers/nude");
const { mong } = require("../controllers/mong");
const { haugai } = require("../controllers/haugai");
const { du } = require("../controllers/du");
const { lq } = require("../controllers/lq");
const { mui6 } = require("../controllers/mui6");
const { bot } = require("../controllers/bot");
const { gai } = require("../controllers/gai");
const { ai } = require("../controllers/ai");
const { anime } = require("../controllers/anime");
const { cosplay } = require("../controllers/cosplay");
const { home } = require("../controllers/home");
const { sexy } = require("../controllers/sexy");
const { story } = require("../controllers/story");
const { vdgai } = require("../controllers/vdgai");
const { vdanime } = require("../controllers/vdanime");
const { vdcosplay } = require("../controllers/vdcosplay");
const { vdremix } = require("../controllers/vdremix");
const { vdff } = require("../controllers/vdff");
const { vdvip } = require("../controllers/vdvip");
const { vdtrai } = require("../controllers/vdtrai");
const { vd6mui } = require("../controllers/vd6mui");
const { vdlq } = require("../controllers/vdlq");
const { vddoremon } = require("../controllers/vddoremon");
const { vdcanh } = require("../controllers/vdcanh");
const { vdtet } = require("../controllers/vdtet");

router.get("/ig", ig);
router.get("/thinh", thinh);
router.get("/tho", tho);
router.get("/joker", joker);
router.get("/tw", tw);
router.get("/cadao", cadao);
router.get("/cosplay", cosplay);
router.get("/mp3", mp3);
router.get("/trai", trai);
router.get("/nude", nude);
router.get("/mong", mong);
router.get("/haugai", haugai);
router.get("/du", du);
router.get("/lq", lq);
router.get("/mui6", mui6);
router.get("/bot", bot);
router.get("/gai", gai);
router.get("/ai", ai);
router.get("/anime", anime);
router.get("/", home);
router.get("/sexy", sexy);
router.get("/story", story);
router.get("/vdgai", vdgai);
router.get("/vdanime", vdanime);
router.get("/vdcosplay", vdcosplay);
router.get("/vdremix", vdremix);
router.get("/vdff", vdff);
router.get("/vdvip", vdvip);
router.get("/vdtrai", vdtrai);
router.get("/vd6mui", vd6mui);
router.get("/vdlq", vdlq);
router.get("/vddoremon", vddoremon);
router.get("/vdcanh", vdcanh);
router.get("/vdtet", vdtet);
module.exports = router;