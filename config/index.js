/**
 * build: 线上使用
 * dev: 测试环境
 * local: 本地调试
 */


export default {
  server: {
    dev: 'https://modular.idsmanager.com:8443/2FA',
  },
  // local: {
    client_id: 'GCDF1beBQHv2PFBgwkg9sflQ00koEmEW',
    redirect_uri: 'http://127.0.0.1:8889'
  // },
  // online: {
    // client_id: 'LjKWhpImFydVuaBsiZVYKcmBHC58r69i',
    // redirect_uri: 'https://modular.idsmanager.com:4433'
  // }
}