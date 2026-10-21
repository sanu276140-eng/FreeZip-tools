// EXACT DATA OF 60 BUTTONS ORGANIZED INTO 8 CATEGORIES (4-COLUMN GRIDS)
// Every single tool has its own distinct hex color code.
const CATEGORIES_DATA = [
  {
    id: "cat-pdf",
    title: "PDF & Document Tools",
    badge: "Pdf",
    tools: [
      { name: "Merge PDF", color: "#E11D48", icon: "fa-solid fa-object-group" },
      { name: "Split PDF", color: "#EF4444", icon: "fa-solid fa-scissors" },
      { name: "Compress PDF", color: "#F43F5E", icon: "fa-solid fa-file-zipper" },
      { name: "PDF to Word", color: "#FB7185", icon: "fa-solid fa-file-word" },
      { name: "Word to PDF", color: "#EA580C", icon: "fa-solid fa-file-lines" },
      { name: "PDF to Image", color: "#F97316", icon: "fa-solid fa-file-image" },
      { name: "Protect PDF", color: "#FB923C", icon: "fa-solid fa-lock" },
      { name: "Sign PDF", color: "#D97706", icon: "fa-solid fa-signature" }
    ]
  },
  {
    id: "cat-code",
    title: "Code & Developer Tools",
    badge: "Code",
    tools: [
      { name: "JSON Formatter", color: "#2563EB", icon: "fa-solid fa-code" },
      { name: "SQL Prettify", color: "#1D4ED8", icon: "fa-solid fa-database" },
      { name: "HTML Minifier", color: "#0284C7", icon: "fa-solid fa-file-code" },
      { name: "CSS Minifier", color: "#0EA5E9", icon: "fa-solid fa-file-contract" },
      { name: "JS Obfuscator", color: "#06B6D4", icon: "fa-brands fa-js" },
      { name: "Base64 Codec", color: "#0891B2", icon: "fa-solid fa-arrow-right-arrow-left" },
      { name: "URL Encoder", color: "#0D9488", icon: "fa-solid fa-link" },
      { name: "cURL to Fetch", color: "#14B8A6", icon: "fa-solid fa-terminal" }
    ]
  },
  {
    id: "cat-design",
    title: "Design & Styling Studio",
    badge: "Design",
    tools: [
      { name: "Color Palette", color: "#4F46E5", icon: "fa-solid fa-palette" },
      { name: "CSS Gradient", color: "#6366F1", icon: "fa-solid fa-fill-drip" },
      { name: "Box Shadow", color: "#818CF8", icon: "fa-solid fa-cube" },
      { name: "Glassmorphism", color: "#7C3AED", icon: "fa-solid fa-wand-magic-sparkles" },
      { name: "Border Radius", color: "#8B5CF6", icon: "fa-solid fa-draw-polygon" },
      { name: "SVG Optimizer", color: "#A855F7", icon: "fa-solid fa-bezier-curve" },
      { name: "Color Contrast", color: "#9333EA", icon: "fa-solid fa-circle-half-stroke" },
      { name: "Favicon Maker", color: "#C026D3", icon: "fa-solid fa-star" }
    ]
  },
  {
    id: "cat-security",
    title: "Security & Cryptography",
    badge: "Secure",
    tools: [
      { name: "SHA-256 Hash", color: "#15803D", icon: "fa-solid fa-fingerprint" },
      { name: "MD5 Generator", color: "#16A34A", icon: "fa-solid fa-shield" },
      { name: "Password Maker", color: "#22C55E", icon: "fa-solid fa-shield-halved" },
      { name: "UUID Gen v4", color: "#10B981", icon: "fa-solid fa-barcode" },
      { name: "JWT Inspector", color: "#059669", icon: "fa-solid fa-id-card" },
      { name: "Bcrypt Salt", color: "#84CC16", icon: "fa-solid fa-user-lock" },
      { name: "RSA Key Pair", color: "#65A30D", icon: "fa-solid fa-vault" },
      { name: "HTPASSWD Gen", color: "#4D7C0F", icon: "fa-solid fa-server" }
    ]
  },
  {
    id: "cat-text",
    title: "Text & Writing Utilities",
    badge: "Text",
    tools: [
      { name: "Case Converter", color: "#DB2777", icon: "fa-solid fa-font" },
      { name: "Word Counter", color: "#BE185D", icon: "fa-solid fa-arrow-down-9-1" },
      { name: "Slugify Text", color: "#9D174D", icon: "fa-solid fa-heading" },
      { name: "Lorem Ipsum", color: "#E879F9", icon: "fa-solid fa-paragraph" },
      { name: "Markdown Live", color: "#A21CAF", icon: "fa-brands fa-markdown" },
      { name: "Diff Checker", color: "#86198F", icon: "fa-solid fa-code-merge" },
      { name: "Regex Tester", color: "#701A75", icon: "fa-solid fa-asterisk" },
      { name: "Char Counter", color: "#EC4899", icon: "fa-solid fa-calculator" }
    ]
  },
  {
    id: "cat-web",
    title: "Web & Networking Tools",
    badge: "Web",
    tools: [
      { name: "HTTP Status", color: "#3B82F6", icon: "fa-solid fa-network-wired" },
      { name: "DNS Records", color: "#60A5FA", icon: "fa-solid fa-globe" },
      { name: "Meta Tag Gen", color: "#38BDF8", icon: "fa-solid fa-tags" },
      { name: "Robots.txt Maker", color: "#0284C7", icon: "fa-solid fa-robot" },
      { name: "XML Sitemap", color: "#0369A1", icon: "fa-solid fa-sitemap" },
      { name: "Webhook Tester", color: "#4338CA", icon: "fa-solid fa-satellite-dish" },
      { name: "SSL Checker", color: "#3730A3", icon: "fa-solid fa-lock" },
      { name: "User Agent", color: "#312E81", icon: "fa-solid fa-laptop-code" }
    ]
  },
  {
    id: "cat-converters",
    title: "Format & Data Converters",
    badge: "Convert",
    tools: [
      { name: "JSON to CSV", color: "#D97706", icon: "fa-solid fa-table" },
      { name: "CSV to JSON", color: "#F59E0B", icon: "fa-solid fa-file-csv" },
      { name: "YAML to JSON", color: "#FBBF24", icon: "fa-solid fa-brackets-curly" },
      { name: "XML to JSON", color: "#B45309", icon: "fa-solid fa-code-compare" },
      { name: "Image to WebP", color: "#EA580C", icon: "fa-solid fa-image" },
      { name: "Timestamp Conv", color: "#CA8A04", icon: "fa-solid fa-clock" },
      { name: "Hex to RGB", color: "#A16207", icon: "fa-solid fa-eye-dropper" },
      { name: "Unit Converter", color: "#78350F", icon: "fa-solid fa-scale-balanced" }
    ]
  },
  {
    id: "cat-quick",
    title: "Essential Utilities",
    badge: "Generator",
    tools: [
      { name: "QR Generator", color: "#E11D48", icon: "fa-solid fa-qrcode" },
      { name: "Barcode Gen", color: "#C2410C", icon: "fa-solid fa-bars" },
      { name: "Screen Ruler", color: "#0284C7", icon: "fa-solid fa-ruler-combined" },
      { name: "Stopwatch", color: "#475569", icon: "fa-solid fa-stopwatch" }
    ]
  }
];

// Helper: Calculate alpha glow from hex color
function hexToRgba(hex, alpha = 0.25) {
  hex = hex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

let searchFilter = '';

function renderStructure() {
  const container = document.getElementById('categoriesWrapper');
  const noResults = document.getElementById('noResultsState');
  const moreInd = document.getElementById('moreIndicator');
  const countBadge = document.getElementById('headerCountBadge');

  let visibleToolCount = 0;
  let html = '';

  CATEGORIES_DATA.forEach((category) => {
    const filteredTools = category.tools.filter(t => {
      if (!searchFilter) return true;
      const q = searchFilter.toLowerCase().trim();
      return t.name.toLowerCase().includes(q) || category.title.toLowerCase().includes(q);
    });

    if (filteredTools.length > 0) {
      visibleToolCount += filteredTools.length;

      html += `
        <section class="space-y-4">
          <div class="flex items-center gap-3">
            <div class="category-box-header px-3 py-1 rounded bg-slate-50 dark:bg-slate-900/60 inline-flex items-center gap-2">
              <span class="text-xs sm:text-sm font-bold tracking-tight text-slate-800 dark:text-slate-100 uppercase">
                ${category.title}
              </span>
              <span class="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                ${category.badge}
              </span>
            </div>
            <div class="h-[1px] flex-1 bg-slate-200 dark:border-slate-800 border-b border-dashed"></div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-3.5">
            ${filteredTools.map(tool => {
              const glow = hexToRgba(tool.color, 0.28);
              const iconBg = hexToRgba(tool.color, 0.12);

              return `
                <button 
                  onclick="handleToolClick('${tool.name}', '${tool.color}')"
                  style="--tool-color: ${tool.color}; --tool-glow: ${glow};"
                  class="capsule-btn group flex items-center justify-between px-3.5 py-2.5 rounded-full bg-white dark:bg-[#111827] text-slate-800 dark:text-slate-100 cursor-pointer text-left select-none"
                  title="${tool.name}"
                >
                  <div class="flex items-center gap-2.5 min-w-0">
                    <span 
                      style="background-color: ${iconBg}; color: ${tool.color};"
                      class="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs transition-transform group-hover:scale-110"
                    >
                      <i class="${tool.icon}"></i>
                    </span>
                    <span class="text-xs font-semibold truncate group-hover:text-slate-950 dark:group-hover:text-white transition-colors">
                      ${tool.name}
                    </span>
                  </div>
                  <span class="text-[10px] text-slate-400 group-hover:text-[var(--tool-color)] transition-colors pr-1">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </span>
                </button>
              `;
            }).join('')}
          </div>
        </section>
      `;
    }
  });

  countBadge.innerText = `${visibleToolCount} Tools`;

  if (visibleToolCount === 0) {
    container.innerHTML = '';
    noResults.classList.remove('hidden');
    moreInd.classList.add('hidden');
  } else {
    container.innerHTML = html;
    noResults.classList.add('hidden');
    moreInd.classList.remove('hidden');
  }
}

function handleSearch(val) {
  searchFilter = val;
  const status = document.getElementById('filterStatus');
  status.innerText = val ? `Filtering "${val}"` : 'All Active';
  renderStructure();
}

function triggerSearchButton() {
  const input = document.getElementById('toolSearchInput');
  handleSearch(input.value);
}

function clearSearch() {
  document.getElementById('toolSearchInput').value = '';
  searchFilter = '';
  document.getElementById('filterStatus').innerText = 'All Active';
  renderStructure();
}

function filterByTag(tag) {
  clearSearch();
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleToolClick(toolName, color) {
  const toast = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMessage');
  const toastPill = document.getElementById('toastColorPill');

  toastPill.style.backgroundColor = color;
  toastMsg.innerText = `Launched: ${toolName}`;

  toast.classList.remove('translate-y-12', 'opacity-0');

  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toast.classList.add('translate-y-12', 'opacity-0');
  }, 2000);
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function submitContact() {
  closeModal('contactModal');
  handleToolClick("Contact Request Received", "#10B981");
}

// ==========================================
// IMAGE TO ZIP CONVERTER ENGINE (JSZip)
// ==========================================
let selectedImageFiles = [];

function triggerImageUpload() {
  document.getElementById('heroImageZipInput').click();
}

function handleDragOver(e) {
  e.preventDefault();
  e.stopPropagation();
  const dropArea = document.getElementById('heroZipDropArea');
  dropArea.classList.add('border-red-600', 'ring-4', 'ring-red-500/20');
}

function handleDragLeave(e) {
  e.preventDefault();
  e.stopPropagation();
  const dropArea = document.getElementById('heroZipDropArea');
  dropArea.classList.remove('border-red-600', 'ring-4', 'ring-red-500/20');
}

function handleDropFiles(e) {
  e.preventDefault();
  e.stopPropagation();
  handleDragLeave(e);

  if (e.dataTransfer && e.dataTransfer.files) {
    processUploadedFiles(e.dataTransfer.files);
  }
}

function handleImageFileSelect(e) {
  if (e.target.files && e.target.files.length > 0) {
    processUploadedFiles(e.target.files);
    e.target.value = '';
  }
}

function processUploadedFiles(fileList) {
  let addedCount = 0;
  for (let i = 0; i < fileList.length; i++) {
    const file = fileList[i];
    if (file.type.startsWith('image/')) {
      selectedImageFiles.push(file);
      addedCount++;
    }
  }

  if (addedCount > 0) {
    openModal('imageZipModal');
    renderZipImageList();
    handleToolClick(`Added ${addedCount} image(s)`, "#EF4444");
  } else {
    handleToolClick("Please choose valid image files", "#F59E0B");
  }
}

function formatFileSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

function renderZipImageList() {
  const container = document.getElementById('zipThumbnailsContainer');
  const emptyState = document.getElementById('zipEmptyPlaceholder');
  const countEl = document.getElementById('zipFileCount');
  const sizeEl = document.getElementById('zipTotalSizeText');
  const downloadBtn = document.getElementById('downloadZipBtn');

  countEl.innerText = `${selectedImageFiles.length} image${selectedImageFiles.length === 1 ? '' : 's'} selected`;

  if (selectedImageFiles.length === 0) {
    container.innerHTML = '';
    emptyState.classList.remove('hidden');
    sizeEl.innerText = 'Total: 0 KB';
    downloadBtn.disabled = true;
    downloadBtn.classList.add('opacity-50', 'cursor-not-allowed');
    return;
  }

  emptyState.classList.add('hidden');
  downloadBtn.disabled = false;
  downloadBtn.classList.remove('opacity-50', 'cursor-not-allowed');

  let totalBytes = 0;
  container.innerHTML = selectedImageFiles.map((file, idx) => {
    totalBytes += file.size;
    const objectUrl = URL.createObjectURL(file);
    return `
      <div class="flex items-center justify-between p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 gap-2">
        <div class="flex items-center gap-2.5 min-w-0">
          <img src="${objectUrl}" class="w-9 h-9 object-cover rounded shrink-0 border border-slate-200 dark:border-slate-700">
          <div class="min-w-0 text-left">
            <p class="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate" title="${file.name}">${file.name}</p>
            <p class="text-[10px] font-mono text-slate-400">${formatFileSize(file.size)}</p>
          </div>
        </div>
        <button onclick="removeZipImage(${idx})" class="p-1.5 text-slate-400 hover:text-red-500 rounded transition-colors" title="Remove">
          <i class="fa-solid fa-trash-can text-xs"></i>
        </button>
      </div>
    `;
  }).join('');

  sizeEl.innerText = `Total: ${formatFileSize(totalBytes)}`;
}

function removeZipImage(index) {
  selectedImageFiles.splice(index, 1);
  renderZipImageList();
}

function clearAllZipImages() {
  selectedImageFiles = [];
  renderZipImageList();
}

async function generateAndDownloadZip() {
  if (selectedImageFiles.length === 0) {
    handleToolClick("Select at least 1 image first", "#F59E0B");
    return;
  }

  if (typeof JSZip === 'undefined') {
    handleToolClick("Compression engine loading, try again", "#EF4444");
    return;
  }

  const downloadBtn = document.getElementById('downloadZipBtn');
  const btnText = document.getElementById('downloadBtnText');
  const originalText = btnText.innerHTML;

  try {
    downloadBtn.disabled = true;
    btnText.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin mr-1"></i> Packaging ZIP...';

    const zip = new JSZip();

    selectedImageFiles.forEach((file) => {
      zip.file(file.name, file);
    });

    const zipBlob = await zip.generateAsync({
      type: "blob",
      compression: "DEFLATE",
      compressionOptions: { level: 6 }
    });

    let filename = document.getElementById('zipArchiveName').value.trim();
    if (!filename) filename = 'bettertools-images.zip';
    if (!filename.toLowerCase().endsWith('.zip')) filename += '.zip';

    const downloadUrl = URL.createObjectURL(zipBlob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(downloadUrl);

    handleToolClick(`Downloaded: ${filename}`, "#10B981");
    closeModal('imageZipModal');
  } catch (err) {
    console.error(err);
    handleToolClick("Compression error occurred", "#EF4444");
  } finally {
    downloadBtn.disabled = false;
    btnText.innerHTML = originalText;
  }
}

function toggleTheme() {
  const html = document.documentElement;
  const iconD = document.getElementById('themeIconDesktop');
  const iconM = document.getElementById('themeIconMobile');

  const isDark = html.classList.toggle('dark');
  if (isDark) {
    iconD.className = 'fa-solid fa-sun text-xs text-amber-400';
    iconM.className = 'fa-solid fa-sun text-xs text-amber-400';
    localStorage.setItem('bt_sketch_theme', 'dark');
  } else {
    iconD.className = 'fa-solid fa-moon text-xs';
    iconM.className = 'fa-solid fa-moon text-xs';
    localStorage.setItem('bt_sketch_theme', 'light');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('bt_sketch_theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    document.getElementById('themeIconDesktop').className = 'fa-solid fa-sun text-xs text-amber-400';
    document.getElementById('themeIconMobile').className = 'fa-solid fa-sun text-xs text-amber-400';
  }
  renderStructure();
});