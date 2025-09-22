const vibes = ["青春直白","理工理性","溫暖關懷"];
let vi = 0;

const $ = (id)=>document.getElementById(id);
const vibeTag = $("vibeTag");

function makeLine(topic, usp, vibe, variant){
  // 最小規則：依 vibe 與版本給不同句式（≤80 字）
  const t = topic.trim() || "今天的主題";
  const u = usp.trim() || "一個實用賣點";
  const q = (txt)=> (txt.length>80? txt.slice(0,80):txt);

  if(vibe==="青春直白"){
    return q( variant==="A"
      ? `${t}｜${u}，現在就試！留言告訴我你的做法～`
      : `${t} 必學！${u}。收藏起來，今晚 10 分鐘完成。` );
  }
  if(vibe==="理工理性"){
    return q( variant==="A"
      ? `${t}：以 ${u} 為核心，步驟化完成；避免過度承諾，結果可驗證。`
      : `${t} 實作範本（${u}）。輸入→輸出可重現，適合 A/B 測試。` );
  }
  // 溫暖關懷
  return q( variant==="A"
    ? `${t}，慢慢來就好。用 ${u} 幫你踏出第一步，一起穩穩前進。`
    : `如果今天只做一件小事，試試 ${u}。給自己一點鼓勵吧：${t}。` );
}

function render(){
  const vibe = vibes[vi];
  vibeTag.textContent = vibe;
  $("outA").textContent = makeLine($("topic").value, $("usp").value, vibe, "A");
  $("outB").textContent = makeLine($("topic").value, $("usp").value, vibe, "B");
}

$("gen").addEventListener("click", render);
$("cycle").addEventListener("click", ()=>{ vi = (vi+1)%vibes.length; render(); });
// 初次渲染
render();
