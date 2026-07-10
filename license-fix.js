(function () {
  window.__LZ_INIT_DONE = false;
  async function initLicense() {
    try {
      if (typeof LZ !== "undefined" && LZ.load) {
        var existing = await LZ.load();
        if (existing && existing.valid) {
          window.__LZ_INIT_DONE = true;
          return;
        }
      }
    } catch(e) {}
    chrome.storage.local.set({ql_license_valid: false, lz_valid: false}, function() {
      chrome.storage.local.remove(["ql_license_valid","license_valid","ql_license_key","ql_session_id","ql_user_name","ql_expires_at","ql_activated_at","ql_license_status","ql_bypass_active","__ql_bypass_active","lz_valid","lz_key","lz_session","lz_user","lz_expires","lz_activated","lz_status","lz_plan","lz_online"], function() {
        window.__LZ_INIT_DONE = true;
      });
    });
    try { localStorage.removeItem("__ql_bypass_active"); } catch(e) {}
  }
  initLicense();
})();
;
(function () {
  'use strict';

  var BRAND_NAME = "Suhaib Abid";
  var FOOTER_TEXT = "Suhaib Abid";
  var SUPPORT_URL = "https://wa.me/923497641385";
  var BUY_URL = "https://wa.me/923497641385?text=I%20want%20to%20buy%20the%20unlimited%20plan%20of%20lovable%20extension";
  var LICENSE_PLACEHOLDER = "SA-XXXX-XXXX-XXXX";
  var ROOT_SELECTOR = "#ql-panel,#ql-root,#ql-header,#ql-body,#ql-license-gate,.ql-license-gate,.ql-container,.ql-footer,.ql-modal,.ql-toast,.ql-alert,.ql-pay-modal,.ql-expired-modal,.ql-plan-mode-modal,.ql-notif-panel,.ql-notification-panel,.ql-shortcuts,.ql-history,.ql-login,.ql-popup,.sp-shell,.sp-root,.sp-panel,.sp-license-gate,#sp-body,.sp-header,.sp-footer,.sp-notif-panel";
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
  var PROMPT_TEXTS = {
    en: {
      "prompt.bugs.text": "Analyze the code and identify all bugs, errors and failures. Fix each one explaining the problem and the solution applied.",
      "prompt.refactor.text": "Elaborate a complete refactoring and optimization plan for the system in steps.",
      "prompt.errors.text": "Implement robust error handling throughout the code, including try/catch, validations and friendly error messages for the user.",
      "prompt.optimize.text": "Analyze and optimize system performance, identifying bottlenecks, improving queries, reducing re-renders and applying best practices.",
      "prompt.comments.text": "Add clear comments and documentation throughout the code, explaining the logic, parameters and return values of each function.",
      "prompt.seo.text": "Create a complete SEO optimization plan for this site.",
      "prompt.ui.text": "Improve the user interface making it more modern, responsive and accessible, following UX/UI best practices.",
      "prompt.components.text": "Reorganize the code separating into reusable, well-structured components with single responsibilities.",
      "prompt.review.text": "Do a complete code review identifying quality, security, performance issues and suggesting improvements."
    },
    ar: {
      "prompt.bugs.text": "حلل الكود وحدد جميع الأخطاء والثغرات وقم بإصلاحها مع شرح المشكلة والحل.",
      "prompt.refactor.text": "ضع خطة كاملة لإعادة هيكلة وتحسين النظام بالخطوات.",
      "prompt.errors.text": "قم بإعداد معالجة قوية للأخطاء في الكود تشمل try/catch ورسائل تنبيهية واضحة.",
      "prompt.optimize.text": "حلل الكود وحسن الأداء لجعله أسرع وتجنب تكرار العمليات غير الضرورية.",
      "prompt.comments.text": "أضف تعليقات واضحة وتوثيقاً في جميع أنحاء الكود لشرح منطق كل دالة.",
      "prompt.seo.text": "ضع خطة تحسين SEO كاملة لهذا الموقع.",
      "prompt.ui.text": "حسن واجهة المستخدم لتصبح أكثر عصرية وتفاعلية وتوافقاً مع الهواتف.",
      "prompt.components.text": "أعد تنظيم الكود وفصله إلى مكونات قابلة لإعادة الاستخدام.",
      "prompt.review.text": "قم بمراجعة شاملة للكود للتحقق من الجودة والحماية والأداء واقتراح التحسينات."
    }
  };
  var SUPABASE_URL = "https://gqlybodjajbgejywstir.supabase.co";
  var SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxbHlib2RqYWpiZ2VqeXdzdGlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExOTY3ODIsImV4cCI6MjA5Njc3Mjc4Mn0.kcm3CxGlS9uQP6vZYMwwXEMyei9IECl0xmtuzsj0i0A";
  var NOTIF_SEEN_KEY = "last_zone_seen_notifications";
  var NOTIF_INIT_KEY = "last_zone_notifications_initialized";
  var notificationCache = [];
  var lastNotificationAnchor = null;
  var notificationToastShownIds = [];
  function isExtensionDocument() {
    return location.protocol === "chrome-extension:";
  }
  function currentLang() {
    var lang = "en";
    try {
      lang = window._ql_lang || localStorage.getItem("last_zone_lang") || localStorage.getItem("ql_lang") || (isExtensionDocument() && document.documentElement ? document.documentElement.lang : "") || "en";
    } catch (err) {
      lang = window._ql_lang || "en";
    }
    lang = String(lang || "en").toLowerCase();
    if (lang === "ar") {
      return "ar";
    } else {
      return "en";
    }
  }
  function mergeTranslations() {
    try {
      var table = typeof _I18N !== "undefined" ? _I18N : window._I18N;
      if (!table || typeof table !== "object") {
        return;
      }
      table.ar = Object.assign({}, table.ar || {}, CLEAN_AR_I18N, {
        "footer.brand": FOOTER_TEXT,
        "footer.support": CLEAN_AR_I18N["footer.support"],
        "shield.overlay.text": CLEAN_AR_I18N["shield.overlay.text"]
      });
      table.en = Object.assign({}, table.en || {}, {
        "footer.brand": FOOTER_TEXT,
        "footer.support": "Support",
        "shield.overlay.text": "Protected by Suhaib Abid"
      });
      window._I18N = table;
    } catch (err) {}
  }
  function addRoot(list, seen, node) {
    if (!node || node.nodeType !== 1 || seen.indexOf(node) !== -1) {
      return;
    }
    seen.push(node);
    list.push(node);
  }
  function roots(seed) {
    var list = [];
    var seen = [];
    function collect(node) {
      if (!node || node.nodeType !== 1) {
        return;
      }
      try {
        if (node.matches && node.matches(ROOT_SELECTOR)) {
          addRoot(list, seen, node);
        }
      } catch (err) {}
      try {
        var closest = node.closest && node.closest(ROOT_SELECTOR);
        if (closest) {
          addRoot(list, seen, closest);
        }
      } catch (err) {}
      try {
        if (node.querySelectorAll) {
          node.querySelectorAll(ROOT_SELECTOR).forEach(function (el) {
            addRoot(list, seen, el);
          });
        }
      } catch (err) {}
    }
    collect(seed || document.body || document.documentElement);
    if (!seed) {
      collect(document.documentElement);
      collect(document.body);
    }
    if (isExtensionDocument()) {
      addRoot(list, seen, document.documentElement);
      if (document.body) {
        addRoot(list, seen, document.body);
      }
    }
    return list;
  }
  function isInExtensionUi(el) {
    if (!el || el.nodeType !== 1) {
      return false;
    }
    if (isExtensionDocument()) {
      return true;
    }
    try {
      return !!el.closest && !!el.closest(ROOT_SELECTOR);
    } catch (err) {
      return false;
    }
  }
  function injectBrandLockStyle() {
    if (document.getElementById("last-zone-brand-lock-style")) {
      return;
    }
    try {
      var style = document.createElement("style");
      style.id = "last-zone-brand-lock-style";
      style.textContent = ["#ql-header .ql-title > span:not(.ql-dot):not(.ql-version),", "#ql-header .ql-title-text,", "#ql-header .ql-brand-title,", "#ql-panel .ql-brand,", ".sp-brand-text,", ".ql-badge-mz,", "[data-i18n=\"footer.brand\"]{font-size:0!important;line-height:1!important;color:transparent!important;}", "#ql-header .ql-title > span:not(.ql-dot):not(.ql-version)::after,", "#ql-header .ql-title-text::after,", "#ql-header .ql-brand-title::after,", "#ql-panel .ql-brand::after,", ".sp-brand-text::after,", ".ql-badge-mz::after,", "[data-i18n=\"footer.brand\"]::after{content:\"Suhaib Abid\"!important;font-size:12px!important;line-height:1.35!important;color:var(--ql-text,#fff)!important;white-space:nowrap!important;}", ".ql-badge-mz::after,[data-i18n=\"footer.brand\"]::after{font-size:11px!important;color:rgba(255,255,255,.82)!important;}", "#ql-panel,#ql-root,#ql-header,#ql-body,.ql-license-gate,.ql-container,.ql-footer,.ql-modal,.ql-toast,.ql-alert,.ql-pay-modal,.ql-expired-modal,.ql-plan-mode-modal,.ql-notif-panel,.ql-notification-panel,.ql-shortcuts,.ql-history,.ql-login,.ql-popup,.sp-shell,.sp-root,.sp-panel,.sp-license-gate,#sp-body,.sp-header,.sp-footer,.sp-notif-panel{direction:ltr!important;text-align:left!important;}", "[data-i18n-title=\"header.sidepanel\"],[data-i18n-title=\"header.theme\"],[data-i18n=\"header.sidepanel\"],[data-i18n=\"header.theme\"],#ql-open-sidepanel,#ql-theme-toggle,.ql-theme-btn,.ql-sidepanel-btn,.sp-theme-btn,.sp-sidepanel-btn{display:none!important;}", "#last-zone-notification-toast{position:fixed;right:18px;bottom:18px;z-index:2147483647;max-width:340px;background:#161320;color:#fff;border:1px solid rgba(168,85,247,.45);border-radius:12px;box-shadow:0 18px 60px rgba(0,0,0,.45);padding:12px 14px;font:13px/1.45 Inter,system-ui,sans-serif;cursor:pointer;}", "#last-zone-notification-toast strong{display:block;margin-bottom:4px;color:#f4f4f5;}", "#last-zone-notification-panel{position:absolute;right:auto;top:auto;z-index:2147483647;width:330px;max-height:420px;overflow:auto;background:#161320;color:#fff;border:1px solid rgba(168,85,247,.45);border-radius:12px;box-shadow:0 18px 60px rgba(0,0,0,.45);padding:12px;font:13px/1.45 Inter,system-ui,sans-serif;}", ".last-zone-notif-item{border-bottom:1px solid rgba(255,255,255,.08);padding:9px 0;}", ".last-zone-notif-item:last-child{border-bottom:0;}", ".last-zone-notif-badge{position:absolute;min-width:16px;height:16px;border-radius:999px;background:#ef4444;color:#fff;font-size:10px;line-height:16px;text-align:center;margin-top:-8px;margin-left:-6px;padding:0 4px;pointer-events:none;}", ".last-zone-forced-license-gate{display:flex!important;align-items:center!important;justify-content:center!important;min-height:100%!important;padding:22px!important;background:radial-gradient(circle at top,rgba(168,85,247,.16),transparent 38%),linear-gradient(135deg,#100b1c,#090611)!important;}", ".last-zone-forced-license-gate .ql-license-card{width:min(360px,100%)!important;background:rgba(18,14,30,.96)!important;border:1px solid rgba(168,85,247,.32)!important;border-radius:18px!important;box-shadow:0 22px 70px rgba(0,0,0,.5),0 0 32px rgba(168,85,247,.12)!important;padding:28px 22px!important;text-align:center!important;}", ".last-zone-forced-license-gate .ql-license-logo{width:58px!important;height:58px!important;border-radius:16px!important;box-shadow:0 0 22px rgba(217,70,239,.35)!important;margin-bottom:14px!important;}", ".last-zone-forced-license-gate .ql-license-log{margin-top:12px!important;border-radius:10px!important;background:rgba(244,63,94,.08)!important;border:1px solid rgba(244,63,94,.18)!important;color:#fca5a5!important;padding:9px 10px!important;font-size:12px!important;}", ".last-zone-buy-key-link{display:block!important;width:max-content!important;max-width:100%!important;margin:10px auto 0!important;color:rgba(216,180,254,.68)!important;font-size:12px!important;font-weight:600!important;text-decoration:none!important;}", ".last-zone-buy-key-link:hover{color:#e9d5ff!important;text-decoration:underline!important;}"].join("\n");
      (document.head || document.documentElement).appendChild(style);
    } catch (err) {}
  }
  function eachScoped(seed, selector, callback) {
    roots(seed).forEach(function (root) {
      try {
        if (root.matches && root.matches(selector)) {
          callback(root);
        }
      } catch (err) {}
      try {
        if (root.querySelectorAll) {
          root.querySelectorAll(selector).forEach(callback);
        }
      } catch (err) {}
    });
  }
  function replaceBrandText(value) {
    if (!value || typeof value !== "string") {
      return value;
    }
    var next = value;
    next = next.replace(/Developed\s+by\s+Lovable\s+Hut\s+BD\s+Extension/gi, FOOTER_TEXT);
    next = next.replace(/Developed\s+by\s+Lovable\s+Hut\s+BD\s+Store/gi, FOOTER_TEXT);
    next = next.replace(/Developed\s+by\s+Lovable\s+Hut\s+BD/gi, FOOTER_TEXT);
    next = next.replace(/Developed\s+by\s+LAST\s+ZONE/gi, FOOTER_TEXT);
    next = next.replace(/(?:Developed\s+by\s*){2,}(?:Lovable\s+Hut\s+BD|LAST\s+ZONE)?/gi, FOOTER_TEXT);
    if (/Developed\s+by/i.test(next)) {
      next = FOOTER_TEXT;
    }
    next = next.replace(/\b(?:ORNOV|Ornov|Gringow)\s+Extension\b/gi, BRAND_NAME);
    next = next.replace(/\b(?:ORNOV|Ornov|Gringow)\b/gi, BRAND_NAME);
    next = next.replace(/Lovable\s+Hut\s+BD\s+Extension/gi, BRAND_NAME);
    next = next.replace(/Lovable\s+Hut\s+BD/gi, BRAND_NAME);
    next = next.replace(/LAST\s+ZONE\s+Extension/gi, BRAND_NAME);
    next = next.replace(/INFINITY-XXXX-XXXX-XXXX/g, LICENSE_PLACEHOLDER);
    next = next.replace(/Checking\s+license\s+on\s+LAST\s+ZONE\s+server\.\.\./gi, "Checking license...").replace(/Checking\s+license\s+on\s+LAST\s+ZONE\.\.\./gi, "Checking license...");
    return next;
  }
  function replaceUiStaticText(value) {
    if (!value || typeof value !== "string") {
      return value;
    }
    var trimmed = value.trim();
    if (!trimmed) {
      return value;
    }
    if (currentLang() === "ar") {
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
  function hasKnownGlobalText(value) {
    return typeof value === "string" && /(ORNOV|Ornov|Gringow|Escudo Ativado|Aten(?:ç|\u00e7|Ã§)|Modo Plano|extens(?:ã|\u00e3|Ã£)o|Entendi|N(?:ã|\u00e3|Ã£)o mostrar|novamente|Lovable est(?:á|\u00e1|Ã¡) bloqueado)/i.test(value);
  }
  function shouldSkipGlobalNode(node) {
    var parent = node && node.parentElement;
    if (!parent) {
      return true;
    }
    var tag = parent.tagName;
    return /^(SCRIPT|STYLE|TEXTAREA|INPUT|CODE|PRE)$/i.test(tag) || parent.isContentEditable;
  }
  function fixGlobalKnownText(seed) {
    var root = seed && seed.nodeType ? seed : document.body;
    if (!root) {
      return;
    }
    if (root.nodeType === 3) {
      if (!shouldSkipGlobalNode(root) && hasKnownGlobalText(root.nodeValue)) {
        var nextText = normalizeUiText(root.nodeValue);
        if (nextText !== root.nodeValue) {
          root.nodeValue = nextText;
        }
      }
      return;
    }
    if (root.nodeType !== 1 && root !== document) {
      return;
    }
    var scanned = 0;
    try {
      var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      var node;
      while ((node = walker.nextNode()) && scanned < 3000) {
        scanned++;
        if (shouldSkipGlobalNode(node) || !hasKnownGlobalText(node.nodeValue)) {
          continue;
        }
        var next = normalizeUiText(node.nodeValue);
        if (next !== node.nodeValue) {
          node.nodeValue = next;
        }
      }
    } catch (err) {}
    try {
      var attrs = ["title", "alt", "aria-label"];
      var nodes = [];
      if (root.matches) {
        nodes.push(root);
      }
      if (root.querySelectorAll) {
        root.querySelectorAll("*").forEach(function (el) {
          if (nodes.length < 1500) {
            nodes.push(el);
          }
        });
      }
      nodes.forEach(function (el) {
        attrs.forEach(function (attr) {
          if (!el.hasAttribute || !el.hasAttribute(attr)) {
            return;
          }
          var value = el.getAttribute(attr);
          if (!hasKnownGlobalText(value)) {
            return;
          }
          var nextAttr = normalizeUiText(value);
          if (nextAttr !== value) {
            el.setAttribute(attr, nextAttr);
          }
        });
      });
    } catch (err) {}
  }
  function promptTargetText(key) {
    var lang = currentLang();
    return PROMPT_TEXTS[lang] && PROMPT_TEXTS[lang][key] || PROMPT_TEXTS.en && PROMPT_TEXTS.en[key] || "";
  }
  function translatePromptValue(value) {
    if (!value || typeof value !== "string") {
      return value;
    }
    var trimmed = value.trim();
    if (!trimmed) {
      return value;
    }
    var groups = ["en", "ar"];
    var keys = Object.keys(PROMPT_TEXTS.en || {});
    for (var i = 0; i < keys.length; i++) {
      for (var j = 0; j < groups.length; j++) {
        var candidate = PROMPT_TEXTS[groups[j]] && PROMPT_TEXTS[groups[j]][keys[i]];
        if (candidate && trimmed === String(candidate).trim()) {
          return value.replace(trimmed, promptTargetText(keys[i]));
        }
      }
    }
    return value;
  }
  function fixPromptInputs(seed) {
    eachScoped(seed, "textarea,input[type=\"text\"],input:not([type]),[contenteditable=\"true\"]", function (el) {
      if (!isInExtensionUi(el)) {
        return;
      }
      if (el.matches && el.matches("#ql-license-input,#sp-license-input,input[name=\"license\"],input[name=\"license_key\"],input[data-license-input]")) {
        return;
      }
      if (el.isContentEditable) {
        var text = el.textContent || "";
        var nextText = translatePromptValue(text);
        if (nextText !== text) {
          el.textContent = nextText;
        }
        return;
      }
      var value = el.value || "";
      var next = translatePromptValue(value);
      if (next !== value) {
        el.value = next;
        try {
          el.dispatchEvent(new Event("input", {
            bubbles: true
          }));
        } catch (err) {}
      }
    });
  }
  function skipTextNode(node) {
    var parent = node && node.parentElement;
    if (!parent) {
      return true;
    }
    var tag = parent.tagName;
    if (/^(SCRIPT|STYLE|TEXTAREA|INPUT|CODE|PRE)$/i.test(tag)) {
      return true;
    }
    return parent.isContentEditable || !isInExtensionUi(parent);
  }
  function replaceTextNodes(root) {
    if (!root || !document.createTreeWalker) {
      return;
    }
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    var node;
    while (node = walker.nextNode()) {
      if (skipTextNode(node)) {
        continue;
      }
      var next = normalizeUiText(node.nodeValue);
      if (next !== node.nodeValue) {
        node.nodeValue = next;
      }
    }
  }
  function replaceAttributes(root) {
    if (!root || !root.querySelectorAll) {
      return;
    }
    var attrs = ["title", "alt", "aria-label", "placeholder"];
    var nodes = [];
    try {
      if (root.matches && root.matches("*")) {
        nodes.push(root);
      }
    } catch (err) {}
    try {
      root.querySelectorAll("*").forEach(function (el) {
        nodes.push(el);
      });
    } catch (err) {}
    nodes.forEach(function (el) {
      if (!isInExtensionUi(el)) {
        return;
      }
      attrs.forEach(function (attr) {
        if (!el.hasAttribute || !el.hasAttribute(attr)) {
          return;
        }
        var value = el.getAttribute(attr);
        var next = normalizeUiText(value);
        if (next !== value) {
          el.setAttribute(attr, next);
        }
      });
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
    if (!link) {
      return;
    }
    link.setAttribute("href", SUPPORT_URL);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  }
  function fixSupport(seed) {
    eachScoped(seed, "a", function (link) {
      if (isSupportLink(link)) {
        setSupportLink(link);
      }
    });
  }
  function fixLangScope(seed) {
    var lang = currentLang();
    window._ql_lang = lang;
    roots(seed).forEach(function (root) {
      try {
        root.setAttribute("lang", lang);
        root.setAttribute("dir", "ltr");
        root.classList.remove("lz-rtl");
        root.classList.add("lz-ltr");
      } catch (err) {}
    });
    if (isExtensionDocument()) {
      document.documentElement.lang = lang;
      document.documentElement.dir = "ltr";
      if (document.body) {
        document.body.dir = "ltr";
      }
    }
  }
  function hideHeaderControls(seed) {
    eachScoped(seed, "[data-i18n-title=\"header.sidepanel\"],[data-i18n-title=\"header.theme\"],[data-i18n=\"header.sidepanel\"],[data-i18n=\"header.theme\"],#ql-open-sidepanel,#ql-theme-toggle,.ql-theme-btn,.ql-sidepanel-btn,.sp-theme-btn,.sp-sidepanel-btn", function (el) {
      el.style.display = "none";
      el.setAttribute("aria-hidden", "true");
      if (el.tagName === "BUTTON") {
        el.tabIndex = -1;
      }
    });
  }
  function ensureBuyKeyLink(seed) {
    eachScoped(seed, "#ql-license-gate,#sp-license-gate,.ql-license-gate,.sp-license-gate,.last-zone-forced-license-gate", function (gate) {
      if (!gate || gate.querySelector(".last-zone-buy-key-link")) {
        return;
      }
      var button = gate.querySelector("[data-license-validate],#ql-validate-btn,#sp-validate-btn,#ql-validate-license,#sp-validate-license,button[data-i18n=\"license.validate\"],button");
      if (!button || !button.parentNode) {
        return;
      }
      var link = document.createElement("a");
      link.className = "last-zone-buy-key-link";
      link.href = BUY_URL;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "Buy a license key";
      button.parentNode.insertBefore(link, button.nextSibling);
    });
  }
  function fixStatic(seed) {
    eachScoped(seed, "[data-i18n=\"footer.brand\"],.ql-badge-mz,.ql-footer .ql-badge-mz", function (el) {
      if (el.textContent !== FOOTER_TEXT) {
        el.textContent = FOOTER_TEXT;
      }
    });
    eachScoped(seed, ".sp-brand-text,.ql-brand,#ql-header .ql-title > span:not(.ql-dot),#ql-header .ql-title-text,#ql-header .ql-brand-title", function (el) {
      if (el.textContent !== BRAND_NAME) {
        el.textContent = BRAND_NAME;
      }
    });
    eachScoped(seed, "#ql-license-input,#sp-license-input,input[name=\"license\"],input[name=\"license_key\"],input[data-license-input],.ql-license-gate input,.sp-license-gate input", function (input) {
      if (input && input.type !== "hidden") {
        input.setAttribute("placeholder", LICENSE_PLACEHOLDER);
      }
    });
    roots(seed).forEach(function (root) {
      replaceTextNodes(root);
      replaceAttributes(root);
    });
    ensureBuyKeyLink(seed);
    fixPromptInputs(seed);
  }
  function apply(seed) {
    injectBrandLockStyle();
    mergeTranslations();
    fixLangScope(seed);
    fixSupport(seed);
    hideHeaderControls(seed);
    fixStatic(seed);
    fixGlobalKnownText(seed);
    positionNotificationPanel(lastNotificationAnchor);
  }
  function isActiveNotification(item) {
    if (!item || !item.created_at) {
      return true;
    }
    var duration = Number(item.duration_minutes || 10);
    if (!Number.isFinite(duration) || duration <= 0) {
      duration = 10;
    }
    return new Date(item.created_at).getTime() + duration * 60000 > Date.now();
  }
  function getSeenIds(done) {
    try {
      chrome.storage.local.get([NOTIF_SEEN_KEY, NOTIF_INIT_KEY], function (items) {
        var seen = Array.isArray(items[NOTIF_SEEN_KEY]) ? items[NOTIF_SEEN_KEY] : [];
        done(seen, items[NOTIF_INIT_KEY] === true);
      });
      return;
    } catch (err) {}
    done([], false);
  }
  function setSeenIds(ids, initialized) {
    try {
      var unique = Array.from(new Set(ids)).slice(0, 80);
      chrome.storage.local.set({[NOTIF_SEEN_KEY]: unique, [NOTIF_INIT_KEY]: initialized !== false}, function () {});
    } catch (err) {}
  }
  function notificationButtons() {
    var selector = "[data-i18n-title=\"header.notifications\"],[data-i18n=\"header.notifications\"],#ql-notif-btn,.ql-notif-btn,.sp-notif-btn,.ql-notification-btn,.sp-notification-btn,[title=\"Notifications\"],[aria-label=\"Notifications\"]";
    var buttons = [];
    roots().forEach(function (root) {
      try {
        if (root.matches && root.matches(selector)) {
          buttons.push(root);
        }
      } catch (err) {}
      try {
        if (root.querySelectorAll) {
          root.querySelectorAll(selector).forEach(function (el) {
            buttons.push(el);
          });
        }
      } catch (err) {}
    });
    return buttons.filter(function (el, i) {
      return buttons.indexOf(el) === i;
    });
  }
  function updateNotificationBadge(count) {
    notificationButtons().forEach(function (button) {
      var badge = button.querySelector ? button.querySelector(".last-zone-notif-badge") : null;
      if (!count) {
        if (badge) {
          badge.remove();
        }
        return;
      }
      if (!badge) {
        badge = document.createElement("span");
        badge.className = "last-zone-notif-badge";
        try {
          button.style.position = button.style.position || "relative";
        } catch (err) {}
        button.appendChild(badge);
      }
      badge.textContent = String(count > 9 ? "9+" : count);
    });
  }
  function escapeHtml(value) {
    return String(value || "").replace(/[&<>"']/g, function (ch) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&#39;"
      }[ch];
    });
  }
  function notificationPanelRoot(anchor) {
    var root = null;
    try {
      root = anchor && anchor.closest && anchor.closest("#ql-panel,#ql-root,.ql-container,.sp-shell,.sp-root,.sp-panel");
    } catch (err) {}
    if (!root) {
      root = roots()[0] || document.body;
    }
    if (!root) {
      root = document.body || document.documentElement;
    }
    try {
      if (root && root !== document.body && getComputedStyle(root).position === "static") {
        root.style.position = "relative";
      }
    } catch (err) {}
    return root;
  }
  function positionNotificationPanel(anchor) {
    var panel = document.getElementById("last-zone-notification-panel");
    if (!panel) {
      return;
    }
    var root = panel.parentElement || notificationPanelRoot(anchor);
    if (!anchor || !root || root === document.body || root === document.documentElement || !anchor.getBoundingClientRect) {
      panel.style.right = "12px";
      panel.style.left = "auto";
      panel.style.top = "56px";
      return;
    }
    try {
      var rootRect = root.getBoundingClientRect();
      var anchorRect = anchor.getBoundingClientRect();
      var width = Math.min(330, Math.max(260, rootRect.width - 24));
      var left = anchorRect.right - rootRect.left - width;
      left = Math.max(12, Math.min(left, rootRect.width - width - 12));
      panel.style.width = width + "px";
      panel.style.left = left + "px";
      panel.style.right = "auto";
      panel.style.top = Math.max(48, anchorRect.bottom - rootRect.top + 8) + "px";
    } catch (err) {}
  }
  function renderNotificationPanel(anchor) {
    if (anchor) {
      lastNotificationAnchor = anchor;
    }
    var panel = document.getElementById("last-zone-notification-panel");
    var parent = notificationPanelRoot(lastNotificationAnchor);
    if (!panel) {
      panel = document.createElement("div");
      panel.id = "last-zone-notification-panel";
    }
    if (parent && panel.parentElement !== parent) {
      parent.appendChild(panel);
    }
    var title = currentLang() === "ar" ? "الإشعارات" : "Notifications";
    var empty = currentLang() === "ar" ? "لا توجد إشعارات." : "No notifications.";
    var openLink = currentLang() === "ar" ? "فتح الرابط" : "Open link";
    var items = notificationCache.filter(isActiveNotification);
    panel.innerHTML = "<strong style=\"display:block;margin-bottom:8px;color:#c084fc\">" + title + "</strong>" + (items.length ? items.map(function (n) {
      var link = n.link ? "<a href=\"" + escapeHtml(n.link) + "\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color:#c084fc;text-decoration:none\">" + openLink + "</a>" : "";
      return "<div class=\"last-zone-notif-item\"><strong>" + escapeHtml(n.title) + "</strong><div>" + escapeHtml(n.message) + "</div>" + link + "</div>";
    }).join("") : "<div style=\"color:#9ca3af\">" + empty + "</div>");
    positionNotificationPanel(lastNotificationAnchor);
  }
  function toggleNotificationPanel(anchor) {
    var panel = document.getElementById("last-zone-notification-panel");
    if (panel) {
      panel.remove();
      return;
    }
    var toast = document.getElementById("last-zone-notification-toast");
    if (toast) {
      toast.remove();
    }
    renderNotificationPanel(anchor);
    setSeenIds(notificationCache.map(function (n) {
      return n.id;
    }), true);
    updateNotificationBadge(0);
  }
  function showNotificationToast(item) {
    if (!item || document.getElementById("last-zone-notification-toast")) {
      return;
    }
    if (notificationToastShownIds.indexOf(item.id) !== -1) {
      return;
    }
    notificationToastShownIds.push(item.id);
    notificationToastShownIds = notificationToastShownIds.slice(-40);
    var toast = document.createElement("div");
    toast.id = "last-zone-notification-toast";
    toast.innerHTML = "<strong>" + escapeHtml(item.title) + "</strong><div>" + escapeHtml(item.message) + "</div>";
    toast.addEventListener("click", function () {
      if (item.link) {
        window.open(item.link, "_blank", "noopener,noreferrer");
      }
      toast.remove();
    });
    document.body.appendChild(toast);
  }
  async function fetchNotifications() {
    if (typeof fetch !== "function") {
      return [];
    }
    var url = SUPABASE_URL + "/rest/v1/notifications?select=id,title,message,link,duration_minutes,created_at&order=created_at.desc&limit=8";
    var response = await fetch(url, {
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: "Bearer " + SUPABASE_ANON_KEY
      }
    });
    if (!response.ok) {
      return [];
    }
    var rows = await response.json();
    if (Array.isArray(rows)) {
      return rows;
    } else {
      return [];
    }
  }
  async function pollNotifications() {
    try {
      var rows = (await fetchNotifications()).filter(isActiveNotification);
      notificationCache = rows;
      getSeenIds(function (seen, initialized) {
        var ids = rows.map(function (n) {
          return n.id;
        });
        if (!initialized) {
          seen = [];
          setSeenIds(seen, true);
        }
        var unseen = rows.filter(function (n) {
          return seen.indexOf(n.id) === -1;
        });
        updateNotificationBadge(unseen.length);
        if (unseen.length) {
          var nextToast = unseen.filter(function (n) {
            return notificationToastShownIds.indexOf(n.id) === -1;
          })[0];
          if (nextToast) {
            showNotificationToast(nextToast);
          }
        }
        if (document.getElementById("last-zone-notification-panel")) {
          renderNotificationPanel(lastNotificationAnchor);
        }
      });
    } catch (err) {}
  }
  function schedule(seed) {
    clearTimeout(window.__lastZoneFinalUiTimer);
    window.__lastZoneFinalUiTimer = setTimeout(function () {
      apply(seed);
    }, 120);
  }
  document.addEventListener("click", function (event) {
    var supportLink = event.target && event.target.closest ? event.target.closest("a") : null;
    if (supportLink && isInExtensionUi(supportLink) && isSupportLink(supportLink)) {
      setSupportLink(supportLink);
      event.preventDefault();
      event.stopImmediatePropagation();
      try {
        window.open(SUPPORT_URL, "_blank", "noopener,noreferrer");
      } catch (err) {
        location.href = SUPPORT_URL;
      }
      return;
    }
    var notifButton = event.target && event.target.closest ? event.target.closest("[data-i18n-title=\"header.notifications\"],[data-i18n=\"header.notifications\"],#ql-notif-btn,.ql-notif-btn,.sp-notif-btn,.ql-notification-btn,.sp-notification-btn,[title=\"Notifications\"],[aria-label=\"Notifications\"]") : null;
    if (notifButton && isInExtensionUi(notifButton)) {
      event.preventDefault();
      event.stopImmediatePropagation();
      toggleNotificationPanel(notifButton);
      return;
    }
    var langButton = event.target && event.target.closest ? event.target.closest(".ql-lang-btn") : null;
    if (langButton) {
      setTimeout(function () {
        apply();
      }, 0);
    }
    if (event.target && isInExtensionUi(event.target)) {
      setTimeout(function () {
        fixPromptInputs();
        positionNotificationPanel(lastNotificationAnchor);
      }, 80);
      setTimeout(function () {
        fixPromptInputs();
        positionNotificationPanel(lastNotificationAnchor);
      }, 220);
    }
  }, true);
  document.addEventListener("input", function (event) {
    if (event.target && isInExtensionUi(event.target)) {
      setTimeout(function () {
        fixPromptInputs(event.target);
      }, 0);
    }
  }, true);
  window.addEventListener("resize", function () {
    positionNotificationPanel(lastNotificationAnchor);
  });
  window.addEventListener("scroll", function () {
    positionNotificationPanel(lastNotificationAnchor);
  }, true);
  [0, 80, 250, 700, 1500, 3000, 6000, 10000].forEach(function (delay) {
    setTimeout(function () {
      apply();
    }, delay);
  });
  try {
    new MutationObserver(function (mutations) {
      var seed = null;
      for (var i = 0; i < mutations.length; i++) {
        if (mutations[i].target && mutations[i].target.id === "last-zone-brand-lock-style") {
          continue;
        }
        seed = mutations[i].target || seed;
        if (mutations[i].addedNodes && mutations[i].addedNodes.length) {
          seed = mutations[i].addedNodes[0];
          break;
        }
      }
      if (seed) {
        schedule(seed);
      }
    }).observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ["href", "title", "aria-label", "placeholder", "style", "class"]
    });
  } catch (err) {}
  setInterval(function () {
    apply();
  }, 1200);
  setTimeout(pollNotifications, 1200);
  setInterval(pollNotifications, 3000);
  window.__lastZoneFinalUiFix = apply;
})();
;
(function () {
  'use strict';

  var BRAND_NAME = "Suhaib Abid";
  var FOOTER_TEXT = "Suhaib Abid";
  var LOGO_SRC = "assets/logo-master-lovable-square.png";
  var LICENSE_PLACEHOLDER = "SA-XXXX-XXXX-XXXX";
  var DEFAULT_REASON = "Please enter your license key again.";
  var STORAGE_REMOVE_KEYS = ["ql_license_key", "license_key", "ql_license_id", "ql_license_plan", "ql_user_name", "ql_user_email", "ql_expires_at", "ql_activated_at", "ql_synced_sessions", "ql_session_id", "ql_native_chat", "ql_bypass_active", "__ql_bypass_active", "ql_auth_token", "auth_token", "session_id"];
  function currentLang() {
    var lang = "en";
    try {
      lang = window._ql_lang || localStorage.getItem("last_zone_lang") || localStorage.getItem("ql_lang") || document.documentElement.lang || "en";
    } catch (err) {
      lang = window._ql_lang || "en";
    }
    if (String(lang || "en").toLowerCase() === "ar") {
      return "ar";
    } else {
      return "en";
    }
  }
  function text(en, ar) {
    if (currentLang() === "ar") {
      return ar;
    } else {
      return en;
    }
  }
  function chromeRemove(keys, done) {
    try {
      if (chrome && chrome.storage && chrome.storage.local) {
        return chrome.storage.local.remove(keys, done || function () {});
      }
    } catch (err) {}
    if (done) {
      done();
    }
  }
  function chromeSet(values, done) {
    try {
      if (chrome && chrome.storage && chrome.storage.local) {
        return chrome.storage.local.set(values, done || function () {});
      }
    } catch (err) {}
    if (done) {
      done();
    }
  }
  function clearLocalLicense() {
    // Stubbed to prevent license clearance
  }
  function findBodyTarget() {
    var target = document.querySelector("#sp-body") || document.querySelector("#ql-body") || document.querySelector(".sp-body") || document.querySelector(".ql-body") || document.querySelector("#ql-panel") || document.querySelector(".sp-shell");
    if (target) {
      return target;
    }
    if (location.protocol === "chrome-extension:") {
      return document.body;
    }
    try {
      var panel = document.createElement("div");
      panel.id = "ql-panel";
      panel.className = "ql-panel ql-container";
      document.body.appendChild(panel);
      return panel;
    } catch (err) {}
    return null;
  }
  function statusText(reason) {
    return reason || (currentLang() === "ar" ? "يرجى إدخال مفتاح الترخيص مرة أخرى." : DEFAULT_REASON);
  }
  function gateHtml(prefix, reason) {
    var title = text("Activate License", "تفعيل الترخيص");
    var desc = text("Enter your license key to unlock.", "أدخل مفتاح الترخيص لفتح الإضافة.");
    var button = text("Validate License", "التحقق من المفتاح");
    var buy = "Buy a license key";
    return "<div class=\"" + prefix + "-license-gate last-zone-forced-license-gate\" id=\"" + prefix + "-license-gate\" dir=\"ltr\"><div class=\"ql-license-card\"><img class=\"ql-license-logo\" src=\"" + LOGO_SRC + "\" alt=\"" + BRAND_NAME + "\"><h2 data-i18n=\"license.title\">" + title + "</h2><p data-i18n=\"license.desc\">" + desc + "</p><input id=\"" + prefix + "-license-input\" name=\"license_key\" data-license-input autocomplete=\"off\" placeholder=\"" + LICENSE_PLACEHOLDER + "\"><button id=\"" + prefix + "-validate-btn\" data-license-validate data-i18n=\"license.validate\">"         + button + "</button><a class=\"last-zone-buy-key-link\" href=\"" + BUY_URL + "\" target=\"_blank\" rel=\"noopener noreferrer\">" + buy + "</a><div id=\"" + prefix + "-license-log\" class=\"" + prefix + "-license-log ql-license-log ql-license-log-error\">" + statusText(reason) + "</div><div class=\"ql-badge-mz\" data-i18n=\"footer.brand\">" + FOOTER_TEXT + "</div></div></div>";
  }
  function renderForcedGate(reason) {
    // Stubbed to prevent license gate rendering
  }
  function forceLicenseGate(reason) {
    // Stubbed to prevent forcing license gate
  }
  function isLogoutTarget(target) {
    var control = target && target.closest ? target.closest(".sp-logout-btn,#ql-logout,[data-i18n=\"header.logout\"],[data-i18n-title=\"header.logout\"],button,a") : null;
    if (!control) {
      return false;
    }
    if (control.matches && control.matches(".sp-logout-btn,#ql-logout,[data-i18n=\"header.logout\"],[data-i18n-title=\"header.logout\"]")) {
      return true;
    }
    var label = String(control.textContent || control.getAttribute("title") || control.getAttribute("aria-label") || "").toLowerCase();
    return label.indexOf("logout") !== -1 || label.indexOf("sign out") !== -1 || label.indexOf("تسجيل الخروج") !== -1 || label.indexOf("خروج") !== -1;
  }
  function stop(event) {
    try {
      event.preventDefault();
    } catch (err) {}
    try {
      event.stopPropagation();
    } catch (err) {}
    try {
      event.stopImmediatePropagation();
    } catch (err) {}
  }
  // Logout clicks are handled by content.js and sidepanel.html
  function onInvalidState(reason) {
    // Stubbed to prevent invalid state behavior
  }
  function renderUnlockedUiWithoutReload() {
    try {
      window.__lastZoneForcedLicenseGate = false;
    } catch (err) {}
    try {
      document.querySelectorAll(".last-zone-forced-license-gate").forEach(function (gate) {
        var host = gate.parentElement;
        gate.remove();
        if (host && !host.children.length) {
          host.innerHTML = "";
        }
      });
    } catch (err) {}
    try {
      if (typeof window.__lastZoneFinalUiFix === "function") {
        window.__lastZoneFinalUiFix(document);
      }
    } catch (err) {}
    try {
      if (typeof window._buildFloatingUI === "function") {
        window._buildFloatingUI();
      }
    } catch (err) {}
    try {
      if (typeof window.buildFloatingUI === "function") {
        window.buildFloatingUI();
      }
    } catch (err) {}
    try {
      if (typeof window.renderApp === "function") {
        window.renderApp();
      }
    } catch (err) {}
  }
  try {
    chrome.storage.onChanged.addListener(function (changes, areaName) {
      if (areaName !== "local") {
        return;
      }
      var validWasEnabled = changes.ql_license_valid && changes.ql_license_valid.newValue === true || changes.license_valid && changes.license_valid.newValue === true;
      if (validWasEnabled) {
        setTimeout(renderUnlockedUiWithoutReload, 80);
      }
    });
  } catch (err) {}
  function checkLocalExpiry() {
    // Stubbed to prevent expiry checks
  }
  function revalidateWithBridge() {
    // Stubbed to prevent bridge revalidation
  }
  window.LAST_ZONE_FORCE_LICENSE_GATE = forceLicenseGate;
})();