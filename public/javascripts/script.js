function setupIndex() {
  require('./index')
}

function setupArticle() {
  require('./article')
}

function setupPublisher() {
  require('./publisher')
}


window.exportedFunctions = {
  "setupIndex": setupIndex,
  "setupArticle": setupArticle,
  "setupPublisher": setupPublisher,
};