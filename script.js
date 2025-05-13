// 打开应用程序窗口
function openApp(appName) {
    const appContent = document.getElementById('appContent');
    const appWindow = document.getElementById('appWindow');
    appContent.textContent = `正在运行：${appName}`;
    appWindow.classList.remove('hidden');
}

// 关闭应用程序窗口
function closeApp() {
    const appWindow = document.getElementById('appWindow');
    appWindow.classList.add('hidden');
}

// 动态添加瓷砖
function addTile(name) {
    const tilesContainer = document.getElementById('tiles');
    const newTile = document.createElement('div');
    newTile.className = 'tile';
    newTile.textContent = name;
    newTile.onclick = () => openApp(name);
    tilesContainer.appendChild(newTile);
}

// 示例：动态添加瓷砖
addTile('动态App 1');
addTile('动态App 2');
