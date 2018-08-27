import mqtt from '../packages/browserMqtt.js';

export default class MqttUtil {
  constructor() {

  }

  static initMqtt() {
    const client = mqtt.connect('wxs://0.0.0.0:7001', {
      // 心跳请求，单位s
      keepalive: 30,
      clientId: '1111',
      protocolId: 'MQTT'
    })

    // 与服务器建立连接
    client.on('connect', function() {
      // 订阅开锁信息
      client.subscribe(`draw/drawServer`)
    })

    client.on('message', function(topic, message, packet) {
      if (topic.indexOf('draw/drawServer') > -1) {
        // 处理开锁信息，关闭连接
        console.log('topic: ', topic);
        console.log('message: ', message);
        console.log('packet: ', packet);
        client.end()
      }
    })

    // 错误处理
    client.on('error', function(err) {
      console.error('mqtt err, ', err)
      client.end()
    })

    setTimeout(() => {
      client.publish('draw/drawClient', 'hello mqtt, my is Client');
    }, 10 * 1000)
  }
}