const detox = require('detox');
const adapter = require('detox/runners/jest/adapter');
const specReporter = require('detox/runners/jest/specReporter');
const assignReporter = require('detox/runners/jest/assignReporter');

detoxCircus.getEnv().addEventsListener(adapter);
detoxCircus.getEnv().addEventsListener(assignReporter);
detoxCircus.getEnv().addEventsListener(specReporter);

// Set the default timeout
jest.setTimeout(90000);

beforeAll(async () => {
  await detox.init();
}, 300000);

beforeEach(async () => {
  await adapter.beforeEach();
});

afterAll(async () => {
  await adapter.afterAll();
  await detox.cleanup();
});
