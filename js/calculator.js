// 碳中和计算器逻辑
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('carbonForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // 获取输入值
        const electricity = parseFloat(document.getElementById('electricity').value) || 0;
        const gas = parseFloat(document.getElementById('gas').value) || 0;
        const travel = parseFloat(document.getElementById('travel').value) || 0;

        // 计算碳足迹（示例公式）
        const carbonFootprint = (electricity * 0.9) + (gas * 2.3) + (travel * 0.15);

        // 显示结果
        resultDiv.innerHTML = `
      <h4>您的月均碳足迹</h4>
      <div class="display-4 text-success">${carbonFootprint.toFixed(2)} kg CO₂</div>
      <ul class="mt-3">
        <li>建议1：使用节能灯泡可减少约 ${(carbonFootprint * 0.1).toFixed(2)} kg</li>
        <li>建议2：减少开车可减少约 ${(carbonFootprint * 0.2).toFixed(2)} kg</li>
      </ul>
    `;
    });
});