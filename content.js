console.log("[ContentScript] Suhaib Abid started");
const _SB_URL = "https://jlvgubbnvzehfelkntdj.supabase.co";
const _SB_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impsdmd1YmJudnplaGZlbGtudGRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzNjE4MjMsImV4cCI6MjA5NTkzNzgyM30.hKH5dTCvsmQQD-e04X3_r-m00-mLm1IdP44MdTHarWE";
const VALIDATE_URL = _SB_URL + "/functions/v1/validate-license";
const OPTIMIZE_URL = _SB_URL + "/functions/v1/optimize-prompt";
const NOTIFICATIONS_URL = _SB_URL + "/rest/v1/notifications?select=*&order=created_at.desc&limit=20";
const PROXY_COMMAND_URL = _SB_URL + "/functions/v1/proxy-command";
const REMOVE_WATERMARK_URL = _SB_URL + "/functions/v1/remove-watermark";
const SUPABASE_ANON_KEY = _SB_ANON;
function activateBypass() {
  try {
    localStorage.setItem("__ql_bypass_active", "1");
  } catch (_0xbdf004) {}
  window.postMessage({
    type: "qlBypassState",
    active: true
  }, "*");
}
function deactivateBypass() {
  try {
    localStorage.removeItem("__ql_bypass_active");
  } catch (_0x1e399d) {}
  window.postMessage({
    type: "qlBypassState",
    active: false
  }, "*");
}
function buildSessionHeaders(_0x4c35e8) {
  return new Promise(function (_0x48eee0) {
    var _0x3fd1cd = navigator.userAgent || "";
    var _0x298437 = navigator.userAgentData && navigator.userAgentData.brands ? navigator.userAgentData.brands : [];
    var _0x5a17e6 = "";
    for (var _0xd50e3d = 0; _0xd50e3d < _0x298437.length; _0xd50e3d++) {
      if (_0xd50e3d > 0) {
        _0x5a17e6 += ", ";
      }
      _0x5a17e6 += "\"" + _0x298437[_0xd50e3d].brand + "\";v=\"" + _0x298437[_0xd50e3d].version + "\"";
    }
    var _0x253f2e = navigator.userAgentData && navigator.userAgentData.platform ? navigator.userAgentData.platform : "Windows";
    var _0x6cdaeb = navigator.userAgentData && navigator.userAgentData.mobile ? "?1" : "?0";
    var _0x32d23b = navigator.languages && navigator.languages.length ? navigator.languages.slice(0, 3).join(",") : navigator.language || "en-US";
    var _0x1ff917 = {
      "user-agent": _0x3fd1cd,
      "sec-ch-ua": _0x5a17e6,
      "sec-ch-ua-mobile": _0x6cdaeb,
      "sec-ch-ua-platform": "\"" + _0x253f2e + "\"",
      "accept-language": _0x32d23b,
      "accept-encoding": "gzip, deflate, br, zstd",
      origin: "https://lovable.dev",
      referer: "https://lovable.dev/projects/" + (_0x4c35e8 || ""),
      priority: "u=1, i",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site"
    };
    try {
      chrome.runtime.sendMessage({
        action: "getLovableCookies"
      }, function (_0x3df3db) {
        if (chrome.runtime.lastError) {
          _0x48eee0(_0x1ff917);
          return;
        }
        if (_0x3df3db && _0x3df3db.cookie) {
          _0x1ff917.cookie = _0x3df3db.cookie;
        }
        _0x48eee0(_0x1ff917);
      });
    } catch (_0x4d6b69) {
      _0x48eee0(_0x1ff917);
    }
  });
}
function escapeHtml(_0x1aefe9) {
  if (!_0x1aefe9) {
    return "";
  }
  const _0x3dfda9 = document.createElement("div");
  _0x3dfda9.textContent = String(_0x1aefe9);
  return _0x3dfda9.innerHTML;
}
function sanitizeUrl(_0x529c35) {
  if (!_0x529c35) {
    return "";
  }
  try {
    const _0x5868bd = new URL(_0x529c35);
    if (_0x5868bd.protocol === "http:" || _0x5868bd.protocol === "https:") {
      return _0x529c35;
    }
    return "";
  } catch (_0x371d8d) {
    return "";
  }
}
function decodeJwtPayload(_0x4af842) {
  try {
    const _0x2b7653 = String(_0x4af842 || "").replace(/^Bearer\s+/i, "").trim();
    const _0x235cc6 = _0x2b7653.split(".");
    if (_0x235cc6.length < 2) {
      return null;
    }
    const _0x3134d7 = _0x235cc6[1].replace(/-/g, "+").replace(/_/g, "/");
    const _0x1534cc = _0x3134d7 + "=".repeat((4 - _0x3134d7.length % 4) % 4);
    return JSON.parse(atob(_0x1534cc));
  } catch (_0x596720) {
    return null;
  }
}
function bgFetch(_0x40e512, _0x4fe080 = {}) {
  return new Promise((_0x3be8c6, _0x12dd2b) => {
    chrome.runtime.sendMessage({
      action: "proxyFetch",
      url: _0x40e512,
      method: _0x4fe080.method || "POST",
      headers: _0x4fe080.headers || {},
      body: _0x4fe080.body || null
    }, _0x573eac => {
      if (chrome.runtime.lastError) {
        console.error("[bgFetch] runtime error:", chrome.runtime.lastError.message);
        return _0x12dd2b(new Error(chrome.runtime.lastError.message));
      }
      if (!_0x573eac) {
        return _0x12dd2b(new Error("Sem resposta do background"));
      }
      if (_0x573eac.data && typeof _0x573eac.data === "object") {
        if (!_0x573eac.ok) {
          const _0x2b822b = _0x573eac.data.error || _0x573eac.data.message || _0x573eac.data.detail || JSON.stringify(_0x573eac.data);
          console.error("[bgFetch] HTTP " + _0x573eac.status + " →", _0x573eac.data);
          return _0x12dd2b(new Error("HTTP " + _0x573eac.status + ": " + _0x2b822b));
        }
        _0x3be8c6(_0x573eac.data);
      } else if (!_0x573eac.ok) {
        _0x12dd2b(new Error("Fetch failed via background (status " + _0x573eac.status + ")"));
      } else {
        _0x3be8c6(_0x573eac.data);
      }
    });
  });
}
let qlSessionId = null;
let qlHeartbeatInterval = null;
let qlUserName = null;
let qlExpiresAt = null;
let qlActivatedAt = null;
let qlLicenseStatus = null;
let qlOnlineCount = 0;
let qlMinimized = false;
let qlHeight = 520;
let qlSpeechRecognition = null;
let qlIsRecording = false;
let qlDeviceId = null;
let qlShieldActive = false;
let qlSidebarActivateTimer = null;
let qlActiveTab = "prompt";
let qlChatHistory = [];
const QL_HISTORY_KEY = "ql_chat_history";
const QL_MAX_HISTORY = 200;
function getDeviceId() {
  return getHardwareFingerprint();
}
function createUI() {
  if (document.getElementById("ql-floating")) {
    return;
  }
  chrome.storage.local.get(["ql_sidebar_mode", "ql_native_chat"], _0x20189c => {
    if (_0x20189c.ql_sidebar_mode === true) {
      console.log("[ContentScript] Sidebar mode active, skipping floating UI");
      return;
    }
    if (_0x20189c.ql_native_chat === true) {
      console.log("[ContentScript] Native chat mode active, skipping floating UI");
      return;
    }
    _buildFloatingUI();
  });
}
function _qlOpenSidePanel() {
  chrome.runtime.sendMessage({action: "openSidePanel"}, function () { if (chrome.runtime.lastError) {} });
  var _0x4d3f2e = document.createElement("div");
  _0x4d3f2e.textContent = "Click the extension icon ↗ to open the panel";
  _0x4d3f2e.style.cssText = "position:fixed;top:16px;right:16px;z-index:2147483647;background:#0f172a;color:#fff;padding:10px 16px;border-radius:8px;font-size:14px;font-family:sans-serif;pointer-events:none;box-shadow:0 4px 12px rgba(0,0,0,.4);";
  document.body.appendChild(_0x4d3f2e);
  setTimeout(function () {
    if (_0x4d3f2e.parentNode) {
      _0x4d3f2e.parentNode.removeChild(_0x4d3f2e);
    }
  }, 4000);
}
function _buildFloatingUI() {
  if (document.getElementById("ql-floating")) {
    return;
  }
  const _0x6b8acf = document.createElement("div");
  _0x6b8acf.id = "ql-floating";
  const _0x279530 = Math.max(10, window.innerWidth - 400);
  _0x6b8acf.style.left = _0x279530 + "px";
  _0x6b8acf.style.top = "80px";
  document.body.appendChild(_0x6b8acf);
  _0x6b8acf.addEventListener("click", function (_0x1bec18) {
    var _0x479c62 = _0x1bec18.target;
    while (_0x479c62 && _0x479c62 !== _0x6b8acf) {
      if (_0x479c62.id === "ql-validate-btn") {
        validateLicense();
        return;
      }
      if (_0x479c62.id === "ql-sidepanel-btn") {
        _qlOpenSidePanel();
        return;
      }
      _0x479c62 = _0x479c62.parentElement;
    }
  });
  deactivateBypass();
  if (window.__LZ_INIT_DONE === false) { showLicenseGate(_0x6b8acf); return; }
  chrome.storage.local.get(["ql_license_valid", "ql_license_key", "ql_minimized", "ql_height", "ql_dark_mode", "ql_user_name", "ql_expires_at", "ql_activated_at", "ql_license_status", "ql_session_id"], async _0x58573b => {
    qlMinimized = _0x58573b.ql_minimized || false;
    qlHeight = _0x58573b.ql_height || 520;
    if (_0x58573b.ql_dark_mode === false) {
      _0x6b8acf.classList.add("ql-light");
    }
    if (qlMinimized) {
      _0x6b8acf.classList.add("ql-minimized");
    }
    qlDeviceId = await getDeviceId();
    if (_0x58573b.ql_license_valid) {
      qlUserName = _0x58573b.ql_user_name || null;
      qlExpiresAt = _0x58573b.ql_expires_at || null;
      qlActivatedAt = _0x58573b.ql_activated_at || null;
      qlLicenseStatus = _0x58573b.ql_license_status || null;
      qlSessionId = _0x58573b.ql_session_id || null;
      showMainUI(_0x6b8acf);
      activateBypass();
      if (_0x58573b.ql_license_key) {
        const _0x561f84 = _0x5bd83b => {
          fetch(VALIDATE_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + _SB_ANON
            },
            body: JSON.stringify({
              license_key: _0x58573b.ql_license_key,
              session_id: _0x58573b.ql_session_id,
              heartbeat: true,
              device_id: qlDeviceId
            })
          }).then(_0x2d5405 => _0x2d5405.json()).then(_0x188da9 => {
            console.log("[QL] Startup heartbeat (tentativa " + _0x5bd83b + "):", JSON.stringify(_0x188da9));
            if (_0x188da9.valid) {
              qlUserName = _0x188da9.user_name || qlUserName;
              qlExpiresAt = _0x188da9.expires_at || qlExpiresAt;
              qlActivatedAt = _0x188da9.activated_at || qlActivatedAt;
              qlLicenseStatus = _0x188da9.status || qlLicenseStatus;
              qlSessionId = _0x188da9.session_id || qlSessionId;
  chrome.storage.local.set({
        ql_user_name: qlUserName,
        ql_expires_at: qlExpiresAt,
        ql_activated_at: qlActivatedAt,
        ql_license_status: qlLicenseStatus,
        ql_session_id: qlSessionId
      }, function () {});
              activateBypass();
              const _0x4b0df0 = document.querySelector(".ql-profile-name");
              if (_0x4b0df0) {
                _0x4b0df0.textContent = qlUserName || "User";
              }
              updateTrialCountdown();
            } else if (_0x188da9.reason === "device_conflict") {
              if (_0x5bd83b < 2) {
                setTimeout(() => _0x561f84(_0x5bd83b + 1), 5000);
                return;
              }
              chrome.storage.local.remove(["ql_license_valid", "ql_license_key", "ql_session_id", "ql_user_name", "ql_expires_at", "ql_activated_at", "ql_license_status"], function () {});
              deactivateBypass();
              const _0x5d3d5f = document.getElementById("ql-floating");
              if (_0x5d3d5f) {
                showLicenseGate(_0x5d3d5f);
              }
              setTimeout(() => showCustomAlert("Acesso Negado", _0x188da9.message), 500);
            } else if (_0x188da9.reason === "rate_limited") {
              if (_0x5bd83b < 2) {
                setTimeout(() => _0x561f84(_0x5bd83b + 1), 30000);
                return;
              }
            } else {
              chrome.storage.local.remove(["ql_license_valid", "ql_license_key", "ql_session_id", "ql_user_name", "ql_expires_at", "ql_activated_at", "ql_license_status"], function () {});
              deactivateBypass();
              const _0x28bc8b = document.getElementById("ql-floating");
              if (_0x28bc8b) {
                showLicenseGate(_0x28bc8b);
              }
            }
          }).catch(() => {
            if (_0x5bd83b < 2) {
              setTimeout(() => _0x561f84(_0x5bd83b + 1), 10000);
            } else {
              deactivateBypass();
            }
          });
        };
        _0x561f84(1);
      }
    } else {
      showLicenseGate(_0x6b8acf);
    }
    setupDrag();
    setupResize();
  });
}
function showLicenseGate(_0x8aa135) {
  _0x8aa135.innerHTML = templateLicenseGate(qlMinimized);
  setTimeout(() => {
    const _0xc13711 = document.getElementById("ql-buy-license-btn");
    if (_0xc13711) {
      _0xc13711.addEventListener("click", () => window.open("https://wa.me/923497641385", "_blank", "noopener,noreferrer"));
    }
    setupMinimize();
  }, 50);
}
async function validateLicense() {
  const _0x5455a8 = document.getElementById("ql-license-input");
  const _0x57489b = document.getElementById("ql-license-log");
  const _0x423b8c = _0x5455a8 ? _0x5455a8.value.trim().toUpperCase() : "";
  if (!_0x423b8c) {
    if (_0x57489b) {
      _0x57489b.className = "ql-log-error";
      _0x57489b.innerText = "⚠ Insira uma chave";
    }
    return;
  }
  if (_0x57489b) {
    _0x57489b.className = "ql-log-info";
    _0x57489b.innerHTML = SVG_ICONS.clock + " Validando...";
  }
  try {
    if (!qlDeviceId) {
      qlDeviceId = await getDeviceId();
    }
    var _0x939f2a = null;
    if (typeof LZ !== "undefined" && LZ.validate) {
      _0x939f2a = await LZ.validate(_0x423b8c);
    }
    if (_0x939f2a) {
      qlExpiredHandled = false;
      qlSessionId = _0x939f2a.lz_session;
      qlUserName = _0x939f2a.lz_user;
      qlExpiresAt = _0x939f2a.lz_expires;
      qlActivatedAt = _0x939f2a.lz_activated || new Date().toISOString();
      qlLicenseStatus = _0x939f2a.lz_status || "active";
      qlOnlineCount = _0x939f2a.lz_online || 0;
      chrome.storage.local.set({
        ql_license_valid: true,
        ql_license_key: _0x423b8c,
        ql_session_id: qlSessionId,
        ql_user_name: qlUserName,
        ql_expires_at: qlExpiresAt,
        ql_activated_at: qlActivatedAt,
        ql_license_status: qlLicenseStatus
      }, () => {
        activateBypass();
        if (_0x57489b) {
          _0x57489b.className = "ql-log-success";
          _0x57489b.innerText = "✓ License activated successfully!";
        }
        try { if (typeof QLSounds !== "undefined") QLSounds.activation(); } catch (_0x297e02) {}
        setTimeout(() => {
          const _0x561d0b = document.getElementById("ql-floating");
          if (_0x561d0b) showMainUI(_0x561d0b);
          startHeartbeat(_0x423b8c);
        }, 800);
      });
    } else if (_0x57489b) {
      _0x57489b.className = "ql-log-error";
      _0x57489b.innerText = "✗ Invalid or expired license key";
    }
  } catch (_0x5effbf) {
    if (_0x57489b) {
      _0x57489b.className = "ql-log-error";
      _0x57489b.innerText = "✗ Erro de conexão";
    }
  }
}
function showMainUI(_0x336dbd) {
  const _0x2dd5eb = qlUserName || "User";
  const _0x3bcd32 = qlLicenseStatus === "trial" ? "<span class=\"ql-status-badge ql-badge-test\">TEST</span>" : "<span class=\"ql-status-badge ql-badge-pro\">ATIVO</span>";
  _0x336dbd.innerHTML = templateMainUI(_0x2dd5eb, _0x3bcd32, qlMinimized);
  _0x336dbd.style.height = qlHeight + "px";
  var _0xlogoutBtnHtml = document.getElementById("ql-logout-btn");
  if (!_0xlogoutBtnHtml) {
    var _0xheaderRight = _0x336dbd.querySelector(".ql-header-right");
    if (_0xheaderRight) {
      var _0xbtn = document.createElement("button");
      _0xbtn.id = "ql-logout-btn";
      _0xbtn.className = "ql-icon-btn";
      _0xbtn.title = "Sign Out";
      _0xbtn.innerHTML = SVG_ICONS.logout;
      _0xheaderRight.appendChild(_0xbtn);
    }
  }
  setTimeout(() => {
    updateSyncStatus();
    setupSend();
    setupStorageWatch();
    setupMinimize();
    setupSuggestionChips();
    setupWatermarkButton();
    updateTrialCountdown();
    setupDrag();
    setupResize();
    setupDarkMode();
    setupSpeech();
    setupNotifications();
    setupModoPlano();
    setupFileAttachment();
    setupShield();
    setupTabs();
    loadChatHistory();
    setupNativeChatButton();
    setupClipboardPaste();
    setupDownloadProject();
    checkResellerRolePopup();
    chrome.storage.local.get(["ql_license_key", "ql_session_id"], _0x330371 => {
      if (_0x330371.ql_license_key) {
        qlSessionId = _0x330371.ql_session_id || qlSessionId;
        startHeartbeat(_0x330371.ql_license_key);
      }
    });
    var _0x418739 = document.getElementById("ql-sidepanel-btn");
    if (_0x418739) {
      _0x418739.addEventListener("click", function (_0x5b7c14) {
        _0x5b7c14.stopPropagation();
        _qlOpenSidePanel();
      });
    }
    const _0x159604 = document.getElementById("ql-logout-btn");
    if (_0x159604) {
      _0x159604.addEventListener("click", () => {
        if (qlHeartbeatInterval) {
          clearInterval(qlHeartbeatInterval);
        }
        chrome.storage.local.remove(["ql_license_valid", "ql_license_key", "ql_session_id", "ql_user_name", "ql_expires_at", "ql_activated_at", "ql_license_status", "lz_valid", "lz_key", "lz_session", "lz_user", "lz_expires", "lz_activated", "lz_status", "lz_plan", "lz_online"], () => {
          deactivateBypass();
          qlUserName = null;
          qlExpiresAt = null;
          qlActivatedAt = null;
          qlLicenseStatus = null;
          qlSessionId = null;
          showLicenseGate(_0x336dbd);
        });
      });
    }
  }, 30);
}
function showCustomAlert(_0x3bee6c, _0xcf8e35) {
  try {
    if (typeof QLSounds !== "undefined" && QLSounds.errorFromMessage) {
      var _0x2febad = (_0x3bee6c || "") + " " + (_0xcf8e35 || "");
      if (/erro|falha|negad|inv[áa]lid|expir|limite|payment|rate|token|cr[eé]dito|sess/i.test(_0x2febad)) {
        QLSounds.errorFromMessage(_0x2febad);
      }
    }
  } catch (_0xb2fc56) {}
  const _0x5195ba = document.getElementById("ql-custom-alert");
  if (!_0x5195ba) {
    return;
  }
  const _0x944d21 = _0x5195ba.querySelector(".ql-alert-title");
  const _0x2553ff = _0x5195ba.querySelector(".ql-alert-message");
  const _0x52210d = _0x5195ba.querySelector(".ql-alert-ok-btn");
  if (_0x944d21) {
    _0x944d21.textContent = _0x3bee6c;
  }
  if (_0x2553ff) {
    _0x2553ff.textContent = _0xcf8e35;
  }
  _0x5195ba.style.display = "flex";
  if (_0x52210d) {
    _0x52210d.onclick = () => {
      _0x5195ba.style.display = "none";
    };
  }
  setTimeout(() => {
    _0x5195ba.style.display = "none";
  }, 4000);
}
function setupOptimize() {
}
function setupSpeech() {
  const _0xfd8793 = document.getElementById("ql-speech-btn");
  if (!_0xfd8793) {
    return;
  }
  const _0x134c54 = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!_0x134c54) {
    _0xfd8793.title = "Speech não suportado neste navegador";
    _0xfd8793.style.opacity = "0.4";
    _0xfd8793.style.cursor = "not-allowed";
    return;
  }
  _0xfd8793.addEventListener("click", _0x589735 => {
    _0x589735.preventDefault();
    _0x589735.stopPropagation();
    if (qlIsRecording && qlSpeechRecognition) {
      qlSpeechRecognition.stop();
      return;
    }
    try {
      qlSpeechRecognition = new _0x134c54();
      qlSpeechRecognition.lang = "pt-BR";
      qlSpeechRecognition.continuous = true;
      qlSpeechRecognition.interimResults = true;
      qlSpeechRecognition.maxAlternatives = 1;
      let _0x8b60f9 = "";
      const _0x4f3590 = document.getElementById("ql-msg");
      qlSpeechRecognition.onstart = () => {
        qlIsRecording = true;
        _0xfd8793.classList.add("ql-recording");
        _0x8b60f9 = _0x4f3590 ? _0x4f3590.value : "";
        console.log("[QL Speech] Gravação iniciada");
      };
      qlSpeechRecognition.onresult = _0x31006c => {
        let _0x4ecc59 = "";
        for (let _0x15f6c4 = _0x31006c.resultIndex; _0x15f6c4 < _0x31006c.results.length; _0x15f6c4++) {
          const _0x12a6e1 = _0x31006c.results[_0x15f6c4][0].transcript;
          if (_0x31006c.results[_0x15f6c4].isFinal) {
            _0x8b60f9 += _0x12a6e1 + " ";
          } else {
            _0x4ecc59 += _0x12a6e1;
          }
        }
        if (_0x4f3590) {
          _0x4f3590.value = _0x8b60f9 + _0x4ecc59;
        }
      };
      qlSpeechRecognition.onerror = _0x435269 => {
        console.warn("[QL Speech] Erro:", _0x435269.error);
        qlIsRecording = false;
        _0xfd8793.classList.remove("ql-recording");
        if (_0x435269.error === "not-allowed") {
          showCustomAlert("Permissão Negada", "Permita o acesso ao microfone nas configurações do navegador.");
        } else if (_0x435269.error === "no-speech") {
          showCustomAlert("Sem Áudio", "Nenhuma fala detectada. Tente novamente.");
        } else if (_0x435269.error !== "aborted") {
          showCustomAlert("Erro de Voz", "Erro: " + _0x435269.error);
        }
      };
      qlSpeechRecognition.onend = () => {
        qlIsRecording = false;
        _0xfd8793.classList.remove("ql-recording");
        if (_0x4f3590) {
          _0x4f3590.value = _0x8b60f9.trim();
        }
        console.log("[QL Speech] Gravação finalizada");
      };
      qlSpeechRecognition.start();
    } catch (_0x479f99) {
      console.error("[QL Speech] Falha ao iniciar:", _0x479f99);
      qlIsRecording = false;
      _0xfd8793.classList.remove("ql-recording");
      showCustomAlert("Erro", "Não foi possível iniciar o reconhecimento de voz.");
    }
  });
}
function setupNotifications() {
  const _0x35d906 = document.querySelector(".ql-notif-btn");
  const _0x3786ae = document.getElementById("ql-notif-panel");
  const _0x4779ad = document.getElementById("ql-notif-close");
  if (!_0x35d906 || !_0x3786ae) {
    return;
  }
  _0x35d906.addEventListener("click", _0xd00e9f => {
    _0xd00e9f.stopPropagation();
    const _0x12c440 = _0x3786ae.style.display !== "none";
    _0x3786ae.style.display = _0x12c440 ? "none" : "block";
    if (!_0x12c440) {
      loadNotifications();
    }
  });
  if (_0x4779ad) {
    _0x4779ad.addEventListener("click", _0x5ec495 => {
      _0x5ec495.stopPropagation();
      _0x3786ae.style.display = "none";
    });
  }
  checkUnreadNotifications();
}
async function loadNotifications() {
  const _0x4d5b11 = document.getElementById("ql-notif-list");
  if (!_0x4d5b11) {
    return;
  }
  _0x4d5b11.innerHTML = "<p class=\"ql-notif-empty\">Carregando...</p>";
  try {
    const _0xda05a4 = await bgFetch(NOTIFICATIONS_URL, {
      method: "GET",
      headers: {
        apikey: SUPABASE_ANON_KEY
      }
    });
    if (!_0xda05a4 || _0xda05a4.length === 0) {
      _0x4d5b11.innerHTML = "<p class=\"ql-notif-empty\">Nenhuma notificação.</p>";
      return;
    }
    const _0x39e030 = _0xda05a4.map(_0x341ed2 => _0x341ed2.id);
    chrome.storage.local.set({ql_read_notifs: _0x39e030}, function () {});
    const _0xa66880 = document.querySelector(".ql-notif-badge");
    if (_0xa66880) {
      _0xa66880.style.display = "none";
    }
    _0x4d5b11.innerHTML = _0xda05a4.map(_0x5303a4 => {
      const _0x435cbe = new Date(_0x5303a4.created_at).toLocaleDateString("pt-BR");
      const _0x10d4b2 = sanitizeUrl(_0x5303a4.link);
      const _0xc03de1 = _0x10d4b2 ? "<a href=\"" + escapeHtml(_0x10d4b2) + "\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ql-notif-link\">Abrir link →</a>" : "";
      return "<div class=\"ql-notif-item\"><div class=\"ql-notif-item-title\">" + escapeHtml(_0x5303a4.title) + "</div><div class=\"ql-notif-item-msg\">" + escapeHtml(_0x5303a4.message) + "</div>" + _0xc03de1 + "<div class=\"ql-notif-item-date\">" + _0x435cbe + "</div></div>";
    }).join("");
  } catch (_0x463903) {
    _0x4d5b11.innerHTML = "<p class=\"ql-notif-empty\">Erro ao carregar.</p>";
  }
}
async function checkUnreadNotifications() {
  try {
    const _0x20ec2d = await bgFetch(NOTIFICATIONS_URL, {
      method: "GET",
      headers: {
        apikey: SUPABASE_ANON_KEY
      }
    });
    if (!_0x20ec2d || _0x20ec2d.length === 0) {
      return;
    }
    chrome.storage.local.get(["ql_read_notifs"], _0x1ece58 => {
      const _0x59a97f = _0x1ece58.ql_read_notifs || [];
      const _0x18fecf = _0x20ec2d.filter(_0xb2d39e => !_0x59a97f.includes(_0xb2d39e.id)).length;
      const _0x25abb8 = document.querySelector(".ql-notif-badge");
      if (_0x25abb8) {
        if (_0x18fecf > 0) {
          _0x25abb8.textContent = _0x18fecf;
          _0x25abb8.style.display = "flex";
        } else {
          _0x25abb8.style.display = "none";
        }
      }
    });
  } catch (_0x5cdeb4) {}
}
function setupSuggestionChips() {
  const _0x1b86d9 = document.getElementById("ql-chips");
  if (!_0x1b86d9) {
    return;
  }
  PROMPT_TEMPLATES.forEach(_0x5a7d4d => {
    const _0x383bfb = document.createElement("button");
    _0x383bfb.className = "ql-chip";
    _0x383bfb.innerHTML = _0x5a7d4d.icon + " " + _0x5a7d4d.label;
    _0x383bfb.title = _0x5a7d4d.prompt;
    _0x383bfb.addEventListener("click", () => {
      const _0x38443c = document.getElementById("ql-msg");
      if (_0x38443c) {
        _0x38443c.value = _0x5a7d4d.prompt;
      }
    });
    _0x1b86d9.appendChild(_0x383bfb);
  });
}
var WATERMARK_PROMPT = "use css para ocultar completamente o badge lovable (Made with Lovable)";
function setupWatermarkButton() {
  var _0x46d75c = document.getElementById("ql-remove-watermark");
  if (!_0x46d75c) {
    return;
  }
  _0x46d75c.addEventListener("click", async function () {
    var _0x2eba75 = document.getElementById("ql-log");
    _0x46d75c.disabled = true;
    _0x46d75c.textContent = "⏳ Sending...";
    try {
      await sendNativeToLovable(WATERMARK_PROMPT);
      if (_0x2eba75) {
        _0x2eba75.className = "ql-log-success";
        _0x2eba75.innerText = "✓ Prompt enviado! Aguarde a Lovable aplicar o CSS.";
      }
    } catch (_0x223165) {
      if (_0x2eba75) {
        _0x2eba75.className = "ql-log-error";
        _0x2eba75.innerText = "✗ " + (_0x223165.message || _0x223165);
      }
    } finally {
      _0x46d75c.disabled = false;
      _0x46d75c.textContent = "Remove Watermark";
    }
  });
}
function updateTrialCountdown() {
  if (!qlExpiresAt) {
    return;
  }
  const _0x5474c1 = document.getElementById("ql-trial-countdown");
  if (!_0x5474c1) {
    return;
  }
  _0x5474c1.style.display = "block";
  const _0x57a746 = Date.now();
  function _0x1cd547() {
    const _0xbd2076 = new Date(qlExpiresAt).getTime();
    const _0x1e361b = Math.max(_0xbd2076 - _0x57a746, 3600000);
    const _0x4efb3a = _0xbd2076 - Date.now();
    if (_0x4efb3a <= 0) {
      _0x5474c1.innerHTML = "<span class=\"ql-countdown-expired\">" + t("countdown.expired") + "</span><div class=\"ql-trial-bar\"><div class=\"ql-trial-bar-fill ql-bar-expired\" style=\"width:0%\"></div></div>";
      handleLicenseExpired();
      return;
    }
    const _0x27be24 = Math.floor(_0x4efb3a / 86400000);
    const _0x1526d3 = Math.floor(_0x4efb3a % 86400000 / 3600000);
    const _0x58a70b = Math.floor(_0x4efb3a % 3600000 / 60000);
    const _0x30d47f = Math.floor(_0x4efb3a % 60000 / 1000);
    const _0x3d80c7 = Math.max(0, Math.min(100, _0x4efb3a / _0x1e361b * 100));
    let _0x479741 = "";
    if (_0x27be24 > 0) {
      _0x479741 = _0x27be24 + "d " + _0x1526d3 + "h " + _0x58a70b + "m";
    } else if (_0x1526d3 > 0) {
      _0x479741 = _0x1526d3 + "h " + _0x58a70b + "m " + String(_0x30d47f).padStart(2, "0") + "s";
    } else {
      _0x479741 = _0x58a70b + ":" + String(_0x30d47f).padStart(2, "0");
    }
    const _0x4f76bd = _0x3d80c7 < 20 ? " ql-bar-urgent" : "";
    const _0x21dda2 = qlLicenseStatus === "trial" ? t("countdown.trial") : t("countdown.license");
    _0x5474c1.innerHTML = "<div class=\"ql-countdown-row\"><span class=\"ql-countdown-icon\">" + SVG_ICONS.clock + "</span><span class=\"ql-countdown-label\">" + _0x21dda2 + "</span><span class=\"ql-countdown-time\">" + _0x479741 + "</span></div><div class=\"ql-trial-bar\"><div class=\"ql-trial-bar-fill" + _0x4f76bd + "\" style=\"width:" + _0x3d80c7 + "%\"></div></div>";
  }
  _0x1cd547();
  if (window.qlCountdownInterval) {
    clearInterval(window.qlCountdownInterval);
  }
  window.qlCountdownInterval = setInterval(_0x1cd547, 1000);
}
function setupMinimize() {
  const _0x51a08b = document.getElementById("ql-minimize");
  if (!_0x51a08b) {
    return;
  }
  _0x51a08b.addEventListener("click", _0x51786b => {
    _0x51786b.stopPropagation();
    const _0x4cfe0f = document.getElementById("ql-floating");
    if (!_0x4cfe0f) {
      return;
    }
    qlMinimized = !qlMinimized;
    _0x4cfe0f.classList.toggle("ql-minimized", qlMinimized);
    _0x51a08b.textContent = qlMinimized ? "□" : "−";
    chrome.storage.local.set({ql_minimized: qlMinimized}, function () {});
  });
}
function setupDarkMode() {
  const _0x4ba8e7 = document.querySelector(".ql-icon-btn[title=\"Tema\"]");
  if (!_0x4ba8e7) {
    return;
  }
  _0x4ba8e7.addEventListener("click", _0x35c0c8 => {
    _0x35c0c8.stopPropagation();
    const _0x5a77cc = document.getElementById("ql-floating");
    if (!_0x5a77cc) {
      return;
    }
    const _0x36c811 = _0x5a77cc.classList.toggle("ql-light");
    chrome.storage.local.set({ql_dark_mode: !_0x36c811}, function () {});
  });
}
function setupModoPlano() {
  const _0x2a9ee8 = document.getElementById("ql-modo-plano");
  if (!_0x2a9ee8) {
    return;
  }
  chrome.storage.local.get(["ql_modo_plano"], _0x1ef82d => {
    if (_0x1ef82d.ql_modo_plano === true) {
      _0x2a9ee8.checked = true;
    }
  });
  _0x2a9ee8.addEventListener("change", () => {
    chrome.storage.local.set({ql_modo_plano: _0x2a9ee8.checked}, function () {});
    if (_0x2a9ee8.checked) {
      showModoPlanoAlert();
    }
  });
}
function showModoPlanoAlert() {
  const _0x82aea7 = document.querySelector(".ql-modo-plano-overlay");
  if (_0x82aea7) {
    _0x82aea7.remove();
  }
  const _0x26861f = document.createElement("div");
  _0x26861f.className = "ql-modo-plano-overlay";
  _0x26861f.innerHTML = "<div class=\"ql-modo-plano-modal\"><div class=\"ql-modo-plano-icon\">⚠️</div><div class=\"ql-modo-plano-title\">Attention - Plan Mode</div><div class=\"ql-modo-plano-body\">O <strong>Modo Plano/Pensar</strong> pode consumir créditos, mas oferece um bom auxílio. Use com moderação!</div><div class=\"ql-modo-plano-steps\"><div class=\"ql-modo-plano-step\"><span class=\"ql-modo-plano-step-num\">1</span><span class=\"ql-modo-plano-step-text\">Ative o <strong>Modo Plano</strong> para gerar um plano.</span></div><div class=\"ql-modo-plano-step\"><span class=\"ql-modo-plano-step-num\">2</span><span class=\"ql-modo-plano-step-text\">No Lovable, <strong>não clique no botão Aprovar</strong>; apenas copie o novo plano.</span></div><div class=\"ql-modo-plano-step\"><span class=\"ql-modo-plano-step-num\">3</span><span class=\"ql-modo-plano-step-text\">Paste the copied plan into the extension prompt.</span></div><div class=\"ql-modo-plano-step\"><span class=\"ql-modo-plano-step-num\">4</span><span class=\"ql-modo-plano-step-text\"><strong>Turn off Plan Mode</strong> and send it via the extension; this way no extra credits will be consumed.</span></div><div class=\"ql-modo-plano-check\"><input type=\"checkbox\" id=\"ql-modo-plano-dismiss\" /><label for=\"ql-modo-plano-dismiss\">Não mostrar novamente</label><button class=\"ql-modo-plano-btn\" id=\"ql-modo-plano-ok\">Entendi!</button>";
  const _0x51def3 = document.getElementById("ql-floating");
  if (_0x51def3) {
    _0x51def3.appendChild(_0x26861f);
  } else {
    document.body.appendChild(_0x26861f);
  }
  requestAnimationFrame(() => _0x26861f.classList.add("ql-modo-plano-visible"));
  const _0x2588c8 = () => {
    _0x26861f.classList.remove("ql-modo-plano-visible");
    setTimeout(() => _0x26861f.remove(), 180);
  };
  const _0x118184 = _0x26861f.querySelector("#ql-modo-plano-ok");
  if (_0x118184) {
    _0x118184.addEventListener("click", () => {
      const _0x5876dc = _0x26861f.querySelector("#ql-modo-plano-dismiss");
      if (_0x5876dc && _0x5876dc.checked) {
    chrome.storage.local.set({ql_modo_plano_alert_dismissed: true}, function () {});
      }
      _0x2588c8();
    });
  }
  _0x26861f.addEventListener("click", _0x1f7946 => {
    if (_0x1f7946.target === _0x26861f) {
      _0x2588c8();
    }
  });
}
function setupShield() {
  const _0x16db7a = document.getElementById("ql-shield-btn");
  if (!_0x16db7a) {
    return;
  }
  chrome.storage.local.get(["ql_shield_active"], _0x27a37c => {
    if (_0x27a37c.ql_shield_active === true) {
      qlShieldActive = true;
      _0x16db7a.classList.add("ql-shield-active");
      const _0x5352ac = document.getElementById("ql-shield-label");
      if (_0x5352ac) {
        _0x5352ac.textContent = "Disable Shield";
      }
      injectShieldOverlay();
    }
  });
  _0x16db7a.addEventListener("click", () => {
    qlShieldActive = !qlShieldActive;
    chrome.storage.local.set({ql_shield_active: qlShieldActive}, function () {});
    const _0x360a8e = document.getElementById("ql-shield-label");
    if (qlShieldActive) {
      _0x16db7a.classList.add("ql-shield-active");
      if (_0x360a8e) {
        _0x360a8e.textContent = "Desativar Escudo";
      }
      injectShieldOverlay();
      showCustomAlert("Shield Activated 🛡️", "O input do Lovable está bloqueado. Use a extensão para enviar prompts.");
    } else {
      _0x16db7a.classList.remove("ql-shield-active");
      if (_0x360a8e) {
        _0x360a8e.textContent = "Enable Shield";
      }
      removeShieldOverlay();
      showCustomAlert("Escudo Desativado", "O input do Lovable está liberado novamente.");
    }
  });
}
function injectShieldOverlay() {
  if (document.getElementById("ql-shield-overlay")) {
    return;
  }
  const _0x281b58 = document.querySelector("form#chat-input");
  if (!_0x281b58) {
    setTimeout(injectShieldOverlay, 1000);
    return;
  }
  const _0x41ccf4 = getComputedStyle(_0x281b58).position;
  if (_0x41ccf4 === "static") {
    _0x281b58.style.position = "relative";
  }
  const _0x3f66a8 = document.createElement("div");
  _0x3f66a8.id = "ql-shield-overlay";
  _0x3f66a8.className = "ql-shield-overlay";
  _0x3f66a8.innerHTML = "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"/></svg><span class=\"ql-shield-overlay-text\">🛡️ Protected by Gringow Extension</span><span class=\"ql-shield-overlay-sub\">Use a extensão para enviar prompts</span>";
  _0x3f66a8.addEventListener("click", _0x1d70a4 => {
    _0x1d70a4.preventDefault();
    _0x1d70a4.stopPropagation();
    _0x1d70a4.stopImmediatePropagation();
  }, true);
  _0x3f66a8.addEventListener("mousedown", _0x1ddca9 => {
    _0x1ddca9.preventDefault();
    _0x1ddca9.stopPropagation();
    _0x1ddca9.stopImmediatePropagation();
  }, true);
  _0x3f66a8.addEventListener("keydown", _0x28411a => {
    _0x28411a.preventDefault();
    _0x28411a.stopPropagation();
  }, true);
  _0x281b58.appendChild(_0x3f66a8);
  const _0x3eb45c = _0x281b58.querySelectorAll("input, button, textarea, [contenteditable]");
  _0x3eb45c.forEach(_0x5d20b4 => {
    if (_0x5d20b4.id !== "ql-shield-overlay") {
      _0x5d20b4.dataset.qlShieldDisabled = _0x5d20b4.disabled || "";
      _0x5d20b4.dataset.qlShieldTabindex = _0x5d20b4.getAttribute("tabindex") || "";
      _0x5d20b4.setAttribute("tabindex", "-1");
      if (_0x5d20b4.tagName !== "DIV") {
        _0x5d20b4.disabled = true;
      }
      if (_0x5d20b4.contentEditable === "true") {
        _0x5d20b4.contentEditable = "false";
        _0x5d20b4.dataset.qlShieldEditable = "true";
      }
    }
  });
}
function removeShieldOverlay() {
  const _0x4e1ee0 = document.getElementById("ql-shield-overlay");
  if (_0x4e1ee0) {
    _0x4e1ee0.remove();
  }
  const _0x388094 = document.querySelector("form#chat-input");
  if (!_0x388094) {
    return;
  }
  const _0x25d76b = _0x388094.querySelectorAll("[data-ql-shield-disabled]");
  _0x25d76b.forEach(_0x45001c => {
    const _0x27668d = _0x45001c.dataset.qlShieldDisabled;
    if (_0x27668d === "true") {
      _0x45001c.disabled = true;
    } else if (_0x27668d === "" || _0x27668d === "false") {
      _0x45001c.disabled = false;
    }
    delete _0x45001c.dataset.qlShieldDisabled;
    const _0xd59d99 = _0x45001c.dataset.qlShieldTabindex;
    if (_0xd59d99) {
      _0x45001c.setAttribute("tabindex", _0xd59d99);
    } else {
      _0x45001c.removeAttribute("tabindex");
    }
    delete _0x45001c.dataset.qlShieldTabindex;
    if (_0x45001c.dataset.qlShieldEditable === "true") {
      _0x45001c.contentEditable = "true";
      delete _0x45001c.dataset.qlShieldEditable;
    }
  });
}
let qlHbConflictCount = 0;
let qlHbNetworkFailCount = 0;
function startHeartbeat(_0x4c7845) {
  if (qlHeartbeatInterval) {
    clearInterval(qlHeartbeatInterval);
  }
  qlHbConflictCount = 0;
  qlHbNetworkFailCount = 0;
  qlHeartbeatInterval = setInterval(async () => {
    try {
      var _0xa1794d = null;
      if (typeof LZ !== "undefined" && LZ.heartbeat) {
        _0xa1794d = await LZ.heartbeat(_0x4c7845);
      }
      if (!_0xa1794d) {
        _0xa1794d = { valid: false, message: "Heartbeat failed" };
      }
      if (!_0xa1794d.valid) {
        const _0x381c52 = _0xa1794d.reason === "device_conflict";
        const _0x3f176c = _0xa1794d.reason === "expired" || _0xa1794d.reason === "suspended" || _0xa1794d.message && (_0xa1794d.message.includes("expirada") || _0xa1794d.message.includes("suspensa"));
        if (_0x381c52) {
          qlHbConflictCount++;
          if (qlHbConflictCount < 2) {
            return;
          }
        }
        if (_0x381c52 || _0x3f176c) {
          clearInterval(qlHeartbeatInterval);
          deactivateBypass();
        chrome.storage.local.remove(["lz_valid", "lz_key", "lz_session", "lz_user", "lz_expires", "lz_activated", "lz_status", "lz_plan", "lz_online", "ql_license_valid", "ql_license_key", "ql_session_id", "ql_user_name", "ql_expires_at", "ql_activated_at", "ql_license_status"], () => {
            const _0x178c9f = document.getElementById("ql-floating");
            if (_0x178c9f) {
              showLicenseGate(_0x178c9f);
            }
            if (_0x381c52) {
              setTimeout(() => showCustomAlert("Acesso Negado", _0xa1794d.message), 500);
            }
          });
        }
        return;
      }
      qlHbConflictCount = 0;
      qlHbNetworkFailCount = 0;
      qlOnlineCount = _0xa1794d.online_count || 0;
      const _0x5a77e6 = document.getElementById("ql-online-count");
      if (_0x5a77e6) {
        _0x5a77e6.textContent = qlOnlineCount;
      }
      if (_0xa1794d.expires_at) {
        qlExpiresAt = _0xa1794d.expires_at;
      }
      if (_0xa1794d.status) {
        qlLicenseStatus = _0xa1794d.status;
      }
      if (_0xa1794d.activated_at) {
        qlActivatedAt = _0xa1794d.activated_at;
      }
  chrome.storage.local.set({
      ql_license_status: qlLicenseStatus,
      ql_expires_at: qlExpiresAt,
      ql_activated_at: qlActivatedAt
    }, function () {});
      if (_0xa1794d.user_name) {
        qlUserName = _0xa1794d.user_name;
        chrome.storage.local.set({ql_user_name: qlUserName}, function () {});
        const _0x16deb4 = document.querySelector(".ql-profile-name");
        if (_0x16deb4) {
          _0x16deb4.textContent = _0xa1794d.user_name;
        }
      }
    } catch (_0x2af0f2) {
      console.warn("[QL] Heartbeat error", _0x2af0f2);
      qlHbNetworkFailCount++;
      if (qlHbNetworkFailCount >= 5) {
        deactivateBypass();
        qlHbNetworkFailCount = 0;
      }
    }
  }, 60000);
}
let qlExpiredHandled = false;
function handleLicenseExpired() {
  if (qlExpiredHandled) {
    return;
  }
  qlExpiredHandled = true;
  if (qlHeartbeatInterval) {
    clearInterval(qlHeartbeatInterval);
  }
  if (window.qlCountdownInterval) {
    clearInterval(window.qlCountdownInterval);
  }
  const _0x5ab37d = document.createElement("div");
  _0x5ab37d.className = "ql-sweetalert-overlay";
  _0x5ab37d.innerHTML = templateExpiredOverlay();
  const _0xfe25ec = document.getElementById("ql-floating");
  if (_0xfe25ec) {
    _0xfe25ec.appendChild(_0x5ab37d);
  }
  requestAnimationFrame(() => _0x5ab37d.classList.add("ql-sweetalert-visible"));
  const _0x209e0f = _0x5ab37d.querySelector("#ql-sweetalert-close");
  if (_0x209e0f) {
    _0x209e0f.addEventListener("click", () => {
      _0x5ab37d.classList.remove("ql-sweetalert-visible");
      setTimeout(() => {
        _0x5ab37d.remove();
        chrome.storage.local.remove(["ql_license_valid", "ql_license_key", "ql_session_id", "ql_user_name", "ql_expires_at", "ql_license_status"], () => {
          if (_0xfe25ec) {
            showLicenseGate(_0xfe25ec);
          }
        });
      }, 300);
    });
  }
}
function qlBootstrap() {
  if (document.getElementById("ql-floating")) {
    return;
  }
  if (!document.body) {
    var _0x3be5bf = new MutationObserver(function () {
      if (document.body) {
        _0x3be5bf.disconnect();
        qlBootstrap();
      }
    });
    _0x3be5bf.observe(document.documentElement, {
      childList: true
    });
    return;
  }
  createUI();
}
if (document.readyState === "complete" || document.readyState === "interactive") {
  setTimeout(qlBootstrap, 50);
} else {
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(qlBootstrap, 50);
  });
}
var qlRetryCount = 0;
var qlRetryDelays = [300, 600, 1000, 1500, 2000, 3000, 4000, 5000];
function qlRetryInit() {
  if (document.getElementById("ql-floating") || qlRetryCount >= qlRetryDelays.length) {
    return;
  }
  var _0x3610a3 = qlRetryDelays[qlRetryCount];
  qlRetryCount++;
  setTimeout(function () {
    if (!document.getElementById("ql-floating") && document.body) {
      createUI();
    }
    qlRetryInit();
  }, _0x3610a3);
}
qlRetryInit();
chrome.storage.onChanged.addListener((_0x5960ca, _0x1494eb) => {
  if (_0x1494eb !== "local") {
    return;
  }
  if (_0x5960ca.ql_sidebar_mode) {
    if (_0x5960ca.ql_sidebar_mode.newValue === true) {
      if (qlSidebarActivateTimer) {
        clearTimeout(qlSidebarActivateTimer);
        qlSidebarActivateTimer = null;
      }
      const _0x1e96e6 = document.getElementById("ql-floating");
      if (_0x1e96e6) {
        _0x1e96e6.style.transition = "opacity 0.3s ease, transform 0.3s ease";
        _0x1e96e6.style.opacity = "0";
        _0x1e96e6.style.transform = "scale(0.95)";
        setTimeout(() => {
          if (qlHeartbeatInterval) {
            clearInterval(qlHeartbeatInterval);
          }
          if (window.qlCountdownInterval) {
            clearInterval(window.qlCountdownInterval);
          }
          _0x1e96e6.remove();
        }, 350);
      }
    } else if (_0x5960ca.ql_sidebar_mode.newValue === false) {
      setTimeout(() => {
        _buildFloatingUI();
        setTimeout(() => {
          const _0x3fddfc = document.getElementById("ql-floating");
          if (_0x3fddfc) {
            _0x3fddfc.style.opacity = "0";
            _0x3fddfc.style.transform = "scale(0.95) translateX(20px)";
            requestAnimationFrame(() => {
              _0x3fddfc.style.transition = "opacity 0.4s ease, transform 0.4s ease";
              _0x3fddfc.style.opacity = "1";
              _0x3fddfc.style.transform = "scale(1) translateX(0)";
            });
          }
        }, 50);
      }, 100);
    }
  }
});
function updateSyncStatus() {
  chrome.storage.local.get(["lovable_projectId", "lovable_token"], _0x47ac03 => {
    const _0x494ff5 = document.getElementById("ql-sync-status");
    if (!_0x494ff5) {
      return;
    }
    if (_0x47ac03.lovable_projectId && _0x47ac03.lovable_token) {
      _0x494ff5.className = "ql-sync-status ql-sync-ok";
      const _0x185186 = _0x47ac03.lovable_projectId.substring(0, 6);
      _0x494ff5.innerHTML = "<span class=\"ql-sync-text\">" + t("sync.ok") + " " + t("sync.project") + " " + _0x185186 + "...</span>";
    } else {
      _0x494ff5.className = "ql-sync-status ql-sync-waiting";
      _0x494ff5.innerHTML = "<span class=\"ql-sync-text\">" + SVG_ICONS.clock + t("sync.waiting") + "</span>";
    }
  });
}
function setupStorageWatch() {
  chrome.storage.onChanged.addListener(_0x3cc294 => {
    if (_0x3cc294.lovable_projectId || _0x3cc294.lovable_token) {
      updateSyncStatus();
    }
  });
}
function requestLatestTokenFromHook(_0x3d33ea = 1200) {
  return new Promise(_0x5b2963 => {
    let _0x10dbd3 = false;
    function _0x1e90ae(_0x242c17) {
      if (_0x10dbd3) {
        return;
      }
      _0x10dbd3 = true;
      clearTimeout(_0x3bf6a1);
      chrome.storage.onChanged.removeListener(_0x5b961b);
      _0x5b2963(_0x242c17);
    }
    function _0x5b961b(_0x513781, _0x486f8e) {
      if (_0x486f8e !== "local") {
        return;
      }
      if (_0x513781.lovable_token && _0x513781.lovable_token.newValue) {
        _0x1e90ae(true);
      }
    }
    const _0x3bf6a1 = setTimeout(() => _0x1e90ae(false), Math.max(300, _0x3d33ea));
    chrome.storage.onChanged.addListener(_0x5b961b);
    try {
      window.postMessage({
        type: "lovableRequestToken"
      }, "*");
      setTimeout(() => window.postMessage({
        type: "lovableRequestToken"
      }, "*"), 120);
    } catch (_0x4ef2b5) {
      _0x1e90ae(false);
    }
  });
}
function loadChatHistory(_0x33cc84) {
  chrome.storage.local.get([QL_HISTORY_KEY], _0x40ab16 => {
    qlChatHistory = _0x40ab16[QL_HISTORY_KEY] || [];
    updateHistoryBadge();
    if (_0x33cc84) {
      _0x33cc84();
    }
  });
}
function saveChatHistory() {
  if (qlChatHistory.length > QL_MAX_HISTORY) {
    qlChatHistory = qlChatHistory.slice(-QL_MAX_HISTORY);
  }
  chrome.storage.local.set({[QL_HISTORY_KEY]: qlChatHistory}, function () {});
}
function addToChatHistory(_0x31e8e2, _0x558764) {
  qlChatHistory.push({
    text: _0x31e8e2,
    timestamp: new Date().toISOString(),
    status: _0x558764 || "ok"
  });
  saveChatHistory();
  updateHistoryBadge();
}
function updateHistoryBadge() {
  const _0x2026d0 = document.getElementById("ql-history-badge");
  if (!_0x2026d0) {
    return;
  }
  if (qlChatHistory.length > 0) {
    _0x2026d0.textContent = qlChatHistory.length;
    _0x2026d0.style.display = "inline-flex";
  } else {
    _0x2026d0.style.display = "none";
  }
}
function formatChatDate(_0x37a6bc) {
  var _0x1dd6c1 = new Date(_0x37a6bc);
  var _0x30fb6e = new Date();
  var _0x16accc = new Date(_0x30fb6e.getFullYear(), _0x30fb6e.getMonth(), _0x30fb6e.getDate());
  var _0x1d625d = new Date(_0x1dd6c1.getFullYear(), _0x1dd6c1.getMonth(), _0x1dd6c1.getDate());
  var _0x71a9a2 = (_0x16accc - _0x1d625d) / 86400000;
  if (_0x71a9a2 === 0) {
    return "Hoje";
  }
  if (_0x71a9a2 === 1) {
    return "Ontem";
  }
  if (_0x71a9a2 < 7) {
    return ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"][_0x1dd6c1.getDay()];
  }
  return _0x1dd6c1.toLocaleDateString("pt-BR");
}
function formatChatTime(_0x3804ef) {
  var _0x305cc2 = new Date(_0x3804ef);
  return String(_0x305cc2.getHours()).padStart(2, "0") + ":" + String(_0x305cc2.getMinutes()).padStart(2, "0");
}
function renderHistoryView() {
  const _0x1eed8a = document.getElementById("ql-tab-content");
  if (!_0x1eed8a) {
    return;
  }
  if (!qlChatHistory.length) {
    _0x1eed8a.innerHTML = "<div class=\"ql-chat-empty\"><div style=\"font-size:28px;margin-bottom:8px\">💬</div><div style=\"font-size:13px;font-weight:600;color:var(--ql-text-primary,#f4f4f5)\">Nenhuma mensagem</div><div style=\"font-size:11px;color:var(--ql-text-muted,#71717a);margin-top:4px\">Seus prompts enviados aparecerão aqui.</div></div>";
    return;
  }
  let _0x390864 = "<div class=\"ql-chat-messages\">";
  let _0x7d32f0 = "";
  for (let _0x49d135 = 0; _0x49d135 < qlChatHistory.length; _0x49d135++) {
    const _0x288bff = qlChatHistory[_0x49d135];
    const _0xbc2d69 = formatChatDate(_0x288bff.timestamp);
    if (_0xbc2d69 !== _0x7d32f0) {
      _0x390864 += "<div class=\"ql-chat-date-divider\"><span class=\"ql-chat-date-label\">" + _0xbc2d69 + "</span></div>";
      _0x7d32f0 = _0xbc2d69;
    }
    const _0x1e46bc = _0x288bff.status === "error" ? "ql-chat-status-err" : "ql-chat-status-ok";
    const _0x43f9e8 = _0x288bff.status === "error" ? "✗ Erro" : "✓ Enviado";
    const _0x806c04 = _0x288bff.text.length > 300 ? escapeHtml(_0x288bff.text.substring(0, 300)) + "…" : escapeHtml(_0x288bff.text);
    _0x390864 += "<div class=\"ql-chat-bubble\" title=\"" + escapeHtml(_0x288bff.text) + "\">" + _0x806c04 + "<div class=\"ql-chat-meta\"><span class=\"" + _0x1e46bc + "\">" + _0x43f9e8 + "</span><span class=\"ql-chat-time\">" + formatChatTime(_0x288bff.timestamp) + "</span></div></div>";
  }
  _0x390864 += "</div>";
  _0x390864 += "<div class=\"ql-chat-actions\"><span class=\"ql-chat-count\">" + qlChatHistory.length + " mensagen" + (qlChatHistory.length === 1 ? "" : "s") + "</span><button class=\"ql-chat-clear\" id=\"ql-chat-clear\">🗑 Limpar</button></div>";
  _0x1eed8a.innerHTML = _0x390864;
  const _0x3b27f0 = _0x1eed8a.querySelector(".ql-chat-messages");
  if (_0x3b27f0) {
    _0x3b27f0.scrollTop = _0x3b27f0.scrollHeight;
  }
  const _0x145696 = document.getElementById("ql-chat-clear");
  if (_0x145696) {
    _0x145696.addEventListener("click", () => {
      qlChatHistory = [];
      saveChatHistory();
      updateHistoryBadge();
      renderHistoryView();
    });
  }
}
function renderPromptView() {
  const _0x1da9dd = document.getElementById("ql-tab-content");
  if (!_0x1da9dd) {
    return;
  }
  _0x1da9dd.innerHTML = "<textarea id=\"ql-msg\" rows=\"3\" placeholder=\"Digite seu comando...\" spellcheck=\"false\"></textarea><div id=\"ql-attach-preview\" class=\"ql-attach-preview\" style=\"display:none\"></div><div class=\"ql-action-bar\"><div class=\"ql-action-left\"><label class=\"ql-toggle\"><input type=\"checkbox\" id=\"ql-modo-plano\"><span class=\"ql-toggle-slider\"></span></label><span class=\"ql-toggle-label-inline\">Modo Plano</span></div><div class=\"ql-action-center\"><button id=\"ql-attach-btn\" class=\"ql-attach-btn\" title=\"Anexar arquivo (máx. 10)\">📎</button><button id=\"ql-speech-btn\" class=\"ql-tool-btn\" title=\"Gravar voz\">" + SVG_ICONS.mic + "</button></div><button id=\"ql-send\" class=\"ql-send-btn\">Enviar ↗</button></div><input type=\"file\" id=\"ql-file-input\" style=\"display:none\" accept=\"image/*,.pdf,.txt,.md,.csv,.json,.xml,.zip\" multiple><button id=\"ql-native-chat-btn\" class=\"ql-native-chat-btn\">Usar Chat Padrão</button><button id=\"ql-remove-watermark\" class=\"ql-watermark-btn\">Remove Watermark</button><button id=\"ql-download-project\" class=\"ql-watermark-btn\" style=\"background:linear-gradient(135deg,rgba(59,130,246,0.12),rgba(37,99,235,0.08));border-color:rgba(59,130,246,0.3);color:#60a5fa;margin-top:6px\">Baixar Código Fonte</button><div id=\"ql-download-status\" style=\"display:none\"></div>";
  setupSend();
  setupSuggestionChips();
  setupWatermarkButton();
  setupSpeech();
  setupModoPlano();
  setupFileAttachment();
  setupShield();
  setupNativeChatButton();
  setupClipboardPaste();
  setupDownloadProject();
}
function setupTabs() {
  const _0x11366a = document.querySelectorAll(".ql-tab");
  _0x11366a.forEach(_0x250e21 => {
    _0x250e21.addEventListener("click", () => {
      const _0x4f90b2 = _0x250e21.getAttribute("data-tab");
      qlActiveTab = _0x4f90b2;
      document.querySelectorAll(".ql-tab").forEach(_0x5ea0b0 => _0x5ea0b0.classList.toggle("ql-tab-active", _0x5ea0b0.getAttribute("data-tab") === _0x4f90b2));
      if (_0x4f90b2 === "history") {
        loadChatHistory(() => renderHistoryView());
      } else {
        renderPromptView();
      }
    });
  });
}
function _qlUlid() {
  const _0x285f37 = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
  let _0x5eaddf = Date.now();
  let _0x186555 = "";
  for (let _0x366d2b = 9; _0x366d2b >= 0; _0x366d2b--) {
    _0x186555 = _0x285f37[_0x5eaddf % 32] + _0x186555;
    _0x5eaddf = Math.floor(_0x5eaddf / 32);
  }
  for (let _0x339fc7 = 0; _0x339fc7 < 16; _0x339fc7++) {
    _0x186555 += _0x285f37[Math.floor(Math.random() * 32)];
  }
  return _0x186555;
}
function sendViaWs(_0x3c61f7, _0x285c0a) {
  return new Promise(function (_0x56f68c, _0x15bc03) {
    const _0x2495e3 = {
      id: "umsg_" + _qlUlid(),
      message: _0x3c61f7,
      files: [],
      selected_elements: [],
      chat_only: false,
      view: "editor",
      view_description: "",
      optimisticImageUrls: [],
      ai_message_id: "aimsg_" + _qlUlid(),
      thread_id: "main",
      current_page: window.location.pathname || "/",
      current_viewport_width: window.innerWidth || 1280,
      current_viewport_height: window.innerHeight || 800,
      current_viewport_dpr: window.devicePixelRatio || 1,
      model: null
    };
    var _0x58970f = setTimeout(function () {
      window.removeEventListener("message", _0x4dcb1b);
      _0x15bc03(new Error("Timeout: WS não respondeu"));
    }, 6000);
    function _0x4dcb1b(_0x3a51fc) {
      if (_0x3a51fc.source !== window || !_0x3a51fc.data) {
        return;
      }
      if (_0x3a51fc.data.type !== "lovableWsSendResult") {
        return;
      }
      clearTimeout(_0x58970f);
      window.removeEventListener("message", _0x4dcb1b);
      if (_0x3a51fc.data.success) {
        _0x56f68c();
      } else {
        _0x15bc03(new Error(_0x3a51fc.data.error || "WS send falhou"));
      }
    }
    window.addEventListener("message", _0x4dcb1b);
    window.postMessage({
      type: "lovableSendViaWs",
      payload: _0x2495e3
    }, "*");
  });
}
chrome.runtime.onMessage.addListener(function (_0x26ca48, _0x2e9bcb, _0x2493f2) {
  if (_0x2e9bcb.id !== chrome.runtime.id) {
    return;
  }
  if (_0x26ca48.action === "qlSendViaWs") {
    sendNativeToLovable(_0x26ca48.message).then(function () {
      _0x2493f2({
        ok: true
      });
    }).catch(function (_0x3b19af) {
      _0x2493f2({
        ok: false,
        error: _0x3b19af.message
      });
    });
    return true;
  }
  if (_0x26ca48.action === "qlActivateNativeChat") {
    activateNativeChat();
    _0x2493f2({
      ok: true
    });
    return true;
  }
  if (_0x26ca48.action === "qlDeactivateNativeChat") {
    deactivateNativeChat();
    _0x2493f2({
      ok: true
    });
    return true;
  }
  if (_0x26ca48.action === "qlActivateBypass") {
    activateBypass();
    _0x2493f2({
      ok: true
    });
    return true;
  }
  if (_0x26ca48.action === "qlDeactivateBypass") {
    deactivateBypass();
    _0x2493f2({
      ok: true
    });
    return true;
  }
  if (_0x26ca48.action === "qlQuickProjectInit") {
    quickProjectInit().then(function () {
      _0x2493f2({
        ok: true
      });
    }).catch(function (_0x468e3f) {
      _0x2493f2({
        ok: false,
        error: _0x468e3f.message
      });
    });
    return true;
  }
  if (_0x26ca48.action === "qlRequestToken") {
    requestLatestTokenFromHook().then(function () {
      _0x2493f2({
        ok: true
      });
    }).catch(function () {
      _0x2493f2({
        ok: false
      });
    });
    return true;
  }
});
async function quickProjectInit() {
  if (window.location.pathname.match(/\/projects\/[a-f0-9-]{36}/i)) {
    throw new Error("Use este botão na tela inicial do Lovable, sem projeto aberto.");
  }
  const _0x5ee45d = document.querySelector("form#chat-input");
  if (!_0x5ee45d) {
    throw new Error("Formulário não encontrado. Certifique-se de estar na tela inicial do Lovable.");
  }
  const _0x3f3b8c = _0x5ee45d.querySelector("[contenteditable=\"true\"]");
  if (!_0x3f3b8c) {
    throw new Error("Campo de texto não encontrado.");
  }
  const _0x3c5497 = document.getElementById("chatinput-send-message-button");
  if (!_0x3c5497) {
    throw new Error("Botão de criação não encontrado.");
  }
  _0x3f3b8c.focus();
  document.execCommand("selectAll", false, null);
  document.execCommand("insertText", false, ".");
  await new Promise(_0x1b67bd => setTimeout(_0x1b67bd, 300));
  if (_0x3c5497.disabled) {
    _0x3c5497.removeAttribute("disabled");
  }
  _0x3c5497.click();
  const _0x378fbc = await new Promise(function (_0x20b312) {
    const _0x314159 = 25000;
    const _0x32b6b5 = Date.now();
    const _0x145a81 = setInterval(function () {
      if (Date.now() - _0x32b6b5 > _0x314159) {
        clearInterval(_0x145a81);
        _0x20b312(false);
        return;
      }
      const _0x17d190 = document.querySelector("button[aria-label=\"Stop generating\"]");
      if (_0x17d190 && !_0x17d190.disabled) {
        clearInterval(_0x145a81);
        _0x17d190.click();
        _0x20b312(true);
      }
    }, 200);
  });
  if (!_0x378fbc) {
    throw new Error("Timeout aguardando Stop. Verifique se um projeto foi criado na sua lista.");
  }
}
const MAX_FILES = 10;
const MAX_FILE_SIZE = 20971520;
let qlAttachedFiles = [];
function formatFileSize(_0x571cd1) {
  if (_0x571cd1 < 1024) {
    return _0x571cd1 + " B";
  }
  if (_0x571cd1 < 1048576) {
    return (_0x571cd1 / 1024).toFixed(1) + " KB";
  }
  return (_0x571cd1 / 1048576).toFixed(1) + " MB";
}
function isImageType(_0x77f2ee) {
  return ["image/png", "image/jpeg", "image/webp"].includes(_0x77f2ee);
}
async function compressImage(_0x28f012) {
  return new Promise(_0x535d4c => {
    const _0x3e50ec = new Image();
    const _0x795d13 = URL.createObjectURL(_0x28f012);
    _0x3e50ec.onload = () => {
      URL.revokeObjectURL(_0x795d13);
      const _0x5f3f9f = 1280;
      let _0x350e45 = _0x3e50ec.width;
      let _0x20b9fe = _0x3e50ec.height;
      if (_0x350e45 > _0x5f3f9f || _0x20b9fe > _0x5f3f9f) {
        const _0x127ca2 = Math.min(_0x5f3f9f / _0x350e45, _0x5f3f9f / _0x20b9fe);
        _0x350e45 = Math.round(_0x350e45 * _0x127ca2);
        _0x20b9fe = Math.round(_0x20b9fe * _0x127ca2);
      }
      const _0x155cfe = document.createElement("canvas");
      _0x155cfe.width = _0x350e45;
      _0x155cfe.height = _0x20b9fe;
      const _0x45c17a = _0x155cfe.getContext("2d");
      _0x45c17a.drawImage(_0x3e50ec, 0, 0, _0x350e45, _0x20b9fe);
      const _0x3408a2 = _0x28f012.type === "image/png" ? "image/png" : "image/jpeg";
      const _0x497fc0 = _0x28f012.type === "image/png" ? undefined : 0.8;
      _0x155cfe.toBlob(_0x43b214 => {
        if (!_0x43b214) {
          return _0x535d4c({
            file: _0x28f012,
            previewUrl: null
          });
        }
        const _0x348dad = new File([_0x43b214], _0x28f012.name, {
          type: _0x3408a2
        });
        const _0x1e176f = URL.createObjectURL(_0x43b214);
        _0x535d4c({
          file: _0x348dad,
          previewUrl: _0x1e176f
        });
      }, _0x3408a2, _0x497fc0);
    };
    _0x3e50ec.onerror = () => {
      URL.revokeObjectURL(_0x795d13);
      _0x535d4c({
        file: _0x28f012,
        previewUrl: null
      });
    };
    _0x3e50ec.src = _0x795d13;
  });
}
function decodeJwtUserId(_0x3cc143) {
  const _0x32d007 = decodeJwtPayload(_0x3cc143);
  if (!_0x32d007 || typeof _0x32d007 !== "object") {
    return null;
  }
  return _0x32d007.sub || _0x32d007.user_id || null;
}
async function uploadFileDirect(_0x30a57b, _0x38b547) {
  const _0xe55970 = crypto.randomUUID();
  const _0xbe0646 = _0x1f2e08 => {
    if (_0x1f2e08 && typeof _0x1f2e08.type === "string" && _0x1f2e08.type.trim()) {
      return _0x1f2e08.type;
    }
    const _0x5c127d = (_0x1f2e08 && _0x1f2e08.name ? _0x1f2e08.name : "").toLowerCase();
    const _0x19c109 = _0x5c127d.includes(".") ? _0x5c127d.split(".").pop() : "";
    const _0x30be83 = {
      png: "image/png",
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      webp: "image/webp",
      gif: "image/gif"
    };
    return _0x30be83[_0x19c109] || "application/octet-stream";
  };
  const _0x2922d5 = (_0x4b6db1, _0x1bbedf) => {
    const _0x11667d = _0x1bbedf && _0x1bbedf.name ? String(_0x1bbedf.name) : "";
    const _0x165af6 = _0x11667d.includes(".") ? _0x11667d.split(".").pop().toLowerCase() : "";
    const _0x4cb62e = _0x165af6 && /^[a-z0-9]{1,10}$/.test(_0x165af6) ? _0x165af6 : "png";
    const _0x4d2a6c = Date.now();
    return "uploads/" + _0x4d2a6c + "-" + _0x4b6db1 + "." + _0x4cb62e;
  };
  const _0x33d1ea = _0xbe0646(_0x30a57b);
  const _0x3d8067 = _0x2922d5(_0xe55970, _0x30a57b);
  const _0x630c00 = _SB_URL;
  const _0xbf7166 = _0x630c00 + "/storage/v1/object/prompt-images/" + _0x3d8067;
  await new Promise(function (_0x41c317, _0x5522b2) {
    var _0x14430b = new XMLHttpRequest();
    _0x14430b.open("POST", _0xbf7166, true);
    _0x14430b.setRequestHeader("Content-Type", _0x33d1ea);
    _0x14430b.setRequestHeader("apikey", SUPABASE_ANON_KEY);
    _0x14430b.setRequestHeader("Authorization", "Bearer " + SUPABASE_ANON_KEY);
    _0x14430b.setRequestHeader("x-upsert", "true");
    _0x14430b.onload = function () {
      if (_0x14430b.status >= 200 && _0x14430b.status < 300) {
        _0x41c317(true);
      } else {
        _0x5522b2(new Error("Upload falhou: " + _0x14430b.status + " " + (_0x14430b.responseText || "")));
      }
    };
    _0x14430b.onerror = function () {
      _0x5522b2(new Error("Erro de rede no upload"));
    };
    _0x14430b.send(_0x30a57b);
  });
  var _0x201b53 = _0x630c00 + "/storage/v1/object/public/prompt-images/" + _0x3d8067;
  return {
    file_id: _0x3d8067,
    file_name: _0x30a57b.name || "file",
    public_url: _0x201b53
  };
}
function renderAttachPreview() {
  const _0x714ef9 = document.getElementById("ql-attach-preview");
  if (!_0x714ef9) {
    return;
  }
  if (qlAttachedFiles.length === 0) {
    _0x714ef9.style.display = "none";
    _0x714ef9.innerHTML = "";
    return;
  }
  _0x714ef9.style.display = "flex";
  _0x714ef9.innerHTML = qlAttachedFiles.map((_0x1a8d18, _0x462b55) => {
    const _0x3c3af1 = _0x1a8d18.previewUrl ? "<img class=\"ql-attach-thumb\" src=\"" + _0x1a8d18.previewUrl + "\" alt=\"\">" : "<div class=\"ql-attach-icon\">📄</div>";
    const _0x5acefc = _0x1a8d18.uploading ? " ql-attach-uploading" : "";
    return "<div class=\"ql-attach-item" + _0x5acefc + "\" data-idx=\"" + _0x462b55 + "\">" + _0x3c3af1 + "<div class=\"ql-attach-info\"><span class=\"ql-attach-name\" title=\"" + escapeHtml(_0x1a8d18.file_name) + "\">" + escapeHtml(_0x1a8d18.file_name) + "</span><span class=\"ql-attach-size\">" + escapeHtml(_0x1a8d18.sizeLabel) + "</span></div><button class=\"ql-attach-remove\" data-idx=\"" + _0x462b55 + "\">✕</button></div>";
  }).join("");
  _0x714ef9.querySelectorAll(".ql-attach-remove").forEach(_0x1c99f6 => {
    _0x1c99f6.addEventListener("click", _0x3bd46d => {
      _0x3bd46d.stopPropagation();
      const _0x222b2e = parseInt(_0x1c99f6.getAttribute("data-idx"));
      if (qlAttachedFiles[_0x222b2e] && qlAttachedFiles[_0x222b2e].previewUrl) {
        URL.revokeObjectURL(qlAttachedFiles[_0x222b2e].previewUrl);
      }
      qlAttachedFiles.splice(_0x222b2e, 1);
      renderAttachPreview();
    });
  });
}
function setupFileAttachment() {
  const _0x9e9ea = document.getElementById("ql-attach-btn");
  const _0x1944a8 = document.getElementById("ql-file-input");
  if (!_0x9e9ea || !_0x1944a8) {
    return;
  }
  _0x9e9ea.addEventListener("click", () => {
    if (qlAttachedFiles.length >= MAX_FILES) {
      showCustomAlert("Limite", "Máximo de " + MAX_FILES + " arquivos.");
      return;
    }
    _0x1944a8.click();
  });
  _0x1944a8.addEventListener("change", async () => {
    const _0x40612b = Array.from(_0x1944a8.files || []);
    _0x1944a8.value = "";
    if (!_0x40612b.length) {
      return;
    }
    const _0x57870d = await new Promise(_0x487d2f => chrome.storage.local.get(["lovable_token"], _0x487d2f));
    let _0x3a1bc3 = _0x57870d.lovable_token || "";
    if (!_0x3a1bc3) {
      showCustomAlert("Erro", "Token não capturado. Navegue no Lovable para sincronizar.");
      return;
    }
    if (_0x3a1bc3.startsWith("Bearer ")) {
      _0x3a1bc3 = _0x3a1bc3.slice(7);
    }
    for (const _0x3115b6 of _0x40612b) {
      if (qlAttachedFiles.length >= MAX_FILES) {
        showCustomAlert("Limite", "Máximo de " + MAX_FILES + " arquivos atingido.");
        break;
      }
      if (_0x3115b6.size > MAX_FILE_SIZE) {
        showCustomAlert("Arquivo grande", _0x3115b6.name + " excede 20MB.");
        continue;
      }
      let _0x139c7d = _0x3115b6;
      let _0x1df7b7 = null;
      if (isImageType(_0x3115b6.type)) {
        const _0x2aca31 = await compressImage(_0x3115b6);
        _0x139c7d = _0x2aca31.file;
        _0x1df7b7 = _0x2aca31.previewUrl;
      }
      const _0x694d22 = isImageType(_0x139c7d.type);
      const _0xb2cd2e = qlAttachedFiles.length;
      qlAttachedFiles.push({
        file_id: null,
        file_name: _0x3115b6.name,
        previewUrl: _0x1df7b7,
        file_type: _0x139c7d.type,
        sizeLabel: formatFileSize(_0x139c7d.size),
        uploading: true,
        rawFile: _0x139c7d
      });
      renderAttachPreview();
      try {
        const _0x329271 = await uploadFileDirect(_0x139c7d, _0x3a1bc3);
        qlAttachedFiles[_0xb2cd2e].file_id = _0x329271.file_id;
        qlAttachedFiles[_0xb2cd2e].public_url = _0x329271.public_url;
        qlAttachedFiles[_0xb2cd2e].uploading = false;
        renderAttachPreview();
      } catch (_0x338fdd) {
        console.warn("[QL Upload] Falha ao enviar pra Supabase Storage:", _0x338fdd.message);
        qlAttachedFiles[_0xb2cd2e].uploading = false;
        qlAttachedFiles[_0xb2cd2e].uploadFailed = true;
        renderAttachPreview();
        showCustomAlert("Erro no upload", "Não foi possível enviar a imagem: " + (_0x338fdd.message || "erro desconhecido"));
      }
    }
  });
}
async function sendNativeToLovable(_0x3e4a89) {
  const _0x503c89 = document.querySelector("form#chat-input");
  if (!_0x503c89) {
    throw new Error("Chat do Lovable não encontrado. Abra um projeto.");
  }
  const _0x43a500 = _0x503c89.querySelector("[contenteditable=\"true\"]");
  if (!_0x43a500) {
    throw new Error("Editor de chat não encontrado na página.");
  }
  const _0x549c6c = document.getElementById("chatinput-send-message-button");
  if (!_0x549c6c) {
    throw new Error("Botão de envio não encontrado.");
  }
  _0x43a500.focus();
  document.execCommand("selectAll", false, null);
  document.execCommand("insertText", false, _0x3e4a89);
  await new Promise(_0x3ca5fe => setTimeout(_0x3ca5fe, 200));
  const _0x10be8a = _0x549c6c.disabled;
  if (_0x10be8a) {
    _0x549c6c.removeAttribute("disabled");
  }
  _0x549c6c.click();
  if (_0x10be8a) {
    _0x549c6c.setAttribute("disabled", "");
  }
}
function setupSend() {
  const _0x429abe = document.getElementById("ql-send");
  if (!_0x429abe) {
    return;
  }
  _0x429abe.addEventListener("click", async () => {
    var _0x43d920 = document.getElementById("ql-msg");
    const _0x2e804e = _0x43d920 ? (_0x43d920.value || "").trim() : "";
    const _0x213771 = document.getElementById("ql-log");
    if (!_0x2e804e) {
      if (_0x213771) {
        _0x213771.className = "ql-log-error";
        _0x213771.innerText = "⚠ Prompt vazio";
      }
      return;
    }
    var _0xwaitStart = Date.now();
    while (qlAttachedFiles.some(function (f) { return f.uploading; })) {
      if (Date.now() - _0xwaitStart > 15000) { break; }
      await new Promise(function (r) { return setTimeout(r, 200); });
    }
    const _0x3cbe89 = qlAttachedFiles.filter(function (_0x1952e7) {
      return _0x1952e7.public_url && !_0x1952e7.uploading && !_0x1952e7.uploadFailed;
    });
    const _0x42aa2f = _0x3cbe89.length > 0;
    var _0x300577 = _0x2e804e;
    if (_0x42aa2f) {
      var _0x566e82 = _0x3cbe89.map(function (_0x59068d) {
        return _0x59068d.public_url;
      }).join("\n");
      var _0x5c1c38 = _0x3cbe89.length > 1 ? "Analise os arquivos nos links:\n" : "Analise o arquivo no link: ";
      _0x300577 = _0x2e804e + "\n\n" + _0x5c1c38 + _0x566e82;
    }
    try {
      if (_0x213771) {
        _0x213771.className = "ql-log-info";
        _0x213771.innerHTML = _0x42aa2f ? "📎 Enviando com imagem..." : SVG_ICONS.clock + " Enviando prompt...";
      }
      _0x429abe.classList.add("ql-sending");
      _0x429abe.disabled = true;
      await sendNativeToLovable(_0x300577);
      if (_0x213771) {
        _0x213771.className = "ql-log-success";
        _0x213771.innerText = _0x42aa2f ? "✓ Prompt enviado! imagem válida 😁" : "✓ Prompt sent!";
      }
      try {
        if (typeof QLSounds !== "undefined") {
          QLSounds.promptSent();
        }
      } catch (_0x4005e0) {}
      addToChatHistory(_0x2e804e, "ok");
      var _0x2cfdbf = document.getElementById("ql-msg");
      if (_0x2cfdbf) {
        _0x2cfdbf.value = "";
      }
      qlAttachedFiles.forEach(_0x2bfbd9 => {
        if (_0x2bfbd9.previewUrl) {
          URL.revokeObjectURL(_0x2bfbd9.previewUrl);
        }
      });
      qlAttachedFiles = [];
      renderAttachPreview();
    } catch (_0x241899) {
      if (_0x213771) {
        _0x213771.className = "ql-log-error";
        _0x213771.innerText = "✗ " + (_0x241899.message || _0x241899);
      }
      addToChatHistory(_0x2e804e, "error");
    } finally {
      _0x429abe.classList.remove("ql-sending");
      _0x429abe.disabled = false;
    }
  });
}
let _dragCleanup = null;
let _resizeCleanup = null;
function setupDrag() {
  if (_dragCleanup) {
    _dragCleanup();
    _dragCleanup = null;
  }
  const _0x5db96e = document.getElementById("ql-floating");
  const _0x4bc2a8 = document.getElementById("ql-header");
  if (!_0x5db96e || !_0x4bc2a8) {
    return;
  }
  let _0x5808b2 = false;
  let _0x57badb = 0;
  let _0x1483ce = 0;
  let _0x479462 = 0;
  let _0x2e3fea = 0;
  function _0x48f206(_0x1cf074) {
    var _0x2657ce = _0x1cf074.target;
    while (_0x2657ce && _0x2657ce !== _0x4bc2a8) {
      var _0x22e931 = _0x2657ce.nodeName;
      if (_0x22e931 === "BUTTON" || _0x22e931 === "INPUT" || _0x22e931 === "SELECT" || _0x22e931 === "TEXTAREA" || _0x22e931 === "A") {
        return;
      }
      _0x2657ce = _0x2657ce.parentElement;
    }
    if (_0x1cf074.pointerType === "mouse" && _0x1cf074.button !== 0) {
      return;
    }
    const _0x4d0665 = _0x5db96e.getBoundingClientRect();
    _0x57badb = _0x1cf074.clientX;
    _0x1483ce = _0x1cf074.clientY;
    _0x479462 = _0x4d0665.left;
    _0x2e3fea = _0x4d0665.top;
    _0x5808b2 = true;
    try {
      _0x4bc2a8.setPointerCapture(_0x1cf074.pointerId);
    } catch (_0x963608) {}
    document.addEventListener("pointermove", _0x146868);
    document.addEventListener("pointerup", _0x15cbb7);
  }
  function _0x146868(_0x1a39eb) {
    if (!_0x5808b2) {
      return;
    }
    document.body.style.userSelect = "none";
    let _0x210d3d = _0x479462 + (_0x1a39eb.clientX - _0x57badb);
    let _0xb050d3 = _0x2e3fea + (_0x1a39eb.clientY - _0x1483ce);
    _0x210d3d = Math.max(0, Math.min(_0x210d3d, window.innerWidth - _0x5db96e.offsetWidth));
    _0xb050d3 = Math.max(0, Math.min(_0xb050d3, window.innerHeight - _0x5db96e.offsetHeight));
    _0x5db96e.style.left = _0x210d3d + "px";
    _0x5db96e.style.top = _0xb050d3 + "px";
  }
  function _0x15cbb7(_0x48f8bd) {
    if (!_0x5808b2) {
      return;
    }
    _0x5808b2 = false;
    document.body.style.userSelect = "";
    try {
      _0x4bc2a8.releasePointerCapture(_0x48f8bd.pointerId);
    } catch (_0x2d3707) {}
    document.removeEventListener("pointermove", _0x146868);
    document.removeEventListener("pointerup", _0x15cbb7);
    document.body.style.userSelect = "";
  }
  _0x4bc2a8.addEventListener("pointerdown", _0x48f206, {
    passive: false
  });
  _dragCleanup = function () {
    _0x4bc2a8.removeEventListener("pointerdown", _0x48f206);
    document.removeEventListener("pointermove", _0x146868);
    document.removeEventListener("pointerup", _0x15cbb7);
  };
}
function setupResize() {
  if (_resizeCleanup) {
    _resizeCleanup();
    _resizeCleanup = null;
  }
  const _0x47ad42 = document.getElementById("ql-floating");
  const _0x4d70de = document.getElementById("ql-resize-handle");
  if (!_0x47ad42 || !_0x4d70de) {
    return;
  }
  let _0x315dbd = false;
  let _0x4b46c3 = 0;
  let _0x4be6d5 = 0;
  function _0x4a14ca(_0x3eae2d) {
    _0x3eae2d.preventDefault();
    _0x3eae2d.stopPropagation();
    _0x315dbd = true;
    _0x4b46c3 = _0x3eae2d.clientY;
    _0x4be6d5 = _0x47ad42.offsetHeight;
    try {
      _0x4d70de.setPointerCapture(_0x3eae2d.pointerId);
    } catch (_0x1c2935) {}
    document.addEventListener("pointermove", _0x581d48);
    document.addEventListener("pointerup", _0x56728a);
    document.body.style.userSelect = "none";
  }
  let _0x581d48Raf = 0;
  let _0x581d48PendingHeight = 0;

  function _0x581d48(_0x3372da) {
    if (!_0x315dbd) {
      return;
    }
    let _0x4710b8 = _0x4be6d5 + (_0x3372da.clientY - _0x4b46c3);
    _0x4710b8 = Math.max(200, Math.min(_0x4710b8, window.innerHeight * 0.8));
    _0x581d48PendingHeight = _0x4710b8;

    if (_0x581d48Raf) {
      return;
    }

    _0x581d48Raf = window.requestAnimationFrame(() => {
      _0x581d48Raf = 0;
      if (!_0x315dbd) {
        return;
      }
      _0x47ad42.style.height = _0x581d48PendingHeight + "px";
    });
  }
  function _0x56728a(_0x45a238) {
    if (!_0x315dbd) {
      return;
    }
    _0x315dbd = false;
    qlHeight = _0x47ad42.offsetHeight;
    chrome.storage.local.set({ql_height: qlHeight}, function () {});
    try {
      _0x4d70de.releasePointerCapture(_0x45a238.pointerId);
    } catch (_0x18795b) {}
    document.removeEventListener("pointermove", _0x581d48);
    document.removeEventListener("pointerup", _0x56728a);
    document.body.style.userSelect = "";
  }
  _0x4d70de.addEventListener("pointerdown", _0x4a14ca, {
    passive: false
  });
  _resizeCleanup = function () {
    _0x4d70de.removeEventListener("pointerdown", _0x4a14ca);
    document.removeEventListener("pointermove", _0x581d48);
    document.removeEventListener("pointerup", _0x56728a);
  };
}
function setupClipboardPaste() {
  var _0x4f25d2 = document.getElementById("ql-msg");
  if (!_0x4f25d2) {
    return;
  }
  var _0x815b87 = document.getElementById("ql-floating") || _0x4f25d2;
  var _0x1633c1 = null;
  function _0xcaa500() {
    if (_0x1633c1) {
      return;
    }
    _0x1633c1 = document.createElement("div");
    _0x1633c1.className = "ql-drag-overlay";
    _0x1633c1.innerHTML = "<div class=\"ql-drag-overlay-inner\">📂 Solte os arquivos aqui</div>";
    var _0x52d5ce = document.getElementById("ql-floating");
    if (_0x52d5ce) {
      _0x52d5ce.appendChild(_0x1633c1);
    }
  }
  function _0x1cf6f5() {
    if (_0x1633c1) {
      _0x1633c1.remove();
      _0x1633c1 = null;
    }
  }
  _0x815b87.addEventListener("dragover", function (_0x140b92) {
    _0x140b92.preventDefault();
    _0x140b92.stopPropagation();
    _0xcaa500();
  });
  _0x815b87.addEventListener("dragleave", function (_0x27cef0) {
    _0x27cef0.preventDefault();
    _0x27cef0.stopPropagation();
    if (!_0x815b87.contains(_0x27cef0.relatedTarget)) {
      _0x1cf6f5();
    }
  });
  _0x815b87.addEventListener("drop", async function (_0x133674) {
    _0x133674.preventDefault();
    _0x133674.stopPropagation();
    _0x1cf6f5();
    var _0x4abf2c = Array.from(_0x133674.dataTransfer.files || []);
    if (!_0x4abf2c.length) {
      return;
    }
    await handleFilesAttach(_0x4abf2c);
  });
  _0x4f25d2.addEventListener("paste", async function (_0x519c15) {
    var _0x5acaa6 = _0x519c15.clipboardData && _0x519c15.clipboardData.items;
    if (!_0x5acaa6) {
      return;
    }
    var _0x3dff98 = [];
    for (var _0x4e6f61 = 0; _0x4e6f61 < _0x5acaa6.length; _0x4e6f61++) {
      var _0x151427 = _0x5acaa6[_0x4e6f61];
      if (_0x151427.kind === "file") {
        _0x519c15.preventDefault();
        var _0x3bda29 = _0x151427.getAsFile();
        if (_0x3bda29) {
          _0x3dff98.push(_0x3bda29);
        }
      }
    }
    if (_0x3dff98.length > 0) {
      await handleFilesAttach(_0x3dff98);
    }
  });
}
async function handleFilesAttach(_0x17874d) {
  if (qlAttachedFiles.length >= MAX_FILES) {
    showCustomAlert("Limite", "Maximo " + MAX_FILES + " arquivos.");
    return;
  }
  var _0x89d044 = await new Promise(function (_0x34a025) {
    chrome.storage.local.get(["lovable_token"], _0x34a025);
  });
  var _0x107fd6 = _0x89d044.lovable_token || "";
  if (!_0x107fd6) {
    showCustomAlert("Erro", "Token nao capturado.");
    return;
  }
  if (_0x107fd6.indexOf("Bearer ") === 0) {
    _0x107fd6 = _0x107fd6.slice(7);
  }
  for (var _0x347088 = 0; _0x347088 < _0x17874d.length; _0x347088++) {
    var _0x10cc1f = _0x17874d[_0x347088];
    if (qlAttachedFiles.length >= MAX_FILES) {
      break;
    }
    if (_0x10cc1f.size > MAX_FILE_SIZE) {
      showCustomAlert("Grande", _0x10cc1f.name + " excede 20MB.");
      continue;
    }
    var _0x4b5aa6 = _0x10cc1f;
    var _0x374b73 = null;
    if (isImageType(_0x10cc1f.type)) {
      var _0x87421d = await compressImage(_0x10cc1f);
      _0x4b5aa6 = _0x87421d.file;
      _0x374b73 = _0x87421d.previewUrl;
    }
    var _0x1cec16 = qlAttachedFiles.length;
    qlAttachedFiles.push({
      file_id: null,
      file_name: _0x10cc1f.name || "file_" + Date.now(),
      previewUrl: _0x374b73,
      file_type: _0x4b5aa6.type,
      sizeLabel: formatFileSize(_0x4b5aa6.size),
      uploading: true,
      rawFile: _0x4b5aa6
    });
    renderAttachPreview();
    try {
      var _0x372d2e = await uploadFileDirect(_0x4b5aa6, _0x107fd6);
      qlAttachedFiles[_0x1cec16].file_id = _0x372d2e.file_id;
      qlAttachedFiles[_0x1cec16].public_url = _0x372d2e.public_url;
      qlAttachedFiles[_0x1cec16].uploading = false;
      renderAttachPreview();
    } catch (_0xad284a) {
      qlAttachedFiles[_0x1cec16].uploading = false;
      qlAttachedFiles[_0x1cec16].uploadFailed = true;
      renderAttachPreview();
    }
  }
  var _0okCount = qlAttachedFiles.filter(function (f) { return f.public_url && !f.uploadFailed; }).length;
  if (_0okCount > 0) {
    showCustomAlert("Anexado 📎", _0okCount + " arquivo(s) adicionado(s)!");
  }
}
function setupDownloadProject() {
  var _0x27307d = document.getElementById("ql-download-project");
  if (!_0x27307d) {
    return;
  }
  _0x27307d.addEventListener("click", async function () {
    var _0x461c15 = document.getElementById("ql-download-status");
    _0x27307d.disabled = true;
    _0x27307d.textContent = "Preparando...";
    if (_0x461c15) {
      _0x461c15.style.display = "block";
      _0x461c15.className = "ql-log-info";
      _0x461c15.textContent = "Verificando token e projeto...";
    }
    try {
      try {
        var _0x2d60e8 = _SB_URL + "/rest/v1/feature_flags?select=enabled&flag_key=eq.download_files";
        var _0x3ac017 = await bgFetch(_0x2d60e8, {
          method: "GET",
          headers: {
            apikey: SUPABASE_ANON_KEY
          }
        });
        if (_0x3ac017 && _0x3ac017.length > 0 && _0x3ac017[0].enabled === false) {
          throw new Error("Erro ao Usar os Recursos da Extensão.");
        }
      } catch (_0x3cba81) {
        if (_0x3cba81 && _0x3cba81.message === "Erro ao Usar os Recursos da Extensão.") {
          throw _0x3cba81;
        }
      }
      var _0x1c2462 = await new Promise(function (_0x297e8f) {
        chrome.storage.local.get(["lovable_token", "lovable_projectId"], _0x297e8f);
      });
      var _0x631a0f = _0x1c2462.lovable_token || "";
      var _0x390b0b = _0x1c2462.lovable_projectId || "";
      if (_0x631a0f.indexOf("Bearer ") === 0) {
        _0x631a0f = _0x631a0f.slice(7);
      }
      var _0x1017fa = _0x390b0b;
      if (!_0x1017fa) {
        throw new Error("Abra uma pagina de projeto do Lovable primeiro.");
      }
      if (!_0x631a0f) {
        var _0x59432d = await new Promise(function (_0x3407aa) {
          chrome.runtime.sendMessage({
            action: "readCookies"
          }, function (_0x21e4f5) {
            if (chrome.runtime.lastError) { _0x3407aa(null); return; }
            _0x3407aa(_0x21e4f5);
          });
        });
        if (_0x59432d && _0x59432d.success && _0x59432d.tokens && _0x59432d.tokens.length > 0) {
          _0x631a0f = _0x59432d.tokens[0].token;
        }
      }
      if (!_0x631a0f) {
        throw new Error("Token nao encontrado. Abra um projeto no Lovable e aguarde a sincronizacao.");
      }
      _0x27307d.textContent = "Baixando...";
      if (_0x461c15) {
        _0x461c15.textContent = "Baixando arquivos do projeto...";
      }
      var _0x43d1d9 = await new Promise(function (_0x2d88be) {
        chrome.runtime.sendMessage({
          action: "downloadProject",
          projectId: _0x1017fa,
          token: _0x631a0f
        }, function (_0x15a655) {
          if (chrome.runtime.lastError) { _0x2d88be(null); return; }
          _0x2d88be(_0x15a655);
        });
      });
      if (!_0x43d1d9 || !_0x43d1d9.success) {
        throw new Error(_0x43d1d9 && _0x43d1d9.error ? _0x43d1d9.error : "Download falhou");
      }
      var _0x3f28c1 = _0x43d1d9.files;
      if (!_0x3f28c1 || _0x3f28c1.length === 0) {
        throw new Error("Nenhum arquivo encontrado no projeto.");
      }
      if (_0x461c15) {
        _0x461c15.textContent = "Criando ZIP com " + _0x3f28c1.length + " arquivos...";
      }
      _0x27307d.textContent = "Empacotando...";
      if (typeof JSZip === "undefined") {
        throw new Error("JSZip nao carregado. Use o Painel Lateral.");
      }
      var _0x442781 = new JSZip();
      var _0x4a28ea = [".png", ".jpg", ".jpeg", ".gif", ".svg", ".ico", ".webp", ".bmp", ".tiff"];
      var _0x3c9ed9 = 0;
      for (var _0x5722fc = 0; _0x5722fc < _0x3f28c1.length; _0x5722fc++) {
        var _0x510789 = _0x3f28c1[_0x5722fc];
        if (!_0x510789.name || _0x510789.sizeExceeded) {
          continue;
        }
        if (_0x510789.contents && _0x510789.binary) {
          _0x442781.file(_0x510789.name, _0x510789.contents, {
            base64: true,
            binary: true
          });
          _0x3c9ed9++;
        } else if (!_0x510789.contents && _0x4a28ea.some(function (_0x4fbc14) {
          return _0x510789.name.toLowerCase().endsWith(_0x4fbc14);
        })) {
          try {
            var _0x2a8d8b = await fetch("https://api.lovable.dev/projects/" + _0x1017fa + "/files/raw?path=" + encodeURIComponent(_0x510789.name), {
              method: "GET",
              headers: {
                Authorization: "Bearer " + _0x631a0f
              },
              credentials: "omit",
              mode: "cors"
            });
            if (_0x2a8d8b.ok) {
              _0x442781.file(_0x510789.name, await _0x2a8d8b.arrayBuffer(), {
                binary: true
              });
              _0x3c9ed9++;
            } else if (_0x510789.contents) {
              _0x442781.file(_0x510789.name, _0x510789.contents);
              _0x3c9ed9++;
            }
          } catch (_0x371c79) {
            if (_0x510789.contents) {
              _0x442781.file(_0x510789.name, _0x510789.contents);
              _0x3c9ed9++;
            }
          }
        } else if (_0x510789.contents) {
          _0x442781.file(_0x510789.name, _0x510789.contents);
          _0x3c9ed9++;
        }
      }
      var _0x519c9e = await _0x442781.generateAsync({
        type: "blob",
        compression: "DEFLATE",
        compressionOptions: {
          level: 9
        }
      });
      var _0x38e8e3 = document.createElement("a");
      _0x38e8e3.href = URL.createObjectURL(_0x519c9e);
      _0x38e8e3.download = "lovable-" + _0x1017fa.substring(0, 8) + "-" + new Date().toISOString().split("T")[0] + ".zip";
      document.body.appendChild(_0x38e8e3);
      _0x38e8e3.click();
      document.body.removeChild(_0x38e8e3);
      URL.revokeObjectURL(_0x38e8e3.href);
      if (_0x461c15) {
        _0x461c15.className = "ql-log-success";
        _0x461c15.textContent = _0x3c9ed9 + " arquivos baixados!";
      }
      _0x27307d.textContent = "Download Completo!";
      setTimeout(function () {
        _0x27307d.textContent = "Baixar Código Fonte";
        _0x27307d.disabled = false;
        if (_0x461c15) {
          _0x461c15.style.display = "none";
        }
      }, 4000);
    } catch (_0x2dbb26) {
      if (_0x461c15) {
        _0x461c15.className = "ql-log-error";
        _0x461c15.textContent = _0x2dbb26.message || _0x2dbb26;
        _0x461c15.style.display = "block";
      }
      _0x27307d.textContent = "Falhou";
      setTimeout(function () {
        _0x27307d.textContent = "Baixar Código Fonte";
        _0x27307d.disabled = false;
      }, 3000);
    }
  });
}

async function checkResellerRolePopup() {
  try {
    var _0x3a9171 = await new Promise(function (_0x2bb65a) {
      chrome.storage.local.get(["ql_license_id"], _0x2bb65a);
    });
    if (!_0x3a9171.ql_license_id) {
      return;
    }
    var _0xcc5abc = await bgFetch(_SB_URL + "/rest/v1/user_roles?select=role&license_id=eq." + encodeURIComponent(_0x3a9171.ql_license_id), {
      method: "GET",
      headers: {
        apikey: SUPABASE_ANON_KEY
      }
    });
    if (_0xcc5abc && Array.isArray(_0xcc5abc) && _0xcc5abc.some(function (_0x46adde) {
      return _0x46adde.role === "reseller" || _0x46adde.role === "admin";
    })) {
      var _0x1ebb48 = document.getElementById("ql-reseller-btn");
      if (_0x1ebb48) {
        _0x1ebb48.style.display = "block";
      }
    }
  } catch (_0x271509) {}
}
let qlNativeChatActive = false;
let qlNativeChatCleanup = null;
function activateNativeChat() {
  qlNativeChatActive = true;
  chrome.storage.local.set({ql_native_chat: true}, function () {});
  const _0x195531 = document.getElementById("ql-floating");
  if (_0x195531) {
    _0x195531.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    _0x195531.style.opacity = "0";
    _0x195531.style.transform = "scale(0.95) translateX(20px)";
    setTimeout(() => {
      _0x195531.style.display = "none";
    }, 350);
  }
  injectNativeChatOverlay();
}
function deactivateNativeChat() {
  qlNativeChatActive = false;
  chrome.storage.local.set({ql_native_chat: false}, function () {});
  if (qlNativeChatCleanup) {
    qlNativeChatCleanup();
    qlNativeChatCleanup = null;
  }
  const _0x4bf099 = document.getElementById("ql-native-badge");
  if (_0x4bf099) {
    _0x4bf099.remove();
  }
  const _0x278441 = document.getElementById("ql-native-return-btn");
  if (_0x278441) {
    _0x278441.remove();
  }
  const _0x580e58 = document.getElementById("chatinput-send-message-button");
  if (_0x580e58) {
    _0x580e58.classList.remove("ql-native-send-active");
    _0x580e58.style.animation = "";
  }
  const _0xb7ee28 = document.getElementById("ql-floating");
  if (_0xb7ee28) {
    _0xb7ee28.style.display = "";
    _0xb7ee28.style.opacity = "0";
    _0xb7ee28.style.transform = "scale(0.95)";
    requestAnimationFrame(() => {
      _0xb7ee28.style.transition = "opacity 0.4s ease, transform 0.4s ease";
      _0xb7ee28.style.opacity = "1";
      _0xb7ee28.style.transform = "scale(1) translateX(0)";
    });
  } else {
    _buildFloatingUI();
  }
}
function injectNativeChatOverlay() {
  const _0x41d234 = document.querySelector("form#chat-input");
  if (!_0x41d234) {
    setTimeout(injectNativeChatOverlay, 500);
    return;
  }
  if (!document.getElementById("ql-native-badge")) {
    const _0x33f0be = getComputedStyle(_0x41d234).position;
    if (_0x33f0be === "static") {
      _0x41d234.style.position = "relative";
    }
    const _0x3ab40a = document.createElement("div");
    _0x3ab40a.id = "ql-native-badge";
    _0x3ab40a.className = "ql-native-badge";
    _0x3ab40a.innerHTML = "⚡ <span>Suhaib Abid</span>";
    _0x41d234.appendChild(_0x3ab40a);
  }
  if (!document.getElementById("ql-native-return-btn")) {
    const _0x358d6c = document.createElement("button");
    _0x358d6c.id = "ql-native-return-btn";
    _0x358d6c.className = "ql-native-return-btn";
    _0x358d6c.innerHTML = "← Back to Suhaib Abid";
    _0x358d6c.addEventListener("click", _0x58a4e2 => {
      _0x58a4e2.preventDefault();
      _0x58a4e2.stopPropagation();
      deactivateNativeChat();
    });
    _0x41d234.parentElement.insertBefore(_0x358d6c, _0x41d234.nextSibling);
  }
  const _0x12bf17 = document.getElementById("chatinput-send-message-button");
  if (_0x12bf17) {
    _0x12bf17.classList.add("ql-native-send-active");
  }
  function _0x5a753d(_0x5c8d36) {
    if (!qlNativeChatActive) {
      return;
    }
    const _0x4448d6 = _0x41d234.querySelector("[contenteditable=\"true\"]");
    const _0x227acd = _0x4448d6 ? (_0x4448d6.innerText || _0x4448d6.textContent || "").trim() : "";
    if (_0x227acd) {
      addToChatHistory(_0x227acd, "ok");
    }
  }
  function _0x59744c(_0x4dc245) {
    if (!qlNativeChatActive) {
      return;
    }
    const _0x14230b = _0x41d234.querySelector("[contenteditable=\"true\"]");
    const _0xb5832f = _0x14230b ? (_0x14230b.innerText || _0x14230b.textContent || "").trim() : "";
    if (_0xb5832f) {
      addToChatHistory(_0xb5832f, "ok");
    }
  }
  function _0x170a1d(_0x42c014) {
    if (!qlNativeChatActive) {
      return;
    }
    if (_0x42c014.key === "Enter" && !_0x42c014.shiftKey) {
      const _0x40e317 = _0x41d234.querySelector("[contenteditable=\"true\"]");
      const _0x3f80a6 = _0x40e317 ? (_0x40e317.innerText || _0x40e317.textContent || "").trim() : "";
      if (_0x3f80a6) {
        addToChatHistory(_0x3f80a6, "ok");
      }
    }
  }
  if (_0x12bf17) {
    _0x12bf17.addEventListener("click", _0x5a753d, true);
  }
  _0x41d234.addEventListener("submit", _0x59744c, true);
  _0x41d234.addEventListener("keydown", _0x170a1d, true);
  qlNativeChatCleanup = function () {
    if (_0x12bf17) {
      _0x12bf17.removeEventListener("click", _0x5a753d, true);
    }
    _0x41d234.removeEventListener("submit", _0x59744c, true);
    _0x41d234.removeEventListener("keydown", _0x170a1d, true);
  };
}
async function sendViaNativeChat(_0x488ab3, _0x3fec21) {
  addToChatHistory(_0x488ab3, "ok");
}
function showNativeSendingOverlay(_0x4d4c5d) {
  const _0x110872 = "ql-native-sending-overlay";
  const _0xf4e0c2 = document.getElementById(_0x110872);
  if (!_0x4d4c5d) {
    if (_0xf4e0c2) {
      _0xf4e0c2.remove();
    }
    return;
  }
  if (_0xf4e0c2) {
    return;
  }
  const _0x36a4f1 = document.createElement("div");
  _0x36a4f1.id = _0x110872;
  _0x36a4f1.className = "ql-native-sending-overlay";
  _0x36a4f1.innerHTML = "<div class=\"ql-spinner\"></div> Enviando prompt...";
  document.body.appendChild(_0x36a4f1);
}
function showNativeChatToast(_0x515686, _0x4d6d07) {
  const _0x481af7 = document.getElementById("ql-native-toast");
  if (_0x481af7) {
    _0x481af7.remove();
  }
  const _0x578c01 = document.createElement("div");
  _0x578c01.id = "ql-native-toast";
  _0x578c01.className = "ql-native-toast ql-native-toast-" + _0x4d6d07;
  _0x578c01.textContent = _0x515686;
  document.body.appendChild(_0x578c01);
  requestAnimationFrame(() => _0x578c01.classList.add("ql-native-toast-visible"));
  setTimeout(() => {
    _0x578c01.classList.remove("ql-native-toast-visible");
    setTimeout(() => _0x578c01.remove(), 300);
  }, 3000);
}
function setupNativeChatButton() {
  const _0x2be6c8 = document.getElementById("ql-native-chat-btn");
  if (!_0x2be6c8) {
    return;
  }
  _0x2be6c8.addEventListener("click", () => {
    activateNativeChat();
  });
}
chrome.storage.local.get(["ql_native_chat"], _0x370027 => {
  if (_0x370027.ql_native_chat === true) {
    qlNativeChatActive = true;
    setTimeout(() => {
      const _0x297aed = document.getElementById("ql-floating");
      if (_0x297aed) {
        _0x297aed.style.display = "none";
      }
      injectNativeChatOverlay();
    }, 500);
  }
});
window.addEventListener("message", _0x468d89 => {
  if (!_0x468d89.data || _0x468d89.data.type !== "lovableTokenFound") {
    return;
  }
  if (_0x468d89.origin !== "https://lovable.dev") {
    return;
  }
  const _0x507396 = {};
  if (_0x468d89.data.token && typeof _0x468d89.data.token === "string") {
    _0x507396.lovable_token = _0x468d89.data.token.replace(/^Bearer\s+/i, "").trim();
  }
  if (_0x468d89.data.projectId && typeof _0x468d89.data.projectId === "string") {
    _0x507396.lovable_projectId = _0x468d89.data.projectId;
  }
  if (!Object.keys(_0x507396).length) {
    return;
  }
  chrome.storage.local.set(_0x507396, () => {
    updateSyncStatus();
    setTimeout(updateSyncStatus, 200);
    setTimeout(updateSyncStatus, 800);
  });
});
;
(() => {
  const _0x3a58e8 = "https://wa.me/923497641385";
  const _0x18d00e = [];
  let _0x2fc567 = false;
  function _0x49a34e() {
    _0x2fc567 = false;
    try {
      const _0x4ddca8 = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      const _0x3c7bb8 = [];
      let _0x528c68;
      while (_0x528c68 = _0x4ddca8.nextNode()) {
        _0x3c7bb8.push(_0x528c68);
      }
      for (const _0x3a808f of _0x3c7bb8) {
        let _0xf903ac = _0x3a808f.nodeValue;
        for (const [_0x1be02e, _0x4ddbdd] of _0x18d00e) {
          _0xf903ac = _0xf903ac.replace(_0x1be02e, _0x4ddbdd);
        }
        if (_0xf903ac !== _0x3a808f.nodeValue) {
          _0x3a808f.nodeValue = _0xf903ac;
        }
      }
      for (const _0x16a7c1 of document.querySelectorAll("a")) {
        const _0x296d0d = (_0x16a7c1.textContent || "").toLowerCase();
        const _0x376ede = (_0x16a7c1.getAttribute("href") || "").toLowerCase();
        if (_0x296d0d.includes("support") || _0x296d0d.includes("WHTSAPP") || _0x296d0d.includes("license") || _0x376ede.includes("WHTSAPP") || _0x376ede.includes("support")) {
          _0x16a7c1.setAttribute("href", _0x3a58e8);
          _0x16a7c1.setAttribute("target", "_blank");
          _0x16a7c1.setAttribute("rel", "noopener noreferrer");
        }
      }
    } catch (_0x42f633) {}
  }
  function _0x1fe50f() {
    if (!_0x2fc567) {
      _0x2fc567 = true;
      setTimeout(_0x49a34e, 50);
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", _0x1fe50f, {
      once: true
    });
  } else {
    _0x1fe50f();
  }
  try {
    new MutationObserver(_0x1fe50f).observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true
    });
  } catch (_0x5442e1) {}
})();
;
(() => {
  const _0xdf121 = "Developed by Lovable Hut BD";
  const _0x91954c = "https://wa.me/923497641385";
  const _0x283964 = [];
  function _0x2df05c() {
    try {
      const _0x405610 = ["#ql-footer .ql-badge-mz", ".ql-badge-mz", ".ql-footer .ql-badge-mz", ".sp-footer-badge", "#sp-footer-badge"];
      for (const _0x4df477 of _0x405610) {
        document.querySelectorAll(_0x4df477).forEach(_0x19c75c => {
          _0x19c75c.textContent = _0x19c75c.classList && _0x19c75c.classList.contains("sp-footer-badge") ? _0xdf121 + " • v3.8.6" : _0xdf121;
        });
      }
      const _0x480cb6 = document.createTreeWalker(document.body || document.documentElement, NodeFilter.SHOW_TEXT);
      let _0x95939f;
      while (_0x95939f = _0x480cb6.nextNode()) {
        let _0x4b8c47 = _0x95939f.nodeValue;
        for (const _0x31f943 of _0x283964) {
          _0x4b8c47 = _0x4b8c47.replace(_0x31f943, _0xdf121);
        }
        if (_0x4b8c47 !== _0x95939f.nodeValue) {
          _0x95939f.nodeValue = _0x4b8c47;
        }
      }
      document.querySelectorAll("[data-i18n=\"footer.brand\"]").forEach(_0x262954 => {
        _0x262954.removeAttribute("data-i18n");
        _0x262954.textContent = _0xdf121;
      });
      document.querySelectorAll("a").forEach(_0x517411 => {
        const _0x25f871 = (_0x517411.textContent || "").toLowerCase();
        const _0x50fa8c = (_0x517411.getAttribute("href") || "").toLowerCase();
        if (_0x25f871.includes("support") || _0x25f871.includes("WHTSAPP") || _0x25f871.includes("license") || _0x50fa8c.includes("WHTSAPP") || _0x50fa8c.includes("support")) {
          _0x517411.href = _0x91954c;
          _0x517411.target = "_blank";
          _0x517411.rel = "noopener noreferrer";
        }
      });
    } catch (_0x59ae15) {}
  }
  const _0x3b52d7 = () => {
    _0x2df05c();
    setTimeout(_0x2df05c, 100);
    setTimeout(_0x2df05c, 500);
    setTimeout(_0x2df05c, 1500);
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", _0x3b52d7, {
      once: true
    });
  } else {
    _0x3b52d7();
  }
  try {
    new MutationObserver(() => {
      clearTimeout(window.__gringowFooterTimer);
      window.__gringowFooterTimer = setTimeout(_0x2df05c, 30);
    }).observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true
    });
  } catch (_0x3d513f) {}
})();