(function () {
  var DISMISSED_KEY = "lz_update_dismissed";
  var INFO_KEY = "lz_update_info";
  var POPUP_ID = "lz-update-popup";
  var OVERLAY_ID = "lz-update-overlay";

  function getDismissedVersion() {
    try { return JSON.parse(localStorage.getItem(DISMISSED_KEY) || "{}").version; } catch(e) { return null; }
  }

  function setDismissedVersion(version) {
    try { localStorage.setItem(DISMISSED_KEY, JSON.stringify({version: version, at: Date.now()})); } catch(e) {}
  }

  function createPopup(info) {
    if (document.getElementById(POPUP_ID)) return;

    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    overlay.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:2147483647;display:flex;align-items:center;justify-content:center;direction:ltr";

    var popup = document.createElement("div");
    popup.id = POPUP_ID;
    popup.style.cssText = "background:linear-gradient(135deg,#1a1a2e 0%,#16213e 100%);border-radius:16px;padding:32px;max-width:400px;width:90%;box-shadow:0 8px 32px rgba(0,0,0,0.4);text-align:center;font-family:Arial,Helvetica,sans-serif;border:1px solid rgba(255,255,255,0.1)";

    var icon = document.createElement("div");
    icon.innerHTML = '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4fc3f7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>';
    icon.style.marginBottom = "16px";

    var title = document.createElement("h2");
    title.textContent = "Update Available";
    title.style.cssText = "color:#fff;font-size:22px;font-weight:700;margin:0 0 8px 0";

    var verInfo = document.createElement("p");
    verInfo.textContent = "Version " + info.latestVersion + " is now available";
    verInfo.style.cssText = "color:#90caf9;font-size:14px;margin:0 0 4px 0";

    var currentVer = document.createElement("p");
    try { currentVer.textContent = "Current: v" + chrome.runtime.getManifest().version; } catch(e) {}
    currentVer.style.cssText = "color:#888;font-size:12px;margin:0 0 20px 0";

    var notes = document.createElement("div");
    if (info.releaseNotes) {
      notes.textContent = info.releaseNotes;
      notes.style.cssText = "color:#ccc;font-size:13px;margin:0 0 20px 0;text-align:left;background:rgba(0,0,0,0.3);padding:12px;border-radius:8px;max-height:100px;overflow-y:auto";
    }

    var btnRow = document.createElement("div");
    btnRow.style.cssText = "display:flex;gap:12px;justify-content:center";

    var updateBtn = document.createElement("button");
    updateBtn.textContent = "Update Now";
    updateBtn.style.cssText = "padding:10px 24px;background:linear-gradient(135deg,#4fc3f7,#0288d1);color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:14px;font-weight:600;transition:transform 0.2s";
    updateBtn.onmouseover = function () { this.style.transform = "scale(1.05)"; };
    updateBtn.onmouseout = function () { this.style.transform = "scale(1)"; };
    updateBtn.onclick = function () {
      if (info.downloadUrl) {
        window.open(info.downloadUrl, "_blank");
      }
      dismiss(info.latestVersion);
    };

    var laterBtn = document.createElement("button");
    laterBtn.textContent = "Update Later";
    laterBtn.style.cssText = "padding:10px 24px;background:transparent;color:#90caf9;border:1px solid rgba(144,202,249,0.3);border-radius:8px;cursor:pointer;font-size:14px;font-weight:600;transition:all 0.2s";
    laterBtn.onmouseover = function () { this.style.background = "rgba(144,202,249,0.1)"; };
    laterBtn.onmouseout = function () { this.style.background = "transparent"; };
    laterBtn.onclick = function () { dismiss(info.latestVersion); };

    btnRow.appendChild(updateBtn);
    btnRow.appendChild(laterBtn);
    popup.appendChild(icon);
    popup.appendChild(title);
    popup.appendChild(verInfo);
    popup.appendChild(currentVer);
    if (info.releaseNotes) popup.appendChild(notes);
    popup.appendChild(btnRow);
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
  }

  function dismiss(version) {
    var popup = document.getElementById(POPUP_ID);
    var overlay = document.getElementById(OVERLAY_ID);
    if (popup) popup.remove();
    if (overlay) overlay.remove();
    setDismissedVersion(version);
  }

  function handleUpdate(info) {
    if (!info || !info.latestVersion) return;
    if (getDismissedVersion() === info.latestVersion) return;
    createPopup(info);
  }

  chrome.runtime.onMessage.addListener(function (msg) {
    if (msg && msg.type === "LZ_UPDATE_AVAILABLE") {
      handleUpdate(msg.info);
    }
  });

  chrome.storage.local.get(INFO_KEY, function (result) {
    var info = result[INFO_KEY];
    if (info) handleUpdate(info);
  });
})();
