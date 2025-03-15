// 在需要图表的页面中引入此文件
document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('carbonChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['电力', '燃气', '交通'],
            datasets: [{
                label: '碳排放来源分布 (kg CO₂)',
                data: [65, 59, 80],
                backgroundColor: [
                    'rgba(46, 125, 50, 0.8)',
                    'rgba(25, 118, 210, 0.8)',
                    'rgba(129, 199, 132, 0.8)'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                title: { display: true, text: '碳排放来源分析' }
            }
        }
    });
});