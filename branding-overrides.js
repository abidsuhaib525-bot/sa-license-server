/* Suhaib Abid branding, colors, and language overrides.
 * Keeps the updated extension logic while restoring the old visible identity.
 */
(function () {
  'use strict';

  var BRAND_NAME = "Suhaib Abid";
  var FOOTER_TEXT = "Suhaib Abid";
  var SUPPORT_URL = "https://wa.me/923497641385";
  var BUY_URL = "https://wa.me/923497641385?text=I%20want%20to%20buy%20the%20unlimited%20plan%20of%20lovable%20extension";
  var LICENSE_PLACEHOLDER = "LZ-XXXX-XXXX-XXXX";
  var ALLOWED_LANGS = ["en", "ar"];
  var OLD_I18N = {
    en: {
      "license.title": "Activate License",
      "license.desc": "Enter your license key to unlock.",
      "license.validate": "Validate License",
      "license.divider": "official site",
      "header.notifications": "Notifications",
      "header.sidepanel": "Open in Side Panel",
      "header.theme": "Theme",
      "header.logout": "Logout",
      "sync.waiting": "Waiting for sync...",
      "sync.ok": "✅ Synced!",
      "sync.project": "Project:",
      "tab.prompt": "Prompt",
      "tab.history": "History",
      "prompt.placeholder": "Enter your command...",
      "toggle.licenseMode": "Plan Mode",
      "toggle.licenseMode.short": "Plan",
      "btn.attach": "Attach file (max. 10)",
      "btn.attach.short": "Attach file",
      "btn.optimize": "Optimize with AI",
      "btn.speech": "Voice to text",
      "btn.speech.short": "Voice",
      "btn.send": "Send",
      "shortcuts.title": "QUICK SHORTCUTS",
      "btn.watermark": "Remove Watermark",
      "btn.shield.on": "Enable Shield",
      "btn.shield.off": "Disable Shield",
      "btn.nativeChat": "Use Standard Chat",
      "btn.nativeChatActive": "Disable Standard Chat",
      "btn.backToExtension": "Back to Extension Chat",
      "btn.download": "Download Source Code",
      "btn.publish": "🌐 Publish Project",
      "btn.cloud": "☁️ Enable Lovable Cloud",
      "footer.support": "Support",
      "footer.brand": "Suhaib Abid",
      "notif.title": "Notifications",
      "notif.loading": "Loading...",
      "notif.none": "No notifications.",
      "notif.error": "Failed to load.",
      "notif.openLink": "Open link →",
      loading: "Loading...",
      "alert.success": "Success!",
      "alert.almostThere": "Almost there!",
      "alert.clickIcon": "Click the extension icon (top right) to open the side panel.",
      "alert.error": "Error",
      "alert.sidepanelSupport": "Unable to open the side panel. Make sure your browser supports this feature.",
      "alert.attention": "Attention",
      "alert.enterPrompt": "Please enter a prompt before optimizing.",
      "alert.promptOptimized": "Prompt Optimized! ✨",
      "alert.promptReady": "Your prompt has been enhanced with AI and is ready to send.",
      "alert.optimizerConnFail": "Failed to connect to the optimizer: ",
      "alert.micDenied": "Permission Denied",
      "alert.micAccess": "Please allow microphone access in your browser settings.",
      "alert.noAudio": "No Audio",
      "alert.noSpeech": "No speech detected. Please try again.",
      "alert.voiceError": "Voice Error",
      "alert.voiceInitFail": "Could not start voice recognition.",
      "alert.shieldActivated": "Shield Activated! 🛡️",
      "alert.shieldLocked": "Lovable input is locked. Use the extension to send prompts.",
      "alert.shieldDeactivated": "Shield Deactivated",
      "alert.shieldUnlocked": "Lovable input is unlocked again.",
      "alert.limit": "Limit",
      "alert.maxFiles": "Maximum of 10 files.",
      "alert.tokenNotCaptured": "Token not captured. Browse Lovable to synchronize.",
      "alert.largeFile": "Large File",
      "alert.fileExceeds": " exceeds 20MB.",
      "alert.uploadError": "Upload Error",
      "alert.uploadFail": "Could not upload image: ",
      "alert.attached": "Attached! 📎",
      "alert.filesAdded": " file(s) added!",
      "btn.ok": "OK",
      "expired.title": "License Expired!",
      "expired.text": "Your license period has ended. Visit the official site to renew.",
      "expired.renew": "🌐 Visit Site",
      "expired.close": "Close",
      "countdown.trial": "Trial expires in",
      "countdown.license": "License expires in",
      "countdown.expired": "⏰ License expired",
      "pay.title": "Visit the official site",
      "pay.divider": "Official site",
      "history.empty.title": "No messages",
      "history.empty.desc": "Your sent prompts will appear here as history.",
      "history.clear": "🗑 Clear History",
      "date.today": "Today",
      "date.yesterday": "Yesterday",
      "date.days": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "chat.sent": "✓ Sent",
      "chat.error": "✗ Error",
      "update.title": "New update v",
      "update.download": "Download v",
      "sp.backToPopup": "◀ Popup",
      "shield.overlay.text": "🛡️ Protected by Suhaib Abid",
      "shield.overlay.sub": "Use the extension to send prompts",
      "prompt.bugs.label": "Bugs",
      "prompt.refactor.label": "Refactor",
      "prompt.errors.label": "Errors",
      "prompt.optimize.label": "Optimize",
      "prompt.comments.label": "Comments",
      "prompt.seo.label": "SEO",
      "prompt.ui.label": "UI",
      "prompt.components.label": "Components",
      "prompt.review.label": "Review",
      "prompt.bugs.text": "Analyze the code and identify all bugs, errors and failures. Fix each one explaining the problem and the solution applied.",
      "prompt.refactor.text": "Elaborate a complete refactoring and optimization plan for the system in steps.",
      "prompt.errors.text": "Implement robust error handling throughout the code, including try/catch, validations and friendly error messages for the user.",
      "prompt.optimize.text": "Analyze and optimize system performance, identifying bottlenecks, improving queries, reducing re-renders and applying best practices.",
      "prompt.comments.text": "Add clear comments and documentation throughout the code, explaining the logic, parameters and return values of each function.",
      "prompt.seo.text": "Create a complete SEO optimization plan for this site.",
      "prompt.ui.text": "Improve the user interface making it more modern, responsive and accessible, following UX/UI best practices.",
      "prompt.components.text": "Reorganize the code separating into reusable, well-structured components with single responsibilities.",
      "prompt.review.text": "Do a complete code review identifying quality, security, performance issues and suggesting improvements.",
      "license.status.active": "Active",
      "license.status.trial": "Trial",
      "license.status.unlimited": "Unlimited License",
      "license.status.expired": "Expired",
      "license.status.expiresOn": "Expires on: ",
      "license.status.expiresIn": "License Expires In:",
      "session.time": "SESSION TIME",
      "planMode.alert.title": "Attention — Plan Mode",
      "planMode.alert.body": "<strong>Plan Mode/Think</strong> can consume credits, but offers great assistance. Use with moderation!",
      "planMode.alert.step1": "Activate <strong>Plan Mode</strong> to generate a plan.",
      "planMode.alert.step2": "On Lovable, <strong>do not click the Approve button</strong>; just copy the new plan.",
      "planMode.alert.step3": "Paste the copied plan into the extension prompt.",
      "planMode.alert.step4": "<strong>Turn off Plan Mode</strong> and send it via the extension; this way no extra credits will be consumed.",
      "planMode.alert.dismiss": "Don't show again",
      "planMode.alert.ok": "I understand!",
      "projectSync.title": "Project Sync",
      "projectSync.projectId": "Project ID",
      "projectSync.workspace": "Workspace",
      "projectSync.user": "User",
      "projectSync.account": "Account: ",
      "update.required.title": "Update Required",
      "update.required.desc": "Please update your extension to version v{version} to continue using Suhaib Abid.",
      "update.required.btn": "Contact Support"
    },
    ar: {
      "license.title": "تفعيل الترخيص",
      "license.desc": "أدخل مفتاح الترخيص لفتح الإضافة.",
      "license.validate": "التحقق من المفتاح",
      "license.divider": "الموقع الرسمي",
      "header.notifications": "الإشعارات",
      "header.sidepanel": "فتح في اللوحة الجانبية",
      "header.theme": "المظهر",
      "header.logout": "تسجيل الخروج",
      "sync.waiting": "بانتظار المزامنة...",
      "sync.ok": "✅ تم المزامنة!",
      "sync.project": "المشروع:",
      "tab.prompt": "الأوامر",
      "tab.history": "السجل",
      "prompt.placeholder": "اكتب أمرك هنا...",
      "toggle.licenseMode": "وضع الخطة",
      "toggle.licenseMode.short": "الخطة",
      "btn.attach": "إرفاق ملف (الحد الأقصى 10)",
      "btn.attach.short": "إرفاق ملف",
      "btn.optimize": "تحسين بالذكاء الاصطناعي",
      "btn.speech": "تحويل الصوت إلى نص",
      "btn.speech.short": "الصوت",
      "btn.send": "إرسال",
      "shortcuts.title": "اختصارات سريعة",
      "btn.watermark": "إزالة العلامة المائية",
      "btn.shield.on": "تفعيل الدرع",
      "btn.shield.off": "تعطيل الدرع",
      "btn.nativeChat": "استخدم الدردشة القياسية",
      "btn.nativeChatActive": "تعطيل الدردشة القياسية",
      "btn.backToExtension": "العودة لدردشة الإضافة",
      "btn.download": "تحميل الكود المصدري",
      "btn.publish": "🌐 نشر المشروع",
      "btn.cloud": "☁️ تفعيل سحابة Lovable",
      "footer.support": "الدعم",
      "footer.brand": "Suhaib Abid",
      "notif.title": "الإشعارات",
      "notif.loading": "جاري التحميل...",
      "notif.none": "لا توجد إشعارات.",
      "notif.error": "فشل التحميل.",
      "notif.openLink": "فتح الرابط ←",
      loading: "جاري التحميل...",
      "alert.success": "تم بنجاح!",
      "alert.almostThere": "اقتربنا!",
      "alert.clickIcon": "انقر على أيقونة الإضافة (أعلى اليمين) لفتح اللوحة الجانبية.",
      "alert.error": "خطأ",
      "alert.sidepanelSupport": "لا يمكن فتح اللوحة الجانبية. تأكد من أن متصفحك يدعم هذه الميزة.",
      "alert.attention": "تنبيه",
      "alert.enterPrompt": "يرجى كتابة أمر قبل البدء بالتحسين.",
      "alert.promptOptimized": "تم تحسين الأمر! ✨",
      "alert.promptReady": "تم تحسين الأمر الخاص بك بالذكاء الاصطناعي وجاهز للإرسال.",
      "alert.optimizerConnFail": "فشل الاتصال بمحسن الأوامر: ",
      "alert.micDenied": "تم رفض الإذن",
      "alert.micAccess": "يرجى السماح بالوصول إلى الميكروفون في إعدادات متصفحك.",
      "alert.noAudio": "لا يوجد صوت",
      "alert.noSpeech": "لم يتم رصد أي حديث. يرجى المحاولة مرة أخرى.",
      "alert.voiceError": "خطأ في الصوت",
      "alert.voiceInitFail": "تعذر بدء التعرف على الصوت.",
      "alert.shieldActivated": "تم تفعيل الدرع! 🛡️",
      "alert.shieldLocked": "حقل الإدخال في Lovable مغلق. استخدم الإضافة لإرسال الأوامر.",
      "alert.shieldDeactivated": "تم تعطيل الدرع",
      "alert.shieldUnlocked": "حقل الإدخال في Lovable متاح مرة أخرى.",
      "alert.limit": "الحد الأقصى",
      "alert.maxFiles": "الحد الأقصى 10 ملفات.",
      "alert.tokenNotCaptured": "لم يتم التقاط الرمز المميّز. تصفح موقع Lovable للمزامنة.",
      "alert.largeFile": "ملف كبير الحجم",
      "alert.fileExceeds": " يتجاوز حجمه 20 ميجابايت.",
      "alert.uploadError": "خطأ في الرفع",
      "alert.uploadFail": "تعذر رفع الصورة: ",
      "alert.attached": "تم الإرفاق! 📎",
      "alert.filesAdded": " ملف(ات) تم إضافتها!",
      "btn.ok": "حسناً",
      "expired.title": "انتهت صلاحية الترخيص!",
      "expired.text": "انتهت صلاحية ترخيصك. يرجى زيارة الموقع الرسمي للتجديد.",
      "expired.renew": "🌐 زيارة الموقع",
      "expired.close": "إغلاق",
      "countdown.trial": "التجربة تنتهي خلال",
      "countdown.license": "الترخيص ينتهي خلال",
      "countdown.expired": "⏰ انتهى الترخيص",
      "pay.title": "تفضل بزيارة الموقع الرسمي",
      "pay.divider": "الموقع الرسمي",
      "history.empty.title": "لا توجد رسائل",
      "history.empty.desc": "الرسائل التي ترسلها ستظهر هنا كسجل.",
      "history.clear": "🗑 مسح السجل",
      "date.today": "اليوم",
      "date.yesterday": "أمس",
      "date.days": ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
      "chat.sent": "✓ تم الإرسال",
      "chat.error": "✗ خطأ",
      "update.title": "تحديث جديد v",
      "update.download": "تحميل v",
      "sp.backToPopup": "◀ المنبثقة",
      "shield.overlay.text": "🛡️ محمي بواسطة Suhaib Abid",
      "shield.overlay.sub": "استخدم الإضافة لإرسال الأوامر",
      "prompt.bugs.label": "الأخطاء",
      "prompt.refactor.label": "إعادة هيكلة",
      "prompt.errors.label": "الأخطاء الشائعة",
      "prompt.optimize.label": "تحسين الأداء",
      "prompt.comments.label": "التعليقات",
      "prompt.seo.label": "سيو SEO",
      "prompt.ui.label": "واجهة المستخدم",
      "prompt.components.label": "المكونات",
      "prompt.review.label": "مراجعة الكود",
      "prompt.bugs.text": "حلل الكود وحدد جميع الأخطاء والثغرات وقم بإصلاحها مع شرح المشكلة والحل.",
      "prompt.refactor.text": "ضع خطة كاملة لإعادة هيكلة وتحسين النظام بالخطوات.",
      "prompt.errors.text": "قم بإعداد معالجة قوية للأخطاء في الكود تشمل try/catch ورسائل تنبيهية واضحة.",
      "prompt.optimize.text": "حلل الكود وحسن الأداء لجعله أسرع وتجنب تكرار العمليات غير الضرورية.",
      "prompt.comments.text": "أضف تعليقات واضحة وتوثيقاً في جميع أنحاء الكود لشرح منطق كل دالة.",
      "prompt.seo.text": "ضع خطة تحسين SEO كاملة لهذا الموقع.",
      "prompt.ui.text": "حسن واجهة المستخدم لتصبح أكثر عصرية وتفاعلية وتوافقاً مع الهواتف.",
      "prompt.components.text": "أعد تنظيم الكود وفصله إلى مكونات قابلة لإعادة الاستخدام.",
      "prompt.review.text": "قم بمراجعة شاملة للكود للتحقق من الجودة والحماية والأداء واقتراح التحسينات.",
      "license.status.active": "نشط",
      "license.status.trial": "تجريبي",
      "license.status.unlimited": "ترخيص غير محدود",
      "license.status.expired": "منتهي",
      "license.status.expiresOn": "ينتهي في: ",
      "license.status.expiresIn": "ينتهي الترخيص خلال:",
      "session.time": "وقت الجلسة",
      "planMode.alert.title": "تنبيه — وضع الخطة",
      "planMode.alert.body": "وضع <strong>الخطة/التفكير</strong> قد يستهلك رصيداً، ولكنه يقدم مساعدة جيدة. استخدمه باعتدال!",
      "planMode.alert.step1": "قم بتفعيل <strong>وضع الخطة</strong> لإنشاء خطة عمل.",
      "planMode.alert.step2": "في موقع Lovable، <strong>لا تضغط على زر الموافقة (Approve)</strong>؛ فقط قم بنسخ الخطة الجديدة.",
      "planMode.alert.step3": "قم بلصق الخطة المنسوخة في حقل الأوامر بالإضافة.",
      "planMode.alert.step4": "<strong>أوقف تفعيل وضع الخطة</strong> وأرسل الأمر عبر الإضافة؛ بهذه الطريقة لن يتم استهلاك أي رصيد إضافي.",
      "planMode.alert.dismiss": "لا تظهر مجدداً",
      "planMode.alert.ok": "مفهوم!",
      "projectSync.title": "مزامنة المشروع",
      "projectSync.projectId": "رقم المشروع",
      "projectSync.workspace": "مساحة العمل",
      "projectSync.user": "المستخدم",
      "projectSync.account": "الحساب: ",
      "update.required.title": "مطلوب تحديث الإضافة",
      "update.required.desc": "يرجى تحديث الإضافة إلى الإصدار v{version} للاستمرار في استخدام Suhaib Abid.",
      "update.required.btn": "تواصل مع الدعم"
    }
  };
  function getLogoUrl() {
    try {
      if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.getURL) {
        return chrome.runtime.getURL("assets/logo-master-lovable-square.png");
      }
    } catch (err) {}
    return "assets/logo-master-lovable-square.png";
  }
  var LOGO_URL = getLogoUrl();
  var REPLACEMENTS = [[/Developed\s+by\s+Lovable\s+Hut\s+BD\s+Extension/gi, FOOTER_TEXT], [/Developed\s+by\s+Lovable\s+Hut\s+BD\s+Store/gi, FOOTER_TEXT], [/Developed\s+by\s+Lovable\s+Hut\s+BD/g, FOOTER_TEXT], [/Developed\s+by\s+Suhaib\s+Abid/g, FOOTER_TEXT], [/Lovable\s+Hut\s+BD\s+Extension/g, BRAND_NAME], [/Lovable\s+Hut\s+Bd\s+Extension/g, BRAND_NAME], [/Suhaib\s+Abid\s+Extension/g, BRAND_NAME], [/Lovable\s+Hut\s+BD/g, BRAND_NAME], [/Lovable\s+Hut\s+Bd/g, BRAND_NAME], [/Ornov\s+Tech\s+BD/g, BRAND_NAME], [/Infinity\s+Lovable/g, BRAND_NAME], [/Lovable\s+Infinity/g, BRAND_NAME], [/Por:\s*Suhaib\s+Abid/g, FOOTER_TEXT], [/Por:\s*@dynhosilvaoficial/g, FOOTER_TEXT], [/@dynhosilvaoficial/g, BRAND_NAME], [/INFINITY-XXXX-XXXX-XXXX/g, LICENSE_PLACEHOLDER], [/Checking\s+license\s+on\s+Suhaib\s+Abid\s+server\.\.\./g, "Checking license on Suhaib Abid..."]];

  /* LAST_ZONE_STATIC_AR_MAP */
  var AR_STATIC_TEXT = {
    "Activate License": "تفعيل الترخيص",
    "Enter your license key to unlock.": "أدخل مفتاح الترخيص لفتح الإضافة.",
    "Validate License": "التحقق من المفتاح",
    "official site": "الموقع الرسمي",
    "Official site": "الموقع الرسمي",
    Notifications: "الإشعارات",
    "Open in Side Panel": "فتح في اللوحة الجانبية",
    Theme: "المظهر",
    Logout: "تسجيل الخروج",
    "Sign Out": "تسجيل الخروج",
    "Waiting for sync...": "بانتظار المزامنة...",
    "Synced!": "✅ تم المزامنة!",
    "Project:": "المشروع:",
    Prompt: "الأوامر",
    History: "السجل",
    "Enter your command...": "اكتب أمرك هنا...",
    "Plan Mode": "وضع الخطة",
    Plan: "الخطة",
    "Attach file (max. 10)": "إرفاق ملف (الحد الأقصى 10)",
    "Attach file": "إرفاق ملف",
    "Optimize with AI": "تحسين بالذكاء الاصطناعي",
    "Voice to text": "تحويل الصوت إلى نص",
    Voice: "الصوت",
    Send: "إرسال",
    "QUICK SHORTCUTS": "اختصارات سريعة",
    "Quick Shortcuts": "اختصارات سريعة",
    "Remove Watermark": "إزالة العلامة المائية",
    "Enable Shield": "تفعيل الدرع",
    "Disable Shield": "تعطيل الدرع",
    "Use Standard Chat": "استخدم الدردشة القياسية",
    "Disable Standard Chat": "تعطيل الدردشة القياسية",
    "Back to Extension Chat": "العودة لدردشة الإضافة",
    "Download Source Code": "تحميل الكود المصدري",
    "Publish Project": "نشر المشروع",
    "Enable Lovable Cloud": "☁ تفعيل سحابة Lovable",
    Support: "الدعم",
    "Contact Support": "تواصل مع الدعم",
    "Loading...": "جاري التحميل...",
    "No notifications.": "لا توجد إشعارات.",
    "Failed to load.": "فشل التحميل.",
    "Open link": "فتح الرابط ←",
    "Open link ->": "فتح الرابط ←",
    "Success!": "تم بنجاح!",
    "Almost there!": "اقتربنا!",
    Error: "خطأ",
    Attention: "تنبيه",
    "Permission Denied": "تم رفض الإذن",
    "No Audio": "لا يوجد صوت",
    "Voice Error": "خطأ في الصوت",
    "Shield Activated!": "تم تفعيل الدرع!",
    "Shield Deactivated": "تم تعطيل الدرع",
    Limit: "الحد الأقصى",
    "Large File": "ملف كبير الحجم",
    "Upload Error": "خطأ في الرفع",
    "Attached!": "تم الإرفاق!",
    OK: "حسناً",
    "License Expired!": "انتهت صلاحية الترخيص!",
    Close: "إغلاق",
    "Trial expires in": "التجربة تنتهي خلال",
    "License expires in": "الترخيص ينتهي خلال",
    "License expired": "⏰ انتهى الترخيص",
    "Visit the official site": "تفضل بزيارة الموقع الرسمي",
    "Visit Site": "زيارة الموقع",
    "No messages": "لا توجد رسائل",
    "Your sent prompts will appear here as history.": "الرسائل التي ترسلها ستظهر هنا كسجل.",
    "Clear History": "مسح السجل",
    Today: "اليوم",
    Yesterday: "أمس",
    Sent: "✓ تم الإرسال",
    Active: "نشط",
    Trial: "تجريبي",
    "Unlimited License": "ترخيص غير محدود",
    Expired: "منتهي",
    "Expires on:": "ينتهي في:",
    "License Expires In:": "ينتهي الترخيص خلال:",
    "SESSION TIME": "وقت الجلسة",
    "Attention - Plan Mode": "تنبيه — وضع الخطة",
    "Attention — Plan Mode": "تنبيه — وضع الخطة",
    "Attention – Plan Mode": "تنبيه — وضع الخطة",
    "<strong>Plan Mode/Think</strong> can consume credits, but offers great assistance. Use with moderation!": "وضع <strong>الخطة/التفكير</strong> قد يستهلك رصيداً، ولكنه يقدم مساعدة جيدة. استخدمه باعتدال!",
    "Activate <strong>Plan Mode</strong> to generate a plan.": "قم بتفعيل <strong>وضع الخطة</strong> لإنشاء خطة عمل.",
    "On Lovable, <strong>do not click the Approve button</strong>; just copy the new plan.": "في موقع Lovable، <strong>لا تضغط على زر الموافقة (Approve)</strong>؛ فقط قم بنسخ الخطة الجديدة.",
    "Paste the copied plan into the extension prompt.": "قم بلصق الخطة المنسوخة في حقل الأوامر بالإضافة.",
    "<strong>Turn off Plan Mode</strong> and send it via the extension; this way no extra credits will be consumed.": "<strong>أوقف تفعيل وضع الخطة</strong> وأرسل الأمر عبر الإضافة؛ بهذه الطريقة لن يتم استهلاك أي رصيد إضافي.",
    "Don't show again": "لا تظهر مجدداً",
    "I understand!": "مفهوم!",
    "Project Sync": "مزامنة المشروع",
    "Project ID": "رقم المشروع",
    Workspace: "مساحة العمل",
    User: "المستخدم",
    "Account:": "الحساب:",
    "Update Required": "مطلوب تحديث الإضافة",
    "New update v": "تحديث جديد v",
    "Download v": "تحميل v",
    Bugs: "الأخطاء",
    Refactor: "إعادة هيكلة",
    Errors: "الأخطاء الشائعة",
    Optimize: "تحسين الأداء",
    Comments: "التعليقات",
    SEO: "سيو SEO",
    UI: "واجهة المستخدم",
    Components: "المكونات",
    Review: "مراجعة الكود",
    "Mark all as read": "تحديد الكل كمقروء",
    "Marcar todas como lidas": "تحديد الكل كمقروء",
    Lidas: "مقروءة",
    "Digite seu comando...": "اكتب أمرك هنا...",
    "ATALHOS RÁPIDOS": "اختصارات سريعة",
    Enviar: "إرسال",
    "Remover Marca de Água": "إزالة العلامة المائية",
    "Ativar Escudo": "تفعيل الدرع",
    "Usar Chat Padrão": "استخدم الدردشة القياسية",
    "Baixar Código Fonte": "تحميل الكود المصدري",
    "Modo Plano": "وضع الخطة",
    "Protected by Gringow Extension": "محمي بواسطة Suhaib Abid",
    "Protected by ORNOV Extension": "محمي بواسطة Suhaib Abid",
    "Protected by Ornov Extension": "محمي بواسطة Suhaib Abid",
    "Use a extensão para enviar prompts": "استخدم الإضافة لإرسال الأوامر",
    "Escudo Ativado": "تم تفعيل الدرع!",
    "O input do Lovable está bloqueado. Use a extensão para enviar prompts.": "استخدم الإضافة لإرسال الأوامر",
    "Entendi!": "مفهوم!",
    "Atenção — Modo Plano": "تنبيه — وضع الخطة",
    "Atenção - Modo Plano": "تنبيه — وضع الخطة",
    "Modo Plano/Pensar": "الخطة/التفكير",
    "O Modo Plano/Pensar pode consumir créditos, mas oferece um bom auxílio. Use com moderação!": "وضع <strong>الخطة/التفكير</strong> قد يستهلك رصيداً، ولكنه يقدم مساعدة جيدة. استخدمه باعتدال!",
    "Ative o Modo Plano para gerar um plano.": "قم بتفعيل <strong>وضع الخطة</strong> لإنشاء خطة عمل.",
    "No Lovable, não clique no botão Aprovar; apenas copie o novo plano.": "في موقع Lovable، <strong>لا تضغط على زر الموافقة (Approve)</strong>؛ فقط قم بنسخ الخطة الجديدة.",
    "Cole o plano copiado no prompt da extensão.": "قم بلصق الخطة المنسوخة في حقل الأوامر بالإضافة.",
    "Desligue o Modo Plano e envie pela extensão; assim nenhum crédito extra será consumido.": "<strong>أوقف تفعيل وضع الخطة</strong> وأرسل الأمر عبر الإضافة؛ بهذه الطريقة لن يتم استهلاك أي رصيد إضافي.",
    "Não mostrar novamente": "لا تظهر مجدداً",
    "Não mostrar": "عدم العرض",
    novamente: "مرة أخرى",
    Popup: "النافذة",
    "Back to floating mode": "العودة للنافذة العائمة",
    "Protected by Suhaib Abid": "محمي بواسطة Suhaib Abid",
    "Use the extension to send prompts": "استخدم الإضافة لإرسال الأوامر",
    "Checking license on Suhaib Abid server...": "Checking license...",
    "Checking license on Suhaib Abid...": "Checking license...",
    "Checking license...": "Checking license...",
    "Plan Mode/Think": "الخطة/التفكير",
    "can consume credits, but offers great assistance. Use with moderation!": "قد يستهلك رصيداً، ولكنه يقدم مساعدة جيدة. استخدمه باعتدال!",
    Activate: "فعّل",
    "to generate a plan.": "لإنشاء خطة عمل.",
    "On Lovable,": "في موقع Lovable،",
    "do not click the Approve button": "لا تضغط على زر الموافقة (Approve)",
    "just copy the new plan.": "فقط قم بنسخ الخطة الجديدة.",
    "Turn off Plan Mode": "أوقف تفعيل وضع الخطة",
    "and send it via the extension; this way no extra credits will be consumed.": "وأرسل الأمر عبر الإضافة؛ بهذه الطريقة لن يتم استهلاك أي رصيد إضافي."
  };
  var AR_STATIC_PARTS = {
    "Activate License": "تفعيل الترخيص",
    "Enter your license key to unlock.": "أدخل مفتاح الترخيص لفتح الإضافة.",
    "Validate License": "التحقق من المفتاح",
    "official site": "الموقع الرسمي",
    "Official site": "الموقع الرسمي",
    Notifications: "الإشعارات",
    "Open in Side Panel": "فتح في اللوحة الجانبية",
    Theme: "المظهر",
    Logout: "تسجيل الخروج",
    "Sign Out": "تسجيل الخروج",
    "Waiting for sync...": "بانتظار المزامنة...",
    "Synced!": "✅ تم المزامنة!",
    "Project:": "المشروع:",
    Prompt: "الأوامر",
    History: "السجل",
    "Enter your command...": "اكتب أمرك هنا...",
    "Plan Mode": "وضع الخطة",
    Plan: "الخطة",
    "Attach file (max. 10)": "إرفاق ملف (الحد الأقصى 10)",
    "Attach file": "إرفاق ملف",
    "Optimize with AI": "تحسين بالذكاء الاصطناعي",
    "Voice to text": "تحويل الصوت إلى نص",
    Voice: "الصوت",
    Send: "إرسال",
    "QUICK SHORTCUTS": "اختصارات سريعة",
    "Quick Shortcuts": "اختصارات سريعة",
    "Remove Watermark": "إزالة العلامة المائية",
    "Enable Shield": "تفعيل الدرع",
    "Disable Shield": "تعطيل الدرع",
    "Use Standard Chat": "استخدم الدردشة القياسية",
    "Disable Standard Chat": "تعطيل الدردشة القياسية",
    "Back to Extension Chat": "العودة لدردشة الإضافة",
    "Download Source Code": "تحميل الكود المصدري",
    "Publish Project": "نشر المشروع",
    "Enable Lovable Cloud": "☁ تفعيل سحابة Lovable",
    Support: "الدعم",
    "Contact Support": "تواصل مع الدعم",
    "Loading...": "جاري التحميل...",
    "No notifications.": "لا توجد إشعارات.",
    "Failed to load.": "فشل التحميل.",
    "Open link": "فتح الرابط ←",
    "Open link ->": "فتح الرابط ←",
    "Success!": "تم بنجاح!",
    "Almost there!": "اقتربنا!",
    Error: "خطأ",
    Attention: "تنبيه",
    "Permission Denied": "تم رفض الإذن",
    "No Audio": "لا يوجد صوت",
    "Voice Error": "خطأ في الصوت",
    "Shield Activated!": "تم تفعيل الدرع!",
    "Shield Deactivated": "تم تعطيل الدرع",
    Limit: "الحد الأقصى",
    "Large File": "ملف كبير الحجم",
    "Upload Error": "خطأ في الرفع",
    "Attached!": "تم الإرفاق!",
    "License Expired!": "انتهت صلاحية الترخيص!",
    Close: "إغلاق",
    "Trial expires in": "التجربة تنتهي خلال",
    "License expires in": "الترخيص ينتهي خلال",
    "License expired": "⏰ انتهى الترخيص",
    "Visit the official site": "تفضل بزيارة الموقع الرسمي",
    "Visit Site": "زيارة الموقع",
    "No messages": "لا توجد رسائل",
    "Your sent prompts will appear here as history.": "الرسائل التي ترسلها ستظهر هنا كسجل.",
    "Clear History": "مسح السجل",
    Today: "اليوم",
    Yesterday: "أمس",
    Sent: "✓ تم الإرسال",
    Active: "نشط",
    Trial: "تجريبي",
    "Unlimited License": "ترخيص غير محدود",
    Expired: "منتهي",
    "Expires on:": "ينتهي في:",
    "License Expires In:": "ينتهي الترخيص خلال:",
    "SESSION TIME": "وقت الجلسة",
    "Attention - Plan Mode": "تنبيه — وضع الخطة",
    "Attention — Plan Mode": "تنبيه — وضع الخطة",
    "Attention – Plan Mode": "تنبيه — وضع الخطة",
    "<strong>Plan Mode/Think</strong> can consume credits, but offers great assistance. Use with moderation!": "وضع <strong>الخطة/التفكير</strong> قد يستهلك رصيداً، ولكنه يقدم مساعدة جيدة. استخدمه باعتدال!",
    "Activate <strong>Plan Mode</strong> to generate a plan.": "قم بتفعيل <strong>وضع الخطة</strong> لإنشاء خطة عمل.",
    "On Lovable, <strong>do not click the Approve button</strong>; just copy the new plan.": "في موقع Lovable، <strong>لا تضغط على زر الموافقة (Approve)</strong>؛ فقط قم بنسخ الخطة الجديدة.",
    "Paste the copied plan into the extension prompt.": "قم بلصق الخطة المنسوخة في حقل الأوامر بالإضافة.",
    "<strong>Turn off Plan Mode</strong> and send it via the extension; this way no extra credits will be consumed.": "<strong>أوقف تفعيل وضع الخطة</strong> وأرسل الأمر عبر الإضافة؛ بهذه الطريقة لن يتم استهلاك أي رصيد إضافي.",
    "Don't show again": "لا تظهر مجدداً",
    "I understand!": "مفهوم!",
    "Project Sync": "مزامنة المشروع",
    "Project ID": "رقم المشروع",
    Workspace: "مساحة العمل",
    User: "المستخدم",
    "Account:": "الحساب:",
    "Update Required": "مطلوب تحديث الإضافة",
    "New update v": "تحديث جديد v",
    "Download v": "تحميل v",
    Bugs: "الأخطاء",
    Refactor: "إعادة هيكلة",
    Errors: "الأخطاء الشائعة",
    Optimize: "تحسين الأداء",
    Comments: "التعليقات",
    Components: "المكونات",
    Review: "مراجعة الكود",
    "Mark all as read": "تحديد الكل كمقروء",
    "Marcar todas como lidas": "تحديد الكل كمقروء",
    Lidas: "مقروءة",
    "Digite seu comando...": "اكتب أمرك هنا...",
    "ATALHOS RÁPIDOS": "اختصارات سريعة",
    Enviar: "إرسال",
    "Remover Marca de Água": "إزالة العلامة المائية",
    "Ativar Escudo": "تفعيل الدرع",
    "Usar Chat Padrão": "استخدم الدردشة القياسية",
    "Baixar Código Fonte": "تحميل الكود المصدري",
    "Modo Plano": "وضع الخطة",
    "Protected by Gringow Extension": "محمي بواسطة Suhaib Abid",
    "Protected by ORNOV Extension": "محمي بواسطة Suhaib Abid",
    "Protected by Ornov Extension": "محمي بواسطة Suhaib Abid",
    "Use a extensão para enviar prompts": "استخدم الإضافة لإرسال الأوامر",
    "Escudo Ativado": "تم تفعيل الدرع!",
    "O input do Lovable está bloqueado. Use a extensão para enviar prompts.": "استخدم الإضافة لإرسال الأوامر",
    "Entendi!": "مفهوم!",
    "Atenção — Modo Plano": "تنبيه — وضع الخطة",
    "Atenção - Modo Plano": "تنبيه — وضع الخطة",
    "Modo Plano/Pensar": "الخطة/التفكير",
    "O Modo Plano/Pensar pode consumir créditos, mas oferece um bom auxílio. Use com moderação!": "وضع <strong>الخطة/التفكير</strong> قد يستهلك رصيداً، ولكنه يقدم مساعدة جيدة. استخدمه باعتدال!",
    "Ative o Modo Plano para gerar um plano.": "قم بتفعيل <strong>وضع الخطة</strong> لإنشاء خطة عمل.",
    "No Lovable, não clique no botão Aprovar; apenas copie o novo plano.": "في موقع Lovable، <strong>لا تضغط على زر الموافقة (Approve)</strong>؛ فقط قم بنسخ الخطة الجديدة.",
    "Cole o plano copiado no prompt da extensão.": "قم بلصق الخطة المنسوخة في حقل الأوامر بالإضافة.",
    "Desligue o Modo Plano e envie pela extensão; assim nenhum crédito extra será consumido.": "<strong>أوقف تفعيل وضع الخطة</strong> وأرسل الأمر عبر الإضافة؛ بهذه الطريقة لن يتم استهلاك أي رصيد إضافي.",
    "Não mostrar novamente": "لا تظهر مجدداً",
    "Não mostrar": "عدم العرض",
    novamente: "مرة أخرى",
    Popup: "النافذة",
    "Back to floating mode": "العودة للنافذة العائمة",
    "Protected by Suhaib Abid": "محمي بواسطة Suhaib Abid",
    "Use the extension to send prompts": "استخدم الإضافة لإرسال الأوامر",
    "Checking license on Suhaib Abid server...": "Checking license...",
    "Checking license on Suhaib Abid...": "Checking license...",
    "Checking license...": "Checking license...",
    "Plan Mode/Think": "الخطة/التفكير",
    "can consume credits, but offers great assistance. Use with moderation!": "قد يستهلك رصيداً، ولكنه يقدم مساعدة جيدة. استخدمه باعتدال!",
    Activate: "فعّل",
    "to generate a plan.": "لإنشاء خطة عمل.",
    "On Lovable,": "في موقع Lovable،",
    "do not click the Approve button": "لا تضغط على زر الموافقة (Approve)",
    "just copy the new plan.": "فقط قم بنسخ الخطة الجديدة.",
    "Turn off Plan Mode": "أوقف تفعيل وضع الخطة",
    "and send it via the extension; this way no extra credits will be consumed.": "وأرسل الأمر عبر الإضافة؛ بهذه الطريقة لن يتم استهلاك أي رصيد إضافي."
  };
  var EN_STATIC_TEXT = {
    "تفعيل الترخيص": "Activate License",
    "أدخل مفتاح الترخيص لفتح الإضافة.": "Enter your license key to unlock.",
    "التحقق من المفتاح": "Validate License",
    "الموقع الرسمي": "Official site",
    الإشعارات: "Notifications",
    "فتح في اللوحة الجانبية": "Open in Side Panel",
    المظهر: "Theme",
    "تسجيل الخروج": "Sign Out",
    "بانتظار المزامنة...": "Waiting for sync...",
    "✅ تم المزامنة!": "Synced!",
    "المشروع:": "Project:",
    الأوامر: "Prompt",
    السجل: "History",
    "اكتب أمرك هنا...": "Enter your command...",
    "وضع الخطة": "Plan Mode",
    الخطة: "Plan",
    "إرفاق ملف (الحد الأقصى 10)": "Attach file (max. 10)",
    "إرفاق ملف": "Attach file",
    "تحسين بالذكاء الاصطناعي": "Optimize with AI",
    "تحويل الصوت إلى نص": "Voice to text",
    الصوت: "Voice",
    إرسال: "Send",
    "اختصارات سريعة": "Quick Shortcuts",
    "إزالة العلامة المائية": "Remove Watermark",
    "تفعيل الدرع": "Enable Shield",
    "تعطيل الدرع": "Disable Shield",
    "استخدم الدردشة القياسية": "Use Standard Chat",
    "تعطيل الدردشة القياسية": "Disable Standard Chat",
    "العودة لدردشة الإضافة": "Back to Extension Chat",
    "تحميل الكود المصدري": "Download Source Code",
    "نشر المشروع": "Publish Project",
    "☁ تفعيل سحابة Lovable": "Enable Lovable Cloud",
    الدعم: "Support",
    "تواصل مع الدعم": "Contact Support",
    "جاري التحميل...": "Loading...",
    "لا توجد إشعارات.": "No notifications.",
    "فشل التحميل.": "Failed to load.",
    "فتح الرابط ←": "Open link ->",
    "تم بنجاح!": "Success!",
    "اقتربنا!": "Almost there!",
    خطأ: "Error",
    تنبيه: "Attention",
    "تم رفض الإذن": "Permission Denied",
    "لا يوجد صوت": "No Audio",
    "خطأ في الصوت": "Voice Error",
    "تم تفعيل الدرع!": "Shield Activated!",
    "تم تعطيل الدرع": "Shield Deactivated",
    "الحد الأقصى": "Limit",
    "ملف كبير الحجم": "Large File",
    "خطأ في الرفع": "Upload Error",
    "تم الإرفاق!": "Attached!",
    حسناً: "OK",
    "انتهت صلاحية الترخيص!": "License Expired!",
    إغلاق: "Close",
    "التجربة تنتهي خلال": "Trial expires in",
    "الترخيص ينتهي خلال": "License expires in",
    "⏰ انتهى الترخيص": "License expired",
    "تفضل بزيارة الموقع الرسمي": "Visit the official site",
    "زيارة الموقع": "Visit Site",
    "لا توجد رسائل": "No messages",
    "الرسائل التي ترسلها ستظهر هنا كسجل.": "Your sent prompts will appear here as history.",
    "مسح السجل": "Clear History",
    اليوم: "Today",
    أمس: "Yesterday",
    "✓ تم الإرسال": "Sent",
    نشط: "Active",
    تجريبي: "Trial",
    "ترخيص غير محدود": "Unlimited License",
    منتهي: "Expired",
    "ينتهي في:": "Expires on:",
    "ينتهي الترخيص خلال:": "License Expires In:",
    "وقت الجلسة": "SESSION TIME",
    "تنبيه — وضع الخطة": "Attention - Plan Mode",
    "وضع <strong>الخطة/التفكير</strong> قد يستهلك رصيداً، ولكنه يقدم مساعدة جيدة. استخدمه باعتدال!": "<strong>Plan Mode/Think</strong> can consume credits, but offers great assistance. Use with moderation!",
    "قم بتفعيل <strong>وضع الخطة</strong> لإنشاء خطة عمل.": "Activate <strong>Plan Mode</strong> to generate a plan.",
    "في موقع Lovable، <strong>لا تضغط على زر الموافقة (Approve)</strong>؛ فقط قم بنسخ الخطة الجديدة.": "On Lovable, <strong>do not click the Approve button</strong>; just copy the new plan.",
    "قم بلصق الخطة المنسوخة في حقل الأوامر بالإضافة.": "Paste the copied plan into the extension prompt.",
    "<strong>أوقف تفعيل وضع الخطة</strong> وأرسل الأمر عبر الإضافة؛ بهذه الطريقة لن يتم استهلاك أي رصيد إضافي.": "<strong>Turn off Plan Mode</strong> and send it via the extension; this way no extra credits will be consumed.",
    "لا تظهر مجدداً": "Don't show again",
    "مفهوم!": "I understand!",
    "مزامنة المشروع": "Project Sync",
    "رقم المشروع": "Project ID",
    "مساحة العمل": "Workspace",
    المستخدم: "User",
    "الحساب:": "Account:",
    "مطلوب تحديث الإضافة": "Update Required",
    "تحديث جديد v": "New update v",
    "تحميل v": "Download v",
    الأخطاء: "Bugs",
    "إعادة هيكلة": "Refactor",
    "الأخطاء الشائعة": "Errors",
    "تحسين الأداء": "Optimize",
    التعليقات: "Comments",
    "سيو SEO": "SEO",
    "واجهة المستخدم": "UI",
    المكونات: "Components",
    "مراجعة الكود": "Review",
    "تحديد الكل كمقروء": "Mark all as read",
    مقروءة: "Lidas",
    "محمي بواسطة Suhaib Abid": "Protected by Suhaib Abid",
    "استخدم الإضافة لإرسال الأوامر": "Use the extension to send prompts",
    "الخطة/التفكير": "Plan Mode/Think",
    "عدم العرض": "Não mostrar",
    "مرة أخرى": "novamente",
    النافذة: "Popup",
    "العودة للنافذة العائمة": "Back to floating mode",
    "Checking license...": "Checking license...",
    "قد يستهلك رصيداً، ولكنه يقدم مساعدة جيدة. استخدمه باعتدال!": "can consume credits, but offers great assistance. Use with moderation!",
    فعّل: "Activate",
    "لإنشاء خطة عمل.": "to generate a plan.",
    "في موقع Lovable،": "On Lovable,",
    "لا تضغط على زر الموافقة (Approve)": "do not click the Approve button",
    "فقط قم بنسخ الخطة الجديدة.": "just copy the new plan.",
    "أوقف تفعيل وضع الخطة": "Turn off Plan Mode",
    "وأرسل الأمر عبر الإضافة؛ بهذه الطريقة لن يتم استهلاك أي رصيد إضافي.": "and send it via the extension; this way no extra credits will be consumed.",
    "Digite seu comando...": "Enter your command...",
    "ATALHOS RÁPIDOS": "QUICK SHORTCUTS",
    Enviar: "Send",
    "Remover Marca de Água": "Remove Watermark",
    "Ativar Escudo": "Enable Shield",
    "Usar Chat Padrão": "Use Standard Chat",
    "Baixar Código Fonte": "Download Source Code",
    "Modo Plano": "Plan Mode",
    "Protected by Gringow Extension": "Protected by Suhaib Abid",
    "Protected by ORNOV Extension": "Protected by Suhaib Abid",
    "Protected by Ornov Extension": "Protected by Suhaib Abid",
    "Use a extensão para enviar prompts": "Use the extension to send prompts",
    "Escudo Ativado": "Shield Activated!",
    "O input do Lovable está bloqueado. Use a extensão para enviar prompts.": "The Lovable input is blocked. Use the extension to send prompts.",
    "Entendi!": "I understand!",
    "Atenção — Modo Plano": "Attention - Plan Mode",
    "Atenção - Modo Plano": "Attention - Plan Mode",
    "Modo Plano/Pensar": "Plan Mode/Think",
    "O Modo Plano/Pensar pode consumir créditos, mas oferece um bom auxílio. Use com moderação!": "<strong>Plan Mode/Think</strong> can consume credits, but offers great assistance. Use with moderation!",
    "Ative o Modo Plano para gerar um plano.": "Activate <strong>Plan Mode</strong> to generate a plan.",
    "No Lovable, não clique no botão Aprovar; apenas copie o novo plano.": "On Lovable, <strong>do not click the Approve button</strong>; just copy the new plan.",
    "Cole o plano copiado no prompt da extensão.": "Paste the copied plan into the extension prompt.",
    "Desligue o Modo Plano e envie pela extensão; assim nenhum crédito extra será consumido.": "<strong>Turn off Plan Mode</strong> and send it via the extension; this way no extra credits will be consumed.",
    "Não mostrar novamente": "Don't show again",
    "Não mostrar": "Don't show",
    novamente: "again",
    "Checking license on Suhaib Abid server...": "Checking license...",
    "Checking license on Suhaib Abid...": "Checking license..."
  };
  var EN_STATIC_PARTS = {
    "تفعيل الترخيص": "Activate License",
    "أدخل مفتاح الترخيص لفتح الإضافة.": "Enter your license key to unlock.",
    "التحقق من المفتاح": "Validate License",
    "الموقع الرسمي": "Official site",
    الإشعارات: "Notifications",
    "فتح في اللوحة الجانبية": "Open in Side Panel",
    المظهر: "Theme",
    "تسجيل الخروج": "Sign Out",
    "بانتظار المزامنة...": "Waiting for sync...",
    "✅ تم المزامنة!": "Synced!",
    "المشروع:": "Project:",
    الأوامر: "Prompt",
    السجل: "History",
    "اكتب أمرك هنا...": "Enter your command...",
    "وضع الخطة": "Plan Mode",
    الخطة: "Plan",
    "إرفاق ملف (الحد الأقصى 10)": "Attach file (max. 10)",
    "إرفاق ملف": "Attach file",
    "تحسين بالذكاء الاصطناعي": "Optimize with AI",
    "تحويل الصوت إلى نص": "Voice to text",
    الصوت: "Voice",
    إرسال: "Send",
    "اختصارات سريعة": "Quick Shortcuts",
    "إزالة العلامة المائية": "Remove Watermark",
    "تفعيل الدرع": "Enable Shield",
    "تعطيل الدرع": "Disable Shield",
    "استخدم الدردشة القياسية": "Use Standard Chat",
    "تعطيل الدردشة القياسية": "Disable Standard Chat",
    "العودة لدردشة الإضافة": "Back to Extension Chat",
    "تحميل الكود المصدري": "Download Source Code",
    "نشر المشروع": "Publish Project",
    "☁ تفعيل سحابة Lovable": "Enable Lovable Cloud",
    الدعم: "Support",
    "تواصل مع الدعم": "Contact Support",
    "جاري التحميل...": "Loading...",
    "لا توجد إشعارات.": "No notifications.",
    "فشل التحميل.": "Failed to load.",
    "فتح الرابط ←": "Open link ->",
    "تم بنجاح!": "Success!",
    "اقتربنا!": "Almost there!",
    خطأ: "Error",
    تنبيه: "Attention",
    "تم رفض الإذن": "Permission Denied",
    "لا يوجد صوت": "No Audio",
    "خطأ في الصوت": "Voice Error",
    "تم تفعيل الدرع!": "Shield Activated!",
    "تم تعطيل الدرع": "Shield Deactivated",
    "الحد الأقصى": "Limit",
    "ملف كبير الحجم": "Large File",
    "خطأ في الرفع": "Upload Error",
    "تم الإرفاق!": "Attached!",
    "انتهت صلاحية الترخيص!": "License Expired!",
    إغلاق: "Close",
    "التجربة تنتهي خلال": "Trial expires in",
    "الترخيص ينتهي خلال": "License expires in",
    "⏰ انتهى الترخيص": "License expired",
    "تفضل بزيارة الموقع الرسمي": "Visit the official site",
    "زيارة الموقع": "Visit Site",
    "لا توجد رسائل": "No messages",
    "الرسائل التي ترسلها ستظهر هنا كسجل.": "Your sent prompts will appear here as history.",
    "مسح السجل": "Clear History",
    اليوم: "Today",
    أمس: "Yesterday",
    "✓ تم الإرسال": "Sent",
    نشط: "Active",
    تجريبي: "Trial",
    "ترخيص غير محدود": "Unlimited License",
    منتهي: "Expired",
    "ينتهي في:": "Expires on:",
    "ينتهي الترخيص خلال:": "License Expires In:",
    "وقت الجلسة": "SESSION TIME",
    "تنبيه — وضع الخطة": "Attention - Plan Mode",
    "وضع <strong>الخطة/التفكير</strong> قد يستهلك رصيداً، ولكنه يقدم مساعدة جيدة. استخدمه باعتدال!": "<strong>Plan Mode/Think</strong> can consume credits, but offers great assistance. Use with moderation!",
    "قم بتفعيل <strong>وضع الخطة</strong> لإنشاء خطة عمل.": "Activate <strong>Plan Mode</strong> to generate a plan.",
    "في موقع Lovable، <strong>لا تضغط على زر الموافقة (Approve)</strong>؛ فقط قم بنسخ الخطة الجديدة.": "On Lovable, <strong>do not click the Approve button</strong>; just copy the new plan.",
    "قم بلصق الخطة المنسوخة في حقل الأوامر بالإضافة.": "Paste the copied plan into the extension prompt.",
    "<strong>أوقف تفعيل وضع الخطة</strong> وأرسل الأمر عبر الإضافة؛ بهذه الطريقة لن يتم استهلاك أي رصيد إضافي.": "<strong>Turn off Plan Mode</strong> and send it via the extension; this way no extra credits will be consumed.",
    "لا تظهر مجدداً": "Don't show again",
    "مفهوم!": "I understand!",
    "مزامنة المشروع": "Project Sync",
    "رقم المشروع": "Project ID",
    "مساحة العمل": "Workspace",
    المستخدم: "User",
    "الحساب:": "Account:",
    "مطلوب تحديث الإضافة": "Update Required",
    "تحديث جديد v": "New update v",
    "تحميل v": "Download v",
    الأخطاء: "Bugs",
    "إعادة هيكلة": "Refactor",
    "الأخطاء الشائعة": "Errors",
    "تحسين الأداء": "Optimize",
    التعليقات: "Comments",
    المكونات: "Components",
    "مراجعة الكود": "Review",
    "تحديد الكل كمقروء": "Mark all as read",
    مقروءة: "Lidas",
    "محمي بواسطة Suhaib Abid": "Protected by Suhaib Abid",
    "استخدم الإضافة لإرسال الأوامر": "Use the extension to send prompts",
    "الخطة/التفكير": "Plan Mode/Think",
    "عدم العرض": "Não mostrar",
    "مرة أخرى": "novamente",
    النافذة: "Popup",
    "العودة للنافذة العائمة": "Back to floating mode",
    "Checking license...": "Checking license...",
    "قد يستهلك رصيداً، ولكنه يقدم مساعدة جيدة. استخدمه باعتدال!": "can consume credits, but offers great assistance. Use with moderation!",
    فعّل: "Activate",
    "لإنشاء خطة عمل.": "to generate a plan.",
    "في موقع Lovable،": "On Lovable,",
    "لا تضغط على زر الموافقة (Approve)": "do not click the Approve button",
    "فقط قم بنسخ الخطة الجديدة.": "just copy the new plan.",
    "أوقف تفعيل وضع الخطة": "Turn off Plan Mode",
    "وأرسل الأمر عبر الإضافة؛ بهذه الطريقة لن يتم استهلاك أي رصيد إضافي.": "and send it via the extension; this way no extra credits will be consumed.",
    "Digite seu comando...": "Enter your command...",
    "ATALHOS RÁPIDOS": "QUICK SHORTCUTS",
    Enviar: "Send",
    "Remover Marca de Água": "Remove Watermark",
    "Ativar Escudo": "Enable Shield",
    "Usar Chat Padrão": "Use Standard Chat",
    "Baixar Código Fonte": "Download Source Code",
    "Modo Plano": "Plan Mode",
    "Protected by Gringow Extension": "Protected by Suhaib Abid",
    "Protected by ORNOV Extension": "Protected by Suhaib Abid",
    "Protected by Ornov Extension": "Protected by Suhaib Abid",
    "Use a extensão para enviar prompts": "Use the extension to send prompts",
    "Escudo Ativado": "Shield Activated!",
    "O input do Lovable está bloqueado. Use a extensão para enviar prompts.": "The Lovable input is blocked. Use the extension to send prompts.",
    "Entendi!": "I understand!",
    "Atenção — Modo Plano": "Attention - Plan Mode",
    "Atenção - Modo Plano": "Attention - Plan Mode",
    "Modo Plano/Pensar": "Plan Mode/Think",
    "O Modo Plano/Pensar pode consumir créditos, mas oferece um bom auxílio. Use com moderação!": "<strong>Plan Mode/Think</strong> can consume credits, but offers great assistance. Use with moderation!",
    "Ative o Modo Plano para gerar um plano.": "Activate <strong>Plan Mode</strong> to generate a plan.",
    "No Lovable, não clique no botão Aprovar; apenas copie o novo plano.": "On Lovable, <strong>do not click the Approve button</strong>; just copy the new plan.",
    "Cole o plano copiado no prompt da extensão.": "Paste the copied plan into the extension prompt.",
    "Desligue o Modo Plano e envie pela extensão; assim nenhum crédito extra será consumido.": "<strong>Turn off Plan Mode</strong> and send it via the extension; this way no extra credits will be consumed.",
    "Não mostrar novamente": "Don't show again",
    "Não mostrar": "Don't show",
    novamente: "again",
    حسناً: "OK",
    "سيو SEO": "SEO",
    "واجهة المستخدم": "UI",
    "Checking license on Suhaib Abid server...": "Checking license...",
    "Checking license on Suhaib Abid...": "Checking license..."
  };
  var CLEAN_AR_I18N = {
    "license.title": "تفعيل الترخيص",
    "license.desc": "أدخل مفتاح الترخيص لفتح الإضافة.",
    "license.validate": "التحقق من المفتاح",
    "license.divider": "الموقع الرسمي",
    "header.notifications": "الإشعارات",
    "header.sidepanel": "فتح في اللوحة الجانبية",
    "header.theme": "المظهر",
    "header.logout": "تسجيل الخروج",
    "sync.waiting": "بانتظار المزامنة...",
    "sync.ok": "✅ تم المزامنة!",
    "sync.project": "المشروع:",
    "tab.prompt": "الأوامر",
    "tab.history": "السجل",
    "prompt.placeholder": "اكتب أمرك هنا...",
    "toggle.licenseMode": "وضع الخطة",
    "toggle.licenseMode.short": "الخطة",
    "btn.attach": "إرفاق ملف (الحد الأقصى 10)",
    "btn.attach.short": "إرفاق ملف",
    "btn.optimize": "تحسين بالذكاء الاصطناعي",
    "btn.speech": "تحويل الصوت إلى نص",
    "btn.speech.short": "الصوت",
    "btn.send": "إرسال",
    "shortcuts.title": "اختصارات سريعة",
    "btn.watermark": "إزالة العلامة المائية",
    "btn.shield.on": "تفعيل الدرع",
    "btn.shield.off": "تعطيل الدرع",
    "btn.nativeChat": "استخدم الدردشة القياسية",
    "btn.nativeChatActive": "تعطيل الدردشة القياسية",
    "btn.backToExtension": "العودة لدردشة الإضافة",
    "btn.download": "تحميل الكود المصدري",
    "btn.publish": "نشر المشروع",
    "btn.cloud": "☁ تفعيل سحابة Lovable",
    "footer.support": "الدعم",
    "footer.brand": "Suhaib Abid",
    "notif.title": "الإشعارات",
    "notif.loading": "جاري التحميل...",
    "notif.none": "لا توجد إشعارات.",
    "notif.error": "فشل التحميل.",
    "notif.openLink": "فتح الرابط ←",
    loading: "جاري التحميل...",
    "alert.success": "تم بنجاح!",
    "alert.almostThere": "اقتربنا!",
    "alert.clickIcon": "انقر على أيقونة الإضافة (أعلى اليمين) لفتح اللوحة الجانبية.",
    "alert.error": "خطأ",
    "alert.sidepanelSupport": "لا يمكن فتح اللوحة الجانبية. تأكد من أن متصفحك يدعم هذه الميزة.",
    "alert.attention": "تنبيه",
    "alert.enterPrompt": "يرجى كتابة أمر قبل البدء بالتحسين.",
    "alert.promptOptimized": "تم تحسين الأمر! ✨",
    "alert.promptReady": "تم تحسين الأمر الخاص بك بالذكاء الاصطناعي وجاهز للإرسال.",
    "alert.optimizerConnFail": "فشل الاتصال بمحسن الأوامر:",
    "alert.micDenied": "تم رفض الإذن",
    "alert.micAccess": "يرجى السماح بالوصول إلى الميكروفون في إعدادات متصفحك.",
    "alert.noAudio": "لا يوجد صوت",
    "alert.noSpeech": "لم يتم رصد أي حديث. يرجى المحاولة مرة أخرى.",
    "alert.voiceError": "خطأ في الصوت",
    "alert.voiceInitFail": "تعذر بدء التعرف على الصوت.",
    "alert.shieldActivated": "تم تفعيل الدرع!",
    "alert.shieldLocked": "حقل الإدخال في Lovable مغلق. استخدم الإضافة لإرسال الأوامر.",
    "alert.shieldDeactivated": "تم تعطيل الدرع",
    "alert.shieldUnlocked": "حقل الإدخال في Lovable متاح مرة أخرى.",
    "alert.limit": "الحد الأقصى",
    "alert.maxFiles": "الحد الأقصى 10 ملفات.",
    "alert.tokenNotCaptured": "لم يتم التقاط الرمز المميّز. تصفح موقع Lovable للمزامنة.",
    "alert.largeFile": "ملف كبير الحجم",
    "alert.fileExceeds": "يتجاوز حجمه 20 ميجابايت.",
    "alert.uploadError": "خطأ في الرفع",
    "alert.uploadFail": "تعذر رفع الصورة:",
    "alert.attached": "تم الإرفاق!",
    "alert.filesAdded": "ملف(ات) تم إضافتها!",
    "btn.ok": "حسناً",
    "expired.title": "انتهت صلاحية الترخيص!",
    "expired.text": "انتهت صلاحية ترخيصك. يرجى زيارة الموقع الرسمي للتجديد.",
    "expired.renew": "زيارة الموقع",
    "expired.close": "إغلاق",
    "countdown.trial": "التجربة تنتهي خلال",
    "countdown.license": "الترخيص ينتهي خلال",
    "countdown.expired": "⏰ انتهى الترخيص",
    "pay.title": "تفضل بزيارة الموقع الرسمي",
    "pay.divider": "الموقع الرسمي",
    "history.empty.title": "لا توجد رسائل",
    "history.empty.desc": "الرسائل التي ترسلها ستظهر هنا كسجل.",
    "history.clear": "مسح السجل",
    "date.today": "اليوم",
    "date.yesterday": "أمس",
    "date.days": "الأحد,الإثنين,الثلاثاء,الأربعاء,الخميس,الجمعة,السبت",
    "chat.sent": "✓ تم الإرسال",
    "chat.error": "✗ خطأ",
    "update.title": "تحديث جديد v",
    "update.download": "تحميل v",
    "sp.backToPopup": "النافذة",
    "shield.overlay.text": "محمي بواسطة Suhaib Abid",
    "shield.overlay.sub": "استخدم الإضافة لإرسال الأوامر",
    "prompt.bugs.label": "الأخطاء",
    "prompt.refactor.label": "إعادة هيكلة",
    "prompt.errors.label": "الأخطاء الشائعة",
    "prompt.optimize.label": "تحسين الأداء",
    "prompt.comments.label": "التعليقات",
    "prompt.seo.label": "سيو SEO",
    "prompt.ui.label": "واجهة المستخدم",
    "prompt.components.label": "المكونات",
    "prompt.review.label": "مراجعة الكود",
    "prompt.bugs.text": "حلل الكود وحدد جميع الأخطاء والثغرات وقم بإصلاحها مع شرح المشكلة والحل.",
    "prompt.refactor.text": "ضع خطة كاملة لإعادة هيكلة وتحسين النظام بالخطوات.",
    "prompt.errors.text": "قم بإعداد معالجة قوية للأخطاء في الكود تشمل try/catch ورسائل تنبيهية واضحة.",
    "prompt.optimize.text": "حلل الكود وحسن الأداء لجعله أسرع وتجنب تكرار العمليات غير الضرورية.",
    "prompt.comments.text": "أضف تعليقات واضحة وتوثيقاً في جميع أنحاء الكود لشرح منطق كل دالة.",
    "prompt.seo.text": "ضع خطة تحسين SEO كاملة لهذا الموقع.",
    "prompt.ui.text": "حسن واجهة المستخدم لتصبح أكثر عصرية وتفاعلية وتوافقاً مع الهواتف.",
    "prompt.components.text": "أعد تنظيم الكود وفصله إلى مكونات قابلة لإعادة الاستخدام.",
    "prompt.review.text": "قم بمراجعة شاملة للكود للتحقق من الجودة والحماية والأداء واقتراح التحسينات.",
    "license.status.active": "نشط",
    "license.status.trial": "تجريبي",
    "license.status.unlimited": "ترخيص غير محدود",
    "license.status.expired": "منتهي",
    "license.status.expiresOn": "ينتهي في:",
    "license.status.expiresIn": "ينتهي الترخيص خلال:",
    "session.time": "وقت الجلسة",
    "planMode.alert.title": "تنبيه — وضع الخطة",
    "planMode.alert.body": "وضع <strong>الخطة/التفكير</strong> قد يستهلك رصيداً، ولكنه يقدم مساعدة جيدة. استخدمه باعتدال!",
    "planMode.alert.step1": "قم بتفعيل <strong>وضع الخطة</strong> لإنشاء خطة عمل.",
    "planMode.alert.step2": "في موقع Lovable، <strong>لا تضغط على زر الموافقة (Approve)</strong>؛ فقط قم بنسخ الخطة الجديدة.",
    "planMode.alert.step3": "قم بلصق الخطة المنسوخة في حقل الأوامر بالإضافة.",
    "planMode.alert.step4": "<strong>أوقف تفعيل وضع الخطة</strong> وأرسل الأمر عبر الإضافة؛ بهذه الطريقة لن يتم استهلاك أي رصيد إضافي.",
    "planMode.alert.dismiss": "لا تظهر مجدداً",
    "planMode.alert.ok": "مفهوم!",
    "projectSync.title": "مزامنة المشروع",
    "projectSync.projectId": "رقم المشروع",
    "projectSync.workspace": "مساحة العمل",
    "projectSync.user": "المستخدم",
    "projectSync.account": "الحساب:",
    "update.required.title": "مطلوب تحديث الإضافة",
    "update.required.desc": "يرجى تحديث الإضافة إلى الإصدار v{version} للاستمرار في استخدام Suhaib Abid.",
    "update.required.btn": "التواصل مع الدعم",
    "notif.markRead": "تحديد الكل كمقروء"
  };
  function replaceUiStaticText(value) {
    if (!value || typeof value !== "string") {
      return value;
    }
    var trimmed = value.trim();
    if (!trimmed) {
      return value;
    }
    var lang = currentLang();
    if (lang === "ar") {
      if (AR_STATIC_TEXT[trimmed] !== undefined) {
        return value.replace(trimmed, AR_STATIC_TEXT[trimmed]);
      }
      var nextAr = value;
      Object.keys(AR_STATIC_PARTS).sort(function (a, b) {
        return b.length - a.length;
      }).forEach(function (phrase) {
        if (phrase.length < 3 || nextAr.indexOf(phrase) === -1) {
          return;
        }
        nextAr = nextAr.split(phrase).join(AR_STATIC_PARTS[phrase]);
      });
      return nextAr;
    }
    if (EN_STATIC_TEXT[trimmed] !== undefined) {
      return value.replace(trimmed, EN_STATIC_TEXT[trimmed]);
    }
    var nextEn = value;
    Object.keys(EN_STATIC_PARTS).sort(function (a, b) {
      return b.length - a.length;
    }).forEach(function (phrase) {
      if (phrase.length < 3 || nextEn.indexOf(phrase) === -1) {
        return;
      }
      nextEn = nextEn.split(phrase).join(EN_STATIC_PARTS[phrase]);
    });
    if (nextEn !== value) {
      return nextEn;
    }
    return value;
  }
  function normalizeUiText(value) {
    return replaceUiStaticText(replaceBrandText(value));
  }
  function hasEarlyKnownText(value) {
    return typeof value === "string" && /(ORNOV|Ornov|Gringow|Lovable Hut BD|Developed\s+by|INFINITY-XXXX-XXXX-XXXX|wa\.me\/(?:8801618125458|923497641385)|Escudo Ativado|Aten(?:ç|\u00e7|Ã§)|Modo Plano|extens(?:ã|\u00e3|Ã£)o|Entendi|N(?:ã|\u00e3|Ã£)o mostrar|novamente|Lovable est(?:á|\u00e1|Ã¡) bloqueado|Digite seu comando|ATALHOS R(?:Á|\u00c1|Ã)PIDOS|Enviar|Remover Marca de|Ativar Escudo|Usar Chat Padr(?:ã|\u00e3|Ã£)o|Baixar C(?:ó|\u00f3|Ã³)digo Fonte)/i.test(value);
  }
  function sanitizeEarlyValue(value) {
    if (!hasEarlyKnownText(value)) {
      return value;
    }
    return normalizeUiText(value);
  }
  function removeUnsupportedLanguageButtons(root) {
    try {
      if (!root || root.nodeType !== 1) {
        return;
      }
      var nodes = [];
      if (root.matches && (root.matches(".ql-lang-btn") || root.hasAttribute("data-lang"))) {
        nodes.push(root);
      }
      if (root.querySelectorAll) {
        var found = root.querySelectorAll(".ql-lang-sw .ql-lang-btn,.ql-lang-sw [data-lang]");
        for (var i = 0; i < found.length && i < 30; i++) {
          nodes.push(found[i]);
        }
      }
      nodes.forEach(function (node) {
        var lang = String(node.getAttribute("data-lang") || "").toLowerCase();
        var label = String(node.textContent || "").trim().toUpperCase();
        if (lang === "pt" || lang === "es" || lang === "he" || label === "PT" || label === "ES" || label === "HE") {
          if (node.parentNode) {
            node.parentNode.removeChild(node);
          }
        }
      });
    } catch (err) {}
  }
  function sanitizeEarlyNode(node) {
    if (!node) {
      return node;
    }
    try {
      if (node.nodeType === 3) {
        var text = sanitizeEarlyValue(node.nodeValue);
        if (text !== node.nodeValue) {
          node.nodeValue = text;
        }
        return node;
      }
      if (node.nodeType !== 1) {
        return node;
      }
      removeUnsupportedLanguageButtons(node);
      var scanned = 0;
      var walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
      var textNode;
      while ((textNode = walker.nextNode()) && scanned < 600) {
        scanned++;
        var nextText = sanitizeEarlyValue(textNode.nodeValue);
        if (nextText !== textNode.nodeValue) {
          textNode.nodeValue = nextText;
        }
      }
      ["title", "alt", "aria-label", "placeholder", "value"].forEach(function (attr) {
        if (!node.hasAttribute || !node.hasAttribute(attr)) {
          return;
        }
        var oldValue = node.getAttribute(attr);
        var nextValue = sanitizeEarlyValue(oldValue);
        if (nextValue !== oldValue) {
          node.setAttribute(attr, nextValue);
        }
      });
      if (node.querySelectorAll) {
        var attrs = node.querySelectorAll("[title],[alt],[aria-label],[placeholder],[value]");
        for (var i = 0; i < attrs.length && i < 600; i++) {
          ["title", "alt", "aria-label", "placeholder", "value"].forEach(function (attr) {
            if (!attrs[i].hasAttribute(attr)) {
              return;
            }
            var oldValue = attrs[i].getAttribute(attr);
            var nextValue = sanitizeEarlyValue(oldValue);
            if (nextValue !== oldValue) {
              attrs[i].setAttribute(attr, nextValue);
            }
          });
        }
      }
    } catch (err) {}
    return node;
  }
  function installEarlyTextSanitizer() {
    try {
      if (window.__lastZoneEarlyTextSanitizer) {
        return;
      }
      window.__lastZoneEarlyTextSanitizer = true;
      var htmlDesc = Object.getOwnPropertyDescriptor(Element.prototype, "innerHTML");
      if (htmlDesc && htmlDesc.set && !htmlDesc.set.__lastZoneSanitized) {
        var htmlSet = htmlDesc.set;
        var htmlGet = htmlDesc.get;
        Object.defineProperty(Element.prototype, "innerHTML", {
          configurable: htmlDesc.configurable !== false,
          enumerable: !!htmlDesc.enumerable,
          get: htmlGet,
          set: function (value) {
            return htmlSet.call(this, sanitizeEarlyValue(value));
          }
        });
      }
      var textDesc = Object.getOwnPropertyDescriptor(Node.prototype, "textContent");
      if (textDesc && textDesc.set && !textDesc.set.__lastZoneSanitized) {
        var textSet = textDesc.set;
        var textGet = textDesc.get;
        Object.defineProperty(Node.prototype, "textContent", {
          configurable: textDesc.configurable !== false,
          enumerable: !!textDesc.enumerable,
          get: textGet,
          set: function (value) {
            return textSet.call(this, sanitizeEarlyValue(value));
          }
        });
      }
      var appendChild = Node.prototype.appendChild;
      if (appendChild && !appendChild.__lastZoneSanitized) {
        Node.prototype.appendChild = function (node) {
          return appendChild.call(this, sanitizeEarlyNode(node));
        };
        Node.prototype.appendChild.__lastZoneSanitized = true;
      }
      var insertBefore = Node.prototype.insertBefore;
      if (insertBefore && !insertBefore.__lastZoneSanitized) {
        Node.prototype.insertBefore = function (node, ref) {
          return insertBefore.call(this, sanitizeEarlyNode(node), ref);
        };
        Node.prototype.insertBefore.__lastZoneSanitized = true;
      }
      var setAttribute = Element.prototype.setAttribute;
      if (setAttribute && !setAttribute.__lastZoneSanitized) {
        Element.prototype.setAttribute = function (name, value) {
          var attr = String(name || "").toLowerCase();
          if (/^(title|alt|aria-label|placeholder|value)$/.test(attr)) {
            value = sanitizeEarlyValue(value);
          }
          return setAttribute.call(this, name, value);
        };
        Element.prototype.setAttribute.__lastZoneSanitized = true;
      }
    } catch (err) {}
  }
  installEarlyTextSanitizer();
  /* /LAST_ZONE_STATIC_AR_MAP */

  function replaceBrandText(value) {
    if (!value || typeof value !== "string") {
      return value;
    }
    var next = value;
    for (var i = 0; i < REPLACEMENTS.length; i++) {
      next = next.replace(REPLACEMENTS[i][0], REPLACEMENTS[i][1]);
    }
    next = next.replace(/(?:Developed\s+by\s*){2,}(?:Lovable\s+Hut\s+BD|LAST\s+ZONE)?/gi, FOOTER_TEXT);
    next = next.replace(/^(?:\s*Developed\s+by\s*){2,}$/gi, FOOTER_TEXT);
    next = next.replace(/Developed\s+by\s+LAST\s+ZONE/gi, FOOTER_TEXT);
    if (/Developed\s+by/i.test(next)) {
      next = FOOTER_TEXT;
    }
    if (/Developed\s+by/i.test(next)) {
      next = FOOTER_TEXT;
    }
    if (/Developed\s+by/i.test(next)) {
      next = FOOTER_TEXT;
    }
    if (/Developed\s+by/i.test(next)) {
      next = FOOTER_TEXT;
    }
    if (/Developed\s+by/i.test(next)) {
      next = FOOTER_TEXT;
    }
    if (/Developed\s+by/i.test(next)) {
      next = FOOTER_TEXT;
    }
    if (/Developed\s+by/i.test(next)) {
      next = FOOTER_TEXT;
    }
    if (/Developed\s+by/i.test(next)) {
      next = FOOTER_TEXT;
    }
    if (/Developed\s+by/i.test(next)) {
      next = FOOTER_TEXT;
    }
    if (/Developed\s+by/i.test(next)) {
      next = FOOTER_TEXT;
    }
    if (/Developed\s+by/i.test(next)) {
      next = FOOTER_TEXT;
    }
    if (/Developed\s+by/i.test(next)) {
      next = FOOTER_TEXT;
    }
    if (/Developed\s+by/i.test(next)) {
      next = FOOTER_TEXT;
    }
    if (/Developed\s+by/i.test(next)) {
      next = FOOTER_TEXT;
    }
    if (/Developed\s+by/i.test(next)) {
      next = FOOTER_TEXT;
    }
    if (/Developed\s+by/i.test(next)) {
      next = FOOTER_TEXT;
    }
    if (/Developed\s+by/i.test(next)) {
      next = FOOTER_TEXT;
    }
    if (/Developed\s+by/i.test(next)) {
      next = FOOTER_TEXT;
    }
    if (/Developed\s+by/i.test(next)) {
      next = FOOTER_TEXT;
    }
    if (/Developed\s+by/i.test(next)) {
      next = FOOTER_TEXT;
    }
    if (/Developed\s+by/i.test(next)) {
      next = FOOTER_TEXT;
    }
    if (/Developed\s+by/i.test(next)) {
      next = FOOTER_TEXT;
    }
    if (/Developed\s+by/i.test(next)) {
      next = FOOTER_TEXT;
    }
    if (/Developed\s+by/i.test(next)) {
      next = FOOTER_TEXT;
    }
    if (/Developed\s+by/i.test(next)) {
      next = FOOTER_TEXT;
    }
    next = next.replace(/Desenvolvido\s+por\s+LAST\s+ZONE/gi, FOOTER_TEXT);
    next = next.replace(/Desarrollado\s+por\s+LAST\s+ZONE/gi, FOOTER_TEXT);
    return next;
  }
  function isExtensionDocument() {
    return location.protocol === "chrome-extension:";
  }
  function getSavedLang() {
    try {
      return localStorage.getItem("last_zone_lang") || localStorage.getItem("ql_lang") || "";
    } catch (err) {
      return "";
    }
  }
  function currentLang() {
    var docLang = isExtensionDocument() && document.documentElement ? document.documentElement.lang : "";
    var lang = (window._ql_lang || getSavedLang() || docLang || "en").toLowerCase();
    if (ALLOWED_LANGS.indexOf(lang) === -1) {
      return "en";
    } else {
      return lang;
    }
  }
  function extensionScopes(seed) {
    var scopes = [];
    var selector = "#ql-panel,#ql-root,#ql-header,#ql-body,#ql-license-gate,.ql-license-gate,.ql-container,.ql-footer,.ql-modal,.ql-toast,.ql-alert,.ql-pay-modal,.ql-expired-modal,.ql-plan-mode-modal,.ql-notif-panel,.ql-notification-panel,.ql-shortcuts,.ql-history,.ql-login,.ql-popup,.sp-shell,.sp-root,.sp-panel,.sp-license-gate,#sp-body,.sp-header,.sp-footer,.sp-notif-panel";
    function add(node) {
      if (!node || node.nodeType !== 1 || scopes.indexOf(node) !== -1) {
        return;
      }
      scopes.push(node);
    }
    function collect(node) {
      if (!node || node.nodeType !== 1) {
        return;
      }
      try {
        if (node.matches && node.matches(selector)) {
          add(node);
        }
      } catch (err) {}
      try {
        var closest = node.closest && node.closest(selector);
        if (closest) {
          add(closest);
        }
      } catch (err) {}
      try {
        if (node.querySelectorAll) {
          node.querySelectorAll(selector).forEach(add);
        }
      } catch (err) {}
    }
    collect(seed || document.body || document.documentElement);
    if (!seed) {
      collect(document.documentElement);
      collect(document.body);
    }
    if (isExtensionDocument()) {
      add(document.documentElement);
      if (document.body) {
        add(document.body);
      }
    }
    return scopes;
  }
  function queryScoped(seed, selector, callback) {
    extensionScopes(seed).forEach(function (scope) {
      try {
        if (scope.matches && scope.matches(selector)) {
          callback(scope);
        }
      } catch (err) {}
      try {
        if (scope.querySelectorAll) {
          scope.querySelectorAll(selector).forEach(callback);
        }
      } catch (err) {}
    });
  }
  function mergeTranslations() {
    var table = null;
    try {
      table = typeof _I18N !== "undefined" ? _I18N : window._I18N;
    } catch (err) {
      table = window._I18N;
    }
    if (!table || typeof table !== "object") {
      return;
    }
    table.en = Object.assign({}, table.en || {}, OLD_I18N.en || {}, {
      "footer.brand": FOOTER_TEXT,
      "shield.overlay.text": CLEAN_AR_I18N["shield.overlay.text"]
    });
    table.ar = Object.assign({}, table.ar || {}, OLD_I18N.ar || {}, CLEAN_AR_I18N || {}, {
      "footer.brand": FOOTER_TEXT,
      "shield.overlay.text": CLEAN_AR_I18N["shield.overlay.text"]
    });
    window._I18N = table;
  }
  function syncLangMeta(lang) {
    lang = ALLOWED_LANGS.indexOf(lang) === -1 ? "en" : lang;
    window._ql_lang = lang;
    var dir = "ltr";
    try {
      localStorage.setItem("last_zone_lang", lang);
    } catch (err) {}
    extensionScopes().forEach(function (scope) {
      scope.setAttribute("lang", lang);
      scope.setAttribute("dir", dir);
      scope.classList.remove("lz-rtl");
      scope.classList.add("lz-ltr");
    });
    if (isExtensionDocument()) {
      document.documentElement.lang = lang;
      document.documentElement.dir = dir;
      if (document.body) {
        document.body.dir = dir;
      }
    }
  }
  function translateAgain() {
    try {
      if (typeof window._applyTranslations === "function") {
        window._applyTranslations();
      }
    } catch (err) {}
  }
  function setLastZoneLang(lang) {
    if (ALLOWED_LANGS.indexOf(lang) === -1) {
      lang = "en";
    }
    mergeTranslations();
    syncLangMeta(lang);
    try {
      if (isExtensionDocument() && typeof window.setLang === "function") {
        window.setLang(lang);
      } else {
        applyScopedTranslations();
      }
    } catch (err) {
      applyScopedTranslations();
    }
    setTimeout(applyBranding, 0);
    setTimeout(applyBranding, 80);
  }
  function languageButton(lang, active) {
    var label = lang === "ar" ? "AR" : "EN";
    return "<button class=\"ql-lang-btn" + (active ? " ql-lang-active" : "") + "\" data-lang=\"" + lang + "\">" + label + "</button>";
  }
  function rebuildLanguageSwitchers() {
    var lang = currentLang();
    document.querySelectorAll(".ql-lang-sw").forEach(function (switcher) {
      var expected = languageButton("en", lang === "en") + languageButton("ar", lang === "ar");
      if (switcher.innerHTML !== expected) {
        switcher.innerHTML = expected;
      }
    });
    document.querySelectorAll(".ql-lang-btn").forEach(function (button) {
      button.classList.toggle("ql-lang-active", button.getAttribute("data-lang") === lang);
    });
  }
  function applyScopedTranslations(root) {
    var table = null;
    try {
      table = typeof _I18N !== "undefined" ? _I18N : window._I18N;
    } catch (err) {
      table = window._I18N;
    }
    table = table && table[currentLang()];
    if (!table) {
      return;
    }
    queryScoped(root, "[data-i18n]", function (el) {
      var key = el.getAttribute("data-i18n");
      if (key && table[key] !== undefined) {
        el.textContent = normalizeUiText(String(table[key]));
      }
    });
    queryScoped(root, "[data-i18n-title]", function (el) {
      var key = el.getAttribute("data-i18n-title");
      if (key && table[key] !== undefined) {
        el.setAttribute("title", normalizeUiText(String(table[key])));
      }
    });
    queryScoped(root, "[data-i18n-placeholder]", function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (key && table[key] !== undefined) {
        el.setAttribute("placeholder", normalizeUiText(String(table[key])));
      }
    });
  }
  function isSupportLink(link) {
    if (!link) {
      return false;
    }
    var href = String(link.getAttribute("href") || link.href || "").toLowerCase();
    var text = String(link.textContent || link.getAttribute("title") || link.getAttribute("aria-label") || "").trim().toLowerCase();
    return href.indexOf("wa.me") !== -1 || href.indexOf("whatsapp") !== -1 || href.indexOf("8801618125458") !== -1 || href.indexOf("923497641385") !== -1 || href.indexOf("t.me/monir_i0_0i") !== -1 || href.indexOf("t.me/+Dm8IppPh39s4YWIx".toLowerCase()) !== -1 || link.classList.contains("ql-support-link") || link.getAttribute("data-i18n") === "footer.support" || text === "support" || text === CLEAN_AR_I18N["footer.support"].toLowerCase() || text.indexOf("contact support") !== -1 || text.indexOf(CLEAN_AR_I18N["update.required.btn"].toLowerCase()) !== -1;
  }
  function setSupportLink(link) {
    link.setAttribute("href", SUPPORT_URL);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  }
  function applySupportLinks(root) {
    queryScoped(root, "a", function (link) {
      if (isSupportLink(link)) {
        setSupportLink(link);
      }
    });
  }
  function applyLicensePlaceholders(root) {
    queryScoped(root, "#ql-license-input,#sp-license-input,input[name=\"license\"],input[name=\"license_key\"],input[data-license-input],.ql-license-gate input,.sp-license-gate input", function (input) {
      if (!input || input.type === "hidden") {
        return;
      }
      input.setAttribute("placeholder", LICENSE_PLACEHOLDER);
    });
  }
  function applyStaticBranding(root) {
    if (isExtensionDocument() && document.title) {
      document.title = replaceBrandText(document.title).replace(/.+ - Side Panel/, BRAND_NAME + " - Side Panel");
    }
    queryScoped(root, ".sp-brand-text, .ql-brand, #ql-header .ql-title > span:not(.ql-dot), #ql-header .ql-title-text, #ql-header .ql-brand-title", function (el) {
      el.textContent = BRAND_NAME;
    });
    queryScoped(root, ".sp-footer-badge", function (el) {
      var version = "3.8.2";
      try {
        version = chrome.runtime.getManifest().version || version;
      } catch (err) {}
      el.textContent = BRAND_NAME + " ? v" + version;
    });
    queryScoped(root, "[data-i18n=\"footer.brand\"], .ql-badge-mz, .ql-footer .ql-badge-mz", function (el) {
      el.textContent = FOOTER_TEXT;
    });
    queryScoped(root, "img", function (img) {
      var alt = img.getAttribute("alt") || "";
      var src = img.getAttribute("src") || "";
      if (img.classList.contains("sp-brand-logo") || img.classList.contains("ql-brand-logo") || /postimg|logo-master-lovable|Lovable\s+Hut/i.test(src + " " + alt)) {
        img.setAttribute("src", LOGO_URL);
        img.setAttribute("alt", BRAND_NAME);
      }
    });
    applySupportLinks(root);
    applyLicensePlaceholders(root);
  }
  function replaceTextNodes(root) {
    root = root || document.body;
    if (!root || !document.createTreeWalker) {
      return;
    }
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    var node;
    while (node = walker.nextNode()) {
      var next = normalizeUiText(node.nodeValue);
      if (next !== node.nodeValue) {
        node.nodeValue = next;
      }
    }
  }
  function replaceAttributes(root) {
    root = root || document;
    var attrs = ["title", "alt", "aria-label", "placeholder"];
    if (root.querySelectorAll) {
      root.querySelectorAll("*").forEach(function (el) {
        attrs.forEach(function (attr) {
          if (el.hasAttribute && el.hasAttribute(attr)) {
            var value = el.getAttribute(attr);
            var next = normalizeUiText(value);
            if (next !== value) {
              el.setAttribute(attr, next);
            }
          }
        });
      });
    }
  }
  function injectStyle() {
    if (document.getElementById("last-zone-branding-style")) {
      return;
    }
    var style = document.createElement("style");
    style.id = "last-zone-branding-style";
    style.textContent = ":root{--ql-bg:#09090b!important;--ql-bg-elevated:#110e1a!important;--ql-bg-surface:#161320!important;--ql-bg-hover:#211c30!important;--ql-border:rgba(139,92,246,.25)!important;--ql-border-hover:rgba(236,72,153,.45)!important;--ql-text-primary:#f4f4f5!important;--ql-text-secondary:#c084fc!important;--ql-text-muted:#8b8a9e!important;--ql-accent:#a855f7!important;--ql-accent-hover:#d946ef!important;--ql-accent-glow:rgba(168,85,247,.35)!important;--ql-accent-subtle:rgba(168,85,247,.15)!important;--ql-success:#10b981!important;--ql-success-bg:rgba(16,185,129,.1)!important;--ql-warning:#f59e0b!important;--ql-warning-bg:rgba(245,158,11,.1)!important;--ql-danger:#f43f5e!important;--ql-danger-bg:rgba(244,63,94,.1)!important;--ql-radius:16px!important;--ql-radius-sm:10px!important;--ql-radius-xs:8px!important;--ql-shadow:0 24px 80px -12px rgba(0,0,0,.7),0 0 0 1px var(--ql-border)!important;--ql-shadow-hover:0 32px 100px -12px rgba(0,0,0,.8),0 0 0 1px var(--ql-border-hover)!important;--ql-glass:rgba(9,9,11,.85)!important}.ql-badge-pro-header,.sp-badge,.sp-btn-primary,.sp-send-btn,.ql-confirm-pay-btn{background:linear-gradient(135deg,var(--ql-accent),var(--ql-accent-hover))!important}.sp-brand-logo,.ql-brand-logo{box-shadow:0 0 10px var(--ql-accent-glow)!important}.ql-lang-btn.ql-lang-active{background:linear-gradient(135deg,var(--ql-accent),var(--ql-accent-hover))!important;color:#fff!important}#ql-panel,.ql-license-gate,.ql-container,.sp-shell,.sp-panel{direction:ltr!important;text-align:left!important}[dir=\"ltr\"]#ql-panel,[dir=\"ltr\"].ql-license-gate,[dir=\"ltr\"].ql-container,[dir=\"ltr\"].sp-shell,[dir=\"ltr\"].sp-panel{direction:ltr!important;text-align:left!important}";
    (document.head || document.documentElement).appendChild(style);
  }
  function applyBranding(root) {
    mergeTranslations();
    syncLangMeta(currentLang());
    injectStyle();
    rebuildLanguageSwitchers();
    applyScopedTranslations(root);
    applyStaticBranding(root);
    extensionScopes(root).forEach(function (scope) {
      replaceTextNodes(scope);
      replaceAttributes(scope);
    });
  }
  document.addEventListener("click", function (event) {
    var button = event.target && event.target.closest ? event.target.closest(".ql-lang-btn") : null;
    if (!button) {
      return;
    }
    var lang = button.getAttribute("data-lang");
    if (ALLOWED_LANGS.indexOf(lang) === -1) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    setLastZoneLang(lang);
  }, true);
  function boot() {
    mergeTranslations();
    syncLangMeta(currentLang());
    applyBranding();
    setTimeout(applyBranding, 80);
    setTimeout(applyBranding, 400);
    setTimeout(applyBranding, 1200);
    try {
      new MutationObserver(function (mutations) {
        clearTimeout(window.__lastZoneBrandingTimer);
        window.__lastZoneBrandingTimer = setTimeout(function () {
          applyBranding();
          mutations.forEach(function (mutation) {
            if (mutation.addedNodes) {
              mutation.addedNodes.forEach(function (node) {
                if (node.nodeType === 1) {
                  applyBranding(node);
                }
              });
            }
          });
        }, 40);
      }).observe(document.documentElement, {
        childList: true,
        subtree: true
      });
    } catch (err) {}
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, {
      once: true
    });
  } else {
    boot();
  }
})();