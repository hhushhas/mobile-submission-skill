(() => {
  const canvas = document.querySelector("#release-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let width = 0;
  let height = 0;
  let ratio = 1;
  let frame = 0;
  let animationId = 0;

  const labels = ["Repo", "Gate A", "Packet", "Console", "Apple", "Google", "Gate B"];
  const colors = ["#7dd3c7", "#f3b562", "#a5b4fc", "#ef7d73"];

  function resize() {
    ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function nodePosition(index) {
    const usableWidth = Math.max(width - 160, 240);
    const startX = width > 900 ? width * 0.45 : 40;
    const x = startX + (usableWidth / (labels.length - 1)) * index;
    const y = height * (0.34 + Math.sin(index * 1.2 + frame * 0.014) * 0.035);
    return { x, y };
  }

  function drawPanel(x, y, w, h, title, lines) {
    ctx.fillStyle = "rgba(23, 36, 43, 0.82)";
    ctx.strokeStyle = "rgba(245, 242, 234, 0.18)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, 8);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#7dd3c7";
    ctx.font = "700 13px Inter, system-ui, sans-serif";
    ctx.fillText(title, x + 16, y + 24);

    ctx.fillStyle = "rgba(245, 242, 234, 0.76)";
    ctx.font = "12px SFMono-Regular, Consolas, monospace";
    lines.forEach((line, idx) => ctx.fillText(line, x + 16, y + 52 + idx * 20));
  }

  function draw() {
    frame += reducedMotion.matches ? 0 : 1;
    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = "#101820";
    ctx.fillRect(0, 0, width, height);

    const gridSize = 44;
    ctx.strokeStyle = "rgba(245, 242, 234, 0.055)";
    ctx.lineWidth = 1;
    for (let x = (frame * 0.12) % gridSize; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    const nodes = labels.map((_, index) => nodePosition(index));
    ctx.lineWidth = 2;
    nodes.forEach((node, index) => {
      if (index === 0) return;
      const prev = nodes[index - 1];
      ctx.strokeStyle = "rgba(125, 211, 199, 0.32)";
      ctx.beginPath();
      ctx.moveTo(prev.x, prev.y);
      ctx.bezierCurveTo(prev.x + 60, prev.y - 40, node.x - 60, node.y + 40, node.x, node.y);
      ctx.stroke();
    });

    nodes.forEach((node, index) => {
      const pulse = reducedMotion.matches ? 0 : Math.sin(frame * 0.045 + index) * 3;
      ctx.fillStyle = colors[index % colors.length];
      ctx.beginPath();
      ctx.arc(node.x, node.y, 8 + pulse * 0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "rgba(245, 242, 234, 0.34)";
      ctx.stroke();

      ctx.fillStyle = "rgba(245, 242, 234, 0.78)";
      ctx.font = "700 12px Inter, system-ui, sans-serif";
      ctx.fillText(labels[index], node.x - 18, node.y + 30);
    });

    if (width > 760) {
      drawPanel(width - 390, height * 0.52, 310, 150, "submission packet", [
        "status: ready_warn",
        "stores: [ios, android]",
        "action: dry-run",
        "risks: 2",
      ]);
      drawPanel(width - 520, height * 0.16, 330, 130, "human console tasks", [
        "control: radio",
        "select: no data collected",
        "confirm: google data safety done",
      ]);
    }

    if (!reducedMotion.matches) {
      animationId = window.requestAnimationFrame(draw);
    }
  }

  function start() {
    window.cancelAnimationFrame(animationId);
    resize();
    draw();
  }

  window.addEventListener("resize", start);
  reducedMotion.addEventListener?.("change", start);
  start();
})();
