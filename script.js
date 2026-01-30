// 锦江酒店前厅系统升级页面 - 脚本文件
// 等待页面DOM完全加载后执行脚本
document.addEventListener('DOMContentLoaded', function() {
    // 获取「立即咨询」按钮
    const consultBtn = document.querySelector('.action-btn');
    
    // 示例：添加按钮点击事件（可根据需求修改）
    if (consultBtn) {
        consultBtn.addEventListener('click', function() {
            // 点击后可实现：跳转到IT服务台、弹出扫码提示、打开咨询窗口等
            alert('已为您跳转至IT服务台咨询通道，请扫码继续操作～');
            // 若需要跳转链接，取消注释下方代码并修改URL
            // window.location.href = '你的咨询页面链接';
        });
    }

    // 后续可添加更多交互逻辑：如卡片动画、二维码放大、移动端适配优化等
});
