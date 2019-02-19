browser.runtime.onInstalled.addListener((details) => {
  console.log('previousVersion', details.previousVersion)
})

browser.tabs.onUpdated.addListener(async (tabId) => {
  browser.pageAction.show(tabId)
})

console.log(`'Allo 'Allo! Event Page for Page Action`)

const { version } = browser.runtime.getManifest();

browser.notifications.create({
  type: 'basic',
  title: browser.i18n.getMessage('notificationTitle'),
  message: browser.i18n.getMessage('notificationMessage', [version])
});
