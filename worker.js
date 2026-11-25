export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="gu">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>VABRA AI STUDIO</title>
  <style>
    * { box-sizing: border-box; font-family: system-ui, -apple-system, sans-serif; }
    body { margin: 0; background: #0f172a; color: #f8fafc; padding: 20px; }
    .container { max-width: 820px; margin: 0 auto; background: #1e293b; padding: 24px; border-radius: 14px; }
    .top-bar { display: flex; justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap; }
    h1 { margin: 0; font-size: 1.6rem; color: #38bdf8; }
    select, textarea, button { width: 100%; border-radius: 10px; border: 1px solid #334155; font-size: 1rem; }
    select { width: auto; padding: 8px 12px; background: #0f172a; color: #f8fafc; }
    .tools { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 10px; margin: 18px 0; }
    .tool-btn { padding: 10px; background: #0f172a; color: #e2e8f0; cursor: pointer; font-weight: 600; }
    .tool-btn.active { background: #0284c7; border-color: #38bdf8; color: #fff; }
    textarea { min-height: 120px; padding: 12px; background: #0f172a; color: #f8fafc; margin-bottom: 12px; resize: vertical; }
    .actions { display: flex; gap: 10px; flex-wrap: wrap; }
    button.primary { background: #0284c7; color: #fff; border: none; padding: 12px 18px; cursor: pointer; font-weight: 600; flex: 1; }
    button.secondary { background: #334155; color: #f8fafc; border: none; padding: 12px 18px; cursor: pointer; width: auto; }
    .output-box { margin-top: 20px; background: #0f172a; padding: 16px; border-radius: 10px; border: 1px solid #334155; white-space: pre-wrap; line-height: 1.6; }
  </style>
</head>
<body>
  <div class="container">
    <div class="top-bar">
      <h1 id="title">VABRA AI STUDIO</h1>
      <select id="langSelect" onchange="changeLang()">
        <option value="gu">ગુજરાતી</option>
        <option value="hi">हिन्दी</option>
        <option value="en">English</option>
      </select>
    </div>

    <div class="tools">
      <button class="tool-btn active" onclick="selectTool(this, 'story')" id="btnStory">Story / Script</button>
      <button class="tool-btn" onclick="selectTool(this, 'img2img')" id="btnImg2Img">Image to Image</button>
      <button class="tool-btn" onclick="selectTool(this, 'img2vid')" id="btnImg2Vid">Image to Video</button>
      <button class="tool-btn" onclick="selectTool(this, 'txt2img')" id="btnTxt2Img">Text to Image</button>
    </div>

    <textarea id="promptInput" placeholder="અહીં તમારો વિચાર અથવા પ્રોમ્પ્ટ લખો..."></textarea>

    <div class="actions">
      <button class="primary" onclick="generateDraft()" id="btnGenerate">પ્રોમ્પ્ટ / સ્ક્રિપ્ટ તૈયાર કરો</button>
      <button class="secondary" onclick="copyOutput()" id="btnCopy">કોપી કરો</button>
    </div>

    <div class="output-box" id="outputBox">તમારું આઉટપુટ અહીં દેખાશે.</div>
  </div>

  <script>
    let currentTool = "story";

    const i18n = {
      gu: {
        placeholder: "અહીં તમારો વિચાર અથવા પ્રોમ્પ્ટ લખો...",
        generate: "પ્રોમ્પ્ટ / સ્ક્રિપ્ટ તૈયાર કરો",
        copy: "કોપી કરો",
        copied: "કોપી થઈ ગયું!",
        empty: "કૃપા કરીને પહેલા કંઈક લખો."
      },
      hi: {
        placeholder: "यहाँ अपना विचार या प्रॉम्प्ट लिखें...",
        generate: "प्रॉम्प्ट / स्क्रिप्ट तैयार करें",
        copy: "कॉपी करें",
        copied: "कॉपी हो गया!",
        empty: "कृपया पहले कुछ लिखें।"
      },
      en: {
        placeholder: "Write your idea or prompt here...",
        generate: "Generate Prompt / Script",
        copy: "Copy",
        copied: "Copied!",
        empty: "Please enter a prompt first."
      }
    };

    function selectTool(btn, tool) {
      currentTool = tool;
      document.querySelectorAll(".tool-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    }

    function changeLang() {
      const lang = document.getElementById("langSelect").value;
      document.getElementById("promptInput").placeholder = i18n[lang].placeholder;
      document.getElementById("btnGenerate").textContent = i18n[lang].generate;
      document.getElementById("btnCopy").textContent = i18n[lang].copy;
    }

    function generateDraft() {
      const lang = document.getElementById("langSelect").value;
      const text = document.getElementById("promptInput").value.trim();
      const box = document.getElementById("outputBox");

      if (!text) {
        box.textContent = i18n[lang].empty;
        return;
      }

      box.textContent =
        "Tool: " + currentTool.toUpperCase() + "\\n" +
        "Language: " + lang.toUpperCase() + "\\n\\n" +
        "Prompt:\\n" + text;
    }

    function copyOutput() {
      const lang = document.getElementById("langSelect").value;
      const text = document.getElementById("outputBox").textContent;
      navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById("btnCopy");
        const old = btn.textContent;
        btn.textContent = i18n[lang].copied;
        setTimeout(() => btn.textContent = old, 1500);
      });
    }
  </script>
</body>
</html>`;

    return new Response(html, {
      headers: { "content-type": "text/html; charset=utf-8" }
    });
  }
};

