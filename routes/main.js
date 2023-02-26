const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/profile", ensureAuth, postsController.getProfile);
router.get("/feed", ensureAuth, postsController.getFeed);
router.get("/partnership", ensureAuth, postsController.getPartnershipAgreementForm);
router.get("/influencing", ensureAuth, postsController.getInfluencingAgreementForm);
router.get("/offer", ensureAuth, postsController.getOfferLetterForm);
router.get("/employment", ensureAuth, postsController.getEmployeeAgreementForm);
router.get("/independentcontractor", ensureAuth, postsController.getIndependentContractorAgreementForm);
router.get("/sale", ensureAuth, postsController.getContractOfSaleForm);
router.get("/propertydeed", ensureAuth, postsController.getDeedOfAgreementForm);
router.get("/merchandising", ensureAuth, postsController.getMerchandisingAgreementForm);
router.get("/poa", ensureAuth, postsController.getPowerOfAttorneyForm);
router.get("/notification", ensureAuth, postsController.getNotificationForm);
router.get("/cover", ensureAuth, postsController.getCoverLetterForm);
router.get("/complaint", ensureAuth, postsController.getComplaintForm);
router.get("/appreciation", ensureAuth, postsController.getAppreciationForm);
router.get("/termination", ensureAuth, postsController.getTerminationForm);
router.get("/eoc", ensureAuth, postsController.getExtensionOfContractForm);
router.get("/tenancy", ensureAuth, postsController.getTenancyAgreementForm);
router.get("/demand", ensureAuth, postsController.getLetterOfDemandForm);
router.get("/noq", ensureAuth, postsController.getNoticeToQuitForm);
router.get("/norp", ensureAuth, postsController.getNoticeToRecoverPossessionForm);
router.get("/bail", ensureAuth, postsController.getBailForm);
router.get("/lease", ensureAuth, postsController.getLeaseDeedForm);
router.get("/mortgagedeed", ensureAuth, postsController.getDeedOfMortagageForm);
router.get("/charges", ensureAuth, postsController.getBillOfChargesForm);
router.get("/wills", ensureAuth, postsController.getWillsForm);
router.get("/codicil", ensureAuth, postsController.getLetterOfAdministrationForm);
router.get("/recording", ensureAuth, postsController.getMusicRecordingForm);
router.get("/production", ensureAuth, postsController.getProductionForm);
router.get("/management", ensureAuth, postsController.getArtistManagementForm);
router.get("/publishing", ensureAuth, postsController.getPublishingForm);
router.get("/feature", ensureAuth, postsController.getFeaturedArtistForm);
router.get("/advert", ensureAuth, postsController.getAdvertisingForm);
router.get("/billboard", ensureAuth, postsController.getBillboardForm);
router.get("/socialmedia", ensureAuth, postsController.getSocialMediaForm);
router.get("/excagent", ensureAuth, postsController.getExclusiveAgentForm);

router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;