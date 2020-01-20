/* eslint-disable multiline-ternary */
let env = '';
let dev = location.hostname.indexOf('localhost') > -1 || location.host.split('-')[0] === 'dev';
let protocol = dev ? 'https:' : '';

if (dev || location.host.split('.')[0] === 't' || location.host.split('-')[0] === 't') {
    env = 't-';
} else if (location.host.split('.')[0] === 'pre' || location.host.split('-')[0] === 'pre') {
    env = 'pre-';
}
global.env = env;
global.baseURL = location.host;
global.edsBaseURL = `${protocol}//${env}ssm.gaodun.com`;
global.jsonplaceholderBaseURL = 'http://jsonplaceholder.typicode.com';
global.url_v = `//${env}v.gaodun.com`;
global.url_smart = `//${env}smart.gaodun.com`;
global.crmURL = `//${env}baiyi.gaodun.com`;
global.orderURL = `//${env}caishen.gaodun.com`;
global.crmApi = '';
// global.gdsid = dev ? window.getCookie('GDSID') : window.getCookie(`${env}GDSID`);
global.url_vigo = `${protocol}//${env}vigo.gaodun.com`;
global.url_care = `//${env}carenew.gaodun.com`;
global.url_apigateway = `https://${env}apigateway.gaodun.com`;
global.url_simg = `//${env}simg01.gaodunwangxiao.com`;
global.url_plan = `//${env}plan-api.gaodun.com`;
global.url_jerusalemapi = `//${env}jerusalemapi.gaodun.com`;
global.url_gcloud = `//${env}gcloud.gaodun.com`;
global.url_schoolService = `//${env}school-service.gaodun.com`;
global.url_schoolApi = `//${env}school-api.gaodun.com`;
global.url_courseService = `//${env}course-service.gaodun.com`;
global.apiEds = `//${env}eds-statistics.gaodun.com`;
// global.apiEds = '//192.168.169.205:3000';
