// This can be false if you're using a fallback (i.e. SPA mode)
export const prerender = false;
export const ssr = false;
export const csr = true;

import { init as initApm } from '@elastic/apm-rum'
var apm = initApm({
    // Set required service name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
    serviceName: 'awesome-front',
    // Set custom APM Server URL (default: http://localhost:8200)
    serverUrl: 'http://localhost:8200',
    // Set the service version (required for source map feature)
    serviceVersion: '',
    // Set the service environment
    environment: 'local',
    distributedTracingOrigins: ['http://localhost:8080'],
    propagateTracestate: true
})
