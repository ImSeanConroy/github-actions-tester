const core = require('@actions/core');

function run() {
  const message = core.getInput('message', { required: true });
  core.notice(message);
}

run();


