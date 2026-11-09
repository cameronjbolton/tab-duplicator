// Listen for the keyboard command
chrome.commands.onCommand.addListener((command) => {
  if (command === 'duplicate-tab') {
    // Get the current active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        const currentTab = tabs[0];
        
        // Duplicate the tab
        chrome.tabs.duplicate(currentTab.id, (newTab) => {
          // Optional: Focus the new tab
          // chrome.tabs.update(newTab.id, { active: true });
        });
      }
    });
  }
});
