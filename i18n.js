(function() {
  function showBanner(type, message, stack) {
    let div = document.getElementById("lz-debug-banner");
    if (!div) {
      div = document.createElement("div");
      div.id = "lz-debug-banner";
      div.style.cssText = "position:fixed;top:0;left:0;right:0;z-index:99999999;background:#1e1b4b;border-bottom:3px solid #ef4444;color:#fca5a5;padding:16px;font-family:monospace;font-size:12px;max-height:300px;overflow-y:auto;box-shadow:0 10px 30px rgba(0,0,0,0.5);line-height:1.5;";
      (document.body || document.documentElement).appendChild(div);
    }
    const item = document.createElement("div");
    item.style.marginBottom = "10px";
    item.style.paddingBottom = "10px";
    item.style.borderBottom = "1px solid rgba(239,68,68,0.2)";
    item.innerHTML = `<strong>[Suhaib Abid ${type}]</strong>: ${message}<pre style="margin:5px 0 0 0;font-size:11px;color:#f87171;white-space:pre-wrap;word-break:break-all;">${stack || ""}</pre>`;
    div.appendChild(item);
  }
  window.addEventListener('error', (event) => {
    if (event.message && event.message.indexOf("ResizeObserver") >= 0) return;
    showBanner("Error", event.message, event.error ? event.error.stack : "");
  });
  window.addEventListener('unhandledrejection', (event) => {
    if (event.reason && event.reason.message && event.reason.message.indexOf("ResizeObserver") >= 0) return;
    if (event.reason && typeof event.reason === "string" && event.reason.indexOf("ResizeObserver") >= 0) return;
    showBanner("Rejection", event.reason ? event.reason.message || event.reason : "", event.reason ? event.reason.stack : "");
  });
})();

window["_ql_lang"] = "en";
const _I18N_CLOCK_SVG = "<svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"vertical-align:middle;margin-right:3px\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/></svg>";
(function () {
  var _0x2d660c = {
    HwgCl: "ql_lang",
    dkbTw: function (_0x1beb12, _0x41d7b5) {
      return _0x1beb12 === _0x41d7b5;
    },
    kjBUF: function (_0x4b3a8a, _0x4f20f6) {
      return _0x4b3a8a === _0x4f20f6;
    }
  };
  try {
    var _0x4df8d7 = sessionStorage["getItem"](_0x2d660c["HwgCl"]);
    if (_0x2d660c["dkbTw"](_0x4df8d7, "en") || _0x2d660c["dkbTw"](_0x4df8d7, "es") || _0x2d660c["kjBUF"](_0x4df8d7, "he")) {
      window["_ql_lang"] = _0x4df8d7;
    }
  } catch (_0x20f62d) {}
})();
var _I18N = {
  pt: {
    "license.title": "Activate License",
    "license.desc": "Enter your license key to unlock.",
    "license.validate": "Validate License",
    "license.divider": "site oficial",
    "header.notifications": "Notifications",
    "header.sidepanel": "Abrir no Painel Lateral",
    "header.theme": "Theme",
    "header.logout": "Sign Out",
    "sync.waiting": "Waiting for sync...",
    "sync.ok": "✅ Sincronizado!",
    "sync.project": "Project:",
    "tab.prompt": "Prompt",
    "tab.history": "History",
    "prompt.placeholder": "Type your command...",
    "toggle.licenseMode": "Plan Mode",
    "toggle.licenseMode.short": "Plano",
    "btn.attach": "Anexar arquivo (máx. 10)",
    "btn.attach.short": "Anexar arquivo",
    "btn.optimize": "Optimize com IA",
    "btn.speech": "Voz para texto",
    "btn.speech.short": "Voz",
    "btn.send": "Enviar",
    "shortcuts.title": "ATALHOS RÁPIDOS",
    "btn.watermark": "Remover Marca de Água",
    "btn.shield.on": "Activate Shield",
    "btn.shield.off": "Deactivate Shield",
    "btn.nativeChat": "Usar Chat Padrão",
    "btn.download": "Baixar Código Fonte",
    "btn.publish": "🌐 Publish Project",
    "btn.cloud": "☁️ Enable Lovable Cloud",
    "footer.support": "Support",
    "footer.brand": "Desenvolvido por Ornov Tech BD",
    "notif.title": "Notifications",
    "notif.loading": "Loading...",
    "notif.none": "Nenhuma notificação.",
    "notif.error": "Erro ao carregar.",
    "notif.openLink": "Abrir link →",
    loading: "Loading...",
    "alert.success": "Sucesso!",
    "btn.ok": "OK",
    "expired.title": "License Expired!",
    "expired.text": "O prazo da sua licença terminou. Acesse o site oficial para regularizar sua licença.",
    "expired.renew": "🌐 Acessar Site",
    "expired.close": "Fechar",
    "countdown.trial": "Teste expira em",
    "countdown.license": "Licença expira em",
    "countdown.expired": "⏰ License expired",
    "pay.title": "Acesse o site oficial",
    "pay.divider": "Site oficial",
    "history.empty.title": "Nenhuma mensagem",
    "history.empty.desc": "Seus prompts enviados aparecerão aqui como histórico.",
    "history.clear": "🗑 Limpar History",
    "history.count": function (_0x2b54eb) {
      var _0x25e26e = {
        KSNog: function (_0x8ffaa, _0x2d355c) {
          return _0x8ffaa + _0x2d355c;
        },
        qGEBT: " mensage",
        YZpej: function (_0xf996e6, _0x3e69b6) {
          return _0xf996e6 === _0x3e69b6;
        }
      };
      return _0x25e26e["KSNog"](_0x25e26e["KSNog"](_0x2b54eb, _0x25e26e["qGEBT"]), _0x25e26e["YZpej"](_0x2b54eb, 1) ? "m" : "ns");
    },
    "date.today": "Hoje",
    "date.yesterday": "Ontem",
    "date.days": ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
    "chat.sent": "✓ Enviado",
    "chat.error": "✗ Erro",
    "update.title": "Nova atualização v",
    "update.download": "Baixar v",
    "sp.backToPopup": "◀ Popup",
    "shield.overlay.text": "🛡️ Protected by Ornov Tech BD",
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
    "prompt.bugs.text": "Analise o código e identifique todos os bugs, erros e falhas. Corrija-os e explique.",
    "prompt.refactor.text": "Prepare um plano de refatoração para otimização em etapas.",
    "prompt.errors.text": "Implemente tratamento de erros robusto em todo o código.",
    "prompt.optimize.text": "Analise e otimize o desempenho do sistema, aplicando boas práticas.",
    "prompt.comments.text": "Adicione comentários claros e documentação em todo o código.",
    "prompt.seo.text": "Crie um plano completo de otimização de SEO para este site.",
    "prompt.ui.text": "Melhore a UI tornando-a moderna, responsiva e acessível.",
    "prompt.components.text": "Reorganize o código separando em componentes reutilizáveis.",
    "prompt.review.text": "Faça uma revisão completa de qualidade e segurança do código."
  },
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
    "btn.download": "Download Source Code",
    "btn.publish": "🌐 Publish Project",
    "btn.cloud": "☁️ Enable Lovable Cloud",
    "footer.support": "Support",
    "footer.brand": "Developed by Ornov Tech BD",
    "notif.title": "Notifications",
    "notif.loading": "Loading...",
    "notif.none": "No notifications.",
    "notif.error": "Failed to load.",
    "notif.openLink": "Open link →",
    loading: "Loading...",
    "alert.success": "Success!",
    "btn.ok": "OK",
    "expired.title": "License Expired!",
    "expired.text": "Your license period has ended. Visit the official site to renew.",
    "expired.renew": "WHATSAPP-+923497641385",
    "expired.close": "Close",
    "countdown.trial": "Trial expires in",
    "countdown.license": "License expires in",
    "countdown.expired": "⏰ License expired",
    "pay.title": "Visit the official site",
    "pay.divider": "Official site",
    "history.empty.title": "No messages",
    "history.empty.desc": "Your sent prompts will appear here as history.",
    "history.clear": "🗑 Clear History",
    "history.count": function (_0x51ae73) {
      var _0x4f695b = {
        FBwgh: function (_0x28957d, _0x3d66e1) {
          return _0x28957d + _0x3d66e1;
        },
        UKfQD: function (_0x95f80c, _0x469254) {
          return _0x95f80c + _0x469254;
        },
        hOAwO: " message"
      };
      return _0x4f695b["FBwgh"](_0x4f695b["UKfQD"](_0x51ae73, _0x4f695b["hOAwO"]), _0x51ae73 === 1 ? "" : "s");
    },
    "date.today": "Today",
    "date.yesterday": "Yesterday",
    "date.days": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "chat.sent": "✓ Sent",
    "chat.error": "✗ Error",
    "update.title": "New update v",
    "update.download": "Download v",
    "sp.backToPopup": "◀ Popup",
    "shield.overlay.text": "🛡️ Protected by Ornov Tech BD",
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
    "prompt.seo.text": "Create a complete SEO optimization plan for this site. Include: meta tags analysis (title, description, og:image), headings structure (H1-H6), sitemap.xml, robots.txt, structured data (JSON-LD), performance (Core Web Vitals), accessibility, friendly URLs, canonical tags, alt text on images, lazy loading, and internal link building strategies. Implement all identified improvements.",
    "prompt.ui.text": "Improve the user interface making it more modern, responsive and accessible, following UX/UI best practices.",
    "prompt.components.text": "Reorganize the code separating into reusable, well-structured components with single responsibilities.",
    "prompt.review.text": "Do a complete code review identifying quality, security, performance issues and suggesting improvements."
  },
  es: {
    "license.title": "Activar Licencia",
    "license.desc": "Ingresa tu clave de licencia para desbloquear.",
    "license.validate": "Validar Licencia",
    "license.divider": "sitio oficial",
    "header.notifications": "Notificaciones",
    "header.sidepanel": "Abrir en Panel Lateral",
    "header.theme": "Theme",
    "header.logout": "Salir",
    "sync.waiting": "Esperando sincronización...",
    "sync.ok": "✅ ¡Sincronizado!",
    "sync.project": "Proyecto:",
    "tab.prompt": "Prompt",
    "tab.history": "Historial",
    "prompt.placeholder": "Escribe tu comando...",
    "toggle.licenseMode": "Modo Plan",
    "toggle.licenseMode.short": "Plan",
    "btn.attach": "Adjuntar archivo (máx. 10)",
    "btn.attach.short": "Adjuntar archivo",
    "btn.optimize": "Optimizar con IA",
    "btn.speech": "Voz a texto",
    "btn.speech.short": "Voz",
    "btn.send": "Enviar",
    "shortcuts.title": "ATAJOS RÁPIDOS",
    "btn.watermark": "Eliminar Marca de Agua",
    "btn.shield.on": "Activar Escudo",
    "btn.shield.off": "Desactivar Escudo",
    "btn.nativeChat": "Usar Chat Estándar",
    "btn.download": "Descargar Código Fuente",
    "btn.publish": "🌐 Publicar Proyecto",
    "btn.cloud": "☁️ Activar Cloud de Lovable",
    "footer.support": "Soporte",
    "footer.brand": "Desarrollado por Ornov Tech BD",
    "notif.title": "Notificaciones",
    "notif.loading": "Cargando...",
    "notif.none": "Sin notificaciones.",
    "notif.error": "Error al cargar.",
    "notif.openLink": "Abrir enlace →",
    loading: "Cargando...",
    "alert.success": "¡Éxito!",
    "btn.ok": "OK",
    "expired.title": "¡Licencia Expirada!",
    "expired.text": "El plazo de tu licencia terminó. Accede al sitio oficial para renovarla.",
    "expired.renew": "WHATSAPP-+923497641385",
    "expired.close": "Cerrar",
    "countdown.trial": "Prueba expira en",
    "countdown.license": "Licencia expira en",
    "countdown.expired": "⏰ Licencia expirada",
    "pay.title": "Accede al sitio oficial",
    "pay.divider": "Sitio oficial",
    "history.empty.title": "Sin mensajes",
    "history.empty.desc": "Tus prompts enviados aparecerán aquí como historial.",
    "history.clear": "🗑 Limpiar Historial",
    "history.count": function (_0x322048) {
      var _0x74330e = {
        KjxnK: function (_0x12ddc1, _0x21b623) {
          return _0x12ddc1 + _0x21b623;
        },
        MOfzp: function (_0x399a12, _0x4228d8) {
          return _0x399a12 === _0x4228d8;
        }
      };
      return _0x74330e["KjxnK"](_0x74330e["KjxnK"](_0x322048, " mensaje"), _0x74330e.MOfzp(_0x322048, 1) ? "" : "s");
    },
    "date.today": "Hoy",
    "date.yesterday": "Ayer",
    "date.days": ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
    "chat.sent": "✓ Enviado",
    "chat.error": "✗ Error",
    "update.title": "Nueva actualización v",
    "update.download": "Descargar v",
    "sp.backToPopup": "◀ Popup",
    "shield.overlay.text": "🛡️ Protected by Suhaib Abid",
    "shield.overlay.sub": "Usa la extensión para enviar prompts",
    "prompt.bugs.label": "Bugs",
    "prompt.refactor.label": "Refactorizar",
    "prompt.errors.label": "Errores",
    "prompt.optimize.label": "Optimizar",
    "prompt.comments.label": "Comentarios",
    "prompt.seo.label": "SEO",
    "prompt.ui.label": "UI",
    "prompt.components.label": "Components",
    "prompt.review.label": "Revisión",
    "prompt.bugs.text": "Analiza el código e identifica todos los bugs, errores y fallos. Corrige cada uno explicando el problema y la solución aplicada.",
    "prompt.refactor.text": "Elabora un plan completo de refactorización y optimización del sistema en etapas.",
    "prompt.errors.text": "Implementa manejo de errores robusto en todo el código, incluyendo try/catch, validaciones y mensajes de error amigables para el usuario.",
    "prompt.optimize.text": "Analiza y optimiza el rendimiento del sistema, identificando cuellos de botella, mejorando queries, reduciendo re-renders y aplicando buenas prácticas.",
    "prompt.comments.text": "Agrega comentarios claros y documentación en todo el código, explicando la lógica, parámetros y retornos de cada función.",
    "prompt.seo.text": "Crea un plan completo de optimización SEO para este sitio. Incluye: análisis de meta tags (title, description, og:image), estructura de headings (H1-H6), sitemap.xml, robots.txt, datos estructurados (JSON-LD), rendimiento (Core Web Vitals), accesibilidad, URLs amigables, canonical tags, alt text en imágenes, lazy loading, y estrategias de link building interno. Implementa todas las mejoras identificadas.",
    "prompt.ui.text": "Mejora la interfaz de usuario haciéndola más moderna, responsiva y accesible, siguiendo buenas prácticas de UX/UI.",
    "prompt.components.text": "Reorganiza el código separando en componentes reutilizables, bien estructurados y con responsabilidades únicas.",
    "prompt.review.text": "Haz una revisión completa del código identificando problemas de calidad, seguridad, rendimiento y sugiriendo mejoras."
  },
  he: {
    "license.title": "הפעלת רישיון",
    "license.desc": "הזן את מפתח הרישיון שלך כדי לפתוח.",
    "license.validate": "אימות רישיון",
    "license.divider": "אתר רשמי",
    "header.notifications": "התראות",
    "header.sidepanel": "פתיחה בסרגל הצד",
    "header.theme": "ערכת נושא",
    "header.logout": "התנתקות",
    "sync.waiting": "ממתין לסנכרון...",
    "sync.ok": "✅ מסונכרן!",
    "sync.project": "פרויקט:",
    "tab.prompt": "הנחיה",
    "tab.history": "היסטוריה",
    "prompt.placeholder": "הזן את הפקודה שלך...",
    "toggle.licenseMode": "מצב תוכנית",
    "toggle.licenseMode.short": "תוכנית",
    "btn.attach": "צרף קובץ (מקסימום 10)",
    "btn.attach.short": "צרף קובץ",
    "btn.optimize": "אופטימיזציה עם בינה מלאכותית",
    "btn.speech": "דיבור לטקסט",
    "btn.speech.short": "קול",
    "btn.send": "שלח",
    "shortcuts.title": "קיצורי דרך מהירים",
    "btn.watermark": "הסר סימן מים",
    "btn.shield.on": "הפעל מגן",
    "btn.shield.off": "כבה מגן",
    "btn.nativeChat": "השתמש בצ׳אט רגיל",
    "btn.download": "הורד קוד מקור",
    "btn.publish": "WHATSAPP-+923497641385",
    "btn.cloud": "☁️ הפעל ענן Lovable",
    "footer.support": "תמיכה",
    "footer.brand": "פותח על ידי Suhaib Abid",
    "notif.title": "התראות",
    "notif.loading": "טוען...",
    "notif.none": "אין התראות.",
    "notif.error": "טעינה נכשלה.",
    "notif.openLink": "פתח קישור ←",
    loading: "טוען...",
    "alert.success": "הצלחה!",
    "btn.ok": "אישור",
    "expired.title": "פג תוקפו של הרישיון!",
    "expired.text": "תקופת הרישיון שלך הסתיימה. בקר באתר הרשמי כדי לחדש.",
    "expired.renew": "🌐 בקר באתר",
    "expired.close": "סגור",
    "countdown.trial": "תקופת הניסיון פגה בעוד",
    "countdown.license": "הרישיון פג בעוד",
    "countdown.expired": "⏰ הרישיון פג",
    "pay.title": "בקר באתר הרשמי",
    "pay.divider": "אתר רשמי",
    "history.empty.title": "אין הודעות",
    "history.empty.desc": "ההנחיות שנשלחו יופיעו כאן כהיסטוריה.",
    "history.clear": "🗑 נקה היסטוריה",
    "history.count": function (_0x9f337c) {
      var _0x5eb808 = {
        FInSk: " הודעות"
      };
      return _0x9f337c + _0x5eb808["FInSk"];
    },
    "date.today": "היום",
    "date.yesterday": "אתמול",
    "date.days": ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
    "chat.sent": "✓ נשלח",
    "chat.error": "✗ שגיאה",
    "update.title": "עדכון חדש v",
    "update.download": "הורד v",
    "sp.backToPopup": "◀ פופאפ",
    "shield.overlay.text": "🛡️ מוגן על ידי Ornov Tech BD",
    "shield.overlay.sub": "השתמש בתוסף כדי לשלוח הנחיות",
    "prompt.bugs.label": "באגים",
    "prompt.refactor.label": "ארגון מחדש",
    "prompt.errors.label": "שגיאות",
    "prompt.optimize.label": "אופטימיזציה",
    "prompt.comments.label": "הערות",
    "prompt.seo.label": "SEO",
    "prompt.ui.label": "UI",
    "prompt.components.label": "רכיבים",
    "prompt.review.label": "סקירה",
    "prompt.bugs.text": "נתח את הקוד וזהה את כל הבאגים, השגיאות והתקלות. תקן כל אחד מהם תוך הסבר הבעיה והפתרון שיושם.",
    "prompt.refactor.text": "הכן תוכנית מלאה לארגון מחדש והאופטימיזציה של המערכת בשלבים.",
    "prompt.errors.text": "הטמע טיפול שגיאות חסון בכל הקוד, כולל try/catch, אימותים והודעות שגיאה ידידותיות למשתמש.",
    "prompt.optimize.text": "נתח ובצע אופטימיזציה לביצועי המערכת, זהה צווארי בקבוק, שפר שאילתות, צמצם רינדורים חוזרים והחל שיטות עבודה מומלצות.",
    "prompt.comments.text": "הוסף הערות ברורות ותיעוד לאורך כל הקוד, תוך הסבר הלוגיקה, הפרמטרים וערכי ההחזרה של כל פונקציה.",
    "prompt.seo.text": "צור תוכנית אופטימיזציה מלאה לקידום אתרים (SEO) עבור אתר זה. כלול: ניתוח תגי מטא (כותרת, תיאור, תמונה לשתף), מבנה כותרות (H1-H6), מפת האתר sitemap.xml, קובץ robots.txt, נתונים מובנים (JSON-LD), ביצועים (Core Web Vitals), נגישות, כתובות אתר ידידותיות, תגי קנוניקל, טקסט אלטרנטיבי לתמונות, טעינה עצלה ואסטרטגיות קישורים פנימיים. הטמע את כל השיפורים שזוהו.",
    "prompt.ui.text": "שפר את ממשק המשתמש והפוך אותו למודרני יותר, רספונסיבי ונגיש, תוך מעקב אחר שיטות עבודה מומלצות של UX/UI.",
    "prompt.components.text": "ארגן מחדש את הקוד והפרד אותו לרכיבים רב-פעמיים, בנויים היטב ובעלי אחריות אחת בלבד.",
    "prompt.review.text": "בצע סקירת קוד מלאה המזהה בעיות איכות, אבטחה, ביצועים והצע שיפורים."
  }
};
function t(_0x12d4ea) {
  var _0xd9844c = window._ql_lang || "pt";
  var _0x529596 = _I18N[_0xd9844c] || _I18N.pt;
  var _0x40dd86 = _0x529596 && _0x529596[_0x12d4ea] !== undefined ? _0x529596[_0x12d4ea] : _I18N.pt ? _I18N.pt[_0x12d4ea] : undefined;
  if (_0x40dd86 !== undefined) {
    return _0x40dd86;
  } else {
    return _0x12d4ea;
  }
}
function langSw() {
  var _0x247ece = {
    vbZJg: function (_0xa3ffc1, _0x526ec6) {
      return _0xa3ffc1 + _0x526ec6;
    },
    PqAIo: function (_0x34ad7c, _0x83eaa5) {
      return _0x34ad7c + _0x83eaa5;
    },
    eyMNx: function (_0x5701a1, _0x3536d8) {
      return _0x5701a1 + _0x3536d8;
    },
    unyYs: function (_0xefdd9d, _0x5c19e7) {
      return _0xefdd9d + _0x5c19e7;
    },
    UBxQw: function (_0x14ebf5, _0x152094) {
      return _0x14ebf5 + _0x152094;
    },
    bQhbG: function (_0x4812b6, _0x4ac7f6) {
      return _0x4812b6 + _0x4ac7f6;
    },
    eoMsH: function (_0x22f1e7, _0x31e018) {
      return _0x22f1e7 + _0x31e018;
    },
    wrwBQ: function (_0x21e181, _0x4f4663) {
      return _0x21e181 + _0x4f4663;
    },
    oNPDK: "<div class=\"ql-lang-sw\">",
    yzMNa: "<button class=\"ql-lang-btn",
    BReiU: function (_0x309643, _0x48ee4e) {
      return _0x309643 === _0x48ee4e;
    },
    BvxAM: " ql-lang-active",
    ppijK: "\" data-lang=\"pt\">PT</button>",
    EJBLM: function (_0x485dd8, _0x80247d) {
      return _0x485dd8 === _0x80247d;
    },
    xwLUq: function (_0x40eab6, _0x498ae2) {
      return _0x40eab6 === _0x498ae2;
    },
    NLIpA: "\" data-lang=\"es\">ES</button>",
    Agypk: "\" data-lang=\"he\">HE</button>",
    UqIUB: "</div>"
  };
  var _0x5d5ea8 = window._ql_lang || "pt";
  return _0x247ece.vbZJg(_0x247ece["PqAIo"](_0x247ece.eyMNx(_0x247ece.unyYs(_0x247ece["unyYs"](_0x247ece["UBxQw"](_0x247ece.eyMNx(_0x247ece.bQhbG(_0x247ece["eoMsH"](_0x247ece.wrwBQ(_0x247ece.unyYs(_0x247ece.oNPDK + _0x247ece.yzMNa, _0x247ece["BReiU"](_0x5d5ea8, "pt") ? _0x247ece["BvxAM"] : ""), _0x247ece["ppijK"]), "<button class=\"ql-lang-btn"), _0x247ece.EJBLM(_0x5d5ea8, "en") ? " ql-lang-active" : ""), "\" data-lang=\"en\">EN</button>"), _0x247ece.yzMNa) + (_0x247ece["xwLUq"](_0x5d5ea8, "es") ? _0x247ece["BvxAM"] : ""), _0x247ece.NLIpA), "<button class=\"ql-lang-btn"), _0x247ece.BReiU(_0x5d5ea8, "he") ? _0x247ece["BvxAM"] : ""), _0x247ece["Agypk"]), _0x247ece["UqIUB"]);
}
function setLang(_0x1915b9) {
  var _0x5e817e = {
    fjqet: "ql_lang",
    qGzCS: function (_0x45000c) {
      return _0x45000c();
    }
  };
  var _0x3d22e6 = "0|3|1|4|2"["split"]("|");
  var _0x539344 = 0;
  while (true) {
    switch (_0x3d22e6[_0x539344++]) {
      case "0":
        if (!_I18N[_0x1915b9]) {
          return;
        }
        continue;
      case "1":
        try {
          sessionStorage.setItem(_0x5e817e["fjqet"], _0x1915b9);
        } catch (_0x5d5d54) {}
        continue;
      case "2":
        _0x5e817e["qGzCS"](_applyTranslations);
        continue;
      case "3":
        window["_ql_lang"] = _0x1915b9;
        continue;
      case "4":
        try {
          chrome.storage["local"]["set"]({
            ql_lang: _0x1915b9
          });
        } catch (_0x142004) {}
        continue;
    }
    break;
  }
}
function _getCurrentTemplates() {
  var _0x3ac607 = {
    OUSzr: function (_0x18b841, _0x3abc3b) {
      return _0x18b841 !== _0x3abc3b;
    },
    uxbKK: "undefined",
    wJjSg: function (_0x2d45dd, _0x400663) {
      return _0x2d45dd(_0x400663);
    },
    QOWcr: function (_0x45f4cc, _0x49969d) {
      return _0x45f4cc(_0x49969d);
    },
    hexxL: "prompt.bugs.text",
    xOPEZ: "prompt.refactor.label",
    wRqlN: function (_0x5be1ac, _0x35d858) {
      return _0x5be1ac(_0x35d858);
    },
    VczVT: "prompt.errors.label",
    WWKIi: function (_0x4adaa8, _0x1dc1b5) {
      return _0x4adaa8(_0x1dc1b5);
    },
    PMgse: "prompt.errors.text",
    mJsCn: function (_0x57d84b, _0x1271de) {
      return _0x57d84b(_0x1271de);
    },
    DfQmF: "prompt.optimize.label",
    czWiZ: "prompt.optimize.text",
    LVeKm: "prompt.comments.label",
    dMLNl: "prompt.seo.label",
    yKmQa: "prompt.seo.text",
    AXYwt: "prompt.ui.label",
    JeqYa: function (_0x36c8c9, _0x53b439) {
      return _0x36c8c9(_0x53b439);
    },
    miJwl: function (_0x3226a6, _0x39ed56) {
      return _0x3226a6(_0x39ed56);
    },
    pGDCe: "prompt.components.text",
    gyPXe: "prompt.review.label"
  };
  var _0x1fec87 = _0x3ac607["OUSzr"](typeof SVG_ICONS, _0x3ac607.uxbKK) ? SVG_ICONS : _0x3ac607.OUSzr(typeof SP_SVG, _0x3ac607["uxbKK"]) ? {
    wrench: SP_SVG["wrench"],
    edit: SP_SVG["edit"],
    shield: SP_SVG["shield"],
    zap: SP_SVG["zap"],
    msgSquare: SP_SVG["msgSq"],
    trendUp: SP_SVG["trendUp"],
    palette: SP_SVG["palette"],
    box: SP_SVG["box"],
    search: SP_SVG["search"]
  } : {};
  return [{
    icon: _0x1fec87["wrench"] || "",
    label: _0x3ac607["wJjSg"](t, "prompt.bugs.label"),
    prompt: _0x3ac607["QOWcr"](t, _0x3ac607.hexxL)
  }, {
    icon: _0x1fec87["edit"] || "",
    label: t(_0x3ac607["xOPEZ"]),
    prompt: _0x3ac607["wRqlN"](t, "prompt.refactor.text")
  }, {
    icon: _0x1fec87["shield"] || "",
    label: _0x3ac607["wRqlN"](t, _0x3ac607.VczVT),
    prompt: _0x3ac607["WWKIi"](t, _0x3ac607["PMgse"])
  }, {
    icon: _0x1fec87["zap"] || "",
    label: _0x3ac607["mJsCn"](t, _0x3ac607["DfQmF"]),
    prompt: t(_0x3ac607["czWiZ"])
  }, {
    icon: _0x1fec87["msgSquare"] || "",
    label: _0x3ac607["QOWcr"](t, _0x3ac607.LVeKm),
    prompt: _0x3ac607["wJjSg"](t, "prompt.comments.text")
  }, {
    icon: _0x1fec87.trendUp || "",
    label: _0x3ac607["mJsCn"](t, _0x3ac607["dMLNl"]),
    prompt: _0x3ac607["mJsCn"](t, _0x3ac607.yKmQa)
  }, {
    icon: _0x1fec87["palette"] || "",
    label: t(_0x3ac607.AXYwt),
    prompt: _0x3ac607["QOWcr"](t, "prompt.ui.text")
  }, {
    icon: _0x1fec87.box || "",
    label: _0x3ac607.JeqYa(t, "prompt.components.label"),
    prompt: _0x3ac607["miJwl"](t, _0x3ac607["pGDCe"])
  }, {
    icon: _0x1fec87["search"] || "",
    label: _0x3ac607["miJwl"](t, _0x3ac607["gyPXe"]),
    prompt: t("prompt.review.text")
  }];
}
function _rebuildChips() {
  var _0x1a6609 = {
    RofIm: "4|3|5|2|1|0",
    bAWzd: function (_0x2df826) {
      return _0x2df826();
    },
    MjLCM: "ql-msg",
    PKmOu: "2|0|1|3|4|5",
    ZyKJn: "ql-chip",
    passm: function (_0x29b3b9, _0x3fe6d5) {
      return _0x29b3b9 + _0x3fe6d5;
    },
    qmuiM: "button",
    LsxIW: "click",
    wzRdZ: "sp-msg",
    VGtpr: "ql-chips"
  };
  var _0x59460f = _0x1a6609["RofIm"].split("|");
  var _0x9bd3f8 = 0;
  while (true) {
    switch (_0x59460f[_0x9bd3f8++]) {
      case "0":
        if (_0x5a8502) {
          _0x5a8502["innerHTML"] = "";
          _0xec75e["forEach"](function (_0x201891) {
            var _0x42cffc = document["createElement"](_0x46080f["QFaEf"]);
            _0x42cffc.className = _0x46080f["vCluO"];
            _0x42cffc["innerHTML"] = _0x46080f.feheH(_0x46080f["uNYku"](_0x201891["icon"], " "), _0x201891["label"]);
            _0x42cffc["title"] = _0x201891["prompt"];
            _0x42cffc.addEventListener(_0x46080f["vLMfh"], function () {
              var _0x470753 = document["getElementById"](_0x46080f["EhthW"]);
              if (_0x470753) {
                _0x470753["value"] = _0x201891.prompt;
              }
            });
            _0x5a8502.appendChild(_0x42cffc);
          });
        }
        continue;
      case "1":
        var _0x5a8502 = document["getElementById"]("sp-chips");
        continue;
      case "2":
        if (_0x4e286e) {
          _0x4e286e["innerHTML"] = "";
          _0xec75e.forEach(function (_0x899744) {
            var _0x5831d2 = _0x46080f.vUnDO["split"]("|");
            var _0xa0700 = 0;
            while (true) {
              switch (_0x5831d2[_0xa0700++]) {
                case "0":
                  _0x106c99["className"] = _0x46080f["oDdhl"];
                  continue;
                case "1":
                  _0x106c99["innerHTML"] = _0x46080f["feheH"](_0x899744["icon"] + " ", _0x899744["label"]);
                  continue;
                case "2":
                  var _0x106c99 = document["createElement"](_0x46080f["QFaEf"]);
                  continue;
                case "3":
                  _0x106c99["title"] = _0x899744["prompt"];
                  continue;
                case "4":
                  _0x106c99["addEventListener"](_0x46080f["vLMfh"], function () {
                    var _0xc106fc = document["getElementById"](_0x46080f["YzJdP"]);
                    if (_0xc106fc) {
                      _0xc106fc["value"] = _0x899744.prompt;
                    }
                  });
                  continue;
                case "5":
                  _0x4e286e.appendChild(_0x106c99);
                  continue;
              }
              break;
            }
          });
        }
        continue;
      case "3":
        var _0xec75e = _0x1a6609["bAWzd"](_getCurrentTemplates);
        continue;
      case "4":
        var _0x46080f = {
          YzJdP: _0x1a6609["MjLCM"],
          vUnDO: _0x1a6609.PKmOu,
          oDdhl: _0x1a6609.ZyKJn,
          feheH: function (_0x297104, _0xa4eff5) {
            return _0x1a6609.passm(_0x297104, _0xa4eff5);
          },
          QFaEf: _0x1a6609["qmuiM"],
          vLMfh: _0x1a6609.LsxIW,
          EhthW: _0x1a6609["wzRdZ"],
          vCluO: "sp-chip",
          uNYku: function (_0x387184, _0x5ef0ee) {
            return _0x387184 + _0x5ef0ee;
          }
        };
        continue;
      case "5":
        var _0x4e286e = document["getElementById"](_0x1a6609["VGtpr"]);
        continue;
    }
    break;
  }
}
function _setTxt(_0x3254b3, _0x15a084) {
  var _0x471610 = document["querySelector"](_0x3254b3);
  if (_0x471610) {
    _0x471610["textContent"] = t(_0x15a084);
  }
}
function _setPlaceholder(_0x18f466, _0x557ae9) {
  var _0x31acdd = document.querySelector(_0x18f466);
  if (_0x31acdd) {
    _0x31acdd["placeholder"] = t(_0x557ae9);
  }
}
function _setTitle(_0x29d3b2, _0x289ec5) {
  var _0xd410f2 = {
    CTNxn: function (_0x174dbf, _0x33438e) {
      return _0x174dbf(_0x33438e);
    }
  };
  var _0x521d21 = document["querySelector"](_0x29d3b2);
  if (_0x521d21) {
    _0x521d21.title = _0xd410f2["CTNxn"](t, _0x289ec5);
  }
}
function _setLastTextNode(_0x4b1d0d, _0x34c752) {
  var _0x2d13da = {
    kdOeU: function (_0x2b9978, _0xfcd784) {
      return _0x2b9978 - _0xfcd784;
    },
    Xwwev: function (_0x5b0a3a, _0x4525d7) {
      return _0x5b0a3a >= _0x4525d7;
    },
    SNEGg: function (_0x488766, _0x261640) {
      return _0x488766 === _0x261640;
    },
    tDDLi: function (_0xf280be, _0x1d2475) {
      return _0xf280be + _0x1d2475;
    },
    EZVmZ: function (_0xbe1235, _0x1ca9c0) {
      return _0xbe1235 + _0x1ca9c0;
    }
  };
  if (!_0x4b1d0d) {
    return;
  }
  for (var _0x2bcc3c = _0x2d13da["kdOeU"](_0x4b1d0d["childNodes"]["length"], 1); _0x2d13da["Xwwev"](_0x2bcc3c, 0); _0x2bcc3c--) {
    if (_0x2d13da.SNEGg(_0x4b1d0d["childNodes"][_0x2bcc3c]["nodeType"], 3)) {
      _0x4b1d0d["childNodes"][_0x2bcc3c]["textContent"] = _0x2d13da["tDDLi"](" ", _0x34c752);
      return;
    }
  }
  _0x4b1d0d.appendChild(document.createTextNode(_0x2d13da["EZVmZ"](" ", _0x34c752)));
}
function _applyTranslations() {
  var _0x19db88 = {
    IeYJm: "41|27|30|29|16|25|7|23|5|52|33|39|13|43|11|47|18|4|15|49|17|48|26|38|6|28|46|20|53|50|1|19|12|3|24|9|8|0|37|40|31|32|2|34|45|42|51|44|10|35|22|14|36|21",
    phogq: function (_0x447e7a, _0xa922a6, _0x388054) {
      return _0x447e7a(_0xa922a6, _0x388054);
    },
    dnhDR: "btn.attach.short",
    uOJUU: "ql-sync-status",
    QbqyI: "ql-sync-ok",
    YRyrq: function (_0x4a0788, _0x33fbee) {
      return _0x4a0788 + _0x33fbee;
    },
    XJvlQ: function (_0xf3bbb, _0x174804) {
      return _0xf3bbb + _0x174804;
    },
    jzvOo: function (_0xf71535, _0x2aac9c) {
      return _0xf71535(_0x2aac9c);
    },
    ocGmN: "sync.ok",
    fFjyB: "...",
    GDkdI: function (_0x10c4a5, _0x5575e4) {
      return _0x10c4a5(_0x5575e4);
    },
    YUBSv: "sync.waiting",
    DnnGA: function (_0x11d462, _0x5092e8, _0x34d9c4) {
      return _0x11d462(_0x5092e8, _0x34d9c4);
    },
    SbkJq: "#sp-remove-watermark",
    nxVQU: "notif.title",
    tEyWf: "#ql-send",
    fIehK: "btn.send",
    XyXKJ: "[data-i18n-placeholder]",
    trmpk: ".ql-gate-desc",
    Xkenx: "license.desc",
    jRJKi: "[data-i18n-title]",
    BbcoL: function (_0x2660c4, _0x14af61, _0x371868) {
      return _0x2660c4(_0x14af61, _0x371868);
    },
    ncKVn: ".sp-toggle-label",
    hrclg: "toggle.licenseMode.short",
    AkiBn: "prompt.placeholder",
    ySrgJ: "sp-shield-label",
    peMAA: "#ql-attach-btn",
    ewjGo: function (_0x2cd748, _0x3c8ebc, _0x11f03a) {
      return _0x2cd748(_0x3c8ebc, _0x11f03a);
    },
    rXsru: "shield.overlay.sub",
    KMfBr: function (_0x4b92be, _0x557cbc) {
      return _0x4b92be + _0x557cbc;
    },
    EcEAm: function (_0x2ad4e3, _0x24c31a) {
      return _0x2ad4e3 + _0x24c31a;
    },
    snxru: function (_0x3a6dac, _0x4368ad) {
      return _0x3a6dac(_0x4368ad);
    },
    dYwQK: "sync.project",
    bfbCx: function (_0x4cf4c1, _0x20b181) {
      return _0x4cf4c1 + _0x20b181;
    },
    cmHdb: function (_0x569394, _0x3e2bbb, _0x298989) {
      return _0x569394(_0x3e2bbb, _0x298989);
    },
    jpylR: ".ql-shortcuts-title",
    wDslc: "shortcuts.title",
    UnsPj: "[data-i18n]",
    boksf: function (_0x1774d9, _0x34fefb, _0x18eb71) {
      return _0x1774d9(_0x34fefb, _0x18eb71);
    },
    gnlzA: "ql-native-chat-btn",
    EclXN: "btn.nativeChat",
    NhJhD: function (_0x112aea, _0x192d36, _0x419562) {
      return _0x112aea(_0x192d36, _0x419562);
    },
    DgUvC: "#ql-speech-btn",
    gTbGl: "btn.speech",
    PHfGs: function (_0x4fb81b, _0x450324, _0x1cd593) {
      return _0x4fb81b(_0x450324, _0x1cd593);
    },
    PhMsw: ".ql-shield-overlay-text",
    RcJsf: "shield.overlay.text",
    WHyJK: function (_0x2c0fc4) {
      return _0x2c0fc4();
    },
    erROO: "sp-sync",
    HHQaW: function (_0x368c3f, _0x5d8494) {
      return _0x368c3f < _0x5d8494;
    },
    ccHez: ".sp-notif-header span:first-child",
    dWGCY: function (_0x323941, _0x1c16af) {
      return _0x323941(_0x1c16af);
    },
    yNNSs: "data-i18n",
    rsRlm: function (_0x4483c1, _0x6f9efd) {
      return _0x4483c1 === _0x6f9efd;
    },
    ZIGyx: function (_0x21413e, _0xcfb6f9, _0xb4b99a) {
      return _0x21413e(_0xcfb6f9, _0xb4b99a);
    },
    SSfrv: "#ql-validate-btn",
    Yfgrj: "license.validate",
    KMMtg: "right",
    UinAX: "ltr",
    umgBR: "left",
    oglsw: function (_0x3f846d, _0x3e01bf, _0x274c5e) {
      return _0x3f846d(_0x3e01bf, _0x274c5e);
    },
    YBtwp: ".ql-notif-btn",
    oFQAy: "header.notifications",
    iBnwA: function (_0x5ce04f, _0x498c79) {
      return _0x5ce04f === _0x498c79;
    },
    gEQYn: "rtl",
    gdBbc: "sp-body",
    gJEsn: "#sp-send",
    SPnBK: ".sp-shortcuts-title",
    QKTnL: ".ql-lang-btn",
    VebYK: "#sp-native-chat-label",
    rEgUe: "sp-shield-btn",
    VihLG: "btn.shield.off",
    YAxYa: function (_0x3af1dc, _0x3011a3) {
      return _0x3af1dc(_0x3011a3);
    },
    UClSX: "btn.shield.on",
    zIRYC: function (_0x113dec, _0x34b21d, _0x2c7859) {
      return _0x113dec(_0x34b21d, _0x2c7859);
    },
    hqTye: "#sp-optimize",
    uUgba: "btn.optimize",
    yZqXy: function (_0x2ac81a, _0x29136d, _0x33fdcf) {
      return _0x2ac81a(_0x29136d, _0x33fdcf);
    },
    Lbzhd: ".ql-gate-title",
    FEkHS: "ql-lang-active",
    fIjbp: "ql-floating",
    DxUCO: function (_0x5b65e7, _0x6843fa, _0x1e4975) {
      return _0x5b65e7(_0x6843fa, _0x1e4975);
    },
    BuRUV: "#sp-validate-btn",
    oqutq: function (_0x4a695d, _0x36d77f, _0xbd8c35) {
      return _0x4a695d(_0x36d77f, _0xbd8c35);
    },
    mFXWp: ".ql-toggle-label-inline",
    ixaZT: "toggle.licenseMode",
    dkgpl: ".sp-gate-desc",
    vjqeY: "#sp-download-project",
    qCwpO: "btn.download",
    ABROq: "#ql-sidepanel-btn",
    BSHFy: "header.sidepanel",
    LoJXx: "#ql-optimize-btn",
    XbLRI: "#ql-download-project",
    CjIiL: function (_0x2f128a, _0x239089, _0x38e10e) {
      return _0x2f128a(_0x239089, _0x38e10e);
    },
    AXzqa: "btn.watermark",
    RLlJo: "#ql-sync-status .ql-sync-text",
    bqDuD: function (_0x12fc2b, _0x345feb, _0x295de5) {
      return _0x12fc2b(_0x345feb, _0x295de5);
    },
    MDawO: "license.title",
    AXgLt: function (_0x5dc772, _0x564cfd) {
      return _0x5dc772 < _0x564cfd;
    },
    FHjwi: function (_0x3b4dd1, _0x1fea7d) {
      return _0x3b4dd1(_0x1fea7d);
    },
    TFOdk: "data-i18n-placeholder",
    Joesk: "ql-shield-active",
    wvwRE: function (_0x4c6eab, _0x5be7a3) {
      return _0x4c6eab(_0x5be7a3);
    }
  };
  var _0xe8d464 = _0x19db88.IeYJm["split"]("|");
  var _0x2a49b6 = 0;
  while (true) {
    switch (_0xe8d464[_0x2a49b6++]) {
      case "0":
        _0x19db88["phogq"](_setTitle, "#sp-attach-btn", _0x19db88["dnhDR"]);
        continue;
      case "1":
        if (_0xa0a04e) {
          var _0xc2c953 = document.getElementById(_0x19db88.uOJUU);
          if (_0xc2c953 && _0xc2c953.classList.contains(_0x19db88["QbqyI"])) {
            var _0x179404 = _0xa0a04e["textContent"].match(/([a-z0-9]{6})\.\.\./i);
            _0xa0a04e["textContent"] = _0x19db88["YRyrq"](_0x19db88["YRyrq"](_0x19db88["XJvlQ"](_0x19db88.jzvOo(t, _0x19db88["ocGmN"]), " "), _0x19db88["jzvOo"](t, "sync.project")), _0x179404 ? _0x19db88["YRyrq"](_0x19db88["XJvlQ"](" ", _0x179404[1]), _0x19db88.fFjyB) : "");
          } else {
            _0xa0a04e.innerHTML = _0x19db88["YRyrq"](_I18N_CLOCK_SVG, _0x19db88["GDkdI"](t, _0x19db88["YUBSv"]));
          }
        }
        continue;
      case "2":
        _0x19db88["DnnGA"](_setTxt, _0x19db88["SbkJq"], "btn.watermark");
        continue;
      case "3":
        _0x19db88["phogq"](_setTxt, ".ql-notif-header span:first-child", _0x19db88["nxVQU"]);
        continue;
      case "4":
        _setTxt(_0x19db88["tEyWf"], _0x19db88["fIehK"]);
        continue;
      case "5":
        var _0x9df0bd = document["querySelectorAll"](_0x19db88["XyXKJ"]);
        continue;
      case "6":
        _setTxt(_0x19db88["trmpk"], _0x19db88["Xkenx"]);
        continue;
      case "7":
        var _0x348df5 = document["querySelectorAll"](_0x19db88["jRJKi"]);
        continue;
      case "8":
        _0x19db88["BbcoL"](_setTxt, _0x19db88["ncKVn"], _0x19db88["hrclg"]);
        continue;
      case "9":
        _setPlaceholder("#sp-msg", _0x19db88["AkiBn"]);
        continue;
      case "10":
        var _0x4cba81 = document["getElementById"](_0x19db88["ySrgJ"]);
        continue;
      case "11":
        _setTitle(_0x19db88["peMAA"], "btn.attach");
        continue;
      case "12":
        _0x19db88.ewjGo(_setTxt, ".ql-shield-overlay-sub", _0x19db88.rXsru);
        continue;
      case "13":
        _0x19db88["ewjGo"](_setPlaceholder, "#ql-msg", _0x19db88["AkiBn"]);
        continue;
      case "14":
        if (_0x4a022b) {
          if (_0x4a022b.classList["contains"]("sp-sync-ok")) {
            var _0x488b1f = _0x4a022b["textContent"]["match"](/([a-z0-9]{6})\.\.\./i);
            _0x4a022b.textContent = _0x19db88["KMfBr"](_0x19db88.EcEAm(_0x19db88["GDkdI"](t, _0x19db88["ocGmN"]), " "), _0x19db88["snxru"](t, _0x19db88["dYwQK"])) + (_0x488b1f ? _0x19db88["KMfBr"](_0x19db88["bfbCx"](" ", _0x488b1f[1]), _0x19db88["fFjyB"]) : "");
          } else {
            _0x4a022b["innerHTML"] = _0x19db88.YRyrq(_I18N_CLOCK_SVG, t(_0x19db88["YUBSv"]));
          }
        }
        continue;
      case "15":
        _0x19db88["cmHdb"](_setTxt, _0x19db88["jpylR"], _0x19db88["wDslc"]);
        continue;
      case "16":
        var _0x581f8e = document.querySelectorAll(_0x19db88["UnsPj"]);
        continue;
      case "17":
        _0x19db88["boksf"](_setLastTextNode, document.getElementById(_0x19db88["gnlzA"]), t(_0x19db88.EclXN));
        continue;
      case "18":
        _0x19db88["NhJhD"](_setTitle, _0x19db88["DgUvC"], _0x19db88.gTbGl);
        continue;
      case "19":
        _0x19db88.PHfGs(_setTxt, _0x19db88["PhMsw"], _0x19db88["RcJsf"]);
        continue;
      case "20":
        var _0x598129 = document["getElementById"]("ql-shield-label");
        continue;
      case "21":
        _0x19db88["WHyJK"](_setupObservers);
        continue;
      case "22":
        var _0x4a022b = document["getElementById"](_0x19db88.erROO);
        continue;
      case "23":
        for (var _0x2488f3 = 0; _0x19db88.HHQaW(_0x2488f3, _0x348df5["length"]); _0x2488f3++) {
          _0x348df5[_0x2488f3].title = _0x19db88.jzvOo(t, _0x348df5[_0x2488f3].getAttribute("data-i18n-title"));
        }
        continue;
      case "24":
        _0x19db88["BbcoL"](_setTxt, _0x19db88.ccHez, _0x19db88["nxVQU"]);
        continue;
      case "25":
        for (var _0x14b0a2 = 0; _0x14b0a2 < _0x581f8e.length; _0x14b0a2++) {
          var _0x3acbcf = _0x19db88["dWGCY"](t, _0x581f8e[_0x14b0a2]["getAttribute"](_0x19db88["yNNSs"]));
          if (_0x19db88["rsRlm"](typeof _0x3acbcf, "string")) {
            _0x581f8e[_0x14b0a2]["textContent"] = _0x3acbcf;
          }
        }
        continue;
      case "26":
        _0x19db88["ZIGyx"](_setTxt, _0x19db88["SSfrv"], _0x19db88["Yfgrj"]);
        continue;
      case "27":
        if (_0x1134f1) {
          if (_0x19db88["rsRlm"](window._ql_lang, "he")) {
            _0x1134f1["dir"] = "rtl";
            _0x1134f1["style"].textAlign = _0x19db88["KMMtg"];
          } else {
            _0x1134f1.dir = _0x19db88["UinAX"];
            _0x1134f1["style"]["textAlign"] = _0x19db88.umgBR;
          }
        }
        continue;
      case "28":
        _0x19db88["oglsw"](_setTitle, _0x19db88["YBtwp"], _0x19db88["oFQAy"]);
        continue;
      case "29":
        if (_0x904f1c) {
          if (_0x19db88.iBnwA(window["_ql_lang"], "he")) {
            _0x904f1c["dir"] = _0x19db88["gEQYn"];
            _0x904f1c["style"]["textAlign"] = _0x19db88["KMMtg"];
          } else {
            _0x904f1c.dir = "ltr";
            _0x904f1c["style"]["textAlign"] = _0x19db88["umgBR"];
          }
        }
        continue;
      case "30":
        var _0x904f1c = document["getElementById"](_0x19db88["gdBbc"]);
        continue;
      case "31":
        _setTxt(_0x19db88.gJEsn, _0x19db88["fIehK"]);
        continue;
      case "32":
        _0x19db88.ewjGo(_setTxt, _0x19db88["SPnBK"], _0x19db88["wDslc"]);
        continue;
      case "33":
        var _0x28470e = document.querySelectorAll(_0x19db88.QKTnL);
        continue;
      case "34":
        _0x19db88["cmHdb"](_setTxt, _0x19db88.VebYK, _0x19db88["EclXN"]);
        continue;
      case "35":
        if (_0x4cba81) {
          var _0x7e8df = document.getElementById(_0x19db88["rEgUe"]);
          _0x4cba81["textContent"] = _0x7e8df && _0x7e8df["classList"]["contains"]("sp-shield-active") ? t(_0x19db88["VihLG"]) : _0x19db88["YAxYa"](t, _0x19db88["UClSX"]);
        }
        continue;
      case "36":
        _rebuildChips();
        continue;
      case "37":
        _0x19db88.zIRYC(_setTitle, _0x19db88["hqTye"], _0x19db88.uUgba);
        continue;
      case "38":
        _0x19db88["yZqXy"](_setTxt, _0x19db88["Lbzhd"], "license.title");
        continue;
      case "39":
        for (var _0x4b706a = 0; _0x4b706a < _0x28470e["length"]; _0x4b706a++) {
          _0x28470e[_0x4b706a].classList.toggle(_0x19db88["FEkHS"], _0x19db88["rsRlm"](_0x28470e[_0x4b706a]["getAttribute"]("data-lang"), window["_ql_lang"]));
        }
        continue;
      case "40":
        _setTitle("#sp-speech", "btn.speech.short");
        continue;
      case "41":
        var _0x1134f1 = document["getElementById"](_0x19db88["fIjbp"]);
        continue;
      case "42":
        _0x19db88["DxUCO"](_setTxt, _0x19db88["BuRUV"], "license.validate");
        continue;
      case "43":
        _0x19db88["oqutq"](_setTxt, _0x19db88["mFXWp"], _0x19db88["ixaZT"]);
        continue;
      case "44":
        _setTxt(_0x19db88["dkgpl"], "license.desc");
        continue;
      case "45":
        _setTxt(_0x19db88["vjqeY"], _0x19db88["qCwpO"]);
        continue;
      case "46":
        _setTitle(_0x19db88["ABROq"], _0x19db88["BSHFy"]);
        continue;
      case "47":
        _setTitle(_0x19db88["LoJXx"], _0x19db88["uUgba"]);
        continue;
      case "48":
        _0x19db88["ZIGyx"](_setTxt, _0x19db88.XbLRI, "btn.download");
        continue;
      case "49":
        _0x19db88.CjIiL(_setTxt, "#ql-remove-watermark", _0x19db88.AXzqa);
        continue;
      case "50":
        var _0xa0a04e = document["querySelector"](_0x19db88["RLlJo"]);
        continue;
      case "51":
        _0x19db88["bqDuD"](_setTxt, ".sp-gate-title", _0x19db88["MDawO"]);
        continue;
      case "52":
        for (var _0x79b892 = 0; _0x19db88["AXgLt"](_0x79b892, _0x9df0bd["length"]); _0x79b892++) {
          _0x9df0bd[_0x79b892]["placeholder"] = _0x19db88["FHjwi"](t, _0x9df0bd[_0x79b892]["getAttribute"](_0x19db88["TFOdk"]));
        }
        continue;
      case "53":
        if (_0x598129) {
          var _0x2add83 = document.getElementById("ql-shield-btn");
          _0x598129["textContent"] = _0x2add83 && _0x2add83["classList"]["contains"](_0x19db88["Joesk"]) ? _0x19db88["wvwRE"](t, _0x19db88["VihLG"]) : _0x19db88.dWGCY(t, _0x19db88["UClSX"]);
        }
        continue;
    }
    break;
  }
}
var _ql_observed = {};
var _ql_obsTimer = null;
function _setupObservers() {
  var _0x4abe2d = {
    QZMJv: "5|1|4|3|2|0",
    BjILH: function (_0x49f84a, _0x2fcaf1) {
      return _0x49f84a !== _0x2fcaf1;
    },
    BBBaB: "sp-tab-content",
    tzFbX: "sp-body"
  };
  var _0x5ec1f9 = ["ql-tab-content", _0x4abe2d["BBBaB"], _0x4abe2d["tzFbX"]];
  _0x5ec1f9["forEach"](function (_0x5f0aee) {
    var _0x58d32a = _0x4abe2d["QZMJv"].split("|");
    var _0x45f675 = 0;
    while (true) {
      switch (_0x58d32a[_0x45f675++]) {
        case "0":
          new MutationObserver(function () {
            if (_0x50479b["FDBcA"](window["_ql_lang"], "pt")) {
              clearTimeout(_ql_obsTimer);
              _ql_obsTimer = setTimeout(_applyTranslations, 60);
            }
          }).observe(_0x387d83, {
            childList: true
          });
          continue;
        case "1":
          if (_ql_observed[_0x5f0aee]) {
            return;
          }
          continue;
        case "2":
          _ql_observed[_0x5f0aee] = true;
          continue;
        case "3":
          if (!_0x387d83) {
            return;
          }
          continue;
        case "4":
          var _0x387d83 = document["getElementById"](_0x5f0aee);
          continue;
        case "5":
          var _0x50479b = {
            FDBcA: function (_0x205e0e, _0x5efea7) {
              return _0x4abe2d["BjILH"](_0x205e0e, _0x5efea7);
            }
          };
          continue;
      }
      break;
    }
  });
}
document.addEventListener("click", function (_0x271691) {
  var _0x29c71d = {
    AcwfE: "ql-lang-btn",
    klXKU: "data-lang"
  };
  var _0x3066ff = _0x271691["target"];
  if (!_0x3066ff.classList["contains"]("ql-lang-btn") && _0x3066ff["parentElement"]) {
    _0x3066ff = _0x3066ff["parentElement"];
  }
  if (_0x3066ff && _0x3066ff["classList"] && _0x3066ff.classList["contains"](_0x29c71d.AcwfE)) {
    var _0x42e845 = _0x3066ff["getAttribute"](_0x29c71d.klXKU);
    if (_0x42e845) {
      setLang(_0x42e845);
    }
  }
});
(function () {
  var _0x429e79 = {
    KOILN: "style",
    XumtZ: function (_0x5d2e5b, _0x481d0d) {
      return _0x5d2e5b + _0x481d0d;
    },
    lqREv: function (_0xd177a9, _0x2d5631) {
      return _0xd177a9 + _0x2d5631;
    },
    XibZz: function (_0x43cce4, _0x477eaf) {
      return _0x43cce4 + _0x477eaf;
    },
    obsQY: ".ql-lang-sw{display:flex;align-items:center;gap:1px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:2px;margin-right:4px;flex-shrink:0}",
    ahTeE: ".ql-lang-btn{background:none;border:none;color:rgba(255,255,255,0.4);font-size:9px;font-weight:700;padding:3px 5px;border-radius:5px;cursor:pointer;transition:background 0.15s,color 0.15s;letter-spacing:0.5px;line-height:1;font-family:inherit}",
    dJOFV: ".ql-lang-btn.ql-lang-active{background:rgba(124,90,255,0.35);color:#fff}",
    DushJ: "DOMContentLoaded"
  };
  var _0x1417a8 = document.createElement(_0x429e79["KOILN"]);
  _0x1417a8["textContent"] = _0x429e79.XumtZ(_0x429e79["lqREv"](_0x429e79["XibZz"](_0x429e79["obsQY"], _0x429e79.ahTeE), ".ql-lang-btn:hover{color:rgba(255,255,255,0.85)}"), _0x429e79["dJOFV"]);
  if (document["head"]) {
    document["head"]["appendChild"](_0x1417a8);
  } else {
    document["addEventListener"](_0x429e79["DushJ"], function () {
      document["head"].appendChild(_0x1417a8);
    });
  }
})();
try {
  chrome["storage"].local["get"](["ql_lang"], function (_0x4157e1) {
    var _0x26b0b9 = {
      SHwEc: "ql_lang",
      xCYIT: function (_0x58bbec) {
        return _0x58bbec();
      }
    };
    if (_0x4157e1 && _0x4157e1["ql_lang"] && _I18N[_0x4157e1["ql_lang"]] && _0x4157e1["ql_lang"] !== window._ql_lang) {
      window["_ql_lang"] = _0x4157e1["ql_lang"];
      try {
        sessionStorage["setItem"](_0x26b0b9["SHwEc"], _0x4157e1.ql_lang);
      } catch (_0x194b39) {}
      _applyTranslations();
    } else if (window["_ql_lang"] !== "pt") {
      _0x26b0b9.xCYIT(_applyTranslations);
    }
  });
} catch (a0_0x5225a5) {}
; /* LAST_ZONE_I18N_LANG_LOCK */
(function () {
  try {
    var saved = "";
    try {
      saved = localStorage.getItem("last_zone_lang") || localStorage.getItem("ql_lang") || "";
    } catch (err) {}
    var lang = String(saved || window._ql_lang || "en").toLowerCase() === "ar" ? "ar" : "en";
    window._ql_lang = lang;
    try {
      localStorage.setItem("last_zone_lang", lang);
      localStorage.setItem("ql_lang", lang);
      sessionStorage.setItem("ql_lang", lang);
    } catch (err) {}
    if (document && document.documentElement) {
      document.documentElement.lang = lang;
      document.documentElement.dir = "ltr";
    }
    if (document && document.body) {
      document.body.dir = "ltr";
    }
  } catch (err) {}
})(); /* /LAST_ZONE_I18N_LANG_LOCK */