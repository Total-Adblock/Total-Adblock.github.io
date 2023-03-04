function getUserBrowser() {
  const userAgent = navigator.userAgent;
  if (userAgent.match(/edg/i)) {
    return 'edge';
  } else if (userAgent.match(/firefox|fxios/i)) {
    return 'firefox';
  } else if (userAgent.match(/opr\//i)) {
    return 'opera';
  } else if (userAgent.match(/chrome|chromium|crios/i)) {
    return 'chrome';
  } else if (userAgent.match(/safari/i)) {
    return 'safari';
  } else {
    return false;
  }
}